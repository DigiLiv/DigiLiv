---
layout: post
title: Slax 9 - ett super-lätt operativsystem till din minnesticka
date: 2017-12-30 19:00:00 +0200
categories: tips linux
---

I november 2017 några av oss kunde noticera återvändningen av Linux distribution Slax efter en lång period av projektets inaktivitet (vi hade inte sett en ny version i flera år, sedan 2013). Jag noticerade bara några dagar sedan, när informationen om en ny (del)version dykte upp på [DistroWatch](https://distrowatch.com/).

{% responsive_image path: assets/imgs/slax-ett-operativsystem-till-din-minnesticka/bootskarm.png label: "Boot-skärmen med distributionens logo" %}

Det finns en stor chans att du har aldrig hört om detta projekt och så ska jag förklara dig varför är denna Linux-distribution **en passende kandidat för alla som letar efter en lätt, snabb och portabel Linux-miljö som ska inte göra någon besviken**.

## Liten och snabb – och behöver inte installeras

Slax är en Linux utgåva som är riktad till alla oss som vill ibland bara browsa på internät / ha en isolerad miljö / ha ett portabel system redo (t.ex. i skolan eller på en allmän dator). Eller de som vill anpassa sitt system och göra det så flyttbart och slimmat som möjligt.

En stor fördel med Slax är att den behöver inte vara installerad på din dators hårddisk – den kan köra direkt från ett USB-flashminne eller datorns RAM-minne (för ännu en snabbare upplevelse). **Detta betyder att du kan utnyttja Slax var du än vill, förutsatt att du har rättigheter till att boota från USB**. Du inte ens behöver den senaste och kraftfullast datorn för att vara nöjd med att använda Slax – krav på hårdvaran är väldigt låga.

{% responsive_image path: assets/imgs/slax-ett-operativsystem-till-din-minnesticka/hardvara-krav.png label: "Officiela hårdvara krav" source_link: https://www.slax.org/introduction.php source_caption: Slax.org %}

Och eftersom Slax också kräver inte mycket lagringsutrymme så ska även en gammal och liten minnesticka väl räcka (*installationsmedian tar upp bara 256 MB*). 

## Bara det viktigaste ingår

Hur är det möjligt att den här Linux-distributionen är så liten i storlek? Anledningen är att **det finns bara få program förinstallerad** – en webbläsare, en textredigerare, en filhanterare och en kalkulator. Inte så många applikationer, men när allt kommer omkring är det allt man behöver att surfa på webben eller skriva anteckningar åt sig själv. 

{% responsive_image path: assets/imgs/slax-ett-operativsystem-till-din-minnesticka/programvaljare.png label: "Programväljaren med förinställda program" %}

Men i fall att du vill, så kan du installera program som du saknar i ditt system. **Det är bara att köra en enda kommando och sedan kan du njuta av applikationer du är van vid** (på Linux, i alla fall – det menar ingen Photoshop, Microsoft Office eller majoriteten av datorspel :-)). *Så kan du ha en video-spelare, musik-spelare, dokument-redigerare, bok-läsare, bildmanipuleringsprogram eller någonting annat som du behöver*.

## Debian som grundval

Det är lätt att lägga till nya applikationer i Slax tack vare faktumet att den är baserade på [Debian](https://www.debian.org/index.sv.html) – en väldigt populär Linux utgåva, som t.ex. [Ubuntu](https://www.ubuntu.com/) byggdes på.

Vill du ha en video-spelare på ditt system? Inte alls ett problem, bara kör en enkel kommando...
```
apt install vlc
```
...och då är du färdig!
{% responsive_image path: assets/imgs/slax-ett-operativsystem-till-din-minnesticka/vlc.png %}

Slax 9.3.0 är baserad på Debian Stretch, då kan du [bläddra bland Stretch:s mjukvarupaket](https://packages.debian.org/sv/stretch/) och installera dem. 

## Prova Slax om du vill

Det är helt enkelt att försöka Slax själv – **det är bara att [lada ned ditributionens ISO-fil från projektets hemsida](https://www.slax.org/), sedan lagra den upp på en ledig minnesticka och följa instruktioner i README filen som finns inne i ISO-arkivet (så att du kan göra minnestickan bootbar)**. Allt är redo då. Det bara återstår att koppla minnesticka till en dator som du vill bruka med Slax, starta den och välja att boota från minnestickan. Färdig :-)
