# recommendersys rough draft (2).pptx


## Slide 1


LLM Recommender system for finance An innovative intelligent system designed to track, explain, and recommend emerging, task-specific Large Language Models (LLMs) for financial applications
Sara Craciun

Academic Supervisor: Prof Philip TreleavenTechnical Advisor:


## Slide 2


Research Motivations

2

Absence of monitoring tools for LLMs evolution
Currently, no tool exists to quantify or visualize the evolution of LLMs in a finance-specific context, making it difficult for practitioners to identify relevant trends or select suitable models.
Critical knowledge gap between financial experts and LLM technologies as most finance professionals lack awareness of how current models perform, evolve, or align with use-case-specific demands.
Opportunity to build scalable, smart financial infrastructure in the future


## Slide 3


2

Overview


## Slide 4


Ecosystem Example 1

4

Radar continuously monitors and catalogs emerging LLMs and techniques in real-time.
Explainer distills complex LLM concepts into plain language and other useful interpretation tools.
Advisor/recommender helps teams pick the right LLM for a task (e.g., earnings call summarization)
Output = A full dashboard to help deploy models confidently and intelligently


## Slide 5


Research Objectives/Goals

4

Create a centralized research “radar” that continuously updates with new LLMs, architectures, trends etc. 
Provide domain-specific model recommendations based on task type (e.g. risk forecasting, sentiment analysis).
Build a user-friendly explainer system for non-technical users in finance and business.

Research Methodology & Structure

Exp 1: Radar
???Use web scraping, APIs (e.g., HuggingFace, arXiv) to detect emerging LLMs and architectures.
???Apply NLP + topic modeling (e.g., BERTopic) and time-series analysis to categorize models by task, size, domain, and trend over time.
Exp 1: Advisor 
????Match user-defined tasks (e.g., “summarize earnings call”) with LLMs using task embeddings, similarity scores, or a use-case classifier.
????Integrate benchmark scores and prompt templates to justify recommendations and guide fine-tuning or deployment.
Exp 1: Explainer
???Generate plain-language summaries using LLMs (e.g., GPT-4) to explain technical concepts
????Visualize model differences and risks (e.g., hallucination rate, latency, cost)


## Slide 6


Exp 1: Radar - Ideas Exploration

6

Experiment
Continuously track new LLMs, architectures, benchmarks, and tools  
Detect emerging LLM trends across tasks (e.g. document summarization, forecasting).
Evaluate model adoption signals (GitHub activity, citations, social media buzz).

Data
arXiv API: papers mentioning finance + LLMs. 
HuggingFace API: LLM models and metadata (license, downloads, tags). 
GitHub & Papers with Code: commit activity, benchmarks, repos.

Models
Trend detection using topic modeling (e.g. BERTopic, LDA). 
Time-series analysis of LLM emergence by domain. 
Clustering models to group similar LLMs (e.g. financial-task-oriented).

Results
Frequency chart of LLMs introduced per month in finance-related tasks. 
Top recurring model families (e.g. FinGPT, BloombergGPT). 
Visual clusters of models by application type (chat, summarizer, scorer).

Graph/Table


## Slide 7


Exp 2: Advisor - Ideas Exploration

6

Experiment
Develop an intelligent recommender that matches LLMs to finance-specific tasks. 
Test effectiveness of recommendations across different task types (e.g., Q&A, summarization, forecasting). 
Measure performance difference between “best-matched” LLMs vs. baseline models.

Data
Financial NLP benchmark datasets (e.g., FinQA, FiQA, Earnings-Call datasets). 
LLM metadata (model size, tokenizer type, task history, pretraining domain). 
Historical task-model pairings from PapersWithCode or arXiv.

Models
Task Embedding Matching using sentence-transformers or OpenAI embeddings. 
Use-Case Classifier trained on financial NLP benchmarks and papers. 
Similarity Scorer based on cosine distance between task/LLM vectors.

Results
Accuracy and performance boost of matched LLM vs. generic alternatives.
Task clusters showing optimal models for summarization vs. forecasting.
Heatmap showing match quality between task embeddings and LLMs.

Graph/Table


## Slide 8


Exp 3: Explainer - Ideas Exploration

6

Experiment
Translate technical LLM papers and benchmarks into plain language.
Identify key performance and architectural features that matter to financial users.
Test interpretability techniques for clarity, trust, and explainability.

Data
Model documentation, HuggingFace & arXiv abstracts, technical blogs.
Financial datasets (e.g. risk reports, call transcripts) used for evaluation context.
Human feedback (Likert ratings) on explanation clarity and usefulness.

Models
OpenAI GPT family, Meta LLaMA, Mistral, Claude, Gemini (for output comparison).
Explainability models: SHAP, LIME, Attention Flow.
Concept clustering with BERTopic or KeyBERT.

Results
Clear summaries generated for non-technical users with 85%+ satisfaction.
Key model traits (e.g. hallucination risk, domain fit) were understandable.
BERTopic improved clustering of LLMs by use-case and style.

Graph/Table


## Slide 9


Contributions to Science (academic)

10

Novel task- specific recommender system for LLMs
Introduces a research-driven framework that matches LLMs to domain-specific tasks in finance 
Bridges gaps between benchmark scores and real work task performance 
Pioneers the integration of explainability and use case classifiers in LLM selection.?
Expansion of interdisciplinary applications of LLMs
Fosters collaboration beween cutting edge emerging LLMs and financial experts 
Supports new academic discourse around LLM utility in high-stakes domains (e.g. trading etc.)
New Approach when it comes to LLMs 
Promotes easy user-centered AI research and interpretability for non-technical experts.


## Slide 10


Impact Statement (business/industry)

10

Improves explainability and compliance 
Simplifies AI concepts for cross-functional teams 
Enables better documentation and justification for AI model use 
Support transparency in high-stakes decision making environments
Enhances decision-making in finance 
Recommends optimal LLM method for specific task 
Reduces trial-and-error costs of model selection and reduces time spent on manually selecting suitable LLM
Increases confidence in Gen-AI adoption across workflows


## Slide 11


Research Plan

10

1. Literature & Background Review
Goal: Gain deep understanding & context

Summarize main points, techniques used, research gaps, and open questions (structured summary table clearly showing what’s already known and what’s missing (justifying your project clearly).

2. Identify the right Tools 
Goal: Find best tools & methods for system modules
Radar Module (Tracking):
Web scraping tools: Scrapy, BeautifulSoup, Selenium
APIs: HuggingFace, arXiv API, GitHub API
Topic Modeling: BERTopic, LDA, KeyBERT
Trend Analysis: Prophet, ARIMA
Advisor Module (Recommender):
Embeddings & semantic search: sentence-transformers, FAISS
Classification & benchmarking: scikit-learn, AutoML (TPOT), MLPerf
LLM integration: OpenAI API, LangChain
Explainer Module (Interpretability):
LLM summarization: GPT-4, Claude 3, Mistral
Explainability methods: SHAP, LIME, Attention maps
Visualization: Streamlit, D3.js, Plotly
Summary Table clearly showing why each tool is chosen (ease of use, accuracy, documentation, etc.

3. Start designing and building the system 
Goal:

4. Experiments and Technical Evaluation
Goal: Validate modules scientifically
