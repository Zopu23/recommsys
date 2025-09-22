# GitHub - AI4Finance-Foundation/FinGPT: FinGPT: Open-Source Financial Large Language Models!  Revolutionize 🔥    We release the trained model on HuggingFace.

GitHub - AI4Finance-Foundation/FinGPT: FinGPT: Open-Source Financial Large Language Models!  Revolutionize 🔥    We release the trained model on HuggingFace.
Skip to content
Navigation Menu
Toggle navigation
Sign in
Appearance settings
Platform
GitHub Copilot
Write better code with AI
GitHub Spark
New
Build and deploy intelligent apps
GitHub Models
New
Manage and compare prompts
GitHub Advanced Security
Find and fix vulnerabilities
Actions
Automate any workflow
Codespaces
Instant dev environments
Issues
Plan and track work
Code Review
Manage code changes
Discussions
Collaborate outside of code
Code Search
Find more, search less
Explore
Why GitHub
All features
Documentation
GitHub Skills
Blog
Solutions
By company size
Enterprises
Small and medium teams
Startups
Nonprofits
By use case
DevSecOps
DevOps
CI/CD
View all use cases
By industry
Healthcare
Financial services
Manufacturing
Government
View all industries
View all solutions
Resources
Topics
AI
DevOps
Security
Software Development
View all
Explore
Learning Pathways
Events & Webinars
Ebooks & Whitepapers
Customer Stories
Partners
Executive Insights
Open Source
GitHub Sponsors
Fund open source developers
The ReadME Project
GitHub community articles
Repositories
Topics
Trending
Collections
Enterprise
Enterprise platform
AI-powered developer platform
Available add-ons
GitHub Advanced Security
Enterprise-grade security features
Copilot for business
Enterprise-grade AI features
Premium Support
Enterprise-grade 24/7 support
Pricing
Search or jump to...
Search code, repositories, users, issues, pull requests...
Search
Clear
Search syntax tips
Provide feedback
We read every piece of feedback, and take your input very seriously.
Include my email address so I can be contacted
Cancel
Submit feedback
Saved searches
Use saved searches to filter your results more quickly
Name
Query
To see all available qualifiers, see our
documentation
.
Cancel
Create saved search
Sign in
Sign up
Appearance settings
Resetting focus
You signed in with another tab or window.
Reload
to refresh your session.
You signed out in another tab or window.
Reload
to refresh your session.
You switched accounts on another tab or window.
Reload
to refresh your session.
Dismiss alert
AI4Finance-Foundation
/
FinGPT
Public template
Uh oh!
There was an error while loading.
Please reload this page
.
Notifications
You must be signed in to change notification settings
Fork
2.5k
Star
17.1k
FinGPT: Open-Source Financial Large Language Models! Revolutionize 🔥 We release the trained model on HuggingFace.
ai4finance.org
License
MIT license
17.1k
stars
2.5k
forks
Branches
Tags
Activity
Star
Notifications
You must be signed in to change notification settings
Code
Issues
73
Pull requests
6
Discussions
Actions
Projects
0
Security
Uh oh!
There was an error while loading.
Please reload this page
.
Insights
Additional navigation options
Code
Issues
Pull requests
Discussions
Actions
Projects
Security
Insights
AI4Finance-Foundation/FinGPT
master
Branches
Tags
Go to file
Code
Open more actions menu
Folders and files
Name
Name
Last commit message
Last commit date
Latest commit
History
650 Commits
.github
.github
.idea
.idea
figs
figs
fingpt
fingpt
.gitignore
.gitignore
.gitpod.yml
.gitpod.yml
CODE_OF_CONDUCT.md
CODE_OF_CONDUCT.md
CONTRIBUTING.md
CONTRIBUTING.md
FinGPT_ Training with LoRA and Meta-Llama-3-8B.ipynb
FinGPT_ Training with LoRA and Meta-Llama-3-8B.ipynb
FinGPT_Inference_Llama2_13B_falcon_7B_for_Beginners.ipynb
FinGPT_Inference_Llama2_13B_falcon_7B_for_Beginners.ipynb
FinGPT_Training_LoRA_with_ChatGLM2_6B_for_Beginners.ipynb
FinGPT_Training_LoRA_with_ChatGLM2_6B_for_Beginners.ipynb
FinGPT_Training_LoRA_with_ChatGLM2_6B_for_Beginners_v2-2.ipynb
FinGPT_Training_LoRA_with_ChatGLM2_6B_for_Beginners_v2-2.ipynb
LICENSE
LICENSE
MANIFEST.in
MANIFEST.in
README.md
README.md
requirements.txt
requirements.txt
setup.py
setup.py
View all files
Repository files navigation
README
Code of conduct
Contributing
MIT license
FinGPT: Open-Source Financial Large Language Models
Let us not expect Wall Street to open-source LLMs or open APIs, due to FinTech institutes' internal regulations and policies.
Blueprint of FinGPT
https://huggingface.co/FinGPT
What's New:
[Model Release] Nov, 2023: We release
FinGPT-Forecaster
!  🔥
Demo
,
Medium Blog
&
Model
are available on Huggingface🤗!
[Paper Acceptance] Oct, 2023:
"FinGPT: Instruction Tuning Benchmark for Open-Source Large Language Models in Financial Datasets"
is accepted🎉 by
Instruction Workshop
@ NeurIPS 2023
[Paper Acceptance] Oct, 2023:
"FinGPT: Democratizing Internet-scale Data for Financial Large Language Models"
is accepted🎉 by
Instruction Workshop
@ NeurIPS 2023
[Model Release] Oct, 2023: We release the
financial multi-task LLMs
🔥 produced when evaluating base-LLMs on
FinGPT-Benchmark
[Paper Acceptance] Sep, 2023:
"Enhancing Financial Sentiment Analysis via Retrieval Augmented Large Language Models"
is accepted🎉 by
ACM International Conference on AI in Finance (ICAIF-23)
[Model Release] Aug, 2023: We release the
financial sentiment analysis model
🔥
[Paper Acceptance] Jul, 2023:
"Instruct-FinGPT: Financial Sentiment Analysis by Instruction Tuning of General-Purpose Large Language Models"
is accepted🎉 by
FinLLM 2023
@IJCAI 2023
[Paper Acceptance] Jul, 2023:
"FinGPT: Open-Source Financial Large Language Models"
is accepted🎉 by
FinLLM 2023
@IJCAI 2023
[Medium Blog] Jun 2023:
FinGPT: Powering the Future of Finance with 20 Cutting-Edge Applications
Why FinGPT?
1). Finance is highly dynamic.
BloombergGPT
trained an LLM using a mixture of finance data and general-purpose data, which took about 53 days, at a cost of around
$3M
). It is costly to retrain an LLM model like BloombergGPT every month or every week, thus lightweight adaptation is highly favorable. FinGPT can be fine-tuned swiftly to incorporate new data (the cost falls significantly, less than
$300 per fine-tuning
).
2). Democratizing Internet-scale financial data is critical, say allowing timely updates of the model (monthly or weekly updates) using an automatic data curation pipeline.  BloombergGPT has privileged data access and APIs, while FinGPT presents a more accessible alternative. It prioritizes lightweight adaptation, leveraging the best available open-source LLMs.
3). The key technology is "RLHF (Reinforcement learning from human feedback)", which is missing in BloombergGPT. RLHF enables an LLM model to learn individual preferences (risk-aversion level, investing habits, personalized robo-advisor, etc.), which is the "secret" ingredient of ChatGPT and GPT4.
Milestone of AI Robo-Advisor: FinGPT-Forecaster
Try the latest released FinGPT-Forecaster demo at our
HuggingFace Space
The dataset for FinGPT-Forecaster:
https://huggingface.co/datasets/FinGPT/fingpt-forecaster-dow30-202305-202405
Enter the following inputs:
ticker symbol (e.g. AAPL, MSFT, NVDA)
the day from which you want the prediction to happen (yyyy-mm-dd)
the number of past weeks where market news are retrieved
whether to add the latest basic financials as additional information
Click Submit！ And you'll be responded with a well-rounded analysis of the company and a prediction for next week's stock price movement!
For detailed and more customized implementation, please refer to
FinGPT-Forecaster
FinGPT Demos:
Current State-of-the-arts for Financial Sentiment Analysis
FinGPT V3 (Updated on 10/12/2023)
What's new:
Best trainable and inferable FinGPT for sentiment analysis on a single RTX 3090, which is even better than GPT-4 and ChatGPT Finetuning.
FinGPT v3
series are LLMs finetuned with the LoRA method on the News and Tweets sentiment analysis dataset which achieve the best scores on most of the financial sentiment analysis datasets with low cost.
FinGPT v3.3 use llama2-13b as base model; FinGPT v3.2 uses llama2-7b as base model; FinGPT v3.1 uses chatglm2-6B as base model.
Benchmark Results:
Weighted F1
FPB
FiQA-SA
TFNS
NWGI
Devices
Time
Cost
FinGPT v3.3
0.882
0.874
0.903
0.643
1 × RTX 3090
17.25 hours
$17.25
FinGPT v3.2
0.850
0.860
0.894
0.636
1 × A100
5.5 hours
$ 22.55
FinGPT v3.1
0.855
0.850
0.875
0.642
1 × A100
5.5 hours
$ 22.55
FinGPT (8bit)
0.855
0.847
0.879
0.632
1 × RTX 3090
6.47 hours
$ 6.47
FinGPT (QLoRA)
0.777
0.752
0.828
0.583
1 × RTX 3090
4.15 hours
$ 4.15
OpenAI Fine-tune
0.878
0.887
0.883
-
-
-
-
GPT-4
0.833
0.630
0.808
-
-
-
-
FinBERT
0.880
0.596
0.733
0.538
4 × NVIDIA K80 GPU
-
-
Llama2-7B
0.390
0.800
0.296
0.503
2048 × A100
21 days
$ 4.23 million
BloombergGPT
0.511
0.751
-
-
512 × A100
53 days
$ 2.67 million
Cost per GPU hour.
For
A100 GPUs
, the AWS p4d.24xlarge instance, equipped with 8 A100 GPUs is used as a benchmark to estimate the costs. Note that BloombergGPT also used p4d.24xlarge As of July 11, 2023, the hourly rate for this instance stands at $32.773. Consequently, the estimated cost per GPU hour comes to $32.77 divided by 8, resulting in approximately
$4.10
. With this value as the reference unit price (1 GPU hour).
BloombergGPT estimated cost= 512 x 53 x 24 = 651,264 GPU hours x $4.10 = $2,670,182.40
. For
RTX 3090
, we assume its cost per hour is approximately
$1.0
, which is actually much higher than available GPUs from platforms like vast.ai.
Reproduce the results by running
benchmarks
, and the detailed tutorial is on the way.
Finetune your own FinGPT v3 model with the LoRA method on only an RTX 3090 with this
notebook
in 8bit or this
notebook
in int4 (QLoRA)
FinGPT V1
FinGPT by finetuning ChatGLM2 / Llama2 with LoRA with the market-labeled data for the Chinese Market
Instruction Tuning Datasets and Models
The datasets we used, and the
multi-task financial LLM
models are available at
https://huggingface.co/FinGPT
Our Code
Datasets
Train Rows
Test Rows
Description
fingpt-sentiment-train
76.8K
N/A
Sentiment Analysis Training Instructions
fingpt-finred
27.6k
5.11k
Financial Relation Extraction Instructions
fingpt-headline
82.2k
20.5k
Financial Headline Analysis Instructions
fingpt-ner
511
98
Financial Named-Entity Recognition Instructions
fingpt-fiqa_qa
17.1k
N/A
Financial Q&A Instructions
fingpt-fineval
1.06k
265
Chinese Multiple-Choice Questions Instructions
Multi-task financial LLMs Models:
demo_tasks
=
[
'Financial Sentiment Analysis'
,
'Financial Relation Extraction'
,
'Financial Headline Classification'
,
'Financial Named Entity Recognition'
,]
demo_inputs
=
[
"Glaxo's ViiV Healthcare Signs China Manufacturing Deal With Desano"
,
"Apple Inc. Chief Executive Steve Jobs sought to soothe investor concerns about his health on Monday, saying his weight loss was caused by a hormone imbalance that is relatively simple to treat."
,
'gold trades in red in early trade; eyes near-term range at rs 28,300-28,600'
,
'This LOAN AND SECURITY AGREEMENT dated January 27 , 1999 , between SILICON VALLEY BANK (" Bank "), a California - chartered bank with its principal place of business at 3003 Tasman Drive , Santa Clara , California 95054 with a loan production office located at 40 William St ., Ste .'
,]
demo_instructions
=
[
'What is the sentiment of this news? Please choose an answer from {negative/neutral/positive}.'
,
'Given phrases that describe the relationship between two words/phrases as options, extract the word/phrase pair and the corresponding lexical relationship between them from the input text. The output format should be "relation1: word1, word2; relation2: word3, word4". Options: product/material produced, manufacturer, distributed by, industry, position held, original broadcaster, owned by, founded by, distribution format, headquarters location, stock exchange, currency, parent organization, chief executive officer, director/manager, owner of, operator, member of, employer, chairperson, platform, subsidiary, legal form, publisher, developer, brand, business division, location of formation, creator.'
,
'Does the news headline talk about price going up? Please choose an answer from {Yes/No}.'
,
'Please extract entities and their types from the input sentence, entity types should be chosen from {person/organization/location}.'
,]
Models
Description
Function
fingpt-mt_llama2-7b_lora
Fine-tuned Llama2-7b model with LoRA
Multi-Task
fingpt-mt_falcon-7b_lora
Fine-tuned falcon-7b model with LoRA
Multi-Task
fingpt-mt_bloom-7b1_lora
Fine-tuned bloom-7b1 model with LoRA
Multi-Task
fingpt-mt_mpt-7b_lora
Fine-tuned mpt-7b model with LoRA
Multi-Task
fingpt-mt_chatglm2-6b_lora
Fine-tuned chatglm-6b model with LoRA
Multi-Task
fingpt-mt_qwen-7b_lora
Fine-tuned qwen-7b model with LoRA
Multi-Task
fingpt-sentiment_llama2-13b_lora
Fine-tuned llama2-13b model with LoRA
Single-Task
fingpt-forecaster_dow30_llama2-7b_lora
Fine-tuned llama2-7b model with LoRA
Single-Task
Tutorials
[Training] Beginner’s Guide to FinGPT: Training with LoRA and ChatGLM2–6B One Notebook, $10 GPU
Understanding FinGPT: An Educational Blog Series
FinGPT: Powering the Future of Finance with 20 Cutting-Edge Applications
FinGPT I: Why We Built the First Open-Source Large Language Model for Finance
FinGPT II: Cracking the Financial Sentiment Analysis Task Using Instruction Tuning of General-Purpose Large Language Models
FinGPT Ecosystem
FinGPT embraces a full-stack framework for FinLLMs with five layers:
Data source layer
: This layer assures comprehensive market coverage, addressing the temporal sensitivity of financial data through real-time information capture.
Data engineering layer
: Primed for real-time NLP data processing, this layer tackles the inherent challenges of high temporal sensitivity and low signal-to-noise ratio in financial data.
LLMs layer
: Focusing on a range of fine-tuning methodologies such as LoRA, this layer mitigates the highly dynamic nature of financial data, ensuring the model’s relevance and accuracy.
Task layer
: This layer is responsible for executing fundamental tasks. These tasks serve as the benchmarks for performance evaluations and cross-comparisons in the realm of FinLLMs
Application layer
: Showcasing practical applications and demos, this layer highlights the potential capability of FinGPT in the financial sector.
FinGPT Framework: Open-Source Financial Large Language Models
FinGPT-RAG
: We present a retrieval-augmented large language model framework specifically designed for financial sentiment analysis, optimizing information depth and context through external knowledge retrieval, thereby ensuring nuanced predictions.
FinGPT-FinNLP
: FinNLP provides a playground for all people interested in LLMs and NLP in Finance. Here we provide full pipelines for LLM training and finetuning in the field of finance. The full architecture is shown in the following picture. Detail codes and introductions can be found
here
. Or you may refer to the
wiki
FinGPT-Benchmark
: We introduce a novel Instruction Tuning paradigm optimized for open-source Large Language Models (LLMs) in finance, enhancing their adaptability to diverse financial datasets while also facilitating cost-effective, systematic benchmarking from task-specific, multi-task, and zero-shot instruction tuning tasks.
Open-Source Base Model used in the LLMs layer of FinGPT
Feel free to contribute more open-source base models tailored for various language-specific financial markets.
Base Model
Pretraining Tokens
Context Length
Model Advantages
Model Size
Experiment Results
Applications
Llama-2
2 Trillion
4096
Llama-2 excels on English-based market data
llama-2-7b
and
Llama-2-13b
llama-2 consistently shows superior fine-tuning results
Financial Sentiment Analysis, Robo-Advisor
Falcon
1,500B
2048
Maintains high-quality results while being more resource-efficient
falcon-7b
Good for English market data
Financial Sentiment Analysis
MPT
1T
2048
MPT models can be trained with high throughput efficiency and stable convergence
mpt-7b
Good for English market data
Financial Sentiment Analysis
Bloom
366B
2048
World’s largest open multilingual language model
bloom-7b1
Good for English market data
Financial Sentiment Analysis
ChatGLM2
1.4T
32K
Exceptional capability for Chinese language expression
chatglm2-6b
Shows prowess for Chinese market data
Financial Sentiment Analysis, Financial Report Summary
Qwen
2.2T
8k
Fast response and high accuracy
qwen-7b
Effective for Chinese market data
Financial Sentiment Analysis
InternLM
1.8T
8k
Can flexibly and independently construct workflows
internlm-7b
Effective for Chinese market data
Financial Sentiment Analysis
Benchmark Results for the above open-source Base Models in the financial sentiment analysis task using the same instruction template for SFT (LoRA):
Weighted F1/Acc
Llama2
Falcon
MPT
Bloom
ChatGLM2
Qwen
InternLM
FPB
0.863/0.863
0.846/0.849
0.872
/
0.872
0.810/0.810
0.850/0.849
0.854/0.854
0.709/0.714
FiQA-SA
0.871
/0.855
0.840/0.811
0.863/0.844
0.771/0.753
0.864/
0.862
0.867/0.851
0.679/0.687
TFNS
0.896/0.895
0.893/0.893
0.907
/
0.907
0.840/0.840
0.859/0.858
0.883/0.882
0.729/0.731
NWGI
0.649/0.651
0.636/0.638
0.640/0.641
0.573/0.574
0.619/0.629
0.638/0.643
0.498/0.503
All Thanks To Our Contributors :
News
Columbia Perspectives on ChatGPT
[MIT Technology Review]
ChatGPT is about to revolutionize the economy. We need to decide what that looks like
[BloombergGPT]
BloombergGPT: A Large Language Model for Finance
[Finextra]
ChatGPT and Bing AI to sit as panellists at fintech conference
ChatGPT at AI4Finance
[YouTube video]
I Built a Trading Bot with ChatGPT
, combining ChatGPT and FinRL.
Hey, ChatGPT! Explain FinRL code to me!
Introductory
Sparks of artificial general intelligence: Early experiments with GPT-4
[GPT-4]
GPT-4 Technical Report
[InstructGPT]
Training language models to follow instructions with human feedback
NeurIPS 2022.
The Journey of Open AI GPT models
.  GPT models explained. Open AI's GPT-1, GPT-2, GPT-3.
[GPT-3]
Language models are few-shot learners
NeurIPS 2020.
[GPT-2]
Language Models are Unsupervised Multitask Learners
[GPT-1]
Improving Language Understanding by Generative Pre-Training
[Transformer]
Attention is All you Need
NeurIPS 2017.
(Financial) Big Data
[BloombergGPT]
BloombergGPT: A Large Language Model for Finance
WHAT’S IN MY AI?
A Comprehensive Analysis of Datasets Used to Train GPT-1, GPT-2, GPT-3, GPT-NeoX-20B, Megatron-11B, MT-NLG, and Gopher
FinRL-Meta Repo
and paper
FinRL-Meta: Market Environments and Benchmarks for Data-Driven Financial Reinforcement Learning
. Advances in Neural Information Processing Systems, 2022.
[AI4Finance]
FinNLP
Democratizing Internet-scale financial data.
Interesting Demos
GPT-3 Creative Fiction
Creative writing by OpenAI’s GPT-3 model, demonstrating poetry, dialogue, puns, literary parodies, and storytelling. Plus advice on effective GPT-3 prompt programming & avoiding common errors.
ChatGPT for FinTech
ChatGPT Trading Bot
[YouTube video]
ChatGPT Trading strategy 20097% returns
[YouTube video]
ChatGPT Coding - Make A Profitable Trading Strategy In Five Minutes!
[YouTube video]
Easy Automated Live Trading using ChatGPT (+9660.3% hands free)
[YouTube video]
ChatGPT Trading Strategy 893% Returns
[YouTube video]
ChatGPT 10 Million Trading Strategy
[YouTube video]
ChatGPT: Your Crypto Assistant
[YouTube video]
Generate Insane Trading Returns with ChatGPT and TradingView
Citing FinGPT
@article{yang2023fingpt,
  title={FinGPT: Open-Source Financial Large Language Models},
  author={Yang, Hongyang and Liu, Xiao-Yang and Wang, Christina Dan},
  journal={FinLLM Symposium at IJCAI 2023},
  year={2023}
}
@article{zhang2023instructfingpt,
      title={Instruct-FinGPT: Financial Sentiment Analysis by Instruction Tuning of General-Purpose Large Language Models}, 
      author={Boyu Zhang and Hongyang Yang and Xiao-Yang Liu},
      journal={FinLLM Symposium at IJCAI 2023},
      year={2023}
}
@article{zhang2023fingptrag,
  title={Enhancing Financial Sentiment Analysis via Retrieval Augmented Large Language Models},
  author={Zhang, Boyu and Yang, Hongyang and Zhou, tianyu and Babar, Ali and Liu, Xiao-Yang},
 journal = {ACM International Conference on AI in Finance (ICAIF)},
  year={2023}
}

@article{wang2023fingptbenchmark,
  title={FinGPT: Instruction Tuning Benchmark for Open-Source Large Language Models in Financial Datasets},
  author={Wang, Neng and Yang, Hongyang and Wang, Christina Dan},
  journal={NeurIPS Workshop on Instruction Tuning and Instruction Following},
  year={2023}
}
@article{2023finnlp,
  title={Data-centric FinGPT: Democratizing Internet-scale Data for Financial Large Language Models},
  author={Liu, Xiao-Yang and Wang, Guoxuan and Yang, Hongyang and Zha, Daochen},
  journal={NeurIPS Workshop on Instruction Tuning and Instruction Following},
  year={2023}
}
LICENSE
MIT License
Disclaimer: We are sharing codes for academic purposes under the MIT education license. Nothing herein is financial advice, and NOT a recommendation to trade real money. Please use common sense and always first consult a professional before trading or investing.
About
FinGPT: Open-Source Financial Large Language Models! Revolutionize 🔥 We release the trained model on HuggingFace.
ai4finance.org
Topics
nlp
finance
machine-learning
reinforcement-learning
sentiment-analysis
pytorch
fintech
technical-analysis
robo-advisor
large-language-models
prompt-engineering
chatgpt
fingpt
Resources
Readme
License
MIT license
Code of conduct
Code of conduct
Contributing
Contributing
Uh oh!
There was an error while loading.
Please reload this page
.
Activity
Custom properties
Stars
17.1k
stars
Watchers
296
watching
Forks
2.5k
forks
Report repository
Releases
No releases published
Sponsor this project
Uh oh!
There was an error while loading.
Please reload this page
.
paypal.me/Hongyang
Packages
0
No packages published
Uh oh!
There was an error while loading.
Please reload this page
.
Contributors
31
Uh oh!
There was an error while loading.
Please reload this page
.
+ 17 contributors
Languages
Jupyter Notebook
88.1%
Python
11.3%
Other
0.6%
Footer
© 2025 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
You can’t perform that action at this time.
