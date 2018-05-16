import React, { Component } from 'react';
import axios from 'axios';
import Accordion from './service';
class content_des extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooses:[],
            active: {},
        }
      }
    componentDidMount(){
        axios.get('http://localhost:3022/choose')
        .then(res => this.setState({chooses:res.data}))
    }
    handleChoose = (id) =>{
        if(this.state.active === id)
        {
            id = null
        }
        this.setState({ active: id});
    }
    render() {
        return (
            <div className="whyChoose__content cell-lg-6 cell-md-6 cell-sm-6 cell-xs-12">
                {this.state.chooses.map((choose,index) =>
                     <Accordion 
                        click={this.handleChoose.bind(this,choose.id)} 
                        classes ={this.state.active === choose.id? 'accordion active': 'accordion'} 
                        title={choose.title} 
                        body={choose.body}
                        key={choose.id}
                     />
                )}
            </div>
        );
    }
}

export default content_des;