import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className="watch">
      <div className="back">
        <Link to="/" className="link">
          <ArrowBackIosOutlinedIcon />
          Home
        </Link>
      </div>
      {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
      <video className="video" autoPlay controls>
        <source src={movie.video} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
}
