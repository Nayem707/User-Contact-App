/* eslint-disable react-hooks/rules-of-hooks */
import { nanoid } from "nanoid";
import React, { Fragment, useState } from "react";
import Data from "../data/Data.json";
import Edit from "../Edit";
import ReadOnly from "../ReadOnly";
import "./home.css";

const home = () => {
  const [contacts, SetContacts] = useState(Data);

  const [addData, setAddData] = useState({
    fname: "",
    address: "",
    phone: "",
    email: "",
  });

  const [editData, setEditData] = useState({
    fname: "",
    address: "",
    phone: "",
    email: "",
  });

  const [edituserId, setedituserId] = useState(null);

  //handle form validation
  const handleFrom = (e) => {
    e.preventDefault();
    const fildName = e.target.getAttribute("name");
    const fildValue = e.target.value;

    const newData = { ...addData };
    newData[fildName] = fildValue;

    setAddData(newData);
  };
  //handle form validation ->

  //handale Edit
  const handaleEditFrorm = (e) => {
    e.preventDefault();

    const fildName = e.target.getAttribute("name");
    const fildValue = e.target.value;

    const newFormData = { ...editData };
    newFormData[fildName] = fildValue;
    setEditData(newFormData);
  };
  //handale Edit

  //->handale form submit
  const handaleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fname: addData.fname,
      address: addData.address,
      phone: addData.phone,
      email: addData.email,
    };
    const newContacts = [...contacts, newContact];
    SetContacts(newContacts);
  };
  //handale form submit ->

  //->handale Edit form
  const handaleEdit = (e, user) => {
    e.preventDefault();
    setedituserId(user.id);
    const formValues = {
      id: nanoid(),
      fname: user.fname,
      address: user.address,
      phone: user.phone,
      email: user.email,
    };
    setEditData(formValues);
  };
  //handale Edit form ->

  //->handale edit form submit
  const handaleEditSubmit = (e) => {
    e.preventDefault();
    const editUser = {
      id: edituserId,
      fname: editData.fname,
      address: editData.address,
      phone: editData.phone,
      email: editData.email,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((user) => user.id === edituserId);
    newContacts[index] = editUser;
    SetContacts(newContacts);
    setedituserId(null);
  };
  //handale edit form submit->

  //->handale cancel form submit
  const handleRemove = () => {
    setedituserId(null);
  };
  //handale cancel form submit->

  //-> handale delete
  const handaleDele = (userId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((user) => user.id === userId);

    newContacts.splice(index, 1);
    SetContacts(newContacts);
  };
  //handale delete->
  return (
    <section>
      <div className="container">
        <h1 className="mt-2 text-center">Contact</h1>
        <form onSubmit={handaleEditSubmit}>
          <table className="table mt-2">
            <thead className="bg-dark text-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">E-mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((user) => {
                return (
                  <Fragment key={user.id}>
                    {edituserId === user.id ? (
                      <Edit
                        editData={editData}
                        handaleEditFrorm={handaleEditFrorm}
                        handleRemove={handleRemove}
                      />
                    ) : (
                      <ReadOnly
                        handaleDele={handaleDele}
                        user={user}
                        handaleEdit={handaleEdit}
                      />
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </form>

        <form onSubmit={handaleSubmit}>
          <h1 className="mt-5 text-center">
            Add to
            <span className="conta-span-new text-light"> New </span>
            Contact
          </h1>
          <div className="row mt-5 mb-5">
            <div className="col-lg-3 ">
              <input
                type="text"
                name="fname"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleFrom}
              />
            </div>
            <div className="col-lg-2">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                required
                onChange={handleFrom}
              />
            </div>
            <div className="col-lg-2">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                required
                onChange={handleFrom}
              />
            </div>
            <div className="col-lg-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
                required
                onChange={handleFrom}
              />
            </div>
            <div className="col-lg-2">
              <button className="btn btn-success">Add</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default home;
