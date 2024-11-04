# Amazon EC2

![[Pasted image 20241104203728.png]]

# EC 2 Sizing 

![[Pasted image 20241104203952.png]]

# Ec 2 instance types :

![[Pasted image 20241104204238.png]]

## What are Amazon EC2 Instances?
**Amazon EC2 Instances** = a virtual server in the AWS Cloud. When you launch an EC2 instance, the instance type that you specify determines the hardware available to your instance.
- Allows users to rent virtual servers (known as instances) on which they can run their own applications.
- Each instance type offers a different balance of compute, memory, network, and storage resources.
- Infrastructure as a Service

### **User Data Script**

- EC2 instances can be configured at launch using User Data scripts.
- **Bootstrapping = refers to executing commands upon a machine's startup.**
    - The User Data script executes **only once** during the initial startup of the instance.
- EC2 User Data is utilized for automating startup tasks, including:
    - Installing updates
    - Installing software
    - Downloading files from the internet
    - Any other tasks you might require
- This user data script creates a server and static web page when the EC2 instance is first created.