
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss";

export default function Featured() {

  const type = "movie";
  const content = {
    img: "https://assets-prd.ignimgs.com/2022/03/01/fistful-of-vengeance-1646116375050.jpg",
    desc: "Random Description",
    imgTitle: "https://occ-0-621-616.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABViwbdlePaL4va7vjF732RaMw2wusokg3oFwMV95unzPJMuw9tUoVPK98whFHKneUNBFr7Mokq7-MncPZ4mXDI102VLYry5FaquB1_0X2Q4n2razs0WMXptJS9gZTZKaE6pnNVzC4aKidCYMWjl9PBzS2zquA3AVIUkp8kUA5O2VGyAVK5wm5Q.png?r=0b1"
  }

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => {
            }}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content?.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content?.desc}</span>
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
