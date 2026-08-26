import { GraduationCap, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 dir-rtl text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800 text-center md:text-right">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-white font-extrabold text-base">بوابتك للدراسة في ماليزيا</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              مكتب استشارات وتأمين قبولات في جميع الجامعات الماليزية المعتمدة. نرافقك خطوة بخطوة من الاختيار حتى الوصول والاستقبال.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-3 text-sm">أبرز الجامعات</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#lincoln-special" className="hover:text-emerald-400 transition-colors">جامعة لينكولن (2800$/سنة)</a></li>
              <li><a href="#universities" className="hover:text-emerald-400 transition-colors">جامعة صنواي (Sunway)</a></li>
              <li><a href="#universities" className="hover:text-emerald-400 transition-colors">جامعة UTM الحكومية</a></li>
              <li><a href="#universities" className="hover:text-emerald-400 transition-colors">جامعة نيلاي (خصم للعرب)</a></li>
              <li><a href="#universities" className="hover:text-emerald-400 transition-colors">جامعة APU للذكاء الاصطناعي</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-3 text-sm">خدماتنا للطلاب</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span>تأمين القبولات الجامعية</span></li>
              <li><span>متابعة إشعار القبول وتأشيرة الطالب</span></li>
              <li><span>الاستقبال الفندقي المباشر في المطار</span></li>
              <li><span>حجز السكن الطلابي والاستشارة المجانية</span></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-3 text-sm">التواصل والموقع</h4>
            <div className="flex items-center md:items-start justify-center md:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Block F, Unit B1 - 01, Dataran PHB, Saujana Resort, Shah Alam, Selangor</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400 pt-1">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>تواصل معنا عبر الواتساب أو الهاتف</span>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/601128778837"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>محادثة واتساب سريعة</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} بوابتك للدراسة في ماليزيا. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-1">
            <span>مكتبك المعتمد للدراسة في ماليزيا</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
