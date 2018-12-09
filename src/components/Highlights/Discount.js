import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from "../utils/MyButton";


class Discount extends Component {


    state = {
        discountStart: 0,
        discountEnd: 30
    };


    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart: this.state.discountStart + 1})
        }
    };

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },100)
    }

    render() {
        const {discountStart} = this.state;
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_percentage">
                            <span>{discountStart}%</span>
                            <span>off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cumque deserunt
                                illum
                                laborum laudantium minus nesciunt non qui. Alias architecto asperiores blanditiis
                                dolores
                                error, inventore molestias nobis rerum sapiente temporibus?</p>
                            <MyButton
                                text="Purchase tickets"
                                bgButton="#ff4800"
                                link="https://www.youtube.com/"
                            />
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;