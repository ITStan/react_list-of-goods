import React from 'react';
import PropTypes from 'prop-types';

const Goods = ({ goods }) => (

  <ul>
    {goods.map(item => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Goods;
