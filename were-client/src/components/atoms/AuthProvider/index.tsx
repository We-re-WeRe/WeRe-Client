import useUserState from '@/hooks/useUserState';
import apiBe from '@/service';
import { getNewAccessToken } from '@/service/token';
import { getUserProfile } from '@/service/user';
import React, { useEffect } from 'react';
import Spinner from '../Spinner';

const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { user, setLoading, setUser, clearUser } = useUserState();

  useEffect(() => {
    const getUser = async () => {
      const accessToken = await getNewAccessToken().catch(err => {
        console.log('Not Logined');
        setLoading(false);
      });

      if (accessToken) {
        await getUserProfile()
          .then(res => {
            setUser(res);
            setLoading(false);
          })
          .catch(err => {
            setLoading(false);
          });
      }
    };
    getUser();

    return () => clearUser();
  }, []);

  useEffect(() => {
    const getToken = async () => {
      await getNewAccessToken().catch(err => {
        clearUser();
      });
    };

    //console.log(user);

    if (user) {
      console.log('set Refresh Interval');
      const refresh = setInterval(getToken, 1000 * 60 * 30);

      return () => {
        clearInterval(refresh);
      };
    }
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
