import React, { Component } from 'react'
import Notice from './notification'
import Sidebar from './sidebar'
import Graphic from './image/Graphic.png'
import Search from './image/search.png'
import Graph1 from './image/Group 39.png'
import Graph2 from './image/Path 44.png'
import './uifirst.css'
import Notepad from './notepad'
import SmallGraphchart from './smallgraph'
export default class Uifirst extends Component{
    render(){
        return(

            <div className="outercontUI">
                <div className="sidecontainer">
                     <Sidebar />
                </div>
                <div className="outermaincontainer"> 
                    <div className="searchdiv">
                        <div className="searchbox"> 
                            <img src={Search} alt="search" />&nbsp; &nbsp; Search
                        </div>    
                    </div>
                
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

                            <div className="lowergraphdetail" >
                                <div className="sublowergraphdetail1">
                                    <SmallGraphchart />
                                    <div className="inboxdiv">
                                        <p>Inbox</p>
                                       <h2>23</h2>
                                    </div>

                                </div>
                                <div className="sublowergraphdetail2">
                                      <div className="smallsmry1">
                                          <p>This Month</p>
                                          <hr />
                                          <div className="subsmallsmry1" >
                                            <p>+7.8%</p>
                                            <img src={Graph1} />
                                          </div>
                                      </div>

                                      <div className="smallsmry2">
                                          <p>Last Month</p>
                                          <hr />
                                          <div className="subsmallsmry1">
                                            <p>+67.4%</p>
                                            <img src={Graph2} />
                                          </div>
                                      </div>
                                </div>
                            </div>
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