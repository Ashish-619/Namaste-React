import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor Called");
    }

    componentDidMount() {
        this.value = setInterval(() => {
            console.log("Parent-SetInterval componentDidMount Called");
        }, 1000)
        console.log("Parent componentDidMount Called");
    }

    componentWillUnmount() {
        clearInterval(this.value);
        console.log("Parent componentWillUnmount Called"); //whenever we switch from this page(About) to another, componentWillUnmount will be called
    }

    render() {
        console.log("Parent Render Called");
        return (
            <>
                <h1>About us page</h1>
                <UserClass name={"First Child"} location={"Pune"} contact={"ashV9"} />
                <UserClass name={"Second Child"} location={"Pune"} contact={"ashV9"} />
            </>
        );
    }
}

export default About;