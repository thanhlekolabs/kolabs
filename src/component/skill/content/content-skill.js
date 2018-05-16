import React, { Component } from 'react';
import Des from './skill_des/skill_des';
class content extends Component {
    render() {
        return(
            <section className="section-skill">
        		<div className="skill-header">
				    <h2>Our key skills</h2>
			    </div>
                <div className="skill-body">
                    <div className="container">
                            <Des/>
                    </div>
                </div>
            </section>   
        );
    }
}
export default content;