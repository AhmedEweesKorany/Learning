
Security Tools

This course covers essential security tools within the Amazon Web Services (AWS) ecosystem. Learn how to protect your AWS resources with services like AWS Secrets Manager, AWS Artifact, Amazon GuardDuty, Amazon Inspector, AWS Config, AWS CloudTrail, and more. Gain hands-on experience in deploying and configuring these tools to enhance your AWS environment's security posture.

# **Security Tools to Protect Your AWS Resources**

## **AWS Secrets Manager**

- A recently introduced service designed for **storing secrets securely.**
    - Passwords are an example of some of the secrets you may have!
- Allows enforcing rotation of secrets at regular intervals.
- Automates the generation of secrets during rotation, leveraging Lambda functions.
- Integrates seamlessly with **Amazon RDS (MySQL, PostgreSQL, Aurora) for enhanced security.**
- Ensures encryption of secrets using KMS (Key Management Service).
- Primarily tailored for RDS integration, providing robust secret management capabilities.

## **AWS Artifact**

📍 **AWS Artifact =** An online platform providing customers with **instant access to AWS compliance documentation and agreements.**

- **Artifact Reports =**  enable downloading of AWS security and compliance documents from third-party auditors, including ISO certifications, Payment Card Industry (PCI) reports, and System and Organization Control (SOC) reports.
- **Artifact Agreements =**  facilitate reviewing, accepting, and tracking the status of AWS agreements like the Business Associate Addendum (BAA) or Health Insurance Portability and Accountability Act (HIPAA) within individual accounts or organizations.
    - Supports **internal audit or compliance processes by offering comprehensive access to necessary documentation and agreements.**

## **Amazon GuardDuty**

📍 **Amazon GuardDuty =** An **intelligent threat discovery solution** to safeguard your AWS Account.

- Utilizes Machine Learning algorithms, anomaly detection techniques, and third-party data sources.
- Activation is simplified with a one-click enablement process (30 days trial), eliminating the need for software installation.
- Input data sources encompass various AWS services:
    - **CloudTrail Events Logs:** Detects unusual API calls and unauthorized deployments.
    - **CloudTrail Management Events:** Monitors activities like VPC subnet creation and trail setup.
    - **CloudTrail S3 Data Events:** Tracks actions such as object retrieval, listing, and deletion.
    - **VPC Flow Logs**: Identifies unusual internal traffic patterns and IP addresses.
- Optional features extend coverage to additional services such as EKS Audit Logs, RDS, Aurora, EBS, Lambda, and S3 Data Events.
- Offers integration with **EventBridge** rules for proactive notifications in case of findings, which can be directed to AWS Lambda or SNS.
- Provides protection against **cryptocurrency attacks, with a dedicated "finding" for this threat vector.**

## **Amazon Inspector**

📍 **Amazon Inspector** = Automated Security Assessments streamline security evaluations across various AWS resources.

- **AWS resources you can use Inspector on:**
    - **EC2 Instances:**
        - Utilizes the AWS Systems Manager (SSM) agent for assessment.
        - Analyzes unintended network accessibility and checks for known vulnerabilities in the running OS.
    - **Container Images in Amazon ECR:**
        - Conducts assessments of container images upon push to Amazon Elastic Container Registry (ECR).
    - **Lambda Functions:**
        - Identifies software vulnerabilities in function code and package dependencies.
        - Assesses functions during deployment.

## **AWS Config**

📍 **AWS Config** = facilitates **auditing and maintaining compliance** for AWS resources.

- **You can do the following with Config:**
    - Recording configurations and changes over time.
    - Option to store configuration data in S3 for analysis with Athena.
    - Resolving inquiries such as security group SSH access restrictions and bucket public access.
    - Receiving alerts (SNS notifications) for any changes made.
    - Operating as a per-region service but can be aggregated across regions and accounts for comprehensive analysis.

## **AWS CloudTrail**

- Provides **governance, compliance, and auditing capabilities** for your AWS account.
    - CloudTrail is enabled by default, offering a history of events and API calls made within your AWS account through various interfaces such as the Console, SDK, CLI, and AWS services.
- Logs from CloudTrail can be stored in CloudWatch Logs or S3 for further analysis and monitoring.
- **A trail can be configured to apply to all regions (default) or a single region for more granular control.**
- In case of resource deletion in AWS, CloudTrail should be the first place to investigate to understand the actions taken.

## **AWS Macie**

📍 **AWS Macie** = Amazon Macie is a fully managed data security and privacy service **leveraging machine learning and pattern matching to identify and safeguard sensitive data within AWS.**

- Detects and notifies users about sensitive data, such as personally identifiable information (PII).

## **AWS Security Hub**

📍 **Amazon Security Hub** = serves as a centralized security management tool, enabling the oversight of security across multiple AWS accounts and automating security checks.

- Integrated **dashboards provide real-time security and compliance status, facilitating swift actions.**
- Automatically aggregates alerts from various AWS services and partner tools, including:
    - Config, GuardDuty, Inspector, Macie, IAM Access Analyzer, Systems Manager, Firewall Manager, AWS Health, and AWS Partner Network Solutions.
- Initial activation of the AWS Config Service is required to utilize Security Hub's capabilities.

## **AWS Detective**

📍 **AWS Detective** = leverages machine learning and graph analysis to analyze, investigate, and rapidly identify the underlying cause of security concerns or suspicious activities.

- Automatically gathers and processes events from various sources like VPC Flow Logs, CloudTrail, and GuardDuty, creating a comprehensive and unified view.
- Visualizations provided by Amazon Detective offer detailed insights and contextual information, aiding in the identification and resolution of security incidents.

## **IAM Access Analyzer**

- Identify shared **resources outside your defined zone of trust** within AWS by examining:
    - S3 Buckets
    - IAM Roles
    - KMS Keys
    - Lambda Functions and Layers
    - SQS Queues
    - Secrets you store _**inside**_ Secrets Manager
    - Establish a zone of trust, typically an AWS Account or AWS Organization, and flag any access to resources outside this zone as findings for further investigation.

## **Root User Privilege**

📍 **Root user =** is the AWS account owner, automatically created during account setup

- Possesses unrestricted access to all AWS services and resources
    - _**Lock away your AWS root user access keys**_
    - _**Don’t use your root account for everyday purposes**_
- **Actions that can be performed only by the root user:**
    - Change account settings (account name, email address, root user password, root user access keys)
    - View certain tax invoices
    - Close your AWS account
    - Restore IAM user permissions
    - Change or cancel your AWS Support plan
    - Register as a seller in the Reserved Instance Marketplace
    - Configure an Amazon S3 bucket to enable MFA
    - Edit or delete an Amazon S3 bucket policy that includes an invalid VPC ID or VPC endpoint ID
    - Sign up for GovCloud

## **AWS Abuse**

📍 **AWS Abuse** = If you suspect AWS resources are being used for abusive or illegal activities, report them promptly to the AWS Abuse team.

- Abusive and prohibited behaviors include spam, port scanning, DoS or DDoS attacks, intrusion attempts, hosting objectionable or copyrighted content, and distributing malware.
- Contact the AWS Abuse team through the AWS abuse form or via email at [abuse@amazonaws.com](mailto:abuse@amazonaws.com) with relevant details and evidence for investigation and action.