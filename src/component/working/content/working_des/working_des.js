import React, { Component } from 'react';
import Li from './working_li';
import axios from 'axios';
class working_des extends Component {
	state = {
		work:[]
	}
	componentDidMount(){
		axios.get('http://localhost:3022/working')
		.then(res => this.setState({work:res.data}))
	}
    render() {
        return (
            <div className="working__content cell-xl-6 cell-lg-6 cell-md-6 cell-sm-12 cell-xs-12">
						<h2>Why You'll Love Working Here</h2>
						<ul className="working__list">
							{this.state.work.map(work => <Li key={work.id} des={work.des} />)}
						</ul>
			</div>
        );
    }
}

export default working_des;