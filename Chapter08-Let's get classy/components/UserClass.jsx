import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props); //initializing parent class's constructor

        this.state = {
            count: 0,
            count2: 2,
        };

        console.log("Child Contructor Called");
    }

    componentDidMount() {
        console.log("Child componentDidMount Called");
    }

    render() {
        console.log("Child Render Called");
        return (
            <div className="user-card">
                <h2>Count is :{this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Increment</button>
                <h2>Name is :{this.props.name}</h2>
                <h3>Location :{this.props.location}</h3>
                <p>Contact :{this.props.contact}</p>
            </div>
        );
    }
}

export default UserClass;