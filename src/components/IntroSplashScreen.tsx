import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Sparkles, ArrowLeft } from 'lucide-react';

interface IntroSplashScreenProps {
  onComplete?: () => void;
}

export function IntroSplashScreen({ onComplete }: IntroSplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white overflow-hidden dir-rtl"
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-xl">
            {/* Animated Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-20 h-20 rounded-2xl bg-emerald-600 p-0.5 shadow-xl mb-6"
            >
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-emerald-400" />
              </div>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>الخيارات التعليمية المميزة في ماليزيا</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                بوابتك للدراسة في ماليزيا
              </h1>

              <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                مكتبك الاستشاري الأول للقبولات المعتمدة، خصومات حصرية، ومتابعة كاملة حتى الوصول
              </p>
            </motion.div>

            {/* Progress Bar & Manual Skip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4 w-full"
            >
              <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.2, ease: "linear" }}
                  className="h-full bg-emerald-500"
                />
              </div>

              <button
                onClick={handleClose}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-emerald-400 transition-colors pt-2 cursor-pointer"
              >
                <span>دخول الموقع مباشرة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
