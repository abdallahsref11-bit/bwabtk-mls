import { MapPin, Phone, Clock, MessageCircle, Send, Navigation, Building2, CheckCircle } from 'lucide-react';

export function OfficeLocationCard() {
  const addressText = "Block F, Unit B1 - 01, Dataran PHB, Saujana Resort Seksyen U2, 40150 Shah Alam, Selangor, Malaysia";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Dataran PHB, Saujana Resort Seksyen U2, 40150 Shah Alam, Selangor")}`;

  return (
    <section id="office-info" className="py-16 sm:py-24 bg-slate-950 relative border-t border-slate-800 dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right flex flex-col items-center lg:items-start">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>مقرنا الرئيسي في ماليزيا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                زورونا في مكتبنا أو تواصلوا معنا مباشرة
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                يسعدنا استقبالكم في مقر مكتبنا في شاه عالم بماليزيا أو تقديم الاستشارات الفورية عبر الواتساب والهاتف للطلاب من جميع أنحاء الوطن العربي.
              </p>
            </div>

            {/* Address & Contact Details */}
            <div className="space-y-4 w-full">
              
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-right gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">عنوان المكتب في ماليزيا</div>
                  <div className="text-sm font-bold text-white mt-0.5">{addressText}</div>
                  <div className="text-xs text-slate-400 mt-1">بالقرب من: Dataran PHB Peremba Square / Ara Damansara</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-right gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">الهاتف والواتساب المباشر</div>
                  <div className="text-base font-extrabold text-emerald-400 mt-0.5">
                    تواصل مباشر عبر الواتساب والهاتف
                  </div>
                  <div className="text-xs text-slate-400 mt-1">خدمة الاستجابة السريعة على مدار الساعة</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-right gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">ساعات العمل والأوقات</div>
                  <div className="text-sm font-bold text-white mt-0.5">من الاثنين إلى السبت (9:00 صباحاً - 6:00 مساءً بتوقيت ماليزيا)</div>
                  <div className="text-xs text-emerald-400 mt-1">المحادثات عبر الواتساب متاحة 24/7 للحالات العاجلة</div>
                </div>
              </div>

            </div>

            {/* Quick Map & Call Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>فتح الموقع في خرائط Google Maps</span>
              </a>

              <a
                href="https://wa.me/601128778837"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>راسلنا الآن على الواتساب</span>
              </a>
            </div>

          </div>

          {/* Right Visual Map Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  مكتب استشاري معتمد
                </span>
                <span className="text-xs text-slate-400">Shah Alam, Selangor</span>
              </div>

              {/* Decorative Location Graphic */}
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800"
                  alt="Malaysia Shah Alam Dataran PHB"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-lg animate-bounce mb-2">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 text-white font-bold text-xs shadow-md">
                    Dataran PHB, Saujana Resort
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-950 text-slate-300 text-xs leading-relaxed border border-slate-800">
                📌 <strong className="text-emerald-400">ملاحظة للطلاب:</strong> يرجى التواصل مسبقاً عبر الواتساب لحجز موعد استشارة قبل الحضور للمكتب لضمان تفريغ المستشار الأكاديمي المختص.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
