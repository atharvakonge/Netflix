import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import axios from "axios";

import "./featured.scss";
import { useContext } from "react";

export default function Featured({ type, genre, setGenre, genreList }) {
  const [content, setContent] = useState({});

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const response = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: `Bearer ${user.access_token}`,
          },
        });

        setContent(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomMovie();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          >
            <option value="">Genre</option>
            {genreList.map((genreOption) => (
              <option
                key={genreOption?.id}
                value={genreOption?.id}
                selected={genreOption?.id == genre ? "selected" : ""}
              >
                {genreOption?.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <img
        src={
          content.img ||
          "https://images.unsplash.com/photo-1643208589889-0735ad7218f0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
      />
      <div className="info">
        {/* <img src={content.imgTitle} alt="" />
         */}
        <h1>{content?.title}</h1>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
