
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedTooth from '@/components/AnimatedTooth';
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <AnimatedTooth size={80} animationType="wiggle" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-dental-blue">
          Oops! 404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page seems to have lost its way, just like a missing tooth!
        </p>
        <a 
          href="/" 
          className="btn btn-primary inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </a>
      </div>
      
      <div className="absolute bottom-10 left-10 opacity-20">
        <AnimatedTooth size={60} color="#FFC6D9" animationType="float" />
      </div>
      <div className="absolute top-10 right-10 opacity-20">
        <AnimatedTooth size={60} color="#A8E6CF" animationType="pulse" />
      </div>
    </div>
  );
};

export default NotFound;
