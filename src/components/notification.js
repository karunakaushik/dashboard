import React, { Component } from 'react'
import './notification.css'
export default class Notice extends Component {
    render(){
        return(
            <div className="noticecont">
                <div className="headernotice">
                    <div className="noticeheader">Notifications</div>
                    <div className="eventheader">Events</div>
                </div>
                <div className="noticedetaildiv">
                    <div className="deatilinnerdiv">
                         <div className="deatil1">
                             <div className="rect1"> </div>
                             <div className="rectdis">
                                 <p className="postion">Admin</p>
                                 <p className="dis">Your faculty uploaded the syllabus.</p>
                                 <p className="time">3 minutes ago</p>
                             </div>
                         </div>
                         <hr style={{width:'100%', color:"#ECECEC"}}/>
                         <div className="deatil1">
                             <div className="rect2"> </div>
                             <div className="rectdis">
                                 <p className="postion">Student</p>
                                 <p className="dis">Your faculty uploaded the syllabus.</p>
                                 <p className="time">3 minutes ago</p>
                             </div>
                         </div>
                         <hr style={{width:'100%', color:"#ECECEC"}}/>
                         <div className="deatil1">
                             <div className="rect3"> </div>
                             <div className="rectdis">
                                 <p className="postion">Teacher</p>
                                 <p className="dis">Your faculty uploaded the syllabus.</p>
                                 <p className="time">3 minutes ago</p>
                             </div>
                         </div>
                         <hr style={{width:'100%', color:"#ECECEC"}}/>
                         <div className="deatil1">
                             <div className="rect4"> </div>
                             <div className="rectdis">
                                 <p className="postion">Admin</p>
                                 <p className="dis">Your faculty uploaded the syllabus.</p>
                                 <p className="time">3 minutes ago</p>
                             </div>
                         </div>
                         <hr style={{width:'100%', color:"#ECECEC"}}/>
                         <div className="deatil1">
                             <div className="rect4"> </div>
                             <div className="rectdis">
                                 <p className="postion">Admin</p>
                                 <p className="dis">Your faculty uploaded the syllabus.</p>
                                 <p className="time">3 minutes ago</p>
                             </div>
                         </div>
                         <hr style={{width:'100%', color:"#ECECEC"}}/>
                         <div className="deatil1">
                             <div className="rect4"> </div>
                             <div className="rectdis">
                                 <p className="postion">Admin</p>
                                 <p className="dis">Your faculty uploaded the syllabus.</p>
                                 <p className="time">3 minutes ago</p>
                             </div>
                         </div>
                    </div>
                    <br />
                <div className="viewall">View all</div>
                </div>
            </div>
        )
    }
}