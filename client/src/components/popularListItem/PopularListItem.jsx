import "./popularListItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PopularListItem({ index, item: movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    // <Link to={{ pathname: "/watch", movie: movie }}>
    <Link
      to="/watch"
      state={{ movie: movie?.video ? movie : { video: trailer } }}
    >
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={
            movie?.img ||
            `https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}` ||
            "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
          }
          alt=""
        />
        {isHovered && (
          <>
            {/* <video src={movie.trailer || trailer} autoPlay={true} loop /> */}
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpAltOutlinedIcon className="icon" />
                <ThumbDownAltOutlinedIcon className="icon" />
              </div>
              <span style={{ fontSize: "14px", marginBottom: "5px" }}>
                {movie?.title || "Movie"}
              </span>
              <div className="itemInfoTop">
                <span>{movie?.duration || "1 hour 14 mins"}</span>
                <span className="limit">+{movie?.limit || 16}</span>
                <span>{movie?.release_date?.split("-")[0] || 1999}</span>
              </div>
              <div className="desc">
                {movie?.overview?.length < 100
                  ? movie?.overview
                  : movie?.overview?.slice(0, 100) + "..."}
              </div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
