// use ten stack query


import React from 'react'


const Users2 = () => {

   


    const handleDelete = () => {
      
      
      }
  return (
    <div>
      {/* <h2>Users : {users.length}</h2> */}

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
           <tr >
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src=''
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                      <div className="text-sm opacity-50"></div>
                    </div>
                  </div>
                </td>
                <td>
               
                  <br />
                  <span className="badge badge-ghost badge-sm">
                     </span>
                </td>
                <td>Purple</td>
                <th className="space-x-4">
                  <button className="btn btn-xs">v</button>
                  <button className="btn btn-xs">E</button>
                  <button
                    onClick={() => handleDelete()}
                    className="btn btn-xs"
                  >
                    D
                  </button>
                </th>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users2