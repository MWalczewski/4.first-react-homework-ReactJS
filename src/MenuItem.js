const MenuItem = ({ text }) => {
  return (
    <div>
      <button className="menu-button" style={{ color: "red" }}>
        {text}
      </button>
    </div>
  );
};

export default MenuItem;
