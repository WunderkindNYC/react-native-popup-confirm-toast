import React from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup';
import Toast from './Toast';
import SPSheet from './SPSheet';

function Root(props) {
    return (
        <>
            {props.children}
            <Popup
                ref={c => {
                    if (c) {
                        Popup.popupInstance = c;
                    }
                }}
            />

            <Toast
                ref={c => {
                    if (c) {
                        Toast.toastInstance = c;
                    }
                }}
            />
            <SPSheet
                ref={c => {
                    if (c) {
                        SPSheet.spsheetInstance = c;
                    }
                }}
            />
        </>
    );
}

Root.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.array
    ])
}

export default Root
