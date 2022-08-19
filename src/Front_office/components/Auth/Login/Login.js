import { TextField, FormControlLabel, Switch, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Link, useNavigate } from "react-router-dom";
import { StyleAuth } from "./../Styles";
import { useEffect, useState } from "react"
import * as Yup from "yup"
import "./login.scss"
import { useForm } from "react-hook-form";
import Logo from "./../../../Assets/logo2.png"
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"
import { useDispatch } from "react-redux";
import { loginStudent } from "../../../../utils/context/etudiant.reducer";
import jwtDecode from "jwt-decode";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const styles = StyleAuth()
    const [values, setValues] = useState(false)
    const handleClickShowPassword = () => { setValues(v => !v) }
    const handleMouseDownPassword = (e) => { e.preventDefault() }

    const validation = Yup.object().shape({
        email: Yup.string().email("Veuillez entrer une adresse email valide")
            .required("Votre adresse e-mail est obligatoire"),
        mdp: Yup.string().required('Mot de passe correct obligatoire')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    const handleAddSubmit = async (data) => {
        const value = {email: data.email,password: data.mdp}
        dispatch(loginStudent(value))
    }

    useEffect(() => {
        if(localStorage.getItem("token")){
           const value_decoded = jwtDecode(localStorage.getItem("token"))
           if(value_decoded.role=='1'){
                navigate("/admin/home")
           }
           else{
            navigate("/profile")
           }
        }
    },[])
    return (
        <div className="login">
            <div className="login-content">
                <div className="title">
                    <img src={Logo} alt="logo" />
                    <h4>WifiZara</h4>
                </div>
                <form onSubmit={handleSubmit(handleAddSubmit)}>
                    <div className="login-form">
                        <div>
                            <TextField name="email" variant="outlined" size="small" className={styles.textField} label="Email" type="email" InputLabelProps={{ className: styles.label }}
                                InputProps={{
                                    className: styles.root,
                                    endAdornment: (<InputAdornment position="end">
                                        {/* <AlternateEmailTwoToneIcon className={styles.icon} /> */}
                                    </InputAdornment>
                                    )
                                }}
                                {...register("email")}
                            />
                            <p className="error">{errors.email?.message}</p>
                        </div>
                        <div>
                            <TextField name="mdp" variant="outlined" size="small" className={styles.textField} label="Mot de passe" type={values.showPassword ? 'text' : 'password'}
                                InputLabelProps={{ className: styles.label }}
                                InputProps={{
                                    className: styles.root,
                                    endAdornment: (
                                        <InputAdornment position="end" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                            {true ? <VisibilityOff className={styles.icon} /> : <Visibility className={styles.icon} />}
                                        </InputAdornment>
                                    ),
                                }}
                                {...register("mdp")}
                            />
                            <p className="error">{errors.mdp?.message}</p>
                        </div>

                        <FormControlLabel sx={{ color: "gray", fontSize: '12px' }} control={<Switch size="small" />} label="Se souvenir de moi ? " />
                    </div>
                    <div className="group-button">
                        <button className="btn-login" type="submit">Se connecter</button>
                        <Link to="/">
                            <button className="btn-cancel">Annuler</button>
                        </Link>
                    </div>
                    <p>
                        Vous n'avez pas encore un compte ?
                        <Link to="/register">S'inscrire</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
