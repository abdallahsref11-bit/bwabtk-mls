import { useState } from 'react';
import { UNIVERSITIES_DATA } from '../data/universities';
import { University } from '../types';
import { Search, MapPin, Award, Check, Sparkles, MessageCircle, ExternalLink, SlidersHorizontal, Tag } from 'lucide-react';

interface UniversitiesGridProps {
  onSelectUniversity: (uni: University) => void;
}

export function UniversitiesGrid({ onSelectUniversity }: UniversitiesGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'tech' | 'public' | 'arab_discount'>('all');

  const filteredUniversities = UNIVERSITIES_DATA.filter((uni) => {
    // Search query match
    const matchesSearch =
      uni.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    // Filter type
    if (activeFilter === 'featured') return uni.featured || uni.id === 'lincoln';
    if (activeFilter === 'tech')
      return (
        uni.specialties.some((s) => s.includes('الذكاء الاصطناعي') || s.includes('الأمن السيبراني') || s.includes('حاسوب') || s.includes('تقنية'))
      );
    if (activeFilter === 'public') return uni.type === 'public' || uni.type === 'semi-government';
    if (activeFilter === 'arab_discount') return !!uni.arabDiscount || uni.id === 'lincoln';

    return true;
  });

  return (
    <section id="universities" className="py-16 sm:py-24 relative dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>دليل الشركاء والجامعات المعتمدة</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            الجامعات الماليزية المعتمدة
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            قارن بين الجامعات الماليزية الحكومية والخاصة والدولية، وتعرف على الرسوم الدراسية والتخصصات المتاحة.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 bg-slate-900 border border-slate-800 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="ابحث عن جامعة، تخصص، أو مدينة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 text-white text-sm rounded-xl pr-10 pl-4 py-2.5 outline-none transition-colors"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              الجميع ({UNIVERSITIES_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'featured'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              ⭐ عروض مميزة (جامعة لينكولن)
            </button>
            <button
              onClick={() => setActiveFilter('tech')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'tech'
                  ? 'bg-emerald-600 text-white font-black shadow-md'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              💻 الذكاء الاصطناعي والتقنية
            </button>
            <button
              onClick={() => setActiveFilter('arab_discount')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'arab_discount'
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              🏷️ خصومات خاصة للعرب
            </button>
            <button
              onClick={() => setActiveFilter('public')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'public'
                  ? 'bg-slate-700 text-white font-black shadow-md'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              🏛️ جامعات حكومية
            </button>
          </div>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.id}
              className={`rounded-2xl bg-slate-900 border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between overflow-hidden group ${
                uni.featured
                  ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Image Header with Tags */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={uni.imageUrl}
                    alt={uni.nameAr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                    {uni.featured && (
                      <span className="bg-amber-500 text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-md shadow-md">
                        ⭐ الأكثر طلباً ($2400/سنة)
                      </span>
                    )}
                    {uni.arabDiscount && (
                      <span className="bg-emerald-500 text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-md shadow-md">
                        🏷️ {uni.arabDiscount}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {uni.location}
                    </span>
                    <span className="bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-md text-[11px] font-semibold text-slate-300">
                      {uni.type === 'private' ? 'جامعة خاصة' : uni.type === 'public' ? 'جامعة حكومية' : uni.type === 'semi-government' ? 'جامعة شبه حكومية' : 'جامعة دولية'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  
                  {/* QS Ranking Tag if available */}
                  {uni.qsRanking?.global && (
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full mb-2">
                      <Award className="w-3 h-3 text-amber-400" />
                      <span>تصنيف QS: {uni.qsRanking.global}</span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {uni.nameAr}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium mb-3">{uni.nameEn}</div>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                    {uni.descriptionAr}
                  </p>

                  {/* Highlights / Special offer if any */}
                  {uni.highlightOffer && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
                      {uni.highlightOffer}
                    </div>
                  )}

                  {/* Key Details Grid */}
                  <div className={`grid ${uni.durationYears ? 'grid-cols-2' : 'grid-cols-1'} gap-2 text-xs py-3 border-y border-slate-800 my-4`}>
                    <div>
                      <div className="text-slate-400 text-[11px]">الرسوم السنوية</div>
                      <div className="font-extrabold text-emerald-400 text-sm">
                        {typeof uni.tuitionPerYearUsd === 'number' 
                          ? `$${uni.tuitionPerYearUsd.toLocaleString()} / السنة` 
                          : uni.tuitionPerYearUsd}
                      </div>
                    </div>
                    {uni.durationYears && (
                      <div>
                        <div className="text-slate-400 text-[11px]">مدة الدراسة</div>
                        <div className="font-extrabold text-white text-sm">{uni.durationYears}</div>
                      </div>
                    )}
                  </div>

                  {/* Popular Programs Tags */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-slate-400 font-medium">أبرز البرامج:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.popularPrograms.slice(0, 3).map((prog, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectUniversity(uni)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition-all text-center cursor-pointer shadow-xs"
                >
                  تفاصيل أكثر
                </button>

                <a
                  href={`https://wa.me/601128778837?text=${encodeURIComponent(`مرحباً، أود الاستفسار والتسجيل في ${uni.nameAr}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>تواصل للقبول</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-300 text-base">لم نجد نتائج مطابقة لمجال بحثك.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="mt-4 text-xs font-bold text-emerald-400 hover:underline"
            >
              إعادة ضبط الفلاتر والبحث
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
