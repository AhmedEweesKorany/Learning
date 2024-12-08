

AWS Databases: Introduction

This section provides a comprehensive introduction to various database services available in AWS, highlighting their features, use cases, and benefits.

## Why do we need databases?

- Sometimes, you want to store a lot of or highly complex data
    - Storing it on a disk, like some of the storage options AWS offers can have it’s limitations
- So, we use databases. Databases allow for:
    - **Structuring the data**
    - **Building indexes so you can efficiently search through your data**
    - **Defining relationships between your data which allows you to hold more complex relationships with all your datasets.**
- Databases are designed with specific optimizations tailored to different use cases, offering varying features, structures, and limitations. (which you will need to know for the exam!)
- The main databases we will be covering for the **AWS Cloud Computing Practitioner fall under relational and non-relational database categories**

## The difference between relational and non-relational databases

🟢 Relational Databases

1. **Structure**: Data stored in tables with rows and columns.
2. **Schema**: Fixed schema with predefined structure.
3. **Relationships**: Supports complex relationships using foreign keys.
4. **Query Language**: Uses SQL.
5. **Examples in AWS**: Amazon RDS (supports MySQL, PostgreSQL, Oracle, SQL Server).

🟠 Non-Relational Databases

1. **Structure**: Data stored in various formats like key-value pairs, documents, or graphs.
2. **Schema**: Dynamic schema allowing flexibility.
3. **Relationships**: Generally does not enforce relationships; handles large volumes of unstructured data.
4. **Query Language**: Various, depending on type (e.g., MongoDB, Cassandra).
5. **Examples in AWS**: Amazon DynamoDB (key-value store), Amazon DocumentDB (document store), Amazon Neptune (graph database).
---
Databases: Part 1

In this section, you'll explore AWS database services including Amazon RDS and Amazon Aurora, which offer managed relational databases with automated administration tasks and high performance. You'll also dive into NoSQL options like Amazon DynamoDB for scalable, low-latency applications, and Amazon DocumentDB for managing JSON data. Additionally, you'll learn about Amazon ElastiCache for in-memory caching with Redis and Memcached, and DynamoDB Accelerator (DAX) for enhancing DynamoDB read performance.

# **Databases: Relational Databases**

## **Amazon RDS**

- **Managed** database service employing SQL for queries
- Enables creation of cloud databases managed by AWS
- **Supports various SQL-based databases:**
    - PostgreSQL
    - MySQL
    - MariaDB
    - Oracle
    - Microsoft SQL Server
    - IBM DB2
    - Aurora (AWS proprietary database)

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719941018-2A9CD93DC68B764F.png)

### **Amazon RDS Deployments**

1. **Read Replicas**
    
    - Up to 15 Read Replicas supported
    - Distribute read queries across replicas
    - Primary database handles all writes
    - Asynchronous replication from primary
    - Enhances performance and responsiveness
2. **Multi-AZ**
    
    - Failover for High Availability - activates during an Availability Zone outage, ensures continuous database service
    - Main database handles all read/write operations
    - Limited to one alternative Availability Zone for failover
3. **Multi-Region (Read Replicas)**
    
    - Disaster recovery in case of region issue
    - Local performance for global reads
    - Replication cost
    
    ### _**Amazon RDS Deployments - Amazon RDS Multi-AZ with one standby**_
    

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719941127-17A32E7249D96ED5.png)

### _**Amazon RDS Deployments - RDS Multi-AZ with two readable standbys**_

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719941224-772D5289B40C8D7D.png)

### _**Amazon RDS Deployments - Multi-Region**_

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719941282-AB6C2B06BD6355FD.png)

### _**Advantages of RDS compared to deploying a database on EC2:**_

- RDS is a **managed service**, offering:
    - Automated provisioning and OS patching
    - Continuous backups with point-in-time restore
    - Monitoring dashboards
    - Read replicas for enhanced read performance
    - Multi-AZ setup for disaster recovery
    - Scheduled maintenance windows for upgrades
    - Scaling capabilities (vertical and horizontal)
    - Storage backed by EBS
- **Note: SSH access to instances is not available with RDS.**

## **Amazon Aurora**

- **Amazon Aurora** = Amazon Aurora is a global-scale relational database service built for the cloud with full MySQL and PostgreSQL compatibility.
    - provides **built-in security, continuous backups, serverless compute, up to 15 read replicas, automated multi-Region replication, and integrations with other AWS services.**
    - It supports both PostgreSQL and MySQL databases.
- Aurora is "AWS cloud-optimized" and boasts significant performance enhancements,
    - claiming a **5x improvement over MySQL on RDS** and **over 3x the performance of Postgres on RDS.**
- Aurora's storage automatically scales in increments of 10GB, up to 128 TB.
- While Aurora is more efficient, it also costs 20% more than RDS.
- Aurora is not included in the free tier.

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719941327-15D014A10643BFC6.png)

### **Amazon Aurora Serverless**

- Automated database provisioning and dynamic scaling in response to actual usage.Both PostgreSQL and MySQL are compatible with Aurora Serverless DB.
- **Eliminates the need for capacity planning** and **reduces management overhead.**
- Pay-per-second billing offers potential cost savings.
- Suitable for irregular, sporadic, or unpredictable workloads.

## **NoSQL Databases**

- NoSQL databases, short for non-SQL or non-relational databases, are crafted for **distinct data models and boast adaptable schemas tailored for contemporary applications**.
- Advantages:
    - Flexibility: Simplified evolution of data models.
    - Scalability: Designed for horizontal scaling through distributed clusters.
    - High Performance: Optimization for specific data models.
    - Functionality: Tailored types optimized for respective data models.
- Examples: Key-value, document, graph, in-memory, and search databases.
- **JSON (JavaScript Object Notation) Overview:**
    - Widely used data format modeled after JavaScript object syntax.
    - Fits naturally into the NoSQL database model due to its schema-less nature.
- **Characteristics of JSON:**
    - Data can include nested structures, allowing for complex data hierarchies.
    - Fields in JSON data can be added, removed, or modified over time without constraints.
    - Supports a variety of data types, including arrays, strings, numbers, and boolean values.

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719941394-1A5BCB4B9F24ECA8.png)

## **Amazon DynamoDB**

- Automated **key/value database** provisioning and dynamic scaling in response to actual usage.
- Both PostgreSQL and MySQL are compatible with Aurora Serverless DB.
- Eliminates the need for capacity planning and reduces management overhead.
- Pay-per-second billing offers potential cost savings.
- Is a **key/value database**:
    - **A key-value database =**  is a type of non-relational database, also known as NoSQL database, that uses a simple key-value method to store data. It stores data as a collection of key-value pairs in which a key serves as a unique identifier. Both keys and values can be anything, ranging from simple objects to complex compound objects.
- Suitable for irregular, sporadic, or unpredictable workloads.

### **Amazon DynamoDB - Global Tables**

- Make a DynamoDB table accessible with low latency in multiple-regions
- Active-Active replication (read/write to any AWS Region)

## **Amazon DocumentDB**

- MongoDB is used to store, query, and index JSON data.
- Has similar "deployment concepts" as Amazon Aurora.
- Amazon DocumentDB (with MongoDB compatibility):
- Fully managed and highly available, with replication across 3 Availability Zones (AZs).
- DocumentDB storage automatically grows in increments of 10GB.
- Automatically scales to handle workloads with millions of requests per second.

## **Amazon ElastiCache**

- Similar to how RDS provides managed relational databases…
    - ElastiCache offers managed Redis or Memcached services
- Caches are high-performance, low-latency in-memory databases
- They help alleviate the load on databases for workloads with heavy read operations
- AWS handles operating system maintenance and patching, optimizations, setup, configuration, monitoring, failure recovery, and backups

## **DynamoDB Accelerator - DAX**

- Fully managed in-memory cache for DynamoDB.
- Offers up to a 10x performance improvement, reducing latency from single-digit milliseconds to microseconds.
- Provides a secure, highly scalable, and highly available solution.
- Difference with ElastiCache at the CCP level:
    - DAX is exclusively used with and integrated into DynamoDB.ElastiCache can be used with other databases.