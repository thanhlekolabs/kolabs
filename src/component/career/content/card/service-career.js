import React from 'react';
const component = (props) => {
    return (
        <div className="career cell-xl-4 cell-lg-4 cell-md-4 cell-xs-12">
			<div className="career__container">
				<div className="career__image">
					<img src={props.img} alt=""/>
				</div>
				<div className="career__content">
					<div className="title">{props.title}</div>
					<div className="desc">{props.des}</div>
				    <div className="action"><a className="btn" onClick={props.click}>MORE...</a></div>
				</div>
			</div> 	
		</div>
    )
}
export default component