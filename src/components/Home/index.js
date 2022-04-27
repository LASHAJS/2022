import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Modal, Button} from 'react-bootstrap'

const Home = ({ contacts, deleteContact }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeModal = (id) => {
    deleteContact(id)
  handleClose()
  }
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
         დამატება
        </Link>
        <div className="col-md-12 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">სახელი</th>
                <th scope="col">გვარი</th>
                <th scope="col">ასაკი</th>
                <th scope="col">მისამართი</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.lastname}</td>
                    <td>{contact.age}</td>
                    <td>{contact.address}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        შესწორება
                      </Link>
                      <Button className="btn btn-sm btn-danger ml-1" variant="primary" onClick={handleShow}>
                        წაშლა
                      </Button>
                      <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                              >
                                <Modal.Header>
                                </Modal.Header>
                                <Modal.Body>
                                ნამდვილად გინდა წაშლა?
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose}>
                                    არა
                                  </Button>
                                  <Button  variant="primary" onClick={() => closeModal(contact.id)} >დიახ</Button>
                                </Modal.Footer>
                              </Modal>
                     
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>ცხრილი ცარიელია</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
                             
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contactReducer,
});

const mapDispatchToProps = (dispatch) => ({
    deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
