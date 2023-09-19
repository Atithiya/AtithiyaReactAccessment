
import { Link } from "react-router-dom";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  return (
    <>
      <div className="navbar glass bg-gray-500">
        <div className="navbar-start">
          
          <a className="btn btn-ghost normal-case text-xl" href="https://thailand.generation.org/" target="_black">JSD5</a>
        </div>
        <div className="navbar-end">
          <Link to={"/"} className="btn mr-4">
            Hom
          </Link>g
          <Link to={"/Owner"} className="btn mr-4">
            Owner
          </Link>
        </div>
      </div>
    </>
  );
}
