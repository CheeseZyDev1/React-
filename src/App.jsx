import React from 'react'; 
import PropTypes from 'prop-types';
import Contact from './Assets/Contact';

function Hello(props) {
  console.log('Hello component');
  return (
    <div>
      <h1>Hello {props.name} {props.message}</h1>
    </div>
  );
}

// Correctly attach propTypes to the Hello component
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string
};

// Correctly attach defaultProps to the Hello component
Hello.defaultProps = {
  name: "Guest",
  message: "Good Morning"
};

Contact.defaultProps = {
  email: "Guest",
  phone: "Good Morning"
};
export default Hello;
