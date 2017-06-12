---
layout: post
title: Gör det lättare för din F5 tangent – använd Browsersync!
date:   2017-06-11 22:00:00 +0200
categories: Webbutveckling
---

Om vi skapar eller anpassar front-end av webbsidor genom att editera HTML/CSS källor, det är många gånger som vi måste uppdatera sidorna i vår webbläsare – så att vi kan granska ändringarna. Men varför inte automatisera det?

## Browsersync kommer till hjälp

Ett väldigt nyttigt verktyg, som håller webbfönstret (med vår sida som vi jobbar på) ständigt uppdaterat, heter [BrowserSync](https://www.browsersync.io/){:target="_blank"}. Det är också lätt att ställa upp och använda. Låt oss börja med det!

Först måste vi ha [Node.js](http://nodejs.com/){:target="_blank"} med *npm* pakethanterare installerat på vår dator – då anger vi ett kommando in i terminalen av vårt operativsystem, genom det kan vi installera Browsersync (helst globalt, därför *-g* flaggan):

```javascript
npm install -g browser-sync
```

Därefter bör vi klistra ett JavaScript kodfragment in i källkoden av vår front-end (idealiskt en fragment som visas på alla sidor av vår webbplats – t.ex. header, footer eller liknande). **Det här kodfragmentet ska se till att vår lokala server (som vi kommer att starta senare när vi vill arbeta på vår sida) ansluter till webbsidan i vår webbläsare (genom [WebSockets](https://sv.wikipedia.org/wiki/Websocket){:target="_blank"}) och kommunicerar med den i realtid (så att servern kan meddela webbläsaren om att den borde uppdatera webbsidan).**

Kodfragmentet ska se så här ut (eller något analogt, du hittar det efter du installerar och startar Browsersync server):

```
<script id="__bs_script__">
    //<![CDATA[
        document
            .write(
                "<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.12'><\/script>"
                .replace("HOST", location.hostname)
            );
    //]]>
</script>
```

Det finns också andra alternativ hur kan vi införa Browsersync (som t.ex. genom [Gulp](https://browsersync.io/docs/gulp){:target="_blank"} eller [Grunt](https://browsersync.io/docs/grunt){:target="_blank"}), så vi kan frivilligt välja det bästa sättet som passar vår workflow.

## Starta severn!

Nu kan vi starta Browsersync direkt och arbeta vidare på vår webbsida – **Browsersync uppmärksammar alla ändringar som vi gör till filer och uppdaterar webbläsaren automatiskt**. Det gör vi genom ett annat kommando, som vi startar i rotmappen där vi har våra filer (*bara om det gäller en statisk sida, annars kan vi använda Browsersync som en proxy, men jak ska inte täcka den möjligheten här – du kan läsa mer om den [på projektets webbsida](https://browsersync.io/docs/options#option-proxy){:target="_blank"}*):

```javascript
browser-sync start --server --files "css/*.css" "*.html"
```

Så här enkelt startar du servern och meddelar den om vilka filer ska servern observera ändringar på (genom flaggan *--files* och dess parametrar, vilka föreställar vägar till filerna som ska observeras).

{% responsive_image path: assets/imgs/gor-det-lattare-for-din-f5-tangent/browsersync_kommando.png %}

Detta är outputen som vi ska se efter att vi kör kommandot ovan. Vi kan se två "Access URLs":

* Den första, ***http://localhost:3000*** är en ingångspunkten för vår webbsida – sidan ska också uppdateras automatiskt
* Den andra, ***http://localhost:3001*** är en webbpannel genom den kan vi granska statusen på Browsersync och ändra inställningarna

{% responsive_image path: assets/imgs/gor-det-lattare-for-din-f5-tangent/browsersync_dash.png %}

Det är också bra att vi kan ansluta till servrern "externt", om vi anpassar brandväggen och router på ett rätt sätt (IP måste vara tillgänglig utifrån det lokala nätverket).

## Ytterligare verktyg och möjligheter

Browsersync innehåller dessutom extra funktioner som ska kanske hjälpa oss med webbutveckling. 

En av de funktionerna är att Browsersync kan **markera alla HTML elementer på sidan med en kontur**, eller även **lägga till skuggor till dem – som ska beteckna djupet (dvs. z-koordinat) av varje element**. Till slut kan den visa ett **rutnät över hela webbsidan** (som kan hjälpa oss till att positionera individuella element).

Här kan du observera hur ska det se ut med alla optionerna på samtidigt :-)

{% responsive_image path: assets/imgs/gor-det-lattare-for-din-f5-tangent/browsersync_css.png %}

Andra alternativ kan t.ex. begränsa (bara som en simulering inom Browsersync) anslutningshastighet så att vi kan testa hur ska vår sida behöva vid en langsam internetanslutning. Också ganska nyttig!