export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string; // Could be an SVG string or image URL
  priceRange?: string;
  features?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
}

export interface Lead {
  name: string;
  email: string;
  phone?: string;
  service_interest: string;
  message: string;
  is_student_founder: boolean;
}