import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosOutlinedIcon />
        Home
      </div>
      <video controls className='video'>
        <source src="https://cdn.pixabay.com/vimeo/891301369/countdown-191655.mp4?width=1280&hash=2e7ac212ff2a6d98dcee503c50ba0f3f660c52d5" type="video/mp4"/>
        </video>
    </div>
  );
}