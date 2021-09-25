import axios from "axios";
import formatApiDogList from "../utilitis/formatApiDogList";

const getAllDogs = async () => {
  const res = await axios.get("https://dog.ceo/api/breeds/list/all");
  return formatApiDogList(res.data);
};

export default getAllDogs;
