# randomcaht.online --- All-in-One Website Build & SEO Prompt Pack

**Project:** randomcaht.online\
**Product:** Free, anonymous-by-default random text chat\
**Primary competitor/reference:** https://www.chatib.us/\
**Reference competitor research:** Chatib provides browser-based chat
without required registration for guest use, with chat rooms and
private/random chat functionality. Use it only as a product/usability
reference. Do **not** copy its branding, UI, layout, code, wording, or
visual identity.

> **Important:** This file is the consolidated, project-specific version
> of the website, SEO, FAQ, deployment, security, and operations
> prompts. The RandomChat product specification is authoritative. Do not
> reintroduce image/video sharing, accounts, payments, or other
> out-of-scope features.

------------------------------------------------------------------------

# 1. PROJECT CONTEXT

## Product definition

randomcaht.online is a free, anonymous-by-default random text-chat
website that lets visitors meet and talk to strangers without creating
an account.

Core loop:

Visitor\
→ Guest setup\
→ Temporary nickname\
→ Gender\
→ Matching preference\
→ Matchmaking\
→ Real-time text chat\
→ Next Stranger / Leave\
→ New match

The MVP optimizes for:

**Low friction → Fast matching → Reliable real-time chat → Easy next
match → Safety → Privacy**

## Authoritative MVP scope

### Build

-   Guest/no-account access
-   Temporary nickname
-   Self-declared Male/Female gender
-   Match preference: Male/Female/Anyone
-   Mutual server-side compatibility matching
-   Real-time text chat
-   Next Stranger
-   Leave
-   Disconnect handling
-   Temporary guest sessions
-   Two-message cold-message gate
-   Report
-   Block
-   Server-side rate limiting
-   Spam protection
-   Input validation
-   Output sanitization
-   Session expiration
-   Abuse controls
-   Safety guidance
-   Terms
-   Privacy
-   Safety page
-   Clear minimum-age policy
-   Light/Dark/System theme
-   Responsive mobile/tablet/desktop UI
-   Accessibility basics
-   i18n-ready architecture
-   Production observability
-   Automated tests
-   Cloudflare deployment

### Do NOT build

-   User accounts
-   Passwords
-   Email verification
-   User profiles
-   Friends/followers
-   Dating profiles
-   Payments
-   Subscriptions
-   Premium accounts
-   Voice calls
-   Video calls
-   Image sharing
-   File sharing
-   Permanent chat history
-   Permanent media storage
-   Native mobile apps
-   Advanced recommendation algorithms
-   Complex admin dashboards
-   Microservices

**Critical scope rule:** Older project notes may mention temporary
image/video sharing. Ignore that. The MVP is **text chat only**.

------------------------------------------------------------------------

# 2. MASTER WEBSITE CREATION PROMPT

``` text
I have initialized a new AstroJS project for:

Name: RandomChat
Domain: randomcaht.online

I want you to build the production-capable MVP of this website.

Before writing code:

1. Read all available project source documents:
   - PRD.md
   - ARCHITECTURE.md
   - UI-UX.md
   - DESIGN.md
   - IMPLEMENTATION.md
   - LAUNCH_CHECKLIST.md

2. Inspect the existing Astro project:
   - Astro version
   - package manager
   - dependencies
   - Tailwind configuration
   - routes
   - components
   - existing styles
   - Cloudflare configuration
   - environment variables
   - Git status
   - deployment setup

3. Use the Astro documentation MCP/current Astro documentation for any
   Astro-specific implementation question.

4. Use the Tailwind v4 documentation/skill when working with Tailwind v4.

5. Use DESIGN.md as the visual authority.

6. Do not overwrite existing working code blindly.

7. Before implementation, produce a short implementation map and identify
   any remaining conflicts in the source documents.

PRODUCT:

randomcaht.online is a free, anonymous-by-default random text-chat website.

Core flow:

Visitor
→ Guest setup
→ Nickname
→ Gender
→ Chat preference
→ Matchmaking
→ Real-time text chat
→ Next Stranger / Leave
→ New match

The site requires no account.

GUEST SETUP:

Nickname
Your gender:
- Male
- Female

Chat with:
- Male
- Female
- Anyone

Start Chat

MATCHING:

Matching must be server-side and mutually compatible.

Example:

A:
gender = Male
preference = Female

B:
gender = Female
preference = Male

Compatible = YES

A:
gender = Male
preference = Female

B:
gender = Male
preference = Anyone

Compatible = NO

Prevent:
- duplicate matches
- race conditions
- multiple active matches per session
- matching unavailable sessions
- rapid rematching with the same stranger

REALTIME:

Use:
- Cloudflare
- Cloudflare Worker
- Cloudflare Durable Objects
- WebSockets
- WebSocket Hibernation where appropriate

Astro handles the website/UI and HTTP functionality.

Do not simulate realtime state inside the frontend.

The server/realtime layer is authoritative.

CHAT:

Build text-only realtime chat.

Do not build:
- image sharing
- video sharing
- voice
- file sharing
- permanent chat history

Validate all messages server-side.

Apply:
- message length limits
- payload limits
- rate limiting
- spam protection
- sanitization/output encoding

COLD-MESSAGE GATE:

A user can send:
Message 1
Message 2

without receiving a reply.

Message 3 is rejected until the other participant replies.

After a reply:
Message 3 becomes accepted.

The counter must be server-side and cannot be bypassed through:
- refresh
- reconnect
- another tab
- modified client state
- modified WebSocket payloads

SESSION:

Create temporary guest sessions.

Conceptually:

GuestSession {
  sessionId
  nickname
  gender
  preference
  status
  createdAt
  lastSeenAt
  activeMatchId
}

Use unpredictable session identifiers.

Do not allow clients to arbitrarily modify:
- sessionId
- activeMatchId
- status

SAFETY:

Implement:
- Report
- Block
- rate limiting
- spam protection
- connection limits
- matchmaking request limits
- report abuse protection
- oversized payload protection
- XSS protection
- HTML/script injection protection
- abuse restrictions

REPORT FLOW:

Chat
→ Report
→ Select reason
→ Submit
→ Confirmation
→ Optionally Block / Leave

Reports must have a defined destination/storage mechanism.

PRIVACY:

Do not require:
- email
- password
- phone
- real name
- profile photo
- social media account

Temporary data may include:
- anonymous session identifier
- temporary nickname
- matching/session state
- connection timestamps
- abuse/rate-limit identifiers
- report information where required

Do not claim that users are impossible to identify or that conversations
cannot be captured by another participant.

LEGAL:

Create:
- Privacy Policy
- Terms & Conditions
- Safety page
- About Us
- Contact Us
- clear minimum-age policy

The legal pages must match actual implementation.

UI:

Follow DESIGN.md.

Do not copy Chatib branding, layout, code, or visual identity.

Use:
- strong typography
- whitespace
- clear hierarchy
- strategic gradients
- consistent SVG icons
- accessible labels
- modern premium visual language

Do not use emoji as primary interface icons.

LANDING:

Communicate immediately:

What?
Random stranger chat.

Account?
None.

Cost?
Free.

Action?
Start Chat.

Sections:
- Header
- Hero
- Start Chat CTA
- How it works
- Safety/trust
- FAQ
- Footer/legal

Do not use stock photos of people.

UI STATES:

LANDING
→ SETUP
→ VALIDATING
→ MATCHING
→ MATCH FOUND
→ CONNECTING
→ CONNECTED
→ NORMAL CHAT
→ NEXT / LEAVE
→ DISCONNECTED

Also support:
- ERROR
- OFFLINE
- RATE LIMITED
- SESSION EXPIRED
- COLD MESSAGE LIMIT
- REPORT SUBMITTED

Required screens:
1. Landing
2. Guest Setup
3. Matching
4. Match Found / Connecting
5. Active Chat
6. Cold Message Limit
7. Stranger Disconnected
8. Leave Confirmation
9. Report
10. Block
11. Settings
12. Safety
13. Privacy
14. Terms
15. Cookie Policy if applicable
16. About
17. Contact
18. Offline
19. Error
20. Rate Limited
21. 404
22. 500

MOBILE:

The product must be mobile-first and responsive.

Verify:
- keyboard does not cover composer
- messages scroll correctly
- header remains usable
- touch targets are adequate
- modals fit small screens
- long nicknames do not break layout
- long messages wrap
- error messages do not overflow

ACCESSIBILITY:

Implement:
- semantic HTML
- keyboard navigation
- visible focus
- focus management
- accessible labels
- screen-reader announcements
- aria-live where appropriate
- reduced motion
- sufficient contrast
- non-color-only state indicators

THEMES:

Support:
- Light
- Dark
- System

Persist theme preference.

I18N:

All user-facing UI strings must be i18n-ready.

Do not let i18n work delay the realtime core.

SEO:

Implement technically correct on-page SEO without keyword stuffing.

Create:
- unique title
- meta description
- canonical URL
- Open Graph tags
- Twitter/X card tags
- robots.txt
- sitemap.xml
- structured data where appropriate
- semantic headings
- descriptive image alt text
- clean URLs
- favicon
- web manifest if appropriate

Homepage should have useful, human-readable content explaining the product.

FAQ:

Add the SEO-friendly FAQ from the dedicated FAQ prompt below.

ERROR PAGES:

Create:
- 404
- 500

They should:
- match the site's design
- explain the issue clearly
- provide a useful route back to the homepage
- not expose stack traces or internal information

ANALYTICS:

Add Google Analytics using a configurable measurement ID.

Do not hard-code a real production measurement ID.

Use an environment/configuration variable.

Make sure the Privacy Policy accurately describes analytics.

SECURITY HEADERS:

For Cloudflare Pages static deployment, create a public/_headers file.

Include appropriate security headers such as:
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Content-Security-Policy where compatible
- Strict-Transport-Security only after HTTPS is confirmed
- X-Frame-Options or equivalent CSP frame-ancestors where appropriate

Do not create a CSP that breaks WebSockets, analytics, or required functionality.

For SSR/Worker-generated responses, implement headers in the server/Worker
response instead of assuming public/_headers applies.

CLOUDFLARE:

Use current Astro + Cloudflare documentation.

For a new Astro project, prefer Cloudflare Workers when the project requires
server-side/realtime functionality.

Do not deploy the realtime system as a fake static-only application.

CUSTOM DOMAIN:

The production canonical domain is:

https://randomcaht.online

Do not allow preview/development domains to compete with production in search.

If Cloudflare Pages is used for any static deployment, configure preview
domains with X-Robots-Tag: noindex.

If Cloudflare Workers is used, connect the custom domain and disable the
workers.dev public domain when appropriate so the production domain remains
the canonical public endpoint.

MAIL ROUTING:

Configure Cloudflare Email Routing for addresses such as:

hello@randomcaht.online
support@randomcaht.online
privacy@randomcaht.online

Forward them to the user's chosen Gmail inbox.

Do not expose personal Gmail addresses publicly if an alias can be used.

DO NOT:

- invent framework APIs
- introduce unnecessary dependencies
- introduce Supabase just because it is popular
- build out-of-scope features
- fake realtime behavior
- trust client-side security
- expose secrets
- copy competitor UI
- add random colors
- add unnecessary animations
- add unnecessary dashboards

Build correctness before complexity.

After every major phase:
- run tests
- run typecheck
- run lint
- run build
- fix errors

Do not consider the project complete because it looks polished.

The critical product loop must work:

FAST MATCH
+
CORRECT MATCH
+
RELIABLE REALTIME CHAT
+
SAFE ANONYMOUS UX
+
CLEAN SESSION LIFECYCLE
```

------------------------------------------------------------------------

# 3. COMPETITOR RESEARCH / IMPROVEMENT PROMPT

``` text
Analyze the competitor website:

https://www.chatib.us/

Use it only as a product and usability reference.

Do NOT copy:
- branding
- logo
- colors
- UI
- layout
- code
- copywriting
- visual identity

Study the competitor and identify:

1. Core user journey
2. First-time-user experience
3. Navigation
4. Chat flow
5. Matching behavior
6. Mobile UX
7. Safety controls
8. Privacy messaging
9. SEO/content structure
10. Trust signals
11. Conversion points
12. Friction points
13. Outdated UX patterns
14. Missing functionality
15. Opportunities to differentiate

Then create a "Better Than Competitor" recommendation for randomcaht.online.

Prioritize improvements around:

- faster first action
- clearer matching state
- better mobile chat
- stronger privacy communication
- better safety visibility
- cleaner interface
- modern typography
- better accessibility
- clearer error states
- transparent waiting experience
- better technical performance
- cleaner SEO structure

Do not recommend unnecessary features merely to make the feature list longer.

The MVP should remain focused on:
fast matching + reliable text chat + safety + privacy.
```

------------------------------------------------------------------------

# 4. SEO / ON-PAGE SEO PROMPT

``` text
Perform complete on-page SEO for:

Website:
https://randomcaht.online/

Brand:
RandomChat

Primary topic:
random chat / anonymous random text chat

IMPORTANT:
Do not misrepresent the service.

The product is:
- free
- browser-based
- anonymous-by-default
- no-account
- random text chat
- real-time
- stranger-to-stranger
- safety-focused

PRIMARY KEYWORDS:

random chat
random chat online
random stranger chat
anonymous chat
anonymous random chat
random text chat
talk to strangers online
chat with strangers
stranger chat
free random chat
free random chat online
random chat no sign up
anonymous chat no signup
random chat website
meet strangers online
online stranger chat

SECONDARY / SUPPORTING KEYWORDS:

random chat no registration
random text chat online
free stranger chat
anonymous text chat
talk to strangers
chat with random people
random conversation online
stranger text chat
free anonymous chat
random people chat
online random conversation
chat with strangers free
random chat without account
random chat without registration
instant random chat
one on one random chat

Do NOT keyword-stuff.

SEO should prioritize:
- search intent
- readability
- natural language
- helpful content
- strong information architecture
- page experience
- semantic HTML

IMPLEMENT:

1. Homepage title
2. Homepage meta description
3. Canonical URL
4. Open Graph metadata
5. Twitter/X metadata
6. robots.txt
7. sitemap.xml
8. favicon
9. structured data where appropriate
10. semantic heading hierarchy
11. descriptive alt text
12. internal linking
13. clean URLs
14. FAQ structured data if appropriate
15. Organization/WebSite structured data where appropriate

HOMEPAGE CONTENT:

Write approximately 800–1200 words of genuinely useful homepage content.

The content should explain:

- what RandomChat is
- how random chat works
- how to start
- why no account is required
- how matching works
- what users can expect
- privacy principles
- safety guidance
- how to use RandomChat on mobile
- what the Next Stranger feature does
- how the platform differs from traditional chat rooms
- why users should avoid sharing sensitive personal information

Use natural keyword variations.

Do not write robotic SEO filler.

Do not claim:
- guaranteed anonymity
- guaranteed safety
- guaranteed match speed
- specific user counts
- "best" or "number one" unless supported by evidence

The content should be useful first and optimized second.

Also create concise metadata for important pages:

Home
About
Contact
Privacy
Terms
Safety
FAQ
404
500

Ensure titles are unique and descriptions are not duplicated.

The production canonical domain is:

https://randomcaht.online/

Do not allow preview domains to become canonical.
```

------------------------------------------------------------------------

# 5. FAQ PROMPT

``` text
Add an SEO-friendly FAQ section to randomcaht.online.

Use clear, concise, genuinely helpful answers.

Questions:

1. What is RandomChat?
2. How does random chat work?
3. Is RandomChat free?
4. Do I need an account to use RandomChat?
5. Can I chat with strangers without signing up?
6. Is RandomChat anonymous?
7. How does random matching work?
8. Can I choose whether I chat with a male or female?
9. What does the "Anyone" matching option mean?
10. Can I use RandomChat on my phone?
11. What should I do if a stranger behaves inappropriately?
12. How do I report someone?
13. How does blocking work?
14. Why can I only send two messages before the other person replies?
15. What information should I avoid sharing?
16. Is my chat history permanently stored?
17. Can I leave a conversation and find another stranger?
18. What is the minimum age to use RandomChat?
19. Does RandomChat use cookies or analytics?
20. How can I contact RandomChat?

Answer each question accurately according to the actual implementation.

IMPORTANT:
Do not claim that RandomChat guarantees complete anonymity or prevents
screenshots/recording by other participants.

Add FAQPage JSON-LD structured data.

Use this structure:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "QUESTION",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER"
      }
    }
  ]
}
</script>

Only include FAQ structured data for questions and answers that are visibly
present on the page.

Keep the answers natural and useful.

Do not keyword-stuff the FAQ.
```

------------------------------------------------------------------------

# 6. SEO TECHNICAL AUDIT PROMPT

``` text
Perform a technical SEO audit of randomcaht.online.

Check:

INDEXING
- robots.txt
- sitemap.xml
- canonical tags
- accidental noindex
- duplicate URLs
- preview domains
- HTTP/HTTPS consistency
- www/non-www consistency

METADATA
- title
- meta description
- canonical
- Open Graph
- Twitter/X cards

CONTENT
- one clear H1 per page
- logical H2/H3 structure
- useful homepage content
- FAQ content
- internal links
- descriptive anchor text

PERFORMANCE
- image optimization
- lazy loading where appropriate
- unnecessary JavaScript
- unnecessary dependencies
- layout shifts
- font loading
- mobile performance

ACCESSIBILITY
- alt text
- labels
- keyboard navigation
- contrast
- semantic HTML

STRUCTURED DATA
- WebSite where appropriate
- Organization where appropriate
- FAQPage only where appropriate

SECURITY / INDEXING
- preview domains must not compete with production
- production pages must not accidentally contain noindex
- robots.txt must not block essential assets

Report:
1. Critical issues
2. High-priority issues
3. Medium-priority issues
4. Low-priority improvements

Fix issues instead of merely listing them when safe to do so.
```

------------------------------------------------------------------------

# 7. LOGO + FAVICON PROMPT

``` text
Create the RandomChat brand identity.

Brand:
RandomChat

Domain:
randomcaht.online

Use:

https://logofa.st/

for the logo and favicon generation workflow.

The brand should communicate:

- conversation
- connection
- spontaneity
- simplicity
- trust
- modern web product
- privacy without looking secretive

Do not copy Chatib or other competitor branding.

Logo requirements:
- simple
- recognizable at small sizes
- works on light backgrounds
- works on dark backgrounds
- works as a favicon
- no unnecessary text detail
- suitable for a modern SaaS/web-app aesthetic

After obtaining the logo assets:

Add:
- favicon.ico if provided/generated
- favicon PNG variants
- apple-touch-icon where appropriate
- SVG logo where appropriate
- web manifest icons where appropriate

Verify:
- browser tab
- mobile browser
- dark mode
- light mode
- social sharing preview

Do not use an arbitrary emoji as the final logo.
```

------------------------------------------------------------------------

# 8. PAGES PROMPT

``` text
Create these pages for randomcaht.online:

CORE:
/
 /chat
 /settings

TRUST / LEGAL:
 /about
 /contact
 /privacy
 /terms
 /safety

CONTENT:
 /faq

ERROR:
 /404
 /500

Each page must:

- use the site's design system
- be mobile responsive
- have proper metadata
- use semantic HTML
- have appropriate internal links
- have a consistent header/footer
- avoid unnecessary UI
- not expose implementation details

ABOUT PAGE:

Explain:
- what RandomChat is
- why it exists
- the product philosophy
- no-account approach
- safety/privacy principles

Do not invent founders, company history, offices, awards, user counts,
partnerships, or claims that are not provided.

CONTACT PAGE:

Provide a professional contact method.

Use configurable email addresses such as:

hello@randomcaht.online
support@randomcaht.online
privacy@randomcaht.online

Do not expose a personal Gmail address if a branded alias can be used.

PRIVACY PAGE:

Must match the actual implementation.

Cover:
- information collected
- temporary session data
- analytics
- cookies if applicable
- reports
- retention
- third-party services
- user rights where applicable
- contact method

TERMS:

Cover:
- acceptable use
- prohibited behavior
- age restriction
- abuse/reporting
- service availability
- limitations
- termination/restriction
- intellectual property
- contact information

SAFETY:

Explain:
- do not share sensitive information
- do not send financial information
- do not reveal addresses
- report abuse
- block users
- leave uncomfortable conversations
- never assume a stranger is trustworthy

Keep the copy clear and human-readable.

Do not present legal advice as fact. Use accurate, implementation-aligned
language and have the final legal text reviewed appropriately before launch.
```

------------------------------------------------------------------------

# 9. 404 / 500 ERROR PAGE PROMPT

``` text
Create polished 404 and 500 error pages.

404:

Explain that the requested page could not be found.

Provide:
- Back Home
- Start Chat

500:

Explain that something went wrong.

Provide:
- Try Again
- Back Home

Do NOT expose:
- stack traces
- server errors
- internal IDs
- infrastructure details
- environment variables
- API errors

Both pages must:
- match the RandomChat design system
- work on mobile
- have appropriate SEO behavior
- remain lightweight
- provide useful navigation
```

------------------------------------------------------------------------

# 10. ROBOTS.TXT + SITEMAP PROMPT

``` text
Create a production-ready robots.txt.

Production domain:

https://randomcaht.online/

Allow search engines to crawl public pages.

Reference the production sitemap:

https://randomcaht.online/sitemap.xml

Do not block CSS/JS/assets required for rendering.

Do not expose internal endpoints unnecessarily.

Create sitemap.xml containing only canonical, indexable public URLs.

Do NOT include:
- 500 pages
- private/session URLs
- temporary chat URLs if they should not be indexed
- duplicate URLs
- preview domains
- development URLs

Ensure the sitemap uses the production canonical domain.
```

------------------------------------------------------------------------

# 11. GOOGLE ANALYTICS PROMPT

``` text
Add Google Analytics to randomcaht.online.

Use Google Analytics 4.

Do not hard-code a production Measurement ID.

Create a configurable environment variable such as:

PUBLIC_GA_MEASUREMENT_ID

Only load Analytics when a valid ID is configured.

Do not expose any private/server secret.

Track useful product events where appropriate:

- start_chat
- matchmaking_started
- match_found
- chat_started
- next_stranger
- chat_left
- report_submitted
- block_used

Avoid collecting message contents or unnecessary personal information.

Update the Privacy Policy to accurately describe analytics.

Do not make Analytics break:
- WebSockets
- CSP
- mobile UI
- chat functionality
```

------------------------------------------------------------------------

# 12. CLOUDflare DEPLOYMENT DECISION PROMPT

``` text
Determine whether this Astro project should be deployed as:

1. Cloudflare Pages
or
2. Cloudflare Workers

Inspect the actual application architecture first.

This product requires:
- real-time WebSockets
- Cloudflare Durable Objects
- server-side matchmaking/session state

Therefore, do NOT choose a static-only deployment simply because the
landing page itself can be statically generated.

Use the current Astro Cloudflare deployment documentation.

For new Cloudflare projects, prefer the currently recommended Workers
deployment where it fits the architecture.

Explain:
- why the selected deployment target is appropriate
- what Astro adapter/configuration is required
- what Wrangler configuration is required
- what build command is required
- what deployment command is required
- how Durable Objects are configured
- how the custom domain is connected
- how preview/development domains are prevented from competing in SEO

Do not invent configuration.

Verify all configuration against the current installed Astro/Cloudflare
versions.
```

------------------------------------------------------------------------

# 13. CLOUDFLARE WORKERS DEPLOYMENT PROMPT

``` text
I have already logged in to Cloudflare Wrangler.

Deploy this Astro project to Cloudflare Workers.

Before deployment:

1. Inspect the current Astro version.
2. Inspect the existing Cloudflare configuration.
3. Use the current official Astro Cloudflare documentation.
4. Install/configure @astrojs/cloudflare if required.
5. Configure Wrangler correctly.
6. Configure Durable Objects required by the realtime architecture.
7. Configure WebSocket handling.
8. Configure WebSocket Hibernation where appropriate.
9. Verify environment variables.
10. Ensure production secrets are not committed.
11. Add a deployment script to package.json.

Use an appropriate script such as:

"deploy": "astro build && wrangler deploy"

ONLY if that command matches the actual project configuration.

Do not blindly use this command if the current Astro/Cloudflare setup requires
a different build/deployment sequence.

Production domain:

https://randomcaht.online/

After deployment:

- verify HTTPS
- verify custom domain
- verify WebSocket connectivity
- verify Durable Objects
- verify matchmaking
- verify two-browser chat
- verify disconnect handling
- verify Next Stranger
- verify Report/Block
- verify production environment variables

After the custom domain is connected, configure the workers.dev domain
according to the current Cloudflare controls so the production domain remains
the canonical public endpoint and preview/development URLs do not compete in
search.

Run a production smoke test before declaring deployment complete.
```

------------------------------------------------------------------------

# 14. CLOUDFLARE PAGES DEPLOYMENT PROMPT

``` text
Only use this deployment path if the actual project architecture supports
Cloudflare Pages appropriately.

I have already logged in to Cloudflare Wrangler.

Deploy this Astro project to Cloudflare Pages.

Before deployment:

1. Inspect the Astro version.
2. Inspect whether the project is truly static or requires server-side
   functionality.
3. Use the current official Astro Cloudflare documentation.
4. Configure the correct Astro output mode.
5. Configure Wrangler.
6. Add the correct build script.
7. Add a deploy script to package.json.
8. Verify environment variables.
9. Do not commit secrets.

If the realtime architecture requires Cloudflare Workers + Durable Objects,
STOP and recommend Workers instead of forcing the application into a static
Pages architecture.

If Pages is appropriate:

- build the project
- deploy it
- connect the custom domain
- verify HTTPS
- verify robots.txt
- verify sitemap.xml
- verify canonical tags
- verify production functionality

Do not allow the pages.dev domain to compete with the production domain.
```

------------------------------------------------------------------------

# 15. CLOUDFLARE \_HEADERS PROMPT

``` text
If the project is deployed as Cloudflare Pages static assets, create:

public/_headers

Use it for appropriate production headers.

Example structure:

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: DENY

For the preview Pages domain, use:

https://:project.pages.dev/*
  X-Robots-Tag: noindex

and the version/branch preview pattern if applicable.

IMPORTANT:

Do not blindly add a restrictive Content-Security-Policy.

The CSP must permit only the resources actually required by:
- Astro
- the application
- WebSockets
- Google Analytics if enabled
- required fonts/assets

Verify that the CSP does not break the application.

Enable HSTS only after HTTPS and the production domain have been confirmed.

If the application uses server-side rendering or Pages Functions/Workers,
do not assume public/_headers controls those generated responses. Add
security headers at the response/Worker layer instead.
```

------------------------------------------------------------------------

# 16. CLOUDFLARE MAIL ROUTING PROMPT

``` text
Configure Cloudflare Email Routing for:

randomcaht.online

Create useful branded aliases such as:

hello@randomcaht.online
support@randomcaht.online
privacy@randomcaht.online
abuse@randomcaht.online

Forward incoming mail to the configured Gmail inbox.

Do not expose the personal Gmail address on the public website.

Use branded addresses on:
- Contact page
- Privacy Policy
- Terms
- Safety page
- Report/abuse instructions where appropriate

Verify:
- DNS configuration
- MX records
- SPF/required email-routing records
- forwarding destination
- receipt of test emails

Do not claim that outgoing email is configured unless it has actually been
configured and tested.
```

------------------------------------------------------------------------

# 17. PRODUCTION SECURITY AUDIT PROMPT

``` text
Perform a production security audit before launch.

INPUT SECURITY:
- nickname
- messages
- report reasons
- WebSocket payloads
- query parameters
- headers
- JSON parsing
- payload size

SESSION SECURITY:
- unpredictable session IDs
- unpredictable match IDs
- unauthorized match access
- expired session access
- old match message injection
- multiple active matches
- reconnect abuse

REALTIME SECURITY:
- WebSocket authentication/session association
- message routing
- cross-match isolation
- connection limits
- stale connection cleanup

ABUSE:
- message spam
- matchmaking spam
- connection floods
- report spam
- repeated Next requests
- session creation abuse

WEB SECURITY:
- XSS
- HTML injection
- script injection
- CSRF where relevant
- security headers
- CSP compatibility
- HTTPS
- secret exposure

PRIVACY:
- analytics
- logs
- reports
- retention
- chat persistence
- third-party services

Never expose:
- server secrets
- API keys
- infrastructure credentials
- stack traces
- unnecessary internal IDs

Fix critical and high-severity issues before deployment.
```

------------------------------------------------------------------------

# 18. FINAL LAUNCH AUDIT PROMPT

``` text
Perform a complete launch-readiness audit for randomcaht.online.

DO NOT judge readiness based on visual polish.

Check:

PRODUCT:
- guest access
- nickname
- gender
- preference
- mutual matching
- matchmaking reliability
- waiting experience
- realtime chat
- cold-message gate
- Next Stranger
- Leave
- disconnects

SAFETY:
- Report
- Block
- rate limits
- spam protection
- abuse controls
- age policy
- safety guidance

PRIVACY:
- actual data collection
- retention
- analytics
- report handling
- privacy policy accuracy

SECURITY:
- XSS
- injection
- session isolation
- WebSocket isolation
- payload limits
- rate limits
- secrets
- security headers
- HTTPS

MOBILE:
- keyboard
- composer
- scrolling
- touch targets
- responsive layouts

SEO:
- titles
- descriptions
- canonical
- robots.txt
- sitemap.xml
- structured data
- Open Graph
- preview-domain noindex
- indexable public URLs

LEGAL:
- About
- Contact
- Privacy
- Terms
- Safety
- age policy

OPERATIONS:
- Cloudflare
- custom domain
- mail routing
- analytics
- monitoring
- rollback path

TESTING:
- unit
- integration
- two-browser E2E
- production smoke test

Classify findings:

P0 — Launch blocker
P1 — Fix before launch if possible
P2 — Post-launch improvement

Do not declare READY if any P0 blocker remains.
```

------------------------------------------------------------------------

# 19. PRODUCTION SMOKE TEST PROMPT

``` text
Run the final production smoke test against:

https://randomcaht.online/

Test:

1. HTTPS
2. Homepage
3. Logo
4. Favicon
5. Mobile layout
6. Dark mode
7. Light mode
8. System theme
9. Language UI
10. Start Chat
11. Guest session
12. Nickname validation
13. Gender selection
14. Preference selection
15. Browser A enters queue
16. Browser B enters queue
17. A/B match
18. A sends message
19. B receives message
20. B replies
21. Cold-message gate
22. Next Stranger
23. Leave
24. Disconnect
25. Report
26. Block
27. Rate limiting
28. Privacy page
29. Terms
30. Safety page
31. About
32. Contact
33. FAQ
34. 404
35. 500 behavior
36. robots.txt
37. sitemap.xml
38. canonical URL
39. Open Graph metadata
40. Google Analytics configuration
41. Cloudflare headers
42. Mail routing

Do not mark production READY if a core chat, security, privacy, or safety
function fails.
```

------------------------------------------------------------------------

# 20. GIT / SOURCE CONTROL PROMPT

``` text
Set up clean Git source control.

Requirements:

- main = production branch
- meaningful commits
- .env ignored
- .env.local ignored
- production secrets never committed
- .env.example exists
- README contains setup/deployment instructions

Suggested commits:

feat: establish astro foundation
feat: add design system
feat: build landing page
feat: build guest setup
feat: add guest sessions
feat: add realtime transport
feat: add matchmaking
feat: add chat
feat: add cold message gate
feat: add disconnect lifecycle
feat: add report and block
feat: add rate limiting
feat: add themes
feat: add i18n architecture
feat: add legal pages
feat: add SEO
test: add realtime e2e tests
test: add security tests
chore: configure cloudflare
chore: production deployment
```

------------------------------------------------------------------------

# 21. FINAL IMPLEMENTATION RULE

``` text
The most important part of randomcaht.online is NOT the landing page.

It is:

Correct stranger matching
+
Reliable real-time text chat
+
Correct session lifecycle
+
Server-side abuse controls
+
Safe anonymous UX
+
Privacy that matches implementation

Build those correctly first.

Do not hide architectural uncertainty behind frontend code.

If the selected Astro/Cloudflare integration cannot support the required
realtime behavior, stop and resolve the architecture before implementing a
workaround.

Do not launch because the website looks finished.

Launch only after:
- product works
- realtime works
- safety works
- privacy is understood
- security passes
- mobile works
- legal pages are live
- production infrastructure works
- two-browser E2E passes
- production smoke test passes
```

------------------------------------------------------------------------

# 22. RECOMMENDED PROJECT BUILD ORDER

``` text
PHASE 0
Read source documents
Inspect repository
Resolve conflicts

↓

PHASE 1
Astro foundation
Design tokens
Layout
Theme

↓

PHASE 2
Landing
Guest Setup

↓

PHASE 3
Guest Session

↓

PHASE 4
Cloudflare Worker
Durable Objects
WebSocket infrastructure

↓

PHASE 5
Matchmaking
Compatibility
Atomic match creation

↓

PHASE 6
Text Chat
Validation
Routing

↓

PHASE 7
Cold-message gate

↓

PHASE 8
Next
Leave
Disconnect
Stale-session cleanup

↓

PHASE 9
Report
Block
Rate limiting
Spam protection

↓

PHASE 10
Legal
Privacy
Safety
About
Contact

↓

PHASE 11
SEO
FAQ
robots.txt
sitemap.xml
Open Graph
Analytics

↓

PHASE 12
Responsive
Accessibility
Themes
i18n

↓

PHASE 13
Testing

↓

PHASE 14
Security audit

↓

PHASE 15
Cloudflare deployment

↓

PHASE 16
Production smoke test

↓

READY TO LAUNCH
```

------------------------------------------------------------------------

# 23. IMPORTANT PRODUCT DECISIONS --- DO NOT CHANGE WITHOUT REASON

  Decision                 Final MVP
  ------------------------ ----------------------------------
  Accounts                 No
  Guest access             Yes
  Nickname                 Yes
  Gender                   Male/Female
  Preference               Male/Female/Anyone
  Matching                 Server-side mutual compatibility
  Chat                     Real-time text
  Images                   No
  Video                    No
  Voice                    No
  Permanent chat history   No
  Cold-message gate        Yes
  Next Stranger            Yes
  Leave                    Yes
  Report                   Yes
  Block                    Yes
  Rate limiting            Yes
  Spam protection          Yes
  Theme                    Light/Dark/System
  i18n                     Architecture-ready
  Mobile                   P0
  Accessibility            P0
  SEO                      Yes
  FAQ                      Yes
  Analytics                Configurable
  Cloudflare               Yes
  Durable Objects          Yes
  WebSockets               Yes
  WebSocket Hibernation    Preferred where appropriate
  Mail routing             Yes
  Production domain        `https://randomcaht.online/`

------------------------------------------------------------------------

# 24. REFERENCE LINKS

-   Competitor/reference: https://www.chatib.us/
-   Logo/Favicon: https://logofa.st/
-   Ahrefs Keyword Generator: https://ahrefs.com/keyword-generator
-   Domain Search: https://instantdomainsearch.com/
-   Design MD: https://getdesign.md/vercel/design-md
-   Web Design Guidelines:
    https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines
-   Tailwind v4 Docs/Skill:
    https://www.skills.sh/lombiq/tailwind-agent-skills/tailwind-4-docs
-   Tailwind Agent Skills GitHub:
    https://github.com/Lombiq/Tailwind-Agent-Skills
-   Astro Docs: https://docs.astro.build/en/getting-started/
-   Astro Cloudflare Deployment:
    https://docs.astro.build/en/guides/deploy/cloudflare/
-   Astro Docs MCP:
    https://docs.astro.build/en/guides/build-with-ai/#astro-docs-mcp-server
-   Google Analytics: https://analytics.google.com/
-   Cloudflare: https://dash.cloudflare.com/
-   Google Search Console:
    https://search.google.com/search-console/about
-   Bing Webmaster Tools: https://www.bing.com/webmasters/about
-   Google AdSense: https://adsense.google.com/start/
-   Namecheap: https://namecheap.pxf.io/c/7622160/386170/5618
-   Spaceship: https://spaceship.sjv.io/c/7622160/1794549/21274
-   BigRock: https://www.bigrock.in/
-   GoDaddy: https://www.godaddy.com/en-in
-   Hostinger: https://www.hostinger.com/in

------------------------------------------------------------------------

# 25. AFFILIATE DISCLOSURE

If affiliate links are displayed on a separate resources/tutorial page,
use:

"Affiliate disclosure: Some links below are affiliate links. If you buy
through these links I may earn a small commission at no extra cost to
you. This helps support the creation of free resources."

Do NOT place unrelated affiliate content inside the RandomChat product
UI.

Do not add affiliate links merely because they exist in the development
reference material.

------------------------------------------------------------------------

# 26. FINAL AGENT INSTRUCTION

START NOW.

First inspect the repository and source documents.

Then report:

1.  Current project state
2.  Architecture
3.  Remaining conflicts
4.  Files to create/modify
5.  Implementation sequence

Then begin Phase 1.

Do not skip repository inspection. Do not build a fake realtime system.
Do not add image/video sharing. Do not add accounts. Do not copy the
competitor. Do not expose secrets.

Build RandomChat as a production-capable anonymous text-chat product.

---

# 27. COMPETITOR INTELLIGENCE — CHATIB RESEARCH UPDATE

Use the supplied Chatib screenshots and source material only as competitor research. Do not copy Chatib's UI, branding, wording, legal text, images, or code.

## Key findings

- Chatib exposes many destinations: free chat rooms, 1-on-1 chat, chat rooms, profile, login/registration and other utilities.
- Its setup shown in the screenshots asks for username, gender, age, country and state.
- Its content includes dating/conversation-oriented articles.
- Its safety material emphasizes 18+ eligibility, phishing, personal information, money requests, meeting strangers, reporting and parental guidance.
- Its privacy material describes a comparatively broad set of collected data, including username, gender, location fields, account data, IP/device information, cookies and analytics.
- Its Terms prohibit harassment, hate, illegal content, spam, impersonation, malicious scripts and other abusive behavior.

## What RandomChat should do differently

### 1. Reduce the product to one core loop

RandomChat should not reproduce the competitor's broad navigation.

Primary flow:

Start → Match → Talk → Next

Once matched, chat becomes the dominant interface.

### 2. Remove registration/login

RandomChat has no accounts in the MVP.

Do not show Login or Register in primary navigation.

Core promise:

**No account. No password. Start chatting.**

### 3. Keep setup minimal

Do not copy the competitor's country/state/age/profile fields.

Recommended setup:

- Temporary nickname
- Gender: Male / Female
- Chat with: Male / Female / Anyone
- 18+ confirmation

Do not collect country, state, city, email, phone, profile photo or exact date of birth unless a later requirement genuinely needs them.

### 4. Avoid dating positioning

RandomChat is for conversations, not dating.

Do not use:
- dating-first copy
- couples photography
- romantic hearts as the main identity
- sexualized imagery
- claims about meeting singles

Gender preferences are a matching control, not the brand identity.

### 5. Make safety actionable

Keep a visible but lightweight safety control in chat:

**Never share passwords, financial information, your address or private documents with strangers.**

Make Report, Block and Leave easy to find.

Safety page should cover:
- phishing
- suspicious links
- scams/money requests
- harassment
- impersonation
- personal information
- offline meetings
- screenshots/recordings
- reporting/blocking
- 18+ policy

Do not claim the platform can prevent another participant from taking screenshots or recordings.

### 6. Be precise about privacy

Do not market "no login" as "nothing is collected."

The existing RandomChat PRD correctly states that no login does not automatically mean anonymous. Define exactly what data is collected, why, and how long it is retained.

Prefer minimum operational data:
- temporary session ID
- temporary nickname
- matching attributes
- necessary connection/session timestamps
- abuse/rate-limit identifiers
- reports where submitted
- analytics only if actually enabled

Do not copy Chatib's broader data categories.

### 7. 18+ policy

Recommended MVP direction:

**RandomChat is intended for adults aged 18 and over.**

Use an explicit 18+ confirmation before chat.

Do not represent a checkbox as verified age or identity. Do not claim that the service can prevent every underage access attempt.

### 8. Do not add public chat rooms to the MVP

Chatib's chat rooms are a competitor feature. RandomChat's MVP should remain focused on random 1-on-1 text conversations.

Do not add:
- public rooms
- profiles
- friends
- AI chat
- voice
- video
- registration

unless explicitly approved as future scope.

## Recommended landing-page direction

H1:

**Talk to Someone New.**

Supporting copy:

**Free random text chat with strangers. No account. No profile. Just start a conversation.**

CTA:

**Start Chat**

Trust line:

**18+ • No account required • Text only**

How it works:

1. Pick a nickname
2. Choose who you'd like to chat with
3. Get matched
4. Start talking

Safety strip:

**Stay safe: Never share passwords, financial information, your address or private documents with strangers.**

## Recommended setup

```text
Start Chat

Choose a nickname
[ RandomUser123 ]

Your gender
[ Male ] [ Female ]

Chat with
[ Male ] [ Female ] [ Anyone ]

[ ] I confirm I am 18 or older.

[ Start Chat ]
```

## Recommended chat

```text
Stranger123
● Connected

--------------------------------

Stranger:
Hey

You:
Hello!

--------------------------------

Type a message...
[ Send ]

[ Next Stranger ]

[ ⋯ ]
Report
Block
Leave
```

## Competitor differentiation

| Area | Competitor observation | RandomChat decision |
|---|---|---|
| Navigation | Many sections | Minimal |
| Accounts | Login/registration | No accounts |
| Setup | Username + gender + age + country + state | Nickname + gender + preference + 18+ |
| Chat | Rooms + 1-on-1 + other features | Random 1-on-1 text |
| Dating | Dating-oriented content exists | Neutral conversation |
| Profiles | Profile functionality | No profiles |
| Safety | Detailed safety content | Detailed but concise/actionable |
| Privacy | Broad data collection described | Minimum necessary data |
| SEO | Content/article section | Search-intent content, no doorway pages |
| Brand | Older/general chat aesthetic | Modern, neutral, connection-focused |

## Final competitor strategy

Do not build "Chatib but prettier."

Build:

**A simpler, faster, safer and more privacy-conscious random text-chat experience.**

One promise:

**Talk to someone new.**

One action:

**Start Chat.**

One loop:

**Start → Match → Talk → Next.**
