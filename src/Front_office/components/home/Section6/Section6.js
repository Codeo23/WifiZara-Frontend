import React from 'react'
import "./section6.scss"
import AEENI from "./../../../Assets/Alternative 2.png"
import Akata from "./../../../Assets/part1.png"
import KalyBot from "./../../../Assets/part2.png"
import Academy from "./../../../Assets/part3.png"
import Mahefa from "./../../../Assets/part4.png"
import Arato from "./../../../Assets/part5.jpg"
import C2E from "./../../../Assets/club2.png"
import WeCours from "./../../../Assets/part6.png"

const Section6 = () => {
    return (
        <div className='section6'>
            <div className='first'>
                <img src={AEENI} alt="AEENI" className='aeeni'/>
                <img src={Arato} alt="Arato" />
                <img src={Akata} alt="Akata" />
                <img src={Mahefa} alt="Mahefa" />
            </div>
            <div className='second'>
                <img src={KalyBot} alt="KalyBot" />
                <img src={WeCours} alt="WeCours" />
                <img src={Academy} alt="Academy" />
                <img src={C2E} alt="C2E" />
            </div>
        </div>
    )
}

export default Section6