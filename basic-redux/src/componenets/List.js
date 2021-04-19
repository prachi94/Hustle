import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return { books: state.books};
};

const ConnectedList = ({books}) => (
    <ul className="list-group list-group-flush">
        {books.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
    books: PropTypes.array.isRequired
};

export default List;