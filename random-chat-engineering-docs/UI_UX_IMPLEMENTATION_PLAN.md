# Full UI and UX Implementation Plan

## Product Principle
The interface should make starting a conversation nearly frictionless while making abuse difficult.

## Core Screens

### 1. Landing
Purpose:
- Explain random text/voice chat
- Start immediately
- Explain safety briefly
- Avoid unnecessary registration friction

States:
- Default
- Loading
- Service unavailable
- Age/safety gate if required

### 2. Match Setup
Controls:
- Text / Voice
- Language
- Interests
- Optional region preference
- Start button

Do not overload the user with filters.

### 3. Searching
Show:
- Searching state
- Cancel
- Approximate status
- Retry
- Timeout handling

Never expose another user's private data while matching.

### 4. Text Conversation
Required:
- Message list
- Composer
- Send
- Next
- Block
- Report
- Connection status
- Exit

States:
- Connecting
- Connected
- Partner typing
- Partner disconnected
- Message failed
- Rate limited
- Report submitted

### 5. Voice Conversation
Required:
- Connection state
- Mute
- End
- Next
- Block
- Report
- Network quality indicator

Never require microphone permission before the user explicitly chooses voice.

### 6. Post-Conversation
Optional:
- Was this conversation useful?
- Add/reconnect
- Report
- Start next

Avoid manipulative rating mechanics.

## Accessibility
- Keyboard navigation
- Visible focus
- Screen-reader labels
- Reduced motion
- Sufficient contrast
- Error messages not dependent on color
- Voice controls usable without tiny touch targets

## Mobile
Voice chat is mobile-first.
Design for:
- One-handed use
- Interruption/reconnection
- Background/foreground transitions
- Poor networks
- Permission denial

## Component Architecture
Prefer reusable primitives:
- Button
- Modal
- Toast
- Avatar
- MatchCard
- ChatMessage
- VoiceControlBar
- ReportDialog
- SafetyBanner
- ConnectionStatus

## UX Rule
Never hide a safety action more deeply than the primary social action. Block and Report must remain accessible during active interactions.
