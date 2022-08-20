import React from "react"
import { Fragment } from "react"
import Footer from "../components/footer"
import Section1 from '../components/home/Section1/Section_1'
import Section2 from '../components/home/Section2/section_2'
import Section3 from "../components/home/Section3/Section3"
import Section4 from "../components/home/Section4/Section4"
import Section5 from "../components/home/Section5/Section5"
import Section6 from "../components/home/Section6/Section6"
import Header from "../components/nav/Header"
import { useTranslation } from "react-i18next";
import {useDispatch} from "react-redux"
import { getAllFeedbacks } from "../../utils/context/feedback.reducer"

const Home = ()=> {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();

	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

  dispatch(getAllFeedbacks())
    return(
     <Fragment>
          <Header t={t} handleChangeLng={handleChangeLng}/>
          <Section1 t={t}/>
          <Section2 t={t}/>
          <Section3 t={t}/>
          <Section4 t={t}/>
          <Section5 t={t}/>
          <Section6 t={t}/>
          <Footer t={t}/>
     </Fragment > 
    )
  }

export default Home