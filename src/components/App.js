import React, {Component} from 'react';
import '../styles/App.css';
import '../assets/wall.jpg'
import WorldCupStage from "./WorldCupStage";

class App extends Component {
    render() {
        return (
            <div className='main'>
               <div className='container'>
                 <WorldCupStage/>
                 </div>
             </div>
        );
    }
}

export default App;
