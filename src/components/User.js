import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
    renderTemplate = () => {
        const {name, error, isFetching, handleLogin} = this.props;

        if (error) {
            return <p>There was an error during request, please reload the page!</p>;
        }

        if (isFetching) {
            return <p>Connecting to VK...</p>;
        }

        if (name) {
            return <p>Hello, {name}!</p>;
        } else {
            return (
                <button 
                    className="btn"
                    onClick={handleLogin}
                >
                    LogIn
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderTemplate()}
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
};