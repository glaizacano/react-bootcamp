import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        textContent: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        textContent: "Burr, it's chilly!",
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        // check if latitude is located in
        // northern hemisphere or southern hemisphere
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    // return textContent and iconName of the season
    const { textContent, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{textContent}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;