import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from 'react-native';

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
};

type AuthProvideProps = {
  children: ReactNode;
};

const USER_COLLECTION = '@dalepizza:users';

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProvideProps) => {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const loadUserStorageData = async () => {
    setIsLogging(true);

    const storageUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storageUser) {
      const userData = JSON.parse(storageUser) as User;
      setUser(userData);
    }

    setIsLogging(false);
  };

  const signOut = async (): Promise<void> => {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  };

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      return Alert.alert('Login', 'Email and password are required');
    }

    setIsLogging(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then(async (profile) => {
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin,
              };

              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userData)
              );

              console.log('Login Success');
              console.log(userData);
              setUser(userData);
            }
          })
          .catch(() =>
            Alert.alert('Login', 'Something went wrong when signIn')
          );
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

  const forgotPassword = async (email: string): Promise<void> => {
    if (!email) {
      return Alert.alert('Redifine Password', 'Please enter an valid email');
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          'Reset Password',
          'Check your mail box to Reset your password'
        )
      )
      .catch(() =>
        Alert.alert(
          'Reset Password',
          'Error: Couldnt send the email to Reset a password'
        )
      );
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogging, forgotPassword, signIn, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
