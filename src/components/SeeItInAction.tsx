'use client';
import { useState } from 'react';

/* "See it in action" — sits BELOW the live demo, for the visitor who scrolled past it without
 * clicking. The demo is the stronger pitch (they touch the real software), so video must never
 * compete with it for the top of the page.
 *
 * Click-to-play facade, not a plain <iframe>. A YouTube embed pulls roughly 700KB of script on
 * page load even if nobody presses play, which would undo the LCP work done on this site - and
 * Meta scores landing page experience and prices ad clicks partly on speed, so a slow page costs
 * real money on the campaign driving traffic here. Nothing from YouTube loads until a click.
 *
 * TO TURN THIS ON: paste the two YouTube video IDs below. The ID is the part after "v=" in
 * https://www.youtube.com/watch?v=XXXXXXXXXXX - eleven characters, not the whole URL.
 * While both are empty the whole section renders nothing, so this is safe to ship unfinished. */
const HIGHLIGHTS_ID = '';   // the 1:19 highlights cut - the one most people will actually watch
const FULL_TOUR_ID  = '';   // the ~5:37 full walkthrough - for someone comparing vendors

type Props = { onOpenModal?: () => void };

function Facade({ id, title, sub }: { id: string; title: string; sub: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '16 / 9',
        borderRadius: 16, overflow: 'hidden', background: '#000',
        boxShadow: '0 32px 80px rgba(0,0,0,.5)',
      }}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerated-motion; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${title}`}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              border: 0, padding: 0, cursor: 'pointer', background: '#000',
            }}
          >
            {/* maxresdefault is not generated for every video; hqdefault always is. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.85 }}
            />
            <span style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
              width: 84, height: 84, borderRadius: '50%', background: '#ff6a00',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,.5)',
            }}>
              <span style={{
                width: 0, height: 0, marginLeft: 6,
                borderTop: '16px solid transparent', borderBottom: '16px solid transparent',
                borderLeft: '26px solid #fff',
              }} />
            </span>
          </button>
        )}
      </div>
      <div style={{ marginTop: 14, color: '#fff', fontWeight: 800, fontSize: 'clamp(18px,2.2vw,22px)' }}>{title}</div>
      <div style={{ marginTop: 4, color: '#b8b8b8', fontSize: 15 }}>{sub}</div>
    </div>
  );
}

export default function SeeItInAction({ onOpenModal }: Props) {
  const [showFull, setShowFull] = useState(false);

  // Unset IDs render nothing at all rather than a broken player.
  if (!HIGHLIGHTS_ID && !FULL_TOUR_ID) return null;

  return (
    <section
      id="see-it"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111 55%, #1a1a1a 100%)',
        padding: 'clamp(56px,7vw,88px) clamp(14px,4vw,24px)',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,42px)', margin: '0 0 10px', fontWeight: 900 }}>
        See it in action
      </h2>
      <p style={{ color: '#b8b8b8', maxWidth: 620, margin: '0 auto clamp(28px,4vw,40px)', fontSize: 17, lineHeight: 1.5 }}>
        A day in the office, on the truck and on your customer&rsquo;s phone &mdash; in about a minute.
      </p>

      {HIGHLIGHTS_ID ? (
        <Facade
          id={HIGHLIGHTS_ID}
          title="IndustryBossPro in 90 seconds"
          sub="Route building, one-tap scheduling, crew app and customer alerts."
        />
      ) : null}

      {FULL_TOUR_ID ? (
        <div style={{ marginTop: HIGHLIGHTS_ID ? 34 : 0 }}>
          {showFull ? (
            <Facade
              id={FULL_TOUR_ID}
              title="The full walkthrough"
              sub="Every screen, start to finish — worth it if you are comparing systems."
            />
          ) : (
            <button
              onClick={() => setShowFull(true)}
              style={{
                background: 'transparent', color: '#ff6a00', border: '1px solid #ff6a00',
                borderRadius: 10, padding: '13px 26px', fontWeight: 700, fontSize: 16, cursor: 'pointer',
              }}
            >
              Watch the full walkthrough →
            </button>
          )}
        </div>
      ) : null}

      {onOpenModal ? (
        <div style={{ marginTop: 'clamp(30px,4vw,42px)' }}>
          {/* The video is the consolation prize; trying it is the point. */}
          <button
            onClick={onOpenModal}
            style={{
              background: '#ff6a00', color: '#fff', border: 0, borderRadius: 10,
              padding: '15px 30px', fontWeight: 800, fontSize: 17, cursor: 'pointer',
            }}
          >
            Start Free — 14 Days, No Card
          </button>
        </div>
      ) : null}
    </section>
  );
}
