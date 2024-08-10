import { Parallax } from "react-parallax";
import Sea from "../assets/images/sea.jpg";
const ImageTwo = () => (
  <Parallax className="image" bgImage={Sea} strength={800}>
    <div className="content">
      <span className="img-text">
        A tranquil image of a sea beach with soft, golden sand stretching along
        the shoreline.
      </span>
    </div>
  </Parallax>
);
export default ImageTwo;
