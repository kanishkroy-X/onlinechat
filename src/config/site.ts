export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  domain: string;
  supportEmail: string;
  legalEntity: string;
  social: {
    twitterHandle?: string;
  };
  metrics: {
    onlineUsersEstimate: string;
    averageMatchSeconds: string;
    retentionPolicy: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'RandomChat',
  tagline: 'Instant, Private 1-on-1 Conversations',
  description: 'Connect 1-on-1 with strangers worldwide in private, ephemeral text rooms. No email, no signup, and no data tracking.',
  domain: 'randomchat.online',
  url: 'https://randomchat.online',
  supportEmail: 'support@randomchat.online',
  legalEntity: 'RandomChat Network',
  social: {
    twitterHandle: '@randomchat',
  },
  metrics: {
    onlineUsersEstimate: '4,800+',
    averageMatchSeconds: '< 2s',
    retentionPolicy: '0 logs saved',
  },
};
