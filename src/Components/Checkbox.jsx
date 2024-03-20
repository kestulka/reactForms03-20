import React, {useState} from 'react'


const Checkbox = () => {

    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck((checked) => (checked ? false : true));
    }

  return (
    <div>
        <input type="checkbox" onChange={handleCheck} checked={check} />
    </div>
  )
}

export default Checkbox