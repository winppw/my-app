import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="bg-danger" style={{height: "auto"}}>
                <div className="d-flex flex-row-reverse pb-1">
                    <p className="mt-2 mx-1 mb-0">this from button component</p>
                    <div className="mt-2 mx-1 mb-1 btn btn-info btn-sm float-right">Button</div>
                </div>
            </div>
        )
    }
}
