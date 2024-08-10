import { Parallax } from "react-parallax";
import Mountain from "../assets/images/mountain.jpg";
const ImageOne = () => (
  <Parallax className="image" bgImage={Mountain} strength={800}>
    <div className="content">
      <span className="img-text">
        A scenic image of a majestic mountain range.
      </span>
    </div>
  </Parallax>
);
export default ImageOne;
