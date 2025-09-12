import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Calendar, Clock, User, Tag, Home } from 'lucide-react'

export const blogPosts = [
    {
        id: 'ai-governance-complete-guide',
        title: 'AI Governance: The Complete Guide to Responsible AI Implementation',
        excerpt: 'A comprehensive guide to AI governance covering NIST AI RMF, RAI/XAI principles, model cards, audit logs, and compliance frameworks for healthcare, finance, and public sector.',
        content: `
# AI Governance: The Complete Guide to Responsible AI Implementation

## Introduction

Artificial Intelligence (AI) governance is the framework of policies, procedures, and practices that ensure AI systems are developed, deployed, and managed responsibly. As AI becomes increasingly integrated into critical business processes, effective governance is essential for maintaining trust, ensuring compliance, and mitigating risks.

## What is AI Governance?

AI governance encompasses the entire lifecycle of AI systems, from initial design and development to deployment, monitoring, and decommissioning. It includes:

- **Risk Management**: Identifying, assessing, and mitigating AI-related risks
- **Compliance**: Ensuring adherence to regulatory requirements and industry standards
- **Ethics**: Implementing ethical principles and responsible AI practices
- **Transparency**: Maintaining explainability and auditability of AI decisions
- **Accountability**: Establishing clear roles and responsibilities for AI outcomes

## Key Frameworks and Standards

### NIST AI Risk Management Framework (AI RMF)

The NIST AI RMF provides a comprehensive approach to managing AI risks through six core functions:

1. **Govern**: Establish organizational policies and procedures
2. **Map**: Document AI system context and data flows
3. **Measure**: Assess AI system performance and risks
4. **Manage**: Implement risk mitigation strategies
5. **Categorize**: Classify AI systems by risk level
6. **Select**: Choose appropriate controls and safeguards

### Responsible AI (RAI) Principles

RAI encompasses seven key principles:

1. **Fairness**: Ensuring AI systems treat all individuals and groups equitably
2. **Transparency**: Making AI decision-making processes understandable
3. **Accountability**: Establishing clear responsibility for AI outcomes
4. **Privacy**: Protecting personal and sensitive information
5. **Human Oversight**: Maintaining human control over AI systems
6. **Reliability**: Ensuring AI systems perform consistently and safely
7. **Equity**: Promoting equal access and benefits from AI technologies

### Explainable AI (XAI)

XAI focuses on making AI decision-making processes interpretable and understandable to humans. Key components include:

- **Model Interpretability**: Understanding how AI models make decisions
- **Feature Importance**: Identifying which inputs most influence outputs
- **Decision Trees**: Creating human-readable decision pathways
- **Attention Mechanisms**: Highlighting important parts of input data
- **Counterfactual Explanations**: Showing what would change the decision

## Implementation Strategies

### 1. Governance Structure

#### Executive Leadership
- **AI Steering Committee**: Cross-functional team for AI oversight
- **Chief AI Officer**: Senior executive responsible for AI strategy
- **Data Governance Council**: Oversight of data-related AI decisions
- **Ethics Review Board**: Independent review of AI ethics

#### Roles and Responsibilities
- **AI Program Manager**: Day-to-day AI governance coordination
- **Data Stewards**: Responsible for data quality and privacy
- **AI Ethics Officer**: Ensures ethical AI development and deployment
- **Compliance Officer**: Ensures regulatory compliance

### 2. Policy Development

#### AI Development Policies
- **AI Development Standards**: Guidelines for AI system development
- **Data Usage Policies**: Rules for data collection and use
- **Model Validation Requirements**: Standards for model testing and validation
- **Deployment Approval Process**: Procedures for AI system deployment

#### Risk Management Policies
- **Risk Assessment Procedures**: Methods for identifying and assessing AI risks
- **Mitigation Strategies**: Approaches for addressing identified risks
- **Incident Response Plans**: Procedures for handling AI-related incidents
- **Regular Review Processes**: Ongoing assessment of AI systems

### 3. Compliance and Regulatory Framework

#### Regulatory Requirements
- **GDPR Compliance**: European data protection regulations
- **HIPAA Compliance**: Healthcare data protection requirements
- **SOX Compliance**: Financial reporting and controls
- **Industry-Specific Regulations**: Sector-specific AI requirements

#### Standards and Frameworks
- **NIST AI RMF**: Risk management framework for AI
- **ISO/IEC 23053**: Framework for AI risk management
- **IEEE Standards**: Technical standards for AI systems
- **Industry Best Practices**: Sector-specific governance approaches

## Industry-Specific Considerations

### Healthcare AI Governance

#### Unique Requirements
- **Patient Safety**: Ensuring AI systems don't harm patients
- **Clinical Validation**: Requiring medical validation of AI systems
- **Regulatory Approval**: Meeting FDA and other regulatory requirements
- **Privacy Protection**: Protecting patient health information

#### Best Practices
- **Clinical Oversight**: Medical professionals involved in AI decisions
- **Risk-Benefit Analysis**: Careful assessment of AI risks and benefits
- **Transparency**: Clear communication about AI use in healthcare
- **Continuous Monitoring**: Ongoing assessment of AI system safety

### Financial AI Governance

#### Unique Requirements
- **Regulatory Compliance**: Meeting financial regulations
- **Risk Management**: Managing financial risks associated with AI
- **Consumer Protection**: Protecting consumers from AI-related harm
- **Market Stability**: Ensuring AI doesn't destabilize financial markets

#### Best Practices
- **Regulatory Alignment**: Ensuring AI systems meet regulatory requirements
- **Risk Controls**: Implementing appropriate risk management controls
- **Transparency**: Providing clear information about AI use
- **Regular Audits**: Periodic review of AI system compliance

### Public Sector AI Governance

#### Unique Requirements
- **Transparency**: Ensuring government AI is transparent
- **Accountability**: Maintaining accountability for AI decisions
- **Public Trust**: Building and maintaining public trust
- **Citizen Rights**: Protecting citizen rights and freedoms

#### Best Practices
- **Public Engagement**: Involving citizens in AI governance
- **Transparency**: Making AI systems and decisions transparent
- **Accountability**: Clear accountability for AI outcomes
- **Democratic Oversight**: Maintaining democratic control over AI

## Conclusion

AI governance is not just a compliance requirement—it's a strategic imperative that enables organizations to harness the power of AI while managing risks and building trust. By implementing comprehensive governance frameworks, organizations can ensure their AI systems are developed, deployed, and managed responsibly.

The key to successful AI governance lies in:

1. **Clear Structure**: Well-defined roles and responsibilities
2. **Comprehensive Policies**: Complete set of governance policies and procedures
3. **Effective Monitoring**: Continuous oversight and assessment
4. **Continuous Improvement**: Regular review and enhancement
5. **Stakeholder Engagement**: Involvement of all relevant stakeholders
6. **Technology Support**: Appropriate tools and systems
7. **Cultural Integration**: Governance as part of organizational culture

Organizations that invest in robust AI governance frameworks will not only manage risks effectively but also enable innovation and build trust with stakeholders. The future belongs to organizations that can balance AI innovation with responsible governance.

Remember: AI governance is not a barrier to innovation—it's the foundation that makes innovation sustainable and trustworthy. Build your governance framework well, and your AI initiatives will have the support and oversight they need to succeed.
        `,
        author: 'Suneeta Modekurty',
        publishDate: '2024-01-25',
        readTime: '15 min read',
        category: 'AI Governance',
        tags: ['AI Governance', 'NIST AI RMF', 'RAI', 'XAI', 'Model Cards', 'Audit Logs', 'HITL', 'Compliance', 'HIPAA', 'GDPR', 'DSPM'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center'
    },
    {
        id: 'llms-rag-comprehensive-guide',
        title: 'LLMs and RAG: A Comprehensive Guide to Large Language Models and Retrieval-Augmented Generation',
        excerpt: 'Complete guide to Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) covering architecture, applications, implementation, and best practices for enterprise deployment.',
        content: `
# LLMs and RAG: A Comprehensive Guide to Large Language Models and Retrieval-Augmented Generation

## Introduction

Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) represent the cutting edge of AI technology, enabling organizations to build sophisticated conversational AI systems that can understand, process, and generate human-like text. This comprehensive guide explores these technologies, their applications, and best practices for enterprise implementation.

## Understanding Large Language Models (LLMs)

### What are LLMs?

Large Language Models are AI systems trained on vast amounts of text data to understand and generate human-like language. They use transformer architecture and deep learning techniques to process and produce text that is contextually relevant and grammatically correct.

### Key Characteristics

#### Scale and Parameters
- **Parameter Count**: Modern LLMs have billions or trillions of parameters
- **Training Data**: Trained on massive datasets from the internet
- **Computational Requirements**: Require significant computing power for training and inference
- **Memory Requirements**: Large memory footprint for storing model weights

#### Capabilities
- **Text Generation**: Creating coherent and contextually appropriate text
- **Language Understanding**: Comprehending complex language patterns and nuances
- **Code Generation**: Writing and debugging programming code
- **Translation**: Converting text between different languages
- **Question Answering**: Providing accurate answers to complex questions

### Popular LLM Architectures

#### GPT (Generative Pre-trained Transformer)
- **Architecture**: Decoder-only transformer
- **Training**: Autoregressive language modeling
- **Strengths**: Excellent text generation and completion
- **Examples**: GPT-3, GPT-4, ChatGPT

#### BERT (Bidirectional Encoder Representations from Transformers)
- **Architecture**: Encoder-only transformer
- **Training**: Masked language modeling
- **Strengths**: Superior understanding and classification tasks
- **Examples**: BERT, RoBERTa, ALBERT

#### T5 (Text-to-Text Transfer Transformer)
- **Architecture**: Encoder-decoder transformer
- **Training**: Text-to-text format for all tasks
- **Strengths**: Versatile for multiple NLP tasks
- **Examples**: T5, T5-base, T5-large

## Understanding Retrieval-Augmented Generation (RAG)

### What is RAG?

RAG is a technique that combines the generative capabilities of LLMs with external knowledge retrieval to provide more accurate, up-to-date, and contextually relevant responses. It addresses the limitations of LLMs by allowing them to access and use external information.

### RAG Architecture

#### Components
1. **Retriever**: Searches and retrieves relevant documents from a knowledge base
2. **Generator**: LLM that generates responses based on retrieved information
3. **Knowledge Base**: External source of information (databases, documents, APIs)
4. **Ranker**: Ranks retrieved documents by relevance

#### Process Flow
1. **Query Processing**: User query is processed and prepared for retrieval
2. **Document Retrieval**: Relevant documents are retrieved from knowledge base
3. **Context Assembly**: Retrieved documents are combined with the query
4. **Response Generation**: LLM generates response using retrieved context
5. **Response Ranking**: Generated responses are ranked and filtered

### Benefits of RAG

#### Accuracy and Reliability
- **Factual Accuracy**: Access to up-to-date information
- **Source Attribution**: Ability to cite sources for claims
- **Reduced Hallucination**: Less likely to generate false information
- **Domain Expertise**: Can access specialized knowledge

#### Flexibility and Scalability
- **Knowledge Updates**: Easy to update knowledge base
- **Domain Adaptation**: Can be adapted to specific domains
- **Cost Efficiency**: Reduces need for retraining large models
- **Customization**: Can be tailored to specific use cases

## Implementation Strategies

### 1. LLM Selection and Configuration

#### Model Selection Criteria
- **Task Requirements**: Choose model based on specific use case
- **Performance Requirements**: Consider accuracy, speed, and resource needs
- **Cost Considerations**: Balance performance with operational costs
- **Deployment Constraints**: Consider infrastructure and compliance requirements

#### Configuration Best Practices
- **Temperature Settings**: Control randomness in text generation
- **Max Tokens**: Set appropriate limits for response length
- **Top-p/Top-k Sampling**: Control diversity of generated text
- **Stop Sequences**: Define when to stop generation

### 2. RAG System Design

#### Knowledge Base Construction
- **Data Sources**: Identify and collect relevant information sources
- **Data Preprocessing**: Clean and format data for retrieval
- **Indexing**: Create searchable indexes for efficient retrieval
- **Metadata Management**: Organize and tag information for better retrieval

#### Retrieval Optimization
- **Embedding Models**: Choose appropriate embedding models for semantic search
- **Vector Databases**: Implement efficient vector storage and retrieval
- **Query Processing**: Optimize queries for better retrieval
- **Relevance Scoring**: Implement effective relevance ranking

### 3. Integration and Deployment

#### API Integration
- **RESTful APIs**: Standard HTTP-based integration
- **GraphQL**: More flexible query-based integration
- **WebSocket**: Real-time communication for streaming responses
- **Batch Processing**: Efficient handling of multiple requests

#### Infrastructure Requirements
- **Computing Resources**: GPU/CPU requirements for model inference
- **Memory Management**: Efficient memory usage for large models
- **Load Balancing**: Distribute requests across multiple instances
- **Caching**: Implement caching for frequently accessed information

## Enterprise Applications

### 1. Customer Service and Support

#### Chatbots and Virtual Assistants
- **24/7 Support**: Round-the-clock customer assistance
- **Multilingual Support**: Support for multiple languages
- **Context Awareness**: Understanding conversation history
- **Escalation Management**: Seamless handoff to human agents

#### Knowledge Management
- **Document Search**: Finding relevant information quickly
- **FAQ Generation**: Automatically creating frequently asked questions
- **Content Creation**: Generating help articles and documentation
- **Training Materials**: Creating educational content for staff

### 2. Content Creation and Marketing

#### Content Generation
- **Blog Posts**: Creating engaging and informative articles
- **Social Media**: Generating posts for various platforms
- **Email Campaigns**: Crafting personalized email content
- **Product Descriptions**: Writing compelling product copy

#### Content Optimization
- **SEO Optimization**: Improving search engine visibility
- **A/B Testing**: Creating variations for testing
- **Personalization**: Tailoring content to specific audiences
- **Brand Voice**: Maintaining consistent brand messaging

### 3. Research and Development

#### Literature Review
- **Paper Analysis**: Summarizing research papers
- **Trend Analysis**: Identifying emerging trends
- **Gap Analysis**: Finding research gaps
- **Collaboration**: Facilitating research collaboration

#### Data Analysis
- **Report Generation**: Creating comprehensive reports
- **Insight Extraction**: Identifying key insights from data
- **Visualization**: Generating charts and graphs
- **Recommendations**: Providing actionable recommendations

## Best Practices and Considerations

### 1. Data Quality and Management

#### Data Preparation
- **Data Cleaning**: Remove noise and irrelevant information
- **Data Validation**: Ensure accuracy and completeness
- **Data Augmentation**: Enhance datasets with additional information
- **Data Versioning**: Track changes and maintain data lineage

#### Privacy and Security
- **Data Anonymization**: Remove personally identifiable information
- **Access Controls**: Implement appropriate access restrictions
- **Encryption**: Protect data in transit and at rest
- **Compliance**: Ensure adherence to relevant regulations

### 2. Performance Optimization

#### Model Optimization
- **Quantization**: Reduce model size and improve inference speed
- **Pruning**: Remove unnecessary parameters
- **Distillation**: Create smaller models that mimic larger ones
- **Fine-tuning**: Adapt models to specific domains

#### System Optimization
- **Caching**: Implement intelligent caching strategies
- **Load Balancing**: Distribute load across multiple instances
- **Auto-scaling**: Automatically adjust resources based on demand
- **Monitoring**: Track performance metrics and optimize accordingly

### 3. Quality Assurance

#### Testing and Validation
- **Unit Testing**: Test individual components
- **Integration Testing**: Test system interactions
- **Performance Testing**: Validate system performance
- **User Acceptance Testing**: Ensure user satisfaction

#### Continuous Improvement
- **Feedback Collection**: Gather user feedback
- **Performance Monitoring**: Track system performance
- **Model Updates**: Regularly update models
- **A/B Testing**: Test different approaches

## Challenges and Solutions

### 1. Technical Challenges

#### Computational Requirements
- **High Costs**: Significant computational resources required
- **Scalability**: Challenges in scaling to handle large volumes
- **Latency**: Response time considerations
- **Resource Management**: Efficient resource utilization

#### Solution Strategies
- **Cloud Computing**: Leverage cloud infrastructure
- **Model Optimization**: Use efficient model architectures
- **Caching**: Implement intelligent caching
- **Load Balancing**: Distribute load effectively

### 2. Data Challenges

#### Data Quality
- **Inconsistent Data**: Variations in data format and quality
- **Missing Information**: Incomplete or outdated data
- **Bias**: Potential bias in training data
- **Privacy**: Data privacy and security concerns

#### Solution Strategies
- **Data Governance**: Implement comprehensive data governance
- **Quality Assurance**: Regular data quality checks
- **Bias Detection**: Monitor and address bias
- **Privacy Protection**: Implement privacy-preserving techniques

### 3. Business Challenges

#### Cost Management
- **High Initial Costs**: Significant upfront investment
- **Ongoing Costs**: Continuous operational expenses
- **ROI Measurement**: Difficulty in measuring return on investment
- **Budget Planning**: Long-term budget planning

#### Solution Strategies
- **Phased Implementation**: Gradual rollout to manage costs
- **Cost Optimization**: Regular cost analysis and optimization
- **ROI Tracking**: Implement comprehensive ROI measurement
- **Budget Planning**: Develop long-term financial planning

## Future Trends and Developments

### 1. Technological Advances

#### Model Improvements
- **Larger Models**: Even more powerful models
- **Efficiency Gains**: More efficient architectures
- **Multimodal Capabilities**: Support for multiple data types
- **Real-time Learning**: Continuous learning capabilities

#### Infrastructure Evolution
- **Edge Computing**: Processing closer to data sources
- **Quantum Computing**: Potential quantum advantages
- **Specialized Hardware**: AI-specific processing units
- **Distributed Computing**: Distributed model training and inference

### 2. Application Expansion

#### New Use Cases
- **Scientific Research**: Accelerating scientific discovery
- **Creative Industries**: Enhancing creative processes
- **Education**: Personalized learning experiences
- **Healthcare**: Improving patient care and diagnosis

#### Integration Opportunities
- **IoT Integration**: Connecting with Internet of Things devices
- **Blockchain**: Combining with blockchain technology
- **AR/VR**: Augmented and virtual reality applications
- **Robotics**: Integration with robotic systems

## Conclusion

LLMs and RAG represent powerful technologies that can transform how organizations interact with information and generate content. By understanding these technologies and implementing them effectively, organizations can unlock new possibilities for innovation and efficiency.

The key to successful implementation lies in:

1. **Clear Understanding**: Thorough understanding of capabilities and limitations
2. **Strategic Planning**: Careful planning and preparation
3. **Quality Data**: High-quality data and knowledge bases
4. **Proper Integration**: Seamless integration with existing systems
5. **Continuous Monitoring**: Ongoing monitoring and optimization
6. **User Experience**: Focus on user experience and satisfaction
7. **Ethical Considerations**: Responsible and ethical implementation

Remember: Technology is a tool, and its success depends on how well it's implemented and used. By following best practices and considering the needs of users and stakeholders, organizations can harness the power of LLMs and RAG to achieve their goals and create value.

The future of AI is bright, and LLMs and RAG are leading the way. Organizations that embrace these technologies and implement them thoughtfully will be well-positioned to thrive in the AI-driven future.
        `,
        author: 'Suneeta Modekurty',
        publishDate: '2024-01-22',
        readTime: '18 min read',
        category: 'AI Technology',
        tags: ['LLMs', 'RAG', 'MCP', 'NLP', 'AI Technology', 'Enterprise AI', 'Machine Learning', 'Deep Learning', 'Transformers'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center'
    }
    // Add more blog posts here...
]

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredPosts, setFilteredPosts] = useState<typeof blogPosts>([])

    // Use the exported blogPosts array

    useEffect(() => {
        setFilteredPosts(blogPosts)
    }, [])

    const handleSearch = (query: string) => {
        setSearchQuery(query)
        if (query.trim() === '') {
            setFilteredPosts(blogPosts)
        } else {
            const filtered = blogPosts.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                post.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase()))
            )
            setFilteredPosts(filtered)
        }
    }

    const categories = ['All', 'AI Strategy', 'AI Implementation', 'AI Ethics', 'AI Governance', 'Data Management', 'AI Technology', 'Data Governance', 'Machine Learning', 'AI Risk Management']

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900">
            {/* Header */}
            <div className="container mx-auto px-4 pt-8 pb-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        AI & Data Governance Blog
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Insights, strategies, and best practices for implementing AI governance,
                        responsible AI, and data security across healthcare, finance, and public sector.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-200"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                            <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-sky-500/20 flex items-center justify-center">
                                <div className="text-6xl">📚</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                                        {post.category}
                                    </span>
                                    {post.featured && (
                                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {post.publishDate}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-semibold text-white mb-2">No articles found</h3>
                        <p className="text-gray-300">Try adjusting your search terms or browse all articles.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blog
