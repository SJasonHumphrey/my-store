import React, { Component } from 'react';
import './styles.scss';
import Button from './../Form/Button'
import { signInWithGoogle } from '../../Firebase/utils';

class SignIn extends Component {
    handleSubmit = async e =>{
        e.preventDefault();
    }
    render(){
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>LOGIN</h2>
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="socialSignin">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        Sign In with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    }


export default SignIn;
