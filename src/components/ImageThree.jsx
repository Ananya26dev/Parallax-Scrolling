import { Parallax } from "react-parallax";
import Street from "../assets/images/street.jpg";
const ImageThree = () => (
  <Parallax className="image" bgImage={Street} strength={800}>
    <div className="content">
      <span className="img-text">
        A lively image of a city street lined with buildings, shops, and cafes.
      </span>
    </div>
  </Parallax>
);
export default ImageThree;
