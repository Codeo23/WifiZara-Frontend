import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose
} from "./Animations";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavBar = ({ state, setState }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const { scroll } = useLocomotiveScroll()

  const handleScroll = (id) => {
    menuLayer.style.display = 'none'
    let element = document.querySelector(id)
    scroll.scrollTo(element, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0]
    })
    setState({
      initial: false,
      clicked: null,
      menuName: <FontAwesomeIcon icon={faBars} />
    })
  }
  useEffect(() => {

    if (state.clicked === false) {

      staggerRevealClose(reveal2, reveal1);

      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {

      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });

      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const handleMenu = () => {
    setState({
      clicked: !state.clicked,
      menuName: <FontAwesomeIcon icon={faBars} />
    });
  }

  return (
    <div ref={el => (menuLayer = el)} className='menu-logo'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <button onClick={handleMenu} className="close-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <button
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      onClick={() => handleScroll(".section2")}>
                      Interêts
                    </button>
                  </li>
                  <li>
                    <button
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      onClick={() => handleScroll(".section3")}>
                      Solutions
                    </button>
                  </li>
                  <li>
                    <button
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      onClick={() => handleScroll(".section4")}>
                      Feedback
                    </button>
                  </li>
                  <li>
                    <button
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      onClick={() => handleScroll(".section5")}>
                      Chiffres
                    </button>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>  </h3>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;