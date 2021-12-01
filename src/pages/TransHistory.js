import React from 'react'
import NavbarMobile from './NavbarMobile'
import QuickDashboard from './QuickDashboard'

export default function TransHistory() {
    return (
        <div className="holdings-transHistory-section">

            <div className="holdings-transHistory-username-col">
                <div className="">Transaction history</div>
                {/* <!-- <div>Reports</div> --> */}
                <div>Yash Sahu</div>
            </div>

            <div className="transactions holdings-header">
                <div className="stockname salsa">Stock Name</div>
                <div className="salsa"></div>
                <div className="salsa">Qty.</div>
                <div className="salsa">Avg. Price</div>
                <div className="salsa">Trans. Val.</div>
                <div className="salsa">Date</div>
                <div className="salsa">Time</div>
            </div>
            <div className="holdings-page">
                <div className="transactions">
                    <div className="stockname">Stock 1</div>
                    <div className="transType">Bought</div>
                    <div><p className="table-extra-text">Qty : &nbsp; </p>100</div>
                    <div><p className="table-extra-text">Transaction Price : &nbsp; </p>$123</div>
                    <div className="transValue">transVal</div>
                    <div >13/04/2020</div>
                    <div>08:34:56:45</div>
                </div>
                <div className="transactions">
                    <div className="stockname">Stock 1</div>
                    <div>Bought</div>
                    <div><p className="table-extra-text">Qty : &nbsp; </p>100</div>
                    <div><p className="table-extra-text">Transaction Price : &nbsp; </p>$123</div>
                    <div className="transValue">transVal</div>
                    <div >13/04/2020</div>
                    <div>08:34:56:45</div>
                </div>
                <div className="transactions">
                    <div className="stockname">Stock 1</div>
                    <div>Bought</div>
                    <div><p className="table-extra-text">Qty : &nbsp; </p>100</div>
                    <div><p className="table-extra-text">Transaction Price : &nbsp; </p>$123</div>
                    <div className="transValue">transVal</div>
                    <div >13/04/2020</div>
                    <div>08:34:56:45</div>
                </div>   
            </div>
            <QuickDashboard/>
            <NavbarMobile/>
        </div>
    )
}
