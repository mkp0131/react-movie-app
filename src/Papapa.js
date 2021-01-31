// import React from 'react';
import PropTypes from 'prop-types';


Food.propTypes = {
	food: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
}

function Food({id, food}) {
  return (
    <div>{food} {id}</div>
  );
}

export default Food;