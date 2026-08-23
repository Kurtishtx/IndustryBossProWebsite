'use client';

/* Three plans, compared side by side.
 *
 * The point of the table is that a solo operator can see a door in at $49 without the $199 plan
 * looking padded — so what Start LACKS is shown, greyed and struck, rather than hidden. Someone
 * comparing wants to know what they give up, and a feature list that only ever says "yes" reads
 * as marketing.
 *
 * Only OUTBOUND is metered. Inbound replies cost us a fraction of a cent and are the whole
 * point of the product - charging for them would train people not to use it. Extra blocks are
 * 500 for $15 on every plan and do NOT roll over; the block price comes from pricing.html,
 * which still claims they roll over and needs correcting.
 *
 * NOT collapsed behind a "compare features" toggle, deliberately. The owner - who is the buyer
 * this page is written for - wants every line visible at a glance so a reader can see what the
 * software does without clicking. Left open on purpose; do not "tidy" it into an accordion.
 */

type Cell = string | boolean;

const PLANS = [
  { key: 'start', name: 'Start', price: 49,  tag: 'Just getting going' },
  { key: 'solo',  name: 'Solo',  price: 89,  tag: 'Small shop, fully equipped', featured: true },
  /* Named Crew, not Unlimited. Outbound texts are capped on every plan, and a plan called
     Unlimited that stops sending in week three reads as a bait-and-switch however fair the
     cap is. Users, employees and trucks ARE unlimited here - that belongs in the table as a
     line you can check, not in the name as a promise the texting row contradicts. */
  { key: 'unl',   name: 'Crew',  price: 199, tag: 'Crews and trucks' },
];

/* Ordered so the ticks stack into solid blocks rather than scattering.
 *
 *   1. the numbers — what each plan lets you have
 *   2. everything on ALL THREE plans — Start's column is an unbroken run of ticks
 *   3. everything Solo and up — an unbroken run of dashes beneath it
 *
 * A reader can then see where Start stops by looking for the line, instead of tracking a
 * checkerboard down twenty rows. */
const ROWS: { label: string; note?: string; cells: [Cell, Cell, Cell] }[] = [
  /* ── What each plan lets you have ── */
  { label: 'Users', note: 'Office logins - the people who schedule, invoice and see the money',
                                                     cells: ['2', '3', 'Unlimited'] },
  { label: 'Employees', note: 'Crew-app seats - they run the route and complete jobs, they never see the money',
                                                     cells: ['2', '3', 'Unlimited'] },
  { label: 'Trucks',                                 cells: ['2', '3', 'Unlimited'] },
  { label: 'Clients & properties',                   cells: ['Unlimited', 'Unlimited', 'Unlimited'] },
  { label: 'Outbound texts included', note: 'Replies from your customers are free and never counted against it. Extra blocks of 500 for $15 on every plan',
                                                     cells: ['100 / month', '500 / month', '1,000 / month'] },
  { label: 'Smart Lasso map selections',             cells: ['10 / month', '50 / month', 'Unlimited'] },
  { label: 'Auto-routing',                           cells: ['10 / month', '50 / month', 'Unlimited'] },

  /* ── On every plan ── */
  { label: 'Scheduling, waiting list & job board',   cells: [true, true, true] },
  { label: 'Package plans & recurring services',     cells: [true, true, true] },
  { label: 'Estimates, templates & follow-ups',      cells: [true, true, true] },
  { label: 'Invoicing',                              cells: [true, true, true] },
  { label: 'Card on file & customer payments',       cells: [true, true, true] },
  { label: 'Client app', note: 'Your customer signs in by text — sees their schedule, invoices, pays, and sets their own alert preferences',
                                                     cells: [true, true, true] },
  /* On Start the operator IS the crew, so the field app is the half they use most — routing the
     day, starting and finishing jobs from the truck. Holding it back would leave the cheapest
     plan as an office tool for someone who is not in an office. */
  { label: 'Crew app', note: 'Route the day, start and complete jobs, before/after photos, area treated',
                                                     cells: [true, true, true] },
  { label: 'Schedule alerts',                        cells: [true, true, true] },
  { label: 'Estimate alerts',                        cells: [true, true, true] },
  { label: 'Receive customer replies',               cells: [true, true, true] },
  { label: 'Web lead forms',                         cells: [true, true, true] },
  { label: 'Sales tax & reporting',                  cells: [true, true, true] },
  { label: 'QuickBooks export',                      cells: [true, true, true] },
  { label: 'Import your existing customers', note: 'Including Real Green and Service Autopilot exports',
                                                     cells: [true, true, true] },

  /* ── Solo and up ── */
  { label: 'Reply back to customers',                cells: [false, true, true] },
  { label: 'All other automated alerts', note: 'On the way, arrived, completed, follow-up, review request and the rest',
                                                     cells: [false, true, true] },
  { label: 'Automated invoice sending',              cells: [false, true, true] },
  { label: 'Automatic card charging',                cells: [false, true, true] },
  { label: 'Chemical tracking & compliance reports', note: 'Pesticide application records that satisfy a state request',
                                                     cells: [false, true, true] },
  { label: 'Employee time clock & hours',            cells: [false, true, true] },

];

function Mark({ v }: { v: Cell }) {
  if (v === true)  return <span style={{ color: '#27a567', fontWeight: 800, fontSize: 17 }}>✓</span>;
  if (v === false) return <span style={{ color: 'rgba(245,245,245,.28)', fontWeight: 700, fontSize: 15 }} title="Not on this plan">—</span>;
  return <span style={{ fontWeight: 700 }}>{v}</span>;
}

export default function PlanCompare() {
  return (
    <section id="plans" style={{ background: '#0a0a0a', padding: 'clamp(48px,6vw,72px) clamp(14px,4vw,24px)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(24px,3vw,34px)' }}>
          <span className="section-label">Pricing</span>
          <h2 style={{ fontSize: 'clamp(26px,3.4vw,40px)', fontWeight: 800, color: '#f5f5f5', margin: '8px 0 10px' }}>
            Pick the size you actually are
          </h2>
          <p style={{ color: 'rgba(245,245,245,.68)', fontSize: 16, maxWidth: 620, margin: '0 auto', lineHeight: 1.6 }}>
            Every plan is the same software. The bigger plans lift the limits and turn on the
            automation — you are never paying for seats you do not have.
          </p>
        </div>

        {/* The table scrolls sideways on a phone rather than squeezing three price columns
            into 360px, which is how comparison tables normally become unreadable. */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', color: '#f5f5f5' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0 12px 16px', width: '34%' }} />
                {PLANS.map(p => (
                  <th key={p.key} style={{
                    padding: '18px 12px 16px', textAlign: 'center', verticalAlign: 'bottom',
                    background: p.featured ? 'rgba(255,106,0,.10)' : 'transparent',
                    borderTop: p.featured ? '2px solid #ff6a00' : '2px solid transparent',
                    borderLeft: '1px solid rgba(255,255,255,.07)', borderRight: '1px solid rgba(255,255,255,.07)',
                    borderRadius: '10px 10px 0 0',
                  }}>
                    {p.featured && (
                      <div style={{ color: '#ff6a00', fontSize: 11, fontWeight: 800, letterSpacing: '.08em', marginBottom: 6 }}>
                        MOST POPULAR
                      </div>
                    )}
                    <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '.04em' }}>{p.name}</div>
                    <div style={{ fontSize: 'clamp(28px,3.2vw,38px)', fontWeight: 900, lineHeight: 1.1, marginTop: 4 }}>
                      <sup style={{ fontSize: '.5em', verticalAlign: 'super' }}>$</sup>{p.price}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(245,245,245,.60)' }}>per month</div>
                    <div style={{ fontSize: 12, color: 'rgba(245,245,245,.75)', marginTop: 6, minHeight: 32 }}>{p.tag}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.label} style={{ background: i % 2 ? 'rgba(255,255,255,.02)' : 'transparent' }}>
                  <td style={{ padding: '11px 12px', fontSize: 14, borderTop: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ fontWeight: 600 }}>{r.label}</div>
                    {r.note && (
                      <div style={{ fontSize: 11.5, color: 'rgba(245,245,245,.50)', marginTop: 2, lineHeight: 1.45 }}>{r.note}</div>
                    )}
                  </td>
                  {r.cells.map((c, ci) => (
                    <td key={ci} style={{
                      padding: '11px 12px', textAlign: 'center', fontSize: 13.5,
                      borderTop: '1px solid rgba(255,255,255,.06)',
                      borderLeft: '1px solid rgba(255,255,255,.07)', borderRight: '1px solid rgba(255,255,255,.07)',
                      background: PLANS[ci].featured ? 'rgba(255,106,0,.06)' : 'transparent',
                      color: c === false ? 'rgba(245,245,245,.34)' : '#f5f5f5',
                    }}>
                      <Mark v={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(245,245,245,.60)', fontSize: 13, marginTop: 18, lineHeight: 1.7 }}>
          14-day free trial on every plan &middot; no card to start &middot; cancel anytime &middot; move up or down whenever you like.
          <br />
          Need more texts? Blocks of 500 for <b style={{ color: '#fff' }}>$15</b> on any plan &middot; replies from your customers are always free.
        </p>
      </div>
    </section>
  );
}
