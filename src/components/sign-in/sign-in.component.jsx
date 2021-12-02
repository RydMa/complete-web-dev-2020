import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state)
    }

    handleChange = (ev) => {
        const { name, value } = ev.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h3 className="title">I already have an account</h3>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={password} handleChange={this.handleChange} label="Password" required/>

                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;