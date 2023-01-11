import React,{useContext} from 'react';

import { StoreContext } from "../../context/StoreContext";

export default function Profile() {
     const { homepageState, homepageDispatch } = useContext(StoreContext);

      const {user} = homepageState
  return (
    <>
     <div>
        <div>
            <p>Account</p>
            
            <div>
              <p>First Name</p>
              <p>{user['profileImage']}</p>
              <img src={user.profileImage} alt='profile' />
            </div>
        </div>
        <div>
          
        </div>
     </div>
     

    </>
  )
}
