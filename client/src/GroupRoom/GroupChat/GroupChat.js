import { useEffect, useRef, useState } from "react";
// import Button from "react-bootstrap/esm/Button";
import ContentEditable from "react-contenteditable";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import GroupChatMessage from "./GroupChatMessage/GroupChatMessage";
import "./GroupChat.css";

export default function GroupChat({ viewingGroup }) {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [groupMessages, setGroupMessages] = useState([]);
  const [rerender, setRerender] = useState(false);

  console.log(viewingGroup);
  const handleChange = (evt) => {
    // console.log(evt.target.value)
    setMessage(evt.target.value);
  };

  useEffect(() => {
    fetch(`/group_messages/${viewingGroup.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setGroupMessages(data);
          // setRerender(!rerender)
        }
      });
  }, [rerender]);

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
      fetch("/messages", {
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
            console.log(data);
            // setErrorMessage("A Profile Picture is required");
            // setTimeout(() => {
            //   setErrorMessage(null);
            // }, 5000);
          } else {
            console.log(data);
            setMessage("");
            setRerender(!rerender);
          }
        })
        .catch((error) => console.error(error));
    }
  }

  const mappedMessages = groupMessages.map((message) => {
    return <GroupChatMessage message={message} className="overflow" />;
  });

  return (
    <div id="group_chat">
      <div id="group_top">
        <h2> {viewingGroup.name} </h2>
      </div>
      <div className="overflow">
      {mappedMessages}
      </div>
      <div className="fixed_pos">
        <form id="bottom_chat" onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <ContentEditable
            html={message}
            className="chat_box"
            suppressContentEditableWarning={true}
            // onBlur={handleBlur}
            onChange={handleChange}
          />

          <button>
            {" "}
            <BsFillArrowRightSquareFill className="send_message_btn" />{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
