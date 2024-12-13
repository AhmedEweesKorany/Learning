
Database Migration Services

In this section, you'll explore AWS Database Migration Services (DMS), which simplifies database migrations to AWS with minimal downtime. You'll learn about both homogeneous (e.g., Oracle to Oracle) and heterogeneous (e.g., SQL Server to Amazon Aurora) migrations, along with continuous data replication. Additionally, you'll cover the AWS Schema Conversion Tool (SCT) for transforming schemas and code during heterogeneous migrations. This section equips you with the skills for efficient and reliable database migrations to AWS.

# **Databases: Migration Services**

## **DMS – Database Migration Service**

- Quickly and securely **migrates databases to AWS, ensuring resilience and self-healing capabilities.**
- The source database remains **available during the migration process.**
- Supports both homogeneous migrations (e.g., Oracle to Oracle) and heterogeneous migrations (e.g., Microsoft SQL Server to Amazon Aurora).

## **AWS Schema Conversion Tool**

- Both solutions automatically convert database schemas and code objects, marking unconvertible objects with manual conversion instructions.
- AWS SCT scans application source codes for SQL statements and optimizes them for AWS services during database migration.
- Post-conversion, AWS SCT facilitates data migration from various warehouses to Amazon Redshift using data migration agents.
- These tools simplify migrations, support popular databases, and save significant manual effort and resources.
- AWS offers **two schema conversion solutions for database migrations: the managed AWS DMS Schema Conversion (DMS SC) and the downloadable AWS Schema Conversion Tool (AWS SCT).**
---
AWS Databases: Shared Responsibility Model

In this section, you'll learn about the shared responsibility model for databases in AWS. This model outlines the division of security and compliance responsibilities between AWS and the customer. AWS is responsible for securing the infrastructure, including hardware, software, networking, and facilities. Customers are responsible for managing their data, including encryption, access control, and compliance with regulatory requirements. Understanding this model ensures that you can effectively manage database security and compliance in the AWS environment.

- **AWS:**
    - RDS sets up and runs the database engine on the instance provided.
    - Maintenance and Operations:
        - AWS manages OS and database engine maintenance and patching.
- **Customer:**
    - Choose instance type and storage class for desired processing power and performance.
    - Configure network access via security groups.
    - Manage database users and permissions.