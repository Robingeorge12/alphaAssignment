import React, { useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { getData } from "../../Redux/app/action";
import { useSelector, useDispatch } from "react-redux";

function generateAuthorizationHeader(username, password) {
  const token = `${username}:${password}`;
  const encodedToken = btoa(token); // Encode in Base64
  return `Basic ${encodedToken}`;
}

function Dashboard() {
  const dispatch = useDispatch();
  const username = 'kreditbee';
  const password = '123456';

  const headers = {
    Authorization: generateAuthorizationHeader(username, password),
      'Content-Type': 'application/json',
  };


  const handleAuth = (headers)=>{

    console.log(headers)

    dispatch(getData(headers));

  }

  // const { Data } = useSelector((state) => {
  //   return {
  //     Data: state.Data,
  //   };
  // });

  // useEffect(() => {
    // dispatch(getData());
  // }, []);

  // console.log(Data);

  return( 
  <div className="a">
<button onClick={()=>handleAuth(headers)}> click</button>

</div>
  );
}

export default Dashboard;


















// fetch(`https://lms29api.buynsta.com/main/eligible/kreditbee`, {
//   method: "GET",
//   headers: {

//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
   
//     console.log(data);
//   })
//   .catch((error) => console.log(error));