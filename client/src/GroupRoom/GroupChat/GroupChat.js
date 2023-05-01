import { useEffect, useRef, useState, useContext } from "react";
// import Button from "react-bootstrap/esm/Button";
import ContentEditable from "react-contenteditable";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import GroupChatMessage from "./GroupChatMessage/GroupChatMessage";
import "./GroupChat.css";
import { AllContext } from "../../AllContext";


export default function GroupChat({groupMessages, setGroupMessages}) {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  // const [groupMessages, setGroupMessages] = useState([]);
  const { theme, } = useContext(AllContext);
  const { viewingGroup } = useContext(AllContext);
  const bottomRef = useRef(null);

  const handleChange = (evt) => {
    // console.log(evt.target.value)
    setMessage(evt.target.value);
  };

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [groupMessages]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("comment", message);
    data.append("group_id", viewingGroup.id);

    submitToAPI(data, e);
    // Use an appropriate url
    // bkl
    function submitToAPI(data, e) {
      e.preventDefault();
      fetch("/api/messages", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            console.log(data.errors);
            // setErrorMessage(data.errors[0]);
            // setTimeout(() => {
            //   setErrorMessage(null);
            // }, 5000);
          } else if (data.error) {
            console.log(data.error);
            // setErrorMessage("A Profile Picture is required");
            // setTimeout(() => {
            //   setErrorMessage(null);
            // }, 5000);
          } else {
            // console.log(data)
            setMessage("");
           
          }
        })
        .catch((error) => console.error(error));
    }
  }

  const mappedMessages = groupMessages.map((message) => {
    return (
      <GroupChatMessage
        key={message.id}
        message={message}
        className="overflow"
      />
    );
  });

  return (
    <div id={"group_chat_" + theme}>
      <div id="group_top">
        <h2 id={"group_title_" + theme}> {viewingGroup.name} </h2>
      </div>
      <div className="overflow">{mappedMessages}
      <div ref={bottomRef} > </div>
      </div>
      {/* <div ref={bottomRef} > </div> */}
      <div className="fixed_pos">
        <form
          id={"bottom_chat_" + theme}
          onSubmit={(e) => handleSubmit(e)}
          ref={formRef}
        >
          <ContentEditable
            html={message}
            className="chat_box"
            suppressContentEditableWarning={true}
            // onBlur={handleBlur}
            onChange={handleChange}
          />
          <button id={"submit_message_" + theme}>
            {" "}
            <BsFillArrowRightSquareFill
              className={"send_message_btn_" + theme}
            />{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
