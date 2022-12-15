# Crezione Unit Test

## Premessa

Ogni cartella root di un pacchetto (per intenderci le
cartelle nel quale risiede un file `package.json`) dovrebbe
avere una struttura di file come questa
root
|**src
| |**Somefolder
| |**withSomeFile.ts
|**test
|**Somefolder
|**withSomeFile.test.ts

Alcuni pacchetti esportano più entrypoints (database e
zionbase). Questo significa che all'interno della cartella
root la struttura è lievemente diversa, ovvero cosi:

```
root
|__EntryPoint1
| |__dist
| | |__file di distribuzione
| | |__ ...
| |__package.json
|__Entrypoint2
| |__dist
| | |__file di distribuzione
| | |__ ...
| |__package.json
|__src
| |__EntryPoint1
| | |__src
| |   |__someFile.ts
| |__Entrypoint2
|   |__someFolder
|   | |__someFileInFolder.ts
|   |__someOtherFile.ts
|__test
  |__Entrypoint1
  | |__someFile.test.ts
  |__Entrypoint2
    |__someOtherFile.test.ts
```

Ogni file dovrebbe avere il suo file di test (tutti tranne i
file di tipo, cioè che contengono solo dichiarazioni di
typescript, ovvero non ci sono export di `const`, `var`,
`let`, `function`, `class` .., invece sono export di `type`,
`interface`, `enum`).

## Prima fase: crezione del test per controllare la correttezza dell'export

Questo test serve per controllare che l'oggetto/funzione
siano effettivamente esportati dalla cartella.

### Import del pacchetto di test

Iniziamo copiando il codice che importa i pacchetti
necessari alla realizzazione del test:

```ts
// rappresenta il paccheto con le funzioni per i test
import { testEnvironment } from "@zionstate/test";
// rappresenta il codice che stiamo testando.
// deve essere preso dall'endpoint che stiamo valutando
import { Algo } from "../zionbase";

const { expect, log } = testEnvironment();
expect;
log;
```

> se necessario aggiornare l'import del pacchetto che deve
> prelevare il codice dall'entrypoint nel root (la cartella
> con il nome del pacchetto)

### Test funzionamento

iniziamo creando una riga di codice per testare il corretto
funzionamento del file:

```ts
log("prova");
```

Dalla cartella `test` chiamiamo lo script:

```bash
yarn test_of <percorso_al_nome_del_file_da_testare>
```

nel nostro esempio:
`yarn test_of zionbase/Decorators/staticImplements.test.ts`.

### Log del nome della funzion

Effettuiamo un test per il log del nome della funzione.

```ts
log(staticImplements.name);
```

###

Creaiamo la descrizione del nostro test in questo modo:

```ts
// la prima funzione ci permette di creare l'intestazione dell nostro test
describe("Nome della funzione", () => {
  // questa chiamata è quella che crea il print con validazione `✔`
  it("dovrebbe ritornare il valore del nome corrispondente alla funzione", () => {});
});
```

### Inseriamo all'interno della funzione il log del nome

Inseriamo il log che abbiamo precedentemente creato
all'interno del codice della callback nella chiamata di `it`

```ts
describe("Nome della funzione", () => {
  it("dovrebbe stampare nella console: staticImplements$1", () => {
    // inserire il log qui
    log(staticImplements.name);
  });
});
```

### Sostituire log con expect

Sostituiamo la chiamata dell funzione `log` con `expect`:

```ts
expect(staticImplements.name);
```

### aggiungere il test alla chiamata di expect:

```ts
..name).to.be.equal("staticImplements$1")
```

## Spostare il file

Ora possimo procedere con lo spostamento del file.
Per farlo usiamo lo script `.noiz.sh`.

Il nostro file si trova ad esempio nella cartella
`/zionbase/Decorators/staticImplements.ts`. È importante che
nella cartella che contiene la cartella in cui è presente il
file ci sia un file `.noiz`. Quindi se il file è presente
nella cartella possiamo chiamare lo script `.noiz.sh`.
In base al tipo di cartella che stiamo creando dovremmo
scegliere se creare un index o un module. La differenza sta
nel fatto che una cartella index contiene al suo interno più
file mentre una cartella modulo rappresenta il file che
stiamo cercando di esportare.

Nel nostro caso la cartelle `Decorators` (come denota l'uso
del plurale), contiene piu elementi, quindi è un `index`.

A questo punto possiamo trovarci in due situazioni:

- la cartella target non contiene il file `.noiz`.
- la cartella lo contiene.

nel primpo caso eseguire entrambi gli step, nel secondo
passare direttamente al secondo.

### Step1

Andiamo all'interno della cartella che contiene `Decorators` e facciamo
andare lo script creanod la cartella index, anche se la
cartella è già esistente (non verrà sovrascritta).

Scegliano

- 1: Folder
- 1: index
  inseriamo `Decorators`, nome della cartella index.

Lo script chiede se vogliamo creare qualcosa dentro, diciamo
no.

### Step2

All'interno della cartella index creaiamo una cartella per
la funzione:

- 1: folder
- 2: module
- 3: function (in questo caso)
  inseriamo il nome del file : staticImplements

A questo punto si dovrebbe essere creata una cartella con
nome uguale al nome del file.

## Copiamo il codice della funzione

- Ora possiamo copiare il codice presente all'interno del file
  sorgente nel file destinazione che è stato creato dallo
  script. Talmente il file sorgente non dovrebbe avere un nome
  con una versione mentre all'interno del file che stiamo
  creando i file vengono nominati in base alla versione che
  hanno.
- Quindi dobbiamo rinominare il codice che abbiamo
  precedentemente copiato oppure copiare il codice all'interno
  della funzione che è già presente in quella creata dallo
  script.

```ts
// codice iniziale
export interface IstaticImplements_v1 {
  (a: any): any;
}

export const staticImplements_v1: IstaticImplements_v1 =
  function () {};
```

```ts
// codice dopo editing.
export interface IstaticImplements_v1 {
  (a: any): any;
}

export function staticImplements_v1<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
```

## Cambiare interfaccia

Facciamo hover sulla definizione della funzione la cosa
dovrebbe presentarsi la definizione type script che
possiamo copiare e mettere all'interno delle parentesi
graffe nel blocco di codice dell'interfaccia.

```ts
/// codice mostrato da hover
function staticImplements_v1<T>(): <U extends T>(
  constructor: U
) => void;
```

```ts
// parte che ci interessa
<T>(): <U extends T>(constructor: U) => void
```

Ma la parte che ci interessa all'interno del blocco di
codice dell'interfaccia.

```ts
export interface IstaticImplements_v1 {
  <T>(): <U extends T>(constructor: U) => void;
}
```

## Cancellare il file precedente

Ora è possibile cancellare il file sorgente e andare a
controllare che gli export siano fatti correttamente nel
file index. Presente eliminare uno dei due export e
ripulirlo da export non necessari. Ricordiamoci di
controllare anche gli export all'interno della cartella che
abbiamo appena creato.

## Effettuare il build

Rendere effettivi i nostri cambiamenti dobbiamo effettuare
il build del pacchetto. Andiamo nella cartella root del
pacchetto effettuiamo `yarn build`. Possibile che in questa
fase qualcuno degli importi interni nel pacchetto abbia dei
problemi ma basta semplicemente dare il nuovo percorso che
si dovrebbe trovare alla base del folder che abbiamo creato.
(fare attenzione che il file sia importato dal folder e non
come file).

## Rifare il test

A questo punto possiamo Ri effettuare il test per vedere se
tutto funziona come previsto. Quando ho cambiato il nome
della funzione bisogna anche cambiare il nome che il test si
aspetta e farlo coincidere con il nome che abbiamo dato alla
funzione. Eventualmente si può guardare la risposta del
teste il quale ci presenta con il colore verde (o il sibolo
+) il valore che ci stiamo aspettando e con il colore rosso
(o il simbolo -) il valore che effettivamente viene
ritornato dalla funzione.

```bash
....
// returned value
-staticImplements_v1
// expected value
+staticImplements_v1$1
...
```

## LISTA TITOLI

// TODO mettere i titoli in una lista
/// non so come renderli cliccabili in anteprima

- [ ] Prima fase: crezione del test per controllare la correttezza dell'export
- [ ] Spostare il file
- [ ] Copiamo il codice della funzionE
- [ ] Cambiare interfaccia
- [ ] Cancellare il file precedente
- [ ] Effettuare il build
- [ ] Rifare il test
