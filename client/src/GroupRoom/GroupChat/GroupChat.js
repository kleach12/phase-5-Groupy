import Button from "react-bootstrap/esm/Button";
import "./GroupChat.css";

export default function GroupChat() {
  return (
    <div id="group_chat">
      <div id="groups_top">{/* this will be message area */}</div>
        <form id="bottom_chat">
          {/* <button> </button> */}
          <div contentEditable="true" className="chat_box"></div>
        </form>
      <div className="overflow"></div>
    </div>
  );
}
