import React from 'react'
import './widgetLg.css'

const Button = ({type}) => {
  return <button className={'widgetLgBtn ' + type}>{type}</button>
}

export const WidgetLg = () => {
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      
          <table className='widgetLgTable'>

            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customers</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>

            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://randomuser.me/api/portraits/men/67.jpg' alt='' className='widgetLgImg' />
                <span className='widgetLgName'>Skye Mazereeuw</span>
              </td>
              <td className='widgetLgDate'>2 Jun 2022</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgStatus'><Button type='Approved' /></td>
            </tr>

            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://randomuser.me/api/portraits/men/67.jpg' alt='' className='widgetLgImg' />
                <span className='widgetLgName'>Skye Mazereeuw</span>
              </td>
              <td className='widgetLgDate'>2 Jun 2022</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgStatus'><Button type='Declined' /></td>
            </tr>

            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://randomuser.me/api/portraits/men/67.jpg' alt='' className='widgetLgImg' />
                <span className='widgetLgName'>Skye Mazereeuw</span>
              </td>
              <td className='widgetLgDate'>2 Jun 2022</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgStatus'><Button type='Pending' /></td>
            </tr>

            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img src='https://randomuser.me/api/portraits/men/67.jpg' alt='' className='widgetLgImg' />
                <span className='widgetLgName'>Skye Mazereeuw</span>
              </td>
              <td className='widgetLgDate'>2 Jun 2022</td>
              <td className='widgetLgAmount'>$122.00</td>
              <td className='widgetLgStatus'><Button type='Approved' /></td>
            </tr>

          </table>
        
    </div>
  )
}
