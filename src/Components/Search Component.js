
export default function SearchComponent({city, changeCity}) {

    return (
        <input
          type="text"
          value={city}
          onChange={event => changeCity(event.target.value)} />
    )
}