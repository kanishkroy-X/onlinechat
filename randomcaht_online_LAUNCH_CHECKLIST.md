# LAUNCH_CHECKLIST.md

## randomcaht.online — MVP Launch Checklist

**Version:** 1.0  
**Status:** Pre-launch  
**Domain:** `randomcaht.online`  
**Working brand:** RandomChat *(placeholder — confirm before launch)*

> This checklist is the final launch gate. Do not mark an item complete until it has been implemented and verified.

---

# 1. Brand & Identity

- [ ] Confirm final display/brand name.
- [ ] Confirm whether the brand is **RandomChat** or another name.
- [ ] Create final logo.
- [ ] Use `logofa.st` if selected for logo generation.
- [ ] Create favicon from the final logo.
- [ ] Add favicon to Astro.
- [ ] Add mobile/Apple icon where appropriate.
- [ ] Create Open Graph/social preview image.
- [ ] Verify logo on light and dark backgrounds.
- [ ] Verify the domain spelling everywhere: `randomcaht.online`.

> **Important:** The domain is `randomcaht.online` (with "caht"). Do not silently change it to `randomchat.online`.

---

# 2. Core Product

- [ ] Homepage works.
- [ ] No-account guest access works.
- [ ] Temporary nickname works.
- [ ] Nickname validation works.
- [ ] Male/Female self-declared gender works.
- [ ] Male/Female/Anyone preference works.
- [ ] Both users' preferences are respected.
- [ ] Visible "Searching for a stranger..." waiting state works.
- [ ] Real-time text chat works without refresh.
- [ ] One active chat per guest is enforced.
- [ ] Next Stranger cleanly terminates the old match.
- [ ] Leave works.
- [ ] Browser-close handling works.
- [ ] Network-disconnect handling works.
- [ ] Stale sessions expire.
- [ ] Recent-match avoidance works when another compatible stranger is available.

---

# 3. Two-Message Cold-Message Gate

A user may send **2 consecutive messages** before the stranger replies.

- [ ] Message #1 works.
- [ ] Message #2 works.
- [ ] Message #3 is rejected before a reply.
- [ ] UI clearly explains the restriction.
- [ ] Stranger reply resets the counter.
- [ ] Normal chat resumes after the reply.
- [ ] Refresh cannot bypass the limit.
- [ ] Reconnect cannot bypass the limit.
- [ ] Another browser tab cannot bypass the limit.
- [ ] Server is authoritative for the counter.

---

# 4. Safety & Abuse Prevention

- [ ] Report is available.
- [ ] Report reasons:
  - [ ] Harassment
  - [ ] Spam
  - [ ] Sexual/inappropriate content
  - [ ] Threats
  - [ ] Hate/abuse
  - [ ] Scam/fraud
  - [ ] Other
- [ ] Report requests are rate-limited.
- [ ] Block works.
- [ ] Block terminates the current chat where appropriate.
- [ ] Empty messages are rejected.
- [ ] Message length limits work.
- [ ] Input validation is server-side.
- [ ] User content is safely rendered.
- [ ] XSS/injection testing passes.
- [ ] Session authorization is server-side.
- [ ] Users cannot access another match.
- [ ] Matchmaking requests are rate-limited.
- [ ] Message sending is rate-limited.
- [ ] Connection attempts are rate-limited.
- [ ] Next Stranger requests are rate-limited.
- [ ] Safety guidance is visible.
- [ ] Minimum-age policy is clearly displayed.

---

# 5. Privacy

Privacy posture:

> Collect and retain the minimum information required to operate the service and protect users.

- [ ] No account system.
- [ ] No passwords.
- [ ] No email required for chat.
- [ ] No permanent chat history.
- [ ] No permanent user profiles.
- [ ] No unnecessary message-content logging.
- [ ] Temporary sessions expire.
- [ ] Report/safety retention is documented.
- [ ] Data-retention periods are documented.
- [ ] Third-party services are disclosed.
- [ ] Analytics are disclosed.
- [ ] Cookie behavior is disclosed where applicable.
- [ ] Privacy Policy matches actual implementation.

---

# 6. Analytics Decision

**Do not add Google Analytics automatically.**

The product is anonymous-by-default and privacy-oriented. Standard analytics may conflict with that positioning.

Choose deliberately:

### Option A — Privacy-respecting analytics

- [ ] Select analytics provider.
- [ ] No unnecessary PII.
- [ ] No cross-site tracking.
- [ ] No chat content sent to analytics.
- [ ] No nickname sent as an analytics identity.
- [ ] Privacy Policy updated.

### Option B — Google Analytics

Only use if explicitly accepted.

- [ ] Confirm business need.
- [ ] Configure privacy controls.
- [ ] Do not send chat content.
- [ ] Do not send nickname as user identity.
- [ ] Do not send personal information.
- [ ] Determine consent/cookie requirements for target jurisdictions.
- [ ] Update Privacy Policy.

---

# 7. Visual/UI

- [ ] Read `DESIGN.md`.
- [ ] Implement `UI-UX.md`.
- [ ] Treat `DESIGN.md` as the final visual authority.

Primary palette:

```text
#492351  Deep Plum
#7F376D  Plum
#D55882  Rose
#FF808A  Coral
#FFBF92  Peach
#F6E5D9  Cream
```

- [ ] Sunset gradient is implemented.
- [ ] Gradient is used strategically.
- [ ] Landing can carry the strongest gradient treatment.
- [ ] Chat remains calmer for readability.
- [ ] UI is not overwhelmingly pink.
- [ ] No neon/nightclub aesthetic.
- [ ] No explicit/adult visual branding.
- [ ] Typography is consistent.
- [ ] Spacing is consistent.
- [ ] Border radius is consistent.
- [ ] Shadows are restrained.

---

# 8. Icons

- [ ] Consistent SVG icon family.
- [ ] Start Chat.
- [ ] Next Stranger.
- [ ] Leave.
- [ ] Send.
- [ ] Report.
- [ ] Block.
- [ ] Safety.
- [ ] Language.
- [ ] Sun.
- [ ] Moon.
- [ ] System.
- [ ] Male.
- [ ] Female.
- [ ] Anyone.
- [ ] Connection.
- [ ] Warning.
- [ ] Close.
- [ ] Back.
- [ ] More.
- [ ] Icon-only controls have accessible labels.
- [ ] Emoji are not used as primary UI icons.

---

# 9. Responsive Design

P0 requirement.

Test:

- [ ] Small mobile.
- [ ] Large mobile.
- [ ] Tablet.
- [ ] Laptop.
- [ ] Desktop.
- [ ] Portrait.
- [ ] Landscape where relevant.

Mobile:

- [ ] Chat uses the viewport correctly.
- [ ] Keyboard does not obscure the composer.
- [ ] Send is easy to tap.
- [ ] Next Stranger is easy to tap.
- [ ] Report/Block remain accessible.
- [ ] Long messages wrap.
- [ ] Long nicknames do not break layout.
- [ ] Modals fit small screens.

---

# 10. Theme

Supported:

```text
Light
Dark
System
```

- [ ] Light works.
- [ ] Dark works.
- [ ] System works.
- [ ] Preference persists locally.
- [ ] Refresh preserves preference.
- [ ] Theme flash is minimized.
- [ ] Landing works in both themes.
- [ ] Setup works in both themes.
- [ ] Matching works in both themes.
- [ ] Chat works in both themes.
- [ ] Modals work in both themes.
- [ ] Legal pages work in both themes.

---

# 11. Internationalization

- [ ] Translation-key architecture exists.
- [ ] Language selector works.
- [ ] Language preference persists.
- [ ] Core UI is translated.
- [ ] Missing translation fallback works.
- [ ] Mobile language selector works.
- [ ] No required UI strings remain hardcoded.
- [ ] Only completed languages are exposed.

---

# 12. Required Public Pages

- [ ] Homepage.
- [ ] FAQ.
- [ ] Safety.
- [ ] Privacy Policy.
- [ ] Terms & Conditions.
- [ ] About Us.
- [ ] Contact Us.
- [ ] 404.
- [ ] 500/error page.
- [ ] Cookie Policy if applicable.

---

# 13. Safety Page

Must cover:

- [ ] Do not share unnecessary personal information.
- [ ] Do not share address.
- [ ] Do not share phone number.
- [ ] Do not share passwords.
- [ ] Do not share payment details.
- [ ] Use Block when needed.
- [ ] Use Report for violations.
- [ ] Leave if uncomfortable.
- [ ] Minimum-age requirement.
- [ ] Anonymous chat does not guarantee that another user cannot capture content.

---

# 14. FAQ

Include:

1. [ ] What is randomcaht.online?
2. [ ] Is randomcaht.online free?
3. [ ] Do I need an account?
4. [ ] Is the chat anonymous?
5. [ ] How does random matching work?
6. [ ] Can I choose who I match with?
7. [ ] How do I get another stranger?
8. [ ] Is chat history saved?
9. [ ] How do I report/block someone?
10. [ ] What is the minimum age?
11. [ ] Is randomcaht.online safe?
12. [ ] Does it work on mobile?
13. [ ] What happens if a stranger disconnects?
14. [ ] How is it different from Omegle or Chatroulette?

If FAQ JSON-LD is implemented:

- [ ] JSON-LD matches visible FAQ content exactly.
- [ ] No misleading claims.
- [ ] Structured data validated.

---

# 15. SEO

Primary keyword:

```text
Random Chat
```

Supporting search-intent terms can include:

```text
random chat online
chat with strangers
anonymous chat
free random chat
text chat with strangers
random chat no sign up
anonymous chat no registration
omegle alternative
chatroulette alternative
```

These are **unverified search-intent ideas**, not confirmed keyword-volume data.

- [ ] Keyword research validated before major SEO investment.
- [ ] Search intent reviewed.
- [ ] Avoid keyword stuffing.
- [ ] Homepage title optimized.
- [ ] Meta description optimized.
- [ ] One clear H1.
- [ ] Logical H2/H3 hierarchy.
- [ ] Internal links.
- [ ] FAQ useful to users.
- [ ] Canonical URL.
- [ ] Open Graph metadata.
- [ ] Social preview image.
- [ ] robots.txt.
- [ ] sitemap.xml.
- [ ] Broken links checked.
- [ ] 404 verified.
- [ ] Public legal pages reviewed.

### Homepage SEO copy

- [ ] Long-form content is genuinely useful.
- [ ] If 800–1200 words are used, it does not overwhelm the product.
- [ ] No keyword stuffing.
- [ ] No misleading anonymity/safety claims.
- [ ] No SEO strategy intentionally targets minors.

---

# 16. Metadata

- [ ] `<title>`.
- [ ] Meta description.
- [ ] Canonical URL.
- [ ] `og:title`.
- [ ] `og:description`.
- [ ] `og:image`.
- [ ] `og:url`.
- [ ] `twitter:card`.
- [ ] Favicon.
- [ ] Language metadata.
- [ ] Appropriate theme-color metadata.

---

# 17. robots.txt

Verify:

```text
/randomcaht.online/robots.txt
```

- [ ] File exists.
- [ ] Production is crawlable where intended.
- [ ] Internal/private endpoints are not exposed unnecessarily.
- [ ] Temporary chat/session URLs are not included as public SEO pages.

---

# 18. sitemap.xml

- [ ] Sitemap exists.
- [ ] Canonical public pages included.
- [ ] Temporary chat/session URLs excluded.
- [ ] API/WebSocket endpoints excluded.
- [ ] Sitemap URL is correct.
- [ ] Sitemap references the canonical production domain.

---

# 19. Error Pages

### 404

```text
Page not found.

[Go Home]
```

- [ ] Works.
- [ ] Does not expose technical details.

### 500

```text
Something went wrong.

[Try Again]
```

- [ ] Works.
- [ ] No stack trace.
- [ ] No internal service details.
- [ ] No secrets.

---

# 20. Real-Time Architecture Gate

Before deployment, explicitly document the architecture.

Recommended direction:

```text
Astro
   ↓
Cloudflare Workers
   ↓
Durable Objects
   ↓
WebSockets
```

Alternative:

```text
Astro
   ↓
Hosted realtime provider
```

- [ ] Real-time transport selected.
- [ ] Matchmaking architecture selected.
- [ ] Session state architecture selected.
- [ ] Architecture documented in `ARCHITECTURE.md`.
- [ ] Production deployment supports persistent real-time connections.
- [ ] No client-only fake matchmaking.
- [ ] Two-browser production test passes.

---

# 21. Cloudflare

- [ ] Domain added to Cloudflare.
- [ ] DNS configured.
- [ ] SSL/TLS enabled.
- [ ] HTTPS works.
- [ ] Canonical domain decided.
- [ ] `www` behavior decided.
- [ ] Redirects configured if required.
- [ ] Production domain verified.

---

# 22. Preview/Worker Domain Indexing

Do not allow a preview hostname to compete with production SEO.

### If using Pages

- [ ] Configure `X-Robots-Tag: noindex` for the preview domain.
- [ ] Verify the actual `.pages.dev` URL.
- [ ] Ensure `noindex` does not affect production.

### If using Workers

- [ ] Decide whether `workers.dev` remains accessible.
- [ ] Prevent unintended duplicate indexing.
- [ ] Use the custom domain as canonical.
- [ ] Verify production is not accidentally marked `noindex`.

Do not blindly copy a `_headers` rule using a placeholder URL.

---

# 23. Cloudflare Mail Routing

Optional but useful for:

```text
contact@randomcaht.online
```

- [ ] Enable Cloudflare Email Routing.
- [ ] Add destination Gmail.
- [ ] Verify destination.
- [ ] Create required aliases.
- [ ] Test incoming mail.
- [ ] Contact Us page uses the correct address.
- [ ] Personal Gmail address is not unnecessarily exposed.

---

# 24. Security Headers

Review and configure appropriate headers for the deployment.

At minimum, evaluate:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Strict-Transport-Security
```

- [ ] Headers reviewed.
- [ ] CSP does not break WebSockets.
- [ ] CSP does not break analytics if analytics are used.
- [ ] CSP does not allow unnecessary third-party scripts.
- [ ] HSTS enabled only after HTTPS is confirmed.
- [ ] Headers verified in production.

---

# 25. Source Control

- [ ] Git repository exists.
- [ ] `main` is production branch.
- [ ] Feature branches used for substantial work.
- [ ] Commits are meaningful.
- [ ] `.env` is ignored.
- [ ] Secrets are not committed.
- [ ] `.env.example` exists.
- [ ] Production credentials are stored securely.

Suggested commits:

```text
feat: establish astro foundation
feat: build landing and guest setup
feat: add guest sessions
feat: add realtime transport
feat: add matchmaking
feat: add chat
feat: add cold message gate
feat: add safety controls
feat: add theme and i18n
test: add end-to-end chat flows
chore: production deployment
```

---

# 26. Testing Gate

Before launch:

- [ ] Unit tests pass.
- [ ] Integration tests pass.
- [ ] Two-browser E2E tests pass.
- [ ] Matchmaking matrix passes.
- [ ] Cold-message tests pass.
- [ ] Disconnect tests pass.
- [ ] Next Stranger tests pass.
- [ ] Report/block tests pass.
- [ ] Rate-limit tests pass.
- [ ] Security tests pass.
- [ ] Responsive tests pass.
- [ ] Accessibility checks pass.
- [ ] Theme tests pass.
- [ ] i18n tests pass.

---

# 27. Production Smoke Test

Run this after deployment:

```text
1. Open randomcaht.online.
2. Verify HTTPS.
3. Verify logo/favicon.
4. Verify homepage.
5. Verify theme.
6. Verify language.
7. Start Chat.
8. Create guest session.
9. Select gender.
10. Select preference.
11. Open a second browser.
12. Match both users.
13. Send message.
14. Verify delivery.
15. Test two-message gate.
16. Reply and unlock normal chat.
17. Test Next Stranger.
18. Test Leave.
19. Test disconnect.
20. Test Report.
21. Test Block.
22. Test mobile.
23. Test dark mode.
24. Check legal pages.
25. Check FAQ.
26. Check robots.txt.
27. Check sitemap.xml.
28. Check metadata.
29. Check Cloudflare headers.
30. Check analytics/privacy configuration.
```

---

# 28. Launch Blockers

Do **not** launch if any of these are unresolved:

- [ ] Real-time chat does not reliably work.
- [ ] Matchmaking can produce duplicate matches.
- [ ] Gender preference matching is incorrect.
- [ ] Third parties can access another user's chat.
- [ ] Cold-message gate can be bypassed.
- [ ] Rate limits are missing.
- [ ] XSS/injection vulnerability exists.
- [ ] Report/block does not work.
- [ ] Disconnects leave ghost sessions.
- [ ] Mobile chat is unusable.
- [ ] Privacy Policy contradicts implementation.
- [ ] Minimum-age policy is missing.
- [ ] Production secrets are exposed.
- [ ] HTTPS is broken.
- [ ] Production domain/canonical configuration is incorrect.
- [ ] Preview domain is unintentionally competing in search.
- [ ] Critical E2E tests fail.

---

# 29. Final Launch Decision

## Product

- [ ] Core loop works.
- [ ] Safety works.
- [ ] Privacy posture is understood.
- [ ] Legal pages are live.

## Technical

- [ ] Real-time architecture works.
- [ ] Cloudflare production deployment works.
- [ ] Tests pass.
- [ ] Security review passes.
- [ ] Monitoring/observability is available.

## Design

- [ ] `DESIGN.md` followed.
- [ ] `UI-UX.md` followed.
- [ ] Mobile quality verified.
- [ ] Dark/light verified.
- [ ] Icons verified.

## SEO

- [ ] Metadata verified.
- [ ] Sitemap verified.
- [ ] robots.txt verified.
- [ ] Canonical domain verified.
- [ ] Preview domains controlled.

## Operations

- [ ] Mail routing works if used.
- [ ] Analytics decision completed.
- [ ] Cloudflare DNS verified.
- [ ] Rollback path exists.

---

# 30. Launch Status

```text
NOT READY
   ↓
Development complete
   ↓
Testing complete
   ↓
Security complete
   ↓
Legal/privacy complete
   ↓
Production smoke test
   ↓
READY TO LAUNCH
```

**Final rule:**

> Do not launch because the website looks finished. Launch only when the anonymous matching, real-time chat, safety controls, privacy behavior, mobile UX, and production infrastructure have all been verified.
