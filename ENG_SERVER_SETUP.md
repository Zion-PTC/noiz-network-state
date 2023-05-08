# SERVER SETUP

# Index

- [UBUNTU UPDATE UPGRADE](#ubuntu-update)
- [SETTING STATIC IP](#setting-static-ip)
- [AUTOLOGIN](#autologin)
- [SSH CONNECTION](#ssh-connection)
  - [Prerequisiti](#prerequisiti)
    - [UFW](#ufw)
  - [Enabling](#enabling)
  - [Connection from pc](#connection-from-pc)
- [SD CARD BACKUP](#sd-card-backup)
- [COMMAND LINE](#command-line)

# UBUNTU UPDATE E UPGRADE

> This guide provides a series of commands to use to update and upgrade the Ubuntu operating system.

First, we clean the local package cache:

```
sudo apt-get clean
```

Next, we need to download the updated list of packages and new versions available in the repositories. This command only retrieves information, but does not install anything in concrete:

```
sudo apt-get update
```

The main command is the following, as it downloads and installs the latest versions of packages, dependencies, and possibly the most recent kernel. In any case, it never performs a version upgrade:

```
sudo apt-get dist-upgrade -y
```

Alternatively, if needed, you can perform a version upgrade, moving to the next Ubuntu release:

```
sudo do-release-upgrade
```

Finally, you can remove all outdated and unnecessary packages:

```
sudo apt-get autoremove -y
```

# SETTING STATIC IP

To manually set the IP address of your Ethernet network card on your Raspberry Pi 4, you can access the network-config configuration file on the SD card of your Raspberry Pi 4 from a Windows PC by following these steps:

- Insert the SD card into your PC.
- Open File Explorer and locate the SD card.
- Navigate to the folder where the network-config file is located.

  > The network-config file is a configuration file for the Raspberry Pi's network card that is used to set the IP address and other network options. This file uses a specific syntax and is executed at system boot time.

- Right-click on the file and select "Open with" and choose a text editor such as Notepad or WordPad.
  You should see the following if you're using Ubuntu:

```
# This file contains a netpan-compatible configuration wich cloud-init
# will apply on firt-boot. Please refer to the cloud-init documentation and
# the netplan reference for full details:
#
# https://cloudinit.readthedocs.io/
# https://netplan.io/reference
#
# Some additional examples are commented out below

version: 2
ethernets:
  eth0:
    dhcp4: true
    optional: true
#wifis:
#  wlan0:
#       dhcp4: true
#       optional: true
#       access-points:
#         myhomewifi:
#           password: "S3kr1t"
#         myworkwifi:
#           password: "correct battery horse staple"
#         workssid:
#           auth:
#             key-management: eap
#             method: peap
#             identity: "me@example.com"
#             password: "passw0rd"
#             ca-certificate: /etc/my_ca.pem
```

- Locate the network adapter to your desired connection, you shoud see dhcph4 is set to true but to configure static IP needs to remove or edit dhcp4 line. Edit the file by inserting the following lines to set the static IP address:

```
#[...]
#
# Some additional examples are commented out below

version: 2
ethernets:
    eth0:
        dhcp4: no
        addresses:
[192.168.1.254/24]
        gateway4: 192.168.1.1
        nameservers:
            addresses:
[8.8.8.8, 8.8.4.4]
optional: true
#wifis:
#  wlan0:
#       dhcp4: true
#       optional: true
#[...]
```

In this example, the static IP address is set to 192.168.1.254 with a subnet mask of /24, the default gateway is set to 192.168.1.1, and Google DNS servers are used as DNS resolvers.
Note that "dhcp4" indicates that the Dynamic Host Configuration Protocol (DHCP) is not used to obtain the IP address dynamically but is instead manually set with the "addresses" option.

- Save the changes and close the configuration file.
  > It is important to save the file with the name "network-config" in the root directory of the SD card, as this is the file name used by the Raspberry Pi operating system to read network settings during boot.

## Notes:

The "nameservers: addresses: [8.8.8.8, 8.8.4.4]" part indicates that Google DNS servers have been set as DNS resolvers for the Raspberry Pi. When a device connects to the internet, it uses a DNS resolver to translate domain names (e.g. www.google.com) into corresponding IP addresses that identify the web servers. In this case, the two specified IP addresses (8.8.8.8 and 8.8.4.4) belong to Google DNS servers. In other words, the Raspberry Pi will use these servers to resolve domain names into IP addresses when necessary. Other DNS resolvers can be used if needed by modifying the values in the "addresses" option.

> There are many other DNS resolvers besides Google's that can be used. Some examples are:
>
> - OpenDNS (208.67.222.222, 208.67.220.220)
> - Cloudflare DNS (1.1.1.1, 1.0.0.1)
> - Quad9 (9.9.9.9, 149.112.112.112)
> - Level3 DNS (4.2.2.1, 4.2.2.2)

However, the choice of which DNS resolver to use depends on one's needs and geographical location. It is recommended to do an online search to find the DNS resolver that best meets one's needs.

# AUTOLOGIN

By running the following commands we will create a folder and a file in a specific directory in the Linux operating system, to allow us to configure automatic user login on tty1 of the system for the "ubuntu" user.

Navigate to the path `/etc/systemd/system`:

```
$ cd /etc/systemd/system
```

Now, inside the systemd directory, we create a folder called `getty@tty1.service.d`:

```
$ mkdir getty@tty1.service.d
```

Navigating inside the newly created folder:

```
$ cd getty@tty1.service.d
```

Now create a file called : `autologin.conf` :

```
$ touch autologin.conf
```

In file created write this content:

```
[Service]
ExecStart=
ExecStart=-/sbin/agetty -o '-p -f -- \\u' --noclear --autologin ubuntu - $TERM
```

# SSH CONNECTION

## Prerequisiti

### UFW

UFW (Uncomplicated Firewall) is a firewall configuration utility provided with Ubuntu. However, it is not always installed by default on all Ubuntu systems. To check if UFW is already installed on your Ubuntu system, you can use the command:

```
sudo ufw status
```

If UFW is already installed and enabled on your system, you will see output similar to this:

```
Status: active
```

Otherwise, you will see a message indicating that UFW is currently not enabled or installed. In this case, you can install it using the command:

```
sudo apt install ufw
```

## Enabling

To enable SSH on Ubuntu Server, act as root or a user with sudo privileges to install and enable SSH on your Ubuntu system, follow these steps:

Install the openssh-server package:

```
sudo apt update
sudo apt install openssh-server
```

Upon installation completion, the SSH service will be automatically started. You can verify if SSH is working by typing:

```
sudo systemctl status ssh
```

Ubuntu comes with a firewall configuration utility called UFW. If your system has a firewall enabled, make sure to open the SSH port:

```
sudo ufw allow ssh
```

## Connection from pc

    ssh utente@ip -p porta
    utente@ip -p porta's password:
    Welcome to Ubuntu 21.10 (GNU/Linux 5.13.0-1011-raspi aarch64)

    - Documentation: https://help.ubuntu.com
    - Management: https://landscape.canonical.com
    - Support: https://ubuntu.com/advantage

      System information as of Mon Feb 7 11:46:29 CET 2022

      System load: 0.02
      Usage of /: 30.1% of 29.34GB
      Memory usage: 38%
      Swap usage: 0%
      Temperature: 38.0 C
      Processes: 217
      Users logged in: 3
      IPv4 address for docker0: 172.17.0.1
      IPv4 address for eth0: 192.168.1.60
      IPv6 address for eth0: 2001:b07:2ec:f92a:dea6:32ff:fea0:5b17
      IPv4 address for tun0: 10.8.0.1

    0 updates can be applied immediately.

# SD CARD BACKUP

# COMMAND LINE
