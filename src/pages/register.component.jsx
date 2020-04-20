import React from 'react';
import './signin.style.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <article className="br3 ba b--black-10 mv1 w-90 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa3 pa4-m pa4-l black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password-confirmation">Confirm password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password-confirmation" id="password-confirmation" />
                    </div>
                    </fieldset>
                    <div className="">
                        <Link to='/' className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib no-underline black" type="submit">Register</Link>
                    </div>
                    <div className="lh-copy mt3">
                        <Link to='/signin' className="pointer f6 link dim black db">Already registered? Sign in</Link>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Register;