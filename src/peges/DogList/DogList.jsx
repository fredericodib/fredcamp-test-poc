import { useEffect, useState } from "react";
import getAllDogs from "../../api/getAllDogs";
import DogClara from "../../components/DogClara/DogClara";

const DogList = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(()=> {
    getAllDogs().then(dogsFromApi => setDogs(dogsFromApi))
  }, [])

  return (<div>
    <h1>Lista de cachorros</h1>
    {dogs.map((name) => (
      <div key={name} style={{marginBottom: 50}}>
        <h4>{name}</h4>
        <DogClara name={name} />
      </div>
    ))}
  </div>)
}

export default DogList;