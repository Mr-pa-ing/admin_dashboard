import './sidebar.css';
import { Home, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, Assessment, MailOutline, Feedback, Comment, BusinessCenter } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem">
                            <Home/> <span className='itemText'>Home</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline /> <span className='itemText'>Analytics</span>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp /> <span className='itemText'>Sales</span>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className='link'>
                        <li className="sidebarListItem">
                            <PermIdentity /> <span className='itemText'>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <Storefront /> <span className='itemText'>Products</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney /> <span className='itemText'>Transcations</span>
                    </li>
                    <li className="sidebarListItem">
                        <Assessment /> <span className='itemText'>Reports</span>
                    </li>
                </ul>
            </div>

             <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline/> <span className='itemText'>Mail</span>
                    </li>
                    <li className="sidebarListItem">
                        <Feedback /> <span className='itemText'>Feedback</span>
                    </li>
                    <li className="sidebarListItem">
                        <Comment /> <span className='itemText'>Messages</span>
                    </li>
                </ul>
            </div>

             <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <BusinessCenter/> <span className='itemText'>Manage</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
