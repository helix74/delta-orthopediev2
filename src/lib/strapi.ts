const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Pour Strapi v5, les données sont directement dans data, pas dans data.attributes
export interface StrapiData<T> {
  id: number;
  documentId?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  videoUrl?: any;
  backgroundImage?: any;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // Ajouter tous les autres champs possibles
  [key: string]: any;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  videoUrl?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  backgroundImage?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ExpertiseData {
  title: string;
  description: string;
  icon?: string;
  image?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  order: number;
  isActive: boolean;
  features?: any;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TestimonialData {
  clientName: string;
  clientPhoto?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  testimonial: string;
  description?: string;
  rating: number;
  service?: string;
  location?: string;
  isVerified: boolean;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface FAQData {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'rendez-vous' | 'paiement' | 'assurance';
  order: number;
  isActive: boolean;
  isPopular: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PartnerData {
  name: string;
  logo: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
  website?: string;
  description?: string;
  category: 'assurance' | 'fournisseur' | 'clinique' | 'laboratoire';
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactData {
  phone: string;
  email: string;
  address: string;
  openingHours: {
    [key: string]: string;
  };
  emergencyPhone?: string;
  socialMedia?: {
    [key: string]: string;
  };
  mapEmbed?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TeamEnvironmentData {
  title: string;
  description: string;
  category: 'accueil' | 'equipe' | 'atelier' | 'consultation' | 'fabrication';
  image: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

class StrapiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = STRAPI_URL;
  }

  private async fetchAPI<T>(endpoint: string): Promise<StrapiResponse<T>> {
    const url = `${this.baseUrl}/api${endpoint}`;
    
    try {
      console.log(`🔍 Fetching from Strapi: ${url}`);
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        // Désactiver le cache en développement
        cache: 'no-store',
        next: { revalidate: 0 }, // Pas de cache
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`✅ Strapi response for ${endpoint}:`, data);
      return data;
    } catch (error) {
      console.error(`❌ Error fetching from Strapi: ${error}`);
      throw error;
    }
  }

  // Hero Section
  async getHero(): Promise<StrapiData<HeroData>> {
    const response = await this.fetchAPI<StrapiData<HeroData>>('/hero?populate=*');
    // Les données Strapi v5 retournent directement les attributs dans data
    return response.data;
  }

  // Expertise
  async getExpertises(): Promise<StrapiData<ExpertiseData>[]> {
    const response = await this.fetchAPI<StrapiData<ExpertiseData>[]>('/expertises?populate=*&sort=order:asc&filters[isActive][$eq]=true');
    return response.data;
  }

  // Testimonials
  async getTestimonials(): Promise<StrapiData<TestimonialData>[]> {
    const response = await this.fetchAPI<StrapiData<TestimonialData>[]>('/testimonials?populate=*&sort=order:asc&filters[isActive][$eq]=true');
    return response.data;
  }

  // FAQ
  async getFAQs(): Promise<StrapiData<FAQData>[]> {
    const response = await this.fetchAPI<StrapiData<FAQData>[]>('/faqs?populate=*&sort=order:asc&filters[isActive][$eq]=true');
    return response.data;
  }

  // Partners
  async getPartners(): Promise<StrapiData<PartnerData>[]> {
    const response = await this.fetchAPI<StrapiData<PartnerData>[]>('/partners?populate=*&sort=order:asc&filters[isActive][$eq]=true');
    return response.data;
  }

  // Contact
  async getContact(): Promise<StrapiData<ContactData>> {
    const response = await this.fetchAPI<StrapiData<ContactData>>('/contact');
    return response.data;
  }

  // Team Environment (Gallery Images)
  async getTeamEnvironment(): Promise<StrapiData<TeamEnvironmentData>[]> {
    try {
      const response = await this.fetchAPI<StrapiData<TeamEnvironmentData>[]>('/team-environments?populate=*&sort=order:asc&filters[isActive][$eq]=true');
      return response.data;
    } catch (error) {
      console.warn('⚠️ Team Environment data not available, using fallback');
      return [];
    }
  }

  // Get image URL
  getImageUrl(image: any): string | null {
    // Gestion Strapi v5 - les données sont directement dans l'objet
    if (image?.url) {
      return `${this.baseUrl}${image.url}`;
    }
    // Fallback pour l'ancienne structure
    if (image?.data?.attributes?.url) {
      return `${this.baseUrl}${image.data.attributes.url}`;
    }
    return null;
  }
}

export const strapiService = new StrapiService(); 