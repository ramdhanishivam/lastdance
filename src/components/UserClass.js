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
            <div>UserClassChild Render</div>
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
            <div>UserClassChild2 Render</div>
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