import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Brain,
  Users,
  Flame,
  Check,
  ArrowRight,
  Star,
  Menu,
  X,
  CircleCheck,
  Clock,
  ChevronDown,
  GraduationCap,
  Briefcase,
  IndianRupee,
} from "lucide-react";

const fontHead = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
const fontBody = { fontFamily: "'Inter', sans-serif" };

/* ---------------------------------- data ---------------------------------- */

const NAV_LINKS = [
  { label: "The Sprint", href: "#program" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const TRACK = [
  {
    icon: Code2,
    weight: "core",
    tag: "Week 1–4",
    dayRange: "Day 1–28",
    title: "DSA Mastery",
    copy: "Pattern-based problem sets across arrays, trees, graphs and DP — not random problem roulette. Each pattern is drilled until it's automatic.",
  },
  {
    icon: Brain,
    weight: "habit",
    tag: "Week 1–6 · daily",
    dayRange: "Day 1–42",
    title: "Aptitude & Reasoning",
    copy: "20-minute daily sets in quant, logical reasoning and verbal ability, timed like the real screening round so speed becomes a habit.",
  },
  {
    icon: Users,
    weight: "core",
    tag: "Week 4–6",
    dayRange: "Day 22–42",
    title: "Mock Interviews",
    copy: "Live, recorded 1:1 mocks run like an actual hiring panel — technical, HR and behavioural — with a written feedback report after each one.",
  },
  {
    icon: Flame,
    weight: "habit",
    tag: "Every single day",
    dayRange: "Day 1–42",
    title: "Daily Challenges",
    copy: "One challenge each morning with a public leaderboard and streak counter, built to keep interview stamina up for all six weeks.",
  },
];

const STATS = [
  { value: "1,240+", label: "Learners placed" },
  { value: "4.8/5", label: "Avg. cohort rating" },
  { value: "68", label: "Hiring partners" },
  { value: "6 wks", label: "Median time-to-offer" },
];

const TESTIMONIALS = [
  {
    name: "Ananya R.",
    role: "B.Tech CSE, Pune",
    initials: "AR",
    quote:
      "I went from freezing mid-interview to walking out of two on-site rounds knowing exactly where I stood. The daily streak did more for my confidence than any single course.",
  },
  {
    name: "Rohit K.",
    role: "Graduate track, 2026 batch",
    initials: "RK",
    quote:
      "The 1:1 mock feedback was brutally specific — down to how I structured my STAR answers. That precision is what got me past the HR round.",
  },
  {
    name: "Meera S.",
    role: "Final year, ECE",
    initials: "MS",
    quote:
      "Aptitude was always my weak spot. Six weeks of 20-minute daily drills fixed it quietly, without eating into my DSA prep time.",
  },
];

const PRICING_PLANS = [
  {
    audienceKey: "student",
    tier: "Student",
    price: "999",
    tagline: "For final-year students still building fundamentals.",
    features: [
      "Full 6-week DSA sprint with pattern playbooks",
      "Daily aptitude & reasoning drills",
      "Daily challenge + leaderboard access",
      "Weekly group mock interview",
      "Peer study-pod community access",
      "Certificate of completion",
    ],
  },
  {
    audienceKey: "graduate",
    tier: "Graduate",
    price: "1,499",
    tagline: "For graduates targeting interviews in the next 60 days.",
    popular: true,
    features: [
      "Everything in the Student track",
      "2 live 1:1 mock interviews + written feedback report",
      "Resume and LinkedIn profile review",
      "Priority alerts for partner hiring drives",
      "Direct referral pool access",
      "Lifetime access to recorded sessions",
    ],
  },
];

const AUDIENCE_OPTIONS = [
  { key: "student", label: "Still in college", icon: GraduationCap },
  { key: "graduate", label: "Already graduated", icon: Briefcase },
];

const FAQS = [
  {
    q: "What happens if I miss a day of the sprint?",
    a: "Every session is recorded and stays in your dashboard for the full cohort. Your streak resets, but you never lose access to the content — catch up over the weekend and rejoin the next day's live session.",
  },
  {
    q: "Do I need prior DSA experience to join?",
    a: "No. The Student track assumes you know basic syntax and loops — the first week is deliberately paced to build core patterns before problems get harder.",
  },
  {
    q: "How are mock interviews scheduled?",
    a: "You pick a slot from a shared calendar once you unlock Week 4. Graduate-track learners get 2 dedicated 1:1 slots; Student-track learners join weekly group mocks with individual feedback.",
  },
  {
    q: "Is there a refund if the sprint isn't a fit?",
    a: "Yes — full refund if requested within the first 7 days of the cohort, no questions asked. After that, your seat stays reserved for the following cohort instead.",
  },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2";

/* -------------------------------- small bits ------------------------------- */

function Badge({ children, tone = "indigo" }) {
  const tones = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    amber: "bg-amber-50 text-amber-700 border-amber-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* --------------------------------- navbar ---------------------------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className={`flex items-center gap-3 rounded-lg ${FOCUS_RING}`}>
          <span
            style={fontHead}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white"
          >
            T
          </span>
          <span className="leading-tight">
            <span style={fontHead} className="block text-[15px] font-bold text-slate-900">
              TechLearn
            </span>
            <span className="block text-[10px] font-semibold tracking-widest text-indigo-600">
              PLACEMENT SPRINT
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`rounded-md text-sm font-medium text-slate-600 transition hover:text-slate-900 ${FOCUS_RING}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/login"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`rounded-lg p-2 text-slate-700 md:hidden ${FOCUS_RING}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md text-sm font-medium text-slate-600 ${FOCUS_RING}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enroll"
              onClick={() => setOpen(false)}
              className={`mt-1 rounded-full bg-indigo-600 px-5 py-2.5 text-center text-sm font-semibold text-white ${FOCUS_RING}`}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------- tracker card ------------------------------- */

function TrackerCard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  const rows = [
    { label: "DSA — Binary Trees, Set 2", state: "done" },
    { label: "Aptitude — Timed Quant Drill", state: "today" },
    { label: "Mock Interview — Panel 3", state: "upcoming" },
  ];
  const stateStyles = {
    done: { icon: CircleCheck, cls: "text-emerald-500", label: "Done" },
    today: { icon: Clock, cls: "text-indigo-600", label: "Today" },
    upcoming: { icon: Clock, cls: "text-slate-300", label: "Upcoming" },
  };

  return (
    <div
      className={`w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-indigo-100 transition-all duration-700 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Cohort #7
          </p>
          <p style={fontHead} className="text-lg font-bold text-slate-900">
            Day 12 of 42
          </p>
        </div>
        <Badge tone="amber">
          <Flame size={13} /> 11-day streak
        </Badge>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000 ease-out"
          style={{ width: mounted ? "29%" : "0%" }}
        />
      </div>

      <div className="mt-5 space-y-3">
        {rows.map((r) => {
          const s = stateStyles[r.state];
          const Icon = s.icon;
          return (
            <div
              key={r.label}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <Icon size={16} className={s.cls} />
                <span className="text-sm font-medium text-slate-700">{r.label}</span>
              </div>
              <span className={`text-xs font-semibold ${s.cls}`}>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------- hero ------------------------------------ */

const PROOF_ITEMS = [
  { icon: Users, text: "1,240+ learners placed" },
  { icon: Star, text: "4.8/5 rating" },
  { icon: IndianRupee, text: "₹999 to start" },
];

function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-indigo-50 via-white to-white px-5 pb-16 pt-14 md:px-8 md:pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <Badge>COHORT #7 · STARTS AUG 4 · 150 SEATS</Badge>
          <h1
            style={fontHead}
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl"
          >
            Stop practicing DSA in isolation. Start sprinting toward an offer.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
            A 6-week placement sprint that fuses daily DSA, timed aptitude
            drills, live mock interviews and recruiter-style feedback — built
            for students and fresh graduates chasing their first tech offer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >       
                Get Started <ArrowRight size={16} />
            </Link>
            <a
              href="#program"
              className={`rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 ${FOCUS_RING}`}
            >
              See the sprint track
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {PROOF_ITEMS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <Icon size={13} className="text-indigo-600" />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <TrackerCard />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- sprint track -------------------------------- */

const WEIGHT_STYLES = {
  core: {
    ring: "border-indigo-500 text-indigo-600",
    node: "h-12 w-12",
    chip: "bg-indigo-50 text-indigo-700",
    chipLabel: "Core skill",
  },
  habit: {
    ring: "border-violet-400 text-violet-600",
    node: "h-11 w-11",
    chip: "bg-violet-50 text-violet-700",
    chipLabel: "Daily habit",
  },
};

function RevealItem({ children, delay = 0 }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function TrackItem({ item }) {
  const Icon = item.icon;
  const style = WEIGHT_STYLES[item.weight];
  return (
    <div className="relative flex flex-col items-center px-2 text-center">
      <div
        className={`z-10 flex items-center justify-center rounded-full border-2 bg-white shadow-sm ${style.ring} ${style.node}`}
      >
        <Icon size={20} />
      </div>
      <span
        className={`mt-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style.chip}`}
      >
        {style.chipLabel}
      </span>
      <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {item.tag}
      </span>
      <h3 style={fontHead} className="mt-2 text-lg font-bold text-slate-900">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
      <span className="mt-3 text-[11px] font-medium text-slate-500">{item.dayRange}</span>
    </div>
  );
}

function TrackItemMobile({ item, isLast }) {
  const Icon = item.icon;
  const style = WEIGHT_STYLES[item.weight];
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center self-stretch">
        <div
          className={`z-10 flex shrink-0 items-center justify-center rounded-full border-2 bg-white ${style.ring} ${style.node}`}
        >
          <Icon size={18} />
        </div>
        {!isLast && <div className="mt-1 w-px flex-1 bg-indigo-100" />}
      </div>
      <div className={isLast ? "pb-2" : "pb-8"}>
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style.chip}`}
        >
          {style.chipLabel}
        </span>
        <div className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {item.tag}
        </div>
        <h3 style={fontHead} className="mt-1 text-base font-bold text-slate-900">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.copy}</p>
        <span className="mt-2 block text-[11px] font-medium text-slate-500">
          {item.dayRange}
        </span>
      </div>
    </div>
  );
}

function SprintTrack() {
  return (
    <section id="program" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <Badge>THE SPRINT TRACK</Badge>
          <h2
            style={fontHead}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
          >
            Four connected tracks. One outcome.
          </h2>
          <p className="mt-3 text-slate-600">
            Two core skill-building tracks, two always-on habits — every one
            of them feeds the same six-week timeline toward an offer letter.
          </p>
        </div>

        <div className="relative mt-16 hidden md:grid md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-indigo-100 via-indigo-300 to-violet-100" />
          {TRACK.map((item, i) => (
            <RevealItem key={item.title} delay={i * 90}>
              <TrackItem item={item} />
            </RevealItem>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          {TRACK.map((item, i) => (
            <RevealItem key={item.title} delay={i * 90}>
              <TrackItemMobile item={item} isLast={i === TRACK.length - 1} />
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- pricing ---------------------------------- */

function PricingCard({ plan, recommended }) {
  const { tier, price, tagline, features, popular } = plan;
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-1 sm:p-7 ${
        popular
          ? "border-indigo-200 bg-gradient-to-b from-indigo-50/70 to-white shadow-xl shadow-indigo-100 hover:shadow-2xl hover:shadow-indigo-200"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
      } ${recommended ? "ring-2 ring-indigo-400" : ""}`}
    >
      {popular && (
        <span className="absolute -top-3 left-4 whitespace-nowrap rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-bold text-amber-950 sm:left-7 sm:px-3 sm:text-xs">
          Most chosen<span className="hidden sm:inline"> · 2026 batch</span>
        </span>
      )}
      {recommended && (
        <span className="absolute -top-3 right-4 whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-bold text-white sm:right-7 sm:px-3 sm:text-xs">
          Recommended
        </span>
      )}

      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 sm:mt-0">{tier}</p>
      <div className="mt-2 flex items-baseline gap-1">
        <span style={fontHead} className="text-2xl font-extrabold text-slate-900 sm:text-4xl">
          ₹{price}
        </span>
        <span className="text-xs text-slate-500 sm:text-sm">/ one-time</span>
      </div>
      <p className="mt-2 text-xs text-slate-600 sm:text-sm">{tagline}</p>

      <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-slate-700 sm:gap-2.5 sm:text-sm">
            <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#enroll"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition sm:mt-8 sm:px-5 sm:py-3 sm:text-sm ${FOCUS_RING} ${
          popular
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "border border-slate-200 text-slate-800 hover:bg-slate-50"
        }`}
      >
        Choose {tier} <ArrowRight size={15} />
      </a>
    </div>
  );
}

function Pricing() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="pricing" className="bg-slate-50 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <Badge tone="emerald">PRICING</Badge>
          <h2
            style={fontHead}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
          >
            One payment. Six weeks of structure.
          </h2>
          <p className="mt-3 text-slate-600">
            No subscriptions. Tell us where you are and we'll point you to
            the right track — you can always upgrade later.
          </p>
        </div>

        <div className="mx-auto mt-8 flex w-fit gap-1 rounded-full border border-slate-200 bg-white p-1">
          {AUDIENCE_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.key}
                onClick={() => setSelected((cur) => (cur === opt.key ? null : opt.key))}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${FOCUS_RING} ${
                  selected === opt.key
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={15} />
                {opt.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.tier}
              plan={plan}
              recommended={selected === plan.audienceKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- trust ------------------------------------ */

const AVATAR_TONES = [
  "bg-indigo-100 text-indigo-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
];

function TestimonialCard({ testimonial, index }) {
  const tone = AVATAR_TONES[index % AVATAR_TONES.length];
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">“{testimonial.quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <span
          style={fontHead}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${tone}`}
        >
          {testimonial.initials}
        </span>
        <div>
          <p style={fontHead} className="text-sm font-bold text-slate-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function Trust() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-indigo-50/60 via-white to-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 pb-14 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-100 bg-white px-4 py-6 text-center shadow-sm">
              <p style={fontHead} className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-xl text-center">
          <Badge>WHY LEARNERS TRUST THE SPRINT</Badge>
          <h2
            style={fontHead}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
          >
            Not reviews about a course. Reviews about an outcome.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <RevealItem key={t.name} delay={i * 90}>
              <TestimonialCard testimonial={t} index={i} />
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ faq -------------------------------------- */

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Badge tone="violet">BEFORE YOU ENROLL</Badge>
          <h2
            style={fontHead}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
          >
            Questions worth answering upfront
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left ${FOCUS_RING}`}
                >
                  <span style={fontHead} className="text-sm font-bold text-slate-900 md:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden px-5 transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="text-sm leading-relaxed text-slate-600">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- final CTA ----------------------------------- */

function FinalCTA() {
  return (
    <section id="enroll" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 px-8 py-14 text-center shadow-xl">
        <h2 style={fontHead} className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Your offer letter is six weeks away.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-indigo-100">
          Cohort #7 starts August 4 and is capped at 150 seats so every mock
          interview slot stays 1:1.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/login"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
          >
            Get Started
          </Link>
          <a
            href="#program"
            className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
          >
            Review the sprint track
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <div className="flex items-center gap-2">
          <span
            style={fontHead}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-bold text-white"
          >
            T
          </span>
          <span className="font-semibold text-slate-700">TechLearn Placement Sprint</span>
        </div>
        <p>© 2026 TechLearn. Cohort #7 · 150 seats.</p>
      </div>
    </footer>
  );
}

/* ----------------------------------- app --------------------------------------- */

export default function Landing() {
  return (
    <div style={fontBody} className="min-h-screen bg-white antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      <Navbar />
      <Hero />
      <SprintTrack />
      <Pricing />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
