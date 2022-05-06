export default function DrinkDropDown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value={1}>Ethiopian Coffee</option>
        <option value={2}>Tej</option>
        <option value={3}>Ethiopian Tea</option>
      </select>
    </div>
  );
}
