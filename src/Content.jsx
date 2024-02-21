import axios from "axios";
import { useState, useEffect } from "react";
import { LostItemsIndex } from "./LostItemsIndex";
import { LostItemsNew } from "./LostItemsNew";
import { LostItemsShow } from "./LostItemsShow";
import { Modal } from "./Modal";

export function Content() {
  const [lostItems, setLostItems] = useState([]);
  const [isLostItemsShowVisible, setIsLostItemsShowVisible] = useState(false);
  const [currentLostItem, setCurrentLostItem] = useState({});

  const handleIndexLostItems = () => {
    console.log("handleIndexLostItems");
    axios.get("http://localhost:3000/lost_items.json").then((response) => {
      console.log(response.data);
      setLostItems(response.data);
    });
  };

  const handleCreateLostItem = (params, successCallback) => {
    console.log("handleCreateLostItem", params);
    axios.post("http://localhost:3000/lost_items.json", params).then((response) => {
      setLostItems([...lostItems, response.data]);
      successCallback();
    });
  };

  const handleShowLostItem = (lostItem) => {
    console.log("handleShowLostItem", lostItem);
    setIsLostItemsShowVisible(true);
    setCurrentLostItem(lostItem);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsLostItemsShowVisible(false);
  };

  useEffect(handleIndexLostItems, []);

  return (
    <div>
      <h1>Lost&Found</h1>
      <LostItemsIndex lostItems={lostItems} onShowLostItem={handleShowLostItem} />
      <LostItemsNew onCreateLostItem={handleCreateLostItem} />
      <Modal show={isLostItemsShowVisible} onClose={handleClose}>
        <LostItemsShow lostItem={currentLostItem} />
      </Modal>
    </div>
  );
}
