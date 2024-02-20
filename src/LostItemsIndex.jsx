export function LostItemsIndex(props) {
  return (
    <div>
      <h1>All Lost Items</h1>
      {props.lostItems.map((lostItem) => (
        <div key={lostItem.id}>
          <h2>{lostItem.name}</h2>
          <img src={lostItem.image_url} />
          <p>Last Seen: {lostItem.last_seen}</p>
        </div>
      ))}
    </div>
  );
}
