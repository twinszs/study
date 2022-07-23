import React from 'react';
import './header.css';

class Header extends React.Component {
    render () {
        return (
            <div>{this.props.helloMessage}</div>
        )
    }
}

export default Header;