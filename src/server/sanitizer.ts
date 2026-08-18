const RESERVED_NICKNAMES = new Set([
  'admin',
  'administrator',
  'system',
  'moderator',
  'mod',
  'staff',
  'support',
  'bot',
  'randomcaht',
  'randomchat',
  'official',
  'root',
  'server'
]);

export interface ValidationResult<T> {
  isValid: boolean;
  sanitizedValue?: T;
  error?: string;
}

/**
 * Escapes HTML characters to prevent XSS.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Validates and sanitizes a requested guest nickname.
 */
export function validateNickname(rawNickname: unknown): ValidationResult<string> {
  if (typeof rawNickname !== 'string') {
    return { isValid: false, error: 'Nickname must be a string' };
  }

  const trimmed = rawNickname.trim();

  if (trimmed.length < 2) {
    return { isValid: false, error: 'Nickname must be at least 2 characters long' };
  }

  if (trimmed.length > 20) {
    return { isValid: false, error: 'Nickname cannot exceed 20 characters' };
  }

  // Safe characters: letters, numbers, spaces, underscores, hyphens
  const validPattern = /^[a-zA-Z0-9 _-]+$/;
  if (!validPattern.test(trimmed)) {
    return { isValid: false, error: 'Nickname can only contain letters, numbers, spaces, and hyphens' };
  }

  if (RESERVED_NICKNAMES.has(trimmed.toLowerCase())) {
    return { isValid: false, error: 'This nickname is reserved for system administration' };
  }

  return {
    isValid: true,
    sanitizedValue: escapeHtml(trimmed)
  };
}

/**
 * Validates and sanitizes a text message.
 */
export function validateMessage(rawContent: unknown): ValidationResult<string> {
  if (typeof rawContent !== 'string') {
    return { isValid: false, error: 'Message content must be a string' };
  }

  const trimmed = rawContent.trim();

  if (trimmed.length === 0) {
    return { isValid: false, error: 'Message cannot be empty' };
  }

  if (trimmed.length > 1000) {
    return { isValid: false, error: 'Message cannot exceed 1000 characters' };
  }

  return {
    isValid: true,
    sanitizedValue: escapeHtml(trimmed)
  };
}

/**
 * Validates report reason.
 */
export function validateReportReason(reason: unknown): boolean {
  const allowed = [
    'harassment',
    'spam',
    'sexual_inappropriate',
    'threats',
    'hate_abuse',
    'scam_fraud',
    'other'
  ];
  return typeof reason === 'string' && allowed.includes(reason);
}
