# Database Specification

## Goals
Support matchmaking, conversations, voice sessions, moderation, reputation and abuse prevention while minimizing stored personal data.

## Core Entities

### users
- id UUID
- created_at
- updated_at
- status
- age_band / eligibility state where legally appropriate
- locale
- last_active_at

Do not store unnecessary identity information.

### profiles
- user_id
- display_name
- avatar_reference
- bio
- visibility
- created_at
- updated_at

### interests
- id
- slug
- name

### user_interests
- user_id
- interest_id
- created_at

Unique(user_id, interest_id)

### matchmaking_sessions
- id
- user_id
- mode: text|voice
- status
- language
- created_at
- expires_at

### matches
- id
- user_a_id
- user_b_id
- mode
- status
- started_at
- ended_at
- end_reason

Enforce canonical ordering for user pair uniqueness where appropriate.

### conversations
- id
- match_id
- created_at
- ended_at
- retention_policy

### messages
- id
- conversation_id
- sender_id
- body
- created_at
- moderation_state

Do not store deleted content beyond the approved moderation/audit retention policy.

### voice_sessions
- id
- match_id
- provider
- provider_session_reference
- started_at
- ended_at
- status

Never store raw audio by default.

### blocks
- blocker_id
- blocked_id
- created_at

Unique(blocker_id, blocked_id)

### reports
- id
- reporter_id
- reported_user_id
- match_id
- category
- description
- status
- created_at
- resolved_at

### moderation_actions
- id
- user_id
- action
- reason_code
- source
- expires_at
- created_at

## Required Indexes
- matchmaking status + mode + language + created_at
- messages conversation_id + created_at
- blocks blocker_id + blocked_id
- reports status + created_at
- moderation_actions user_id + expires_at

## Security
- Row-level authorization where supported
- Server-only writes for moderation tables
- Never trust client-supplied user_id
- Parameterized queries
- Encryption at rest through infrastructure
- TLS in transit

## Retention
Default to minimal retention.
Messages, reports and moderation evidence require explicit retention periods.

## Migration Rules
Every schema change:
1. Migration file
2. Forward test
3. Rollback/compatibility analysis
4. Production safety review
