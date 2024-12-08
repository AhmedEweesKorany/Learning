Databases: Part 2

This section covers advanced AWS database services such as Amazon Redshift for data warehousing, Amazon EMR for big data processing, and Amazon Athena for running SQL queries on S3 data. You'll also explore Amazon Neptune for graph databases, Amazon Timestream for time series data, and Amazon Quantum Ledger Database (QLDB) for a verifiable transaction log. Furthermore, Amazon Managed Blockchain simplifies blockchain network management, and AWS Glue offers a fully managed ETL service. This section equips you with the knowledge to effectively utilize these advanced database solutions.

# **Databases: Non-Relational Databases**

## **Amazon Redshift**

- Redshift is based on PostgreSQL **but is not used for Online Transaction Processing (OLTP).**
    - Provides a SQL interface for performing queries.
- It is designed for **Online Analytical Processing (OLAP) - suitable for analytics and data warehousing.**
    - Typically, data is loaded once every hour, not every second.
- Offers **10x better performance than other data warehouses and can scale to petabytes of data.**
- Utilizes columnar storage of data, as opposed to row-based storage.
- Features Massively Parallel Query Execution (MPP) and is highly available.
- Pricing is based on a pay-as-you-go model, depending on the instances provisioned.
- Compatible with Business Intelligence (BI) tools such as AWS Quicksight or Tableau for data visualization and analysis.

### Amazon Redshift Serverless

- Automatically **provisions and scales the underlying capacity of the data warehouse.**
    
- Allows running **analytics workloads without managing data warehouse infrastructure.**
    
- Offers a pay-only-for-what-you-use pricing model, helping save costs.
    
- Use cases include reporting, dashboarding applications, and real-time analytics.
    

## **Amazon EMR (Elastic MapReduce)**

- A cloud **big data platform for processing massive amounts of data.**
- Supports open-source tools such as Apache Hadoop, Apache Spark, HBase, Flink, and Presto.
- Simplifies running big data frameworks for processing and analyzing large datasets.
- Designed to be cost-effective, scalable, and secure.
- Commonly used for data transformation, data processing, and data analytics tasks.
- Allows **quick setup and configuration of clusters of virtual servers for data processing.**
- Suitable for handling vast amounts of data efficiently.

## **Amazon Athena**

- **Serverless query service to analyze data stored in Amazon S3.**
    - Uses standard SQL language to query files.
- Supports formats such as CSV, JSON, ORC, Avro, and Parquet (built on Presto).
    - Pricing: $5.00 per TB of data scanned.
- Optimize cost by using compressed or columnar data formats (reduces data scanned).
- Use cases include **business intelligence, analytics, reporting, and analyzing logs such as VPC Flow Logs, ELB Logs, and CloudTrail trails.**

## **Amazon QuickSight**

- Serverless **machine learning-powered business intelligence service for creating interactive dashboards.**
    - Fast, automatically scalable, and embeddable, with per-session pricing.
- **Use cases include:**
    - Business analytics.
    - Building visualizations.
    - Performing ad-hoc analysis.
    - Gaining business insights using data.
- Integrated with various data sources such as RDS, Aurora, Athena, Redshift, and S3.

## **Amazon Neptune**

- Fully managed **graph database service.**
- Popular for datasets like **social networks, where users have friends, posts have comments, comments have likes from users, and users share and like posts.**
- Highly available across three Availability Zones (AZs), with up to 15 read replicas.
- Designed to build and run applications working with highly connected datasets, optimized for complex and challenging queries.
    - Capable of storing up to billions of relationships and querying the graph with millisecond latency.
    - Highly available with replications across multiple AZs.
- Great for use cases such as **knowledge graphs (like Wikipedia), fraud detection, recommendation engines, and social networking.**

## **Amazon TimeStream**

- Fully managed, fast, scalable, serverless **time series database.**
- Automatically scales up and down to adjust capacity as needed.Capable of storing and analyzing trillions of events per day.
- Offers performance that is 1000s of times faster and costs 1/10th that of traditional relational databases.
- Provides **built-in time series analytics functions to help identify patterns in data in near real-time.**

## **Amazon Quantum Ledger Database (QLDB)**

- **Amazon Quantum Ledger Database (Amazon QLDB) designed to record financial transactions in a transparent, immutable, and cryptographically verifiable manner.**
- Fully managed, serverless, highly available, with replication across three Availability Zones (AZs).
- Used to **review the history of all changes made to your application data over time.**
- Immutable system: no entry can be removed or modified, ensuring data integrity.
- Offers 2-3x better performance than common ledger blockchain frameworks and allows data manipulation using SQL.
- Difference with Amazon Managed Blockchain: QLDB does not have a decentralization component and is designed to comply with financial regulation rules.

## **Amazon Managed BlockChain**

- **Blockchain Technology:**
    - Enables the **development of applications where multiple parties can execute transactions without requiring a trusted, central authority.**
- **Amazon Managed Blockchain:**
    - A managed service that allows you to:
        - Join public blockchain networks.
        - Create your own scalable private network.
        - Compatible with blockchain frameworks Hyperledger Fabric and Ethereum.

## **AWS Glue**

- Managed database to **extract, transform, and load (ETL) service.**
- Useful for preparing and transforming data for analytics.
- Fully serverless service.