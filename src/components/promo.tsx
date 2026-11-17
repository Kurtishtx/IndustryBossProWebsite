'use client';
/* Offer codes on sign-up (11/17: GROUP3 for Facebook groups, plus SAVE50-XXXXXX codes).
 *
 * Both trial modals (TrialModal + HomeTrialModal) render <PromoCodeField> on the password step,
 * keep the value in their form state, send it to manage-users 'create' as promo_code, and show
 * result.promo.message on the done step. The code is optional and never blocks a signup:
 * manage-users ignores a bad one and returns promo.message.
 *
 * Prefill order: ?code= in the URL, then a SAVE50 code this browser saved from an exit popup. */
import { useEffect, useRef, useState } from 'react';

export const PROMO_FN = 'https://knjdbgroiyhvqwrpqzcx.supabase.co/functions/v1/promo-capture';
export const PROMO_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuamRiZ3JvaXlodnF3cnBxemN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0OTczMDMsImV4cCI6MjA5NTA3MzMwM30.zoExtkem-XZqU86S4yJjA_xOOaS1G0IPU2M9OAAza2g';
const LS_CODE = 'sbp_promo_code';
const LS_SIGNED_UP = 'sbp_signed_up';
const CODE_RE = /^SAVE50-[A-Z2-9]{6}$/;

export function prefillCode(): string {
  try {
    const q = new URLSearchParams(window.location.search).get('code');
    if (q) return q.trim().toUpperCase().slice(0, 20);
  } catch { /* ignore */ }
  let saved = '';
  try { saved = (localStorage.getItem(LS_CODE) || '').toUpperCase(); } catch { /* private mode */ }
  return CODE_RE.test(saved) ? saved : '';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function promoAfterSignup(result: any): { text: string; ok: boolean } | null {
  try { localStorage.setItem(LS_SIGNED_UP, '1'); } catch { /* private mode */ }
  return result?.promo?.message ? { text: String(result.promo.message), ok: !!result.promo.applied } : null;
}

export function PromoCodeField({ value, onChange, inputStyle, labelStyle }: {
  value: string; onChange: (v: string) => void; inputStyle: React.CSSProperties; labelStyle?: React.CSSProperties;
}) {
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);
  const checked = useRef('');
  const latest = useRef(value);
  latest.current = value;

  const check = (raw?: string) => {
    const v = (raw ?? latest.current).trim();
    if (v === checked.current) return;
    checked.current = v;
    if (!v) { setNote(null); return; }
    fetch(PROMO_FN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: PROMO_ANON },
      body: JSON.stringify({ action: 'check', code: v, product: 'fieldbosspro' }),
    }).then((r) => r.json()).then((d) => {
      if (!d?.message || latest.current.trim() !== v) return;
      setNote({ text: d.message, ok: !!d.valid });
    }).catch(() => { /* the real check happens at signup */ });
  };

  useEffect(() => {
    if (value) { check(value); return; }
    const c = prefillCode();
    if (c) { onChange(c); latest.current = c; check(c); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginBottom: 14 }}>
      {labelStyle
        ? <label htmlFor="ibp-promo" style={labelStyle}>Offer code <span style={{ textTransform: 'none', fontWeight: 400, opacity: 0.75 }}>(optional)</span></label>
        : null}
      <input id="ibp-promo" data-sbp-promo="1" type="text" value={value} onChange={(e) => onChange(e.target.value.toUpperCase())} onBlur={() => check()}
        placeholder={labelStyle ? 'Example: GROUP3' : 'Offer code (optional) - example: GROUP3'} aria-label="Offer code (optional)"
        autoComplete="off" spellCheck={false} autoCapitalize="characters" maxLength={20} style={{ ...inputStyle, marginBottom: 0 }} />
      <div aria-live="polite" style={{ display: note ? 'block' : 'none', fontSize: 12, marginTop: 5, lineHeight: 1.4, color: note?.ok ? '#4ade80' : '#fdba74' }}>{note?.text}</div>
    </div>
  );
}
