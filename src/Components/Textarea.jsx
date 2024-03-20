import React, {useState} from 'react'


const Textarea = () => {

    const [text, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value)
    }


  return (
    <div>
        <textarea value={text} onChange={handleText} cols="30" rows="20"></textarea>
    </div>
  )
}

export default Textarea