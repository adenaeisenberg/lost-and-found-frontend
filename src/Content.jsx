import axios from "axios";
import { useState, useEffect } from "react";
import { LostItemsIndex } from "./LostItemsIndex";
import { LostItemsShow } from "./LostItemsShow";
import { FoundItemsIndex } from "./FoundItemsIndex";
import { FoundItemsShow } from "./FoundItemsShow";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Signup } from "./Signup";
// import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

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
    <div className="container">
      {/* <h1>Lost&Found</h1> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/lostitems"
          element={
            <>
              <LostItemsIndex lostItems={lostItems} onShowLostItem={handleShowLostItem} setLostItems={setLostItems} />
              <Modal show={isLostItemsShowVisible} onClose={handleLostItemClose}>
                <LostItemsShow lostItem={currentLostItem} />
              </Modal>
            </>
          }
        />
        <Route
          path="/founditems"
          element={
            <>
              <FoundItemsIndex
                foundItems={foundItems}
                onShowFoundItem={handleShowFoundItem}
                setFoundItems={setFoundItems}
              />
              <Modal show={isFoundItemsShowVisible} onClose={handleFoundItemClose}>
                <FoundItemsShow foundItem={currentFoundItem} />
              </Modal>
            </>
          }
        />
      </Routes>

      {/* <LogoutLink /> */}
    </div>
  );
}
