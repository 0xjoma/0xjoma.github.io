---
layout: post
title:  "Incident Report Analysis"
date:   2023-10-23
categories: jekyll update
---

|            |                                                                                                                                                                                                                                                                                                                                                                 |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Summary**| The company experienced a security event when all network services suddenly stopped responding. The cybersecurity team found the disruption was caused by a distributed denial of services (DDoS) attack through a flood of incoming ICMP packets. The team responded by blocking the attack and stopping all non-critical network services, so that critical network services could be restored. |
| **Identify**  | A malicious actor or actors targeted the company with an ICMP flood attack. The entire internal network was affected. All critical network resources needed to be secured and restored to a functioning state. |
| **Protect**   | The cybersecurity team implemented a new firewall rule to limit the rate of incoming ICMP packets and an IDS/IPS system to filter out some ICMP traffic based on suspicious characteristics. |
| **Detect**    | The cybersecurity team configured source IP address verification on the firewall to check for spoofed IP addresses on incoming ICMP packets and implemented network monitoring software to detect abnormal traffic patterns. |
| **Respond**   | For future security events, the cybersecurity team will isolate affected systems to prevent further disruption to the network. They will attempt to restore any critical systems and services that were disrupted by the event. Then, the team will analyze network logs to check for suspicious and abnormal activity. The team will also report all incidents to upper management and appropriate legal authorities, if applicable. |
| **Recover**   | To recover from a DDoS attack by ICMP flooding, access to network services need to be restored to a normal functioning state. In the future, external ICMP flood attacks can be blocked at the firewall. Then, all non-critical network services should be stopped to reduce internal network traffic. Next, critical network services should be restored first. Finally, once the flood of ICMP packets have timed out, all non-critical network systems and services can be brought back online. |

## Reflection on the Incident Report Analysis

From the incident report analysis, I have gained comprehensive insights into the multifaceted nature of cybersecurity incident management. The event underscored the importance of a structured and well-coordinated response to a security breach, especially when confronted with a DDoS attack. Here is what I have gleaned and the implications of the applications:

1. **Proactive Identification:** Recognizing threats quickly, as seen in the "Identify" phase, is paramount. The ability to discern that a DDoS attack was in progress, specifically an ICMP flood, allowed for a more targeted response. This emphasizes the need for constant vigilance and monitoring.
2. **Immediate Protection:** The "Protect" phase highlighted the importance of having preventive measures and the agility to adjust configurations on the fly. The team mitigated further damages by swiftly implementing new firewall rules and leveraging IDS/IPS systems.
3. **Detection Mechanisms:** The "Detect" section emphasized the significance of proactive monitoring and verification mechanisms. Tools that discern irregularities, like spoofed IP addresses, become invaluable assets in maintaining a secure network environment.
4. **Structured Response:** Reacting to an incident involves more than immediate countermeasures. The "Respond" phase outlined the broader scope of actions, including system isolation, restoration, and stakeholder communication. This holistic approach ensures that the organization remains informed and prepared while technical challenges are addressed.
5. **Recovery and Resilience:** The final "Recover" step underscored the need for a strategic approach to system restoration. Beyond just bringing systems back online, there is an evident emphasis on doing so methodically, prioritizing critical services, and ensuring future resilience against similar attacks.

In conclusion, this incident report analysis has reinforced the understanding that cybersecurity is not just about prevention but also about effective management when breaches occur. The structured approach to identifying, protecting, detecting, responding, and recovering provides a robust framework that ensures the organization's technical safety, operational continuity, and reputation integrity.

## Credentials

The skills and knowledge demonstrated in this article were acquired from my <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/AZYF4ATWUNXF" target="_blank">Google Cybersecurity Certificate</a>. Feel free to view it for verification.