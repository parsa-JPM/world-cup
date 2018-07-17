import React from 'react'

class WorldCupResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const passedCups = this.props.data.passed.map(function (item) {
            return (<a href={"https://en.wikipedia.org/wiki/"+item.year.toString()+"_FIFA_World_Cup"} target="_blank" key={item.year.toString()} className="list-group-item list-group-item-action">
                {item.year} (you was {item.age} years old)
            </a>)
        });

        const futureCups = this.props.data.future.map(function (item) {
            return (<a href="javascript:void(0)" key={item.year.toString()} className="list-group-item list-group-item-action">
                {item.year} (you will {item.age} years old)
            </a>)
        });
        return (
            <div className='mt-3'>
                <div className='row'>
                    <div className="col-12 alert alert-primary" id='alert' role="alert">
                        you can see {this.props.data.count} cups :)
                    </div>
                </div>
                <div className='row'>
                    <div className="list-group col-md-6 col-lg-6 col-sm-12 ">
                        <a href="javascript:void(0)" className="list-group-item list-group-item-action active">
                            passed cups ({passedCups.length})
                        </a>
                        {passedCups}
                    </div>
                    <div className="list-group  col-md-6 col-lg-6 col-sm-12 ">
                        <a href="javascript:void(0)" className="list-group-item list-group-item-action active">
                            future cups ({futureCups.length})
                        </a>
                        {futureCups}
                    </div>
                </div>
            </div>);
    }
}

export default WorldCupResult;