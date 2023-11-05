// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props

  const {name, imgUrl} = destinationsList

  return (
    <li>
      <img src={imgUrl} className="imageStyle" alt={name} />
      <p className="placeName ">{name}</p>
    </li>
  )
}

export default DestinationItem
