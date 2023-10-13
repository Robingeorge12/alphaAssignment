import axios from "axios"
import * as types from "./actionType"
  

// function generateAuthorizationHeader(username, password) {
//     const token = `${username}:${password}`;
//     const encodedToken = btoa(token); // Encode in Base64
//     return `Basic ${encodedToken}`;
//   }
  
//   const username = 'kreditbee';
//   const password = '123456';

//   const headers = {
//     Authorization: generateAuthorizationHeader(username, password),
//     'Content-Type': 'application/json',
//   };

 


export const getData = (headers)=>(dispatch)=>{

    dispatch({type:types.DATA_REQUEST,payload:[]})
    return axios.get(`https://lms29api.buynsta.com/main/eligible/kreditbee`,{headers: headers,}).then((res)=>{

// return dispatch({type:types.DATA_SUCCESS,payload:res.data.msg})
console.log(res)

}).catch((er)=>{
    
    dispatch({type:types.DATA_FAILURE,payload:[]})
    console.log(er)
})


}

// export const postData = (payload)=>(dispatch)=>{

// return axios.post(`https://assignmentalhasant.onrender.com/todoget/createtask`,payload).then((res)=>{


// return dispatch({type:types.TODO_POST_SUCCESS,payload:res.data})

// }).catch((er)=>{
//     console.log(er)
// })

// }

// export const putData = (id,payload)=>(dispatch)=>{

// return axios.put(`https://assignmentalhasant.onrender.com/todoget/change/${id}`,payload).then((res)=>{

   
//   return  dispatch({type:types.TODO_UPDATE_SUCCESS,payload:res.data})
    
//     }).catch((er)=>{
//         console.log(er)
//     })
    

// }

// export const deleteTodo = (id)=>(dispatch)=>{

// return axios.delete(`https://assignmentalhasant.onrender.com/todoget/${id}`).then((res)=>{


// return dispatch({type:types.TODO_DELETE_SUCCESS,payload:res.data.msg})

// }).catch((er)=>{
//     console.log(er)
// })

// }