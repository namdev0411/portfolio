import React from 'react';
import './TitleField.scss';

const TitleField = ({text}) => {
    return (
        <h1 className="title">
            {text}
        </h1>
    );
}

export default TitleField;
