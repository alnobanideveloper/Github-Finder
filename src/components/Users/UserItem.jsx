import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url} }) => {
  return (
    <div className='compact side bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body card shadow-md'>
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img
                    src={avatar_url}
                    alt='Profile-picture'
                    className='round-img'
                    style={{ width: '60px' }}
                    />
                </div>
            </div >

            <div>
             <h2 className='card-title'>{login}</h2>
             <Link to={`/users/${login}`} className='text-base-content text-opacity-40'>
             visit Profile
             </Link>
            </div>

      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
