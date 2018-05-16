import React, { Component } from 'react';
import axios from 'axios';
import Content from './service-feedback'
import OwlCarousel from 'react-owl-carousel';
// import '/owl.carousel/dist/assets/owl.carousel.css';
// import '/owl.carousel/dist/assets/owl.theme.default.css';
class content extends Component {
    state = {feedbacks:[],
        options: {
            items: 4,
            loop:true,
            margin:10,
            nav:true,
            navText: ["&#10094;","&#10095;"],
            dots: true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
        },
        timeoutId: null,
        show: false,
    }
    componentDidMount(){
        axios.get(window.location.origin+'/feedback')
        .then(res => this.setState({feedbacks:res.data}))
    }
    componentWillMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({show: true});
        }, 1000);
    }
    render() {
        const carouselIndex = this.state.feedbacks.map(feedback => 
                <Content
                    key = {feedback.id} 
                    content = {feedback.content}
                    img = {feedback.img}
                    name = {feedback.name}
                    comment = {feedback.comment}
                /> 
        )
        return (
            <OwlCarousel {...this.state.options} className="feedback owl-theme">
                        {carouselIndex}
             </OwlCarousel>
        );
    }
}

export default content;