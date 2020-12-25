import React, { Component } from 'react'
import Dashboard from './image/Shape.png';
import Lorem from './image/Shape1.png';
import Ipsum from './image/Shape2.png';
import './sidebar.css'
export default class Sidebar extends Component{
    render(){
        return(
            <div className="sidecont">
                <div className="sidebox"> 
                    <img src={Dashboard} alt="Dashboard" /> Dashboard
                </div>
                <div className="sidebox1">
                    <img src={Lorem} alt="Lorem" /> Lorem
                </div>
                <div className="sidebox1">
                    <img src={Ipsum} alt="Ipsum" /> Ipsum
                </div>
            </div>
        )
    }
}