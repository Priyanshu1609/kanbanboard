import { useState, useEffect } from "react";
import axios from "axios";
import { Data, Ticket, User } from "../types";

const useFetchData = () => {


  const fetchData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.quicksell.co/v1/internal/frontend-assignment",
      headers: {},
    };

    const res = await axios.request(config);
    const data: Data = res.data;
    return data;
  };

  return {
    fetchData,
  };
};

export default useFetchData;

// {
//     "tickets": [
//         {
//             "id": "CAM-1",
//             "title": "Update User Profile Page UI",
//             "tag": [
//                 "Feature request"
//             ],
//             "userId": "usr-1",
//             "status": "Todo",
//             "priority": 4
//         },
//      
//     ],
//     "users": [
//         {
//             "id": "usr-1",
//             "name": "Anoop sharma",
//             "available": false
//         },
//         {
//             "id": "usr-2",
//             "name": "Yogesh",
//             "available": true
//         },
//         {
//             "id": "usr-3",
//             "name": "Shankar Kumar",
//             "available": true
//         },
//         {
//             "id": "usr-4",
//             "name": "Ramesh",
//             "available": true
//         },
//         {
//             "id": "usr-5",
//             "name": "Suresh",
//             "available": true
//         }
//     ]
// }
