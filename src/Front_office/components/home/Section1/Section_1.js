import React, { useEffect, useRef } from "react"
import gsap from "gsap";
import "./section1.scss"
import lottie from 'lottie-web';
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section1 = ({t}) => {

     let image = useRef(null)

     const { scroll } = useLocomotiveScroll()
     const handleScroll = (id) => {
          let element = document.querySelector(id)
          scroll.scrollTo(element, {
            offset: '-100',
            duration: '2000',
            easing: [0.25, 0.0, 0.35, 1.0]
          })
     }

     useEffect(() => {
          lottie.loadAnimation({
               container: image.current,
               renderer: 'svg',
               loop: true,
               autoplay: true,
               animationData: require('../../../Assets/67654-networking-for-all.json')
          })
     }, [])

     return (
          <>
               <div className="section1">
                    <div className="content-section1">
                         <div className="content-left">
                              <div>
                                   <div className="block-span">
                                        <span>{t("mettons")}</span>
                                        <span>&nbsp;{t("point")}</span>
                                        <span>&nbsp;{t("access")}</span>
                                        <span>&nbsp;{t("equilibre")}</span>
                                   </div>
                                   <h4>
                                        {t("plateforme")}
                                   </h4>
                                   <button onClick={()=> handleScroll(".section2")}>{t("commencer")}</button>
                              </div>
                         </div>
                         <div className="img">
                              <div className="content-right" ref={image}></div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Section1