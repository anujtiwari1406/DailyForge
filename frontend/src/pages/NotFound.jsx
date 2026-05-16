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
      </button>
    </div>
  );
};

export default NotFound;
