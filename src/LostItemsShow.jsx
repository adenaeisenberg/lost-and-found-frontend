export function LostItemsShow(props) {
  return (
    <div>
      <h1>Lost Item information</h1>
      <p>Name: {props.lostItem.name}</p>
      <p>Url: {props.lostItem.image_url}</p>
      <p>Last Seen: {props.lostItem.last_seen}</p>
    </div>
  );
}
