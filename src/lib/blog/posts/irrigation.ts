import type { BlogPost } from '../types';
import type { HubPageData } from '../../hub-data';

export const posts: BlogPost[] = [
  {
    "slug": "irrigation-software-complete-guide",
    "title": "Adding Sprinkler Service to a Lawn Company: How the Irrigation Year Runs",
    "description": "How an irrigation service year runs for a lawn company: spring startups, summer repairs, fall winterizations, system notes per property, and licensing basics.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Lawn customers ask about their sprinklers constantly. A head is spraying the driveway, a zone will not shut off, the controller lost its program after a power outage. Lawn companies that say \"we don't do irrigation\" send that customer to someone else, and sometimes the someone else also mows. Adding sprinkler service is a natural fit, but it runs on a different calendar from mowing and fertilizer. It has two short, intense rushes (spring startups and fall winterizations) with repair work in between, and every system is a little different. Here is how the year actually runs, and what you need in place before you take it on.",
    "sections": [
      {
        "h2": "Why lawn companies add irrigation",
        "content": "The overlap is obvious once you look at it. Your crews already see every system you mow around. They notice the broken head, the soggy spot that never dries, the brown strip where a zone is not reaching. A tech who can fix those on the spot, or write a repair estimate before leaving, turns a complaint into a paid job and protects the lawn you are being paid to keep green.\n\nIt also smooths your calendar. Startups land in early spring before mowing ramps up fully, and winterizations land in fall as mowing slows down. Repairs fill gaps through the summer. For a lawn company, irrigation work tends to fill the shoulders of the season rather than compete with peak mowing weeks. The catch is that it needs its own setup: its own services, its own notes on every system, and techs who know what they are doing."
      },
      {
        "h2": "Spring startups",
        "content": "A startup brings a system back from winter. The tech closes any drain valves left open, opens the main shutoff slowly so water does not slam into the pipes, checks the backflow device for leaks, then runs each zone. While each zone runs, they walk it, looking for broken or tilted heads, clogged nozzles, spray hitting pavement, and leaks at valves. Finally, they set or check the controller program and replace the backup battery if it has one.\n\nStartups pile up in a few weeks once freezing nights are over. Customers all want theirs done the same week. That rush is the hardest scheduling problem in the business, and how you handle it decides whether you finish startups in two weeks or six. [Scheduling spring startups](/blog/irrigation/scheduling-features-irrigation-software) goes into it."
      },
      {
        "h2": "Repairs and the summer season",
        "content": "Most irrigation revenue between the rushes comes from repairs: broken heads from mowers and cars, failed solenoids, wire breaks, leaking valves, and controllers that need replacing. Many startups turn into repairs, because the tech finds problems while running zones. Price repairs consistently, with a service call or trip charge plus parts and labor, or with flat rates for common jobs. [Pricing sprinkler repairs](/blog/irrigation/estimating-and-quoting-irrigation-software) has the details.\n\nSummer also brings coverage complaints during dry spells, when a zone that was \"fine\" suddenly shows brown spots. A midseason check, where a tech runs each zone, adjusts heads and arcs, and tunes the controller for summer weather, can catch these before the customer calls."
      },
      {
        "h2": "Fall winterizations",
        "content": "In freezing climates, water left in the lines can crack pipes, fittings and valves. A winterization shuts off the water, puts the controller into its off or rain mode, and clears water from the system. Many systems are blown out with compressed air, zone by zone, until each zone runs only mist. Some systems drain manually or automatically instead. The backflow device needs its own attention so it is not damaged by freezing or by compressed air.\n\nLike startups, winterizations crowd into a short window, but this one has a hard deadline: the first hard freeze. Plan the route and the compressor capacity before the first customer calls. [Routing fall blowouts](/blog/irrigation/dispatch-and-routing-irrigation-software) covers it."
      },
      {
        "h2": "Know every system before you arrive",
        "content": "Every system is different. One has the controller in the garage and the backflow behind a shrub on the north side. Another has a main shutoff in a meter box at the street and a manual drain at the low point of zone four. Techs lose a lot of time hunting for these things on every visit.\n\nRecord the system once and keep it on the property. In IndustryBossPro, property notes and custom fields hold the controller brand and location, the number of zones, the backflow type and location, the main shutoff location, the head types, and any quirks (\"zone 3 valve box under the mulch by the mailbox\"). The crew app shows those notes at the stop. After one season of startups and blowouts, your techs walk onto every property knowing where everything is, and a new tech can work the route without the old one riding along."
      },
      {
        "h2": "Pricing the core services",
        "content": "Startups and winterizations are usually flat fees, often tiered by zone count, because a 6-zone system and a 20-zone system are very different amounts of work. An illustrative structure: a base price that covers up to a certain number of zones, plus a few dollars for each zone above it, with an extra charge for drip zones, pumps or commercial systems. Midseason checks are priced the same way.\n\nRepairs are priced as a service call plus parts and labor, or with flat rates for common fixes. Bundling the three seasonal visits into a maintenance plan gives customers a reason to commit to the whole year. Whatever structure you use, put it in the service catalog so the office and the techs quote the same numbers, and check it against real clock times after the first season. Job costing on each visit type shows whether your prices hold up."
      },
      {
        "h2": "Licensing and what you need first",
        "content": "Irrigation licensing varies widely. Some states license irrigation contractors directly. Many local water authorities require backflow devices to be tested on a schedule by a certified tester, and that certification is often separate from any irrigation license. Check your state and your local water provider before you advertise, and keep backflow testing as its own decision, since it carries its own certification and paperwork.\n\nBeyond licensing, you need a stocked truck (heads, nozzles, fittings, pipe, valves, wire connectors, a few common controllers), a compressor big enough for the systems you blow out, and a way to keep track of which properties need what, and when. If irrigation is the only service you run, IrrigationBossPro (https://irrigationbosspro.com) is the version built just for it. If it sits next to lawn care, the [irrigation software](/irrigation-software) page shows how both run from one schedule."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "scheduling-features-irrigation-software",
    "title": "Scheduling Spring Sprinkler Startups Without a Six-Week Backlog",
    "description": "How to run spring sprinkler startups: when to start, taking requests early, timing by zone count, batching by neighborhood, and repairs found along the way.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Every spring, sprinkler companies face the same week. The weather warms up, every customer looks at a dry lawn on the same Saturday, and the phone and inbox fill with startup requests. A company that takes them one call at a time, booking whatever slot is open, ends up driving across town six times a day and finishing startups in late May. A company that collects requests early, batches them by area and knows how long each one takes can get through the same list in a fraction of the time. Here is how to set up the spring rush so it works for you.",
    "sections": [
      {
        "h2": "Pick a start date and stick to it",
        "content": "Starting systems too early is a real risk. If you pressurize a system and a hard freeze follows, water sitting in the backflow device and above-ground pipes can freeze and crack them. Most companies set a start date for their area after the typical last hard freeze, and they watch the forecast in the first week, holding off if a cold snap is coming.\n\nTell customers your start date before they ask. A message in late winter that says \"spring startups begin the week of April 7, and we will text you the day before\" removes most of the \"can you come this weekend\" calls. Customers who know a date is coming are more patient than customers who have heard nothing."
      },
      {
        "h2": "Collect requests before the rush",
        "content": "The best spring schedules are built in February and March, not in April. Every customer you winterized last fall is a startup this spring. Put them on the list before the season opens. In the software, a startup can be its own recurring service that comes due once a year, so last fall's winterization customers land on the Waiting List as startups due, without anyone retyping them.\n\nNew customers can sign up through a web form on your website, with the responses landing in the software as leads. Ask for the address, the number of zones if they know it, where the controller is, and whether anyone needs to be home. That information turns into the property notes your tech reads in the driveway. The [scheduling](/features/field-service-scheduling-software) page shows the Waiting List."
      },
      {
        "h2": "How long a startup takes",
        "content": "A startup is not a fixed length. A six-zone system with a controller in the garage and everything working might take 30 minutes. A sixteen-zone system with drip zones, a pump and a few broken heads can take two hours. If you book every startup as 45 minutes, half your days will run long.\n\nPlan by zones. An illustrative rule is a base time for turning on the water and checking the backflow, plus a few minutes per zone, plus extra for drip or a pump station. Track the actual clock times this spring and adjust next year. Planned hours on each startup make the day realistic and give you something to compare actual time against later in the [job costing](/blog/irrigation/job-costing-irrigation-software) numbers."
      },
      {
        "h2": "Access and the night-before text",
        "content": "Many startups need nothing from the customer. The main shutoff, backflow and controller are all outside or in an unlocked garage. Others need someone home, a garage code, or a gate unlocked. Find out once, record it in the property notes, and you will never need to ask again.\n\nThe night-before text tells customers their startup is tomorrow, which gives them time to open the garage, unlock the gate or leave a code. Customers who need to be home can say so, and the office can move them to a day when they will be. The \"you're next\" text gives anyone waiting at home a heads up as the tech heads over."
      },
      {
        "h2": "Batch by neighborhood",
        "content": "Once requests are collected, schedule startups the way you would schedule mowing: by area. Open the Waiting List, circle a neighborhood or a group of streets on the map, and put the startups inside it on a truck for one day. Auto-routing orders the day's stops by distance. A tech doing eight startups within a mile of each other gets through far more work than one zigzagging across the county.\n\nThis is where the rush is won or lost. When a customer calls asking for \"as soon as possible,\" tell them when your truck is in their area. Most accept a date a week out if it is specific and you actually show up. Customers who need a specific day for access can be slotted in by hand, but keep them the exception. See [routing irrigation work](/blog/irrigation/dispatch-and-routing-irrigation-software) for building the routes."
      },
      {
        "h2": "Know how far behind you are",
        "content": "In the middle of the rush, the most useful number is how many startups are still waiting and how long the oldest has been waiting. If the list is shrinking by fifteen a day and you have sixty left, you are four days from done. If new requests are coming in faster than you finish them, you need more capacity now, not next week.\n\nThe Waiting List shows every startup that is due and not yet scheduled. Check it each morning. If the same neighborhood keeps getting skipped because it is out of the way, schedule it as its own day. If one tech is consistently finishing two hours early, give them a second area. Customers mostly forgive a wait. They do not forgive being forgotten. A customer who requested a startup in March and is still waiting in May, with no message, is a customer you will likely lose to the next company that answers the phone."
      },
      {
        "h2": "Startups that turn into repairs",
        "content": "A good share of startups find something wrong. A head snapped by a mower, a valve that will not close, a zone with low pressure. Decide in advance what a tech does when that happens. Small fixes, like replacing one head or nozzle, are often done on the spot and added to the invoice at a set price. Bigger repairs need approval first.\n\nTechs can write and send an estimate from the crew app while still in the yard, if the owner has turned that on for them, and it works with no signal, sending once the phone is back online. The customer approves it online, and the repair goes onto the schedule. That beats a note on the work order that says \"zone 4 valve bad, call customer,\" which often sits for a week. Repairs found during startups are some of the easiest sales of the year, because the customer has just seen the problem."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "dispatch-and-routing-irrigation-software",
    "title": "Routing Fall Sprinkler Blowouts Before the First Hard Freeze",
    "description": "How to route fall sprinkler blowouts against the freeze deadline: compressor capacity, neighborhood clusters, controller access, and what to do when behind.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Fall winterizations are a race. In spring you can push a startup a week and the customer is annoyed. In fall, if a hard freeze arrives before you blow out a system, the customer may be looking at cracked pipes, a split backflow device and a repair bill in the spring. That deadline changes how you route. Every day of blowouts needs to be dense, every compressor hour needs to count, and when weather threatens you need to know which systems are most at risk. Here is how to plan blowout routes so you finish before the cold does.",
    "sections": [
      {
        "h2": "The freeze date sets the plan",
        "content": "Start by working backward. Look at your area's typical first hard freeze date, then decide when you need to be finished, with a margin for the year it comes early. Count the working days between your start date and that finish date, take out a few for rain and breakdowns, and divide your list by the remaining days. That gives you the number of blowouts each truck needs per day.\n\nAn illustrative example: 600 systems to winterize, 20 working days, two compressor rigs. That is 15 blowouts per rig per day. If a rig realistically does 12, you either start earlier, add a rig, or accept that some customers will wait past the safe date. Better to know in September than in November."
      },
      {
        "h2": "Compressor capacity and the procedure",
        "content": "Blowouts depend on air volume more than pressure. A small shop compressor may not move enough air to push water out of a long zone, and techs end up blowing each zone over and over. Most companies use a tow-behind or truck-mounted compressor sized for the systems they service. Bigger systems and commercial properties may need more air.\n\nThe basic procedure: shut off the water at the main, put the controller in off or rain mode, connect the compressor at the blowout port below the zone valves, and run each zone with air until it sprays only mist. Keep the pressure modest and within what the pipe and fittings can handle, and do not leave air running dry on a zone, since friction heats and damages gear-driven heads. Do not push air through the backflow device. Isolate it and open its test cocks partly so it can drain. Most techs run through all zones twice. Write the steps down so every tech does it the same way."
      },
      {
        "h2": "Build dense clusters, then route them",
        "content": "Blowout days need to be tight. Fifteen systems a day only works if drive time is short. Group your winterization list by neighborhood and do each neighborhood in one pass. Last fall's blowout customers can be a once-a-year recurring service, so they show up on the Waiting List as due when the season opens.\n\nFrom the Waiting List, circle an area on the map, put the due systems on a truck, and auto-routing orders them by distance. Then check the order. Commercial properties that need a manager present, or homes where the controller is inside and the customer is only home after 4 p.m., need to be placed by hand. Route the predictable systems around them. The [route optimization](/features/service-route-optimization-software) page shows the ordering."
      },
      {
        "h2": "Controller and shutoff access",
        "content": "The biggest time waster in fall is a controller the tech cannot reach. If the controller is in a locked garage and nobody is home, the tech can still blow out the system by turning zones on at the valves or using a remote, if your crew uses one, but it takes longer, and the controller may run its schedule against a dry system all winter. Know in advance where every controller is and how to get to it.\n\nProperty notes should say where the main shutoff is, what kind of valve it is, where the blowout port is, and where the controller is. The night-before text lets customers know to leave the garage open or the code available. If a property has a main shutoff in the basement and the customer must be home, mark it as such, and schedule those at the start or end of the day so they do not break up a route."
      },
      {
        "h2": "Marking it done, and telling the customer",
        "content": "When a blowout is complete, the tech marks it done in the crew app with a note and a photo of the controller in off mode or the backflow left open to drain. The customer gets a completed alert, so they know the system is safe for winter and do not turn it back on during a warm week in November.\n\nNotes matter for spring. \"Zone 6 slow to clear, possible low spot,\" \"backflow test cock handle cracked,\" or \"head broken by driveway\" are repairs waiting to be sold. Those notes live on the property, so the startup tech in April sees them before turning on the water. Billing can run automatically when the job is marked done, with a card on file charged at completion, so winterization invoices do not sit open all winter."
      },
      {
        "h2": "Commercial and HOA systems",
        "content": "Commercial properties, HOA common areas and large estates often have many more zones, multiple controllers, bigger main lines and sometimes a pump. They take longer and may need more air volume than a residential system. Many also have rules about when you can work, or a property manager who needs to be contacted first.\n\nSchedule these as their own blocks of time rather than squeezing them into a residential route. Give them planned hours that match their size, so the day is realistic. Record every controller location, the number of zones on each, and the blowout connection point in the property notes, because a large site with three controllers is easy to get wrong. Bill commercial accounts the way they prefer to pay, often monthly through period billing. A single HOA can be worth dozens of homes, and residents who see your truck on the common areas often ask about their own systems."
      },
      {
        "h2": "When you are behind and the cold is coming",
        "content": "Some years the freeze arrives early. When the forecast shows a hard freeze within days and you still have systems on the list, triage. Systems with exposed above-ground backflow devices and pipe are most at risk. Systems with the backflow in an insulated box or a basement shutoff are less urgent.\n\nSend customers who are waiting a clear message: their blowout is scheduled, a freeze is coming, and here is how to shut off the water and open the drain at the backflow in the meantime if they want to protect it themselves. Then reschedule the rest of the list in order. Rescheduling a day sends customers a reschedule text, so they know where they stand. Being honest about a delay keeps customers. Silence and a cracked backflow loses them. [Handling weather on irrigation days](/blog/irrigation/automated-weather-rescheduling-irrigation-scheduling-software) has more."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "estimating-and-quoting-irrigation-software",
    "title": "Pricing Sprinkler Repairs: Trip Charges, Parts and Labor",
    "description": "How to price sprinkler repairs: service call charges, flat rates for common fixes, parts markup, diagnosis time, on-site estimates, and following up on quotes.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Sprinkler repair pricing is where many lawn companies leave money behind. They charge for a head and fifteen minutes, then realize the tech spent forty minutes finding the problem, drove twenty minutes each way, and used two fittings and a coupling that never made it onto the invoice. Repairs are rarely big jobs, so small leaks in pricing add up fast. A repair price structure that covers the trip, the diagnosis, the parts and the labor, and that techs can apply the same way every time, is the fix. Here is how to build one.",
    "sections": [
      {
        "h2": "Charge for the trip",
        "content": "Every repair visit has a fixed cost before any work starts: the drive, setup, finding the controller and running the zones to see the problem. A service call charge, sometimes called a trip charge, covers that. Many companies include the first chunk of labor in it, such as the first 15 or 30 minutes, then bill time after that.\n\nMake the charge clear up front. Customers accept a service call charge when they know about it before you arrive. They do not accept a surprise line on the invoice. Put it on your website, mention it when booking, and put it on the estimate. If a customer already has a startup or winterization scheduled, offering to do small repairs during that visit without a second trip charge is a fair deal and a good way to sell the repair."
      },
      {
        "h2": "Flat rates for common repairs",
        "content": "A handful of repairs make up most of the work: replace a spray head, replace a rotor, replace a nozzle, fix a broken lateral line, replace a valve solenoid or diaphragm, replace a valve, find and fix a wire break, replace a controller. Flat rates for the common ones make quoting fast and consistent.\n\nSet a flat rate by adding parts at your selling price and a realistic labor time. An illustrative example: if a standard rotor costs you $12, you sell it at $24, and replacing one takes about 15 minutes, a flat rate of $45 to $55 per rotor (after the service call) is a reasonable starting point. Your area and costs will move those numbers. Put each flat-rate repair in the service catalog so the office and techs use the same price."
      },
      {
        "h2": "Time and materials for the hard ones",
        "content": "Some problems are unpredictable. A zone that will not come on could be a bad solenoid (ten minutes) or a wire break somewhere under the lawn (two hours with a locator). Main line leaks under a driveway, valve manifolds buried under years of mulch, and systems with no map can turn into long jobs. For those, bill time and materials with a stated hourly rate.\n\nBe clear with the customer: \"diagnosis is billed hourly, and once we find the problem we will send you a price for the fix.\" That protects you from guessing low and the customer from a surprise. Track diagnosis time, too. If you find that wire tracing jobs average two hours, you can quote a more confident range next time."
      },
      {
        "h2": "Parts markup",
        "content": "Parts are part of the business, not a pass-through. You bought them, carried them on the truck, and stand behind them. A markup on parts is normal. Many companies mark parts up by a set percentage or price them at a list price above their cost, which covers shipping, the parts that break or get lost, and the trips to the supply house.\n\nKeep your parts and their costs in the materials list, and record which parts were used on each job. That way the invoice shows the parts, and job costing knows the real material cost. The small items, like fittings, couplings, glue and wire connectors, are the ones techs forget to add. A per-repair \"fittings and supplies\" line, or flat rates that already include them, stops that leak. See [tracking parts on each job](/blog/irrigation/parts-inventory-tracking-irrigation-software)."
      },
      {
        "h2": "Estimate it while you are standing there",
        "content": "The best time to sell a repair is when the customer is looking at the broken head with you, or when they just got a photo of it. Techs can write, price and send an estimate from the crew app while still at the property, if the owner has turned it on for that employee. It uses the same service catalog prices as the office, and it works without cell signal, sending once the phone reconnects.\n\nThe customer gets the estimate by text or email and approves it online. An approved estimate converts into scheduled work, so the repair shows up on the board instead of on a sticky note. For small repairs, many companies give techs a limit, such as anything under a certain amount can be done on the spot with the customer's verbal okay, and anything bigger goes out as an estimate. The [estimates and quoting](/features/field-service-estimates-quoting) page shows the flow."
      },
      {
        "h2": "Warranties and callbacks",
        "content": "Decide what you guarantee before a customer asks. Many companies warranty their labor for a set period and pass along the manufacturer's warranty on parts. Whatever you choose, put it on the estimate in one sentence so the customer knows what happens if the same head fails again next month.\n\nTrack callbacks. A callback is a return visit to fix something that should have been fixed the first time, and it costs you a full trip with no revenue. Record callbacks as their own no-charge jobs so they show up in job costing instead of disappearing. If one type of repair keeps coming back, such as a certain valve brand or a quick fix on a wire splice, change the parts or the method. A low callback rate is one of the best signs that your repair pricing and your techs are both doing their job."
      },
      {
        "h2": "Follow up on unanswered quotes",
        "content": "Many repair estimates sit unanswered. The customer meant to approve it, then forgot until the brown spot showed up again. Automatic follow-ups solve most of this. If an estimate is not answered, the software sends up to three reminders on its own, so the office does not have to keep a list of who has not replied.\n\nWhen an estimate stays unanswered after the follow-ups, a short note from the tech the next time they are on the property, like \"zone 3 still has that broken head,\" often closes it. Keep a report of open estimates during the season. A pile of unapproved repairs in June is real revenue sitting on the table, and some of it becomes urgent when the weather turns hot and dry."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "parts-inventory-tracking-irrigation-software",
    "title": "Parts on the Truck: Tracking Heads, Nozzles and Valves on Every Job",
    "description": "How to stock a sprinkler service truck, record parts used on each job, keep part costs current, restock from job records, and bill every fitting you install.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "An irrigation tech without the right part has two bad choices: drive to the supply house, or leave and come back. Either way the job costs twice as much as it should. The opposite problem is just as common. Parts go in the ground and never make it onto the invoice, and at the end of the season the parts bill is much bigger than the parts revenue. Good parts handling is mostly habit. Stock the truck with what you actually use, record what goes into each job, and restock from that record. Here is how to set it up.",
    "sections": [
      {
        "h2": "What lives on a service truck",
        "content": "Most repair work uses the same small set of parts. Spray heads in the common heights, a few rotor models, nozzles in common patterns and arcs, risers and swing pipe, fittings in the pipe sizes you see most, couplings and repair slip fittings, PVC primer and glue, a selection of valves and solenoids for the brands in your area, waterproof wire connectors, and a couple of the controllers you install most often.\n\nBuild the truck list from what you actually see in your market, not from a catalog. If most of the systems you service use one or two brands, stock those. A truck full of rarely used parts ties up cash and space. A truck missing the most common rotor sends a tech to the supply house every afternoon."
      },
      {
        "h2": "Match parts to the property",
        "content": "The fastest way to get the right part to the job is to know what is in the ground before you go. When a tech services a system, record the head brands and models, the valve brand, the controller model and anything unusual in the property notes. Next time someone calls about a broken head, the office can see it is a particular rotor and make sure the truck has one.\n\nThis also helps with consistency. Replacing a broken head with a different brand or a different precipitation rate can leave one zone watering unevenly. Matching what is there, or deliberately upgrading the whole zone, gives a better result. Notes on the property make that decision easy for whichever tech is on the job."
      },
      {
        "h2": "Record parts used on each job",
        "content": "Parts get forgotten when they are recorded at the end of the day, or not at all. Make it part of closing out the job. Before the tech marks the repair done, they add the parts used, from heads and valves down to the fittings, so the invoice and the job record match what went in the ground.\n\nThe materials list holds each part with its cost, so recording a part is a pick from a list, not typing a price. Recorded materials feed job costing, which shows what each repair really cost in parts and labor. If a tech regularly uses more parts than similar jobs, that is either harder systems or a habit worth a conversation. The [job costing post](/blog/irrigation/job-costing-irrigation-software) shows how this comes together."
      },
      {
        "h2": "Keep part costs current",
        "content": "Supply house prices change, sometimes more than once a season. If your materials list shows last year's cost, your job costing is wrong and your flat rates may be too low. Update costs when you get a new price sheet, or at least before each season.\n\nWhen costs go up, look at the flat rates that depend on them. If a rotor that cost $12 now costs $15, the flat rate built on the old price is losing you money every time. Adjust prices in the service catalog, and the next estimate from the office or the crew app uses the new number. These figures are illustrative. The point is to look at your own prices on a schedule, not only when the parts bill surprises you."
      },
      {
        "h2": "Restock from what was used",
        "content": "The software keeps a list of materials and records what was used on each job. It does not count what is on your shelves or in each truck, so restocking is still a person's job. The job records make it easier. Pull the materials used on a truck's jobs for the week and you have the restock list: what went out, so what needs to go back in.\n\nMany shops set a fixed minimum for each truck, such as \"always six spray heads, four rotors, two valves,\" and restock to that list every Friday. The week's job records tell you whether the minimums are right. If a truck runs out of rotors every Wednesday, raise the number. If a part never leaves the bin, take it off the truck. A quick physical count against the minimum list once a week keeps trucks stocked without a big inventory system."
      },
      {
        "h2": "Controllers and bigger parts",
        "content": "Controllers, valves and backflow parts are the expensive items, and you do not need to carry every model. Keep one or two controllers you install often, in a common station count, and order the rest when a job calls for it. When a customer needs a specific controller, write the estimate with that model and price, get approval, then order it.\n\nRecord the controller model and the number of stations in the property notes when you install it. That tells the next tech how to program it and tells the office what to order if it fails. It also helps when a customer wants to add a zone, since you will know whether the controller has an open station. Big parts deserve a quick note on the job with the model number, so if the customer calls under warranty, you know exactly what was installed and when."
      },
      {
        "h2": "Bill every part you install",
        "content": "The final step is the invoice. If parts are recorded on the job, they go on the invoice. Small items add up. A repair that uses two couplings, a tee, a length of pipe and some glue might have several dollars in parts that never get billed if the tech only records the head. Across hundreds of repairs, that is real money.\n\nDecide how you want small supplies to appear. Some companies list every fitting. Others bundle small parts into the flat rate or use a single supplies line. Either is fine, as long as the cost is covered. With a card on file, the invoice can be charged automatically when the job is marked done, so the parts are paid for before the truck leaves the street. The [invoicing](/features/field-service-invoicing-software) page shows the invoice side."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "job-costing-irrigation-software",
    "title": "Which Irrigation Jobs Actually Make Money",
    "description": "Compare the real profit of startups, blowouts, repairs and installs using labor from clock times, parts used, planned versus actual hours, and margin per job.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Irrigation work comes in very different shapes. A startup is a short visit at a set price. A blowout is the same, with a compressor attached. A repair is a gamble on how long the diagnosis takes. An install or a zone addition is a project with materials, trenching and labor spread over days. Lumping all of it together as \"irrigation revenue\" hides which kinds of work are paying the bills and which are quietly costing you. Job costing pulls them apart. Here is how to figure the real profit on each type of irrigation job.",
    "sections": [
      {
        "h2": "Four kinds of work, four profiles",
        "content": "Startups and winterizations are high volume and short, priced as flat fees, often by zone count. Their profit depends almost entirely on speed and drive time. If your techs average 40 minutes per startup and you priced for 30, you lose margin on hundreds of visits.\n\nRepairs carry more uncertainty. A head replacement is quick money. A wire break can eat two hours. Installs and zone additions carry the most material cost and the most risk of going over on labor, especially when you hit rock, roots or an old main line nobody mapped. Each type deserves its own look, because the answer to \"is irrigation profitable\" is usually \"some of it is very profitable, and some of it is barely breaking even.\""
      },
      {
        "h2": "Labor from real clock times",
        "content": "The biggest cost in irrigation is labor, and the hardest one to guess. When techs clock in and out in the crew app and mark each job done, the software calculates labor from those times multiplied by each worker's pay rate. The pay rates stay in the office. The crew sees their jobs, not each other's wages.\n\nThis replaces \"a startup takes about half an hour\" with what it actually took, job by job. Sort the season's startups by actual time and you will usually find a pattern: big systems priced like small ones, properties where the controller is always hard to reach, or one neighborhood with old systems that need something every visit."
      },
      {
        "h2": "Parts and materials",
        "content": "Every part recorded on a job, from rotors and valves down to fittings, carries its cost from the materials list. Job costing adds those costs to the job, so you see labor plus materials against what you charged.\n\nThis matters most on installs and repairs. A zone addition might use pipe, fittings, a valve, wire, heads and a controller module. If the estimate missed a few items or the job needed more pipe than planned, the job cost shows it. On repairs, it shows whether your flat rates cover the parts, especially when the supply house raises prices mid season. [Tracking parts on each job](/blog/irrigation/parts-inventory-tracking-irrigation-software) covers recording them."
      },
      {
        "h2": "Planned hours against actual hours",
        "content": "When you price a job, set the planned hours. A standard startup might be planned at 0.5 hours, a 16-zone startup at 1.25, a zone addition at 6. The job costing report then shows planned hours against actual, along with labor cost, material cost, profit and margin for each job.\n\nAn illustrative example: you charge $85 for a startup planned at 0.5 hours. Your tech earns $24 an hour, about $30 with payroll costs. If the job takes 0.5 hours, labor is $15 and you have $70 left before truck and overhead. If it takes 1.25 hours because of a few broken heads you did not bill, labor is $37.50 and the margin shrinks a lot. Multiply that by a few hundred startups and it is the difference between a good spring and a mediocre one."
      },
      {
        "h2": "Drive time and travel",
        "content": "Drive time does not show up as a line on an invoice, but it is paid labor. Startups and blowouts in particular live or die by density. Ten systems in one neighborhood with three minutes between them is a profitable day. Ten systems spread across a county with twenty minutes between them may not be.\n\nClock times include the drive between jobs, so a scattered route shows up as a lower margin per job. When a single property is far from everything else, either price it to cover the drive, schedule it on a day you are already in that area, or decide it is not a fit. [Routing fall blowouts](/blog/irrigation/dispatch-and-routing-irrigation-software) talks about building dense days."
      },
      {
        "h2": "Pricing startups and blowouts by zone",
        "content": "The most common pricing fix that job costing turns up is a flat startup or winterization fee that ignores system size. When all startups cost the same, small systems are very profitable and large ones may lose money. Customers with large systems also tend to be the ones with drip, pumps and multiple controllers.\n\nA zone-based price fixes most of it. An illustrative version: a base price that covers up to eight zones, plus a few dollars per zone above that, and a separate charge for each drip zone or pump. Build those prices from the actual minutes per zone your clock times show. Then check again after the next rush. If large systems are now in line with small ones on margin, the pricing is right. If they are still behind, the per-zone amount is too low, or something else on those properties (access, controller location, old equipment) needs its own line."
      },
      {
        "h2": "Acting on what you find",
        "content": "Once you have a season of job costs, sort them. Look at margin by job type first, then by individual property. Most owners find that flat-rate startups on small systems are very profitable, startups on large systems are underpriced, and certain repairs, especially wire tracing and leak hunts, need hourly billing instead of a flat rate.\n\nThe fixes are usually simple. Price startups and winterizations by zone count instead of one flat fee. Add a diagnosis charge to the repairs that run long. Put a minimum on small jobs. Raise prices on properties that always take extra time, with an honest note to the customer. And put the outlying properties on the same day as other work in that direction. None of this needs to be perfect. It just needs to be based on real hours, not guesses. The [reporting](/features/field-service-reporting-analytics) page lists the reports."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "recurring-service-maintenance-agreements-irrigation-software",
    "title": "Building an Irrigation Maintenance Plan Customers Renew Every Year",
    "description": "How to build a sprinkler maintenance plan: what to include (startup, midseason check, winterization), how to price and bill it, repair perks, and renewals.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Most sprinkler customers only think about their system twice a year: when they want it on and when they want it off. A maintenance plan turns those two moments into a single yearly commitment, and adds a midseason check so problems are caught before the lawn shows them. For you, a plan means a known list of startups and winterizations every year, steadier cash flow, and a steady flow of repair work found during visits. For the customer, it means one decision instead of three phone calls. Here is how to design a plan people sign up for and keep.",
    "sections": [
      {
        "h2": "What goes in the plan",
        "content": "The core of most plans is three visits: a spring startup, a midseason check, and a fall winterization. The startup and winterization are the visits the customer already needs. The midseason check is what makes it a maintenance plan instead of two separate services.\n\nSome companies add a second midseason check in hot climates, a controller program update as the seasons change, or a discount on repair labor for plan members. Keep the plan easy to explain. \"Spring startup, July check, fall winterization, 10 percent off repair labor\" is a sentence the customer can repeat to their spouse. A plan that needs a page of fine print will not sell at the door."
      },
      {
        "h2": "What the midseason check actually covers",
        "content": "The midseason visit earns its keep only if it finds things. A good check runs every zone, looks at coverage, straightens tilted heads, cleans clogged nozzles, adjusts arcs that are watering the sidewalk, checks for leaks at valves and visible pipe, and looks at the controller program for the summer. Many techs also check for dry spots and soggy areas while walking the lawn.\n\nWrite a short checklist and have techs note what they found and what they adjusted. Add photos of anything broken. The customer gets the completed alert with those notes and photos, which shows the value of a visit they might otherwise not notice. Problems that need repair go out as an estimate, often written right there from the crew app. That is how a plan pays for itself in repair work."
      },
      {
        "h2": "Pricing the plan",
        "content": "Start with what each visit would cost on its own, then decide whether to discount the bundle. An illustrative example: if your startup is $85, a midseason check would be $75, and a winterization is $85, the three visits are $245 separately. A plan at $225 gives the customer a reason to commit, and you a full year of visits.\n\nPrice by system size. A plan for a 6-zone residential system should cost less than one for a 20-zone system with drip and a pump. Two or three tiers by zone count keep it simple. Put each tier in the service catalog so the office and the crew app quote the same price."
      },
      {
        "h2": "Billing the plan",
        "content": "A maintenance plan can be set up as a package plan with its visits included, and billed in a few ways. Billing per visit charges the customer after each of the three visits. Monthly billing spreads the plan over a set number of months. Prepaid billing collects the whole year up front, often with a small discount.\n\nEach choice has tradeoffs. Per-visit billing is easy to explain but gives the customer three moments to decide not to pay. Prepaid brings money in early and locks in the year, but you need to track what was used if a customer sells their house in July. Prepayments in the software work as a ledger, so each completed visit draws down the balance and you can see what is left. With a card on file, auto-charge on completion takes care of per-visit billing. The [service contracts](/features/service-contract-management-software) page shows packages and prepayments."
      },
      {
        "h2": "Perks that bring in repair work",
        "content": "The perk that matters most is not a discount. It is priority. Plan customers get their startup first in spring and their winterization first in fall. During the spring rush, being first on the list is worth more to many customers than a few dollars off.\n\nA repair labor discount for plan members also works well. It costs you little, because plan members tend to approve more repairs, and repairs found on plan visits are the easiest to sell. The customer already trusts the tech, the tech is already there, and the estimate arrives with a photo of the problem. Track repair revenue from plan customers against non-plan customers for a season. It is a useful number when deciding how hard to push the plan."
      },
      {
        "h2": "Selling the plan at the right moment",
        "content": "The easiest time to sell a maintenance plan is right after a visit that went well, or right after one that found a problem. A customer whose startup found two broken heads and a leaking valve has just seen why a midseason check is worth paying for. A customer whose winterization was done early, before the freeze, has just experienced the priority that plan members get.\n\nMake the offer part of the visit. The completed alert goes out with the tech's notes and photos, which is the proof. The upsell alert is a way to put the plan offer in front of customers after a visit. Techs can also mention it in person and, if you allow it, send a plan estimate from the crew app on the spot. Keep the pitch short: what the plan includes, the price for their system size, and the priority perk. Most plan sales come from customers who already like your work."
      },
      {
        "h2": "Renewals and cancellations",
        "content": "Renewals are where plans pay off. Set the plan to carry into next year, so in spring each plan customer appears on the Waiting List for their startup without anyone rebuilding the list. Send a short note in late winter about the coming season, any price change and the start date. Customers who had a good year rarely cancel.\n\nWhen someone does cancel, record the reason. \"Sold the house\" is not a problem you can fix, but you can ask whether the new owner wants service. \"Too expensive\" or \"didn't see the value\" tells you something about how the midseason visit is being done or communicated. Over a few seasons, cancellation reasons are the most honest feedback you will get. For how plans fit the yearly calendar, see [planning the irrigation year](/blog/irrigation/seasonal-demand-planning-irrigation-software)."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "managing-multiple-crews-routes-irrigation-software",
    "title": "Splitting Irrigation Work Between Service Techs and Repair Crews",
    "description": "How to split irrigation work across trucks: service techs on startups and blowouts, repair techs on harder jobs, assigning by area, and sharing system notes.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "When irrigation is a one-truck operation, the owner does everything: startups, repairs, the odd zone addition, and winterizations. Add a second or third truck and the question becomes who does what. Sending everyone everywhere wastes drive time and skill. Your best troubleshooter ends up doing simple startups while a newer tech gets stuck on a wire break they cannot find. Splitting the work by type and by area, and keeping every system's notes in one place, lets a small irrigation team cover far more ground. Here is how to organize it.",
    "sections": [
      {
        "h2": "Service work and repair work are different jobs",
        "content": "Startups, midseason checks and winterizations are routine, high volume visits. They need a reliable tech who follows a checklist, works quickly and spots problems. Repairs, especially diagnosis, wire tracing, valve replacements and leak hunting, need someone with more experience and patience. Installs and zone additions need a small crew with digging equipment.\n\nMany companies split along these lines in busy seasons. One or two service techs run startups or blowouts all day in dense routes. A repair tech follows behind, handling the problems the service techs found and the repair calls that come in. That way the routine work stays fast and the hard work goes to the person most likely to finish it in one trip."
      },
      {
        "h2": "Assign by area within each type",
        "content": "Within each type of work, split by area. Service tech one covers the north and west neighborhoods, service tech two covers the south and east. Each one learns the systems in their area, where the controllers are, which backflow is hidden behind which shrub. Speed comes from familiarity.\n\nIn the software, assign work to trucks from the Waiting List by circling an area on the map and putting those properties on a truck for the day. Auto-routing orders the stops. Repair work comes off the Pending Jobs board, where approved estimates and repair calls wait for a date. The repair tech's route usually covers more ground and has fewer stops, so plan it by area for the day rather than by job. The [pending job board](/features/pending-job-board-software) page shows how jobs wait to be scheduled."
      },
      {
        "h2": "One set of notes for every system",
        "content": "When more than one person works on a system, the notes have to be shared. The service tech who did the startup knows zone 4 has a broken head. The repair tech needs to know that, and also where the valve box is. The winterization tech needs to know where the blowout port is and that the controller is in the garage.\n\nKeep all of it on the property: controller model and location, zone count, backflow type and location, main shutoff, valve locations, head types, and notes on each repair. Crew notes back to the office, written in the crew app at the property, add to that history. Any tech who opens the stop on their phone sees the same information. This is what lets you send a different tech to a property without a phone call to the person who was there last."
      },
      {
        "h2": "Handing problems from service to repair",
        "content": "The handoff from service tech to repair tech is where work gets lost. A note on a paper ticket that says \"valve leaking\" might never reach the office. A text message to the owner might be read and forgotten.\n\nMake the handoff part of the job. When a service tech finds a problem, they either fix it on the spot within their limit, or they write an estimate from the crew app (if you have turned that on for them) with a photo, and send it to the customer. Once approved, the repair becomes scheduled work for the repair tech. If you prefer the office to write estimates, have the service tech leave a crew note with the problem and photo, and make it the office's job to quote it that day. Either way, nothing depends on someone remembering. [Pricing sprinkler repairs](/blog/irrigation/estimating-and-quoting-irrigation-software) covers the estimate side."
      },
      {
        "h2": "Seeing where everyone is",
        "content": "With several trucks spread across town, the office needs to know who is where without calling. GPS from the crew phones shows each truck's location during the day, and jobs marked done show how far along each route is. When a customer calls about a zone stuck on and flooding their yard, the office can see which tech is closest and move them.\n\nCustomer alerts handle much of the communication. The \"you're next\" text and the tech-arrived text go out from whichever tech is doing the job, so customers know someone is coming even if it is not the tech they usually see. The completed alert, with notes and photos, closes the loop."
      },
      {
        "h2": "Training a new irrigation tech",
        "content": "New irrigation techs learn fastest on routine work. Start them on startups and midseason checks with a written checklist, alongside an experienced tech for the first week. They learn to find the controller, read a valve box, recognize common heads and nozzles, and spot the problems worth reporting.\n\nTeach the handoff early. A new tech does not need to fix everything they find. They need to record it clearly, with a photo and a note on which zone and which head, so a repair tech or the office can price it. Give them a short list of repairs they are allowed to do on the spot, and expand the list as they get better. Keep the property notes good, because a new tech depends on them more than anyone. A route with complete notes on every system can be handed to someone in their first season, which is what makes it possible to add a truck when the rush comes."
      },
      {
        "h2": "Hours and costs by truck",
        "content": "Look at each truck separately. The employee hours report shows each tech's clock-in and clock-out times for whoever runs payroll (the software tracks hours but does not run payroll). Job costing shows each job's labor, parts, planned versus actual hours and margin, which you can look at by tech or by type of work.\n\nThe patterns are usually useful. Service techs should show tight times and good margins on routine visits. If one is running well over planned hours, it may be scattered routes or a training gap. Repair techs will show more variation, but long-running repairs should be few, and the ones that keep running long tell you which repair types need hourly pricing. See [which irrigation jobs make money](/blog/irrigation/job-costing-irrigation-software)."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "seasonal-demand-planning-irrigation-software",
    "title": "Planning an Irrigation Year Around Two Rushes and a Long Middle",
    "description": "Plan the irrigation year: forecast startups and blowouts from last season, set capacity, sell maintenance plans in winter, and fill the summer with repairs.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "An irrigation business has a strange shape. A few weeks in spring when everyone wants their system turned on, a long stretch of summer repairs and checks, and a few weeks in fall racing the freeze to blow systems out. Then, in cold climates, almost nothing for months. Companies that plan for this shape finish both rushes on time and keep crews busy through the middle. Companies that react to it end up turning work away in April and October and wondering where everyone went in July. Here is how to plan the year.",
    "sections": [
      {
        "h2": "Your rush list is mostly known",
        "content": "The good news about irrigation demand is that most of it is predictable. Nearly every system you winterized last fall needs a startup this spring. Nearly every system you started up needs a winterization this fall. Your existing customers are a forecast.\n\nSet startups and winterizations as once-a-year services on each property, so last year's customers come back onto the Waiting List when each season opens. Count them. Add an estimate for new customers based on last year's growth, and you know roughly how many visits each rush holds before the first call comes in. That number drives everything else: how many trucks, how many weeks, and when to start."
      },
      {
        "h2": "Capacity for each rush",
        "content": "Turn the list into a schedule. An illustrative example: 450 startups expected, one tech doing 10 a day, a second tech doing 8. That is 18 a day, or 25 working days. If your safe start date gives you only three weeks before lawns really need water, you are short. Start a few days earlier with the systems least likely to be hurt by a late freeze, add a third person for the first two weeks, or run some Saturdays.\n\nDo the same math for fall, with less slack, because the freeze will not wait. Compressor capacity is often the limit in fall more than people. If you have one rig, renting or buying a second may be cheaper than losing customers to a late winterization. See [routing fall blowouts](/blog/irrigation/dispatch-and-routing-irrigation-software)."
      },
      {
        "h2": "Use winter to sell plans and renewals",
        "content": "The quiet months are when you sell next year. Late winter is the time to send a message to every irrigation customer about the coming season, the startup start date, and the maintenance plan. Customers who sign up for a plan in February are on your spring list before your competitors start advertising.\n\nIt is also the time to sell irrigation to your lawn customers who do not use you for it yet. Tag the properties with sprinkler systems in your client list, and send them the same message. A lawn customer who already trusts your crew is an easy yes. Approved estimates convert into scheduled work, so a plan sold in February is already on the list in April. The [maintenance plan post](/blog/irrigation/recurring-service-maintenance-agreements-irrigation-software) covers what to sell."
      },
      {
        "h2": "Filling the long middle",
        "content": "Between the rushes, irrigation work depends on repairs, midseason checks and projects. Repairs found during startups are the first source. Every startup that found a broken head or a leaking valve should end with an estimate, and those estimates become your May and June work.\n\nMidseason checks for plan customers give you a steady list through the summer. Schedule them by area in the same weeks as your lawn routes in those neighborhoods if you also mow there. Installs, zone additions and drip conversions fill in the rest. Dry spells bring a spike in repair calls as customers notice brown spots, so keep some capacity open in the hottest weeks rather than booking every day solid with projects."
      },
      {
        "h2": "Staffing across the year",
        "content": "The labor need swings hard. You may want three or four techs in April and October and one or two in July. In cold climates, you may need almost nobody for irrigation in January. Lawn companies have an advantage here: a tech who does irrigation in the rushes can mow or run applications in summer, and plow or do other winter work if you offer it.\n\nCross-training is the simplest version. Teach two of your lawn techs to do startups and winterizations. They do not need to be expert troubleshooters, just reliable on the checklist and good at spotting problems. Keep one experienced repair tech on irrigation all season. That combination covers the rushes without carrying a big irrigation crew all year."
      },
      {
        "h2": "Telling customers when you are coming",
        "content": "In both rushes, uncertainty drives the phone calls. A customer who does not know when their startup is will call, email and sometimes book someone else. A customer who knows they are scheduled for the week of April 14 usually waits.\n\nSend a message to your whole irrigation list before each rush with the start date and how scheduling works: you go neighborhood by neighborhood, and they will get a text the night before. When their day is set, the night-before text confirms it and gives them a chance to unlock a gate or open the garage. The \"you're next\" text tells them the tech is on the way. If weather or a backlog pushes them back, the reschedule text tells them the new date. Each of those messages replaces a phone call to your office, and during a rush, every phone call you do not have to answer is time spent scheduling more work."
      },
      {
        "h2": "Review the season before the next one",
        "content": "At the end of each rush, look back. How many days did it take, and how did that compare with your plan? How many customers waited past the date you told them? How many startups turned into repairs, and how many of those estimates were approved? What was the margin on startups by system size?\n\nThose few numbers tell you what to change. If startups ran long on big systems, price by zone count. If too many customers waited, start earlier or add capacity. If repair estimates went unanswered, look at how quickly they were sent. The software has the answers in the job records and reports. The work is setting aside an afternoon after each rush to read them. The [irrigation software](/irrigation-software) page shows how the year fits together."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  },
  {
    "slug": "automated-weather-rescheduling-irrigation-scheduling-software",
    "title": "Rain, Freeze Warnings and Reschedules: Handling Weather on Irrigation Days",
    "description": "How weather affects sprinkler work: spring freeze risk, the fall freeze deadline, lightning and rain, rescheduling a day with customer texts, and what to say.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Weather affects irrigation work differently from mowing or spraying. Rain does not stop most sprinkler work, and techs get wet all the time. Cold does. A system started too early can be damaged by a late freeze, and a system not blown out in time can crack when the first hard freeze hits. Lightning stops everything. The skill is knowing which weather actually matters, deciding early, and telling customers clearly. No software watches the forecast and moves your jobs for you, and you would not want it to. Here is how to make the call and handle the reschedule.",
    "sections": [
      {
        "h2": "Which weather actually matters",
        "content": "Light rain does not stop startups, checks or most repairs. You can still run zones, replace heads and fix valves in the rain, though it is harder to see coverage problems when the lawn is already wet. Heavy rain makes digging messy and can flood valve boxes, which slows repairs but rarely stops them.\n\nThe weather that matters most is cold and lightning. Freezing temperatures threaten pressurized systems, especially exposed backflow devices and above-ground pipe. Lightning is a safety issue for anyone standing in a wet yard. High heat is mostly a crew safety issue: plan water and breaks on the hottest days. Make your weather calls based on these, and do not cancel a day for a light shower that your techs can work through."
      },
      {
        "h2": "Freeze risk in spring",
        "content": "The worst spring mistake is starting up a system the week before a hard freeze. The backflow device and any exposed pipe hold water, and a freeze can crack them. That is a repair you caused.\n\nWatch the extended forecast in the days before your startup season and during the first weeks of it. If a hard freeze is likely after you start, hold off on startups or prioritize systems where the backflow is protected. If you have already started systems and a freeze is coming, tell those customers what to do: many companies advise shutting off the main and opening the backflow test cocks or drain until the cold passes, or offer to come back and do it. The exact advice depends on the system, so give the instructions your techs actually follow, not a generic one."
      },
      {
        "h2": "The fall freeze deadline",
        "content": "In fall, the forecast tells you how much time you have left. When a hard freeze shows up in the extended forecast and you still have systems to blow out, change the order. Exposed, above-ground backflow devices and systems with pipe in unheated spaces go first. Systems with the backflow in an insulated enclosure or a basement shutoff can wait a little longer.\n\nTell waiting customers the truth: their blowout is scheduled, a freeze is coming, and here is how to protect the system in the meantime if they want to. Most customers appreciate a clear message more than they resent a delay. [Routing fall blowouts](/blog/irrigation/dispatch-and-routing-irrigation-software) covers the route side of the freeze race."
      },
      {
        "h2": "Lightning, storms and a day that falls apart",
        "content": "When storms build in the afternoon, send crews to a truck or building at the first thunder and wait it out. Most storms pass in an hour. If storms are forecast all day, cancel the day early so customers are not waiting.\n\nWhen you do cancel, move the whole day rather than spreading the stops across the week. In the software, rescheduling a day moves those jobs and sends customers a reschedule text automatically, so nobody waits at home for a tech who is not coming. The office makes the decision. The software does the moving and the messaging. Send the reschedule the night before when you can, because a text at 7 a.m. reaches customers who have already left the garage open for you."
      },
      {
        "h2": "Rescheduling without losing the plan",
        "content": "After a lost day, the rest of the schedule has to absorb it. In the rush seasons, that matters. One lost day of startups is ten or fifteen customers pushed back. Decide how to catch up: work the next Saturday, add a few stops to each of the next several days, or push everything back a day and tell customers.\n\nAvoid scattering rescheduled jobs into random gaps. That breaks your neighborhood routes and costs more drive time than the original delay. Moving a whole day to the next open day keeps the route intact. Jobs that cannot move with the day, such as a customer who can only be home Tuesday, go back on the Waiting List or the Pending Jobs board and get placed by hand. The [scheduling](/features/field-service-scheduling-software) page shows how days and trucks are laid out."
      },
      {
        "h2": "Rain, controllers and summer calls",
        "content": "Summer weather creates its own calls. After a week of heavy rain, customers notice their sprinklers running in a downpour and wonder why. After a dry spell, they notice brown spots and assume a zone has failed. Both are chances to help and to sell.\n\nA rain sensor or a weather-adjusting controller can keep a system from running in the rain. Many controllers support one, and many customers do not have one. Offering to add it during a startup or midseason check is a simple upgrade that saves water. For brown spots in dry weather, the first step is to check whether the zone is running at all, then check coverage and run times. Often the answer is a controller program set for spring that was never adjusted for summer heat. Note what you found and what you changed on the property, so the next tech knows the program history."
      },
      {
        "h2": "What to tell customers about weather",
        "content": "Set expectations before the season starts. Tell customers in your spring message that startups depend on freeze risk and may shift, and that you will text them if their date changes. Tell them in fall that winterizations run until the freeze and that early sign-ups get scheduled first. A customer who knows how you handle weather is far more patient when it happens.\n\nKeep your weather messages short and specific: what changed, the new date, and anything they should do. Do not overpromise a date you cannot keep during a stormy week. For plan customers, being early in the queue is part of what they paid for, so honor it when you reshuffle after a weather delay. Good weather communication is a big reason customers stay with one company year after year. See [planning the irrigation year](/blog/irrigation/seasonal-demand-planning-irrigation-software) for the bigger calendar."
      }
    ],
    "hubSlug": "irrigation-software",
    "hubKeyword": "irrigation software",
    "industry": "irrigation"
  }
];

export const hub: HubPageData = {
  "slug": "irrigation-software",
  "industry": "Irrigation",
  "isMain": true,
  "h1": "Irrigation Software for Startups, Repairs and Winterizations Run With Your Lawn Work",
  "subtitle": "Bring back last year's startups and blowouts automatically, keep controller and zone notes on every property, write repair estimates in the yard, and bill when each job is done.",
  "metaTitle": "Irrigation Software | IndustryBossPro",
  "metaDesc": "Irrigation software for lawn companies: spring startups, fall blowouts, repair estimates, parts on each job, maintenance plans, and controller and zone notes.",
  "heroPoints": [
    "Last season's startups and winterizations come back on the Waiting List",
    "Controller, zone, backflow and shutoff locations saved on every property",
    "Techs write and send repair estimates from the yard, even with no signal"
  ],
  "painPoints": [
    {
      "problem": "Spring startups and fall blowouts arrive all at once and get booked one call at a time",
      "solution": "Startups and winterizations come due once a year on the Waiting List. Circle a neighborhood on the map and put the whole area on a truck for the day."
    },
    {
      "problem": "Techs waste time hunting for the controller, the backflow and the main shutoff",
      "solution": "Property notes and custom fields hold controller location, zone count, backflow type and shutoff location, and the crew app shows them at the stop."
    },
    {
      "problem": "Repairs found during startups end up as sticky notes and never get sold",
      "solution": "Techs write and send the repair estimate from the crew app before leaving. The customer approves online, and three automatic follow-ups chase the ones who do not answer."
    }
  ],
  "features": [
    {
      "icon": "💧",
      "title": "Startups and Winterizations",
      "desc": "Set startups and blowouts as once-a-year services so last season's customers come due automatically each spring and fall."
    },
    {
      "icon": "🔧",
      "title": "System Notes per Property",
      "desc": "Keep controller model and location, zone count, backflow, shutoff and head types on each property for every tech to see."
    },
    {
      "icon": "📝",
      "title": "Repair Estimates in the Yard",
      "desc": "Techs price repairs from the service catalog in the crew app and send the estimate for online approval."
    },
    {
      "icon": "🧰",
      "title": "Parts on Each Job",
      "desc": "Record heads, valves and fittings used on each repair from the materials list, so invoices and job costs match."
    },
    {
      "icon": "📅",
      "title": "Maintenance Plans",
      "desc": "Sell startup, midseason check and winterization as one package, billed per visit, monthly or prepaid."
    },
    {
      "icon": "📊",
      "title": "Job Costing",
      "desc": "See labor from crew clock times, parts used, planned versus actual hours and margin for each startup, repair or install."
    }
  ],
  "pendingBoard": "Each spring and fall, last season's customers come back onto the Waiting List as startups or winterizations due, so you can circle a neighborhood on the map and schedule the whole area onto a truck in one step. Repair calls and approved repair estimates wait on the Pending Jobs board until a tech has room. Nothing found during a startup depends on someone remembering it.",
  "blogSiloIndustry": "irrigation",
  "blog1Slug": "irrigation-software-complete-guide",
  "blog1Title": "Adding Sprinkler Service to a Lawn Company: How the Irrigation Year Runs"
};
