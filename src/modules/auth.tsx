import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export interface IAuthRouteProps {
  children: any;
}

const AuthRoute = (props: IAuthRouteProps) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("Unauthorized");
        navigate("/login");
      }
    });
    return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>Loading ...</p>;

  return <div>{children}</div>;
};

export default AuthRoute;
