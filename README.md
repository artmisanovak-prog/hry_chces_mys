# HRY_CHCES_MYS

Mobilní experimentální aplikace **Fyzika čáry**.

## Spuštění
Otevři `index.html` v moderním prohlížeči. Pro mikrofon je potřeba HTTPS (například GitHub Pages) a povolení přístupu k mikrofonu.

## Co prototyp obsahuje
- kreslení prstem na dotykové obrazovce nebo myší;
- zvukový syntetizér a hudební klávesy C4–C5;
- tlačítko pro třísekundový tón G4;
- bicí sekvencer se 16 kroky a čtyřmi stopami;
- mikrofonní analýzu hlasitosti a přibližné výšky tónu;
- vlastní mapování zvukových vstupů na vizuální vlastnosti;
- přednastavené konfigurace, lokální uložení a JSON import/export;
- jednoduchý experimentální herní režim.

## Technické poznámky
Aplikace je samostatná HTML stránka bez backendu a externích knihoven. Zvuk se generuje pomocí Web Audio API. Mikrofonní signál se analyzuje lokálně v prohlížeči a nikam se neodesílá.

Rozpoznávání slov a jejich významu zatím implementováno není. Detekce výšky hlasu je orientační a může být méně spolehlivá při šumu, více hlasech nebo tichém vstupu. Herní režim je zatím demonstrační, ne plnohodnotná hra s robustní geometrií a vyhodnocováním úloh.

## GitHub Pages
V repozitáři otevři **Settings → Pages**, zvol **Deploy from a branch**, větev **main** a složku **/ (root)**. Po publikování bude stránka dostupná na adrese:

https://artmisanovak-prog.github.io/hry_chces_mys/

