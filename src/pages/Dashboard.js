import React from 'react'
// import {Link} from 'react-router-dom';
import NavbarMobile from './NavbarMobile';

export default function Dashboard() {
    return (
            <div className="dashboard">
                <div className="dashboard-text salsa name">
                    Hey Yash Sahu
                </div>
                <div className="pnl">
                    <span className="">Your Current P&L</span>
                    <span className="greenColor">+$2300</span>
                </div>
                <div className="pnlinfo">
                    <div className="pnl-info-label">
                        <span className="">Money Invested</span>
                        <span className="greenColor">1 Lakh</span>
                    </div>
                    <div className="pnl-info-numbers">
                        <span className="">Percentage of Return</span>
                        <span className="greenColor">+23%</span>
                    </div>
                </div>

                <div className="dashboard-text salsa">
                    Reports for Your recent Transactions 
                </div>

                <div className="recent-reports-header">
                    <div className="stockname salsa">Stock Name</div>
                    <div className="salsa">Avg. Buy Price</div>
                    <div className="salsa">Avg. Sell Price</div>
                    <div className="salsa">Qty.</div>
                    <div className="salsa">P&L</div>
                    <div className="salsa">% Return</div>
                </div>

                <div className="recent-reports-section">

                {/* <!-- <div className="recent-reports-area"> --> */}
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    {/* <!-- from here  --> */}
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    <div className="recent-reports">
                        <div className="stockname">Stock 1</div>
                        <div><p className="table-extra-text">Buy : &nbsp;</p> $123</div>
                        <div><p className="table-extra-text">Sell : &nbsp;</p> $143</div>
                        <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                        <div >+$2000</div>
                        <div>+34%</div>
                    </div>
                    
                    
                    {/* <!-- till here  --> */}
                {/* <!-- </div> --> */}
                </div>

                <NavbarMobile/>

                {/* <!-- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores tempore ex, natus quos magnam animi harum libero ut voluptate velit blanditiis ratione aliquid deserunt molestias incidunt porro necessitatibus aperiam dolor tenetur? --> */}
            </div>
    )
}
