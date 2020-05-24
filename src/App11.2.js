import React, { Component } from "react"

class App11ii extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:""
            }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        this.setState({[name]: value})
    }

    render() {
        return(
            <form >
                <input 
                type="text" 
                name="firstName"
                placeholder="FIRST NAME" 
                value={this.state.firstName} 
                onChange={this.handleChange}
                /><br/>

                <input 
                type="text" 
                name="lastName"
                placeholder="LAST NAME" 
                value={this.state.lastName} 
                onChange={this.handleChange}
                /><br/>
                
                <input 
                type="text" 
                name="age"
                placeholder="AGE" 
                value={this.state.age} 
                onChange={this.handleChange}
                /><br/>

                <label><input 
                type="radio" 
                name="gender"
                value="male"
                onChange={this.handleChange}
                checked={this.state.gender === "male"}
                />MALE</label>
                <br/>

                <label><input 
                type="radio" 
                name="gender"
                value="female"
                onChange={this.handleChange}
                checked={this.state.gender === "female"}
                />FEMALE</label>
                <br/>

                <h3>Dietary Restriction</h3>
                <br/><br/>
                
                <select name="destination" onClick={this.handleChange}>
                    <option>--CHOOSE DESTINATION--</option>    
                    <option>FRANCE</option>    
                    <option>GERMANY</option>    
                    <option>LONDON</option>    
                    <option>INDIA</option>    
                </select>
                <br/><br/>
                
                <button>Submit</button>
                <hr/>
                <h2>Entered Information :</h2>
                <h3>Your name: {this.state.firstName} {this.state.lastName}</h3>
                <h3>Your age: {this.state.age}</h3>
                <h3>You are : {this.state.gender}</h3>
                <h3>Your Destination : {this.state.destination}</h3>
                      
            </form>
        )
    }

}

        export default App11ii