import React, {useState} from 'react'

const Input = () => {
    const [text, setText] = useState("")
    const [textShow, setTextShow] = useState("")

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text)
        setText("")

        setTextShow(text)
    }

  return (
    <div>

        <input type="text" value={text} onChange={handleTextChange}></input>
        <p>{text}</p>

        <form onSubmit={handleSubmit}>

        <input type="text" value={text} onChange={handleTextChange}></input>
        <button type="submit">Submit</button>

        </form>

        <p>live text: {text}</p>
        <h1>post text: {textShow}</h1>

    </div>
  )
}

export default Input