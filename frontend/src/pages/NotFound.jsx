<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-6">
      <h1 className="text-9xl font-bold text-indigo-600 opacity-20">404</h1>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-main">Page Not Found</h2>
        <p className="text-muted max-w-xs mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary flex items-center gap-2 hover-lift cursor-pointer"
      >
        <Home size={18} />
        Back to Home
=======
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const NotFound = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  // navigate back to Dashboard/ Login if unauthenticated
  const handleGoHome = () => {
    navigate(token ? "/dashboard" : "/login");
  };

  return (
    <div className="surface-bg px-10 py-15 rounded-2xl w-full max-w-md flex flex-col items-center gap-6 text-center animate-in">

      <h1 className="text-5xl font-bold text-main">404</h1>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-main">Page Not Found</h2>

        <p className="text-muted text-sm">
          The page you are looking for does not exist.
        </p>
      </div>

      <button
        onClick={handleGoHome}
        className="btn btn-primary hover-lift cursor-pointer"
      >
        Go Home
>>>>>>> main
      </button>
    </div>
  );
};

export default NotFound;
