import React, { Component } from 'react';
import axios from 'axios';
import Content from './service';
import $ from 'jquery';
class Header extends Component {
	constructor(props) {
        super(props);
        this.state = {
            asides:[],
        }
      }
    componentDidMount(){
        axios.get(window.location.origin+'/aside')
        .then(res => {
			console.log(res.data)
			this.setState({asides:res.data})
		})
	}
	pressItem(target){
		var mainMenu = $('.container').width() >= 992 ? 81 : 60;
		var position = $("." + target).offset().top - mainMenu;
		$("html, body").animate({
			scrollTop: position,
		},1000);   
	}
    render() {
        return (
			<section className="section-mainMenu">
				<div className="container">
					<div className="mainMenu">
						<ul className="menu">
							{this.state.asides.map(aside =>
								 
								<Content 
									click={this.pressItem.bind(this,aside.classes)}
									key={aside.id}
									name={aside.name}/>)}
						</ul>
						<div className="socials">
							<a href="https://www.facebook.com/KolabsLLC/" className="social facebook"><i className="fa fa-facebook"></i></a>
						</div>
					</div>
				</div>
			</section>
        );
    }
}
export default Header
