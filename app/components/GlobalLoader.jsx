"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader({children}) {
 const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300); // Delay hiding
          return 100;
        }
        return prev + 2;
      });
    }, 10); // Adjust speed here

    return () => clearInterval(interval);
  }, [loading]);

  return (
   <>
   
    <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 bg-white dark:bg-neutral-950 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-gray-900 dark:text-white">
              {count}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}</>
  );
}
