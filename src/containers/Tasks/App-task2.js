import React, {Component} from 'react';
import '../App.css';
import Validation from "./Components/Task2/Validation/Validation";
import Char from "./Components/Task2/Char/Char";

class App extends Component {
    state = {
        inputText: '',
        inputChars: []
    };

    deleteCharHandler = (charIndex) => {
        const newInputChars = [...this.state.inputChars];
        newInputChars.splice(charIndex, 1);
        const newInputText = newInputChars.join('');

        this.setState({
            inputText: newInputText,
            inputChars: newInputChars
        });
    };

    onTypingHandler = (event) => {
        this.setState({
            inputText: event.target.value,
            inputChars: event.target.value.split('')
        });
    };

    render() {
        let chars = null;
        let validationMessage = null;

        if (this.state.inputText.length > 0) {
            chars = (
                <div>
                    {
                        this.state.inputChars.map((char, index) => {
                            return <Char
                                key={index}
                                click={() => this.deleteCharHandler(index)}
                                inputChar={char}/>
                        })
                    }
                </div>
            );

            validationMessage = (
                <Validation inputLength={this.state.inputText.length}/>
            );
        }

        return (
            <div className="App">
                <h1>Task #2</h1>

                <input type="text" onChange={this.onTypingHandler} value={this.state.inputText} autoFocus={true}/>
                <p>The input length is: <b>{this.state.inputText.length}</b></p>
                {validationMessage}
                {chars}
            </div>
        );
    }
}

export default App;
