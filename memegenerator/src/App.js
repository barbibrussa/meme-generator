import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [image, setImage] = useState('');

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

      <div>
        <img src={"/img/" + image + ".jpg"}/>
      </div>
    </div>
  );
}

export default App;
