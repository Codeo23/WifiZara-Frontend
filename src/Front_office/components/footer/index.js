import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from "yup"
import "./footer.scss"


const Footer = () => {

  const validation = Yup.object().shape({
    feedback: Yup.string()
        .test('len','Votre feedback ne doit pas depasser 255 caractères',val => val.length >=255)
        .required("Le champ est obligatoire"),
})

const { login, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
})

const handleAddSubmit = async(data) => {
    console.log(data)
}

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">company</h4>
            <ul>
              <li><a href="https://">about us</a></li>
              <li><a href="https://">our services</a></li>
              <li><a href="https://">privacy policy</a></li>
              <li><a href="https://">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="https">FAQ</a></li>
              <li><a href="https://">shipping</a></li>
              <li><a href="https://">returns</a></li>
              <li><a href="https://">order status</a></li>
              <li><a href="https://">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="https://">watch</a></li>
              <li><a href="https://">bag</a></li>
              <li><a href="https://">shoes</a></li>
              <li><a href="https://">dress</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Folow us</h4>
            <div className='social-links'>
              <a href="h"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="h"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="h"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="h"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div>
              <form onClick={handleSubmit(handleAddSubmit)}>
                <TextField variant="outlined" size="small" name="feedback" label="FeedBack" type="text"
                  InputProps={{
                    endAdornment: (<InputAdornment position="end">
                    </InputAdornment>
                    )
                  }}
                  inputRef={login}
                />
                <p className="error">{errors.feedback?.message}</p>
                <button type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer