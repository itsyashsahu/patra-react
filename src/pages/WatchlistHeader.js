import React from 'react';
// import '../assests/style.css';

export default function WatchlistHeader() {
    return (
            <div class="watchlist-header">
                <div class="watchlist-header-items">
                    <span class="watchlist-header-items-label shift-nifty">Nifty</span>
                    <span class="watchlist-header-items-number">
                        <span class="watchlist-header-items-number-change">+123% </span>
                        17000
                    </span>
                </div>
                <div class="watchlist-header-items">
                    <span class="watchlist-header-items-label">Sensex</span>
                    <span class="watchlist-header-items-number">
                        <span class="watchlist-header-items-number-change">+123% </span>
                        17000
                    </span>
                </div>
            </div>
    )
}
