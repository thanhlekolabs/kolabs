import React from 'react';

const component = (props) =>{
    return (
        <div className="team cell-xl-4 cell-lg-4 cell-md-4 cell-sm-4 cell-xs-12">
			<img src={props.img} alt=""/>
		</div>
    )
}
export default component