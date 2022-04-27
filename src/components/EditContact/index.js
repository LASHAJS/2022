import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
            setName(currentContact.name);
            setLastname(currentContact.lastname);
            setAge(currentContact.age);
            setAddress(currentContact.address);
  }, [currentContact]);

    const[name,setName] = useState("");
    const[lastname,setLastname] = useState("");
    const[age,setAge] = useState("");
    const[address,setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactNameExists = contacts.filter((contact) =>
      contact.name === name && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactLastnameExists = contacts.filter((contact) =>
      contact.lastname === lastname && contact.id !== currentContact.id
        ? contact
        : null
    );

    if (!name || !lastname || !age || !address) {
      return toast.warning("შეავსეთ ყველა ველი");
    }
    if (checkContactNameExists.length > 0) {
      return toast.error("ეს სახელი უკვე არსებობს");
    }
    if (checkContactLastnameExists.length > 0) {
      return toast.error("ს გვარი უკვე არსებობს");
    }
  const data = {
      id: currentContact.id,
      name,
      lastname,
      age,
      address
  };
    updateContact(data);
    toast.success("განახლებულია");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          უკან დაბრუნება
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"სახელი"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={lastname}
                  placeholder={"გვარი"}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={age}
                  placeholder={"ასაკი"}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={address}
                  placeholder={"მისამართი"}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  განახლება
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  გაუქმება
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">არავინ მოიძებნა</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
