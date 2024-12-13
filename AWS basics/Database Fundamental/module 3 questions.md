
---
# Multiple-Choice Questions: Database Migration Services (DMS) and Shared Responsibility Model

#### **Questions:**

1. **What is a key feature of AWS Database Migration Service (DMS)?**
    
    - A. It permanently disables the source database during migration.
    - B. It requires manual setup of schema conversions.
    - C. It supports both homogeneous and heterogeneous migrations.
    - D. It only supports migrations to Amazon Aurora.  
        **Answer:** C
2. **Which of the following is an example of a homogeneous database migration?**
    
    - A. Oracle to Amazon Aurora
    - B. SQL Server to MySQL
    - C. Oracle to Oracle
    - D. MongoDB to DynamoDB  
        **Answer:** C
3. **Which AWS tool is used to automatically convert database schemas and code objects?**
    
    - A. AWS Lambda
    - B. AWS Schema Conversion Tool (SCT)
    - C. Amazon RDS Migration Tool
    - D. DynamoDB Accelerator (DAX)  
        **Answer:** B
4. **What does the AWS Schema Conversion Tool (SCT) mark during a migration?**
    
    - A. Completed migrations
    - B. Unconvertible objects with manual conversion instructions
    - C. Database performance metrics
    - D. Unsupported source databases  
        **Answer:** B
5. **Which migration scenario requires the AWS Schema Conversion Tool?**
    
    - A. Oracle to Oracle
    - B. SQL Server to Amazon Aurora
    - C. DynamoDB to MongoDB
    - D. Amazon RDS to EC2-hosted MySQL  
        **Answer:** B
6. **What responsibility does the customer have under the shared responsibility model for databases?**
    
    - A. Managing the physical security of data centers
    - B. Managing database users and permissions
    - C. Maintaining the database engine and operating system
    - D. Configuring AWS infrastructure hardware  
        **Answer:** B
7. **Which responsibility is managed by AWS in the shared responsibility model for databases?**
    
    - A. Configuring network access via security groups
    - B. Patching the operating system and database engine
    - C. Encrypting customer data
    - D. Managing database users  
        **Answer:** B
8. **What is the role of the AWS SCT during data migration to Amazon Redshift?**
    
    - A. Optimizing SQL statements in source code
    - B. Enabling continuous data replication
    - C. Enhancing database read performance
    - D. Configuring database security groups  
        **Answer:** A
9. **What feature of AWS DMS ensures minimal disruption during migration?**
    
    - A. Data caching
    - B. Automatic rollback during failure
    - C. Keeping the source database available during migration
    - D. Read-only mode for target databases  
        **Answer:** C
10. **Which statement is true about the shared responsibility model for databases in AWS?**
    
    - A. AWS is responsible for managing database users and permissions.
    - B. Customers must patch the operating system and database engine.
    - C. AWS manages hardware and networking infrastructure security.
    - D. Customers handle physical security of data centers.  
        **Answer:** C
11. **Which AWS service helps with high availability and self-healing during database migration?**
    
    - A. Amazon RDS
    - B. AWS DMS
    - C. AWS SCT
    - D. Amazon Redshift  
        **Answer:** B
12. **What is an advantage of using AWS Schema Conversion Tool (SCT)?**
    
    - A. It eliminates the need for manual schema optimization.
    - B. It provides direct database engine patching.
    - C. It only supports relational databases.
    - D. It reduces database replication latency.  
        **Answer:** A
13. **What is an example of a customer responsibility in the shared responsibility model?**
    
    - A. Securing hardware in AWS data centers
    - B. Configuring network access via security groups
    - C. Patching database engines
    - D. Ensuring high availability of database infrastructure  
        **Answer:** B
14. **Which AWS DMS feature supports global-scale database operations?**
    
    - A. High-speed indexing
    - B. Read replicas across regions
    - C. Multi-AZ failover
    - D. Continuous data replication  
        **Answer:** D
15. **Which AWS service facilitates the migration of data warehouses to Amazon Redshift?**
    
    - A. AWS SCT
    - B. Amazon DynamoDB
    - C. AWS DataSync
    - D. Amazon ElastiCache  
        **Answer:** A
16. **Why might you use heterogeneous database migration?**
    
    - A. To switch between databases with similar schema structures
    - B. To migrate data within the same database engine
    - C. To migrate from a relational database to a NoSQL database
    - D. To enable global replication across AWS regions  
        **Answer:** C
17. **What is a primary goal of the AWS Shared Responsibility Model?**
    
    - A. Defining all responsibilities for the customer
    - B. Splitting security and compliance duties between AWS and the customer
    - C. Ensuring AWS manages all aspects of database security
    - D. Requiring customers to handle infrastructure patching  
        **Answer:** B
18. **Which AWS DMS feature is most critical for real-time analytics?**
    
    - A. Schema conversion
    - B. Continuous data replication
    - C. Automated backups
    - D. Multi-AZ failover  
        **Answer:** B
19. **What is a limitation of AWS SCT?**
    
    - A. It only supports Amazon Aurora.
    - B. It cannot identify unconvertible schema components.
    - C. It requires manual adjustments for some database objects.
    - D. It does not work with Amazon Redshift.  
        **Answer:** C
20. **What is the purpose of AWS DMS Schema Conversion (DMS SC)?**
    
    - A. Automated provisioning of hardware
    - B. Assisting in homogeneous migrations
    - C. Simplifying schema conversion during migrations
    - D. Improving database query performance  
        **Answer:** C