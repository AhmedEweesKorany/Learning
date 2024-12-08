
---
# **S3 Migration**

## **Why do we need snow migration?**

- **Challenges with data migration:**
    - Limited connectivity
    - Limited bandwidth
    - High network cost
    - Shared bandwidth (can’t maximize the line)
    - Connection stability
- Hence, we have the **Snow Family**

## **The Snow Family**

- **Highly-secure, portable devices designed for data collection and processing at the edge.**
    - **Facilitate the migration of data into and out of AWS.**
    - **Data migration:**
        - Snowball Edge
        - Snowcone
        - Snowmobile
    - **Edge computing:**
        - Snowcone
        - Snowball Edge

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719923128-5F5405C8EE1CDE59.png)

### **Snowball Edge (for data transfers)**

- **Physical Data Transport Solution: Enables the movement of terabytes (TBs) or petabytes (PBs) of data in or out of AWS.**
- **Alternative to Network Transfer:** Offers a cost-effective alternative to transferring data over the network and incurring network fees.
- **Pay-per-Transfer Job:** Charges are based on each data transfer job.
- **Storage Options:** Provides block storage and Amazon S3-compatible object storage.
- **Snowball Edge Storage Optimized:** Offers 80 TB of HDD capacity for block volume and S3-compatible object storage.
- **Snowball Edge Compute Optimized:** Provides 42 TB of HDD or 28TB NVMe capacity for block volume and S3-compatible object storage.
- **Use Cases:** Ideal for large data cloud migrations, data center decommissioning, and disaster recovery.

### **AWS Snowcone & Snowcone SSD**

- Small, portable computing device designed for use in **rugged and harsh environments.**
    - Lightweight, weighing 4.5 pounds (2.1 kg), and suitable for edge computing, storage, and data transfer.
- **Snowcone:**
    - Offers 8 TB of HDD storage.
- **Snowcone SSD:**
    - Provides 14 TB of SSD storage.
- Ideal for use **in space-constrained environments** where Snowball doesn't fit.
- Users must provide their own battery and cables.
- Can be returned to AWS offline or connected to the internet and used with AWS DataSync to send data.

### **AWS Snowmobile**

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719922984-FCBE48409968A72E.png)

- Designed to transfer exabytes of data (1 EB = 1,000 PB = 1,000,000 TBs).
- Each Snowmobile has **a capacity of 100 PB; multiple Snowmobiles can be used in parallel for larger transfers.**
- Features high security with temperature control, GPS tracking, and 24/7 video surveillance.
- More suitable than Snowball for transfers exceeding 10 PB.

_(yes, it’s a literal truck!)_

## **AWS Snow Family Overview**

![img](https://lite-production.s3.us-east-2.amazonaws.com/learning_path_images/1719923055-570734BF1310A45A.png)

---

# **S3 Snow Family: Usage Process**

## **Snow Family: Usage Process**

1. **Request Snowball Devices:** Order Snowball devices through the AWS Management Console for delivery to your location.
2. **Install Software:** Install the Snowball client or AWS OpsHub on your servers to facilitate data transfer.
3. **Connect and Copy:** Connect the Snowball device to your servers and copy files using the client software.
4. **Return Device:** Ship the device back to AWS once the data transfer is complete. The device is pre-configured to return to the correct AWS facility.
5. **Data Transfer to S3:** Upon receipt, AWS will transfer the data from the Snowball device into an Amazon S3 bucket.
6. **Data Wiping:** After the data transfer, the Snowball device is completely wiped to ensure security and privacy.

## **Edge Computing**

- **Edge Computing: Process data as it's being generated at an edge location, such as a moving truck, a ship at sea, or a mining station underground.**
    - These locations may have **limited or no internet access** and **limited or no easy access to computing power.**
    - Set up a **Snowball Edge or Snowcone device to enable edge computing capabilities.**
- **Use Cases of Edge Computing:**
    - Preprocessing data before sending it to the cloud.
    - Running machine learning models directly at the edge.
    - Transcoding media streams on-site.
    - **Data Transfer:** If needed, the device can be shipped back to AWS for data transfer or further processing.
- **Snowcone & Snowcone SSD (Smaller):**
    - 2 CPUs, 4 GB of memory, wired or wireless access.
    - USB-C power using a cord or the optional battery.
- **Snowball Edge – Compute Optimized:**
    - 104 vCPUs, 416 GiB of RAM.
    - Optional GPU for video processing or machine learning.
    - 28TB NVMe or 42TB HDD usable storage.
    - Storage Clustering available (up to 16 nodes).
- **Snowball Edge – Storage Optimized:**
    - Up to 40 vCPUs, 80 GiB of RAM, 80 TB storage.
- **Common Features:**
    - All models can run EC2 Instances & AWS Lambda functions (using AWS IoT Greengrass).
    - Long-term deployment options available with 1 and 3 years discounted pricing.

## **AWS OpsHub**

- Historically, using Snow Family devices required a **Command Line Interface (CLI) tool.**
    - Today, AWS OpsHub, a software installed on your computer or laptop, can be used to **manage Snow Family devices.**
- **OpsHub enables:**
    - Unlocking and configuring single or clustered devices.
    - Transferring files to and from the device.
    - Launching and managing instances running on Snow Family devices.
    - Monitoring device metrics such as storage capacity and active instances.
    - Launching compatible AWS services on your devices, such as Amazon EC2 instances, AWS DataSync, and Network File System (NFS).

## **Snowball Edge Pricing**

- **Device Usage and Data Transfer Costs:**
    - Charges apply for device usage and data transfer **out** of AWS.
    - Data transfer into Amazon S3 is free ($0.00 per GB).
- **On-Demand Pricing:**
    - Includes a one-time service fee per job, covering:
    - 10 days of usage for Snowball Edge Storage Optimized 80TB.
    - 15 days of usage for Snowball Edge Storage Optimized 210TB.
    - Shipping days are not counted towards the included 10 or 15 days.
    - Additional days are charged on a per-day basis.
- **Committed Upfront Pricing:**
    - Pay in advance for monthly, 1-year, and 3-year usage (primarily for Edge Computing).
    - Offers up to 62% discounted pricing compared to on-demand rates.

## **Hybrid Cloud for Storage**

- **Hybrid Cloud Approach: AWS promotes a hybrid cloud model where part of your infrastructure is on-premises and part is on the cloud.**
- **This approach may be due to:**
    - Long cloud migration processes.
    - Specific security requirements.
    - Compliance requirements.
    - Overall IT strategy.
- **S3 and On-Premises Integration:** Given that S3 is a proprietary storage technology, unlike EFS or NFS, the question arises: How do you expose S3 data on-premises?
    - **Solution:** **AWS Storage Gateway** provides a seamless way to connect on-premises environments with S3 storage, enabling hybrid cloud storage solutions!

## **AWS Storage Gateway**

- **Hybrid Storage with AWS S3:**
    - Connects **on-premise data systems** seamlessly with AWS Cloud.
    - Facilitates **smooth integration and data movement** between local storage and S3.
- **Key Use Cases:**
    - **Disaster recovery:** Ensures data continuity by replicating on-premises data to the cloud.
    - **Backup & restore:** Provides off-site backups in the cloud for additional security and accessibility.
    - **Tiered storage**: Moves less frequently accessed data to the cloud to optimize costs and performance.
- **AWS Storage Gateway Types:**
    1. **File Gateway:** Integrates on-premises environments with cloud-based storage for file data.
    2. **Volume Gateway:** Uses block-based storage interfaces compatible with existing applications.
    3. **Tape Gateway:** Simulates a physical tape library with virtual tape storage in AWS.
- _**Detailed knowledge of Storage Gateway types is not required for the exam.**_