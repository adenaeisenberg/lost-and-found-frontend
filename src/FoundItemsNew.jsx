export function FoundItemsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFoundItem(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Found something? Post it here to find the owner!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Picture: <input name="image_url" type="text" />
        </div>
        <div>
          Location Found: <input name="location" type="text" />
        </div>
        <div>
          Date Found: <input name="date" type="text" />
        </div>
        <button type="submit">Submit found item</button>
      </form>
    </div>
  );
}
