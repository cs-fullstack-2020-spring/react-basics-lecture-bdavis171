import React, { Fragment } from 'react';

function NameDisplay(props) {
  
    return(
        
        <Fragment>
            <p>Welcome {props.name}</p>
        </Fragment>
    )
}

export default NameDisplay;