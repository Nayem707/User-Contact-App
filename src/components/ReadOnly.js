import React from "react";

const ReadOnly = ({ user, handaleEdit, handaleDele }) => {
  return (
    <tr>
      <td>{user.fname}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>

      <td>
        <button
          type="button"
          onClick={(e) => handaleEdit(e, user)}
          className="btn btn-outline-success">
          Edit
        </button>
        <button
          type="button"
          onClick={() => handaleDele(user.id)}
          className="btn btn-outline-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;
