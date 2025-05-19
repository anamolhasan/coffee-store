import React from 'react'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {


    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        createUser,
        signInUser,
    }

  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider