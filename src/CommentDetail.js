import React from 'react';



const CommentDetail = (props)=>{
    console.log(props.authour);
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image} />
                </a>
                <div className="content">
                    <a className="author">{props.authour}</a>
                    <div className="metadata">
                    <div className="date">{props.timeago}</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        5 Faves
                    </div>
                    </div>
                    <div className="text">{props.content}</div>
                    
                </div>
        </div>
    );





};

export default CommentDetail;