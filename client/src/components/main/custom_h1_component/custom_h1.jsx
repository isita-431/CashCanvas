import React from 'react';
import { CustomHeadingTag } from './custom_h1.styles';
import PropTypes from 'prop-types';

export const CustomH1 = ({ data }) => {
  return <CustomHeadingTag>{data}</CustomHeadingTag>;
};

CustomH1.propTypes = {
  data: PropTypes.string.isRequired
};
