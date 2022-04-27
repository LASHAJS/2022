import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddPost = ({ contacts, addContact }) => {
    const[name,setName] = useState("");
    const[lastname,setLastname] = useState("");
    const[age,setAge] = useState("");
    const[address,setAddress] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactNameExists = contacts.filter((contact) =>
      contact.name === name ? contact : null
    );
    const checkContactLastnameExists = contacts.filter((contact) =>
      contact.lastname === lastname ? contact : null
    );

    if (!name || !lastname || !age || !address) {
      return toast.warning("შეავსეთ ყველა ველი");
    }
    if (checkContactNameExists.length > 0) {
      return toast.error("ეს სახელი უკვე არსებობს");
    }
    if (checkContactLastnameExists.length > 0) {
      return toast.error("ეს გვარი უკვე არსებობს");
    }
    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      name,
      lastname,
      age,
      address,

    };

    addContact(data);
    toast.success("დაემატა");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">დამატება</h1>
      <div className="row">
        
        <div className="col-md-6 p-5 mx-auto shadow">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          უკან დაბრუნება
        </button>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="სახელი"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="გვარი"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="ასაკი"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="მისამართი"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="დამატება"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contactReducer,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
