import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
                    <img src={Lorem} alt="Lorem" />  <Link to="/dashboard" style={{textDecoration:'none', color:'white'}}>  Lorem</Link>
                </div>
                <div className="sidebox1">
                    <img src={Ipsum} alt="Ipsum" /> <Link to="/dashboard/uisecond" style={{textDecoration:'none', color:'white'}}> Ipsum</Link> 
                </div>
            </div>
        )
    }
}