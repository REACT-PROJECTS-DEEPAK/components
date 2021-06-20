import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
     
            <div className="ui comments">

                <ApprovalCard>

                        <CommentDetail 
                            authour="SAM" 
                            timeago="Today at 4.45PM"
                            content="Nice Blog Post"
                            image ={faker.image.avatar()}
                        />
                        <CommentDetail 
                            authour="ADITYA" 
                            timeago="Today at 4.45PM"
                            content="Nice Blog Post"
                            image ={faker.image.avatar()}
                        />
                        <CommentDetail 
                            authour="DEEPAK" 
                            timeago="Today at 4.45PM"
                            content="Nice Blog Post"
                            image ={faker.image.avatar()}
                        />
                    
                </ApprovalCard> 

                        

                

                    

                

                





                {/* first div */}
                {/* <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a className="author">{faker.name.findName()}</a>
                    <div className="metadata">
                    <div className="date">2 days ago</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        5 Faves
                    </div>
                    </div>
                    <div className="text">
                    Hey guys, I hope this example comment is helping you read this documentation.
                    </div>
                </div>
                </div> */}

                


                {/* second div */}
                {/* <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()}/>
                </a>
                <div lassName="star icon"></i>
                        5 Faves
                    </div>className="content">
                    <a className="author">{faker.name.findName()}</a>
                    <div className="metadata">
                    <div className="date">2 days ago</div>
                    <div className="rating">
                        <i c
                    </div>
                    <div className="text">
                    Hey guys, I hope this example comment is helping you read this documentation.
                    </div>
                </div>
                </div> */}


                {/* third div */}
                {/* <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a className="author">{faker.name.findName()}</a>
                    <div className="metadata">
                    <div className="date">2 days ago</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        5 Faves
                    </div>
                    </div>
                    <div className="text">
                    Hey guys, I hope this example comment is helping you read this documentation.
                    </div>
                </div>
                </div> */}
                
        

        


        </div>
  );
};

ReactDOM.render(<App/>,document.querySelector('#root'));



// Done till 32 class