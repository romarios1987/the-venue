import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style={{
                background: props.bgButton,
                color: 'white'
            }}
        >
            <img src={TicketIcon} className="iconImage" alt="iconButton"/>
            {props.text}
        </Button>

    );
};

export default MyButton;