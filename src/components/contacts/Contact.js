import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Consumer } from "../../Context";
import axios from "axios";
import { FaUserEdit } from "react-icons/fa";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <MdArrowDropDown
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer", color: "blue" }}
                />

                <MdDeleteForever
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                />
                <Link to={`contacts/edit/${id}`}>
                  <FaUserEdit
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email} </li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
