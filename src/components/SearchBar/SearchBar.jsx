const SearchBar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="imageName" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
