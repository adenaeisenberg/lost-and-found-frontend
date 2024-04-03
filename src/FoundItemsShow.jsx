/* eslint-disable react/prop-types */

export function FoundItemsShow(props) {
  return (
    <div>
      <h1>Found Item information</h1>
      <p>Name: {props.foundItem.name}</p>
      <img src={props.foundItem.image_url} width="500"></img>
      <p>Location Found: {props.foundItem.location}</p>
      <p>Found On: {props.foundItem.date}</p>
    </div>
  );
}
