## Quantitative Developer Summer Analyst @ Credit Suisse

*May 2021 - July 2021*
### Company background
Global investment bank and financial services firm. 

I was part of the Advanced Execution Systems (AES) Quant team. The team focuses on utilizing Machine Learning
models to improve electronic trading performance.

### What I did

#### Model Status Dashboard 
Design and developed a model training status monitoring dashboard for production. 
The team uses cron jobs to extract data and train models. Statuses of these cron jobs are logged on production servers
and rarely accessed. Thus, when errors occur, the team is not notified. 

To improve monitoring capabilities, I built a full-stack application with **React** and **Flask** to allow the team to view the status of their cron jobs. 

#### Stock Regression Analysis
As we provide electronic trading services for external clients, we want to determine if the price movement is due to our order taking up too much liquidity, or is due to whole market movements. 

Using the market model concept, I used close price data for each stock, and regressed the stock returns against market returns to determine the Beta of that particular stock. Regression data will be used by the team to determine how unusual the price movements are.

I used **Pandas** for this project

#### Migration of integration testing files to Artifactory
Previously, certain files are hardcoded in the team's TeamCity build agent that is used in testing. This causes the project to be tightly coupled with the TeamCity build agent.

I published the files to Artifactory, then added the package as a **Maven** dependency for the project. This allows the project to pull the files at build time. This decoupled the build agent and the project, allowing the CI pipeline to be more robust.

## Full-stack software engineer intern @ CargoAi

*December 2020 - March 2021*
### Company background
Fully digital freight management platform that connects freight forwarders with more than 100 airlines worldwide.

### What I did

Selected to be part of SGInnovate's Infinity Series where I utilised **Angular**, **Java Spring Boot** to work on different parts of the web application. 

I migrated the application's legacy monolithic backend notification system to a more robust, scalable system. I implemented a pub/sub design pattern utilising AWS EventBridge and Simple Queue Service (SQS) to send notifications from the backend to both emails and mobile devices.

Using test-driven development (TDD), I ensured 80% code coverage for every feature and bug-fix. 

## Full-stack software engineer intern @ TRS Forensics

*May 2020 - August 2020*
### Company background
TRS is a financial forensics company that specializes in detecting financial crimes, corruption, cybersecurity breaches and control lapses.

### What I did

Utilised **Python Django, HTML, CSS** and **Javascript** to develop an internal project-tracking application. 

Reduced 5 man-hours weekly spent on slide deck creation through use of Python script. Made use of python-pptx to automate manual input of project details into a Powerpoint deck. 

Designed and implemented login pages, project dashboards and project details page using Figma.


## Backend software engineer  @ TheNightMrkt

*December 2019 - May 2020*
### Company background
TheNightMrkt is a startup comprising of students from the different universities in Singapore. The company serves as a matching platform between student freelancers and companies that want to outsource projects.

### What I did
Using **PHP Laravel**, I designed and built the backend application with 2 other software developers. 
