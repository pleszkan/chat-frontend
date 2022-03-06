import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

/**
 * Simple toggle from a checkbox.
 *
 * @param id HTML id.
 * @param labelText Text to display next to the toggle.
 * @param isChecked A boolean value to determine whether the checkbox is checked or not.
 * @param onChange A function which gets called when the checkbox's state changes.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Toggle({id, labelText, isChecked, onChange}) {

    return (
        <label>
            {labelText}
            <label className={'toggle-container'}>
                <input type={"checkbox"} id={id} className={'toggle-checkbox'} checked={isChecked} onChange={onChange}/>
                <div className={"toggle-filler"}/>
            </label>
        </label>
    );
}

Toggle.propTypes = {
    labelText: PropTypes.string,
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}
