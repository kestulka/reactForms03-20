import './App.css';
import React, {useState} from "react"
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Select from './Components/Select';
import Checkbox from './Components/Checkbox';
import Radio from "./Components/Radio"
import MultiInputs from './Components/MultiInputs';
import Acomp from "./Components/Acomp"
import Bcomp from './Components/Bcomp';

const App = () => {

  const [textShow, setTextShow] = useState("")

  const handleTextShow = (data) => {
    setTextShow(data)
  }

  return (
    <div className="App">
<>
{/* <Input />
<Textarea />
<Select />
<Checkbox />
<Radio />
<MultiInputs /> */}
<Acomp handleTextShow={handleTextShow}/>
<Bcomp text={textShow} />
</>
    </div>
  );
}

export default App;
