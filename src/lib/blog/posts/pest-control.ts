import type { BlogPost } from '../types';
import type { HubPageData } from '../../hub-data';

export const posts: BlogPost[] = [
  {
    "slug": "pest-control-software-complete-guide",
    "title": "Adding Pest Control to a Lawn Company: How the Service Actually Runs",
    "description": "What lawn companies need to know before adding pest control: licensing, the initial plus quarterly model, equipment, records, routing, pricing and re-services.",
    "date": "2026-10-21",
    "readTime": 5,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "Lawn care customers ask about bugs all the time. Ants in the kitchen, spiders on the porch, wasps under the eaves, fleas from the dog. For a lawn company that already holds an applicator license, already runs spray trucks and already has hundreds of homeowners on a schedule, adding perimeter pest control looks like an easy win. It can be, but it is a different service with its own rhythm, its own licensing, its own records and its own customer expectations. This guide walks through how a recurring pest program actually runs, so you can decide whether and how to add it.",
    "sections": [
      {
        "h2": "Licensing comes first",
        "content": "Pest control is regulated separately from lawn care in most states and provinces. A license or certification category that covers turf and ornamental applications usually does not cover structural pest control around and inside homes. Each state sets its own categories, exam requirements, business licensing, insurance requirements and supervision rules for technicians. Check with your state's pesticide regulatory agency before you sell a single service.\n\nPlan for the time this takes. Studying for and passing a structural category exam, getting the business licensed, and making sure your insurance covers pest work can take months. Many lawn companies start by getting one person licensed and having them run the service, then add technicians as the program grows and their own state's rules allow."
      },
      {
        "h2": "The service model: initial plus recurring",
        "content": "Most residential pest control is sold as a recurring plan, not one-time treatments. The usual structure is an initial service (a heavier treatment that knocks down the existing population, often including the interior, eaves, and a thorough exterior barrier) followed by recurring exterior services every quarter or every other month. Between scheduled visits, if pests come back, the customer gets a free re-service.\n\nThis model works because it creates predictable revenue and keeps the barrier in place. It also sets the expectations you have to meet: the customer is paying for \"no bugs,\" not for a number of visits. That is why re-services are part of the price, and why the quality of each visit matters more than speed. The post on [writing pest control service plans](/blog/pest-control/recurring-service-agreements-pest-control-software) covers how to structure the agreement itself."
      },
      {
        "h2": "Equipment and truck setup",
        "content": "Pest control equipment is smaller than lawn equipment. A typical setup is a backpack or small power sprayer for the exterior barrier, a granular spreader for the perimeter band, a duster for cracks and voids, a bait kit, a broom for knocking down webs, and a ladder or pole tools for eaves. Many lawn companies run pest from a smaller truck or a pickup rather than a lawn spray rig.\n\nDecide early whether pest will be its own route or combined with lawn rounds. A lawn tech who also does pest on the same visit saves a drive, but carries more product and needs the right license, and the visit takes longer. A dedicated pest tech running pest-only routes is usually more efficient once you have the density. Both options are covered in more detail later in this series, and the right answer usually changes as the pest side of the business grows."
      },
      {
        "h2": "Records at every stop",
        "content": "Every pest application needs a record: the property, the date, the products, the amounts, where they were applied, the target pests, and who applied them. Your state may require more, such as specific notification to the customer or retention periods. These records matter for regulatory inspections, for customer questions, and for your own protection if something goes wrong.\n\nThe easiest way to keep good records is to make them part of finishing the stop. The technician picks the product or mix used, enters the amount and the area treated, and marks the job done. A chemical report you can print or send gives you the record when you need it, and a chemical email to the customer after each application tells them what was used. The post on [what to log at every stop](/blog/pest-control/inventory-and-chemical-tracking-pest-control-software) has the details."
      },
      {
        "h2": "Pricing a pest program",
        "content": "Pest control is usually priced by the home: size, type of construction, lot size and pest pressure. The initial service is priced higher than a recurring visit because it takes longer and uses more product. A common approach is a set initial price followed by a quarterly price, with one-time treatments priced at a premium so customers are encouraged into the plan.\n\nBecause re-services are included, your price has to cover them. If one in ten quarterly visits leads to a re-service, that cost is spread across every plan. Track your callback rate from the start; it is the most important number in a pest program. The post on [pricing pest control](/blog/pest-control/estimating-and-quoting-in-pest-control-software) walks through an illustrative example."
      },
      {
        "h2": "Selling it to your lawn customers",
        "content": "Your existing lawn customers are the obvious first market. They already trust you, they already pay you, and many have mentioned pests to your techs. A simple offer to your lawn list, with the price of the initial and the quarterly plan and a link to approve, is often enough to start the program. Crews can also note pest issues they see on lawn visits and pass them to the office as leads.\n\nBundling helps both services. A customer with lawn and pest from one company is less likely to leave either. Some companies offer a small discount for customers who take both. Do not oversell before you have capacity, though; a pest program with slow re-services damages your lawn relationships too."
      },
      {
        "h2": "Running both services in one system",
        "content": "Lawn and pest share customers, properties, trucks and records, so it makes sense to run them in one place. In IndustryBossPro, a customer's property can carry a lawn program and a quarterly pest service side by side, each repeating on its own interval, with chemical records kept per application and per property for both. Crews see the property notes (dogs, gate codes, where the hose bib is) on the same app either way.\n\nStart small: one licensed tech, your existing lawn customers, a clear initial and quarterly price, and good records from the first stop. If pest control is the only service you run, PestBossPro (https://pestbosspro.com) is the version built just for it. For a lawn company adding pest, the [pest control software overview](/pest-control-software) shows how the two services fit together."
      }
    ]
  },
  {
    "slug": "scheduling-features-in-pest-control-software",
    "title": "Scheduling Quarterly Pest Service Without Losing Track of Who Is Due",
    "description": "How to schedule recurring pest service: intervals that hold, initial-to-quarterly timing, grouping due stops by area, service windows and interior appointments.",
    "date": "2026-10-21",
    "readTime": 4,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "A quarterly pest program sounds simple. Every customer gets a visit every three months. In practice, with a few hundred customers who signed up on different dates, some on quarterly and some on every-other-month plans, a few needing interior access, and the inevitable rain delays and re-services, the question \"who is due this week?\" gets hard to answer from memory or a spreadsheet. Here is how to set up pest scheduling so the due list is always correct and the routes stay tight.",
    "sections": [
      {
        "h2": "Use intervals, not calendar quarters",
        "content": "There are two ways to schedule quarterly pest service. One is calendar quarters: everyone gets serviced in January, April, July and October. The other is rolling intervals: each customer is due a set number of days after their last visit. Calendar quarters are easy to explain but create a crush at the start of each quarter and a lull in between. Rolling intervals spread the work evenly across the year.\n\nMost growing pest programs use rolling intervals. A recurring service set to repeat roughly every 90 days keeps each customer on their own cycle, and the next due date moves forward from the last completed visit. If a visit runs a week late because of rain, the next one is due 90 days after that, not on a fixed calendar date. Every-other-month plans use the same idea with a 60-day interval."
      },
      {
        "h2": "The initial service and the first follow-up",
        "content": "The first weeks of a new pest customer matter most. The initial service is heavier and often includes the interior. Many companies schedule a follow-up check two to four weeks after the initial, especially for active infestations, before putting the customer on the regular cycle.\n\nBuild that into the setup. When a new customer approves, schedule the initial service as its own job, and set up the recurring service to start after it. If your program includes an early follow-up, schedule it as a separate visit. Customers who see bugs a week after the initial and have to call you to ask for a follow-up are much less likely to stay than customers who were told in advance \"we'll be back in three weeks to check.\""
      },
      {
        "h2": "One list of everyone who is due",
        "content": "The Waiting List is where recurring service earns its keep. Each customer whose next quarterly visit is coming due shows up there, with their address and service. Instead of building a schedule from a spreadsheet, the office looks at who is due and assigns them.\n\nGroup them by area. Circle a neighborhood on the map, select the pest customers who are due there in the next week or two, and schedule them onto one tech's day. A tech who does fourteen pest stops in two adjacent subdivisions gets a lot more done than one who bounces around the county. A small amount of flexibility (servicing someone a few days early to keep the route tight) is usually fine for quarterly pest work, and it beats a long drive. The post on [routing pest stops](/blog/pest-control/dispatch-and-routing-in-pest-control-software) goes further."
      },
      {
        "h2": "Exterior-only service and appointment windows",
        "content": "Most quarterly pest visits are exterior-only, which is a big advantage: the customer does not need to be home. You can schedule them on route days without appointment windows, as long as you can get into the yard. Make sure gate codes, dogs and locked-gate instructions are in the property notes, and send a night-before text so the customer knows to leave the gate open and bring pets in.\n\nInterior services (initial treatments, interior re-services, customers who want interior on every visit) need an appointment because someone has to be home. Schedule those in specific windows and let the rest of the route fill in around them. Customers appreciate a \"you're next\" or on-the-way text for interior appointments so they are not stuck waiting all morning."
      },
      {
        "h2": "Keeping the schedule honest through the year",
        "content": "Rolling intervals spread work evenly in theory, but pest demand is seasonal, and new customers sign up in waves in spring. That means your due list will be heavier in some months. Look ahead on the calendar a few weeks at a time and see whether the due work fits your tech capacity. If it does not, pull some services a little early in the lighter weeks before the crunch.\n\nWatch for customers who fall off. A quarterly customer who was skipped twice and never rescheduled can drift for months. Check the due list for anyone well past their due date, and either schedule them or find out whether they have quietly canceled. When someone does cancel, record the reason. The post on [planning for the pest season](/blog/pest-control/seasonal-demand-planning-with-pest-control-software) covers the yearly demand curve in more detail."
      },
      {
        "h2": "Combining pest with lawn visits",
        "content": "If you also run a lawn program, some customers will have both. You can schedule pest and lawn on the same day when the timing lines up, which saves the drive and lets the customer see you once. But do not force it. Lawn rounds run on their own cycle (often six to eight weeks), and pest on another (often around 90 days). They will line up some of the time.\n\nWhen they do, schedule both services at the same property on the same day for the same truck, if the tech is licensed for both. When they do not, keep them separate. A pest visit pushed three weeks late to match a lawn round is a pest visit that came too late."
      },
      {
        "h2": "Setting it up in the software",
        "content": "In IndustryBossPro, each pest customer gets a recurring service with its own interval (90 days for quarterly, 60 for every other month), the initial service can be scheduled as its own job, and the Waiting List shows everyone coming due. Circle an area on the map, pick who is due, and schedule them onto a truck and day in one step.\n\nCustomers get the night-before text and, if you turn them on, on-the-way and completed alerts. When a visit gets skipped or moved, it stays on the due list until it is done. That is the whole point: nobody has to remember who is due, because the list always knows. The [scheduling features page](/features/field-service-scheduling-software) shows the full flow."
      }
    ]
  },
  {
    "slug": "dispatch-and-routing-in-pest-control-software",
    "title": "Routing Pest Control Stops Alongside Lawn Rounds",
    "description": "How lawn companies route pest stops: pest-only routes vs combined lawn and pest days, route density, stop time per home and fitting in interior visits.",
    "date": "2026-10-21",
    "readTime": 5,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "Pest control is a route business. A quarterly exterior service on a typical home might take 20 to 40 minutes on site, so the drive between stops is a large share of every hour. For a lawn company adding pest, the big routing question is not just the order of stops on a given day; it is whether pest stops should ride along with lawn rounds or run as their own routes. Both work. They work at different stages of growth, and each has traps worth knowing about.",
    "sections": [
      {
        "h2": "What a pest stop really takes",
        "content": "Before you build routes, know your stop time. A quarterly exterior service usually includes walking the perimeter, knocking down webs and wasp nests, treating the foundation and entry points, putting down a granular band, checking bait stations if you use them, and leaving a note or sending a completed alert. An initial service or an interior service takes longer.\n\nMeasure your own times from clock-in and clock-out on each stop. If your average quarterly stop is 30 minutes on site and the average drive is 12 minutes, a tech doing an eight-hour day can handle around 11 stops. Cut the drive to 6 minutes through better density and the same tech gets to about 13. That difference is the margin in a pest program."
      },
      {
        "h2": "Option one: pest rides along with lawn",
        "content": "When you start, you probably have pest customers scattered among your lawn customers and not enough of them for a dedicated route. Having the lawn tech also do the pest service on the same visit makes sense. One truck, one drive, one stop, two services.\n\nThe traps are real, though. The tech needs to be licensed for both categories. The truck needs to carry both lawn products and pest products, kept separate. The stop takes longer, so the lawn route gets shorter. And the timing rarely lines up perfectly: lawn rounds and quarterly pest come due at different intervals. Use it when the timing fits (the pest service is due within a week or two of the lawn round), and schedule pest separately when it does not."
      },
      {
        "h2": "Option two: dedicated pest routes",
        "content": "Once you have enough pest customers in a given area, a dedicated pest tech running pest-only routes is usually more efficient. The truck is set up for pest. The tech gets fast at pest work. The routes are built around pest due dates, not lawn timing. And pest techs can work through the winter, when lawn work slows down, which helps keep your year-round staff busy.\n\nA common path is to start with combined visits, build up pest density in your best neighborhoods, then move those areas to a dedicated route while combined visits continue in the scattered areas. The post on [running pest techs and lawn techs together](/blog/pest-control/managing-multiple-crews-and-routes-pest-control-software) covers the people side of that split."
      },
      {
        "h2": "Building density on purpose",
        "content": "Route density does not just happen; you build it. Pick a service day for each area, and when you sell pest control, focus on neighborhoods you already serve. A pest customer three doors down from four others is worth more than one across town, even at the same price. Your lawn customers are the best place to start, since they are already on your routes.\n\nWhen you schedule, pull from the Waiting List by area. Circle a neighborhood on the map, select the pest customers who are due there in the next week or two, and put them on one tech's day. With quarterly service, a few days early or late is usually fine, and it is much better than a 20-minute drive for one stop."
      },
      {
        "h2": "Ordering the day",
        "content": "Once a tech's stops for the day are set, auto-routing that orders them by distance gives a good starting sequence in seconds. Then adjust for the things the map does not know. Interior appointments need to be at their scheduled time. Commercial accounts (restaurants, offices) may need early morning or after-hours visits. Customers with dogs may need you before or after a certain time.\n\nPut those constraints in the property notes so the tech sees them at each stop: \"Dog out until 10 a.m., service after,\" \"Interior, customer works from home, call when 15 minutes out.\" The [route optimization features](/features/service-route-optimization-software) page shows how ordering and property notes come together on the crew app."
      },
      {
        "h2": "Handling the unexpected during the day",
        "content": "Pest routes get interrupted. A re-service request comes in at 10 a.m. A customer cancels an interior appointment. A gate is locked. The tech needs a way to skip a stop with a reason, and the office needs to see it and reschedule. Skipped stops should go back on the list automatically so they are not forgotten.\n\nRe-services are the main interruption. Customers who call about ants in the kitchen want someone soon. Where you can, add the re-service to the route of the tech who is already in that area that day or the next, rather than sending someone across town. The post on [handling re-services and rain days](/blog/pest-control/automated-rescheduling-pest-control-scheduling-software) covers this in detail."
      },
      {
        "h2": "Putting the routes in the software",
        "content": "In IndustryBossPro, pest and lawn services live on the same property, each with its own interval, so you can see when both are due and decide whether to combine them. The Waiting List shows who is due, you circle an area to schedule them, and auto-routing orders the day by distance. The tech's phone shows the route in order with property notes, a time clock, chemical record entry and done or skip buttons.\n\nThe GPS location of the crew phone during the day lets the office see where techs are when a re-service comes in. Whatever tools you use, the principles are the same: measure your stop times, build density on purpose, and decide when pest earns its own route.\n\nOne last habit worth building: review each tech's routes once a month. Look at total drive time, average stops per day, and which stops keep getting skipped or pushed. A route that consistently ends late, or a tech who always finishes early, is telling you the work is unevenly split. Moving a dozen customers from one route to another in the slow season is easy; doing it in the middle of May is not."
      }
    ]
  },
  {
    "slug": "estimating-and-quoting-in-pest-control-software",
    "title": "How to Price Pest Control: Initial Service, Quarterly Plans and One-Time Jobs",
    "description": "A practical way to price residential pest control: initial service cost, quarterly plan pricing, one-time treatment premiums, re-service cost and home size.",
    "date": "2026-10-21",
    "readTime": 5,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "Pricing pest control is different from pricing lawn care. Lawn rounds are priced mostly by square footage. Pest control is priced by the home and the risk: size, construction, pest pressure, and how often the customer is likely to call you back. You also have to price in a service you have not delivered yet, because a recurring plan includes free re-services between visits. Get the pricing right and a pest program is steady, profitable recurring revenue. Get it wrong and every callback eats the margin.",
    "sections": [
      {
        "h2": "Start with your cost per stop",
        "content": "Before you set prices, work out what a quarterly stop costs you. Here is an illustrative example. A licensed tech costs you $32 an hour loaded (wages, payroll taxes, insurance). The average quarterly stop takes 30 minutes on site plus 10 minutes of drive, so about two-thirds of an hour, or roughly $21 in labor. Product for a typical exterior service might be a few dollars to ten dollars, depending on what you use. Add truck costs (fuel, insurance, wear) per stop, and overhead (office, software, licensing, marketing) spread across all stops.\n\nYour numbers will be different, but the exercise matters. If your all-in cost for a quarterly stop is around $45 and you are charging $55, the margin will not survive the callbacks. Clock-in and clock-out times and the product amounts your techs record give you real numbers to work from instead of guesses."
      },
      {
        "h2": "Price in the re-services",
        "content": "A recurring plan usually includes free re-services: if pests come back between visits, you go back at no charge. That cost has to be in the plan price. Say one in eight quarterly customers needs one re-service per quarter. That is an extra stop for every eight scheduled stops, so add roughly an eighth of your stop cost to each plan visit.\n\nYour callback rate will depend on your area, the pests, the time of year and the quality of your work. Track it from the first month. If your callback rate rises, either your service needs work or your price needs to go up. The post on [whether pest control is making you money](/blog/pest-control/job-costing-in-pest-control-software) covers how to track the cost of re-services."
      },
      {
        "h2": "The initial service",
        "content": "The initial service is the first visit, and it is heavier: more time, more product, often the interior, thorough treatment of an existing infestation. It is priced higher than a recurring visit to cover that. Some companies charge a set initial fee; others price it as a multiple of the quarterly price.\n\nThe initial price is also a sales tool. A high initial price discourages signups; a low one invites customers who cancel after the first quarter. Some companies reduce or waive the initial fee in exchange for a commitment to a year of service. If you do that, make sure your agreement and your billing actually hold the customer to it, or you will do the expensive first visit for customers who leave in three months."
      },
      {
        "h2": "Adjusting for the home",
        "content": "Homes are not all the same. Bigger homes take longer to treat. Homes with crawl spaces, a lot of landscaping against the foundation, woodpiles, or near water and woods usually have more pest pressure. Older homes have more entry points. A practical approach is a base price for a typical home in your area, with adjustments for size bands and known pressure factors.\n\nYou can measure lot size on a satellite map for a quick read on property size, but the house square footage and the perimeter are what drive pest time. Ask at signup or look it up from public records. Keep the price bands simple enough that anyone in the office can quote them consistently."
      },
      {
        "h2": "One-time treatments",
        "content": "Some customers want a one-time treatment: a wasp nest, an ant problem before a party, fleas after the dog came home from the kennel. One-time jobs should be priced at a premium over the plan price, because they come with the cost of a new customer setup, there is no recurring revenue to spread costs over, and customers often expect a guarantee anyway.\n\nPricing one-time service noticeably higher than the first visit of a plan does two things: it covers the real cost, and it nudges customers toward the plan, which is better for both of you. Make the comparison explicit on the estimate: \"One-time treatment, or start a quarterly plan for less up front, with free re-services between visits.\""
      },
      {
        "h2": "Building and sending the estimate",
        "content": "A pest estimate should be short and clear: the initial service price, the recurring price and frequency, what is included (exterior barrier, eaves, entry points, granular band, free re-services between visits), what is not (termites, bed bugs, wildlife, whatever you do not cover), and how billing works.\n\nBuild estimate templates for your common plans so every quote is consistent. Send it by email or text so the customer can approve it online, with three automatic follow-ups if they do not answer. Once approved, the estimate converts into scheduled work: the initial service as a job and the recurring service on its interval. The [estimates and quoting features](/features/field-service-estimates-quoting) page shows the flow. A lawn tech who notices a pest problem can even write and send a pest estimate from the crew app, if you allow it for that employee."
      },
      {
        "h2": "Reviewing prices once a year",
        "content": "Look at your pest pricing every year against your actual costs. Labor costs go up, product costs change, and your callback rate tells you whether your service is holding. Raise prices modestly each year rather than dramatically every few years; small annual increases with a short explanation rarely cause cancellations.\n\nIn IndustryBossPro, the job costing report shows labor from clock-in times and product usage per stop against what you charged, which is the information you need for this review. Price from your real costs, include the re-services, and keep the plan more attractive than one-time work.\n\nWhen you do raise prices, tell customers ahead of the next billing cycle rather than letting a bigger charge show up on their card unannounced. A short note that explains the increase and reminds them what the plan includes (the quarterly visits, the free re-services, the records you keep) goes a long way. How the plan is written and billed is covered in [writing pest control service plans](/blog/pest-control/recurring-service-agreements-pest-control-software)."
      }
    ]
  },
  {
    "slug": "inventory-and-chemical-tracking-pest-control-software",
    "title": "Pest Control Application Records: What to Log at Every Stop",
    "description": "What a pest application record should include, how to capture it on the phone at each stop, using product mixes, customer notices and pulling state reports.",
    "date": "2026-10-21",
    "readTime": 4,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "In pest control, the paperwork is part of the service. Every application of a pesticide around someone's home creates a record you may need to produce for a state inspector, a worried customer, or your insurance company. Lawn companies already keep application records for turf work, so the habit is familiar, but structural pest work brings different products, different application sites and often different rules. This post covers what to record, how to make recording fast enough that techs actually do it, and how to get the records back out when someone asks.",
    "sections": [
      {
        "h2": "What a complete record contains",
        "content": "Requirements vary by state and province, so start by reading your own regulator's record-keeping rules. That said, a good application record generally includes the customer's name and service address, the date (and often the time), the product name and its registration information, the amount of product or finished mix applied, the concentration or rate, where it was applied (foundation perimeter, eaves, interior baseboards, crawl space, bait stations), the target pests, and the name and license number of the applicator.\n\nSome states also expect weather conditions for outdoor applications, the total area treated, or specific notices given to the customer. Find out how long you have to keep records; it is often several years. If you are unsure about any detail, ask your state's pesticide agency rather than guessing. Being able to produce a complete record quickly is one of the simplest ways to look professional during an inspection."
      },
      {
        "h2": "Set up your products and mixes once",
        "content": "The fastest way to get accurate records is to stop typing product names in the field. Set up every product you use in the system once, with its name and registration details, and set up your standard mixes. A mix is a tank recipe: for example, a particular insecticide at a set rate per gallon of water, sometimes combined with a second product. When the tech selects the mix, the record knows what went into it.\n\nThis also prevents mistakes. A tech choosing \"Perimeter mix\" from a list cannot misspell the product or forget the rate. When you change products (a new formulation, a supplier switch), update the product list and the mixes, and every record from then on is correct."
      },
      {
        "h2": "Capture it at the stop, not at the end of the day",
        "content": "Records written at the end of the day from memory are the ones that get inspectors' attention. Records captured at the stop, on the phone, are more accurate and take less time. On the crew app, the tech finishes the service, picks the product or mix used, enters the amount and the area treated, and marks the stop done. The applicator name comes from whoever is logged in.\n\nMake it part of the routine. If a stop cannot be marked done without the product record, the record gets entered. Photos of bait station placements or problem areas can be added to the visit notes too. The post on [running pest techs and lawn techs together](/blog/pest-control/managing-multiple-crews-and-routes-pest-control-software) covers making sure the right licensed person is the one recorded."
      },
      {
        "h2": "Telling the customer what was applied",
        "content": "Many customers want to know what was used around their home, especially if they have children or pets. Some states require you to give the customer certain information after an application. Even where it is not required, sending a short notice is good service.\n\nA chemical email to the customer after each application lists the products used, with whatever information you include in the template (precautions, how long to keep pets off treated areas, a contact for questions). Combined with a completed alert that has the tech's notes (\"Treated foundation and entry points, removed two wasp nests under the back eave\"), the customer knows exactly what happened. Customers who feel informed call less and complain less."
      },
      {
        "h2": "Pulling reports when someone asks",
        "content": "Eventually someone will ask for your records: an inspector, a customer, an insurance adjuster, sometimes a neighbor who is worried about drift. You need to be able to pull every application at a specific address, or every application of a specific product in a date range, quickly.\n\nA chemical report you can print or send, filtered by property, product, date range or applicator, answers those requests in minutes. Run it occasionally even when nobody asks, as a spot check. If records are missing amounts or areas, that is a training issue to fix now, not during an inspection. The [reporting features](/features/field-service-reporting-analytics) page covers the reports."
      },
      {
        "h2": "Product usage is also a cost number",
        "content": "Application records are not just compliance. The amounts your techs record are the product cost of each stop. If one tech uses twice as much perimeter mix per house as the others, that is either a training issue or a sign they are getting larger homes, and it shows up in your cost per stop.\n\nPut your product costs in the materials list so the product used on each job carries a cost. Then job costing shows labor plus product per stop against what you charged. The post on [whether pest control is making you money](/blog/pest-control/job-costing-in-pest-control-software) goes through it. You do not need a warehouse inventory count to manage product cost; accurate usage records per stop, compared against what you buy, tell you most of what you need to know."
      },
      {
        "h2": "Lawn and pest records in the same place",
        "content": "If you run both lawn and pest, keep the records in the same system, per property. When a customer asks what was applied to their property this year, you can show both the lawn rounds and the pest services. When an inspector visits, all records come from one place.\n\nIn IndustryBossPro, products and mixes are set up once, techs record the product, amount, area treated and applicator from the crew app at each stop, chemical emails can go to the customer after each application, and the chemical report pulls everything for a property, product or date range. Whatever you use, test it by pulling a full year of records for one address. If it takes more than a couple of minutes, fix the process before an inspector asks."
      }
    ]
  },
  {
    "slug": "job-costing-in-pest-control-software",
    "title": "Is Pest Control Making You Money? Costing a Quarterly Stop",
    "description": "How to find the real cost of a quarterly pest stop: labor from clock times, drive time, product used, re-service costs and comparing margin by route and plan.",
    "date": "2026-10-21",
    "readTime": 5,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "Pest control plans often look very profitable on paper. A quarterly price that is several times the product cost, a 30-minute stop, recurring revenue. But the real cost includes things that do not show up on any single invoice: the drive between scattered stops, the free re-services, the initial service that cost more than you charged, the customer who cancels after the first quarter. Job costing a pest program means looking at the cost per stop and the cost per customer over time, not just the price on the plan.",
    "sections": [
      {
        "h2": "Labor: the biggest cost by far",
        "content": "Labor is usually the largest cost in a pest stop. Your tech's time on site, plus the drive to get there, multiplied by their loaded pay rate. Pay rate alone is not enough; add payroll taxes, workers' comp, and benefits if you offer them. A tech paid $22 an hour may cost you $28 or more loaded.\n\nGet real times. Clock-in and clock-out on each stop, from the crew app, tell you exactly how long each service took. Over a few weeks, you will see the average stop time, the spread between techs, and the stops that always take long (the big lot, the customer who wants to talk, the house with the overgrown foundation plantings). Each worker's pay rate times their actual hours gives you labor per stop."
      },
      {
        "h2": "Drive time is a hidden cost",
        "content": "A pest stop does not just take 30 minutes on site. It takes the drive from the last stop too. If your routes are spread out, drive time can be a third of the tech's day. That cost belongs to the stops, even though no customer sees it.\n\nYou can spread drive time across stops as overhead, or look at it by route. Either way, compare routes: a dense route where stops are 5 minutes apart is far more profitable than a scattered one where they are 15 minutes apart, at the same prices. That is the case for building density, covered in the post on [routing pest stops alongside lawn rounds](/blog/pest-control/dispatch-and-routing-in-pest-control-software)."
      },
      {
        "h2": "Product cost per stop",
        "content": "Product cost per stop is usually small compared to labor, but it adds up across thousands of stops a year, and it varies a lot by product and technique. The amounts your techs record on each application, multiplied by your product costs from the materials list, give you product cost per stop.\n\nCompare techs. If one uses noticeably more product per house, find out why. It may be the right call (bigger homes, heavier pressure), or it may be over-application, which is a cost problem and possibly a label compliance problem. Product usage that is too low can mean a tech is rushing, which tends to show up later as callbacks."
      },
      {
        "h2": "The cost of re-services",
        "content": "Free re-services are part of the plan, which means they are part of the cost. Each re-service is a stop with labor, drive and product, and no revenue. Track every re-service as its own job, tied to the customer and the original visit, with a zero price. Then you can count them.\n\nLook at your callback rate (re-services as a share of scheduled stops) by tech, by area, by pest and by time of year. A tech whose customers call back twice as often as everyone else's needs coaching. A neighborhood near woods or water may need a higher price. Spring ant season may always bring callbacks. Knowing where re-services come from is the most useful job costing number in pest control."
      },
      {
        "h2": "Looking at the customer over time",
        "content": "A pest customer is not one stop. It is an initial service, a series of quarterly visits, some re-services, and eventually a cancellation. The real profitability is over the life of the customer. If the initial costs more than you charge and the customer cancels after two quarterly visits, that customer may have lost money.\n\nLook at your initial services in the job costing report. If they always cost more than they bring in, you are betting on retention to make it back. That is fine if customers stay, but track your cancellations and their reasons. Customers who leave in the first six months often tell you why, and it is usually about results, communication or price. The post on [writing service plans customers keep renewing](/blog/pest-control/recurring-service-agreements-pest-control-software) covers retention."
      },
      {
        "h2": "Margin by plan and by route",
        "content": "Once you have labor, product and re-services per stop, you can compare. Which plan is most profitable: quarterly, every other month, or monthly for commercial accounts? Which routes make the most money per hour? Which one-time treatments are worth offering?\n\nHere is an illustrative example. A quarterly plan priced at $120 per visit, with $28 of labor (on site plus drive), $8 of product, and a re-service cost spread across visits of about $5, has a direct margin of about $79 per visit before overhead. The same plan on a scattered route, with twice the drive time, might drop to $65. Your numbers will vary; the comparison is what matters.\n\nCommercial accounts deserve their own look. A restaurant on monthly service may need early morning visits, more interior work and more detailed records, all of which add time. Price them from their real stop times rather than scaling up a residential price, and check them in the job costing report every few months. A commercial account that looks large on the revenue report can turn out to be one of the thinnest margins on the route."
      },
      {
        "h2": "Making it routine",
        "content": "Pest job costing works best as a monthly review, not a one-time project. Pull the job costing report, look at average cost per stop, callback rate, margin by route, and any stops that ran long. Take action on one or two things each month: a route to tighten, a tech to coach, a price to adjust.\n\nIn IndustryBossPro, labor comes from the crew's clock-in times times each worker's pay rate, product comes from what techs record on each application, and the job costing report shows profit and margin per job alongside planned versus actual hours. The [reporting and analytics features](/features/field-service-reporting-analytics) page shows the reports. A pest program that is reviewed monthly gets more profitable every year. One that is never reviewed usually drifts the other way."
      }
    ]
  },
  {
    "slug": "recurring-service-agreements-pest-control-software",
    "title": "Writing Pest Control Service Plans Customers Keep Renewing",
    "description": "How to structure home pest plans: what is covered, the re-service promise, visit frequency, per-visit, monthly or prepaid billing, autopay, cancellations.",
    "date": "2026-10-21",
    "readTime": 4,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "A pest control customer is valuable because they stay. A quarterly customer who renews for years is worth many times the first visit. Most cancellations come back to a handful of causes: the customer did not understand what they were paying for, they did not see results, they did not hear from you, or the billing annoyed them. A well-written service plan heads off most of those before they happen. Here is how to structure the plan, the billing and the communication so customers keep renewing.",
    "sections": [
      {
        "h2": "Say exactly what the plan covers",
        "content": "Customers buy \"no bugs.\" Your plan has to say what that means in practice. List the pests covered (ants, spiders, roaches, crickets, earwigs, silverfish, wasps and so on, depending on your area and your license), what the regular service includes (exterior perimeter treatment, eaves and entry points, granular band, web removal), and what is not included. Termites, bed bugs, wildlife, mosquitoes and rodents are commonly excluded or sold separately, but decide for your own business.\n\nBe clear about the interior. Is interior service included on request, on every visit, or only at the initial? Customers who expect interior service and do not get it feel cheated, even if the plan never promised it."
      },
      {
        "h2": "The re-service promise",
        "content": "The re-service promise is the heart of a pest plan. If pests come back between scheduled visits, you come back at no charge. Spell out how it works: how to request one (call, text or reply to an alert), how quickly you typically respond, and any conditions (for example, the customer has to be on their regular schedule and current on payments).\n\nMake it easy to use. A customer who has to argue to get a re-service will cancel. A customer who texts \"seeing ants in the kitchen again\" and gets a visit within a couple of days stays. If you offer two-way texting, customers can reply right to their service alerts. The post on [handling re-services and rain days](/blog/pest-control/automated-rescheduling-pest-control-scheduling-software) covers the scheduling side."
      },
      {
        "h2": "Frequency and the first year",
        "content": "Most residential plans are quarterly, some every other month, and commercial accounts like restaurants are often monthly. Pick a default and offer alternatives for higher-pressure situations. Many companies include an initial service plus a follow-up check in the first month, then the regular cycle.\n\nBe clear about the term. Some plans are month to month; others ask for a 12-month commitment, often in exchange for a lower or waived initial fee. If you require a commitment, say what happens if the customer cancels early (for example, they pay the difference on the initial). The customer's online approval of an estimate that includes the terms is your record of what they agreed to, so put the terms in the estimate itself."
      },
      {
        "h2": "Billing options that fit the customer",
        "content": "There are three common ways to bill a pest plan. Per visit: the customer is charged after each quarterly service. Monthly: the annual price is split into twelve equal payments, so a quarterly plan at $480 a year becomes $40 a month. Prepaid: the customer pays for the year up front, often with a small discount.\n\nMonthly billing smooths cash flow for you and makes the plan feel more affordable. Per-visit billing is simplest to explain. Prepaid is great for cash flow but requires tracking: a prepayment ledger shows how much of the customer's payment has been used by completed visits and how much remains, which matters if they cancel mid-year. Offer what fits your customers; many companies offer per-visit and monthly, and prepaid on request."
      },
      {
        "h2": "Autopay and card on file",
        "content": "Pest plans should be on autopay. Chasing a $40 to $150 invoice from hundreds of customers every quarter is expensive and annoying for everyone. Ask for a card at signup. Charge it automatically when the visit is completed, or on the monthly billing date.\n\nCards decline and expire. Make sure the office gets an alert when a stored card declines, and the customer gets automatic payment reminders. Three automatic payment follow-ups usually resolve it before anyone has to call. A customer who has fallen behind on payments should not quietly keep getting service for months; decide on a policy and apply it consistently. The [payment processing features](/features/field-service-payment-processing) page covers how cards on file and auto-charge work."
      },
      {
        "h2": "Communication between visits",
        "content": "Quarterly customers see you four times a year, often when they are not home. If they never hear from you, they start to wonder what they are paying for. Every visit should come with a night-before text, and a completed alert with the tech's notes and photos (\"Treated the perimeter, removed a wasp nest under the back deck, put fresh bait in the garage station\"). A chemical email lists what was applied.\n\nThese messages are the product, as far as the customer can see. A customer who reads \"removed wasp nest\" understands why they are paying. A review request after a good service, sent automatically, also helps you grow.\n\nBetween visits, an occasional seasonal message helps too. A short note in early spring (\"Ant season is starting, your next service is scheduled for April, reply if you see activity before then\") reminds the customer that the plan is working for them even when nobody is in the yard. Keep these rare and useful. One relevant message a season builds trust; a monthly sales text wears it down."
      },
      {
        "h2": "Tracking cancellations and renewals",
        "content": "Some customers will cancel. Record a cancellation reason every time: moved, price, did not see results, switched companies, doing it themselves, no longer needed. After a year, the reasons tell you what to fix. If \"did not see results\" is the top reason, look at your service and your callback handling. If it is price, look at your pricing and your communication about value.\n\nBefore an annual price increase, check your retention numbers. In IndustryBossPro, each customer's recurring service carries its interval and billing (per visit, monthly or prepaid with the ledger tracked), cards are charged automatically, alerts go out after each visit, and cancellation reasons are recorded on the client. The [service contract management features](/features/service-contract-management-software) page covers the setup."
      }
    ]
  },
  {
    "slug": "managing-multiple-crews-and-routes-pest-control-software",
    "title": "Running Pest Techs and Lawn Techs Without Tripping Over Each Other",
    "description": "How lawn companies staff pest control: licensing by tech, truck setup, assigning work by license, cross-training, crew notes and the right applicator on record.",
    "date": "2026-10-21",
    "readTime": 5,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "When a lawn company adds pest control, the first tech usually does both: lawn rounds in the morning, pest stops in the afternoon. That works for a while. Then the pest side grows, a second and third tech get involved, and the questions multiply. Who is licensed to do what? Whose truck carries the pest products? Who handles the re-service that came in today? Which applicator goes on the record? Here is how to organize people, trucks and work so lawn and pest run side by side without confusion.",
    "sections": [
      {
        "h2": "Licensing decides who can do what",
        "content": "Start with your licenses. In most places, the categories that cover lawn and ornamental applications are different from the ones that cover structural pest control. Each state sets its own rules on who must be certified, who can work under supervision, and what the supervision requires. Write down, for each employee, what they are licensed or registered to do, and keep the expiration dates where you will see them.\n\nThat list is your scheduling rule book. A lawn tech who is not licensed for pest should never be assigned a pest stop, even if they are right next door. If your state allows unlicensed technicians to work under a certified applicator's supervision, understand exactly what that requires before relying on it. When in doubt, check with your regulator."
      },
      {
        "h2": "Truck setup and product separation",
        "content": "Pest and lawn products are different and should be kept organized and separated on the truck. A combined truck carrying both needs clear storage, secured containers and the right labels and safety equipment for everything on board. Many companies find it simpler to have dedicated pest trucks (often smaller vehicles) and dedicated lawn trucks once the pest side has enough volume.\n\nAssign trucks in the schedule so each day's work goes to a truck that is set up for it. If Truck 4 is the pest truck, pest stops go to Truck 4 and its tech. If a combined truck is running a lawn round and has pest stops in the same neighborhood, they can be added to that truck's day, as long as the tech is licensed and the truck is equipped."
      },
      {
        "h2": "Assigning work by service and license",
        "content": "With more than one tech, decide how work is divided. Common setups: dedicated pest techs who run pest-only routes and handle all re-services; lawn techs who also do pest on combined visits; or a mix where pest-only routes run in dense areas and combined visits handle scattered customers.\n\nWhatever the setup, assign each job to a specific truck and tech, not just a day. The office should see at a glance who is doing what. A calendar view across trucks shows whether the pest tech is overloaded this week while a licensed lawn tech has room. The post on [scheduling quarterly pest service](/blog/pest-control/scheduling-features-in-pest-control-software) covers how the due list feeds those assignments."
      },
      {
        "h2": "Cross-training for the seasons",
        "content": "Lawn and pest have different seasonal peaks, which is an advantage if you plan for it. Lawn work is heaviest in spring and early summer and slows down in late fall and winter. Pest work runs year-round in many climates, peaks in spring and summer, and shifts to interior and rodent work in cold weather.\n\nCross-training your lawn techs on pest (and getting them licensed) gives you year-round work for good employees and extra pest capacity in spring when ant and wasp calls spike. A lawn tech who can run pest stops in November is a lawn tech you do not lose to another company over the winter. The post on [planning for the pest season](/blog/pest-control/seasonal-demand-planning-with-pest-control-software) covers the yearly curve."
      },
      {
        "h2": "What every tech sees on the phone",
        "content": "Each tech's crew app should show the day's stops in order, with navigation and the property notes: gate codes, dogs, where the hose bib is, which side of the house the bait stations are on, \"customer is allergic, call before interior.\" Notes written by one tech are visible to the next one who visits, which matters when stops rotate between techs.\n\nAt each stop, the tech clocks in and out, records the products used, takes photos and notes, and marks the stop done or skips it with a reason. Crew notes to the office (\"customer asked about mosquito service,\" \"heavy ant activity on the north side, may need a re-service\") flow back so the office can act on them. The [mobile app features](/features/field-service-mobile-app) page shows the crew view."
      },
      {
        "h2": "The right applicator on the record",
        "content": "Application records need the name (and often license number) of the person who actually made the application. When techs share trucks or swap stops, this is where mistakes happen. The simplest rule: each tech logs in to the crew app as themselves, and records are made under their login. No shared logins, no recording for someone else.\n\nSpot check records against the schedule. If a pest application shows a lawn tech who is not licensed for pest, that is a problem to fix immediately. The post on [what to log at every stop](/blog/pest-control/inventory-and-chemical-tracking-pest-control-software) covers the full record."
      },
      {
        "h2": "Seeing the whole operation",
        "content": "With several techs running both services, the owner needs a way to see the day without making phone calls. The GPS location of each crew phone during the day shows where techs are, which is useful when a re-service comes in and you want to send whoever is closest. The employee hours report shows how time is split between lawn and pest work.\n\nIn IndustryBossPro, each job goes to a specific truck, each tech logs in as themselves on the crew app, application records are made under that login, and the office sees routes, progress and crew notes as the day goes on. Keep the license list current, assign by license, and the two services will run side by side without stepping on each other.\n\nOne more thing to settle early is who answers the pest questions. Lawn customers will start asking your lawn techs about bugs as soon as they know you offer pest control. Give every tech a simple script: note the question, tell the customer the office will follow up, and send a crew note. A licensed pest tech or the office then makes the call or sends an estimate. That keeps unlicensed techs from giving treatment advice, and it turns every question into a lead someone actually follows up on."
      }
    ]
  },
  {
    "slug": "seasonal-demand-planning-with-pest-control-software",
    "title": "Planning for the Pest Season: Spring Surge, Summer Peaks and the Winter Lull",
    "description": "A season-by-season plan for pest programs run by lawn companies: spring ant calls, summer wasps, fall invaders, winter interior work and staffing the swings.",
    "date": "2026-10-21",
    "readTime": 4,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "Pest control demand follows the weather. Calls start when the ground warms up, climb through spring and early summer, stay busy through the hot months, shift in the fall as pests move indoors, and drop off in winter in colder climates. For a lawn company running pest control, that curve overlaps with the lawn season in some months and fills the gaps in others. Planning for it means knowing what each season brings, selling at the right time, and having the people ready before the phones start ringing.",
    "sections": [
      {
        "h2": "Late winter: get ready before the first warm week",
        "content": "The weeks before spring are when the pest year is set up. Review last year's callback rate and cancellation reasons, update prices, refresh your product list and mixes if anything is changing, and confirm every tech's license is current. If you plan to add a pest tech or cross-train a lawn tech, do it now; studying and licensing take time, and you want them ready before the spring rush, not in the middle of it.\n\nThis is also the time to look at your recurring customers' due dates. If you run rolling quarterly intervals, see how many services will come due in each week of spring. If one week is overloaded, pull some services a little early into the quieter weeks before it."
      },
      {
        "h2": "Spring: ants, wasps and new signups",
        "content": "In many regions, the first warm stretch brings ants indoors, wasps building nests, and spiders everywhere. It also brings new customers. People who were never bothered by bugs in winter suddenly want a plan. And it brings re-service calls from existing customers, because pest pressure is rising faster than the last treatment can hold.\n\nPlan for both. Have a clear offer ready for new customers (initial service plus quarterly plan, with an online estimate they can approve), and sell it to your lawn customers first, since your techs are already on their properties. A spring message to your lawn list offering pest control, with a link to approve, is often the biggest sales push of the year. Leave room in the schedule for re-services; spring callbacks are normal, and fast response keeps new customers from canceling. The post on [handling re-services and rain days](/blog/pest-control/automated-rescheduling-pest-control-scheduling-software) covers how to fit them in."
      },
      {
        "h2": "Summer: peak pressure and peak lawn workload",
        "content": "Summer brings heavy pest pressure in most climates: ants, wasps and hornets, fleas and ticks, and in some areas mosquitoes if you offer that service. It also brings the peak of the lawn season, which means your cross-trained lawn techs may not have time for pest stops. That is where dedicated pest techs earn their keep.\n\nWatch your schedule closely in summer. If quarterly services are piling up because techs are busy with re-services and new initials, they will drift late, and late services lead to more callbacks. The Waiting List shows who is due and who is overdue; check it weekly and schedule the overdue first. Summer is also a good time to sell add-ons to existing pest customers who are seeing new problems, through an upsell alert or a note from the tech."
      },
      {
        "h2": "Fall: occasional invaders and rodents",
        "content": "As temperatures drop, pests start moving indoors. Depending on your region, that might mean stink bugs, boxelder bugs, crickets, spiders, and the start of rodent season. The fall quarterly service is a good time to focus on sealing entry points and treating around windows, doors and the foundation.\n\nFall is also when you renew. Customers who had a good year are most likely to stay if you remind them of what you did. If you offer prepaid annual plans, fall and early winter are good times to offer the next year's prepayment, often with a small discount. And your lawn season is winding down, which frees up cross-trained techs for pest work."
      },
      {
        "h2": "Winter: interior work and keeping people busy",
        "content": "In cold climates, exterior pest activity drops off in winter. Many companies keep quarterly service going year-round, with winter visits focused on interior inspection, rodent work and checking bait stations. Some skip a winter exterior visit and adjust the interval. In warmer climates, pest work continues more or less normally through the winter.\n\nWinter is a real advantage for a lawn company with pest control. Your lawn techs who are licensed for pest can keep working through the months when lawn work stops. That keeps good employees on the payroll and away from competitors. If your company also runs snow work, keep the snow properties list separate from pest routes so each service has its own schedule. The post on [running pest techs and lawn techs together](/blog/pest-control/managing-multiple-crews-and-routes-pest-control-software) covers the staffing side."
      },
      {
        "h2": "Staffing and capacity for the swings",
        "content": "The pest year has peaks and valleys, and so does the lawn year, but they are not identical. The best way to plan is to look at last year's numbers: when did stops per week peak, when did callbacks spike, and when did techs run overtime? The employee hours report and the schedule history answer those questions better than memory.\n\nBuild your staffing plan around those peaks. If spring needs one more pest tech's worth of capacity for eight weeks, a cross-trained lawn tech may cover it. If summer needs a dedicated pest tech while lawn techs are maxed out, hire before you need them. And if winter has more pest work than lawn work, shift people accordingly."
      },
      {
        "h2": "Keeping the year visible",
        "content": "A calendar view that shows pest services across the next several weeks, by truck, tells you whether you can take on more customers or need to slow sales down. Pair it with the Waiting List of services coming due, and you can see the load before it arrives.\n\nIn IndustryBossPro, pest customers sit on their own recurring intervals, the Waiting List shows who is due and overdue, and the calendar shows each truck's load. Combined with the lawn program on the same properties, you can see both seasons on one screen. The [scheduling features page](/features/field-service-scheduling-software) shows how. Plan the year in February, check it every month, and the spring rush becomes a busy season instead of a crisis."
      }
    ]
  },
  {
    "slug": "automated-rescheduling-pest-control-scheduling-software",
    "title": "Handling Re-Services and Rain Days on a Pest Control Route",
    "description": "How pest programs handle callbacks and weather: fast re-services, tracking callback causes, moving a rained-out day, telling customers, keeping intervals.",
    "date": "2026-10-21",
    "readTime": 5,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "Two things knock a pest route off its plan more than anything else: customers calling because bugs are back, and weather that makes exterior treatment a bad idea. Neither is unusual. Re-services are a promise built into every pest plan, and rain is a fact of life for anyone working outdoors. The companies that handle them well have a routine for both, so a callback or a storm is just a small adjustment, not a scramble. Here is how to set up that routine.",
    "sections": [
      {
        "h2": "Re-services are part of the product",
        "content": "Most pest plans include free re-services between scheduled visits. That promise is a big part of why customers sign up. It also means callbacks are going to happen, and how fast and how well you handle them decides whether customers stay.\n\nTreat every re-service as a real job. When a customer calls or texts, create a re-service job on their property, at no charge, linked to the most recent visit. Note what they are seeing and where (\"ants along the kitchen counter, near the back door\"). That note helps the tech, and over time it tells you which pests and situations cause the most callbacks."
      },
      {
        "h2": "Get to callbacks fast",
        "content": "Response time is what customers judge you on. A customer who sees ants in the kitchen and waits a week for someone to come out is a customer who starts looking at your competitors. Aim to handle re-services within a couple of business days, faster for wasps near a door or anything that bothers a customer with kids.\n\nFit them into existing routes. The re-service goes onto the Pending Jobs board, and the office adds it to the day of the tech who is already working in that area. With the GPS location of crew phones, you can see who is nearby. Auto-routing then puts it in a sensible spot in the day. The [Pending Jobs board](/features/pending-job-board-software) page shows how one-off jobs sit alongside the recurring schedule."
      },
      {
        "h2": "Track why callbacks happen",
        "content": "Every re-service tells you something. Record the pest, the area of the home, the tech who did the last service, and how long it had been since that visit. After a few months, patterns appear: certain pests in certain seasons, certain neighborhoods near woods or water, certain techs whose customers call back more often.\n\nUse the patterns. A tech with a high callback rate may need retraining on technique or product placement. A neighborhood with lots of callbacks may need a shorter interval or a higher price. A pest that keeps coming back in spring may need a different approach on the spring service. The job costing side of re-services is covered in [costing a quarterly stop](/blog/pest-control/job-costing-in-pest-control-software)."
      },
      {
        "h2": "When the weather turns",
        "content": "Exterior pest treatments generally should not be made in heavy rain or high wind, and product labels often include weather-related restrictions. Read your labels and follow them. A light drizzle may be fine for some applications and not for others. Lawn companies already know this from turf work.\n\nMake the call early. If the forecast shows heavy rain all day, decide the night before or first thing in the morning whether the route runs. Shifting a whole day is easier than sending a tech out and pulling them back at 10 a.m. Interior services can often still go ahead on a rainy day, so some companies swap interior appointments into rained-out exterior days where customers can accommodate it."
      },
      {
        "h2": "Moving a day without the phone calls",
        "content": "When a day gets moved, the customers on it need to know. A tech who just does not show up generates \"where were you?\" calls and erodes trust. When the office reschedules the day, customers should get a reschedule text with the new date. That one text replaces dozens of phone calls.\n\nRescheduling is a decision the office makes, based on the forecast and the labels, not something that happens on its own. Once it is made, the schedule moves and the texts go out. Shift the rained-out day to the next available day, and push the rest of the week if needed, or spread the stops across the next few days' routes in the same areas. For exterior-only quarterly stops, the customer usually does not need to do anything except keep the gate open on the new day."
      },
      {
        "h2": "Keeping intervals on track after a delay",
        "content": "A quarterly service that ran a week late because of rain should still be counted from when it was actually done. With rolling intervals, the next due date moves forward from the completed visit, so one delay does not cascade. If you use calendar quarters, a late service shortens the gap to the next one, which is usually fine.\n\nWatch for services that keep getting pushed. A customer whose visit was moved for rain, then skipped for a locked gate, then delayed by a busy week can end up months overdue. The Waiting List shows anyone past their due date. Check it weekly and schedule the oldest first. The post on [scheduling quarterly pest service](/blog/pest-control/scheduling-features-in-pest-control-software) covers how the due list works."
      },
      {
        "h2": "Telling customers what happened",
        "content": "Communication turns re-services and weather delays into proof that you are reliable. After a re-service, a completed alert with the tech's notes (\"Treated along the kitchen baseboards and the back door threshold, placed bait near the sink\") shows the customer you took it seriously. After a weather delay, the reschedule text and then the completed alert on the new day close the loop.\n\nIn IndustryBossPro, re-services can be added as no-charge jobs and placed on the nearest tech's route, rescheduling a day sends customers a reschedule text, and completed alerts carry the tech's notes and photos. With two-way texting, customers can reply to an alert to ask for a re-service. Handle callbacks fast and weather delays clearly, and customers will forgive almost anything else.\n\nOne caution about re-services: they are free to the customer, not free to you, and a few customers will test the limits. A customer who requests a re-service every two weeks may have a real problem your regular service is not solving (a moisture issue, a nest inside a wall, a woodpile against the house), and the fix may be a different treatment or advice about the conditions on the property. Have the tech write down what they see. If the pattern continues, a conversation about an upgraded plan or a one-time specialty service is fairer than endless free visits."
      }
    ]
  },
  {
    "slug": "reducing-no-shows-gaps-pest-control-scheduling-software",
    "title": "Fewer Locked Gates and Missed Pest Visits: Cutting Down on Skips",
    "description": "Why pest stops get skipped and how to prevent it: night-before texts, gate and pet notes, on-the-way alerts, skip reasons, filling gaps and stopping drift.",
    "date": "2026-10-21",
    "readTime": 5,
    "industry": "pest-control",
    "hubSlug": "pest-control-software",
    "hubKeyword": "pest control software",
    "intro": "A skipped pest stop costs more than it looks. The tech drove there, walked to the gate, found it locked or a dog in the yard, and left. That is paid time with no revenue. Then the stop has to be rescheduled, which means another drive. And if nobody follows up, the customer's next visit slides, bugs come back, and a re-service call follows. Most skips are preventable. The causes are predictable, and so are the fixes.",
    "sections": [
      {
        "h2": "Know why stops get skipped",
        "content": "Start by recording every skip with a reason. The common ones are locked gates, dogs loose in the yard, the customer asking to reschedule at the door, the customer not home for an interior appointment, bad weather, and running out of time at the end of the day. Each reason has a different fix, so you need to know which ones you have.\n\nMake it a rule that a tech never just leaves. On the crew app, skipping a stop requires a reason. The reason comes back to the office, the stop goes back on the list, and the customer can get a skipped alert explaining what happened. After a month, look at the skip reasons. If locked gates are half of them, that is where to start."
      },
      {
        "h2": "The night-before text does most of the work",
        "content": "Many skips happen because the customer did not know you were coming. A night-before text (\"Your pest service is scheduled for tomorrow. Please leave the side gate open and keep pets inside\") fixes most locked-gate and dog skips. It costs a text message and saves a drive.\n\nKeep the message short and specific. Include anything you need from the customer, like access to the backyard or bringing pets in. If you use two-way texting, customers can reply to reschedule or ask questions, which catches the problems the night before instead of at the gate. Texts count against your monthly allowance, so keep them to one segment where you can."
      },
      {
        "h2": "Put access details in the property notes",
        "content": "The tech at the gate needs to know the gate code, which gate is easier to reach the backyard, where the dog is usually kept, whether the customer wants a call before entering, and where the bait stations or problem areas are. All of that belongs in the property notes, visible on the crew app at every stop.\n\nUpdate notes every time something changes. If a tech learns that the side gate is always locked but the back gate is not, they should add a crew note so the next tech knows. Notes from one tech help every tech who visits after them, which matters a lot when quarterly visits rotate between people. The [customer management features](/features/customer-management-field-service) page covers how property notes and contacts are kept."
      },
      {
        "h2": "On-the-way alerts for interior appointments",
        "content": "Interior services need someone home, and those are the stops most likely to be skipped. The customer was home at 9 a.m., ran an errand at 10, and the tech arrived at 10:15. A \"you're next\" or on-the-way text gives the customer a heads-up shortly before the tech arrives, so they can be there.\n\nFor interior appointments, also confirm the day before with a text, and ask the customer to reply if the time does not work. A tech-arrived text lets the customer know the tech is at the door. If you offer it, an optional live route map on the service day lets customers see roughly where the tech is, which cuts down on \"when are you coming?\" calls."
      },
      {
        "h2": "Do not let skipped stops drift",
        "content": "A skipped stop that is not rescheduled is a customer who is not getting the service they pay for. Skips should go right back on the list. With recurring services, a skipped visit stays due on the Waiting List until it is completed, so it cannot be forgotten.\n\nSchedule skipped stops quickly, ideally within a few days, on a route that is already in the area. Check the overdue list weekly. A customer who was skipped twice in a row needs a phone call to find out what is going on: maybe they moved, maybe they are unhappy, maybe they just need a new gate code. The post on [scheduling quarterly pest service](/blog/pest-control/scheduling-features-in-pest-control-software) covers the due list in detail."
      },
      {
        "h2": "Filling the gaps in a day",
        "content": "Even with good prevention, some stops will be skipped, and the tech will have a gap in the day. Have work ready to fill it. Look at the Waiting List for customers in the same area who are due in the next week or two, and add one or two to the day. For quarterly exterior service, a few days early is usually fine.\n\nThe office can do this in real time. When a skip comes in, check who else is nearby and due, and add them to the tech's route. With the GPS location of crew phones, the office knows where the tech is. A day that would have ended with an empty hour instead ends with one more completed stop."
      },
      {
        "h2": "Measure it and keep improving",
        "content": "Track your skip rate (skipped stops as a share of scheduled stops) by reason and by tech. After you start sending night-before texts and cleaning up property notes, the rate should drop. If one tech has more skips than others, find out why: maybe they are not reading notes, maybe they give up too quickly, maybe they get the hardest routes.\n\nIn IndustryBossPro, skips require a reason, skipped visits stay on the Waiting List until done, customers get night-before, on-the-way, skipped and completed alerts, and property notes show on the crew app at every stop. The [pest control software overview](/pest-control-software) shows how it all fits. Fewer skips means fewer wasted drives, fewer late services, fewer callbacks and happier customers.\n\nIt also helps to look at skips from the customer's side. A customer whose gate is always locked may simply not want to remember the service day. Offer to put a lockbox code in the notes, or ask whether there is a gate you can always use. A customer with a dog that is always out may prefer a specific time of day. Small accommodations like these turn a recurring skip into a recurring completed stop, and the customer remembers that you made it easy."
      }
    ]
  }
];

export const hub: HubPageData = {
  "slug": "pest-control-software",
  "industry": "Pest Control",
  "isMain": true,
  "h1": "Pest Control Software for Lawn Companies Running Quarterly Pest Plans",
  "subtitle": "Run recurring pest plans next to your lawn program: intervals that track who is due, routes by area, application records at every stop, fast re-services and the alerts that keep customers renewing.",
  "metaTitle": "Pest Control Software for Lawn Pros | IndustryBossPro",
  "metaDesc": "Pest control software for lawn companies: quarterly plans on rolling intervals, routes by area, application records per stop, re-services and customer alerts.",
  "heroPoints": [
    "Quarterly and every-other-month plans on their own repeat intervals",
    "Product, amount, area and applicator recorded on the phone at every stop",
    "Re-services and rained-out days rescheduled with a text to the customer"
  ],
  "painPoints": [
    {
      "problem": "Nobody is sure which pest customers are due or overdue",
      "solution": "Each plan repeats on its own interval and the Waiting List shows everyone coming due, so you circle an area on the map and schedule them onto one tech's day."
    },
    {
      "problem": "Application records get filled in from memory at the end of the day",
      "solution": "Techs pick the product or mix, enter the amount and area treated at the stop, and the chemical report pulls any property, product or date range when someone asks."
    },
    {
      "problem": "Callbacks and locked gates eat the route",
      "solution": "Re-services go on as no-charge jobs added to the nearest route, night-before texts cut down on locked gates, and every skip comes back with a reason."
    }
  ],
  "features": [
    {
      "icon": "🐜",
      "title": "Recurring Pest Plans",
      "desc": "Initial service as its own job, then quarterly (90 days) or every-other-month (60 days) visits that repeat from the last completed stop."
    },
    {
      "icon": "🧪",
      "title": "Application Records",
      "desc": "Products and tank mixes set up once; techs record product, amount, area treated and applicator from the crew app."
    },
    {
      "icon": "📄",
      "title": "Chemical Reports & Emails",
      "desc": "Print or send a chemical report for state record keeping, and email customers what was applied after each service."
    },
    {
      "icon": "🗺️",
      "title": "Routes by Area",
      "desc": "Circle a neighborhood on the map to schedule everyone due there, then auto-route the day by distance."
    },
    {
      "icon": "📲",
      "title": "Customer Alerts",
      "desc": "Night-before, on-the-way, completed alerts with notes and photos, skipped alerts, and two-way texting on Pro and Crew."
    },
    {
      "icon": "💳",
      "title": "Plan Billing",
      "desc": "Bill per visit, monthly or prepaid with a prepayment ledger, card on file, auto-charge on completion and declined-card alerts."
    }
  ],
  "pendingBoard": "Quarterly and every-other-month pest services land on the Waiting List when they come due, and skipped visits stay there until they are done, so nobody drifts months overdue. Initial services, re-services and one-time treatments wait on the Pending Jobs board until the office drops them onto the route of the tech already working that area.",
  "blogSiloIndustry": "pest-control",
  "blog1Slug": "pest-control-software-complete-guide",
  "blog1Title": "Adding Pest Control to a Lawn Company: How the Service Actually Runs"
};
