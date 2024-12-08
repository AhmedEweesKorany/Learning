# **Characteristics of Amazon S3**

## **Durability and Availability**

- **Durability:**
    - Amazon S3 offers high durability of 99.999999999% (11 9's) for objects, ensuring data is protected across multiple Availability Zones.
    - With this level of durability, if you store 10 million objects with Amazon S3, you can expect to lose a single object once every 10,000 years.
    - This durability applies to all storage classes.
- **Availability:**
    - Refers to how readily available a service is for use.
    - Availability varies depending on the storage class.
    - For example, S3 Standard has 99.99% availability, which equates to potential unavailability of approximately 53 minutes per year.

## **Static Websites and Versioning**

- **S3 can host static websites and have them accessible on the Internet**
    - The website URL will be (depending on the region)
        - [http://bucket-name.s3-website-aws-region.amazonaws.com](http://bucket-name.s3-website-aws-region.amazonaws.com/)
    - OR
    - [http://bucket-name.s3-website.aws-region.amazonaws.com](http://bucket-name.s3-website.aws-region.amazonaws.com/)
- **Versioning:**
    - You can version your files in Amazon S3
    - It is enabled at the bucket level
    - Same key overwrite will change the “version”: 1, 2, 3….
    - It is best practice to version your buckets
    - Protect against unintended deletes (ability to restore a version)
    - Easy roll back to previous version

## **Versioning in S3**

- **File versioning is available in Amazon S3.**
    - It must be activated at the bucket level.
- Overwriting a file with the same key will result in incrementing the version number: 1, 2, 3, etc.
- It is considered best practice to enable versioning on your buckets.
- **Versioning helps guard against accidental deletions by allowing you to restore previous versions.**
- It simplifies the process of reverting to an earlier version of a file.
- Additional details:
    - Any file not versioned before versioning is enabled will be assigned the version "null".
    - Suspending versioning will not remove any previously stored versions.

## **Replication (Cross Region Replication and Same Region Replication)**

- **Versioning must be enabled on both the source and destination buckets for replication.**
- **Supports:**
    - Cross-Region Replication (CRR) Same-Region Replication (SRR).
    - Buckets can be in different AWS accounts.
    - Copying of objects is **asynchronous.**
    - Proper **IAM permissions must be granted to S3 for replication.**

# **S3 Storage Classes**

## **S3 Storage Classes: An Overview**

- **S3 Storage Classes Overview:**
    - Designed for varying use cases based on **access frequency, durability, and cost.**
    - Includes options like Standard, Intelligent-Tiering, Standard-IA, and One Zone-IA.
    - Enables **cost optimization through diverse pricing structures.**
    - Supports **automatic data migration with lifecycle policies.**
    - Provides **global data storage** with high availability.
    - Allows easy transition between classes to meet changing needs.

🗣️ **All S3 Storage Classes:**

1. **Amazon S3 Standard - General Purpose**
2. **Amazon S3 Standard-Infrequent Access (IA)**
3. **Amazon S3 One Zone-Infrequent Access**
4. **Amazon S3 Glacier Instant Retrieval**
5. **Amazon S3 Glacier Flexible Retrieval**
6. **Amazon S3 Glacier Deep Archive**
7. **Amazon S3 Intelligent Tiering**

## **S3 Storage Classes: Comparison**

- These are the key points you need to know for the exam!

## **S3 - Encryption**

- Server Side Encryption (Default):
    - Server **encrypts the file after receiving it**
- Server Side Encryption (Default):
    - Server **encrypts the file after receiving it**
- Useful whitepapers for you to read below!

## **IAM Access Analyzer for S3**

- Ensures only **intended individuals have access to your S3 buckets.**
- Evaluates S3 Bucket Policies, S3 ACLs, and S3 Access Point Policies.
- Powered by IAM Access Analyzer.
- Examples include **publicly accessible buckets or buckets shared with other AWS accounts.**

## **Shared Responsibility Model: S3**

- **AWS Responsibility:**
    - Guarantee unlimited storage.
    - Provide encryption for stored data.
    - Ensure data separation between different customers.
    - Ensure AWS employees cannot access your data.
- **Your Responsibility:**
    - Configure S3 buckets.
    - Set bucket policies and public access settings.
    - Manage IAM users and roles.
    - Enable encryption for data storage.

