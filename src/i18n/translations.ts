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

export const translations: Record<string, TranslationDict> = {
  en: {
    brand: {
      name: 'randomcaht.online',
      tagline: 'Talk to someone new.',
      description: 'Free, anonymous-by-default random text chat with compatible strangers. No account required.',
      noAccount: 'No account needed',
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
      connectedWith: 'Connected with',
      connectedStatus: 'Connected',
      placeholder: 'Type a message...',
      send: 'Send',
      typing: 'Stranger is typing...',
      nextStranger: 'Next Stranger',
      leave: 'Leave Chat',
      report: 'Report',
      block: 'Block',
      coldGateLimit: "You've sent 2 messages. Please wait for a reply before sending another.",
      disconnected: 'Stranger has disconnected from the chat.',
      findAnother: 'Find Another Stranger',
      you: 'You',
      stranger: 'Stranger'
    },
    modals: {
      nextTitle: 'Find Next Stranger?',
      nextDesc: 'This will end your current conversation and place you back in the matching queue.',
      leaveTitle: 'Leave Conversation?',
      leaveDesc: 'You will disconnect from this stranger and return to the home screen.',
      stay: 'Stay in Chat',
      confirmNext: 'Next Stranger',
      confirmLeave: 'Leave Chat',
      reportTitle: 'Report Stranger',
      reportReasonLabel: 'Reason for Report',
      reportDetailsLabel: 'Additional Details (optional)',
      reportDetailsPlaceholder: 'Provide brief context if relevant...',
      submitReport: 'Submit Report',
      cancel: 'Cancel',
      blockTitle: 'Block Stranger',
      blockDesc: 'This will immediately disconnect you from this stranger and prevent further interaction.',
      confirmBlock: 'Block & Disconnect',
      reasons: {
        harassment: 'Harassment or Bullying',
        spam: 'Spam or Commercial Bot',
        sexual_inappropriate: 'Inappropriate or Explicit Content',
        threats: 'Threats or Violence',
        hate_abuse: 'Hate Speech or Discrimination',
        scam_fraud: 'Scam or Phishing Attempt',
        other: 'Other Violation'
      }
    },
    footer: {
      agePolicy: '18+ Only. By using randomcaht.online you agree to our Terms of Service and Privacy Policy.',
      allRightsReserved: 'All rights reserved.',
      disclaimer: 'randomcaht.online provides ephemeral, anonymous-by-default text chat. Never share sensitive private information.'
    }
  }
};

export function getTranslations(lang = 'en'): TranslationDict {
  return translations[lang] || translations.en;
}
