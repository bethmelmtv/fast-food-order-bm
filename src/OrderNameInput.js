

export default function OrderNameInput( {setOrderName }) {
  return (
  <input onChange={(e) =>setOrderName(e.target.value)}>
  </input>
  )
}