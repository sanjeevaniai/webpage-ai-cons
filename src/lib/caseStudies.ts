import { supabase, CaseStudy, CaseStudySummary, isSupabaseConfigured } from './supabase'

// Mock data for when Supabase is not configured
const mockCaseStudies: CaseStudySummary[] = [
    {
        id: '1',
        title: 'Healthcare AI Governance Implementation',
        description: 'Implemented comprehensive AI governance framework for a major healthcare provider, achieving 95% compliance with HIPAA and NIST standards while reducing operational costs by 40%.',
        client_name: 'MediCare Plus',
        industry: 'Healthcare',
        featured: true,
        created_at: '2024-01-15T00:00:00Z'
    },
    {
        id: '2',
        title: 'Financial Services AI Ethics Framework',
        description: 'Developed and implemented an AI ethics framework for a leading financial services company, resulting in 92% ethics compliance and 127% ROI improvement.',
        client_name: 'Global Finance Corp',
        industry: 'Financial Services',
        featured: true,
        created_at: '2024-01-10T00:00:00Z'
    },
    {
        id: '3',
        title: 'Manufacturing AI Risk Mitigation',
        description: 'Implemented AI risk mitigation strategies for a manufacturing company, achieving 78% risk reduction and 45% cost savings through predictive maintenance and quality control.',
        client_name: 'TechManufacturing Inc',
        industry: 'Manufacturing',
        featured: false,
        created_at: '2024-01-05T00:00:00Z'
    }
]

const mockCaseStudyDetails: CaseStudy[] = [
    {
        id: '1',
        title: 'Healthcare AI Governance Implementation',
        description: 'Implemented comprehensive AI governance framework for a major healthcare provider, achieving 95% compliance with HIPAA and NIST standards while reducing operational costs by 40%.',
        content: `# Healthcare AI Governance Implementation: A Complete Success Story

## Executive Summary

MediCare Plus, a leading healthcare provider with over 50 facilities nationwide, partnered with SANJEEVANI AI to implement a comprehensive AI governance framework. The project resulted in 95% HIPAA compliance, 40% operational cost reduction, and 127% ROI improvement within 12 months.

## The Challenge

### Regulatory Pressure
MediCare Plus was facing increasing regulatory scrutiny with multiple AI systems deployed across different departments:
- **Patient Data Management**: AI-powered systems processing 2M+ patient records
- **Diagnostic Imaging**: Machine learning models analyzing 500K+ medical images annually
- **Predictive Analytics**: AI models predicting patient outcomes and treatment responses
- **Administrative Automation**: AI systems handling billing, scheduling, and resource allocation

### Key Pain Points
1. **Compliance Gaps**: 23% of AI systems lacked proper documentation and audit trails
2. **Data Privacy Concerns**: Inconsistent data handling across different AI applications
3. **Risk Management**: No centralized framework for AI risk assessment and mitigation
4. **Operational Inefficiency**: Manual processes for AI monitoring and compliance reporting
5. **Regulatory Uncertainty**: Unclear guidelines for AI implementation in healthcare

## Our Solution

### Phase 1: Assessment and Planning (Months 1-2)

**Comprehensive AI Audit**
- Conducted full inventory of 47 AI systems across all facilities
- Identified compliance gaps and risk areas
- Mapped data flows and processing activities
- Assessed current governance structures

**Key Findings:**
- 12 systems had no formal risk assessments
- 18 systems lacked proper data lineage documentation
- 8 systems were using outdated algorithms with potential bias
- 15 systems had insufficient privacy controls

**Stakeholder Engagement**
- Formed cross-functional AI Governance Committee
- Conducted 25+ interviews with clinical staff, IT teams, and compliance officers
- Established clear roles and responsibilities
- Created communication plan for organization-wide rollout

### Phase 2: Framework Development (Months 3-4)

**AI Governance Framework Design**
- Developed comprehensive AI governance policies aligned with HIPAA, NIST, and FDA guidelines
- Created standardized AI risk assessment templates
- Established data privacy and security protocols
- Designed AI ethics guidelines specific to healthcare

**Key Components:**
1. **AI Risk Management Framework**
   - Risk identification and assessment procedures
   - Mitigation strategies and controls
   - Regular monitoring and review processes
   - Incident response protocols

2. **Data Governance Structure**
   - Data classification and handling procedures
   - Privacy impact assessments
   - Data retention and disposal policies
   - Cross-border data transfer protocols

3. **AI Ethics Guidelines**
   - Fairness and bias prevention measures
   - Transparency and explainability requirements
   - Human oversight and decision-making protocols
   - Patient consent and notification procedures

### Phase 3: Implementation (Months 5-8)

**System-by-System Implementation**
- Prioritized high-risk, high-impact systems first
- Implemented governance controls for each AI system
- Updated data processing agreements and contracts
- Conducted staff training and change management

**Technical Implementation:**
- Deployed AI monitoring and logging systems
- Implemented automated compliance checking
- Created centralized AI registry and documentation system
- Established real-time risk dashboards

**Training and Change Management:**
- Trained 500+ staff members on AI governance principles
- Created role-specific training modules for different departments
- Conducted monthly compliance workshops
- Established AI governance helpdesk and support system

### Phase 4: Monitoring and Optimization (Months 9-12)

**Continuous Monitoring**
- Implemented automated compliance monitoring
- Established regular audit schedules
- Created performance metrics and KPIs
- Conducted quarterly governance reviews

**Process Improvements**
- Refined governance procedures based on feedback
- Optimized monitoring and reporting systems
- Enhanced training programs
- Updated policies based on regulatory changes

## Implementation Details

### Technical Architecture

**AI Governance Platform**
- Centralized AI registry with 47 registered systems
- Automated compliance monitoring and reporting
- Real-time risk assessment and alerting
- Integration with existing IT infrastructure

**Data Protection Measures**
- End-to-end encryption for all AI data processing
- Automated data anonymization and pseudonymization
- Privacy-preserving machine learning techniques
- Regular data minimization audits

**Monitoring and Auditing**
- Continuous monitoring of AI system performance
- Automated bias detection and fairness testing
- Regular security vulnerability assessments
- Comprehensive audit trail for all AI decisions

### Governance Structure

**AI Governance Committee**
- Chief Medical Officer (Chair)
- Chief Information Officer
- Chief Compliance Officer
- Chief Privacy Officer
- AI Ethics Officer (new role)
- Clinical AI Specialist
- Patient Representative

**Operational Teams**
- AI Risk Management Team (5 members)
- Data Privacy Team (8 members)
- AI Ethics Review Board (12 members)
- Technical Implementation Team (15 members)

## Results and Impact

### Compliance Achievements

**HIPAA Compliance: 95%**
- All AI systems now have proper documentation
- Complete data lineage tracking implemented
- Patient consent procedures updated
- Regular compliance audits showing consistent improvement

**NIST Framework Alignment: 92%**
- Comprehensive risk management processes
- Robust security controls implemented
- Regular security assessments and updates
- Incident response procedures tested and validated

**FDA Guidelines Compliance: 88%**
- Clinical AI systems meet FDA requirements
- Proper validation and testing protocols
- Documentation for regulatory submissions
- Ongoing monitoring and reporting systems

### Financial Impact

**Cost Savings: $2.3M Annually**
- **Operational Efficiency**: $1.2M saved through automated compliance processes
- **Risk Mitigation**: $800K saved by preventing potential regulatory fines
- **Resource Optimization**: $300K saved through improved AI system management

**ROI: 127%**
- **Investment**: $1.8M total project cost
- **Annual Savings**: $2.3M
- **Payback Period**: 9.4 months
- **3-Year ROI**: 283%

### Operational Improvements

**Process Efficiency**
- 65% reduction in compliance reporting time
- 80% reduction in manual audit preparation
- 45% faster AI system approval process
- 90% reduction in compliance-related incidents

**Quality Improvements**
- 30% improvement in AI system accuracy
- 25% reduction in false positive rates
- 40% improvement in patient satisfaction scores
- 50% reduction in AI-related complaints

**Risk Reduction**
- 78% reduction in AI-related security incidents
- 85% improvement in data privacy compliance
- 92% reduction in regulatory audit findings
- 100% of AI systems now have proper risk assessments

## Key Success Factors

### 1. Executive Leadership
- Strong commitment from C-suite leadership
- Dedicated resources and budget allocation
- Clear communication of business case and benefits
- Regular progress reviews and course corrections

### 2. Cross-Functional Collaboration
- Effective collaboration between IT, compliance, and clinical teams
- Regular communication and feedback loops
- Shared ownership of governance outcomes
- Continuous learning and improvement culture

### 3. Phased Implementation
- Systematic approach to implementation
- Early wins to build momentum
- Gradual rollout to minimize disruption
- Continuous monitoring and adjustment

### 4. Technology Integration
- Seamless integration with existing systems
- User-friendly interfaces and tools
- Automated processes where possible
- Scalable and maintainable solutions

## Lessons Learned

### What Worked Well
1. **Comprehensive Assessment**: Thorough initial audit identified all key issues
2. **Stakeholder Engagement**: Early involvement of all stakeholders ensured buy-in
3. **Phased Approach**: Gradual implementation minimized disruption
4. **Training and Support**: Comprehensive training ensured successful adoption
5. **Continuous Monitoring**: Regular monitoring enabled quick issue resolution

### Challenges Overcome
1. **Resistance to Change**: Addressed through clear communication and training
2. **Technical Complexity**: Managed through expert consultation and testing
3. **Resource Constraints**: Overcome through prioritization and phased approach
4. **Regulatory Uncertainty**: Addressed through proactive compliance monitoring
5. **Integration Issues**: Resolved through careful planning and testing

### Recommendations for Other Organizations
1. **Start Early**: Begin AI governance planning before major AI deployments
2. **Get Leadership Buy-in**: Ensure executive support and resource allocation
3. **Engage Stakeholders**: Involve all relevant parties from the beginning
4. **Invest in Training**: Comprehensive training is essential for success
5. **Monitor Continuously**: Regular monitoring and adjustment are critical

## Future Roadmap

### Short-term (Next 6 months)
- Complete implementation for remaining 5 AI systems
- Enhance automated monitoring capabilities
- Conduct comprehensive staff training refresh
- Implement advanced bias detection tools

### Medium-term (6-18 months)
- Expand governance framework to new AI initiatives
- Implement advanced AI ethics monitoring
- Develop predictive compliance analytics
- Create industry best practices documentation

### Long-term (18+ months)
- Establish AI governance as competitive advantage
- Share best practices with industry partners
- Contribute to industry standards development
- Explore advanced AI governance technologies

## Conclusion

The MediCare Plus AI governance implementation represents a comprehensive success story that demonstrates the value of proactive AI governance in healthcare. Through careful planning, stakeholder engagement, and systematic implementation, we achieved:

- **95% HIPAA compliance** with significant cost savings
- **40% operational cost reduction** through process automation
- **127% ROI** within the first year
- **Enhanced patient safety** and data protection
- **Improved operational efficiency** and staff satisfaction

This case study serves as a model for other healthcare organizations looking to implement comprehensive AI governance frameworks. The key to success lies in executive leadership, cross-functional collaboration, phased implementation, and continuous monitoring and improvement.

For organizations considering similar initiatives, we recommend starting with a comprehensive assessment, engaging all stakeholders early, and taking a phased approach to implementation. With proper planning and execution, AI governance can become a competitive advantage that drives both compliance and business value.

## Contact Information

For more information about this case study or to discuss how SANJEEVANI AI can help your organization implement AI governance, please contact:

**Suneeta Modekurty**
- Email: suneeta@sanjeevaniai.com
- Phone: [Your Phone Number]
- LinkedIn: [Your LinkedIn Profile]
- Website: [Your Website]

**SANJEEVANI AI**
- Specializing in AI Strategy, LLM Implementation, and Portfolio Management
- Healthcare AI Governance Experts
- NIST and HIPAA Compliance Specialists
- Custom AI Solutions for Healthcare Organizations`
    },
    {
        id: '1',
        title: 'Healthcare AI Governance Implementation',
        description: 'Implemented comprehensive AI governance framework for a major healthcare provider, achieving 95% compliance with HIPAA and NIST standards while reducing operational costs by 40%.',
        content: `# Healthcare AI Governance Implementation: A Complete Success Story

## Executive Summary

MediCare Plus, a leading healthcare provider with over 50 facilities nationwide, partnered with SANJEEVANI AI to implement a comprehensive AI governance framework. The project resulted in 95% HIPAA compliance, 40% operational cost reduction, and 127% ROI improvement within 12 months.

## The Challenge

### Regulatory Pressure
MediCare Plus was facing increasing regulatory scrutiny with multiple AI systems deployed across different departments:
- **Patient Data Management**: AI-powered systems processing 2M+ patient records
- **Diagnostic Imaging**: Machine learning models analyzing 500K+ medical images annually
- **Predictive Analytics**: AI models predicting patient outcomes and treatment responses
- **Administrative Automation**: AI systems handling billing, scheduling, and resource allocation

### Key Pain Points
1. **Compliance Gaps**: 23% of AI systems lacked proper documentation and audit trails
2. **Data Privacy Concerns**: Inconsistent data handling across different AI applications
3. **Risk Management**: No centralized framework for AI risk assessment and mitigation
4. **Operational Inefficiency**: Manual processes for AI monitoring and compliance reporting
5. **Regulatory Uncertainty**: Unclear guidelines for AI implementation in healthcare

## Our Solution

### Phase 1: Assessment and Planning (Months 1-2)

**Comprehensive AI Audit**
- Conducted full inventory of 47 AI systems across all facilities
- Identified compliance gaps and risk areas
- Mapped data flows and processing activities
- Assessed current governance structures

**Key Findings:**
- 12 systems had no formal risk assessments
- 18 systems lacked proper data lineage documentation
- 8 systems were using outdated algorithms with potential bias
- 15 systems had insufficient privacy controls

**Stakeholder Engagement**
- Formed cross-functional AI Governance Committee
- Conducted 25+ interviews with clinical staff, IT teams, and compliance officers
- Established clear roles and responsibilities
- Created communication plan for organization-wide rollout

### Phase 2: Framework Development (Months 3-4)

**AI Governance Framework Design**
- Developed comprehensive AI governance policies aligned with HIPAA, NIST, and FDA guidelines
- Created standardized AI risk assessment templates
- Established data privacy and security protocols
- Designed AI ethics guidelines specific to healthcare

**Key Components:**
1. **AI Risk Management Framework**
   - Risk identification and assessment procedures
   - Mitigation strategies and controls
   - Regular monitoring and review processes
   - Incident response protocols

2. **Data Governance Structure**
   - Data classification and handling procedures
   - Privacy impact assessments
   - Data retention and disposal policies
   - Cross-border data transfer protocols

3. **AI Ethics Guidelines**
   - Fairness and bias prevention measures
   - Transparency and explainability requirements
   - Human oversight and decision-making protocols
   - Patient consent and notification procedures

### Phase 3: Implementation (Months 5-8)

**System-by-System Implementation**
- Prioritized high-risk, high-impact systems first
- Implemented governance controls for each AI system
- Updated data processing agreements and contracts
- Conducted staff training and change management

**Technical Implementation:**
- Deployed AI monitoring and logging systems
- Implemented automated compliance checking
- Created centralized AI registry and documentation system
- Established real-time risk dashboards

**Training and Change Management:**
- Trained 500+ staff members on AI governance principles
- Created role-specific training modules for different departments
- Conducted monthly compliance workshops
- Established AI governance helpdesk and support system

### Phase 4: Monitoring and Optimization (Months 9-12)

**Continuous Monitoring**
- Implemented automated compliance monitoring
- Established regular audit schedules
- Created performance metrics and KPIs
- Conducted quarterly governance reviews

**Process Improvements**
- Refined governance procedures based on feedback
- Optimized monitoring and reporting systems
- Enhanced training programs
- Updated policies based on regulatory changes

## Implementation Details

### Technical Architecture

**AI Governance Platform**
- Centralized AI registry with 47 registered systems
- Automated compliance monitoring and reporting
- Real-time risk assessment and alerting
- Integration with existing IT infrastructure

**Data Protection Measures**
- End-to-end encryption for all AI data processing
- Automated data anonymization and pseudonymization
- Privacy-preserving machine learning techniques
- Regular data minimization audits

**Monitoring and Auditing**
- Continuous monitoring of AI system performance
- Automated bias detection and fairness testing
- Regular security vulnerability assessments
- Comprehensive audit trail for all AI decisions

### Governance Structure

**AI Governance Committee**
- Chief Medical Officer (Chair)
- Chief Information Officer
- Chief Compliance Officer
- Chief Privacy Officer
- AI Ethics Officer (new role)
- Clinical AI Specialist
- Patient Representative

**Operational Teams**
- AI Risk Management Team (5 members)
- Data Privacy Team (8 members)
- AI Ethics Review Board (12 members)
- Technical Implementation Team (15 members)

## Results and Impact

### Compliance Achievements

**HIPAA Compliance: 95%**
- All AI systems now have proper documentation
- Complete data lineage tracking implemented
- Patient consent procedures updated
- Regular compliance audits showing consistent improvement

**NIST Framework Alignment: 92%**
- Comprehensive risk management processes
- Robust security controls implemented
- Regular security assessments and updates
- Incident response procedures tested and validated

**FDA Guidelines Compliance: 88%**
- Clinical AI systems meet FDA requirements
- Proper validation and testing protocols
- Documentation for regulatory submissions
- Ongoing monitoring and reporting systems

### Financial Impact

**Cost Savings: $2.3M Annually**
- **Operational Efficiency**: $1.2M saved through automated compliance processes
- **Risk Mitigation**: $800K saved by preventing potential regulatory fines
- **Resource Optimization**: $300K saved through improved AI system management

**ROI: 127%**
- **Investment**: $1.8M total project cost
- **Annual Savings**: $2.3M
- **Payback Period**: 9.4 months
- **3-Year ROI**: 283%

### Operational Improvements

**Process Efficiency**
- 65% reduction in compliance reporting time
- 80% reduction in manual audit preparation
- 45% faster AI system approval process
- 90% reduction in compliance-related incidents

**Quality Improvements**
- 30% improvement in AI system accuracy
- 25% reduction in false positive rates
- 40% improvement in patient satisfaction scores
- 50% reduction in AI-related complaints

**Risk Reduction**
- 78% reduction in AI-related security incidents
- 85% improvement in data privacy compliance
- 92% reduction in regulatory audit findings
- 100% of AI systems now have proper risk assessments

## Key Success Factors

### 1. Executive Leadership
- Strong commitment from C-suite leadership
- Dedicated resources and budget allocation
- Clear communication of business case and benefits
- Regular progress reviews and course corrections

### 2. Cross-Functional Collaboration
- Effective collaboration between IT, compliance, and clinical teams
- Regular communication and feedback loops
- Shared ownership of governance outcomes
- Continuous learning and improvement culture

### 3. Phased Implementation
- Systematic approach to implementation
- Early wins to build momentum
- Gradual rollout to minimize disruption
- Continuous monitoring and adjustment

### 4. Technology Integration
- Seamless integration with existing systems
- User-friendly interfaces and tools
- Automated processes where possible
- Scalable and maintainable solutions

## Lessons Learned

### What Worked Well
1. **Comprehensive Assessment**: Thorough initial audit identified all key issues
2. **Stakeholder Engagement**: Early involvement of all stakeholders ensured buy-in
3. **Phased Approach**: Gradual implementation minimized disruption
4. **Training and Support**: Comprehensive training ensured successful adoption
5. **Continuous Monitoring**: Regular monitoring enabled quick issue resolution

### Challenges Overcome
1. **Resistance to Change**: Addressed through clear communication and training
2. **Technical Complexity**: Managed through expert consultation and testing
3. **Resource Constraints**: Overcome through prioritization and phased approach
4. **Regulatory Uncertainty**: Addressed through proactive compliance monitoring
5. **Integration Issues**: Resolved through careful planning and testing

### Recommendations for Other Organizations
1. **Start Early**: Begin AI governance planning before major AI deployments
2. **Get Leadership Buy-in**: Ensure executive support and resource allocation
3. **Engage Stakeholders**: Involve all relevant parties from the beginning
4. **Invest in Training**: Comprehensive training is essential for success
5. **Monitor Continuously**: Regular monitoring and adjustment are critical

## Future Roadmap

### Short-term (Next 6 months)
- Complete implementation for remaining 5 AI systems
- Enhance automated monitoring capabilities
- Conduct comprehensive staff training refresh
- Implement advanced bias detection tools

### Medium-term (6-18 months)
- Expand governance framework to new AI initiatives
- Implement advanced AI ethics monitoring
- Develop predictive compliance analytics
- Create industry best practices documentation

### Long-term (18+ months)
- Establish AI governance as competitive advantage
- Share best practices with industry partners
- Contribute to industry standards development
- Explore advanced AI governance technologies

## Conclusion

The MediCare Plus AI governance implementation represents a comprehensive success story that demonstrates the value of proactive AI governance in healthcare. Through careful planning, stakeholder engagement, and systematic implementation, we achieved:

- **95% HIPAA compliance** with significant cost savings
- **40% operational cost reduction** through process automation
- **127% ROI** within the first year
- **Enhanced patient safety** and data protection
- **Improved operational efficiency** and staff satisfaction

This case study serves as a model for other healthcare organizations looking to implement comprehensive AI governance frameworks. The key to success lies in executive leadership, cross-functional collaboration, phased implementation, and continuous monitoring and improvement.

For organizations considering similar initiatives, we recommend starting with a comprehensive assessment, engaging all stakeholders early, and taking a phased approach to implementation. With proper planning and execution, AI governance can become a competitive advantage that drives both compliance and business value.

## Contact Information

For more information about this case study or to discuss how SANJEEVANI AI can help your organization implement AI governance, please contact:

**Suneeta Modekurty**
- Email: suneeta@sanjeevaniai.com
- Phone: [Your Phone Number]
- LinkedIn: [Your LinkedIn Profile]
- Website: [Your Website]

**SANJEEVANI AI**
- Specializing in AI Strategy, LLM Implementation, and Portfolio Management
- Healthcare AI Governance Experts
- NIST and HIPAA Compliance Specialists
- Custom AI Solutions for Healthcare Organizations`,
        client_name: 'MediCare Plus',
        industry: 'Healthcare',
        challenge: 'The client was struggling with regulatory compliance across multiple AI systems, facing potential HIPAA violations and operational inefficiencies that were costing them millions annually.',
        solution: 'We implemented a comprehensive AI governance framework that included risk assessment protocols, data privacy compliance measures, model validation procedures, and continuous monitoring systems tailored specifically for healthcare applications.',
        results: 'Achieved 95% HIPAA compliance score, reduced operational costs by 40%, and implemented real-time monitoring for all AI systems. The client now has a scalable framework that adapts to new regulations.',
        metrics: {
            roi_improvement: 127,
            cost_reduction: 40,
            risk_reduction: 78,
            security_score: 95,
            ethics_compliance: 92
        },
        technologies: ['Python', 'TensorFlow', 'HIPAA Compliance', 'NIST Framework', 'AWS', 'Docker'],
        created_at: '2024-01-15T00:00:00Z',
        updated_at: '2024-01-15T00:00:00Z',
        published: true,
        featured: true
    },
    {
        id: '2',
        title: 'Financial Services AI Ethics Framework',
        description: 'Developed and implemented an AI ethics framework for a leading financial services company, resulting in 92% ethics compliance and 127% ROI improvement.',
        content: 'This case study showcases our work with a leading financial services company to develop and implement a comprehensive AI ethics framework. The client needed to ensure their AI systems were not only compliant with financial regulations but also aligned with ethical principles.\n\n## Project Scope\nThe financial services company was using AI for credit scoring, fraud detection, and customer service, but lacked a unified approach to AI ethics and bias mitigation.\n\n## Our Approach\nWe developed a multi-layered AI ethics framework that included:\n- Bias detection and mitigation protocols\n- Fairness assessment tools\n- Transparency requirements\n- Human oversight mechanisms\n\n## Results\n- Achieved 92% ethics compliance score\n- Improved customer trust by 60%\n- Reduced bias-related complaints by 85%\n- Generated 127% ROI through improved decision-making\n\n## Technology Stack\n- Machine learning models for bias detection\n- Real-time monitoring dashboards\n- Automated reporting systems\n- Integration with existing financial systems',
        client_name: 'Global Finance Corp',
        industry: 'Financial Services',
        challenge: 'The financial services company was facing increasing scrutiny over AI bias in their credit scoring and fraud detection systems, with potential regulatory penalties and reputational damage.',
        solution: 'We developed a comprehensive AI ethics framework with bias detection protocols, fairness assessment tools, transparency requirements, and human oversight mechanisms specifically designed for financial services.',
        results: 'Achieved 92% ethics compliance, improved customer trust by 60%, reduced bias-related complaints by 85%, and generated 127% ROI through improved decision-making processes.',
        metrics: {
            roi_improvement: 127,
            cost_reduction: 35,
            risk_reduction: 85,
            security_score: 98,
            ethics_compliance: 92
        },
        technologies: ['Python', 'Scikit-learn', 'Fairness Tools', 'MLOps', 'Kubernetes', 'PostgreSQL'],
        created_at: '2024-01-10T00:00:00Z',
        updated_at: '2024-01-10T00:00:00Z',
        published: true,
        featured: true
    },
    {
        id: '3',
        title: 'Manufacturing AI Risk Mitigation',
        description: 'Implemented AI risk mitigation strategies for a manufacturing company, achieving 78% risk reduction and 45% cost savings through predictive maintenance and quality control.',
        content: 'This case study details our work with a manufacturing company to implement AI risk mitigation strategies. The client was experiencing significant losses due to equipment failures and quality control issues.\n\n## Challenge\nThe manufacturing company was facing:\n- Unexpected equipment failures costing millions\n- Quality control issues affecting customer satisfaction\n- Lack of predictive insights for maintenance\n- Regulatory compliance challenges\n\n## Solution\nWe implemented a comprehensive AI risk mitigation system that included:\n- Predictive maintenance algorithms\n- Real-time quality control monitoring\n- Risk assessment dashboards\n- Automated alert systems\n\n## Implementation\n- Deployed IoT sensors across production lines\n- Developed machine learning models for failure prediction\n- Created real-time monitoring dashboards\n- Implemented automated maintenance scheduling\n\n## Results\n- 78% reduction in equipment-related risks\n- 45% cost savings through predictive maintenance\n- 95% improvement in quality control accuracy\n- 60% reduction in unplanned downtime\n\n## Long-term Benefits\nThe client now has a proactive approach to maintenance and quality control, with significant cost savings and improved operational efficiency.',
        client_name: 'TechManufacturing Inc',
        industry: 'Manufacturing',
        challenge: 'The manufacturing company was experiencing significant losses due to unexpected equipment failures and quality control issues, with no predictive insights for maintenance scheduling.',
        solution: 'We implemented a comprehensive AI risk mitigation system with predictive maintenance algorithms, real-time quality control monitoring, risk assessment dashboards, and automated alert systems.',
        results: 'Achieved 78% risk reduction, 45% cost savings through predictive maintenance, 95% improvement in quality control accuracy, and 60% reduction in unplanned downtime.',
        metrics: {
            roi_improvement: 95,
            cost_reduction: 45,
            risk_reduction: 78,
            security_score: 90,
            ethics_compliance: 88
        },
        technologies: ['Python', 'TensorFlow', 'IoT', 'Time Series Analysis', 'Docker', 'Grafana'],
        created_at: '2024-01-05T00:00:00Z',
        updated_at: '2024-01-05T00:00:00Z',
        published: true,
        featured: false
    }
]

export const caseStudiesService = {
    // Get all published case studies (for listing page)
    async getAllCaseStudies(): Promise<CaseStudySummary[]> {
        if (!isSupabaseConfigured()) {
            console.log('Supabase not configured, using mock data')
            return mockCaseStudies
        }

        const { data, error } = await supabase!
            .from('case_studies')
            .select(`
id,
    title,
    description,
    client_name,
    industry,
    image_url,
    featured,
    created_at
        `)
            .eq('published', true)
            .order('featured', { ascending: false })
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching case studies:', error)
            throw error
        }

        return data || []
    },

    // Get a single case study by ID (for detail page)
    async getCaseStudyById(id: string): Promise<CaseStudy | null> {
        const { data, error } = await supabase
            .from('case_studies')
            .select('*')
            .eq('id', id)
            .eq('published', true)
            .single()

        if (error) {
            console.error('Error fetching case study:', error)
            return null
        }

        return data
    },

    // Get featured case studies (for homepage)
    async getFeaturedCaseStudies(limit: number = 3): Promise<CaseStudySummary[]> {
        const { data, error } = await supabase
            .from('case_studies')
            .select(`
id,
    title,
    description,
    client_name,
    industry,
    image_url,
    featured,
    created_at
        `)
            .eq('published', true)
            .eq('featured', true)
            .order('created_at', { ascending: false })
            .limit(limit)

        if (error) {
            console.error('Error fetching featured case studies:', error)
            throw error
        }

        return data || []
    },

    // Search case studies by industry or keywords
    async searchCaseStudies(query: string): Promise<CaseStudySummary[]> {
        const { data, error } = await supabase
            .from('case_studies')
            .select(`
id,
    title,
    description,
    client_name,
    industry,
    image_url,
    featured,
    created_at
        `)
            .eq('published', true)
            .or(`title.ilike.% ${query}%, description.ilike.% ${query}%, industry.ilike.% ${query}% `)
            .order('featured', { ascending: false })
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error searching case studies:', error)
            throw error
        }

        return data || []
    }
}
