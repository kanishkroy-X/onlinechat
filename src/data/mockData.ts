import type { User, Room, InboxItem, Conversation } from '../types/randomchat';

export const COUNTRY_FLAG_MAP: Record<string, { name: string; flag: string; cities: string[] }> = {
  ES: { name: 'Spain', flag: '🇪🇸', cities: ['Barcelona', 'Madrid', 'Valencia', 'Seville'] },
  IE: { name: 'Ireland', flag: '🇮🇪', cities: ['Dublin', 'Cork', 'Galway', 'Limerick'] },
  PK: { name: 'Pakistan', flag: '🇵🇰', cities: ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi'] },
  KR: { name: 'South Korea', flag: '🇰🇷', cities: ['Seoul', 'Busan', 'Incheon', 'Daegu'] },
  IT: { name: 'Italy', flag: '🇮🇹', cities: ['Milan', 'Rome', 'Florence', 'Naples'] },
  CA: { name: 'Canada', flag: '🇨🇦', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'] },
  IN: { name: 'India', flag: '🇮🇳', cities: ['Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune'] },
  BR: { name: 'Brazil', flag: '🇧🇷', cities: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'] },
  CZ: { name: 'Czech Republic', flag: '🇨🇿', cities: ['Prague', 'Brno', 'Ostrava', 'Plzeň'] },
  GB: { name: 'United Kingdom', flag: '🇬🇧', cities: ['London', 'Manchester', 'Edinburgh', 'Birmingham'] },
  US: { name: 'United States', flag: '🇺🇸', cities: ['New York', 'Los Angeles', 'Chicago', 'Austin', 'Miami'] },
  DE: { name: 'Germany', flag: '🇩🇪', cities: ['Berlin', 'Munich', 'Hamburg', 'Cologne'] },
  SG: { name: 'Singapore', flag: '🇸🇬', cities: ['Singapore'] },
  JP: { name: 'Japan', flag: '🇯🇵', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama'] },
  FR: { name: 'France', flag: '🇫🇷', cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse'] },
  AU: { name: 'Australia', flag: '🇦🇺', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'] },
  MX: { name: 'Mexico', flag: '🇲🇽', cities: ['Mexico City', 'Guadalajara', 'Monterrey'] },
  NL: { name: 'Netherlands', flag: '🇳🇱', cities: ['Amsterdam', 'Rotterdam', 'Utrecht'] }
};

export const POPULAR_SKILLS = [
  'TypeScript',
  'Astro',
  'Tailwind CSS',
  'UI/UX Design',
  'AI Engineering',
  'Python',
  'Music Production',
  'Photography',
  'Creative Writing',
  'Motion Design',
  '3D Modeling',
  'Game Dev',
  'Language Exchange',
  'Video Editing',
  'Sound Design',
  'Philosophy'
];

export const MOCK_USERS: User[] = [
  {
    id: 'user-1',
    username: 'Ava Martinez',
    age: 22,
    gender: 'female',
    countryCode: 'ES',
    countryName: 'Spain',
    city: 'Barcelona',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Coffee & indie music enthusiast ☕',
    skills: ['UI/UX Design', 'Photography', 'Tailwind CSS']
  },
  {
    id: 'user-2',
    username: 'Liam O\'Connor',
    age: 27,
    gender: 'male',
    countryCode: 'IE',
    countryName: 'Ireland',
    city: 'Dublin',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Always down for deep talks & rock playlists',
    skills: ['Music Production', 'Sound Design', 'Guitar']
  },
  {
    id: 'user-3',
    username: 'Zara Khan',
    age: 24,
    gender: 'female',
    countryCode: 'PK',
    countryName: 'Pakistan',
    city: 'Lahore',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Architectural designer & tea lover',
    skills: ['3D Modeling', 'Architecture', 'Digital Art']
  },
  {
    id: 'user-4',
    username: 'Noah Kim',
    age: 21,
    gender: 'male',
    countryCode: 'KR',
    countryName: 'South Korea',
    city: 'Seoul',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Night photography & ambient lo-fi vibes',
    skills: ['Photography', 'Motion Design', 'Video Editing']
  },
  {
    id: 'user-5',
    username: 'Sofia Rossi',
    age: 26,
    gender: 'female',
    countryCode: 'IT',
    countryName: 'Italy',
    city: 'Milan',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Exploring vintage cinema & art history',
    skills: ['Creative Writing', 'Philosophy', 'Language Exchange']
  },
  {
    id: 'user-6',
    username: 'Ethan Brown',
    age: 23,
    gender: 'male',
    countryCode: 'CA',
    countryName: 'Canada',
    city: 'Toronto',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Hiking enthusiast, looking for travel recommendations',
    skills: ['TypeScript', 'Astro', 'Python']
  },
  {
    id: 'user-7',
    username: 'Priya Nair',
    age: 25,
    gender: 'female',
    countryCode: 'IN',
    countryName: 'India',
    city: 'Bengaluru',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Tech explorer, bookworm & culinary experimentalist',
    skills: ['AI Engineering', 'Python', 'TypeScript']
  },
  {
    id: 'user-8',
    username: 'Lucas Mendes',
    age: 28,
    gender: 'male',
    countryCode: 'BR',
    countryName: 'Brazil',
    city: 'Rio de Janeiro',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Bossa nova, beach volleyball & language exchange',
    skills: ['Music Production', 'Language Exchange', 'Guitar']
  },
  {
    id: 'user-9',
    username: 'Elena Rostova',
    age: 23,
    gender: 'female',
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    city: 'Prague',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Graphic illustrator & European backpacker',
    skills: ['Digital Art', 'UI/UX Design', '3D Modeling']
  },
  {
    id: 'user-10',
    username: 'Marcus Johnson',
    age: 29,
    gender: 'male',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    city: 'London',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Vinyl collector, podcast host & coffee snob',
    skills: ['Sound Design', 'Creative Writing', 'Podcast Production']
  },
  {
    id: 'user-11',
    username: 'Maya Lin',
    age: 22,
    gender: 'female',
    countryCode: 'SG',
    countryName: 'Singapore',
    city: 'Singapore',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Street food lover & UI designer',
    skills: ['UI/UX Design', 'Tailwind CSS', 'Motion Design']
  },
  {
    id: 'user-12',
    username: 'Alexander Schmidt',
    age: 26,
    gender: 'male',
    countryCode: 'DE',
    countryName: 'Germany',
    city: 'Berlin',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    isOnline: true,
    statusMessage: 'Electronic music producer & cycling fanatic',
    skills: ['Music Production', 'Sound Design', 'Game Dev']
  }
];

export const MOCK_ROOMS: Room[] = [
  {
    id: 'room-1',
    name: 'India Chat Room',
    icon: '🇮🇳',
    category: 'Regional',
    onlineCount: 152,
    description: 'Vibrant conversations, culture, Bollywood, tech & food discussions.',
    rules: [
      'Be respectful to all participants.',
      'No spamming, excessive advertising or promotion.',
      'English, Hindi & regional languages welcome.'
    ]
  },
  {
    id: 'room-2',
    name: 'Dating Chat Room',
    icon: '💖',
    category: 'Social',
    onlineCount: 340,
    description: 'Connect with singles, share dating perspectives & find interesting people.',
    rules: [
      'Must be 18+ to participate.',
      'Respect personal boundaries; harassment is strictly prohibited.',
      'No sharing of unsolicited explicit content.'
    ]
  },
  {
    id: 'room-3',
    name: 'Singles Chat Room',
    icon: '✨',
    category: 'Social',
    onlineCount: 210,
    description: 'Casual open banter for singles looking to chat and mingle.',
    rules: [
      'Keep it friendly, authentic and welcoming.',
      'No offensive or degrading comments.',
      'Safety first — never share personal financial details.'
    ]
  },
  {
    id: 'room-4',
    name: 'General Chat Room',
    icon: '💬',
    category: 'Community',
    onlineCount: 580,
    description: 'The central hub for talking about anything under the sun.',
    rules: [
      'Keep discussions civil and engaging.',
      'No hate speech or discriminatory remarks.',
      'Have fun and meet people from around the globe.'
    ]
  },
  {
    id: 'room-5',
    name: 'College Chat Room',
    icon: '🎓',
    category: 'Campus',
    onlineCount: 185,
    description: 'University students sharing campus stories, exam memes & life tips.',
    rules: [
      'Student-friendly, positive environment.',
      'No commercial solicitation.',
      'Encourage peer support and study banter.'
    ]
  },
  {
    id: 'room-6',
    name: 'Music Chat Room',
    icon: '🎵',
    category: 'Interests',
    onlineCount: 78,
    description: 'Share your favorite artists, obscure vinyl finds & concert experiences.',
    rules: [
      'All genres and tastes respected.',
      'Share track recommendations constructively.',
      'No audio piracy links.'
    ]
  },
  {
    id: 'room-7',
    name: 'Chill & Hangout',
    icon: '☕',
    category: 'Lounge',
    onlineCount: 420,
    description: 'Low-key lounge for relaxed banter, late night thoughts & good vibes.',
    rules: [
      'Keep it calm and easygoing.',
      'No aggressive debating or trolling.',
      'Spread positive vibes.'
    ]
  },
  {
    id: 'room-8',
    name: 'International Chat Room',
    icon: '🌍',
    category: 'Global',
    onlineCount: 315,
    description: 'Cross-cultural exchange and language practice with members worldwide.',
    rules: [
      'Celebrate cultural diversity.',
      'Be patient with English learners.',
      'Zero tolerance for xenophobia or racism.'
    ]
  }
];

export const MOCK_INBOX_ITEMS: InboxItem[] = [
  {
    id: 'inbox-1',
    participant: MOCK_USERS[0], // Ava Martinez
    lastMessage: 'Hey! Loved that song recommendation you sent 🎶',
    timestamp: '2m ago',
    unreadCount: 1,
    type: 'chat'
  },
  {
    id: 'inbox-2',
    participant: MOCK_USERS[1], // Liam O'Connor
    lastMessage: 'Are you still up for the voice call later?',
    timestamp: '15m ago',
    unreadCount: 0,
    type: 'chat'
  },
  {
    id: 'inbox-3',
    participant: MOCK_USERS[2], // Zara Khan
    lastMessage: 'Missed voice call',
    timestamp: '1h ago',
    unreadCount: 0,
    type: 'call',
    status: 'Missed Call'
  },
  {
    id: 'inbox-4',
    participant: MOCK_USERS[4], // Sofia Rossi
    lastMessage: 'Sent you a chat request',
    timestamp: '3h ago',
    unreadCount: 1,
    type: 'request'
  }
];
