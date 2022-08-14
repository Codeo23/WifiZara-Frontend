import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "../../Assets/logo.png"
import "./style.scss"


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


const Header = ({handleChangeLng}) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: <FontAwesomeIcon icon={faBars} />
  });

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: <FontAwesomeIcon icon={faXmark} />
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: <FontAwesomeIcon icon={faBars} />
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: <FontAwesomeIcon icon={faXmark} />
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };



  return (
    <header>
      <div className="menu">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <div className="right">
          <div className="btn">
            <button onClick={() =>  handleChangeLng("en")}>
              <img src="https://imgs.search.brave.com/Zt7ekJvP8Sn_NEcLzmXD1ZWh4NwWDDcMMClohDwIJWg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ub2Rl/MDEuZmxhZ3N0YXQu/bmV0L21lZGlhL2Nh/dGFsb2cvcHJvZHVj/dC9kZXRhaWwvcGV0/aXQtZHJhcGVhdS1y/b3lhdW1lLXVuaS0x/Mjg3LmpwZw"
              alt="EN"
              />
            </button>
            <button onClick={() =>  handleChangeLng("fr")}>
              <img src="https://imgs.search.brave.com/qkeC6G98-j4Bo7aze5WWvwu7LWSld5AfCvpezZ6tC_0/rs:fit:1200:962:1/g:ce/aHR0cDovL25vZGUw/MS5mbGFnc3RhdC5u/ZXQvbWVkaWEvaW1h/Z2UvMjU3NHIuanBn"
              alt="FR"
              />
            </button>
          </div>
          <Link to="/login">Se connecter</Link>
          <Link to="/register">S'inscrire</Link>
          <button disabled={disabled} onClick={handleMenu}>
            {state.menuName}
          </button>
        </div>
      </div>
      <NavBar state={state} setState={setState} />
    </header>
  );
};

export default withRouter(Header);
