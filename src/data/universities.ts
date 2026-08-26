import { University } from '../types';

export const UNIVERSITIES_DATA: University[] = [
  {
    id: 'lincoln',
    nameAr: 'جامعة لينكولن (Lincoln University College)',
    nameEn: 'Lincoln University College',
    type: 'private',
    location: 'كوالالمبور / بيتالينغ جايا',
    qsRanking: {
      global: '638 Top عالميًا',
      asia: '196 Top في آسيا',
      seAsia: '47 Top في جنوب شرق آسيا'
    },
    tuitionPerYearUsd: 2800,
    durationYears: '3 سنوات فقط',
    highlightOffer: 'فرصة استثنائية: بكالوريوس ذكاء اصطناعي وأمن سيبراني وأي تخصص تقني بـ 2,800$ فقط للسنة وعلى مدار 3 سنوات!',
    specialties: ['الذكاء الاصطناعي (AI)', 'الأمن السيبراني (Cyber Security)', 'تكنولوجيا المعلومات (IT)', 'إدارة الأعمال', 'الهندسة'],
    descriptionAr: 'جامعة معترف بها بتصنيف QS مميز، تقدم جميع التخصصات التقنية كالذكاء الاصطناعي والأمن السيبراني في ثلاث سنوات فقط بسعر استثنائي ومنافس يبلغ حوالي 2,800 دولار في السنة. فرصة ممتازة للحصول على شهادة بكالوريوس معتمدة.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    popularPrograms: [
      'بكالوريوس الذكاء الاصطناعي (3 سنوات)',
      'بكالوريوس الأمن السيبراني (3 سنوات)',
      'بكالوريوس علوم الحاسوب وتقنية المعلومات',
      'إدارة الأعمال والتسويق الرقمي'
    ]
  },
  {
    id: 'city-uni',
    nameAr: 'جامعة سيتي ماليزيا (City University Malaysia)',
    nameEn: 'City University Malaysia',
    type: 'private',
    location: 'سايبرجايا / بيتالينغ جايا',
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['تكنولوجيا المعلومات', 'إدارة الأعمال', 'التصميم والوسائط'],
    descriptionAr: 'جامعة خاصة عريقة معروفة ببرامج تكنولوجيا المعلومات والإدارة، رسوم دراسية معقولة نسبياً، وبيئة تعليمية حديثة ممتازة للطلاب الدوليين.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['تكنولوجيا المعلومات', 'إدارة الأعمال الدولي', 'علوم البيانات']
  },
  {
    id: 'sunway',
    nameAr: 'جامعة صنواي (Sunway University)',
    nameEn: 'Sunway University',
    type: 'private',
    location: 'باندار سنواي - كوالالمبور',
    qsRanking: {
      global: 'Top 500'
    },
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['الذكاء الاصطناعي', 'إدارة الأعمال', 'العلوم الطبية', 'شراكات بريطانية وأسترالية'],
    descriptionAr: 'من أبرز الجامعات الخاصة في ماليزيا بمقرها الساحر في باندار سنواي، تصنيف عالمي قوي (QS) وشراكات أكاديمية مع جامعات بريطانية (Lancaster) وأسترالية.',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['علوم الحاسوب والذكاء الاصطناعي', 'إدارة الأعمال الشاملة', 'العلوم البيولوجية']
  },
  {
    id: 'utm',
    nameAr: 'جامعة UTM (Universiti Teknologi Malaysia)',
    nameEn: 'Universiti Teknologi Malaysia',
    type: 'public',
    location: 'كوالالمبور / جوهور',
    qsRanking: {
      global: 'Top 180 Global'
    },
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['الهندسة بجميع أفرعها', 'التقنية والبرمجيات', 'الذكاء الاصطناعي'],
    descriptionAr: 'جامعة حكومية عريقة ومن المراتب الأولى بين الجامعات التقنية والهندسية في ماليزيا وآسيا. فرعها في كوالالمبور يجمع بين جودة التعليم العالية والأسعار المناسبة للجامعات الحكومية.',
    imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['هندسة البرمجيات', 'الهندسة الميكانيكية والكهربائية', 'الأمن السيبراني']
  },
  {
    id: 'unikl',
    nameAr: 'جامعة UniKL (Universiti Kuala Lumpur)',
    nameEn: 'Universiti Kuala Lumpur',
    type: 'public',
    location: 'فروع متعددة في ماليزيا وكوالالمبور',
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['الهندسة التطبيقية', 'تكنولوجيا الطيران والروبوتات', 'الأمن السيبراني'],
    descriptionAr: 'جامعة حكومية تقنية تركز على الهندسة والتكنولوجيا التطبيقية، وتمتلك عدة فروع متخصصة في مختلف الولايات الماليزية لتدريب الطلاب عملياً.',
    imageUrl: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['تكنولوجيا هندسة الحاسوب', 'أنظمة الاتصالات', 'الأمن السيبراني التطبيقي']
  },
  {
    id: 'uniten',
    nameAr: 'جامعة يونيتين (Universiti Tenaga Nasional)',
    nameEn: 'Universiti Tenaga Nasional (UNITEN)',
    type: 'semi-government',
    location: 'سيلانجور / كاجانج',
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['علوم الحاسوب', 'هندسة الطاقة', 'الذكاء الاصطناعي'],
    descriptionAr: 'جامعة شبه حكومية مرتبطة بشركة الكهرباء الوطنية الماليزية، متخصصة بالهندسة والطاقة وعلوم الحاسوب مع تصنيف أكاديمي ممتاز وتدريب ميداني مباشر.',
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['علوم الحاسوب والذكاء الاصطناعي', 'هندسة القوى الكهربائية', 'نظم المعلومات']
  },
  {
    id: 'monash',
    nameAr: 'جامعة موناش ماليزيا (Monash University Malaysia)',
    nameEn: 'Monash University Malaysia',
    type: 'international',
    location: 'باندار سنواي',
    qsRanking: {
      global: 'Top 50 Global (جامعة أسترالية)'
    },
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['شهادة أسترالية معتمدة', 'علوم الحاسوب', 'الطب والهندسة'],
    descriptionAr: 'فرع لجامعة موناش الأسترالية (ضمن أول 50 جامعة في العالم). يمنح الطلاب شهادة أسترالية أصيلة معترف بها دولياً بمرتبة شرف وبأعلى المعايير الأكاديمية.',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['بكالوريوس علوم الحاسوب', 'هندسة النظم الذكية', 'إدارة الأعمال والتجارة']
  },
  {
    id: 'nilai',
    nameAr: 'جامعة نيلاي (Nilai University)',
    nameEn: 'Nilai University',
    type: 'private',
    location: 'نيلاي (قرب المطار والكليات)',
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['تكنولوجيا المعلومات', 'إدارة الأعمال', 'التمريض والعلوم الصحية'],
    descriptionAr: 'جامعة خاصة اقتصادية في نيلاي ذات حرم واسع وأخضر. مناسبة جداً للطلاب ذوي الميزانية المحدودة وتتميز ببيئة تعليمية متميزة للطلاب الدوليين.',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['تكنولوجيا المعلومات والشبكات', 'إدارة الأعمال', 'هندسة الطيران والمعادن']
  },
  {
    id: 'mmu',
    nameAr: 'جامعة الوسائط المتعددة MMU (Multimedia University)',
    nameEn: 'Multimedia University',
    type: 'private',
    location: 'سايبرجايا / ملاكا',
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['الرائدة في تكنولوجيا المعلومات', 'الذكاء الاصطناعي', 'صناعة الألعاب والوسائط'],
    descriptionAr: 'من أعرق وأشهر الجامعات الخاصة في ماليزيا والمصنفة كرائدة في مجال تكنولوجيا المعلومات والاتصالات، الذكاء الاصطناعي، والوسائط المتعددة.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['بكالوريوس الذكاء الاصطناعي (AI)', 'تطوير الألعاب والواقع الافتراضي', 'الأمن السيبراني والشبكات']
  },
  {
    id: 'apu',
    nameAr: 'جامعة آسيا باسيفيك APU (Asia Pacific University)',
    nameEn: 'Asia Pacific University of Technology & Innovation',
    type: 'private',
    location: 'كوالالمبور (مجمع التكنولوجيا)',
    qsRanking: {
      global: 'Top Rated in Tech & Employability'
    },
    tuitionPerYearUsd: 'تواصل للاستفسار',
    arabDiscount: 'تخفيضات ومنح جزئية للطلاب العرب',
    specialties: ['تكنولوجيا المعلومات', 'الذكاء الاصطناعي', 'تطوير الألعاب والإنترنت'],
    descriptionAr: 'الجامعة الأولى المتخصصة بتقنية المعلومات والذكاء الاصطناعي والأمن السيبراني وصناعة الألعاب الإلكترونية. تتميز بمبنى حديث تكنولوجياً وتقدم خصومات مستمرة للطلاب العرب.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['الأمن السيبراني والتحقيق الجنائي الرقمي', 'تكنولوجيا الذكاء الاصطناعي', 'الحوسبة السحابية']
  },
  {
    id: 'alfa',
    nameAr: 'كلية جامعة ألفا (Alfa University College)',
    nameEn: 'Alfa University College',
    type: 'private',
    location: 'صوبانج جايا',
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['التصميم والغرافيك', 'تكنولوجيا المعلومات', 'إدارة الأعمال'],
    descriptionAr: 'جامعة خاصة صغيرة في صوبانج جايا تقدم أسعاراً منافسة للغاية وعروضاً ترويجية لتسهيل التحاق الطلاب بالدراسة الجامعية في ماليزيا.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['تكنولوجيا المعلومات', 'التصميم الجرافيكي والوسائط', 'إدارة الأعمال']
  },
  {
    id: 'ucsi',
    nameAr: 'جامعة UCSI (UCSI University)',
    nameEn: 'UCSI University',
    type: 'private',
    location: 'تشاراس - كوالالمبور',
    qsRanking: {
      global: 'Top 300 Global (QS World)'
    },
    tuitionPerYearUsd: 'تواصل للاستفسار',
    specialties: ['الهندسة المتقدمة', 'العلوم الصحية والطب', 'علوم الحاسوب'],
    descriptionAr: 'من أكبر وأرقى الجامعات الخاصة في ماليزيا بتصنيف عالمي مرتفع جداً (QS)، تتسم بتنوع تخصصات من هندسة وطب وحاسوب وتوفر شراكات صناعية واسعة.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000',
    popularPrograms: ['هندسة الحاسوب الذكية', 'علوم البيانات والتحليلات', 'الصيدلة والعلوم الصحية']
  }
];
