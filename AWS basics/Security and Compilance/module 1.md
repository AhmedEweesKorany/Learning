
IAM : Introduction

In the AWS Identity and Access Management (IAM) section, you'll dive into managing user access and permissions in the AWS cloud. Learn to create and manage users, groups, and roles, and implement fine-grained access controls with IAM policies. Explore advanced features like multi-factor authentication (MFA) and cross-account roles to ensure secure access management.

# **Identity Access Management (IAM)**

## **Identity Access Management (IAM)**

- **Identity Access Management allows you to specify who or what can access services and resources in AWS, centrally manage fine-grained permissions, and analyze access to refine permissions across AWS.**
    - **Global service** for managing user identities and access to AWS resources.
        
    - Default root account is created but **shouldn't be utilized or shared for security reasons.**
        
        - **Users** represent individuals within the organization and **can be organized into groups.**
            - Groups exclusively contain users and cannot include other groups.
                - Users are **not** **required to belong to a group** and can **be members of multiple groups simultaneously.**

## **Identity Access Management: Permissions**

- **Users or groups, or roles** can be assigned JSON documents known as policies.
    
- **Policies** define the permissions granted to users.
    
    📍 AWS follows the **least privilege principle,** meaning users are given **only the permissions they need to perform their tasks,** minimizing the risk of unauthorized access or misuse.
    

## **Identity Access Management: Policies**

- IAM policies are **JSON documents that define permissions for users, groups, or roles.**
- Each policy consists of one or more statements, each with specific access permissions.
- Statements contain elements such as actions (the actions allowed or denied), resources (the AWS resources to which the actions apply), and conditions (optional criteria that must be met for the policy to be applied).
- Policies can be **attached to IAM identities (users, groups, or roles) to grant or restrict access to AWS resources.**
- AWS provides predefined policies for common use cases, and custom policies can be created to tailor permissions according to specific requirements.

### **IAM Policies Inheritance**

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719232980-9F53D9C408FB1EE1.png)

## **Identity Access Management: Policy Structure**

- The policy consists of:
    - **Version**: The version of the policy language, always set to "2012-10-17."
    - **Id:** An optional identifier for the policy.
    - **Statement:** One or more individual statements (required).
- Each statement consists of:
    - **Sid:** An optional identifier for the statement.
    - **Effect:** Specifies whether the statement allows or denies access (Allow, Deny).
    - **Principal:** The account, user, or role to which the policy is applied.
    - **Action:** A list of actions that the policy allows or denies.
    - **Resource:** A list of resources to which the actions are applied.
    - **Condition:** Optional conditions for when the policy is in effect.

## **Identity Access Management: Shared Responsibility Model**

- **AWS handles:**
    - Infrastructure (global network security)
    - Configuration and vulnerability analysis
    - Compliance validation
- **You, the customer, handle:**
    - Users, Groups, Roles, Policies management and monitoring
    - Enable MFA on all accounts
    - Rotate all your keys often
    - Use IAM tools to apply appropriate permissions
    - Analyze access patterns & review permissions
---

Security within IAM

In this section, we focus on securing your AWS environment through IAM best practices. Discover how to set up multi-factor authentication (MFA), enforce strong password policies, and utilize IAM roles for secure access management. Learn to monitor and audit IAM activity for compliance and threat detection, ensuring your AWS resources stay protected.

## **IAM : Password Policy**

- Setting a **strong password enhances the security of your AWS account.**
- **AWS allows you to establish a password policy, enabling you to:**
    - Specify a minimum password length.
    - Mandate the inclusion of specific character types, such as uppercase letters, lowercase letters, numbers, and non-alphanumeric characters.
    - Permit all IAM users to change their passwords.
    - Enforce password expiration, prompting users to change their passwords after a defined period.
    - Prevent the reuse of passwords to enhance security further.

## **IAM : Multi-Factor Authentication**

- **Users with access to your AWS account can potentially modify configurations or delete resources, posing security risks.**
    - It's essential to **safeguard both root accounts and IAM users.**
- Multi-Factor Authentication (MFA) adds an **extra layer of security by requiring users to provide both a password (something they know) and a security device (something they own)**, **reducing the risk of unauthorized access, even if passwords are compromised.**
    - If a password is stolen or hacked, the account is not compromised
    - Multifactor Devices:

## Access Keys in AWS

- You can access AWS in three ways:
    1. **AWS Management Console (protected by password + MFA)**
    2. **AWS Command Line Interface (CLI):** protected by access keys
    3. **AWS Software Developer Kit (SDK) - for code:** protected by access keys
- Access Keys are generated via the **AWS Management Console.**
- Users are responsible for managing their own access keys.
- Access Keys are treated as secrets and **should not be shared.**
- The Access Key ID serves a similar purpose as a username.
- The Secret Access Key serves a similar purpose as a password.
- _**Don’t share your access keys with anyone!**_

## AWS Command Line Interface

- Facilitates interaction with AWS services **via commands in your command-line shell.**
- Provides **direct access to the public APIs of AWS services.**
- Enables the development of scripts for resource management.
- Open-source tool available at [**https://github.com/aws/aws-cli](https://github.com/aws/aws-cli).**
- Serves as an alternative to using the AWS Management Console for AWS resource management tasks.

## **AWS Software Development Kit (SDK)**

📍 **The AWS Software Development Kit (AWS SDK) = a collection of language-specific APIs (libraries) that enable you to programmatically access and manage AWS services.**

- It can be embedded within your application and supports:
    - SDKs: For languages like JavaScript, Python, PHP, .NET, Ruby, Java, Go, Node.js, and C++.
    - Mobile SDKs: For platforms like Android and iOS.
    - IoT Device SDKs: For platforms like Embedded C and Arduino.
- An example of the AWS SDK in use is the AWS CLI, which is built on the AWS SDK for Python.

## **IAM Roles for Services**

- Certain AWS services require permission to perform actions on your behalf.
- To grant permissions, **IAM roles are assigned to AWS services.**
- **Common roles include:**
    - EC2 Instance Roles
    - Lambda Function Roles
    - Roles for CloudFormation
- IAM roles **define the permissions and policies that govern what actions the associated service can perform.**

## **IAM Security Tools**

- **IAM Credentials Report (Account-Level):** Provides a comprehensive list of **all users in your AWS account along with the status of their various credentials.**
    - Enables tracking and monitoring of IAM users and their associated credentials, including access keys and passwords.
- I**AM Access Advisor (User-Level):** Displays the **service permissions granted to an IAM user.**
    - Shows the timestamp of the user's last access to each service.
    - Helps in reviewing and revising IAM policies based on actual service usage to ensure adherence to the principle of least privilege.

## **IAM Best Practices**

- **Principle of Least Privilege:**
    - Grant users only the permissions they need to perform their tasks.
    - Regularly review and refine IAM policies to remove unnecessary permissions.
- **Use IAM Roles for AWS Resources:**
    - Assign IAM roles to AWS services (e.g., EC2 instances, Lambda functions) instead of using long-term access keys.
    - Rotate IAM role credentials regularly for enhanced security.
- **Enable Multi-Factor Authentication (MFA):**
    - Require IAM users to use MFA to add an extra layer of security.
    - Enforce MFA for privileged actions and console access.
- **One physical user = One AWS user**
- **Create a strong password policy**
- **Audit permissions of your account using IAM Credentials Report & IAM Access Advisor**

## **IAM Guidelines and Best Practices**

- **Root Account Usage:** Only use the root account for AWS account setup; otherwise, avoid using it for day-to-day operations.
- **User Management:** Create a separate AWS user for each individual and avoid sharing credentials.
- **Group Assignment:** Assign users to groups and manage permissions at the group level for easier management.
- **Password Policy:** Implement a strong password policy to enhance security.
- **Multi-Factor Authentication (MFA):** Use and enforce MFA to add an extra layer of security.
- **Roles for Services:** Use roles to grant permissions to AWS services rather than using individual user credentials.
- **Programmatic Access:** Use access keys for programmatic access (CLI/SDK) and rotate them regularly.
- **Audit Permissions:** Regularly audit permissions using tools like the IAM Credentials Report and IAM Access Advisor.
- **Access Key Management:** Never share IAM users and access keys; each should be unique to an individual or service.