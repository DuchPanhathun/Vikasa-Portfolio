import { supabase } from './supabase'

// Types
export interface Banner {
  id: string
  title: string
  description: string
  background_image?: string
  created_at: string
  updated_at: string
}

export interface Experience {
  id: string
  years: number
  detail: string
  created_at: string
  updated_at: string
}

export interface Client {
  id: string
  name: string
  profile_image?: string
  company?: string
  position?: string
  created_at: string
  updated_at: string
}

export interface Feedback {
  id: string
  client_id: string
  feedback: string
  rating: number
  created_at: string
  updated_at: string
  client?: Client
}

export interface SuccessStory {
  id: string
  client_id: string
  title: string
  description: string
  image?: string
  created_at: string
  updated_at: string
  client?: Client
}

export interface Award {
  id: string
  name: string
  profile?: string
  created_at: string
  updated_at: string
}

export interface Journey {
  id: string
  year: number
  title: string
  detail: string
  image?: string
  created_at: string
  updated_at: string
}

export interface Vision {
  id: string
  detail: string
  created_at: string
  updated_at: string
}

export interface CoreValue {
  id: string
  icon: string
  title: string
  detail: string
  created_at: string
  updated_at: string
}

export interface Staff {
  id: string
  image?: string
  name: string
  role: string
  description: string
  profile_url?: string
  created_at: string
  updated_at: string
}

export interface Credential {
  id: string
  title: string
  details: string
  bullet_icon: string
  created_at: string
  updated_at: string
}

export interface Impact {
  id: string
  amount_value: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

export interface SocialImpactInitiative {
  id: string
  description: string
  image?: string
  created_at: string
  updated_at: string
}

export interface Culture {
  id: string
  image: string
  created_at: string
  updated_at: string
}

export interface LifeAtVikasa {
  id: string
  description: string
  image?: string
  created_at: string
  updated_at: string
}

// Who we serve interfaces
export interface Industry {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

export interface OrganizationType {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

export interface ClientSupportApproach {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

// FAQ interface
export interface FAQ {
  id: string
  question: string
  answer: string
  created_at: string
  updated_at: string
}

// Services interfaces
export interface Service {
  id: string
  title: string
  summary: string
  image?: string
  created_at: string
  updated_at: string
  details?: ServiceDetail[]
  approaches?: ServiceApproach[]
}

export interface ServiceDetail {
  id: string
  service_id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

export interface ServiceApproach {
  id: string
  service_id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

// Article interfaces
export interface ArticleType {
  id: string
  name: string
  created_at: string
  updated_at: string
  _count?: { articles: number }
}

export interface Article {
  id: string
  article_type_id: string
  image?: string
  title: string
  description: string
  creator_name: string
  creator_profile?: string
  date_published: string
  created_at: string
  updated_at: string
  article_type?: ArticleType
}

// White paper interface
export interface WhitePaper {
  id: string
  cover_photo?: string
  title: string
  description: string
  date_published: string
  pages_count: number
  pdf_download_url?: string
  created_at: string
  updated_at: string
}

// Banner CRUD operations
export const bannerService = {
  async getAll(): Promise<Banner[]> {
    const { data, error } = await supabase
      .from('banners')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(banner: Omit<Banner, 'id' | 'created_at' | 'updated_at'>): Promise<Banner> {
    const { data, error } = await supabase
      .from('banners')
      .insert([banner])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, banner: Partial<Omit<Banner, 'id' | 'created_at' | 'updated_at'>>): Promise<Banner> {
    const { data, error } = await supabase
      .from('banners')
      .update({ ...banner, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('banners')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Experience CRUD operations
export const experienceService = {
  async getAll(): Promise<Experience[]> {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(experience: Omit<Experience, 'id' | 'created_at' | 'updated_at'>): Promise<Experience> {
    const { data, error } = await supabase
      .from('experiences')
      .insert([experience])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, experience: Partial<Omit<Experience, 'id' | 'created_at' | 'updated_at'>>): Promise<Experience> {
    const { data, error } = await supabase
      .from('experiences')
      .update({ ...experience, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('experiences')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Client CRUD operations
export const clientService = {
  async getAll(): Promise<Client[]> {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(client: Omit<Client, 'id' | 'created_at' | 'updated_at'>): Promise<Client> {
    const { data, error } = await supabase
      .from('clients')
      .insert([client])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, client: Partial<Omit<Client, 'id' | 'created_at' | 'updated_at'>>): Promise<Client> {
    const { data, error } = await supabase
      .from('clients')
      .update({ ...client, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Feedback CRUD operations
export const feedbackService = {
  async getAll(): Promise<Feedback[]> {
    const { data, error } = await supabase
      .from('feedbacks')
      .select(`
        *,
        client:clients(*)
      `)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(feedback: Omit<Feedback, 'id' | 'created_at' | 'updated_at' | 'client'>): Promise<Feedback> {
    const { data, error } = await supabase
      .from('feedbacks')
      .insert([feedback])
      .select(`
        *,
        client:clients(*)
      `)
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, feedback: Partial<Omit<Feedback, 'id' | 'created_at' | 'updated_at' | 'client'>>): Promise<Feedback> {
    const { data, error } = await supabase
      .from('feedbacks')
      .update({ ...feedback, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select(`
        *,
        client:clients(*)
      `)
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('feedbacks')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Success Story CRUD operations
export const successStoryService = {
  async getAll(): Promise<SuccessStory[]> {
    const { data, error } = await supabase
      .from('success_stories')
      .select(`
        *,
        client:clients(*)
      `)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(story: Omit<SuccessStory, 'id' | 'created_at' | 'updated_at' | 'client'>): Promise<SuccessStory> {
    const { data, error } = await supabase
      .from('success_stories')
      .insert([story])
      .select(`
        *,
        client:clients(*)
      `)
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, story: Partial<Omit<SuccessStory, 'id' | 'created_at' | 'updated_at' | 'client'>>): Promise<SuccessStory> {
    const { data, error } = await supabase
      .from('success_stories')
      .update({ ...story, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select(`
        *,
        client:clients(*)
      `)
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('success_stories')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Award CRUD operations
export const awardService = {
  async getAll(): Promise<Award[]> {
    const { data, error } = await supabase
      .from('awards')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(award: Omit<Award, 'id' | 'created_at' | 'updated_at'>): Promise<Award> {
    const { data, error } = await supabase
      .from('awards')
      .insert([award])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, award: Partial<Omit<Award, 'id' | 'created_at' | 'updated_at'>>): Promise<Award> {
    const { data, error } = await supabase
      .from('awards')
      .update({ ...award, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('awards')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Journey CRUD operations
export const journeyService = {
  async getAll(): Promise<Journey[]> {
    const { data, error } = await supabase
      .from('journey')
      .select('*')
      .order('year', { ascending: true })
    
    if (error) throw error
    return data || []
  },

  async create(journey: Omit<Journey, 'id' | 'created_at' | 'updated_at'>): Promise<Journey> {
    const { data, error } = await supabase
      .from('journey')
      .insert([journey])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, journey: Partial<Omit<Journey, 'id' | 'created_at' | 'updated_at'>>): Promise<Journey> {
    const { data, error } = await supabase
      .from('journey')
      .update({ ...journey, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('journey')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Vision CRUD operations
export const visionService = {
  async getAll(): Promise<Vision[]> {
    const { data, error } = await supabase
      .from('vision')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(vision: Omit<Vision, 'id' | 'created_at' | 'updated_at'>): Promise<Vision> {
    const { data, error } = await supabase
      .from('vision')
      .insert([vision])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, vision: Partial<Omit<Vision, 'id' | 'created_at' | 'updated_at'>>): Promise<Vision> {
    const { data, error } = await supabase
      .from('vision')
      .update({ ...vision, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('vision')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Core Values CRUD operations
export const coreValueService = {
  async getAll(): Promise<CoreValue[]> {
    const { data, error } = await supabase
      .from('core_values')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(coreValue: Omit<CoreValue, 'id' | 'created_at' | 'updated_at'>): Promise<CoreValue> {
    const { data, error } = await supabase
      .from('core_values')
      .insert([coreValue])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, coreValue: Partial<Omit<CoreValue, 'id' | 'created_at' | 'updated_at'>>): Promise<CoreValue> {
    const { data, error } = await supabase
      .from('core_values')
      .update({ ...coreValue, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('core_values')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Staff CRUD operations
export const staffService = {
  async getAll(): Promise<Staff[]> {
    const { data, error } = await supabase
      .from('staff')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(staff: Omit<Staff, 'id' | 'created_at' | 'updated_at'>): Promise<Staff> {
    const { data, error } = await supabase
      .from('staff')
      .insert([staff])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, staff: Partial<Omit<Staff, 'id' | 'created_at' | 'updated_at'>>): Promise<Staff> {
    const { data, error } = await supabase
      .from('staff')
      .update({ ...staff, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('staff')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Credentials CRUD operations
export const credentialService = {
  async getAll(): Promise<Credential[]> {
    const { data, error } = await supabase
      .from('credentials')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(credential: Omit<Credential, 'id' | 'created_at' | 'updated_at'>): Promise<Credential> {
    const { data, error } = await supabase
      .from('credentials')
      .insert([credential])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, credential: Partial<Omit<Credential, 'id' | 'created_at' | 'updated_at'>>): Promise<Credential> {
    const { data, error } = await supabase
      .from('credentials')
      .update({ ...credential, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('credentials')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Impact CRUD operations
export const impactService = {
  async getAll(): Promise<Impact[]> {
    const { data, error } = await supabase
      .from('impact')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(impact: Omit<Impact, 'id' | 'created_at' | 'updated_at'>): Promise<Impact> {
    const { data, error } = await supabase
      .from('impact')
      .insert([impact])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, impact: Partial<Omit<Impact, 'id' | 'created_at' | 'updated_at'>>): Promise<Impact> {
    const { data, error } = await supabase
      .from('impact')
      .update({ ...impact, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('impact')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Social Impact Initiatives CRUD operations
export const socialImpactService = {
  async getAll(): Promise<SocialImpactInitiative[]> {
    const { data, error } = await supabase
      .from('social_impact_initiatives')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(initiative: Omit<SocialImpactInitiative, 'id' | 'created_at' | 'updated_at'>): Promise<SocialImpactInitiative> {
    const { data, error } = await supabase
      .from('social_impact_initiatives')
      .insert([initiative])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, initiative: Partial<Omit<SocialImpactInitiative, 'id' | 'created_at' | 'updated_at'>>): Promise<SocialImpactInitiative> {
    const { data, error } = await supabase
      .from('social_impact_initiatives')
      .update({ ...initiative, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('social_impact_initiatives')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Culture CRUD operations
export const cultureService = {
  async getAll(): Promise<Culture[]> {
    const { data, error } = await supabase
      .from('culture')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(culture: Omit<Culture, 'id' | 'created_at' | 'updated_at'>): Promise<Culture> {
    const { data, error } = await supabase
      .from('culture')
      .insert([culture])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, culture: Partial<Omit<Culture, 'id' | 'created_at' | 'updated_at'>>): Promise<Culture> {
    const { data, error } = await supabase
      .from('culture')
      .update({ ...culture, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('culture')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Life at Vikasa CRUD operations
export const lifeAtVikasaService = {
  async getAll(): Promise<LifeAtVikasa[]> {
    const { data, error } = await supabase
      .from('life_at_vikasa')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(lifeAtVikasa: Omit<LifeAtVikasa, 'id' | 'created_at' | 'updated_at'>): Promise<LifeAtVikasa> {
    const { data, error } = await supabase
      .from('life_at_vikasa')
      .insert([lifeAtVikasa])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, lifeAtVikasa: Partial<Omit<LifeAtVikasa, 'id' | 'created_at' | 'updated_at'>>): Promise<LifeAtVikasa> {
    const { data, error } = await supabase
      .from('life_at_vikasa')
      .update({ ...lifeAtVikasa, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('life_at_vikasa')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Industry CRUD operations
export const industryService = {
  async getAll(): Promise<Industry[]> {
    const { data, error } = await supabase
      .from('industries')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(industry: Omit<Industry, 'id' | 'created_at' | 'updated_at'>): Promise<Industry> {
    const { data, error } = await supabase
      .from('industries')
      .insert([industry])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, industry: Partial<Omit<Industry, 'id' | 'created_at' | 'updated_at'>>): Promise<Industry> {
    const { data, error } = await supabase
      .from('industries')
      .update({ ...industry, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('industries')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Organization Type CRUD operations
export const organizationTypeService = {
  async getAll(): Promise<OrganizationType[]> {
    const { data, error } = await supabase
      .from('organization_types')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(orgType: Omit<OrganizationType, 'id' | 'created_at' | 'updated_at'>): Promise<OrganizationType> {
    const { data, error } = await supabase
      .from('organization_types')
      .insert([orgType])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, orgType: Partial<Omit<OrganizationType, 'id' | 'created_at' | 'updated_at'>>): Promise<OrganizationType> {
    const { data, error } = await supabase
      .from('organization_types')
      .update({ ...orgType, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('organization_types')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Client Support Approach CRUD operations
export const clientSupportApproachService = {
  async getAll(): Promise<ClientSupportApproach[]> {
    const { data, error } = await supabase
      .from('client_support_approaches')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(approach: Omit<ClientSupportApproach, 'id' | 'created_at' | 'updated_at'>): Promise<ClientSupportApproach> {
    const { data, error } = await supabase
      .from('client_support_approaches')
      .insert([approach])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, approach: Partial<Omit<ClientSupportApproach, 'id' | 'created_at' | 'updated_at'>>): Promise<ClientSupportApproach> {
    const { data, error } = await supabase
      .from('client_support_approaches')
      .update({ ...approach, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('client_support_approaches')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// FAQ CRUD operations
export const faqService = {
  async getAll(): Promise<FAQ[]> {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(faq: Omit<FAQ, 'id' | 'created_at' | 'updated_at'>): Promise<FAQ> {
    const { data, error } = await supabase
      .from('faqs')
      .insert([faq])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, faq: Partial<Omit<FAQ, 'id' | 'created_at' | 'updated_at'>>): Promise<FAQ> {
    const { data, error } = await supabase
      .from('faqs')
      .update({ ...faq, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('faqs')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Service CRUD operations
export const serviceService = {
  async getAll(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        details:service_details(*),
        approaches:service_approaches(*)
      `)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(service: Omit<Service, 'id' | 'created_at' | 'updated_at' | 'details' | 'approaches'>): Promise<Service> {
    const { data, error } = await supabase
      .from('services')
      .insert([service])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, service: Partial<Omit<Service, 'id' | 'created_at' | 'updated_at' | 'details' | 'approaches'>>): Promise<Service> {
    const { data, error } = await supabase
      .from('services')
      .update({ ...service, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Service Detail CRUD operations
export const serviceDetailService = {
  async getByServiceId(serviceId: string): Promise<ServiceDetail[]> {
    const { data, error } = await supabase
      .from('service_details')
      .select('*')
      .eq('service_id', serviceId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(detail: Omit<ServiceDetail, 'id' | 'created_at' | 'updated_at'>): Promise<ServiceDetail> {
    const { data, error } = await supabase
      .from('service_details')
      .insert([detail])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, detail: Partial<Omit<ServiceDetail, 'id' | 'created_at' | 'updated_at'>>): Promise<ServiceDetail> {
    const { data, error } = await supabase
      .from('service_details')
      .update({ ...detail, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('service_details')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Service Approach CRUD operations
export const serviceApproachService = {
  async getByServiceId(serviceId: string): Promise<ServiceApproach[]> {
    const { data, error } = await supabase
      .from('service_approaches')
      .select('*')
      .eq('service_id', serviceId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(approach: Omit<ServiceApproach, 'id' | 'created_at' | 'updated_at'>): Promise<ServiceApproach> {
    const { data, error } = await supabase
      .from('service_approaches')
      .insert([approach])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, approach: Partial<Omit<ServiceApproach, 'id' | 'created_at' | 'updated_at'>>): Promise<ServiceApproach> {
    const { data, error } = await supabase
      .from('service_approaches')
      .update({ ...approach, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('service_approaches')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Article Type CRUD operations
export const articleTypeService = {
  async getAll(): Promise<ArticleType[]> {
    const { data, error } = await supabase
      .from('article_types')
      .select(`
        *,
        _count:articles(count)
      `)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(articleType: Omit<ArticleType, 'id' | 'created_at' | 'updated_at' | '_count'>): Promise<ArticleType> {
    const { data, error } = await supabase
      .from('article_types')
      .insert([articleType])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, articleType: Partial<Omit<ArticleType, 'id' | 'created_at' | 'updated_at' | '_count'>>): Promise<ArticleType> {
    const { data, error } = await supabase
      .from('article_types')
      .update({ ...articleType, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('article_types')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Article CRUD operations
export const articleService = {
  async getAll(): Promise<Article[]> {
    const { data, error } = await supabase
      .from('articles')
      .select(`
        *,
        article_type:article_types(*)
      `)
      .order('date_published', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async getByTypeId(typeId: string): Promise<Article[]> {
    const { data, error } = await supabase
      .from('articles')
      .select(`
        *,
        article_type:article_types(*)
      `)
      .eq('article_type_id', typeId)
      .order('date_published', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(article: Omit<Article, 'id' | 'created_at' | 'updated_at' | 'article_type'>): Promise<Article> {
    const { data, error } = await supabase
      .from('articles')
      .insert([article])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, article: Partial<Omit<Article, 'id' | 'created_at' | 'updated_at' | 'article_type'>>): Promise<Article> {
    const { data, error } = await supabase
      .from('articles')
      .update({ ...article, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// White Paper CRUD operations
export const whitePaperService = {
  async getAll(): Promise<WhitePaper[]> {
    const { data, error } = await supabase
      .from('white_papers')
      .select('*')
      .order('date_published', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async create(whitePaper: Omit<WhitePaper, 'id' | 'created_at' | 'updated_at'>): Promise<WhitePaper> {
    const { data, error } = await supabase
      .from('white_papers')
      .insert([whitePaper])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: string, whitePaper: Partial<Omit<WhitePaper, 'id' | 'created_at' | 'updated_at'>>): Promise<WhitePaper> {
    const { data, error } = await supabase
      .from('white_papers')
      .update({ ...whitePaper, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('white_papers')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}
