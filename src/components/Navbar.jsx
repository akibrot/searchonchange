/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { KEY } from "./redux/actions/actions";
function Navbar() {
  const dispatch = useDispatch();
  const [key, setkey] = useState("");
  const search = (e) => {
    setkey(e.target.value);
  };
 
  useEffect(() => {
    dispatch(KEY(key));
  }, [key]);
  return (
    <div className="navbarcont">
      <div className="search">
        <div className="input">
          <input
            type="text"
            name=""
            id=""
            placeholder="search by name"
            onChange={(e) => search(e)}
          />
        </div>
        <div className="icon">
          <FaSearch  />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
