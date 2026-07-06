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
