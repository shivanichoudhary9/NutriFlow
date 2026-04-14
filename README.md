# 🥗 NutriFlow AI: Context-Aware Nutrition & Habit Architect

> **NutriFlow AI** is a next-generation health companion that eliminates the friction of manual logging. By leveraging computer vision, real-time wearable data, environmental context, and AI-driven behavioral science, NutriFlow provides *just-in-time* interventions to help users make better food choices — before they even reach for the menu.

---

## 📋 Table of Contents

1. [The Problem](#-the-problem)
2. [The Solution](#-the-solution)
3. [Stand-Out Innovation Points](#-stand-out-innovation-points)
4. [Full Features Matrix](#-full-features-matrix)
5. [UI/UX Design Philosophy](#-uiux-design-philosophy)
6. [Technical Architecture](#-technical-architecture)
7. [AI & ML Pipeline](#-ai--ml-pipeline)
8. [API Integrations](#-api-integrations)
9. [Database Schema (Overview)](#-database-schema-overview)
10. [Security & Privacy](#-security--privacy)
11. [Accessibility](#-accessibility)
12. [Hackathon Roadmap](#-hackathon-roadmap-24-hour-execution-plan)
13. [Future Scope](#-future-scope)
14. [Team & Contributions](#-team--contributions)
15. [Setup & Installation](#-setup--installation)
16. [License](#-license)

---

## 🚨 The Problem

Modern health apps fail users in three critical ways:

- **Friction Overload**: Manual calorie logging takes 5–10 minutes per meal. 80% of users quit within 2 weeks.
- **Context Blindness**: Apps don't know *where* you are, *how* you slept, or *how stressed* you are — yet all of these dramatically affect food decisions.
- **Reactive, Not Proactive**: Apps tell you what you *did* wrong after the fact. They never intervene *before* you make a bad choice.

---

## 💡 The Solution

NutriFlow AI is a **proactive, frictionless, context-aware** nutrition intelligence layer that wraps around your lifestyle — not the other way around.

---

## 🚀 Stand-Out Innovation Points

| Innovation | Description |
|---|---|
| **Hyper-Contextual Interventions** | GPS + time-of-day triggers healthy suggestions near grocery stores, gyms, or fast-food hubs |
| **Frictionless Multi-Modal Logging** | Voice + Image + NFC tap for near-instant food logging in under 5 seconds |
| **The Nudge Engine** | Behavioral psychology–driven notifications based on real-time glucose/energy/stress levels |
| **Emotion-Food Correlation Engine** | Detects emotional eating patterns using facial micro-expression scanning (opt-in) |
| **Nutritional Debt Tracker** | Tracks cumulative micro-nutrient deficiencies over weeks, not just daily calories |
| **AI Meal Negotiator** | In-restaurant mode lets you describe what you *want* to eat, and AI negotiates healthier swaps |
| **Group Health Challenges** | Competitive squad-based health missions with real-time leaderboards |
| **Offline-First Intelligence** | On-device ML models for image recognition work without an internet connection |

---

## 🛠 Full Features Matrix

### 1. 📸 The "Magic" Log — Frictionless Input

| Feature | Description |
|---|---|
| **Snap-and-Score** | Photograph a plate → AI identifies ingredients, estimates portion sizes, and generates a *Nutritional Density Score (NDS)* out of 100 |
| **Conversational Logging** | Natural language input: *"I had a medium latte and a blueberry muffin"* → instantly parsed into structured macros |
| **NFC / QR Restaurant Tap** | Tap your phone on restaurant table or scan QR → auto-load that restaurant's full menu with AI-ranked healthy options |
| **Barcode Scanner** | Instant packaged food logging with full ingredient breakdown and additive alerts |
| **Voice-to-Macro** | Hands-free food logging while cooking or driving |
| **Meal Duplication & Templates** | Save frequent meals as one-tap templates (e.g., *"My usual Monday breakfast"*) |
| **Continuous Photo Journal** | Optional auto-capture mode — discreetly logs food photos throughout the day using background camera access (opt-in only) |

---

### 2. 🧠 Contextual Intelligence Engine

| Feature | Description |
|---|---|
| **Geo-Fencing Nudges** | Detects proximity to restaurants, cafes, or grocery stores and pushes context-specific healthy option suggestions |
| **Smart Cravings Assistant** | When user is near a restaurant, pushes the 3 *healthiest menu items* scraped and ranked in real time |
| **Circadian Eating Windows** | Dynamically adjusts suggested meal times based on sleep data, activity levels, and chronotype (morning lark vs. night owl) |
| **Weather-Aware Suggestions** | On cold, rainy days → warm, high-calorie comfort food alternatives. Hot days → hydration-focused suggestions |
| **Work Calendar Integration** | Syncs with Google Calendar / Outlook → predicts *busy lunch windows* and pre-suggests grab-and-go healthy options |
| **Pre-Event Fueling** | Detects gym sessions, sports events, or work deadlines in calendar → suggests optimal pre/post-event nutrition |
| **Traffic & Commute Awareness** | Long commute detected → suggests healthy snacks to prepare in advance, avoiding impulsive purchases |

---

### 3. 💪 Wearable & Biometric Sync

| Feature | Description |
|---|---|
| **Apple Health / Google Fit Sync** | Real-time dashboard correlating food intake with energy levels, heart rate, and sleep quality |
| **Glucose Level Integration** | Connects with CGM devices (e.g., Dexcom, Libre) → warns before a glucose spike and suggests low-GI alternatives |
| **Stress Score Tracking** | HRV data from Apple Watch / Garmin → detects high-stress states → suggests anti-inflammatory foods (omega-3, magnesium-rich) |
| **Activity-Adaptive Calorie Goals** | Daily caloric targets update dynamically based on actual step count and workout intensity from wearables |
| **Sleep-Hunger Correlation** | Tracks how poor sleep increases craving scores for high-sugar foods → sends proactive morning intervention |
| **Hydration Reminders** | Integrates with smart water bottles (HidrateSpark, etc.) or uses activity data to calculate and remind hydration targets |

---

### 4. 🎮 Social & Gamification Engine

| Feature | Description |
|---|---|
| **Habit RPG Avatar** | Users *level up* a digital health avatar by consistently hitting fiber, protein, vitamin, or hydration goals |
| **Daily Quests** | Bite-sized challenges: *"Eat a green vegetable at lunch"*, *"Skip the afternoon sugar spike"* — earn XP for completion |
| **Micro-Communities (Squads)** | Join themed squads: *"Student Budget Chefs"*, *"Marathon Prep 2026"*, *"Postpartum Nutrition"* |
| **Squad Meal Battles** | Weekly head-to-head nutritional challenges between squads — ranked by average Nutritional Density Score |
| **Recipe Discovery Feed** | Social feed of squad-member meals, inspired by Instagram Reels but filtered for nutritional quality |
| **Streak & Milestone Badges** | Visual achievement system: *"7-Day Protein Streak"*, *"30-Day No Ultra-Processed"*, *"Iron Gut Level 5"* |
| **Buddy Accountability Mode** | Pair with a friend → both get notified if either breaks a shared commitment (e.g., *"No late-night snacking after 10 PM"*) |

---

### 5. 🧬 Personalized Nutrition Intelligence

| Feature | Description |
|---|---|
| **Nutritional Debt Dashboard** | Long-term micro-nutrient deficiency tracking: visualizes cumulative gaps in Vitamin D, Iron, B12, Magnesium over weeks |
| **Allergy & Intolerance Engine** | AI flags ingredients in scanned meals that conflict with user-set allergens or dietary restrictions |
| **Gut Health Score** | Tracks dietary fiber, fermented food, and prebiotic intake to generate a weekly *Gut Health Score* |
| **Hormonal Cycle Nutrition (FemTech)** | For users who opt in: adjusts macro targets and cravings expectations based on menstrual cycle phase |
| **Anti-Inflammatory Index** | Scores each meal on an inflammation index — helpful for users managing chronic conditions (autoimmune, PCOS, arthritis) |
| **Cognitive Fuel Mode** | *"Deep Work Day"* mode suggests meals high in omega-3, complex carbs, and tyrosine for peak mental performance |

---

### 6. 🤖 AI Coaching & Behavioral Science

| Feature | Description |
|---|---|
| **AI Nutrition Coach (Chat)** | Conversational coach powered by Claude/Gemini: answers questions, explains label ingredients, and debates meal choices |
| **Emotion-Eating Detector** | Optional front-camera micro-expression analysis before logging food — if stress/sadness detected, shows a mindful eating prompt |
| **Loss Aversion Nudges** | Behavioral economics framing: *"You're 1 meal away from your longest streak — don't lose it"* |
| **Weekly Nutrition Debrief** | Every Sunday, AI generates a 3-minute voice/text debrief: what went well, what to fix, personalized for next week |
| **Label Decoder** | Point camera at any packaged food label → AI explains every ingredient in plain language, highlights red-flag additives |
| **Restaurant Menu AI Negotiator** | User says *"I want the creamy pasta"* → AI suggests: *"Ask for it with olive oil instead of cream and add grilled chicken — saves 340 cal, adds 28g protein"* |
| **Portion Illusion Corrector** | Shows side-by-side visual comparison of *what you think you ate* vs. *what you actually ate* using portion estimation AI |

---

### 7. 📊 Health Visualization & Reporting

| Feature | Description |
|---|---|
| **Bento Grid Dashboard** | Modular *"Now"* dashboard: today's NDS, hydration ring, macro donut, streak counter, next meal suggestion |
| **Weekly & Monthly Reports** | Exportable PDF/PNG nutrition reports — great for sharing with nutritionists or doctors |
| **Food Mood Correlation Map** | Heatmap showing correlation between food choices and reported mood/energy over 30 days |
| **Predictive Trend Alerts** | *"Based on this week's pattern, you're likely to be Vitamin D deficient by next month"* |
| **Meal Timeline Replay** | A daily visual timeline of all meals, with nutritional annotations, that users can scroll through |
| **Body Composition Estimate** | Uses weight + food + activity data to estimate body fat % change over time (no hardware needed) |

---

### 8. 🛒 Smart Grocery & Meal Planning

| Feature | Description |
|---|---|
| **AI Meal Planner** | Generates a personalized weekly meal plan based on budget, dietary goals, available cooking time, and local seasonal produce |
| **Smart Shopping List** | Auto-generates a grocery list from the weekly meal plan, grouped by store section |
| **Pantry Scanner** | Scan existing pantry items → AI suggests meals you can make *right now* with zero food waste |
| **Budget Mode** | Generate a nutritionally complete weekly plan under a specified budget (e.g., ₹500/week or $50/week) |
| **Expiry Tracker** | Log food items with expiry dates → get alerts 2 days before they expire with recipe suggestions that use them |
| **Instacart / Swiggy Instamart Integration** | One-tap order ingredients from AI-generated meal plan via connected delivery platforms |

---

### 9. 🌍 Localization & Cultural Intelligence

| Feature | Description |
|---|---|
| **Regional Food Database** | Extensive database of Indian, Southeast Asian, Middle Eastern, African, and Latin American cuisines — not just Western foods |
| **Festival & Fasting Mode** | Supports Ramadan, Navratri, Vrat, Lent, and Yom Kippur dietary modes with tailored suggestions |
| **Street Food Recognition** | AI trained on regional street food (pani puri, baozi, arepas, injera) for accurate photo-logging in non-Western contexts |
| **Multi-Language Support** | UI and voice logging in 12+ languages including Hindi, Tamil, Swahili, Portuguese, and Arabic |
| **Currency-Localized Budgeting** | Budget meal planning automatically adapts to local currency and regional food prices |

---

## 🎨 UI/UX Design Philosophy

### Visual Language
- **Bento Grid Layout**: Modular interface that surfaces the most critical *"right now"* data cards at the top
- **Neumorphic Elements**: Soft, embossed cards for a clean, organic health-and-wellness aesthetic
- **Dynamic Circadian Theming**: App palette shifts across the day — warm amber tones at breakfast, energetic greens at midday, calming blues at night

### Interaction Design
- **Haptic Feedback**: Subtle haptics on streak completions, meal logging, and goal achievements
- **Micro-Animations**: Macro donut fills on logging, avatar evolves visually on leveling up
- **Swipe-Based Logging**: Swipe right to log a meal template, swipe left to skip — inspired by Tinder-style quick decisions
- **Progressive Disclosure**: Detailed nutritional breakdown hidden by default — one tap to expand for power users

### Accessibility
- **WCAG 2.1 AA compliant** color contrast throughout
- **Voice-First Mode**: Entire app navigable by voice for visually impaired users
- **Font Scaling**: All text respects system font size settings
- **Colorblind-Safe Palette**: All charts use colorblind-accessible palettes with pattern differentiation

---

## 🏗 Technical Architecture

### Frontend
| Layer | Technology |
|---|---|
| Framework | React Native (Expo) or Flutter |
| State Management | Redux Toolkit / Riverpod |
| UI Components | NativeBase / custom Neumorphic component library |
| Animation | Reanimated 3 / Lottie |
| Offline Storage | WatermelonDB (local SQLite with sync) |
| Camera / Vision | React Native Vision Camera |

### Backend
| Layer | Technology |
|---|---|
| API Framework | Node.js (Fastify) or Python (FastAPI) |
| Primary Database | PostgreSQL (relational user/nutrition data) |
| Cache Layer | Redis (session, leaderboard, geo-query cache) |
| Food Metadata DB | MongoDB (flexible schema for diverse food items) |
| Message Queue | BullMQ / RabbitMQ (async nudge delivery) |
| File Storage | AWS S3 / Cloudflare R2 (meal photos) |

### AI & ML Services
| Service | Technology |
|---|---|
| LLM Coaching | Claude API (Anthropic) / Gemini API |
| Food Image Recognition | Google Vision API + custom fine-tuned YOLO model |
| Portion Size Estimation | Depth estimation model (MiDaS / custom CNN) |
| NLP Parsing | spaCy + custom food entity NER model |
| Recommendation Engine | Collaborative filtering + content-based hybrid (TensorFlow Recommenders) |
| On-Device ML | Core ML (iOS) / TensorFlow Lite (Android) |

### Infrastructure & DevOps
| Layer | Technology |
|---|---|
| Containerization | Docker + Docker Compose |
| Orchestration | Kubernetes (EKS / GKE) for production |
| CI/CD | GitHub Actions |
| Monitoring | Grafana + Prometheus + Sentry |
| CDN | Cloudflare |
| Authentication | Firebase Auth / Auth0 (OAuth2, magic link, biometric) |

---

## 🤖 AI & ML Pipeline

```
User Input (Photo / Voice / Text)
          │
          ▼
  ┌───────────────────┐
  │  Input Classifier │  ← Determines if image, voice, or text
  └────────┬──────────┘
           │
    ┌──────▼──────┐    ┌──────────────┐    ┌───────────────┐
    │ Image Model │    │  ASR Engine  │    │  NLP Parser   │
    │  (YOLO +    │    │ (Whisper API)│    │ (spaCy + NER) │
    │  Depth Est) │    └──────┬───────┘    └──────┬────────┘
    └──────┬──────┘           │                   │
           └──────────────────┼───────────────────┘
                              │
                     ┌────────▼────────┐
                     │ Nutrition       │
                     │ Resolution API  │  ← Maps items to USDA / OpenFoodFacts DB
                     └────────┬────────┘
                              │
                     ┌────────▼────────┐
                     │ Context Engine  │  ← Adds GPS, time, wearable, calendar context
                     └────────┬────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
     ┌────────▼───┐  ┌────────▼───┐  ┌───────▼────────┐
     │  Store to  │  │  Nudge     │  │  LLM Coaching  │
     │  Database  │  │  Engine    │  │  Response Gen  │
     └────────────┘  └────────────┘  └────────────────┘
```

---

## 🔌 API Integrations

| API | Purpose |
|---|---|
| **USDA FoodData Central** | Primary nutritional database (free, comprehensive) |
| **Open Food Facts** | Barcode-linked packaged food data |
| **Google Maps Platform** | Geo-fencing, restaurant proximity detection |
| **Google Vision API** | Food image classification fallback |
| **OpenAI Whisper / AssemblyAI** | Voice-to-text transcription for food logging |
| **Claude API (Anthropic)** | Conversational AI coaching and label explanation |
| **Apple HealthKit** | Wearable biometric data on iOS |
| **Google Fit API** | Wearable biometric data on Android |
| **Dexcom / Abbott LibreLink API** | Continuous glucose monitor data |
| **Spoonacular API** | Recipe generation and meal planning |
| **Instacart / Swiggy API** | Direct grocery ordering from meal plans |
| **Firebase Cloud Messaging** | Push notifications for nudges |
| **Twilio** | SMS nudges for users without push notifications |

---

## 🗄 Database Schema (Overview)

```sql
users               -- Profile, goals, dietary restrictions, wearable tokens
meals               -- Logged meals with timestamp, GPS, photo_url, mood_score
food_items          -- Canonical food DB (name, macros, micros, USDA ID)
meal_food_items     -- Junction: maps meals to food items with portion data
nudges              -- Log of all behavioral nudges sent + user response
streaks             -- Streak tracking per habit category per user
squads              -- Group metadata, challenge state, leaderboard
biometric_events    -- HRV, glucose, steps, sleep — time-series per user
pantry_items        -- User pantry with quantity + expiry dates
meal_plans          -- Weekly AI-generated plans linked to user + week
notifications_log   -- All notifications sent, opened, dismissed
```

---

## 🔐 Security & Privacy

- **End-to-end encryption** for all health biometric data in transit and at rest (AES-256)
- **Opt-in only** for all sensitive features: emotion scanning, continuous photo mode, CGM integration
- **Data minimization**: GPS coordinates are coarsened to 500m radius before storage — never exact location
- **GDPR & DPDPA compliant** data handling with full export and deletion rights
- **Zero third-party data selling** — explicit policy enforced in ToS
- **Biometric data never leaves device** unless explicitly exported by user
- **OWASP Top 10** security practices enforced in backend
- **Regular penetration testing** scheduled quarterly

---

## ♿ Accessibility

- WCAG 2.1 AA contrast ratio compliance on all UI elements
- Full VoiceOver (iOS) and TalkBack (Android) support
- Dynamic Type support — all layouts reflow at any font size
- Colorblind-safe chart palettes (Deuteranopia, Protanopia, Tritanopia modes)
- Reduced Motion mode respects system-level animation preferences
- Voice-only navigation mode for users with motor impairments

---

## 📅 Hackathon Roadmap (24-Hour Execution Plan)

| Phase | Hours | Tasks | Owner Focus |
|---|---|---|---|
| **0 — Kickoff** | 0–1h | Repo setup, branch strategy, API keys, `.env` config, DB bootstrap | All |
| **1 — Foundation** | 1–4h | Auth flow, user profile schema, basic navigation skeleton, CI pipeline | Backend + Frontend |
| **2 — Core Log** | 4–8h | Image-to-macro pipeline, barcode scanner, voice logger, USDA API connection | AI + Backend |
| **3 — Intelligence** | 8–13h | Geo-fencing logic, nudge engine, circadian eating windows, wearable mock data | Backend + ML |
| **4 — Wow Features** | 13–18h | AI Coach chat, label decoder, squad creation, leaderboard, habit RPG avatar | AI + Frontend |
| **5 — Polish** | 18–22h | Animations, Bento grid dashboard, weekly debrief, nutritional debt chart | Frontend |
| **6 — Ship** | 22–24h | README, pitch deck, demo video, deploy to TestFlight / Expo Go link | All |

### Git Commit Convention
```
feat: integrate Gemini API for image-to-macro analysis
fix: resolve GPS debounce causing duplicate geo-fencing triggers
chore: add Docker Compose for local PostgreSQL + Redis setup
docs: update API integration table with Dexcom CGM endpoints
perf: lazy-load nutrition chart components to reduce TTI
```

---

## 🌐 Future Scope

| Feature | Description | Timeline |
|---|---|---|
| **AR Grocery Helper** | Augmented Reality overlay highlights *"Low Sugar"* / *"High Protein"* products on shelf in real time | v2.0 |
| **Nutrigenomics Mode** | Upload DNA/blood test → AI generates bio-individual meal plans based on genetic markers | v2.5 |
| **Smart Fridge Integration** | Connects with Samsung Family Hub / LG ThinQ → auto-generates shopping lists as ingredients expire | v2.0 |
| **Pediatric Mode** | Separate child nutrition profiles with age-appropriate RDA targets and school lunch optimization | v2.0 |
| **Clinical API** | FHIR-compliant data export for integration with hospital EHR systems (for dietitian-managed patients) | v3.0 |
| **NutriFlow for Coaches** | B2B dashboard for nutritionists to monitor multiple clients' data, send personalized plans, and run group programs | v2.5 |
| **Food Desert Mode** | Offline-capable mode with minimal-ingredient meal planning for users in food deserts or low-connectivity areas | v2.0 |
| **Predictive Illness Prevention** | Long-term pattern analysis to flag elevated diabetes, cardiovascular, or deficiency risk before clinical onset | v3.0 |
| **Voice-Activated Smart Speaker** | Alexa / Google Home skill: *"Alexa, log my breakfast: two boiled eggs and oat milk coffee"* | v2.0 |

---

## 👥 Team & Contributions

| Role | Responsibilities |
|---|---|
| **AI/ML Engineer** | Food image model, NLP parser, nudge engine, LLM prompt engineering |
| **Backend Engineer** | API design, database schema, geo-fencing service, queue workers |
| **Frontend Engineer** | React Native UI, animations, camera integration, state management |
| **UX Designer** | Bento grid system, component library, accessibility audit |
| **Product / PM** | Roadmap prioritization, pitch deck, demo scripting |

Contributions follow **GitHub Flow**: feature branches → PR with 1 reviewer → squash merge to `main`.

---

## ⚙ Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/NutriFlow-AI.git
cd NutriFlow-AI

# 2. Set up environment variables
cp .env.example .env
# Fill in: ANTHROPIC_API_KEY, GOOGLE_VISION_KEY, USDA_API_KEY, etc.

# 3. Start backend services (Docker)
docker-compose up -d

# 4. Install and run mobile app
cd mobile
npm install
npx expo start

# 5. Run backend API
cd backend
npm install
npm run dev
```

### Required API Keys
- `ANTHROPIC_API_KEY` — [console.anthropic.com](https://console.anthropic.com)
- `GOOGLE_VISION_API_KEY` — [console.cloud.google.com](https://console.cloud.google.com)
- `USDA_API_KEY` — [fdc.nal.usda.gov](https://fdc.nal.usda.gov/api-guide.html)
- `GOOGLE_MAPS_API_KEY` — [console.cloud.google.com](https://console.cloud.google.com)
- `FIREBASE_CONFIG` — [console.firebase.google.com](https://console.firebase.google.com)

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

> *"The best diet app is one you forget is even running."*
> — NutriFlow AI Design Principle #1

---

**⭐ Star this repo if NutriFlow AI made you hungry for better tech.**
