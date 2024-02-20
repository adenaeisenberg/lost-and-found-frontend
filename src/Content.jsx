import axios from "axios";
import { useState, useEffect } from "react";
import { LostItemsIndex } from "./LostItemsIndex";

export function Content() {
  const [lostItems, setLostItems] = useState([]);

  const handleIndexLostItems = () => {
    console.log("handleIndexLostItems");
    axios.get("http://localhost:3000/lost_items.json").then((response) => {
      console.log(response.data);
      setLostItems(response.data);
    });
  };

  useEffect(handleIndexLostItems, []);

  return (
    <div>
      <h1>Lost&Found</h1>
      <LostItemsIndex lostItems={lostItems} />
    </div>
  );
}
