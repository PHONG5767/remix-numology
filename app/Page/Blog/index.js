import { contentHeader, img } from "./Content";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "@remix-run/react";
function Blog() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22];
  return (
    <div className="d-flex flex-wrap">
      {arr.map((number) => {
        return (
          <Link to={`/than-so-hoc-${number}`} className="col-md-3 m-5">
            <img className="img-fluid" src={img[`num${number}`]} alt="" />
            <p className="text-center">{contentHeader[`num${number}`]}</p>
          </Link>
        );
      })}
    </div>
  );
}
export default Blog;
