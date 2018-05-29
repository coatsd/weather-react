import React, { Component } from 'react';

class ZipForm extends Component {
    render() {
        return (
            <div className="zip-form">
                <form id="zipform">
                    <div className="flex-parent">
                        <label htmlFor="zipcode">Zip</label>
                        <input className="form-control" type="input"
                            id="zipcode" />
                    </div>
                </form>
            </div> 
        )
    }
}

export default ZipForm;