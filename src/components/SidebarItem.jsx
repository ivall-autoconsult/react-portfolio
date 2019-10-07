import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 


class SidebarItem extends Component {
    render() {
        return (
            <li className={this.props.className}>
                <Link to={this.props.path.toString().toLowerCase()}>{this.props.name}</Link>
            </li>
        );
    }
}

export default SidebarItem;

