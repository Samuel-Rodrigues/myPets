import React, { createContext, ReactNode, useContext } from 'react';

type AuthProviderProps = { children: ReactNode };

type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

interface IAuthContextData {
  user: User;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: 'rerere',
          name: 'Samuel Rodrigues',
          email: 'carlos@gmail.com',
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
