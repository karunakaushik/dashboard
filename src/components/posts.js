import React, { useState } from 'react'
import './posts.css'
import PostIcon from './image/post.png'
import UserPic from './image/user.png'
import AttachIcon from './image/Vector.png'
import Senddrop from './image/Vector 2.png'
const Postpage = () => {

    const [inputlist, setinputlist] = useState("");
    const [posts, setposts] = useState([]);

    const addPost = (event) => {
        setinputlist(event.target.value);
    };

    const listPost = () => {
        setposts((oldposts) => {
            return [...oldposts, inputlist];
        });
        setinputlist(' ');
    }

    const cancelPost = () => {
        setinputlist(' ');
    }
        return(
            <div className="postbox">
                {/* <br /> */}
                <div className="inputdivbox">
                {/* <label> Title </label> */}
                <div className="innerinputbox">
                    <input className="inputpostbox" type="text" placeholder="Share something with your class.." value={inputlist} onChange={addPost} />

               </div>
               <div className="allbtndiv">
                     <button className="cancelbtn" onClick={cancelPost}>Cancel</button>
                    <div style={{display:'flex'}}>
                        <button className="attachbtn" > <img src={AttachIcon} /> </button>
                        &nbsp;&nbsp;&nbsp;
                        <div className="shrbtndiv">
                        <button className="postbtn" onClick={listPost}> <p>Share</p></button>
                        <button className="dropbtn"><img src={Senddrop} /></button>

                        </div>
                    </div>
               
               </div>
                </div>
                <div className="outerpost">
                    <div className= "mainpostdiv">
                        <div className="postlist1">
                        <img src={UserPic} alt="userphoto" />
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <div className="userdet">
                            <div className="userposttimes">
                                <h3>
                                    Teacher     
                                </h3>
                                <p className="tim"> 12:40 pm</p>
                            </div>
                            <p className="text">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             </p>
                        </div>
                        </div>

                        <div className="replydiv">
                        <img src={UserPic} alt="userphoto" />
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <div className="userreply">
                            <input style={{border:'none', width:'100%', background:'#FAFAFA'}} className="text" placeholder="|Write a comment.." />
                            <button className="replybtn"> <img src={PostIcon} /> </button>
                        </div>
                        </div>

                    </div>
                    <br />
                    <div className= "postlist">
                        <img src={UserPic} alt="userphoto" />
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <div className="userdet">
                            <div className="userposttimes">
                                <h3>
                                    Username     
                                </h3>
                                <p className="tim"> 12:40 pm</p>
                            </div>
                            <p className="text">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
                             </p>
                        </div>
                    </div>
                    <br />
                    <div className= "postlist">
                        <img src={UserPic} alt="userphoto" />
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <div className="userdet">
                            <div className="userposttimes">
                                <h3>
                                    Username     
                                </h3>
                                <p className="tim"> 12:40 pm</p>
                            </div>
                            <p className="text">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
                             </p>
                        </div>

                        

                    </div>
                    <br />
                    <div className= "postlist">
                        <img src={UserPic} alt="userphoto" />
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <div className="userdet">
                            <div className="userposttimes">
                                <h3>
                                    Username     
                                </h3>
                                <p className="tim"> 12:40 pm</p>
                            </div>
                            <p className="text">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
                             </p>
                        </div>
                    </div>
                    <br />
                   
                  
                    {posts.map( (poststext) => {
                        return  <> <div className= "postlist">
                        <img src={UserPic} alt="userphoto" />
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <div className="userdet">
                            <div className="userposttimes">
                                <h3>
                                    Username     
                                </h3>
                                <p className="tim"> 12:40 pm</p>
                            </div>
                            <p className="text">
                            {poststext}
                             </p>
                        </div>
                    </div>
                    <br /></>
                    })}
                </div>
                
            </div>
        )
    
}
export default Postpage;