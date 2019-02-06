import React, { Component } from 'react';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.loggedIn(this.state.username);
    }
    render(){
        return(
            <div>
                <h2>Log in to check the weather!</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter username" />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                    <button type="submit">Login</button>
                </form>

            </div>
            
        )
    }
}