import React, { Component } from 'react'

import Footer from '../Footer/Footer'
import './createAccount.css'

export default class CreateAccount extends Component {
   
    render() {
        return (
            <div className="containerCreateAccount">
                <h1>Create Account</h1>
                <label>Email: <input type="text" placeholder="email@email.com"/></label> 
                <label>Password: <input type="pass" placeholder="xxxxxx"/></label> 
                <label>User Name: <input type="text" placeholder="damianmartinez"/></label> 

                <div className="containerButton">
                    <button>Submit</button>
                </div>
                <Footer />
            </div>
        )
    }
}
