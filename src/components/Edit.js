import React from "react";

const Edit = ({ editData, handaleEditFrorm, handleRemove }) => {
  return (
    <tr>
      <td>
        <input
          value={editData.fname}
          type="text"
          required="requred"
          placeholder="Edit Name..."
          name="fname"
          className="form-control"
          onChange={handaleEditFrorm}
        />
      </td>
      <td>
        <input
          value={editData.address}
          type="text"
          required="requred"
          placeholder="Edit Address..."
          name="address"
          className="form-control"
          onChange={handaleEditFrorm}
        />
      </td>

      <td>
        <input
          value={editData.phone}
          type="text"
          required="requred"
          placeholder="Edit Phone..."
          name="phone"
          className="form-control"
          onChange={handaleEditFrorm}
        />
      </td>

      <td>
        <input
          value={editData.email}
          type="text"
          required="requred"
          placeholder="Edit Email..."
          name="email"
          className="form-control"
          onChange={handaleEditFrorm}
        />
      </td>
      <td>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button onClick={handleRemove} type="button" className="btn btn-danger">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Edit;
