export interface University {
  id: string;
  nameAr: string;
  nameEn: string;
  type: 'private' | 'public' | 'semi-government' | 'international';
  location: string;
  qsRanking?: {
    global?: string;
    asia?: string;
    seAsia?: string;
  };
  tuitionPerYearUsd: number | string;
  durationYears: number | string;
  highlightOffer?: string;
  arabDiscount?: string;
  specialties: string[];
  descriptionAr: string;
  imageUrl: string;
  featured?: boolean;
  popularPrograms: string[];
}

export interface AgencyService {
  id: string;
  titleAr: string;
  descriptionAr: string;
  iconName: string;
}

export interface StudentInquiry {
  fullName: string;
  phoneWhatsApp: string;
  email: string;
  desiredDegree: 'bachelor' | 'master' | 'phd' | 'diploma' | 'english_prep';
  specialtyInterest: string;
  preferredUniversityId?: string;
  notes?: string;
}
