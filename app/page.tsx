import Reveal from "./Reveal";

const PHONE_DISPLAY = "(289) 980-0492";
const PHONE_TEL = "tel:+12899800492";
const PHONE_SMS = "sms:+12899800492";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=BlueTile%20Contracting&query_place_id=ChIJIW0b-TeMJkgRHu3eRdQiDPg";
const INSTAGRAM = "https://instagram.com/bluetilecontracting";
const FACEBOOK = "https://facebook.com/BlueTileContracting";

const AREAS = ["Oshawa", "Whitby", "Courtice", "Bowmanville", "Ajax", "Pickering", "Durham Region", "The GTA"];

type IconName =
  | "phone" | "star" | "shield" | "clock" | "pin" | "bath" | "grid" | "home" | "brush" | "layers" | "drop"
  | "bricks" | "message" | "check" | "sparkle" | "chat" | "chevron" | "arrow" | "user";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "phone":
      return <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>;
    case "star":
      return <svg {...p} fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg>;
    case "shield":
      return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>;
    case "clock":
      return <svg {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
    case "pin":
      return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "bath":
      return <svg {...p}><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.5 1V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><path d="M2 12h20" /><path d="M7 19v2M17 19v2" /></svg>;
    case "grid":
      return <svg {...p}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
    case "home":
      return <svg {...p}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>;
    case "brush":
      return <svg {...p}><path d="M18.4 2.6a2 2 0 0 1 2.8 2.8L12 14.6 9.4 12z" /><path d="M9 13c-2 0-3.5 1.5-3.5 3.5 0 1.5-1 2.5-2.5 2.5 1 1.5 3 2 4.5 2C10 21 12 19 12 16.5" /></svg>;
    case "layers":
      return <svg {...p}><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>;
    case "drop":
      return <svg {...p}><path d="M12 2.7s7 7.3 7 12.3a7 7 0 0 1-14 0c0-5 7-12.3 7-12.3z" /></svg>;
    case "bricks":
      return <svg {...p}><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 9.3h18M3 14.7h18M9 4v5.3M15 9.3v5.4M9 14.7V20" /></svg>;
    case "message":
      return <svg {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case "check":
      return <svg {...p}><path d="M20 6 9 17l-5-5" /></svg>;
    case "sparkle":
      return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>;
    case "chat":
      return <svg {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" /></svg>;
    case "chevron":
      return <svg {...p}><path d="m6 9 6 6 6-6" /></svg>;
    case "arrow":
      return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "user":
      return <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
  }
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}

const SERVICES: { icon: IconName; title: string; body: string; featured?: boolean }[] = [
  {
    icon: "bath",
    title: "Bathroom Renovations",
    body: "Full bathroom renovations from demolition to the last bead of caulk: waterproofing, new tubs, vanities and full-height tile. We plan the layout with you first so there are no surprises halfway through.",
    featured: true,
  },
  {
    icon: "drop",
    title: "Tub to Walk-In Shower Conversions",
    body: "Swap a dated tub for a walk-in shower that is easier to step into and easier to clean. Proper waterproofing behind the tile is the part you never see and the part we never rush.",
  },
  {
    icon: "grid",
    title: "Custom Tile Installation",
    body: "Shower walls, floors, large-format tile and kitchen backsplashes, including glossy 4x16 ceramic. Straight lines, tight grout joints and clean transitions where tile meets the floor or the wall.",
  },
  {
    icon: "home",
    title: "Basement Renovations",
    body: "Complete basement finishing and basement bathrooms, including stand-up showers. We also repair water-damaged ceilings and walls so the space ends up better than it was before the damage.",
  },
  {
    icon: "layers",
    title: "Drywall Repair & Flooring",
    body: "Drywall patches you cannot find afterwards, new flooring and general interior repairs. Every job ends with a full cleanup, so the room is ready to use the day we leave.",
  },
  {
    icon: "brush",
    title: "Interior Painting",
    body: "Single rooms or the whole house. Walls are prepped and patched before paint goes on, furniture and floors are protected, and the crew keeps the house tidy while you live in it.",
  },
  {
    icon: "bricks",
    title: "Interlock & Hard Landscaping",
    body: "Exterior interlock paving, including lifting and re-laying sunken stones that have become a tripping hazard and building smooth transitions from the driveway to your front entrance.",
  },
];

const REVIEWS = [
  {
    name: "Renee",
    job: "Basement bathroom after water damage",
    text: "I called Anthony and he came out to look at it that same evening. He repaired the water-damaged ceiling, laid new tile and put in a stand-up shower. The bathroom is nicer than it was before, and you would never know there had been damage. 10 out of 10.",
  },
  {
    name: "Brooke C.",
    job: "Bathroom renovation",
    text: "Anthony and his crew were professional and kept us informed the whole way through. The tile work is immaculate, and the finished bathroom went past what our family expected.",
  },
  {
    name: "Mark D.",
    job: "Basement and bathroom renovation",
    text: "They finished our full basement and a bathroom. Anthony was easy to talk to at every stage and our family is thrilled with the new space.",
  },
  {
    name: "Katherine R.",
    job: "Exterior interlock",
    text: "They replaced a spot that had become a tripping hazard with a smooth, seamless path from the driveway to our front door. I would recommend them for interlock and hard landscaping.",
  },
  {
    name: "Amy Lynn S.",
    job: "Home repairs",
    text: "Anthony was kind, funny and really knows his stuff. A job I thought would take days was done in a few hours, and he gave me useful tips about other things around the house.",
  },
  {
    name: "Carolyn M.",
    job: "Whole-house interior painting",
    text: "Anthony's team painted our entire house. Professional, clean and friendly, and the result looks great.",
  },
  {
    name: "Jared",
    job: "Renovation project",
    text: "On time, clean and organized from start to finish, with solid communication and real attention to the small details.",
  },
];

const STEPS = [
  { title: "Call or text Anthony", body: "Tell us what you have in mind, whether it is a full bathroom or one cracked tile. You talk to the owner, not a call centre." },
  { title: "We come and look", body: "Anthony visits, measures and talks through options with you. For urgent problems like a leak or water damage, tell us and we will move as quickly as we can." },
  { title: "A clear plan and price", body: "You get a written scope covering what is being done, the materials and a realistic timeline, so you know exactly what you are paying for." },
  { title: "We build it right", body: "Demolition, waterproofing, tile and finishing, with the site kept clean every day and updates as the work moves along." },
  { title: "Final walk-through", body: "We walk the finished space with you, fix anything you want touched up, and leave the room clean and ready to use." },
];

const FAQS = [
  {
    q: "What areas do you work in?",
    a: "We are based in Durham Region and work across Oshawa, Whitby, Courtice, Bowmanville, Ajax and Pickering, plus parts of the GTA. If you are just outside those towns, call and ask.",
  },
  {
    q: "How long does a bathroom renovation take?",
    a: "It depends on the size of the room and what is changing. A tub-to-shower conversion is quicker than a full gut and rebuild. Anthony will give you a realistic timeline when he sees the space, and customers often mention the work wrapped up faster than they expected.",
  },
  {
    q: "Can you fix water damage in a bathroom or basement?",
    a: "Yes. We repair water-damaged ceilings and drywall, then retile and rebuild the shower or bathroom properly. Call as soon as you find it. For one recent customer, Anthony came out to assess the damage the same evening.",
  },
  {
    q: "Do you do small jobs, or only full renovations?",
    a: "Both. Along with full bathrooms and basements, we take on drywall repairs, backsplashes, painting and other home repairs. Several customers started with a small job and came back for bigger ones.",
  },
  {
    q: "How much will my project cost?",
    a: "Every bathroom is different, so we price each job after seeing it. Customers on Google describe our pricing as reasonable, and you will have a clear written price before any work starts.",
  },
  {
    q: "What happens with the mess?",
    a: "Clean job sites come up in our reviews again and again. We protect floors and furniture, tidy up at the end of each day, and do a full cleanup when the job is finished.",
  },
  {
    q: "What are your hours?",
    a: "We open at 7 a.m. The quickest way to reach us is to call or text (289) 980-0492, and if we are on a job site we will get back to you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "BlueTile Contracting",
  description:
    "Bathroom renovations, custom tile, tub-to-shower conversions, basement renovations, drywall, painting and interlock across Durham Region, Ontario.",
  telephone: "+1-289-980-0492",
  slogan: "Built right, Built BlueTile.",
  areaServed: AREAS.slice(0, 6).map((name) => ({ "@type": "City", name })),
  address: { "@type": "PostalAddress", addressLocality: "Oshawa", addressRegion: "ON", addressCountry: "CA" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "12" },
  founder: { "@type": "Person", name: "Anthony" },
  sameAs: [INSTAGRAM, FACEBOOK, MAPS_URL],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Renovation services",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
  },
};

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="BlueTile Contracting, back to top">
      <span className="grid h-9 w-9 grid-cols-2 gap-0.5 rounded-lg bg-brand p-1.5" aria-hidden="true">
        <span className="rounded-[2px] bg-white/90" />
        <span className="rounded-[2px] bg-white/55" />
        <span className="rounded-[2px] bg-white/55" />
        <span className="rounded-[2px] bg-white/90" />
      </span>
      <span className="font-heading text-xl font-bold leading-none text-brand-deep">
        BlueTile <span className="font-semibold text-brand">Contracting</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving Oshawa, Whitby, Courtice, Bowmanville, Ajax and Pickering</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Opens 7 a.m. · 15+ years experience</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <Wordmark />
          <nav aria-label="Main" className="hidden items-center gap-7 text-[0.95rem] font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={PHONE_TEL} className="hidden font-heading text-lg font-bold text-brand-deep hover:text-brand md:block">
              {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className="btn hidden h-12 items-center gap-2 rounded-xl bg-cta px-5 font-semibold text-white hover:bg-cta-hover md:inline-flex">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a href={PHONE_TEL} aria-label={`Call BlueTile Contracting at ${PHONE_DISPLAY}`} className="btn grid h-11 w-11 place-items-center rounded-xl bg-cta text-white md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-soft/70 to-bg">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="hero-in">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-brand ring-1 ring-line">
                <Icon name="user" className="h-4 w-4" /> Owner-led by Anthony · 15+ years on the tools
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] text-brand-deep">
                Bathroom Renovations &amp; Custom Tile in Oshawa and Durham Region
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg text-muted md:text-xl">
                Tub-to-shower conversions, full bathroom and basement renovations, and tile work customers call immaculate. You deal with Anthony from the first visit to the final walk-through.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className="btn group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-cta pl-6 pr-3 text-lg font-semibold text-white shadow-[0_10px_24px_-10px_oklch(0.55_0.17_33/0.7)] hover:bg-cta-hover">
                  Call {PHONE_DISPLAY}
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                </a>
                <a href={PHONE_SMS} className="btn inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-brand px-6 text-lg font-semibold text-brand hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" /> Text Us
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.98rem] font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars className="h-5 w-5" /> 5.0</span>
                <span className="text-line" aria-hidden="true">|</span>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">12 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>15+ years experience</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Quick response</span>
              </div>
            </div>

            <div className="hero-in [animation-delay:120ms]">
              <figure className="card relative rounded-2xl bg-surface p-7 ring-1 ring-line md:p-8">
                <div className="flex items-center justify-between">
                  <Stars className="h-5 w-5" />
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">Google review</span>
                </div>
                <blockquote className="mt-5 font-heading text-[1.35rem] font-semibold leading-snug text-brand-deep">
                  &ldquo;He came to assess the same evening. You cannot tell there was ever any damage. 10/10.&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-[0.98rem] text-muted">
                  <span className="font-semibold text-ink">Renee</span> · basement bathroom after water damage
                </figcaption>
                <ul className="mt-6 grid gap-3 rounded-xl bg-tint p-5 text-[0.98rem]">
                  <li className="flex items-center gap-3"><Icon name="clock" className="h-5 w-5 text-brand" /> Opens 7 a.m.</li>
                  <li className="flex items-center gap-3"><Icon name="pin" className="h-5 w-5 text-brand" /> Oshawa, Whitby, Ajax, Pickering and area</li>
                  <li className="flex items-center gap-3"><Icon name="phone" className="h-5 w-5 text-brand" /> <a href={PHONE_TEL} className="font-semibold hover:text-brand">{PHONE_DISPLAY}</a></li>
                </ul>
              </figure>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, top: "5.0 on Google", sub: "12 reviews, all five stars" },
              { icon: "shield" as IconName, top: "15+ years", sub: "Hands-on renovation experience" },
              { icon: "user" as IconName, top: "Owner on every job", sub: "Anthony leads the crew" },
              { icon: "sparkle" as IconName, top: "Clean job sites", sub: "Full cleanup when we finish" },
            ].map((t) => (
              <div key={t.top} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/12">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-lg font-bold leading-tight">{t.top}</p>
                  <p className="text-[0.95rem] text-white/80">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="max-w-[62ch]">
              <p className="font-semibold text-brand">What we do</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.6rem)] text-brand-deep">Bathrooms and tile first, the rest of the house too</h2>
              <p className="mt-4 text-muted">
                Bathrooms and tile are where BlueTile started and what most customers call us for. Because the same crew handles drywall, flooring, painting and interlock, one call can cover the whole project instead of three different trades.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Reveal key={s.title}>
                  <article className={`card flex h-full flex-col rounded-2xl bg-surface p-7 ring-1 ${s.featured ? "ring-2 ring-brand" : "ring-line"}`}>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                        <Icon name={s.icon} />
                      </span>
                      {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-sm font-semibold text-white">Our specialty</span>}
                    </div>
                    <h3 className="mt-5 text-[1.4rem] text-brand-deep">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[1.02rem] text-muted">{s.body}</p>
                    <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-deep">
                      Call about this <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-brand">Reviews</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.6rem)] text-brand-deep">Rated 5.0 from 12 Google reviews</h2>
                <p className="mt-3 max-w-[60ch] text-muted">
                  The same things come up again and again: clean job sites, clear communication, quick turnaround and tile work that looks right. Many customers hired us for one job and came back for the next.
                </p>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn inline-flex h-12 shrink-0 items-center gap-2 rounded-xl border-2 border-brand bg-white px-5 font-semibold text-brand hover:bg-brand-soft">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>
            <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
              {REVIEWS.map((r) => (
                <Reveal key={r.name} className="mb-6 break-inside-avoid">
                  <figure className="card rounded-2xl bg-surface p-7 ring-1 ring-line">
                    <Stars className="h-[18px] w-[18px]" />
                    <blockquote className="mt-4 text-[1.04rem] leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-heading font-bold text-brand">{r.name.charAt(0)}</span>
                      <span>
                        <span className="block font-semibold text-ink">{r.name}</span>
                        <span className="block text-[0.92rem] text-muted">{r.job} · Google review</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-semibold text-brand">About BlueTile</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.6rem)] text-brand-deep">A Durham Region contractor who answers his own phone</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>
                  BlueTile Contracting is led by Anthony, who has spent more than 15 years doing hands-on renovation work, most of it in bathrooms and tile. He still comes out to look at every job, talks through the options in plain language and stays involved until the last tile is grouted.
                </p>
                <p>
                  Customers describe him as kind, funny and knowledgeable, the kind of contractor who points out other small things around the house while he is there. When one homeowner called with a water-damaged basement bathroom, Anthony came to assess it the same evening.
                </p>
                <p>
                  Anthony personally replies to every review we get, and he signs each one off the same way: <span className="font-semibold text-brand-deep">&ldquo;Built right, Built BlueTile.&rdquo;</span> That line is the standard every job is held to.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "chat" as IconName, t: "Clear communication", b: "You always know what is happening next, and who to call." },
                { icon: "sparkle" as IconName, t: "Clean, organized sites", b: "Floors protected, daily tidy-ups and a full cleanup at the end." },
                { icon: "clock" as IconName, t: "Faster than expected", b: "Recent customers say work wrapped up ahead of what they planned for." },
                { icon: "check" as IconName, t: "Detail you can see", b: "Tight grout lines, straight cuts and patches you cannot find." },
              ].map((d) => (
                <Reveal key={d.t}>
                  <div className="h-full rounded-2xl bg-tint p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand ring-1 ring-line">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[1.2rem] text-brand-deep">{d.t}</h3>
                    <p className="mt-2 text-[1rem] text-muted">{d.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="max-w-[60ch]">
              <p className="font-semibold text-brand">How it works</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.6rem)] text-brand-deep">From first call to finished bathroom</h2>
            </Reveal>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((s, i) => (
                <Reveal key={s.title}>
                  <li className="h-full rounded-2xl bg-surface p-6 ring-1 ring-line">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand font-heading text-lg font-bold text-white">{i + 1}</span>
                    <h3 className="mt-4 text-[1.2rem] text-brand-deep">{s.title}</h3>
                    <p className="mt-2 text-[1rem] text-muted">{s.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <p className="font-semibold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.6rem)] text-brand-deep">Renovating homes across Durham Region</h2>
              <p className="mt-4 text-muted">
                We work in homes throughout Durham Region and into the GTA. If your town is not on the list, give us a call. If we can get to you, we will.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {AREAS.map((a) => (
                  <li key={a} className="flex items-center gap-1.5 rounded-full bg-brand-soft px-4 py-2 font-semibold text-brand-deep">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-2xl ring-1 ring-line">
                <iframe
                  title="Map of Oshawa and Durham Region, Ontario"
                  src="https://maps.google.com/maps?q=Oshawa%2C%20Ontario&z=10&output=embed"
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <Reveal>
              <p className="font-semibold text-brand">FAQ</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.6rem)] text-brand-deep">Questions homeowners ask before they call</h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-surface ring-1 ring-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-[1.2rem] font-bold text-brand-deep">
                    {f.q}
                    <Icon name="chevron" className="chev h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)]">Ready to redo that bathroom? Call Anthony at {PHONE_DISPLAY}</h2>
              <p className="mt-3 text-lg text-white/80">Opens at 7 a.m. Call or text and tell us about the project.</p>
            </div>
            <a href={PHONE_TEL} className="btn inline-flex h-16 shrink-0 items-center gap-3 rounded-xl bg-cta px-8 text-xl font-semibold text-white hover:bg-cta-hover">
              <Icon name="phone" className="h-6 w-6" /> Call Now
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-[46ch] text-[1rem] text-muted">
              Bathroom renovations, custom tile, basements, drywall, painting and interlock for homeowners across Durham Region. Built right, Built BlueTile.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="BlueTile Contracting on Instagram" className="grid h-11 w-11 place-items-center rounded-xl bg-tint text-brand hover:bg-brand-soft">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="BlueTile Contracting on Facebook" className="grid h-11 w-11 place-items-center rounded-xl bg-tint text-brand hover:bg-brand-soft">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-brand-deep">Contact</h3>
            <ul className="mt-3 space-y-2 text-[1rem] text-muted">
              <li><a href={PHONE_TEL} className="font-semibold text-ink hover:text-brand">{PHONE_DISPLAY}</a></li>
              <li>Opens 7 a.m.</li>
              <li>Based in Durham Region, Ontario</li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-brand-deep">Services</h3>
            <ul className="mt-3 space-y-2 text-[1rem] text-muted">
              {SERVICES.map((s) => <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-line px-5 pt-6 text-[0.92rem] text-muted md:px-6">
          © {new Date().getFullYear()} BlueTile Contracting · Serving {AREAS.slice(0, 6).join(", ")}
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={PHONE_TEL} className="btn flex h-12 items-center justify-center gap-2 rounded-xl bg-cta font-semibold text-white">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={PHONE_SMS} className="btn flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-brand font-semibold text-brand">
          <Icon name="message" className="h-5 w-5" /> Text
        </a>
      </div>
    </>
  );
}
