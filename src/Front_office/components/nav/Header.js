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


const Header = () => {
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
