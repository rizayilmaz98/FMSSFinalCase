import { useContext, useMemo, useState } from "react";
import ShipContext from "../context/ShipContext";
import ShipCard from "./ShipCard";
import { SiStarship } from "react-icons/si";
import { Link } from "react-router-dom";
function ShowShip() {
  const { data, search, searchType, imgData } = useContext(ShipContext);
  const [visible, setVisible] = useState(8);

  function getFilteredList() {
    if (searchType === "name") {
      return data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    if (searchType === "model") {
      return data.filter((item) => {
        return item.model.toLowerCase().includes(search.toLowerCase());
      });
    }
    return data;
  }

  let copyData = useMemo(getFilteredList, [data, search, searchType]);

  return (
    <section className="showShip mt-5 pb-5 ">
      <div className="container mb-3">
        <div className="row d-flex justify-content-end">
          <div className="col-3 text-end">
            <Link to="/loginSignup" className="btn btn-ninth fw-semibold">
              Forum SW
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {copyData.slice(0, visible).map((item, index) => {
            return <ShipCard key={index} shipData={item} shipImg={imgData} />;
          })}
        </div>
        <div className="col-12 d-flex justify-content-center mt-4 mb-5">
          <button
            className={`btn btn-ninth loadButton fs-6 fw-bold px-5 py-3 ${
              copyData.length <= 8 || copyData.length < visible ? "d-none" : ""
            }`}
            onClick={() => {
              setVisible(visible + 8);
            }}
          >
            Load More Starships
            <SiStarship className="ms-3 fs-3 mb-1 spinElement" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShowShip;
