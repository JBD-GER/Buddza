export type GuideCategory = {
  slug: string;
  name: string;
  description: string;
};

export type GuideTopicImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GuideArticleSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  items: string[];
};

export type GuideTopic = {
  slug: string;
  title: string;
  categorySlug: string;
  careCategorySlug?: string;
  excerpt: string;
  tags: string[];
  readingMinutes: number;
  publishedAt: string;
  image?: GuideTopicImage;
  articleSections?: GuideArticleSection[];
};

export const guideCategories: GuideCategory[] = [
  {
    slug: "hund",
    name: "Hund",
    description: "Alltag, Gassi, Welpen, Senioren und sichere Hundebetreuung.",
  },
  {
    slug: "katze",
    name: "Katze",
    description: "Hausbesuche, Fütterung, Eingewöhnung und ruhige Katzenbetreuung.",
  },
  {
    slug: "kleintiere",
    name: "Kleintiere",
    description: "Betreuung für Kaninchen, Meerschweinchen und kleine Heimtiere.",
  },
  {
    slug: "voegel",
    name: "Vögel",
    description: "Versorgung von Vögeln, Volieren, Käfigen und sensiblen Routinen.",
  },
  {
    slug: "aquarium",
    name: "Aquarium",
    description: "Fütterung, Wasserwerte, Technik und Betreuung rund ums Aquarium.",
  },
  {
    slug: "reptilien-und-exoten",
    name: "Reptilien und Exoten",
    description: "Terrarium, Klima, Futter und Betreuung spezieller Tierarten.",
  },
  {
    slug: "pferd-und-hof",
    name: "Pferd und Hof",
    description: "Pferdebetreuung, Stallhilfe, Ponys, Hoftiere und Nutztiere.",
  },
  {
    slug: "organisation",
    name: "Organisation",
    description: "Checklisten, Übergaben, Sicherheit, Preise und gute Absprachen.",
  },
  {
    slug: "notfall-und-gesundheit",
    name: "Notfall und Gesundheit",
    description: "Warnzeichen, Notfallkontakte und sensible Situationen vorbereiten.",
  },
  {
    slug: "plattform-tipps",
    name: "Buddza nutzen",
    description: "Inserate, Profile, Nachrichten und lokale Suche besser einsetzen.",
  },
];

export const guideTopics: GuideTopic[] = [
  {
    slug: "tierbetreuung-bei-krankenhausaufenthalt",
    title: "Tierbetreuung bei Krankenhausaufenthalt: schnell und ruhig organisieren",
    categorySlug: "notfall-und-gesundheit",
    excerpt:
      "Wie du Tierbetreuung bei Krankenhausaufenthalt oder plötzlicher Abwesenheit vorbereitest: Notfallkontakte, Schlüssel, Futter, Medikamente und klare Übergabe.",
    tags: ["Tierbetreuung Krankenhaus", "Notfallbetreuung", "Tiersitter", "Übergabe"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-tierbetreuung-krankenhausaufenthalt.jpg",
      alt: "Ruhige Übergabe für Tierbetreuung bei plötzlicher Abwesenheit mit Hund, Katze, Schlüsseln, Futter, Unterlagen und Telefon",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum eine Notfallbetreuung vorbereitet sein sollte",
        intro:
          "Ein Krankenhausaufenthalt oder eine plötzliche Abwesenheit kommt selten passend. Für Tiere ist dann wichtig, dass schnell jemand verlässlich einspringen kann.",
        paragraphs: [
          "Gute Tierbetreuung in solchen Situationen beginnt nicht erst, wenn es dringend ist. Schon eine einfache Notfallnotiz mit Futter, Schlüssel, Tierarzt und Ansprechpartnern kann verhindern, dass Angehörige oder Betreuer unter Zeitdruck raten müssen.",
          "Der Plan muss nicht perfekt sein. Entscheidend ist, dass die wichtigsten Dinge auffindbar sind und jemand weiß, was täglich passieren muss. So bleibt dein Tier versorgt, auch wenn du selbst gerade nicht alles koordinieren kannst.",
        ],
        items: [
          "Notfallkontakt, Tierarzt und Ersatzperson schriftlich festhalten.",
          "Futter, Medikamente, Schlüssel und wichtige Unterlagen an festen Orten lagern.",
          "Für jedes Tier kurz notieren, was täglich erledigt werden muss.",
          "Schon vorab überlegen, wer bei plötzlicher Abwesenheit angesprochen werden kann.",
        ],
      },
      {
        title: "Ein Inserat schreiben, wenn es schnell gehen muss",
        intro:
          "Wenn Betreuung kurzfristig gebraucht wird, sollte dein Inserat besonders klar sein. Lange Erklärungen helfen weniger als konkrete Angaben.",
        paragraphs: [
          "Nenne Tierart, Anzahl, Zeitraum, Ort, Besuchshäufigkeit und Aufgaben direkt am Anfang. Wenn du noch nicht weißt, wie lange die Betreuung nötig ist, schreibe ein realistisches erstes Zeitfenster und dass Verlängerung möglich sein kann.",
          "Wichtig ist auch, welche Aufgaben nicht verhandelbar sind: Medikamente, Gassi, Katzenklo, Gehegekontrolle, Aquariumtechnik oder Fütterungszeiten. So melden sich eher Menschen, die den Bedarf wirklich übernehmen können.",
        ],
        items: [
          "PLZ, Zeitraum und gewünschte Besuchszeiten zuerst nennen.",
          "Aufgaben nach Tier trennen, wenn mehrere Tiere im Haushalt leben.",
          "Kurz schreiben, ob Schlüsselübergabe über Angehörige, Nachbarn oder direkt möglich ist.",
          "Besondere Erfahrung nennen, wenn Medikamente, Angstverhalten oder Technik relevant sind.",
        ],
      },
      {
        title: "Schlüssel, Wohnung und Zugang klären",
        intro:
          "Bei kurzfristiger Betreuung ist Zugang oft der schwierigste Punkt. Deshalb sollte früh klar sein, wie der Betreuer sicher in die Wohnung kommt.",
        paragraphs: [
          "Wenn du selbst nicht vor Ort sein kannst, braucht es eine vertrauenswürdige Person für Schlüsselübergabe und Einweisung. Das können Angehörige, Nachbarn oder eine bereits bekannte Betreuungsperson sein.",
          "Gleichzeitig sollten private Bereiche geschützt bleiben. Räume, die nicht betreten werden müssen, können geschlossen bleiben. Je klarer der Zugang geregelt ist, desto sicherer fühlt sich die Betreuung für beide Seiten an.",
        ],
        items: [
          "Schlüsselübergabe und Rückgabe mit Datum, Uhrzeit und Person festhalten.",
          "Haustür, Klingel, Briefkasten, Treppenhaus und Wohnungstür erklären.",
          "Räume definieren, die für die Betreuung nötig sind.",
          "Private Unterlagen und Dinge ohne Bezug zur Tierbetreuung wegräumen lassen, wenn möglich.",
        ],
      },
      {
        title: "Futter, Medikamente und Warnzeichen",
        intro:
          "Bei Krankenhausaufenthalt oder Krankheit des Halters darf der Betreuer nicht raten müssen. Besonders Futter und Medikamente brauchen klare Angaben.",
        paragraphs: [
          "Schreibe möglichst einfach auf, was wann gegeben wird. Bei Medikamenten sind Name, Dosierung, Uhrzeit und Gabeform wichtig. Wenn eine Dosis vergessen wurde oder das Tier nicht frisst, sollte klar sein, wen der Betreuer kontaktiert.",
          "Auch Warnzeichen helfen: nicht fressen, Erbrechen, Durchfall, Apathie, Atemprobleme, Humpeln oder ungewöhnliches Verstecken. Der Betreuer muss keine Diagnose stellen, aber er soll wissen, wann schnelle Rückmeldung nötig ist.",
        ],
        items: [
          "Futterportionen und Medikamente getrennt vorbereiten.",
          "Dosierung und Uhrzeiten ohne Abkürzungen notieren.",
          "Tierarztkontakt und Erlaubnis zur Rücksprache klären.",
          "Normales Verhalten und meldepflichtige Warnzeichen getrennt aufschreiben.",
        ],
      },
      {
        title: "Nach der ersten Hilfe eine stabile Routine finden",
        intro:
          "Wenn der Aufenthalt länger dauert, sollte aus der schnellen Lösung eine planbare Betreuung werden.",
        paragraphs: [
          "Nach den ersten ein bis zwei Tagen lohnt sich ein kurzer Abgleich: Reichen Futter und Streu? Passt der Besuchsrhythmus? Gibt es neue Infos aus dem Krankenhaus oder von Angehörigen? Muss jemand regelmäßig nachkaufen?",
          "Eine feste Routine entlastet alle Beteiligten. Der Betreuer weiß, was erwartet wird, dein Tier bekommt verlässliche Abläufe und du musst nicht jede Kleinigkeit einzeln organisieren.",
        ],
        items: [
          "Nach dem ersten Besuch prüfen, ob Informationen fehlen.",
          "Bei längerer Betreuung Vorräte, Schlüssel und Bezahlung sauber klären.",
          "Update-Rhythmus vereinbaren, zum Beispiel täglich kurz oder nach jedem Besuch.",
          "Nach der Rückkehr die Notfallnotiz aktualisieren, solange die Erfahrung frisch ist.",
        ],
      },
    ],
  },
  {
    slug: "angsthund-betreuung-finden",
    title: "Betreuung für Angsthund finden: Sicherheit, Abstand und klare Routinen",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt:
      "So findest du passende Betreuung für einen Angsthund und erklärst Abstand, Spaziergänge, Geschirr, Auslöser, Rückzug und Updates verständlich.",
    tags: ["Angsthund Betreuung", "Hundesitter", "Unsicherer Hund", "Gassi"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-angsthund-betreuung-finden.jpg",
      alt: "Vorsichtiger Hund liegt ruhig auf einer Decke neben sicherem Geschirr, Leine, Napf, Leckerlibeutel und Checkliste",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Angsthunde andere Betreuung brauchen",
        intro:
          "Ein Angsthund braucht keine besonders mutige Betreuung, sondern eine ruhige Person, die Abstand, Sicherheit und kleine Schritte ernst nimmt.",
        paragraphs: [
          "Viele Probleme entstehen, wenn Unsicherheit unterschätzt wird. Ein Hund, der fremde Menschen, Geräusche, Treppenhäuser, Fahrräder oder andere Hunde schwierig findet, braucht klare Regeln statt spontaner Experimente.",
          "Gute Betreuung bedeutet hier: Der Betreuer weiß vorher, was normal ist, welche Auslöser es gibt und was im Zweifel zu tun ist. So muss der Hund nicht beweisen, dass er schon weiter ist, als er wirklich ist.",
        ],
        items: [
          "Beschreibe Unsicherheiten ehrlich, ohne sie zu verharmlosen.",
          "Suche nach Menschen mit ruhigem Umgang und Erfahrung mit sensiblen Hunden.",
          "Plane vor der ersten Betreuung ein Kennenlernen ohne Zeitdruck.",
          "Erkläre, welche Situationen vermieden werden sollen.",
        ],
      },
      {
        title: "Das Inserat für einen Angsthund formulieren",
        intro:
          "Ein gutes Inserat filtert passende Betreuer vor. Dafür muss klar sein, dass nicht jeder Hundesitter automatisch geeignet ist.",
        paragraphs: [
          "Schreibe kurz, wie sich die Angst zeigt: Rückzug, Bellen, Einfrieren, Ziehen, Fluchtversuche oder Meiden von Kontakt. Wichtig ist nicht nur das Verhalten, sondern auch der Kontext: zu Hause, draußen, im Treppenhaus oder bei Besuch.",
          "Gleichzeitig sollte dein Text lösungsorientiert bleiben. Nenne, was hilft: fester Ablauf, Abstand, keine direkten Berührungen, bekannte Strecken, ruhige Stimme oder Leckerlis nur nach Absprache.",
        ],
        items: [
          "Auslöser, Verhalten und hilfreiche Strategien getrennt beschreiben.",
          "Klar sagen, ob Anfassen, Hochheben oder Spielen erlaubt ist.",
          "Gassi-Anforderungen realistisch halten und keine neuen Strecken verlangen.",
          "Erfahrung mit Angsthunden oder sehr ruhigen Hunden ausdrücklich wünschen.",
        ],
      },
      {
        title: "Sicheres Geschirr und Spaziergänge",
        intro:
          "Bei Angsthunden ist Sicherheit auf Spaziergängen zentral. Ein erschrockener Hund kann sich schneller entziehen, als Menschen erwarten.",
        paragraphs: [
          "Zeige dem Betreuer genau, welches Geschirr genutzt wird und wie es sitzen muss. Wenn Doppelsicherung sinnvoll ist, gehört auch das in die Übergabe. Neue Ausrüstung sollte nicht erst am Betreuungstag getestet werden.",
          "Die Spaziergänge selbst sollten kurz, bekannt und vorhersehbar sein. Es ist besser, einen ruhigen Lösegang gut zu schaffen, als eine lange Runde mit zu vielen Reizen zu riskieren.",
        ],
        items: [
          "Sicheres Geschirr, Halsband, Leine und mögliche Doppelsicherung vorführen.",
          "Bekannte Wege und schwierige Orte aufschreiben.",
          "Kein Freilauf und keine Hundewiesen bei neuer Betreuung.",
          "Bei Stress früh umdrehen, statt den Hund durch die Situation zu ziehen.",
        ],
      },
      {
        title: "Kontakt zu Hause langsam aufbauen",
        intro:
          "Manche Angsthunde möchten zu Hause keinen direkten Kontakt. Das ist in Ordnung und sollte respektiert werden.",
        paragraphs: [
          "Der Betreuer muss nicht sofort Freundschaft schließen. Oft ist es besser, ruhig im Raum zu sein, Futter oder Wasser zu versorgen und den Hund nicht anzustarren oder zu bedrängen.",
          "Wenn dein Hund Rückzugsorte hat, sollten diese tabu bleiben. Ein Hund, der nicht aus dem Körbchen kommt, braucht nicht automatisch Animation. Er braucht Sicherheit.",
        ],
        items: [
          "Rückzugsorte nennen und schützen.",
          "Direkte Ansprache, Anfassen oder Locken nur erlauben, wenn es wirklich passt.",
          "Futter, Wasser und kurze Kontrolle ohne Druck erledigen.",
          "Erste Termine lieber kürzer und planbar halten.",
        ],
      },
      {
        title: "Updates richtig einordnen",
        intro:
          "Bei Angsthund-Betreuung sind Updates wertvoll, aber sie sollten nicht nur schöne Fotos liefern. Wichtiger ist ehrliche Beobachtung.",
        paragraphs: [
          "Bitte den Betreuer zu melden, ob dein Hund gefressen hat, zur Ruhe kam, draußen lösen konnte und wie er auf typische Auslöser reagiert hat. Ein zurückhaltendes Update ist nicht schlecht, wenn der Hund dadurch weniger gestört wird.",
          "Nach jedem Termin kannst du den Plan verbessern: Welche Uhrzeit war gut? War die Strecke zu viel? Hat die Übergabe funktioniert? So wächst Vertrauen langsam, ohne den Hund zu überfordern.",
        ],
        items: [
          "Rückmeldung zu Fressen, Ruhe, Gassi und Stresszeichen vereinbaren.",
          "Fotos nur machen lassen, wenn sie den Hund nicht zusätzlich verunsichern.",
          "Nach dem Termin gemeinsam anpassen, was zu viel oder hilfreich war.",
          "Bei guter Erfahrung denselben Betreuer wieder anfragen, statt häufig zu wechseln.",
        ],
      },
    ],
  },
  {
    slug: "meerwasser-aquarium-urlaub-betreuung",
    title: "Meerwasser-Aquarium im Urlaub betreuen lassen: Technik, Futter und Salzgehalt",
    categorySlug: "aquarium",
    careCategorySlug: "aquarium",
    excerpt:
      "Worauf du bei Urlaubsbetreuung für ein Meerwasser-Aquarium achten solltest: Fütterung, Verdunstung, Technik, Salzgehalt, Korallen und Notfallplan.",
    tags: ["Meerwasser Aquarium Urlaub", "Aquariumbetreuung", "Fische füttern", "Salzgehalt"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-meerwasser-aquarium-urlaub.jpg",
      alt: "Meerwasser-Aquarium mit bunten Fischen, vorbereiteten Futterdosen, Teststreifen, Refraktometer, Kescher und Checkliste",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Meerwasser-Becken besonders genaue Übergaben brauchen",
        intro:
          "Ein Meerwasser-Aquarium kann sehr stabil laufen, reagiert aber empfindlich auf zu viel Futter, Technikprobleme, Verdunstung und falsche Eingriffe.",
        paragraphs: [
          "Urlaubsbetreuung sollte deshalb nicht bedeuten, dass ein Betreuer spontan optimiert. Besser ist eine klare Routine: füttern, sichtbar kontrollieren, Wasserstand prüfen und bei Auffälligkeiten melden.",
          "Je komplexer dein Becken ist, desto wichtiger ist Erfahrung. Korallen, empfindliche Fische, Abschäumer, Nachfüllanlage, Strömung und Beleuchtung sollten verständlich erklärt werden, ohne den Betreuer zu überfrachten.",
        ],
        items: [
          "Beckengröße, Besatz, Technik und Betreuungsdauer kurz dokumentieren.",
          "Aufgaben auf einfache, sichere Routinen begrenzen.",
          "Vor dem Urlaub einen gemeinsamen Probelauf machen.",
          "Erfahrung mit Meerwasser-Aquarien ausdrücklich im Inserat nennen, wenn nötig.",
        ],
      },
      {
        title: "Fütterung lieber vorbereiten als erklären",
        intro:
          "Bei Meerwasser-Aquarien ist Überfütterung ein häufiger Fehler. Vorportioniertes Futter ist meist sicherer als freie Dosierung.",
        paragraphs: [
          "Bereite Tagesportionen in kleinen Dosen vor und schreibe dazu, welche Tage Futterpause sind. Wenn Frostfutter genutzt wird, sollte Auftauen, Spülen und Menge sehr einfach erklärt sein.",
          "Auch Korallenfutter, Zusätze oder Spezialfutter gehören nur in die Betreuung, wenn der Ablauf wirklich klar ist. Im Zweifel ist weniger oft sicherer als gut gemeinte Zusatzpflege.",
        ],
        items: [
          "Futtertage und Mengen pro Tag vorportionieren.",
          "Frostfutter, Granulat, Algenblätter und Korallenfutter getrennt markieren.",
          "Futterpausen ausdrücklich notieren.",
          "Keine Zusatzfütterung erlauben, nur weil Fische aktiv betteln.",
        ],
      },
      {
        title: "Wasserstand, Salzgehalt und Verdunstung",
        intro:
          "Verdunstung verändert im Meerwasser-Aquarium die Konzentration. Deshalb sollte der Wasserstand verständlich kontrolliert werden.",
        paragraphs: [
          "Wenn du eine Nachfüllanlage nutzt, erkläre dem Betreuer, woran er sieht, dass sie arbeitet. Wenn manuell nachgefüllt werden soll, muss klar sein, welches Wasser verwendet wird und bis zu welcher Markierung aufgefüllt wird.",
          "Den Salzgehalt sollte nur jemand messen oder anpassen, der den Ablauf kennt. Für viele Urlaubsbetreuungen reicht es, Warnzeichen zu erkennen und bei Abweichungen sofort Rücksprache zu halten.",
        ],
        items: [
          "Normalen Wasserstand markieren oder mit Foto dokumentieren.",
          "Osmosewasser und Meerwasser eindeutig getrennt erklären.",
          "Nachfüllanlage, Vorratsbehälter und mögliche Fehlermeldungen zeigen.",
          "Keine Salzkorrekturen ohne klare Erfahrung und Rücksprache durchführen lassen.",
        ],
      },
      {
        title: "Technik sichtbar prüfen",
        intro:
          "Der Betreuer muss nicht jedes Gerät verstehen. Er sollte aber erkennen, ob etwas offensichtlich nicht läuft.",
        paragraphs: [
          "Licht, Strömung, Heizung, Abschäumer, Filter, Dosierpumpe und Nachfüllanlage können in einer kurzen Checkliste stehen. Dazu gehört: Was ist normal, was ist auffällig und wen ruft man an?",
          "Besonders wichtig ist, dass niemand Geräte auseinanderbaut, wenn das nicht abgesprochen ist. Bei Meerwassertechnik kann ein gut gemeinter Eingriff mehr Schaden machen als eine schnelle Rückfrage.",
        ],
        items: [
          "Normalzustand von Licht, Strömung, Temperatur und Abschäumer beschreiben.",
          "Steckdosen, Sicherungen und Ersatzteile nur erklären, wenn sie genutzt werden sollen.",
          "Temperaturbereich und sichtbare Warnzeichen notieren.",
          "Bei Technikstillstand sofort Kontakt aufnehmen statt selbst zu reparieren.",
        ],
      },
      {
        title: "Notfallplan für Becken und Tiere",
        intro:
          "Ein guter Notfallplan nimmt Druck aus der Betreuung. Er sagt klar, wer entscheidet, wenn etwas anders aussieht als erwartet.",
        paragraphs: [
          "Hinterlege eine erfahrene Person, einen Aquaristik-Fachhändler oder einen Servicekontakt. Wenn du selbst nicht erreichbar bist, braucht der Betreuer eine zweite Anlaufstelle.",
          "Nach dem Urlaub lohnt sich ein kurzer Abgleich: Waren Futterportionen eindeutig? War Technik verständlich? Gab es Momente, in denen der Betreuer unsicher war? Daraus wird die nächste Übergabe deutlich besser.",
        ],
        items: [
          "Aquaristik-Notfallkontakt und bevorzugten Händler hinterlegen.",
          "Klare Regel setzen, wann Fotos oder Videos geschickt werden sollen.",
          "Keine Medikamente, Zusätze oder Wasserwechsel ohne Freigabe.",
          "Nach der Rückkehr Übergabe und Checkliste aktualisieren.",
        ],
      },
    ],
  },
  {
    slug: "hundebetreuung-silvester",
    title: "Hundebetreuung an Silvester: ruhig planen, sicher übergeben",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "So bereitest du Hundebetreuung an Silvester vor: ruhiger Ort, kurze Wege, sichere Spaziergänge, Futter, Rückzug und klare Updates.",
    tags: ["Hundebetreuung Silvester", "Hundesitter", "Angsthund", "Feuerwerk"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-hundebetreuung-silvester.jpg",
      alt: "Ruhiger Hund liegt an Silvester auf einer Decke neben Wassernapf, Leine, Spielzeug und Checkliste in einem warm beleuchteten Wohnzimmer",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Silvester besondere Hundebetreuung braucht",
        intro:
          "Silvester ist für viele Hunde kein normaler Abend. Geräusche, Gerüche, Besuch, ungewohnte Zeiten und Feuerwerk können auch Hunde stressen, die sonst entspannt wirken.",
        paragraphs: [
          "Wenn du an Silvester nicht selbst zu Hause bist, sollte die Betreuung früher geplant werden als ein gewöhnlicher Gassi-Termin. Der Betreuer braucht nicht nur Uhrzeit und Adresse, sondern ein gutes Bild davon, wie dein Hund auf Knallen, Menschen, Dunkelheit und Unruhe reagiert.",
          "Eine gute Silvesterbetreuung ist ruhig und vorhersehbar. Ziel ist nicht, den Hund abzulenken um jeden Preis, sondern ihn sicher durch den Abend zu bringen: mit kurzen Wegen, vertrautem Zubehör, klaren Regeln und einem Betreuer, der nicht experimentieren muss.",
        ],
        items: [
          "Beschreibe ehrlich, wie dein Hund auf Feuerwerk, laute Musik und Besuch reagiert.",
          "Plane die Betreuung früh, weil Silvestertermine schnell gefragt sind.",
          "Kläre, ob dein Hund zu Hause bleibt oder beim Betreuer betreut wird.",
          "Vereinbare vorher ein Kennenlernen, wenn der Betreuer deinen Hund noch nicht kennt.",
        ],
      },
      {
        title: "Der richtige Ort für einen ruhigen Abend",
        intro:
          "Für viele Hunde ist die eigene Wohnung an Silvester am einfachsten, weil Gerüche, Schlafplatz und Wege vertraut sind. Das gilt aber nicht für jeden Hund.",
        paragraphs: [
          "Wenn dein Hund beim Betreuer bleibt, sollte der Ort möglichst ruhig sein. Wichtig sind geschlossene Fenster, ein sicherer Rückzugsplatz, keine offene Haustür und keine spontanen Partys im selben Raum. Auch Treppenhaus, Balkon und Garten müssen bedacht werden.",
          "Schreibe klar auf, wo dein Hund liegen darf und wo er sich sicher fühlt. Manche Hunde suchen Nähe, andere wollen Abstand. Ein guter Betreuer respektiert beides und drängt den Hund nicht zu Kontakt.",
        ],
        items: [
          "Ruhigen Raum, Schlafplatz, Decke und bekannte Gerüche vorbereiten.",
          "Fenster, Balkon, Garten und Haustür als Sicherheitsbereiche erklären.",
          "Besuch, Musik und häufiges Rein-und-raus möglichst vermeiden.",
          "Rückzugsorte nennen, an denen der Hund nicht gestört werden soll.",
        ],
      },
      {
        title: "Spaziergänge sicher planen",
        intro:
          "An Silvester sind Spaziergänge oft der heikelste Teil. Selbst ruhige Hunde können erschrecken, wenn es früher knallt als erwartet.",
        paragraphs: [
          "Plane die letzte größere Runde möglichst vor der lauten Zeit. Abends sind kurze Löserunden in vertrauter Umgebung oft besser als lange Strecken. Der Betreuer sollte wissen, welches Geschirr sicher sitzt und welche Wege vermieden werden.",
          "Wenn dein Hund bei Knallgeräuschen zieht, einfriert oder flüchten möchte, gehört das in die Übergabe. Es ist keine Schwäche, sondern eine wichtige Sicherheitsinformation.",
        ],
        items: [
          "Letzte größere Runde vor der Hauptknallzeit einplanen.",
          "Sicher sitzendes Geschirr, Halsband und Leine genau zeigen.",
          "Keine Freilauf-Experimente und keine neuen Strecken an Silvester.",
          "Bei unsicheren Hunden lieber kürzer raus und schneller wieder in den ruhigen Bereich.",
        ],
      },
      {
        title: "Futter, Wasser und Beschäftigung vorbereiten",
        intro:
          "Ein klarer Abendablauf hilft dem Betreuer, ruhig zu bleiben. Futter, Wasser und einfache Beschäftigung sollten griffbereit sein.",
        paragraphs: [
          "Bereite Futterportionen vor und notiere, ob dein Hund bei Stress frisst oder eher nicht. Kauartikel, Schleckmatte oder vertrautes Spielzeug können helfen, sollten aber nur gegeben werden, wenn dein Hund sie gut verträgt.",
          "Beruhigungsmittel oder Medikamente gehören nicht in spontane Silvesterentscheidungen. Wenn so etwas vorgesehen ist, sollte es vorher tierärztlich geklärt und exakt übergeben sein.",
        ],
        items: [
          "Futter, Wasser, Leckerlis und Kauartikel klar vorbereiten.",
          "Erklären, was dein Hund bei Stress annimmt und was nicht.",
          "Keine neuen Snacks oder Experimente am Silvesterabend.",
          "Medikamente nur nach klarer Vorgabe und mit genauer Dosierung übergeben.",
        ],
      },
      {
        title: "Updates und Notfallplan ohne Panik",
        intro:
          "Viele Halter möchten an Silvester mehr Rückmeldung. Das ist verständlich, sollte aber einfach bleiben.",
        paragraphs: [
          "Vereinbare wenige feste Updates: nach Ankunft, nach der letzten Runde und gegen späteren Abend. Wenn dein Hund stark gestresst wirkt, nicht zur Ruhe kommt oder etwas Ungewöhnliches passiert, soll der Betreuer natürlich sofort schreiben oder anrufen.",
          "Lege außerdem fest, wer erreichbar ist, falls du selbst nicht ans Telefon gehen kannst. Ein Ersatzkontakt gibt dem Betreuer Sicherheit, ohne dass er allein entscheiden muss.",
        ],
        items: [
          "Update-Zeiten vorab vereinbaren, statt ständig nachzufragen.",
          "Tierarztkontakt, Ersatzkontakt und Adresse griffbereit hinterlegen.",
          "Klare Schwelle setzen, wann der Betreuer sofort anrufen soll.",
          "Nach Silvester kurz auswerten, was für das nächste Jahr besser vorbereitet werden kann.",
        ],
      },
    ],
  },
  {
    slug: "katzenbetreuung-bei-umzug-renovierung",
    title: "Katzenbetreuung bei Umzug oder Renovierung: Stress ruhig abfedern",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "Wie du Katzenbetreuung bei Umzug, Renovierung oder Handwerkerterminen planst: sicherer Raum, Routine, Futter, Rückzug und Updates.",
    tags: ["Katzenbetreuung Umzug", "Katzenbetreuung Renovierung", "Katzensitter", "Stress vermeiden"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-katzenbetreuung-umzug-renovierung.jpg",
      alt: "Ruhige Katze liegt in einem sicheren Zimmer neben Transportbox, Futter, Wasser, Decke und Umzugskartons",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Umzug und Renovierung für Katzen heikel sind",
        intro:
          "Katzen mögen vertraute Abläufe. Kartons, fremde Menschen, offene Türen, Bohrgeräusche und neue Gerüche können schnell zu viel werden.",
        paragraphs: [
          "Eine Katzenbetreuung bei Umzug oder Renovierung ist deshalb mehr als Futter hinstellen. Der Betreuer soll Ruhe in einen unruhigen Tag bringen, Fluchtwege verhindern und beobachten, ob deine Katze frisst, trinkt und sich normal verhält.",
          "Besonders wichtig ist eine klare Entscheidung: Bleibt die Katze in einem sicheren Raum, wird sie für ein paar Stunden betreut oder zieht sie vorübergehend an einen ruhigeren Ort? Jede Variante braucht andere Vorbereitung.",
        ],
        items: [
          "Art des Termins beschreiben: Umzugstag, Renovierung, Handwerker oder Möbelaufbau.",
          "Klären, ob die Katze zu Hause bleibt oder vorübergehend woanders betreut wird.",
          "Offene Türen, Lärm, Staub und fremde Personen als Stressfaktoren mitdenken.",
          "Betreuer früh einweisen, wenn mehrere Personen gleichzeitig in der Wohnung sind.",
        ],
      },
      {
        title: "Einen sicheren Katzenraum vorbereiten",
        intro:
          "Ein geschlossener, ruhiger Raum kann an Umzugs- oder Renovierungstagen Gold wert sein. Er gibt der Katze Grenzen und dem Betreuer eine klare Aufgabe.",
        paragraphs: [
          "In diesen Raum gehören Wasser, Futter, Katzenklo, Decke, Versteck, Kratzmöglichkeit und die Transportbox. Der Raum sollte nicht ständig betreten werden und keine Werkzeuge, offenen Fenster oder gefährlichen Materialien enthalten.",
          "Wichtig ist, dass alle Beteiligten wissen: Diese Tür bleibt zu. Ein kurzer Hinweis an Umzugshelfer oder Handwerker kann verhindern, dass die Katze versehentlich entwischt.",
        ],
        items: [
          "Futter, Wasser, Katzenklo, Versteck und vertraute Decke in einem Raum bündeln.",
          "Fenster, Balkon, Kabel, Farbeimer und Werkzeuge ausschließen.",
          "Tür klar markieren oder allen Beteiligten mündlich erklären.",
          "Betreuer bitten, ruhig zu kontrollieren und die Katze nicht unnötig hervorzulocken.",
        ],
      },
      {
        title: "Routine trotz Chaos erhalten",
        intro:
          "Je normaler Futter, Wasser und Katzenklo laufen, desto leichter kommt die Katze durch den Tag.",
        paragraphs: [
          "Notiere, wann gefüttert wird, welche Menge normal ist und ob deine Katze bei Stress eher wartet. Der Betreuer sollte wissen, ob ein voller Napf normal ist oder ob das ein Warnzeichen sein kann.",
          "Auch das Katzenklo ist wichtig. Gerade bei Stress können Veränderungen auffallen. Der Betreuer muss keine Diagnose stellen, aber er sollte wissen, wann du informiert werden möchtest.",
        ],
        items: [
          "Futtermenge, Futterzeit und Lieblingsplatz klar beschreiben.",
          "Wasser und Katzenklo leicht erreichbar platzieren.",
          "Normales Versteckverhalten von echten Warnzeichen unterscheiden.",
          "Updates zu Futter, Wasser, Klo und Verhalten vereinbaren.",
        ],
      },
      {
        title: "Transportbox und Übergabe ohne Hektik",
        intro:
          "Wenn die Katze den Ort wechseln muss, sollte die Transportbox nicht erst im letzten Moment auftauchen.",
        paragraphs: [
          "Stelle die Box rechtzeitig bereit und lege eine vertraute Decke hinein. Der Betreuer sollte wissen, ob die Katze leicht hineingeht, ob sie gesichert getragen werden muss und welche Wege im Haus ruhig sind.",
          "Bei sehr ängstlichen Katzen kann es sinnvoll sein, die Betreuung so zu planen, dass ein Transport vermieden wird. Nicht jede Lösung, die für Menschen praktisch wirkt, ist für die Katze die ruhigste.",
        ],
        items: [
          "Transportbox, Decke und wichtige Unterlagen sichtbar bereitlegen.",
          "Erklären, ob und wie die Katze in die Box gesetzt werden darf.",
          "Treppenhaus, Auto, Türen und Wartezeiten möglichst ruhig planen.",
          "Bei Unsicherheit lieber einen sicheren Raum statt unnötigen Ortswechsel wählen.",
        ],
      },
      {
        title: "Nach dem Trubel wieder ankommen",
        intro:
          "Nach Umzug oder Renovierung braucht die Katze oft länger als der Mensch, um wieder normal zu wirken.",
        paragraphs: [
          "Lass den Betreuer kurz zurückmelden, wie der Tag lief: Hat die Katze gefressen? War sie versteckt? Gab es offene Türen, Lärmspitzen oder ungewöhnliches Verhalten? Diese Infos helfen dir, den Abend ruhiger zu gestalten.",
          "Wenn die Wohnung verändert ist, kann es sinnvoll sein, die Katze Schritt für Schritt wieder mehr Räume erkunden zu lassen. Vertraute Gerüche, leise Stimmen und feste Futterzeiten helfen beim Ankommen.",
        ],
        items: [
          "Nach dem Termin Rückmeldung zu Futter, Klo, Verhalten und Sicherheit einholen.",
          "Neue Räume langsam öffnen, wenn die Katze unsicher wirkt.",
          "Vertraute Decken, Kratzplätze und Futterroutinen beibehalten.",
          "Bei wiederkehrenden Renovierungstagen denselben Betreuer einplanen, wenn es gut funktioniert hat.",
        ],
      },
    ],
  },
  {
    slug: "haussitting-mit-tierbetreuung",
    title: "Haussitting mit Tierbetreuung: Wohnung, Schlüssel und Tiere gut übergeben",
    categorySlug: "organisation",
    excerpt: "So planst du Haussitting mit Tierbetreuung: Aufgaben abgrenzen, Tiere versorgen, Pflanzen, Post, Schlüssel, Updates und Vertrauen klären.",
    tags: ["Haussitting mit Tierbetreuung", "Tiersitter", "Schlüsselübergabe", "Urlaubsbetreuung"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-haussitting-mit-tierbetreuung.jpg",
      alt: "Haussitting Übergabe mit Hund, Katze, Leine, Futternäpfen, Schlüsseln, Post, Pflanze, Gießkanne und Checkliste",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Was Haussitting mit Tierbetreuung bedeutet",
        intro:
          "Haussitting mit Tierbetreuung verbindet zwei Aufgaben: Jemand schaut nach deiner Wohnung oder deinem Haus und kümmert sich gleichzeitig um deine Tiere.",
        paragraphs: [
          "Das kann sehr praktisch sein, wenn du im Urlaub bist, mehrere Tiere hast oder deine Tiere in ihrer vertrauten Umgebung bleiben sollen. Gleichzeitig braucht diese Form der Betreuung besonders klare Absprachen, weil private Räume, Schlüssel, Haushalt und Tierverantwortung zusammenkommen.",
          "Ein gutes Inserat trennt deshalb sauber: Was ist Tierbetreuung, was ist Haussitting und was ist ausdrücklich nicht Teil der Aufgabe? Je klarer die Grenze, desto entspannter läuft die Betreuung.",
        ],
        items: [
          "Beschreibe Tiere, Zeitraum, Besuchshäufigkeit und gewünschte Anwesenheit.",
          "Trenne Aufgaben für Tiere, Wohnung, Pflanzen, Post und Müll.",
          "Kläre, ob der Betreuer nur vorbeikommt oder zeitweise vor Ort bleibt.",
          "Private Bereiche und Dinge, die nicht genutzt werden sollen, deutlich nennen.",
        ],
      },
      {
        title: "Tiere bleiben die wichtigste Aufgabe",
        intro:
          "Auch wenn Pflanzen, Post und Wohnung wichtig sind: Bei Haussitting mit Tierbetreuung stehen die Tiere im Mittelpunkt.",
        paragraphs: [
          "Der Betreuer sollte zuerst wissen, was Hund, Katze oder andere Tiere täglich brauchen. Futter, Wasser, Reinigung, Gassi, Medikamente, Rückzug und Beobachtung gehören in die Übergabe, bevor Haushaltsdetails dazukommen.",
          "Wenn mehrere Tiere im Haushalt leben, lohnt sich eine klare Reihenfolge. Wer bekommt welches Futter? Welche Tür bleibt zu? Wer darf raus? Solche Details verhindern Fehler, besonders wenn der Betreuer längere Zeit allein vor Ort ist.",
        ],
        items: [
          "Tieraufgaben zuerst erklären und schriftlich festhalten.",
          "Futter, Wasser, Gassi, Katzenklo, Gehege oder Aquarium getrennt aufführen.",
          "Besonderheiten je Tier notieren, statt alles zusammenzufassen.",
          "Notfallkontakt und Tierarztkontakt sichtbar hinterlegen.",
        ],
      },
      {
        title: "Wohnung und Schlüssel sicher übergeben",
        intro:
          "Haussitting braucht Vertrauen. Schlüssel, Zugang, Alarm, Nachbarn und private Räume sollten deshalb nicht nebenbei geklärt werden.",
        paragraphs: [
          "Lege fest, wann und wo der Schlüssel übergeben wird, wie er zurückkommt und was passiert, wenn der Betreuer sich verspätet. Wenn es Alarmanlage, Haustürcode oder besondere Regeln im Haus gibt, gehören diese Informationen in eine ruhige Einweisung.",
          "Private Unterlagen, Wertsachen und Dinge ohne Bezug zur Betreuung sollten vorher weggeräumt werden. Das schützt beide Seiten und macht den Aufenthalt klarer.",
        ],
        items: [
          "Schlüsselübergabe, Rückgabe und Ersatzkontakt festlegen.",
          "Zugang, Klingel, Briefkasten, Keller, Müllraum oder Garten erklären.",
          "Private Räume und sensible Bereiche eindeutig abgrenzen.",
          "Nachbarn oder Hausverwaltung nur einbeziehen, wenn das vorher abgesprochen ist.",
        ],
      },
      {
        title: "Pflanzen, Post und kleine Haushaltsaufgaben",
        intro:
          "Kleine Aufgaben können Haussitting sinnvoll machen, sollten aber nicht ausufern. Eine kurze Liste reicht meistens völlig.",
        paragraphs: [
          "Schreibe auf, welche Pflanzen wie oft Wasser brauchen, ob Post reingeholt werden soll und wann Müll oder Pakete relevant sind. Wenn etwas nicht dringend ist, sollte der Betreuer das wissen.",
          "Vermeide Aufgaben, die Fachwissen oder Risiko brauchen. Ein Tiersitter ist nicht automatisch Handwerker, Gärtner oder Haushaltshilfe. Je einfacher die Haushaltsliste, desto besser kann der Betreuer sich auf die Tiere konzentrieren.",
        ],
        items: [
          "Pflanzen nach Raum oder Standort zusammenfassen.",
          "Post, Pakete, Müll und Lüften nur bei Bedarf aufnehmen.",
          "Keine riskanten Reparaturen oder unklaren Sonderaufgaben erwarten.",
          "Haushaltsaufgaben zeitlich realistisch neben der Tierbetreuung planen.",
        ],
      },
      {
        title: "Updates und Abschluss sauber regeln",
        intro:
          "Bei Haussitting möchtest du wissen, dass zu Hause alles ruhig läuft. Gleichzeitig soll der Betreuer nicht jeden Schritt dokumentieren müssen.",
        paragraphs: [
          "Vereinbare feste kurze Updates: zum Beispiel nach dem ersten Besuch, alle ein bis zwei Tage und am letzten Tag. Fotos von Tieren, Napf, Pflanzen oder Briefkasten können helfen, wenn sie ohne Stress entstehen.",
          "Am Ende sollte klar sein, wie Schlüssel zurückgegeben werden, ob etwas aufgefallen ist und ob Vorräte nachgefüllt werden müssen. Ein guter Abschluss macht die nächste Betreuung deutlich einfacher.",
        ],
        items: [
          "Update-Rhythmus vorab vereinbaren.",
          "Dringende Themen von normalen Rückmeldungen unterscheiden.",
          "Schlüsselrückgabe und letzten Wohnungscheck festlegen.",
          "Nach der Rückkehr kurz Feedback geben und die Checkliste für das nächste Mal verbessern.",
        ],
      },
    ],
  },
  {
    slug: "tiersitter-in-der-naehe-finden",
    title: "Tiersitter in der Nähe finden: so vergleichst du lokale Betreuung richtig",
    categorySlug: "organisation",
    excerpt: "Wie du passende Tiersitter in deiner Nähe findest, Inserate vergleichst und vor dem ersten Termin die wichtigsten Fragen klärst.",
    tags: ["Tiersitter in der Nähe", "Tierbetreuung", "Lokale Suche", "Inserat"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-tiersitter-in-der-naehe-finden.jpg",
      alt: "Ruhige Übergabe für Tierbetreuung mit Hund, Katze, Futternapf, Schlüssel, Tasche und Checkliste in einer hellen Wohnung",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Nähe ein guter Start ist, aber nicht alles",
        intro:
          "Wer einen Tiersitter in der Nähe sucht, möchte meistens kurze Wege, schnelle Absprachen und jemanden, der auch bei wiederkehrenden Terminen zuverlässig erreichbar bleibt.",
        paragraphs: [
          "Die Entfernung ist aber nur ein Teil der Entscheidung. Ein Betreuer kann zwei Straßen weiter wohnen und trotzdem nicht zu deinem Tier passen. Genauso kann jemand aus dem Nachbarort die bessere Wahl sein, wenn Erfahrung, Ruhe und Verfügbarkeit stimmen.",
          "Gute lokale Suche bedeutet deshalb: erst den Bedarf klären, dann Profile und Nachrichten vergleichen. So findest du nicht einfach die nächstbeste Person, sondern jemanden, der wirklich zur Situation passt.",
        ],
        items: [
          "Lege fest, ob du Hausbesuche, Gassi, Tagesbetreuung oder Urlaubsbetreuung brauchst.",
          "Suche mit PLZ und Radius, aber prüfe Erfahrung und Verfügbarkeit genauso sorgfältig.",
          "Achte darauf, ob Betreuer konkrete Fragen stellen und deinen Bedarf verstanden haben.",
          "Plane bei neuen Kontakten immer ein kurzes Kennenlernen oder eine klare Übergabe ein.",
        ],
      },
      {
        title: "Deinen Bedarf verständlich beschreiben",
        intro:
          "Je klarer dein Inserat ist, desto leichter können passende Tiersitter einschätzen, ob sie helfen können. Das spart Nachrichten und vermeidet Missverständnisse.",
        paragraphs: [
          "Beschreibe nicht nur die Tierart, sondern auch den Alltag: Wie oft soll jemand kommen? Wie lange dauert ein Besuch? Gibt es Medikamente, Schlüsselübergabe, besondere Gewohnheiten oder feste Zeiten?",
          "Ein guter Text muss nicht lang sein. Er sollte aber die Dinge nennen, die den Aufwand wirklich bestimmen. Bei Tierbetreuung sind das meistens Zeitfenster, Verantwortung, Verhalten des Tieres und der Ort der Betreuung.",
        ],
        items: [
          "Tierart, Anzahl, Alter und besondere Eigenschaften nennen.",
          "Zeitraum, Häufigkeit, ungefähre Dauer und flexible oder feste Zeiten angeben.",
          "Aufgaben sauber trennen: füttern, Gassi, spielen, reinigen, kontrollieren, Medikamente.",
          "Erfahrung wünschen, wenn dein Tier unsicher, krank, sehr jung, alt oder besonders sensibel ist.",
        ],
      },
      {
        title: "Profile und Nachrichten sinnvoll vergleichen",
        intro:
          "Bei mehreren Antworten hilft ein ruhiger Vergleich. Gute Tiersitter wirken nicht nur freundlich, sondern fragen nach den richtigen Details.",
        paragraphs: [
          "Achte darauf, ob jemand realistisch auf deinen Bedarf eingeht. Eine knappe Zusage ohne Rückfragen kann bei einfachen Aufgaben ausreichen, bei längerer Betreuung ist ein genaueres Gespräch sinnvoll.",
          "Verlässlichkeit zeigt sich oft in kleinen Dingen: klare Antwortzeiten, vollständige Angaben, ehrliche Grenzen und die Bereitschaft, vor dem ersten Einsatz eine Übergabe zu machen.",
        ],
        items: [
          "Vergleiche Erfahrung mit deiner Tierart und deiner Betreuungsform.",
          "Frage nach Verfügbarkeit im konkreten Zeitraum, nicht nur allgemein.",
          "Sprich an, wie Updates, Fotos oder kurze Rückmeldungen laufen sollen.",
          "Halte wichtige Absprachen im Chat fest, damit beide Seiten denselben Stand haben.",
        ],
      },
      {
        title: "Das erste Kennenlernen vorbereiten",
        intro:
          "Ein Kennenlernen muss nicht kompliziert sein. Es soll zeigen, ob Mensch, Tier und Ablauf zusammenpassen.",
        paragraphs: [
          "Bei Hunden kann ein gemeinsamer kurzer Spaziergang hilfreich sein. Bei Katzen, Kleintieren, Vögeln oder Aquarien ist oft eine ruhige Einweisung zu Hause wichtiger. Der Betreuer sollte sehen, wo Zubehör liegt und was im Alltag normal ist.",
          "Nutze den Termin auch, um Grenzen klar zu machen: Welche Räume sind tabu? Darf Futter angepasst werden? Was passiert, wenn dein Tier sich versteckt, nicht frisst oder ungewöhnlich reagiert?",
        ],
        items: [
          "Zubehör, Futter, Schlüssel, Notfallkontakte und Tierarztkontakt bereitlegen.",
          "Normales Verhalten und klare Warnzeichen getrennt erklären.",
          "Zugang zur Wohnung oder zum Stall erst nach passender Absprache konkret teilen.",
          "Nach dem Kennenlernen entscheiden, ob ein Probetermin sinnvoll ist.",
        ],
      },
      {
        title: "So wird aus einem Kontakt eine gute Betreuung",
        intro:
          "Wenn ein Tiersitter gut passt, lohnt sich eine einfache Routine. Wiederkehrende Betreuung wird leichter, wenn Informationen aktuell bleiben.",
        paragraphs: [
          "Aktualisiere dein Inserat oder deine Übergabe, wenn sich Futter, Medikamente, Verhalten, Adresse, Schlüssel oder Zeiten ändern. Kleine Änderungen können für Betreuer wichtig sein, auch wenn sie für dich selbstverständlich wirken.",
          "Nach dem ersten Termin ist ein kurzes Feedback wertvoll. Was hat gut funktioniert? Welche Information hat gefehlt? So wird aus einer einmaligen Anfrage ein Kontakt, auf den du später entspannter zurückgreifen kannst.",
        ],
        items: [
          "Nach dem ersten Einsatz kurz auswerten, ob Ablauf und Kommunikation gepasst haben.",
          "Gute Betreuer frühzeitig für Urlaub, Feiertage oder regelmäßige Termine anfragen.",
          "Checkliste und Notfallkontakte aktuell halten.",
          "Bei größeren Änderungen lieber neu einweisen, statt stillschweigend vorauszusetzen.",
        ],
      },
    ],
  },
  {
    slug: "hundebetreuung-am-wochenende",
    title: "Hundebetreuung am Wochenende: entspannte Hilfe für freie Tage planen",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "So organisierst du Hundebetreuung am Wochenende mit klaren Zeiten, Gassi-Routinen, Futter, Übernachtung und guter Übergabe.",
    tags: ["Hundebetreuung Wochenende", "Hundesitter", "Gassi", "Übernachtung"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-hundebetreuung-wochenende.jpg",
      alt: "Fröhlicher Hund sitzt neben Wochenendtasche, Leine, Decke, Futter und Notizbuch in einem hellen Flur",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Wochenendbetreuung anders geplant wird",
        intro:
          "Am Wochenende geht es oft nicht um eine einzelne Gassi-Runde, sondern um längere Zeitfenster, Ausflüge, Feiern, Kurztrips oder spontane Termine.",
        paragraphs: [
          "Für deinen Hund kann das bedeuten: andere Schlafenszeiten, längere Abwesenheit, mehr Besuch oder ein ungewohnter Tagesablauf. Damit die Betreuung trotzdem ruhig bleibt, sollte der Betreuer die wichtigsten Routinen kennen.",
          "Besonders wichtig ist die Frage, ob dein Hund nur stundenweise betreut wird, den ganzen Tag bleibt oder über Nacht versorgt werden soll. Diese drei Fälle brauchen unterschiedliche Vorbereitung.",
        ],
        items: [
          "Kläre zuerst, ob es um Stundenbetreuung, Tagesbetreuung oder Übernachtung geht.",
          "Beschreibe Wochenende, Uhrzeiten und Flexibilität konkret.",
          "Nenne Spaziergänge, Futterzeiten, Ruhephasen und Alleinbleiben realistisch.",
          "Plane bei längeren Einsätzen vorab ein kurzes Kennenlernen ein.",
        ],
      },
      {
        title: "Gassi, Auslastung und Ruhe gut dosieren",
        intro:
          "Viele Hunde brauchen am Wochenende nicht mehr Programm, sondern einen planbaren Ablauf. Zu viel Aktion kann genauso schwierig sein wie zu wenig Betreuung.",
        paragraphs: [
          "Schreibe auf, welche Strecken dein Hund kennt, wie lange Spaziergänge normalerweise dauern und welche Begegnungen vermieden werden sollten. Wenn dein Hund bei Fahrrädern, Kindern, anderen Hunden oder Wild stark reagiert, gehört das unbedingt in die Übergabe.",
          "Gute Betreuung heißt nicht, den Hund müde zu machen um jeden Preis. Ein ruhiger Spaziergang, Futter, Wasser und ein vertrauter Liegeplatz sind oft die bessere Wochenendlösung.",
        ],
        items: [
          "Normale Gassi-Dauer, Tempo und bevorzugte Strecken notieren.",
          "Leinenpflicht, Geschirr, Schleppleine oder Maulkorb klar besprechen.",
          "Hundebegegnungen, Jagdverhalten und Unsicherheiten offen nennen.",
          "Ruhezeiten fest einplanen, besonders nach Aufregung oder längeren Ausflügen.",
        ],
      },
      {
        title: "Futter, Tasche und Übergabe vorbereiten",
        intro:
          "Eine gut gepackte Hundetasche macht Wochenendbetreuung deutlich einfacher. Der Betreuer muss dann nicht suchen oder raten.",
        paragraphs: [
          "Lege Futter portioniert bereit und schreibe dazu, wann gefüttert wird. Auch kleine Dinge wie Kotbeutel, Handtuch, Medikamente, Kauartikel oder ein vertrautes Spielzeug können den Unterschied machen.",
          "Wenn dein Hund bei jemand anderem bleibt, gehören zusätzlich Schlafplatz, Decke und klare Regeln dazu: Sofa erlaubt oder nicht? Treppen? Türen? Allein im Raum bleiben?",
        ],
        items: [
          "Futterportionen, Napf, Wasserflasche, Leckerlis und Medikamente vorbereiten.",
          "Leine, Geschirr, Kotbeutel, Handtuch und eventuell Regen- oder Winterausrüstung einpacken.",
          "Schlafplatz, Decke oder vertrautes Spielzeug mitgeben.",
          "Regeln für Wohnung, Auto, Garten und Ruheplatz eindeutig erklären.",
        ],
      },
      {
        title: "Kommunikation ohne Dauerping",
        intro:
          "Am Wochenende möchtest du wahrscheinlich wissen, ob alles klappt. Gleichzeitig soll der Betreuer nicht ständig aufs Handy schauen müssen.",
        paragraphs: [
          "Vereinbare lieber wenige klare Updates: angekommen, erste Runde erledigt, Futter angenommen, Abend ruhig. Bei kurzen Betreuungen reicht manchmal eine Nachricht zum Abschluss.",
          "Wichtig ist, dass Auffälligkeiten sofort gemeldet werden. Wenn dein Hund nicht frisst, stark hechelt, humpelt, Durchfall hat oder ungewöhnlich ängstlich wirkt, sollte der Betreuer nicht warten.",
        ],
        items: [
          "Vorher festlegen, wann Updates sinnvoll sind.",
          "Notfallkontakt und Tierarztkontakt griffbereit teilen.",
          "Klare Grenze zwischen normaler Rückmeldung und dringender Meldung setzen.",
          "Nach dem Wochenende kurz besprechen, was für das nächste Mal angepasst wird.",
        ],
      },
      {
        title: "Früh buchen, wenn Termine beliebt sind",
        intro:
          "Wochenenden, Feiertage und Ferien sind bei Hundebetreuung oft schnell gefragt. Wer früh schreibt, bekommt eher passende Antworten.",
        paragraphs: [
          "Das gilt besonders, wenn dein Hund spezielle Erfahrung braucht oder wenn Übernachtung geplant ist. Gute Betreuer möchten wissen, ob sie den Hund in ihren Alltag integrieren können, bevor sie zusagen.",
          "Für regelmäßige Wochenendtermine lohnt sich ein fester Kontakt. Dann muss nicht jedes Mal alles neu erklärt werden, und dein Hund lernt den Ablauf besser kennen.",
        ],
        items: [
          "Bei Feiertagen und Ferien mehrere Wochen vorher anfragen.",
          "Bei neuen Betreuern erst einen kurzen Testtermin vereinbaren.",
          "Regelmäßige Wochenenden als wiederkehrenden Bedarf beschreiben.",
          "Nach guten Erfahrungen denselben Betreuer bevorzugt erneut anfragen.",
        ],
      },
    ],
  },
  {
    slug: "aquariumbetreuung-in-der-naehe-finden",
    title: "Aquariumbetreuung in der Nähe finden: Fütterung, Technik und Wasserwerte",
    categorySlug: "aquarium",
    careCategorySlug: "aquarium",
    excerpt: "Worauf es bei Aquariumbetreuung in deiner Nähe ankommt: Futter portionieren, Technik prüfen, Wasserwerte beobachten und Notfallplan vorbereiten.",
    tags: ["Aquariumbetreuung in der Nähe", "Aquarium Urlaub", "Fische füttern", "Wasserwerte"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-aquariumbetreuung-in-der-naehe.jpg",
      alt: "Gepflegtes Aquarium mit gesunden Fischen, vorbereiteten Futterdosen, Teststreifen, Kescher, Handtuch und Checkliste",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Aquariumbetreuung ruhige Genauigkeit braucht",
        intro:
          "Ein Aquarium wirkt stabil, solange Technik, Futter und Wasserwerte im Gleichgewicht bleiben. Genau deshalb braucht Betreuung klare Grenzen.",
        paragraphs: [
          "Bei Aquariumbetreuung in der Nähe geht es oft um kurze, regelmäßige Kontrollen. Der Betreuer soll füttern, Technik prüfen und Auffälligkeiten erkennen, aber nicht spontan eingreifen oder größere Änderungen vornehmen.",
          "Je einfacher die Übergabe ist, desto besser. Vorportioniertes Futter, beschriftete Technik und ein klarer Notfallkontakt verhindern die typischen Fehler, die während Urlaub oder Wochenendbetreuung entstehen.",
        ],
        items: [
          "Aquariumgröße, Besatz, Fütterungsrhythmus und Technik kurz beschreiben.",
          "Aufgaben auf Fütterung, Sichtkontrolle und einfache Technikprüfung begrenzen.",
          "PLZ und Radius nutzen, damit regelmäßige kurze Besuche realistisch bleiben.",
          "Vor dem Urlaub einen gemeinsamen Blick auf Becken, Futter und Geräte machen.",
        ],
      },
      {
        title: "Futter vorportionieren statt frei dosieren",
        intro:
          "Bei Fischen ist zu viel Futter oft riskanter als zu wenig. Deshalb sollte der Betreuer nicht nach Gefühl dosieren müssen.",
        paragraphs: [
          "Bereite kleine Portionen für jeden Fütterungstag vor und schreibe dazu, ob es Futterpausen gibt. Unterschiedliche Futtersorten sollten klar getrennt sein, besonders wenn du Bodenfische, Garnelen oder empfindliche Arten hältst.",
          "Wenn Lebend-, Frost- oder Spezialfutter nötig ist, sollte der Betreuer genau wissen, wie es gelagert und gegeben wird. Bei Unsicherheit ist eine einfachere Urlaubsroutine häufig sicherer.",
        ],
        items: [
          "Futter pro Tag in kleine Dosen oder Beutel vorbereiten.",
          "Futterfreie Tage ausdrücklich notieren.",
          "Verschiedene Futtersorten getrennt und eindeutig markieren.",
          "Keine Zusatzfütterung erlauben, wenn Fische scheinbar noch Hunger haben.",
        ],
      },
      {
        title: "Technik verständlich erklären",
        intro:
          "Filter, Licht, Heizung, CO2 und Pumpe sollen im Normalfall einfach laufen. Der Betreuer muss vor allem wissen, was normal aussieht.",
        paragraphs: [
          "Beschreibe, welche Geräusche, Anzeigen oder Lichtzeiten normal sind. Wenn ein Gerät nicht berührt werden soll, schreibe das klar auf. Wenn der Wasserstand sinkt, sollte ebenfalls feststehen, ob und wie nachgefüllt wird.",
          "Bei technischer Betreuung ist Zurückhaltung wichtig. Ein Betreuer sollte nichts auseinanderbauen müssen, sondern dich oder eine erfahrene Ersatzperson kontaktieren können.",
        ],
        items: [
          "Lichtzeiten, Filterlauf, Heizung, CO2 und Strömung kurz erklären.",
          "Normalen Wasserstand markieren oder beschreiben.",
          "Ersatztechnik, Steckdosen und Sicherungen nur erklären, wenn der Betreuer sie nutzen soll.",
          "Bei Geräuschen, Ausfall oder Stromproblem sofort Rücksprache vereinbaren.",
        ],
      },
      {
        title: "Wasserwerte und sichtbare Warnzeichen",
        intro:
          "Nicht jeder Betreuer muss Wasserwerte messen. Aber er sollte erkennen, wann etwas auffällig wirkt.",
        paragraphs: [
          "Trübes Wasser, starkes Hecheln an der Oberfläche, ungewöhnliche Scheu, tote Tiere, Temperaturabweichungen oder ein stehender Filter sind klare Gründe für eine schnelle Meldung. Wenn du Teststreifen nutzen möchtest, erkläre sie vorher sehr einfach.",
          "Wichtig ist, dass der Betreuer keine Mittel auf Verdacht ins Aquarium gibt. Wasseraufbereiter, Dünger oder Medikamente gehören nur in die Betreuung, wenn die Anwendung eindeutig abgesprochen ist.",
        ],
        items: [
          "Normale Temperatur und sichtbare Wasserqualität beschreiben.",
          "Warnzeichen wie Oberflächenatmen, Trübung, tote Tiere oder Technikstillstand nennen.",
          "Testmaterial nur verwenden lassen, wenn Ablauf und Ziel klar sind.",
          "Keine Chemie, Medikamente oder großen Wasserwechsel ohne Absprache starten.",
        ],
      },
      {
        title: "Passende Aquariumbetreuer finden",
        intro:
          "Nicht jeder Tiersitter hat Erfahrung mit Aquarien. Für kurze Kontrollen reicht manchmal Zuverlässigkeit, für Technik und sensible Becken ist Erfahrung wertvoll.",
        paragraphs: [
          "Schreibe im Inserat ehrlich, ob dein Aquarium einfach zu betreuen ist oder ob Erfahrung mit Technik, Pflanzenaquarium, Meerwasser, Garnelen oder empfindlichem Besatz nötig ist. So melden sich eher passende Personen.",
          "Nach der ersten Betreuung lohnt sich ein kurzer Abgleich: Waren die Futterportionen verständlich? Wurde Technik sicher erkannt? Gab es Fragen? Daraus wird die nächste Übergabe deutlich besser.",
        ],
        items: [
          "Im Inserat Aquarientyp und nötige Erfahrung klar nennen.",
          "Vor Ort zeigen, was geprüft wird und was unverändert bleibt.",
          "Notfallkontakt, Händler, erfahrene Person oder Aquaristik-Service hinterlegen.",
          "Nach dem Einsatz prüfen, ob Futter, Technik und Updates gut funktioniert haben.",
        ],
      },
    ],
  },
  {
    slug: "hundebetreuung-ueber-nacht",
    title: "Hundebetreuung über Nacht: so bereitest du Schlafplatz, Routine und Übergabe vor",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "Was du klären solltest, wenn dein Hund über Nacht betreut wird: Schlafplatz, Abendrunde, Futter, Schlüssel, Updates und Probetermin.",
    tags: ["Hundebetreuung über Nacht", "Hundesitter", "Übernachtbetreuung", "Hund"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-hundebetreuung-ueber-nacht.jpg",
      alt: "Hund liegt ruhig im Wohnzimmer neben Hundebett, Decke, Leine, Wassernapf und Tasche für die Übernachtbetreuung",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Übernachtbetreuung mehr Planung braucht",
        intro:
          "Eine Hundebetreuung über Nacht ist persönlicher als eine Gassi-Runde. Der Hund erlebt Abendroutine, Ruhephase, Schlafplatz und Morgenablauf mit einer anderen Person.",
        paragraphs: [
          "Damit sich das sicher anfühlt, braucht der Betreuer mehr Kontext: Wo schläft dein Hund normalerweise? Was passiert vor dem Schlafen? Wie reagiert er auf Geräusche im Haus, Klingel, Treppenhaus oder ungewohnte Schatten?",
          "Je klarer die Nacht vorbereitet ist, desto weniger muss der Hund improvisieren. Gerade sensible Hunde profitieren davon, wenn Abendrunde, Futter, Wasser, Ruheplatz und Aufstehen ähnlich laufen wie zu Hause.",
        ],
        items: [
          "Kläre, ob die Betreuung bei dir, beim Betreuer oder an einem dritten Ort stattfindet.",
          "Beschreibe Abendroutine, Schlafplatz, Morgenrunde und Fütterung genau.",
          "Nenne typische Unsicherheiten wie Bellen, Türen, Alleinbleiben oder nächtliches Aufstehen.",
          "Plane vor einer ganzen Nacht möglichst einen kurzen Probetermin.",
        ],
      },
      {
        title: "Schlafplatz und Abendroutine vorbereiten",
        intro:
          "Ein vertrauter Schlafplatz macht die Nacht oft leichter. Das muss kein großes Setup sein, aber Decke, Körbchen oder vertrautes Spielzeug können helfen.",
        paragraphs: [
          "Erkläre, ob dein Hund im Flur, Wohnzimmer, Schlafzimmer oder in einer Box schläft. Wichtig ist auch, was nicht passieren soll: aufs Sofa, ins Bett, Treppen steigen, nachts rausgehen oder Türen öffnen.",
        ],
        items: [
          "Decke, Körbchen, Geschirr, Leine, Handtuch und Kotbeutel bereitlegen.",
          "Letzte Abendrunde und erste Morgenrunde als Uhrzeit oder Zeitfenster notieren.",
          "Futter, Wasser und Leckerlis klar dosieren.",
          "Räume festlegen, die offen bleiben oder geschlossen sein sollen.",
        ],
      },
      {
        title: "Sicherheit bei Schlüssel, Adresse und Wohnung",
        intro:
          "Wenn der Betreuer bei dir übernachtet oder den Hund abholt, gehören Schlüssel, Adresse und private Räume sauber abgesprochen.",
        paragraphs: [
          "Teile genaue Adresse und Zugang erst, wenn ein passender Kontakt gefunden ist. Besprich, wo Schlüssel übergeben und zurückgegeben werden, welche Räume genutzt werden dürfen und welche privaten Bereiche tabu bleiben.",
        ],
        items: [
          "Schlüsselübergabe mit Datum, Uhrzeit und Rückgabe festhalten.",
          "Notieren, welche Türen, Fenster, Balkon oder Gartenbereiche kontrolliert werden müssen.",
          "Private Dokumente und Dinge ohne Bezug zur Betreuung wegräumen.",
          "Ersatzkontakt nennen, falls Schlüssel, Tür oder Hund unerwartet Probleme machen.",
        ],
      },
      {
        title: "Updates ohne Dauerstress",
        intro:
          "Bei Übernachtbetreuung wünschen viele Halter mehr Rückmeldung. Trotzdem sollte die Betreuung nicht nur aus Nachrichten und Fotos bestehen.",
        paragraphs: [
          "Vereinbare einfache Updates: zum Beispiel nach Ankunft, nach der Abendrunde und am Morgen. So weißt du, dass alles gut läuft, ohne dass der Betreuer den Hund ständig aus der Ruhe holt.",
        ],
        items: [
          "Kurze Nachricht nach Ankunft und vor dem Schlafen vereinbaren.",
          "Melden lassen, wenn Futter, Ruhe, Verhalten oder Gesundheit auffällig sind.",
          "Nicht jede Kleinigkeit live kommentieren, wenn der Hund dadurch unruhig wird.",
          "Nach der Nacht kurz besprechen, ob Schlafplatz, Zeiten und Ablauf gepasst haben.",
        ],
      },
      {
        title: "Probenacht und regelmäßige Betreuung",
        intro:
          "Wenn Übernachtbetreuung öfter gebraucht wird, lohnt sich eine kleine Eingewöhnung. Eine Probenacht oder ein langer Abendtermin nimmt beiden Seiten Druck.",
        paragraphs: [
          "Achte nach dem ersten Termin darauf, wie dein Hund wirkt. Ist er müde, aber ruhig? Hat er gefressen? Konnte er schlafen? Solche Eindrücke sagen mehr als ein perfekter Plan auf dem Papier.",
        ],
        items: [
          "Vor längeren Reisen zuerst eine kurze Nacht oder einen Abendtermin testen.",
          "Schlafplatz, Futter, Morgenroutine und Schlüssel nach dem Test anpassen.",
          "Bei guter Erfahrung frühzeitig weitere Nächte anfragen.",
          "Alle Änderungen an Gesundheit, Verhalten oder Medikamenten vor der nächsten Betreuung aktualisieren.",
        ],
      },
    ],
  },
  {
    slug: "vogelsitter-in-der-naehe-finden",
    title: "Vogelsitter in der Nähe finden: Käfig, Voliere und Freiflug richtig übergeben",
    categorySlug: "voegel",
    careCategorySlug: "vogel",
    excerpt: "So findest du passende Vogelbetreuung in deiner Nähe und erklärst Futter, Wasser, Käfig, Voliere, Freiflug und Sicherheitsregeln klar.",
    tags: ["Vogelsitter in der Nähe", "Vogelbetreuung", "Wellensittich", "Voliere"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-vogelsitter-in-der-naehe.jpg",
      alt: "Zwei Wellensittiche in einer hellen Vogelvoliere neben Futter, Wasser, frischen Kräutern und Notizbuch",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Vogelbetreuung genaue Routinen braucht",
        intro:
          "Vögel reagieren sensibel auf Veränderungen. Ein Vogelsitter in der Nähe kann Futter, Wasser, Käfigkontrolle und Beobachtung übernehmen, wenn die Routine klar beschrieben ist.",
        paragraphs: [
          "Anders als bei vielen anderen Haustieren geht es nicht nur ums Füttern. Licht, Luft, Geräusche, Freiflug, Türen, Fenster und sichere Sitzplätze spielen eine wichtige Rolle. Gute Betreuung schützt deshalb vor kleinen Fehlern, die schnell Stress machen können.",
          "Wenn du mehrere Vögel hast, sollte der Betreuer außerdem wissen, wer mit wem zusammenlebt, wer scheu ist und welches Verhalten normal ist.",
        ],
        items: [
          "Tierart, Anzahl, Namen und Besonderheiten der Vögel notieren.",
          "Futter, Wasser, Frischfutter, Sand, Badegelegenheit und Reinigung beschreiben.",
          "Sicherheitsregeln für Fenster, Türen, Küche, Pflanzen und Freiflug klar machen.",
          "PLZ und Radius nutzen, damit regelmäßige Hausbesuche realistisch bleiben.",
        ],
      },
      {
        title: "Käfig oder Voliere sauber übergeben",
        intro:
          "Ein Vogelsitter sollte sofort sehen, was er prüfen und was er nicht verändern soll. Beschriftete Vorräte und eine klare Reihenfolge helfen.",
        paragraphs: [
          "Lege Futter, Wasserzubehör, Reinigungsmaterial und Müllbeutel an einen festen Ort. Wenn Sitzstangen, Spielzeug oder Näpfe nicht verschoben werden sollen, schreibe das ausdrücklich dazu.",
        ],
        items: [
          "Futtermenge und Fütterungszeit genau angeben.",
          "Wasserwechsel, Napfreinigung und Frischfutter klar beschreiben.",
          "Erklären, wie Käfigboden, Kotstellen oder Volierenbereich kontrolliert werden.",
          "Notieren, welche Türen am Käfig besonders gesichert werden müssen.",
        ],
      },
      {
        title: "Freiflug nur mit klaren Regeln",
        intro:
          "Freiflug kann wichtig sein, ist aber für fremde Betreuer nicht immer sinnvoll. Entscheidend ist, ob der Vogelsitter Erfahrung hat und die Wohnung sicher vorbereitet ist.",
        paragraphs: [
          "Wenn Freiflug erlaubt ist, sollte der Ablauf sehr konkret sein: Welche Räume, welche Uhrzeit, welche Fenster, welche Pflanzen, welche Rückkehr in den Käfig? Wenn du unsicher bist, ist kontrollierte Versorgung ohne Freiflug manchmal die bessere Urlaubsregel.",
        ],
        items: [
          "Nur erfahrene Betreuer mit Freiflug beauftragen, wenn die Rückkehr zuverlässig klappt.",
          "Fenster, Türen, Spiegel, Küche, Kerzen und gefährliche Pflanzen vorher ausschließen.",
          "Räume nennen, die betreten werden dürfen und Räume, die tabu sind.",
          "Alternative Beschäftigung planen, wenn Freiflug während kurzer Betreuung nicht geeignet ist.",
        ],
      },
      {
        title: "Warnzeichen und Notfallkontakte",
        intro:
          "Vögel zeigen Unwohlsein oft leise. Deshalb sollte der Betreuer wissen, was normal ist und was sofort gemeldet werden soll.",
        paragraphs: [
          "Beschreibe typische Aktivität, Lautstärke, Fressverhalten und Sitzplätze. Wenn ein Vogel aufgeplustert wirkt, ungewöhnlich still ist, schlecht atmet, nicht frisst oder am Boden sitzt, sollte schnell Rücksprache gehalten werden.",
        ],
        items: [
          "Vogelkundigen Tierarzt oder Klinik als Kontakt notieren.",
          "Normales Verhalten und klare Warnzeichen getrennt aufschreiben.",
          "Transportbox, Handtuch und wichtige Unterlagen auffindbar bereitlegen.",
          "Keine Medikamente, Futterumstellungen oder Eingriffe ohne klare Vorgabe starten.",
        ],
      },
      {
        title: "So findest du passende Vogelsitter",
        intro:
          "Nicht jeder Tierbetreuer kennt sich mit Vögeln aus. Für Vogelbetreuung ist ruhiger Umgang, Aufmerksamkeit und Erfahrung mit Käfig- oder Volierenroutinen besonders hilfreich.",
        paragraphs: [
          "Achte im ersten Kontakt darauf, ob konkrete Fragen zu Futter, Freiflug, Sicherheit und Verhalten kommen. Das ist meist ein gutes Zeichen, dass die Person nicht nur irgendeinen Hausbesuch anbietet, sondern wirklich mitdenkt.",
        ],
        items: [
          "Im Inserat ausdrücklich nach Erfahrung mit Wellensittichen, Papageien oder Volieren fragen.",
          "Vor dem ersten Termin eine kurze Einweisung vor Ort machen.",
          "Freiflug, Reinigung und sensible Aufgaben getrennt besprechen.",
          "Nach dem ersten Besuch prüfen, ob Updates und Ablauf verständlich genug waren.",
        ],
      },
    ],
  },
  {
    slug: "pferdebetreuung-in-der-naehe-finden",
    title: "Pferdebetreuung in der Nähe finden: Stallroutine, Koppel und Übergabe planen",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "pferd",
    excerpt: "Worauf du achten solltest, wenn du Pferdebetreuung in deiner Nähe suchst: Stallzeiten, Fütterung, Koppel, Ausrüstung und klare Zuständigkeiten.",
    tags: ["Pferdebetreuung in der Nähe", "Stallhilfe", "Pferd", "Koppel"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-pferdebetreuung-in-der-naehe.jpg",
      alt: "Pferd schaut ruhig aus einer hellen Stallbox neben Heu, Futtereimer, Führstrick, Bürste und Übergabe-Notizbuch",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Pferdebetreuung klare Zuständigkeiten braucht",
        intro:
          "Pferdebetreuung ist selten nur ein kurzer Blick in die Box. Je nach Stall gehören Füttern, Wasser, Koppel, Decke, Misten, Medikamente, Bewegung oder Absprachen mit dem Hofteam dazu.",
        paragraphs: [
          "Darum ist es wichtig, die Aufgabe sauber abzugrenzen. Soll jemand Stallhilfe leisten, dein Pferd versorgen, nur kontrollieren oder auch führen und bewegen? Je genauer das Inserat ist, desto eher melden sich Menschen mit passender Erfahrung.",
          "Gerade bei Pferden sollte niemand spontan Aufgaben übernehmen, für die Erfahrung oder Erlaubnis fehlt. Gute Betreuung bedeutet auch, Grenzen zu kennen.",
        ],
        items: [
          "Aufgabe klar trennen: Füttern, Misten, Koppel, Kontrolle, Führen oder Bewegung.",
          "Stallregeln, Ansprechpartner und erlaubte Bereiche nennen.",
          "Erfahrung mit Pferden, Jungpferden, Senioren oder besonderen Verhaltensweisen angeben.",
          "PLZ und Stallregion nutzen, ohne genaue Stalladresse öffentlich zu machen.",
        ],
      },
      {
        title: "Stallroutine und Zeiten beschreiben",
        intro:
          "Pferde leben stark von Routinen. Wenn Zeiten, Wege und Reihenfolgen klar sind, kann ein Betreuer viel ruhiger arbeiten.",
        paragraphs: [
          "Schreibe auf, wann gefüttert wird, wann Koppel oder Paddock relevant sind und wer im Stall sonst Bescheid weiß. Wenn das Hofteam Aufgaben übernimmt, sollte klar sein, was zusätzlich durch den Betreuer passiert.",
        ],
        items: [
          "Fütterungszeiten, Futtermenge und Sonderfutter eindeutig notieren.",
          "Koppel-, Paddock- oder Boxenzeiten mit Stallregeln verbinden.",
          "Wasser, Heu, Einstreu und Decke als einzelne Kontrollpunkte nennen.",
          "Ansprechpartner im Stall und Erreichbarkeit für Rückfragen festhalten.",
        ],
      },
      {
        title: "Ausrüstung, Decken und Besonderheiten",
        intro:
          "Bei Pferden können kleine Details viel ausmachen: Welche Decke bei welchem Wetter? Welcher Führstrick? Welche Bürste? Welche Hufe müssen besonders kontrolliert werden?",
        paragraphs: [
          "Lege Ausrüstung gut sichtbar bereit oder beschreibe den Standort. Wenn bestimmte Dinge nicht genutzt werden sollen, gehört das ebenfalls in die Übergabe. So vermeidest du, dass Betreuer im Stall suchen oder raten müssen.",
        ],
        items: [
          "Standorte von Halfter, Führstrick, Putzzeug, Decken und Futter zeigen.",
          "Deckenregeln nach Temperatur, Wetter oder Stallvorgabe erklären.",
          "Hufe, Beine, Fressverhalten und Kot als Kontrollpunkte nennen.",
          "Besonderheiten wie Scheuen, Beißen, Drängeln oder Trennungsstress offen beschreiben.",
        ],
      },
      {
        title: "Bewegung und Verantwortung realistisch abgrenzen",
        intro:
          "Nicht jede Pferdebetreuung beinhaltet Reiten oder Longieren. Oft ist Versorgung ohne Bewegung die sicherere und klarere Aufgabe.",
        paragraphs: [
          "Wenn Bewegung gewünscht ist, sollten Erfahrung, Versicherung, Stallregeln und Erlaubnis sehr genau geklärt werden. Für viele Betreuungen reicht es, Versorgung und Kontrolle sauber zu organisieren.",
        ],
        items: [
          "Reiten, Longieren oder Bodenarbeit nur mit passender Erfahrung und klarer Absprache erlauben.",
          "Führen zur Koppel oder zum Paddock separat beschreiben.",
          "Grenzen festlegen: kein Reiten, keine fremden Pferde, keine Ausrüstung wechseln.",
          "Bei Unsicherheit Aufgaben reduzieren statt riskante Situationen einplanen.",
        ],
      },
      {
        title: "Passende Pferdebetreuer finden",
        intro:
          "Gute Pferdebetreuung erkennt man an konkreten Fragen. Wer nach Stallregeln, Verhalten, Fütterung, Koppel und Notfallkontakt fragt, denkt meist praktisch mit.",
        paragraphs: [
          "Plane vor dem ersten Einsatz eine Einweisung im Stall. Dort sieht der Betreuer Wege, Ausrüstung, Ansprechpartner und dein Pferd in Ruhe. Bei längerer Betreuung kann ein kleiner Probetermin sinnvoll sein.",
        ],
        items: [
          "Im Inserat Erfahrung und genaue Aufgaben offen nennen.",
          "Einweisung vor Ort mit Stallteam oder Ansprechpartner abstimmen.",
          "Wichtige Absprachen im Chat festhalten, damit nichts nur mündlich bleibt.",
          "Nach dem ersten Termin prüfen, ob Zeiten, Aufgaben und Verantwortung realistisch waren.",
        ],
      },
    ],
  },
  {
    slug: "kleintierbetreuung-in-der-naehe-finden",
    title: "Kleintierbetreuung in der Nähe finden: Kaninchen, Meerschweinchen und Hamster",
    categorySlug: "kleintiere",
    careCategorySlug: "kleintier",
    excerpt: "So findest du passende Kleintierbetreuung in deiner Nähe und beschreibst Gehege, Fütterung, Reinigung und tägliche Kontrolle klar.",
    tags: ["Kleintierbetreuung in der Nähe", "Kaninchenbetreuung", "Meerschweinchen", "Hamsterbetreuung"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-kleintierbetreuung-in-der-naehe.jpg",
      alt: "Zwei Kaninchen in einem hellen, großzügigen Innengehege mit Heu, Wasser, Frischfutter und Notizbuch",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Kleintiere genaue Betreuung brauchen",
        intro:
          "Kleintiere wirken oft unkompliziert, aber gute Betreuung braucht mehr als Futter nachfüllen. Kaninchen, Meerschweinchen und Hamster haben feste Routinen, empfindliche Verdauung und sehr unterschiedliche Tagesrhythmen.",
        paragraphs: [
          "Wer Kleintierbetreuung in der Nähe sucht, sollte deshalb nicht nur Tierart und Zeitraum nennen. Entscheidend sind Gehege, Futter, Wasser, Reinigung, Beobachtung und die Frage, woran ein Betreuer merkt, dass etwas nicht stimmt.",
          "Gerade bei Urlaubsbetreuung oder mehreren Besuchstagen hilft eine schriftliche Übergabe. Sie macht sichtbar, was für dich Alltag ist: Wo liegt das Heu? Wie viel Frischfutter ist normal? Welche Tiere sind scheu, welche kommen zur Hand?",
        ],
        items: [
          "Beschreibe Tierart, Anzahl, Alter und Haltung so konkret wie möglich.",
          "Nenne, ob tägliche Kontrolle, Fütterung, Reinigung oder längere Anwesenheit nötig ist.",
          "Erkläre, was normales Verhalten ist und welche Warnzeichen sofort gemeldet werden sollen.",
          "Nutze PLZ und Radius, damit kurze Wege für tägliche Hausbesuche realistisch bleiben.",
        ],
      },
      {
        title: "Was im Inserat stehen sollte",
        intro:
          "Ein gutes Kleintier-Inserat hilft Betreuern, den Aufwand ehrlich einzuschätzen. Je genauer du den Ablauf beschreibst, desto eher melden sich Menschen, die wirklich passen.",
        paragraphs: [
          "Schreibe nicht nur: Kaninchen im Urlaub versorgen. Besser ist ein kurzer Ablauf: morgens Frischfutter und Wasser, abends Sichtkontrolle, alle zwei Tage Teilreinigung. So entsteht ein realistisches Bild der Betreuung.",
        ],
        items: [
          "PLZ-Region, Zeitraum, Besuchshäufigkeit und ungefähre Besuchsdauer angeben.",
          "Gehegeart, Futterorte, Wasserstellen, Heu, Streu und Reinigungsmaterial beschreiben.",
          "Bei mehreren Tieren Namen, Aussehen, Futterverhalten und Besonderheiten notieren.",
          "Erklären, ob der Betreuer Erfahrung mit Kaninchen, Meerschweinchen oder Hamstern haben sollte.",
        ],
      },
      {
        title: "Futter, Wasser und Reinigung vorbereiten",
        intro:
          "Die meisten Fehler passieren nicht aus Unwillen, sondern weil etwas gesucht oder falsch eingeschätzt wird. Vorbereitung macht Kleintierbetreuung deutlich sicherer.",
        paragraphs: [
          "Stelle Futter, Heu, Streu, Schaufel, Müllbeutel und Reinigungsmittel sichtbar zusammen. Wenn Frischfutter vorbereitet werden soll, schreibe Mengen und Tabus klar auf. Bei Kleintieren sollte Futterumstellung nicht spontan passieren.",
        ],
        items: [
          "Heu, Frischfutter, Trockenfutter und Leckerlis getrennt und eindeutig markieren.",
          "Wasserflaschen oder Näpfe zeigen und erklären, wie oft sie gereinigt werden.",
          "Teilreinigung, Komplettreinigung und Geruchskontrolle unterscheiden.",
          "Keine neuen Futtersorten ohne Absprache und keine medizinischen Änderungen ohne Tierarztvorgabe.",
        ],
      },
      {
        title: "Tägliche Kontrolle ohne Stress",
        intro:
          "Kleintiere zeigen Unwohlsein oft leise. Deshalb ist Beobachtung ein wichtiger Teil der Betreuung, auch wenn das Tier nicht aktiv Kontakt sucht.",
        paragraphs: [
          "Ein guter Betreuer muss nicht jedes Tier anfassen. Oft reicht eine ruhige Sichtkontrolle: Kommt das Tier zum Futter? Wirkt es aufmerksam? Sind Kot, Atmung, Bewegung und Fell unauffällig? Was auffällig ist, sollte sofort gemeldet werden.",
        ],
        items: [
          "Fressverhalten, Trinkmenge, Kot, Bewegung und Atmung beobachten.",
          "Scheue Tiere nicht bedrängen, sondern aus ruhiger Distanz kontrollieren.",
          "Verstecke und Lieblingsplätze nennen, damit kein Tier unnötig gesucht wird.",
          "Tierarzt, Ersatzkontakt und Transportbox griffbereit dokumentieren.",
        ],
      },
      {
        title: "So wird regelmäßige Kleintierbetreuung einfacher",
        intro:
          "Wenn du öfter Betreuung brauchst, lohnt sich eine feste Übergabe. Das spart jedes Mal Zeit und schützt vor Missverständnissen.",
        paragraphs: [
          "Aktualisiere die Übergabe, sobald sich Futter, Gehege, Gesundheitszustand oder Tiergruppe verändern. Gerade bei kleinen Tieren können scheinbar kleine Änderungen wichtig sein.",
        ],
        items: [
          "Eine einfache Checkliste für jeden Besuch anlegen.",
          "Fotos von Futterplatz, Zubehör und Gehegeübersicht ergänzen, wenn das hilft.",
          "Nach dem ersten Termin fragen, ob Informationen gefehlt haben.",
          "Gute lokale Kontakte früh für Urlaub, Feiertage oder spontane Engpässe anfragen.",
        ],
      },
    ],
  },
  {
    slug: "terrarium-betreuung-im-urlaub",
    title: "Terrarium-Betreuung im Urlaub: Reptilien sicher versorgen lassen",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "reptil",
    excerpt: "Worauf du bei Terrarium, Temperatur, Luftfeuchte, Licht, Futter und Notfallkontakten achten solltest, wenn Reptilien betreut werden.",
    tags: ["Terrarium Betreuung", "Reptilienbetreuung", "Urlaub", "Bartagame"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-terrarium-betreuung-urlaub.jpg",
      alt: "Bartagame in einem gepflegten Terrarium mit Wärmelampe, Wasserschale, Messgeräten und Übergabe-Notizbuch",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Terrarium-Betreuung sehr genaue Angaben braucht",
        intro:
          "Bei Reptilien hängt gute Betreuung stark von Haltung, Klima und Routine ab. Ein Betreuer muss nicht nur füttern, sondern auch erkennen, ob Temperatur, Licht und Feuchtigkeit im erwarteten Bereich bleiben.",
        paragraphs: [
          "Viele Reptilien zeigen Stress oder Krankheit nicht so deutlich wie Hund oder Katze. Deshalb sollte die Übergabe erklären, welche Werte normal sind, welche Geräte laufen müssen und wann du sofort informiert werden möchtest.",
          "Terrarium-Betreuung im Urlaub funktioniert am besten, wenn der Betreuer vorab einmal sieht, wie du Licht, Wasser, Futter und Kontrolle erledigst. Ein gemeinsamer kurzer Durchlauf ist hier oft wertvoller als eine lange Nachricht.",
        ],
        items: [
          "Tierart, Anzahl, Alter und Haltungsform genau beschreiben.",
          "Temperaturzonen, Luftfeuchte, Lichtzeiten und Geräte eindeutig dokumentieren.",
          "Futterart, Futtertage und Tabus klar notieren.",
          "Tierarzt oder reptilienkundige Praxis als Kontakt bereitlegen.",
        ],
      },
      {
        title: "Klima, Licht und Technik übergeben",
        intro:
          "Terrarium-Technik sollte für den Betreuer verständlich sein, ohne dass er im Termin experimentieren muss.",
        paragraphs: [
          "Beschrifte Schalter und Zeitschaltuhren nicht kompliziert, sondern eindeutig. Wenn Geräte nicht berührt werden sollen, schreibe das ebenfalls auf. Wichtig ist, dass der Betreuer weiß, was er prüfen soll und was unverändert bleibt.",
        ],
        items: [
          "Lichtzeiten, Wärmelampe, UV-Lampe, Thermostat und Nebler erklären.",
          "Normale Temperatur- und Feuchtigkeitsbereiche in einfachen Worten notieren.",
          "Sagen, wann Wasser gewechselt, gesprüht oder nachgefüllt werden soll.",
          "Notfallplan für Stromausfall, defekte Lampe oder ungewöhnliche Werte festlegen.",
        ],
      },
      {
        title: "Fütterung ohne Experimente",
        intro:
          "Bei Reptilien ist Fütterung oft spezieller als bei klassischen Haustieren. Deshalb sollte der Betreuer keine eigenen Anpassungen vornehmen müssen.",
        paragraphs: [
          "Schreibe genau auf, ob Lebendfutter, Grünfutter, Frostfutter, Mineralien oder bestimmte Futterzeiten relevant sind. Bitte nur Aufgaben vergeben, die der Betreuer sicher und zuverlässig übernehmen kann.",
        ],
        items: [
          "Futtertage und futterfreie Tage eindeutig unterscheiden.",
          "Mengen, Futtertiere, Grünfutter und Zusätze klar beschreiben.",
          "Erklären, was nach der Fütterung entfernt oder kontrolliert werden muss.",
          "Keine neuen Futterarten und keine Änderung von Ergänzungen ohne Absprache.",
        ],
      },
      {
        title: "Kontrolle: was normal ist und was nicht",
        intro:
          "Reptilienbetreuung bedeutet auch Beobachtung. Der Betreuer sollte wissen, welche Haltung, Aktivität und Reaktion für dein Tier normal sind.",
        paragraphs: [
          "Nicht jedes ruhige Verhalten ist ein Problem, aber ungewöhnliche Apathie, Atemgeräusche, auffällige Haut, Futterverweigerung oder Ausbruchversuche sollten ernst genommen werden. Medizinische Einschätzungen gehören zu einer fachkundigen Praxis.",
        ],
        items: [
          "Typisches Aktivitätsfenster und Lieblingsplätze beschreiben.",
          "Häutung, Kot, Futteraufnahme und Bewegung als Beobachtungspunkte nennen.",
          "Ausbruchssicherung, Türen und Kabel nach jedem Besuch kontrollieren.",
          "Bei Unsicherheit lieber früh nachfragen als Geräte oder Haltung selbst verändern.",
        ],
      },
      {
        title: "Geeignete Betreuer finden",
        intro:
          "Für Terrarientiere ist Erfahrung besonders hilfreich. Nicht jeder Tierbetreuer kennt Reptilien, Technik und Futterroutinen.",
        paragraphs: [
          "Formuliere im Inserat ehrlich, welche Erfahrung du dir wünschst. Manche Aufgaben sind einfach, andere erfordern Fachwissen. Eine klare Beschreibung schützt dein Tier und hilft Betreuern, nur passende Anfragen zu senden.",
        ],
        items: [
          "Im Inserat Reptilien- oder Terrarium-Erfahrung ausdrücklich nennen.",
          "Vor längerer Betreuung einen kurzen Testbesuch oder Technikdurchlauf vereinbaren.",
          "Auf ruhige, konkrete Rückfragen zu Klima, Futter und Notfall achten.",
          "Alle Absprachen schriftlich festhalten, besonders bei Technik und Fütterung.",
        ],
      },
    ],
  },
  {
    slug: "kurzfristige-tierbetreuung-finden",
    title: "Kurzfristige Tierbetreuung finden: was hilft, wenn es schnell gehen muss",
    categorySlug: "organisation",
    excerpt: "So findest du bei Krankheit, Arbeit, Reise oder spontanem Termin schneller passende Tierbetreuung, ohne wichtige Übergaben zu vergessen.",
    tags: ["Kurzfristige Tierbetreuung", "Tierbetreuung schnell finden", "Notfallbetreuung", "Haustierbetreuung"],
    readingMinutes: 8,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-kurzfristige-tierbetreuung-finden.jpg",
      alt: "Vorbereitete kurzfristige Tierbetreuung mit Hund, Leine, Näpfen, Schlüsseln, Telefon und Notizbuch im Eingangsbereich",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Schnell heißt nicht unvorbereitet",
        intro:
          "Manchmal muss Tierbetreuung kurzfristig organisiert werden: Krankheit, Arbeit, Reise, Familienfall oder ein Termin, der länger dauert als geplant. Genau dann hilft eine klare, knappe Übergabe.",
        paragraphs: [
          "Auch wenn es schnell gehen muss, sollten die wichtigsten Informationen nicht nur mündlich weitergegeben werden. Betreuer brauchen Tierart, Zeitraum, Aufgabe, Ort, Verhalten und Notfallkontakt in einer Form, die sie im Termin wieder nachlesen können.",
          "Kurzfristige Betreuung funktioniert am besten, wenn du zwischen Muss und Wunsch unterscheidest. Muss: Futter, Wasser, Sicherheit, Medikamente, Lösemöglichkeit. Wunsch: extra Spiel, Foto, längerer Spaziergang oder kleine Zusatzaufgaben.",
        ],
        items: [
          "Schreibe zuerst Tierart, Zeitraum, PLZ-Region und genaue Aufgabe auf.",
          "Nenne, was zwingend erledigt werden muss und was optional ist.",
          "Teile private Adresse erst, wenn ein passender Kontakt gefunden ist.",
          "Halte Notfallkontakt und Tierarzt griffbereit, auch bei kurzen Terminen.",
        ],
      },
      {
        title: "Ein gutes kurzfristiges Inserat schreiben",
        intro:
          "Bei spontanen Anfragen entscheidet der erste Eindruck. Ein klares Inserat spart Rückfragen und erhöht die Chance, dass passende Menschen schnell reagieren.",
        paragraphs: [
          "Der Titel sollte direkt sagen, was gebraucht wird: Hund heute Abend ausführen, Katze am Wochenende füttern, Kaninchen morgen kontrollieren. In der Beschreibung folgen Routine, Besonderheiten und gewünschte Kommunikation.",
        ],
        items: [
          "Konkreten Titel mit Tierart, Aufgabe und Zeitraum verwenden.",
          "PLZ oder Stadtteil nennen, aber keine vollständige Adresse veröffentlichen.",
          "Kurz erklären, ob Erfahrung, Auto, Schlüsselübergabe oder Medikamente nötig sind.",
          "Zeitfenster anbieten, wenn die Aufgabe nicht minutengenau passieren muss.",
        ],
      },
      {
        title: "Weniger erklären, aber das Richtige",
        intro:
          "In Eile entsteht oft eine zu lange Nachricht mit zu vielen Details. Besser ist eine klare Reihenfolge, die der Betreuer abarbeiten kann.",
        paragraphs: [
          "Eine kompakte Liste reicht häufig aus. Wichtig ist, dass gefährliche oder sensible Punkte nicht untergehen: Türen, Futtertabus, Medikamente, Freigang, Hundebegegnungen, Ausbruchrisiken oder Technik.",
        ],
        items: [
          "Ablauf in Reihenfolge schreiben: ankommen, prüfen, füttern, bewegen, reinigen, abschließen.",
          "Tabus sichtbar machen: kein Freilauf, kein neues Futter, Fenster geschlossen halten.",
          "Zubehör an einen Ort legen, damit nichts gesucht werden muss.",
          "Bei Medikamenten Dosierung, Uhrzeit und Lagerung klar notieren.",
        ],
      },
      {
        title: "Vertrauen trotz kurzer Zeit aufbauen",
        intro:
          "Auch kurzfristig solltest du nicht jedes Detail überspringen. Ein kurzer Check hilft beiden Seiten, sich sicherer zu fühlen.",
        paragraphs: [
          "Achte auf konkrete Rückfragen. Wer nach Verhalten, Zugang, Notfallkontakt oder Grenzen fragt, denkt meistens mit. Wenn jemand gar keine Fragen stellt, obwohl die Aufgabe komplex ist, lohnt sich ein genauerer Blick.",
        ],
        items: [
          "Profil, bisherige Angaben und Ton der Nachricht prüfen.",
          "Bei Wohnungsschlüssel, Medikamenten oder längerer Betreuung lieber kurz telefonieren oder klar im Chat abstimmen.",
          "Bei Hunden möglichst eine kurze Übergabe oder bekannte Route zeigen.",
          "Nach dem Termin eine Rückmeldung zu Futter, Verhalten und Auffälligkeiten erbitten.",
        ],
      },
      {
        title: "Für das nächste Mal vorsorgen",
        intro:
          "Kurzfristige Betreuung wird viel leichter, wenn du einmal eine Standardübergabe vorbereitest. Dann musst du beim nächsten Engpass nicht wieder bei null anfangen.",
        paragraphs: [
          "Speichere eine einfache Vorlage mit den wichtigsten Tierdaten, Routinen, Notfallkontakten und Tabus. Wenn du gute Betreuer gefunden hast, halte den Kontakt warm und frage bei planbaren Engpässen frühzeitig an.",
        ],
        items: [
          "Eine wiederverwendbare Übergabe für jedes Tier anlegen.",
          "Fotos von Zubehör, Futterplatz oder Gehege ergänzen, wenn das hilft.",
          "Zwei bis drei passende Kontakte für Krankheit, Arbeit oder Reise aufbauen.",
          "Nach jeder spontanen Betreuung prüfen, welche Info beim nächsten Mal fehlen würde.",
        ],
      },
    ],
  },
  {
    slug: "hundetagesbetreuung-finden",
    title: "Hundetagesbetreuung finden: so planst du einen guten Tagesplatz",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "Wann Hundetagesbetreuung sinnvoll ist, wie du passende Betreuer vergleichst und welche Routinen in die Übergabe gehören.",
    tags: ["Hundetagesbetreuung", "Hundebetreuung", "Tagesbetreuung", "Hundesitter"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-hundetagesbetreuung-finden.jpg",
      alt: "Hund ruht in einem Hundebett neben Homeoffice-Tisch, Leine und Wassernapf für die Tagesbetreuung",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Wann Hundetagesbetreuung die bessere Lösung ist",
        intro:
          "Hundetagesbetreuung ist mehr als eine kurze Gassi-Runde. Sie hilft, wenn ein Hund über mehrere Stunden gut begleitet werden soll, während du arbeitest, Termine hast oder einen langen Tag außer Haus bist.",
        paragraphs: [
          "Gerade Hunde, die nicht lange allein bleiben können, profitieren von einer verlässlichen Tagesroutine. Wichtig ist aber, dass die Betreuung zum Temperament passt. Ein aktiver Hund braucht Bewegung und Struktur, ein sensibler Hund eher Ruhe, feste Signale und wenig Wechsel.",
          "Ein guter Tagesplatz fühlt sich für den Hund nicht wie ein dauerndes Abenteuer an. Er sollte Futter, Pausen, kurze Beschäftigung und Rückzug so verbinden, dass dein Hund am Abend zufrieden und nicht völlig überdreht ist.",
        ],
        items: [
          "Hundetagesbetreuung ist sinnvoll bei langen Arbeitstagen, Terminen oder Übergangsphasen.",
          "Achte auf feste Bring- und Abholzeiten, damit der Tag planbar bleibt.",
          "Klare Ruhephasen sind genauso wichtig wie Spaziergänge und Spiel.",
          "Ein Probetag zeigt oft besser als ein langer Chat, ob der Ablauf wirklich passt.",
        ],
      },
      {
        title: "Betreuer vergleichen: Erfahrung, Alltag und Umfeld",
        intro:
          "Bei Tagesbetreuung zählt nicht nur Sympathie. Entscheidend ist, ob der Betreuer den ganzen Ablauf realistisch tragen kann.",
        paragraphs: [
          "Frage nach dem normalen Tagesrhythmus. Wo ruht der Hund? Wie oft geht es raus? Gibt es andere Tiere, Kinder, Treppen, Garten oder Bürozeiten? Diese Details entscheiden, ob dein Hund entspannt ankommen kann.",
        ],
        items: [
          "Passt das Umfeld: Wohnung, Haus, Garten, Büro oder Betreuung bei dir zu Hause?",
          "Gibt es Erfahrung mit Alter, Größe, Energielevel und Verhalten deines Hundes?",
          "Sind andere Hunde anwesend und wenn ja, wie wird der Kontakt gesteuert?",
          "Kann der Betreuer Grenzen einhalten, zum Beispiel kein Freilauf, keine Hundewiese oder kein Futter von anderen?",
        ],
      },
      {
        title: "Was in die Tagesbetreuungs-Übergabe gehört",
        intro:
          "Eine Tagesbetreuung braucht mehr Informationen als ein kurzer Spaziergang. Der Betreuer muss den ganzen Tag ruhig entscheiden können.",
        paragraphs: [
          "Schreibe Futter, Pausen, Medikamente, Ruheplatz und typische Signale auf. Gerade bei Tagesbetreuung merkt der Betreuer schneller, wenn etwas anders ist als sonst. Dann helfen klare Hinweise: Was ist normal, was soll gemeldet werden?",
        ],
        items: [
          "Futtermenge, Wasser, Leckerlis, Tabus und Fütterungszeiten notieren.",
          "Ruheplatz, Spielzeug, Decke und vertraute Gegenstände mitgeben.",
          "Lösezeiten, Spazierdauer, Leinenregeln und Hundebegegnungen erklären.",
          "Notfallkontakt, Tierarzt und erlaubte Entscheidungen schriftlich festhalten.",
        ],
      },
      {
        title: "Der erste Probetag",
        intro:
          "Ein Probetag sollte kurz und überschaubar starten. So sieht der Hund den Ort, den Menschen und den Ablauf, ohne direkt einen ganzen Tag stemmen zu müssen.",
        paragraphs: [
          "Plane nach dem Probetag keine zusätzliche Reizflut. Viele Hunde verarbeiten neue Orte und Menschen erst später. Ein ruhiger Abend zeigt oft, ob die Betreuung zu viel oder genau richtig war.",
        ],
        items: [
          "Beginne mit wenigen Stunden, bevor du volle Arbeitstage buchst.",
          "Bitte um ein kurzes Update zu Fressen, Ruhe, Spaziergang und Stimmung.",
          "Prüfe danach, ob dein Hund entspannt, müde oder deutlich gestresst wirkt.",
          "Passe Dauer, Abholzeit oder Aktivität an, wenn der erste Termin zu intensiv war.",
        ],
      },
      {
        title: "Regelmäßig buchen ohne Chaos",
        intro:
          "Wenn Hundetagesbetreuung regelmäßig wird, lohnt sich ein fester Ablauf. Je weniger du jedes Mal neu erklären musst, desto stabiler wird die Betreuung.",
        paragraphs: [
          "Speichere die wichtigsten Absprachen im Chat und aktualisiere sie, wenn sich Futter, Medikamente, Verhalten oder Zeiten ändern. Gute Tagesbetreuung lebt von Verlässlichkeit, aber auch von ehrlicher Rückmeldung.",
        ],
        items: [
          "Feste Wochentage, Bringzeiten und Abholzeiten vereinbaren.",
          "Änderungen früh ankündigen, besonders bei Medikamenten oder Verhalten.",
          "Nach einigen Terminen gemeinsam prüfen, ob die Routine noch passt.",
          "Bei guter Betreuung frühzeitig Urlaubszeiten, Feiertage und Engpässe abstimmen.",
        ],
      },
    ],
  },
  {
    slug: "katzenbetreuung-feiertage-planen",
    title: "Katzenbetreuung an Feiertagen planen: Hausbesuche ohne Stress",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "So organisierst du Katzensitting an Feiertagen, Wochenenden und Brückentagen mit klaren Zeiten, Schlüsselübergabe und ruhiger Routine.",
    tags: ["Katzenbetreuung Feiertage", "Katzensitter", "Hausbesuch", "Wochenende"],
    readingMinutes: 8,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-katzenbetreuung-feiertage-planen.jpg",
      alt: "Katze liegt entspannt neben Futternapf, Wassernapf, Katzenklo und Schlüsselablage für Feiertagsbetreuung",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Feiertage besondere Planung brauchen",
        intro:
          "An Feiertagen, langen Wochenenden und Brückentagen sind viele Katzensitter früh ausgebucht. Gleichzeitig sollen Hausbesuche für die Katze möglichst normal wirken.",
        paragraphs: [
          "Der wichtigste Punkt ist nicht, ob der Besuch exakt zur Minute passiert. Entscheidend ist, dass Futter, Wasser, Katzenklo und kurze Kontrolle zuverlässig eingeplant sind. Je früher du Zeitraum und Aufgabe beschreibst, desto besser können Betreuer ehrlich zusagen.",
          "Wenn deine Katze feste Fütterungszeiten braucht oder Medikamente bekommt, solltest du weniger flexibel planen. Bei unkomplizierten Katzen kann ein Zeitfenster reichen, solange die Routine klar bleibt.",
        ],
        items: [
          "Feiertage und Brückentage möglichst früh anfragen.",
          "Pro Besuch ein realistisches Zeitfenster statt nur eine Wunschminute nennen.",
          "Bei Medikamenten, Spezialfutter oder Freigang genauer planen.",
          "Eine Ersatzperson benennen, falls Anfahrt, Krankheit oder Schlüsselproblem dazwischenkommen.",
        ],
      },
      {
        title: "Hausbesuche kurz, ruhig und vollständig halten",
        intro:
          "Katzenbetreuung an Feiertagen soll keine große Veränderung sein. Eine ruhige Reihenfolge hilft dem Katzensitter und der Katze.",
        paragraphs: [
          "Viele Katzen bleiben bei fremden Menschen erst einmal auf Abstand. Das ist normal. Der Hausbesuch sollte deshalb nicht erzwingen, dass die Katze Kontakt aufnimmt. Besser ist ein verlässlicher Ablauf, der Futter, Wasser, Klo und Sicherheitscheck abdeckt.",
        ],
        items: [
          "Erst prüfen, ob die Katze sichtbar ist oder ob alles im Raum normal wirkt.",
          "Futter, Wasser und Katzenklo nach deiner bekannten Routine erledigen.",
          "Fenster, Balkon, Türen und sensible Räume am Ende kontrollieren.",
          "Updates kurz halten: gesehen, gefressen, Katzenklo, Auffälligkeiten.",
        ],
      },
      {
        title: "Schlüsselübergabe und Zugang klären",
        intro:
          "Gerade an Feiertagen ist ein Schlüsselproblem besonders ärgerlich. Deshalb gehört die Zugangsklärung früh in die Planung.",
        paragraphs: [
          "Besprich nicht nur, wer den Schlüssel bekommt, sondern auch wann er zurückgegeben wird und was passiert, wenn eine Tür klemmt oder der Schlüssel nicht funktioniert. Eine kurze Probe vor der Reise kann viel Stress verhindern.",
        ],
        items: [
          "Schlüsselübergabe mit Datum, Uhrzeit und Rückgabe klar festhalten.",
          "Hausnummer, Klingel, Etage und besondere Zugangshinweise erst nach passender Absprache teilen.",
          "Notieren, welche Räume betreten werden dürfen und welche privat bleiben.",
          "Ersatzkontakt oder Zweitschlüssel nur dann einplanen, wenn das wirklich abgesprochen ist.",
        ],
      },
      {
        title: "Futter, Katzenklo und Medikamente vorbereiten",
        intro:
          "Je voller Feiertage sind, desto wichtiger ist eine einfache Vorbereitung. Alles, was gesucht werden muss, kostet unnötig Zeit und erhöht das Fehlerrisiko.",
        paragraphs: [
          "Stelle Futter, Streu, Müllbeutel, Reinigungsmittel und Medikamente sichtbar zusammen. Bei Medikamenten gilt: Dosierung, Uhrzeit und Lagerung sollten schriftlich und eindeutig sein. Bitte keine medizinischen Änderungen ohne tierärztliche Rücksprache verlangen.",
        ],
        items: [
          "Futterportionen vorbereiten oder Mengen klar abmessen.",
          "Katzenstreu, Schaufel, Müllbeutel und Reinigungsmittel an einem Ort sammeln.",
          "Medikamente nur mit klarer Anleitung, Uhrzeit und Kontakt für Rückfragen übergeben.",
          "Bei mehreren Katzen getrennte Futterplätze und Besonderheiten pro Katze notieren.",
        ],
      },
      {
        title: "Nach Feiertagen kurz auswerten",
        intro:
          "Wenn die Betreuung gut lief, lohnt sich ein kurzer Abschluss. So wird der nächste Feiertag leichter planbar.",
        paragraphs: [
          "Frage, ob Zeiten, Schlüssel, Futter und Klo gut funktioniert haben. Falls die Katze sehr scheu war, kann beim nächsten Mal ein anderer Ablauf helfen. Solche kleinen Anpassungen machen wiederholte Betreuung viel entspannter.",
        ],
        items: [
          "Prüfen, ob die Besuchszeiten zur Katze und zum Katzensitter gepasst haben.",
          "Übergabe ergänzen, wenn etwas gesucht oder falsch verstanden wurde.",
          "Gute Kontakte früh für den nächsten Feiertag anfragen.",
          "Schlüsselrückgabe und offene Kosten direkt sauber abschließen.",
        ],
      },
    ],
  },
  {
    slug: "tierbetreuung-fuer-berufstaetige",
    title: "Tierbetreuung für Berufstätige: Alltag, Zeiten und Routinen organisieren",
    categorySlug: "organisation",
    excerpt: "Wie berufstätige Halter Tierbetreuung rund um Arbeitszeiten, Homeoffice, Pendeln und regelmäßige Routinen planen.",
    tags: ["Tierbetreuung Berufstätige", "Haustierbetreuung", "Arbeitszeit", "Routine"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-tierbetreuung-berufstaetige.jpg",
      alt: "Hund wartet ruhig im Flur neben Futternapf und Arbeitsplatz, im Hintergrund sitzt eine Katze",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Betreuung um den Arbeitstag herum denken",
        intro:
          "Wer arbeitet, braucht oft keine große Urlaubsbetreuung, sondern kleine verlässliche Bausteine im Alltag: Gassi, Hausbesuch, Fütterung, Tagesbetreuung oder kurze Kontrolle.",
        paragraphs: [
          "Der erste Schritt ist ein ehrlicher Blick auf deinen normalen Arbeitstag. Wann bist du wirklich weg? Wie lange ist die Pendelzeit? Was passiert, wenn ein Meeting länger dauert? Aus diesen Antworten entsteht ein Betreuungsmodell, das zu dir und deinem Tier passt.",
          "Für Hunde kann eine Mittagsrunde reichen oder eine Tagesbetreuung sinnvoll sein. Für Katzen, Kleintiere oder Aquarien geht es eher um regelmäßige Kontrolle, Futter und ruhige Abläufe.",
        ],
        items: [
          "Notiere feste Arbeitszeiten, flexible Tage, Homeoffice und Pendelwege.",
          "Unterscheide zwischen täglicher Routine und gelegentlicher Hilfe.",
          "Plane Puffer für Verspätungen, Wetter, Krankheit und spontane Termine.",
          "Suche lieber früh nach Betreuung, bevor der Arbeitsalltag schon eng ist.",
        ],
      },
      {
        title: "Welche Betreuungsform passt?",
        intro:
          "Nicht jedes Tier braucht dieselbe Lösung. Die passende Betreuungsform hängt von Tierart, Alter, Alleinbleiben, Energielevel und deinem Arbeitsrhythmus ab.",
        paragraphs: [
          "Viele berufstätige Halter kombinieren mehrere Lösungen: an Bürotagen eine feste Gassi-Runde, bei langen Tagen Tagesbetreuung und für Reisen eine andere Person. Wichtig ist, dass dein Tier nicht jedes Mal komplett neue Regeln erlebt.",
        ],
        items: [
          "Gassi-Service passt, wenn der Hund zu Hause bleiben kann, aber Bewegung und Lösemöglichkeit braucht.",
          "Tagesbetreuung passt, wenn Alleinbleiben schwerfällt oder der Tag sehr lang wird.",
          "Hausbesuche passen für Katzen, Kleintiere und Tiere mit klaren Fütterungsroutinen.",
          "Regelmäßige Betreuung sollte planbarer sein als reine Notfallhilfe.",
        ],
      },
      {
        title: "Inserat für berufstätige Halter schreiben",
        intro:
          "Ein gutes Inserat spart Rückfragen. Betreuer müssen schnell verstehen, wann Hilfe gebraucht wird und wie zuverlässig der Rhythmus sein soll.",
        paragraphs: [
          "Schreibe nicht nur: Ich brauche jemanden wegen Arbeit. Besser ist eine konkrete Beschreibung: Welche Tage, welche Uhrzeit, welcher Ort, welche Aufgabe und wie oft? Dann melden sich eher Menschen, deren Alltag wirklich dazu passt.",
        ],
        items: [
          "Nenne Wochentage, Uhrzeiten, PLZ-Region und gewünschte Dauer.",
          "Beschreibe, ob Termine fest oder flexibel sind.",
          "Erkläre, was bei Homeoffice, Krankheit oder spontanen Büroterminen passieren soll.",
          "Formuliere klar, ob du langfristige Betreuung oder gelegentliche Hilfe suchst.",
        ],
      },
      {
        title: "Routine und Kommunikation einfach halten",
        intro:
          "Alltagsbetreuung funktioniert am besten, wenn sie nicht jedes Mal neu verhandelt wird. Eine einfache Routine entlastet alle Beteiligten.",
        paragraphs: [
          "Lege fest, wann Updates nötig sind. Bei regelmäßiger Betreuung reicht oft eine kurze Nachricht bei Auffälligkeiten. Bei neuen Betreuern kann am Anfang ein kurzes Foto oder Status helfen, Vertrauen aufzubauen.",
        ],
        items: [
          "Feste Checkliste für Futter, Wasser, Bewegung, Reinigung und Schlüssel nutzen.",
          "Updates abhängig von der Betreuung abstimmen: täglich, nur bei Auffälligkeiten oder nach jedem Termin.",
          "Änderungen an Zeiten, Futter oder Verhalten rechtzeitig mitteilen.",
          "Nach den ersten Terminen prüfen, ob der Aufwand für beide Seiten realistisch bleibt.",
        ],
      },
      {
        title: "Plan B für volle Wochen",
        intro:
          "Beruflicher Alltag bleibt selten komplett planbar. Deshalb ist ein Plan B kein Misstrauen, sondern gute Organisation.",
        paragraphs: [
          "Wenn dein Hauptbetreuer ausfällt oder du kurzfristig länger arbeiten musst, hilft ein zweiter Kontakt. Wichtig ist, dass auch diese Person die wichtigsten Infos kennt und nicht bei null startet.",
        ],
        items: [
          "Einen Ersatzkontakt für Krankheit, Urlaub oder spontane Engpässe aufbauen.",
          "Übergabe so schreiben, dass auch eine zweite Person sie verstehen kann.",
          "Schlüssel, Adresse und private Daten nur mit klarer Absprache teilen.",
          "Regelmäßig prüfen, ob Arbeitszeiten und Betreuungsmodell noch zusammenpassen.",
        ],
      },
    ],
  },
  {
    slug: "hundesitter-in-der-naehe-finden",
    title: "Hundesitter in der Nähe finden: worauf du achten solltest",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "So findest du einen passenden Hundesitter in deiner Nähe und vergleichst Erfahrung, Entfernung, Routine und Vertrauen.",
    tags: ["Hundesitter in der Nähe", "Hundebetreuung", "Gassi", "PLZ Suche"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-hundesitter-in-der-naehe-finden.jpg",
      alt: "Hund sitzt ruhig im Eingangsbereich neben Leine, Schuhen und Notizbuch für die Hundesitter-Übergabe",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Nähe allein nicht reicht",
        intro:
          "Ein Hundesitter in der Nähe klingt erst einmal perfekt: kurze Wege, schnelle Absprachen und weniger Stress, wenn ein Termin spontan wird. Trotzdem sollte die Entfernung nicht das einzige Kriterium sein.",
        paragraphs: [
          "Wichtiger ist, ob die Person wirklich zum Hund passt. Ein sehr aktiver Junghund braucht andere Betreuung als ein älterer Hund, der lieber langsam läuft und feste Ruhezeiten hat. Auch Leinenverhalten, Verträglichkeit und Unsicherheiten sollten vor dem ersten Termin offen besprochen werden.",
          "Gute lokale Hundebetreuung fühlt sich nicht wie eine schnelle Notlösung an. Sie ist eine verlässliche Routine, bei der Halter, Hund und Betreuer wissen, was als Nächstes passiert.",
        ],
        items: [
          "Suche nicht nur nach der kürzesten Entfernung, sondern nach passender Erfahrung.",
          "Achte darauf, ob der Hundesitter konkrete Fragen zu Verhalten, Leine, Futter und Notfallkontakt stellt.",
          "Nutze PLZ und Radius, um passende Menschen zu finden, ohne deine genaue Adresse öffentlich zu machen.",
          "Plane ein Kennenlernen ein, bevor regelmäßige Betreuung oder Urlaubsbetreuung startet.",
        ],
      },
      {
        title: "So vergleichst du lokale Hundesitter",
        intro:
          "Wenn mehrere Antworten auf dein Inserat kommen, helfen klare Kriterien. Sympathie ist wichtig, aber für zuverlässige Hundebetreuung zählen auch Ablauf, Kommunikation und Grenzen.",
        paragraphs: [
          "Vergleiche nicht nur Preise oder Verfügbarkeit. Lies, ob die Antwort auf dein Tier eingeht oder wie eine Standardnachricht wirkt. Wer Details aus deinem Inserat aufgreift, zeigt meist schon im ersten Kontakt mehr Sorgfalt.",
        ],
        items: [
          "Passt die Erfahrung zur Aufgabe: Gassi-Service, Tagesbetreuung, Hausbesuch oder längere Betreuung?",
          "Kann die Person deine Wunschzeiten realistisch einhalten, auch mit Anfahrt und Übergabe?",
          "Spricht sie ruhig über schwierige Situationen wie Hundebegegnungen, Hitze, Dunkelheit oder Stress?",
          "Sind Updates abgesprochen: Foto nach der Runde, kurze Nachricht oder nur Meldung bei Auffälligkeiten?",
        ],
      },
      {
        title: "Was in deinem Inserat stehen sollte",
        intro:
          "Je besser dein Inserat formuliert ist, desto eher melden sich passende Hundesitter aus deiner Umgebung. Das spart Zeit und verhindert Missverständnisse.",
        paragraphs: [
          "Ein guter Titel nennt Tierart, Aufgabe und Ort grob. In der Beschreibung geht es dann um Alltag: Wie läuft eine normale Runde? Was mag dein Hund? Was soll vermieden werden? Genau diese Informationen helfen Betreuern, ehrlich einzuschätzen, ob sie passen.",
        ],
        items: [
          "Nenne PLZ-Region, Zeitraum, Häufigkeit und gewünschten Betreuungsort.",
          "Beschreibe Alter, Größe, Energielevel, Leinenverhalten und Verträglichkeit.",
          "Schreibe klar, ob Füttern, Medikamente, Treppen, Auto oder Abholen eine Rolle spielen.",
          "Formuliere, was dir wichtig ist: Ruhe, Erfahrung, Flexibilität, feste Zeiten oder kurze Wege.",
        ],
      },
      {
        title: "Erstes Kennenlernen und Probetermin",
        intro:
          "Ein Kennenlernen muss nicht kompliziert sein. Oft reichen 20 bis 30 Minuten, um zu sehen, ob Kommunikation, Umgang und Erwartungen zusammenpassen.",
        paragraphs: [
          "Lass den Hundesitter den Hund in einer ruhigen Situation erleben. Wenn Gassi geplant ist, kann eine kurze gemeinsame Runde sinnvoll sein. So sieht die Person direkt, wie dein Hund auf Türen, Straßen, andere Hunde oder Geräusche reagiert.",
        ],
        items: [
          "Zeige Geschirr, Leine, Futterplatz, Ruheplatz und wichtige Routinen.",
          "Besprich, was bei Unsicherheit, Ziehen, Bellen oder Begegnungen passieren soll.",
          "Starte mit einem kurzen Probetermin, bevor du längere Betreuung buchst.",
          "Halte wichtige Absprachen im Chat fest, damit später alle dieselbe Grundlage haben.",
        ],
      },
      {
        title: "Woran du eine gute Entscheidung merkst",
        intro:
          "Der richtige Hundesitter gibt dir nicht nur organisatorische Entlastung. Du merkst auch, dass dein Hund nach der Betreuung nicht überdreht, verwirrt oder unnötig gestresst wirkt.",
        paragraphs: [
          "Nach den ersten Terminen lohnt sich ein kurzer Rückblick. Passten Zeiten, Strecke und Kommunikation? Wurde etwas vergessen? Gab es Situationen, die beim nächsten Mal anders laufen sollten? Gute Betreuung wird mit jeder klaren Rückmeldung besser.",
        ],
        items: [
          "Dein Hund wirkt nach der Betreuung ähnlich stabil wie nach eurer normalen Routine.",
          "Der Hundesitter meldet Auffälligkeiten ehrlich und zeitnah.",
          "Du musst nicht jede Kleinigkeit neu erklären, weil die Übergabe verstanden wurde.",
          "Beide Seiten können Grenzen ansprechen, ohne dass es unangenehm wird.",
        ],
      },
    ],
  },
  {
    slug: "katzensitter-in-der-naehe-finden",
    title: "Katzensitter in der Nähe finden: Hausbesuche gut planen",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "Worauf es bei Katzensittern, Hausbesuchen, Fütterung, Katzenklo, Schlüsselübergabe und Updates wirklich ankommt.",
    tags: ["Katzensitter in der Nähe", "Katzenbetreuung", "Hausbesuch", "Urlaub"],
    readingMinutes: 8,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-katzensitter-in-der-naehe-finden.jpg",
      alt: "Katze sitzt entspannt am Fenster neben Kratzbaum, Futternapf, Wassernapf und Notizbuch",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Katzensitting oft zu Hause am besten funktioniert",
        intro:
          "Viele Katzen bleiben lieber in ihrer gewohnten Umgebung. Ein Katzensitter in der Nähe kann Futter, Wasser, Katzenklo und kurze Beschäftigung übernehmen, ohne dass die Katze ihren sicheren Ort verlassen muss.",
        paragraphs: [
          "Das klingt einfach, aber gerade bei Katzen zählen Details. Manche Tiere verstecken sich bei fremden Menschen, andere brauchen täglich Spiel, Medikamente oder eine sehr genaue Fütterungsroutine. Je genauer du das beschreibst, desto entspannter läuft der Hausbesuch.",
          "Ein guter Katzensitter drängt sich nicht auf. Er beobachtet, folgt deiner Routine und respektiert, wenn eine Katze Zeit braucht.",
        ],
        items: [
          "Plane Hausbesuche möglichst zur üblichen Fütterungszeit.",
          "Beschreibe, ob die Katze Kontakt möchte oder eher Abstand braucht.",
          "Nenne Verstecke, Lieblingsplätze und typische Signale für Stress oder Wohlbefinden.",
          "Lege fest, ob Fotos gewünscht sind und wann eine kurze Rückmeldung reicht.",
        ],
      },
      {
        title: "Diese Infos braucht ein Katzensitter",
        intro:
          "Katzensitter können nur zuverlässig handeln, wenn sie die kleinen Routinen kennen. Eine kurze, klare Übergabe verhindert Unsicherheit beim ersten Besuch.",
        paragraphs: [
          "Schreibe nicht nur auf, welches Futter die Katze bekommt. Wichtig ist auch, wie viel, wo, in welchem Napf und ob Reste entfernt werden sollen. Gleiches gilt für Wasserstellen, Leckerlis und Räume, die offen oder geschlossen bleiben müssen.",
        ],
        items: [
          "Futtermenge, Fütterungszeiten, Leckerlis und Tabus eindeutig notieren.",
          "Standorte von Katzenklo, Streu, Müllbeutel, Besen und Reinigungsmitteln zeigen.",
          "Fenster, Balkon, Türen und Ausbruchrisiken vorab besprechen.",
          "Tierarzt, Notfallkontakt und Medikamentenhinweise schriftlich bereitlegen.",
        ],
      },
      {
        title: "Katzenklo, Futter und Wohnung ruhig halten",
        intro:
          "Ein Hausbesuch soll für die Katze so normal wie möglich wirken. Deshalb ist es sinnvoll, Aufgaben in derselben Reihenfolge zu erledigen.",
        paragraphs: [
          "Viele Katzen beobachten zuerst aus der Distanz. Wenn der Katzensitter ruhig Futter und Katzenklo erledigt, entsteht eher Vertrauen, als wenn direkt Kontakt gesucht wird. Besonders scheue Katzen profitieren von wiederkehrenden Abläufen.",
        ],
        items: [
          "Erst prüfen, ob die Katze sichtbar ist oder ob alles normal wirkt.",
          "Dann Futter, Wasser und Katzenklo nach deiner Routine erledigen.",
          "Anschließend kurz lüften oder spielen, wenn das abgesprochen und sicher ist.",
          "Zum Schluss Türen, Fenster, Herd, Balkon und Schlüsselablage kontrollieren.",
        ],
      },
      {
        title: "Vertrauen bei Schlüssel und Updates",
        intro:
          "Katzensitting bedeutet meistens auch Zugang zur Wohnung. Deshalb sollten Schlüsselübergabe, Datenschutz und Kommunikation nicht beiläufig passieren.",
        paragraphs: [
          "Klärt, wann der Schlüssel übergeben und zurückgegeben wird, welche Räume betreten werden dürfen und welche privaten Bereiche tabu sind. Diese Absprachen schaffen Sicherheit für beide Seiten.",
        ],
        items: [
          "Adresse und genaue Etage erst teilen, wenn ein passender Kontakt gefunden ist.",
          "Schlüsselübergabe mit Datum, Kontakt und Rückgabe klar vereinbaren.",
          "Keine privaten Dokumente, Medikamente oder Wertgegenstände offen liegen lassen, wenn sie nichts mit der Betreuung zu tun haben.",
          "Updates kurz halten: Futter, Katzenklo, Verhalten und besondere Auffälligkeiten.",
        ],
      },
      {
        title: "Mehrere Katzen oder besondere Bedürfnisse",
        intro:
          "Bei mehreren Katzen wird die Betreuung nicht automatisch kompliziert, aber sie braucht mehr Übersicht. Jede Katze kann andere Gewohnheiten, Futterplätze oder Grenzen haben.",
        paragraphs: [
          "Gerade wenn Medikamente, Spezialfutter oder getrennte Fütterung nötig sind, sollte die Übergabe nicht nur mündlich erfolgen. Bitte bei gesundheitlichen Unsicherheiten immer tierärztliche Vorgaben beachten und nichts eigenständig verändern.",
        ],
        items: [
          "Für jede Katze Name, Aussehen, Futter, Verhalten und Besonderheiten notieren.",
          "Getrennte Fütterung, Medikamentenzeiten und Kontrollzeichen klar beschreiben.",
          "Erklären, welche Katze sich versteckt und welche aktiv Kontakt sucht.",
          "Nach dem ersten Besuch prüfen, ob die Übergabe für den Katzensitter vollständig genug war.",
        ],
      },
    ],
  },
  {
    slug: "tierbetreuung-im-urlaub-planen",
    title: "Tierbetreuung im Urlaub planen: Übergabe, Notfallplan und Kosten",
    categorySlug: "organisation",
    excerpt: "So organisierst du Tierbetreuung vor dem Urlaub mit klarer Übergabe, passenden Betreuern, Notfallkontakten und realistischen Kosten.",
    tags: ["Tierbetreuung Urlaub", "Urlaubsbetreuung", "Übergabe", "Kosten"],
    readingMinutes: 9,
    publishedAt: "2026-07-08",
    image: {
      src: "/images/generated/guide-tierbetreuung-urlaub-planen.jpg",
      alt: "Vorbereitete Tierbetreuungsübergabe auf einem Tisch mit Leine, Näpfen, Schlüssel, Tasche und ruhendem Hund",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Früh planen, aber nicht kompliziert machen",
        intro:
          "Tierbetreuung im Urlaub sollte nicht erst am Abend vor der Abreise entstehen. Je früher du Zeitraum, Aufgaben und Besonderheiten beschreibst, desto eher findest du jemanden, der wirklich passt.",
        paragraphs: [
          "Für viele Tiere ist Verlässlichkeit wichtiger als ein perfekter Plan. Wenn Futter, Bewegung, Ruhezeiten und Notfallkontakte klar sind, kann ein Betreuer auch dann ruhig handeln, wenn etwas anders läuft als erwartet.",
          "Am besten formulierst du die Betreuung so, dass eine fremde, aber sorgfältige Person den Ablauf verstehen kann. Was für dich selbstverständlich ist, ist für andere oft genau die Information, die fehlt.",
        ],
        items: [
          "Zeitraum, Uhrzeiten, Häufigkeit und Betreuungsort früh festlegen.",
          "Tierart, Alter, Verhalten, Futter und besondere Bedürfnisse konkret beschreiben.",
          "Vor längerer Urlaubsbetreuung einen kurzen Probetermin vereinbaren.",
          "Lieber wenige klare Regeln notieren als viele lose Hinweise verteilen.",
        ],
      },
      {
        title: "Was in die Urlaubsübergabe gehört",
        intro:
          "Eine gute Übergabe ist der wichtigste Teil der Urlaubsbetreuung. Sie sollte nicht nur als Checkliste funktionieren, sondern auch erklären, warum bestimmte Dinge wichtig sind.",
        paragraphs: [
          "Wenn dein Hund bei Hitze kürzer laufen soll, deine Katze Medikamente nur mit Futter nimmt oder dein Aquarium täglich dieselbe Futtermenge braucht, gehört dieser Kontext in die Übergabe. So kann der Betreuer Entscheidungen besser einordnen.",
        ],
        items: [
          "Tagesablauf mit Futter, Wasser, Bewegung, Reinigung, Ruhe und Updates.",
          "Standorte von Zubehör, Futter, Streu, Medikamenten, Handtüchern und Ersatzmaterial.",
          "Tabus: Räume, Futter, Begegnungen, Freilauf, Balkon, Treppen oder technische Geräte.",
          "Kontaktwege: Wer ist erreichbar, wann und für welche Entscheidung?",
        ],
      },
      {
        title: "Notfallplan ohne Panik",
        intro:
          "Ein Notfallplan soll niemanden nervös machen. Er sorgt dafür, dass der Betreuer im Zweifel nicht improvisieren muss.",
        paragraphs: [
          "Notiere Tierarzt, Tierklinik, Ersatzkontakt und klare Grenzen: Wann soll sofort angerufen werden? Welche Ausgaben sind erlaubt? Wer darf entscheiden, wenn du nicht erreichbar bist? Medizinische Entscheidungen sollten immer nach tierärztlicher Einschätzung getroffen werden.",
        ],
        items: [
          "Tierarzt, Klinik, Versicherungsdaten und Ersatzkontakt auffindbar notieren.",
          "Normales Verhalten und echte Warnzeichen getrennt beschreiben.",
          "Medikamente nur mit Dosierung, Uhrzeit, Lagerung und tierärztlicher Vorgabe übergeben.",
          "Absprechen, ob Taxifahrt, Tierarztbesuch oder zusätzliche Termine im Notfall erlaubt sind.",
        ],
      },
      {
        title: "Kosten realistisch einschätzen",
        intro:
          "Die Kosten für Tierbetreuung im Urlaub hängen nicht nur von der Tierart ab. Entscheidend sind Zeit, Häufigkeit, Verantwortung, Entfernung und Erfahrung.",
        paragraphs: [
          "Ein kurzer Katzen-Hausbesuch ist anders zu planen als mehrmals tägliche Hundebetreuung, ein Terrarium mit Klima-Kontrolle oder Stallhilfe. Schreibe deshalb nicht nur, was du zahlen möchtest, sondern was genau zu tun ist.",
        ],
        items: [
          "Mehr Aufwand entsteht durch mehrere Besuche pro Tag, Medikamente, längere Wege oder mehrere Tiere.",
          "Spezialwissen, flexible Zeiten und Feiertage können den Preis beeinflussen.",
          "Klare Aufgaben helfen, faire Angebote zu bekommen und Missverständnisse zu vermeiden.",
          "Halte Zusatzaufgaben wie Pflanzen gießen, Post holen oder Reinigung getrennt von der Tierbetreuung fest.",
        ],
      },
      {
        title: "Nach dem Urlaub kurz auswerten",
        intro:
          "Gute Urlaubsbetreuung endet nicht mit der Schlüsselrückgabe. Ein kurzes Gespräch hilft, die nächste Betreuung noch einfacher zu machen.",
        paragraphs: [
          "Frage, was gut funktioniert hat und wo Informationen fehlten. Vielleicht war ein Futterplatz unklar, ein Schlüssel hakte oder ein Tier hat anders reagiert als erwartet. Solche Details sind wertvoll, weil sie die nächste Übergabe besser machen.",
        ],
        items: [
          "Updates, Fotos und besondere Beobachtungen nach dem Urlaub kurz durchgehen.",
          "Übergabe direkt ergänzen, solange alles frisch im Kopf ist.",
          "Bei guter Betreuung den Kontakt speichern und früh für den nächsten Urlaub anfragen.",
          "Falls etwas nicht passte, sachlich festhalten, was beim nächsten Mal anders sein muss.",
        ],
      },
    ],
  },
  {
    slug: "hundebetreuung-finden-checkliste",
    title: "Hundebetreuung finden: die wichtigste Checkliste",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "Welche Fragen du vor der ersten Hundebetreuung klären solltest und welche Angaben im Inserat helfen.",
    tags: ["Hundebetreuung", "Checkliste", "Gassi"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-hundebetreuung-checkliste.jpg",
      alt: "Freundlicher Hund im Eingangsbereich mit Leine, Napf und Notizbuch für die Betreuungsübergabe",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum eine Checkliste die Hundebetreuung entspannter macht",
        intro:
          "Gute Hundebetreuung beginnt nicht erst beim ersten Spaziergang. Sie beginnt mit klaren Angaben, ehrlichen Erwartungen und einer Übergabe, die auch dann funktioniert, wenn der Alltag gerade hektisch ist.",
        items: [
          "Notiere Zeitraum, Uhrzeiten und ob es um Gassi-Service, Hausbesuch, Tagesbetreuung oder Urlaubsbetreuung geht.",
          "Beschreibe deinen Hund konkret: Alter, Größe, Energielevel, Verträglichkeit, Alleinbleiben und bekannte Unsicherheiten.",
          "Lege fest, wo die Betreuung stattfinden soll und welche Adresse erst nach einer passenden Anfrage geteilt wird.",
          "Formuliere, was dir wichtiger ist: feste Routine, viel Bewegung, ruhige Nähe oder Erfahrung mit besonderen Situationen.",
        ],
      },
      {
        title: "Diese Angaben gehören in ein gutes Inserat",
        intro:
          "Je genauer dein Inserat ist, desto schneller melden sich Menschen, die wirklich passen. Für lokale Hundebetreuung sind vor allem PLZ-Region, Aufgabe und Routine wichtig.",
        items: [
          "Schreibe einen klaren Titel wie: Hundebetreuung für ruhige Abendrunde in Köln gesucht.",
          "Nenne Fütterung, Medikamente, Leinenverhalten, Begegnungen mit anderen Hunden und besondere Auslöser.",
          "Erkläre, welche Erfahrung du dir wünschst und ob ein Kennenlernen vorab notwendig ist.",
          "Nutze lokale Begriffe wie PLZ, Stadtteil oder Radius, ohne deine genaue Adresse öffentlich zu machen.",
        ],
      },
      {
        title: "Fragen vor dem ersten Kennenlernen",
        intro:
          "Ein kurzes Kennenlernen schützt beide Seiten. Halter sehen, ob der Betreuer ruhig und zuverlässig wirkt, und Betreuer merken, ob Aufgabe und Hund zu ihrer Erfahrung passen.",
        items: [
          "Wie reagiert der Hund bei fremden Menschen, Treppenhaus, Fahrrad, Kindern oder anderen Hunden?",
          "Was soll bei Regen, Hitze, Dunkelheit oder Unsicherheit unterwegs passieren?",
          "Welche Updates wünschst du dir: kurze Nachricht, Foto nach der Runde oder nur Rückmeldung bei Auffälligkeiten?",
          "Passt die Betreuung zeitlich wirklich, auch wenn der Termin einmal zehn Minuten länger dauert?",
        ],
      },
      {
        title: "Übergabe: lieber kurz und vollständig",
        intro:
          "Die beste Übergabe ist nicht lang, sondern eindeutig. Alles, was der Betreuer im Termin braucht, sollte an einem Ort stehen.",
        items: [
          "Leine, Geschirr, Futter, Napf, Handtuch, Kotbeutel und Medikamente bereitlegen.",
          "Tierarzt, Notfallkontakt und erlaubte Entscheidungen schriftlich notieren.",
          "Nach dem ersten Termin kurz prüfen, ob Zeiten, Strecke und Kommunikation so bleiben sollen.",
          "Wenn mehrere Personen betreuen, sollte dieselbe Übergabe für alle gelten, damit der Hund keine wechselnden Regeln erlebt.",
        ],
      },
      {
        title: "Nach der Anfrage: so vergleichst du passende Betreuer",
        intro:
          "Wenn mehrere Antworten kommen, entscheidet nicht nur Sympathie. Für zuverlässige Hundebetreuung zählen Verfügbarkeit, Erfahrung, klare Kommunikation und ein realistischer Ablauf.",
        items: [
          "Prüfe, ob die Person deine Beschreibung wirklich gelesen hat und auf konkrete Punkte eingeht.",
          "Achte darauf, ob Fragen zu Verhalten, Gesundheit, Leine und Notfallkontakt gestellt werden.",
          "Vereinbare lieber einen kleinen Probetermin, bevor du längere Betreuung oder Urlaubsbetreuung planst.",
          "Speichere wichtige Absprachen im Chat, damit Zeiten, Aufgaben und Grenzen später nachvollziehbar bleiben.",
        ],
      },
    ],
  },
  {
    slug: "welpenbetreuung-eingewoehnung",
    title: "Welpenbetreuung: Eingewöhnung ohne Stress",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "So bereitest du junge Hunde auf kurze Betreuung, Gassi-Runden und neue Bezugspersonen vor.",
    tags: ["Welpe", "Eingewöhnung", "Hund"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-welpenbetreuung-eingewoehnung.jpg",
      alt: "Junger Welpe in einem ruhigen Wohnzimmer mit Hundebett, Decke, Spielzeug und Wassernapf",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Welpen brauchen kurze, planbare Betreuung",
        intro:
          "Welpenbetreuung ist keine kleine Version normaler Hundebetreuung. Junge Hunde lernen noch, dass neue Menschen, Orte und Abläufe sicher sein können. Deshalb zählen Ruhe, Wiederholung und kurze Einheiten.",
        items: [
          "Starte mit kurzen Terminen, bevor eine längere Betreuung nötig wird.",
          "Bleibe bei bekannten Routinen: Schlafplatz, Lösezeiten, Futter, Spiel und Ruhephasen.",
          "Vermeide direkt zu viele Reize wie lange Spaziergänge, fremde Hunde oder laute Umgebungen.",
          "Plane nach der Betreuung genug Schlaf ein, weil Welpen neue Eindrücke erst in Ruhe verarbeiten.",
        ],
      },
      {
        title: "Die erste Betreuung vorbereiten",
        intro:
          "Ein Welpe sollte nicht einfach übergeben werden. Besser ist ein kleiner Ablauf, den Halter und Betreuer gemeinsam wiederholen können.",
        items: [
          "Lass den Betreuer den Welpen erst in vertrauter Umgebung kennenlernen.",
          "Gib Decke, Spielzeug oder ein vertrautes Kauobjekt mit, damit der neue Kontakt leichter fällt.",
          "Erkläre klar, welche Signale Müdigkeit, Stress, Hunger oder Überforderung bedeuten.",
          "Zeige genau, wie du den Welpen anleinst, hochhebst, belohnst und wieder zur Ruhe bringst.",
        ],
      },
      {
        title: "Was im Inserat zur Welpenbetreuung stehen sollte",
        intro:
          "Wer Welpenbetreuung sucht, sollte nicht nur schreiben, dass der Hund süß und jung ist. Entscheidend sind Alter, Trainingsstand und Grenzen.",
        items: [
          "Nenne Alter, Impfstatus, Stubenreinheit, Alleinbleiben und bekannte Trainingssignale.",
          "Beschreibe, wie oft der Welpe raus muss und ob Treppen, Auto oder ÖPNV schon bekannt sind.",
          "Schreibe ehrlich, ob der Welpe noch beißt, hochspringt, fiept oder beim Abschied unsicher wird.",
          "Erkläre, ob der Welpe Kontakt zu anderen Hunden haben darf oder bewusst noch Abstand braucht.",
        ],
      },
      {
        title: "Woran du gute Welpenbetreuung erkennst",
        intro:
          "Gute Betreuer wollen bei Welpen nicht möglichst viel erleben, sondern möglichst ruhig führen. Genau das macht die Eingewöhnung leichter.",
        items: [
          "Der Betreuer fragt nach Routinen, Pausen und Grenzen statt nur nach Gassi-Zeiten.",
          "Es gibt kurze Updates, aber keine dauernde Unruhe durch Fotos, Kommandos oder neue Übungen.",
          "Nach der Betreuung wirkt der Welpe müde, aber nicht völlig überdreht oder verunsichert.",
          "Die Person akzeptiert, dass Welpenbetreuung mehr Beobachtung und weniger Aktion bedeutet.",
        ],
      },
      {
        title: "Wenn die Welpenbetreuung regelmäßig werden soll",
        intro:
          "Regelmäßige Welpenbetreuung kann eine große Entlastung sein, wenn sie nicht ständig neu erfunden wird. Wichtig ist, dass Halter und Betreuer dieselben Regeln nutzen.",
        items: [
          "Halte Fütterung, Lösezeiten, Schlafphasen und Trainingswörter schriftlich fest.",
          "Verändere immer nur kleine Dinge auf einmal, damit der Welpe neue Abläufe sicher einordnen kann.",
          "Sprich ab, welche Übungen der Betreuer fortführen darf und welche bewusst bei dir bleiben.",
          "Bewerte nach einigen Terminen gemeinsam, ob Dauer, Ort und Häufigkeit wirklich zum Welpen passen.",
        ],
      },
    ],
  },
  {
    slug: "seniorhund-betreuen",
    title: "Seniorhund betreuen: Ruhe, Routinen und Medikamente",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "Worauf Betreuer bei älteren Hunden achten sollten und welche Infos Halter vorbereiten.",
    tags: ["Seniorhund", "Medikamente", "Routine"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-seniorhund-betreuen.jpg",
      alt: "Älterer Hund ruht in einem weichen Hundebett neben Wasserglas, Decke und Medikamentenbox",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Seniorhunde brauchen Verlässlichkeit statt Programm",
        intro:
          "Bei älteren Hunden ist weniger oft besser. Gute Betreuung achtet auf Tempo, Schmerzen, Gewohnheiten und die kleinen Signale, die Halter aus dem Alltag kennen.",
        items: [
          "Plane kürzere Runden, mehr Pausen und einen ruhigen Liegeplatz ein.",
          "Beschreibe klar, was normal ist: langsames Aufstehen, schlechteres Hören, kurze Unsicherheit oder weniger Appetit.",
          "Erkläre, was nicht normal ist und sofort gemeldet werden soll.",
          "Halte fest, ob dein Hund Treppen, glatte Böden, Auto oder längeres Stehen vermeiden sollte.",
        ],
      },
      {
        title: "Medikamente sicher übergeben",
        intro:
          "Medikamente gehören nicht nebenbei in eine Chatnachricht. Dosierung, Uhrzeit und Lagerung sollten eindeutig schriftlich festgehalten werden.",
        items: [
          "Notiere Medikamentenname, Menge, Uhrzeit, Gabe mit oder ohne Futter und mögliche Nebenwirkungen.",
          "Lege Tabletten vorsortiert bereit und markiere, was bereits gegeben wurde.",
          "Hinterlege Tierarzt, Notfallkontakt und eine klare Entscheidung, wann sofort angerufen werden soll.",
          "Bitte den Betreuer nach jeder Gabe um eine kurze Bestätigung, damit keine Dosis doppelt oder gar nicht gegeben wird.",
        ],
      },
      {
        title: "Bewegung und Alltag realistisch planen",
        intro:
          "Seniorhund-Betreuung bedeutet nicht Stillstand. Viele ältere Hunde genießen kurze Routinen, wenn Tempo und Strecke passen.",
        items: [
          "Beschreibe Lieblingsstrecken, rutschige Böden, Treppen, Tragebedarf und Pausenpunkte.",
          "Lege fest, ob Spiel, Kontakt mit anderen Hunden oder nur ruhige Nähe gewünscht ist.",
          "Achte bei Hitze, Kälte und Dunkelheit auf besonders kurze, sichere Wege.",
          "Wenn dein Hund Schmerzen hat, erkläre, welche Bewegungen vermieden werden sollen.",
        ],
      },
      {
        title: "Warnzeichen, die Betreuer kennen sollten",
        intro:
          "Nicht jede Veränderung ist ein Notfall, aber bei Seniorhunden sollten Betreuer lieber einmal zu früh Bescheid geben.",
        items: [
          "Auffällig sind starkes Hecheln, Husten, Taumeln, Erbrechen, Durchfall oder plötzliche Unruhe.",
          "Auch ungewöhnliche Müdigkeit, Futterverweigerung oder Schmerzen beim Aufstehen gehören in die Rückmeldung.",
          "Nach jedem Termin hilft eine kurze Notiz zu Futter, Wasser, Gassi, Medikamenten und Stimmung.",
          "Im Zweifel gilt: erst melden, dann weiterplanen. Gerade bei älteren Hunden ist frühe Kommunikation wichtig.",
        ],
      },
      {
        title: "So bleibt Betreuung für alte Hunde würdevoll",
        intro:
          "Seniorhund-Betreuung ist besonders gut, wenn sie den Hund nicht überfordert. Ziel ist nicht, möglichst viel zu schaffen, sondern Sicherheit, Ruhe und Vertrautheit zu erhalten.",
        items: [
          "Wähle Betreuer, die Geduld zeigen und langsam genug arbeiten, ohne den Hund zu drängen.",
          "Plane feste Zeiten, weil ältere Hunde auf vorhersehbare Abläufe oft entspannter reagieren.",
          "Bereite den Liegeplatz so vor, dass Wasser, Decke, Leine und Medikamente leicht erreichbar sind.",
          "Besprich nach jedem Termin, ob der Ablauf leichter, kürzer oder ruhiger werden sollte.",
        ],
      },
    ],
  },
  {
    slug: "gassi-service-richtig-beschreiben",
    title: "Gassi-Service richtig beschreiben",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "Wie du Dauer, Strecke, Leinenverhalten und Begegnungen im Inserat klar formulierst.",
    tags: ["Gassi", "Inserat", "Hund"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-gassi-service-beschreiben.jpg",
      alt: "Hund läuft ruhig an der Leine auf einem grünen Gehweg in der Nachbarschaft",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum ein guter Gassi-Service mehr als eine Uhrzeit ist",
        intro:
          "Ein Gassi-Service klingt erstmal einfach: jemand geht mit dem Hund raus. In der Praxis entscheidet aber die genaue Beschreibung darüber, ob sich passende Menschen melden und ob der Spaziergang sicher abläuft.",
        items: [
          "Beschreibe, ob es um eine kurze Löserunde, eine normale Runde oder aktive Auslastung geht.",
          "Nenne Uhrzeitfenster, Wochentage und ob der Termin regelmäßig oder nur einmalig gebraucht wird.",
          "Erkläre, ob dein Hund nach der Runde gefüttert, abgetrocknet oder wieder in einen bestimmten Raum gebracht werden soll.",
          "Schreibe dazu, ob Treppenhaus, Schlüssel, Aufzug oder Gartentor für den Ablauf wichtig sind.",
        ],
      },
      {
        title: "Strecke, Dauer und Tempo klar formulieren",
        intro:
          "Viele Missverständnisse entstehen, weil Halter und Betreuer unter einer Gassi-Runde Unterschiedliches verstehen. Eine gute Beschreibung macht die Erwartung messbar.",
        items: [
          "Nenne die gewünschte Dauer in Minuten und ob sie flexibel oder verbindlich ist.",
          "Beschreibe das Tempo: gemütlich, normal, sportlich oder seniorengerecht mit Pausen.",
          "Erkläre, ob bestimmte Wege bevorzugt oder vermieden werden sollen, etwa Hauptstraßen, Parks oder Hundewiesen.",
          "Wenn dein Hund schnell überfordert ist, schreibe lieber kurze ruhige Runde statt große Auslastung.",
        ],
      },
      {
        title: "Leinenverhalten und Begegnungen gehören ins Inserat",
        intro:
          "Für einen sicheren Gassi-Service muss der Betreuer wissen, wie dein Hund draußen reagiert. Das ist kein Makel, sondern eine wichtige Arbeitsgrundlage.",
        items: [
          "Schreibe ehrlich, ob dein Hund zieht, bellt, jagt, unsicher ist oder andere Hunde ignorieren soll.",
          "Nenne Auslöser wie Fahrräder, Kinderwagen, Jogger, Katzen, Baustellen oder enge Gehwege.",
          "Lege fest, ob Kontakt zu anderen Hunden erlaubt ist oder grundsätzlich Abstand gehalten werden soll.",
          "Beschreibe, welche Signale, Belohnungen oder Abbruchwörter dein Hund bereits kennt.",
        ],
      },
      {
        title: "Was Betreuer vor der ersten Runde wissen müssen",
        intro:
          "Vor der ersten Gassi-Runde sollten die wichtigsten Punkte nicht erst an der Tür geklärt werden. Eine kurze Vorbereitung macht die Übergabe ruhiger.",
        items: [
          "Zeige Geschirr, Leine, Sicherheitskarabiner, Kotbeutel, Handtuch und Futterbelohnung.",
          "Erkläre, wie der Hund beim Anleinen reagiert und ob er an der Tür warten soll.",
          "Hinterlege Notfallkontakt und Tierarzt, falls unterwegs etwas auffällig wird.",
          "Vereinbare, ob der Betreuer nach der Runde eine kurze Nachricht oder ein Foto schicken soll.",
        ],
      },
      {
        title: "So klingt ein gutes Gassi-Inserat",
        intro:
          "Ein gutes Inserat ist nicht lang, sondern konkret. Es hilft Betreuern schnell zu prüfen, ob Erfahrung, Zeit und Umgebung passen.",
        items: [
          "Nutze einen klaren Titel wie: Gassi-Service für ruhigen Labrador in Hamburg gesucht.",
          "Starte mit PLZ-Region, Zeitraum, Dauer und Häufigkeit.",
          "Ergänze Verhalten, Leinenregeln, Gesundheit und gewünschte Kommunikation.",
          "Schließe mit einer freundlichen Einladung zur Anfrage, wenn Erfahrung und Zeiten passen.",
        ],
      },
    ],
  },
  {
    slug: "hundesitter-vor-dem-ersten-termin",
    title: "Hundesitter: was vor dem ersten Termin wichtig ist",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "Vom Kennenlernen bis zum Notfallkontakt: diese Punkte machen den Start ruhiger.",
    tags: ["Hundesitter", "Kennenlernen", "Sicherheit"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-hundesitter-erster-termin.jpg",
      alt: "Hund sitzt ruhig im Eingangsbereich während eine Person eine entspannte erste Kontaktaufnahme vorbereitet",
      width: 1689,
      height: 931,
    },
    articleSections: [
      {
        title: "Der erste Termin entscheidet über Vertrauen",
        intro:
          "Ein Hundesitter kann fachlich gut wirken und trotzdem nicht zu jedem Hund passen. Vor dem ersten richtigen Betreuungstermin sollte deshalb ein ruhiges Kennenlernen stattfinden.",
        items: [
          "Plane das Kennenlernen ohne Zeitdruck und möglichst in vertrauter Umgebung.",
          "Beobachte, ob der Hundesitter ruhig wartet oder den Hund direkt bedrängt.",
          "Erkläre, was dein Hund mag, was er meidet und welche Nähe für ihn angenehm ist.",
          "Halte den ersten Kontakt kurz, wenn dein Hund schnell müde oder unsicher wird.",
        ],
      },
      {
        title: "Diese Fragen solltest du vorher klären",
        intro:
          "Vor dem ersten Termin geht es nicht um Kontrolle, sondern um gemeinsame Sicherheit. Gute Hundesitter stellen selbst Fragen und wollen den Alltag verstehen.",
        items: [
          "Welche Erfahrung hat der Hundesitter mit ähnlichen Hunden, Alter, Größe oder Verhalten?",
          "Wie reagiert die Person, wenn der Hund zieht, bellt, nicht frisst oder nicht raus möchte?",
          "Ist die Betreuung zeitlich zuverlässig machbar, auch bei Verkehr, Wetter oder kleinen Verzögerungen?",
          "Welche Updates sind sinnvoll: Nachricht bei Ankunft, kurzer Bericht danach oder nur bei Auffälligkeiten?",
        ],
      },
      {
        title: "Übergabe ohne Chaos vorbereiten",
        intro:
          "Je besser die Übergabe vorbereitet ist, desto weniger muss während des Termins improvisiert werden. Das hilft besonders bei sensiblen Hunden.",
        items: [
          "Lege Leine, Geschirr, Futter, Medikamente, Handtuch und Schlüssel an einen festen Ort.",
          "Schreibe kurze Hinweise zu Fütterung, Türen, Treppenhaus, Garten und Rückkehr auf.",
          "Markiere, was tabu ist: bestimmte Wege, andere Hunde, Futter, Spielzeug oder Räume.",
          "Speichere Notfallkontakt und Tierarzt so, dass der Hundesitter sie sofort findet.",
        ],
      },
      {
        title: "Sicherheit bei Schlüssel, Adresse und Datenschutz",
        intro:
          "Hundesitting ist oft mit Vertrauen verbunden, weil Wohnung, Schlüssel oder private Daten betroffen sind. Genau deshalb sollten diese Punkte bewusst besprochen werden.",
        items: [
          "Teile die genaue Adresse erst, wenn beide Seiten die Anfrage konkret fortsetzen möchten.",
          "Sprich ab, wie Schlüssel übergeben und wieder zurückgegeben werden.",
          "Halte im Chat fest, wer Zugang zur Wohnung hat und für welchen Zeitraum.",
          "Wenn du unsicher bist, starte mit einer Betreuung, bei der du anfangs erreichbar und in der Nähe bist.",
        ],
      },
      {
        title: "Nach dem Probetermin richtig entscheiden",
        intro:
          "Nach dem ersten Termin zählt nicht nur, ob alles funktioniert hat. Wichtig ist auch, wie sich dein Hund danach verhält und wie klar die Kommunikation war.",
        items: [
          "War dein Hund entspannt, überdreht, ängstlich oder ungewöhnlich müde?",
          "Hat der Hundesitter Auffälligkeiten ehrlich zurückgemeldet?",
          "Waren Zeiten, Absprachen und Rückgabe so, wie vorher vereinbart?",
          "Wenn etwas nicht passte, formuliere die Änderung konkret oder suche eine ruhigere Alternative.",
        ],
      },
    ],
  },
  {
    slug: "hund-alleine-lassen-alternativen",
    title: "Hund nicht allein lassen: gute Betreuungsalternativen",
    categorySlug: "hund",
    careCategorySlug: "hund",
    excerpt: "Welche Formen von Betreuung passen, wenn Arbeit, Termin oder Reise dazwischenkommen.",
    tags: ["Alltag", "Hund", "Betreuung"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-hund-alleine-lassen-alternativen.jpg",
      alt: "Hund liegt entspannt im Hundebett neben Schreibtisch, Notebook, Leine und Planungsnotizen",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Wenn Alleinbleiben gerade nicht funktioniert",
        intro:
          "Nicht jeder Hund kann mehrere Stunden allein bleiben. Manchmal liegt es am Alter, an Krankheit, an Training, an einem Umzug oder einfach an einem Alltag, der sich verändert hat.",
        items: [
          "Nimm ernst, wenn dein Hund bellt, zerstört, unsauber wird oder sichtbar Stress zeigt.",
          "Unterscheide zwischen kurzer Überbrückung und regelmäßiger Betreuung über mehrere Stunden.",
          "Beschreibe im Inserat ehrlich, wie lange dein Hund aktuell allein bleiben kann.",
          "Plane Betreuung als Entlastung, nicht als Ersatz für Training, wenn Trennungsstress ein Thema ist.",
        ],
      },
      {
        title: "Welche Betreuungsform passt zu welchem Alltag?",
        intro:
          "Gute Alternativen hängen davon ab, ob du nur eine Lücke schließen willst oder regelmäßig Unterstützung brauchst. Nicht jede Lösung passt zu jedem Hund.",
        items: [
          "Ein Hausbesuch passt, wenn der Hund zuhause ruhig ist und nur Fütterung, Nähe oder kurze Runde braucht.",
          "Ein Gassi-Service hilft, wenn Bewegung und Lösezeiten das Hauptthema sind.",
          "Tagesbetreuung kann sinnvoll sein, wenn der Hund über mehrere Stunden nicht allein bleiben soll.",
          "Urlaubsbetreuung braucht mehr Vorbereitung, weil Routinen, Schlafplatz und Notfallkontakte wichtiger werden.",
        ],
      },
      {
        title: "So beschreibst du deinen Bedarf im Inserat",
        intro:
          "Wer Betreuungsalternativen sucht, sollte den Anlass klar benennen. Dadurch melden sich eher Menschen, die genau diese Art von Unterstützung anbieten können.",
        items: [
          "Nenne Anlass, Zeitraum, Wochentage und ob die Betreuung kurzfristig oder dauerhaft gebraucht wird.",
          "Erkläre, ob der Hund beim Betreuer, bei dir zuhause oder nur draußen betreut werden soll.",
          "Beschreibe, wie dein Hund auf fremde Wohnungen, Autofahren, andere Hunde und neue Menschen reagiert.",
          "Schreibe dazu, ob Homeoffice, Abendtermine, Schichtarbeit oder Reiseplanung der Grund sind.",
        ],
      },
      {
        title: "Warnzeichen, dass die Lösung zu viel ist",
        intro:
          "Eine Betreuung soll entlasten. Wenn der Hund danach dauerhaft gestresst wirkt, muss der Ablauf angepasst werden.",
        items: [
          "Der Hund frisst nicht, kommt nicht zur Ruhe oder zeigt starke Unruhe nach der Betreuung.",
          "Er reagiert auf Übergaben zunehmend angespannt oder möchte nicht mitgehen.",
          "Der Betreuer berichtet regelmäßig von Situationen, die nicht gut kontrollierbar sind.",
          "In solchen Fällen helfen kürzere Termine, vertrautere Orte oder ein langsamerer Aufbau.",
        ],
      },
      {
        title: "Besser planen, bevor es dringend wird",
        intro:
          "Die beste Betreuungsalternative ist oft die, die schon vor dem Notfall bekannt ist. Ein kleines Netzwerk macht Termine, Arbeitstage und Reisen deutlich entspannter.",
        items: [
          "Teste Betreuung an einem kurzen, ruhigen Tag, bevor ein langer Arbeitstag oder eine Reise ansteht.",
          "Speichere zwei bis drei passende Kontakte, falls jemand kurzfristig ausfällt.",
          "Halte Übergabe, Futter, Schlüssel und Notfallkontakt aktuell.",
          "Überprüfe regelmäßig, ob die gewählte Lösung noch zum Alter, Verhalten und Alltag deines Hundes passt.",
        ],
      },
    ],
  },
  {
    slug: "katzenbetreuung-hausbesuch",
    title: "Katzenbetreuung per Hausbesuch planen",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "Fütterung, Wasser, Katzenklo, Spielzeit und Updates sinnvoll vorbereiten.",
    tags: ["Katzenbetreuung", "Hausbesuch", "Urlaub"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-katzenbetreuung-hausbesuch.jpg",
      alt: "Katze steht entspannt bei Futter, Wasser, Katzenklo und Notizbuch in einer hellen Wohnung",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum Hausbesuche für viele Katzen ideal sind",
        intro:
          "Katzen bleiben oft am entspanntesten in ihrer vertrauten Umgebung. Eine gute Katzenbetreuung per Hausbesuch sorgt dafür, dass Futter, Wasser, Katzenklo und kleine Routinen zuverlässig weiterlaufen.",
        items: [
          "Beschreibe, wie oft der Hausbesuch stattfinden soll: einmal täglich, zweimal täglich oder nur an bestimmten Tagen.",
          "Nenne klar, ob es nur um Versorgung oder auch um Spielzeit, Nähe und kurze Kontrolle der Wohnung geht.",
          "Erkläre, welche Räume betreten werden dürfen und welche Türen geschlossen bleiben sollen.",
          "Halte fest, ob Fenster, Balkon, Heizung, Pflanzen oder Futterplätze besonders geprüft werden müssen.",
        ],
      },
      {
        title: "Fütterung und Wasser eindeutig vorbereiten",
        intro:
          "Bei Katzenbetreuung entstehen die meisten Unsicherheiten rund um Futtermenge, Näpfe und Wasser. Je genauer du vorbereitest, desto ruhiger läuft der Hausbesuch.",
        items: [
          "Notiere Futterart, Menge, Uhrzeit und ob Nassfutter, Trockenfutter oder Snacks erlaubt sind.",
          "Lege Futter sichtbar bereit und beschrifte bei mehreren Katzen, wer was bekommt.",
          "Erkläre, ob Wasser nur gewechselt oder zusätzlich ein Trinkbrunnen kontrolliert werden soll.",
          "Schreibe dazu, was normal ist: frisst die Katze sofort, später oder manchmal nur wenig?",
        ],
      },
      {
        title: "Katzenklo, Geruch und Sauberkeit klären",
        intro:
          "Das Katzenklo ist ein wichtiger Hinweis auf Wohlbefinden. Betreuer sollten wissen, was gereinigt wird und welche Veränderungen gemeldet werden sollen.",
        items: [
          "Zeige Streu, Schaufel, Müllbeutel und Ort für die Entsorgung.",
          "Erkläre, ob das Klo täglich komplett kontrolliert oder nur grob gereinigt werden soll.",
          "Bitte um Rückmeldung bei Durchfall, Blut, ungewöhnlich wenig Urin oder stark verändertem Geruch.",
          "Wenn mehrere Klos vorhanden sind, beschreibe, welches normalerweise am meisten genutzt wird.",
        ],
      },
      {
        title: "Spiel, Nähe und Abstand richtig einschätzen",
        intro:
          "Nicht jede Katze möchte Besuch direkt begrüßen. Gute Betreuung respektiert, ob die Katze spielen, beobachten oder einfach in Ruhe gelassen werden will.",
        items: [
          "Beschreibe Lieblingsspielzeug, Spielzeiten und wann genug ist.",
          "Erkläre, ob Streicheln erwünscht ist oder die Katze lieber Abstand hält.",
          "Nenne Rückzugsorte, damit Betreuer nicht unnötig suchen oder bedrängen.",
          "Halte fest, ob Fotos gewünscht sind oder ob ein kurzes Update ohne Störung reicht.",
        ],
      },
      {
        title: "So klingt ein gutes Inserat für Katzen-Hausbesuche",
        intro:
          "Ein gutes Inserat hilft Betreuern schnell zu verstehen, ob Ort, Zeit und Aufgaben passen. Für Katzen ist vor allem wichtig, dass die Routine zuhause klar beschrieben wird.",
        items: [
          "Starte mit PLZ-Region, Zeitraum und gewünschter Besuchshäufigkeit.",
          "Beschreibe Katze, Alter, Verhalten, Fütterung, Katzenklo und besondere Hinweise.",
          "Nenne, ob Erfahrung mit schüchternen, älteren oder mehreren Katzen wichtig ist.",
          "Schließe mit einer klaren Anfrage, welche Verfügbarkeit und Zuverlässigkeit du dir wünschst.",
        ],
      },
    ],
  },
  {
    slug: "katze-im-urlaub-versorgen",
    title: "Katze im Urlaub versorgen lassen",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "Was Halter vor der Reise notieren sollten, damit Katzen zuhause gut versorgt bleiben.",
    tags: ["Katze", "Urlaub", "Fütterung"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-katze-urlaub-versorgen.jpg",
      alt: "Katze sitzt ruhig neben vorbereitetem Futter, Wasser und Reisekoffer in einer hellen Wohnung",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Urlaubsbetreuung beginnt vor der Abreise",
        intro:
          "Wenn du deine Katze im Urlaub versorgen lassen möchtest, sollte die Betreuung nicht erst am Abreisetag erklärt werden. Eine klare Vorbereitung macht den Zeitraum für Katze und Betreuer ruhiger.",
        items: [
          "Plane den ersten Kontakt einige Tage vor der Reise, damit Fragen nicht unter Zeitdruck entstehen.",
          "Erkläre, welche Routinen täglich wichtig sind und welche nur bei Bedarf gelten.",
          "Lege fest, wie oft Updates kommen sollen und wann du im Urlaub erreichbar bist.",
          "Hinterlasse eine Ersatzperson, falls du selbst zeitweise keinen Empfang hast.",
        ],
      },
      {
        title: "Futter, Wasser und Vorräte für den Urlaub",
        intro:
          "Während einer Reise muss der Betreuer schnell finden, was gebraucht wird. Sichtbare Vorräte und klare Mengen verhindern Fehler.",
        items: [
          "Stelle genug Futter, Streu, Müllbeutel, Medikamente und Reinigungsmittel bereit.",
          "Notiere pro Tag, welche Menge Nassfutter, Trockenfutter und Snacks erlaubt ist.",
          "Erkläre, ob geöffnete Dosen in den Kühlschrank gehören und wie lange sie genutzt werden dürfen.",
          "Bitte um Rückmeldung, wenn Futter, Wasser oder Streu früher knapp werden als erwartet.",
        ],
      },
      {
        title: "Wohnung und Sicherheit vorbereiten",
        intro:
          "Katzenbetreuung im Urlaub betrifft nicht nur die Katze. Auch Wohnung, Fenster, Pflanzen, Türen und Technik sollten so vorbereitet sein, dass der Betreuer nicht improvisieren muss.",
        items: [
          "Schließe gefährliche Fenster, sichere Balkonzugänge und entferne riskante Pflanzen.",
          "Erkläre, welche Türen offen bleiben müssen, damit die Katze Klo, Wasser und Rückzugsort erreicht.",
          "Zeige Sicherungskasten, Wasserhahn oder wichtige Wohnungspunkte nur, wenn sie wirklich relevant sind.",
          "Lege fest, was bei Paketboten, Nachbarn oder unerwartetem Klingeln passieren soll.",
        ],
      },
      {
        title: "Was im Notfall passieren soll",
        intro:
          "Auch wenn meistens alles ruhig bleibt, braucht Urlaubsbetreuung klare Notfallregeln. So kann der Betreuer schnell handeln, ohne lange nach Entscheidungen zu suchen.",
        items: [
          "Hinterlege Tierarzt, Notdienst, Transportbox und eine erreichbare Ersatzperson.",
          "Notiere, welche Symptome sofort gemeldet werden müssen: Futterverweigerung, Erbrechen, Durchfall oder Atemprobleme.",
          "Kläre, ob der Betreuer im Notfall zum Tierarzt fahren darf und wie Kosten abgestimmt werden.",
          "Beschreibe, wie deine Katze in die Box gesetzt wird und was sie dabei beruhigt.",
        ],
      },
      {
        title: "Nach dem Urlaub sauber abschließen",
        intro:
          "Eine gute Urlaubsbetreuung endet nicht einfach mit deiner Rückkehr. Ein kurzer Abschluss hilft, Auffälligkeiten zu verstehen und künftige Betreuung noch besser zu planen.",
        items: [
          "Frage nach Futtermenge, Katzenklo, Verhalten, Spielzeit und besonderen Beobachtungen.",
          "Prüfe, ob Vorräte aufgefüllt oder Klo, Näpfe und Wasserbrunnen gereinigt werden müssen.",
          "Bedanke dich mit konkretem Feedback, wenn Kommunikation und Betreuung gut funktioniert haben.",
          "Speichere passende Betreuer für die nächste Reise, damit du nicht jedes Mal neu suchen musst.",
        ],
      },
    ],
  },
  {
    slug: "scheue-katze-betreuen",
    title: "Scheue Katze betreuen: Abstand ist Fürsorge",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "Wie Betreuung auch dann gelingt, wenn die Katze kaum Kontakt möchte.",
    tags: ["Katze", "Verhalten", "Ruhe"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-scheue-katze-betreuen.jpg",
      alt: "Scheue Katze schaut ruhig aus einer gemütlichen Katzenhöhle neben Futter und Wasser",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Scheue Katzen brauchen keinen Mut-Test",
        intro:
          "Eine scheue Katze muss Betreuung nicht aktiv begrüßen, damit die Betreuung gut ist. Oft ist es schon ein Erfolg, wenn sie frisst, ihr Klo nutzt und sich nicht bedrängt fühlt.",
        items: [
          "Beschreibe im Inserat ehrlich, dass die Katze Abstand braucht und wahrscheinlich nicht direkt Kontakt sucht.",
          "Erkläre, welche Rückzugsorte normal sind und wo der Betreuer nur kurz kontrollieren soll.",
          "Bitte Betreuer, langsam zu sprechen, sich ruhig zu bewegen und nicht aktiv hinterherzugehen.",
          "Lege fest, dass Sicherheit und Versorgung wichtiger sind als Streicheln oder Fotos.",
        ],
      },
      {
        title: "Rückzugsorte respektvoll kontrollieren",
        intro:
          "Bei scheuen Katzen ist Kontrolle wichtig, aber sie sollte so unaufdringlich wie möglich passieren. Der Betreuer muss wissen, was normal ist und wann er reagieren soll.",
        items: [
          "Nenne typische Verstecke wie Höhle, Sofa, Schrank, Bett oder Kratzbaum.",
          "Erkläre, ob ein kurzer Blick reicht oder ob die Katze täglich sichtbar gesehen werden soll.",
          "Vermeide unnötiges Herauslocken, wenn Futter, Wasser und Klo unauffällig sind.",
          "Bitte um Rückmeldung, wenn die Katze ungewöhnlich lange nicht frisst oder nicht aufs Klo geht.",
        ],
      },
      {
        title: "Futter und Routine geben Sicherheit",
        intro:
          "Scheue Katzen orientieren sich oft stark an festen Abläufen. Je weniger sich verändert, desto leichter bleibt die Betreuung.",
        items: [
          "Nutze gleiche Uhrzeiten, gleiche Näpfe und gleiche Futterplätze wie im Alltag.",
          "Stelle Futter so hin, dass die Katze nicht direkt am Betreuer vorbei muss.",
          "Halte Geräusche niedrig und vermeide Staubsauger, laute Musik oder hektisches Suchen.",
          "Wenn Medikamente nötig sind, beschreibe sehr genau, ob und wie sie ohne Stress gegeben werden können.",
        ],
      },
      {
        title: "Updates ohne zusätzlichen Stress",
        intro:
          "Viele Halter wünschen Fotos, aber bei scheuen Katzen kann ein Foto bedeuten, dass der Betreuer zu nah kommt. Gute Kommunikation braucht hier Fingerspitzengefühl.",
        items: [
          "Vereinbare, ob ein Foto nötig ist oder eine kurze Nachricht reicht.",
          "Bitte um Infos zu Futter, Wasser, Klo und sichtbaren Veränderungen.",
          "Wenn Fotos gewünscht sind, sollten sie nur aus Abstand und ohne Blitz entstehen.",
          "Akzeptiere, dass nicht jede Betreuung einen sichtbaren Kontaktmoment liefert.",
        ],
      },
      {
        title: "Woran du gute Betreuung für scheue Katzen erkennst",
        intro:
          "Gute Betreuer zeigen bei schüchternen Katzen Geduld. Sie müssen nicht beweisen, dass die Katze sie mag, sondern dass sie zuverlässig, ruhig und aufmerksam versorgen.",
        items: [
          "Die Person fragt nach Verhalten, Verstecken, Grenzen und normalen Gewohnheiten.",
          "Sie respektiert, wenn die Katze keinen Kontakt möchte.",
          "Sie meldet Auffälligkeiten sachlich, ohne unnötig Druck aufzubauen.",
          "Nach der Betreuung wirkt die Katze nicht zusätzlich verunsichert und findet schnell in ihre Routine zurück.",
        ],
      },
    ],
  },
  {
    slug: "katzenklo-futter-und-medikamente",
    title: "Katzenklo, Futter und Medikamente sauber übergeben",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "So bereitest du Futter, Katzenklo, Medikamente und Beobachtung so vor, dass die Katzenbetreuung ruhig und sicher läuft.",
    tags: ["Katze", "Übergabe", "Medikamente"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-katzen-uebergabe-futter-medikamente.jpg",
      alt: "Katze sitzt in einer hellen Wohnung neben vorbereitetem Katzenklo, Futter, Wasser und einer sicheren Medikamentenbox",
      width: 1673,
      height: 940,
    },
    articleSections: [
      {
        title: "Warum eine saubere Übergabe Fehler verhindert",
        intro:
          "Katzenbetreuung wirkt oft unkompliziert, bis Futter, Katzenklo oder Medikamente nicht eindeutig vorbereitet sind. Eine gute Übergabe macht den Hausbesuch für Betreuer klar und für die Katze vorhersehbar.",
        items: [
          "Lege Futter, Näpfe, Streu, Schaufel, Müllbeutel und Medikamente sichtbar an feste Orte.",
          "Schreibe nicht nur auf, was gemacht werden soll, sondern auch, was für deine Katze normal ist.",
          "Trenne wichtige Hinweise nach Themen: Futter, Wasser, Katzenklo, Medikamente, Verhalten und Notfall.",
          "Halte Absprachen im Chat fest, damit Betreuer später nicht zwischen alten Nachrichten suchen müssen.",
        ],
      },
      {
        title: "Futter: Menge, Rhythmus und Ausnahmen klären",
        intro:
          "Bei der Fütterung zählen kleine Details. Unterschiedliche Sorten, Uhrzeiten oder Snacks können schnell durcheinandergehen, wenn sie nur mündlich erklärt werden.",
        items: [
          "Notiere genaue Mengen für Nassfutter, Trockenfutter und Leckerli pro Besuch oder pro Tag.",
          "Beschreibe, ob deine Katze sofort frisst, später wiederkommt oder Futterreste normal sind.",
          "Erkläre, welche Sorten tabu sind und ob geöffnete Dosen gekühlt werden müssen.",
          "Wenn mehrere Katzen im Haushalt leben, beschrifte Näpfe und Futterplätze eindeutig.",
        ],
      },
      {
        title: "Katzenklo als Gesundheitsanzeiger nutzen",
        intro:
          "Das Katzenklo ist nicht nur eine Aufgabe auf der Liste. Es zeigt oft früh, ob sich Futter, Stress oder Gesundheit verändern.",
        items: [
          "Zeige genau, welches Klo gereinigt wird und wo saubere Streu oder Ersatzbeutel liegen.",
          "Bitte um Rückmeldung bei Durchfall, Blut, sehr wenig Urin oder ungewöhnlich starkem Geruch.",
          "Erkläre, ob Klumpen täglich entfernt oder Streu nachgefüllt werden soll.",
          "Bei mehreren Katzen hilft ein kurzer Hinweis, welches Klo normalerweise besonders oft genutzt wird.",
        ],
      },
      {
        title: "Medikamente ohne Missverständnisse übergeben",
        intro:
          "Medikamente brauchen klare Angaben, weil kleine Fehler schnell Folgen haben können. Betreuer sollten nicht raten müssen, wann, wie und in welcher Menge etwas gegeben wird.",
        items: [
          "Notiere Medikamentenname, Dosierung, Uhrzeit, Dauer und ob die Gabe mit Futter erfolgen soll.",
          "Bereite Tabletten oder Portionen möglichst vorsortiert vor, ohne Verpackungen oder Beipackzettel zu entfernen.",
          "Beschreibe, wie deine Katze Medikamente am stressärmsten nimmt: im Futter, mit Paste oder direkt.",
          "Vereinbare eine kurze Bestätigung nach jeder Gabe, damit nichts doppelt oder gar nicht gegeben wird.",
        ],
      },
      {
        title: "So bereitest du Betreuer praktisch vor",
        intro:
          "Eine gute Vorbereitung ist kurz, aber vollständig. Betreuer brauchen keine langen Erklärungen, sondern eine Struktur, die auch beim zweiten oder dritten Besuch noch eindeutig ist.",
        items: [
          "Nutze eine kleine Übergabe-Liste an einem sichtbaren Ort, etwa nahe Futter oder Katzenzubehör.",
          "Hinterlege Tierarzt, Ersatzkontakt, Transportbox und klare Notfallregeln.",
          "Lege fest, welche Updates du erwartest: Futter, Wasser, Klo, Medikamente und allgemeiner Eindruck.",
          "Prüfe nach dem ersten Besuch gemeinsam, ob die Übergabe noch einfacher oder genauer werden sollte.",
        ],
      },
    ],
  },
  {
    slug: "freigaenger-katze-betreuung",
    title: "Freigänger-Katze betreuen: Regeln klar machen",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "Was bei Katzenklappe, Fütterungszeiten, Rückkehr, Nachbarschaft und Sicherheit vorher abgesprochen werden sollte.",
    tags: ["Freigänger", "Katze", "Sicherheit"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-freigaenger-katze-betreuung.jpg",
      alt: "Freigänger-Katze sitzt ruhig an einer Terrassentür mit Katzenklappe, Futter, Wasser und sicherem Gartenblick",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Freigänger brauchen klare Zeiten",
        intro:
          "Bei einer Freigänger-Katze geht es nicht nur um Futter und Wasser. Betreuer müssen wissen, wann die Katze normalerweise kommt, ob sie draußen bleiben darf und ab wann eine fehlende Rückkehr auffällig ist.",
        items: [
          "Beschreibe, zu welchen Tageszeiten deine Katze meistens zuhause auftaucht.",
          "Lege fest, ob sie nachts drinnen bleiben soll oder weiter freien Zugang hat.",
          "Schreibe auf, ab wann der Betreuer dich informieren soll, wenn die Katze nicht erscheint.",
          "Nenne typische Aufenthaltsorte im Garten, Hausflur, Keller oder bei vertrauten Nachbarn.",
        ],
      },
      {
        title: "Katzenklappe, Türen und sichere Wege erklären",
        intro:
          "Katzenklappen und Türen wirken für Halter selbstverständlich, sind für Betreuer aber oft die größte Fehlerquelle. Eine klare Erklärung verhindert, dass die Katze versehentlich ausgesperrt oder eingesperrt wird.",
        items: [
          "Erkläre, ob die Katzenklappe offen, gesperrt, zeitgesteuert oder nur in eine Richtung nutzbar ist.",
          "Zeige, welche Türen offen bleiben müssen, damit Futter, Wasser, Klo und Rückzugsort erreichbar sind.",
          "Beschreibe, ob Fenster, Balkon oder Terrassentür während des Besuchs geschlossen bleiben sollen.",
          "Wenn Technik beteiligt ist, hinterlege eine kurze Notiz direkt an der Klappe oder Tür.",
        ],
      },
      {
        title: "Fütterung als ruhigen Kontrollpunkt nutzen",
        intro:
          "Bei Freigängern ist Futter oft die beste Möglichkeit, unauffällig zu prüfen, ob alles normal läuft. Dabei sollte aber nicht zu viel Druck entstehen.",
        items: [
          "Lege fest, ob Futter nur hingestellt oder erst nach Sichtkontakt gegeben werden soll.",
          "Beschreibe, wie viel Futter normal übrig bleibt, wenn die Katze draußen unterwegs war.",
          "Erkläre, ob andere Katzen oder Tiere an den Napf kommen und was dann passieren soll.",
          "Bitte um Rückmeldung, wenn die Katze deutlich weniger frisst oder ungewohnt unruhig wirkt.",
        ],
      },
      {
        title: "Nachbarschaft, Risiken und Notfallregeln",
        intro:
          "Freigänger bewegen sich in einem größeren Umfeld. Betreuer sollten wissen, welche Kontakte hilfreich sind und welche Situationen sofort gemeldet werden müssen.",
        items: [
          "Nenne vertraute Nachbarn nur, wenn sie wirklich helfen dürfen und informiert sind.",
          "Beschreibe bekannte Risiken wie Baustellen, neue Hunde, stark befahrene Straßen oder Streit mit anderen Katzen.",
          "Hinterlege Tierarzt, Notdienst, Transportbox und eine erreichbare Ersatzperson.",
          "Vereinbare, ob der Betreuer bei Verletzungen, Humpeln oder stark verändertem Verhalten sofort handeln soll.",
        ],
      },
      {
        title: "Gute Updates für Freigänger-Betreuung",
        intro:
          "Nicht jeder Besuch endet mit einem Foto der Katze. Bei Freigängern ist gute Kommunikation vor allem ehrlich und regelmäßig.",
        items: [
          "Ein Update sollte Futter, Wasser, Sichtkontakt, Katzenklo und besondere Beobachtungen enthalten.",
          "Wenn die Katze nicht da war, ist eine sachliche Rückmeldung wichtiger als hektisches Suchen.",
          "Fotos sind schön, aber nur sinnvoll, wenn die Katze dadurch nicht gestört oder verfolgt wird.",
          "Nach der Betreuung hilft ein kurzer Abschluss, ob Zeiten, Klappenregeln und Futtermenge gut gepasst haben.",
        ],
      },
    ],
  },
  {
    slug: "mehrkatzenhaushalt-betreuung",
    title: "Mehrkatzenhaushalt betreuen: ruhig und fair",
    categorySlug: "katze",
    careCategorySlug: "katze",
    excerpt: "So behältst du Futterplätze, Gruppendynamik, Katzenklos und Rückzugsorte bei mehreren Katzen im Blick.",
    tags: ["Katze", "Mehrkatzen", "Routine"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-mehrkatzenhaushalt-betreuung.jpg",
      alt: "Drei entspannte Katzen in einer hellen Wohnung mit getrennten Futterplätzen, Kratzbaum und Rückzugsorten",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Mehrere Katzen bedeuten mehrere Routinen",
        intro:
          "Ein Mehrkatzenhaushalt ist nicht einfach eine Katzenbetreuung mit mehr Näpfen. Jede Katze kann andere Gewohnheiten, Grenzen und Bedürfnisse haben.",
        items: [
          "Beschreibe jede Katze einzeln mit Name, Aussehen, Alter, Verhalten und typischem Lieblingsplatz.",
          "Erkläre, welche Katze Kontakt sucht und welche lieber Abstand hält.",
          "Notiere, ob es feste Rangfolgen, sensible Situationen oder bekannte Konflikte gibt.",
          "Bitte Betreuer, alle Katzen ruhig zu beobachten, ohne die Gruppe unnötig zu verändern.",
        ],
      },
      {
        title: "Futterplätze und Medikamente getrennt halten",
        intro:
          "Bei mehreren Katzen ist Fütterung oft der wichtigste Punkt. Wenn eine Katze Spezialfutter oder Medikamente bekommt, müssen Plätze und Mengen eindeutig sein.",
        items: [
          "Beschrifte Näpfe, Futterdosen und Futterplätze so, dass keine Katze verwechselt wird.",
          "Erkläre, ob Katzen getrennt gefüttert werden müssen oder gemeinsam fressen dürfen.",
          "Notiere, welche Katze schnell klaut, langsam frisst oder Futter stehen lässt.",
          "Bei Medikamenten sollte der Betreuer nach der Gabe kurz bestätigen, welche Katze sie bekommen hat.",
        ],
      },
      {
        title: "Gruppendynamik beobachten ohne einzugreifen",
        intro:
          "Betreuer müssen nicht jede kleine Spannung lösen. Wichtig ist, normale Dynamik von echten Warnzeichen unterscheiden zu können.",
        items: [
          "Beschreibe, welche Geräusche, Blicke oder kleinen Reibereien bei deinen Katzen normal sind.",
          "Erkläre, wann eingegriffen oder gemeldet werden soll: Verjagen, Verletzung, starkes Fauchen oder blockierte Wege.",
          "Bitte Betreuer, keine Katzen aktiv zusammenzuführen, wenn sie sich aus dem Weg gehen möchten.",
          "Wenn Spiel oder Streicheln möglich ist, sollte jede Katze freiwillig entscheiden können.",
        ],
      },
      {
        title: "Katzenklos und Rückzugsorte im Blick behalten",
        intro:
          "Mehrere Katzen brauchen saubere Toiletten und sichere Rückzugsorte. Gerade hier fällt schnell auf, ob eine Katze Stress hat.",
        items: [
          "Zeige alle Katzenklos, Streu, Schaufel, Müllbeutel und den Ort für die Entsorgung.",
          "Erkläre, welche Rückzugsorte nicht geöffnet oder gestört werden sollen.",
          "Bitte um Rückmeldung, wenn ein Klo plötzlich gar nicht genutzt wird oder eine Katze unsauber wirkt.",
          "Achte darauf, dass nach dem Besuch keine Katze versehentlich in einem Zimmer eingeschlossen ist.",
        ],
      },
      {
        title: "So klingt ein gutes Inserat für mehrere Katzen",
        intro:
          "Ein gutes Inserat für einen Mehrkatzenhaushalt macht schnell klar, wie viele Tiere betreut werden, welche Aufgaben anfallen und welche Erfahrung hilfreich ist.",
        items: [
          "Nenne im Titel direkt, dass es um mehrere Katzen geht, etwa: Betreuung für drei Katzen in Leipzig gesucht.",
          "Beschreibe Zeitraum, Besuchshäufigkeit, Fütterung, Katzenklos und gewünschte Updates.",
          "Ergänze besondere Themen wie Medikamente, Freigang, scheue Katzen oder getrennte Futterplätze.",
          "Formuliere freundlich, welche Erfahrung du dir wünschst und ob ein Kennenlernen vorab sinnvoll ist.",
        ],
      },
    ],
  },
  {
    slug: "kaninchenbetreuung-urlaub",
    title: "Kaninchenbetreuung im Urlaub",
    categorySlug: "kleintiere",
    careCategorySlug: "kleintier",
    excerpt: "So bereitest du Futter, Wasser, Gehege, Frischfutter und Beobachtung vor, damit Kaninchen auch während deiner Reise ruhig versorgt bleiben.",
    tags: ["Kaninchen", "Kleintier", "Urlaub"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-kaninchenbetreuung-urlaub.jpg",
      alt: "Zwei entspannte Kaninchen in einem hellen Innengehege mit Heu, Frischfutter, Wasser und Notizbuch",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Kaninchenbetreuung braucht tägliche Routine",
        intro:
          "Kaninchen sind sensibel, zeigen Probleme oft spät und brauchen eine verlässliche Versorgung. Gerade im Urlaub sollte die Betreuung nicht nur Futter nachlegen, sondern Verhalten, Fresslust und Gehege täglich im Blick behalten.",
        items: [
          "Plane mindestens einen zuverlässigen Besuch pro Tag, bei Bedarf auch morgens und abends.",
          "Beschreibe, wie deine Kaninchen normalerweise fressen, ruhen und auf Menschen reagieren.",
          "Erkläre, welche Tiere zusammenleben und ob es bekannte Spannungen in der Gruppe gibt.",
          "Halte fest, wann sofort Rückmeldung nötig ist, etwa bei Futterverweigerung oder ungewöhnlicher Ruhe.",
        ],
      },
      {
        title: "Heu, Frischfutter und Wasser eindeutig vorbereiten",
        intro:
          "Bei Kaninchen ist Fütterung mehr als ein gefüllter Napf. Heu, Wasser und verträgliches Frischfutter sollten so vorbereitet sein, dass Betreuer keine Sorten oder Mengen erraten müssen.",
        items: [
          "Lege ausreichend Heu bereit und zeige, wo es nachgefüllt werden soll.",
          "Notiere genau, welches Frischfutter erlaubt ist und welche Sorten tabu sind.",
          "Beschreibe die Menge pro Tag und ob Reste entfernt werden sollen.",
          "Erkläre, ob Wasser aus Napf, Flasche oder beidem angeboten wird und wie oft es gewechselt werden soll.",
        ],
      },
      {
        title: "Gehege, Einstreu und Temperatur kontrollieren",
        intro:
          "Ein gutes Kaninchengehege bleibt sauber, sicher und angenehm temperiert. Im Urlaub sollte klar sein, was täglich kontrolliert wird und was nur bei Bedarf anfällt.",
        items: [
          "Zeige Futterplatz, Toilettenecke, Einstreu, Müllbeutel, Besen und Reinigungsmaterial.",
          "Erkläre, welche Stellen täglich gereinigt und welche nur aufgefüllt werden.",
          "Nenne Temperaturgrenzen, Schattenplätze und was bei Hitze oder Kälte passieren soll.",
          "Bitte den Betreuer, Türen, Gitter, Auslauf und mögliche Fluchtstellen bei jedem Besuch zu prüfen.",
        ],
      },
      {
        title: "Warnzeichen bei Kaninchen ernst nehmen",
        intro:
          "Kaninchen wirken manchmal lange unauffällig, obwohl etwas nicht stimmt. Betreuer sollten deshalb wissen, welche Signale sofort gemeldet werden müssen.",
        items: [
          "Auffällig sind Futterverweigerung, aufgeblähter Bauch, Zähneknirschen, Durchfall oder fehlender Kot.",
          "Auch apathisches Sitzen, schiefe Kopfhaltung oder schwere Atmung brauchen schnelle Rückmeldung.",
          "Hinterlege Tierarzt, Notdienst, Transportbox und eine erreichbare Ersatzperson.",
          "Schreibe klar auf, ob der Betreuer im Notfall direkt eine Tierarztpraxis kontaktieren darf.",
        ],
      },
      {
        title: "So formulierst du ein gutes Kaninchen-Inserat",
        intro:
          "Ein gutes Inserat für Kaninchenbetreuung hilft Betreuern schnell zu prüfen, ob sie Erfahrung, Zeit und Nähe mitbringen. Gerade bei Urlauben zählt eine genaue Vorbereitung.",
        items: [
          "Nenne Zeitraum, PLZ-Region, Besuchshäufigkeit und Anzahl der Kaninchen.",
          "Beschreibe Fütterung, Gehege, Reinigung, Auslauf und gewünschte Updates.",
          "Schreibe dazu, ob Erfahrung mit Kleintieren oder Kaninchengruppen wichtig ist.",
          "Bitte um ein Kennenlernen vor der Reise, damit Gehege, Tiere und Übergabe einmal ruhig gezeigt werden können.",
        ],
      },
    ],
  },
  {
    slug: "meerschweinchen-betreuen",
    title: "Meerschweinchen betreuen: tägliche Routine",
    categorySlug: "kleintiere",
    careCategorySlug: "kleintier",
    excerpt: "Was Betreuer zu Futter, Gruppenverhalten, Wasser, Gehege und Stallpflege wissen sollten.",
    tags: ["Meerschweinchen", "Kleintier", "Routine"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-meerschweinchen-taegliche-routine.jpg",
      alt: "Drei Meerschweinchen in einem sauberen Innengehege mit Heu, Frischfutter, Wasser und Rückzugsorten",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Meerschweinchen brauchen Gruppenblick",
        intro:
          "Meerschweinchen werden selten einzeln betreut. Deshalb geht es nicht nur um Futter, sondern auch darum, die Gruppe ruhig zu beobachten und Veränderungen früh zu erkennen.",
        items: [
          "Beschreibe jedes Tier einzeln mit Aussehen, Name, Alter und typischem Verhalten.",
          "Erkläre, welche Tiere besonders mutig, scheu, dominant oder langsam beim Fressen sind.",
          "Nenne bekannte Konflikte, Futterneid oder Situationen, in denen Abstand wichtig ist.",
          "Bitte Betreuer, alle Tiere täglich kurz zu sehen, ohne sie unnötig hochzunehmen.",
        ],
      },
      {
        title: "Futter und Frischfutter ohne Experimente",
        intro:
          "Meerschweinchen reagieren empfindlich auf Futterwechsel. Eine gute Betreuung hält sich deshalb an bekannte Sorten, klare Mengen und feste Zeiten.",
        items: [
          "Lege Heu, Frischfutter, Trockenfutter und erlaubte Snacks getrennt und sichtbar bereit.",
          "Notiere, welche Gemüsesorten vertragen werden und welche nicht gefüttert werden dürfen.",
          "Beschreibe, ob Reste entfernt werden sollen und wann neues Frischfutter gegeben wird.",
          "Erkläre, ob einzelne Tiere getrennt beobachtet werden müssen, weil sie zu wenig abbekommen.",
        ],
      },
      {
        title: "Wasser, Gehege und Einstreu kontrollieren",
        intro:
          "Die tägliche Routine sollte schnell, aber gründlich sein. Wasser, Heu, Liegeflächen und feuchte Stellen sind besonders wichtig.",
        items: [
          "Zeige, ob Wasserflasche, Wassernapf oder beides genutzt wird und wie es gereinigt wird.",
          "Erkläre, welche Ecken täglich entfernt und welche Bereiche nachgestreut werden.",
          "Nenne den Ort für Müllbeutel, frische Einstreu, Besen und Reinigungsmaterial.",
          "Bitte darum, Tunnel, Häuschen und Futterstellen nach jedem Besuch wieder sicher zu platzieren.",
        ],
      },
      {
        title: "Warnzeichen bei Meerschweinchen erkennen",
        intro:
          "Meerschweinchen können gesundheitliche Probleme lange verstecken. Betreuer sollten wissen, welche Beobachtungen nicht bis zum nächsten Tag warten sollten.",
        items: [
          "Wichtig sind Futterverweigerung, starkes Absondern, aufgeplustertes Sitzen oder schnelle Atmung.",
          "Auch Durchfall, keine sichtbaren Köttel, Humpeln oder auffällige Geräusche beim Atmen müssen gemeldet werden.",
          "Hinterlege Tierarzt, Notdienst, Transportbox und eine Person, die im Zweifel entscheiden kann.",
          "Bitte um kurze Updates zu Futter, Wasser, Aktivität und ob alle Tiere gesehen wurden.",
        ],
      },
      {
        title: "Inserat für Meerschweinchenbetreuung schreiben",
        intro:
          "Ein gutes Inserat macht die Aufgabe übersichtlich. Betreuer sollten sofort erkennen, wie viele Tiere es sind, wie oft sie kommen müssen und welche Routine erwartet wird.",
        items: [
          "Nenne Anzahl der Meerschweinchen, Zeitraum, PLZ-Region und Besuchshäufigkeit.",
          "Beschreibe Heu, Frischfutter, Wasser, Gehegereinigung und gewünschte Beobachtung.",
          "Erkläre, ob Erfahrung mit Kleintieren wichtig ist und ob ein Kennenlernen vorab stattfinden soll.",
          "Formuliere freundlich, welche Verlässlichkeit du brauchst, besonders bei Urlaubsbetreuung oder längeren Zeiträumen.",
        ],
      },
    ],
  },
  {
    slug: "hamsterbetreuung-abends",
    title: "Hamsterbetreuung: abends ist oft besser",
    categorySlug: "kleintiere",
    careCategorySlug: "kleintier",
    excerpt: "Wie Betreuung für nachtaktive Hamster ruhig geplant wird und warum kurze Kontrollen am Abend oft sinnvoller sind.",
    tags: ["Hamster", "Kleintier", "Nachtaktiv"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-hamsterbetreuung-abends.jpg",
      alt: "Hamster sitzt abends in einem naturnahen Gehege mit Laufrad, Versteck, Wasser und kleiner Futterportion",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Hamsterbetreuung respektiert den Schlafrhythmus",
        intro:
          "Hamster sind meist abends und nachts aktiv. Gute Betreuung versucht nicht, den Hamster tagsüber zu wecken, sondern plant Kontrolle und Versorgung so, dass das Tier möglichst wenig Stress hat.",
        items: [
          "Lege Besuchszeiten eher auf den Abend, wenn dein Hamster normalerweise aktiv wird.",
          "Beschreibe, wann dein Hamster gewöhnlich aus dem Versteck kommt und was für ihn normal ist.",
          "Bitte Betreuer, den Hamster nicht aus Schlafhaus oder Tunnel zu holen.",
          "Erkläre, ob Sichtkontakt nötig ist oder ob Futter, Wasser und Spuren im Gehege als Kontrolle reichen.",
        ],
      },
      {
        title: "Futter und Wasser genau dosieren",
        intro:
          "Bei Hamstern sind kleine Mengen entscheidend. Zu viel Frischfutter oder falsche Sorten können mehr schaden als helfen.",
        items: [
          "Notiere die genaue Menge Trockenfutter und ob sie täglich oder in bestimmten Abständen gegeben wird.",
          "Beschreibe, welches Frischfutter erlaubt ist und wie klein die Portion sein soll.",
          "Erkläre, ob gebunkertes Futter entfernt werden darf oder bewusst liegen bleiben soll.",
          "Zeige, wie Wasserflasche oder Napf geprüft, gereinigt und nachgefüllt werden.",
        ],
      },
      {
        title: "Gehege nur gezielt kontrollieren",
        intro:
          "Hamstergehege sollten nicht unnötig umgeräumt werden. Für die Betreuung reicht oft eine kurze, ruhige Kontrolle der wichtigsten Stellen.",
        items: [
          "Zeige Futterplatz, Sandbad, Laufrad, Wasser, Schlafbereich und mögliche Toilettenecke.",
          "Erkläre, welche Stellen kontrolliert werden sollen und welche Bereiche ungestört bleiben.",
          "Bitte darum, Laufrad, Deckel, Türen und schwere Einrichtung auf Sicherheit zu prüfen.",
          "Wenn Reinigung nötig ist, sollte nur punktuell gereinigt werden, damit der vertraute Geruch erhalten bleibt.",
        ],
      },
      {
        title: "Warnzeichen bei Hamstern richtig einordnen",
        intro:
          "Ein Hamster muss nicht bei jedem Besuch sichtbar sein. Trotzdem gibt es Hinweise, die Betreuer ernst nehmen und melden sollten.",
        items: [
          "Auffällig sind Futter, das gar nicht angerührt wird, fehlende Aktivität über längere Zeit oder stark veränderte Atmung.",
          "Auch Durchfall, nasses Fell, Verletzungen oder ein verschmutzter Schlafbereich sollten sofort gemeldet werden.",
          "Hinterlege Tierarzt, Notdienst, Transportbox und klare Regeln, wann angerufen werden soll.",
          "Bitte um kurze Updates zu Futter, Wasser, Gehegezustand und sichtbaren Spuren von Aktivität.",
        ],
      },
      {
        title: "So beschreibst du Hamsterbetreuung im Inserat",
        intro:
          "Ein gutes Hamster-Inserat erklärt vor allem Rhythmus, Gehege und Grenzen. So melden sich Betreuer, die mit nachtaktiven Kleintieren ruhig umgehen können.",
        items: [
          "Nenne Zeitraum, PLZ-Region, gewünschte Besuchstage und bevorzugte Uhrzeit am Abend.",
          "Beschreibe Futter, Wasser, Gehege, Sichtkontrolle und was nicht angefasst werden soll.",
          "Schreibe dazu, ob Erfahrung mit Hamstern oder Kleintieren gewünscht ist.",
          "Vereinbare vor längerer Betreuung einen kurzen Probetermin, damit alles einmal ruhig gezeigt werden kann.",
        ],
      },
    ],
  },
  {
    slug: "kleintier-gehege-kontrollieren",
    title: "Kleintier-Gehege kontrollieren",
    categorySlug: "kleintiere",
    careCategorySlug: "kleintier",
    excerpt: "Eine praktische Checkliste für Wasser, Einstreu, Temperatur, Rückzugsorte und sichere Bereiche bei der Kleintierbetreuung.",
    tags: ["Gehege", "Kleintier", "Sicherheit"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-kleintier-gehege-kontrollieren.jpg",
      alt: "Sauberes Kleintier-Gehege in einer hellen Wohnung mit Heu, Wasser, Versteck, Einstreu und Thermometer",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum der Gehege-Check mehr ist als Saubermachen",
        intro:
          "Ein Kleintier-Gehege zeigt oft sehr schnell, ob die Betreuung gut läuft. Wasser, Futterstellen, Einstreu, Temperatur und Rückzugsorte geben wichtige Hinweise darauf, ob das Tier sicher und entspannt versorgt ist.",
        items: [
          "Beschreibe im Inserat, welche Tierart im Gehege lebt und ob es besondere Bedürfnisse gibt.",
          "Lege fest, welche Punkte bei jedem Besuch kontrolliert werden müssen.",
          "Erkläre, was für dein Tier normal aussieht und welche Veränderungen gemeldet werden sollen.",
          "Halte Zubehör wie Streu, Müllbeutel, Besen, Futter und Wasser gut sichtbar bereit.",
        ],
      },
      {
        title: "Wasser, Futterstelle und Heu prüfen",
        intro:
          "Die wichtigsten Kontrollpunkte sind schnell erledigt, wenn sie eindeutig vorbereitet sind. Betreuer sollten nicht suchen müssen, wo Wasser gewechselt, Heu nachgelegt oder Futterreste entfernt werden.",
        items: [
          "Zeige, ob Wassernapf, Trinkflasche oder beides genutzt wird und wie oft Wasser gewechselt werden soll.",
          "Notiere, wo Heu, Futter, Frischfutter und erlaubte Snacks liegen.",
          "Bitte darum, verschmutztes Futter oder welke Reste zuverlässig zu entfernen.",
          "Erkläre, ob das Tier Futter bunkert und welche Vorräte bewusst nicht weggeräumt werden sollen.",
        ],
      },
      {
        title: "Einstreu und Toilettenecken richtig einschätzen",
        intro:
          "Nicht jedes Gehege muss bei jedem Besuch komplett gereinigt werden. Oft ist punktuelles Reinigen besser, weil vertraute Gerüche und stabile Bereiche erhalten bleiben.",
        items: [
          "Markiere, welche Stellen täglich kontrolliert und welche nur nach Bedarf gereinigt werden.",
          "Erkläre, wo frische Einstreu liegt und wie viel nachgefüllt werden soll.",
          "Bitte um Rückmeldung bei auffälligem Geruch, nassen Flächen oder ungewöhnlichem Kot.",
          "Achte darauf, dass Häuschen, Tunnel und Futterplätze nach der Reinigung wieder an ihrem Ort stehen.",
        ],
      },
      {
        title: "Temperatur, Licht und Sicherheit im Blick behalten",
        intro:
          "Viele Kleintiere reagieren empfindlich auf Hitze, Zugluft oder direkte Sonne. Ein guter Gehege-Check berücksichtigt deshalb auch die Umgebung.",
        items: [
          "Nenne Temperaturbereiche, die für dein Tier angenehm sind, und was bei Hitze oder Kälte passieren soll.",
          "Beschreibe, ob Fenster, Heizung, Ventilator oder direkte Sonne problematisch sein können.",
          "Bitte den Betreuer, Türen, Gitter, Deckel und Auslaufbereiche bei jedem Besuch zu prüfen.",
          "Entferne vor der Betreuung Kabel, giftige Pflanzen und lose Gegenstände aus erreichbarer Nähe.",
        ],
      },
      {
        title: "So wird aus dem Check eine gute Übergabe",
        intro:
          "Ein Gehege-Check ist am besten, wenn er immer gleich abläuft. Das spart Zeit und verhindert, dass wichtige Details vergessen werden.",
        items: [
          "Erstelle eine kurze Reihenfolge: Wasser, Futter, Einstreu, Temperatur, Sicherheit, Tier beobachten.",
          "Bitte um ein Update, wenn etwas verändert, gereinigt oder nachgefüllt wurde.",
          "Hinterlege Tierarzt, Notfallkontakt und klare Regeln für auffälliges Verhalten.",
          "Prüfe nach dem ersten Termin, ob die Liste verständlich war oder noch vereinfacht werden sollte.",
        ],
      },
    ],
  },
  {
    slug: "kleintiere-fuettern-ohne-fehler",
    title: "Kleintiere füttern ohne typische Fehler",
    categorySlug: "kleintiere",
    careCategorySlug: "kleintier",
    excerpt: "Warum genaue Mengen, passende Sorten, klare Verbote und feste Futterzeiten in der Kleintierbetreuung so wichtig sind.",
    tags: ["Fütterung", "Kleintier", "Checkliste"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-kleintiere-fuettern-ohne-fehler.jpg",
      alt: "Vorbereitete Kleintier-Fütterung mit Heu, Wasser, frischen Kräutern, Gemüseportionen und sauberem Gehege im Hintergrund",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Fütterung braucht klare Mengen statt Bauchgefühl",
        intro:
          "Bei Kleintieren können kleine Futterfehler schnell groß werden. Deshalb sollten Betreuer nicht nach Gefühl füttern, sondern genaue Angaben zu Menge, Sorte, Uhrzeit und Ausnahmen bekommen.",
        items: [
          "Notiere pro Tierart und pro Tag, welche Menge Heu, Frischfutter, Trockenfutter oder Snacks erlaubt ist.",
          "Lege Futter sichtbar bereit und trenne Alltagsfutter von Reserve oder Spezialfutter.",
          "Erkläre, ob Futterreste entfernt werden sollen und wann neues Futter nachgelegt wird.",
          "Schreibe dazu, ob das Tier normalerweise sofort frisst oder Futter später aufnimmt.",
        ],
      },
      {
        title: "Erlaubte Sorten und Verbote eindeutig aufschreiben",
        intro:
          "Viele Missverständnisse entstehen, weil Betreuer nett gemeinte Extras geben. Bei Kleintieren ist aber nicht jedes Gemüse, Obst oder Kraut geeignet.",
        items: [
          "Erstelle eine kurze Liste mit erlaubten Sorten, die dein Tier sicher kennt und verträgt.",
          "Schreibe verbotene oder unverträgliche Sorten deutlich auf, statt sie nur mündlich zu erwähnen.",
          "Bitte Betreuer, nichts Neues auszuprobieren, solange du nicht erreichbar bist.",
          "Wenn mehrere Tierarten betreut werden, trenne die Futterlisten klar voneinander.",
        ],
      },
      {
        title: "Heu, Wasser und Frischfutter getrennt betrachten",
        intro:
          "Eine gute Fütterungsroutine besteht aus mehreren Teilen. Heu, Wasser und Frischfutter erfüllen unterschiedliche Aufgaben und sollten nicht in einen einzigen Punkt gepackt werden.",
        items: [
          "Heu sollte bei Kaninchen und Meerschweinchen jederzeit gut erreichbar und sauber sein.",
          "Wasser muss frisch sein, auch wenn der Napf oder die Flasche noch gefüllt wirkt.",
          "Frischfutter sollte sauber, bekannt und in passender Menge vorbereitet werden.",
          "Snacks und Trockenfutter sollten nur nach Plan gegeben werden, nicht als Beschäftigung aus Unsicherheit.",
        ],
      },
      {
        title: "Gruppen und Spezialfutter nicht verwechseln",
        intro:
          "Wenn mehrere Tiere zusammenleben, bekommt nicht automatisch jedes Tier dasselbe. Alter, Krankheit, Gewicht oder Futterneid können die Betreuung anspruchsvoller machen.",
        items: [
          "Beschreibe, welches Tier welches Futter bekommt und woran es sicher erkannt wird.",
          "Erkläre, ob Tiere getrennt gefüttert oder beim Fressen beobachtet werden müssen.",
          "Markiere Medikamente, Päppelfutter oder Spezialfutter besonders eindeutig.",
          "Bitte um Rückmeldung, wenn ein Tier gar nicht frisst oder regelmäßig verdrängt wird.",
        ],
      },
      {
        title: "So klingt ein gutes Fütterungs-Inserat",
        intro:
          "Ein gutes Inserat zur Kleintierfütterung zeigt, dass die Aufgabe ernst genommen wird. Das zieht Betreuer an, die sorgfältig arbeiten und nicht improvisieren.",
        items: [
          "Nenne Tierart, Anzahl der Tiere, Zeitraum, PLZ-Region und gewünschte Besuchshäufigkeit.",
          "Beschreibe Futterarten, Frischfutter, Wasser, Reinigung und gewünschte Rückmeldung.",
          "Ergänze, ob Erfahrung mit Kleintieren oder empfindlicher Fütterung wichtig ist.",
          "Bitte um ein Kennenlernen, wenn mehrere Tiere, Spezialfutter oder Medikamente im Spiel sind.",
        ],
      },
    ],
  },
  {
    slug: "vogelbetreuung-voliere",
    title: "Vogelbetreuung: Käfig und Voliere prüfen",
    categorySlug: "voegel",
    careCategorySlug: "vogel",
    excerpt: "Wasser, Futter, Käfig, Voliere, Freiflug-Regeln und Umgebung so vorbereiten, dass Vogelbetreuung sicher abläuft.",
    tags: ["Vogel", "Voliere", "Betreuung"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-vogelbetreuung-voliere.jpg",
      alt: "Zwei Wellensittiche in einer hellen Wohnung in einem sauberen Vogelkäfig mit Wasser, Futter, Sitzstangen und Spielzeug",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Vogelbetreuung beginnt mit einer sicheren Umgebung",
        intro:
          "Vögel reagieren empfindlich auf offene Fenster, ungewohnte Geräusche und Veränderungen im Käfig. Eine gute Betreuung prüft deshalb nicht nur Futter und Wasser, sondern auch Umgebung, Türen und Freiflug-Regeln.",
        items: [
          "Beschreibe, welche Vogelart betreut wird und wie viele Tiere im Käfig oder in der Voliere leben.",
          "Erkläre, welche Türen, Fenster und Vorhänge während des Besuchs geschlossen bleiben müssen.",
          "Nenne typische Geräusche oder Verhaltensweisen, damit Betreuer Normalität besser einschätzen können.",
          "Halte fest, ob die Vögel handzahm sind oder grundsätzlich Abstand brauchen.",
        ],
      },
      {
        title: "Wasser und Futter täglich klar kontrollieren",
        intro:
          "Bei Vogelbetreuung wirken Näpfe manchmal noch gefüllt, obwohl Schalen oder Verunreinigungen darin liegen. Betreuer sollten genau wissen, was gewechselt und gereinigt wird.",
        items: [
          "Zeige, wo frisches Wasser, Futter, Kolbenhirse, Mineralien und Reinigungsmaterial liegen.",
          "Erkläre, welche Näpfe täglich geleert, gereinigt und neu befüllt werden.",
          "Bitte um Kontrolle, ob Futterstellen sauber und erreichbar sind.",
          "Schreibe auf, welche Snacks erlaubt sind und was nicht zusätzlich gegeben werden soll.",
        ],
      },
      {
        title: "Käfig, Voliere und Sitzplätze prüfen",
        intro:
          "Ein kurzer Blick in Käfig oder Voliere reicht oft nicht. Sitzstangen, Spielzeug, Boden, Türen und Näpfe sollten ruhig, aber vollständig kontrolliert werden.",
        items: [
          "Bitte den Betreuer, Türen, Verschlüsse, Futterklappen und lose Teile zu prüfen.",
          "Erkläre, wie Bodenpapier, Sand oder Einstreu gereinigt werden soll.",
          "Nenne Spielzeug oder Sitzplätze, die nicht umgehängt werden dürfen.",
          "Achte darauf, dass nach der Kontrolle alle Klappen sicher geschlossen sind.",
        ],
      },
      {
        title: "Freiflug nur nach klaren Regeln",
        intro:
          "Freiflug kann für Vögel wichtig sein, ist aber nicht automatisch Teil jeder Betreuung. Wenn Betreuer unsicher sind, ist ein klarer Rahmen besser als spontane Entscheidungen.",
        items: [
          "Lege fest, ob während der Betreuung Freiflug erlaubt ist oder nicht.",
          "Wenn Freiflug erlaubt ist, beschreibe Raum, Dauer, Fenster, Türen und Rückkehr in den Käfig.",
          "Erkläre, ob die Vögel zuverlässig zurückgehen oder Futter als Signal nutzen.",
          "Bei kurzen Urlaubsbesuchen kann es sicherer sein, Freiflug nur erfahrenen Betreuern zu erlauben.",
        ],
      },
      {
        title: "Updates und Warnzeichen bei Vögeln",
        intro:
          "Vögel können Krankheitssymptome lange verstecken. Eine kurze tägliche Rückmeldung hilft, Veränderungen schneller zu erkennen.",
        items: [
          "Wichtig sind aufgeplustertes Sitzen, Atemgeräusche, Appetitverlust, Durchfall oder ungewöhnliche Ruhe.",
          "Bitte um Updates zu Futter, Wasser, Aktivität, Kotbild und ob alle Tiere normal wirken.",
          "Hinterlege vogelkundigen Tierarzt, Notdienst, Transportbox und Ersatzkontakt.",
          "Schreibe klar, wann der Betreuer sofort anrufen soll und wann eine kurze Nachricht reicht.",
        ],
      },
    ],
  },
  {
    slug: "papagei-betreuung-beschaeftigung",
    title: "Papagei betreuen: Beschäftigung und Respekt",
    categorySlug: "voegel",
    careCategorySlug: "vogel",
    excerpt: "Warum Beschäftigung, Abstand, Stimme, Futter und klare Grenzen bei der Papageienbetreuung besonders wichtig sind.",
    tags: ["Papagei", "Vogel", "Verhalten"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-papagei-betreuung-beschaeftigung.jpg",
      alt: "Papagei sitzt ruhig auf einem Naturholz-Freiständer in einer hellen Wohnung mit Spielzeug, Wasser und Futter",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Papageienbetreuung braucht Respekt vor Persönlichkeit",
        intro:
          "Papageien sind aufmerksam, lernstark und oft sehr deutlich in ihrer Körpersprache. Gute Betreuung bedeutet deshalb nicht, möglichst viel Kontakt zu erzwingen, sondern Grenzen, Routinen und Stimmung des Vogels ernst zu nehmen.",
        items: [
          "Beschreibe, ob dein Papagei handzahm ist oder lieber Abstand hält.",
          "Erkläre, welche Gesten, Geräusche oder Bewegungen bei ihm Unsicherheit zeigen.",
          "Lege fest, ob der Betreuer den Vogel anfassen darf oder nur versorgen soll.",
          "Bitte darum, nicht zu testen, was möglich ist, sondern die bekannten Regeln einzuhalten.",
        ],
      },
      {
        title: "Beschäftigung sinnvoll vorbereiten",
        intro:
          "Papageien brauchen Beschäftigung, aber nicht jede neue Idee passt in eine Betreuung. Sicherer ist eine kleine Auswahl bekannter Dinge, die ohne Stress genutzt werden können.",
        items: [
          "Lege erlaubtes Spielzeug, Kauholz oder Futterbeschäftigung sichtbar bereit.",
          "Erkläre, welche Gegenstände nur unter Aufsicht angeboten werden dürfen.",
          "Schreibe auf, ob Musik, Ansprache oder ruhige Anwesenheit deinem Papagei helfen.",
          "Vermeide neue Experimente während Urlaubsbetreuung, wenn du nicht erreichbar bist.",
        ],
      },
      {
        title: "Futter, Wasser und Sauberkeit genau regeln",
        intro:
          "Bei Papageien können Futtermischungen, Frischfutter und Wasser schnell verwechselt werden. Eine klare Übergabe verhindert, dass aus gut gemeinten Extras ein Problem wird.",
        items: [
          "Notiere genau, welche Körner, Pellets, Obst- oder Gemüsesorten erlaubt sind.",
          "Erkläre, welche Näpfe täglich gereinigt und neu befüllt werden müssen.",
          "Beschreibe, ob Frischfutter nach einer bestimmten Zeit entfernt werden soll.",
          "Schreibe dazu, welche Lebensmittel ausdrücklich tabu sind und nicht angeboten werden dürfen.",
        ],
      },
      {
        title: "Sicherheit bei Käfig, Freisitz und Raum",
        intro:
          "Papageien sind kräftig und neugierig. Betreuer sollten deshalb wissen, welche Türen, Verschlüsse, Fenster, Kabel und Gegenstände bei jedem Besuch geprüft werden.",
        items: [
          "Zeige Käfigtüren, Futterschieber, Freisitz, Spielbereich und sichere Landepunkte.",
          "Erkläre, ob Fenster, Spiegel, Pflanzen oder bestimmte Möbel tabu sind.",
          "Bitte darum, Verschlüsse nach jeder Versorgung bewusst zu kontrollieren.",
          "Wenn Freiflug erlaubt ist, beschreibe genau, wie der Vogel zurückkehrt und wann nicht geöffnet wird.",
        ],
      },
      {
        title: "Updates und Warnzeichen bei Papageien",
        intro:
          "Papageien zeigen Stress und Krankheit manchmal nur subtil. Gute Betreuer melden Veränderungen sachlich, statt sie zu übergehen oder selbst zu interpretieren.",
        items: [
          "Wichtig sind veränderte Atmung, starkes Rupfen, ungewöhnliche Ruhe, Appetitverlust oder veränderte Ausscheidungen.",
          "Bitte um Updates zu Futter, Wasser, Aktivität, Stimme und allgemeinem Eindruck.",
          "Hinterlege vogelkundigen Tierarzt, Notdienst, Transportbox und Ersatzkontakt.",
          "Schreibe klar auf, wann sofort angerufen werden soll und wann eine kurze Nachricht reicht.",
        ],
      },
    ],
  },
  {
    slug: "wellensittich-urlaub",
    title: "Wellensittich im Urlaub versorgen lassen",
    categorySlug: "voegel",
    careCategorySlug: "vogel",
    excerpt: "So bereitest du Futter, Wasser, Licht, Käfigreinigung und Updates vor, wenn Wellensittiche im Urlaub versorgt werden.",
    tags: ["Wellensittich", "Vogel", "Urlaub"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-wellensittich-urlaub.jpg",
      alt: "Zwei Wellensittiche sitzen in einer hellen Wohnung in einem sauberen Käfig mit Wasser, Futter, Spielzeug und Reisetasche im Hintergrund",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Urlaubsbetreuung für Wellensittiche früh planen",
        intro:
          "Wellensittiche brauchen auch während deiner Reise feste Abläufe. Je klarer Futter, Wasser, Licht, Reinigung und Freiflug vorab geregelt sind, desto entspannter wird die Betreuung für Mensch und Tier.",
        items: [
          "Plane ein Kennenlernen vor der Reise, damit Käfig, Futter und Besonderheiten ruhig gezeigt werden können.",
          "Nenne Reisedauer, Besuchshäufigkeit und ob tägliche oder regelmäßige Kontrolle gewünscht ist.",
          "Beschreibe, wie viele Wellensittiche betreut werden und woran man sie unterscheiden kann.",
          "Lege fest, wie oft Updates kommen sollen und wer im Notfall erreichbar ist.",
        ],
      },
      {
        title: "Futter, Wasser und Zusätze vorbereiten",
        intro:
          "Bei Wellensittichen wirken Näpfe manchmal noch voll, obwohl nur Spelzen übrig sind. Betreuer sollten deshalb genau wissen, wie Futter kontrolliert wird.",
        items: [
          "Zeige Körnerfutter, Frischfutter, Kolbenhirse, Mineralien und alles, was ausdrücklich nicht gegeben werden soll.",
          "Erkläre, wie Näpfe geleert, gereinigt und neu befüllt werden.",
          "Bitte darum, Wasser täglich frisch zu geben und verschmutzte Stellen zu prüfen.",
          "Schreibe auf, ob Frischfutter erlaubt ist und nach welcher Zeit Reste entfernt werden.",
        ],
      },
      {
        title: "Licht, Ruhe und Tagesrhythmus klären",
        intro:
          "Wellensittiche orientieren sich stark an Licht und Routine. Während des Urlaubs sollte klar sein, wie hell der Raum ist und wann Ruhe einkehrt.",
        items: [
          "Beschreibe, ob Rollläden, Vorhänge oder Lampen bedient werden sollen.",
          "Erkläre, wann die Vögel normalerweise aktiv sind und wann sie Ruhe brauchen.",
          "Nenne, ob Radio, leise Geräusche oder Stille für deine Tiere normal sind.",
          "Bitte Betreuer, keine plötzlichen Veränderungen an Standort oder Käfigeinrichtung vorzunehmen.",
        ],
      },
      {
        title: "Käfigreinigung ohne unnötigen Stress",
        intro:
          "Eine kurze Reinigung hält die Umgebung gesund, sollte aber nicht den ganzen Käfig durcheinanderbringen. Wichtig ist ein ruhiger, wiederholbarer Ablauf.",
        items: [
          "Erkläre, wie Bodenpapier, Sand oder Einstreu gewechselt werden soll.",
          "Zeige Reinigungsmaterial, Müllbeutel und Ersatznäpfe.",
          "Bitte darum, Türen und Futterklappen nach jeder Reinigung bewusst zu schließen.",
          "Nenne Spielzeug oder Sitzstangen, die nicht umgesetzt werden sollen.",
        ],
      },
      {
        title: "Freiflug und Warnzeichen im Urlaub",
        intro:
          "Ob Freiflug während deiner Abwesenheit sinnvoll ist, hängt von Erfahrung, Raum und Rückkehrverhalten ab. Für viele kurze Urlaubsbetreuungen ist eine klare Grenze sicherer.",
        items: [
          "Lege eindeutig fest, ob Freiflug erlaubt ist oder während des Urlaubs ausgesetzt wird.",
          "Wenn Freiflug erlaubt ist, beschreibe Raum, Fenster, Türen und Rückkehr in den Käfig.",
          "Auffällig sind aufgeplustertes Sitzen, Atemgeräusche, Futterverweigerung oder ungewöhnliche Ruhe.",
          "Hinterlege vogelkundigen Tierarzt, Transportbox und eine Ersatzperson für schnelle Entscheidungen.",
        ],
      },
    ],
  },
  {
    slug: "vogel-freiflug-regeln",
    title: "Freiflug-Regeln für Vogelbetreuung",
    categorySlug: "voegel",
    careCategorySlug: "vogel",
    excerpt: "Wann Freiflug in der Vogelbetreuung sinnvoll ist, welche Raumregeln gelten und wann Betreuer lieber klare Grenzen einhalten.",
    tags: ["Freiflug", "Vogel", "Sicherheit"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-vogel-freiflug-regeln.jpg",
      alt: "Zwei Wellensittiche sitzen auf einem Freisitz in einer hellen, sicher vorbereiteten Wohnung neben einem geöffneten Käfig",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Freiflug ist kein Automatismus",
        intro:
          "Freiflug kann wichtig für Vögel sein, ist aber nicht automatisch Teil jeder Betreuung. Entscheidend ist, ob Raum, Betreuerfahrung, Rückkehrverhalten und Zeitfenster wirklich passen.",
        items: [
          "Lege im Inserat klar fest, ob Freiflug gewünscht, erlaubt oder während der Betreuung ausgeschlossen ist.",
          "Beschreibe, welche Vogelart betreut wird und wie sicher sie in den Käfig zurückkehrt.",
          "Erkläre, ob die Vögel auf Menschen reagieren, auf Stöckchen gehen oder nur selbstständig zurückkehren.",
          "Wenn der Betreuer unsicher ist, sollte Versorgung ohne Freiflug die sichere Grundregel sein.",
        ],
      },
      {
        title: "Den Raum vor jedem Freiflug sichern",
        intro:
          "Ein sicherer Freiflug-Raum muss vorbereitet sein, bevor die Käfigtür aufgeht. Betreuer brauchen dafür eine klare Checkliste, nicht nur den Hinweis: Fenster zu.",
        items: [
          "Fenster, Türen, Balkonzugänge und gekippte Fenster müssen geschlossen oder sicher abgedeckt sein.",
          "Gefährliche Pflanzen, offene Gefäße, heiße Flächen und Kabel sollten nicht erreichbar sein.",
          "Spiegel, große Glasflächen oder dunkle Ecken können je nach Vogel abgesichert werden müssen.",
          "Andere Tiere und uninformierte Personen sollten während des Freiflugs nicht im Raum sein.",
        ],
      },
      {
        title: "Dauer, Rückkehr und Lockmittel klären",
        intro:
          "Viele Probleme entstehen nicht beim Start, sondern beim Beenden des Freiflugs. Deshalb sollte vorher klar sein, wie lange der Freiflug dauert und wie die Vögel zurückfinden.",
        items: [
          "Nenne eine realistische Dauer und einen Zeitpunkt, an dem nicht mehr neu geöffnet wird.",
          "Beschreibe, ob Futter, Licht, Stimme oder ein bestimmter Sitzplatz bei der Rückkehr helfen.",
          "Erkläre, was der Betreuer nicht tun soll, etwa hektisches Jagen oder Greifen.",
          "Plane genug Zeit ein, damit die Rückkehr nicht unter Druck passieren muss.",
        ],
      },
      {
        title: "Wann Freiflug besser ausgesetzt wird",
        intro:
          "Manchmal ist kein Freiflug die bessere Entscheidung. Das gilt besonders, wenn Betreuung kurz, unerfahren oder die Situation ungewohnt ist.",
        items: [
          "Bei Krankheit, Stress, Umzug, neuen Vögeln oder unsicherem Rückkehrverhalten sollte Freiflug pausieren.",
          "Wenn Fenster, Türen oder Raum nicht zuverlässig gesichert werden können, bleibt der Käfig geschlossen.",
          "Auch bei sehr kurzen Besuchen kann Freiflug mehr Risiko als Nutzen bringen.",
          "Schreibe diese Grenzen freundlich, aber eindeutig in die Übergabe.",
        ],
      },
      {
        title: "Freiflug-Regeln im Inserat formulieren",
        intro:
          "Ein gutes Inserat vermeidet Missverständnisse. Betreuer sollen direkt erkennen, ob Freiflug Teil der Aufgabe ist und welche Erfahrung dafür nötig ist.",
        items: [
          "Nutze klare Formulierungen wie: Freiflug nur nach Kennenlernen und mit Erfahrung.",
          "Beschreibe Raum, Dauer, Rückkehrverhalten und Sicherheitsregeln kompakt.",
          "Ergänze, ob Fotos oder Updates während des Freiflugs gewünscht sind oder danach reichen.",
          "Bitte um Rückfragen, wenn ein Betreuer mit einer Regel unsicher ist, statt spontane Entscheidungen zu treffen.",
        ],
      },
    ],
  },
  {
    slug: "aquarium-urlaub-checkliste",
    title: "Aquarium im Urlaub: Checkliste für Betreuer",
    categorySlug: "aquarium",
    careCategorySlug: "aquarium",
    excerpt: "So bereitest du Fütterung, Technik, Licht, Temperatur und sichtbare Warnzeichen vor, damit dein Aquarium im Urlaub stabil bleibt.",
    tags: ["Aquarium", "Urlaub", "Fische"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-aquarium-urlaub-checkliste.jpg",
      alt: "Gepflegtes bepflanztes Aquarium in einer hellen Wohnung mit vorbereiteten Futterportionen, Timer und Notizbuch für die Urlaubsbetreuung",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Urlaubsbetreuung beim Aquarium braucht Stabilität",
        intro:
          "Ein Aquarium läuft am besten, wenn während deiner Abwesenheit möglichst wenig verändert wird. Gute Urlaubsbetreuung hält die Routine stabil und greift nur dann ein, wenn klare Warnzeichen auftreten.",
        items: [
          "Erkläre, welche Aufgaben wirklich erledigt werden sollen und welche bewusst nicht angefasst werden.",
          "Plane vor dem Urlaub keine großen Umbauten, neuen Tiere oder ungewohnten Pflegeschritte ein.",
          "Beschreibe, wie dein Aquarium im Normalzustand aussieht: Wasserstand, Strömung, Licht und Fischverhalten.",
          "Hinterlege eine einfache Reihenfolge für jeden Besuch: ansehen, Technik prüfen, füttern, Auffälligkeiten melden.",
        ],
      },
      {
        title: "Fütterung vorportionieren statt frei dosieren",
        intro:
          "Zu viel Futter ist während Urlaubsbetreuung eines der häufigsten Risiken. Betreuer sollten nicht abschätzen müssen, sondern fertige Portionen und klare Tage bekommen.",
        items: [
          "Bereite kleine Portionen für jeden Fütterungstag vor und beschrifte sie nach Reihenfolge oder Datum.",
          "Schreibe auf, ob täglich, alle zwei Tage oder nur an bestimmten Tagen gefüttert wird.",
          "Erkläre, welche Futtersorten genutzt werden und was nicht zusätzlich gegeben werden soll.",
          "Bitte darum, Futterreste, trübes Wasser oder ungewöhnliches Fressverhalten direkt zu melden.",
        ],
      },
      {
        title: "Technik, Licht und Temperatur kontrollieren",
        intro:
          "Viele Aquarium-Probleme entstehen nicht durch die Fische selbst, sondern durch Technik. Filter, Heizung, Licht und Wasserstand sollten deshalb leicht verständlich erklärt werden.",
        items: [
          "Zeige Filter, Heizung, Beleuchtung, Zeitschaltuhr, Thermometer und Steckdosenleiste.",
          "Notiere den normalen Temperaturbereich und ab wann eine Rückmeldung nötig ist.",
          "Erkläre, welche Geräusche oder Bewegungen am Filter normal sind und welche nicht.",
          "Bitte Betreuer, keine Technik auszuschalten, umzustecken oder zu reinigen, wenn das nicht ausdrücklich vereinbart ist.",
        ],
      },
      {
        title: "Sichtbare Warnzeichen im Aquarium erkennen",
        intro:
          "Betreuer müssen keine Aquaristik-Profis sein, sollten aber wissen, welche Veränderungen auffallen und gemeldet werden müssen.",
        items: [
          "Auffällig sind trübes Wasser, starke Gerüche, tote Tiere, hektisches Atmen oder Fische an der Oberfläche.",
          "Auch ausgefallene Strömung, ungewöhnliche Temperatur oder plötzlich dunkles Becken gehören in die Rückmeldung.",
          "Erkläre, ob einzelne Fische normalerweise versteckt leben oder ob das neu wäre.",
          "Bitte um kurze Fotos oder Videos nur dann, wenn es ruhig möglich ist und die Situation dadurch verständlicher wird.",
        ],
      },
      {
        title: "Notfallplan und Übergabe einfach halten",
        intro:
          "Eine gute Aquarium-Übergabe ist nicht lang, sondern eindeutig. Betreuer brauchen klare Grenzen, Kontakte und einen Plan für Auffälligkeiten.",
        items: [
          "Hinterlege eine erreichbare Person, die sich mit deinem Aquarium auskennt.",
          "Notiere, welche Maßnahmen erlaubt sind, etwa Wasser nachfüllen oder nur melden.",
          "Lege Zubehör wie Futter, Wasseraufbereiter oder Ersatztechnik sichtbar, aber getrennt von Dingen, die nicht genutzt werden sollen.",
          "Prüfe nach der Reise gemeinsam, ob die Checkliste für den nächsten Urlaub noch einfacher werden kann.",
        ],
      },
    ],
  },
  {
    slug: "fische-fuettern-betreuung",
    title: "Fische füttern: weniger ist oft sicherer",
    categorySlug: "aquarium",
    careCategorySlug: "fisch",
    excerpt: "Warum genaue Portionen, klare Fütterungstage und ruhige Beobachtung bei der Fischbetreuung wichtiger sind als gut gemeinte Extras.",
    tags: ["Fisch", "Fütterung", "Aquarium"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-fische-fuettern-betreuung.jpg",
      alt: "Gepflegtes Süßwasseraquarium mit ruhigen Fischen und vorbereiteten kleinen Futterportionen vor dem Becken",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Warum weniger Futter oft sicherer ist",
        intro:
          "Bei Fischbetreuung entsteht schnell der Impuls, lieber etwas mehr zu füttern. Genau das kann aber Wasserqualität und Tiere belasten. Gute Betreuung hält sich an kleine, klare Portionen.",
        items: [
          "Erkläre, dass Betreuer keine zusätzlichen Portionen geben sollen, auch wenn die Fische aktiv wirken.",
          "Beschreibe, wie viel Futter pro Termin wirklich nötig ist.",
          "Lege fest, ob ein oder mehrere Fastentage während der Betreuung geplant sind.",
          "Schreibe dazu, dass Fische oft betteln wirken, obwohl sie nicht mehr Futter brauchen.",
        ],
      },
      {
        title: "Portionen vorbereiten und Fehler vermeiden",
        intro:
          "Vorportioniertes Futter nimmt Druck aus der Betreuung. So muss niemand schätzen, vergleichen oder spontan entscheiden.",
        items: [
          "Bereite Futter für jeden Termin in kleinen Behältern oder eindeutiger Reihenfolge vor.",
          "Trenne Flockenfutter, Granulat, Frostfutter oder Spezialfutter klar voneinander.",
          "Notiere, welche Portion für welche Fische oder welches Becken gedacht ist.",
          "Entferne große Vorratsdosen aus der direkten Übergabe, wenn sie nicht genutzt werden sollen.",
        ],
      },
      {
        title: "Fischarten und Fressverhalten kurz erklären",
        intro:
          "Nicht alle Fische fressen gleich. Einige sind schnell an der Oberfläche, andere nehmen Futter später oder am Boden auf. Diese Unterschiede helfen Betreuern beim Einordnen.",
        items: [
          "Beschreibe, welche Fische oben, mittig oder am Boden fressen.",
          "Erkläre, ob scheue Tiere erst nach einigen Minuten auftauchen.",
          "Nenne, ob Futtertabletten, Granulat oder Frostfutter besonders vorsichtig eingesetzt werden sollen.",
          "Bitte Betreuer, nicht nachzufüttern, nur weil einzelne Fische langsamer sind.",
        ],
      },
      {
        title: "Nach der Fütterung kurz beobachten",
        intro:
          "Eine gute Fütterung endet nicht mit dem Einwerfen des Futters. Ein kurzer Blick danach zeigt, ob alles ruhig bleibt.",
        items: [
          "Bitte um Beobachtung, ob Futter in wenigen Minuten aufgenommen wird oder liegen bleibt.",
          "Auffällig sind hektisches Atmen, Fische an der Oberfläche, Streit oder Futterreste im Bodengrund.",
          "Erkläre, ob Strömung, Filter oder Beleuchtung während der Fütterung unverändert bleiben sollen.",
          "Wenn etwas ungewöhnlich wirkt, sollte der Betreuer melden und nicht eigenständig mehr füttern.",
        ],
      },
      {
        title: "So beschreibst du Fischfütterung im Inserat",
        intro:
          "Ein gutes Inserat zur Fischfütterung ist konkret und beruhigend. Es zeigt, dass die Aufgabe überschaubar ist, aber Sorgfalt braucht.",
        items: [
          "Nenne Anzahl der Becken, Zeitraum, Besuchshäufigkeit und PLZ-Region.",
          "Schreibe, ob nur gefüttert oder zusätzlich Technik und Wasserstand geprüft werden sollen.",
          "Erkläre, dass Portionen vorbereitet sind und keine Erfahrung mit komplizierter Pflege nötig ist, wenn das stimmt.",
          "Bitte um zuverlässige kurze Updates nach den Fütterungsterminen.",
        ],
      },
    ],
  },
  {
    slug: "wasserwerte-im-blick",
    title: "Wasserwerte im Blick behalten",
    categorySlug: "aquarium",
    careCategorySlug: "aquarium",
    excerpt: "Welche sichtbaren Veränderungen Betreuer erkennen, wann Wasserwerte geprüft werden sollten und welche Auffälligkeiten sofort gemeldet werden.",
    tags: ["Wasserwerte", "Aquarium", "Kontrolle"],
    readingMinutes: 8,
    publishedAt: "2026-07-06",
    image: {
      src: "/images/generated/guide-wasserwerte-im-blick.jpg",
      alt: "Gepflegtes bepflanztes Aquarium mit Wasser-Testset, Teststreifen, Thermometer und ruhig schwimmenden Fischen",
      width: 1672,
      height: 941,
    },
    articleSections: [
      {
        title: "Wasserwerte sind auch eine Frage der Beobachtung",
        intro:
          "Betreuer müssen nicht jedes Detail der Aquaristik beherrschen. Trotzdem können sie helfen, Veränderungen früh zu erkennen, wenn du vorher erklärst, was normal ist und was nicht.",
        items: [
          "Beschreibe den normalen Zustand deines Aquariums: Wasserfarbe, Geruch, Strömung, Temperatur und Fischverhalten.",
          "Erkläre, ob Wasserwerte überhaupt gemessen werden sollen oder nur bei Auffälligkeiten.",
          "Lege fest, welche Werte für dich relevant sind und wo Messmaterial liegt.",
          "Bitte darum, Messungen nicht zu interpretieren, sondern Werte oder Fotos an dich weiterzugeben.",
        ],
      },
      {
        title: "Sichtbare Hinweise auf Wasserprobleme",
        intro:
          "Nicht jede Veränderung ist sofort ein Notfall, aber manche Zeichen sollten Betreuer direkt melden. Sichtbare Hinweise sind oft der erste Schritt.",
        items: [
          "Trübes Wasser, milchige Schlieren, ungewöhnlicher Geruch oder Schaum sollten gemeldet werden.",
          "Fische an der Oberfläche, hektisches Atmen oder starkes Scheuern können Warnzeichen sein.",
          "Auch plötzliches Pflanzensterben, viele Algen oder tote Tiere gehören in die Rückmeldung.",
          "Wenn Technik ausfällt, verändern sich Wasserwerte oft schneller, deshalb zählt frühe Meldung.",
        ],
      },
      {
        title: "Messmaterial verständlich vorbereiten",
        intro:
          "Wenn Betreuer Teststreifen oder Tropfentests nutzen sollen, muss der Ablauf sehr einfach sein. Komplizierte Tests gehören nur in erfahrene Hände.",
        items: [
          "Lege Teststreifen, Becher, Anleitung und Entsorgung an einen festen Ort.",
          "Erkläre, ob ein Foto vom Teststreifen reicht oder ob Zahlen notiert werden sollen.",
          "Bitte darum, keine Mittel ins Wasser zu geben, wenn das nicht ausdrücklich vereinbart ist.",
          "Wenn Tropfentests nötig sind, sollte vorher einmal gemeinsam geübt werden.",
        ],
      },
      {
        title: "Temperatur, Wasserstand und Technik mitdenken",
        intro:
          "Wasserwerte hängen eng mit Technik und Umgebung zusammen. Ein kurzer Blick auf Temperatur, Wasserstand und Filter hilft oft mehr als ein spontaner Test.",
        items: [
          "Notiere den normalen Temperaturbereich und ab wann du informiert werden möchtest.",
          "Zeige, welcher Wasserstand normal ist und ob verdunstetes Wasser nachgefüllt werden darf.",
          "Erkläre, wie Filterauslass, Strömung und Heizung im Normalbetrieb aussehen.",
          "Bitte Betreuer, keine Technik zu reinigen oder auszuschalten, wenn sie nicht genau wissen, was sie tun.",
        ],
      },
      {
        title: "So wird Wasserwert-Kontrolle betreuungsfreundlich",
        intro:
          "Die beste Kontrolle ist so einfach, dass sie zuverlässig gemacht wird. Für kurze Betreuung reichen oft klare Beobachtung, Foto und schnelle Rückmeldung.",
        items: [
          "Nutze eine kleine Checkliste mit Wasser, Fischen, Technik, Temperatur und Auffälligkeiten.",
          "Hinterlege eine erfahrene Kontaktperson für Fragen, falls du im Urlaub schlecht erreichbar bist.",
          "Schreibe ins Inserat, ob Aquaristik-Erfahrung nötig ist oder ob eine einfache Sichtkontrolle reicht.",
          "Passe die Übergabe nach der ersten Betreuung an, wenn ein Punkt unnötig kompliziert war.",
        ],
      },
    ],
  },
  {
    slug: "aquarium-technik-ausfall",
    title: "Aquarium-Technik: was bei Ausfall zu tun ist",
    categorySlug: "aquarium",
    careCategorySlug: "aquarium",
    excerpt: "Filter, Heizung, Licht und Notfallkontakt in der Betreuung vorbereiten.",
    tags: ["Aquarium", "Technik", "Notfall"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "reptilienbetreuung-terrarium",
    title: "Reptilienbetreuung: Terrarium richtig übergeben",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "reptil",
    excerpt: "Temperatur, Licht, Futter und Sicherheitsregeln für Betreuer dokumentieren.",
    tags: ["Reptil", "Terrarium", "Klima"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "bartagame-betreuung",
    title: "Bartagame betreuen: Licht, Wärme und Futter",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "reptil",
    excerpt: "Welche Angaben bei Bartagamen in jeder Betreuung stehen sollten.",
    tags: ["Bartagame", "Reptil", "Fütterung"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "schildkroete-urlaub",
    title: "Schildkröte im Urlaub betreuen lassen",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "reptil",
    excerpt: "Routinen für Futter, Wärme, Wasser und Beobachtung verständlich aufschreiben.",
    tags: ["Schildkröte", "Urlaub", "Reptil"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "amphibienbetreuung-feuchtigkeit",
    title: "Amphibienbetreuung: Feuchtigkeit zuerst",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "amphibie",
    excerpt: "Warum Klima, Wasser und ruhige Kontrolle bei Amphibien zentral sind.",
    tags: ["Amphibie", "Feuchtigkeit", "Terrarium"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "insektenbetreuung-terrarium",
    title: "Insektenbetreuung im Terrarium",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "insekt",
    excerpt: "Futter, Substrat, Luftfeuchte und sichere Kontrolle für Insekten.",
    tags: ["Insekt", "Terrarium", "Exoten"],
    readingMinutes: 4,
    publishedAt: "2026-07-06",
  },
  {
    slug: "wirbellose-betreuen",
    title: "Wirbellose betreuen: kleine Details zählen",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "wirbelloses",
    excerpt: "Wie man Spinnen, Schnecken und andere Wirbellose klar und sicher beschreibt.",
    tags: ["Wirbellose", "Exoten", "Betreuung"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "exotische-tiere-betreuung-angaben",
    title: "Exotische Tiere: welche Angaben Betreuer brauchen",
    categorySlug: "reptilien-und-exoten",
    careCategorySlug: "exotisches-tier",
    excerpt: "Je spezieller die Tierart, desto wichtiger sind Haltungsdaten, Futter und Grenzen.",
    tags: ["Exotische Tiere", "Übergabe", "Sicherheit"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "pferdebetreuung-reitbeteiligung",
    title: "Pferdebetreuung und Reitbeteiligung unterscheiden",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "pferd",
    excerpt: "Welche Aufgaben zu Betreuung, Stallhilfe oder Reitbeteiligung gehören können.",
    tags: ["Pferd", "Reitbeteiligung", "Stall"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "stallhilfe-inserat-schreiben",
    title: "Stallhilfe-Inserat schreiben",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "pferd",
    excerpt: "Füttern, Misten, Koppel, Zeiten und Erfahrung klar in ein Inserat bringen.",
    tags: ["Stallhilfe", "Pferd", "Inserat"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "ponybetreuung-fuer-kinder",
    title: "Ponybetreuung sicher organisieren",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "pony",
    excerpt: "Worauf Halter bei Ponys, Kindern und klaren Aufgaben achten sollten.",
    tags: ["Pony", "Sicherheit", "Betreuung"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "hoftiere-versorgen",
    title: "Hoftiere versorgen: Routine gut dokumentieren",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "hoftier",
    excerpt: "Fütterung, Türen, Wasser, Zäune und feste Zeiten für Hoftiere vorbereiten.",
    tags: ["Hoftier", "Routine", "Hof"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "nutztiere-betreuung-rechtliches",
    title: "Nutztiere betreuen: Verantwortung klären",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "nutztier",
    excerpt: "Warum Aufgaben, Erfahrung und Zuständigkeit bei Nutztieren besonders klar sein müssen.",
    tags: ["Nutztier", "Verantwortung", "Hof"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "auffangstation-hilfe-organisieren",
    title: "Hilfe für Auffangstationen organisieren",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "auffangstation",
    excerpt: "Wie Aufgaben, Schichten und Tiergruppen für Helfer verständlich beschrieben werden.",
    tags: ["Auffangstation", "Hilfe", "Organisation"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "zoo-parktier-betreuung",
    title: "Zoo- und Parktiere: Unterstützung sauber abgrenzen",
    categorySlug: "pferd-und-hof",
    careCategorySlug: "zoo-oder-parktier",
    excerpt: "Warum Zuständigkeit, Fachwissen und Teamregeln hier besonders wichtig sind.",
    tags: ["Zoo", "Parktier", "Team"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "betreuungsuebergabe-vorlage",
    title: "Betreuungsübergabe: Vorlage für alle Tierarten",
    categorySlug: "organisation",
    excerpt: "Welche Infos in jede Übergabe gehören, egal ob Hund, Katze, Aquarium oder Hof.",
    tags: ["Übergabe", "Checkliste", "Organisation"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "tierbetreuung-kostenlos-starten",
    title: "Tierbetreuung kostenlos starten: was Early Access bedeutet",
    categorySlug: "plattform-tipps",
    excerpt: "Wie Buddza in der Startphase funktioniert und welche Angaben für gute Treffer helfen.",
    tags: ["Buddza", "Early Access", "Kosten"],
    readingMinutes: 4,
    publishedAt: "2026-07-06",
  },
  {
    slug: "plz-suche-und-radius",
    title: "PLZ-Suche und Radius richtig nutzen",
    categorySlug: "plattform-tipps",
    excerpt: "So findest du lokale Betreuung, ohne deine genaue Adresse öffentlich zu machen.",
    tags: ["PLZ", "Radius", "Suche"],
    readingMinutes: 4,
    publishedAt: "2026-07-06",
  },
  {
    slug: "gutes-inserat-schreiben",
    title: "Ein gutes Inserat für Tierbetreuung schreiben",
    categorySlug: "organisation",
    excerpt: "Titel, Beschreibung, Foto, Zeitraum und Erwartungen so formulieren, dass passende Menschen reagieren.",
    tags: ["Inserat", "Beschreibung", "Suche"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "tierbetreuer-profil-erstellen",
    title: "Tierbetreuer-Profil erstellen: Vertrauen aufbauen",
    categorySlug: "plattform-tipps",
    excerpt: "Was in Profilbild, Beschreibung, Verfügbarkeit, Preis und Umkreis stehen sollte.",
    tags: ["Tierbetreuer", "Profil", "Vertrauen"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "erste-nachricht-an-tierbetreuer",
    title: "Erste Nachricht an Tierbetreuer schreiben",
    categorySlug: "organisation",
    excerpt: "Welche Infos du direkt mitschicken solltest, damit schnell klar wird, ob es passt.",
    tags: ["Nachricht", "Anfrage", "Kommunikation"],
    readingMinutes: 4,
    publishedAt: "2026-07-06",
  },
  {
    slug: "notfallkontakte-tierbetreuung",
    title: "Notfallkontakte in der Tierbetreuung",
    categorySlug: "notfall-und-gesundheit",
    excerpt: "Tierarzt, Ersatzkontakt, Medikamente und Entscheidungen im Notfall vorbereiten.",
    tags: ["Notfall", "Tierarzt", "Sicherheit"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "medikamente-uebergeben",
    title: "Medikamente sicher an Betreuer übergeben",
    categorySlug: "notfall-und-gesundheit",
    excerpt: "Dosierung, Zeiten, Lagerung und Beobachtung klar dokumentieren.",
    tags: ["Medikamente", "Gesundheit", "Übergabe"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "warnzeichen-bei-tieren",
    title: "Warnzeichen bei Tieren: was Betreuer melden sollten",
    categorySlug: "notfall-und-gesundheit",
    excerpt: "Futter, Verhalten, Atmung, Kot, Bewegung und andere Signale im Blick behalten.",
    tags: ["Warnzeichen", "Gesundheit", "Betreuung"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "tierbetreuung-im-sommer",
    title: "Tierbetreuung im Sommer",
    categorySlug: "notfall-und-gesundheit",
    excerpt: "Hitze, Wasser, Schatten, Spazierzeiten und empfindliche Tiere richtig einplanen.",
    tags: ["Sommer", "Hitze", "Sicherheit"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "tierbetreuung-im-winter",
    title: "Tierbetreuung im Winter",
    categorySlug: "notfall-und-gesundheit",
    excerpt: "Kälte, Dunkelheit, Wege, Pfoten, Stall und Technik im Winter berücksichtigen.",
    tags: ["Winter", "Kälte", "Sicherheit"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "schluesseluebergabe-und-datenschutz",
    title: "Schlüsselübergabe und Datenschutz",
    categorySlug: "organisation",
    excerpt: "Wie du private Daten, Adresse, Schlüssel und Vertrauen Schritt für Schritt klärst.",
    tags: ["Datenschutz", "Schlüssel", "Vertrauen"],
    readingMinutes: 6,
    publishedAt: "2026-07-06",
  },
  {
    slug: "preise-fuer-tierbetreuung-einschaetzen",
    title: "Preise für Tierbetreuung einschätzen",
    categorySlug: "organisation",
    excerpt: "Welche Faktoren Zeit, Aufwand, Erfahrung, Tierart und Entfernung beeinflussen.",
    tags: ["Preis", "Betreuung", "Aufwand"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "betreuung-mehrerer-tiere",
    title: "Betreuung mehrerer Tiere planen",
    categorySlug: "organisation",
    excerpt: "Wie unterschiedliche Tierarten, Futterplätze und Routinen übersichtlich bleiben.",
    tags: ["Mehrere Tiere", "Planung", "Routine"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
  {
    slug: "sonstige-tiere-inserat",
    title: "Sonstige Tiere: ein klares Inserat schreiben",
    categorySlug: "organisation",
    careCategorySlug: "sonstiges-tier",
    excerpt: "Wenn keine Kategorie perfekt passt, helfen Haltung, Aufgabe und Besonderheiten.",
    tags: ["Sonstiges Tier", "Inserat", "Beschreibung"],
    readingMinutes: 4,
    publishedAt: "2026-07-06",
  },
  {
    slug: "wildtier-hilfe-richtig-einordnen",
    title: "Wildtier-Hilfe richtig einordnen",
    categorySlug: "notfall-und-gesundheit",
    careCategorySlug: "wildtier",
    excerpt: "Warum Wildtiere besondere Zuständigkeiten brauchen und wann Fachstellen wichtig sind.",
    tags: ["Wildtier", "Notfall", "Fachstelle"],
    readingMinutes: 5,
    publishedAt: "2026-07-06",
  },
];

export function getGuideCategory(slug: string) {
  return guideCategories.find((category) => category.slug === slug) ?? null;
}

export function getGuideTopic(slug: string) {
  return guideTopics.find((topic) => topic.slug === slug) ?? null;
}

export function getGuideTopicsByCategory(categorySlug: string) {
  return guideTopics.filter((topic) => topic.categorySlug === categorySlug);
}

export function getGuideTopicsByCareCategory(careCategorySlug: string, limit = 4) {
  return guideTopics.filter((topic) => topic.careCategorySlug === careCategorySlug).slice(0, limit);
}
