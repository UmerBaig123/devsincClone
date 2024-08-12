import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        src="https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/65e9dc44087cee387ed320b5_Devsinc_Logo-removebg-preview%20(1).png"
        alt=""
        width={110}
        style={{ marginLeft: 50 }}
      />
      <div className="options">
        <div className="opt">Case Studies</div>
        <div className="opt">Services</div>
        <div className="opt">About</div>
        <div className="opt">Reviews</div>
        <div className="opt">Careers</div>
        <div className="opt">Learning</div>
      </div>
      <div className="call">
        Schedule Strategy Call
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="arrow"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
      </div>
    </div>
  );
};
export default NavBar;
