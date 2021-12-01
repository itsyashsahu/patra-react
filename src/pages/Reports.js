import React from 'react'
import NavbarMobile from './NavbarMobile'
export default function Reports() {
    return (

        <div className="holdings-transHistory-section">

        <div className="holdings-transHistory-username-col">
            <div className="">Reports</div>
            <div>Yash Sahu</div>
        </div>

        <div className=" recent-reports reports-header">
            <div className="stockname salsa">Stock Name</div>
            <div className="salsa">Avg. Buy Price</div>
            <div className="salsa">Avg. Sell Price</div>
            <div className="salsa">Qty.</div>
            <div className="salsa">P&L</div>
            <div className="salsa">%Return</div>
        </div>
        <div className="holdings-page">
            <div className="recent-reports">
                <div className="stockname">Stock 1</div>
                <div><p className="table-extra-text">Buy : &nbsp; </p>$123</div>
                <div><p className="table-extra-text">Sell : &nbsp; </p>$143</div>
                <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                <div >$2000</div>
                <div>34%</div>
            </div>
            <div className="recent-reports">
                <div className="stockname">Stock 1</div>
                <div><p className="table-extra-text">Buy : &nbsp; </p>$123</div>
                <div><p className="table-extra-text">Sell : &nbsp; </p>$143</div>
                <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                <div >$2000</div>
                <div>34%</div>
            </div>
            <div className="recent-reports">
                <div className="stockname">Stock 1</div>
                <div><p className="table-extra-text">Buy : &nbsp; </p>$123</div>
                <div><p className="table-extra-text">Sell : &nbsp; </p>$143</div>
                <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                <div >$2000</div>
                <div>34%</div>
            </div>
            <div className="recent-reports">
                <div className="stockname">Stock 1</div>
                <div><p className="table-extra-text">Buy : &nbsp; </p>$123</div>
                <div><p className="table-extra-text">Sell : &nbsp; </p>$143</div>
                <div><p className="table-extra-text">Qty. &nbsp;</p>100</div>
                <div >$2000</div>
                <div>34%</div>
            </div>
        </div>

        {/* <!-- apply conditional view for this  -->
        <!-- <div className="holdings-totaldaypnl">
            <div className="holdings-totaldaypnl-label">Today's P&L</div>
            <div>+3%</div>
            <div>+3%</div>
        </div> --> */}
                   
        <div className="quick-dashboard">
            <div className="quick-dashboard-header">
                <div className="">Invested Amt.</div>
                <div>Current Val.</div>
                <div>P&L</div>
                <div>% Return</div>
            </div> 
            <div className="quick-dashboard-numbers">
                <div className="">$100,000</div>
                <div>$123,000</div>
                <div>$23,000</div>
                <div>23%</div>
            </div>
        </div>
        
        <NavbarMobile/>

        </div>
    )
}
