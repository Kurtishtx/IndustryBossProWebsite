import type { BlogPost } from '../types';
import type { HubPageData } from '../../hub-data';

export const posts: BlogPost[] = [
  {
    "slug": "snow-removal-software-complete-guide",
    "title": "Running a Snow Removal Business: Contracts, Storm Nights, Salt and Getting Paid",
    "description": "How a snow removal business really works: signing contracts in fall, calling storms, plow routes, salt records, proof of service and getting paid per push.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Snow removal is a strange business. You sell it in September, when nobody is thinking about snow. You deliver it at 2am in the worst weather of the year, often with crews who mowed lawns for you all summer. And you get paid based on records you made while exhausted, in the dark, with frozen fingers. Done well, it fills the slowest months of a lawn company's year with good revenue. Done carelessly, it produces billing disputes, burned-out crews and, sometimes, a lawsuit from someone who slipped in a parking lot. This guide walks through the whole season, from contracts to the final invoice in spring.",
    "sections": [
      {
        "h2": "The season is sold in the fall",
        "content": "Most snow revenue is decided before the first flake. Commercial property managers often bid out snow contracts in late summer and early fall, and residential customers sign up when the leaves come down. If you wait for the first storm to start selling, you get the leftovers: the properties other contractors dropped and the customers who call at midnight wanting a one-time push.\n\nStart with your existing customers. A lawn company already knows the properties, the owners and the access. Then target commercial work near your current routes, because density matters even more in snow than in summer. Every estimate should spell out the trigger depth, what counts as a visit, how salt is billed, and the service area. Our post on [estimating snow work](/blog/snow-removal/snow-removal-estimating-software) covers measuring and pricing."
      },
      {
        "h2": "Pick a billing model you can live with in any winter",
        "content": "There are three common ways to bill snow. Per push, where each plowing visit is billed, usually tiered by depth. Per event, where each storm is billed as one charge regardless of how many times you return. And seasonal, where the customer pays a fixed amount for the winter no matter how much it snows.\n\nPer push pays you well in a heavy winter and poorly in a light one. Seasonal is the opposite: steady income, but a brutal winter can wipe out your margin. Many contractors mix them, keeping some seasonal accounts for steady cash and some per push for upside. We go through the math in [per-push versus seasonal billing](/blog/snow-removal/per-push-vs-seasonal-billing-automation)."
      },
      {
        "h2": "Storm nights run on decisions, not automation",
        "content": "When snow is forecast, someone has to decide when to send crews. That decision depends on your contracts' trigger depths, the timing of the snow, when businesses open, and how many crews you have. No forecast gets it right every time, so the owner or a trusted manager watches the radar, checks real depth at a few properties, and makes the call.\n\nOnce the call is made, the job is getting the right properties onto the right trucks fast. Keep a snow properties list for winter routes, with priority accounts marked. Pick the properties for the storm, assign them to trucks, and let auto-routing order each truck's stops by distance. Crews see the route on their phones with property notes. Our post on [calling storms and trigger depths](/blog/snow-removal/trigger-based-snow-dispatch-software) covers this in detail."
      },
      {
        "h2": "Salt is a cost, a billable item and a record",
        "content": "Salt and ice melt are often the largest material cost in snow work, and prices swing from year to year. Every application should be logged: which property, how much, which product, and who applied it. That record is how you bill salt correctly, how you know what each property costs you, and how you show that you treated a property when someone later claims it was icy.\n\nThe crew app lets operators record the product used and the amount at each stop. Over a winter, those records add up to a picture of where your salt goes. Recording it at the stop, not from memory the next afternoon, is the only way the numbers hold up."
      },
      {
        "h2": "Staffing the winter",
        "content": "Snow crews are often your summer crews, but not everyone who mows well plows well, and not everyone wants to be called at midnight. Ask early who wants winter work, agree on how storm hours are paid, and decide who is on call each week. A crew member who knows in October that he is first call for storms is far more reliable than one who finds out at 1am.\n\nPair new operators with experienced ones for the first few storms. Most plow damage, like clipped curbs, torn-up turf at the lot edge and dented light poles, happens in the first winter with an operator who has not seen the property in daylight. Drive new operators through their routes before the season, and keep the property notes on where curbs, drains and islands hide under the snow. Track clock times on every storm. Long shifts are part of the job, but you need to know when someone has been out too long to drive safely."
      },
      {
        "h2": "Proof of service protects your money and your business",
        "content": "In snow work, records are not paperwork, they are protection. A property manager disputing an invoice, or an attorney representing someone who fell, will ask when you were there, what you did and what conditions looked like. Time-stamped photos, clock times, the crew phone's GPS location and your salt log answer those questions.\n\nTrain crews to take a photo at each property after service, showing the cleared lot or walks. It takes seconds and it is the best defense you have. Completed alerts with photos also let customers see their lot was done without calling your office at 6am."
      },
      {
        "h2": "One system for summer and winter",
        "content": "Most snow contractors are lawn and landscape companies in the summer. Running both seasons from one system means the same customer records, the same property notes, the same crew app and the same billing. A commercial customer who buys mowing, fertilization and snow gets one account and one history.\n\nIndustryBossPro was built for lawn companies and the services that go with them, and snow is one of the most common. If this is the only service you run, SnowBossPro (https://snowbosspro.com) is the version built just for it. For everyone else, the [snow removal software](/snow-removal-software) overview shows how winter routes, salt logs and billing fit with the rest of your year."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "trigger-based-snow-dispatch-software",
    "title": "Trigger Depths and Storm Calls: Deciding When to Send the Plows",
    "description": "How to set trigger depths in snow contracts, decide when to call a storm, stage crews and get the right properties onto the right trucks in the first hour.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "The hardest decision in snow removal happens before anyone touches a plow: when do you go? Go too early and you push an inch of slush, burn fuel and labor, and do it again in four hours. Go too late and the grocery store's lot is full of cars and snow at opening time, and the manager is on the phone. No software watches the sky and makes this call for you. The owner or a manager makes it, based on contracts, forecasts and what is actually on the ground. This post covers how to set triggers, how to make the call and how to get crews rolling quickly once you do.",
    "sections": [
      {
        "h2": "What a trigger depth is, and why it belongs in writing",
        "content": "A trigger is the depth of snow that obligates you to plow. Common triggers are 1 inch, 2 inches or 3 inches, depending on the property. A hospital or a retail lot with early openings may want a 1 inch trigger. A residential driveway may be fine at 2 or 3 inches. Below the trigger, you may still salt, but you do not plow.\n\nPut the trigger in every contract, along with how depth is measured and who decides. Some contracts say depth is measured at the property, some at a nearby weather station, some at your discretion. Ambiguity here is the root of many billing disputes. \"We came out at 1.5 inches because it was drifting\" is a fine call if the contract allows it and a fight if it does not."
      },
      {
        "h2": "Sort properties by priority before winter",
        "content": "Not all properties need service at the same time. Before the season, sort your snow properties into priority groups. Top priority might be hospitals, medical offices, retail that opens early and any property with a contract that requires cleared lots by a set time. Second priority might be offices and churches. Last might be residential driveways and properties with flexible timing.\n\nMark the priority on each property and keep notes on access, hazards and where snow should be piled. When a storm comes, priority groups tell you the order without a debate at 2am. They also tell you how many trucks you need: if your top priority properties take four trucks five hours, and they need to be cleared by 6am, you know when you must start."
      },
      {
        "h2": "Making the call",
        "content": "Watch the forecast for timing, rate and total, not just the total. Three inches that falls between 10pm and 3am is a different storm than three inches that falls during the morning commute. Check actual depth at a few representative properties, or have a trusted operator who lives near your routes report it. Think about temperature, too. Wet snow near freezing is heavy and may need more passes. Very cold snow followed by sun can glaze into ice.\n\nDecide early whether this is a salt-only event, a plow and salt event, or a multi-pass storm. Then tell your crews when to report. A clear, early call lets operators sleep before a long shift. A late, hesitant call means people arrive tired and confused."
      },
      {
        "h2": "Getting properties onto trucks fast",
        "content": "Once the call is made, the next hour decides how the night goes. Pull up your snow properties list, choose the properties this storm requires, and assign them to trucks. On the map, you can circle an area and schedule all the properties inside it onto a truck in one step, which is much faster than picking them one at a time. Then let auto-routing order each truck's stops by distance.\n\nThe crew app shows each operator their route in order with navigation and property notes, like where to pile snow, where the curb is, and which entrance opens first. If a truck breaks down, move its remaining properties to another truck from the schedule. See how [route optimization](/features/service-route-optimization-software) orders each truck's stops."
      },
      {
        "h2": "Multiple passes and return visits",
        "content": "Long storms need more than one visit. A contract might call for plowing every 2 or 3 inches during the storm, with a final cleanup and salt after it stops. Plan for this up front: the first pass hits priority properties to keep them usable, later passes keep up, and the cleanup pass widens, pushes back and salts.\n\nEach pass should be recorded as its own visit with its own time, photo and notes. That is what lets you bill per push correctly and show a property manager exactly when their lot was serviced. If your billing is per event, the passes still matter, because they show the work behind the single charge. Our post on [billing models](/blog/snow-removal/per-push-vs-seasonal-billing-automation) covers how each model handles return trips."
      },
      {
        "h2": "Tell customers what is happening",
        "content": "Customers want to know two things during a storm: are you coming, and have you been there. A text when the storm is called, letting customers know crews are out, cuts down on calls. A completed alert with a photo, sent when the operator marks the property done, answers the second question before it is asked.\n\nIf a property has to be pushed later than expected, because the storm came heavier or a truck went down, tell the customer. Rescheduling a group of properties to another truck or later in the day sends customers a reschedule text. The [customer texting post](/blog/snow-removal/customer-sms-updates-snow-software) covers what to send and how to keep it from eating your text allowance."
      },
      {
        "h2": "Review after every storm",
        "content": "After each storm, take ten minutes to review. Did you call it at the right time? Which properties were late? Which trucks finished early and which ran long? Were there complaints, and were they fair? Look at clock times and completion times for each truck.\n\nA few storms of honest review will tell you more about your capacity than any plan. You will learn which routes are overloaded, which operators are fast, and how long your priority group really takes. Adjust your route groupings and start times before the next storm. The [snow removal software](/snow-removal-software) overview shows where the snow properties list, routes and crew records come together."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "snow-plow-route-optimization-software",
    "title": "Building Plow Routes That Clear Priority Lots First",
    "description": "How to group snow properties into plow routes by priority and area, balance trucks and equipment, plan where snow goes, and keep routes working all winter long.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A plow route is not a mowing route with a blade on the front. The constraints are different: some properties have hard deadlines before businesses open, some need a skid steer or a loader instead of a pickup, and the snow has to go somewhere that does not block drains or sightlines. Get the route wrong and your best operator spends the night driving past lots he should have cleared. This post covers how to group snow properties into routes, match equipment to the work, and keep routes realistic through a long winter.",
    "sections": [
      {
        "h2": "Start with deadlines, then geography",
        "content": "In summer, you group properties by area and pick an order that minimizes driving. In winter, deadlines come first. A retail lot that must be clear by 6am and a medical office that opens at 7 cannot wait for a truck to finish twelve driveways first.\n\nBuild routes in two layers. First, list properties with hard deadlines and group them by area into the first part of each truck's route. Then fill in properties with flexible timing after them, in the same general area. A truck that clears three commercial lots in one neighborhood by 5am and then does the driveways nearby is far more effective than one zigzagging between deadlines.\n\nCommercial deadlines are not all the same, either. A grocery store may open at 6am but receive deliveries at 4am, which means the loading dock has to be clear before the lot. A church may need its lot on Sunday morning but not on Saturday night. A medical office may need its entrance and handicapped spaces done first. Put the real deadline and any special order on each property so the operator sees it, not just the office."
      },
      {
        "h2": "Match the equipment to the property",
        "content": "Different properties need different equipment. A residential driveway is a pickup with a straight blade or a snowblower. A big retail lot may need a truck with a wing plow or a loader with a pusher box. Sidewalks need a walk crew with shovels, blowers or a small machine. Plan routes by equipment type, not just by area.\n\nNote on each property which equipment it needs and roughly how long it takes with that equipment. A lot that takes a pickup 90 minutes may take a loader with a pusher 25. That difference changes which truck the property belongs to. Keep walk crews on their own routes that follow the plow trucks, so sidewalks and entrances are done after the lot, not before it gets plowed back over."
      },
      {
        "h2": "Plan where the snow goes",
        "content": "Every property needs a plan for piling snow, and it belongs in the property notes before winter. Good spots are away from storm drains, not in front of fire hydrants, not blocking sightlines at exits, not on landscaped beds you will be repairing in spring, and downhill of walkways so meltwater does not run across them and refreeze.\n\nMark the spots on a photo or a simple sketch and add it to the property. A new operator who has never seen the lot will know where to push. After a few large storms, piles can block parking or create melt problems. Plan for relocation or hauling, and price it in the contract as an extra."
      },
      {
        "h2": "Order each truck by distance",
        "content": "Once properties are grouped by deadline and equipment, order each truck's stops to minimize driving within each priority group. Auto-routing orders a day's stops by distance, and you can adjust the result for the few things it does not know, like a one-way street or a lot that is easier to enter from the back.\n\nWatch for one common mistake: a route that is efficient on paper but forces a plow truck to make a long run on a highway between two clusters. Snow-covered roads are slower than summer roads, sometimes much slower. Keep each truck's properties as close together as you can, even if that means more trucks with shorter routes. See [route optimization](/features/service-route-optimization-software) for how stop order is calculated."
      },
      {
        "h2": "Balance trucks by hours, not by count",
        "content": "Ten properties is not a unit of work. Ten driveways might take three hours. Ten commercial lots might take twelve. Balance routes by estimated hours, using the push time noted on each property, plus realistic drive time in snow.\n\nAfter the first few storms, compare estimates with reality. Clock-in and clock-out times and completion times per stop tell you how long each property really took. Adjust the estimates and rebalance routes before the next storm. A route that runs four hours over its plan on every storm is not a crew problem, it is a planning problem. The [GPS and clock times post](/blog/snow-removal/gps-tracking-snow-removal-software) covers how to use those records."
      },
      {
        "h2": "Plan for breakdowns and absent operators",
        "content": "Something will go wrong on a big storm. A truck will break a hydraulic line, an operator will get sick, or a contract property will need three passes instead of one. Have a plan before it happens. Know which truck can absorb another route's priority properties, keep a spare operator on call when you can, and know which properties can wait a few hours without a problem.\n\nWhen a truck goes down, move its unfinished properties to other trucks in the schedule. The operators see the new stops on their phones. Tell affected customers if their service will be later than usual. A short message about a delay is far better than silence and a missed opening time. The [storm call post](/blog/snow-removal/trigger-based-snow-dispatch-software) covers deciding when to send crews out."
      },
      {
        "h2": "Drive the routes before the first snow",
        "content": "Before the first storm, have each operator drive his route in daylight. Look at every property with fresh eyes: where the curbs are, where the islands start, which speed bumps will catch a blade, where the drains sit, what is buried under the first snow. Mark curb lines with stakes or reflectors where the contract allows. Update the property notes with anything new.\n\nA dry run also tests the route order. An operator who drives it once will spot the left turn that takes five minutes, the property that is easier to enter from the back alley, or the two properties that should swap trucks. Fix those in October, not at 3am in January. Time the dry run too. It will not tell you plowing time, but it will show you the drive time between stops on clear roads, and you can add a margin for snow."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "per-push-vs-seasonal-billing-automation",
    "title": "Per-Push, Per-Event or Seasonal: Pricing Snow Contracts Without Betting the Company",
    "description": "Compare per-push, per-event and seasonal snow contracts with example math for light and heavy winters, salt billing, caps and how to bill each model reliably.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Every snow contract is a bet on the weather. Per-push pricing bets that it will snow a lot. Seasonal pricing bets that it will not snow too much. Most contractors lose money in at least one winter because they made the wrong bet with too many accounts. This post compares the three common billing models with example math for a light and a heavy winter, explains how salt and extras fit in, and shows how to run each model so invoices go out correctly without a week of spreadsheet work after every storm.",
    "sections": [
      {
        "h2": "Per push: paid for every visit",
        "content": "Per-push billing charges for each plowing visit. Rates are usually tiered by depth, for example one price for 2 to 4 inches, a higher price for 4 to 8, and higher again for 8 to 12. Salt is usually billed separately for each application. A long storm with three passes bills three pushes.\n\nThe advantage is that pay tracks work: heavy winters pay well. The disadvantages are uneven cash flow, unpredictable bills for customers, and disputes over how many pushes a storm really needed. Customers on per push sometimes call to ask you to skip a pass to save money, which complicates routes. Clear contract terms on trigger depth and pass frequency help."
      },
      {
        "h2": "Per event: one charge per storm",
        "content": "Per-event billing charges once per storm regardless of how many passes it takes, usually tiered by the storm's total depth. A 4-inch storm is one event at the 2 to 6 inch rate whether you plowed once or twice. Some contracts include salt in the event price; others bill it separately.\n\nPer event is easier for customers to understand than per push, because they see one charge per storm. The risk shifts to you on long, slow storms that need several passes. Price the higher tiers to cover the extra passes, and define what ends an event, such as a set number of hours without new snow.\n\nWrite down what ends an event, too. Some contracts define it as a set number of hours without new accumulation. Others end it when the cleanup pass is done. If a second storm arrives twelve hours after the first, is it a new event? Customers will ask, so the contract should answer before they do."
      },
      {
        "h2": "Seasonal: a fixed price for the winter",
        "content": "Seasonal contracts charge a fixed amount for the whole winter, often split into monthly payments from November through March. Some cover unlimited plowing and salting. Many include a cap, such as a set number of events or a total snowfall, with per-push or per-event charges beyond it.\n\nThe appeal is predictable income for you and a predictable bill for the customer. You get paid in a light winter, which pays your crews and your equipment loans. The risk is a heavy winter, when you may do twice the work for the same money. A cap protects against that. Without one, you are betting your margin on the weather."
      },
      {
        "h2": "Example math: one property, two winters",
        "content": "Take an illustrative commercial lot. Per push, you charge $150 for 2 to 4 inches and $225 for 4 to 8, plus $90 for each salt application. Seasonal, you charge $3,000 for the winter with salt included. Each push costs you around $70 in labor and equipment, and each salt application about $40 in material and labor.\n\nIn a light winter with 6 pushes and 12 salt applications, per push bills about $2,200 and costs about $900. Seasonal bills $3,000 and costs the same $900. In a heavy winter with 20 pushes and 30 salt applications, per push bills about $6,300 and costs about $2,600. Seasonal still bills $3,000, against the same $2,600 in cost. The seasonal contract was great in the light winter and barely profitable in the heavy one. Your numbers will differ, but the shape will not."
      },
      {
        "h2": "Mixing models to spread the risk",
        "content": "Many contractors run a mix: seasonal contracts for steady income and per-push or per-event contracts for upside. A rough rule some use is to cover fixed costs, like equipment payments, insurance and core staff, with seasonal income, and let per-push work provide the profit in heavy winters.\n\nWhatever mix you choose, track it. Know how many of your accounts are on each model and what each model earned last winter. The [job costing post](/blog/snow-removal/snow-removal-job-costing-software) covers how to see what each property cost you, so you can adjust prices and models before the next season."
      },
      {
        "h2": "Running the billing without a spreadsheet",
        "content": "Per-push and per-event billing needs a record of every visit. When an operator marks a property done in the crew app, that visit is on record with its time. Set your depth tiers up as items in the service catalog so the office picks the right tier for each push. Salt applications logged by the operator carry the amount used. With a card on file, an invoice can charge automatically when the job is completed.\n\nFor seasonal contracts, sell the season as a package billed monthly, or prepaid. Prepayments are tracked as a ledger, so you always know what a customer has paid and what has been drawn down. Monthly billing charges the same amount each period. Plans start at $59 a month on [pricing](/pricing), and every plan includes the same billing tools. See [invoicing](/features/field-service-invoicing-software) for how visits become invoices."
      },
      {
        "h2": "Caps, minimums and the light-winter problem",
        "content": "Seasonal contracts need a cap if you want to protect yourself in heavy winters. A cap might be a number of events, a total snowfall, or a number of pushes, with per-push or per-event billing beyond it. Make the cap realistic for your area, so the customer gets a normal winter for the seasonal price and pays more only in an unusual one.\n\nPer-push contracts have the opposite problem. In a light winter, you may bill very little while your equipment payments and insurance still come due. Some contractors add a seasonal minimum or a small monthly retainer to per-push contracts to cover fixed costs. Others keep enough seasonal accounts to carry the light winters. Whatever you choose, put it in writing in the contract and explain it to the customer at signing, not in February when the first invoice looks different from what they expected."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "salt-material-tracking-snow-software",
    "title": "Salt Records: Logging What You Spread, Where, and What It Cost",
    "description": "Why snow contractors should log every salt and ice melt application by property, amount, product and operator, and how those records drive billing and costing.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Salt is the snow contractor's most expensive consumable and the easiest one to lose track of. It goes out a scoop or a spreader pass at a time, across dozens of properties, by several operators, in the middle of the night. Without records, you cannot bill it accurately, you cannot tell which properties cost you most, and you cannot prove you treated a walkway when someone later says it was icy. This post covers what to record on every application, how to keep operators consistent and how to turn those records into money and protection.",
    "sections": [
      {
        "h2": "What to record on every application",
        "content": "Each application should record the property, the date and time, the product (rock salt, treated salt, calcium chloride, a blend or a liquid), the amount, the area treated (lot, walks, entrances), and the operator. If you pre-treat with liquid before a storm, record that too, with gallons applied.\n\nThe crew app records product used and amount at each stop, and application records per property per visit hold the product, amount, area treated and applicator. The time comes from when the stop is completed. Together, those fields answer most questions that come up later: was this property salted, when, with what, and by whom."
      },
      {
        "h2": "Measuring amounts that operators will actually record",
        "content": "Operators will not weigh salt at 3am. Make the amounts easy to estimate consistently. For tailgate and V-box spreaders, calibrate the spreader at a known setting and speed, then record amount by time or passes. For bagged ice melt on walks, record bags. For bulk loaded by a loader, know what a bucket holds and record buckets.\n\nWrite the conversion rules down and train operators on them before the season. Spot-check: compare the total salt recorded across all properties after a storm with the salt that actually left your pile or your bag inventory. If the records show 8 tons and you loaded 12, something is not being logged.\n\nGive operators a simple reference card for the truck: spreader setting, speed, and what that means in pounds per pass for each spreader you run. When a new operator joins mid-season, the card and a single ride-along are usually enough to get his numbers in line with everyone else's."
      },
      {
        "h2": "Billing salt correctly",
        "content": "How you bill salt depends on your contract. Per application at a set price per property, per ton or bag at a set rate, or included in a seasonal or per-event price. Whatever you choose, the records drive the invoice. Salt that was spread and not recorded is salt you paid for and gave away.\n\nFor per-application billing, set up salt as an item in the service catalog with a price per property or per size category. When operators log an application, the office or the billing run picks it up. For included salt, the records still matter, because they tell you whether the included amount in your price was realistic. See the [billing models post](/blog/snow-removal/per-push-vs-seasonal-billing-automation) for how salt fits each model."
      },
      {
        "h2": "Knowing what each property costs you",
        "content": "With a cost per ton or per bag in your materials list, the application records turn into a salt cost per property. Some properties will surprise you. A lot with a long, shaded entrance that never melts, a sloped walk that refreezes every night, or a property manager who calls for extra salt after every storm will cost far more than an open, flat lot of the same size.\n\nUse that cost at renewal time. A seasonal contract that included salt on a property that used three times your estimate should be repriced or moved to per-application salt. Job costing adds labor from clock-in times and materials used to show profit and margin per job. The [job costing post](/blog/snow-removal/snow-removal-job-costing-software) goes into the full picture."
      },
      {
        "h2": "Records as protection",
        "content": "When someone slips on a walk you service, the first question is whether it was treated. A salt record with a time, a product and an operator, plus a photo of the treated walk, is strong evidence that you did what your contract required. A vague memory that \"we were out there that night\" is not.\n\nKeep the records for as long as claims can arrive. Time limits for injury claims vary by state and can be years, so ask your insurance agent or attorney how long to keep them. The chemical report can be printed or sent, which is useful when an insurer or a property manager asks for a property's treatment history. The [slip-and-fall records post](/blog/snow-removal/slip-and-fall-liability-records-software) covers the rest of what to keep."
      },
      {
        "h2": "Planning salt purchases",
        "content": "Salt prices and availability change from year to year, and a hard winter can leave suppliers short. Use last winter's records to plan this winter's purchases. Total salt used per storm, divided by your properties, gives you an average per property per event. Multiply by a typical number of events and your expected property count to estimate need.\n\nOrder early and store enough for several storms. Keep salt covered and dry; wet salt clumps and spreads poorly. Track what you buy and what you use. If usage per property climbs year over year without a reason like more storms or more properties, look at spreader calibration and operator habits before blaming the weather."
      },
      {
        "h2": "Pre-treating with liquids",
        "content": "Many contractors now pre-treat lots and walks with liquid brine before a storm. Brine applied ahead of snow can keep it from bonding to the pavement, which makes plowing easier and can reduce how much rock salt you need afterward. It also introduces a new product to record.\n\nTreat pre-treatment like any other application. Record the product, the gallons, the area treated, the time and the operator. Bill it according to your contract, either as its own line or included in the event price. Pre-treatment records also matter for claims, because they show you treated the property before the storm, not only after it. If you make your own brine, keep a cost per gallon in the materials list so it shows up in job costing like any other material. Calibrate your sprayer the same way you calibrate spreaders, so the gallons logged reflect what actually went down."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "customer-sms-updates-snow-software",
    "title": "What to Text Snow Customers During a Storm (and What It Costs in Segments)",
    "description": "What to text snow removal customers before, during and after a storm, how to keep messages short, and how to budget text segments on a busy winter night.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "During a storm, your phone rings with the same three questions: are you coming, when, and did you already come? Each call takes a minute, and on a busy night with a hundred customers, those minutes add up to hours your office or your own phone loses. A few well-timed texts answer the questions before they are asked. But texts have a cost, and a storm with several passes can burn through a month's allowance quickly if every message is long. This post covers what to send, when, and how to keep it efficient.",
    "sections": [
      {
        "h2": "The three messages that matter",
        "content": "Most snow customers want three things. A message when the storm is called, saying crews are going out and roughly when to expect service. A message when their property is done, ideally with a photo. And a message if something changes, like a delay or a reschedule. Anything beyond that is optional and often just noise.\n\nFor residential customers, a short \"on the way\" text before the crew arrives can help them move cars from the driveway. For commercial customers, the completed alert with a photo is the most valuable, because property managers need to know their lot is open and safe. Decide which alerts each customer actually wants and turn on only those.\n\nResist the urge to add more. A text when the truck is ten minutes out, another when it arrives, another when it leaves and a final summary may feel like great service, but on a storm night customers mostly want to know it is handled. Fewer, useful messages get read. A flood of messages gets ignored, and costs you segments each time."
      },
      {
        "h2": "Keep messages short and plain",
        "content": "Text messages are billed in segments. A standard text message segment holds about 160 plain characters. Longer messages are split into several segments, and each segment counts. Certain characters, like emoji, curly quotes and some special symbols, switch the message to a different encoding that fits far fewer characters per segment, so a single emoji can turn one segment into two or three.\n\nWrite snow texts in plain language with plain characters. \"Crews are out for tonight's storm. Your lot will be cleared before 6am. Reply with any questions.\" is clear and fits in one segment. A message with an emoji, a long greeting and a link to your website may take three. On a storm night with a hundred customers and three messages each, that difference is hundreds of segments."
      },
      {
        "h2": "Budgeting texts for a winter",
        "content": "Texts are counted in segments, sent and received. The Start plan includes 500 segments a month, Pro 1,000 and Crew 2,000. Do the math before winter. Say you have 120 snow customers and send two messages per storm, one when called and one when done. That is 240 segments per storm if each message fits in one segment, plus replies.\n\nA month with four storms uses close to 1,000 segments just for those two alerts. Add customer replies, which also count, and a heavy month can go past your allowance. Options are to send only the completed alert to most customers, send the storm-called message only to commercial accounts, or plan for a plan with a larger allowance during winter. Check [pricing](/pricing) for the current allowances."
      },
      {
        "h2": "Completed alerts with photos",
        "content": "The single most useful snow text is the completed alert with a photo. When the operator marks the property done in the crew app and adds a photo, the customer can get an alert with the notes and photo. A property manager sees their lot is clear without calling. A homeowner sees the driveway was done at 4:12am.\n\nThat photo also becomes part of your record if there is a dispute or a claim later. The [slip-and-fall records post](/blog/snow-removal/slip-and-fall-liability-records-software) covers why photos at every visit matter. Make the photo routine: one wide shot showing the cleared area, taken from the same spot every time, adds seconds per stop."
      },
      {
        "h2": "Two-way texting and replies",
        "content": "Customers will reply to storm texts. Some will say thanks, some will ask when you are coming, and some will report a problem, like a car blocking the plow or an icy patch by the door. On Pro and Crew, two-way texting lets those replies come into your office so someone can answer them, rather than going to a number nobody watches.\n\nHave a plan for replies on storm nights. Someone should check them every hour or so, answer quick questions, and pass real problems to the operator on that route. A reply about an icy entrance at a commercial property is worth a quick return trip, because that is exactly the kind of spot where someone falls."
      },
      {
        "h2": "Delays and reschedules",
        "content": "Storms do not always cooperate. A heavier storm, a broken truck or a sick operator can push some properties hours behind. When that happens, tell the affected customers. Move the affected properties to another truck or a later time in the schedule, and customers get a reschedule text.\n\nA short delay message, sent before the customer notices, keeps trust. \"Heavier snow than forecast, your driveway will be cleared by 9am instead of 7am.\" Most customers accept that. A driveway still covered at 8am with no message produces an angry call and sometimes a canceled contract. The [storm call post](/blog/snow-removal/trigger-based-snow-dispatch-software) covers planning for delays before they happen."
      },
      {
        "h2": "Set expectations before the season",
        "content": "The best time to explain storm texts is in the fall, not during the first storm. When customers sign, tell them what messages to expect and when: a heads-up when a storm is called, a completed alert with a photo, and a message if there is a delay. Tell them how to reply and when someone will answer. Ask which contact should get the texts, especially for commercial properties where the manager, the owner and the building staff may all want different things.\n\nLet customers choose. Some homeowners want every alert. Others want only the completed message. Property managers may want texts for several properties sent to one person. Setting alerts per contact before winter means fewer complaints and fewer wasted segments later. It also gives you a chance to explain trigger depths, so a customer who sees an inch of snow on their driveway does not wonder why the plow has not come."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "gps-tracking-snow-removal-software",
    "title": "Crew GPS and Clock Times on Storm Nights: What to Track and Why",
    "description": "How snow contractors use crew phone GPS, clock-in times and completion times on storm nights to answer customers, pay crews fairly and document every visit.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "On a storm night, the owner is usually the only person who knows where every truck is supposed to be, and nobody knows where every truck actually is. That gap causes real problems: customers calling to ask if they have been done, operators disputing their hours, and no way to show a property manager that a truck was in their lot at 3am. Tracking crew location and time is not about watching people. It is about answering the questions that come up during and after every storm. This post covers what to track and how to use it.",
    "sections": [
      {
        "h2": "What crew tracking covers, and what it does not",
        "content": "The crew app records the location of the crew phone during the day, along with clock-in and clock-out times and the time each property is marked done. It is location from the operator's phone, not a device wired into the truck. It does not track engine hours, fuel use or vehicle maintenance.\n\nThat is enough for most snow businesses. You can see where crews are, see which properties have been completed and when, and pay people accurately for the hours they worked. Make sure operators know their phone's location is tracked while they are on the clock, and explain why. Most operators accept it quickly once they see it protects them too.\n\nLocation tracking also helps the office plan in real time. When a property calls with a problem, like a car blocking the lot or an icy spot by the door, the office can see which truck is closest and send it, instead of guessing or calling every operator. On a busy night, that saves a lot of phone calls and driving."
      },
      {
        "h2": "Answering \"Have you been here yet?\"",
        "content": "The most common storm-night call is a customer asking whether their property has been done. Without tracking, the office calls the operator, who is driving a plow in a snowstorm. With completion times and crew locations, the office can see right away whether the property is done, and if not, where the truck is and how many stops are ahead of it.\n\nBetter still, let the completed alert answer the question before the customer asks. When the operator marks the property done, the customer can get a text. See the [customer texting post](/blog/snow-removal/customer-sms-updates-snow-software) for what to send and how to budget segments."
      },
      {
        "h2": "Paying crews accurately",
        "content": "Storm shifts are long and irregular, and hours disputes are common. An operator who started at 11pm and finished at 1pm the next day worked 14 hours, and with overtime rules, every hour matters. Clock-in and clock-out from the crew app give you a clear record, and the employee hours report adds them up for payroll.\n\nAgree on rules before the season. When does the clock start: when the operator leaves home, arrives at the shop, or starts the first property? Are breaks paid? How is standby time handled when you call people in and the snow is late? Clear rules, written down and applied the same way to everyone, prevent most disputes. The software records the times. You decide what they mean for pay."
      },
      {
        "h2": "Spotting routes that run long",
        "content": "After each storm, look at how long each truck's route took versus your plan. Completion times per property show where the time went. Maybe one commercial lot took twice as long as estimated because cars were left in it. Maybe a truck spent an hour driving between two clusters on snowy roads.\n\nUse what you find. Adjust the estimated push time on properties that consistently take longer, rebalance routes that run over, and talk to customers whose lots are routinely full of cars when you arrive. The [plow routes post](/blog/snow-removal/snow-plow-route-optimization-software) covers how to rebalance routes by hours."
      },
      {
        "h2": "Location as part of your records",
        "content": "A crew phone's location during the shift, combined with completion times and photos, shows that a truck was at a property when your records say it was. That matters when a property manager disputes how many pushes a storm needed, and even more when someone files an injury claim and the question is whether the property was serviced.\n\nKeep these records with the property's history. When a question comes up, pull the visit: the time it was marked done, the photo, the salt application, and where the crew was. The [slip-and-fall records post](/blog/snow-removal/slip-and-fall-liability-records-software) covers how these pieces fit together."
      },
      {
        "h2": "Safety on long shifts",
        "content": "Snow work is dangerous. Operators work alone, at night, in bad weather, for long hours. Knowing where every crew is helps if something goes wrong, like a truck stuck in a ditch, an operator who stops responding, or an accident. If a crew has not marked a property done in a long time and is not answering, you can see where the phone last was and send help.\n\nSet limits on shift length and check in with operators during long storms. Fatigue causes most of the bad decisions in snow work, from clipped curbs to accidents. Clock times tell you who has been on too long. Use them to send people home to rest when the storm allows, before someone gets hurt."
      },
      {
        "h2": "Sharing records with property managers",
        "content": "Commercial property managers often need records of their own. Their insurer may ask, their owner may want a report, or they may be comparing your performance with another contractor's. Being able to send them a clear history of visits, times, photos and salt applications for a property makes you easier to work with and harder to replace.\n\nOffer it before they ask. At the end of a storm or the end of each month, send managers a summary of service on their properties. Completed alerts with photos give them a record as it happens. The chemical report can be printed or sent with a property's salt applications. A manager who can answer their own boss's question in two minutes, because you gave them the records, is likely to renew. One who has to chase you for proof every time a tenant complains is likely to bid the contract out next fall."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "slip-and-fall-liability-records-software",
    "title": "Slip-and-Fall Claims: The Records a Snow Contractor Should Keep From Every Visit",
    "description": "What records protect a snow contractor when a slip-and-fall claim arrives: contract scope, visit times, photos, salt logs, weather notes and customer messages.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Slip-and-fall claims are one of the biggest risks in commercial snow removal. Someone falls in a parking lot or on a sidewalk, a claim is filed against the property owner, and the snow contractor gets pulled in. The claim may arrive months or years after the storm, when nobody remembers what happened that night. What protects you is what you wrote down at the time. This post covers the records a contractor should keep from every visit and how to keep them organized. It is general guidance, not legal advice. Talk to your insurance agent and an attorney about your own contracts and your state.",
    "sections": [
      {
        "h2": "Start with the contract scope",
        "content": "The first question in many claims is what you were responsible for. Did your contract cover the parking lot only, or sidewalks too? Were you responsible for salting, or only plowing? What was the trigger depth? Were you required to return after the storm to treat refreeze, or only when called?\n\nWrite the scope clearly in every contract and keep a copy with the client record. Avoid promising things you cannot deliver, like \"keep the property free of ice at all times.\" Many contractors and their insurers prefer language that ties service to specific triggers and requests. Have an attorney review your standard contract, because the wording matters, and the rules differ by state."
      },
      {
        "h2": "Record every visit with a time",
        "content": "For each visit, you need a record of when you were there. The time the operator marks the property done in the crew app gives you that. Clock-in and clock-out times and the crew phone's location during the shift support it. Each pass on a long storm should be its own visit with its own time.\n\nIf a claim says someone fell at 7:30am, and your records show the walk was plowed and salted at 5:15am, that is important. If your records show nothing between the end of the storm and noon, that is important too. Either way, you want to know what actually happened, and only records made at the time can tell you.\n\nKeep a copy of the signed or approved version of each contract, not just your template. If you change the scope for a customer during the season, like adding walks in January, record the change in writing with the date so the record shows what you were responsible for on any given night."
      },
      {
        "h2": "Photos are the strongest evidence",
        "content": "A photo taken at the time of service shows the condition of the property better than any description. Train operators to take at least one photo at every property after service, showing the cleared and treated area. For commercial properties with walks, a photo of the main entrance walk is especially valuable, since that is where many falls happen.\n\nPhotos should be clear and wide enough to show the area, not close-ups of pavement. Taking them from the same spot each visit makes it easy to compare. Completed alerts can send the photo to the customer too, which means the property manager also has a record that the walk was clear at that time."
      },
      {
        "h2": "Salt logs and weather notes",
        "content": "Your salt records show what you applied, where and when. Combined with photos and times, they show that you treated the property as your contract required. Record the product and amount and the area treated, such as the lot, walks or entrances, on every application. See the [salt records post](/blog/snow-removal/salt-material-tracking-snow-software) for what to log.\n\nAlso note conditions. A short crew note like \"freezing rain, salted entrances twice\" or \"temperature dropping, refreeze likely, advised manager\" can matter later. If you warned a property manager about conditions or recommended an extra treatment that was declined, record that too."
      },
      {
        "h2": "Keep customer communication",
        "content": "Texts and emails with customers are part of the record. A property manager who asked you to skip salt on a certain night, declined an extra treatment, or reported that a lot was full of cars when you arrived has given you information that may matter in a claim. With two-way texting, replies come into the office and stay with the client.\n\nEncourage customers to put requests in writing, by text or email, rather than by phone. When they do call, have the office add a note to the property afterward. A note made the same day, saying who called and what they asked for, is far more useful than someone's memory a year later."
      },
      {
        "h2": "Organize records so you can find them",
        "content": "A claim may arrive long after the storm. You need to be able to pull up everything about a property for a given date: the visit times, photos, salt applications, crew notes, customer messages and the contract. If those are scattered across operators' phones, paper logs and the office email, finding them is hard, and some will be gone.\n\nKeeping everything attached to the property in one system makes it a lookup instead of a search. The chemical report can be printed or sent with a property's treatment history. Ask your insurer or attorney how long to keep records. Time limits for claims vary by state and can run for years. The [snow removal software](/snow-removal-software) overview shows where visit records, photos and salt logs live together."
      },
      {
        "h2": "Refreeze and return visits",
        "content": "Many falls happen not during the storm but after it, when meltwater refreezes overnight. A lot that was plowed and salted at 4am can be dangerous by the next evening if temperatures drop. Your contract should say whether you return for refreeze automatically, only when called, or not at all.\n\nWhatever the contract says, record what happens. If you return to treat refreeze, log it as a visit with a time, photos and the salt applied. If you are called and come out, note who called and when. If you advise a manager that refreeze is likely and recommend another treatment, and they decline, put that in writing and keep it. Those records show that you met your obligations and that the decision not to treat was the property's, not yours. Ask your attorney how your contract language affects refreeze responsibility in your state."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "snow-removal-estimating-software",
    "title": "Estimating Snow Removal: Measuring Lots, Walks and Push Time",
    "description": "How to estimate snow removal jobs: measuring lot and walk areas, estimating push time by equipment, adding salt, pricing tiers, and quoting before winter.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Snow estimates have to account for work you have not seen yet. You do not know how many storms will come, how deep they will be or how many cars will be in the lot. What you can know is how big the area is, how long it takes your equipment to clear it, how much salt it needs, and what it costs you to run a truck and an operator. Get those right, and the price takes care of itself. This post walks through measuring a property, estimating time, adding salt and putting it all in a quote that gets signed before the first storm.",
    "sections": [
      {
        "h2": "Measure the area, not the property",
        "content": "Start by measuring what you will actually clear. For a parking lot, that is the paved area minus islands and landscaping. For walks, it is the length and width of each walk you are responsible for. For driveways, it is the paved area plus any apron.\n\nOutline the lot or the walks on the satellite map in the measure map to get square footage. It is much faster than walking the property with a wheel, and it gives you a record of exactly what was measured. Still visit commercial properties in person before you bid. Look for curbs, speed bumps, drains, fire lanes, loading docks, where snow can be piled and anything that will slow a plow.\n\nNote the surface, too. Gravel driveways and lots need a plow shoe or a raised blade and more care, and they take longer. Pavers and stamped concrete may need a rubber or poly edge to avoid damage. Price these surfaces higher and note them on the property so the operator knows before arriving."
      },
      {
        "h2": "Estimate push time by equipment",
        "content": "Time is your main cost, and it depends on the equipment. A pickup with a straight blade clears a residential driveway in a few minutes and a mid-sized lot much more slowly. A truck with a wing plow covers more area per pass. A loader with a pusher box can clear a large open lot many times faster than a pickup.\n\nUse your own production rates. If you do not have them, time your operators on known properties during the first storms and note how many square feet per hour each piece of equipment clears. Then estimate each new property by dividing its area by the rate for the equipment you will use, and add time for obstacles, tight corners and stacking snow. Our [plow routes post](/blog/snow-removal/snow-plow-route-optimization-software) covers matching equipment to properties."
      },
      {
        "h2": "Add salt and walks separately",
        "content": "Salt usage depends on the area treated and your application rate. Using your past records, estimate pounds or bags per application for the lot and for the walks. Multiply by your cost per unit and add your markup. Walks often need more salt per square foot than lots, because they are where people walk and fall.\n\nPrice walks as their own line. They take a different crew and different equipment, and they are often where the liability is. A property manager comparing bids will see your walk price separately and understand why it costs what it does."
      },
      {
        "h2": "Building the price",
        "content": "With time and salt estimated, the price is straightforward. Take an illustrative lot that takes a truck and operator 45 minutes to plow. If your truck and operator cost about $95 an hour including fuel, wear and insurance, that is about $71 per push. Add a share of overhead and profit, and a per-push price around $140 to $160 is a reasonable starting point in this example.\n\nFor depth tiers, raise the price as depth increases, because deeper snow takes longer and is harder on equipment. For seasonal contracts, multiply the expected number of pushes and salt applications by your per-visit prices, and decide whether to include a cap. The [billing models post](/blog/snow-removal/per-push-vs-seasonal-billing-automation) goes through the math."
      },
      {
        "h2": "Write the quote so it answers the questions",
        "content": "A good snow quote states the trigger depth, which areas are covered (lot, walks, entrances, loading docks), the billing model and rates, how salt is billed, the service window, where snow will be piled, what is extra (hauling, relocating piles, ice dams), and the contract period.\n\nUse estimate templates for your common contract types so each quote starts with the right lines and terms. Send it by text or email so the customer can approve online. If they do not answer, three automatic follow-ups go out. Once approved, convert it into scheduled work and add the property to your snow list. See [estimates and quoting](/features/field-service-estimates-quoting) for how the process runs."
      },
      {
        "h2": "Pricing residential driveways",
        "content": "Residential snow work is priced differently from commercial. Most driveways are similar in size, so many contractors use simple tiers: a single-car driveway, a two-car driveway, and a long or large driveway, each with a set price per push. Add-ons like walks, steps, and a path to the back door are priced as extras.\n\nDensity matters even more for driveways than for commercial lots. A driveway takes a few minutes to plow, so the drive between driveways is a large share of the cost. Price driveways in your dense areas at your standard rate and add a charge, or decline, for isolated ones. Seasonal contracts are popular with homeowners because the bill is predictable. Per-push works for customers who want to pay only when it snows. Either way, make the trigger depth clear. Homeowners often expect the plow to come at the first inch, and a contract with a 2-inch trigger needs to say so plainly."
      },
      {
        "h2": "Bid early",
        "content": "Commercial property managers often decide on snow contractors in late summer or early fall. Residential customers sign when they start thinking about winter, often after the leaves fall. Bid early and follow up. A quote that arrives after the first storm competes with whoever already signed the customer.\n\nStart with your summer customers. You already know their properties, their access and their payment history. A mowing customer who also buys snow is worth more to you, because they keep your crews busy in winter. The [adding snow to a lawn company post](/blog/snow-removal/snow-removal-add-on-lawn-landscape-software) covers how the two seasons fit together."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "snow-removal-job-costing-software",
    "title": "Did That Storm Make Money? Job Costing for Snow Removal",
    "description": "How to job cost snow removal: labor from clock times, salt and materials, equipment cost, planned versus actual hours, and finding properties that lose money.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "After a big storm, most snow contractors know roughly what they billed. Few know what each property cost them. That matters because snow prices are set once, before winter, and then the weather decides how much work each property needs. A lot that looked fine on paper may take twice as long as estimated every storm, or eat salt at three times the expected rate. Without job costing, you find out at the end of the season when the bank account looks thinner than the invoices suggested. This post covers how to cost snow jobs and what to do with the numbers.",
    "sections": [
      {
        "h2": "The three costs that matter",
        "content": "Snow job costs come from three places. Labor, which is operator and walk crew hours times pay rate. Materials, mostly salt and ice melt, priced from what you paid. And equipment, the cost of running trucks, plows, loaders and spreaders, including fuel, wear and the share of payments and insurance.\n\nLabor and materials can be tracked per property. Job costing pulls labor from crew clock-in times times each worker's pay rate, adds the materials used, and shows profit and margin per job. Equipment is harder to tie to a single property, so many contractors use an hourly equipment rate per truck or machine and add it to labor time."
      },
      {
        "h2": "Labor from clock times",
        "content": "Labor is usually the largest cost in snow work. Clock-in and clock-out times give you each operator's hours on each storm. Pay rates are set per worker and kept office-only, so operators do not see each other's pay. The job costing report puts the two together.\n\nThe tricky part is time between properties. A route with ten properties and eight hours of clock time had some drive time in it. Decide how you want to handle it: spread it across the properties on the route, or report it separately as a route cost. Either is fine as long as you are consistent. What matters is that the total labor cost of the storm is accounted for somewhere.\n\nOvertime changes the math. Storm shifts often push operators past 40 hours in a week, and overtime hours cost more. When you look at labor cost per property, use the actual pay for those hours, including overtime, not just the base rate. A property serviced late in a long storm week may cost noticeably more in labor than the same property serviced early in a quiet one. That is not a reason to skip it, but it is a reason to price your heavy-winter tiers with some room for overtime built in."
      },
      {
        "h2": "Salt and materials",
        "content": "Salt and ice melt usage comes from the application records operators log at each property. Multiply by your cost per unit from the materials list. Keep the material costs current, because salt prices can change between seasons or even mid-season.\n\nWatch for properties where salt cost is far above your estimate. A shaded entrance, a sloped lot or a property manager who calls for extra treatments can push salt cost well past what your price assumed. Our [salt records post](/blog/snow-removal/salt-material-tracking-snow-software) covers what to record and how to keep operators consistent."
      },
      {
        "h2": "Putting a cost on equipment",
        "content": "Equipment cost is the one most contractors skip, and it is often large. A truck with a plow and spreader has a payment or depreciation, insurance, fuel, maintenance, blade edges and repairs. A loader or skid steer has the same, plus transport.\n\nA simple way to handle it is an hourly equipment rate. Add up a machine's yearly costs, divide by the hours you expect it to work in a season, and use that rate per hour of use. Say a plow truck costs $12,000 a year all in and works 300 hours in a typical winter. That is about $40 an hour. Add it to labor time for each property the truck serviced. The number will not be exact, because a heavy winter means more hours and a lower rate per hour, but it is far better than leaving equipment out. Without it, every property looks more profitable than it really is."
      },
      {
        "h2": "Planned versus actual hours",
        "content": "Every property should have a planned time per push, from your estimate. After each storm, compare it with actual time. Most properties will be close. A few will be far over. Those are where your money is going.\n\nLook for the cause. Cars left in the lot that the operator had to plow around. A new obstacle like a dumpster or a construction fence. An operator unfamiliar with the property. Snow piles that have grown so large the operator spends extra time stacking. Some causes can be fixed with the customer, like a request to clear cars by a certain time. Others mean the price needs to change at renewal."
      },
      {
        "h2": "Comparing billing models by property",
        "content": "Job costing shows how each billing model performed. Per-push properties should show steady margin per push, because pay tracks work. Seasonal properties will vary: very profitable in a light winter, possibly losing money in a heavy one.\n\nAt the end of each winter, look at margin by property and by model. A seasonal property that lost money in an average winter needs a higher price, a cap or a switch to per push. A per-push property with thin margin needs a rate increase or a closer look at how long it really takes. The [billing models post](/blog/snow-removal/per-push-vs-seasonal-billing-automation) covers how to set up each model."
      },
      {
        "h2": "Use the numbers at renewal",
        "content": "Snow contracts are usually renewed once a year, so the end of winter is when job costing pays off. Run the job costing report by property for the season. Sort by margin. Look at the bottom ten properties and decide for each: raise the price, change the model, change the scope, or let it go.\n\nBring numbers to the conversation. \"Your lot took an average of 95 minutes per push this winter, against 50 estimated, mostly because of cars left overnight. We need to either adjust the price or agree on a clear-by time.\" Most property managers respond better to that than to a flat increase. The [reporting tools](/features/field-service-reporting-analytics) cover the job costing report and other season reports."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  },
  {
    "slug": "snow-removal-add-on-lawn-landscape-software",
    "title": "Adding Snow Removal to a Lawn or Landscape Company: What Changes",
    "description": "What a lawn or landscape company should plan before adding snow removal: equipment, insurance, crews, contracts, winter routes, salt records and billing.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "For a lawn or landscape company in a snowy region, winter is a problem. Revenue drops, good crew members find other work, and equipment sits. Snow removal solves much of that: it uses the same customers, many of the same people and some of the same trucks. But it is a different business, with different hours, different risks and different contracts. Companies that treat it as \"mowing with a plow\" often have a rough first winter. This post covers what changes when a lawn company adds snow, and how to set it up so the first season goes well.",
    "sections": [
      {
        "h2": "Why snow fits a lawn company",
        "content": "Snow and lawn work share a lot. You already have customers who trust you, properties you know, trucks, a shop and crews who are used to outdoor work. Commercial customers often prefer one contractor for grounds maintenance and snow, because it means one contact and one bill. Snow revenue keeps cash flowing in winter, so you can keep your best people year round instead of rehiring every spring.\n\nThe overlap is also on the office side. The customer record, property notes, billing and crew app you use all summer work the same way in winter. A property's gate code and the note about the dog are just as useful to a plow operator as to a mower."
      },
      {
        "h2": "What is different about snow",
        "content": "Snow work happens at night and on weekends, often with little notice. Shifts can run 12 to 18 hours. The work is harder on equipment and on people. Deadlines are strict: a lot has to be clear before a business opens. And the liability is much higher, because someone who slips on ice may file a claim against the property owner and the contractor.\n\nPlan for each of these. Talk to crews about winter hours before the season and agree on pay for storm shifts and on-call time. Budget for equipment wear. Get insurance that covers snow and ice work specifically, because a standard lawn policy may not. Ask your agent what is covered and what records they expect you to keep."
      },
      {
        "h2": "Equipment: start with what you have",
        "content": "You do not need a fleet of loaders in your first winter. Many lawn companies start with plows on pickups they already own, a tailgate or V-box spreader, and walk crews with shovels, blowers and bagged ice melt. That is enough for residential driveways and small commercial lots.\n\nBuy or rent bigger equipment as your commercial accounts grow. Price contracts based on the equipment you actually have, not equipment you hope to buy. A lot that a loader with a pusher would clear in 30 minutes might take a pickup 2 hours, and your price needs to reflect that. Our [estimating post](/blog/snow-removal/snow-removal-estimating-software) covers measuring and pricing by equipment.\n\nBe careful with equipment that does double duty. A truck that hauls a mower trailer all summer and carries a plow all winter takes more wear than one that does either job alone. Inspect plow mounts, hydraulics and lights before the season, and keep spare parts like cutting edges, pins and hydraulic hoses on hand. A truck down for a part on a storm night means its route goes to someone else."
      },
      {
        "h2": "Sell to your summer customers first",
        "content": "Your best snow prospects are your lawn customers. Start offering snow in late summer, with your fall cleanup quotes or with the last mowing invoices. Commercial customers who already buy grounds maintenance are strong candidates, since many want one company year round.\n\nKeep a snow properties list for winter routes. When a customer signs, add the property to it with the snow-specific notes: trigger depth, areas covered, where to pile snow, priority level and any hazards. Most of the property information you need is already in the record from summer, so setup is quick."
      },
      {
        "h2": "Switching the schedule for winter",
        "content": "When mowing season ends, the summer recurring services stop and the winter work begins. Snow is different from mowing because it is not on a set day. You decide when to go based on the weather, and the properties you send crews to depend on the storm.\n\nOn a storm night, pull the properties from your snow list, schedule them onto trucks and let auto-routing order the stops. Crews use the same crew app they used all summer, with clock in and out, photos, notes and the product and amount for salt. Customers get the same kinds of alerts, like completed with a photo. The [storm call post](/blog/snow-removal/trigger-based-snow-dispatch-software) covers how to decide when to go."
      },
      {
        "h2": "Billing and records in the same system",
        "content": "Snow contracts can be per push, per event or seasonal. Seasonal contracts can be sold as a package billed monthly through the winter, or prepaid, with prepayments tracked as a ledger. Per-push visits can charge the card on file when the job is completed. Summer and winter work appear in the same customer history and the same payments list.\n\nSalt records, photos and visit times stay with each property, which matters for both billing and claims. At the end of winter, job costing shows what each property earned you, using labor from clock times and materials used. The overview of [snow removal software](/snow-removal-software) shows how winter routes, salt logs and billing connect with the rest of a lawn company's year."
      },
      {
        "h2": "Your first winter: start small",
        "content": "The most common first-winter mistake is signing too much. A lawn company with four trucks signs 80 properties, gets a heavy storm in December, and finds out that 80 properties takes 20 hours, not 8. The crews are exhausted, lots are late, and the next storm is worse.\n\nStart with a number you can clear comfortably within your service window, using the equipment and people you actually have. For many companies, that means mostly residential driveways and a few small commercial lots in the first season. Track everything: time per property, salt per property, clock hours per storm. At the end of winter, you will know your real production rates, which tells you how much to sign next year and at what price. A modest first winter that goes well builds a snow business. An ambitious one that goes badly can cost you summer customers too."
      }
    ],
    "hubSlug": "snow-removal-software",
    "hubKeyword": "snow removal software",
    "industry": "snow-removal"
  }
];

export const hub: HubPageData = {
  "slug": "snow-removal-software",
  "industry": "Snow & Ice Management",
  "isMain": true,
  "h1": "Snow Removal Software for Plow Routes, Salt Records and Storm Billing",
  "subtitle": "Keep a snow properties list, put the right lots on the right trucks when you call a storm, log every salt application, and bill per push or by the season. Built for lawn and landscape companies that plow in winter.",
  "metaTitle": "Snow Removal Software for Plow Routes | IndustryBossPro",
  "metaDesc": "Snow removal software with a snow properties list, storm routes ordered by distance, salt logs per visit, proof of service, and per-push or seasonal billing.",
  "heroPoints": [
    "Pick the storm's properties from your snow list and put them on trucks in one step",
    "Log salt product, amount, area and operator at every visit",
    "Bill per push, per event or by the season, with cards charged automatically"
  ],
  "painPoints": [
    {
      "problem": "Customers call all night asking if you have been there",
      "solution": "When an operator marks a property done, the customer gets a completed alert with the crew's notes and photo, and the office can see completion times for every stop."
    },
    {
      "problem": "No proof when a slip-and-fall claim arrives months later",
      "solution": "Each visit keeps its completion time, photos, salt application record and crew notes on the property, alongside clock times and the crew phone's GPS location."
    },
    {
      "problem": "Salt disappears and never makes it onto invoices",
      "solution": "Operators log the product and amount at each stop. Materials list costs turn that into salt cost per property, and job costing shows the margin."
    }
  ],
  "features": [
    {
      "icon": "❄️",
      "title": "Snow Properties List",
      "desc": "Keep your winter accounts on one list with priority, trigger depth, pile locations and hazards in the property notes. Circle an area on the map to schedule it onto a truck."
    },
    {
      "icon": "🗺️",
      "title": "Storm Routes",
      "desc": "Assign the storm's properties to trucks and let auto-routing order each truck's stops by distance. Move a broken-down truck's stops and customers get a reschedule text."
    },
    {
      "icon": "🧂",
      "title": "Salt Records",
      "desc": "Record product, amount, area treated and operator per property per visit. Print or send the report when an insurer or property manager asks."
    },
    {
      "icon": "📸",
      "title": "Proof of Service",
      "desc": "Photos, notes and completion times from the crew app, plus clock in and out and the crew phone's GPS location during the shift."
    },
    {
      "icon": "💳",
      "title": "Per-Push and Seasonal Billing",
      "desc": "Depth tiers as catalog items, auto-charge when a visit is completed, or seasonal packages billed monthly or prepaid and tracked as a ledger."
    },
    {
      "icon": "📊",
      "title": "Snow Job Costing",
      "desc": "Labor from clock-in times times each operator's pay rate, plus salt used, shows planned versus actual hours and margin per property for the season."
    }
  ],
  "pendingBoard": "Your snow properties sit on the Waiting List until you call a storm. Circle a neighborhood on the map, or select the priority accounts, and schedule them onto a truck in one step. One-time jobs like pile relocation, hauling or a property manager's extra salting request wait on the Pending Jobs board until you assign them.",
  "blogSiloIndustry": "snow-removal",
  "blog1Slug": "snow-removal-software-complete-guide",
  "blog1Title": "Running a Snow Removal Business: Contracts, Storm Nights, Salt and Getting Paid"
};
