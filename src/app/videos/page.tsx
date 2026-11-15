'use client';
import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import TrialModal from '../../components/TrialModal';

// Videos + thumbnails live on Cloudflare R2 (no bandwidth charges), not on this site.
const BASE = 'https://videos.bossprohq.com/industrybosspro';

type V = { id: string; title: string; text: string; secs: number };
const GROUPS: { name: string; videos: V[] }[] = [
  { name: 'Getting started', videos: [
    { id: '01_overview', title: 'Your whole business in one app', text: 'A quick tour: the map of what’s due, booked stops, clients, invoices and automatic alerts.', secs: 68 },
    { id: '02_setup', title: 'Set up your account', text: 'One Setup page walks you through company info, customers, alerts and card processing.', secs: 61 },
    { id: '03_import', title: 'Switch from Jobber, Service Autopilot and others', text: 'Bring your customers over from another app or any spreadsheet.', secs: 59 },
  ] },
  { name: 'Jobs, scheduling and your crew', videos: [
    { id: '23_job_board', title: 'Every crew’s week on one board', text: 'Mowing, landscaping, irrigation and more by day and by crew, in a list or a calendar.', secs: 56 },
    { id: '24_recurring_jobs', title: 'Recurring jobs that schedule themselves', text: 'Set up weekly mowing once and every visit lands on the board for the season.', secs: 33 },
    { id: '04_schedule_route', title: 'Schedule and route your day', text: 'Outline the stops on a map, schedule them, and put them in driving order with one click.', secs: 63 },
    { id: '05_crew_app', title: 'The crew app', text: 'Your crews see their route in order, gate codes and notes, and can alert the next stop.', secs: 38 },
    { id: '17_measuring', title: 'Measure lawns from your desk', text: 'Draw the lot on satellite, subtract the house, and get the turf square footage.', secs: 53 },
  ] },
  { name: 'Getting paid and knowing your numbers', videos: [
    { id: '06_invoicing', title: 'Automatic invoicing and card charging', text: 'Finished work becomes invoices, and Billing Automation sends them and charges cards on file.', secs: 66 },
    { id: '07_estimates', title: 'Estimates customers approve online', text: 'Send a branded estimate and the customer picks the services they want.', secs: 69 },
    { id: '25_job_costing', title: 'Know what every job really made', text: 'Revenue, labor from your crew’s real times, and materials, for profit on every job.', secs: 38 },
    { id: '27_costs_receipts', title: 'Track every cost, receipt by receipt', text: 'Your crew snaps a receipt, AI fills it in, and receipts on a job count toward its real profit.', secs: 92 },
    { id: '20_reports', title: 'Reports that add themselves up', text: 'Sales, chemical totals, hours and each crew member’s jobs and pay.', secs: 58 },
    { id: '19_integrations', title: 'QuickBooks, Zapier and Make', text: 'Connect your books and the rest of your tools.', secs: 39 },
  ] },
  { name: 'Your customers', videos: [
    { id: '08_client_app', title: 'The client app', text: 'Customers see their visits, pay invoices, sign up for more services and watch your crew on the map.', secs: 40 },
    { id: '09_texting_alerts', title: 'Texting and automatic alerts', text: 'Night before, on the way and crew arrived alerts go out on their own.', secs: 47 },
    { id: '10_reviews_tips', title: 'Crew reviews, tips and bonuses', text: 'Customers rate the crew member and tip, and it flows straight into payroll.', secs: 59 },
  ] },
  { name: 'AI and marketing', videos: [
    { id: '11_ai_receptionist', title: 'AI receptionist', text: 'An AI answers your phone, quotes from your prices, and sends you each call.', secs: 75 },
    { id: '12_ai_assistant', title: 'AI Assistant: ask your business anything', text: 'Ask who owes you the most or how many jobs you finished, and get the answer in seconds.', secs: 59 },
    { id: '13_reviews_ai_replies', title: 'Google reviews with AI replies', text: 'Every review in one place, with a reply written for you.', secs: 57 },
    { id: '14_social_inbox', title: 'Social inbox and posting', text: 'Messages, comments, reviews and lead forms in one inbox, plus posts written for you.', secs: 81 },
    { id: '15_auto_posts', title: 'AI auto posts', text: 'Posts written and scheduled for you on the days you pick.', secs: 91 },
    { id: '16_neighbor_postcards', title: 'Neighbor postcards', text: 'Mail a postcard to the neighbors around any job you do.', secs: 64 },
  ] },
  { name: 'Lawn treatments and chemical records', videos: [
    { id: '21_chemical_records', title: 'Chemical records done for you', text: 'Every application recorded with EPA numbers, rates, weather and license numbers.', secs: 65 },
    { id: '22_products_mixes', title: 'Products and mixes', text: 'Set up your products once and build mixes with their rates.', secs: 50 },
  ] },
];

const mmss = (s: number) => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');

function Card({ v }: { v: V }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="vid-card" id={v.id.replace(/^\d+_/, '')}>
      <div className="vid-frame">
        {playing ? (
          <video src={`${BASE}/${v.id}.mp4`} poster={`${BASE}/${v.id}.jpg`} controls autoPlay playsInline preload="auto" />
        ) : (
          <button className="vid-poster" onClick={() => setPlaying(true)} aria-label={`Play: ${v.title}`}>
            <img src={`${BASE}/${v.id}.jpg`} alt={v.title} loading="lazy" width={960} height={540} />
            <span className="vid-play">&#9658;</span>
            <span className="vid-len">{mmss(v.secs)}</span>
          </button>
        )}
      </div>
      <h3>{v.title}</h3>
      <p>{v.text}</p>
    </div>
  );
}

export default function VideosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const all = GROUPS.flatMap((g) => g.videos);
  const ld = {
    '@context': 'https://schema.org',
    '@graph': all.map((v) => ({
      '@type': 'VideoObject',
      name: `${v.title} | IndustryBossPro`,
      description: v.text,
      thumbnailUrl: `${BASE}/${v.id}.jpg`,
      contentUrl: `${BASE}/${v.id}.mp4`,
      uploadDate: '2026-11-15',
      duration: `PT${Math.floor(v.secs / 60)}M${v.secs % 60}S`,
    })),
  };
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f5f5f5', fontFamily: "'Inter','Segoe UI',Arial,sans-serif" }}>
      <SiteHeader onOpenModal={() => setModalOpen(true)} />
      <TrialModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <style>{`
        .vid-wrap{max-width:1180px;margin:0 auto;padding:56px 20px 80px}
        section.vid-group{margin:0 0 56px;padding:0!important;min-height:0!important}
        .vid-group h2{font-size:26px;font-weight:800;color:#fff;margin:0 0 20px}
        .vid-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:28px}
        .vid-card h3{font-size:18px;font-weight:800;color:#fff;margin:14px 0 6px}
        .vid-card p{font-size:15px;color:rgba(245,245,245,.7);line-height:1.6;margin:0}
        .vid-frame{position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#111;border:1px solid rgba(255,106,0,.35);box-shadow:0 6px 22px rgba(0,0,0,.4)}
        .vid-frame video,.vid-poster img{width:100%;height:100%;display:block;object-fit:cover}
        .vid-poster{all:unset;cursor:pointer;display:block;width:100%;height:100%;position:relative}
        .vid-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:68px;height:68px;border-radius:50%;background:#ff6a00;color:#fff;font-size:26px;display:flex;align-items:center;justify-content:center;padding-left:5px;box-shadow:0 6px 20px rgba(0,0,0,.45);transition:transform .15s}
        .vid-poster:hover .vid-play{transform:translate(-50%,-50%) scale(1.08)}
        .vid-len{position:absolute;right:10px;bottom:10px;background:rgba(0,0,0,.78);color:#fff;font-size:13px;font-weight:700;padding:3px 8px;border-radius:6px}
        .vid-btn{background:#ff6a00;color:#fff;border:none;border-radius:8px;padding:16px 36px;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit}
        .vid-btn:hover{background:#e63000}
        @media (max-width:640px){.vid-grid{grid-template-columns:1fr}.vid-wrap{padding:36px 16px 60px}}
      `}</style>

      <div style={{ paddingTop: 66 }}>
        <div style={{ background: 'linear-gradient(160deg, #0a0a0a, #111111)', padding: '90px 24px 70px', textAlign: 'center', borderBottom: '1px solid #e63000' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', border: '1px solid #e63000', color: '#ff6a00', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 20 }}>
            Videos
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, color: '#fff', marginBottom: 16, lineHeight: 1.1, letterSpacing: '-1.5px' }}>
            See IndustryBossPro in action
          </h1>
          <p style={{ color: 'rgba(245,245,245,0.70)', fontSize: 18, maxWidth: 560, margin: '0 auto 28px' }}>
            Short videos of every feature, recorded in the real app. Most are about a minute.
          </p>
          <button className="vid-btn" onClick={() => setModalOpen(true)}>Start Your 14-Day Free Trial</button>
        </div>
      </div>

      <div className="vid-wrap">
        {GROUPS.map((g) => (
          <section className="vid-group" key={g.name}>
            <h2>{g.name}</h2>
            <div className="vid-grid">{g.videos.map((v) => <Card key={v.id} v={v} />)}</div>
          </section>
        ))}
        <div style={{ textAlign: 'center', paddingTop: 12 }}>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: '#fff', marginBottom: 10 }}>Try it on your own business</h2>
          <p style={{ color: 'rgba(245,245,245,0.70)', fontSize: 17, marginBottom: 24 }}>14 days free. No card needed.</p>
          <button className="vid-btn" onClick={() => setModalOpen(true)}>Start Your 14-Day Free Trial</button>
        </div>
      </div>
      <SiteFooter onOpenModal={() => setModalOpen(true)} />
    </div>
  );
}
