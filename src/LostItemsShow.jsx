/* eslint-disable react/prop-types */

export function LostItemsShow(props) {
  return (
    <div>
      <h1>Lost Item information</h1>
      <p>Name: {props.lostItem.name}</p>
      <img src={props.lostItem.image_url} width="500"></img>
      <p>Last Seen: {props.lostItem.last_seen}</p>
    </div>
  );
}
