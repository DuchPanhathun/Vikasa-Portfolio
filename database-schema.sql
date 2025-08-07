-- Create tables for the admin dashboard content management

-- Banner table
CREATE TABLE banners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  background_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Experience table
CREATE TABLE experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  years INTEGER NOT NULL,
  detail TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Clients table
CREATE TABLE clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  profile_image TEXT,
  company TEXT,
  position TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Feedbacks table
CREATE TABLE feedbacks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  feedback TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Success stories table
CREATE TABLE success_stories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Awards table
CREATE TABLE awards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  profile TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Journey table
CREATE TABLE journey (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year INTEGER NOT NULL,
  title TEXT NOT NULL,
  detail TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE journey ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access only
-- Banners policies
CREATE POLICY "Admin can do everything on banners" ON banners
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Experiences policies
CREATE POLICY "Admin can do everything on experiences" ON experiences
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Clients policies
CREATE POLICY "Admin can do everything on clients" ON clients
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Feedbacks policies
CREATE POLICY "Admin can do everything on feedbacks" ON feedbacks
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Success stories policies
CREATE POLICY "Admin can do everything on success_stories" ON success_stories
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Awards policies
CREATE POLICY "Admin can do everything on awards" ON awards
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Journey policies
CREATE POLICY "Admin can do everything on journey" ON journey
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Vision table
CREATE TABLE vision (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  detail TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Core values table
CREATE TABLE core_values (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  icon TEXT NOT NULL,
  title TEXT NOT NULL,
  detail TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Staff table
CREATE TABLE staff (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image TEXT,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  description TEXT NOT NULL,
  profile_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Credentials table
CREATE TABLE credentials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  details TEXT NOT NULL,
  bullet_icon TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Impact table
CREATE TABLE impact (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  amount_value TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Social impact initiatives table
CREATE TABLE social_impact_initiatives (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  description TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Culture table
CREATE TABLE culture (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Life at vikasa table
CREATE TABLE life_at_vikasa (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  description TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on new tables
ALTER TABLE vision ENABLE ROW LEVEL SECURITY;
ALTER TABLE core_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_impact_initiatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE culture ENABLE ROW LEVEL SECURITY;
ALTER TABLE life_at_vikasa ENABLE ROW LEVEL SECURITY;

-- Policies for new tables
CREATE POLICY "Admin can do everything on vision" ON vision
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on core_values" ON core_values
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on staff" ON staff
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on credentials" ON credentials
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on impact" ON impact
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on social_impact_initiatives" ON social_impact_initiatives
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on culture" ON culture
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on life_at_vikasa" ON life_at_vikasa
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Who we serve tables
CREATE TABLE industries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE organization_types (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE client_support_approaches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- FAQ table
CREATE TABLE faqs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services tables
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE service_details (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE service_approaches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Article types and articles
CREATE TABLE article_types (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  article_type_id UUID REFERENCES article_types(id) ON DELETE CASCADE,
  image TEXT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  creator_name TEXT NOT NULL,
  creator_profile TEXT,
  date_published DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- White papers and research
CREATE TABLE white_papers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cover_photo TEXT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date_published DATE NOT NULL,
  pages_count INTEGER NOT NULL,
  pdf_download_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on new tables
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE organization_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_support_approaches ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_approaches ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE white_papers ENABLE ROW LEVEL SECURITY;

-- Admin policies for new tables
CREATE POLICY "Admin can do everything on industries" ON industries
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on organization_types" ON organization_types
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on client_support_approaches" ON client_support_approaches
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on faqs" ON faqs
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on services" ON services
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on service_details" ON service_details
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on service_approaches" ON service_approaches
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on article_types" ON article_types
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on articles" ON articles
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

CREATE POLICY "Admin can do everything on white_papers" ON white_papers
  FOR ALL USING (auth.jwt() ->> 'email' = 'admin@vikasa.com');

-- Create public read policies for the frontend
CREATE POLICY "Public can read banners" ON banners
  FOR SELECT USING (true);

CREATE POLICY "Public can read experiences" ON experiences
  FOR SELECT USING (true);

CREATE POLICY "Public can read clients" ON clients
  FOR SELECT USING (true);

CREATE POLICY "Public can read feedbacks" ON feedbacks
  FOR SELECT USING (true);

CREATE POLICY "Public can read success_stories" ON success_stories
  FOR SELECT USING (true);

CREATE POLICY "Public can read awards" ON awards
  FOR SELECT USING (true);

CREATE POLICY "Public can read journey" ON journey
  FOR SELECT USING (true);

CREATE POLICY "Public can read vision" ON vision
  FOR SELECT USING (true);

CREATE POLICY "Public can read core_values" ON core_values
  FOR SELECT USING (true);

CREATE POLICY "Public can read staff" ON staff
  FOR SELECT USING (true);

CREATE POLICY "Public can read credentials" ON credentials
  FOR SELECT USING (true);

CREATE POLICY "Public can read impact" ON impact
  FOR SELECT USING (true);

CREATE POLICY "Public can read social_impact_initiatives" ON social_impact_initiatives
  FOR SELECT USING (true);

CREATE POLICY "Public can read culture" ON culture
  FOR SELECT USING (true);

CREATE POLICY "Public can read life_at_vikasa" ON life_at_vikasa
  FOR SELECT USING (true);

CREATE POLICY "Public can read industries" ON industries
  FOR SELECT USING (true);

CREATE POLICY "Public can read organization_types" ON organization_types
  FOR SELECT USING (true);

CREATE POLICY "Public can read client_support_approaches" ON client_support_approaches
  FOR SELECT USING (true);

CREATE POLICY "Public can read faqs" ON faqs
  FOR SELECT USING (true);

CREATE POLICY "Public can read services" ON services
  FOR SELECT USING (true);

CREATE POLICY "Public can read service_details" ON service_details
  FOR SELECT USING (true);

CREATE POLICY "Public can read service_approaches" ON service_approaches
  FOR SELECT USING (true);

CREATE POLICY "Public can read article_types" ON article_types
  FOR SELECT USING (true);

CREATE POLICY "Public can read articles" ON articles
  FOR SELECT USING (true);

CREATE POLICY "Public can read white_papers" ON white_papers
  FOR SELECT USING (true);

-- Insert some sample data
INSERT INTO banners (title, description, background_image) VALUES
('Welcome to Vikasa', 'Your trusted partner in business transformation and growth', '/images/banner-bg.jpg');

INSERT INTO experiences (years, detail) VALUES
(5, 'Years of excellence in business consulting and strategic planning');

INSERT INTO clients (name, profile_image, company, position) VALUES
('John Smith', '/images/client-john.jpg', 'Tech Corp', 'CEO'),
('Sarah Johnson', '/images/client-sarah.jpg', 'Innovation Inc', 'CTO');

INSERT INTO awards (name, profile) VALUES
('Excellence in Business Consulting', '/images/award-excellence.jpg'),
('Top Consulting Firm 2024', '/images/award-top-firm.jpg');

INSERT INTO journey (year, title, detail, image) VALUES
(2020, 'Company Founded', 'Vikasa was established with a vision to empower businesses through strategic consulting and innovative solutions.', '/images/journey-2020.jpg'),
(2021, 'First Major Client', 'Successfully delivered our first major consulting project, establishing our reputation in the market.', '/images/journey-2021.jpg'),
(2022, 'Team Expansion', 'Expanded our team with expert consultants and specialists in various industries.', '/images/journey-2022.jpg'),
(2023, 'International Reach', 'Extended our services internationally, serving clients across multiple countries.', '/images/journey-2023.jpg'),
(2024, 'Innovation Hub', 'Launched our innovation hub to provide cutting-edge solutions and digital transformation services.', '/images/journey-2024.jpg');
