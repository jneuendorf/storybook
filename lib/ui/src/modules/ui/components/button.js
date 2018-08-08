import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { node } = props;
  const { name, parent } = node;
  const onClick = () => {
    console.log(name, 'for', parent.name);
  };
  return <button onClick={onClick}>add {name}</button>;
};
Button.propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string,
    parent: PropTypes.object,
  }).isRequired,
};

export default Button;
