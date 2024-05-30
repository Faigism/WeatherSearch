const SearchBox = ({ inputValue, onInputChange }) => {
  return (
    <div className="search-box">
      <i className="bx bxs-map"></i>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter country name"
      />
    </div>
  )
}
export default SearchBox
