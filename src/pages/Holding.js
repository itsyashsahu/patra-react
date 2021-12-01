import React from 'react'
import NavbarMobile from './NavbarMobile'
import QuickDashboard from './QuickDashboard'
export default function Holding() {
    return (
            <div className="holdings-transHistory-section">

                <div className="holdings-transHistory-username-col">
                    <div className="">Holdings</div>
                    <div>Yash Sahu</div>
                </div>

                <div className="holdings holdings-header">
                    <div className="stockname salsa">Stock Name</div>
                    <div className="salsa">Qty.</div>
                    <div className="salsa">Avg. Cost</div>
                    <div className="salsa">Cur. Val.</div>
                    <div className="salsa">LTP</div>
                    <div className="salsa">P&L</div>
                    <div className="salsa">Net Chg.</div>
                </div>
                <div className="holdings-page">
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    <div className="holdings">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p> 100</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p>$123</div>
                        <div><p className="table-extra-text">Curr. Val. : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">LTP : &nbsp;</p>$143</div>
                        <div >$2000</div>
                        <div>34%</div>
                    </div>
                    
                    
                    {/* <!-- till here --> */}
                    
                    {/* <!-- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores tempore ex, natus quos magnam animi harum libero ut voluptate velit blanditiis ratione aliquid deserunt molestias incidunt porro necessitatibus aperiam dolor tenetur? --> */}
                </div>
                <div className="holdings-totaldaypnl">
                    <div className="holdings-totaldaypnl-label">Today's P&L</div>
                    <div>+3%</div>
                    <div>+3%</div>
                </div>

                <QuickDashboard/>
                <NavbarMobile/>
                
            </div>
                        
    )
}
