import React from 'react'
import './profile.css';

export default function Profile({ data }) {
  return (
      <div className='container'>
        <h3>This is my profile page</h3>
        <img src={data.pic} alt="profile pic" height={100} width={100} />
        <h2>Name: {data.name}</h2>
        <h2>Branch: {data.branch}</h2>
        <h2>Section: {data.section}</h2>
      </div>
  )
}

