# Security Gap Assessment

## Threat Model

### 1. Account Abuse
Threats:
- Fake accounts
- Bot farms
- Ban evasion
- Credential stuffing
- Automated scraping

Controls:
- Rate limits
- Device/session signals
- Abuse scoring
- Login protection
- Progressive restrictions

### 2. Matchmaking Abuse
Threats:
- Queue flooding
- Matchmaking manipulation
- Targeting specific users
- Enumeration

Controls:
- Server-side queue management
- Rate limits
- Block-aware matching
- No predictable queue identifiers
- Randomized internal identifiers

### 3. Text Chat Abuse
Threats:
- Spam
- Phishing
- Sexual content
- Harassment
- Malicious links

Controls:
- Content moderation
- Link reputation checks
- Rate limits
- Report/block
- Escalation

### 4. Voice Abuse
Threats:
- Harassment
- Impersonation
- Recording without consent
- Deepfake/voice manipulation
- DoS on signaling

Controls:
- Secure ephemeral session credentials
- Strict session authorization
- Connection limits
- Report workflow
- No default recording
- Provider-side encryption
- Abuse detection where technically/legal appropriate

### 5. WebSocket Security
- Authenticate handshake
- Authorize every sensitive action
- Validate message schema
- Heartbeats/timeouts
- Maximum payload sizes
- Per-user and per-IP limits
- Disconnect abusive clients

### 6. Privacy
Do not expose:
- Email
- Phone
- IP
- Internal IDs
- Moderation state
- Private reports
- Internal risk scores

### 7. Client Security
Never rely on:
- Hidden buttons
- Client-side role checks
- LocalStorage authorization
- Client timestamps
- Client moderation decisions

## High-Risk Areas to Audit Before Launch
1. Voice provider credentials
2. WebSocket authorization
3. Matchmaking race conditions
4. Block bypass
5. Ban bypass
6. Rate-limit bypass
7. Report spam
8. SQL/NoSQL injection
9. XSS
10. CSRF where applicable
11. SSRF in URL previews
12. Dependency vulnerabilities
13. Secret leakage
14. Excessive logging

## Severity
Critical: immediate release blocker
High: fix before public launch
Medium: scheduled remediation
Low: backlog
