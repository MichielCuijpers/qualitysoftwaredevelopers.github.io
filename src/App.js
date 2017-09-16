import React, {Component} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Organization from "./Organization";

class App extends Component {
    render() {
        const a = ['aap', 'noot', 'mies'];
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    <h2>QualitySoftwareDevelopers.github.io</h2>
                </div>
                {a.map((name, index) => <Organization key={name} name={name}/>)}
            </div>
        );
    }
}

export default App;
