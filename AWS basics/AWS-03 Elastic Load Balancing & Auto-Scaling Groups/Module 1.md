---
aliases:
  - In this module, you'll explore Elastic Load Balancing (ELB) and Auto Scaling Groups (ASG) in AWS. Discover how ELB distributes incoming traffic across multiple targets for high availability, while ASG automatically adjusts EC2 instances to match demand, optimizing performance and costs. Learn to configure and manage ELB and ASG, integrate them effectively, and implement best practices for scaling applications. By the end, you'll be ready to leverage these tools to enhance your AWS infrastructure.
---
Scalability and High Availability: An Introduction

This section introduces scalability and high availability in cloud computing, covering concepts like horizontal and vertical scalability, fault tolerance, and resiliency in distributed systems. By the end, you'll understand the importance of these concepts in building robust cloud applications.

## **Scalability: An Introduction**

- **Scalability** refers to the **ability of an application or system to handle increasing loads by adapting.**
- There are two types of scalability:
    - Vertical Scalability
    - Horizontal Scalability (also known as elasticity)
- Scalability is closely related but distinct from High Availability.
- To illustrate the difference, consider a call center:
    - **Vertical Scalability:** Adding more resources (e.g., upgrading server hardware) to handle increased call volume.
    - **Horizontal Scalability:** Adding more call center agents to handle increased call volume, allowing workload distribution across multiple agents.
- **High Availability** ensures that **systems remain operational and accessible despite failures, focusing on minimizing downtime and ensuring continuous service availability.**

## **Vertical Scalability**

- **Vertical Scalability involves increasing the size of the instance.**
    - For instance, if your application runs on a t2.micro, scaling it vertically means running it on a t2.large.
    - Vertical scalability is commonly used for non-distributed systems, like databases.
- There's typically **a limit to how much you can vertically scale, determined by hardware limitations.**

## High Availability

- High Availability often **accompanies horizontal scaling, ensuring your application or system runs in at least two Availability Zones.**
- The primary goal of high availability is to **maintain system operation despite a data center loss or disaster.**

### **High Availability & Scalability For EC2**

- **Vertical Scaling (Scale Up/Down):**
    - Increase the size of the instance.
    - Example: Scaling from a t2.nano (0.5 GB of RAM, 1 vCPU) to a u-12tb1.metal (12.3 TB of RAM, 448 vCPUs).
- **Horizontal Scaling (Scale Out/In):**
    - Increase the number of instances.
    - Utilize Auto Scaling Groups and Load Balancers for management.
- **High Availability:**
    - Run instances of the same application across multiple Availability Zones (AZs).
    - Implement Auto Scaling Groups and Load Balancers across multiple AZs for increased reliability.

### **Scalability vs Elasticity (vs Agility)**

- **Scalability:** The ability to accommodate a larger load by either enhancing the hardware (scale up) or adding nodes (scale out).
- **Elasticity:** In a scalable system, elasticity refers to the automatic scaling based on the load, enabling a pay-per-use model, demand matching, and cost optimization.
- **Agility:** Unrelated to scalability, agility implies that new IT resources can be provisioned quickly, reducing the time to availability from weeks to minutes.