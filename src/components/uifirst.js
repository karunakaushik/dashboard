import React, { Component } from 'react'
import Notice from './notification'
import Sidebar from './sidebar'
import Graphic from './image/Graphic.png'
import Search from './image/search.png'
import './uifirst.css'
import Notepad from './notepad'
export default class Uifirst extends Component{
    render(){
        return(

            <div className="outercontUI">
                <div className="sidecontainer">
                     <Sidebar />
                </div>
                <div className="outermaincontainer"> 
                    <div><img src={Search} alt="search" /> Search</div>
                
                    <div className="maincontainer">
                        <div className="submaincontainer">
                            <div className="graphicdiv">
                                <div className="salesreportdiv">
                                    <h1>Sales Report September 2020</h1>
                                    <div className="imggraph">
                                        <img src={Graphic} alt="Graphic" />
                                    </div>
                                </div>
                                <div className="salesdetail">
                                    <p>17 Sep</p>
                                    <br />
                                
                                <div className="revenue">
                                    <p>$1,204.33</p>
                                    <p>Revenue</p>
                                </div>
                                    <br />
                                <div className="quotation">
                                    <p>33</p>
                                    <p>Quotations</p>
                                </div>
                            </div>
                        </div>
                          
                          <br />
                        <div className="lowerouterdiv">

                            <div className="notecontainer">
                                <Notepad />
                            </div>

                            <div className="lowergraphdetail" ></div>
                        </div>
                        
                        </div>

                    
                        <div className="noticeuifirst">
                            <Notice />
                        </div>
               </div>

              

                </div>
                
            </div>
        )
    }
}