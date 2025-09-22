# Enabling AI to explain its predictions in plain language | MIT News | Massachusetts Institute of Technology

Enabling AI to explain its predictions in plain language | MIT News | Massachusetts Institute of Technology
Skip to content ↓
Massachusetts Institute of Technology
MIT Top
Menu
↓
Education
Research
Innovation
Admissions + Aid
Campus Life
News
Alumni
About MIT
More
↓
Search MIT
Search websites, locations, and people
See More Results
Suggestions or feedback?
MIT News | Massachusetts Institute of Technology
Subscribe
to MIT News newsletter
Browse
Enter keywords to search for news articles:
Submit
Browse By
Topics
View All
→
Explore:
Machine learning
Sustainability
Startups
Black holes
Classes and programs
Departments
View All
→
Explore:
Aeronautics and Astronautics
Brain and Cognitive Sciences
Architecture
Political Science
Mechanical Engineering
Centers, Labs, & Programs
View All
→
Explore:
Abdul Latif Jameel Poverty Action Lab (J-PAL)
Picower Institute for Learning and Memory
Media Lab
Lincoln Laboratory
Schools
School of Architecture + Planning
School of Engineering
School of Humanities, Arts, and Social Sciences
Sloan School of Management
School of Science
MIT Schwarzman College of Computing
View all news coverage of MIT in the media
→
Listen to audio content from MIT News
→
Subscribe to MIT newsletter
→
Close
Breadcrumb
MIT News
Enabling AI to explain its predictions in plain language
Enabling AI to explain its predictions in plain language
Using LLMs to convert machine-learning explanations into readable narratives could help users make better decisions about when to trust a model.
Adam Zewe
|
MIT News
Publication Date
:
December 10, 2024
Press Inquiries
Press Contact
:
Abby        

            Abazorius
Email:
abbya@mit.edu
Phone:
617-253-2709
MIT News Office
Media Download
↓
Download Image
Caption
:
MIT researchers developed a system that uses large language to convert AI explanations into narrative text that can be more easily understood by users.
Credits
:
Credit: Jose-Luis Olivares, MIT
*Terms of Use:
Images for download on the MIT News office website are made available to non-commercial entities, press and the general public under a
Creative Commons Attribution Non-Commercial No Derivatives license
.
    You may not alter the images provided, other than to crop them to size. A credit line must be used when reproducing images; if one is not provided 
    below, credit the images to "MIT."
Close
Caption
:
MIT researchers developed a system that uses large language to convert AI explanations into narrative text that can be more easily understood by users.
Credits
:
Credit: Jose-Luis Olivares, MIT
Previous image
Next image
Machine-learning models can make mistakes and be difficult to use, so scientists have developed explanation methods to help users understand when and how they should trust a model’s predictions.
These explanations are often complex, however, perhaps containing information about hundreds of model features. And they are sometimes presented as multifaceted visualizations that can be difficult for users who lack machine-learning expertise to fully comprehend.
To help people make sense of AI explanations, MIT researchers used large language models (LLMs) to transform plot-based explanations into plain language.
They developed a two-part system that converts a machine-learning explanation into a paragraph of human-readable text and then automatically evaluates the quality of the narrative, so an end-user knows whether to trust it.
By prompting the system with a few example explanations, the researchers can customize its narrative descriptions to meet the preferences of users or the requirements of specific applications.
In the long run, the researchers hope to build upon this technique by enabling users to ask a model follow-up questions about how it came up with predictions in real-world settings.
“Our goal with this research was to take the first step toward allowing users to have full-blown conversations with machine-learning models about the reasons they made certain predictions, so they can make better decisions about whether to listen to the model,” says Alexandra Zytek, an electrical engineering and computer science (EECS) graduate student and lead author of a
paper on this technique
.
She is joined on the paper by Sara Pido, an MIT postdoc; Sarah Alnegheimish, an EECS graduate student; Laure Berti-Équille, a research director at the French National Research Institute for Sustainable Development; and senior author Kalyan Veeramachaneni, a principal research scientist in the Laboratory for Information and Decision Systems. The research will be presented at the IEEE Big Data Conference.
Elucidating explanations
The researchers focused on a popular type of machine-learning explanation called SHAP. In a SHAP explanation, a value is assigned to every feature the model uses to make a prediction. For instance, if a model predicts house prices, one feature might be the location of the house. Location would be assigned a positive or negative value that represents how much that feature modified the model’s overall prediction.
Often, SHAP explanations are presented as bar plots that show which features are most or least important. But for a model with more than 100 features, that bar plot quickly becomes unwieldy.
“As researchers, we have to make a lot of choices about what we are going to present visually. If we choose to show only the top 10, people might wonder what happened to another feature that isn’t in the plot. Using natural language unburdens us from having to make those choices,” Veeramachaneni says.
However, rather than utilizing a large language model to generate an explanation in natural language, the researchers use the LLM to transform an existing SHAP explanation into a readable narrative.
By only having the LLM handle the natural language part of the process, it limits the opportunity to introduce inaccuracies into the explanation, Zytek explains.
Their system, called EXPLINGO, is divided into two pieces that work together.
The first component, called NARRATOR, uses an LLM to create narrative descriptions of SHAP explanations that meet user preferences. By initially feeding NARRATOR three to five written examples of narrative explanations, the LLM will mimic that style when generating text.
“Rather than having the user try to define what type of explanation they are looking for, it is easier to just have them write what they want to see,” says Zytek.
This allows NARRATOR to be easily customized for new use cases by showing it a different set of manually written examples.
After NARRATOR creates a plain-language explanation, the second component, GRADER, uses an LLM to rate the narrative on four metrics: conciseness, accuracy, completeness, and fluency. GRADER automatically prompts the LLM with the text from NARRATOR and the SHAP explanation it describes.
“We find that, even when an LLM makes a mistake doing a task, it often won’t make a mistake when checking or validating that task,” she says.
Users can also customize GRADER to give different weights to each metric.
“You could imagine, in a high-stakes case, weighting accuracy and completeness much higher than fluency, for example,” she adds.
Analyzing narratives
For Zytek and her colleagues, one of the biggest challenges was adjusting the LLM so it generated natural-sounding narratives. The more guidelines they added to control style, the more likely the LLM would introduce errors into the explanation.
“A lot of prompt tuning went into finding and fixing each mistake one at a time,” she says.
To test their system, the researchers took nine machine-learning datasets with explanations and had different users write narratives for each dataset. This allowed them to evaluate the ability of NARRATOR to mimic unique styles. They used GRADER to score each narrative explanation on all four metrics.
In the end, the researchers found that their system could generate high-quality narrative explanations and effectively mimic different writing styles.
Their results show that providing a few manually written example explanations greatly improves the narrative style. However, those examples must be written carefully — including comparative words, like “larger,” can cause GRADER to mark accurate explanations as incorrect.
Building on these results, the researchers want to explore techniques that could help their system better handle comparative words. They also want to expand EXPLINGO by adding rationalization to the explanations.
In the long run, they hope to use this work as a stepping stone toward an interactive system where the user can ask a model follow-up questions about an explanation.
“That would help with decision-making in a lot of ways. If people disagree with a model’s prediction, we want them to be able to quickly figure out if their intuition is correct, or if the model’s intuition is correct, and where that difference is coming from,” Zytek says.
Share
this news article on:
X
Facebook
LinkedIn
Reddit
Print
Paper
Paper: “Explingo: Explaining AI Predictions using Large Language Models”
Related Links
Data to AI Group
Kalyan Veeramachaneni
Laboratory for Information and Decision Systems
School of Engineering
MIT Schwarzman College of Computing
Related Topics
Research
Computer science and technology
Artificial intelligence
Machine learning
Human-computer interaction
Data
Laboratory for Information and Decision Systems (LIDS)
Electrical engineering and computer science (EECS)
School of Engineering
MIT Schwarzman College of Computing
Related Articles
Building explainability into the components of machine-learning models
Making machine learning more useful to high-stakes decision makers
In bias we trust?
How well do explanation methods for machine-learning models work?
Previous item
Next item
More MIT News
New self-assembling material could be the key to recyclable EV batteries
MIT researchers designed an electrolyte that can break apart at the end of a battery’s life, allowing for easier recycling of components.
Read full story
→
Why countries trade with each other while fighting
Mariya Grinberg’s new book, “Trade in War,” examines the curious phenomenon of economic trade during military conflict.
Read full story
→
Locally produced proteins help mitochondria function
Researchers developed an approach to study where proteins get made, and characterized proteins produced near mitochondria, gaining potential insights into mitochondrial function and disease.
Read full story
→
SHASS announces appointments of new program and section heads for 2025-26
Sandy Alexandre, Manduhai Buyandelger, and Eden Medina take on new leadership positions.
Read full story
→
Fikile Brushett named director of MIT chemical engineering practice school
Brushett leads one-of-its-kind program that has been a bridge between education and industry for over a century.
Read full story
→
New method could monitor corrosion and cracking in a nuclear reactor
By directly imaging material failure in 3D, this real-time technique could help scientists improve reactor safety and longevity.
Read full story
→
More news on MIT News homepage
→
More about MIT News at Massachusetts Institute of Technology
This website is managed by the MIT News Office, part of the
Institute Office of Communications
.
News by Schools/College:
School of Architecture and Planning
School of Engineering
School of Humanities, Arts, and Social Sciences
MIT Sloan School of Management
School of Science
MIT Schwarzman College of Computing
Resources:
About the MIT News Office
MIT News Press Center
Terms of Use
Press Inquiries
Filming Guidelines
RSS Feeds
Tools:
Subscribe to MIT Daily/Weekly
Subscribe to press releases
Submit campus news
Guidelines for campus news contributors
Guidelines on generative AI
Massachusetts Institute of Technology
MIT Top Level Links:
Education
Research
Innovation
Admissions + Aid
Campus Life
News
Alumni
About MIT
Join us in building a better world.
Massachusetts Institute of Technology
77 Massachusetts Avenue, Cambridge, MA, USA
Recommended Links:
Visit
Map
(opens in new window)
Events
(opens in new window)
People
(opens in new window)
Careers
(opens in new window)
Contact
Privacy
Accessibility
Social Media Hub
MIT on X
MIT on Facebook
MIT on YouTube
MIT on Instagram
