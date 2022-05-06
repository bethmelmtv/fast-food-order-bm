export default function SideItemDropDown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value={1}>Kik Wat</option>
        <option value={2}>Fossalia</option>
        <option value={3}>Lentils Sambussa</option>
      </select>
    </div>
  );
}
