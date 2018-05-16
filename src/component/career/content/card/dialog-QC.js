import React from 'react';

const dialog = (props) =>{
    const style={
        textAlign:'center',
    }
    return (
        <div className="career">
		    <div className="career__container">
                <div className="career__content" style={style}>
                    <h1>{props.title}</h1>
                    <h4 style={{textAlign:"left" }}><strong>Knowledge, Skills and Experience</strong></h4>
                    <ul style={{marginLeft:'20px', textAlign:"left" }}>
                        <li>Minimum 3 years of experience with manual web-based testing;</li>
                        <li>Proficient in writing test plans and test cases;</li>
                        <li>Worked on an Agile teams and familiar with Scrum;</li>
                        <li>Experience in using QA Automation Test Tools for web testing: Elenium, Cucumber, JMeter, Calabash ... is a plus;</li>
                        <li>Knowledge of software QA methodologies (white/black box, regression, load, performance), tools and processes;</li>
                        <li>Knowledge of SQL and handling JIRA, GITHUB;</li>
                        <li>Ability to use English in reading and writing;</li>
                        <li>Ability to communicate professionally with coworkers and customers;</li>
                        <li>Ability to work independently and meet managerial goals;</li>
                        <li>Ability to organize daily activities of self and others and to work as a team player.</li>
                        <li style={{ listStyleType:"none", textAlign:"left" }}><strong>Educational Background</strong></li>
                        <li>Bachelor&rsquo;s degree in information technology or relevant field.</li>
                        <br></br>
                        <p>Please send your profile to Long Tran (Mr.): ltran@kolabs.co</p>
                        <p>For more information, please visit:</p>
                        <p>- Our Office: 03th floor, Kicotrans building, &nbsp;05 Dong Da, W.2 , Tan Binh District , HCMC</p>
                        <p>- Our Website: www.kolabs.co</p>
                    </ul>
                    <div className="action"><a className="btn" onClick={props.clickModal}>Close</a></div>
                </div>
            </div>
        </div>
    )
}
export default dialog