# recommendersys rough draft (3).pptx


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


Exp 1: Radar Module

6

Goal:
Continuously monitor the flood of new LLMs, techniques, and trends, especially those relevant to finance, and classify them in a useful way

Challenges:
The LLM landscape evolves rapidly -new models are released almost daily, each with unique capabilities.

Possible Techniques 
Automated Feed & Database (pipeline to scrape or query sources of LLM announcements)
LLM/NLP-Based Classification (to classify new models and techniques).  (Eg use of BERT-based classifier/ChatGPT)
(Optional: Trend Analytics (Popularity Tracking): track which models are trending)


## Slide 6


Exp 2: Advisor Module

6

Goal:
Given a specific financial task or dataset, suggest the best-suited LLM (or approach) to use.

Challenges 
The Advisor needs knowledge of various models’ strengths.
Finance tasks vary widely (sentiment analysis, fraud detection, forecasting, Q&A on reports, etc.).

Possible Techniques 
Knowledge Base & Rule-Based Mapping (mapping from task requirements to recommended model)
Data-Driven Model Selection (database)
LLM-based Advisory Agent (using a large language model itself to generate recommendations)


## Slide 7


Exp 3: Explainer Module

6

Goal
Make LLM concepts, outputs, or decisions understandable to non-technical users in finance.

Possible Techniques  
Glossary-Base Retrieval (curated glossary of AI/LLM terms and their plain-language definitions)
LLM Explanation (Prompting): (utilize a large language model (maybe the same one behind Advisor, or a smaller one) to generate explanations on demand)
Fine-Tuned Explainer Model (fine-tune a smaller open-source model to be an “explainer”)

Challenges 
Many AI terms (like fine-tuning, embeddings, overfitting, hallucination) are unfamiliar to non-tech users. 
Also, explaining why a model was recommended or how an LLM arrived at an answer is hard as we get into AI explainability.


## Slide 8


Impact Statement (business/industry)

10

Clarifies AI concepts for teams across business functions.
Enhances documentation and justification for AI model selection.
Promotes transparency and trust in high-stakes decision-making.


## Slide 9


List of deliverables for Recommender System

10

HCI report : 
Evidence of consultation with users at each stage (when appropriate) 
Personas 
Sketches 
Evidence of consideration of alternatives 
Evidence of iteration 
Demonstration of a user interacting with the prototype 
Evaluation of prototype 
Citations and relation to the literature
20240210 Venture Scientists project-startup template
20230517 Project Workplans and Tasks
UI Design 
Pitch Website
