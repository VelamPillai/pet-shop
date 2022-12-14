import { useEffect } from 'react';
import { useState } from 'react';
import StoreContext from '../context/StoreContext.js';
import { useNavigate } from 'react-router-dom';

export default function Container(props) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/users/verifyusertoken', {
        method: 'GET',
        headers: { token: token },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            setUser(result.data);
          } else {
            navigate('/login');
          }
        });
    }
  }, [navigate]);

  return (
    <StoreContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}
