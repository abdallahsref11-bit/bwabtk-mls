import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-40 dir-rtl">
      {/* Main Floating Button */}
      <a
        href="https://wa.me/601128778837?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Contact"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/50 transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30"></span>
        <MessageCircle className="w-7 h-7 fill-slate-950 text-emerald-500" />
      </a>
    </div>
  );
}

