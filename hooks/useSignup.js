"use client";

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = (phone, password) => {
    setIsLoading(true);
    localStorage.setItem("user", JSON.stringify(phone));

    // Dispatch the Login Action
    dispatch({ type: "LOGIN", payload: phone });

    // Set Loading
    setIsLoading(false);
  };

  return { error, isLoading, signup };
};
