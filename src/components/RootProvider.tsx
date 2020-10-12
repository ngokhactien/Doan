import React from "react";
import { useLocalStorage } from "react-use";
import { keyUserLocalStorage } from "~@/constants";
import { createHsrClient } from "~@/utils/fe";

interface IDefaultValue {
  user: {
    email: string;
    firstName: string;
    role: string;
    lastName: string;
    token: string;
  };
  hsrClient: any;
  setUser: any;
}
const defaultValue: IDefaultValue = {
  user: null,
  hsrClient: null,
  setUser: null
};

const RootContext = React.createContext(defaultValue);

export const useLogout = () => {
  const { setUser } = React.useContext(RootContext);
  return () => setUser("");
};

export const useUser = () => {
  const { user, setUser } = React.useContext(RootContext);
  return [user, setUser];
};

export const RootProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(keyUserLocalStorage, null);

  const hsrClient = React.useMemo(
    () => {
      if (!user) {
        // retur anonymous client
        return createHsrClient();
      }
      return createHsrClient(user);
      // return authed client
    },
    [user]
  );
  return (
    <RootContext.Provider value={{ user, hsrClient, setUser }}>
      {children}
    </RootContext.Provider>
  );
};
export default RootContext;