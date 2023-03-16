import "./NewGroup.css";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
export default function NewGroup({ show, setShow }) {
  const cities  = [{
    label: 'Los Angeles',
    value: 'Los Angeles'
  },
  {
    label: 'Sacramento',
    value: 'Sacramento'
  },
  {
    label: 'San Diego',
    value: 'San Diego'
  },
  {
    label: 'San Francisco',
    value: 'San Francisco'
  },
  {
    label: 'San Jose',
    value: 'San Jose'
  }]
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="sign_up_modal"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal_title">
          Create A Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="sign_up_form" name="sign_up_form">
          <input
            className="sign_up_text"
            type="type"
            placeholder="Group Name"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          <Select
            id="city"
            name="city"
            label="city"
            className="sign_up_select"
            options={cities}
            // value={cities || ""}
            // onChange={(e) => handleCountry(e)}
            placeholder={<div>Select Country...</div>}
          />

          {/* <CoStCi
            setuserCounty={setuserCounty}
            setUserState={setUserState}
            setUserCity={setUserCity}
          /> */}
          {/* <label id="file_label"> Profile Picture </label>
          <input
            className="edit_input_text"
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          /> */}
          {/* <div id="modal_foot">
            <h2 className="error_message">
              {errorMessage ? errorMessage : null}
            </h2> */}
          <input
            type="button"
            className="create_group_btn"
            id="create_group_btn"
            name="create_group_btnn"
            // onClick={(e) => handleSumbit(e)}
            value="Create Group"
          />
          {/* {" "}
            Sign Up{" "}
          </input> */}
          {/* </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
}
