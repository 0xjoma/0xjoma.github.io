---
layout: post
title: "Analyzing Network Protocols Using Wireshark and Netwitness Investigator"
date: 2024-08-10
categories: Academic
author:
- Jomael Ortiz Perez (0xjoma)
---

# Purpose
When it comes to network security, every professional needs to be familiar with the two most widely used tools in the industry:

Wireshark (WS)| RSA Net Witness Investigator (NWI)
--- | --- |
WS is basically a packet capture and analysis software and is the world’s foremost and widely-used network protocol analyzer. It lets you see what’s happening on your network at a microscopic level and is the de facto standard across many commercial and non-profit enterprises, government agencies, and educational institutions. | NWI is an interactive threat analysis application that provides security operations staff, auditors, and fraud and forensics investigators the power to perform unprecedented free-form contextual analysis of raw network data captured and reconstructed by the NetWitness NextGen infrastructure. While WS helps you analyze network data at the microscopic level, NWI provides you with a high-level overview making network forensics much easier. |

In this lab assignment, I will analyze network protocols using WS and NWI tools. Upon completing this lab, I will be able to:

* Use basic features of WS and NWI.
* Capture, filter and analyze basic network protocols.
* Differentiate use cases for WS and NWI.

# Instructions
## Lab Configuration
1. Parent VM: (this is the machine, I connect when login-in in to the virtual lab)
2. Child VM-1: Windows 10 - referred to as VM-1
3. Child VM-3: Metasploitable - referred to as VM-3

## Lab Tasks
**Task 1:** Capture live traffic (network trace) on VM-1.

**Task 2:** Capture live traffic for a "continuous ping test" from VM-1 to VM-3.
* On VM-1, open the command prompt, type `ping 172.30.0.15 /t`, and press `enter`.

**Task 3:** Capture live traffic only for remote desktop connection from Parent-VM to VM-1
* From Parent VM, click on the remote desktop connection "Windows 10 VM" to log into VM-1.

**Task 4:** Capture browser traffic on Parent VM.
* From Parent VM, launch the Chrome browser and visit the website `https://uwex.wisconsin.edu/cybersecurity/` and browse through a few pages
* From Wireshark, find the packet with uwex.wisconsin.edu string in the packet details
* Take and save a screen capture clearly showing the raw data with the said string as you will use it as input for subsequent task.

**Task 5:** Import capture from *Task 4* into *NetWitness Investigator* (NWI) and got to packet details for `Hostname Aliases = "uwex.wisconsin.edu"`
Provide the values for the following:
* **Cipher name:**
* **Source IP address:**
* **Destination IP address:**
* **TCP Source Port:**
* **TCP Destination Port:**
* **Destination City:**
* **Destination Organization:**
* **How many sessions were recorded in your capture:**
* **Click on the session count and provide a screen capture using hybrid view for the sessions.**

**Task 6:** Based on the packet detailes provided by Wireshark (WS) and NWI in *Tasks 4* and **Tasks 5** for `uwex.wisconsin.edu`
* List three differences between WS and NWI. In your opinion, which one makes it easy to read the details?
* Which tool would you prefer to use if you were doing a quick analysis for your home wireless network to determine all the outgoing connections? List three reasons for your choice of tool.
* Which tool would you prefer if oyu were doing a ping test to a remote host? Explain your reasons.

# Tasks Submissions
#### Task 1: Capture Live Traffic

![Task 1, Screenshot Capture Live Traffic]({{ site.baseurl }}/assets/analyzing-network-protocols/task1NetworkTraffic.png)

#### Task 2: Capture Live Traffic For Continuous Ping Test

![Task 2, Screenshot Capture Live Traffic For Continuous Ping Test]({{ site.baseurl }}/assets/analyzing-network-protocols/task2CaptureLiveTrafficForAContinuousPingTest.png)

#### Task 3: Capture Live Traffic Only For a Remote Desktop Connection From Parent-VM to VM-1

![Task 3, Screenshot Capture Live Traffic Only For a Remote Desktop Connection From Parent-VM to VM-1]({{ site.baseurl }}/assets/analyzing-network-protocols/task3CaptureLivetrafficOnlyForARemoteDesktopConnectionFromParentVmToVm1.png)

#### Task 4: Capture Browser Traffic on Parent VM

![Task 4, Screenshot Capture Browser Traffic on Parent VM]({{ site.baseurl }}/assets/analyzing-network-protocols/task4CaptureBrowserTrafficOnParentVM.png)

#### Task 5: Import capture from *Task 4* into *NetWitness Investigator (NWI) and got to packet details for `Hostname Aliases = "uwex.wisconsin.edu"`

* **Cipher name:** `tls 1.2 (3)`
* **Source IP address:** `192.168.202.249`
* **Destination IP address:** `128.104.80.21`
* **TCP Source Port:** `TCP`
* **TCP Destination Port:** `443 (HTTPS)`
* **Destination City:** `(3)`
* **Destination Organization:** `University of Wisconsin Madison`
* **How many sessions were recorded in your capture:** `(3)`
* **Provide a screen capture using hybrid view for the sessions.** (Screenshot Below)

![Task 5, Screenshot Last Bullet Hybrid View]({{ site.baseurl }}/assets/analyzing-network-protocols/task5HybridView.png)

#### Task 6: Tool Differences and Preferences

**Question one answer**

1.  WS presents a more traditional, detailed interface focusing on raw packet data. 
2.	NWI offers a more graphical interface with visual tools that help quickly identify patterns and relationships within the network traffic, making it more accessible for quick reviews and overviews.
3.	WS display data at a granular level, allowing users to see every bit of packet data in a structure format. This is useful for detailed analysis and troubleshooting.

(a)	In my opinion, WS makes it easier to read detailed packet information. It provides exhaustive protocol decoding capabilities and allow users to dissect each packet layer by layer, which is indispensable for understanding specific network issues or varifying network operations at the byte level.

**Questions two answer**

(a)	I would prefer WS. 
1.	Real-time packet capture and analysis
2.	Extensive filtering and search capabilities
3.	Detailed protocol support

**Question three answer**

(a)	I would again prefer WS. 

1.	Detailed view of ICMP traffic
a.	WS provides a detailed view of ICMP traffic, allowing me to observe the request and reply packets in detail.
2.	Capability to analyze network performance issues
a.	This tool allows for an in-depth examination of network performance issues, such as jitter or routing problems.
3.	Comprehensive filtering options
a.	It allows me to easily set up filters to show only ICMP traffic, which simplifies the analysis and helps solely focus on ping test results.

This concludes my lab. Feel free to connect with me and thank you for reading.

View my <a class="page-link" href="https://jomaelortizperez.com/" target="_blank" rel="noopener noreferrer">cv</a>.