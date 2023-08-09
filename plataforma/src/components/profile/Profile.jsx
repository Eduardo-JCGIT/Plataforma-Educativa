import React from 'react';
import Nav from '../welcome/Nav';
import ProfileBack from './ProfileBack';
import ProfileCont from './ProfileCont';
import Footer from '../welcome/Footer';

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
    <Footer/>
    </div>
  )
}

export default Profile


