import { useState, useEffect } from "react";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Here, you would add your authentication logic
    // For example, check if a user token exists in local storage or check session
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
}

export default useAuth;
