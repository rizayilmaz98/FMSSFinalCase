import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import mainImg from "../assets/mainImg.svg";
import ShipContext from "../context/ShipContext";
function SearchShip() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTypeInput, setSearchTypeInput] = useState("select");
  const { setSearch, setSearchType } = useContext(ShipContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      alert("Please enter a value");
    } else {
      setSearch(searchInput);
      setSearchType(searchTypeInput);
    }
  };
  
  return (
    <section className="searchShipSection">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 d-flex justify-content-center mx-auto">
            <img src={mainImg} alt="" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="col-11 col-md-8 mx-auto d-flex justify-content-center"
          >
            <div className="col-4 col-md-2">
              <select
                className="form-select rounded-0 rounded-start"
                onChange={(e) => setSearchTypeInput(e.target.value)}
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="name">Name</option>
                <option value="model">Model</option>
              </select>
            </div>
            <div className="col-8 col-md-9">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Search Starship"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="col-1">
              <button
                className="btn btn-eighth rounded-0 rounded-end border-start-0"
                type="submit"
              >
                <FaSearch className="fs-8 mb-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchShip;
