import './Registration.css';
import { Link } from "react-router-dom"

export default function Registration() {
    return (
        <>
            <div className="container">
                <h3>Register</h3>
                <form id="register-form" >
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username"
                            placeholder="Username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email"
                            placeholder="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">Phone number:</label>
                        <input type="tel" id="tel" name="tel"
                            placeholder="888-888-888"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password"
                            placeholder="******"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword">Confirm Password:</label>
                        <input type="rePassword" id="rePassword" name="rePassword"
                        />
                    </div>
                    <button>Register</button>
                    <p>Already have an account?
                        <Link to={"/login"}>Login</Link>
                    </p>

                </form>
            </div>
        </>
    )

}