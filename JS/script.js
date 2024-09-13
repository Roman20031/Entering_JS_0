/*

Vytváření proměných

Oproti pythonu můžeme vytvořit deklaraci proměné, ale neinicializovat jí žádný datový typ ani hodnotu. To můžeme přiřadit až později.

    Příklad:

        let i; // Jen jsem vytvořil proměnou, ale nemá žádnou hodnotu.

        i = 3; // Získa i hodnotu.

//Lokální proměné
    let nazev_proměné = "hodnota proměné";

    Lokální proměná se může volně přepisovat.
    Pozor, pokud bude napsana například ve funkci nebo dokonce v podmínce, tak dálé mimo (podmnínku či funkci) již proměná neexistuje.
    Lokální proměné bychom neměli používat mimo funkce, když například chceme propojit proměnou s elementem v html.

    if (true) {
    let age = 20;  --> Zde je deklarovaná proměná age
    console.log(age); --> Zde jí můžeme zavolat do console a vypíše se nám v pořádku

        if(age == 20){
            console.log("Věk", age, " je správně"); --> Zde ale může stále existovat, protože ona může jít o úroveň dolů.
        }
    } // Zde zaniká proměná age

    // Zde ale již proměna age neexistuje, protože je mimo své působení.
    console.log(age);  // Error: age is not defined

// Konstantní proměná
    const nazev_proměné = "Hodnota proměné";

    Konstatní proměná se nepřepisuje její inicializovaná hodnota.

// Globální proměná (deprecated)
    var nazev_proměné = "hodnota proměné";

    Nedoporučuje se již používat v moderním js, protože tato proměná má pak dosah i mimo funkci a může např. stránku či aplikaci udělat méně optimalizovanou.
*/

// Pro číselné hodnoty můžeme, dokonce v tomto případě musíme mít proměnou mimo funkci, protože ve funkci by pokaždé proměná zanikla!
let i = 1;

function Add(){
    /*
    První ze způsobu, jak propojit komunikaci js s html.

        document - Vyhledej v dokumentu.
        getElementById("element_id") - Vyhledej element podle id.
    */

    let input = document.getElementById("input"); // Propojujeme proměnou input s inputem v html pomocí jeho ID.
    let output = document.getElementById("output"); // Propojujeme proměnou output s <p> v html pomocí jeho ID.
    
    // Console.log vypisuje terminálové zprávy v prohlížeči, který najdete pokud dáte prozkoumat prvek a následně console.
    console.log("Hodnota v inputu je: ", input); // Zde si pro změnu controlujeme v consoli v prohlížeči, co se nám skutečně ukládá do proměné input.
    
    console.log("Hodnota v outputu je: ", output); // Pozor, zde jednotlivé datové typy oddělujeme "," jako v pythonu u print().

    /*
        Toto je úplně stejný!!!


        output.innerHTML = input.value; --> Toto je kratší zápis pomocí proměných, mohu je využívat opakovaně

        // To používáme proto, abychom nemuseli furt psát toto:
        document.getElementById("output").innerHTML = document.getElementById("input").value; --> Všimněte si, jak zde je kod moc dlouhy, ačkoliv je toto samé.

        // Jednodušeji vám proměné output za Vás vypíše document.getElementByID("output")
    */

    /*
        To co píšeme za proměnou či getElementByID zpřesňujeme co chceme od js za přesnější příkaz.

        innerHTML - Funguje u párových tagu, znamená výběr mezi contentu v elementu (můžeme jí budto nahrátn do proměné v js, nebo jí přepsat pomocí js).
    */

    /*
        Podívejte se důkladně na to, že zde není + před =. To znamená že se bude hodnota pokaždé přepisovat v html!
        output.innerHTML = i + ". " + input.value + "<br>";

        Pokud přidáme před rovná se plus, hodnoty se budou přidávat.
    */

    // Zde jsme využili proměné i, který nám následně čísluje kolíkáty je to příspěvek
    output.innerHTML += i + ". " + input.value + "<br>"; // Řetězec zde spojujeme +, můžeme takto combinovat různé datové typy. Též můžete vypisovat i elementy jako je například <br>.

    i++; // Zkrácený zápis pro přidání jedné hodnoty pro i, respektive i = i+1;


    /*console.log(input);

    Pokud vím, že budou používat jen jednou toto propojení, mohu kod napsat i takto:
    document.getElementById("output").innerHTML = input.value;
    
    */
    /*<script src="https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js"></script>

    <script>
      var emoji = emojione.toShort("👩‍💻"); 
      console.log("I love coding with " + emoji + "!");
    </script>
    */

}

function emojiAdd(){
    let input = document.getElementById("input"); // Propojujeme proměnou input s inputem v html pomocí jeho ID.
    let output = document.getElementById("output");
    console.log("Hodnota v inputu je: ", input); // Zde si pro změnu controlujeme v consoli v prohlížeči, co se nám skutečně ukládá do proměné input.
    
    console.log("Hodnota v outputu je: ", output);
    output.innerHTML += i + ". " + input.value + "<br>";

    i++;
    var emoji = emojione.toShort("🗿")

    
}
