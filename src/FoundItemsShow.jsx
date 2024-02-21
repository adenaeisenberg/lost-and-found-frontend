/* eslint-disable react/prop-types */

export function FoundItemsShow(props) {
  return (
    <div>
      <h1>Found Item information</h1>
      <p>Name: {props.foundItem.name}</p>
      <img src={props.foundItem.image_url} width="500"></img>
      <p>Last Seen: {props.foundItem.last_seen}</p>
    </div>
  );
}
