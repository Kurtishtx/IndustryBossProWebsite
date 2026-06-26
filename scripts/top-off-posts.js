const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/blog-lawn-care-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// ---- 2 more fertilizer posts ----
const fertExtra = `  {
    slug: 'fertilizer-technician-pay-structures',
    title: 'Fertilizer Technician Pay Structures: What Works for Retention and Performance',
    description: 'How to build compensation structures for fertilizer technicians that retain top performers and align individual incentives with business profitability.',
    date: '2026-12-15',
    readTime: 5,
    intro: 'Paying fertilizer technicians well is necessary but not sufficient for retention — how you pay matters as much as how much. A compensation structure that rewards quality alongside productivity creates a different kind of employee than one that rewards volume alone, and the difference shows in callback rates, client satisfaction, and year-over-year return rates.',
    sections: [
      {
        h2: 'Base Pay Plus Performance Bonus: The Most Common Effective Structure',
        content: 'A base hourly wage that covers the technician\'s floor expectation, combined with a quarterly bonus tied to callback rate and client satisfaction scores, creates an incentive structure that motivates quality without creating pressure to rush applications. Set the base rate competitively for your market — typically $18 to $26 per hour for experienced licensed applicators — and add a bonus of $300 to $600 per quarter for technicians who maintain callback rates below a defined threshold and average client satisfaction scores above a defined target. This structure requires that you actually measure and share these metrics with technicians, which is itself a management practice that improves performance.'
      },
      {
        h2: 'Commission Structures That Work and Ones That Backfire',
        content: 'Per-stop commissions that are not paired with quality constraints incentivize rushing, which increases callback rates and product waste simultaneously. Commission structures that add a quality deduction — reducing the per-stop payout for every callback generated above a baseline — align speed and quality without requiring complex tracking. For technicians who also handle upsell conversations, a commission on enrolled add-on services creates a sales incentive without requiring a dedicated sales team. Never tie commission directly to volume metrics that technicians cannot fully control, such as new client acquisition — those metrics should be incentivized at the company level rather than as individual performance pay.'
      },
      {
        h2: 'Non-Cash Benefits That Improve Retention at Low Cost',
        content: 'Covering pesticide applicator license renewal fees and continuing education costs is one of the highest-return retention investments available to fertilizer business owners because the benefit is directly relevant to the employee\'s career and costs the company $200 to $600 per year per technician. Flexible scheduling that gives technicians input into their route day and start time, company-provided quality uniforms and PPE, and a transparent path to full-time year-round employment for top performers create retention advantages that cash compensation alone cannot replicate. Employees who feel the company is investing in their career stay longer and perform better than those who feel interchangeable.'
      }
    ],
    hubSlug: 'fertilizer-software',
    hubKeyword: 'fertilizer software',
    industry: 'fertilizer'
  },
  {
    slug: 'fertilizer-program-for-new-clients',
    title: 'Onboarding New Clients Into a Fertilizer Program: First Impressions That Drive Retention',
    description: 'How to onboard new fertilizer program clients so they understand the program, trust the process, and stay enrolled past the first-season decision point.',
    date: '2027-01-01',
    readTime: 5,
    intro: 'The highest-risk cancellation period in a fertilizer program is the first 90 days — before clients have seen enough results to feel confident the investment is working. A structured onboarding experience that sets accurate expectations, delivers a first visit that exceeds them, and maintains engagement through the early rounds prevents the majority of first-season cancellations.',
    sections: [
      {
        h2: 'The Welcome Communication That Sets the Right Expectations',
        content: 'Send a welcome package within 24 hours of enrollment that explains the program timeline, what each round accomplishes, and what results to expect at each stage. Be specific: after round one, the lawn will look similar but the crabgrass barrier is in place; after round two, broadleaf weeds should show decline within 14 days; after round three, clients should begin to notice a color difference. Clients who receive this roadmap enter each round with a clear success benchmark rather than a vague sense that their lawn should look better.'
      },
      {
        h2: 'First Visit Quality That Creates a Lasting Positive Impression',
        content: 'Assign your most experienced technician to first visits for new clients, confirm access details in advance, arrive within the stated window, and complete a thorough post-visit note before leaving. Send the visit summary within one hour of completion, including what was applied, why, and what to do and not do in the next 24 hours. A first visit that is professional, on-time, and immediately followed by clear communication creates a positive anchor that shapes how clients interpret every subsequent service interaction.'
      },
      {
        h2: 'Mid-Season Check-In That Catches Problems Before They Become Cancellations',
        content: 'At the midpoint of the first season — typically around round three or four — send a brief check-in communication asking whether the client has any questions or concerns about their program. This touchpoint serves two purposes: it identifies clients who have a concern they have not yet expressed, giving you the opportunity to address it proactively rather than receiving a cancellation call, and it demonstrates that you are tracking their specific property rather than running a generic program. Clients who receive mid-season check-ins renew at meaningfully higher rates than those who only hear from the company when an application is scheduled.'
      }
    ],
    hubSlug: 'fertilizer-software',
    hubKeyword: 'fertilizer software',
    industry: 'fertilizer'
  }`;

// ---- 1 more weed-control post ----
const weedExtra = `  {
    slug: 'weed-control-customer-service',
    title: 'Customer Service in a Weed Control Business: Standards That Build Long-Term Loyalty',
    description: 'How weed control businesses use customer service as a competitive differentiator to retain clients and generate referrals in a commoditized market.',
    date: '2027-01-01',
    readTime: 5,
    intro: 'Weed control is often perceived as a commodity by clients who cannot easily distinguish between providers based on application quality alone. Customer service — how quickly you respond, how clearly you communicate, how professionally you handle problems — is often the deciding factor in whether clients renew and refer. Operators who build deliberate service standards into their operations create loyalty that technical quality alone cannot sustain.',
    sections: [
      {
        h2: 'Response Time Standards That Separate You From Competitors',
        content: 'Set a company standard of responding to every client inquiry within two business hours during service days and by 9am the following morning for messages received after hours. Communicate this standard to clients at enrollment so they know what to expect. Companies that consistently meet this response standard generate client satisfaction scores 20 to 30 percent higher than those where response time varies based on office workload, and the difference shows up directly in review ratings and renewal rates within one season of consistent implementation.'
      },
      {
        h2: 'Proactive Communication That Eliminates Inbound Inquiries',
        content: 'The best client service in a weed control business is communication that preempts questions before clients need to ask them. Pre-visit texts 24 hours before service, post-visit summaries within one hour of completion, weather reschedule notifications the morning a cancellation occurs, and program timeline updates as you move through the season collectively eliminate 60 to 80 percent of the inbound client calls that consume office time. Each of these touchpoints can be automated through your field service software with template messages customized by service type.'
      },
      {
        h2: 'Building a Service Recovery System for When Things Go Wrong',
        content: 'Every weed control business will have service failures — missed appointments, application errors, communication gaps. The companies that retain clients through these events are those with a documented service recovery process rather than an ad-hoc response that depends on who happens to answer the phone. Define the recovery steps for common failure scenarios: what happens when a technician misses a scheduled stop, how a damage claim is handled within the first 24 hours, and what the escalation path is when a client concern is not resolved by the first responder. Clients who experience a well-executed service recovery are frequently more loyal than those who never experienced a problem.'
      }
    ],
    hubSlug: 'weed-control-software',
    hubKeyword: 'weed control software',
    industry: 'weed-control'
  }`;

// ---- 2 more lawn-treatment posts ----
const treatExtra = `  {
    slug: 'lawn-treatment-before-after-photos',
    title: 'Before and After Photos in Lawn Treatment: How to Capture and Use Them',
    description: 'How lawn treatment businesses use before-and-after photography to demonstrate results, win new clients, and improve renewal rates.',
    date: '2026-12-15',
    readTime: 5,
    intro: 'Lawn treatment is a service where results develop gradually and can be difficult for clients to attribute specifically to your program. Before-and-after photography creates concrete, visual proof of your program\'s impact that client memory alone cannot sustain — and it is one of the most powerful tools in both your sales and retention arsenal.',
    sections: [
      {
        h2: 'Building a Photo Capture Habit Into Your Field Workflow',
        content: 'Photos are only valuable if they are taken consistently, which means photo capture must be built into your technician workflow as a standard step rather than an optional extra. Require technicians to take two reference photos per property on every enrollment visit — one of the full front lawn and one of any area with visible weed or turf problem — and store these in the client record tied to the date. Subsequent visit photos taken at the same reference points create a time-series comparison that makes results visible even when change has been gradual enough that neither the technician nor the client noticed it week to week.'
      },
      {
        h2: 'Using Photos in Renewal and Sales Communications',
        content: 'A before-and-after comparison showing a client\'s lawn at enrollment versus their current state after one full season is the most compelling renewal communication a lawn treatment business can send. Include the comparison in your October renewal package with a brief narrative explaining what changed and why. For sales prospects, before-and-after comparisons from similar properties in their neighborhood are more persuasive than any marketing copy because they represent local, observable results from real lawns in the prospect\'s own area.'
      },
      {
        h2: 'Photo Rights and Client Permission Best Practices',
        content: 'Include a simple photo permission clause in your service agreement that allows you to use property photos for marketing and documentation purposes without identifying the client\'s address or personal information. Most clients consent readily when the request is framed as helping you demonstrate results to potential clients in their area. For clients who prefer not to have their property used in marketing, mark this preference in their record in your software so your marketing team does not inadvertently use their photos.'
      }
    ],
    hubSlug: 'lawn-treatment-software',
    hubKeyword: 'lawn treatment software',
    industry: 'lawn-treatment'
  },
  {
    slug: 'lawn-treatment-contract-structures',
    title: 'Lawn Treatment Service Contracts: Building Agreements That Protect Your Business',
    description: 'What to include in lawn treatment service agreements to set clear expectations, define service scope, and protect your business in dispute scenarios.',
    date: '2027-01-01',
    readTime: 5,
    intro: 'A well-written lawn treatment service agreement resolves disputes before they happen by establishing what both parties agreed to in writing. Most service disputes in the lawn treatment industry come down to mismatched expectations that a clear agreement would have prevented.',
    sections: [
      {
        h2: 'Service Scope Definition That Prevents Disputes',
        content: 'Define exactly what services are included in your program — the specific application rounds, the target pests and weeds, and what is explicitly not included. If your standard program does not include grub prevention, nutsedge control, or tree and shrub treatments, say so in the agreement. The more specific your scope definition, the fewer disputes arise about what was supposed to happen — and the easier it is to sell add-on services to clients who want coverage beyond the standard program because the agreement makes clear what the add-on is adding.'
      },
      {
        h2: 'Results Language That Is Honest Without Creating Liability',
        content: 'Avoid unqualified results guarantees — language like "weed-free lawn guaranteed" creates liability for conditions outside your control, including client watering practices, mowing habits, and weather. Replace absolute guarantees with conditional commitments that describe what your program is designed to achieve when applications are made within optimal timing windows and client aftercare instructions are followed. This language is honest, professional, and defensible without sounding like you are hedging on service quality.'
      },
      {
        h2: 'Cancellation Terms That Protect Revenue Without Driving Away Clients',
        content: 'Include a 30-day written notice cancellation requirement and a clear statement of how prepaid amounts are refunded if a client cancels mid-program. Make the cancellation process simple and professional rather than punitive, because clients who feel trapped by their agreement become hostile reviewers and active anti-referral sources. A refund policy that calculates remaining value at a specified per-round rate and processes the refund within 10 business days demonstrates fairness that protects your reputation even when clients cancel.'
      }
    ],
    hubSlug: 'lawn-treatment-software',
    hubKeyword: 'lawn treatment software',
    industry: 'lawn-treatment'
  }`;

// Append 2 fertilizer posts - the marker has a blank line before ];
const fertMarker = `    industry: 'fertilizer'\n  }\n\n];\n\nexport const weedControlPosts`;
if (!content.includes(fertMarker)) {
  console.error('Fert marker not found. Trying alternate...');
  // Try without the blank line
  const fertMarker2 = `    industry: 'fertilizer'\n  }\n];\n\nexport const weedControlPosts`;
  if (!content.includes(fertMarker2)) {
    console.error('Fert marker 2 not found either!');
    // Show what's around weedControlPosts
    const idx = content.indexOf('export const weedControlPosts');
    console.log('Context around weedControlPosts:', JSON.stringify(content.substring(idx-150, idx+50)));
    process.exit(1);
  }
  content = content.replace(fertMarker2, `    industry: 'fertilizer'\n  },\n  ${fertExtra}\n];\n\nexport const weedControlPosts`);
} else {
  content = content.replace(fertMarker, `    industry: 'fertilizer'\n  },\n  ${fertExtra}\n\n];\n\nexport const weedControlPosts`);
}
console.log('Added fertilizer posts');

// Append 1 weed-control post
const weedMarker = `    industry: 'weed-control'\n  }\n\n];\n\nexport const lawnTreatmentPosts`;
if (!content.includes(weedMarker)) {
  const weedMarker2 = `    industry: 'weed-control'\n  }\n];\n\nexport const lawnTreatmentPosts`;
  if (!content.includes(weedMarker2)) {
    console.error('Weed marker not found!');
    const idx = content.indexOf('export const lawnTreatmentPosts');
    console.log('Context:', JSON.stringify(content.substring(idx-150, idx+50)));
    process.exit(1);
  }
  content = content.replace(weedMarker2, `    industry: 'weed-control'\n  },\n  ${weedExtra}\n];\n\nexport const lawnTreatmentPosts`);
} else {
  content = content.replace(weedMarker, `    industry: 'weed-control'\n  },\n  ${weedExtra}\n\n];\n\nexport const lawnTreatmentPosts`);
}
console.log('Added weed-control post');

// Append 2 lawn-treatment posts — find last occurrence
const treatMarker = `    industry: 'lawn-treatment'\n  }\n\n];`;
const lastIdx = content.lastIndexOf(treatMarker);
if (lastIdx === -1) {
  const treatMarker2 = `    industry: 'lawn-treatment'\n  }\n];`;
  const lastIdx2 = content.lastIndexOf(treatMarker2);
  if (lastIdx2 === -1) {
    console.error('Treat marker not found!');
    process.exit(1);
  }
  content = content.substring(0, lastIdx2) + `    industry: 'lawn-treatment'\n  },\n  ${treatExtra}\n];` + content.substring(lastIdx2 + treatMarker2.length);
} else {
  content = content.substring(0, lastIdx) + `    industry: 'lawn-treatment'\n  },\n  ${treatExtra}\n\n];` + content.substring(lastIdx + treatMarker.length);
}
console.log('Added lawn-treatment posts');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done! All missing posts added.');
