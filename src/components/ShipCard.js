import { Link } from "react-router-dom";

function ShipCard({ shipData, shipImg }) {
  const imgUrll = shipImg.filter((item) => item.name === shipData.name);

  return (
    <div className="col">
      <Link
        to={`/${shipData.name}`}
        className="card h-100 text-decoration-none"
      >
        <img
          src={imgUrll[0].imgUrl}
          className="card-img-top shipImg p-3"
          alt="..."
        />
        <hr className="col-11 mx-auto text-fourth" />
        <div className="card-body">
          <p
            className="fw-bold fs-6 text-eighth text-center"
            title={`${shipData.name}`}
          >
            {shipData.name.length > 20
              ? `${shipData.name.slice(0, 22).toUpperCase()}...`
              : shipData.name.toUpperCase()}
          </p>
          <hr className="col-8 text-eighth mx-auto" />
          <div className="card-text ">
            <p className="">
              <span className="fw-bold text-ninth">Model :</span>
              <span className="text-third fw-semibold"> {shipData.model}</span>
            </p>
            <p className="">
              <span className="fw-bold text-ninth">Hyperdrive Rating :</span>
              <span className="text-third fw-semibold">
                {shipData.hyperdrive_rating}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShipCard;
