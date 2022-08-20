import { useState } from "react"
import "./login1.scss"

const Login1 = () => {
    const [agree, setAgree] = useState(false)
    const handleClickAgree = () => {
        setAgree(v => !v)
    }

    return (
        <div className="login1">
            <div id="content">
                <div className="login-card">
                    <img src="captiveportal-logo.svg" /><br />
                    <h1></h1>
                    <form name="login_form" method="post" action="$PORTAL_ACTION$">
                        <input type="text" name="auth_user" placeholder="User" id="auth_user" />
                        <input type="password" name="auth_pass" placeholder="Password" id="auth_pass" />
                        <div className="login-help">
                            <ul className="list">
                                <li className="list__item">
                                    <label className="label--checkbox">
                                        <input type="checkbox" class="checkbox" onchange={handleClickAgree} />
                                        <span>I agree with the <a target="_blank" rel="noopener" href="http://www.termslicences.com/example.pdf">terms & licences</a></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <input name="redirurl" type="hidden" value="$PORTAL_REDIRURL$" />
                        <input type="submit" name="accept" className="login login-submit" value="Login" id="login" disabled={agree} />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login1