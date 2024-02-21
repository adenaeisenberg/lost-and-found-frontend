import axios from "axios";
import { useState, useEffect } from "react";
import { LostItemsIndex } from "./LostItemsIndex";
import { LostItemsNew } from "./LostItemsNew";
import { LostItemsShow } from "./LostItemsShow";
import { FoundItemsIndex } from "./FoundItemsIndex";
import { FoundItemsNew } from "./FoundItemsNew";
import { FoundItemsShow } from "./FoundItemsShow";
import { Modal } from "./Modal";

export function Content() {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [isLostItemsShowVisible, setIsLostItemsShowVisible] = useState(false);
  const [currentLostItem, setCurrentLostItem] = useState({});

  const [isFoundItemsShowVisible, setIsFoundItemsShowVisible] = useState(false);
  const [currentFoundItem, setCurrentFoundItem] = useState({});

  const handleIndexLostItems = () => {
    console.log("handleIndexLostItems");
    axios.get("http://localhost:3000/lost_items.json").then((response) => {
      console.log(response.data);
      setLostItems(response.data);
    });
  };

  const handleIndexFoundItems = () => {
    console.log("handleIndexFoundItems");
    axios.get("http://localhost:3000/found_items.json").then((response) => {
      console.log(response.data);
      setFoundItems(response.data);
    });
  };

  const handleCreateLostItem = (params, successCallback) => {
    console.log("handleCreateLostItem", params);
    axios.post("http://localhost:3000/lost_items.json", params).then((response) => {
      setLostItems([...lostItems, response.data]);
      successCallback();
    });
  };
  const handleCreateFoundItem = (params, successCallback) => {
    console.log("handleCreateFoundItem", params);
    axios.post("http://localhost:3000/found_items.json", params).then((response) => {
      setFoundItems([...lostItems, response.data]);
      successCallback();
    });
  };

  const handleShowLostItem = (lostItem) => {
    console.log("handleShowLostItem", lostItem);
    setIsLostItemsShowVisible(true);
    setCurrentLostItem(lostItem);
  };

  const handleLostItemClose = () => {
    console.log("handleLostItemClose");
    setIsLostItemsShowVisible(false);
  };

  const handleShowFoundItem = (foundItem) => {
    console.log("handleShowFoundItem", foundItem);
    setIsFoundItemsShowVisible(true);
    setCurrentFoundItem(foundItem);
  };

  const handleFoundItemClose = () => {
    console.log("handleFoundItemClose");
    setIsFoundItemsShowVisible(false);
  };

  useEffect(handleIndexLostItems, []);
  useEffect(handleIndexFoundItems, []);

  return (
    <div>
      <h1>Lost&Found</h1>
      <LostItemsIndex lostItems={lostItems} onShowLostItem={handleShowLostItem} />
      <LostItemsNew onCreateLostItem={handleCreateLostItem} />
      <Modal show={isLostItemsShowVisible} onClose={handleLostItemClose}>
        <LostItemsShow lostItem={currentLostItem} />
      </Modal>
      <FoundItemsIndex foundItems={foundItems} onShowFoundItem={handleShowFoundItem} />
      <Modal show={isFoundItemsShowVisible} onClose={handleFoundItemClose}>
        <FoundItemsShow foundItem={currentFoundItem} />
      </Modal>
      <FoundItemsNew onCreateFoundItem={handleCreateFoundItem} />
    </div>
  );
}
