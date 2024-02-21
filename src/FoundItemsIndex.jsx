export function FoundItemsIndex(props) {
  return (
    <div>
      <h1>All Found Items</h1>
      {props.foundItems.map((foundItem) => (
        <div key={foundItem.id}>
          <h2>{foundItem.name}</h2>
          <img src={foundItem.image_url} width="300" />
          <p>Location: {foundItem.location}</p>
          <p>Date Found: {foundItem.date}</p>
          {/* <button onClick={() => props.onShowFoundItem(foundItem)}>More info</button> */}
        </div>
      ))}
    </div>
  );
}
