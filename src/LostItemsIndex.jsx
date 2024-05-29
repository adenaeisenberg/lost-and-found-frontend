import axios from "axios";
import { LostItemsNew } from "./LostItemsNew";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/* eslint-disable react/prop-types */
export function LostItemsIndex(props) {
  const handleCreateLostItem = (params, successCallback) => {
    console.log("handleCreateLostItem", params);
    axios.post("http://localhost:3000/lost_items.json", params).then((response) => {
      props.setLostItems([...props.lostItems, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>All Lost Items</h1>
      {props.lostItems.map((lostItem) => (
        <div key={lostItem.id}>
          <h2>{lostItem.name}</h2>
          <img src={lostItem.image_url} width="300" />
          {/* <p>Last Seen: {lostItem.last_seen}</p> */}
          <button onClick={() => props.onShowLostItem(lostItem)}>More info</button>
        </div>
      ))}
      <LostItemsNew onCreateLostItem={handleCreateLostItem} />
    </div>
  );
}

// Original code:
// return (
//   <div>
//     <h1>All Lost Items</h1>
//     {props.lostItems.map((lostItem) => (
//       <div key={lostItem.id}>
//         <h2>{lostItem.name}</h2>
//         <img src={lostItem.image_url} width="300" />
//         {/* <p>Last Seen: {lostItem.last_seen}</p> */}
//         <button onClick={() => props.onShowLostItem(lostItem)}>More info</button>
//       </div>
//     ))}
//     <LostItemsNew onCreateLostItem={handleCreateLostItem} />
//   </div>
// );
