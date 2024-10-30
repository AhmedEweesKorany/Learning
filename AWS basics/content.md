# Manara Platform

## 1-Module 3 


### 1.1-AWS Well-Architected Framwork:

- help u to tackle and prevent common cloud computing challenges 
- it's a set of strategies and guidelines of designing and running workloads in the cloud created by AWS and help to build resilient ,scalable and secure architecture 
- provide an approach for customers to evaluate their architecture 


### 1.2- important of AWS Well-Architected Framework:
- to be ready for sudden challenges of infrastructure or sudden traffic which lead to system crashes and unhappy customers and bad reputation.
### 1.3- Pillars of the Framework:
- **security** : focuses on protection of your data ,systems and assets and ensure confidentiality of data , identity and access management and controls to detecting security threads 
- **cost-optimizations** : avoiding unnecessary costs , using right types of resources , making cost-effective decisions over long term
- **performance-efficiency** : using computing resources efficiently ,  maintaining the efficiency as demand changes and technologies evolve.
- **sustainability**: minimizing environmental impact of running clouds workloads   
--------- most important two pillars --------------
- **reliability**: ability of the system to recover form disruptions dynamically meet demands and mitigate disruptions   
- **operational excellence** : running  and monitoring systems to deliver business value and continuity. to make sure we have a system which not just efficient and reliable but also improves over time.
#### design principles for operational excellence :
- **perform operations as code** : by thinking of your entire workload as a piece of software and by abstract operations into script and make those scripts automatable to reduce human mistakes .
- **make frequent , small and reversible changes** : by making changes in small steps that can be undone if needed which help u to deal with issues quickly and do not affect on ur customers 
-  **refine operational procedures frequently**: as a workloads evolves your procedures should evolves also . and also to be always on lookout for ways to refine and streamline your operations. 
- **Anticipate Failure**: by identifying failures before they occurs , regularly testing theses scenarios to ensure every thing is up to date . 
- **Learn From Operational Failures**: consider every failure is a learning opportunity and use them as motivation to be stronger .
#### design principles for Reliability Pillar :

- **Automatically Recover From Failure** : by monitor important matrices closely , use automation to fix issues as soon as they occur which make your system automatically backs when something goes wrong.
- **Test Recovery Procedures:** by Actively test how system handles failures and use automation to handle different failures scenarios 
- **Horizontally Scale To Increase Aggregate Workload Availability:** which allow us to spread our workloads across multiple small resources so when any one fails it won't shutdown everything.
- Stop Guessing Capacity: by monitor how much our systems are being used and adjust our resources accordingly to this measurement. to have resources as much as we need ... no more no less --_--
- Manage Changes Through Automation: to automate changes of our infrastructure to ensure consistent and smooth running results . 

## summary of what i studied until now : 
- **Introduction to AWS:** AWS (Amazon Web Services) is a comprehensive cloud computing platform offering a wide range of services for storage, computing, networking, and more.
- - **What Cloud Computing Is:** Cloud computing is the delivery of computing services over the internet, allowing for on-demand resource access, scalability, and cost efficiency.
- - **5 Characteristics of Cloud Computing:** Cloud computing is characterized by on-demand self-service, broad network access, multi-tenancy and resource pooling, rapid elasticity and scalability, and measured service.
- **Why We Should Use Cloud Computing:** Cloud computing offers scalability, flexibility, cost savings, and the ability to focus on core business activities, making it an attractive choice for businesses.
- **6 Advantages of Cloud Computing:** Trade capital expenses for operational expenses, benefit from massive economies of scale, stop guessing capacity, increase speed and agility, stop spending money running and maintaining data centers, and go global in minutes.
- **Deploying cloud computing:** involves setting up and managing cloud-based resources to deliver computing services over the internet through public, private, and hybrid cloud platforms.
- **Models of cloud computing:** Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), each offering different levels of control and management.
- **AWS Global Infrastructure:** Availability Zones, Regions, and AWS Data Centers are part of AWS's global infrastructure, providing high availability, low latency, and geographic diversity to support resilient and efficient cloud services.
- **AWS pricing models:** based on paying as you use services or data, saving when you reserve, paying less by using volume discounts AWS provides, and paying less as AWS infrastructure grows.