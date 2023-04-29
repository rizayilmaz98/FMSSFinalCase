import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ShipContext = createContext();

export const ShipProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState("select");
  const [imgData, setImgData] = useState([]);

  async function getStarShips() {
    let starships = [];
    let response = await axios.get("https://swapi.dev/api/starships/");
    starships = starships.concat(response.data.results);
    while (response.data.next) {
      response = await axios.get(response.data.next);
      starships = starships.concat(response.data.results);
    }
    return starships;
  }
  useEffect(() => {
    Promise.all([
      getStarShips(),
      axios.get("https://644a54a1a8370fb3214b3032.mockapi.io/ship"),
    ])
      .then(([getStarShips, mockRes]) => {
        setData(getStarShips);
        setImgData(mockRes.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const values = {
    search,
    setSearch,
    data,
    setData,
    searchType,
    setSearchType,
    imgData,
  };
  return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>;
};
export default ShipContext;
