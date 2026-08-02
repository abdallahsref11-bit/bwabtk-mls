import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Sparkles, MessageCircle, ShieldCheck, Clock, Award, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section id="hero" className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Highlight Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>بوابتك للدراسة في ماليزيا — الاستشارات والقبولات المعتمدة</span>
          </div>
        </div>

        {/* Interactive 3D Spline Scene + Spotlight Card */}
        <Card className="w-full min-h-[520px] bg-slate-900 text-white border-slate-800 relative overflow-hidden shadow-xl rounded-3xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(16, 185, 129, 0.2)"
          />

          <div className="flex flex-col lg:flex-row h-full min-h-[520px]">
            {/* Right content (Text for RTL) */}
            <div className="flex-1 p-6 sm:p-10 lg:p-12 relative z-10 flex flex-col justify-center">
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                ابدأ رحلتك الدراسية في ماليزيا
              </h1>

              <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                هل تحلم بالدراسة في ماليزيا؟ نحن هنا لمساعدتك خطوة بخطوة حتى الوصول. 
                التسجيل في الجامعات الماليزية المعتمدة مع عروض استثنائية!
              </p>

              {/* Special Lincoln University Highlight Banner */}
              <div className="mt-5 p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/30 text-xs sm:text-sm">
                <span className="font-bold text-emerald-400">🔥 عرض حصري لجامعة لينكولن: </span>
                <span className="text-slate-200">
                  احصل على بكالوريوس في تخصصات <strong className="text-white bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/30">الذكاء الاصطناعي (AI)</strong> و<strong className="text-white bg-slate-700 px-1.5 py-0.5 rounded border border-slate-600">الأمن السيبراني (Cyber Security)</strong> في <strong className="text-emerald-300">3 سنوات فقط</strong> وبسعر استثنائي يبلغ <strong className="text-amber-300">2,400$ / السنة</strong> تقريباً!
                </span>
              </div>

              {/* Key Highlights Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/90 border border-slate-700">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-400 font-bold">مدة الدراسة (جامعة لينكولن)</div>
                    <div className="text-xs font-extrabold text-white">3 سنوات فقط (الذكاء الاصطناعي والأمن السيبراني)</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/90 border border-slate-700">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-amber-300 font-bold">رسوم بكالوريوس جامعة لينكولن</div>
                    <div className="text-xs font-extrabold text-amber-300">2,400$ / السنة تقريباً</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/601128778837?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%8BB7%D8%A7%D9%84%D9%8A%D8%B2%D9%8A%D8%A7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-md transition-all hover:scale-102 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>راسلنا الآن عبر الواتساب (+601128778837)</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-sm transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>طلب استشارة مجانية</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  متابعة خطوة بخطوة
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  استقبال في المطار
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  استجابة فورية وحاطفة
                </span>
              </div>

            </div>

            {/* Left content (3D Spline Interactive View) */}
            <div className="flex-1 min-h-[350px] lg:min-h-full relative bg-slate-900/40 border-t lg:border-t-0 lg:border-r border-slate-800">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full min-h-[350px]"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-400 pointer-events-none">
                💡 يمكنك التفاعل مع الشكل 3D
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
