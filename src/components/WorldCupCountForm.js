import React from 'react';
import moment from 'moment';

class WorldCupCountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: null,
            old: null
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.submitForm.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">age</label>
                            <input type="text" value={(!this.state.age) ? "" : this.state.age}
                                   onChange={this.ageChange.bind(this)} name='age' className="form-control" id="age"
                                   aria-describedby="emailHelp" placeholder="age" autoComplete="off"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your age with
                                anyone
                                else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">expected age</label>
                            <input type="text" value={(!this.state.old) ? "" : this.state.old} name='old'
                                   className="form-control" onChange={this.oldChange.bind(this)} id="old"
                                   placeholder="expected age" autoComplete="off"/>
                        </div>
                        <input type='submit' value='submit' className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        );
    }

    submitForm(event) {
        event.preventDefault();

        if (!this.checkFill())
            return;
        if (!this.checkAgeBiggerThanOld())
            return;
        if (!this.checkAge())
            return;
        if (!this.checkOld())
            return;
        let result = this.calculateWorldCupCount();
        // alert(result.count);
        this.props.onSubmitWorldCup(result);
    }

    calculateWorldCupCount() {
        const age = this.state.age;
        const old = this.state.old;
        const firstWorldCupYear = 1930;
        let ageYear = parseInt(moment().subtract(age, 'years').format('YYYY'));
        let oldYear = parseInt(moment().add(old - age, 'years').format('YYYY'));
        let cupCount = 0;
        let passedCup = [];
        let futureCup = [];
        for (let i = firstWorldCupYear; i <= oldYear; i += 4) {
            if (i >= ageYear) {
                cupCount++;
                if (i <= parseInt(moment().format('YYYY'))) {
                    passedCup.push({year: i, age: i - ageYear})
                } else {
                    futureCup.push({year: i, age: i - ageYear});
                }
            }
        }
        console.log('passed cup : ' + passedCup);
        console.log('future cup : ' + futureCup);

        return {count: cupCount, passed: passedCup, future: futureCup};
    }

    ageChange(event) {
        const val = event.target.value;
        const checkValue = WorldCupCountForm.checkingNumber(val);
        if (checkValue)
            this.setState({age: parseInt(val)});
    }

    oldChange(event) {
        const val = event.target.value;
        const checkValue = WorldCupCountForm.checkingNumber(val);
        if (checkValue)
            this.setState({old: parseInt(val)});
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static checkingNumber(val) {
        if (Number.isInteger(parseInt(val)))
            return true;
        else if (val === "")
            return true;
        else
            alert('please give me a number');
        return false
    }

    checkFill() {
        console.log(this.state.age);
        if (this.state.old === null || this.state.age === null) {
            alert('فیلدای سن و عمر رو پرکن بیزحمت');
            return false;
        }

        if (isNaN(this.state.old) || isNaN(this.state.age)) {
            alert('فیلدای سن و عمر رو پرکن بیزحمت');
            return false;
        }

        if (this.state.old === 0 || this.state.age === 0) {
            alert('فیلدای سن و عمر رو پرکن بیزحمت');
            return false;
        }
        return true;
    }

    checkAgeBiggerThanOld() {
        if (this.state.old < this.state.age) {
            alert('سلطان سنتو بیشتر از عمر زدی');
            return false;
        }
        return true;
    }

    checkAge() {
        if (this.state.age > 70) {
            alert('سن نمیتونه بیشتر از هفتاد سال باشه :(');
            return false;
        }
        return true;
    }

    checkOld() {
        if (this.state.old > 140) {
            alert('کلاغم انقد عمر نمیکنه سلطان');
            return false
        }
        return true;
    }
}

export default WorldCupCountForm;
