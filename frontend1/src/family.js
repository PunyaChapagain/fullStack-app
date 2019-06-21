import React, { Component } from 'react';
import "./family.css"
import names from './name.json'

class Family extends Component {

    render() {


        return (

            <div className="container">
                {names.map(name =>
                    Object.keys(name).map((key, index) =>
                        <div key={index} className="box">{name[key]} </div>)

                )}

            </div>
        )
    }
}

export default Family