import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Postpage from './posts'
import Sidebar from './sidebar'
import './uisecond.css'
export default class UISecond extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="uisecondoutercontainer">
                <div className="uisecondsidebarbox">
                    <Sidebar />
                </div>
                <div className="postdivcont">
                    <Postpage />
                </div>
            </div>
             <div className="showpreviousUi"> <Link to="/dashboard" >Goto Previous page</Link></div>
             </React.Fragment>
        )
    }
}