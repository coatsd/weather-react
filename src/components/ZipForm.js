import React, { Component } from 'react';

class ZipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: ''
        };
        this.inputUpdated = this.inputUpdated.bind(this);
    }

    inputUpdated(e) {
        const {value} = e.target;
        this.setState({zipcode: value});
    }

    onFormSubmit(zipcode) {
        this.setState({zipcode});
    }

    submitZipCode (e) {
        e.preventDefault(); // don’t submit the form
        const { zipcode } = this.state; // get the zipcode from the state
        const { onSubmit } = this.props; // the method from the App
        onSubmit(zipcode); // the form calls a method on the App and passes the zipcode
        this.setState( {zipcode : ""} ); // clear the zipcode in the class (and on the web page)
    }

    render() {
        return (
            <div className="zip-form">
                <form id="zipform" onSumbit={this.submitZipCode}>
                    <div className="flex-parent">
                        <label htmlFor="zipcode">Zip</label>
                        <input onInput={this.inputUpdated} className="form-control" type="input"
                            id="zipcode" name="zipcode" value="" required />
                    </div>
                </form>
            </div> 
        )
    }
}

export default ZipForm;