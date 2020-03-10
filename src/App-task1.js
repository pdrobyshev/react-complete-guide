import React, {Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        username: 'Peter'
    };

    changeNameHandler = (event) => {
        this.setState({username: event.target.value});
    };

    render() {
        const body = {
            margin: '24px 0',
            fontFamily: "JetBrains Mono"
        };

        const h1 = {
            textTransform: 'uppercase'
        };

        return (
            <div className="App" style={body}>
                <h1 style={h1}>Task #1</h1>
                <UserInput username={this.state.username} change={this.changeNameHandler}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
