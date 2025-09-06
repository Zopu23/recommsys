# Revolutionizing Finance with LLMs: An Overview of Applications and Insights

Revolutionizing Finance with LLMs: An Overview of Applications and Insights
1
Introduction
2
Related Work
2.1
Large Language Models
2.2
Named Entity Recognition
2.3
Sentiment Analysis
2.4
Question Answering
2.5
Time Series Forecasting
2.6
Mathematical Reasoning
3
Scope of Finance Tasks
3.1
Financial Engineering
3.1.1
Quantitative Trading
3.1.2
Portfolio Optimization
3.1.3
Robo-advisors
3.2
Financial Forecasting
3.2.1
Merge and Acquisition Forecasting
3.2.2
Insolvency Forecasting
3.2.3
Market Trend Forecast
3.3
Financial Risk Management
3.3.1
Credit Scoring
3.3.2
ESG Scoring
3.3.3
Fraud Detection
3.3.4
Compliance Check
3.4
Financial Real-Time Question Answering
3.4.1
Financial Education
4
GPT-4 Empowered Financial Tasks Evaluations
4.1
Datasets
4.2
Prompt Design
5
Experimental Results
6
Limitation and Future work
7
Conclusion
License: CC BY 4.0
arXiv:2401.11641v1 [cs.CL] 22 Jan 2024
Revolutionizing Finance with LLMs: An Overview of Applications and Insights
Huaqin Zhao
Zhengliang Liu
Zihao Wu
Yiwei Li
Tianze Yang
Peng Shu
Shaochen Xu
Haixing Dai
Lin Zhao
Gengchen Mai
Ninghao Liu
Tianming Liu
†
†
\dagger
†
†
†
\dagger
†
Corresponding authors: Tianming LiuHuanqin Zhao, Zhengliang Liu, Zihao Wu, Yiwei Li, Tianze Yang, Peng Shu, Shaochen Xu, Haixing Dai, Lin Zhao, Ninghao Liu, Tianming are with the School of Computing, The University of Georgia, Athens 30602, USA. Gengchen Mai is with the Department of Geography, University of Georgia, Athens 30602, USA.
Abstract
In recent years, Large Language Models (LLMs) like ChatGPT have seen considerable advancements and have been applied in diverse fields. Built on the Transformer architecture, these models are trained on extensive datasets, enabling them to understand and generate human language effectively. In the financial domain, the deployment of LLMs is gaining momentum. These models are being utilized for automating financial report generation, forecasting market trends, analyzing investor sentiment, and offering personalized financial advice. Leveraging their natural language processing capabilities, LLMs can distill key insights from vast financial data, aiding institutions in making informed investment choices and enhancing both operational efficiency and customer satisfaction.
In this study, we provide a comprehensive overview of the emerging integration of LLMs into various financial tasks. Additionally, we conducted holistic tests on multiple financial tasks through the combination of natural language instructions. Our findings show that GPT-4 effectively follow prompt instructions across various financial tasks.
This survey and evaluation of LLMs in the financial domain aim to deepen the understanding of LLMs’ current role in finance for both financial practitioners and LLM researchers, identify new research and application prospects, and highlight how these technologies can be leveraged to solve practical challenges in the finance industry.
Figure 1:
An overview of the LLMs’ capacities in financial tasks.
1
Introduction
Over the past few years, LLMs such as OpenAI’s GPT family have made significant advances in the field of natural language processing (NLP). The development of these models marks an important milestone in AI technology for understanding and generating natural language. With increased computational power and improved algorithms, LLMs has demonstrated amazing capabilities in understanding complex contexts, answering questions, and writing content. Especially in the finance domain, these capabilities of LLMs are gradually showing their great potential
[
18
,
126
,
125
]
.
Finance is a highly specialized and complex field that involves a great deal of data analysis, prediction, and decision making. LLM’s ability to process large-scale text data makes it a promising application in the financial field. For example, by analyzing financial reports, market news, investor communications, etc., LLMs can provide insights into market trends, perform risk assessments, and even assist in investment decisions. In addition, LLMs can process natural language queries and provide instant financial advice and support, which is a big step forward for the financial services industry
[
125
,
66
,
28
]
.
However, applying LLMs to the financial sector also faces several challenges. First, data in the financial domain is highly specialized and complex. Financial terminology, regulations, and market dynamics require a high level of model comprehension. In addition, financial decision-making usually involves high risk, which requires a high degree of accuracy and reliability in prediction. Therefore, it is a major challenge to ensure that the output of LLMs is both accurate and reliable
[
42
]
.
To address these issues, researchers and developers are continuously refining the algorithms of LLMs to improve its understanding and processing of specialized domain knowledge. With a large amount of specialized training data, the model can better grasp specific knowledge in the financial domain. At the same time, the combination of expert systems and manual review mechanisms can further improve the accuracy and reliability of the model’s application in the financial domain
[
131
]
.
Overall, large-scale language models are gradually becoming a powerful tool for dealing with financial problems. They are not only able to process and analyze large amounts of data, but also provide in-depth insights and recommendations
[
125
]
. Although there are some challenges in the application process, they are gradually being overcome as technology continues to advance. Looking ahead, the application of LLMs in the financial sector will undoubtedly open up more innovations and opportunities.
In this review, we tackle the key question of how to address the difficulties inherent in the financial sector while utilizing the successes of LLMs from various fields to enhance the finance industry. The significant contributions of this article are distilled into four primary points, each focusing on the synergy between LLMs and financial applications.
•
We meticulously survey and synthesize existing LLMs for finance literature, exploring the latest advancements in four independent task categories: financial engineering, financial forecasting, financial risk management, and financial real-time question answering.
•
We summarize the primary technical approaches that LLMs offer to the realm of finance, examine the potential in the investment field, and provide a foundational survey for researchers in this domain.
•
We assess the effectiveness of GPT-4 in various tasks.
•
We concisely overview of the most significant results from our research, discuss the major unresolved issues that should be addressed in subsequent efforts, and offer insights into future directions and possibilities in this field..
2
Related Work
Figure 2:
The Ability of LLMs in Financial Tasks
2.1
Large Language Models
LLMs are primarily built upon the Transformer architecture
[
119
]
, which has been central to their ability to handle complex language tasks. The Transformer model is structured with two key components: the Encoder and the Decoder, each consisting of multiple layers of self-attention and feed-forward neural networks. This architecture facilitates effective management of long-range dependencies within sequences.
A
⁢
t
⁢
t
⁢
e
⁢
n
⁢
t
⁢
i
⁢
o
⁢
n
⁢
(
q
,
k
,
v
)
=
s
⁢
o
⁢
f
⁢
t
⁢
m
⁢
a
⁢
x
⁢
(
q
⁢
k
d
k
)
⁢
v
𝐴
𝑡
𝑡
𝑒
𝑛
𝑡
𝑖
𝑜
𝑛
𝑞
𝑘
𝑣
𝑠
𝑜
𝑓
𝑡
𝑚
𝑎
𝑥
𝑞
𝑘
subscript
𝑑
𝑘
𝑣
Attention(q,k,v)=softmax(\frac{qk}{\sqrt{d_{k}}})v
italic_A italic_t italic_t italic_e italic_n italic_t italic_i italic_o italic_n ( italic_q , italic_k , italic_v ) = italic_s italic_o italic_f italic_t italic_m italic_a italic_x ( divide start_ARG italic_q italic_k end_ARG start_ARG square-root start_ARG italic_d start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_ARG end_ARG ) italic_v
(1)
Self-attention is characterized by its use of queries (Q), keys (K), and values (V), three vectors derived from the input data. Each element in the input sequence is transformed into these three vectors through linear transformation. The self-attention mechanism then computes the attention scores by taking the dot product of the query with all keys. These scores determine how much focus or ’attention’ each element in the sequence should have in relation to every other element. The attention scores are normalized using a softmax function, ensuring they sum up to one, thus forming a probability distribution. The final output of the self-attention layer is a weighted sum of the value vectors, where the weights are the softmax-normalized attention scores. This process allows each output element of the self-attention layer to be a combination of the inputs, with the weights specifying the amount of attention given to each input element. The self-attention mechanism’s ability to weigh inputs differently allows LLMs to capture complex relationships in the data, such as long-range dependencies, making it exceptionally powerful for tasks that require an understanding of context and sequence.
The architecture of LLMs typically falls into one of two categories: Decoder-only and Encoder-Decoder. Decoder-only models, such as those in the GPT series
[
99
,
100
]
, generate text in a unidirectional manner
[
12
]
. Each token in the input sequence attends only to preceding tokens, making them well-suited for tasks like text generation. The Encoder-Decoder models, like T5
[
102
]
and BART
[
56
]
, feature separate mechanisms for encoding input sequences and decoding them into target sequences. This design allows them to handle a broader range of tasks, including both generation and comprehension.
Token generation in LLMs is a vital process, involving vocabulary creation, probability prediction, and techniques like beam search for sequence generation. Vocabulary in LLMs is typically constructed using methods like Byte-Pair Encoding (BPE)
[
38
]
, which allows the model to break down words into subword units. This method aids in managing the model’s vocabulary size, ensuring efficient handling of rare words and morphemes.
During the token generation process, LLMs predict the probability of each token given the context provided by the input sequence. This is typically achieved through a softmax layer that converts the output logits into a probability distribution over the vocabulary. The model selects tokens based on these probabilities, either choosing the most likely next token (greedy decoding) or leveraging techniques like beam search. Beam search is a decoding strategy
[
36
]
that maintains a fixed number of candidate sequences at each step. It expands each candidate by one token at a time, computes the probability of each expansion, and keeps only the most likely sequences. This method balances between finding the most probable sequence and maintaining a diverse set of candidate sequences, leading to more coherent and contextually appropriate outputs.
The capabilities inherent in the Transformer architecture and token generation processes of LLMs have facilitated their application across a wide range of domains. For instance, in Natural Language Generation (NLG), the Decoder-only models excel at producing contextually relevant text, suitable for creative writing and automated report generation. Encoder-Decoder models, due to their bidirectional processing ability, are highly effective in tasks like machine translation, capable of converting input from one language to another while preserving semantic integrity
[
140
]
.
For example, in conversational AI, LLMs power sophisticated chatbots and virtual assistants
[
68
,
55
]
, capable of generating human-like responses in real-time. Their ability to understand and generate language fluently makes them ideal for customer service automation, interactive learning platforms, and personalized communication tools.
LLMs also play a crucial role in information extraction and summarization
[
69
,
111
]
, distilling lengthy documents into concise, informative summaries. This application is particularly beneficial in fields like journalism and academic research, where quick assimilation of information is essential.
Furthermore, the sophisticated understanding of context and language nuances allows LLMs to perform sentiment analysis
[
68
,
69
]
, including financial sentiment analysis
[
136
]
. This capability is widely used in brand monitoring, market research, and social media analysis, providing insights into public opinion and consumer behavior.
Overall, the technical intricacies of LLMs, from their architectural design to their token generation methods, underpin a broad spectrum of applications
[
65
,
40
,
26
,
77
,
44
]
. These models not only enhance existing processes but also open up new possibilities in the way we interact with and process language.
2.2
Named Entity Recognition
Named Entity Recognition (NER) is a key technology in the field of NLP, used to identify and classify entities with specific meanings from text, such as names, places, organizations, time expressions, financial terms, etc. NER plays an important role in information extraction, question-answering systems, content analysis, knowledge graph construction, and other fields
[
93
]
.
There are three main mainstream approaches to solving the NER, namely Rule-Based methods, Machine Learning-Based methods, and Deep Learning-Based methods.
[
31
]
Rule-based systems operate based on identifying entities using predefined rules and patterns, such as using a dictionary of place names to recognize locations. It is easily interpretable and does not require training data. While reliant on expert knowledge, these methods have limited flexibility and scalability
[
57
]
.
Machine Learning-Based Methods: These methods, such as Support Vector Machines (SVM) and Random Forests, learn to recognize entities through training datasets based on manually selected features. They offer more flexibility than rule-based methods but require extensive annotated data
[
32
]
.
Deep learning techniques for tagging sequences make use of word and character representations that are distributed, by training on sentence or sequence features in an end-to-end manner. These methods mainly use BiLSTM structures or networks based on self-attention. They frequently use a Conditional Random Field (CRF) layer for decoding tags, aiding in the comprehension of label interdependencies. Leveraging these capabilities, deep learning approaches are highly effective in managing intricate patterns and extensive data sets
[
30
,
85
]
.
NER is widely used in the financial field, it can be applied for information extraction (extracting key details about companies, stocks, and market events from financial news and reports), compliance monitoring (automatically identifying and overseeing sensitive entities in financial documents, like money laundering and fraud), and investment decision support (providing data support for investment decisions by analyzing entities and events in market news and reports). These applications underscore the vital role of NER in enhancing efficiency, ensuring compliance, and supporting strategic decisions
[
139
]
.
2.3
Sentiment Analysis
In contemporary financial market forecasting, especially regarding Bitcoin trading, the significance of sentiment analysis has been corroborated through numerous academic studies
[
10
,
58
,
133
]
. This research area primarily bifurcates into two methodological categories: lexicon-based and machine-learning approaches, both pivotal in discerning market trends.
Lexicon-Based Methodology:
Within this category, approaches are subdivided into dictionary and corpus-based strategies. A notable instance is the model developed by Dev Shah et al.
[
109
]
, which utilizes the ’pattern’ Python library for transforming textual data into numerical vectors. This process involves compiling sentiment scores by quantifying the occurrence of positive and negative words. However, this model faces limitations due to its unweighted sentiment scoring for individual words, potentially leading to inaccuracies in mirroring the actual market sentiment.
Machine Learning Techniques:
These are split into unsupervised and supervised learning. The unsupervised model by M.S. Usha et al.
[
118
]
, which leverages the Gibbs sampling algorithm, excels in identifying sentiment and topics simultaneously. Yet, its inefficacy in capturing neutral sentiments poses a constraint. In contrast, the supervised approach by D.K. Kirange et al.
[
52
]
focuses on classifying emotions in news content to determine sentiment polarity, employing algorithms such as Naive Bayes, SVM, and KNN, with the latter showing optimal accuracy. Moreover, Sneh Kalra et al.
[
48
]
introduced a model that synergizes Naive Bayes sentiment analysis with adjacent date stock variance data from Yahoo Finance, although it is somewhat limited by its reliance on a single data source.
Xiadong Li et al.
[
60
]
proposed a novel deep learning-based stock prediction system that fuses sentiment analysis with technical stock indicators. Additionally, the field has seen diverse methodologies such as specialized NLP sub-module designs for sentiment analysis
[
108
,
95
]
, the application of N-gram and Naive Bayes Algorithms
[
50
]
, dictionary-based sentiment analysis
[
49
]
, and mood classification paired with daily sentiment scoring
[
91
,
6
]
. Time series analysis models have also found their application in this area
[
92
]
.
These varied methodologies underscore the complexity and multidimensionality of sentiment analysis in financial forecasting, particularly in the context of news analysis. Each approach offers a unique lens through which market trends can be decoded and anticipated, demonstrating the intricate interplay between market sentiment and financial news analysis.
2.4
Question Answering
Large language models (LLMs), such as GPT-4, have demonstrated remarkable capabilities in question answering
[
124
]
, mainly due to their complex architecture and large amounts of training data.
LLMs obtains broad knowledge coverage by analyzing large amounts of text data on the Internet. They can answer questions ranging from general knowledge to specialized fields such as finance, history, science, technology, art, and more
[
114
,
73
,
86
,
63
,
25
,
68
,
41
,
15
,
76
,
111
,
40
,
71
,
14
,
61
,
104
,
80
]
. LLMs can understand complex queries
[
127
,
105
,
79
,
121
,
59
,
44
,
73
,
115
,
103
]
. Whether it’s long sentences, ambiguous questions, or questions that require the synthesis of different information sources, LLMs can handle it and provide relevant answers
[
68
,
43
,
115
]
. LLM can maintain contextual coherence in conversations. This means it can understand and answer subsequent questions based on previous conversations, providing more accurate and relevant information
[
68
,
74
,
138
]
. Top LLMs often have multilingual capabilities and can understand and answer questions in different languages
[
116
]
, which allows them to serve a wider user base.
LLMs have exhibited remarkable capabilities in advanced reasoning. For instance, GPT-4 showcases its ability for common-sense reasoning by leveraging in-context learning. Moreover, the study
[
124
]
reveals that when LLMs are provided with well-structured sequential prompts that break down complex, multi-step problems, their performance in tasks involving arithmetic, deductive reasoning, and common-sense understanding improves significantly.
2.5
Time Series Forecasting
Financial time series forecasting has traditionally hinged on statistical and econometric methods. Models like ARMA-GARCH have been pivotal in discerning patterns and volatility in financial series
[
101
]
.Over time, these models have been refined to better interpret the intricacies of financial markets. Other methods that have gained prominence include Vector Autoregressive Models (VAM)
[
145
]
, State-Space Models utilizing Kalman Filters
[
97
]
, Diffusion Models
[
34
]
, and Vector Error Correction Model (VECM)
[
47
]
, forming the bedrock of financial analysis.
The emergence of machine learning has introduced a plethora of models for financial forecasting. Decision trees and support vector machines, known for their effectiveness in financial series prediction, have become particularly prominent. Of late, there has been a pivot towards deep learning techniques such as Recurrent Neural Networks (RNNs), Convolutional Neural Networks (CNNs), and Transformer models, renowned for their proficiency in unraveling complex, non-linear data relationships.
The development of LLMs like GPT-3
[
12
]
, GPT-4
[
1
]
, and LLaMA
[
117
]
, has been a game-changer in the realm of financial time series forecasting. These models excel in parsing and interpreting intricate dependencies in diverse data sets, offering outputs that are comprehensible to humans. There has been considerable advancement in this domain, including the conversion of time series data into textual sequences, the creation of varied prompts for intelligible financial forecasting, and the conceptualization of financial time series as multimodal data, harnessing the combined strengths of LLMs and computer vision. These developments showcase the dynamic and expanding role of LLMs in financial time series forecasting, highlighting a field ripe with innovation and exploration
[
134
,
46
,
17
]
.
2.6
Mathematical Reasoning
Mathematical reasoning forms the cornerstone of modern finance, serving as the bedrock upon which complex financial theories, models, and practices are constructed. In the realm of finance, mathematical reasoning extends beyond mere number crunching; it encompasses the application of mathematical principles to analyze and solve financial problems, thereby empowering professionals to make informed decisions, assess risks, and forecast market trends.
Central to mathematical reasoning in finance is the integration and application of various mathematical disciplines, such as calculus, statistics, probability, and linear algebra. These mathematical frameworks enable finance professionals to devise and interpret financial models, assess investment strategies, and optimize portfolios. Calculus, for instance, is pivotal in modeling the dynamic behavior of markets and in calculating derivatives, which are key in risk management and the pricing of financial instruments
[
11
]
. Moreover, statistics and probability are indispensable in evaluating risks and returns, aiding in asset valuation and the development of predictive models
[
54
]
.
Furthermore, mathematical reasoning in finance is dynamic and continually evolves with the emergence of new theories and the advent of technological advancements. The inception of quantitative finance, which amalgamates mathematical finance, numerical methods, and computer simulations, has transformed the industry. This interdisciplinary approach has led to the creation of intricate models for options pricing, risk management, and algorithmic trading, thereby enhancing the precision and efficiency of financial operations
[
13
]
.
As we traverse an era marked by increasing complexity and interconnectivity in financial markets, the significance of mathematical reasoning becomes increasingly critical. It not only furnishes finance professionals with the necessary tools for understanding and innovation but also instills a rigorous analytical framework, which is vital amidst financial uncertainties. Whether it’s in the valuation of complex derivatives, the formulation of robust financial models, or the strategic management of investment portfolios, mathematical reasoning remains an essential component in the repertoire of contemporary finance
[
24
]
.
3
Scope of Finance Tasks
3.1
Financial Engineering
Financial Engineering is a multidisciplinary field that combines finance, mathematics, and computer science to create and implement innovative financial strategies and products. LLMs assist in Financial Engineering by enhancing two key subtasks: Quantitative Trading and Portfolio Optimization.
3.1.1
Quantitative Trading
Quantitative trading has traditionally relied on mathematical and statistical models to drive investment decisions, often centering around historical data and predefined algorithmic strategies. This approach, while effective in certain market conditions, faces challenges in dynamic and complex market environments. Traditional quantitative models can struggle to adapt quickly to new information, particularly when it comes to unstructured data sources like news articles, social media, and financial reports. These sources contain valuable sentiment and opinion-based information that standard quantitative methods may overlook
[
66
,
135
]
.
In recent years, the emergence of LLMs has opened new avenues in quantitative trading. LLMs, with their advanced natural language processing capabilities, play a pivotal role in effectively extracting and utilizing such implicit sentiment information in investment strategies. By analyzing vast amounts of textual data, LLMs can identify subtle, often nuanced sentiments embedded in analysts’ reports, market news, and financial statements. These sentiments are crucial as they often represent the collective market sentiment and can precede major market movements.
Analysts’ reports, for instance, are a goldmine of insights but are often laden with implicit sentiments that the analysts might be reluctant or avoid revealing directly. LLMs can decipher these subtle cues, providing a more comprehensive understanding of market dynamics. This capability extends beyond mere sentiment analysis; it encompasses the understanding of context, the detection of sarcasm, and the interpretation of complex financial jargon, which are often lost in traditional quantitative analysis.
The integration of LLMs into quantitative trading strategies represents a significant advancement in the field. It allows for a more holistic approach to investment decisions, one that combines the precision of quantitative models with the nuanced understanding of market sentiments. This synergy not only enhances the robustness of trading strategies but also provides a competitive edge in rapidly changing market conditions. As the financial markets continue to evolve, the role of LLMs in quantitative trading is poised to become increasingly vital, marking a paradigm shift in how investment decisions are made.
[
123
]
3.1.2
Portfolio Optimization
Traditional portfolio optimization, grounded in the principles of modern portfolio theory, seeks to balance risk against return, typically relying on historical market data and statistical analysis
[
98
]
. This approach, while systematic, often encounters challenges in rapidly evolving markets where historical data may not adequately predict future trends. Additionally, traditional models may not fully account for complex, real-world factors like geopolitical events or sudden market shifts, potentially leading to suboptimal asset allocations
[
3
]
.
The integration of LLMs in portfolio optimization heralds a significant advancement in addressing these challenges. LLMs excel in processing and analyzing vast amounts of unstructured data, including market reports, news articles, and financial statements, providing deeper insights and supplementary analysis crucial for risk assessment. These models can uncover subtle market sentiments and emerging trends hidden in textual data, offering a more nuanced view of potential risks and opportunities. By augmenting quantitative data with qualitative insights derived from LLMs, investors can achieve a more holistic approach to portfolio optimization. This synergy not only enhances the robustness of traditional models but also equips investors with a more adaptive and informed strategy in the face of market uncertainties.
[
45
]
3.1.3
Robo-advisors
Leveraging the analytical power of LLMs and artificial intelligence (AI), robo-advisors are making significant strides in reshaping the world of financial investing. Combining precision, adaptability, and accessibility, these advanced platforms are quickly becoming popular tools for wealth management and investment advisory services.
The essence of robo-advisors’ appeal lies in their computational power, which allows them to tailor portfolios to the individual user’s circumstances, taking into account market dynamics and personal risk preferences. The LLMs is critical in this context, parsing extensive data sets to discern complex financial market patterns, allowing robo-advisors to provide informed investment guidance. Throughout the investment cycle, they continuously monitor portfolio performance, adjusting the balance between expected returns and user-defined risk thresholds
[
16
]
.
A key benefit of robo-advisors is their ability to flexibly update investment strategies to reflect changes in the market, a flexibility often not available with traditional investing avenues. The enhanced flexibility can foster greater trust between financial advisors and their clients
[
9
]
.While historical analysis has primarily focused on the algorithmic sophistication and legitimacy of robo-advisors
[
83
]
, discussion is burgeoning about the psychological factors that guide individuals to use these AI platforms.
In a revealing study of the German robo-advisory market (covering approximately 78 assets), they examined approximately 243,000 portfolio pairs along with customer demographic data. The findings indicate that despite the high level of AI-driven sophistication, the personalization aspects of robo-advisory advice are currently limited
[
107
]
. Key factors that influence modern portfolio choices—such as the amount and nature (beta) of human capital or shadow assets—remain largely unresolved. Recommendations tend to cater to current investor biases or regulators’ views on portfolio allocation, which inadvertently limits the economic potential of robo-advisors while bolstering consumer confidence and ensuring regulatory sanctions. The renaissance of robo-advisory advice is highlighted by its tendency to eschew complex, customized strategies in favor of more broadly applicable investment principles, for reasons including explainability to the average user and the need for privacy and data security
[
7
]
.
All in all, the integration of LLMs with robo-advisory services marks a quantum leap in the field of consulting. These AI-centric platforms will revolutionize investing and wealth management by connecting intricate financial acumen with the understanding of ordinary investors, although there is caution about their current scope for customization
[
90
]
[
96
]
.
3.2
Financial Forecasting
3.2.1
Merge and Acquisition Forecasting
In Mergers and Acquisitions (M&A) forecasting, NLP offers pivotal tools for mining and interpreting vast arrays of textual data
[
130
,
120
]
. LLMs can adeptly analyze financial reports, news articles, and press releases to unearth underlying trends or strategic shifts that may hint at forthcoming M&A activities
[
129
]
.
Furthermore, sentiment analysis, a crucial facet of NLP, scrutinizes market commentaries and financial reports. This analysis is instrumental in detecting shifts in market sentiment regarding specific companies or sectors, potentially foreshadowing M&A endeavors.
Additionally, LLMs can delve into historical M&A cases and identify linguistic and financial patterns that typically precede such corporate actions. This historical insight is invaluable in predicting future M&A activities. Lastly, the role of social media cannot be understated. LLMs can monitor these platforms for speculative information and public sentiment, often serving as early indicators of possible M&A movements.
•
Analyzing Financial Reports and News Articles:
Hypothetical Scenario: LLMs analyze the financial reports and news articles surrounding tech giants like Apple (AAPL) and a smaller, innovative tech company like Roku (ROKU). The analysis reveals a pattern of increasing mentions of collaborative projects and shared technology initiatives, suggesting a strategic alignment. This could hint at a potential acquisition of Roku by Apple, a move that could significantly expand Apple’s footprint in the streaming hardware market.
•
Sentiment Analysis of Market Commentaries:
Hypothetical Scenario: NLP tools conduct sentiment analysis on market commentaries regarding the pharmaceutical industry. They detect a positive shift in sentiment towards Merck (MRK) and a smaller biotech firm, BioNTech (BNTX), known for its breakthroughs in mRNA technology. This sentiment shift, coupled with increased collaborative research efforts between the two, might suggest an impending merger or partnership, aligning Merck’s robust distribution network with BioNTech’s innovative vaccine technology.
•
Examining Historical M&A Patterns:
Hypothetical Scenario: An LLM reviews historical M&A cases in the automotive sector, particularly focusing on Tesla (TSLA) and its past acquisitions of smaller tech companies specializing in autonomous driving technology. By identifying linguistic and financial patterns from these cases, such as Tesla’s strategic investments in AI technology, the model predicts Tesla’s interest in acquiring a company like Mobileye (MBLY), a leader in advanced driver-assistance systems.
•
Monitoring Social Media for Speculative Information:
Hypothetical Scenario: LLMs monitor platforms like Twitter and LinkedIn for discussions involving Disney (DIS) and Netflix (NFLX). An uptick in speculative discussions about Disney’s interest in enhancing its streaming content and a potential strategic fit with Netflix’s vast content.
3.2.2
Insolvency Forecasting
For insolvency forecasting, language models can analyze a myriad of textual sources to gauge a company’s financial health accurately. By evaluating financial disclosures, news articles, and statements from corporate leaders, these models can detect early signs of financial distress
[
19
]
.
To complement traditional numerical modeling, these models integrate textual analysis from various reports and news sources into bankruptcy prediction models, enhancing their predictive accuracy
[
2
]
. The sentiment and tone in corporate communications and financial discussions can be meticulously analyzed and reveal early warnings of a company’s deteriorating financial situation.
Moreover, a critical examination of regulatory filings through NLP can reveal subtle linguistic or disclosure patterns
[
51
]
. These patterns are frequently observed in the prelude to financial difficulties or impending insolvency, providing essential insights for stakeholders and investors.
•
Analyzing Financial Health of Retail Companies:
LLMs can assess the financial statements of retail companies. They would identify signs of financial distress, such as declining sales and increasing debt levels, that may indicate a risk of insolvency.
•
Sentiment Analysis in Industry News:
Sentiment analysis on news articles and financial reports about a technology firm. If there’s a prevalent negative sentiment and discussions about liquidity issues or declining market share, this could signal financial troubles ahead.
•
Monitoring Social Media for Consumer Sentiment:
LLMs can track social media mentions of an automotive company, say, ”AutoDrive Motors”. By analyzing consumer sentiment and discussions about product issues or declining brand popularity, potential financial struggles could be anticipated.
•
Analyzing Credit Ratings and Analyst Reports:
A language model can examine changes in credit ratings and analyst reports to spot trends such as credit rating downgrades or negative outlooks by financial analysts could be early indicators of impending financial difficulties.
•
Reviewing Legal and Regulatory Filings:
LLMs can analyze legal and regulatory filings for a pharmaceutical company. Increases in litigation cases or regulatory fines might be early signs of financial instability.
3.2.3
Market Trend Forecast
Incorporating GPT-4’s capabilities into market trend analysis represents a significant leap forward in the application of artificial intelligence within the domain of financial forecasting. The endeavor to leverage GPT-4’s API for predicting stock price trajectories is an intricate process that navigates through a confluence of challenges.
Historically, the academic sphere has gravitated towards econometric models, such as ARIMA
[
94
]
, and the finance industry has harnessed machine learning algorithms to predict stock movements. These methods, while effective to a degree, cannot often evolve rapidly with market conditions or explain their predictions transparently.
Market dynamics are notoriously difficult to predict due to their stochastic nature and the multitude of influential variables ranging from macroeconomic indicators to geopolitical events and investor sentiment. These factors are interdependent and can exhibit non-linear relationships, presenting a daunting task for any predictive model. Traditional quantitative models, while robust, often struggle to account for the subtleties of market sentiment and the rapid shifts in global economic landscapes.
NLP is increasingly being utilized in market forecasting to complement traditional quantitative analysis methods
[
81
]
. By processing and interpreting textual data from various sources such as news articles, financial reports, and social media, NLP provides valuable insights into market sentiment and trends
[
129
]
. This use of NLP helps in uncovering underlying patterns and correlations in market behavior that might not be immediately apparent from numerical data alone. In market forecasting, the ability of NLP to quickly analyze large volumes of text and extract relevant information plays a crucial role in making timely and informed predictions about market movements.
Figure 3:
GPT-4’s forecasting capability on stock price movement
Diverse Data Sources in Market Forecasting with LLMs:
•
Processing Financial News and Reports:
LLMs can quickly digest and analyze extensive financial news and reports, providing a comprehensive view of market conditions and potential trends.
•
Sentiment Analysis of Social Media:
By examining social media platforms and analyzing the sentiment of posts and tweets, LLMs can gauge public opinion and investor sentiment, which are crucial indicators of market movements.
•
Interpreting Economic Indicators:
LLMs can interpret textual data related to economic indicators such as inflation rates, employment data, and GDP growth, which traditionally influence market forecasts.
•
Scenario Simulation:
Leveraging historical data, LLMs can simulate various market conditions and outcomes, aiding in risk assessment and decision-making processes.
•
Real-time Data Processing:
The ability to process data in real time allows LLMs to stay abreast of rapid market changes, offering timely insights for forecasting.
Advantages and Potential of LLMs in Market Analysis:
•
Enhanced Predictive Capabilities:
By analyzing a broader range of data sources, LLMs can offer more accurate predictions than traditional numerical-only methods.
•
Holistic Market Understanding:
The integration of textual data analysis provides a more holistic understanding of market dynamics, beyond what numerical data alone can offer.
•
Adaptability to Market Changes:
The AI-driven nature of LLMs allows for quick adaptation to new information and changing market scenarios.
•
Customizable Analysis:
LLMs can be tailored to focus on specific sectors, regions, or types of data, making them versatile tools for various market analysis needs.
•
Reducing Human Bias:
By relying on data-driven insights
[
88
]
, LLMs can help reduce human bias in market forecasting, leading to more objective and reliable predictions.
As the most powerful language model to date
[
113
,
122
]
, GPT-4 brings to the table its formidable prowess in processing vast datasets, extracting nuanced patterns, and synthesizing this information to generate predictions. Its capacity to parse through disparate data sources, including real-time financial news, historical price data, and burgeoning trends on social media platforms, allows it to construct a multi-faceted view of market conditions.
Furthermore, GPT-4 transcends mere predictive output; it provides the underlying rationale for its forecasts, thereby granting investors and analysts a window into the ’thought process’ of the AI. This interpretability is paramount, as it aligns with the rigorous standards of academic research and financial scrutiny, enabling stakeholders to make informed decisions.
The experiment conducted with GPT-4’s API, which culminated in accurate and interpretable outcomes, indicates a paradigm shift. This advancement may redefine predictive analytics in finance, offering a more dynamic, holistic, and transparent approach to understanding and anticipating market trends. This study serves as a testament to the potential of integrating advanced AI into financial analysis and the broader implications for future research and practical applications within the industry.
3.3
Financial Risk Management
3.3.1
Credit Scoring
The significance of credit and risk assessments in the financial sector cannot be overstated, as these evaluations play a crucial role in maintaining financial stability. Credit assessment not only covers the possibility of assessing an individual borrower’s ability to repay, but also includes a variety of applications such as analyzing the risks of potential investments, evaluating the financial health of a company, and assisting financial institutions in making decisions about loan policies and interest rates. Traditionally, financial credit and risk assessment methods have predominantly been rule-based or reliant on machine learning algorithms
[
27
]
. However, these approaches exhibit limited flexibility across different tasks, often being tailor-made for specific objectives. Consequently, they struggle to generalize or integrate knowledge from diverse financial tasks. Moreover, such methods cannot leverage insights transferable across various financial activities. The advent of LLMs offers a promising avenue to transcend these limitations
[
132
,
8
,
141
]
. LLMs, with their prowess in multi-task learning and few-shot generalization, present an opportunity to redefine the landscape of financial assessments. Current research is exploring the potential of LLMs to identify correlations between disparate financial tasks and generalize across them. This capability marks a potential paradigm shift in credit and risk evaluation methodologies. The application of LLMs in this domain, however, is not without its challenges. For instance, the need to analyze tabular data, which contains symbolic information markedly different from the natural language data that LLMs are typically trained on, presents a significant hurdle. Additionally, ensuring that these models avoid biases in sensitive attributes such as age or gender is paramount. Despite these challenges, LLMs offer considerable advantages in processing and analyzing large volumes of textual data, such as loan applications and transaction histories. This capability enables them to extract valuable insights that can be instrumental in credit and risk analysis. By analyzing historical data and market trends, LLMs can assist analysts in gaining a deeper understanding of market dynamics and individual credit risks. Nevertheless, it’s important to recognize that the effectiveness of LLMs in credit scoring is still evolving. As the financial industry continues to integrate more advanced technological solutions, the role of LLMs in enhancing the accuracy and efficiency of credit and risk assessments will likely become more pronounced, heralding a new era in financial analytics.
3.3.2
ESG Scoring
Environmental, Social, and Governance (ESG) scoring is a critical metric in the contemporary business and investment landscape. It serves as a tool for evaluating a company’s commitment to environmental stewardship, social responsibility, and governance practices. ESG scores came about due to the financial world’s need to assess companies against these three criteria to identify the best performers in these aspects
[
23
]
. Private commercial firms whose primary clients are portfolio managers and other investors use tangible and intangible data to construct ESG scores to produce new data that meet investors’ needs
[
33
]
.
A growing trend sees more companies being evaluated by sustainability rating agencies. The objective of these assessments is to generate relevant data for stakeholders interested in utilizing non-financial information about these companies. The information is particularly valuable for those looking to assess their investments or to develop investment portfolios based on sustainability criteria
[
37
]
. There are several common approaches for ESG scoring. Firstly, companies like Refinitiv and Bloomberg collect data from public sources but do not offer any value-adding input or scoring
[
146
]
. Secondly, ESG data providers combine both public and own-created data to evaluate ESG scores or ratings (e.g. MSCI). Thirdly, some companies focus on specialized ESG issues such as Carbon Disclosure Project.
The integration of GPT-4 into the process of ESG scoring remains an abundant blank area deserving to explore. Application of GPT-4 can offer numerous potential benefits, enhancing both the efficiency and effectiveness of this increasingly important evaluation method. GPT-4 assists with enhanced data processing and analysis. Its advanced capabilities allow it to process vast amounts of unstructured data rapidly including corporate sustainability reports, news articles, social media posts, and other relevant documents. By analyzing this data, GPT-4 can extract key insights about a company’s ESG practices, providing a more comprehensive view than traditional methods. GPT-4 helps mitigate human biases which leads to more objective and consistent ESG assessments. Its ability to analyze data based on predefined criteria reduces subjective interpretation, improving the credibility of the scoring process. Besides, GPT-4 is suitable for real-time monitoring and dynamic scoring. GPT-4 can continuously monitor various data sources for real-time updates related to ESG factors. Dynamic scoring is available to reflect the most current information, providing a more accurate and timely picture of a company’s ESG performance.
Utilizing GPT-4 for ESG scoring represents a significant advancement in sustainability evaluation. Its ability makes it a potent tool for providing deeper, more accurate, and up-to-date insights into ESG performance.
3.3.3
Fraud Detection
As trade volume escalates and digital wallet technology advances, the realm of financial risk management is increasingly facing sophisticated high-tech criminal activities. A case in point: during the initial nine months of 2023, over 83,000 Americans fell prey to credit card fraud, leading to collective financial losses for the victims amounting to $183 million
1
1
1
https://www.aura.com/learn/credit-card-scams
. Consequently, the implementation of robust fraud detection applications is imperative to preserve the integrity of financial systems and safeguard both the institutions and their clients from financial losses
[
35
]
. Leveraging advanced reasoning and text mining capabilities, LLMs can significantly contribute to the identification of financial fraud in various domains including transactions, emails, profiles, contractors, and decentralized finance
[
84
]
. These LLMs serve as an initial filter, learning from customer transaction histories and detailed transaction information to isolate highly suspicious transactions from the billions processed
[
106
]
, thereby substantially alleviating the manual labor burden involved in investigating vast quantities of transaction data. In this study, we use the PaySim simulates mobile money transactions dataset
[
82
]
to evaluate GPT-4’s effectiveness in detecting fraud.
3.3.4
Compliance Check
LLMs with zero-shot learning capabilities are becoming indispensable in the dynamic world of financial compliance, where regulations are in a constant state of flux. Zero-shot LLMs can adapt to new standards without the need for fine-tuning, which traditionally demands regular updates and a wealth of annotated data
[
142
]
. This characteristic is particularly beneficial for tasks such as audits, transaction monitoring, and reporting, as well as financial reporting and disclosure. In audits, zero-shot LLMs can immediately be deployed to parse and analyze documents, identifying inconsistencies and irregularities by understanding the underlying context, without the need for a model that is fine-tuned to specific audit criteria which may change over time
[
67
]
. This saves valuable time and resources in an environment where regulatory frameworks can shift unpredictably. For transaction monitoring and reporting, these LLMs excel at detecting anomalous patterns indicative of non-compliance or suspicious activities. They are capable of understanding transactional nuances and alerting to irregularities, all without prior fine-tuning to the specific rules that could be subject to change due to evolving regulations or market practices. When it comes to financial reporting and information disclosure, zero-shot LLMs ensure that disclosures align with current reporting standards such as IFRS, even as those standards are updated. They provide an agile response to changing requirements, highlighting discrepancies against the latest regulations without the need for retraining on new data sets. The zero-shot learning approach of LLMs not only bypasses the labor-intensive process of continuous model retraining but also mitigates the risk of outdated compliance checks in the rapidly changing financial landscape. This agility makes zero-shot LLMs a critical tool for financial institutions seeking to maintain compliance with the latest regulatory demands
[
23
,
53
]
.
Figure 4:
In compliance checks, due to rapid updates in regulation checklists, models fine-tuned on outdated standards quickly become obsolete. Therefore, we increasingly rely on GPT-4’s zero-shot learning capabilities.
3.4
Financial Real-Time Question Answering
3.4.1
Financial Education
GPT-4 is an advanced artificial intelligence language model developed by OpenAI that is capable of understanding and generating human-like natural language
[
26
,
77
,
86
,
43
,
63
,
25
,
68
,
41
,
15
,
76
,
111
,
40
,
59
,
72
]
. This feature makes it a powerful tool for financial education, especially when it comes to explaining complex financial concepts, providing customized learning experiences, and enhancing user interaction
[
125
]
.
First, GPT-4 can simplify complex financial concepts into easy-to-understand language. The field of finance is full of complex terms and concepts such as securities markets, portfolio diversification, risk management, etc. GPT-4 can explain these concepts more understandably through its deep learning and training on large amounts of financial data. This is especially important for those new to finance because it lowers the learning curve, allowing them to more easily understand and apply the concepts.
Secondly, GPT-4 has unique advantages in providing customized learning experience
[
78
,
74
,
115
,
75
,
70
,
64
,
29
,
43
]
. It can adjust content and difficulty according to the user’s learning progress, interests and needs
[
40
,
73
,
44
,
111
,
143
,
144
,
62
,
137
]
. For example, for beginners, GPT-4 can provide basic financial knowledge and concepts; for more experienced learners, it can provide more in-depth analysis and advanced topics. This personalized learning approach helps improve learning efficiency and user satisfaction.
In addition, GPT-4 plays an important role in enhancing user interaction. Through interactive Q&A, simulated scenarios, and real-time feedback, GPT-4 can create a more dynamic and engaging learning environment. This method not only enhances the interest of learning but also helps improve learners’ practical skills and problem-solving abilities.
However, although GPT-4 has many advantages in financial education, it also has some limitations. First, although GPT-4 is excellent at explaining financial concepts and providing personalized teaching, it still relies on existing knowledge bases and data. This means that GPT-4 may not be able to provide cutting-edge information when faced with the latest financial trends and data. For example, in the context of rapidly changing financial markets, GPT-4 may not be able to update its knowledge base promptly to reflect the latest market dynamics and regulatory changes. Secondly, GPT-4 also needs to consider ethical and compliance issues when providing financial education. The accuracy and transparency of financial information are critical to protecting consumers and maintaining market order. Therefore, when using GPT-4 as a financial education tool, you must ensure that the information and advice it provides comply with relevant laws and regulations and are ethically responsible.
Overall, GPT-4 offers many potential advantages in the field of financial education, including simplifying complex concepts, providing a personalized learning experience, and enhancing user interaction. However, its application also needs to take into account challenges such as accuracy, timeliness, and ethical compliance. In the future, with the continuous development and improvement of technology, GPT-4 has the potential to become an important auxiliary tool in the field of financial education, helping users to better understand and apply financial knowledge.
4
GPT-4 Empowered Financial Tasks Evaluations
In this section, we introduce the approach used in our survey to evaluate the performance of GPT-4 in a variety of financial tasks with one-shot learning and zero-shot prompting. Our method consists of several important parts, including practical financial tasks, selection of benchmark data sets, design of various instruction prompts, and selection of evaluation indicators.
4.1
Datasets
To showcase the extensive capabilities of GPT-4 in the financial sector, we have meticulously chosen six diverse datasets. These datasets encompass a wide range of text types, including news articles, analytical reports, and social media posts like tweets. In addition, we’ve incorporated featuring time series, tabular data, and textual content. Furthermore, we’ve crafted a series of comprehensive and practical financial tasks that mirror real-world finance scenarios. This selection and design aim to fully demonstrate the advanced and versatile applications of these AI models in finance.
Table 1:
The details of the raw data and instruction data.
Data
Task
Raw
Instruction
Data Types
Modalities
License
FPB
sentiment analysis
4,845
48,450
news
text
CC BY-SA 3.0
FiQA-SA
sentiment analysis
1,173
11,730
news headlines,tweets
text
Public
NER
named entity recognition
1,366
13,660
financial agreements
text
CC BY-SA 3.0
FinQA
question answering
8,281
8,281
earnings reports
text,table
MIT License
ConvFinQA
question answering
3,892
3,892
earnings reports
text,table
MIT License
BigData22
stock movement prediction
7,164
7,164
tweets,historical prices
text,time series
Public
Figure 5:
We conducted sentiment analysis on 970 data points from the FiQA-SA task set
[
128
]
. By using GPT-4, we achieve 79$ accuracy rate.
Figure 6:
GPT-4 has demonstrated its zero-shot learning and instruction following capacities.
Figure 7:
Using GPT-4 for summary demonstrates LLMs’ knowledge integration capabilities, logical reasoning capabilities and language expression capabilities.Green highlight indicates the k
Figure 8:
We conducted stock price prediction on 1,470 data points from the BigData task set
[
128
]
. By using GPT-4, we achieve 51$ accuracy rate.
Figure 9:
Fraud detection on PaySim simulates mobile money transactions dataset
[
82
]
using GPT-4: 5 out of 5 Correct. Green highlight indicates normal transactions; Yellow highlight indicates suspicious/fraudulent transactions.
Evaluating Sentiment in Financial News:
The task of discerning sentiment in financial news is a paramount concern within the financial analytics community, as underscored in seminal works by Araci
[
5
]
and Yang et al.
[
131
]
. This endeavor seeks to meticulously interpret the sentiment embedded in financial narratives. Adhering to the established FLUE framework
[
110
]
, this study employs two prominent datasets: the Financial Phrase Bank (FPB) dataset
[
89
]
and FiQA-SA
[
87
]
. The FPB dataset is a collection of financial news excerpts, each meticulously annotated by field experts with a sentiment classification: positive, negative, or neutral. Conversely, FiQA-SA serves as an expansive dataset predominantly utilized for the sentiment quantification of English-language financial reporting and microblogging content, using a nuanced sentiment intensity scale ranging from -1 to 1, where a value of 1 epitomizes the most positive sentiment.
Identifying Named Entities in Finance:
The goal of this task is to pinpoint key financial entities, including individuals, organizations, and locations. These entities are crucial for developing financial knowledge graphs. The NER dataset
[
4
]
serves as the basis for this task, featuring sentences from financial agreements filed with the U.S. Securities and Exchange Commission and includes entities categorized as LOCATION, ORGANISATION, and PERSON.
Financial Question Answering:
This task involves automatically responding to financial queries based on provided data. For this, two datasets are employed: FinQA
[
20
]
and ConvFinQA
[
21
]
. FinQA offers pairs of questions and answers, annotated by specialists, along with associated earnings reports from S&P 500 companies. ConvFinQA extends this by including multi-turn dialogues over these earnings reports.
Predicting Stock Movements:
Recognized as a critical financial task, predicting stock movements can be invaluable in practical applications like investment strategy formulation. This task is approached as a binary classification challenge, following the methodology of prior research
[
112
]
. It involves forecasting the direction of stock price movements based on historical prices and relevant tweets. Movements above 0.55% are considered positive, while those below -0.5% are deemed negative. For this analysis, one widely used datasets is utilized: BigData22
[
112
]
.
4.2
Prompt Design
We examined various prompting strategies, including vanilla zero-shot prompting, Chain-of Thought (CoT) enhanced zero-shot prompting, and one-shot prompting to investigate their impact on GPT’s performance in the stated financial tasks.
The formulation of prompts is essential in interacting with LLMs. An elaborate and well-organized prompt, detailed and clear, leads to outputs that are more accurate and in line with the provided instructions. The following three parts are the GPT4-prompt in the financial field that we have obtained through experiments to generate output that best meets the instructions.
•
System Role Explanation
: This section will describe the specific role and tasks GPT-4 is expected to perform in a financial setting. For example, it might be tasked with analyzing market trends, offering investment advice, or interpreting financial reports.
•
Response Format for Different Tasks
: This section has specific requirements for the format of the output. For example, you want the information to be presented in the form of lists, charts, or reports.
•
Example and Output
: This part would provide a example as a guideline for a finance-related query. Also, it contains the desired response for the query.
The first three components are utilized for system message input in response to each query. We have attempted to enhance the precision of the prompts by incorporating additional components, yet this has not resulted in a substantial improvement in performance.
5
Experimental Results
In our tested financial tasks, LLMs demonstrated precise execution capabilities. Based on the responses we gathered, we believe that LLMs exhibit exceptional zero-shot learning and mathematical reasoning abilities, along with their strongest suit, language sentiment analysis. The effectiveness of LLMs in financial tasks is quantitatively assessed by comparing their recommendations against real-world financial data and historical market performance. This methodology was rigorously tested across various financial scenarios and datasets, yielding insightful and actionable results in areas such as financial engineering, risk assessment, and market trend analysis. For financial tasks lacking dedicated datasets, we have curated case studies to showcase the capabilities of GPT-4.
Table 2:
The zero-shot and few-shot performance of different LLMs on the stated datasets.
Dataset
Metrics
GPT 4
FPB
Acc
0.78
FiQA-SA
Acc
0.79
NER
EntityF1
0.81
FinQA
EmAcc
0.64
ConvFinQA
EmAcc
0.73
BigData22
Acc
0.53
6
Limitation and Future work
The limitations of LLMs are evident in areas such as optimization and quantitative trading. While they can assist in identifying market sentiments, LLMs cannot directly engage in computational tasks. Their role is more auxiliary, aiding in sentiment analysis which then feeds into existing models that handle quantitative variables
[
123
]
. This indicates that LLMs, as of now, are not standalone solutions for computational finance tasks but rather powerful tools for augmenting existing models.
For future work, there is immense potential in integrating LLMs with advanced quantitative models. One promising direction could be the development of hybrid systems that combine the text processing prowess of LLMs with sophisticated quantitative trading algorithms
[
135
,
22
]
. Another area could be enhancing the interpretability and reliability of LLMs outputs in financial contexts, ensuring that the insights generated are not only accurate but also actionable. Moreover, exploring the application of LLMs in predictive analytics for market trends, based on historical data and current events, can open new avenues in financial forecasting. This integration of qualitative and quantitative analysis could revolutionize how financial markets are analyzed and traded
[
39
]
.
7
Conclusion
In this article, we have delved into the multifaceted application of GPT-4 across a spectrum of 11 financial tasks, shedding light on the capabilities and constraints of LLMs in the financial domain. Central to our findings is the remarkable adeptness of LLMs in text processing, sentiment analysis, and their zero-shot learning abilities. The proficiency of LLMs in sifting through and interpreting extensive textual data is unmatched, thus playing a pivotal role in decoding market dynamics and investor sentiment.
However, it is crucial to acknowledge the limitations of LLMs in direct computational tasks, particularly in optimization and quantitative trading, where their role remains largely supplementary. Despite these constraints, the potential of LLMs in enhancing financial models and decision-making processes is undeniable. As we advance, the integration of LLMs with quantitative models and the refinement of their application in finance will be areas of significant interest. The continual evolution of LLMs promises to not only bolster existing financial methodologies but also to pave the way for innovative approaches in financial analysis and strategy.
References
[1]
Achiam, J., Adler, S., Agarwal, S., Ahmad, L., Akkaya, I., Aleman, F.L., Almeida, D., Altenschmidt, J., Altman, S., Anadkat, S., et al.: Gpt-4 technical report. arXiv preprint arXiv:2303.08774 (2023)
[2]
Ahmadi, Z., Martens, P., Koch, C., Gottron, T., Kramer, S.: Towards bankruptcy prediction: Deep sentiment mining to detect financial distress from business management reports. In: 2018 IEEE 5th International Conference on Data Science and Advanced Analytics (DSAA). pp. 293–302. IEEE (2018)
[3]
Ali, S.R.M.: Geopolitical threat, market capitalization, and portfolio return. Market Capitalization, and Portfolio Return
[4]
Alvarado, J.C.S., Verspoor, K., Baldwin, T.: Domain adaption of named entity recognition to support credit risk assessment. In: Proceedings of the Australasian Language Technology Association Workshop 2015. pp. 84–90 (2015)
[5]
Araci, D.: Finbert: Financial sentiment analysis with pre-trained language models. arXiv preprint arXiv:1908.10063 (2019)
[6]
Audrino, F., Sigrist, F., Ballinari, D.: The impact of sentiment and attention measures on stock market volatility. International Journal of Forecasting
36
(2), 334–357 (2020)
[7]
Aw, E.C.X., Leong, L.Y., Hew, J.J., Rana, N.P., Tan, T.M., Jee, T.W.: Counteracting dark sides of robo-advisors: justice, privacy and intrusion considerations. International Journal of Bank Marketing (2023)
[8]
Babaei, G., Giudici, P.: Gpt classifications, with application to credit lending. Available at SSRN 4649285 (2023)
[9]
Baker, T., Dellaert, B.: Regulating robo advice across the financial services industry. Iowa L. Rev.
103
,  713 (2017)
[10]
Bollen, J., Mao, H., Zeng, X.: Twitter mood predicts the stock market. Journal of computational science
2
(1),  1–8 (2011)
[11]
Brigo, D., Mercurio, F.: Interest rate models-theory and practice: with smile, inflation and credit, vol. 2. Springer (2006)
[12]
Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J.D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al.: Language models are few-shot learners. Advances in neural information processing systems
33
, 1877–1901 (2020)
[13]
Buehler, H., Gonon, L., Teichmann, J., Wood, B.: Deep hedging. Quantitative Finance
19
(8), 1271–1291 (2019)
[14]
Cai, H., Liao, W., Liu, Z., Zhang, Y., Huang, X., Ding, S., Ren, H., Wu, Z., Dai, H., Li, S., Wu, L., Liu, N., Li, Q., Liu, T., Li, X.: Coarse-to-fine knowledge graph domain adaptation based on distantly-supervised iterative training (2023)
[15]
Cai, H., Liao, W., Liu, Z., Zhang, Y., Huang, X., Ding, S., Ren, H., Wu, Z., Dai, H., Li, S., et al.: Coarse-to-fine knowledge graph domain adaptation based on distantly-supervised iterative training. arXiv preprint arXiv:2211.02849 (2022)
[16]
Caspi, I., Felber, S.S., Gillis, T.B.: Generative ai and the future of financial advice regulation
[17]
Chang, C., Peng, W.C., Chen, T.F.: Llm4ts: Two-stage fine-tuning for time-series forecasting with pre-trained llms. arXiv preprint arXiv:2308.08469 (2023)
[18]
Chang, Y., Wang, X., Wang, J., Wu, Y., Zhu, K., Chen, H., Yang, L., Yi, X., Wang, C., Wang, Y., et al.: A survey on evaluation of large language models. arXiv preprint arXiv:2307.03109 (2023)
[19]
Chen, J.M.: Models for predicting business bankruptcies and their application to banking and financial regulation. Penn St. L. Rev.
123
,  735 (2018)
[20]
Chen, Z., Chen, W., Smiley, C., Shah, S., Borova, I., Langdon, D., Moussa, R., Beane, M., Huang, T.H., Routledge, B., et al.: Finqa: A dataset of numerical reasoning over financial data. arXiv preprint arXiv:2109.00122 (2021)
[21]
Chen, Z., Li, S., Smiley, C., Ma, Z., Shah, S., Wang, W.Y.: Convfinqa: Exploring the chain of numerical reasoning in conversational finance question answering. arXiv preprint arXiv:2210.03849 (2022)
[22]
Ciuriak, D., Artyushina, A.: Trading ai: Machine knowledge capital and the trading system. Available at SSRN (2023)
[23]
Clément, A., Robinot, É., Trespeuch, L.: Improving esg scores with sustainability concepts. Sustainability
14
(20), 13154 (2022)
[24]
Cont, R.: Empirical properties of asset returns: stylized facts and statistical issues. Quantitative finance
1
(2),  223 (2001)
[25]
Dai, H., Li, Y., Liu, Z., Zhao, L., Wu, Z., Song, S., Shen, Y., Zhu, D., Li, X., Li, S., Yao, X., Shi, L., Li, Q., Chen, Z., Zhang, D., Mai, G., Liu, T.: Ad-autogpt: An autonomous gpt for alzheimer’s disease infodemiology (2023)
[26]
Dai, H., Liu, Z., Liao, W., Huang, X., Cao, Y., Wu, Z., Zhao, L., Xu, S., Liu, W., Liu, N., Li, S., Zhu, D., Cai, H., Sun, L., Li, Q., Shen, D., Liu, T., Li, X.: Auggpt: Leveraging chatgpt for text data augmentation (2023)
[27]
Dastile, X., Celik, T., Potsane, M.: Statistical and machine learning models in credit scoring: A systematic literature survey. Applied Soft Computing
91
, 106263 (2020)
[28]
Deng, X., Bashlovkina, V., Han, F., Baumgartner, S., Bendersky, M.: What do llms know about financial markets? a case study on reddit market sentiment analysis. In: Companion Proceedings of the ACM Web Conference 2023. pp. 107–110 (2023)
[29]
Dou, F., Ye, J., Yuan, G., Lu, Q., Niu, W., Sun, H., Guan, L., Lu, G., Mai, G., Liu, N., Lu, J., Liu, Z., Wu, Z., Tan, C., Xu, S., Wang, X., Li, G., Chai, L., Li, S., Sun, J., Sun, H., Shao, Y., Li, C., Liu, T., Song, W.: Towards artificial general intelligence (agi) in the internet of things (iot): Opportunities and challenges (2023)
[30]
Ehrmann, M., Hamdi, A., Pontes, E.L., Romanello, M., Doucet, A.: Named entity recognition and classification on historical documents: A survey (2021)
[31]
Ehrmann, M., Hamdi, A., Pontes, E.L., Romanello, M., Doucet, A.: Named entity recognition and classification in historical documents: A survey. ACM Computing Surveys
56
(2), 1–47 (2023)
[32]
Ekbal, A., Bandyopadhyay, S.: Named entity recognition using support vector machine: A language independent approach. International Journal of Electrical and Computer Engineering
4
(3), 589–604 (2010)
[33]
Escrig-Olmedo, E., Fernández-Izquierdo, M.Á., Ferrero-Ferrero, I., Rivera-Lirio, J.M., Muñoz-Torres, M.J.: Rating the raters: Evaluating how esg rating agencies integrate sustainability principles. Sustainability
11
(3),  915 (2019)
[34]
Fan, J.: A selective overview of nonparametric methods in financial econometrics. Statistical Science pp. 317–337 (2005)
[35]
Feng, D., Dai, Y., Huang, J., Zhang, Y., Xie, Q., Han, W., Lopez-Lira, A., Wang, H.: Empowering many, biasing a few: Generalist credit scoring through large language models. arXiv preprint arXiv:2310.00566 (2023)
[36]
Freitag, M., Al-Onaizan, Y.: Beam search strategies for neural machine translation. arXiv preprint arXiv:1702.01806 (2017)
[37]
Friede, G., Busch, T., Bassen, A.: Esg and financial performance: aggregated evidence from more than 2000 empirical studies. Journal of sustainable finance & investment
5
(4), 210–233 (2015)
[38]
Gage, P.: A new algorithm for data compression. C Users Journal
12
(2), 23–38 (1994)
[39]
Ge, Y., Hua, W., Ji, J., Tan, J., Xu, S., Zhang, Y.: Openagi: When llm meets domain experts. arXiv preprint arXiv:2304.04370 (2023)
[40]
Gong, X., Holmes, J., Li, Y., Liu, Z., Gan, Q., Wu, Z., Zhang, J., Zou, Y., Teng, Y., Jiang, T., Zhu, H., Liu, W., Liu, T., Yan, Y.: Evaluating the potential of leading large language models in reasoning biology questions (2023)
[41]
Guan, Z., Wu, Z., Liu, Z., Wu, D., Ren, H., Li, Q., Li, X., Liu, N.: Cohortgpt: An enhanced gpt for participant recruitment in clinical study (2023)
[42]
Gupta, U.: Gpt-investar: Enhancing stock investment strategies through annual report analysis with large language models. arXiv preprint arXiv:2309.03079 (2023)
[43]
Holmes, J., Liu, Z., Zhang, L., Ding, Y., Sio, T., McGee, L., Ashman, J., Li, X., Liu, T., Shen, J., et al.: Evaluating large language models on a highly-specialized topic. Radiation Oncology Physics (2023)
[44]
Holmes, J., Zhang, L., Ding, Y., Feng, H., Liu, Z., Liu, T., Wong, W.W., Vora, S.A., Ashman, J.B., Liu, W.: Benchmarking a foundation llm on its ability to re-label structure names in accordance with the aapm tg-263 report (2023)
[45]
Jeong, C.: Fine-tuning and utilization methods of domain-specific llms (2024)
[46]
Jin, M., Wang, S., Ma, L., Chu, Z., Zhang, J.Y., Shi, X., Chen, P.Y., Liang, Y., Li, Y.F., Pan, S., et al.: Time-llm: Time series forecasting by reprogramming large language models. arXiv preprint arXiv:2310.01728 (2023)
[47]
Johansen, S.: Likelihood-based inference in cointegrated vector autoregressive models. OUP Oxford (1995)
[48]
Kalra, S., Prasad, J.S.: Efficacy of news sentiment for stock market prediction. In: 2019 International Conference on Machine Learning, Big Data, Cloud and Parallel Computing (COMITCon). pp. 491–496. IEEE (2019)
[49]
Kalyanaraman, V., Kazi, S., Tondulkar, R., Oswal, S.: Sentiment analysis on news articles for stocks. In: 2014 8th Asia Modelling Symposium. pp. 10–15. IEEE (2014)
[50]
Khedr, A.E., Yaseen, N., et al.: Predicting stock market behavior using data mining technique and news sentiment analysis. International Journal of Intelligent Systems and Applications
9
(7),  22 (2017)
[51]
Kim, A.G., Yoon, S.: Corporate bankruptcy prediction with domain-adapted bert. In: EMNLP 2021, 3rd Workshop on ECONLP (2021)
[52]
Kirange, D., Deshmukh, R.R., et al.: Sentiment analysis of news headlines for stock price prediction. Composoft, An International Journal of Advanced Computer Technology
5
(3), 2080–2084 (2016)
[53]
Kojima, T., Gu, S.S., Reid, M., Matsuo, Y., Iwasawa, Y.: Large language models are zero-shot reasoners. Advances in neural information processing systems
35
, 22199–22213 (2022)
[54]
Lee, C.F., Chen, H.Y., Lee, J.: Financial econometrics, mathematics and statistics. Springer (2019)
[55]
Lee, G.G., Shi, L., Latif, E., Gao, Y., Bewersdorf, A., Nyaaba, M., Guo, S., Wu, Z., Liu, Z., Wang, H., et al.: Multimodality of ai for education: Towards artificial general intelligence. arXiv preprint arXiv:2312.06037 (2023)
[56]
Lewis, M., Liu, Y., Goyal, N., Ghazvininejad, M., Mohamed, A., Levy, O., Stoyanov, V., Zettlemoyer, L.: Bart: Denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension. arXiv preprint arXiv:1910.13461 (2019)
[57]
Li, J., Sun, A., Han, J., Li, C.: A survey on deep learning for named entity recognition. IEEE Transactions on Knowledge and Data Engineering
34
(1), 50–70 (2020)
[58]
Li, Q., Wang, T., Li, P., Liu, L., Gong, Q., Chen, Y.: The effect of news and public mood on stock movements. Information Sciences
278
, 826–840 (2014)
[59]
Li, X., Zhang, L., Wu, Z., Liu, Z., Zhao, L., Yuan, Y., Liu, J., Li, G., Zhu, D., Yan, P., Li, Q., Liu, W., Liu, T., Shen, D.: Artificial general intelligence for medical imaging (2023)
[60]
Li, X., Wu, P., Wang, W.: Incorporating stock prices and news sentiments for stock market prediction: A case of hong kong. Information Processing & Management
57
(5), 102212 (2020)
[61]
Liao, W., Liu, Z., Dai, H., Wu, Z., Zhang, Y., Huang, X., Chen, Y., Jiang, X., Liu, W., Zhu, D., Liu, T., Li, S., Li, X., Cai, H.: Mask-guided bert for few shot text classification (2023)
[62]
Liao, W., Liu, Z., Dai, H., Wu, Z., Zhang, Y., Huang, X., Chen, Y., Jiang, X., Zhu, D., Liu, T., et al.: Mask-guided bert for few shot text classification. arXiv preprint arXiv:2302.10447 (2023)
[63]
Liao, W., Liu, Z., Dai, H., Xu, S., Wu, Z., Zhang, Y., Huang, X., Zhu, D., Cai, H., Liu, T., Li, X.: Differentiate chatgpt-generated and human-written medical texts (2023)
[64]
Liu, C., Liu, Z., Holmes, J., Zhang, L., Zhang, L., Ding, Y., Shu, P., Wu, Z., Dai, H., Li, Y., Shen, D., Liu, N., Li, Q., Li, X., Zhu, D., Liu, T., Liu, W.: Artificial general intelligence for radiation oncology. Meta-Radiology p. 100045 (2023). https://doi.org/https://doi.org/10.1016/j.metrad.2023.100045,
https://www.sciencedirect.com/science/article/pii/S2950162823000450
[65]
Liu, C., Liu, Z., Holmes, J., Zhang, L., Zhang, L., Ding, Y., Shu, P., Wu, Z., Dai, H., Li, Y., et al.: Artificial general intelligence for radiation oncology. Meta-Radiology p. 100045 (2023)
[66]
Liu, X.Y., Wang, G., Yang, H., Zha, D.: Fingpt: Democratizing internet-scale data for financial large language models (2023)
[67]
Liu, X., Li, H., Zhu, X.: A gpt-based method of automated compliance checking through prompt engineering (2023)
[68]
Liu, Y., Han, T., Ma, S., Zhang, J., Yang, Y., Tian, J., He, H., Li, A., He, M., Liu, Z., et al.: Summary of chatgpt-related research and perspective towards the future of large language models. Meta-Radiology p. 100017 (2023)
[69]
Liu, Y., He, H., Han, T., Zhang, X., Liu, M., Tian, J., Zhang, Y., Wang, J., Gao, X., Zhong, T., et al.: Understanding llms: A comprehensive overview from training to inference. arXiv preprint arXiv:2401.02038 (2024)
[70]
Liu, Z., Zhong, A., Li, Y., Yang, L., Ju, C., Wu, Z., et al.: Radiology-gpt: a large language model for radiology. arxiv [preprint]. 2023 [cited august 21, 2023]
[71]
Liu, Z., He, M., Jiang, Z., Wu, Z., Dai, H., Zhang, L., Luo, S., Han, T., Li, X., Jiang, X., et al.: Survey on natural language processing in medical image analysis. Zhong nan da xue xue bao. Yi xue ban= Journal of Central South University. Medical Sciences
47
(8), 981–993 (2022)
[72]
Liu, Z., He, X., Liu, L., Liu, T., Zhai, X.: Context matters: A strategy to pre-train language model for science education. arXiv preprint arXiv:2301.12031 (2023)
[73]
Liu, Z., Li, Y., Cao, Q., Chen, J., Yang, T., Wu, Z., Hale, J., Gibbs, J., Rasheed, K., Liu, N., et al.: Transformation vs tradition: Artificial general intelligence (agi) for arts and humanities. arXiv preprint arXiv:2310.19626 (2023)
[74]
Liu, Z., Li, Y., Shu, P., Zhong, A., Yang, L., Ju, C., Wu, Z., Ma, C., Luo, J., Chen, C., Kim, S., Hu, J., Dai, H., Zhao, L., Zhu, D., Liu, J., Liu, W., Shen, D., Liu, T., Li, Q., Li, X.: Radiology-llama2: Best-in-class large language model for radiology (2023)
[75]
Liu, Z., Wang, P., Li, Y., Holmes, J., Shu, P., Zhang, L., Liu, C., Liu, N., Zhu, D., Li, X., Li, Q., Patel, S.H., Sio, T.T., Liu, T., Liu, W.: Radonc-gpt: A large language model for radiation oncology (2023)
[76]
Liu, Z., Wu, Z., Hu, M., Zhao, B., Zhao, L., Zhang, T., Dai, H., Chen, X., Shen, Y., Li, S., Murray, B., Liu, T., Sikora, A.: Pharmacygpt: The ai pharmacist (2023)
[77]
Liu, Z., Yu, X., Zhang, L., Wu, Z., Cao, C., Dai, H., Zhao, L., Liu, W., Shen, D., Li, Q., Liu, T., Zhu, D., Li, X.: Deid-gpt: Zero-shot medical text de-identification by gpt-4 (2023)
[78]
Liu, Z., Zhong, A., Li, Y., Yang, L., Ju, C., Wu, Z., Ma, C., Shu, P., Chen, C., Kim, S., Dai, H., Zhao, L., Zhu, D., Liu, J., Liu, W., Shen, D., Li, Q., Liu, T., Li, X.: Tailoring large language models to radiology: A preliminary approach to llm adaptation for a highly specialized domain. In: Cao, X., Xu, X., Rekik, I., Cui, Z., Ouyang, X. (eds.) Machine Learning in Medical Imaging. pp. 464–473. Springer Nature Switzerland, Cham (2024)
[79]
Liu, Z., Zhong, A., Li, Y., Yang, L., Ju, C., Wu, Z., Ma, C., Shu, P., Chen, C., Kim, S., Dai, H., Zhao, L., Zhu, D., Liu, J., Liu, W., Shen, D., Li, X., Li, Q., Liu, T.: Radiology-gpt: A large language model for radiology (2023)
[80]
Liu, Z., Zhong, A., Li, Y., Yang, L., Ju, C., Wu, Z., Ma, C., Shu, P., Chen, C., Kim, S., et al.: Radiology-gpt: A large language model for radiology. arXiv preprint arXiv:2306.08666 (2023)
[81]
Lopez-Lira, A., Tang, Y.: Can chatgpt forecast stock price movements? return predictability and large language models. arXiv preprint arXiv:2304.07619 (2023)
[82]
Lopez-Rojas, E., Elmir, A., Axelsson, S.: Paysim: A financial mobile money simulator for fraud detection. In: 28th European Modeling and Simulation Symposium, EMSS, Larnaca. pp. 249–255. Dime University of Genoa (2016)
[83]
Lourenço, C.J., Dellaert, B.G., Donkers, B.: Whose algorithm says so: The relationships between type of firm, perceptions of trust and expertise, and the acceptance of financial robo-advice. Journal of Interactive Marketing
49
, 107–124 (2020)
[84]
Luo, B., Zhang, Z., Wang, Q., Ke, A., Lu, S., He, B.: Ai-powered fraud detection in decentralized finance: A project life cycle perspective. arXiv preprint arXiv:2308.15992 (2023)
[85]
Luo, L., Yang, Z., Yang, P., Zhang, Y., Wang, L., Lin, H., Wang, J.: An attention-based bilstm-crf approach to document-level chemical named entity recognition. Bioinformatics
34
(8), 1381–1388 (2018)
[86]
Ma, C., Wu, Z., Wang, J., Xu, S., Wei, Y., Liu, Z., Jiang, X., Guo, L., Cai, X., Zhang, S., Zhang, T., Zhu, D., Shen, D., Liu, T., Li, X.: Impressiongpt: An iterative optimizing framework for radiology report summarization with chatgpt (2023)
[87]
Maia, M., Handschuh, S., Freitas, A., Davis, B., McDermott, R., Zarrouk, M., Balahur, A.: Www’18 open challenge: financial opinion mining and question answering. In: Companion proceedings of the the web conference 2018. pp. 1941–1942 (2018)
[88]
Makridakis, S., Petropoulos, F., Kang, Y.: Large language models: Their success and impact. Forecasting
5
(3), 536–549 (2023)
[89]
Malo, P., Sinha, A., Korhonen, P., Wallenius, J., Takala, P.: Good debt or bad debt: Detecting semantic orientations in economic texts. Journal of the Association for Information Science and Technology
65
(4), 782–796 (2014)
[90]
Maple, C., Szpruch, L., Epiphaniou, G., Staykova, K., Singh, S., Penwarden, W., Wen, Y., Wang, Z., Hariharan, J., Avramovic, P.: The ai revolution: opportunities and challenges for the finance sector. arXiv preprint arXiv:2308.16538 (2023)
[91]
Mittal, A., Goel, A.: Stock prediction using twitter sentiment analysis. Standford University, CS229 (2011 http://cs229. stanford. edu/proj2011/GoelMittal-StockMarketPredictionUsingTwitterSentimentAnalysis. pdf)
15
,  2352 (2012)
[92]
Mohan, S., Mullapudi, S., Sammeta, S., Vijayvergia, P., Anastasiu, D.C.: Stock price prediction using news sentiment analysis. In: 2019 IEEE fifth international conference on big data computing service and applications (BigDataService). pp. 205–208. IEEE (2019)
[93]
Nasar, Z., Jaffry, S.W., Malik, M.K.: Named entity recognition and relation extraction: State-of-the-art. ACM Computing Surveys (CSUR)
54
(1), 1–39 (2021)
[94]
Nelson, B.K.: Time series analysis using autoregressive integrated moving average (arima) models. Academic emergency medicine
5
(7), 739–744 (1998)
[95]
Nguyen, T.H., Shirai, K., Velcin, J.: Sentiment analysis on social media for stock movement prediction. Expert Systems with Applications
42
(24), 9603–9611 (2015)
[96]
Nourallah, M.: One size does not fit all: Young retail investors’ initial trust in financial robo-advisors. Journal of Business Research
156
, 113470 (2023)
[97]
Orderud, F.: Comparison of kalman filter estimation approaches for state space models with nonlinear measurements. In: Proc. of Scandinavian Conference on Simulation and Modeling. pp. 1–8 (2005)
[98]
Paulson, F.L., et al.: What makes a portfolio a portfolio?. Educational leadership
48
(5), 60–63 (1991)
[99]
Radford, A., Narasimhan, K., Salimans, T., Sutskever, I., et al.: Improving language understanding by generative pre-training (2018)
[100]
Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., Sutskever, I., et al.: Language models are unsupervised multitask learners. OpenAI blog
1
(8),  9 (2019)
[101]
Radha, S., Thenmozhi, M.: Forecasting short term interest rates using arma, arma-garch and arma-egarch models. In: Indian Institute of Capital Markets 9th Capital Markets Conference Paper (2006)
[102]
Raffel, C., Shazeer, N., Roberts, A., Lee, K., Narang, S., Matena, M., Zhou, Y., Li, W., Liu, P.J.: Exploring the limits of transfer learning with a unified text-to-text transformer. The Journal of Machine Learning Research
21
(1), 5485–5551 (2020)
[103]
Rezayi, S., Dai, H., Liu, Z., Wu, Z., Hebbar, A., Burns, A.H., Zhao, L., Zhu, D., Li, Q., Liu, W., et al.: Clinicalradiobert: Knowledge-infused few shot learning for clinical notes named entity recognition. In: International Workshop on Machine Learning in Medical Imaging. pp. 269–278. Springer (2022)
[104]
Rezayi, S., Liu, Z., Wu, Z., Dhakal, C., Ge, B., Dai, H., Mai, G., Liu, N., Zhen, C., Liu, T., et al.: Exploring new frontiers in agricultural nlp: Investigating the potential of large language models for food applications. arXiv preprint arXiv:2306.11892 (2023)
[105]
Rezayi, S., Liu, Z., Wu, Z., Dhakal, C., Ge, B., Zhen, C., Liu, T., Li, S.: Agribert: knowledge-infused agricultural language models for matching food and nutrition. In: Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence. vol. 7, pp. 5150–5156 (2022)
[106]
Roy, A., Sun, J., Mahoney, R., Alonzi, L., Adams, S., Beling, P.: Deep learning detecting fraud in credit card transactions. In: 2018 systems and information engineering design symposium (SIEDS). pp. 129–134. IEEE (2018)
[107]
Scherer, B., Lehner, S.: Trust me, i am a robo-advisor. Journal of Asset Management
24
(2), 85–96 (2023)
[108]
Sert, O.C., Şahin, S.D., Özyer, T., Alhajj, R.: Analysis and prediction in sparse and high dimensional text data: The case of dow jones stock market. Physica A: Statistical Mechanics and its Applications
545
, 123752 (2020)
[109]
Shah, D., Isah, H., Zulkernine, F.: Predicting the effects of news sentiments on the stock market. In: 2018 IEEE International Conference on Big Data (Big Data). pp. 4705–4708. IEEE (2018)
[110]
Shah, R.S., Chawla, K., Eidnani, D., Shah, A., Du, W., Chava, S., Raman, N., Smiley, C., Chen, J., Yang, D.: When flue meets flang: Benchmarks and large pre-trained language model for financial domain. arXiv preprint arXiv:2211.00083 (2022)
[111]
Shi, Y., Xu, S., Liu, Z., Liu, T., Li, X., Liu, N.: Mededit: Model editing for medical question answering with external knowledge bases (2023)
[112]
Soun, Y., Yoo, J., Cho, M., Jeon, J., Kang, U.: Accurate stock movement prediction with self-supervised learning from sparse noisy tweets. In: 2022 IEEE International Conference on Big Data (Big Data). pp. 1691–1700. IEEE (2022)
[113]
Sun, L., Huang, Y., Wang, H., Wu, S., Zhang, Q., Gao, C., Huang, Y., Lyu, W., Zhang, Y., Li, X., et al.: Trustllm: Trustworthiness in large language models. arXiv preprint arXiv:2401.05561 (2024)
[114]
Tan, C., Cao, Q., Li, Y., Zhang, J., Yang, X., Zhao, H., Wu, Z., Liu, Z., Yang, H., Wu, N., et al.: On the promises and challenges of multimodal foundation models for geographical, environmental, agricultural, and urban planning applications. arXiv preprint arXiv:2312.17016 (2023)
[115]
Tang, C., Liu, Z., Ma, C., Wu, Z., Li, Y., Liu, W., Zhu, D., Li, Q., Li, X., Liu, T., Fan, L.: Policygpt: Automated analysis of privacy policies with large language models (2023)
[116]
Tang, R., Chuang, Y.N., Hu, X.: The science of detecting llm-generated texts. arXiv preprint arXiv:2303.07205 (2023)
[117]
Touvron, H., Lavril, T., Izacard, G., Martinet, X., Lachaux, M.A., Lacroix, T., Rozière, B., Goyal, N., Hambro, E., Azhar, F., et al.: Llama: Open and efficient foundation language models. arXiv preprint arXiv:2302.13971 (2023)
[118]
Usha, M., Devi, M.I.: Analysis of sentiments using unsupervised learning techniques. In: 2013 International Conference on Information Communication and Embedded Systems (ICICES). pp. 241–245. IEEE (2013)
[119]
Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, Ł., Polosukhin, I.: Attention is all you need. Advances in neural information processing systems
30
(2017)
[120]
Visintin, A., Conti, M.: Leveraging social networks for mergers and acquisitions forecasting. In: International Conference on Web Information Systems Engineering. pp. 144–159. Springer (2023)
[121]
Wang, J., Liu, Z., Zhao, L., Wu, Z., Ma, C., Yu, S., Dai, H., Yang, Q., Liu, Y., Zhang, S., Shi, E., Pan, Y., Zhang, T., Zhu, D., Li, X., Jiang, X., Ge, B., Yuan, Y., Shen, D., Liu, T., Zhang, S.: Review of large vision models and visual prompt engineering (2023)
[122]
Wang, J., Wu, Z., Li, Y., Jiang, H., Shu, P., Shi, E., Hu, H., Ma, C., Liu, Y., Wang, X., et al.: Large language models for robotics: Opportunities, challenges, and perspectives. arXiv preprint arXiv:2401.04334 (2024)
[123]
Wang, S., Yuan, H., Zhou, L., Ni, L.M., Shum, H.Y., Guo, J.: Alpha-gpt: Human-ai interactive alpha mining for quantitative investment (2023)
[124]
Wei, J., Wang, X., Schuurmans, D., Bosma, M., Xia, F., Chi, E., Le, Q.V., Zhou, D., et al.: Chain-of-thought prompting elicits reasoning in large language models. Advances in Neural Information Processing Systems
35
, 24824–24837 (2022)
[125]
Wu, S., Irsoy, O., Lu, S., Dabravolski, V., Dredze, M., Gehrmann, S., Kambadur, P., Rosenberg, D., Mann, G.: Bloomberggpt: A large language model for finance (2023)
[126]
Wu, T., He, S., Liu, J., Sun, S., Liu, K., Han, Q.L., Tang, Y.: A brief overview of chatgpt: The history, status quo and potential future development. IEEE/CAA Journal of Automatica Sinica
10
(5), 1122–1136 (2023)
[127]
Wu, Z., Zhang, L., Cao, C., Yu, X., Dai, H., Ma, C., Liu, Z., Zhao, L., Li, G., Liu, W., Li, Q., Shen, D., Li, X., Zhu, D., Liu, T.: Exploring the trade-offs: Unified large language models vs local fine-tuned models for highly-specific radiology nli task (2023)
[128]
Xie, Q., Han, W., Zhang, X., Lai, Y., Peng, M., Lopez-Lira, A., Huang, J.: Pixiu: A large language model, instruction data and evaluation benchmark for finance (2023)
[129]
Yang, H., Liu, X.Y., Wang, C.D.: Fingpt: Open-source financial large language models. arXiv preprint arXiv:2306.06031 (2023)
[130]
Yang, L., Ng, T.L.J., Smyth, B., Dong, R.: Fact check: Analyzing financial events from multilingual news sources. arXiv preprint arXiv:2106.15221 (2021)
[131]
Yang, Y., Uy, M.C.S., Huang, A.: Finbert: A pretrained language model for financial communications. arXiv preprint arXiv:2006.08097 (2020)
[132]
Yoon, S.: Design and implementation of an llm system to improve response time for smes technology credit evaluation. International journal of advanced smart convergence
12
(3), 51–60 (2023)
[133]
Yu, J.H., Kang, J., Park, S.: Information availability and return volatility in the bitcoin market: analyzing differences of user opinion and interest. Information Processing & Management
56
(3), 721–732 (2019)
[134]
Yu, X., Chen, Z., Ling, Y., Dong, S., Liu, Z., Lu, Y.: Temporal data meets llm – explainable financial time series forecasting (2023)
[135]
Yu, Y., Li, H., Chen, Z., Jiang, Y., Li, Y., Zhang, D., Liu, R., Suchow, J.W., Khashanah, K.: Finme: A performance-enhanced large language model trading agent with layered memory and character design. arXiv preprint arXiv:2311.13743 (2023)
[136]
Zhang, B., Yang, H., Zhou, T., Ali Babar, M., Liu, X.Y.: Enhancing financial sentiment analysis via retrieval augmented large language models. In: Proceedings of the Fourth ACM International Conference on AI in Finance. pp. 349–356 (2023)
[137]
Zhao, H., Ling, Q., Pan, Y., Zhong, T., Hu, J.Y., Yao, J., Xiao, F., Xiao, Z., Zhang, Y., Xu, S.H., et al.: Ophtha-llama2: A large language model for ophthalmology. arXiv preprint arXiv:2312.04906 (2023)
[138]
Zhao, L., Zhang, L., Wu, Z., Chen, Y., Dai, H., Yu, X., Liu, Z., Zhang, T., Hu, X., Jiang, X., et al.: When brain-inspired ai meets agi. Meta-Radiology p. 100005 (2023)
[139]
Zhao, L., Li, L., Zheng, X., Zhang, J.: A bert based sentiment analysis and key entity detection approach for online financial texts. In: 2021 IEEE 24th International Conference on Computer Supported Cooperative Work in Design (CSCWD). pp. 1233–1238. IEEE (2021)
[140]
Zhao, W.X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., et al.: A survey of large language models. arXiv preprint arXiv:2303.18223 (2023)
[141]
Zheng, W., Jin, M.: The effects of class imbalance and training data size on classifier learning: an empirical study. SN Computer Science
1
, 1–13 (2020)
[142]
Zheng, Z., Chen, K.Y., Cao, X.Y., Lu, X.Z., Lin, J.R.: Llm-funcmapper: Function identification for interpreting complex clauses in building codes via llm. arXiv preprint arXiv:2308.08728 (2023)
[143]
Zhong, T., Wei, Y., Yang, L., Wu, Z., Liu, Z., Wei, X., Li, W., Yao, J., Ma, C., Li, X., et al.: Chatabl: Abductive learning via natural language interaction with chatgpt. arXiv preprint arXiv:2304.11107 (2023)
[144]
Zhou, M., Liu, X., Liu, D., Wu, Z., Liu, Z., Zhao, L., Zhu, D., Guo, L., Han, J., Liu, T., et al.: Fine-grained artificial neurons in audio-transformers for disentangling neural auditory encoding. In: Findings of the Association for Computational Linguistics: ACL 2023. pp. 7943–7956 (2023)
[145]
Zivot, E., Wang, J.: Vector autoregressive models for multivariate time series. Modeling financial time series with S-PLUS® pp. 385–429 (2006)
[146]
Zumente, I., Lāce, N.: Esg rating—necessity for the investor or the company? sustainability, 13 (16), 8940 (2021)
Generated  on Mon Jan 22 01:06:11 2024 by
L
A
T
E
xml
