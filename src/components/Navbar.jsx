import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function Navbar() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <nav>
        <Link to="/">MovieList</Link>
      </nav>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      <Outlet />
    </div>
  );
}

export default Navbar;
