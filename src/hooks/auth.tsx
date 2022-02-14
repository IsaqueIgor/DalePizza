import React, { createContext, useContext, useState, ReactNode } from 'react';

import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  isLogging: boolean;
};

type AuthProvideProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProvideProps) => {
  const [isLogging, setIsLogging] = useState(false);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert('Login', 'Email and password are required');
    }

    setIsLogging(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        console.log(account);
      })
      .catch((error) => {
        const { code } = error;

        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Alert.alert('Login', 'invalid email or password');
        } else {
          return Alert.alert('Login', 'Something went wrong');
        }
      })
      .finally(() => setIsLogging(false));
  };

  return (
    <AuthContext.Provider value={{ isLogging, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
