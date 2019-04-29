---
title: "Hårddiskutrymmet börjar ta slut? Ta reda på varför!"
date: 2019-04-27T9:25:46+01:00
kategori:
    - tips
    - linux
    - windows
---

Att få brist på lagringsutrymmet går med datorbruk hand i hand. **Ju mer filer man skapar eller kopierar till sin dator, desto tidigare kommer man att ha brist på hårddiskutrymmet.**

Om du använder dig av *Windows* eller ett *GNU/Linux* operativsystem, då har jag några bra tips för dig – tips om verktyg som gör det lätt möjligt att identifiera orsaken till bristen och sedan åtgärda på den.

## WinDirStat och QDirStat

Bland program med grafiska gränssnitt finns det t.ex. [WinDirStat](https://windirstat.net/), som kan köras (enbart) på Windows operativsystem – därför dess namn. Det är ett traditionellt program som inspirerades av [KDirStat](http://kdirstat.sourceforge.net/) (vilket bara utvecklades för GNU/Linux), vars första version släpptes år 2003 och så är det helt möjligt att många av er känner igen det redan. *Det också inte har uppdaterats på ett rad år (den senaste versionen är från år 2007), vilket (kanske) betecknar att programmet är redan perfekt :-)*

{{< image src="windirstat.png" caption="WinDirStat" >}}

Hur det än är med detta "perfektion" så kan man se att programmets användargränssnitt är praktiskt och enkelt, med **en översiktlig lista över mappar och filer som finns på datorn**. Listan dessutom visar **information om hur mycket lagring varje av dem tar upp**.

På GNU/Linux finns det andra alternativ. [QDirStat](https://github.com/shundhammer/qdirstat) är ännu ett nyare program, som är den direkta uppföljaren till KDirStat (till och med av den samma utvecklaren). Detta program funkar och visar information på liknande sätt som förutnämnde WinDirStat.

{{< image src="qdirstat.png" caption="QDirStat" >}}

Om man använder sig av *Gnome* eller *KDE* skrivbordsmiljöer, dessa har också sina egna projekt till visualisering av mappstrukturens storlek – [Disk Usage Analyzer](https://en.wikipedia.org/wiki/Disk_Usage_Analyzer) (Gnome) och [FileLight](https://kde.org/applications/utilities/filelight) (KDE).

## du, ncdu

För dig som föredrar minimalistiska lösningar finns det också andra program för GNU/Linux, som är väldigt små i storlek och kan köras i kommandofältet.

Operativsystem med GNU Coreutils innehåller ett hjälpprogram kallad **du**. Om du kör *du*, då kan du ta rätt på hur mycket lagringsutrymme mappar/filer tar upp. Men *du* inte riktigt menar du (okej, det är inte ens roligt, ska sluta med dåliga vitsar nu), utan är det en akronym som står för "***d**isk **u**sage*" ("*diskanvändning*").

När vi kör *du* kommando utan några parametrar så presenteras vi med en lista över mappar och filer som finns i mappstruktur börjande från mappen där vi befinner oss vid körning av kommandot. Varje rad betecknar en fils storlek (uttryckt i bytes) och sökvägen till denna fil.

{{< image src="du_lista.png" caption="En lista över några filer med du" >}}

Beroende på innehållet av mappen som genomsöks på detta vis kan detta producera tusentals linjer av uttryck som ska skrolla i blixtfart mitt framför ögonen på oss. Ganska förvirrande!

Varför då? Helt enkelt, *du* har listat över alla filerna som finns i mappstrukturen under den nuvarande mappen och skrivit ut storleken av varje fil.  
Om vi behöver bara den sammanlagde storleken av alla dessa filer, då kan vi ändra detta beteende genom att köra kommandot med *"-s"* flagga. Om vi också lägger till *"-h"* flagga, då ska den göra uttrycket människoläsbart. Det slutgiltiga kommandot är därför `du -sh`.

{{< image src="du.png" caption="101 GB av filer i min hemmapp" >}}

Mycket bättre, eller? Om det inte räcker att ha översikt på filernas/mapparnas storlek i enkel text, lyckligtvis har vi också en annan möjlighet – **ncdu**. Man kan se detta program som "*du* på steroider", eftersom den erbjuder en pseudo-grafiskt gränssnitt – den ser ut som om programmet hade ett grafiskt gränssnitt, utan det faktiskt kör i kommandofältet. Detta är ett användarvänligt alternativ till *du* – man kan se relativa storlekar av mappar helt visuellt, vid den första blicken.

{{< image src="ncdu.png" caption="Visuell tolkning av mapparnas storlek med ncdu" >}}

Listan över mappar är också **sorterad efter storlek som standard**. På detta vis kan man lätt identifiera vilka är filerna som tar upp mest utrymme inom den ursprungliga mappen. Man kan även radera valda mappar direkt i appen genom en enda tangenttryckning.

## Fler utrymme för din data

Med de ovan nämnda verktygen kan du **lätt identifiera orsaken till det bristande diskutrymmet** och sedan **radera filer som är gamla eller inte längre behövs**. Dessutom **slipper du köpa nya diskar till din dator** och det definitivt kommer att löna sig stort :-)
