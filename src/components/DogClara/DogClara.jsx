import { useState } from "react";
import concatDogAndClaraName from "../../utilitis/concatDogAndClaraName";

const DogClara = ({ name }) => {
  const [show, setShow] = useState(false);
  return (<div>
    <button onClick={() => setShow(!show)}>Criar dog clara </button>
    {show && <span>{concatDogAndClaraName(name)}</span>}
  </div>)
}

export default DogClara;