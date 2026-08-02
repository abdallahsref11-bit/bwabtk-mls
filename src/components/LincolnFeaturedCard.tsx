import { Award, Zap, CheckCircle2, MessageCircle, Star, Sparkles, Building2, Globe } from 'lucide-react';

interface LincolnFeaturedCardProps {
  onOpenConsultation: () => void;
}

export function LincolnFeaturedCard({ onOpenConsultation }: LincolnFeaturedCardProps) {
  return (
    <section id="lincoln-special" className="py-12 sm:py-20 relative dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>عرض مميز وخاص بأرخص سعر لدراسة البكالوريوس</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            جامعة لينكولن الماليزية <span className="text-emerald-400">(Lincoln University)</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            احصل على قبول في جامعة معترف بها بأقل تكلفة دراسية وفي أقصر مدة زمنية!
          </p>
        </div>

        {/* Featured Card Grid Container */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-xs sm:text-sm font-extrabold px-6 py-2 rounded-bl-2xl shadow-md flex items-center gap-2">
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>أقوى عرض تعليمي لعام 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-4">
            
            {/* Right Column: Highlights & Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-1">
                  <Building2 className="w-5 h-5" />
                  <span>Lincoln University College - Malaysia</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  بكالوريوس تقني وشامل بثلاث سنوات بسعر <span className="text-amber-400 font-extrabold">2,400$</span> بالسنة تقريباً!
                </h3>
              </div>

              {/* 2 Critical Focused Highlights (3 Years & $2400) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">التركيز على المدة</div>
                      <div className="text-xl font-black text-white">ثلاث سنوات فقط!</div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-300">
                    تخصص الأمن السيبراني والذكاء الاصطناعي (AI) وجميع التخصصات التقنية في 3 سنوات.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/30 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">الرسوم الدراسية</div>
                      <div className="text-xl font-black text-amber-400">2,400$ / السنة</div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-300">
                    وفر أكثر من 50% مقارنة بالجامعات الأخرى مع حفظ الجودة العالية.
                  </p>
                </div>
              </div>

              {/* QS World Ranking Badges */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-3">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>التصنيف العالمي لجامعة لينكولن (QS World Rankings):</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">عالمياً</div>
                    <div className="text-base sm:text-lg font-extrabold text-white">Top 638</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">في آسيا</div>
                    <div className="text-base sm:text-lg font-extrabold text-white">Top 196</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">جنوب شرق آسيا</div>
                    <div className="text-base sm:text-lg font-extrabold text-white">Top 47</div>
                  </div>
                </div>
              </div>

              {/* Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تخصص الذكاء الاصطناعي (AI)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تخصص الأمن السيبراني (Cyber Security)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تخصصات IT والهندسة وBusiness</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>شهادة معترف بها وموثوقة</span>
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/601128778837?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D9%81%D9%8A%20%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D9%84%D9%8A%D9%86%D9%83%D9%88%D9%84%D9%86%20(%D8%B9%D8%B1%D8%B6%202400%20%D8%AF%D9%88%D9%84%D8%A7%D8%B1)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-md transition-all hover:scale-102 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>احجز مقعدك الآن عبر الواتساب</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm cursor-pointer transition-colors"
                >
                  <span>تقديم طلب التسجيل الفوري</span>
                </button>
              </div>

            </div>

            {/* Left Column: University Real Photo & Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
                  alt="Lincoln University College Malaysia"
                  className="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-emerald-400 font-extrabold text-sm">Lincoln University College</div>
                      <div className="text-slate-300 text-xs">كوالالمبور، ماليزيا</div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                      2,400$/سنة
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
