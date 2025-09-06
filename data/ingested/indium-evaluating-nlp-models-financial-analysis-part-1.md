# Evaluating NLP Models for Text Classification and Summarization Tasks in the Financial Landscape - Part 1

Evaluating NLP Models for Text Classification and Summarization Tasks in the Financial Landscape - Part 1
Who We Are
About Us
Partnerships
Company Overview
News and Events
Careers
Our Locations
WSO2
Databricks
Striim
Tricentis
Mendix
OutSystems
AWS
Google Cloud Platform
What We Do
Services
Data & Gen AI
AI that works for you
Product Engineering
Innovate & Build
Intelligent Automation
Smarter, Faster, Better
Quality Engineering
Engineering Perfection
Accelerators
Built for Breakthroughs
Data Engineering
Business Analytics & Visualisation
Data Governance
Data Modernization
Data Streaming
Data Annotation & Labelling
Gen AI
Text Analytics
Computer Vision & Image Analytics
AI/ML Solutions
AI/MLOps
Cloud Data Platform
App Modernization
Mobile Development
Enterprise Integration
UI / UX
Application Support & Maintenance
DevOps
DevSecOps
Cloud Engineering
Cloud Migration
Cloud Native Development
Hybrid Cloud
Low-code Engineering
Process Mining
Smart Workflow
Robotic Process Automation
Enterprise Decision Management Solution
Embedded Firmware Testing
IoT Testing
Test Automation
Performance Testing
Test Data Management
DevOps & Continuous Testing
LLM Testing
Compliance Testing
Security Testing
Mobile App Testing
Cloud Testing
LIFTR.ai
teX.ai
ibriX
uphoriX
iDAF
Gen AI
Industries
BFSI
Healthcare
Technology
Retail
Manufacturing
Gaming
Game Development
Game Art
Game QA
Gaming Excellence
Subsidiaries
Experion Global
Insights
Analyst Spotlight
Blogs
Success Stories
White Papers
Webinars & Podcasts
eBooks
The Engineer's Room
Contact Us
Who We Are
About Us
Company Overview
News and Events
Careers
Our Locations
Partnerships
WSO2
Databricks
Striim
Tricentis
Mendix
OutSystems
AWS
Google Cloud Platform
What We Do
Data & Gen AI
Data Engineering
Business Analytics & Visualisation
Data Governance
Data Modernization
Data Streaming
Data Annotation & Labelling
Gen AI
Text Analytics
Computer Vision & Image Analytics
AI/ML Solutions
AI/MLOps
Cloud Data Platform
Product Engineering
App Modernization
Mobile Development
Enterprise Integration
UI / UX
Application Support & Maintenance
DevOps
DevSecOps
Cloud Engineering
Cloud Migration
Cloud Native Development
Hybrid Cloud
Intelligent Automation
Low-code Engineering
Process Mining
Smart Workflow
Robotic Process Automation
Enterprise Decision Management Solution
Quality Engineering
Embedded Firmware Testing
IoT Testing
Test Automation
Performance Testing
Test Data Management
DevOps & Continuous Testing
LLM Testing
Compliance Testing
Security Testing
Mobile App Testing
Cloud Testing
Accelerators
LIFTR.ai
teX.ai
ibriX
uphoriX
iDAF
Gen AI
Industries
BFSI
Healthcare
Technology
Retail
Manufacturing
Gaming
Game Development
Game Art
Game QA
Gaming Excellence
Subsidiaries
Experion Global
Insights
Analyst Spotlight
Blogs
Success Stories
White Papers
Webinars & Podcasts
eBooks
The Engineer's Room
Home
Blogs
Evaluating NLP Models for Text Classification and Summarization Tasks in the Financial Landscape – Part 1
Data & Analytics
30th Oct 2023
Evaluating NLP Models for Text Classification and Summarization Tasks in the Financial Landscape – Part 1
Share:
Contents
1
Introduction
2
Gathering the Datasets
3
Text Classification
3.1
Model: distilbert-base-uncased-finetuned-sst-2-english
3.2
DistilBERT: Efficient Alternative to BERT
3.3
Model Details:
3.4
Code Snippet:
3.5
FinBERT: Specialized Financial Analysis Model
3.6
FinBERT Model Details
3.7
finbert-tone
3.8
FINBERT-tone Model Details
3.9
Code Snippet:
4
Conclusion
Introduction
The financial landscape is an intricate ecosystem, where vast amounts of textual data carry invaluable insights that can influence markets and shape investment decisions. With the rise of Natural Language Processing (NLP) technologies, the financial industry has found a potent ally in processing, comprehending, and extracting actionable intelligence from this wealth of textual information. In pursuit of harnessing the potential of cutting-edge NLP models, this research endeavor embarked on a meticulous evaluation of various NLP models available on the Hugging Face platform. The primary objective was to assess their performance in financial text classification and summarization tasks, two essential pillars of efficient data analysis in the financial domain.
Financial text classification is a critical aspect of sentiment analysis, topic categorization, and predicting market movements. In parallel, summarization techniques hold paramount significance in digesting extensive texts, capturing salient information, and facilitating prompt decision-making in a rapidly evolving market landscape.
To undertake this comprehensive assessment, two appropriate datasets were chosen to assess models for both summarization and classification tasks. For summarization, the datasets selected were the CNN Dailymail dataset to evaluate the models’ capabilities with more general data, and a dataset of bitcoin-related articles to assess the models’ capabilities with finance-related data. For classification, the datasets selected were a dataset of IMDB reviews, and a dataset of financial documents from a variety of different sectors within the financial industry.
The chosen models for this study were:
distilbert-base-uncased-finetuned-sst-2-english
finbert
finbert-tone
bart-large-cnn
financial-summarization-pegasus
These models were obtained from the Hugging Face platform. Hugging Face is a renowned platform that has emerged as a trailblazer in the realm of Natural Language Processing (NLP). At its core, the platform is dedicated to providing a wealth of resources and tools that empower researchers, developers, and NLP enthusiasts to explore, experiment, and innovate in the field of language understanding. Hugging Face offers a vast repository of pre-trained NLP models that have been fine-tuned for a wide range of NLP tasks, enabling users to leverage cutting-edge language models without the need for extensive training. This accessibility has expedited NLP research and development, facilitating the creation of advanced language-based applications and solutions. Moreover, Hugging Face fosters a collaborative environment, encouraging knowledge sharing and community engagement through discussion forums and support networks. Its user-friendly API and open-source libraries further streamline the integration of NLP capabilities into various projects, making sophisticated language processing techniques more accessible and applicable across diverse industries and use cases.
Gathering the Datasets
In the domain of data-driven technologies, the age-old adage “garbage in, garbage out” holds more truth than ever. At the heart of any successful data-driven endeavor lies the foundation of a high-quality dataset. A good dataset forms the bedrock upon which algorithms, models, and analyses rest, playing a pivotal role in shaping the accuracy, reliability, and effectiveness of any data-driven system. Whether it be in the domains of machine learning, artificial intelligence, or statistical analysis, the quality and relevance of the dataset directly influence the outcomes and insights derived from it. Thus, to evaluate the chosen models, it was imperative that the right datasets were chosen. The datasets used in this study were gathered from Kaggle.
For classification, the chosen neutral dataset was the IMDB Movie Review dataset, which contains 50,000 movie reviews and an assigned sentiment score. You can access it
here
. As for the financial text dataset, the selected dataset was the Financial Sentiment Analysis dataset, comprising over 5,000 financial records with assigned sentiments. You can find it
here
.
It was necessary to remove the neutral values since not all the selected models have a neutral class.
For summarization, the neutral dataset chosen was the CNN Dailymail dataset, which contains 30,000 news articles written by CNN and The Daily Mail. Only the test dataset was utilized for this evaluation, which includes 11,490 articles and their summaries. You can access it
here
. For the financial text dataset, the Bitcoin – News articles text corpora dataset was used. This dataset encompasses numerous articles about bitcoin gathered from a wide variety of sources, and it can be found
here
.
Explore More NLP Insights
Click here
Text Classification
Model: distilbert-base-uncased-finetuned-sst-2-english
Link:
https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english
BERT (Bidirectional Encoder Representations from Transformers) is a groundbreaking natural language processing model introduced by Google. It revolutionized the field of NLP by employing a bidirectional transformer architecture, allowing the model to understand context from both the left and right sides of a word. Unlike previous models that processed text sequentially, BERT uses a masked language model approach during pre-training, wherein it randomly masks words and learns to predict them based on the surrounding context. This pre-training process enables BERT to capture deep contextual relationships within sentences, making it highly effective for a wide range of NLP tasks, such as sentiment analysis, named entity recognition, and text classification. However, BERT’s large size and computational demands limit its practical deployment in certain resource-constrained scenarios.
DistilBERT: Efficient Alternative to BERT
DistilBERT, on the other hand, addresses BERT’s resource-intensive limitations by distilling its knowledge into a more compact form. Introduced by Hugging Face, DistilBERT employs a knowledge distillation technique, whereby it is trained to mimic the behavior of the larger BERT model. Through this process, unnecessary redundancy in BERT’s parameters is eliminated, resulting in a significantly smaller and faster model without compromising performance. DistilBERT maintains a competitive level of accuracy compared to BERT while reducing memory usage and inference time, making it an attractive choice for applications where computational resources are a constraint. Its effectiveness in various NLP tasks has cemented its position as an efficient and practical alternative to the original BERT model. DistilBERT retains approximately 97% of BERT’s accuracy while being 40% smaller and 60% faster.
Model Details:
Parameters: 67 million
Transformer Layers: 6
Embedding Layer: Included
Classification Layer: Softmax
Attention Heads: 12
Vocabulary Size: 30522
Maximum Sequence Length: 512 tokens
Choosing DistilBERT for classification tasks can offer a balance between efficiency and performance. Its faster inference, reduced resource requirements, competitive accuracy, and seamless integration make it an attractive option for a wide range of real-world applications where computational efficiency and effectiveness are key considerations.
Code Snippet:
import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
from transformers import AutoTokenizer, AutoModelForSequenceClassification
tokenizer = AutoTokenizer.from_pretrained(“distilbert-base-uncased-finetuned-sst-2-english”)
model = AutoModelForSequenceClassification.from_pretrained(“distilbert-base-uncased-finetuned-sst-2-english”)
import pandas as pd
torch.cuda.set_device(0)
model.cuda()
df = pd.read_csv(dataset path)
df.head()
df.drop(df.loc[df[‘Sentiment’]==’neutral’].index, inplace=True)
X = df.iloc[:,column for sentiment evaluation]
y = df.iloc[:,target sentiment]
device = torch.device(“cuda” if torch.cuda.is_available() else “cpu”)
#metrics for the model
mydict = {‘positive’:1, ‘negative’:0, 1:1, 0:0}
count = 0
correct = 0
wrong = 0
wrong_dict = {}
for input_sequence in X:
try:
if y[count] == ‘neutral’:
raise Exception(“Neutral”)
inputs = tokenizer(input_sequence, return_tensors=”pt”).to(device)
with torch.no_grad():
logits = model(**inputs).logits
predicted_class_id = logits.argmax().item()
if predicted_class_id == mydict[y[count]]:
correct += 1
else:
wrong +=1
wrong_dict[input_sequence] = predicted_class_id
except:
pass
count += 1
print(count,’/50000 complete’, end = ‘\r’)
# if count == 20:
#   break
print(‘\nCorrect:’, correct)
print(‘Wrong:’, wrong)
print(len(wrong_dict))
print(‘Accuracy:’, correct/(correct+wrong))
fp = 0
fn = 0
for x in wrong_dict:
if wrong_dict[x] == 0:
fn += 1
else:
fp += 1
num_negatives = 0
num_positives = 0
for x in y:
if x == 0:
num_negatives += 1
else:
num_positives += 1
print(‘Precision:’, (num_positives-fn)/(num_positives-fn + fp))
print(‘Recall:’, (num_positives-fn)/(num_positives-fn + fn))
print(‘F1:’, (2*(num_positives-fn))/(2*(num_positives-fn) + fp + fn))
FinBERT: Specialized Financial Analysis Model
Link:
https://huggingface.co/ProsusAI/finbert
FinBERT is a specialized variant of the BERT (Bidirectional Encoder Representations from Transformers) model, tailored specifically for financial text analysis. Developed by Yumo Xu and his team at RoBERTa Financial, FinBERT is pre-trained on a massive corpus of financial news articles, reports, and other domain-specific data. This pre-training process enables FinBERT to acquire a deep understanding of financial language, including intricate terminologies, domain-specific jargon, and market sentiments.
The distinguishing feature of FinBERT lies in its fine-tuning process, where it is adapted to perform specific financial NLP tasks, such as sentiment analysis, stock price prediction, and event classification. By fine-tuning on task-specific datasets, FinBERT gains the ability to extract nuanced financial insights, categorize financial events accurately, and analyze market sentiments effectively. As a result, FinBERT has proven to be a powerful tool for financial professionals, enabling them to make more informed decisions and obtain deeper insights from the vast ocean of financial text data.
FinBERT is pre-trained on a large corpus of financial text data, enabling it to learn the nuances and specific vocabulary of the financial domain. This pre-training process involves predicting missing words in sentences and is supervised using a financial sentiment dataset, which helps the model learn to classify sentiment accurately.
FinBERT Model Details
Hidden Layers: 12
Attention Heads: 12
Maximum Token Input: 512
Vocabulary Size: 30873
For more detailed information, visit:
https://github.com/yya518/FinBERT
Choosing FinBERT can be a highly advantageous decision for financial text analysis due to its domain-specific expertise and fine-tuned capabilities. Unlike general-purpose NLP models, FinBERT is specifically trained on a vast corpus of financial data, granting it a profound understanding of the intricacies and nuances of financial language. This domain-specific knowledge enables FinBERT to accurately interpret financial jargon, capture sentiment nuances, and comprehend market-related events, making it an invaluable asset for tasks such as sentiment analysis, event classification, and financial news summarization.
Moreover, FinBERT’s fine-tuned nature allows it to excel in financial-specific tasks by adapting to the unique characteristics of financial datasets. Through the fine-tuning process, it learns to extract financial insights with precision, providing actionable intelligence for traders, investors, and financial analysts. By leveraging FinBERT, financial professionals can gain a competitive edge, make well-informed decisions, and navigate the complexities of the financial domain with a powerful and specialized language model at their disposal.
Code snippet:
tokenizer = AutoTokenizer.from_pretrained(“ProsusAI/finbert”)
model = AutoModelForSequenceClassification.from_pretrained(“ProsusAI/finbert”)
finbert-tone
Link:
https://huggingface.co/yiyanghkust/finbert-tone
FinBERT-tone is an extension of the FinBERT model, designed to address the additional challenge of sentiment analysis in financial text. Developed by the same team at RoBERTa Financial, FinBERT-tone builds upon the foundation of FinBERT by incorporating a novel aspect – capturing the fine-grained tone of financial news articles. Unlike traditional sentiment analysis, which often focuses on binary positive/negative sentiments, FinBERT-tone aims to discern a more nuanced sentiment spectrum, encompassing positive, negative, and neutral tones.
This extension involves training FinBERT-tone on a specialized dataset that includes financial news articles annotated with granular sentiment labels. By fine-tuning on this tone-specific dataset, FinBERT-tone hones its ability to gauge the varying degrees of sentiment in financial text, offering a more comprehensive and accurate sentiment analysis solution for financial professionals. With the capability to interpret subtle sentiment fluctuations in the market, FinBERT-tone empowers users to make well-calibrated decisions and better understand the emotional aspects that influence financial events, making it a valuable tool for sentiment-aware financial analysis.
FINBERT-tone Model Details
Fine-tuned on: 10,000 manually annotated sentences from analysis reports
Improved Performance: Better performance on financial tone analysis tasks
Hidden Layers: 12
Attention Heads: 12
Maximum Token Input: 512
Vocabulary Size: 30873
For more detailed information, visit:
https://github.com/yya518/FinBERT
This model was selected because it can prove to be a strategic advantage for financial professionals seeking sophisticated sentiment analysis capabilities. Unlike traditional sentiment analysis models, FinBERT-tone offers a more nuanced approach by capturing the fine-grained tone of financial news articles. Its specialized training on a dataset annotated with granular sentiment labels allows it to discern subtle variations in sentiment, encompassing positive, negative, and neutral tones in financial text. As a result, FinBERT-tone provides a more comprehensive understanding of the emotional undercurrents within the market, empowering users to make well-informed decisions and respond proactively to sentiment shifts.
By leveraging FinBERT-tone, financial analysts, traders, and investors can gain deeper insights into market sentiment and sentiment-driven trends. Its nuanced sentiment analysis enables users to detect shifts in investor confidence, market sentiment, and public opinion, providing a critical edge in navigating the complexities of financial markets. Additionally, the model’s fine-tuned expertise in financial language ensures accurate interpretation of domain-specific jargon and context, making it an invaluable tool for sentiment-aware financial analysis, risk management, and decision-making.
Code Snippet:
from transformers import BertTokenizer, BertForSequenceClassification
from transformers import pipeline
finbert = BertForSequenceClassification.from_pretrained(‘yiyanghkust/finbert-tone’,num_labels=3)
tokenizer = BertTokenizer.from_pretrained(‘yiyanghkust/finbert-tone’)
nlp = pipeline(“sentiment-analysis”, model=finbert, tokenizer=tokenizer, device = 0)
Continue to Part 2 Link:
Evaluating NLP Models for Text Classification and Summarization Tasks in the Financial Landscape – Part 2
Conclusion
In this first part, we’ve delved into the crucial role of high-quality datasets and explored the capabilities of foundational NLP models like distilbert-base-uncased-finetuned-sst-2-english. Understanding the significance of data and model selection sets the stage for our deep dive into specialized models tailored for financial analysis.
Stay tuned for Part 2, where we’ll explore advanced models like FinBERT and FinBERT-tone, designed to provide nuanced sentiment analysis and tone interpretation in the financial domain. These tools empower professionals to gain invaluable insights and make well-informed decisions in a rapidly evolving market landscape.
Author
Prashanth Srinivasan Sarkar
Share:
Latest Blogs
Product Engineering
22nd Aug 2025
What Are Open Banking APIs and How Do They Work?
Read More
BFSI
20th Aug 2025
The Rise of Alternative Investment Funds in the USA & How Technology is Changing the Game
Read More
Intelligent Automation
18th Aug 2025
Mendix: Blending AI Brilliance into Low-Code
Read More
Related Blogs
Data & Analytics
31st Jul 2025
Model Context Protocol Explained: The ‘USB-C’ Standard for Connecting AI Models to Real-World Data
What good is a genius if you can’t talk to them in your language? That’s...
Read More
Data & Analytics
25th Jul 2025
How RAG Architecture & LLMs Power Generative AI in Banking and Insurance
Financial institutions are discovering something remarkable: generative AI in banking isn’t just about automating routine...
Read More
Data & Analytics
18th Jul 2025
Synthetic Data Generation for Robust Data Engineering Workflows
Data has always been the cornerstone of innovation, so strong data engineering workflows are necessary...
Read More
Indium is a fast-growing, AI-driven digital engineering services company, developing cutting-edge solutions across applications and data.
Cupertino, CA 95014-2358, USA
+1 (888) 207 5969
Subsidiaries:
Experion Technologies
Data & Gen AI
Data Engineering
Gen AI
AI/ML Services
Data Annotation
Intelligent Automation
Low-Code
Process Mining
Smart Workflows
Robotic Process Automation
Industry Expertise
BFSI
Healthcare
Technology
Manufacturing
Retail
Product Engineering
App Modernization
Mobile Development
Devops
Cloud Engineering
Quality Engineering
IoT Testing
LLM Testing
Test Automation
DevOps Testing
Accelerators
LIFTR.ai
teX.ai
ibriX
uphoriX
iDAF
© 2025 All Rights Reserved | Indium Software (India) Private Limited                                                                                    |
Privacy Policy
|
Sitemap
