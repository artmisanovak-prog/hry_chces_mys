(()=>{'use strict';
const $=id=>document.getElementById(id);
const key=document.body.dataset.game;
const configs={
motyl:{icon:'🦋',name:'Motýl · Hlad a náhražka',intro:'Ne všechno, co je krásné, uspokojí skutečnou potřebu. Rozliš, co člověk potřebuje a co mu někdo pouze nabízí.',principle:'Motýl není motýlí efekt. V pohádce představuje krásnou, ale nejedlou náhražku. Hra proto testuje rozdíl mezi potřebou a nabídkou.',levels:[
{q:'Mám hlad. Co skutečně nasytí?',scene:'Postava říká: „Mám hlad.“ Na stole leží tři věci.',items:['🦋 Motýl','🥖 Rohlík','🎨 Obraz chleba'],correct:1,why:'Rohlík uspokojí hlad. Motýl i obraz mohou mít jinou hodnotu, ale jídlo nenahradí.'},
{q:'Potřeba je odpočinek. Co je skutečná odpověď?',scene:'Člověk je vyčerpaný. Někdo mu nabízí motivační plakát.',items:['📣 Motivační slogan','🛏️ Možnost odpočinout si','🎁 Další úkol jako odměnu'],correct:1,why:'Povzbuzující slova mohou potěšit, ale neodstraní fyzickou potřebu odpočinku.'},
{q:'Potřeba je bezpečí. Co nabídka opravdu řeší?',scene:'Někdo se bojí. Dostane krásný obrázek pevnosti.',items:['🖼️ Obrázek pevnosti','🧱 Skutečné bezpečné místo','✨ Ujištění, že strach je krásný'],correct:1,why:'Symbol bezpečí není totéž jako bezpečí. Hra rozlišuje reprezentaci od účinku.'},
{q:'Lze motýla úplně odmítnout?',scene:'Hlad je už utišený. Motýl stále poletuje kolem.',items:['Ano, motýl nemá žádnou hodnotu','Ne, může přinášet krásu, radost nebo inspiraci, ale ne jídlo','Motýl se musí stát rohlíkem'],correct:1,why:'Pohádka neříká, že krása je zbytečná. Říká, že nemá být vydávána za něco jiného.'},
{q:'Někdo ti nabízí „lásku“ místo konkrétní pomoci. Co ověříš?',scene:'Věta z pohádky: „A máš k tomu i přílohu?“',items:['Zda nabídka skutečně odpovídá potřebě','Zda nabídka zní dost poeticky','Zda ji lze přejmenovat na pomoc'],correct:0,why:'Nejdřív pojmenuj potřebu, potom ověř skutečný účinek nabídky. Název sám nic nevyřeší.'}]},
pavouk:{icon:'🕷️',name:'Pavouk · Co ještě visí',intro:'Zavěšuj nedokončené věci, ale sleduj, jak dlouho mohou zůstat otevřené. Někdy chrání možnost, jindy ji pomalu mění v nehybnost.',principle:'Vlákna drží nevyslovená slova a neuzavřené události. Čas je součást hry: dlouhé zavěšení může způsobit ztvrdnutí.',levels:[
{q:'Na síti visí nedokončená omluva. Co s ní?',scene:'„Promiň, že jsem…“ Věta zůstala viset.',items:['🧵 Nechat ji chvíli otevřenou','✂️ Okamžitě ji zahodit','🪨 Nechat ji viset navždy'],correct:0,why:'Otevřenost může zachovat možnost pokračování. Není ale automaticky řešením navždy.'},
{q:'Omluva visí už příliš dlouho a začíná tvrdnout.',scene:'Vlákno je napjaté, věta se už nedá snadno rozmotat.',items:['Přidat další nevyřčenou omluvu','🪢 Rozmotat ji a dokončit nebo vědomě pustit','Předstírat, že tam není'],correct:1,why:'Pavouk sám říká, že dlouhé visení věci zatvrdí. Je čas rozhodnout, ne jen přidávat další vlákna.'},
{q:'Vítr rozhoupal celou síť, ale nic nespadlo.',scene:'Všechno se hýbe, ale situace se nemění.',items:['Považovat pohyb za vyřešení','Zkontrolovat, co zůstává zablokované','Zavěsit další věc'],correct:1,why:'Pohyb není totéž co změna. To je jádro věty myši o největším pádu.'},
{q:'Na síti visí vzpomínka, která už nikomu neslouží.',scene:'Vzpomínka je stále přítomná, ale blokuje průchod.',items:['Rozhodnout, zda ji uchovat, nebo nechat spadnout','Přidat k ní další vzpomínku','Zpevnit všechna vlákna bez rozmyslu'],correct:0,why:'Hra nemá univerzální pravidlo „drž“ ani „pusť“. Důležité je rozpoznat funkci a cenu zavěšení.'},
{q:'Co je největší pád podle myši?',scene:'Pavouk sedí uprostřed sítě. Nic se nemění.',items:['Když se něco rozbije','Když se nic nezmění, přestože všechno zůstává viset','Když vítr rozhýbe síť'],correct:1,why:'Pohádka obrací běžné chápání pádu: nejhorší může být dlouhodobá nehybnost.'}]},
pav:{icon:'🦚',name:'Páv · Svět v pavím oku',intro:'Páv používá vlastní obraz jako měřítko všeho. Zkus rozpoznat okamžik, kdy už nepopisuješ svět, ale pouze promítáš sebe.',principle:'Oči na ocase se obrátí zpět k pávovi. Pozorovatel a pozorované se zamění. Klasifikační pravidlo pohltí celý svět.',levels:[
{q:'Páv vidí strom a tvrdí: „To je páv bez peří.“ Co udělal?',scene:'🌳 → 🦚 ?',items:['Popsal vlastnost stromu','Promítl vlastní kategorii na jiný objekt','Ověřil biologickou příbuznost'],correct:1,why:'Páv nepřizpůsobuje svou teorii světu. Přizpůsobuje svět své teorii.'},
{q:'Myš má dvě oči. Páv ji proto označí za páva v jiné fázi. Co chybí?',scene:'🐭 👁️👁️ → 🦚',items:['Další počítání očí','Nezávislé kritérium, které není odvozené od páva','Více pavích per'],correct:1,why:'Když klasifikace používá jen vlastní znaky, nedokáže rozpoznat odlišnost.'},
{q:'Páv začne odtrhávat pera, aby byl méně pávem.',scene:'🦚 → 🪶 → ?',items:['Změní vzhled, ale nemusí změnit způsob, jak chápe svět','Automaticky se zbaví identity','Získá objektivní pohled'],correct:0,why:'Změna vnějšího znaku sama o sobě neodstraní vnitřní klasifikační filtr.'},
{q:'Jak ověřit, zda se nedíváš na svět jen skrze vlastní kategorii?',scene:'Zkus popsat oblak bez použití slova „páv“.',items:['Popsat jeho vlastnosti bez své oblíbené kategorie','Přejmenovat každý objekt na páv','Ignorovat všechny rozdíly'],correct:0,why:'Nejdřív odděl pozorované vlastnosti od vlastního výkladu.'},
{q:'Na konci páv uvidí, že je pohádka. Co se tím mění?',scene:'„Že není páv. Že je pohádka.“',items:['Přestává být součástí příběhu','Uvědomí si, že jeho identita je také konstrukce příběhu','Dokáže, že ostatní zvířata neexistují'],correct:1,why:'Pohádka odhaluje, že i identita, kterou páv považoval za pevnou, vzniká uvnitř vyprávění.'}]},
kravy:{icon:'🐄',name:'Krávy · Bu je stav',intro:'Krávy nepředávají tajnou informaci. Rozrušují jistotu, že slovo má jediný pevný význam. Experimentuj s jazykem a sleduj, co se stane s interpretací.',principle:'„Bu“ není šifra ani zpráva stáda. Je to zvuková a jazyková porucha, která mění stav posluchače a znejisťuje hranice významu.',levels:[
{q:'Krávy opakují „bu bu bu“. Co se stane při opakování?',scene:'BU · BU · BU · BU',items:['Výraz může ztrácet běžný význam a začít působit jako rytmus nebo stav','Význam se automaticky zpřesní','Vznikne přesná technická definice'],correct:0,why:'Opakování může odpojit slovo od běžného použití a přesunout pozornost ke zvuku, rytmu a pocitu.'},
{q:'Věta „Bu není slovo. Bu je stav.“ Co dělá?',scene:'Slovo se pokouší definovat samo sebe.',items:['Používá běžnou slovníkovou definici','Přesouvá výraz z označení věci do popisu stavu','Ruší veškerou komunikaci'],correct:1,why:'Kráva nepřekládá „bu“. Mění kategorii, do které výraz patří.'},
{q:'Zkomol větu tak, aby se změnila její jistota, ne jen pravopis.',scene:'„Hlava je moje.“',items:['„Moje hlava myslí.“','„Hlava? Moje? Kdo ví, čí hlava myslí.“','„Hlava je hlava.“'],correct:1,why:'Otázky a rozbití samozřejmého vztahu mezi vlastníkem a věcí narušují jistotu původního výroku.'},
{q:'Lidé už nevědí, jestli myslí oni, nebo krávy. Co pohádka zpochybňuje?',scene:'🐄 „Blbnu ti hlavu, protože hlava je moc jistá.“',items:['Pouze schopnost počítat','Představu, že jazyk a myšlení jsou vždy pod naší plnou kontrolou','To, že krávy umějí stát na louce'],correct:1,why:'Porucha míří na jistotu posluchače a na jeho vztah k vlastnímu jazyku.'},
{q:'Vytvoř závěrečný princip kraví metody.',scene:'Louka nesnáší jistotu.',items:['Každá věta musí mít jediný výklad','Narušení může otevřít další výklady, aniž by nabízelo jednu správnou náhradu','Nesmysl je vždy skrytá šifra'],correct:1,why:'Krávy neukrývají správnou odpověď. Uvolňují prostor, ve kterém se význam znovu vyjednává.'}]},
plamenak:{icon:'🦩',name:'Plameňák · Vymysli nové dno',intro:'Plameňák padá hlavou dolů, ale drží směr. Když původní orientace přestane fungovat, vytvoř novou, aniž bys zaměnil směr pohybu za polohu mapy.',principle:'Pohádka odděluje směr, cíl a orientaci. Pád se stává letem, protože plameňák zachová dynamiku a vymyslí nový referenční bod.',levels:[
{q:'Původní nahoře zmizelo. Co uděláš jako první?',scene:'<div class="space"><span>⭐</span><span>🦩</span><span>🌌</span></div>',items:['Otočím celý svět zpět','Určím nový referenční bod','Zastavím pohyb'],correct:1,why:'Nový rámec umožní pokračovat, aniž by se musel obnovit původní svět.'},
{q:'Mapa se otočila, ale plameňákův směr letu se nezměnil.',scene:'Šipka letu: ↓ · Mapa: otočená',items:['Přepočítám polohu cíle v nové orientaci','Otočím plameňáka proti jeho směru','Smažu směr'],correct:0,why:'Otočení mapy není totéž jako změna pohybu. Je nutné převést souřadnice.'},
{q:'Dno, které sis vytvořil, se pohybuje.',scene:'🌌 Dno se posouvá spolu s hvězdami.',items:['Zvolím stabilní bod v novém rámci a vztáhnu k němu pohyb','Předstírám, že se nehýbe','Vrátím se k neexistujícímu původnímu dnu'],correct:0,why:'Referenční bod musí být definovaný vzhledem k prostředí, které skutečně používáš.'},
{q:'Dvě postavy mají opačné „nahoře“. Jak sdílejí mapu?',scene:'Postava A: ↑ · Postava B: ↓',items:['Jedna musí přijmout orientaci druhé','Sdílejí vztahy mezi body a převádějí souřadnice','Mapa nemůže existovat'],correct:1,why:'Různé orientace mohou popisovat stejný prostor, pokud známe převod mezi rámci.'},
{q:'Původní cíl už neexistuje. Co udělá plameňák?',scene:'„A co když už níž nejde?“ · „Tak si vymyslím nové dno.“',items:['Zachová pohyb a stanoví nový dosažitelný cíl','Vrátí se na začátek','Prohlásí pohyb za chybu'],correct:0,why:'To je ústřední pravidlo pohádky: směr a dynamika mohou pokračovat i po zániku původního cíle.'}]}
};
const g=configs[key];if(!g)return;
let index=0,score=0,answered=false;
$('icon').textContent=g.icon;$('name').textContent=g.name;$('intro').textContent=g.intro;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
 answered=false;const l=g.levels[index];
 $('round').textContent='Situace '+(index+1)+' / '+g.levels.length;
 $('score').textContent=score;$('progress').style.width=(index/g.levels.length*100)+'%';
 $('question').textContent=l.q;$('feedback').textContent='';$('next').hidden=true;
 $('interactive').innerHTML='<div class="scene">'+l.scene+'</div><p style="color:#aab4c5;margin:8px 0 0">Vyber, co se v této situaci skutečně děje nebo jaká akce odpovídá pravidlu pohádky.</p>';
 $('answers').innerHTML='';
 l.items.forEach((item,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=item;b.onclick=()=>choose(i);$('answers').append(b)});
}
function choose(i){
 if(answered)return;answered=true;const l=g.levels[index],ok=i===l.correct;if(ok)score+=20;
 $('score').textContent=score;$('feedback').textContent=(ok?'✓ Výstižně. ':'↗ Tohle je jiný výklad. ')+l.why;
 $('answers').querySelectorAll('button').forEach((b,n)=>{b.disabled=true;if(n===l.correct)b.classList.add('correct')});
 $('next').hidden=false;$('next').textContent=index===g.levels.length-1?'Zobrazit výsledek':'Další situace →';
}
function finish(){
 $('round').textContent='Dokončeno';$('progress').style.width='100%';
 $('question').textContent='Výsledek: '+score+' / 100';
 $('interactive').innerHTML='<h3>Co hra zkoumala</h3><p>'+esc(g.principle)+'</p><p style="color:#aab4c5">Body ukazují, kolik herních situací jsi vyřešil/a podle výkladu této verze. Nejde o psychologickou diagnostiku ani měření inteligence.</p>';
 $('answers').innerHTML='';$('feedback').textContent=score===100?'Všech pět situací jsi vyřešil/a správně.':score>=60?'Základní princip je zachycený, některé situace stojí za opakování.':'Vrať se k pohádce a zkus oddělit její konkrétní mechanismus od obecné asociace se zvířetem.';
 $('next').hidden=false;$('next').textContent='Hrát znovu';$('next').onclick=()=>{index=0;score=0;$('next').onclick=advance;render()};
}
function advance(){if(index<g.levels.length-1){index++;render()}else finish()}
$('next').onclick=advance;render();
})();