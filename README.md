# 🚀 Frontend Development

### ProductBiografie

Wiebe Ranzijn - Klas 210 \
Docent: **_Marten Paul Moolenaar_**

## 📎 De Opdracht

Voor de eindopdracht voor FED moet je 2 pagina’s namaken van een website. Hierbij moesten wij ook een keuze maken of je
de website responsive uit ging werken of 5 features uit de Surface plane lijst toevoegden.

Hierbij heb ik gekozen om de website ***Responsive*** te maken met de reden dat veel elementen op de website zelf al
redelijk wat moeite waren om uit te werken.

## 💻 Gekozen Website: League of Legends

Er staan veel animaties en elementen op deze website waar ik erg geïnteresseerd in ben om na te maken. Ik kom vaak op
websites met fantastische animaties en functies, wat me altijd nieuwsgierig maakt naar de manier waarop ze zijn gemaakt.

De league of legends is een goed voorbeeld hiervan omdat de site er top uitziet en veel ingewikkelde elementen bezit die
ik ook wil proberen na te maken.

www.leagueoflegends.com

## ⚠️ Notice: Codepen Opdrachten

Omdat ik al veel voorkennis had in het onderdeel van programmeren heb ik de keuze gemaakt om veel van de code opdrachten
niet te doen. Met deze reden was ik al wat eerder begonnen met het maken van de eindopdracht.

---

# ✍️ Eerste week

## 📝 Eigen Website

- Basis opzetten van de website.
- Main Header van de pagina uitgewerkt en responsive gemaakt.

In de eerste week heb ik een begon gemaakt aan het project om aan de header van de pagina te werken.

Hierbij heb ik ook een basis alvast kunnen maken voor hoe ik mijn project in elkaar wil zetten (Met bijvoorbeeld
components via classes) en hoe ik dit in mijn code ga organiseren.

_Voorbeeld van variables voor de elementen in de Header._

```css
@import 'reset.css';
@import 'fonts.css';

:root {
    --header-background: #111;

    --header-navitem-hover: #303030;
    --header-navitem-underline: #0095B0;

    --primary-button-background: #00BCDC;
    --primary-button-hover-background: #5AC3DF;
    --primary-button-color: #121212;

    --secondary-button-background: #252525;
    --secondary-button-color: #fff;
}
```

Hierbij heb ik gekeken of ik alle kleine details binnen de header zo goed mogelijk na kon maken en hierbij heb ik online
ook alle fonts gevonden die de League of Legends site gebruikt.

> ### 📚 Fonts
> - Spiegel Sans: https://befonts.com/spiegel-sans-font-family.html
> - FF MarkPro: https://dwl.freefontsfamily.com/download/ff-mark-font/
> - Beaufort for LOL: https://www.fontget.com/font/beaufort-for-lol/

### 💻 **Desktop Versie:**

![](../../Downloads/Screenshot 2023-09-14 at 08.27.27.png)

### 📱 **Tablet Versie:**

![](../../Downloads/find.png)

## 🔖 Bevindingen Screenreader

- Je verliest snel de locatie waar je bent op de website.
- Je moet door erg veel informatie gaan voordat je op de knop of bij de informatie bent waar je naar opzoek was.
- Tijdens het gebruiken van de screenreader word je vaak herinnerd wat je hebt geselecteerd. Wat deels vanwege constante
  herhaling wat vervelend, maar wel ontzettend handig voor als je niet meer weet waar je bent op de pagina.
- Op sommige websites met een fixed header is het niet mogelijk om navigatie opties te selecteren.
- Als je op een link klikt en je naar een andere website gaat, raak je snel de hele weg kwijt wat er nou gebeurd is. Dit
  komt ook omdat als je te snel navigeert, slaat de screenreader de notificatie over dat je naar een andere website bent
  gegaan.

## 🙈 Bevindingen Visuele handicap

<img src="../../Downloads/Screenshot 2023-09-06 at 20.14.35.png" width="300">
<img src="../../Downloads/Screenshot 2023-09-06 at 20.04.11.png" height="160">
<img src="../../Downloads/Screenshot 2023-09-06 at 20.04.11.png" height="160">

- Grotere en dikkere teksten helpen erg bij slechtziende.
- Wanneer je problemen hebt met contrast zien tussen elementen, merk je erg snel dat lichtere teksten en foto’s of
illustraties ontzettend snel wegvallen.
- Tijdens het testen hoe een persoon met kleurenblindheid iets ziet, merk je snel dat veel primaire en secondaire kleuren
op elkaar beginnen te lijken. Wat duidelijk aan geeft dat tijdens het ontwerpen van een website de flow en focus via
kleur niet hetzelfde is bij mensen die kleurenblind zijn.

---

# 🎨 Tweede week

### 📝 Aanpassingen

- Components gemaakt voor de buttons.
- Hero section gemaakt met live video.
- Begin Footer uitgewerkt.

![](../../Desktop/Screenshots/Screenshot 2023-09-12 at 17.16.39.png)

![](../../Desktop/Screenshot 2023-11-06 at 17.21.12.png)

---

# 🎨 Derde week

### 📝 Aanpassingen

- Animerende border gemaakt voor de buttons en grotere elementen.

## 🛠️ Border Animatie met Canvas

Veel elementen op de League site hebben geanimeerde borders eromheen. Met snel onderzoek had ik uitgevonden dat deze
borders allemaal werden ingeladen met het gebruik van de `canvas` element. Dit leek mij ook logisch omdat met plain CSS
het niet mogelijk is om doorzichtige geknipte borders te maken.

Mijn eigen oplossing om dit te maken was om met het gebruik van lijnen binnen de canvas een geknipte vierkant in te
laden, en deze dan te animeren door de lijnen een veranderende offset te geven waardoor het lijkt alsof de randen
smaller worden.

<img src="../../Downloads/offset2.png" height="225"> <img src="../../Desktop/Screenshot 2023-11-07 at 00.11.12.png" height="225"> 

Andere soorten borders maken, zoals op de League of Legends website, via deze manier is hierdoor erg makkelijk, maar ik
moet wel elke keer specifiek aangeven hoe het eruit moet zien.

```javascript
/* Voorbeeld: CutBorder.js Module */

const paths = [
    [cornerOffset, 0],
    [width, 0],
    [width, height - cornerOffset],
    [width - cornerOffset, height],
    [0, height],
    [0, cornerOffset]
]
```
---

# 🧨️ Vierde week

## 🔍 Gekregen Feedback
Tijdens mijn feedback gesprek deze week heb ik binnen gekregen dat ik mogelijk wat meer moet gaan kijken naar betere
accessibility op de website. Daarnaast heb ik ook binnen gekregen dat iets minder om de details moet gaan letten zodat
ik wat beter op weg kan komen met de website op zijn geheel.

Ik merk heel erg dat ik vooral met programmeren iets teveel in de kleine onderdelen begin te duiken waardoor ik tijd
verlies. Omdat wij nog erg weinig tijd hebben ga ik proberen hier mogelijk aan te werken.

### 📝 Aanpassingen
- Fix: Resize van borders werkten niet goed.
- Champion Rol Selector gemaakt.

### ⚔️ Fix borders niet correct renderen.
<img src="../../Desktop/Screenshots/Screenshot 2023-09-25 at 19.01.16.png" height="350">

Een probleem bij het genereren van de canvases voor de borders rond de buttons, was dat de width niet correct werd aangepast nadat het in geladen was. Hierdoor leken de lijnen van borders ontzettend wazig. Dit heb ik besproken met mijn docent tijdens het feedbackgesprek deze week en kwam deze makkelijke oplossing uit.
```javascript
/* Event: Canvas.js */

window.addEventListener('resize', rerenderCanvasSize)
window.addEventListener('load', rerenderCanvasSize)

function rerenderCanvasSize() {
    renderBorders()
}
```
## ⚔️ Choose your Champion

Dit onderdeel van de website is een introductie naar de mogelijke rollen binnen het spel zelf. Hierbij heb ik via JavaScript de rollen laten inladen via een object waar alle informatie en files van de rollen in zitten zodat alles makkelijk en snel is aan te passen.

```javascript
/* Voorbeeld: RoleData.js Module */

const roles = {
    'assassins': {
        'src': 'assassins.png',
        'name': 'AKALI',
        'title': 'The Rogue Assassin',
        'video': 'assassin.mp4'
    },
    'fighters': {
        'src': 'fighters.png',
        'name': 'YASUO',
        'title': 'The Unforgiven',
        'video': 'fighter.mp4'
    }
}

export default roles;
```

Elke optie heeft een aparte data-set waarde die ik dan kan gebruiken om de correcte data op te halen uit de rollen object.
```javascript
/* Functie uit: Roles.js */
import roles from "./RolesData.js"

function selectRole(key) {
    disableCurrentActive()
    const roleData = roles[key]

    document.querySelectorAll(`.role-option[data-role=${key}]`).forEach(element => {
        element.classList.add('is-active')
    })

    imageElement.src = `./img/champions/${roleData.src}`
    videoElement.src = `clips/roles/${roleData.video}`
    nameElement.innerHTML = roleData.name
    titleElement.innerHTML = roleData.title
}
```

De knoppen voor mobile en desktop zijn apart gemaakt, maar worden wel beide geselecteerd omdat dezelfde data-set waarde er aan vast zit.

<img src="../../Desktop/MobileChampionSelect.png" height="350"> <img src="../../Desktop/Screenshot 2023-11-06 at 15.37.28.png" height="350">

Op de echte website word erg veel met extra elementen en negatieve margins gewerkt om alles op zijn plaats te zetten. Zelf is bij het namaken hiervan gelukt om dit deels te vermijden door de HTML wat beter te structureren.

Maar om dit wel goed te positioneren heb ik wel veel gebruik gemaakt van meerdere `div` elementen omdat veel relative en absolute elementen lastig te waren positioneren zonder meerdere `divs` te gebruiken :(

```html
  <div class="champion-selection">
      <div class="roles--desktop">
          <div class="roles--desktop__content">
              <div class="roles--desktop__buttons">
                  <button class="role-option is-active" data-role="assassins">
```

---

# 🧨️ Vijfde week

Deze aanpassingen heb ik maandag gemaakt voor de deadline voor het gesprek.

### 📝 Aanpassingen
- Footer afgemaakt.
- Styling van de artikelen aangepast.

<img src="../../Desktop/Screenshot 2023-11-07 at 02.03.07.png" height="170">
<img src="../../Desktop/Screenshot 2023-11-07 at 02.02.24.png" height="170">

