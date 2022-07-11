import AboutMeButton from "./AboutMeButton";
import Gallery from "./Gallery";
import Contact from "./Contact";
import MenuItem from "./MenuItem";
import "./MenuItem.css";

const texts = ["About Me", "Gallery", "Contact"];

const Menu = () => {
  return (
    <>
      <div className="container">
        {texts.map((buttonName, index) => (
          <button key={index} className="menu-button">
            {buttonName}
          </button>
        ))}
      </div>
      {/* <AboutMeButton />
      <Gallery />
      <Contact /> */}
      {/* <MenuItem text="About Me" />
      <MenuItem text="Gallery" />
      <MenuItem text="Contact" /> */}
    </>
  );
};

export default Menu;
