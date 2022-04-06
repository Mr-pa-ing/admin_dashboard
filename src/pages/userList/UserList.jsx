import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlined, EditOutlined } from '@material-ui/icons';
import { userRows } from '../../dummydata';
import './userList.css';

const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 300, renderCell: (params) => {
          return (<div className='users'>
                    <img src={params.row.avator} alt="" />
                    <h2>{params.row.username}</h2>
                  </div>)
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 150
        },
        {
          field: 'transcation',
          headerName: 'Transcation',
          width: 150
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
            return (
              <div className="actionContainer">
                <Link to={'/user/'+params.id}><EditOutlined className='userListEditbtn' /></Link>
                <DeleteOutlined className='userListDeletebtn' onClick={() => handleDelete(params.id)} />
              </div>
            )
          }
        },
      ];

  return (
    <div className='userlist'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList
