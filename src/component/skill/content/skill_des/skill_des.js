import React, { Component } from 'react';
import Content from './skill';
import axios from 'axios';
class skill_des extends Component {
    state = {skills:[]}
    componentDidMount(){
        axios.get(window.location.origin+'/skill')
        .then(res => this.setState({skills:res.data}))
    }
    render() {
        return (
                <div className="skill-list grid grid-gap-10">
                   {this.state.skills.map(skill =><Content key={skill.id} name ={skill.title} detail={skill.des} img={skill.img}/>) }
                </div>
        );
    }
}
export default skill_des;