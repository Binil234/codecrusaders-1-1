import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  FileText,
  Calendar,
  Gamepad2,
  AlertTriangle,
  Target,
  Lock,
  Award,
  Users,
  Briefcase,
  Droplets,
  Plus,
  Minus,
  Accessibility, // Icon for the new card
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

// --- THIS ARRAY IS NOW RESTORED ---
const features = [
  {
    to: "/goals",
    icon: Target,
    title: "Goals",
    description: "Set and track your personal goals.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    to: "/vault",
    icon: Lock,
    title: "Vault",
    description: "A safe space for your thoughts and feelings.",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    to: "/games",
    icon: Gamepad2,
    title: "Games",
    description: "Mindful games to relax and focus.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    to: "/community",
    icon: Users,
    title: "Community",
    description: "Connect with others in a safe space.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    to: "/assessment",
    icon: Brain,
    title: "Assessment",
    description: "Understand your mental well-being.",
    color: "text-fuchsia-500",
    bgColor: "bg-fuchsia-500/10",
  },
  {
    to: "/rewards",
    icon: Award,
    title: "Rewards",
    description: "Earn points and unlock achievements.",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    to: "/consultation",
    icon: Briefcase,
    title: "Consultation",
    description: "Book a session with a professional.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    to: "/resources",
    icon: FileText,
    title: "Resources",
    description: "Articles, videos, and more.",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    to: "/daily-checkin",
    icon: Calendar,
    title: "Daily Check-in",
    description: "Log your mood and track your progress.",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    to: "/sos",
    icon: AlertTriangle,
    title: "SOS",
    description: "Immediate help in an emergency.",
    color: "text-slate-500",
    bgColor: "bg-slate-500/10",
  },
];

const Home = () => {
  const [waterCount, setWaterCount] = useState(2);

  return (
    <div className="relative overflow-hidden min-h-screen p-4 bg-gradient-soft">
      {/* Animated background accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-amber-400/20 via-rose-500/20 to-emerald-400/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
      />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400">
            Welcome to MindCare
          </h1>
          <p className="text-lg text-muted-foreground">
            Your digital companion for mental well-being, built for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Accessibility Hub Card */}
          <motion.div
            className="xl:col-span-2 flex"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -2 }}
         >
            <Link to="/settings" className="flex w-full">
              <Card className="shadow-card bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 transition-smooth group w-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                    <Accessibility className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Accessibility Hub</CardTitle>
                  <CardDescription className="text-white/90">
                    Personalize your experience with high-contrast mode, ADHD-friendly fonts, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="group-hover:underline">
                    Customize Your Settings
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Hydration Tracker */}
          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -2 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Hydration Tracker</span>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Droplets className="text-primary" />
                  </motion.div>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold mb-4">
                  {waterCount} / 8 glasses
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setWaterCount(Math.max(0, waterCount - 1))}
                    className="transition-transform active:scale-95"
                  >
                    <Minus />
                  </Button>
                  <Button size="icon" onClick={() => setWaterCount(waterCount + 1)} className="transition-transform active:scale-95">
                    <Plus />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other features are mapped here */}
          {features.map((feature, idx) => (
            <motion.div
              key={feature.to}
              className="flex"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.03 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={feature.to} className="flex w-full">
                <Card className="shadow-card hover:shadow-wellness hover:ring-1 ring-primary/20 transition-smooth group w-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div
                      className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-primary group-hover:underline">
                      Go to {feature.title}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;