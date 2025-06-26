import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
  
  };

  
  return (
    <div>
      <h2>Users : {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user.phone}
                  </span>
                </td>
                <td>Purple</td>
                <th className="space-x-4">
                  <button className="btn btn-xs">v</button>
                  <button className="btn btn-xs">E</button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs"
                  >
                    D
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
