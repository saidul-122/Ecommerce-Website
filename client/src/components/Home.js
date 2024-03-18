import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
 
export default function Home() {
  const navigate = useNavigate();
  const [data,setData]= useState([])
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("./signup");
    }

    // Fetching all posts
    fetch("http://localhost:5000/api/user/all_products", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>homeComponent</div>
  )
}
