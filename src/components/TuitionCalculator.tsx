import { useState } from 'react';
import { Calculator, DollarSign, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export function TuitionCalculator() {
  const [selectedUniversity, setSelectedUniversity] = useState<'lincoln' | 'other_private' | 'other_public'>('lincoln');
  const [monthlyLivingCost, setMonthlyLivingCost] = useState<number>(350);

  const uniRates = {
    lincoln: { name: 'جامعة لينكولن (العرض الحصري)', tuition: 2400, years: 3, isExact: true },
    other_private: { name: 'جامعات خاصة أخرى', tuition: 0, years: 3, isExact: false },
    other_public: { name: 'جامعات حكومية أخرى', tuition: 0, years: 4, isExact: false },
  };

  const currentUni = uniRates[selectedUniversity] || uniRates.lincoln;
  const actualYears = currentUni.years;
  const annualTuition = currentUni.tuition;
  const totalTuition = annualTuition * actualYears;
  const totalLiving = monthlyLivingCost * 12 * actualYears;
  const grandTotal = totalTuition + totalLiving;

  // Comparison with standard 4-year $5000 university
  const standardAlternativeTotal = 5000 * 4 + 400 * 12 * 4;
  const totalSavings = standardAlternativeTotal - grandTotal;

  return (
    <section className="py-16 sm:py-24 bg-slate-950 relative border-t border-slate-800 dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>حاسبة التكاليف التقديرية</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            احسب ميزانيتك الدراسية في ماليزيا
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            اكتشف كم ستوفر عند اختيار التخصصات التقنية لمدة 3 سنوات فقط بسعر 2,400$ بالسنة!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">اختيارات الحاسبة:</h3>

              {/* University Selector */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-300">اختر خيار الدراسة للمقارنة:</label>
                <div className="grid grid-cols-1 gap-2">
                  {(Object.keys(uniRates) as Array<keyof typeof uniRates>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedUniversity(key)}
                      className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-right flex items-center justify-between cursor-pointer ${
                        selectedUniversity === key
                          ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span>{uniRates[key].name}</span>
                      <span className="font-extrabold text-amber-400">
                        {uniRates[key].isExact ? `$${uniRates[key].tuition.toLocaleString()} / سنة (3 سنوات)` : 'تواصل للاستفسار عن الرسوم'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Living Expense Slider */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs text-slate-300 font-bold">
                  <span>المصروف المعيشي الشامل (سكن + طعام + مواصلات):</span>
                  <span className="text-emerald-400 font-extrabold text-sm">${monthlyLivingCost} / شهر</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="700"
                  step="25"
                  value={monthlyLivingCost}
                  onChange={(e) => setMonthlyLivingCost(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>250$ (اقتصادي جداً)</span>
                  <span>450$ (متوسط مريح)</span>
                  <span>700$ (فاخر)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
              💡 المصاريف شاملة السكن الطلابي والطعام والبطاقة الصحية والفيزا التقديرية.
            </div>

          </div>

          {/* Results Summary */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  نتيجة الحساب التقديرية
                </span>
                <span className="text-xs text-slate-400">العملة: دولار أمريكي (USD)</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 font-medium">إجمالي الرسوم الدراسية ({actualYears} سنوات):</span>
                  <span className="text-base font-extrabold text-white">
                    {currentUni.isExact ? `$${totalTuition.toLocaleString()}` : 'تختلف بحسب التخصص'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 font-medium">إجمالي المعيشة التقديرية ({actualYears} سنوات):</span>
                  <span className="text-base font-extrabold text-white">${totalLiving.toLocaleString()}</span>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center my-4">
                  <div className="text-xs text-slate-300 mb-1">
                    {currentUni.isExact ? 'المجموع الكلي التقديري للدراسة والمعيشة:' : 'المجموع الكلي للمعيشة التقديرية:'}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                    {currentUni.isExact ? `$${grandTotal.toLocaleString()}` : `$${totalLiving.toLocaleString()}`} <span className="text-xs text-slate-400">USD + الرسوم</span>
                  </div>
                </div>

                {/* Savings highlight when Lincoln selected */}
                {selectedUniversity === 'lincoln' && totalSavings > 0 && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-3">
                    <Zap className="w-6 h-6 text-amber-400 shrink-0" />
                    <div>
                      <span>توفر حوالي <strong className="text-amber-400 text-sm font-black">${totalSavings.toLocaleString()} USD</strong> مقارنة ببرامج 4 سنوات التقليدية!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6">
              <a
                href={`https://wa.me/601128778837?text=${encodeURIComponent(`مرحباً، أود استشارة حول خيار ${currentUni.name} وتفاصيل ميزانيتها`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>احصل على الخطة الدراسية التفصيلية مجاناً</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
