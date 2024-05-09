/* eslint-disable react/prop-types */

import { FoundItemsNew } from "./FoundItemsNew";
import axios from "axios";

export function FoundItemsIndex(props) {
  const handleCreateFoundItem = (params, successCallback) => {
    console.log("handleCreateFoundItem", params);
    axios.post("http://localhost:3000/found_items.json", params).then((response) => {
      props.setFoundItems([...props.foundItems, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>All Found Items</h1>
      <div className="card-deck">
        <div>
          {props.foundItems.map((foundItem) => (
            <div key={foundItem.id} className="card">
              <img src={foundItem.image_url} alt="Card image cap" width="300" />
              {/* <img className="card-img-top" src={foundItem.image_url} alt="Card image cap" width="30" /> */}

              <div className="card-body">
                <h5 className="card-title">Card title: {foundItem.name} </h5>
                <p className="card-text">Location: {foundItem.location}</p>
                <p className="card-text">Date Found: {foundItem.date}</p>
                <button className="btn btn-primary" onClick={() => props.onShowFoundItem(foundItem)}>
                  More info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
      <FoundItemsNew onCreateFoundItem={handleCreateFoundItem} />
    </div>
  );
}

{
  /* <div>
      <h1>All Found Items</h1>
      {props.foundItems.map((foundItem) => (
        <div key={foundItem.id}>
          <h2>{foundItem.name}</h2>
          <img src={foundItem.image_url} width="300" />
          <p>Location: {foundItem.location}</p>
          <p>Date Found: {foundItem.date}</p>
          <button onClick={() => props.onShowFoundItem(foundItem)}>More info</button>
        </div>
      ))}
      <FoundItemsNew onCreateFoundItem={handleCreateFoundItem} />
    </div> */
}
