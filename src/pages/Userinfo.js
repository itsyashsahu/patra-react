import React from 'react'
import {Link} from 'react-router-dom'
import NavbarMobile from './NavbarMobile'
import QuickDashboard from './QuickDashboard'

export default function Userinfo() {
    return (
            <div class="userInfo">
                <div class="userInfoImg">
                    <svg class="userImgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></svg>
                    <div class="userInfodetails">
                        <div class="userInfo-username">Yash Sahu</div>
                        <div class="userInfo-clientId">Client ID : 26745</div>
                        <div class="userInfo-proffession">Proffession</div>
                    </div>
                    <Link to="#" class="userInfo-editIcon" >
                        {/* <!-- edit icon svg --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"/></svg>
                    </Link>
                </div>
                <div class="userInfo-split">
                    <div>
                        {/* <!-- <div>Edit Your Information</div> --> */}
                        <div><Link to="#" >Change Your Password</Link> </div>
                        <div><Link to="#"> Forgot Password</Link> </div>
                        <div><Link to="#"> Recieve Alerts on Mail</Link> </div>
                        <div><Link to="#"> Recieve Notifications</Link> </div>
                    </div>
                    <div>
                        <div> Funds </div>
                        <div class="userInfo-split-details" >
                            <span to="#"> Funds Available </span>
                            <span to="#"> $400 </span>
                        </div>
                        <div class="userInfo-split-details" >
                            <Link to="#"> Funds Used </Link>
                            <Link to="#"> $400 </Link>
                        </div>
                        <div><Link to="#"> Request More Virtual Money </Link></div>
                    </div>
                </div>
            <NavbarMobile/>

            <QuickDashboard/>
        </div>
    )
}
