import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAccessibility } from "../hooks/AccessibilityContext";

const NotFound = () => {
  const location = useLocation();
  const { ttsEnabled, speakText, highContrast, adhdMode } = useAccessibility();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    if (ttsEnabled && speakText) {
      speakText(`404 Error. Page not found. You attempted to access ${location.pathname}`);
    }
  }, [location.pathname, ttsEnabled, speakText]);

  return (
    <div
      className={`flex min-h-screen items-center justify-center ${
        highContrast ? "bg-black text-white" : "bg-gradient-soft text-foreground"
      } ${adhdMode ? "text-lg font-sans" : ""}`}
    >
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-primary hover:underline"
          onMouseEnter={() => ttsEnabled && speakText && speakText("Return to Home")}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;