import React, {useState} from 'react'

const Radio = () => {

    const [radio, setRadio] = useState("red")

    const handleRadio = (e) => {
        setRadio(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div onChange={handleRadio}>
        <input type="radio" name="colors" value="green" onChange={handleRadio} checked={radio ==="green"}/> green
        <input type="radio" name="colors" value="red" onChange={handleRadio} checked={radio ==="red"}/> red
        <input type="radio" name="colors" value="blue" onChange={handleRadio} checked={radio ==="blue"}/> blue
    </div>
  )
}

export default Radio