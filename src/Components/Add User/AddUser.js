import React from 'react'
import './adduser.css'

function AddUser() {
  return (
    <div className='main'>
      <div>
        <div style={{fontSize:'13px', color:'#4D4D4D' }}>Good morning</div>
        <div style={{fontSize:'20px', color:'#000000' }}>Dr. Ramesh Thakur</div>
      </div>
      <div>
        <button className='create_btn' >Create Prescription</button>
        <button className='add_btn'>Add User</button>
      </div>
    </div>
  )
}

export default AddUser
