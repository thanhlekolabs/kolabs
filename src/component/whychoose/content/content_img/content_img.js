import React, { Component } from 'react';
import Content from './service';
class content_img extends Component {
    render() {
        return (
            <div className="whyChoose__progress cell-lg-6 cell-md-6 cell-sm-6 cell-xs-12">
		    	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum .</p>	
				<div className="progressBar-list">
                    <Content name="CREATIVE" percent="90%" width="90%"/>
                    <Content name="IMAGINATION" percent="80%" width="80%"/>
                    <Content name="PLANNING" percent="70%" width="70%"/>
                </div>
            </div>
        );
    }
}
export default content_img;