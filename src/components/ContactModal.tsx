import { useState, FormEvent } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Sparkles, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { UNIVERSITIES_DATA } from '../data/universities';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedUniversityName?: string;
}

export function ContactModal({ isOpen, onClose, preselectedUniversityName }: ContactModalProps) {
  const [fullName, setFullName] = useState('');
  const [phoneWhatsApp, setPhoneWhatsApp] = useState('');
  const [degree, setDegree] = useState('bachelor');
  const [interest, setInterest] = useState('الذكاء الاصطناعي (AI)');
  const [preferredUni, setPreferredUni] = useState(preselectedUniversityName || 'جامعة لينكولن (العرض الذهبي)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Trigger festive confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSubmitted(true);
  };

  const getWhatsAppMsg = () => {
    const text = `مرحباً مكتب بوابتك للدراسة في ماليزيا 👋
أنا الطالب: ${fullName}
رقم التواصل: ${phoneWhatsApp}
الدرجة المطلوب: ${degree === 'bachelor' ? 'بكالوريوس' : degree === 'master' ? 'ماجستير' : 'دكتوراه'}
التخصص المرغوب: ${interest}
الجامعة المفضلة: ${preferredUni}

أرغب في الاستفسار وبدء إجراءات القبول.`;
    return `https://wa.me/601128778837?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md dir-rtl animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>استشارة مجانية وبدء القبول</span>
            </div>

            <h3 className="text-2xl font-black text-white">
              احصل على قبولك الجامعي في ماليزيا
            </h3>
            <p className="text-xs text-slate-300 mt-1 mb-6">
              سجل معلوماتك وسيتواصل معك مستشارنا الأكاديمي مجاناً للرد على كافة استفساراتك.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">الاسم الكامل *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: أحمد عبد الله"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">رقم الواتساب مع مفتاح الدولة *</label>
                <input
                  type="tel"
                  required
                  placeholder="مثال: +966 50 123 4567"
                  value={phoneWhatsApp}
                  onChange={(e) => setPhoneWhatsApp(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none dir-ltr text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">المرحلة الدراسية</label>
                  <select
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="bachelor">بكالوريوس (3-4 سنوات)</option>
                    <option value="master">ماجستير</option>
                    <option value="phd">دكتوراه</option>
                    <option value="english_prep">دورة لغة إنجليزية</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الجامعة المفضل الاستفسار عنها</label>
                  <select
                    value={preferredUni}
                    onChange={(e) => setPreferredUni(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    {UNIVERSITIES_DATA.map((u) => (
                      <option key={u.id} value={u.nameAr}>
                        {u.nameAr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">التخصص المطلوب</label>
                <input
                  type="text"
                  placeholder="مثال: الذكاء الاصطناعي، الأمن السيبراني، إدارة أعمال..."
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>إرسال طلب الاستشارة والقبول</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white">تم استلام طلبك بنجاح!</h3>
            <p className="text-slate-300 text-sm">
              شكراً لك {fullName}. يمكنك الآن التواصل الفوري المباشر مع مستشارنا عبر الواتساب لإكمال التجهيز.
            </p>

            <div className="pt-4 space-y-3">
              <a
                href={getWhatsAppMsg()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>الانتقال للواتساب لإكمال المحادثة فوراً</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-400 hover:text-white"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
