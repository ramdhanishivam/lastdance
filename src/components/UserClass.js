import React from "react";

class UserClassChild extends React.Component {
    constructor() {
        super();
        console.log("UserClassChild constructor called")
    }

    componentDidMount() {
        console.log("UserClassChild componentDidMount called")
    }
    render() {
        console.log("UserClassChild render called")
        return (
            <div>Developer from India</div>
        );
    }
}

class UserClassChild2 extends React.Component {
    constructor() {
        super();
        console.log("UserClassChild2 constructor called")
    }

    componentDidMount() {
        console.log("UserClassChild2 componentDidMount called")
    }

    render() {
        console.log("UserClassChild2 render called")
        return (
            <div>ramdhanishivam7678@gmail.com</div>
        );
    }
}

class UserClass extends React.Component {
    constructor(){
        // The constructor function is also where you honor the inheritance of the parent 
        // component by including the super() statement, which executes the parent component's 
        // constructor function, and your component has access to all the functions of the parent 
        // component (React.Component)
        super();
        console.log("parent constructor called")

        // component properties should be kept in an object called state
        this.state = {
            color: "red"
        }}

        componentDidMount() {
            console.log("parent componentDidMount called")
            this.setState = {
                color: "yellow"
            }
        }

        componentDidUpdate() {
            console.log("parent componentDidUpdate called")
        }

        componentWillUnmount() {
            console.log("parent componentWillUnmount called")
        }
        render() {
            console.log("parent render called")
            return (<>
                <UserClassChild></UserClassChild>
                <UserClassChild2></UserClassChild2>
            </>)
        }
    }


export default UserClass