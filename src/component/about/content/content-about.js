import React, { Component } from 'react';
import Content from './des-about';
import axios from 'axios';
class content extends Component {
    state = {cards:[]} 
    componentDidMount(){
        axios.get('http://localhost:3022/introduce')
        .then(res => this.setState({cards:res.data}))
    }
    render() {
        return (
            <section className="section section-about">
                <div className="container">	
                    <div className="about grid grid-gap-40">
                        <div className="about__info cell-lg-9 cell-md-8 cell-sm-6 cell-xs-12">
                            <h2>About us</h2>
                            <p>KOLABS LLC is an exciting new kind of tech startup company that is headquartered in Los Angeles, CA with a satellite office in Ho Chi Minh City, Vietnam.</p>
                            <p>Unique to this space, we are not your typical startup as we are both a startup and an incubator.</p>
                            <p>We are able to achieve this as we are self-funded but also have backing from a network of angel investors.</p>
                            <p>With this model we are able to provide all the benefits of a US startup company but without the risks.</p>
                            <p>KOLABS LLC currently specializes in projects in gaming and is expanding to real-time social messaging apps and more.</p>
                            <p>At KOLABS LLC, we do not have clients nor do we want them.</p>
                            <p>We have partners and we want to be able to change the way companies are created and help our partners succeed.</p>
                        </div>
                        <div className="about__image cell-lg-3 cell-md-4 cell-sm-6 cell-xs-12">
                            <img src="assets/images/about_us.jpg" className="img" alt=""/>
                        </div>
                    </div>
                    <div className="introduces grid grid-gap-20">
                        {this.state.cards.map(card => 
                        <Content  key={card.id}  icon = {card.icon} title={card.title} des={card.des}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default content;