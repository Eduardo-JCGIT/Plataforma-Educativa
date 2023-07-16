import React from 'react';
import Nav from '../welcome/Nav';
import ProfileBack from './ProfileBack';
import ProfileCont from './ProfileCont';

const Profile = () => {
  return (
    <div>
    <Nav/>
    <div>
        <ProfileBack/>
    </div>
    <div>
    <ProfileCont/>  
    </div>
    </div>
  )
}

export default Profile


