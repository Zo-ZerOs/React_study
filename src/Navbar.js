import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ feedClear }) {
    return (
        <div className="Navbar">
            <header className="Navbar__title">Zo-ZerOs</header>
            <button className="Feed__clear" onClick={() => feedClear()}>Clear</button>
        </div>
    );
}

Navbar.propTypes = {
    feedClear: PropTypes.func.isRequired
};

export default Navbar;
