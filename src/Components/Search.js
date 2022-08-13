import "../assets/styles/Search.css"

export default function SearchComponent({city, changeCity}) {

    return (
        <input
          type="text"
          value={city}
          className="search-input"
          onChange={event => changeCity(event.target.value)} />
    )
}