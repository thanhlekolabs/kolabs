import React from 'react';
const content = (props) =>{
    return (
        <div className="feedback__content">
                                <blockquote>
                                    <span>{props.content}</span>
                                </blockquote>
                                <figcaption className="figcaption">
                                    <div className="figcaption__image">
                                        <img src={props.img} alt=""/>
                                    </div>
                                    <div className="figcaption__content">
                                        <div className="figcaption-name">{props.name}</div>
                                        <cite>{props.comment}</cite>
                                    </div>
                                </figcaption>
                            </div>
    )
}
export default content