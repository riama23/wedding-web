const keyStrings: { [key: string]: { [key: string]: string } } = {
  //////////////////////////////////////////
  // Common
  //////////////////////////////////////////
  wedding_date: {
    es: '2024/09/28',
    en: '2024/09/28',
    de: '2024/09/28'
  },
  wedding_time: {
    es: '12:00',
    en: '12:00',
    de: '12:00'
  },
  day: {
    es: 'Día|Días',
    en: 'Day|Days',
    de: 'Tag|Tage'
  },
  hour: {
    es: 'Hora|Horas',
    en: 'Hour|Hours',
    de: 'Stunde|Stunden'
  },
  minute: {
    es: 'Minuto|Minutos',
    en: 'Minute|Minutes',
    de: 'Minute|Minuten'
  },
  second: {
    es: 'Segundo|Segundos',
    en: 'Second|Seconds',
    de: 'Sekunde|Sekunden'
  },
  menu: {
    es: 'Menú',
    en: 'Menu',
    de: 'Menü'
  },
  //////////////////////////////////////////
  // Navbar
  //////////////////////////////////////////
  'link-home': {
    es: 'Inicio',
    en: 'Home',
    de: 'Home'
  },
  'link-story': {
    es: 'Nuestra Historia',
    en: 'Our Lovestory',
    de: 'Über uns'
  },
  'link-rsvp': {
    es: 'Confirmar Asistencia',
    en: 'RSVP',
    de: 'RSVP'
  },
  'link-wedding_list': {
    es: 'Lista de bodas',
    en: 'Wedding List',
    de: 'Hochzeitsliste'
  },
  'link-oyher-information': {
    es: 'Otra información',
    en: 'Other information',
    de: 'Weitere Informationen'
  },
  //////////////////////////////////////////
  // Home
  //////////////////////////////////////////
  'home-title': {
    es: 'Boda Monika & Enrique',
    en: 'Wedding Monika & Enrique',
    de: 'Hochzeit Monika & Enrique'
  },
  'home-resume-preparty': {
    es: 'Preboda de pintxos <br>(Bilbao)',
    en: 'Pre-wedding party <br>(Bilbao)',
    de: 'Vor-Hochzeitsfeier <br>(Bilbao)'
  },
  'home-resume-wedding': {
    es: 'Iglesia de la Asunción de Nuestra Señora <br>12.00 (Bakio)',
    en: 'Church of Santa María de la Asunción <br>12.00 (Bakio)',
    de: 'Kirche Santa María de la Asunción <br>12.00 (Bakio)'
  },
  'home-resume-party': {
    es: 'Baserri Maitea <br>(Forua)',
    en: 'Baserri Maitea <br>(Forua)',
    de: 'Baserri Maitea <br>(Forua)'
  },
  'home-information-church': {
    es: 'Iglesia de la Asunción de Nuestra Señora <br> 12.00h (Bakio)',
    en: 'Church of the Asunción de Nuestra Señora <br> 12.00h (Bakio)',
    de: 'Kirche der Asunción de Nuestra Señora <br> 12.00h (Bakio)'
  },
  'home-information-church-content': {
    es: 'La misa será en la Iglesia de la Asunción de Nuestra Señora a las 12:00 h.<br>Se tarda aproximadamente 35 minutos desde Bilbao en coche. Habrá servicio de autobuses desde Bilbao y Las Arenas, con diferentes paradas, entre ellas los hoteles NH Deusto, Barceló Bilbao Nervión y Occidental Bilbao.',
    en: 'The mass will be held in the Church of Santa María de la Asunción in Bakio at 12:00h. <br>It takes approximately 35 minutes from Bilbao by car. There will be shuttle service from Bilbao and Las Arenas, with different stops, including the NH Deusto, Barceló Bilbao Nervión and Occidental Bilbao hotels.',
    de: 'Die Messe findet um 12:00 Uhr in der Kirche Santa María de la Asunción in Bakio statt. <br> Von Bilbao aus sind es etwa 35 Minuten mit dem Auto. Von Bilbao und Las Arenas aus wird es einen Shuttle-Service mit verschiedenen Haltestellen geben, darunter die Hotels NH Deusto, Barceló Bilbao Nervión und Occidental Bilbao.'
  },
  'home-information-restaurant': {
    es: 'Baserri Maitea (Forua)',
    en: 'Baserri Maitea (Forua)',
    de: 'Baserri Maitea (Forua)'
  },
  'home-information-restaurant-content': {
    es: 'Después de la Iglesia se celebrará la celebración de la boda en el Baserri Maitea, a 20 minutos en coche de la iglesia. También habrá servicio de autobuses para este trayecto.',
    en: 'After the mass, the wedding celebration will be held at Baserri Maitea, a 20-minute drive from the church. There will also be a shuttle service for this route.',
    de: 'Im Anschluss an die Trauung möchten wir gerne mit euch im Baserri Maitea, das etwa 20 Minuten von der Kirche mit dem Auto entfernt ist, weiterfeiern. Es wird auch ein shuttle service für diese Strecke geben.'
  },
  //////////////////////////////////////////
  // Footer
  //////////////////////////////////////////
  'footer-title': {
    es: 'Boda de Monika & Enrique',
    en: 'Wedding of Monika & Enrique',
    de: 'Hochzeit von Monika & Enrique'
  },
  'footer-email': {
    es: "info{'@'}monika-enrique.com",
    en: "info{'@'}monika-enrique.com",
    de: "info{'@'}monika-enrique.com"
  },
  'footer-monika_phone': {
    es: '+34 659003162',
    en: '+34 659003162',
    de: '+34 659003162'
  },
  'footer-enrique_phone': {
    es: '+34 648050980',
    en: '+34 648050980',
    de: '+34 648050980'
  }
}

export default (): {
  en: { [key: string]: string }
  es: { [key: string]: string }
  de: { [key: string]: string }
} => {
  const locales: {
    en: { [key: string]: string }
    es: { [key: string]: string }
    de: { [key: string]: string }
  } = {
    en: {},
    es: {},
    de: {}
  }

  for (const key in keyStrings) {
    locales.en[key] = keyStrings[key].en
    locales.es[key] = keyStrings[key].es
    locales.de[key] = keyStrings[key].de
  }

  return locales
}
