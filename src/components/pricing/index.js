import React, {Component} from 'react';
import MyButton from "../utils/MyButton";
import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        position: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
            'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        link_to: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]
    };


    showBoxes = () => {
        return (
            this.state.prices.map((box, i) => {
                return (
                    <Zoom key={i} delay={this.state.delay[i]}>
                        <div className='pricing_item'>
                            <div className="pricing_inner_wrapper">
                                <div className="pricing_title">
                                    <span>{this.state.prices[i]}</span>
                                    <span>{this.state.position[i]}</span>
                                </div>
                                <div className="pricing_description">{this.state.desc[i]}</div>
                                <div className="pricing_buttons">
                                    <MyButton
                                        text="Purchase"
                                        bgButton="#ffa800"
                                        link={this.state.link_to[i]}
                                    />
                                </div>
                            </div>
                        </div>
                    </Zoom>
                )
            })
        )
    };


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;