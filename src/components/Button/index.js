import React from 'react';
import PropTypes from 'prop-types';

import resume from '../../static/resume.pdf';
import './index.scss';

/**
 *
 * @param {*} props object
 * @param {string} props.label filler text for button
 * @param {string} props.link url path to be redirected to on click
 */
function ActionButton(props) {
  const { label } = props;
  console.log('TCL: ActionButton -> props', props);
  let { link } = props;
  if (!link) {
    link = resume;
  }

  return (
    <div className="button-container">
      <a href={link} alt="link">
        {label}
      </a>
    </div>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string
};

ActionButton.defaultProps = {
  link: resume
};

export default ActionButton;
