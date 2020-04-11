---
title: En egen webbsida – lönar det sig att bruka en statisk generator?
date: 2017-11-18 18:00:00 +0200
kategori:
    - tips
    - webb
---

Nuförtiden har nästan alla sin egen webbsida – som föreställer en plats på nätet där kan man presentera sig och dela med sig av sina tankar. Vi har massor av olika möjligheter att skapa och styra en egen webbplats, ofta helt enkelt och billigt. Vi kan använda en specialiserad tjänst, som t.ex. [WordPress.com](https://wordpress.com/) eller vi kan också köra vår sida själva på en server (antingen vår egen server eller på ett webbhotell).

Men vanligtvis är det inte kostnadsfritt. Trots att det inte ska bli så mycket (med små sidor, åtminstone), behöver vi fortfarande betala några pengar för hosting och möjligtvis vårt enskilda domännamn. **Men kan vi ha allt detta utan att spendera en enda krona på det?**

## Statiska webbsidor som ett alternativ till WordPress e.l.

Statiska webbsidor är genererad bara en gång vid varje ändring av innehåll (i motsatsen till WordPress eller andra [innehållhanteringssystem](https://sv.wikipedia.org/wiki/Inneh%C3%A5llshanteringssystem), som vanligtvis åter-genererar innehållet vid varje begäran från besökarnas webbläsare) och behöver inte beräknas på nytt i mellantiden, så **vi behöver inte att spendera hundratals kronor för att betala för en plats i ett PHP-webhotell och för ett domännamn** (som vi kan skaffa kostnadsfritt, om vi vore nöjda med ett tredje nivå domännamn – dvs. "*vårtnamn.någonhuvuddomän.se*" istället för "*vårtnamn.se*").

Istället **räcker det med att ladda upp vår sida till en fjärrlagring och då är vi allt klara**. Från och med det här ögonblicket kan alla människor på nätet njuta av våra nya inlägg eller annat häftigt innehåll!

Det är också värt att omnämna att **statiska webbsidor är mycket, mycket snabbare**, eftersom inga beräkningar pågår när sidan serveras.

Här är några av de mest populära statiska generatorerna som finns:

* **[Jekyll](https://jekyllrb.com/)**
* **[Hugo](https://gohugo.io/)**
* **[Hexo](https://hexo.io/)**
* **[Gatsby](https://www.gatsbyjs.org/)**
* *och flera andra, som du hittar t.ex. [här](https://www.staticgen.com/)*

{{< image src="hugo.png" >}}

## En duktig lösning, men inte för alla

Såsom nästan allt som finns på jorden, även statiska generatorer har nackdelar – som gäller i vissa scenario. En av de störste nackdelarna är att **vi kan inte generera något dynamiskt innehåll på servern i realtid** och **det går alltså inte att kommunicera med servern på ett dynamiskt sätt** — det kan vara ett problem t.ex. med kommentarer eller sökning, och det finns inget annat kvar än att nyttja en tredjeparts lösning. Å ena sida är det en nackdel, men å den andra menar det att **webbsidan blir också säkrare, eftersom angripare kan inte köra någon skadlig kod mot den**.

Det kan också vara ett problem att **det finns inget användbart adminsgränsnitt för att hantera webbsidans innehåll** – det bara finns filer (typiskt i [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax – [så här skriver man texter](https://anders.thoresson.se/sa-skriver-du-dina-texter-med-markdown/)), vilka tjänar som en källa att bygga den slutliga webbsidan från.

Så kan det se ut när man skriver ett blogginlägg:

{{< image src="markdown.png" >}}

Men trots att en statisk webbsida blir en lite svårare och tråkigare att sköta, finns det också en möjlighet att lära sig något nytt och **bygga upp sitt eget workflow då är man mest effektiv** (t.o.m. effektivare än när man skulle använda ett komplicerat innehållhanteringssystem!).

## Flera olika hosting-möjligheter

Med en statiska webbsida har vi också mycket fler alternativ när det gäller plats där vi kan köra vår sida. Det är sant att vi kan använda en vanlig webbhotellplan som stödjer WordPress osv., men det blir onödigt dyrt (eftersom vi inte behöver stöd för dynamiska programmeringsspråk för att köra en statisk webbsida, så det är onyttigt att spendera pengar på det).

Ett bättre alternativ är att **ladda upp den genererade webbsidan (som vi kan generera på vår egen dator där vi skriver inlägg till webbsidan/bloggen) till en disk på nätet som är tillgänglig från utsidan genom en webbserver** (och därför kan servera våra filer som vår webbsida består av). Med fjärrlagringen finns det ett flertal möjligheter, eftersom "fjärrlagring" är en bredd term som täcker allt som behåller filer och är tillgängligt på nätet – från enkla filservrar till allmäna versionkontrollsystem (ett bra exempel är [GitHub.com](https://github.com/) med sina [Github Pages](https://pages.github.com/)) och olika molnlagring-lösningar (om du har hört om **Amazon-moln**, då är det [också ett alternativ](https://aws.amazon.com/s3/) där kan man ladda upp en statisk webbsida).

Här har du några exempel av fjärrlagring-lösningar där kan du köra din statisk webbsida (det finns oändligt fler möjligheter, så det är helt omöjligt att lista dem alla här :-))

* **[Github Pages](https://pages.github.com/)** – man laddar upp webbsidan till ett git repo och det fungerar **helt kostnadsfritt** (liknande tjänster är t.ex. [GitLab Pages](https://about.gitlab.com/features/pages/), [Netlify](https://www.netlify.com/), [Google Firebase](https://firebase.google.com/docs/hosting/))
* **[Amazon S3](https://aws.amazon.com/s3/)** – (liknande tjänster är t.ex. [Google Cloud Storage](https://cloud.google.com/storage/), [Microsoft Azure](https://azure.microsoft.com/sv-se/))
* **[Google Drive](https://www.google.se/drive/about.html)** – en vanlig filutryme som kan dessutom servera uppladdade filer som en webbsida (men det är hellre en provisorisklösning)
* *Och många flera...*

## Ett eget domännamn krävs ej

Det är alltid bättre att skillja sig med ett unikt domännamn, men det inte behövs att äga en egen domän. På det sättet kan man spara ännu mer pengar.

Men det måste sägas att detta gäller också för alla andra webbsidor, så det är inte en uteslutande fördel med statiska webbsidor.

## Skulle jag rekommendera att använda en statisk generator?

Till slut vill jag svara på frågan från artikelns titel – Ja, om du bara behöver **en enkel, snabb, säker, billig presentationssida (eller blogg) för dig eller ditt företag**, en statisk generator ska väl löna sig (eftersom du kommer att spara pengar på hosting-kostnader) och jag rekommenderar att använda en då* :-)

**Jag kan intyga – den här bloggen genereras med [Jekyll](https://jekyllrb.com/) och utplaceras med [Netlify](https://www.netlify.com/).*
