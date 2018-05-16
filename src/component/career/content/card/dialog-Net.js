import React from 'react';

const dialog = (props) =>{
    return (
        <div className="career">
		    <div className="career__container">
                <div className="career__content">
                    <h1>{props.title}</h1>
                    <h4 style={{textAlign:"left" }}><strong>Knowledge, Skills and Experience</strong></h4>
                    <ul style={{marginLeft:'20px', textAlign:"left" }}>
                        <li>Proficient understanding of code versioning tools: GIT (Bitbucket, Github …);</li>
                        <li>Worked on an Agile teams and familiar with Scrum;</li>
                        <li>Quick learning, teamwork, active and self-started;</li>
                        <li>Above 2 years work experience with .NET</li>
                        <li>Have quick-learning and problem-solving skill.</li>
                        <li>Be a SMART guy, energy, sharp with very optimistic attitude.</li>
                        <li>Good knowledge in OOP. </li>
                        <li>Experience in .Net, C#,  Entity Framework; SQL, SQL Server; </li>
                        <li>Strong development experience using Win Form, WPF, WCF, MVVM, MVC, Web API.</li>
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