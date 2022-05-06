import React from 'react';
import { connect } from 'react-redux';
import { toGreen, toRed, toBlue } from '../actions/Buttons.js';
import { Green, Red, Blue } from '../Components/Buttons';

export class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Green color={{ backgroundColor: this.props.color || "green" }} handleClick={this.props.toGreen} />
                <Red color={{ backgroundColor: this.props.color || "red" }} handleClick={this.props.toRed} />
                <Blue color={{ backgroundColor: this.props.color || "blue"}} handleClick={this.props.toBlue} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
}

const mapDispatchToProps = {
    toGreen,
    toRed,
    toBlue,
}

export const ReduxButtons = connect(mapStateToProps, mapDispatchToProps)(Buttons);