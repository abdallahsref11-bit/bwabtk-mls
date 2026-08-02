import { FileText, Plane, Compass, ShieldCheck, UserCheck, MessageSquare, ArrowLeft } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const services = [
    {
      icon: FileText,
      title: 'التسجيل والقبول الجامعي',
      description: 'نستخرج لك القبول الجامعي الرسمي والمعتمد من مختلف الجامعات الحكومية والخاصة في ماليزيا خلال أسرع وقت.',
      badge: 'خدمة أساسية'
    },
    {
      icon: Compass,
      title: 'المتابعة وتجهيز كافة الإجراءات',
      description: 'متابعة ملف الطالب خطوة بخطوة وإكمال كافة الإجراءات المتعلقة بالفيزا الدراسية والتأمين الصحي والتأكد من استيفاء الأوراق.',
      badge: 'متابعة شاملة'
    },
    {
      icon: Plane,
      title: 'الاستقبال الفندقي في المطار',
      description: 'يقوم فريقنا بالاستقبال المباشر للطالب فور وصوله إلى مطار كوالالمبور وتوصيله ومساعدته في إجراءات السكن الجامعي.',
      badge: 'عند الوصول'
    },
    {
      icon: ShieldCheck,
      title: 'الرد على الاستفسارات بصدق وأمانة',
      description: 'نوفر لك كافة التفاصيل الدقيقة حول التكاليف الحقيقية المعيشية والدراسية دون أي رسوم خفية أو مبالغات.',
      badge: 'مصداقية 100%'
    },
    {
      icon: UserCheck,
      title: 'مساعدة في اختيار الجامعة والتخصص',
      description: 'فريقنا المتخصص يساعدك في اختيار التخصص والجامعة الأكثر تناسباً مع ميزانيتك وطموحك المِهني والمستقبلي.',
      badge: 'ارشاد أكاديمي'
    },
    {
      icon: MessageSquare,
      title: 'استشارة مجانية وبدء التسجيل',
      description: 'نقدم لك جلسة استشارية مجانية بالكامل للإجابة عن كل تساؤلاتك وبدء خطوات ملفك الدراسي على الفور.',
      badge: 'مجاناً بالكامل'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-950 relative border-y border-slate-800 dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
            <span>خدمات مكتب بوابتك للدراسة في ماليزيا</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            خدماتنا المتكاملة للطلاب الدوليين
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            نرافقك في كافة مراحل رحلتك الدراسية بدءاً من التخطيط والاختيار، مروراً باستخراج القبول والفيزا، وحتى استقرارك في ماليزيا.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                onClick={onOpenConsultation}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:-translate-x-1 transition-transform">
                  <span>طلب هذه الخدمة</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Services */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-xl font-extrabold text-slate-900">هل لديك أي استفسار آخر أو ترغب في بدء إجراءات القبول؟</h4>
            <p className="text-slate-600 text-sm mt-1">تواصل معنا الآن مباشرة للحصول على استشارة مجانية وفردية.</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-sm transition-all cursor-pointer"
          >
            تواصل معنا الآن
          </button>
        </div>

      </div>
    </section>
  );
}
