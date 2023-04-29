import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ShipContext from "../context/ShipContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function SingleShip() {
  const { name } = useParams();
  const { data, imgData } = useContext(ShipContext);

  const ship = data.find((ship) => ship.name === name);
  const imgUrll = imgData.find((item) => item.name === name);

  if (ship !== undefined) {
    localStorage.setItem("shipPage", JSON.stringify(ship));
  }
  if (imgUrll !== undefined) {
    localStorage.setItem("shipImg", JSON.stringify(imgUrll));
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link to="/">
              <BsFillArrowLeftCircleFill className="fs-1 mt-4 backHome cursor" />
            </Link>
          </div>
        </div>
        <div className="row d-flex justify-content-center mx-2 mx-md-0 mt-3">
          <div className="col-12 col-md-8 col-lg-6 borderSingle mt-5 mt-md-0 p-4">
            <img
              src={JSON.parse(localStorage.getItem("shipImg")).imgUrl}
              className="singleShipImg"
              alt=""
            />
            <p className="fs-6 fw-semibold text-eighth text-center mt-3">
              {JSON.parse(localStorage.getItem("shipPage")).name.toUpperCase()}
            </p>
            <hr className="text-eighth col-8 mx-auto" />
            <p>
              <span className="fs-7 fw-semibold text-ninth">Model :</span>
              <span className="fs-7 fw-semibold text-eighth ms-2">
                {JSON.parse(localStorage.getItem("shipPage")).model}
              </span>
            </p>
            <p>
              <span className="fs-7 fw-semibold text-ninth">
                Manufacturer :
              </span>
              <span className="fs-7 fw-semibold text-eighth ms-2">
                {JSON.parse(localStorage.getItem("shipPage")).manufacturer}
              </span>
            </p>
            <p>
              <span className="fs-7 fw-semibold text-ninth">Length :</span>
              <span className="fs-7 fw-semibold text-eighth ms-2">
                {JSON.parse(localStorage.getItem("shipPage")).length}
              </span>
            </p>
            <p>
              <span className="fs-7 fw-semibold text-ninth">
                Max Atmosphering Speed :
              </span>
              <span className="fs-7 fw-semibold text-eighth ms-2">
                {
                  JSON.parse(localStorage.getItem("shipPage"))
                    .max_atmosphering_speed
                }
              </span>
            </p>
            <p>
              <span className="fs-7 fw-semibold text-ninth">Crew :</span>
              <span className="fs-7 fw-semibold text-eighth ms-2">
                {JSON.parse(localStorage.getItem("shipPage")).crew}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleShip;
