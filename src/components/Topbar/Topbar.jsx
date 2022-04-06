import React from 'react';
import './topbar.css';
import  Image  from '../image/myphoto.jpg';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <div className="topIconBadge">5</div>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src={Image} alt="" className="topAdvator" />
            </div>
        </div>
    </div>
  )
}
