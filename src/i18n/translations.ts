export interface TranslationDict {
  brand: {
    name: string;
    tagline: string;
    description: string;
    noAccount: string;
    freeInstant: string;
  };
  nav: {
    startChat: string;
    safety: string;
    faq: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    theme: string;
    language: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    badge: string;
  };
  howItWorks: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  safetyBanner: {
    title: string;
    tip1: string;
    tip2: string;
    tip3: string;
    ageNotice: string;
  };
  setup: {
    title: string;
    nicknameLabel: string;
    nicknamePlaceholder: string;
    genderLabel: string;
    male: string;
    female: string;
    preferenceLabel: string;
    anyone: string;
    countryLabel: string;
    languageLabel: string;
    cta: string;
    errors: {
      nicknameRequired: string;
      nicknameLength: string;
      nicknameChars: string;
      nicknameReserved: string;
    };
  };
  matching: {
    title: string;
    subtitle: string;
    lookingFor: string;
    cancel: string;
    foundTitle: string;
    connecting: string;
  };
  chat: {
    connectedWith: string;
    connectedStatus: string;
    placeholder: string;
    send: string;
    attach: string;
    typing: string;
    nextStranger: string;
    leave: string;
    report: string;
    block: string;
    coldGateLimit: string;
    disconnected: string;
    findAnother: string;
    you: string;
    stranger: string;
  };
  modals: {
    nextTitle: string;
    nextDesc: string;
    leaveTitle: string;
    leaveDesc: string;
    stay: string;
    confirmNext: string;
    confirmLeave: string;
    reportTitle: string;
    reportReasonLabel: string;
    reportDetailsLabel: string;
    reportDetailsPlaceholder: string;
    submitReport: string;
    cancel: string;
    blockTitle: string;
    blockDesc: string;
    confirmBlock: string;
    reasons: {
      harassment: string;
      spam: string;
      sexual_inappropriate: string;
      threats: string;
      hate_abuse: string;
      scam_fraud: string;
      other: string;
    };
  };
  footer: {
    agePolicy: string;
    allRightsReserved: string;
    disclaimer: string;
  };
}

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', dir: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', dir: 'ltr' }
];

export const translations: Record<string, TranslationDict> = {
  en: {
    brand: {
      name: 'RandomChat',
      tagline: 'Free Anonymous Random Text Chat',
      description: 'Connect instantly with compatible strangers. Ephemeral, safe, zero sign-up.',
      noAccount: 'No Account Required',
      freeInstant: 'Free • Anonymous • Instant'
    },
    nav: {
      startChat: 'Start Chat',
      safety: 'Safety',
      faq: 'FAQ',
      privacy: 'Privacy',
      terms: 'Terms',
      about: 'About Us',
      contact: 'Contact',
      theme: 'Theme',
      language: 'Language'
    },
    hero: {
      headline: 'Talk to someone new.',
      subheadline: 'Spontaneous conversations with compatible strangers. Zero accounts, zero friction, instant connection.',
      cta: 'Start Chat',
      badge: 'Free • Anonymous • Instant'
    },
    howItWorks: {
      title: 'How It Works',
      step1Title: '1. Choose Preferences',
      step1Desc: 'Pick a temporary nickname and select who you want to chat with.',
      step2Title: '2. Instant Match',
      step2Desc: 'Our server matches you with an active, mutually compatible stranger.',
      step3Title: '3. Real-Time Chat',
      step3Desc: 'Exchange messages securely. Skip to the next stranger anytime.'
    },
    safetyBanner: {
      title: 'Safe & Anonymous by Default',
      tip1: 'Never share passwords, phone numbers, home addresses, or financial information.',
      tip2: 'Use Report and Block immediately if you encounter abusive behavior.',
      tip3: 'Conversations are ephemeral text only and never permanently saved.',
      ageNotice: 'Must be 18 years or older (or permitted minimum age in your jurisdiction) to use this service.'
    },
    setup: {
      title: 'Quick Guest Setup',
      nicknameLabel: 'Temporary Nickname',
      nicknamePlaceholder: 'e.g. Dreamer99',
      genderLabel: 'Your Gender',
      male: 'Male',
      female: 'Female',
      preferenceLabel: 'Chat With',
      anyone: 'Anyone',
      countryLabel: 'Country',
      languageLabel: 'Language',
      cta: 'Find Stranger',
      errors: {
        nicknameRequired: 'Please enter a nickname',
        nicknameLength: 'Nickname must be between 2 and 20 characters',
        nicknameChars: 'Only letters, numbers, spaces, and hyphens allowed',
        nicknameReserved: 'This nickname is reserved by system administration'
      }
    },
    matching: {
      title: 'Finding someone...',
      subtitle: 'Searching for a compatible stranger to connect with',
      lookingFor: 'Looking for',
      cancel: 'Cancel Search',
      foundTitle: 'Stranger Found!',
      connecting: 'Establishing secure real-time connection...'
    },
    chat: {
      connectedWith: 'Chatting with:',
      connectedStatus: 'Online',
      placeholder: 'Type a message...',
      send: 'Send',
      attach: 'Share photo from gallery',
      typing: 'Stranger is typing...',
      nextStranger: 'Next Stranger',
      leave: 'Leave Chat',
      report: 'Report',
      block: 'Block',
      coldGateLimit: "You've sent 2 messages. Please wait for a reply.",
      disconnected: 'Stranger has disconnected.',
      findAnother: 'Find Another Stranger',
      you: 'You',
      stranger: 'Stranger'
    },
    modals: {
      nextTitle: 'Find Next Stranger?',
      nextDesc: 'This will end your current conversation and look for someone new.',
      leaveTitle: 'Leave Conversation?',
      leaveDesc: 'Are you sure you want to end this chat and return to home?',
      stay: 'Stay',
      confirmNext: 'Find Next',
      confirmLeave: 'Leave Chat',
      reportTitle: 'Report User',
      reportReasonLabel: 'Reason for report',
      reportDetailsLabel: 'Additional details (optional)',
      reportDetailsPlaceholder: 'Describe the issue briefly...',
      submitReport: 'Submit Report',
      cancel: 'Cancel',
      blockTitle: 'Block User',
      blockDesc: 'This will immediately disconnect and prevent future matching.',
      confirmBlock: 'Block & Disconnect',
      reasons: {
        harassment: 'Harassment or Bullying',
        spam: 'Spam or Bot Activity',
        sexual_inappropriate: 'Inappropriate or Explicit Content',
        threats: 'Threats or Violence',
        hate_abuse: 'Hate Speech or Abuse',
        scam_fraud: 'Scam or Fraudulent Links',
        other: 'Other Community Guideline Violation'
      }
    },
    footer: {
      agePolicy: '18+ only. By using RandomChat, you agree to our Terms & Privacy Policy.',
      allRightsReserved: 'All rights reserved.',
      disclaimer: 'RandomChat is an anonymous random chat platform. Never disclose personal data.'
    }
  },

  es: {
    brand: {
      name: 'RandomChat',
      tagline: 'Chat de Texto Anónimo y Aleatorio Gratis',
      description: 'Conéctate al instante con desconocidos compatibles. Efímero, seguro, sin registro.',
      noAccount: 'Sin Cuenta Requerida',
      freeInstant: 'Gratis • Anónimo • Instantáneo'
    },
    nav: {
      startChat: 'Iniciar Chat',
      safety: 'Seguridad',
      faq: 'Preguntas Frecuentes',
      privacy: 'Privacidad',
      terms: 'Términos',
      about: 'Nosotros',
      contact: 'Contacto',
      theme: 'Tema',
      language: 'Idioma'
    },
    hero: {
      headline: 'Habla con alguien nuevo.',
      subheadline: 'Conversaciones espontáneas con personas compatibles. Sin cuentas, sin complicaciones, conexión instantánea.',
      cta: 'Iniciar Chat',
      badge: 'Gratis • Anónimo • Instantáneo'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      step1Title: '1. Elige Preferencias',
      step1Desc: 'Elige un apodo temporal y con quién deseas hablar.',
      step2Title: '2. Emparejamiento Rápido',
      step2Desc: 'Nuestro servidor te conecta con un desconocido activo y compatible.',
      step3Title: '3. Chat en Tiempo Real',
      step3Desc: 'Chatea de forma segura y pasa al siguiente cuando quieras.'
    },
    safetyBanner: {
      title: 'Seguro y Anónimo por Defecto',
      tip1: 'Nunca compartas contraseñas, teléfonos, direcciones o datos financieros.',
      tip2: 'Usa Denunciar y Bloquear de inmediato ante comportamientos abusivos.',
      tip3: 'Las conversaciones son efímeras y nunca se guardan.',
      ageNotice: 'Debes tener 18 años o más para usar este servicio.'
    },
    setup: {
      title: 'Configuración Rápida',
      nicknameLabel: 'Apodo Temporal',
      nicknamePlaceholder: 'ej. Aventurero99',
      genderLabel: 'Tu Género',
      male: 'Hombre',
      female: 'Mujer',
      preferenceLabel: 'Chatear Con',
      anyone: 'Cualquiera',
      countryLabel: 'País',
      languageLabel: 'Idioma',
      cta: 'Buscar Desconocido',
      errors: {
        nicknameRequired: 'Por favor ingresa un apodo',
        nicknameLength: 'El apodo debe tener entre 2 y 20 caracteres',
        nicknameChars: 'Solo letras, números, espacios y guiones permitidos',
        nicknameReserved: 'Este apodo está reservado por el sistema'
      }
    },
    matching: {
      title: 'Buscando a alguien...',
      subtitle: 'Buscando una persona compatible para chatear',
      lookingFor: 'Buscando',
      cancel: 'Cancelar Búsqueda',
      foundTitle: '¡Desconocido Encontrado!',
      connecting: 'Estableciendo conexión en tiempo real...'
    },
    chat: {
      connectedWith: 'Chateando con:',
      connectedStatus: 'En línea',
      placeholder: 'Escribe un mensaje...',
      send: 'Enviar',
      attach: 'Compartir foto de la galería',
      typing: 'El desconocido está escribiendo...',
      nextStranger: 'Siguiente',
      leave: 'Salir del Chat',
      report: 'Denunciar',
      block: 'Bloquear',
      coldGateLimit: 'Has enviado 2 mensajes. Espera una respuesta.',
      disconnected: 'El desconocido se ha desconectado.',
      findAnother: 'Buscar a Otro Desconocido',
      you: 'Tú',
      stranger: 'Desconocido'
    },
    modals: {
      nextTitle: '¿Buscar siguiente desconocido?',
      nextDesc: 'Esto terminará la conversación actual y buscará a alguien nuevo.',
      leaveTitle: '¿Salir de la conversación?',
      leaveDesc: '¿Seguro que deseas salir y volver al inicio?',
      stay: 'Quedarse',
      confirmNext: 'Buscar Siguiente',
      confirmLeave: 'Salir',
      reportTitle: 'Denunciar Usuario',
      reportReasonLabel: 'Motivo de la denuncia',
      reportDetailsLabel: 'Detalles adicionales (opcional)',
      reportDetailsPlaceholder: 'Describe brevemente el problema...',
      submitReport: 'Enviar Denuncia',
      cancel: 'Cancelar',
      blockTitle: 'Bloquear Usuario',
      blockDesc: 'Esto desconectará de inmediato y evitará futuros emparejamientos.',
      confirmBlock: 'Bloquear y Desconectar',
      reasons: {
        harassment: 'Acoso o intimidación',
        spam: 'Spam o actividad de bots',
        sexual_inappropriate: 'Contenido inapropiado o explícito',
        threats: 'Amenazas o violencia',
        hate_abuse: 'Discurso de odio o abuso',
        scam_fraud: 'Estafa o enlaces sospechosos',
        other: 'Otra infracción de normas'
      }
    },
    footer: {
      agePolicy: 'Solo +18 años. Al usar RandomChat aceptas nuestros Términos y Privacidad.',
      allRightsReserved: 'Todos los derechos reservados.',
      disclaimer: 'RandomChat es anónimo. Nunca reveles información personal.'
    }
  },

  fr: {
    brand: {
      name: 'RandomChat',
      tagline: 'Chat Texte Anonyme et Aléatoire Gratuit',
      description: 'Connectez-vous instantanément avec des inconnus compatibles. Éphémère, sécurisé, sans inscription.',
      noAccount: 'Aucun compte requis',
      freeInstant: 'Gratuit • Anonyme • Instantané'
    },
    nav: {
      startChat: 'Démarrer le Chat',
      safety: 'Sécurité',
      faq: 'FAQ',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      about: 'À propos',
      contact: 'Contact',
      theme: 'Thème',
      language: 'Langue'
    },
    hero: {
      headline: "Parlez à quelqu'un de nouveau.",
      subheadline: 'Conversations spontanées avec des inconnus compatibles. Zéro compte, zéro friction, connexion instantanée.',
      cta: 'Démarrer le Chat',
      badge: 'Gratuit • Anonyme • Instantané'
    },
    howItWorks: {
      title: 'Comment ça marche',
      step1Title: '1. Choisissez vos préférences',
      step1Desc: 'Choisissez un pseudonyme et avec qui vous souhaitez discuter.',
      step2Title: '2. Match instantané',
      step2Desc: 'Notre serveur vous associe à un inconnu actif et compatible.',
      step3Title: '3. Chat en temps réel',
      step3Desc: 'Échangez en toute sécurité et passez au suivant quand vous voulez.'
    },
    safetyBanner: {
      title: 'Sécurisé et Anonyme par Défaut',
      tip1: 'Ne partagez jamais de mots de passe, numéros ou coordonnées bancaires.',
      tip2: 'Signalez et bloquez immédiatement tout comportement abusif.',
      tip3: 'Les conversations sont éphémères et ne sont jamais enregistrées.',
      ageNotice: 'Vous devez avoir 18 ans ou plus pour utiliser ce service.'
    },
    setup: {
      title: 'Configuration Invité',
      nicknameLabel: 'Pseudonyme temporaire',
      nicknamePlaceholder: 'ex. Rêveur99',
      genderLabel: 'Votre genre',
      male: 'Homme',
      female: 'Femme',
      preferenceLabel: 'Discuter avec',
      anyone: 'Tout le monde',
      countryLabel: 'Pays',
      languageLabel: 'Langue',
      cta: 'Trouver un inconnu',
      errors: {
        nicknameRequired: 'Veuillez entrer un pseudonyme',
        nicknameLength: 'Le pseudonyme doit comporter entre 2 et 20 caractères',
        nicknameChars: 'Seules les lettres, chiffres, espaces et tirets sont autorisés',
        nicknameReserved: 'Ce pseudonyme est réservé par le système'
      }
    },
    matching: {
      title: 'Recherche en cours...',
      subtitle: 'Recherche d’un inconnu compatible pour discuter',
      lookingFor: 'Recherche',
      cancel: 'Annuler',
      foundTitle: 'Inconnu trouvé !',
      connecting: 'Connexion en temps réel...'
    },
    chat: {
      connectedWith: 'En discussion avec :',
      connectedStatus: 'En ligne',
      placeholder: 'Écrivez un message...',
      send: 'Envoyer',
      attach: 'Partager une photo de la galerie',
      typing: 'L’inconnu écrit...',
      nextStranger: 'Inconnu Suivant',
      leave: 'Quitter',
      report: 'Signaler',
      block: 'Bloquer',
      coldGateLimit: 'Vous avez envoyé 2 messages. Veuillez attendre une réponse.',
      disconnected: 'L’inconnu s’est déconnecté.',
      findAnother: 'Trouver un autre inconnu',
      you: 'Vous',
      stranger: 'Inconnu'
    },
    modals: {
      nextTitle: 'Passer à l’inconnu suivant ?',
      nextDesc: 'Cela mettra fin à la conversation en cours et en cherchera une nouvelle.',
      leaveTitle: 'Quitter la conversation ?',
      leaveDesc: 'Êtes-vous sûr de vouloir quitter et revenir à l’accueil ?',
      stay: 'Rester',
      confirmNext: 'Suivant',
      confirmLeave: 'Quitter',
      reportTitle: 'Signaler l’utilisateur',
      reportReasonLabel: 'Motif du signalement',
      reportDetailsLabel: 'Détails supplémentaires (facultatif)',
      reportDetailsPlaceholder: 'Décrivez brièvement le problème...',
      submitReport: 'Envoyer le signalement',
      cancel: 'Annuler',
      blockTitle: 'Bloquer l’utilisateur',
      blockDesc: 'Cela déconnectera immédiatement et évitera tout futur match.',
      confirmBlock: 'Bloquer et déconnecter',
      reasons: {
        harassment: 'Harcèlement ou intimidation',
        spam: 'Spam ou activité de bot',
        sexual_inappropriate: 'Contenu inapproprié ou explicite',
        threats: 'Menaces ou violence',
        hate_abuse: 'Discours haineux ou injures',
        scam_fraud: 'Arnaque ou liens suspects',
        other: 'Autre infraction aux règles'
      }
    },
    footer: {
      agePolicy: '18+ uniquement. En utilisant RandomChat, vous acceptez nos Conditions et notre Confidentialité.',
      allRightsReserved: 'Tous droits réservés.',
      disclaimer: 'RandomChat est anonyme. Ne divulguez jamais d’informations personnelles.'
    }
  },

  de: {
    brand: {
      name: 'RandomChat',
      tagline: 'Kostenloser Anonymer Zufalls-Text-Chat',
      description: 'Verbinde dich sofort mit passenden Fremden. Flüchtig, sicher, ohne Registrierung.',
      noAccount: 'Keine Registrierung erforderlich',
      freeInstant: 'Kostenlos • Anonym • Sofort'
    },
    nav: {
      startChat: 'Chat starten',
      safety: 'Sicherheit',
      faq: 'FAQ',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      about: 'Über uns',
      contact: 'Kontakt',
      theme: 'Design',
      language: 'Sprache'
    },
    hero: {
      headline: 'Sprich mit jemand Neuem.',
      subheadline: 'Spontane Unterhaltungen mit passenden Fremden. Keine Accounts, keine Hürden, sofortige Verbindung.',
      cta: 'Chat starten',
      badge: 'Kostenlos • Anonym • Sofort'
    },
    howItWorks: {
      title: 'So funktioniert es',
      step1Title: '1. Einstellungen wählen',
      step1Desc: 'Wähle einen temporären Spitznamen und deine Chat-Präferenzen.',
      step2Title: '2. Sofortiges Matching',
      step2Desc: 'Unser Server verbindet dich mit einem aktiven, passenden Partner.',
      step3Title: '3. Echtzeit-Chat',
      step3Desc: 'Tausche sicher Nachrichten aus und wechsle jederzeit zum nächsten.'
    },
    safetyBanner: {
      title: 'Sicher & Anonym nach Standard',
      tip1: 'Teile niemals Passwörter, Telefonnummern oder Bankdaten.',
      tip2: 'Nutze Melden und Blockieren bei störendem Verhalten.',
      tip3: 'Gespräche sind flüchtig und werden nicht gespeichert.',
      ageNotice: 'Mindestalter 18 Jahre zur Nutzung dieses Dienstes.'
    },
    setup: {
      title: 'Schnelle Gast-Einrichtung',
      nicknameLabel: 'Temporärer Spitzname',
      nicknamePlaceholder: 'z.B. Traeumer99',
      genderLabel: 'Dein Geschlecht',
      male: 'Männlich',
      female: 'Weiblich',
      preferenceLabel: 'Chatten mit',
      anyone: 'Jedem',
      countryLabel: 'Land',
      languageLabel: 'Sprache',
      cta: 'Fremden finden',
      errors: {
        nicknameRequired: 'Bitte gib einen Spitznamen ein',
        nicknameLength: 'Spitzname muss zwischen 2 und 20 Zeichen lang sein',
        nicknameChars: 'Nur Buchstaben, Zahlen, Leerzeichen und Bindestriche erlaubt',
        nicknameReserved: 'Dieser Spitzname ist systemseitig reserviert'
      }
    },
    matching: {
      title: 'Suche jemanden...',
      subtitle: 'Suche nach einem kompatiblen Chat-Partner',
      lookingFor: 'Gesucht wird',
      cancel: 'Suche abbrechen',
      foundTitle: 'Partner gefunden!',
      connecting: 'Echtzeit-Verbindung wird hergestellt...'
    },
    chat: {
      connectedWith: 'Chatte mit:',
      connectedStatus: 'Online',
      placeholder: 'Nachricht eingeben...',
      send: 'Senden',
      attach: 'Foto aus Galerie teilen',
      typing: 'Partner tippt...',
      nextStranger: 'Nächster Partner',
      leave: 'Chat verlassen',
      report: 'Melden',
      block: 'Blockieren',
      coldGateLimit: 'Du hast 2 Nachrichten gesendet. Bitte warte auf eine Antwort.',
      disconnected: 'Partner hat die Verbindung getrennt.',
      findAnother: 'Neuen Partner suchen',
      you: 'Du',
      stranger: 'Fremder'
    },
    modals: {
      nextTitle: 'Nächsten Partner suchen?',
      nextDesc: 'Beendet den aktuellen Chat und sucht nach jemand Neuem.',
      leaveTitle: 'Chat beenden?',
      leaveDesc: 'Möchtest du den Chat wirklich verlassen und zur Startseite zurückkehren?',
      stay: 'Bleiben',
      confirmNext: 'Nächster',
      confirmLeave: 'Verlassen',
      reportTitle: 'Benutzer melden',
      reportReasonLabel: 'Grund der Meldung',
      reportDetailsLabel: 'Zusätzliche Details (optional)',
      reportDetailsPlaceholder: 'Beschreibe kurz das Problem...',
      submitReport: 'Meldung senden',
      cancel: 'Abbrechen',
      blockTitle: 'Benutzer blockieren',
      blockDesc: 'Trennt sofort die Verbindung und verhindert künftiges Matching.',
      confirmBlock: 'Blockieren & Trennen',
      reasons: {
        harassment: 'Belästigung oder Mobbing',
        spam: 'Spam oder Bot-Aktivität',
        sexual_inappropriate: 'Unangemessene Inhalte',
        threats: 'Drohungen oder Gewalt',
        hate_abuse: 'Hassrede oder Beleidigungen',
        scam_fraud: 'Betrug oder dubiose Links',
        other: 'Anderer Richtlinienverstoß'
      }
    },
    footer: {
      agePolicy: 'Ab 18 Jahren. Mit der Nutzung von RandomChat akzeptierst du unsere Nutzungsbedingungen.',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      disclaimer: 'RandomChat ist anonym. Gib niemals persönliche Daten preis.'
    }
  },

  pt: {
    brand: {
      name: 'RandomChat',
      tagline: 'Chat de Texto Aleatório e Anônimo Grátis',
      description: 'Conecte-se instantaneamente com pessoas compatíveis. Efêmero, seguro, sem cadastro.',
      noAccount: 'Sem Cadastro Necessário',
      freeInstant: 'Grátis • Anônimo • Instantâneo'
    },
    nav: {
      startChat: 'Iniciar Chat',
      safety: 'Segurança',
      faq: 'FAQ',
      privacy: 'Privacidade',
      terms: 'Termos',
      about: 'Sobre',
      contact: 'Contato',
      theme: 'Tema',
      language: 'Idioma'
    },
    hero: {
      headline: 'Converse com alguém novo.',
      subheadline: 'Conversas espontâneas com pessoas compatíveis. Zero contas, zero complicação, conexão instantânea.',
      cta: 'Iniciar Chat',
      badge: 'Grátis • Anônimo • Instantâneo'
    },
    howItWorks: {
      title: 'Como Funciona',
      step1Title: '1. Escolha Preferências',
      step1Desc: 'Escolha um apelido temporário e com quem deseja conversar.',
      step2Title: '2. Conexão Rápida',
      step2Desc: 'Nosso servidor conecta você com alguém ativo e compatível.',
      step3Title: '3. Chat em Tempo Real',
      step3Desc: 'Converse com segurança e passe para o próximo quando quiser.'
    },
    safetyBanner: {
      title: 'Seguro e Anônimo por Padrão',
      tip1: 'Nunca compartilhe senhas, telefones, endereços ou dados bancários.',
      tip2: 'Use Denunciar e Bloquear imediatamente contra comportamentos abusivos.',
      tip3: 'Conversas são efêmeras e nunca são gravadas.',
      ageNotice: 'Você deve ter 18 anos ou mais para usar este serviço.'
    },
    setup: {
      title: 'Configuração Rápida',
      nicknameLabel: 'Apelido Temporário',
      nicknamePlaceholder: 'ex. Sonhador99',
      genderLabel: 'Seu Gênero',
      male: 'Homem',
      female: 'Mulher',
      preferenceLabel: 'Conversar com',
      anyone: 'Qualquer pessoa',
      countryLabel: 'País',
      languageLabel: 'Idioma',
      cta: 'Encontrar Alguém',
      errors: {
        nicknameRequired: 'Por favor, insira um apelido',
        nicknameLength: 'O apelido deve ter entre 2 e 20 caracteres',
        nicknameChars: 'Apenas letras, números, espaços e hifens permitidos',
        nicknameReserved: 'Este apelido está reservado pelo sistema'
      }
    },
    matching: {
      title: 'Procurando alguém...',
      subtitle: 'Buscando uma pessoa compatível para conversar',
      lookingFor: 'Procurando',
      cancel: 'Cancelar Busca',
      foundTitle: 'Pessoa Encontrada!',
      connecting: 'Estabelecendo conexão em tempo real...'
    },
    chat: {
      connectedWith: 'Conversando com:',
      connectedStatus: 'Online',
      placeholder: 'Digite uma mensagem...',
      send: 'Enviar',
      attach: 'Compartilhar foto da galeria',
      typing: 'A outra pessoa está digitando...',
      nextStranger: 'Próxima Pessoa',
      leave: 'Sair do Chat',
      report: 'Denunciar',
      block: 'Bloquear',
      coldGateLimit: 'Você enviou 2 mensagens. Aguarde uma resposta.',
      disconnected: 'A outra pessoa se desconectou.',
      findAnother: 'Encontrar Outra Pessoa',
      you: 'Você',
      stranger: 'Desconhecido'
    },
    modals: {
      nextTitle: 'Buscar próxima pessoa?',
      nextDesc: 'Isso encerrará a conversa atual e buscará alguém novo.',
      leaveTitle: 'Sair da conversa?',
      leaveDesc: 'Tem certeza de que deseja sair e voltar ao início?',
      stay: 'Ficar',
      confirmNext: 'Próxima',
      confirmLeave: 'Sair',
      reportTitle: 'Denunciar Usuário',
      reportReasonLabel: 'Motivo da denúncia',
      reportDetailsLabel: 'Detalhes adicionais (opcional)',
      reportDetailsPlaceholder: 'Descreva o problema brevemente...',
      submitReport: 'Enviar Denúncia',
      cancel: 'Cancelar',
      blockTitle: 'Bloquear Usuário',
      blockDesc: 'Isso desconectará imediatamente e evitará novos encontros.',
      confirmBlock: 'Bloquear e Desconectar',
      reasons: {
        harassment: 'Assédio ou intimidação',
        spam: 'Spam ou atividade de bots',
        sexual_inappropriate: 'Conteúdo inadequado ou explícito',
        threats: 'Ameaças ou violência',
        hate_abuse: 'Discurso de ódio ou ofensas',
        scam_fraud: 'Golpe ou links suspeitos',
        other: 'Outra violação das regras'
      }
    },
    footer: {
      agePolicy: 'Apenas +18 anos. Ao usar RandomChat, você aceita nossos Termos e Privacidade.',
      allRightsReserved: 'Todos os direitos reservados.',
      disclaimer: 'RandomChat é anônimo. Nunca divulgue informações pessoais.'
    }
  },

  hi: {
    brand: {
      name: 'RandomChat',
      tagline: 'निःशुल्क अनाम यादृच्छिक टेक्स्ट चैट',
      description: 'अनुकूल अजनबियों से तुरंत जुड़ें। सुरक्षित, बिना किसी साइन-अप के।',
      noAccount: 'कोई खाता आवश्यक नहीं',
      freeInstant: 'मुफ़्त • अनाम • त्वरित'
    },
    nav: {
      startChat: 'चैट शुरू करें',
      safety: 'सुरक्षा',
      faq: 'अक्सर पूछे जाने वाले सवाल',
      privacy: 'गोपनीयता',
      terms: 'शर्तें',
      about: 'हमारे बारे में',
      contact: 'संपर्क',
      theme: 'थीम',
      language: 'भाषा'
    },
    hero: {
      headline: 'किसी नए व्यक्ति से बात करें।',
      subheadline: 'अनुकूल अजनबियों के साथ सहज बातचीत। कोई खाता नहीं, कोई झंझट नहीं, तुरंत कनेक्शन।',
      cta: 'चैट शुरू करें',
      badge: 'मुफ़्त • अनाम • त्वरित'
    },
    howItWorks: {
      title: 'यह कैसे काम करता है',
      step1Title: '1. प्राथमिकताएं चुनें',
      step1Desc: 'एक अस्थायी उपनाम चुनें और तय करें कि आप किससे बात करना चाहते हैं।',
      step2Title: '2. तुरंत मिलान',
      step2Desc: 'हमारा सर्वर आपको किसी सक्रिय और अनुकूल अजनबी से जोड़ता है।',
      step3Title: '3. रीयल-टाइम चैट',
      step3Desc: 'सुरक्षित रूप से संदेश भेजें और कभी भी अगले अजनबी पर जाएं।'
    },
    safetyBanner: {
      title: 'सुरक्षित और अनाम डिफ़ॉल्ट रूप से',
      tip1: 'पासवर्ड, फोन नंबर, पता या बैंक विवरण कभी साझा न करें।',
      tip2: 'अनुचित व्यवहार दिखने पर तुरंत रिपोर्ट और ब्लॉक करें।',
      tip3: 'बातचीत अस्थायी होती है और कभी सहेजी नहीं जाती।',
      ageNotice: 'इस सेवा का उपयोग करने के लिए आपकी आयु 18 वर्ष या अधिक होनी चाहिए।'
    },
    setup: {
      title: 'त्वरित गेस्ट सेटअप',
      nicknameLabel: 'अस्थायी उपनाम',
      nicknamePlaceholder: 'उदा. सागर99',
      genderLabel: 'आपका लिंग',
      male: 'पुरुष',
      female: 'महिला',
      preferenceLabel: 'किससे बात करना चाहते हैं',
      anyone: 'कोई भी',
      countryLabel: 'देश',
      languageLabel: 'भाषा',
      cta: 'अजनबी खोजें',
      errors: {
        nicknameRequired: 'कृपया एक उपनाम दर्ज करें',
        nicknameLength: 'उपनाम 2 से 20 वर्णों के बीच होना चाहिए',
        nicknameChars: 'केवल अक्षर, संख्याएं, रिक्त स्थान और हाइफ़न मान्य हैं',
        nicknameReserved: 'यह उपनाम सिस्टम द्वारा आरक्षित है'
      }
    },
    matching: {
      title: 'किसी को खोज रहे हैं...',
      subtitle: 'बातचीत के लिए किसी अनुकूल साथी की तलाश जारी है',
      lookingFor: 'तलाश',
      cancel: 'खोज रद्द करें',
      foundTitle: 'अजनबी मिल गया!',
      connecting: 'कनेक्शन स्थापित हो रहा है...'
    },
    chat: {
      connectedWith: 'बातचीत जारी है:',
      connectedStatus: 'ऑनलाइन',
      placeholder: 'संदेश लिखें...',
      send: 'भेजें',
      attach: 'गैलरी से फोटो साझा करें',
      typing: 'अजनबी टाइप कर रहा है...',
      nextStranger: 'अगला अजनबी',
      leave: 'चैट छोड़ें',
      report: 'रिपोर्ट करें',
      block: 'ब्लॉक करें',
      coldGateLimit: 'आपने 2 संदेश भेजे हैं। कृपया उत्तर की प्रतीक्षा करें।',
      disconnected: 'अजनबी डिस्कनेक्ट हो गया है।',
      findAnother: 'दूसरा अजनबी खोजें',
      you: 'आप',
      stranger: 'अजनबी'
    },
    modals: {
      nextTitle: 'अगला अजनबी खोजें?',
      nextDesc: 'यह वर्तमान बातचीत को समाप्त कर देगा और किसी नए साथी को खोजेगा।',
      leaveTitle: 'चैट समाप्त करें?',
      leaveDesc: 'क्या आप वाकई चैट छोड़कर होमपेज पर जाना चाहते हैं?',
      stay: 'रुकें',
      confirmNext: 'अगला खोजें',
      confirmLeave: 'छोड़ें',
      reportTitle: 'उपयोगकर्ता की रिपोर्ट करें',
      reportReasonLabel: 'रिपोर्ट का कारण',
      reportDetailsLabel: 'अतिरिक्त विवरण (वैकल्पिक)',
      reportDetailsPlaceholder: 'समस्या का संक्षेप में वर्णन करें...',
      submitReport: 'रिपोर्ट सबमिट करें',
      cancel: 'रद्द करें',
      blockTitle: 'उपयोगकर्ता को ब्लॉक करें',
      blockDesc: 'यह तुरंत डिस्कनेक्ट कर देगा और भविष्य के मिलान को रोकेगा।',
      confirmBlock: 'ब्लॉक और डिस्कनेक्ट',
      reasons: {
        harassment: 'उत्पीड़न या धमकी',
        spam: 'स्पैम या बॉट गतिविधि',
        sexual_inappropriate: 'अनुचित या अश्लील सामग्री',
        threats: 'धमकियां या हिंसा',
        hate_abuse: 'अभद्र भाषा या दुर्व्यवहार',
        scam_fraud: 'धोखाधड़ी या संदिग्ध लिंक',
        other: 'अन्य दिशानिर्देश उल्लंघन'
      }
    },
    footer: {
      agePolicy: 'केवल 18+। RandomChat का उपयोग करके, आप हमारी शर्तों और गोपनीयता नीति से सहमत होते हैं।',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      disclaimer: 'RandomChat एक अनाम चैट प्लेटफॉर्म है। अपनी व्यक्तिगत जानकारी कभी साझा न करें।'
    }
  },

  ar: {
    brand: {
      name: 'RandomChat',
      tagline: 'دردشة نصية عشوائية ومجهولة مجانية',
      description: 'تواصل فوراً مع غرباء متوافقين. مؤقتة، آمنة، وبدون تسجيل.',
      noAccount: 'لا يلزم إنشاء حساب',
      freeInstant: 'مجاني • مجهول • فوري'
    },
    nav: {
      startChat: 'ابدأ الدردشة',
      safety: 'الأمان',
      faq: 'الأسئلة الشائعة',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      about: 'من نحن',
      contact: 'اتصل بنا',
      theme: 'المظهر',
      language: 'اللغة'
    },
    hero: {
      headline: 'تحدث مع شخص جديد.',
      subheadline: 'محادثات عفوية مع غرباء متوافقين. بدون حسابات، بدون تعقيدات، اتصال فوري.',
      cta: 'ابدأ الدردشة',
      badge: 'مجاني • مجهول • فوري'
    },
    howItWorks: {
      title: 'كيف يعمل الموقع',
      step1Title: '١. حدد تفضيلاتك',
      step1Desc: 'اختر اسماً مستعاراً وحدد مع من ترغب في الدردشة.',
      step2Title: '٢. مطابقة فورية',
      step2Desc: 'يقوم خادمنا بمطابقتك مع شخص نشط ومتوافق معك.',
      step3Title: '٣. دردشة مباشرة',
      step3Desc: 'تبادل الرسائل بأمان وانتقل إلى الشخص التالي في أي وقت.'
    },
    safetyBanner: {
      title: 'آمن ومجهول بالكامل',
      tip1: 'لا تشارك أبداً كلمات المرور أو أرقام الهواتف أو البيانات البنكية.',
      tip2: 'استخدم الإبلاغ والحظر فوراً عند مواجهة أي سلوك مسيء.',
      tip3: 'المحادثات مؤقتة ولا يتم حفظها على الإطلاق.',
      ageNotice: 'يجب أن يكون عمرك 18 عاماً أو أكثر لاستخدام هذه الخدمة.'
    },
    setup: {
      title: 'إعداد سريع للزائر',
      nicknameLabel: 'الاسم المستعار المؤقت',
      nicknamePlaceholder: 'مثال: المسافر99',
      genderLabel: 'جنسك',
      male: 'ذكر',
      female: 'أنثى',
      preferenceLabel: 'ترغب بالدردشة مع',
      anyone: 'أي شخص',
      countryLabel: 'الدولة',
      languageLabel: 'اللغة',
      cta: 'ابحث عن شريك',
      errors: {
        nicknameRequired: 'يرجى إدخال اسم مستعار',
        nicknameLength: 'يجب أن يكون الاسم بين 2 و 20 حرفاً',
        nicknameChars: 'يسمح فقط بالأحرف والأرقام والمسافات والشرطات',
        nicknameReserved: 'هذا الاسم المستعار محجوز من قِبل النظام'
      }
    },
    matching: {
      title: 'جارٍ البحث عن شريك...',
      subtitle: 'نبحث عن شخص متوافق للدردشة معك',
      lookingFor: 'البحث عن',
      cancel: 'إلغاء البحث',
      foundTitle: 'تم العثور على شريك!',
      connecting: 'جارٍ إنشاء الاتصال المباشر...'
    },
    chat: {
      connectedWith: 'الدردشة مع:',
      connectedStatus: 'متصل الآن',
      placeholder: 'اكتب رسالة...',
      send: 'إرسال',
      attach: 'مشاركة صورة من المعرض',
      typing: 'الطرف الآخر يكتب...',
      nextStranger: 'الشخص التالي',
      leave: 'مغادرة الدردشة',
      report: 'إبلاغ',
      block: 'حظر',
      coldGateLimit: 'لقد أرسلت رسالتين. يرجى انتظار الرد.',
      disconnected: 'تم قطع الاتصال من قِبل الطرف الآخر.',
      findAnother: 'البحث عن شخص آخر',
      you: 'أنت',
      stranger: 'الغريب'
    },
    modals: {
      nextTitle: 'البحث عن شخص تالٍ؟',
      nextDesc: 'سيؤدي هذا إلى إنهاء المحادثة الحالية والبحث عن شخص جديد.',
      leaveTitle: 'مغادرة المحادثة؟',
      leaveDesc: 'هل أنت متأكد من رغبتك في مغادرة الدردشة والعودة للرئيسية؟',
      stay: 'البقاء',
      confirmNext: 'التالي',
      confirmLeave: 'مغادرة',
      reportTitle: 'إبلاغ عن مستخدم',
      reportReasonLabel: 'سبب الإبلاغ',
      reportDetailsLabel: 'تفاصيل إضافية (اختياري)',
      reportDetailsPlaceholder: 'صف المشكلة بإيجاز...',
      submitReport: 'إرسال البلاغ',
      cancel: 'إلغاء',
      blockTitle: 'حظر المستخدم',
      blockDesc: 'سيؤدي هذا إلى قطع الاتصال فوراً ومنع المطابقة مستقبلاً.',
      confirmBlock: 'حظر وقطع الاتصال',
      reasons: {
        harassment: 'مضايقة أو تنمر',
        spam: 'رسائل مزعجة أو حسابات آلية',
        sexual_inappropriate: 'محتوى غير لائق أو صريح',
        threats: 'تهديدات أو عنف',
        hate_abuse: 'خطاب كراهية أو إساءة',
        scam_fraud: 'احتيال أو روابط مشبوهة',
        other: 'انتهاك آخر للقواعد'
      }
    },
    footer: {
      agePolicy: 'للبالغين 18+ فقط. باستخدامك RandomChat توافق على الشروط والخصوصية.',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      disclaimer: 'RandomChat منصة مجهولة. لا تفصح أبداً عن معلوماتك الشخصية.'
    }
  },

  ru: {
    brand: {
      name: 'RandomChat',
      tagline: 'Бесплатный Анонимный Случайный Текстовый Чат',
      description: 'Мгновенное общение с подходящими собеседниками. Безопасно, анонимно, без регистрации.',
      noAccount: 'Без Регистрации',
      freeInstant: 'Бесплатно • Анонимно • Мгновенно'
    },
    nav: {
      startChat: 'Начать чат',
      safety: 'Безопасность',
      faq: 'Частые вопросы',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      about: 'О нас',
      contact: 'Контакты',
      theme: 'Тема',
      language: 'Язык'
    },
    hero: {
      headline: 'Поговорите с кем-то новым.',
      subheadline: 'Спонтанные разговоры с интересными собеседниками. Никаких аккаунтов, никаких преград, мгновенная связь.',
      cta: 'Начать чат',
      badge: 'Бесплатно • Анонимно • Мгновенно'
    },
    howItWorks: {
      title: 'Как это работает',
      step1Title: '1. Выберите предпочтения',
      step1Desc: 'Укажите временный никнейм и выберите, с кем хотите общаться.',
      step2Title: '2. Быстрый подбор',
      step2Desc: 'Наш сервер подберет активного и подходящего собеседника.',
      step3Title: '3. Чат в реальном времени',
      step3Desc: 'Безопасно обменивайтесь сообщениями и переходите к следующему в любой момент.'
    },
    safetyBanner: {
      title: 'Безопасно и Анонимно',
      tip1: 'Никогда не делитесь паролями, номерами телефонов или данными карт.',
      tip2: 'Используйте «Пожаловаться» и «Заблокировать» при любых нарушениях.',
      tip3: 'Диалоги эфемерны и никогда не сохраняются на сервере.',
      ageNotice: 'Вам должно быть не менее 18 лет для использования сервиса.'
    },
    setup: {
      title: 'Быстрая настройка',
      nicknameLabel: 'Временный никнейм',
      nicknamePlaceholder: 'напр. Мечтатель99',
      genderLabel: 'Ваш пол',
      male: 'Мужской',
      female: 'Женский',
      preferenceLabel: 'Общаться с',
      anyone: 'С кем угодно',
      countryLabel: 'Страна',
      languageLabel: 'Язык',
      cta: 'Найти собеседника',
      errors: {
        nicknameRequired: 'Пожалуйста, введите никнейм',
        nicknameLength: 'Никнейм должен быть от 2 до 20 символов',
        nicknameChars: 'Разрешены только буквы, цифры, пробелы и дефисы',
        nicknameReserved: 'Этот никнейм зарезервирован системой'
      }
    },
    matching: {
      title: 'Ищем собеседника...',
      subtitle: 'Подбираем подходящего человека для общения',
      lookingFor: 'Кого ищем',
      cancel: 'Отменить поиск',
      foundTitle: 'Собеседник найден!',
      connecting: 'Устанавливаем соединение...'
    },
    chat: {
      connectedWith: 'Собеседник:',
      connectedStatus: 'В сети',
      placeholder: 'Введите сообщение...',
      send: 'Отправить',
      attach: 'Отправить фото из галереи',
      typing: 'Собеседник печатает...',
      nextStranger: 'Следующий',
      leave: 'Выйти из чата',
      report: 'Пожаловаться',
      block: 'Заблокировать',
      coldGateLimit: 'Вы отправили 2 сообщения. Дождитесь ответа.',
      disconnected: 'Собеседник отключился.',
      findAnother: 'Найти другого собеседника',
      you: 'Вы',
      stranger: 'Собеседник'
    },
    modals: {
      nextTitle: 'Найти другого собеседника?',
      nextDesc: 'Текущий диалог завершится, и начнется поиск нового.',
      leaveTitle: 'Выйти из чата?',
      leaveDesc: 'Вы уверены, что хотите выйти на главную страницу?',
      stay: 'Остаться',
      confirmNext: 'Следующий',
      confirmLeave: 'Выйти',
      reportTitle: 'Пожаловаться на пользователя',
      reportReasonLabel: 'Причина жалобы',
      reportDetailsLabel: 'Подробности (необязательно)',
      reportDetailsPlaceholder: 'Кратко опишите проблему...',
      submitReport: 'Отправить жалобу',
      cancel: 'Отмена',
      blockTitle: 'Заблокировать пользователя',
      blockDesc: 'Мгновенно отключит связь и исключит повторные совпадения.',
      confirmBlock: 'Заблокировать и отключить',
      reasons: {
        harassment: 'Оскорбления или травля',
        spam: 'Спам или боты',
        sexual_inappropriate: 'Неприемлемый или интимный контент',
        threats: 'Угрозы или насилие',
        hate_abuse: 'Язык вражды или дискриминация',
        scam_fraud: 'Мошенничество или подозрительные ссылки',
        other: 'Другое нарушение правил'
      }
    },
    footer: {
      agePolicy: 'Только 18+. Используя RandomChat, вы принимаете Условия и Политику конфиденциальности.',
      allRightsReserved: 'Все права защищены.',
      disclaimer: 'RandomChat — анонимный чат. Никогда не раскрывайте личные данные.'
    }
  },

  zh: {
    brand: {
      name: 'RandomChat',
      tagline: '免费匿名随机文字聊天',
      description: '即刻与志趣相投的陌生人连线。阅后即焚、安全、无需注册。',
      noAccount: '无需注册账号',
      freeInstant: '免费 • 匿名 • 极速'
    },
    nav: {
      startChat: '开始聊天',
      safety: '安全准则',
      faq: '常见问题',
      privacy: '隐私政策',
      terms: '服务条款',
      about: '关于我们',
      contact: '联系我们',
      theme: '主题',
      language: '语言'
    },
    hero: {
      headline: '与新朋友畅聊。',
      subheadline: '与志趣相投的陌生人即时畅聊。无须注册，无须繁琐步骤，瞬间连接。',
      cta: '开始聊天',
      badge: '免费 • 匿名 • 极速'
    },
    howItWorks: {
      title: '运作方式',
      step1Title: '1. 选择偏好',
      step1Desc: '设置临时昵称并选择想聊天的对象。',
      step2Title: '2. 极速匹配',
      step2Desc: '服务器将为您匹配在线且互相符合偏好的陌生人。',
      step3Title: '3. 实时交流',
      step3Desc: '安全畅聊，随时可以切换到下一位。'
    },
    safetyBanner: {
      title: '默认安全且匿名',
      tip1: '切勿透露密码、电话号码、住址或银行账户等隐私。',
      tip2: '如遇骚扰请立即使用举报与拉黑功能。',
      tip3: '所有聊天记录阅后即焚，绝不留存。',
      ageNotice: '必须年满 18 周岁方可使用本服务。'
    },
    setup: {
      title: '快捷访客设置',
      nicknameLabel: '临时昵称',
      nicknamePlaceholder: '例如：追风者99',
      genderLabel: '您的性别',
      male: '男',
      female: '女',
      preferenceLabel: '希望与谁聊天',
      anyone: '不限',
      countryLabel: '国家/地区',
      languageLabel: '语言',
      cta: '寻找陌生人',
      errors: {
        nicknameRequired: '请输入昵称',
        nicknameLength: '昵称长度需在 2 至 20 个字符之间',
        nicknameChars: '仅允许字母、数字、汉字、空格和连字符',
        nicknameReserved: '该昵称已被系统保留'
      }
    },
    matching: {
      title: '正在寻找聊天对象...',
      subtitle: '正在匹配符合条件的陌生人',
      lookingFor: '正在寻找',
      cancel: '取消匹配',
      foundTitle: '已找到聊天对象！',
      connecting: '正在建立实时连接...'
    },
    chat: {
      connectedWith: '正在与以下用户聊天：',
      connectedStatus: '在线',
      placeholder: '输入消息...',
      send: '发送',
      attach: '从相册分享图片',
      typing: '对方正在输入...',
      nextStranger: '换下一位',
      leave: '离开聊天',
      report: '举报',
      block: '拉黑',
      coldGateLimit: '您已发送 2 条消息，请等待对方回复。',
      disconnected: '对方已离开聊天。',
      findAnother: '寻找下一位陌生人',
      you: '您',
      stranger: '陌生人'
    },
    modals: {
      nextTitle: '寻找下一位陌生人？',
      nextDesc: '这将结束当前对话并开始匹配新用户。',
      leaveTitle: '离开对话？',
      leaveDesc: '确定要结束聊天并返回首页吗？',
      stay: '留在此页',
      confirmNext: '换下一位',
      confirmLeave: '确认离开',
      reportTitle: '举报用户',
      reportReasonLabel: '举报原因',
      reportDetailsLabel: '补充说明（选填）',
      reportDetailsPlaceholder: '简要描述遇到的问题...',
      submitReport: '提交举报',
      cancel: '取消',
      blockTitle: '拉黑用户',
      blockDesc: '这将立即断开连接并不再与该用户匹配。',
      confirmBlock: '拉黑并断开',
      reasons: {
        harassment: '骚扰或霸凌',
        spam: '垃圾广告或机器人',
        sexual_inappropriate: '不当或色情内容',
        threats: '威胁或暴力倾向',
        hate_abuse: '仇恨言论或辱骂',
        scam_fraud: '诈骗或可疑链接',
        other: '其他违规行为'
      }
    },
    footer: {
      agePolicy: '仅限 18 岁以上。使用 RandomChat 即表示您同意服务条款与隐私政策。',
      allRightsReserved: '版权所有。',
      disclaimer: 'RandomChat 是匿名聊天平台，请勿泄露任何个人隐私信息。'
    }
  },

  ja: {
    brand: {
      name: 'RandomChat',
      tagline: '完全無料・匿名のランダムテキストチャット',
      description: '気の合う見知らぬ人と今すぐ繋がる。登録不要・安全・履歴を残さない。',
      noAccount: 'アカウント登録不要',
      freeInstant: '無料 • 匿名 • 即座に接続'
    },
    nav: {
      startChat: 'チャットを始める',
      safety: '安全ガイド',
      faq: 'よくある質問',
      privacy: 'プライバシー',
      terms: '利用規約',
      about: '当サイトについて',
      contact: 'お問い合わせ',
      theme: 'テーマ',
      language: '言語'
    },
    hero: {
      headline: '新しい誰かと話そう。',
      subheadline: '気の合う見知らぬ人との気軽なチャット。登録なし、煩わしさゼロ、ワンクリック接続。',
      cta: 'チャットを始める',
      badge: '無料 • 匿名 • 即座に接続'
    },
    howItWorks: {
      title: 'ご利用の流れ',
      step1Title: '1. 条件を設定',
      step1Desc: 'ニックネームを決めて、話したい相手の条件を選択。',
      step2Title: '2. スピードマッチング',
      step2Desc: 'サーバーがアクティブでお互いの条件に合う相手を検索。',
      step3Title: '3. リアルタイムチャット',
      step3Desc: '安全にメッセージを交換。いつでも次の相手にスキップ可能。'
    },
    safetyBanner: {
      title: '安心・匿名のプライベート設計',
      tip1: 'パスワード、電話番号、住所、金融情報は絶対に教えないでください。',
      tip2: '不快な行為にはすぐに通報・ブロック機能をご利用ください。',
      tip3: 'メッセージは一時的でサーバーに保存されません。',
      ageNotice: '当サービスは18歳以上の方のみご利用いただけます。'
    },
    setup: {
      title: 'クイック設定',
      nicknameLabel: '一時ニックネーム',
      nicknamePlaceholder: '例: さくら99',
      genderLabel: 'あなたの性別',
      male: '男性',
      female: '女性',
      preferenceLabel: '話したい相手',
      anyone: '誰でも',
      countryLabel: '国',
      languageLabel: '言語',
      cta: '相手を探す',
      errors: {
        nicknameRequired: 'ニックネームを入力してください',
        nicknameLength: '2〜20文字で入力してください',
        nicknameChars: '英数字、ひらがな、カタカナ、漢字が使用できます',
        nicknameReserved: 'このニックネームは予約されています'
      }
    },
    matching: {
      title: '相手を探しています...',
      subtitle: '条件に合う見知らぬ人と接続しています',
      lookingFor: '希望条件',
      cancel: 'キャンセル',
      foundTitle: '相手が見つかりました！',
      connecting: 'リアルタイム接続を確立しています...'
    },
    chat: {
      connectedWith: 'チャット相手:',
      connectedStatus: 'オンライン',
      placeholder: 'メッセージを入力...',
      send: '送信',
      attach: 'ギャラリーから写真を送信',
      typing: '相手が入力中...',
      nextStranger: '次の相手',
      leave: '退出',
      report: '通報',
      block: 'ブロック',
      coldGateLimit: '2通送信しました。相手の返信をお待ちください。',
      disconnected: '相手が退出しました。',
      findAnother: '次の相手を探す',
      you: 'あなた',
      stranger: '相手'
    },
    modals: {
      nextTitle: '次の相手を探しますか？',
      nextDesc: '現在の会話を終了し、再びマッチング待機列に入ります。',
      leaveTitle: 'チャットを終了しますか？',
      leaveDesc: '接続を終了し、トップページに戻ります。',
      stay: '残る',
      confirmNext: '次の相手へ',
      confirmLeave: '退出する',
      reportTitle: 'ユーザーを通報',
      reportReasonLabel: '通報理由',
      reportDetailsLabel: '詳細情報（任意）',
      reportDetailsPlaceholder: '状況を簡単に入力してください...',
      submitReport: '通報を送信',
      cancel: 'キャンセル',
      blockTitle: 'ユーザーをブロック',
      blockDesc: '即座に切断し、今後のマッチングを防ぎます。',
      confirmBlock: 'ブロックして切断',
      reasons: {
        harassment: '嫌がらせ・いじめ',
        spam: 'スパム・宣伝Bot',
        sexual_inappropriate: '不適切・わいせつな内容',
        threats: '脅迫・暴力的な発言',
        hate_abuse: '差別・ヘイトスピーチ',
        scam_fraud: '詐欺・フィッシング',
        other: 'その他の違反'
      }
    },
    footer: {
      agePolicy: '18歳以上限定。利用規約およびプライバシーポリシーに同意の上ご利用ください。',
      allRightsReserved: '無断転載を禁じます。',
      disclaimer: 'RandomChat は匿名チャットです。個人情報を開示しないでください。'
    }
  },

  ko: {
    brand: {
      name: 'RandomChat',
      tagline: '무료 익명 랜덤 텍스트 채팅',
      description: '마음이 맞는 낯선 사람과 즉시 연결하세요. 휘발성 데이터, 안전함, 회원가입 불필요.',
      noAccount: '회원가입 필요 없음',
      freeInstant: '무료 • 익명 • 즉시 연결'
    },
    nav: {
      startChat: '채팅 시작',
      safety: '안전 가이드',
      faq: '자주 묻는 질문',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      about: '소개',
      contact: '문의하기',
      theme: '테마',
      language: '언어'
    },
    hero: {
      headline: '새로운 사람과 대화해보세요.',
      subheadline: '취향이 맞는 낯선 사람과의 자연스러운 대화. 계정도, 복잡한 절차도 없이 1초 만에 즉시 연결됩니다.',
      cta: '채팅 시작하기',
      badge: '무료 • 익명 • 즉시 연결'
    },
    howItWorks: {
      title: '이용 방법',
      step1Title: '1. 설정 선택',
      step1Desc: '임시 닉네임을 정하고 대화하고 싶은 상대 조건을 선택하세요.',
      step2Title: '2. 즉시 매칭',
      step2Desc: '서버가 활성화된 최적의 대화 상대를 자동으로 찾아줍니다.',
      step3Title: '3. 실시간 채팅',
      step3Desc: '안전하게 메시지를 주고받고, 언제든 다음 상대로 넘어갈 수 있습니다.'
    },
    safetyBanner: {
      title: '기본적으로 안전하고 익명 보장',
      tip1: '비밀번호, 전화번호, 주소, 금융 정보를 절대로 공유하지 마세요.',
      tip2: '부적절한 행동을 발견하면 즉시 신고 및 차단 기능을 이용하세요.',
      tip3: '대화 내용은 일시적이며 서버에 영구 저장되지 않습니다.',
      ageNotice: '본 서비스는 만 18세 이상 성인만 이용할 수 있습니다.'
    },
    setup: {
      title: '빠른 게스트 설정',
      nicknameLabel: '임시 닉네임',
      nicknamePlaceholder: '예: 여행자99',
      genderLabel: '내 성별',
      male: '남성',
      female: '여성',
      preferenceLabel: '대화 상대',
      anyone: '누구나',
      countryLabel: '국가',
      languageLabel: '언어',
      cta: '상대 찾기',
      errors: {
        nicknameRequired: '닉네임을 입력해주세요',
        nicknameLength: '닉네임은 2자 이상 20자 이하이어야 합니다',
        nicknameChars: '문자, 숫자, 띄어쓰기, 하이픈만 사용할 수 있습니다',
        nicknameReserved: '이 닉네임은 시스템 예약어입니다'
      }
    },
    matching: {
      title: '상대를 찾는 중...',
      subtitle: '대화 가능한 낯선 사람을 검색하고 있습니다',
      lookingFor: '희망 조건',
      cancel: '검색 취소',
      foundTitle: '상대를 찾았습니다!',
      connecting: '보안 실시간 연결을 설정하는 중입니다...'
    },
    chat: {
      connectedWith: '대화 중인 상대:',
      connectedStatus: '온라인',
      placeholder: '메시지를 입력하세요...',
      send: '전송',
      attach: '갤러리에서 사진 공유',
      typing: '상대방이 입력 중입니다...',
      nextStranger: '다음 상대',
      leave: '채팅 나가기',
      report: '신고',
      block: '차단',
      coldGateLimit: '메시지를 2건 보냈습니다. 상대방의 답장을 기다려주세요.',
      disconnected: '상대방이 대화를 종료했습니다.',
      findAnother: '다른 상대 찾기',
      you: '나',
      stranger: '상대방'
    },
    modals: {
      nextTitle: '다음 상대를 찾으시겠습니까?',
      nextDesc: '현재 대화가 종료되고 새로운 상대를 검색합니다.',
      leaveTitle: '채팅을 종료하시겠습니까?',
      leaveDesc: '정말 대화를 나가고 홈으로 돌아가시겠습니까?',
      stay: '머무르기',
      confirmNext: '다음 상대',
      confirmLeave: '나가기',
      reportTitle: '사용자 신고',
      reportReasonLabel: '신고 사유',
      reportDetailsLabel: '추가 상세 설명 (선택 사항)',
      reportDetailsPlaceholder: '문제를 간략히 설명해주세요...',
      submitReport: '신고 제출',
      cancel: '취소',
      blockTitle: '사용자 차단',
      blockDesc: '즉시 연결이 해제되며 향후 다시 매칭되지 않습니다.',
      confirmBlock: '차단 및 연결 종료',
      reasons: {
        harassment: '괴롭힘 또는 따돌림',
        spam: '스팸 또는 봇 활동',
        sexual_inappropriate: '부적절하거나 음란한 콘텐츠',
        threats: '협박 또는 폭력',
        hate_abuse: '혐오 발언 또는 욕설',
        scam_fraud: '사기 또는 의심스러운 링크',
        other: '기타 커뮤니티 가이드라인 위반'
      }
    },
    footer: {
      agePolicy: '만 18세 이상 전용. RandomChat 이용 시 이용약관 및 개인정보처리방침에 동의하는 것으로 간주됩니다.',
      allRightsReserved: 'All rights reserved.',
      disclaimer: 'RandomChat은 익명 채팅 플랫폼입니다. 개인 정보를 절대로 공개하지 마세요.'
    }
  },

  it: {
    brand: {
      name: 'RandomChat',
      tagline: 'Chat Testuale Casuale e Anonima Gratuita',
      description: 'Connettiti all’istante con sconosciuti compatibili. Effimero, sicuro, senza registrazione.',
      noAccount: 'Nessun Account Richiesto',
      freeInstant: 'Gratis • Anonimo • Istantaneo'
    },
    nav: {
      startChat: 'Inizia Chat',
      safety: 'Sicurezza',
      faq: 'Domande Frequenti',
      privacy: 'Privacy',
      terms: 'Termini',
      about: 'Chi Siamo',
      contact: 'Contatti',
      theme: 'Tema',
      language: 'Lingua'
    },
    hero: {
      headline: 'Parla con qualcuno di nuovo.',
      subheadline: 'Conversazioni spontanee con sconosciuti compatibili. Zero account, zero complicazioni, connessione istantanea.',
      cta: 'Inizia Chat',
      badge: 'Gratis • Anonimo • Istantaneo'
    },
    howItWorks: {
      title: 'Come Funziona',
      step1Title: '1. Scegli le Preferenze',
      step1Desc: 'Scegli un nickname temporaneo e seleziona con chi desideri chattare.',
      step2Title: '2. Abbinamento Istantaneo',
      step2Desc: 'Il nostro server ti collega con uno sconosciuto attivo e compatibile.',
      step3Title: '3. Chat in Tempo Reale',
      step3Desc: 'Scambia messaggi in modo sicuro. Passa al prossimo sconosciuto quando vuoi.'
    },
    safetyBanner: {
      title: 'Sicuro e Anonimo per Default',
      tip1: 'Non condividere mai password, numeri di telefono o dati bancari.',
      tip2: 'Usa Segnala e Blocca immediatamente in caso di comportamenti molesti.',
      tip3: 'Le conversazioni sono effimere e non vengono mai salvate.',
      ageNotice: 'Devi avere almeno 18 anni per utilizzare questo servizio.'
    },
    setup: {
      title: 'Configurazione Rapida',
      nicknameLabel: 'Nickname Temporaneo',
      nicknamePlaceholder: 'es. Sognatore99',
      genderLabel: 'Il tuo Genere',
      male: 'Uomo',
      female: 'Donna',
      preferenceLabel: 'Chatta Con',
      anyone: 'Chiunque',
      countryLabel: 'Paese',
      languageLabel: 'Lingua',
      cta: 'Trova Sconosciuto',
      errors: {
        nicknameRequired: 'Inserisci un nickname',
        nicknameLength: 'Il nickname deve contenere tra 2 e 20 caratteri',
        nicknameChars: 'Sono ammessi solo lettere, numeri, spazi e trattini',
        nicknameReserved: 'Questo nickname è riservato dal sistema'
      }
    },
    matching: {
      title: 'Ricerca in corso...',
      subtitle: 'Cerco uno sconosciuto compatibile con cui chattare',
      lookingFor: 'Cerco',
      cancel: 'Annulla Ricerca',
      foundTitle: 'Sconosciuto Trovato!',
      connecting: 'Stabilisco la connessione in tempo reale...'
    },
    chat: {
      connectedWith: 'In chat con:',
      connectedStatus: 'Online',
      placeholder: 'Scrivi un messaggio...',
      send: 'Invia',
      attach: 'Condividi foto dalla galleria',
      typing: 'Lo sconosciuto sta scrivendo...',
      nextStranger: 'Prossimo Sconosciuto',
      leave: 'Esci dalla Chat',
      report: 'Segnala',
      block: 'Blocca',
      coldGateLimit: 'Hai inviato 2 messaggi. Attendi una risposta.',
      disconnected: 'Lo sconosciuto si è disconnesso.',
      findAnother: 'Trova un Altro Sconosciuto',
      you: 'Tu',
      stranger: 'Sconosciuto'
    },
    modals: {
      nextTitle: 'Cercare il prossimo sconosciuto?',
      nextDesc: 'Questo terminerà la conversazione attuale e cercherà un nuovo interlocutore.',
      leaveTitle: 'Uscire dalla conversazione?',
      leaveDesc: 'Sei sicuro di voler uscire e tornare alla pagina principale?',
      stay: 'Rimani',
      confirmNext: 'Trova Prossimo',
      confirmLeave: 'Esci',
      reportTitle: 'Segnala Utente',
      reportReasonLabel: 'Motivo della segnalazione',
      reportDetailsLabel: 'Dettagli aggiuntivi (facoltativo)',
      reportDetailsPlaceholder: 'Descrivi brevemente il problema...',
      submitReport: 'Invia Segnalazione',
      cancel: 'Annulla',
      blockTitle: 'Blocca Utente',
      blockDesc: 'Disconnetterà immediatamente e impedirà futuri abbinamenti.',
      confirmBlock: 'Blocca e Disconnetti',
      reasons: {
        harassment: 'Molestie o bullismo',
        spam: 'Spam o attività di bot',
        sexual_inappropriate: 'Contenuto inappropriato o esplicito',
        threats: 'Minacce o violenza',
        hate_abuse: 'Incitamento all’odio o insulti',
        scam_fraud: 'Truffe o link sospetti',
        other: 'Altra violazione delle linee guida'
      }
    },
    footer: {
      agePolicy: 'Solo per maggiorenni 18+. Utilizzando RandomChat accetti i nostri Termini e la Privacy Policy.',
      allRightsReserved: 'Tutti i diritti riservati.',
      disclaimer: 'RandomChat è una piattaforma anonima. Non rivelare mai informazioni personali.'
    }
  }
};

export function getTranslations(lang = 'en'): TranslationDict {
  return translations[lang] || translations.en;
}
