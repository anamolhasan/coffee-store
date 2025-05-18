import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Swal from 'sweetalert2'

const SignUp = () => {

  const { createUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    // const newUser = Object.fromEntries(formData.entries())

    const { email, password, ...userProfile } = Object.fromEntries(formData.entries())

    console.log(email, password, userProfile)

    // create user in the firebase
    createUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user)

        // save user info in the database
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userProfile)
        })
          .then(res => res.json())
          .then(data => {
            console.log('after profile save', data)
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="card bg-base-100  max-w-md mx-auto shrink-0 shadow-2xl mt-20">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Sign up now!</h1>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name" />
          <label className="label">address</label>
          <input type="text" name='address' className="input" placeholder="address" />
          <label className="label">phone</label>
          <input type="text" name='phone' className="input" placeholder="phone" />
          <label className="label">photo</label>
          <input type="text" name='photo' className="input" placeholder="photo" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp