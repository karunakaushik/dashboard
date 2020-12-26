import React, { Component } from 'react'
import Postpage from './posts'
import Sidebar from './sidebar'
import './uisecond.css'
export default class UISecond extends Component{
    render(){
        return(
            <div className="uisecondoutercontainer">
                <div className="uisecondsidebarbox">
                    <Sidebar />
                </div>
                <div className="postdivcont">
                    <Postpage />
                </div>
            </div>
        )
    }
}