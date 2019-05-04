---
title: "Ubuntu 19.04 Disco Dingo – en mini-recension"
date: 2019-04-22T22:09:09+02:00
kategori:
    - linux
---

En ny version av Ubuntu (en av de mest använda GNU/Linux distributioner) är här ännu igen, så bestämde jag mig att jag skulle prova den i VirtualBox. Jag har inte använt Ubuntu i ett par år (just nu använder jag [Void Linux](https://voidlinux.org/) som mitt dagligt operativsystem), därför är det nu ett bra tillfälle att kika på vad som har ändrat i Ubuntu under de senaste åren. Till en början måste jag säga – **den nya Ubuntu-versionen ser väldigt bra och användbart ut!**

Ubuntu 19.04 släpptes ut den 18 april 2019. Du kan ladda ned den helt kostnadsfritt på [Ubuntus hemsida](http://releases.ubuntu.com/19.04/).

## Låt oss installera

{{< image src="start_ubuntu.png" caption="Prova eller installera? Det är frågan :-)" >}}

**Installeringsprocessen är riktigt snabbt och enkelt med Ubuntu 19.04.** Det har alltid varit så här, så inga överraskningar förekommer. Det är bara att välja ett språk, en tangentbordslayout och också vilken disk(er) ska Ubuntu installeras på. Sedan specificerar vi vilken tidszon befinner vi oss i och sätter in vårt nya användarnamn samt med ett lösenord. Då börjar installationen.

{{< image src="installering.png" caption="Ubuntus filer kopieras till hårddisken" >}}

Till och med i min virtualmaskin tog den hela processen bara få minuter och efter en omstart bootade jag till min nya Ubuntu-installationen. Än så länge går allt bra!

{{< image src="inloggning.png" caption="Dags att logga in!" >}}

## Första inloggningen
Äntligen är det dags att logga oss in och utforska vad den nyaste Ubuntu-utgåvan har att erbjuda till oss. Genast efter inloggningen har vi **möjlighet att ansluta våra molnkonto till Ubuntu systemet**. På detta vis kan vi helt enkelt synkronisera våra filer och andra saker (som t.ex. kalender). Men det är inte obligatorisk, så vi kan fortsätt utan att göra det.

{{< image src="molnkontoanslutning.png" >}}

Sedan presenteras vi med skrivbordet som har en bild av **”Disco Dingo”** (dvs. en ”diskohund” med hörlurar på :-)) som bakgrunden. Vår skrivbordsmiljö i Ubuntu är [GNOME](https://www.gnome.org/) (här i version *3.32.1*), men det är kraftigt anpassad av Ubuntus utvecklare. Den tid är förbi (sedan utgåvan 18.04, vilken kom ut för ett år sedan), då Ubuntu begagnade sitt eget användargränssnitt [Unity](https://sv.wikipedia.org/wiki/Unity_(anv%C3%A4ndargr%C3%A4nssnitt)) – på gott och ont.

{{< image src="backgrundsbild.png" caption="Så här ser skrivbordsmiljön ut strax efter installationen" >}}

## Programvaruutrustning
För att använda ett operativsystem behöver vi program och applikationer att köra på det, Ubuntu har lyckligtvis flera av dem förinstallerade.

Om det inte räcker med förinstallerade program kan vi installera nya genom en inbyggt applikationsbutik (som är GNOME Software i Ubuntu 19.04). **Butiken erbjuder hundratals applikationer inom flera olika kategorier, vi kan finna t.ex. media-spelare, produktivitetsverktyg, spel, samt grafikredigerare och många andra kategorier som man kan tänka på.**

{{< image src="programvara_for_ubuntu.png" caption="Utbudet är brett" >}}

Varje applikation i applikationsbutiken har sin egen sida med applikationens detaljer, bland annat **en kort beskrivning**, **skärmdumpar** och **recensioner från andra användare**. Detta gör det lättare för oss att få grundläggande information om applikationer och bestämma oss om vi verkligen vill installera enskilda applikationer eller inte.
Sedan är det bara att klicka på knappen ”Installera” och vänta medan applikationen görs redo att användas.

Det positiva med Ubuntu är att den innehåller **ganska nya versioner av mjukvarupaket**, vilket innebär att program inkluderade i systemet har alla viktiga säkerhetsuppdateringar och alla de senaste funktionerna.

{{< image src="distrowatch.png" caption="Paketversioner enligt DistroWatch.com" >}}

Den här utgåvan av Ubuntu inled också **en av de senaste versionerna av Linuxkärnan** – det är versionen 5.0.0, vilken släpptes bara en och halv månad innan Ubuntu 19.04 kom ut! Igen, detta ska  garantera (eller åtminstone ”göra mer liknande” :-)) maximalt kompatibilitet av operativsystemet med den senaste hårdvaran osv.

{{< image src="kernel_version.png" caption="Kernel-versionen är 5.0.0 i Ubuntu 19.04" >}}

## Anpassa Ubuntu som du vill
Förinstallerade program och verktyg gör det möjligt att förvalta systemet genom det grafiska gränssnittet – man behöver inte mixtra med kommandotolken för att anpassa systemet (men det är fortfarande en möjlighet för dig som vill).

Det är lätt att ändra många olika systeminställningar genom **ett unifierat inställningscentrum** där vi kan ändra inställningar inom flera kategorier under ett enda tak. Därvid kan vi slå på/av trådlösa enheter, anpassa skrivbordet och skärminställningar, ansluta våra online konto eller liknande.

{{< image src="installningar.png" >}}

Ganska nyttig är **möjligheten att hantera aviseringar för individuella appar**, på ett likt sätt som det går på mobiltelefoner med Android eller iOS operativsystem.
Så kan vi förbjuda notifikationer från appar vi är inte så intresserad av, men samtidigt tillåta aviseringar från andra appar. Eller tvärtom kan vi tillåta bara några appar att avisera oss och förbjuda alla andra att göra det.

{{< image src="programaviseringar.png" >}}

Det säkert går att anpassa användargränssnitt vidare – eftersom Ubuntu 19.04 utnyttjar GNOME som den primära skrivbordsmiljön, vi kan tillämpa finjusteringar antingen genom att ändra värdar i konfigurationsfiler, eller genom ett program, som t.ex. ”[GNOME Justering](https://wiki.gnome.org/action/show/Apps/Tweaks)” (vilket vi kan hitta i Ubuntus appbutik).

{{< image src="justering.png" >}}

## Slutgiltig omdöme

Ubuntu 19.04 är ett operativsystem som kan **lätt installeras, användas och förvaltas**. Jag rekommenderar det till alla som bara vill ha ett bra-funkande operativsystem utan att oroa sig över datorvirus eller liknande hot som är frekventa på Windows. Och som en stor bonus – man kan hämta det helt gratis.

En nackdel för oss som föredrar [fri mjukvara](https://www.gnu.org/philosophy/free-sw.sv.html) (*”fri som i frihet”*) kan vara faktumet att många verktyg som ingår och drivrutiner som installeras genom Ubuntus drivrutinshanterare är proprietära och det är inte lätt att göra av med dem.  
*Men ändå måste vi ta hänsyn till att det är inte Ubuntus mål att eliminera proprietär mjukvara, utan att försörja en lättanvändbar miljö för alla användare (även för dem som är inte ”tekniskt-kunniga”). Ubuntu gör sitt jobb bra.*

{{< image src="splash.png" caption="Bootskärmen" >}}

Min åsikt? **Ubuntu 19.04 är ett bra alternativ till Windows**. Om du är nyfiken, tveka inte och [prova Ubuntu nu](https://www.ubuntu.com/download/desktop)!

