import { useEffect } from 'react';
import { useAuth } from './useAuth'; // custom hook to access auth
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return currentUser ? children : null;
}

export default PrivateRoute;
