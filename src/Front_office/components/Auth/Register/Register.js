                                                                                                                                                                                                                                                                                                                                                                                                                                                            import { TextField, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Link } from "react-router-dom";
import { StyleAuth } from "../Styles";
import { useState } from "react"
import * as Yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "./../../../Assets/logo2.png"
import "./register.scss"

const Register = () => {
    const styles = StyleAuth()
    const [values, setValues] = useState(false)
    const handleClickShowPassword = () => { setValues(v => !v) }
    const handleMouseDownPassword = (e) => { e.preventDefault() }

    const validation = Yup.object().shape({
        nom: Yup.string("Votre nom ne contient que de lettres")
            .required("Votre nom est obligatoire"),
        prenom: Yup.string("Votre prénom ne contient que de lettres"),
        matricule: Yup.number("Votre matricule doit contenir seulement des chiffres")
            .required('Votre matricule est osssbligatoire'),
        telephone: Yup.number("Votre numéro  doit contenir seulement des chiffres")
            .required('Votre numéro est obligatoire'),
        email: Yup.string().email("Veuillez entrer une adresse email valide")
            .required("Votre adresse e-mail est obligatoire"),
        mdp: Yup.string().required('Mot de passe correct obligatoire')
    })

    const { login, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })

    const handleAddSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className="login">
            <div className="login-content">
                <div className="title">
                    <img src={Logo} alt="logo" />
                    <h4>WifiZara</h4>
                </div>
                <form onSubmit={handleSubmit(handleAddSubmit)}>
                    <div className="login-form">
                        <div className="form-group">
                            <div>
                                <TextField variant="outlined" size="small" name="nom" className={styles.textField} label="Nom" type="text" InputLabelProps={{ className: styles.label }}
                                    InputProps={{
                                        className: styles.root,
                                        endAdornment: (<InputAdornment position="end">
                                        </InputAdornment>
                                        )
                                    }}
                                    inputRef={login}
                                />
                                <p className="error">{errors.nom?.message}</p>
                            </div>
                            <div>
                                <TextField variant="outlined" name="prenom" size="small" className={styles.textField} label="Prénom(s)" type="text" InputLabelProps={{ className: styles.label }}
                                    InputProps={{
                                        className: styles.root,
                                        endAdornment: (<InputAdornment position="end">
                                        </InputAdornment>
                                        )
                                    }}
                                    inputRef={login}
                                />
                                <p className="error">{errors.prenom?.message}</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <TextField variant="outlined" size="small" name="matricule" className={styles.textField} label="N° Matricule" type="text" InputLabelProps={{ className: styles.label }}
                                    InputProps={{
                                        className: styles.root,
                                        endAdornment: (<InputAdornment position="end">
                                        </InputAdornment>
                                        )
                                    }}
                                    inputRef={login}
                                />
                                <p className="error">{errors.matricule?.message}</p>
                            </div>
                            <div>
                                <TextField variant="outlined" size="small" name="mdp" className={styles.textField} label="Mot de passe" type={values.showPassword ? 'text' : 'password'}
                                    InputLabelProps={{ className: styles.label }}
                                    InputProps={{
                                        className: styles.root,
                                        endAdornment: (
                                            <InputAdornment position="end" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                                {true ? <VisibilityOff className={styles.icon} /> : <Visibility className={styles.icon} />}
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputRef={login}
                                />
                                <p className="error">{errors.mdp?.message}</p>
                            </div>
                        </div>
                        <div>
                            <TextField variant="outlined" size="small" name="email" className={styles.textField} label="E-mail" type="email" InputLabelProps={{ className: styles.label }}
                                InputProps={{
                                    className: styles.root,
                                    endAdornment: (<InputAdornment position="end">
                                    </InputAdornment>
                                    )
                                }}
                                inputRef={login}
                            />
                            <p className="error">{errors.email?.message}</p>
                        </div>
                        <div>

                            <TextField variant="outlined" size="small" name="telephone" className={styles.textField} label="Téléphone" type="text" InputLabelProps={{ className: styles.label }}
                                InputProps={{
                                    className: styles.root,
                                    endAdornment: (<InputAdornment position="end">
                                    </InputAdornment>
                                    )
                                }}
                                inputRef={login}
                            />
                            <p className="error">{errors.telephone?.message}</p>
                        </div>

                    </div>
                    <div className="group-button">
                        <button className="btn-login" type="submit">S'enregistrer</button>
                        <Link to="/">
                            <button className="btn-cancel">Annuler</button>
                        </Link>
                    </div>
                </form>
                <p>
                    Avez vous déjà un compte ?
                    <Link to="/login">Se connecter</Link>
                </p>
            </div>
        </div>
    )
}

export default Register