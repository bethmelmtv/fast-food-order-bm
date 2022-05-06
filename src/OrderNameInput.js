export default function OrderNameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return (
    <label>
      Order Name
      <input onChange={handleChange} />
    </label>
  );
}
