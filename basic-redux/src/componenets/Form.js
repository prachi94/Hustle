import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";
import { addBook } from "../actions/index";
const mapDispatchToProps = dispatch => {
    return {
        addBook: book => dispatch(addBook(book))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();        
        const { title } = this.state;
        const id = uuidv4();        
        this.props.addBook({ 
            title, 
            id 
        });
        this.setState({
            title: ""
        })
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
        </button>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
    addBook: PropTypes.func.isRequired
};

export default Form;