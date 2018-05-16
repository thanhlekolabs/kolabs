import React, { Component } from 'react';
import Card from './service'
import axios from 'axios';
class info extends Component {
    state = {infos:[]}
    componentDidMount(){
        axios.get('http://localhost:3022/info')
        .then(res => this.setState({infos:res.data}))
    }
    render() {
        return (
            <section className="footer__info">
				<div className="container">
                    <h2>Contact Us</h2>
					<div className="grid grid-gap-20">
                        {this.state.infos.map(info => <Card key={info.id} icon={info.icon} detail={info.detail} title={info.title}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default info;