---
layout: post
title:  "Setting Up Kali Linux on a Bootable USB Device for macOS/OS X"
date:   2023-10-18
categories: jekyll update
download_link: https://www.kali.org/docs/usb/live-usb-install-with-mac/
---

## Description

With my MacBook Air 2016 no longer receiving support for future macOS updates and faced with storage constraints, I took the initiative to repurpose a spare My Passport Ultra 2TB hard drive from my office inventory. This guide outlines the process of creating a Kali Linux bootable USB device using this hard drive on a macOS environment.

## Benefits of Using a USB Bootable Kali Linux

**Non-Destructive**: One of the primary advantages of using a bootable USB is its non-destructive nature. Booting from the USB makes no alterations to the host system's hard drive or the installed OS. This means that there are no risks of accidentally corrupting or erasing essential data. To revert to the original system settings, simply eject the Kali Live USB drive and reboot the machine.

**Portability**: With a bootable Kali Linux USB, you have the power of an entire operating system in your pocket. Whether you're traveling, at a friend's place, or in need of a secure environment on a public computer, you can boot into Kali Linux within minutes.

**Customizability**: If the default Kali Linux distribution doesn't suit your needs, you aren't stuck with it. You have the option to craft a custom Kali Linux ISO image tailored to your requirements and flash it onto the USB drive using the same procedures outlined in this guide.

**Potential for Persistence**: While a basic Kali Live USB drive is ephemeral by design (meaning data won't persist across reboots), with some additional setup, you can configure it to have persistent storage. This is invaluable for ongoing projects where you need to save data, tools, or configurations across multiple sessions.

## Requirements

**Hardware**:

+ A MacBook Air 2016 or any other Mac computer with available USB ports.

+ A My Passport Ultra 2TB hard drive or any USB drive with sufficient storage (minimum 8GB recommended for Kali Linux, though more is preferable for additional tools and persistent storage).

+ USB to Ethernet Adapter: Essential if your Mac computer does not have an Ethernet port, especially since some wireless cards may not be immediately compatible with Kali Linux.

**Software**:

+ Kali Linux ISO Image: You can download the latest version from the official Kali website.

+ macOS Terminal: We'll primarily use the built-in `dd` command to flash the ISO image onto the USB drive.

+ Balena Etcher (Optional): If you prefer a graphical interface or encounter issues with the `dd` command, you can use Balena Etcher or a similar program as a secondary option. For this documentation I will focus on `dd` command.

+ A working macOS/OS X installation to perform the setup.

**Optional but Recommended**:

+ An external keyboard and mouse if you plan to use Kali Linux extensively, as not all built-in Mac input devices are fully supported.

+ Reliable internet connection for downloading tools, updates, and any other necessary files.

+ Backup of any important data on the USB drive, as the process will erase all existing data on the drive.

**Skills and Knowledge**:

+ Basic familiarity with the macOS terminal is essential, especially as we are primarily using command-line operations with the `dd` command.

+ Understanding disk partitioning can be useful, especially if you plan on configuring persistent storage or multiple boot options on your USB drive.

**WARNING**: Although the process of imaging Kali on a USB drive is very easy, you can just as easily overwrite a disk drive you didn’t intend to with `dd` if you do not understand what you are doing, or if you specify an incorrect output path. Double-check what you’re doing before you do it, it’ll be too late afterwards.

## Instructions

**Step 1:** Without the USB drive plugged into the system, open a Terminal window, and type the command `diskutil list` at the command prompt.

**Step 2:** You will get a list of the device paths of the disks mounted on your system, along with information on the partitions on each of the disks. 


**Note:** The reason we run `diskutil list` without the USB drive plugged in is to see what is currently on the system. This will allow us to easily identify the new disk when plugged in. 

**Step 3:** Plug in your USB device to your Apple computer’s USB port and run the command `diskutil list` a second time. Your USB drive’s path will most likely be the last one. In any case, it will be one which wasn’t present before. For me is /dev/disk4 which wasn’t previously present (It maybe be different for you).

**Step 4:** Unmount the drive. For me that would be `diskutil unmountDisk /dev/disk4` (do not simply copy this, verify the correct path on your own system).

**Step 5:** If necessary change directory, `cd` where the Kali ISO file is stored.

**Step 6:** Proceed to image the Kali ISO file to the USB device.

   `sudo dd if=kali-linux-2023.3-live-amd64.iso of=/dev/rdisk4 bs=4M status=progress`

**Note:** If you get the following error: `dd: invalid number '4M'`, simply change the '4M' to '4m'. Another potential error could be `status=progress` does not work on your version of macOS. Remove `status=progress` and instead use 
`CTRL+T `to measure status.

## Summary

In this guide, we walked through the process of creating a bootable Kali Linux USB drive on a macOS/OS X system. By leveraging the built-in utilities of macOS, we were able to prepare and flash a USB drive with the Kali Linux ISO, turning it into a portable and powerful tool for penetration testing and cybersecurity tasks.