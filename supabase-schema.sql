-- Case Studies Table Schema for Supabase
-- Run this SQL in your Supabase SQL editor to create the case_studies table

CREATE TABLE case_studies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results TEXT NOT NULL,
  metrics JSONB NOT NULL DEFAULT '{}',
  technologies TEXT[] DEFAULT '{}',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false
);

-- Create indexes for better performance
CREATE INDEX idx_case_studies_published ON case_studies(published);
CREATE INDEX idx_case_studies_featured ON case_studies(featured);
CREATE INDEX idx_case_studies_industry ON case_studies(industry);
CREATE INDEX idx_case_studies_created_at ON case_studies(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read published case studies
CREATE POLICY "Anyone can view published case studies" ON case_studies
  FOR SELECT USING (published = true);

-- Create a policy for authenticated users to insert (for admin functionality)
CREATE POLICY "Authenticated users can insert case studies" ON case_studies
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create a policy for authenticated users to update (for admin functionality)
CREATE POLICY "Authenticated users can update case studies" ON case_studies
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create a policy for authenticated users to delete (for admin functionality)
CREATE POLICY "Authenticated users can delete case studies" ON case_studies
  FOR DELETE USING (auth.role() = 'authenticated');

-- Sample data (optional - you can remove this section)
INSERT INTO case_studies (
  title,
  description,
  content,
  client_name,
  industry,
  challenge,
  solution,
  results,
  metrics,
  technologies,
  published,
  featured
) VALUES (
  'Healthcare AI Governance Implementation',
  'Implemented comprehensive AI governance framework for a major healthcare provider, achieving 95% compliance with HIPAA and NIST standards while reducing operational costs by 40%.',
  'This comprehensive case study details our work with a major healthcare provider to implement a robust AI governance framework. The client was struggling with regulatory compliance and needed a solution that would ensure their AI systems met the highest standards of security and ethics.

## Project Overview
The healthcare provider was using multiple AI systems across different departments but lacked a unified governance approach. This created compliance risks and operational inefficiencies.

## Implementation Process
We conducted a thorough audit of their existing AI systems and developed a custom governance framework that included:
- Risk assessment protocols
- Data privacy compliance measures
- Model validation procedures
- Continuous monitoring systems

## Key Achievements
- Achieved 95% HIPAA compliance score
- Reduced operational costs by 40%
- Implemented real-time monitoring for all AI systems
- Created comprehensive documentation and training materials

## Long-term Impact
The client now has a scalable AI governance framework that can adapt to new regulations and technologies, ensuring continued compliance and operational excellence.',
  'MediCare Plus',
  'Healthcare',
  'The client was struggling with regulatory compliance across multiple AI systems, facing potential HIPAA violations and operational inefficiencies that were costing them millions annually.',
  'We implemented a comprehensive AI governance framework that included risk assessment protocols, data privacy compliance measures, model validation procedures, and continuous monitoring systems tailored specifically for healthcare applications.',
  'Achieved 95% HIPAA compliance score, reduced operational costs by 40%, and implemented real-time monitoring for all AI systems. The client now has a scalable framework that adapts to new regulations.',
  '{"roi_improvement": 127, "cost_reduction": 40, "risk_reduction": 78, "security_score": 95, "ethics_compliance": 92}',
  ARRAY['Python', 'TensorFlow', 'HIPAA Compliance', 'NIST Framework', 'AWS', 'Docker'],
  true,
  true
),
(
  'Financial Services AI Ethics Framework',
  'Developed and implemented an AI ethics framework for a leading financial services company, resulting in 92% ethics compliance and 127% ROI improvement.',
  'This case study showcases our work with a leading financial services company to develop and implement a comprehensive AI ethics framework. The client needed to ensure their AI systems were not only compliant with financial regulations but also aligned with ethical principles.

## Project Scope
The financial services company was using AI for credit scoring, fraud detection, and customer service, but lacked a unified approach to AI ethics and bias mitigation.

## Our Approach
We developed a multi-layered AI ethics framework that included:
- Bias detection and mitigation protocols
- Fairness assessment tools
- Transparency requirements
- Human oversight mechanisms

## Results
- Achieved 92% ethics compliance score
- Improved customer trust by 60%
- Reduced bias-related complaints by 85%
- Generated 127% ROI through improved decision-making

## Technology Stack
- Machine learning models for bias detection
- Real-time monitoring dashboards
- Automated reporting systems
- Integration with existing financial systems',
  'Global Finance Corp',
  'Financial Services',
  'The financial services company was facing increasing scrutiny over AI bias in their credit scoring and fraud detection systems, with potential regulatory penalties and reputational damage.',
  'We developed a comprehensive AI ethics framework with bias detection protocols, fairness assessment tools, transparency requirements, and human oversight mechanisms specifically designed for financial services.',
  'Achieved 92% ethics compliance, improved customer trust by 60%, reduced bias-related complaints by 85%, and generated 127% ROI through improved decision-making processes.',
  '{"roi_improvement": 127, "cost_reduction": 35, "risk_reduction": 85, "security_score": 98, "ethics_compliance": 92}',
  ARRAY['Python', 'Scikit-learn', 'Fairness Tools', 'MLOps', 'Kubernetes', 'PostgreSQL'],
  true,
  true
),
(
  'Manufacturing AI Risk Mitigation',
  'Implemented AI risk mitigation strategies for a manufacturing company, achieving 78% risk reduction and 45% cost savings through predictive maintenance and quality control.',
  'This case study details our work with a manufacturing company to implement AI risk mitigation strategies. The client was experiencing significant losses due to equipment failures and quality control issues.

## Challenge
The manufacturing company was facing:
- Unexpected equipment failures costing millions
- Quality control issues affecting customer satisfaction
- Lack of predictive insights for maintenance
- Regulatory compliance challenges

## Solution
We implemented a comprehensive AI risk mitigation system that included:
- Predictive maintenance algorithms
- Real-time quality control monitoring
- Risk assessment dashboards
- Automated alert systems

## Implementation
- Deployed IoT sensors across production lines
- Developed machine learning models for failure prediction
- Created real-time monitoring dashboards
- Implemented automated maintenance scheduling

## Results
- 78% reduction in equipment-related risks
- 45% cost savings through predictive maintenance
- 95% improvement in quality control accuracy
- 60% reduction in unplanned downtime

## Long-term Benefits
The client now has a proactive approach to maintenance and quality control, with significant cost savings and improved operational efficiency.',
  'TechManufacturing Inc',
  'Manufacturing',
  'The manufacturing company was experiencing significant losses due to unexpected equipment failures and quality control issues, with no predictive insights for maintenance scheduling.',
  'We implemented a comprehensive AI risk mitigation system with predictive maintenance algorithms, real-time quality control monitoring, risk assessment dashboards, and automated alert systems.',
  'Achieved 78% risk reduction, 45% cost savings through predictive maintenance, 95% improvement in quality control accuracy, and 60% reduction in unplanned downtime.',
  '{"roi_improvement": 95, "cost_reduction": 45, "risk_reduction": 78, "security_score": 90, "ethics_compliance": 88}',
  ARRAY['Python', 'TensorFlow', 'IoT', 'Time Series Analysis', 'Docker', 'Grafana'],
  true,
  false
);
