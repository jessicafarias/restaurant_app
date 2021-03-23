import smoothie from '../assets/smoothie.jpg';
import '../styles/preview.css';


const Preview = () => {
  return (
    <div>
      <img src={smoothie} className="w-100 preview_img">
      </img>
      <p>
        Here should have some description also Lorem ipsum if you want
      </p>
      <button className="btn_view"> VIEW MORE
      </button>
    </div>
  )
}

export default Preview;