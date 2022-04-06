import React, { useEffect, useState } from 'react'
import './widgetSm.css'
import { Visibility } from '@material-ui/icons'

export const WidgetSm = () => {
    
    const [users, setUser] = useState([]);

    useEffect(() => {
        const url = "https://randomuser.me/api/?results=5";

        const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            const {results} = json;
            setUser(results);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();

    }, []);

  return (
    <div className='widgetSm'>
        <h3 className="widgetSmTitle">New Join Members</h3>            
                <div className='widgetSmInfo'>     
                    {users.map((user, idx) => {
                       return (
                            <ul className="widgetSmList">
                                <li className='widgetSmListItem'>
                                    <img src={user.picture.large} className='widgetSmImg' alt={idx}/>
                                    <div className="widgetSmInfo">
                                        <h4 className='widgetSmName'>{user.name.first} {user.name.last}</h4>
                                        <p>{user.email}</p>
                                    </div>
                                    <button className='widgetSmbtn'><Visibility className='widgetSmbtnIcon'/> Display</button>
                                </li>
                            </ul>
                        )
                    })}
                </div>
    </div>
  )
}
