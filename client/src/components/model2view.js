import React, {Component} from 'react';
import API from '../util/API';

class Model2View extends Component{
    state= {
        model2: {}
    }

    componentDidMount = props => {
        API.getModel2(1)
        .then( results => {
            // copy
            var r = results;
            // modify
            r = r.data; // make sure we only have the data we need
            // setState
            this.setState({
                model2: r
            })
        });
    }
    render(){
        return (
            <p>Model2View { JSON.stringify(this.state.model2)}</p>
        );
    }
}
export default Model2View;