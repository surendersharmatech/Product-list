
import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "./components/Cards";
import Buttons from "./components/Buttons";
import PropTypes from 'prop-types'

export default class SimpleSlider extends Component {
    // static propTypes = {
    //     images:PropTypes.Array.isRequired,
    //     imageShowOnScreen:PropTypes.Number
    // }
    constructor(props) {
        super(props);
        this.state = {
            photos: this.props.images || [],
            slideCount: 0
        }

    }
    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.imageShowOnScreen || 4,
            slidesToScroll: 1,
        };
        return (
            <div className=''>
                <h2> Product List</h2>
                <div style={{ textAlign: "right" }}>
                    <Buttons
                        float='right'
                        onClick={this.previous}
                        buttonName='Previous'
                    />
                    <Buttons
                        onClick={this.next}
                        buttonName='Next'
                    />

                </div>
                <div style={{border:'2px solid red',height:'500px',textAlign:'center'}}>
                <Slider ref={c => (this.slider = c)} {...settings}>
                

                    {this.state.photos.map((photo, key) => {
                        return (
                            <Cards
                                photo={photo}
                            />
                        )

                    })}
                   
                </Slider>
                </div>

            </div>
        );
    }
}
