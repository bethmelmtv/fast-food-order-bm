export default function FoodDropDown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value={1}>Kitfo</option>
        <option value={2}>Tibs</option>
        <option value={3}>Doro Wat</option>
      </select>
    </div>
  );
}
