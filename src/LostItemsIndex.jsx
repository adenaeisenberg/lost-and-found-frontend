/* eslint-disable react/prop-types */
export function LostItemsIndex(props) {
  return (
    <div>
      <h1>All Lost Items</h1>
      {props.lostItems.map((lostItem) => (
        <div key={lostItem.id}>
          <h2>{lostItem.name}</h2>
          <img src={lostItem.image_url} width="300" />
          {/* <p>Last Seen: {lostItem.last_seen}</p> */}
          <button onClick={() => props.onShowLostItem(lostItem)}>More info</button>
        </div>
      ))}
    </div>
  );
}
