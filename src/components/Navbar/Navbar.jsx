import "./Navbar.css";
import myImage from "../../assets/background_image_2.png";

const Navbar = () => {
  return (
    <div className="Navbar_main">
      <div className="Navbar_content_box">
        <a href="https://vishalkumar07.me">
          <div className="Navbar_content_box_left">
            <img src={myImage} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
