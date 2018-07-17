import React from 'react'
import WorldCupCountForm from "./WorldCupCountForm";
import WorldCupResult from "./WorldCupResult";
import 'bootstrap/dist/css/bootstrap.min.css';

class WorldCupStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showResult: false, result: null}
    }

    submitWorldCup(result) {
        this.setState({showResult: true, result: result})
    }

    render() {
        let jsx;
        if (this.state.showResult) {
            jsx = (
                <div>
                    <WorldCupCountForm onSubmitWorldCup={this.submitWorldCup.bind(this)}/>
                    <WorldCupResult data={this.state.result}/>
                </div>
            )
        } else {
            jsx = (
                <div>
                    <WorldCupCountForm onSubmitWorldCup={this.submitWorldCup.bind(this)}/>
                </div>
            )
        }
        return jsx
    }
}

export default WorldCupStage;