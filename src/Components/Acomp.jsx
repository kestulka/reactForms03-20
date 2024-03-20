import React, {useState} from 'react'

const Acomp = ({handleTextShow}) => {
    const [text, setText] = useState("")

    const handleTextChange = (e) => {
        setText(e.target.value)
        handleTextShow(e.target.value)
    }

  return (
    
<>

        <input type="text"  value={text} onChange={handleTextChange} />
        </>
  
  )

}

export default Acomp