import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [phoneInfo, setPhoneInfo] = useState("");
  const [create, setCreate] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState("");

  return (
    <UserContext.Provider
      value={{
        phoneNumbers,
        setPhoneNumbers,
        modalState,
        setModalState,
        phoneInfo,
        setPhoneInfo,
        create,
        setCreate,
        selectedId, 
        setSelectedId,
        search, 
        setSearch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
