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

const Home = ()=> {
    return(
     <Fragment>
          <Header/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Footer/>
     </Fragment > 
    )
  }

export default Home