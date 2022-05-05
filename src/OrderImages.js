export default function OrderImages ({foodId, sideId, drinkId }) {
  return (
    <div>
      <img src = {`./bev-${drinkId}.png`} />
      <img src = {`./food-${foodId}.png`} />
      <img src = {`./side-${sideId}.png`}/>
    </div>

  )
} 