import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { LoginContext } from "../context/LoginContext";

export default function Signin() {
    const navigate = useNavigate()
    // const { setUserLogin } = useContext(LoginContext)
    const [email,setEmail] = useState()
    const [password,setPassword]= useState()
    const [confirmpassword,setConfirmpassword]= useState()
    // const { setUserLogin } = useContext(LoginContext)
    const postData = () => {
        fetch('http://localhost:4000/api/user/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((res) => res.json()).then((data) => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))

                // setUserLogin(true)
                navigate('/')

            }
        })
    }
  return (
          <div className="bg-grey-lighter min-h-screen flex flex-col">
              <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                  <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                      <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                      {/* <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="username"
                          placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} /> */}

                      <input
                          type="email"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="email"
                          placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                      <input
                          type="password"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="password"
                          placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <input
                          type="password"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="confirm_password"
                          placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />

                      <button
                          type="submit"
                          className="w-full text-center py-3 rounded bg-lime-400 text-white hover:bg-green-dark focus:outline-none my-1"
                      onClick={() => { postData() }}>Login Account</button>

                      <div className="text-center text-sm text-grey-dark mt-4">
                          By signing up, you agree to the
                          <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                              Terms of Service
                          </a> and
                          <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                              Privacy Policy
                          </a>
                      </div>
                  </div>

                  <div className="text-grey-dark mt-6">
                      Don't have an account?
                  <Link to="/signup">
                      <span style={{ color: "blue", cursor: "pointer" }}>Sign up</span>
                  </Link>
                  </div>
              </div>
          </div>
  )
}
