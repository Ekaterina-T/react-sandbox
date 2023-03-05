import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.css';

function Title({ text }) {
  return <h1 className={styles.header}>{text}</h1>;
}

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
