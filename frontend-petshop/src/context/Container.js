import { useEffect } from 'react';
import { useState } from 'react';
import { StoreContext } from '../context/StoreContext.js';
import { useNavigate } from 'react-router-dom';

export default function Container(props) {
  const [user, setUser] = useState('');
  const [status, setStatus] = useState(false);
  //display - user icon
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    
      const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:8000/users/verifyusertoken', {
        method: 'GET',
        headers: { token: token },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            setUser(result.data);
           console.log(user)
          } else {
            navigate('/login');
          }
        });
    }
    
  }, []);

  return (
    <StoreContext.Provider
    value={{  user, setUser ,state,setState ,status, setStatus}}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
