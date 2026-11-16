/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const isLoggedIn = !!user;

  const checkUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/me`,
        {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        },
      );

      if (!response.ok) {
        setUser(null);
        return;
      }

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.log("Auth Error:", error.message);
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authLoading,
        setAuthLoading,
        isLoggedIn,
        checkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
