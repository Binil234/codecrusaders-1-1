import React, { useEffect } from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import HoverReceiver from "@/visual-edits/VisualEditsMessenger";
import { ThemeProvider } from "next-themes";

import { AccessibilityProvider } from "@/hooks/AccessibilityContext";

// Core Components
import Header from "@/components/ui/header";
import { Chatbot } from "@/components/ui/chatbot";
import ScrollProgress from "@/components/ui/scroll-progress";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// All Page Imports
import Home from "@/pages/Index";
import Profile from "@/pages/Profile";
import Resources from "@/pages/Resources";
import SOS from "@/pages/SOS";
import Assessment from "@/pages/Assessment";
import DailyCheckin from "@/pages/DailyCheckin";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import DisabilityCheck from "@/pages/DisabilityCheck";
import Games from "@/pages/Games";
import Goals from "@/pages/Goals";
import Vault from "@/pages/Vault";
import Rewards from "@/pages/Rewards";
import Community from "@/pages/Community";
import Consultation from "@/pages/Consultation";
import AdminDashboard from "@/pages/AdminDashboard"; // Import the new Admin Dashboard

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* User-facing routes */}
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/sos" element={<PageTransition><SOS /></PageTransition>} />
        <Route path="/assessment" element={<PageTransition><Assessment /></PageTransition>} />
        <Route path="/daily-checkin" element={<PageTransition><DailyCheckin /></PageTransition>} />
        <Route path="/settings" element={<PageTransition><Settings /></PageTransition>} />
        <Route path="/disability-check" element={<PageTransition><DisabilityCheck /></PageTransition>} />
        <Route path="/games" element={<PageTransition><Games /></PageTransition>} />
        <Route path="/goals" element={<PageTransition><Goals /></PageTransition>} />
        <Route path="/vault" element={<PageTransition><Vault /></PageTransition>} />
        <Route path="/rewards" element={<PageTransition><Rewards /></PageTransition>} />
        <Route path="/community" element={<PageTransition><Community /></PageTransition>} />
        <Route path="/consultation" element={<PageTransition><Consultation /></PageTransition>} />
        
        {/* Admin route */}
        <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />

        {/* Catch-all route */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

// Add a tiny helper to toggle the scroll class
const ScrollBg = () => {
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AccessibilityProvider>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster />
        <HoverReceiver />
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-soft">
            <Header />
            <ScrollProgress />
            <RoutesWithAnimation />
            <Chatbot />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AccessibilityProvider>
  </QueryClientProvider>
);

export default App;