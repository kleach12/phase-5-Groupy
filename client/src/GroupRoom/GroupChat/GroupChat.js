import { useRef, useState } from "react";
// import Button from "react-bootstrap/esm/Button";
import ContentEditable from "react-contenteditable";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import GroupChatMessage from "./GroupChatMessage/GroupChatMessage";
import "./GroupChat.css";

export default function GroupChat() {
  // const text = useRef('');
  const formRef = useRef();
  const [message, setMessage] = useState("");

  const handleChange = (evt) => {
    // console.log(evt.target.value)
    setMessage(evt.target.value);
  };

  // const handleBlur = () => {
  //   setMessage(text.current);
  // };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    setMessage("");
  }

  return (
    <div id="group_chat">
      <div id="groups_top">
        <GroupChatMessage />
      </div>
      <form id="bottom_chat" onSubmit={(e) => handleSubmit(e)} ref={formRef}>
        {/* <button> </button> */}
        <ContentEditable
          html={message}
          className="chat_box"
          suppressContentEditableWarning={true}
          // onBlur={handleBlur}
          onChange={handleChange}
        />
        <BsFillArrowRightSquareFill className="send_message_btn" />
      </form>
      <div className="overflow"></div>
    </div>
  );
}
