import React, {useState} from 'react'

const Select = () => {

    const [select, setSelect] = useState("blue")

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }
    console.log(select)


  return (
    <div>
        <select onChange={handleSelect} value={select}>
            <option value="red">red</option>
            <option value="green">gryn</option>
            <option value="blue">bliu</option>
        </select>
        <p style={{backgroundColor: select}}>imu spalva is optionu</p>
    </div>
  )
}

export default Select