import "./App.css";
import React, { useState } from "react";
import "./Bio.css";

function Bio() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        Durante un periodo di allontanamento dalla professione medica, poiché
        sfiduciato dalla visione materiale e ristretta della medicina
        occidentale moderna, mi avvicino alla medicina naturale tramite la
        conoscenza di un grande esperto in materia, Aldo Bongiovanni, da 40 anni
        impegnato nella coltivazione,ricerca e nella distillazione di piante
        medicinali. Da cui apprendo i vari usi delle piante e i metodi di
        estrazione di oli essenziali,calcinazioni e distillati. <br></br>{" "}
        <br></br>
        Quasi in sincronicità con l'avvicinarsi alla medicina naturale vengo a
        conoscenza della Dentosofia, una branca della Medicina Antroposofica
        sviluppata da Rudolf Steiner e portata in auge dal Dentista e
        Ricercatore francese Michael Montaud, in cui si evince la correlazione
        fra il corpo fisico, nello specifico la bocca e gli organi dentali, e il
        corpo spirituale o emozionale e l'influenza reciproca nello sviluppo
        psicofisico dell'individuo. <br></br> <br></br>
        Da qui il mio interesse verso la professione di Dentista, messa da parte
        per un po', riemerge e trova nuova vitalità e forma di espressione
        conscia. Approfondendo lo studio della Dentosofia trovo un nuovo modo di
        approcciarmi alla professione, con una visione più ampia e olistica, che
        riesce ad abbracciare l'ambito della guarigione del paziente da un punto
        di vista globale: fisico, psicologico ed emotivo.<br></br> <br></br>
        Da qui l'entusiasmo per la ritrovata passione nella propria professione
        porta a confrontarmi con una nuova modalità di trattare il paziente, con
        risultati sorprendenti. I pazienti non solo riacquistano la funzionalità
        masticatoria,l'estetica e la salute ma riescono a superare blocchi
        emotivi ed energetici che li portano ad un benessere globale più ampio e
        soddisfacente. L'uso delle piante medicinali viene adesso coadiuvato a
        molti trattamenti proposti nella mia pratica odontoiatrica, fungendo da
        supporto per la guarigione di infezioni, gengiviti e trattamenti
        chirurgici.
        <br></br>
        <br></br>Adesso risiedo a Tarifa,in Spagna. Dove esercito la mia
        professione presso il centro medico multidisciplinare "Centro Luz
        Tarifa". <br></br>
        <br></br>Potete contattarmi al numero de{" "}
        <a href="https://wa.me/+34600900730">WhatsApp</a> <br></br>o seguirmi su{" "}
        <a href=" https://instagram.com/gianni.schultz">Instagram</a> nel mio
        profilo personale,
        <br></br>o sulla pagina del progetto
        <a href="https://instagram.com/thenomadentist"> NomaDentist</a>.
      </p>
    </div>
  );
  const linkName = readMore ? "Leggi meno << " : "Leggi di piú >>";

  return (
    <div className="aboutMe">
      <h1>BIO</h1>
      <p>
        Mi laureo in Odontoiatria presso l'università degli studi di Perugia,in
        Italia. Proseguo gli studi con il Corso Avanzato di Ortodonzia Fissa e
        Mobile a Catania,in Sicilia. Lavoro per 10 anni presso lo studio di
        famiglia e presso altri 3 studi odontoiatrici come consulente di
        Ortodonzia e Pedodonzia. <br></br> <br></br>
        Nel 2017 un incidente in moto, che mi costringe a stare a letto per vari
        mesi, cambia radicalmente la mia visione della vita e del mondo
        circostante. Inizio un cammino evolutivo personale che mi porta a
        confrontarmi con una realtà spirituale molto più ampia e da lì inizio il
        percorso di viaggio e di scoperta personale.
      </p>
      <a
        className="read-more-link"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <h2>{linkName}</h2>
      </a>
      {readMore && extraContent}
    </div>
  );
}

export default Bio;
