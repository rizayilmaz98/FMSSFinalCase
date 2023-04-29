import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="container-fluid fixed-bottom bg-black">
      <div className="row text-center">
        <p className="text-white fw-bold pt-2">
          Created By Rıza Yılmaz
          <Link
            to="https://www.linkedin.com/in/riza-yilmaz/"
            target="_blank"
            className="ms-4 colorLinkedin"
          >
            <BsLinkedin className="fs-5" />
          </Link>
          <Link
            to="https://github.com/rizayilmaz98"
            target="_blank"
            className="ms-2 text-white"
          >
            <BsGithub className="fs-5" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
