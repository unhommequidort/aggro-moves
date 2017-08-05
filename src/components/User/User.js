import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import './User.css';

const userImg = '/assets/images/users/june/IMG_20170527_113645_393-01.jpg';

class User extends Component {
  render() {
    return (
      <div className='User'>
        <Image className='profile-pic' size='medium' shape='rounded' src={userImg} />
      </div>
    );
  }
}

export default User;
