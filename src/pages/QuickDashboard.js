import React from 'react'

export default function QuickDashboard() {
    return (
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
    )
}
