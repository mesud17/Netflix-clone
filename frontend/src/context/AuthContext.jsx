import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,//update the current user state when the authentication state changes (e.g., user logs in or out) without needing to refresh the page.
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();//creating a context to manage authentication state and functions across the application.
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
//signup function
  const signup = async (email, password, username) => {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  await updateProfile(userCredential.user, {
    displayName: username,
  });
  return userCredential;
};

//login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
//logout function
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};