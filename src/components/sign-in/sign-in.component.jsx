import React from "react";

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email :'',
            password :''
        }
    }



    handleSubmit = event => {
      event.preventDefault();
      this.setState({email:'', passwprd:''});
    };


    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name] : value })
    };
    signInWithGoogle1 =() => {
        console.log('exactlly');
    };




    render() {
        return (
            <div className='sign-in'>
                <h2 className={'title'}> I already have an account</h2>
                <span  > sign in with ur email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label={'email'} required/>

                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label={'password'} required/>
                    <div className='button'>
                    <CustomButton type='submit'>  sign in </CustomButton>
                    <CustomButton onClick = {signInWithGoogle}  isGoogleSignIn > {''} sign in with google {''}</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;

