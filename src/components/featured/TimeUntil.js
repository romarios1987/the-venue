import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class TimeUntil extends Component {

    state = {
        deadLine: 'Jan, 1, 2019', // Format Dec, 11, 2018
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    getTimeUntil(deadLine) {
        const time = Date.parse(deadLine) - Date.parse(new Date());
        if (time < 0) {
            console.log('Date passed');
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            this.setState({days, hours, minutes, seconds})

        }

    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadLine), 1000)
    }

    render() {

        const {days, hours, minutes, seconds} = this.state;
        return (
            <Fade left delay={3000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Events starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">{days}</div>
                            <div className="countdown_tag">Days</div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">{hours}</div>
                            <div className="countdown_tag">Hs</div>
                        </div>


                        <div className="countdown_item">
                            <div className="countdown_time">{minutes}</div>
                            <div className="countdown_tag">Min</div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">{seconds}</div>
                            <div className="countdown_tag">Sec</div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default TimeUntil;