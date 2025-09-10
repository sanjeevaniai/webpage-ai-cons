import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import json
from datetime import datetime
import numpy as np

# Page configuration
st.set_page_config(
    page_title="SANJEEVANI AI Case Studies",
    page_icon="🏥",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    .main-header {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        background: linear-gradient(90deg, #1e3a8a, #3b82f6, #06b6d4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 2rem;
    }
    .case-study-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        border-radius: 15px;
        color: white;
        margin: 1rem 0;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    .metric-card {
        background: rgba(255,255,255,0.1);
        padding: 1.5rem;
        border-radius: 10px;
        text-align: center;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
    }
    .stTabs [data-baseweb="tab-list"] {
        gap: 2rem;
    }
    .stTabs [data-baseweb="tab"] {
        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>
""", unsafe_allow_html=True)

# Case studies data
case_studies_data = {
    "Healthcare & Public Sector (Oncology)": {
        "client": "National Cancer Institute",
        "industry": "Healthcare & Public Sector",
        "description": "Clinical bioinformatics projects in oncology, applying AI and data science methods for patient data analysis and risk modeling.",
        "metrics": {
            "ROI Improvement": 180,
            "Cost Reduction": 45,
            "Risk Reduction": 85,
            "Security Score": 98,
            "Ethics Compliance": 95
        },
        "technologies": ["Python", "TensorFlow", "HIPAA Compliance", "NIST Framework", "AWS", "Bioinformatics", "Clinical AI"],
        "challenge": "Processing vast amounts of complex clinical data while maintaining strict HIPAA and NIST compliance",
        "solution": "Comprehensive clinical bioinformatics platform with AI-driven risk modeling and robust governance frameworks",
        "results": "98% HIPAA compliance, 180% ROI, 40% faster diagnosis, 60% faster research data analysis",
        "data_points": {
            "patients_processed": 50000,
            "data_volume_tb": 50,
            "research_centers": 200,
            "medical_images": 2000000,
            "compliance_score": 98,
            "roi_percentage": 180
        }
    },
    "Insurance & Fintech AI Governance": {
        "client": "Global Insurance Corp",
        "industry": "Insurance & Fintech",
        "description": "Developed frameworks for responsible AI adoption in compliance-heavy financial and insurance environments.",
        "metrics": {
            "ROI Improvement": 145,
            "Cost Reduction": 40,
            "Risk Reduction": 90,
            "Security Score": 98,
            "Ethics Compliance": 94
        },
        "technologies": ["Python", "Scikit-learn", "Fairness Tools", "MLOps", "Kubernetes", "PostgreSQL", "Financial AI"],
        "challenge": "Increasing scrutiny over AI bias in credit scoring and fraud detection systems",
        "solution": "Comprehensive AI ethics framework with bias detection protocols and fairness assessment tools",
        "results": "96% regulatory compliance, 145% ROI, 95% reduction in bias-related complaints",
        "data_points": {
            "policies_processed": 2000000,
            "interactions_handled": 500000,
            "compliance_score": 96,
            "bias_reduction": 95,
            "roi_percentage": 145
        }
    },
    "Mental Health & Education AI Strategy": {
        "client": "Mental Health Foundation",
        "industry": "Mental Health & Education",
        "description": "Designed AI adoption strategies and policy frameworks for organizations in mental health and education.",
        "metrics": {
            "ROI Improvement": 165,
            "Cost Reduction": 35,
            "Risk Reduction": 92,
            "Security Score": 98,
            "Ethics Compliance": 94
        },
        "technologies": ["Python", "TensorFlow", "Privacy-Preserving AI", "Differential Privacy", "Federated Learning", "Ethical AI"],
        "challenge": "Implementing AI systems while maintaining strict privacy protection for sensitive data",
        "solution": "Advanced privacy protection, bias mitigation, and ethical AI frameworks",
        "results": "99% privacy protection, 165% ROI, 35% improvement in early intervention rates",
        "data_points": {
            "patient_records": 100000,
            "schools_served": 50,
            "privacy_score": 99,
            "bias_reduction": 92,
            "roi_percentage": 165
        }
    },
    "E-Commerce Startup (Retail)": {
        "client": "RetailTech Startup",
        "industry": "E-Commerce & Retail",
        "description": "Provided AI governance and DSPM coaching to support consumer data privacy and responsible AI use.",
        "metrics": {
            "ROI Improvement": 200,
            "Cost Reduction": 30,
            "Risk Reduction": 85,
            "Security Score": 92,
            "Ethics Compliance": 90
        },
        "technologies": ["Python", "TensorFlow", "DSPM", "GDPR Compliance", "AWS", "E-commerce AI"],
        "challenge": "Implementing AI governance from day one while building an MVP with limited resources",
        "solution": "Startup-appropriate AI governance framework with essential controls and team training",
        "results": "95% privacy compliance, 200% ROI, 40% improvement in customer trust",
        "data_points": {
            "customer_records": 50000,
            "recommendation_accuracy": 85,
            "compliance_score": 95,
            "customer_trust_improvement": 40,
            "roi_percentage": 200
        }
    },
    "Healthcare AI Platform": {
        "client": "HealthTech Innovations",
        "industry": "Healthcare AI",
        "description": "Guided founders and teams on responsible AI implementation for healthcare delivery systems.",
        "metrics": {
            "ROI Improvement": 220,
            "Cost Reduction": 40,
            "Risk Reduction": 95,
            "Security Score": 99,
            "Ethics Compliance": 96
        },
        "technologies": ["Python", "TensorFlow", "Clinical AI", "HIPAA Compliance", "FDA Guidelines", "Healthcare AI"],
        "challenge": "Implementing responsible AI systems for clinical decision support while maintaining compliance",
        "solution": "Comprehensive AI implementation, data governance, and compliance frameworks",
        "results": "99% HIPAA compliance, 220% ROI, 30% improvement in diagnostic accuracy",
        "data_points": {
            "medical_conditions": 100,
            "patients_monitored": 10000,
            "compliance_score": 99,
            "diagnostic_accuracy": 92,
            "roi_percentage": 220
        }
    },
    "Corporate Training (AI & Data Science)": {
        "client": "Fortune 500 Companies",
        "industry": "Corporate Training",
        "description": "Delivered professional training programs covering AI, data science, and data analytics, with emphasis on AI governance, HIPAA compliance, and NIST frameworks.",
        "metrics": {
            "ROI Improvement": 320,
            "Cost Reduction": 50,
            "Risk Reduction": 80,
            "Security Score": 95,
            "Ethics Compliance": 90
        },
        "technologies": ["Python", "TensorFlow", "AI Governance", "HIPAA Compliance", "NIST Framework", "Corporate Training"],
        "challenge": "Training professionals transitioning into AI roles while ensuring they understand governance, compliance, and ethical AI practices",
        "solution": "Comprehensive training programs covering AI fundamentals, data science, governance frameworks, and compliance requirements",
        "results": "Trained 500+ professionals across 25+ companies with 95% knowledge mastery and 75% career advancement",
        "data_points": {
            "professionals_trained": 500,
            "companies_served": 25,
            "completion_rate": 95,
            "career_advancement": 75,
            "roi_percentage": 320
        }
    },
    "Applied AI Project Training (Healthcare)": {
        "client": "Healthcare Professionals",
        "industry": "Healthcare Education",
        "description": "Led a diabetes likelihood prediction project as part of professional AI education, emphasizing the importance of protecting PHI and ePHI.",
        "metrics": {
            "ROI Improvement": 250,
            "Cost Reduction": 40,
            "Risk Reduction": 100,
            "Security Score": 100,
            "Ethics Compliance": 95
        },
        "technologies": ["Python", "TensorFlow", "HIPAA Compliance", "Privacy-Preserving AI", "Healthcare AI", "Differential Privacy"],
        "challenge": "Healthcare professionals needed practical AI training that emphasized privacy protection for PHI and ePHI",
        "solution": "Comprehensive diabetes prediction project with privacy-first design and HIPAA compliance training",
        "results": "100% privacy protection with zero PHI breaches, 95% technical skill development, 88% model accuracy",
        "data_points": {
            "privacy_protection": 100,
            "technical_skills": 95,
            "model_accuracy": 88,
            "hipaa_compliance": 100,
            "roi_percentage": 250
        }
    }
}

def create_roi_comparison_chart():
    """Create ROI comparison chart across all case studies"""
    data = []
    for study_name, study_data in case_studies_data.items():
        data.append({
            'Case Study': study_name,
            'ROI Improvement (%)': study_data['metrics']['ROI Improvement'],
            'Industry': study_data['industry']
        })
    
    df = pd.DataFrame(data)
    
    fig = px.bar(
        df, 
        x='Case Study', 
        y='ROI Improvement (%)',
        color='Industry',
        title="ROI Improvement Across All Case Studies",
        color_discrete_sequence=px.colors.qualitative.Set3
    )
    
    fig.update_layout(
        xaxis_tickangle=-45,
        height=500,
        showlegend=True,
        title_font_size=20
    )
    
    return fig

def create_metrics_radar_chart(study_name):
    """Create radar chart for specific case study metrics"""
    study_data = case_studies_data[study_name]
    metrics = study_data['metrics']
    
    categories = list(metrics.keys())
    values = list(metrics.values())
    
    fig = go.Figure()
    
    fig.add_trace(go.Scatterpolar(
        r=values,
        theta=categories,
        fill='toself',
        name=study_name,
        line_color='rgb(32, 201, 151)'
    ))
    
    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 100]
            )),
        showlegend=True,
        title=f"Performance Metrics - {study_name}",
        title_font_size=16
    )
    
    return fig

def create_industry_comparison():
    """Create industry comparison chart"""
    industry_data = {}
    for study_name, study_data in case_studies_data.items():
        industry = study_data['industry']
        if industry not in industry_data:
            industry_data[industry] = {
                'ROI': [],
                'Security': [],
                'Compliance': []
            }
        
        industry_data[industry]['ROI'].append(study_data['metrics']['ROI Improvement'])
        industry_data[industry]['Security'].append(study_data['metrics']['Security Score'])
        industry_data[industry]['Compliance'].append(study_data['metrics']['Ethics Compliance'])
    
    # Calculate averages
    avg_data = []
    for industry, metrics in industry_data.items():
        avg_data.append({
            'Industry': industry,
            'Avg ROI': np.mean(metrics['ROI']),
            'Avg Security': np.mean(metrics['Security']),
            'Avg Compliance': np.mean(metrics['Compliance'])
        })
    
    df = pd.DataFrame(avg_data)
    
    fig = px.scatter(
        df,
        x='Avg ROI',
        y='Avg Security',
        size='Avg Compliance',
        color='Industry',
        title="Industry Performance Comparison",
        hover_data=['Avg Compliance']
    )
    
    fig.update_layout(height=500)
    return fig

def create_technology_usage_chart():
    """Create technology usage chart"""
    tech_count = {}
    for study_name, study_data in case_studies_data.items():
        for tech in study_data['technologies']:
            tech_count[tech] = tech_count.get(tech, 0) + 1
    
    df = pd.DataFrame(list(tech_count.items()), columns=['Technology', 'Usage Count'])
    df = df.sort_values('Usage Count', ascending=True)
    
    fig = px.bar(
        df,
        x='Usage Count',
        y='Technology',
        orientation='h',
        title="Technology Usage Across Case Studies",
        color='Usage Count',
        color_continuous_scale='Viridis'
    )
    
    fig.update_layout(height=400)
    return fig

def main():
    # Header
    st.markdown('<h1 class="main-header">🏥 SANJEEVANI AI Case Studies Dashboard</h1>', unsafe_allow_html=True)
    st.markdown("### Interactive showcase of our AI governance and responsible AI implementations across industries")
    
    # Sidebar
    st.sidebar.title("Navigation")
    page = st.sidebar.selectbox(
        "Choose a section:",
        ["Overview", "Case Study Details", "Interactive Demos", "Industry Analysis", "Technology Insights"]
    )
    
    if page == "Overview":
        st.header("📊 Case Studies Overview")
        
        # Key metrics
        col1, col2, col3, col4 = st.columns(4)
        
        with col1:
            st.metric(
                label="Total Case Studies",
                value=len(case_studies_data),
                delta="5 industries"
            )
        
        with col2:
            avg_roi = np.mean([data['metrics']['ROI Improvement'] for data in case_studies_data.values()])
            st.metric(
                label="Average ROI",
                value=f"{avg_roi:.0f}%",
                delta="+15% vs industry"
            )
        
        with col3:
            avg_security = np.mean([data['metrics']['Security Score'] for data in case_studies_data.values()])
            st.metric(
                label="Average Security Score",
                value=f"{avg_security:.0f}%",
                delta="+8% vs baseline"
            )
        
        with col4:
            total_clients = len(set([data['client'] for data in case_studies_data.values()]))
            st.metric(
                label="Clients Served",
                value=total_clients,
                delta="100% satisfaction"
            )
        
        # ROI Comparison Chart
        st.subheader("ROI Improvement Across Case Studies")
        roi_chart = create_roi_comparison_chart()
        st.plotly_chart(roi_chart, use_container_width=True)
        
        # Industry Comparison
        st.subheader("Industry Performance Comparison")
        industry_chart = create_industry_comparison()
        st.plotly_chart(industry_chart, use_container_width=True)
    
    elif page == "Case Study Details":
        st.header("📋 Detailed Case Study Information")
        
        # Case study selector
        selected_study = st.selectbox(
            "Select a case study:",
            list(case_studies_data.keys())
        )
        
        study_data = case_studies_data[selected_study]
        
        # Case study card
        st.markdown(f"""
        <div class="case-study-card">
            <h2>{selected_study}</h2>
            <h3>Client: {study_data['client']}</h3>
            <h4>Industry: {study_data['industry']}</h4>
            <p>{study_data['description']}</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Metrics
        st.subheader("Key Performance Metrics")
        col1, col2, col3, col4, col5 = st.columns(5)
        
        metrics = study_data['metrics']
        with col1:
            st.metric("ROI Improvement", f"{metrics['ROI Improvement']}%")
        with col2:
            st.metric("Cost Reduction", f"{metrics['Cost Reduction']}%")
        with col3:
            st.metric("Risk Reduction", f"{metrics['Risk Reduction']}%")
        with col4:
            st.metric("Security Score", f"{metrics['Security Score']}%")
        with col5:
            st.metric("Ethics Compliance", f"{metrics['Ethics Compliance']}%")
        
        # Radar chart
        st.subheader("Performance Metrics Visualization")
        radar_chart = create_metrics_radar_chart(selected_study)
        st.plotly_chart(radar_chart, use_container_width=True)
        
        # Challenge, Solution, Results
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("🎯 Challenge")
            st.write(study_data['challenge'])
            
            st.subheader("💡 Solution")
            st.write(study_data['solution'])
        
        with col2:
            st.subheader("📈 Results")
            st.write(study_data['results'])
            
            st.subheader("🛠️ Technologies Used")
            for tech in study_data['technologies']:
                st.markdown(f"- {tech}")
    
    elif page == "Interactive Demos":
        st.header("🎮 Interactive Demonstrations")
        
        # AI Governance Simulator
        st.subheader("AI Governance Risk Assessment Simulator")
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.write("**Configure your AI system parameters:**")
            
            data_sensitivity = st.selectbox(
                "Data Sensitivity Level",
                ["Low", "Medium", "High", "Critical"],
                index=2
            )
            
            ai_impact = st.selectbox(
                "AI System Impact",
                ["Low", "Medium", "High", "Critical"],
                index=2
            )
            
            compliance_requirements = st.multiselect(
                "Compliance Requirements",
                ["HIPAA", "GDPR", "SOX", "CCPA", "NIST", "FDA"],
                default=["HIPAA", "NIST"]
            )
            
            industry = st.selectbox(
                "Industry",
                ["Healthcare", "Financial Services", "Education", "E-commerce", "Manufacturing"],
                index=0
            )
        
        with col2:
            # Calculate risk score
            sensitivity_scores = {"Low": 1, "Medium": 2, "High": 3, "Critical": 4}
            impact_scores = {"Low": 1, "Medium": 2, "High": 3, "Critical": 4}
            
            base_risk = sensitivity_scores[data_sensitivity] * impact_scores[ai_impact]
            compliance_penalty = len(compliance_requirements) * 0.5
            
            risk_score = min(100, (base_risk * 20) + (compliance_penalty * 10))
            
            st.write("**Risk Assessment Results:**")
            
            # Risk level
            if risk_score < 30:
                risk_level = "Low"
                risk_color = "green"
            elif risk_score < 60:
                risk_level = "Medium"
                risk_color = "orange"
            elif risk_score < 80:
                risk_level = "High"
                risk_color = "red"
            else:
                risk_level = "Critical"
                risk_color = "darkred"
            
            st.metric("Risk Score", f"{risk_score:.0f}/100", delta=risk_level)
            
            # Recommendations
            st.write("**Recommended Actions:**")
            if risk_score > 60:
                st.write("🔴 Implement comprehensive AI governance framework")
                st.write("🔴 Conduct thorough risk assessment")
                st.write("🔴 Establish monitoring and auditing procedures")
            elif risk_score > 30:
                st.write("🟡 Implement basic AI governance controls")
                st.write("🟡 Conduct regular risk reviews")
                st.write("🟡 Establish monitoring procedures")
            else:
                st.write("🟢 Implement basic security controls")
                st.write("🟢 Regular compliance checks")
        
        # Bias Detection Demo
        st.subheader("AI Bias Detection Demo")
        
        st.write("**Simulate bias detection in AI recommendations:**")
        
        # Sample data for bias detection
        demo_data = pd.DataFrame({
            'Demographic': ['Male', 'Female', 'Non-binary', 'Unknown'],
            'Approval Rate': [85, 78, 72, 80],
            'Average Score': [7.2, 6.8, 6.5, 6.9]
        })
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.write("**Approval Rates by Demographic:**")
            fig = px.bar(demo_data, x='Demographic', y='Approval Rate', 
                        title="AI System Approval Rates",
                        color='Approval Rate',
                        color_continuous_scale='RdYlGn')
            st.plotly_chart(fig, use_container_width=True)
        
        with col2:
            st.write("**Bias Analysis:**")
            
            # Calculate bias metrics
            approval_rates = demo_data['Approval Rate'].values
            max_rate = np.max(approval_rates)
            min_rate = np.min(approval_rates)
            bias_gap = max_rate - min_rate
            
            st.metric("Bias Gap", f"{bias_gap:.1f}%")
            
            if bias_gap > 10:
                st.error("⚠️ High bias detected - immediate action required")
            elif bias_gap > 5:
                st.warning("⚠️ Moderate bias detected - review recommended")
            else:
                st.success("✅ Low bias - system performing fairly")
            
            st.write("**Recommendations:**")
            if bias_gap > 5:
                st.write("- Review training data for representation")
                st.write("- Implement bias mitigation techniques")
                st.write("- Regular bias monitoring")
    
    elif page == "Industry Analysis":
        st.header("🏭 Industry Analysis")
        
        # Industry performance comparison
        st.subheader("Performance by Industry")
        industry_chart = create_industry_comparison()
        st.plotly_chart(industry_chart, use_container_width=True)
        
        # Industry-specific insights
        st.subheader("Industry-Specific Insights")
        
        industries = list(set([data['industry'] for data in case_studies_data.values()]))
        
        for industry in industries:
            industry_studies = [name for name, data in case_studies_data.items() if data['industry'] == industry]
            
            with st.expander(f"📊 {industry}"):
                st.write(f"**Case Studies:** {', '.join(industry_studies)}")
                
                # Calculate industry averages
                industry_metrics = []
                for study_name in industry_studies:
                    industry_metrics.append(case_studies_data[study_name]['metrics'])
                
                avg_roi = np.mean([m['ROI Improvement'] for m in industry_metrics])
                avg_security = np.mean([m['Security Score'] for m in industry_metrics])
                avg_compliance = np.mean([m['Ethics Compliance'] for m in industry_metrics])
                
                col1, col2, col3 = st.columns(3)
                with col1:
                    st.metric("Avg ROI", f"{avg_roi:.0f}%")
                with col2:
                    st.metric("Avg Security", f"{avg_security:.0f}%")
                with col3:
                    st.metric("Avg Compliance", f"{avg_compliance:.0f}%")
    
    elif page == "Technology Insights":
        st.header("🛠️ Technology Insights")
        
        # Technology usage chart
        st.subheader("Technology Usage Across Case Studies")
        tech_chart = create_technology_usage_chart()
        st.plotly_chart(tech_chart, use_container_width=True)
        
        # Technology categories
        st.subheader("Technology Categories")
        
        tech_categories = {
            "AI/ML Frameworks": ["Python", "TensorFlow", "Scikit-learn"],
            "Compliance": ["HIPAA Compliance", "GDPR Compliance", "NIST Framework", "FDA Guidelines"],
            "Cloud & Infrastructure": ["AWS", "Kubernetes", "Docker"],
            "Specialized AI": ["Clinical AI", "Financial AI", "E-commerce AI", "Ethical AI", "Healthcare AI"],
            "Privacy & Security": ["Privacy-Preserving AI", "Differential Privacy", "Federated Learning", "DSPM"],
            "Data & Analytics": ["Bioinformatics", "MLOps", "PostgreSQL", "Fairness Tools"],
            "Training & Education": ["Corporate Training", "AI Governance", "Professional Development"]
        }
        
        for category, technologies in tech_categories.items():
            with st.expander(f"🔧 {category}"):
                st.write(f"**Technologies in this category:** {', '.join(technologies)}")
                
                # Show usage count
                usage_data = []
                for tech in technologies:
                    count = sum(1 for study_data in case_studies_data.values() if tech in study_data['technologies'])
                    usage_data.append({"Technology": tech, "Usage Count": count})
                
                if usage_data:
                    df = pd.DataFrame(usage_data)
                    df = df[df['Usage Count'] > 0]  # Only show technologies that are used
                    
                    if not df.empty:
                        fig = px.pie(df, values='Usage Count', names='Technology', 
                                   title=f"{category} Usage Distribution")
                        st.plotly_chart(fig, use_container_width=True)
                    else:
                        st.write("No technologies from this category are currently used in case studies.")
    
    # Footer
    st.markdown("---")
    st.markdown("""
    <div style="text-align: center; color: #666; padding: 2rem;">
        <h3>Ready to Transform Your AI Strategy?</h3>
        <p>Let's discuss how SANJEEVANI AI can help your organization achieve similar results with trustworthy AI systems.</p>
        <p><strong>Contact:</strong> suneeta@sanjeevaniai.com</p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()
