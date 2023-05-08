# CONFIGURAZIONE SERVER

# INDICE

- [UBUNTU UPDATE UPGRADE](#ubuntu-update-upgrade)
- [CONFIGURARE UN INDIRIZZO IP STATICO](#configurare-un-indirizzo-ip-statico)
- [AUTOLOGIN](#autologin)
- [CONNESSIONE SSH](#connessione-ssh)
  - [Prerequisiti](#prerequisiti)
    - [UFW](#ufw)
  - [Abilitazione](#abilitazione)
  - [Connessione tramite pc](#connessione-tramite-pc)
- [BACKUP DELLA SD](#backup-della-sd)
- [COMMAND LINE](#command-line)

# UBUNTU UPDATE E UPGRADE

> Questa guida fornisce una serie di comandi da utilizzare per effettuare l'aggiornamento e l'upgrade del sistema operativo Ubuntu.

Ripuliamo la cache locale dei pacchetti:

```
sudo apt-get clean
```

Successivamente dobbiamo scaricare la lista aggiornata dei pacchetti e delle nuove versioni disponibili nei repository. Questo comando si limita a recuperare informazioni, ma, in concreto, non installa nulla:

```
sudo apt-get update
```

Questo è il comando principale, poiché scarica ed installa le ultime versioni dei pacchetti, delle dipendenze ed, eventualmente, il kernel più recente. In ogni caso, non esegue mai l’avanzamento di versione:

```
sudo apt-get dist-upgrade -y
```

In questo caso, invece se necessario, si esegue l’avanzamento di versione, passando alla release di Ubuntu successiva:

```
sudo do-release-upgrade
```

Infine, puoi rimuove tutti i pacchetti obsoleti e non più necessari:

```
sudo apt-get autoremove -y
```

# CONFIGURARE UN INDIRIZZO IP STATICO

Per impostare manualmente l'indirizzo IP della scheda di rete Ethernet del tuo Raspberry Pi 4, puoi accedere al file di configurazione network-config sulla scheda SD del tuo Raspberry Pi 4 da un PC Windows seguendo questi passaggi:

- Inserisci la scheda SD nel PC.
- Apri Esplora file e individua la scheda SD.
- Vai alla cartella in cui si trova il file di configurazione network-config.

  > Il file network-config è un file di configurazione per la scheda di rete del Raspberry Pi che viene utilizzato per impostare l'indirizzo IP e altre opzioni di rete. Questo file utilizza una specifica sintassi ed è eseguito all'avvio del sistema.

- Fai clic destro sul file e seleziona "Apri con" e scegli un editor di testo come Notepad o WordPad.
  Se stai usando Ubuntu dovresti vedere quanto segue:

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

- Adattiamo ora il network alla tua connessione di rete desiderata; dovresti vedere che dhcph4 è impostato su "true", ma per configurare un indirizzo IP statico è necessario rimuovere oppure modificare la riga dhcp4. Modifica il file inserendo le seguenti righe per impostare corretamente l'indirizzo IP statico:

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

In questo esempio, l'indirizzo IP statico è impostato su 192.168.1.254 con una subnet mask di /24, il gateway predefinito è impostato su 192.168.1.1 e i server DNS di Google sono utilizzati come risolutori DNS.
Si noti che "dhcp4" indica che il protocollo di configurazione dinamica degli host (DHCP) non viene utilizzato per ottenere l'indirizzo IP dinamicamente, ma viene invece impostato manualmente con l'opzione "addresses".

- Salva le modifiche e chiudi il file di configurazione.
  > È importante salvare il file con il nome "network-config" nella directory principale della scheda SD, poiché questo è il nome del file utilizzato dal sistema operativo Raspberry Pi per leggere le impostazioni di rete durante l'avvio

## Notes:

La parte "nameservers: addresses: [8.8.8.8, 8.8.4.4]" indica che i server DNS di Google sono stati impostati come risolutori DNS per il Raspberry Pi. Quando un dispositivo si connette a Internet, utilizza un risolutore DNS per tradurre i nomi di dominio (ad esempio www.google.com) in corrispondenti indirizzi IP che identificano i server web. In questo caso, i due indirizzi IP specificati (8.8.8.8 e 8.8.4.4) appartengono ai server DNS di Google. In altre parole, il Raspberry Pi utilizzerà questi server per risolvere i nomi di dominio in indirizzi IP quando necessario. Altri risolutori DNS possono essere utilizzati se necessario modificando i valori dell'opzione "addresses".

> Ci sono molti altri risolutori DNS oltre a quelli di Google che possono essere utilizzati. Alcuni esempi sono:
>
> - OpenDNS (208.67.222.222, 208.67.220.220)
> - Cloudflare DNS (1.1.1.1, 1.0.0.1)
> - Quad9 (9.9.9.9, 149.112.112.112)
> - Level3 DNS (4.2.2.1, 4.2.2.2)

Tuttavia, la scelta del risolutore DNS da utilizzare dipende dalle esigenze e dalla posizione geografica. Si consiglia di effettuare una ricerca online per trovare il risolutore DNS che meglio soddisfa le proprie esigenze.

# AUTOLOGIN

Eseguendo i seguenti comandi andremo a creare una cartella ed un file in una directory specifica nel sistema operativo Linux, per consentirci di configurare l'accesso automatico dell'utente "ubuntu" sulla tty1 del sistema.

Navighiamo nel percorso `/etc/systemd/system`:

```
$ cd /etc/systemd/system
```

Adesso all'inetno di system creiamo una cartella denominata : `getty@tty1.service`.d:

```
$ mkdir getty@tty1.service.d
```

Navighiamo all'interno della cartella appena creata :

```
$ cd getty@tty1.service.d
```

Aquesto punto creiamo un file chiamto `autologin.conf` :

```
$ touch autologin.conf
```

Scriviamo all'interno del file:

```
[Service]
ExecStart=
ExecStart=-/sbin/agetty -o '-p -f -- \\u' --noclear --autologin ubuntu - $TERM
```

Una volta che abbiamo configurato l'accesso automatico dell'utente "ubuntu" sulla tty1 del sistema, è necessario riavviare il server Ubuntu per rendere effettive le modifiche. Per fare ciò, possiamo digitare il comando:

```
sudo reboot
```

Dopo il riavvio, se l'autologin è stato configurato correttamente, dovremmo vedere una schermata nera sulla tty1 del sistema.
In questo modo, possiamo continuare ad utilizzare il server tramite connessione SSH o, se preferiamo, possiamo passare ad un altro TTY (ad esempio, premendo CTRL + ALT + F2) e accedere alla riga di comando utilizzando una tastiera e uno schermo collegati direttamente al server.

# CONNESSIONE SSH

## Prerequisiti

### UFW

UFW (Uncomplicated Firewall) è un’utilità di configurazione del firewall fornita con Ubuntu. Tuttavia, non è sempre installato per impostazione predefinita su tutti i sistemi Ubuntu. Per verificare se UFW è già installato sul tuo sistema Ubuntu, puoi utilizzare il comando:

```
sudo ufw status
```

Se UFW è già installato e abilitato sul tuo sistema, vedrai un output simile a questo:

```
Status: active
```

In caso contrario, vedrai un messaggio che indica che UFW non è attualmente abilitato o installato. In questo caso, puoi installarlo utilizzando il comando:

```
sudo apt install ufw
```

## Abilitazione

Abilitiamo SSH su Ubuntu Server, agisci come root o utente con privilegi sudo per installare e abilitare SSH sul tuo sistema Ubuntu puoi seguire questi passaggi:

Installa il pacchetto openssh-server:

```
sudo apt update
sudo apt install openssh-server
```

Al termine dell’installazione, il servizio SSH verrà avviato automaticamente. Puoi verificare se SSH funziona digitando:

```
sudo systemctl status ssh
```

Ubuntu viene fornito con un’utilità di configurazione del firewall chiamata UFW. Se il tuo sistema ha un firewall abilitato, assicurati di aprire la porta SSH:

```
sudo ufw allow ssh
```

## Connessione tramite pc

      ssh utente@ip -p porta
      utente@ip -p porta's password:
      Welcome to Ubuntu 21.10 (GNU/Linux 5.13.0-1011-raspi aarch64)

      * Documentation:  https://help.ubuntu.com
      * Management:     https://landscape.canonical.com
      * Support:        https://ubuntu.com/advantage

        System information as of Mon Feb  7 11:46:29 CET 2022

        System load:              0.02
        Usage of /:               30.1% of 29.34GB
        Memory usage:             38%
        Swap usage:               0%
        Temperature:              38.0 C
        Processes:                217
        Users logged in:          3
        IPv4 address for docker0: 172.17.0.1
        IPv4 address for eth0:    192.168.1.60
        IPv6 address for eth0:    2001:b07:2ec:f92a:dea6:32ff:fea0:5b17
        IPv4 address for tun0:    10.8.0.1


      0 updates can be applied immediately.

# BACKUP DELLA SD

# COMMAND LINE
