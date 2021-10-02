import './App.css';
import {useState} from "react";

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [image, setImage] = useState('');

  const onChangeInput1 = function (event) {
    setInput1(event.target.value);
  }

  const onChangeInput2 = function (event) {
    setInput2(event.target.value);
  }

  const onChangeImage = function (event) {
    setImage(event.target.value);
  }

  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">Aliens</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br/>
      <input onChange={onChangeInput1} type="text"/> <br/>
      <input onChange={onChangeInput2} type="text"/> <br/>

      <div>
        <span>{input1}</span> <br/>
        <span>{input2}</span>
        <img src={"/img/" + image + ".jpg"}/>
      </div>
    </div>
  );
}

export default App;
