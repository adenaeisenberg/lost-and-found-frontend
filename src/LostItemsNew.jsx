export function LostItemsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateLostItem(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Missing something? Add your item here!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Picture: <input name="image_url" type="text" />
        </div>
        <div>
          Last Seen: <input name="last_seen" type="text" />
        </div>
        <button type="submit">Submit your missing item</button>
      </form>
    </div>
  );
}
