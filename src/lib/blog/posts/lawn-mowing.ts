import type { BlogPost } from '../types';
import type { HubPageData } from '../../hub-data';

export const posts: BlogPost[] = [
  {
    "slug": "lawn-mowing-software-complete-guide",
    "title": "Running a Mowing Company: Routes, Crews, Rain Days and Getting Paid",
    "description": "A practical guide to a residential mowing business: building weekly routes, sizing crews, handling rain days, pricing per cut or monthly, and getting paid.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "A mowing company lives and dies on its weekly route. You visit the same lawns 25 to 35 times a season, usually for a modest price per cut, so the margin is made in the details: how close the stops are, how long each one takes, how quickly you recover from a rainy Tuesday, and whether every cut actually gets billed. None of it is complicated on its own. The hard part is keeping all of it straight from April to November with two or three crews and a phone that never stops ringing. This guide covers the main pieces in the order they matter, with links to deeper posts on each one.",
    "sections": [
      {
        "h2": "The Route Is the Business",
        "content": "Most mowing revenue is recurring weekly or biweekly service. That means the route you build in spring is the route you run all season, and every inefficiency in it repeats 30 times. A stop that adds 10 minutes of drive time costs you five hours over a season. Ten of those stops cost you a full week of a crew's time.\n\nSo build routes by geography first. Assign each neighborhood a day of the week, and sell into neighborhoods you already serve. When a lead comes in from a street you mow on Wednesdays, that customer gets Wednesday. When a lead comes in from far outside your days, think hard before accepting it. The posts on [building a route that holds up](/blog/lawn-mowing/dispatch-routing-lawn-mowing-software) and [splitting routes between crews](/blog/lawn-mowing/route-optimization-multiple-crews-lawn-mowing-software) go deeper."
      },
      {
        "h2": "Weekly, Biweekly and the Grass Itself",
        "content": "Weekly service is the standard for a reason. In peak growing season, grass cut every 14 days often needs more than a third of its height removed, which stresses the lawn and takes longer to cut and clean up. Biweekly customers are fine in slower growth months and drier climates, but they are harder to mow well in May and June.\n\nMany companies offer biweekly at a higher price per cut to account for the extra time, or require weekly during peak growth. Whatever you decide, put the interval on the recurring service, 7 days for weekly and 14 for biweekly, so the schedule generates each visit without anyone rebuilding the week."
      },
      {
        "h2": "Crews and Equipment",
        "content": "A two-person crew with a stand-on or zero-turn, a push mower, a trimmer and a blower can handle a typical suburban route. Whether you run two or three per crew depends on property size and how much trimming and edging each one needs. Balance matters more than headcount: a crew that finishes at 2 p.m. and one that finishes at 7 p.m. on the same day means the routes are wrong, not the people.\n\nEquipment downtime is the other big risk. A mower that breaks at 9 a.m. can wreck a full day. Daily checks, sharp blades and a backup machine save more money than any scheduling trick."
      },
      {
        "h2": "Rain Days Are Part of the Plan",
        "content": "It will rain, and you will lose days. The question is whether a lost Tuesday becomes a slightly long week or a three-week mess. Decide in advance: does the whole schedule slide a day, do you double up later in the week, or do you skip that cut and pick up on the next regular visit? Each approach has a cost, and the right one depends on how fast the grass is growing.\n\nWhen you move a day, customers on it get a reschedule text automatically, so the office is not calling 40 people. The [rain day post](/blog/lawn-mowing/automated-rescheduling-for-weather-in-lawn-mowing-scheduling-software) walks through the choices."
      },
      {
        "h2": "Pricing Per Cut or Monthly",
        "content": "Per-cut pricing is simple and fair: the customer pays for each visit. Monthly pricing spreads the season into level payments, which customers like and which smooths your cash flow, but it requires you to decide what happens in a month with five mowing weeks or three weeks of drought.\n\nEither way, base the price on time on site, not lot size alone. Measure the lawn on the satellite map for square footage, then think about trim time, gates, slopes and obstacles. A small yard full of beds and fences can take longer than a big open one. The [quoting post](/blog/lawn-mowing/estimating-quoting-lawn-mowing-software) covers this in detail."
      },
      {
        "h2": "Getting Paid for Every Cut",
        "content": "The quietest way to lose money in mowing is unbilled work. A crew cuts a lawn, the paper sheet gets lost, and nobody invoices it. Multiply that by a few stops a week and it adds up.\n\nThe fix is billing tied to completion. When the crew marks a lawn done in the crew app, the visit is recorded, and with a card on file it can be charged automatically. Monthly customers are billed by period invoice. Three automatic payment follow-ups go out on unpaid invoices, and a declined card triggers an alert so you can fix it before the next billing.\n\nYou do not need a dashboard full of charts to run a mowing company, but a few numbers tell you most of what matters. Lawns cut per crew per day shows whether routes are dense. Hours worked versus hours planned shows whether days are realistic. Unpaid invoices older than two weeks shows whether billing is keeping up. Cancellations and their reasons show whether you are keeping customers.\n\nLook at them every Friday, in the same order, for ten minutes. When one moves the wrong way two weeks in a row, dig into it. Most problems in a mowing business show up in one of these numbers long before they show up in the bank account."
      },
      {
        "h2": "Where to Start",
        "content": "If you are moving off paper or a spreadsheet, import your customers and properties first (spreadsheet or Jobber import), then set each property's recurring service and day. Measure lawns as you go. Put cards on file during spring renewals. Then run the first week and fix what looks wrong.\n\nIndustryBossPro covers all of this on every plan, from Start at $59 a month to Crew for larger teams, with a 14-day trial and no card. If this is the only service you run, MowBossPro (https://mowbosspro.com) is the version built just for it."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "recurring-visit-scheduling-in-lawn-mowing-scheduling-software",
    "title": "Weekly vs Biweekly Mowing: How to Schedule and Price Both",
    "description": "When biweekly mowing works and when it hurts the lawn, how to price the extra time, and how to keep weekly and biweekly customers on the same mowing routes.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Every mowing company gets the same call in spring: \"Can you just come every other week?\" Saying yes feels like easy money, and sometimes it is. Other times it turns into a crew spending 45 minutes on a lawn priced for 25, clumps of clippings the customer complains about, and a route that has holes in it every other week. Biweekly service can work well, but only if you schedule it on purpose and price it for what it really costs. This post covers when to offer it, how to price it, and how to fit both kinds of customer onto one set of routes.",
    "sections": [
      {
        "h2": "What Biweekly Does to the Grass",
        "content": "Turf professionals generally recommend removing no more than about a third of the grass blade in a single cut. In peak spring growth, many lawns grow fast enough that two weeks puts them well past that. Cutting them back down stresses the grass, leaves heavy clippings, and often takes two passes or a bag.\n\nIn slower growth, such as a dry summer, late fall, or a warm-season lawn in a drought, biweekly can be perfectly fine. The answer depends on your grass types, your climate and the month. Some companies only offer biweekly outside peak growth, or switch biweekly customers to weekly during the spring flush."
      },
      {
        "h2": "Price Biweekly for the Real Time",
        "content": "A weekly lawn that takes 25 minutes may take 35 to 40 minutes when cut every other week, and more if you have to bag or double-cut. If you charge the same per cut, you are giving away the difference.\n\nTwo common approaches: charge a biweekly premium per cut, often 15 to 30 percent over the weekly price, or set a biweekly price based on actual timed visits from last season. Say a weekly cut is $40. A biweekly cut at $50 brings in $100 a month instead of $160, but it takes more time per visit, so check that the price per minute is still in line. Put both prices in your service catalog so whoever quotes uses the right one."
      },
      {
        "h2": "Put the Interval on the Service",
        "content": "The simplest way to keep recurring visits straight is to give each property a recurring service with a set number of days between visits: 7 for weekly, 14 for biweekly. When a visit is marked done, the next one comes due that many days later. Nobody has to remember who is on which week.\n\nIn IndustryBossPro the Waiting List shows every property that is due, and the Scheduled list shows what is already on each day. A biweekly customer shows up every other week on the same day as their neighbors, without anyone building that week by hand."
      },
      {
        "h2": "Pair Biweekly Customers to Keep Routes Full",
        "content": "The hidden cost of biweekly is the hole it leaves in your route on the off week. If a Wednesday route has 30 weekly stops and 10 biweekly, half the biweekly ones are missing each week, and the crew either finishes early or you fill the gap with something else.\n\nThe fix is pairing. Try to have as many biweekly customers on \"week A\" as on \"week B\" in each area. When a new biweekly customer signs up on a street where most biweekly lawns are on week A, start them on week B. Over a season this evens out the crew's load. It also keeps the route dense, since both weeks have customers on the same streets."
      },
      {
        "h2": "Moving Customers Between Weekly and Biweekly",
        "content": "Customers will ask to switch mid-season, usually when the weather turns dry. Have a policy. Some companies allow it freely with the price change. Others require a two-week notice so the route can be adjusted. Some only let weekly customers drop to biweekly after a set date in summer.\n\nWhen a customer switches, change the interval on their recurring service from 7 to 14 days and update the price. Make sure the next visit date makes sense and lands on their pair week. Tell the customer what the new price is in writing, either through a text or a revised estimate, so there is no argument on the next invoice."
      },
      {
        "h2": "Skipped and Extra Visits",
        "content": "Recurring service is never perfectly regular. Customers go on vacation and ask you to skip a week. Someone hosts a party and wants a cut a day early. When the crew skips a stop in the crew app, they choose a reason, and the customer gets a skipped alert so there is no confusion. The property stays on its interval.\n\nExtra cuts, such as a one-time mow before an event, should be added as separate one-time work rather than shifting the recurring schedule. That keeps the regular rhythm intact and makes sure the extra visit is billed. The [route post](/blog/lawn-mowing/dispatch-routing-lawn-mowing-software) covers fitting add-ons into a day."
      },
      {
        "h2": "Watch the Mix Over the Season",
        "content": "Look at your weekly-to-biweekly ratio in each area every month. If biweekly creeps above a third of a route, the off-week holes start to hurt. Raising the biweekly premium a little, or offering biweekly only in certain months, keeps the mix healthy. Weekly customers are the backbone of a mowing route, and pricing should gently favor them. For the overall picture, see the [lawn mowing software](/lawn-mowing-software) overview.\n\nRecurring schedules need a clear start and end. In spring, start each area's weekly service once its spring cleanups are done and the grass is actually growing, not on a fixed date for everyone. Southern lawns may start weeks before northern ones. In fall, decide when weekly service ends and whether customers drop to biweekly for the last few weeks as growth slows.\n\nTell customers both dates in advance. A short message in early spring (\"Weekly mowing starts the week of April 7 in your area\") and another in fall (\"Your last regular cut is the week of November 10\") prevents most of the \"are you still coming?\" calls. It also gives you a clean point to change prices or billing for the next season."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "dispatch-routing-lawn-mowing-software",
    "title": "Building a Mowing Route That Holds Up All Season",
    "description": "How to assign neighborhoods to days, order stops to cut drive time, handle customers who do not fit, and keep a weekly mowing route dense from spring to fall.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A good mowing route is boring. The crew pulls up, cuts, trims, blows, loads and drives two minutes to the next house, all day. A bad route is the opposite: back-and-forth across town, a stop on the far side of the highway, a long gap between clusters. The difference is often 8 or 10 more lawns a day on the same labor, which over a season is the difference between a decent year and a great one. Here is how to build a route for one crew that stays dense from the first cut in spring to the last in fall, and how to keep it that way as customers come and go.",
    "sections": [
      {
        "h2": "Assign Neighborhoods to Days",
        "content": "The foundation of a mowing route is one area per day. Monday is the north side, Tuesday is the subdivision past the school, and so on. Customers in that area are cut on that day every week. It makes the route predictable for the crew and the customer, and it makes selling easier: when a lead comes in, you already know their day.\n\nDraw the areas based on how your trucks actually drive, not on ZIP codes. A river, a highway with few exits or a railroad track can make two neighborhoods that look close on a map far apart in drive time. Size each day so the crew can finish it in a normal shift."
      },
      {
        "h2": "Order the Stops by Distance",
        "content": "Inside each day, stop order matters. Even a dense neighborhood can lose 30 to 45 minutes if the crew zigzags. Auto-routing orders the day's stops by distance so the truck flows through the area. Start from where the crew actually begins, usually the shop, and look at the result before accepting it.\n\nThen make the few manual adjustments that matter: the customer who wants to be cut before noon, the property with a gate that is only open in the morning, the commercial site that has to be done before a business opens. Keep those details in the property notes so they show up for the crew every week.\n\nCheck the end of the day as well as the start. If the last stop is 25 minutes from the shop and the first stop tomorrow is right next to it, the order may be backwards. Small changes at either end of the route often save more than reshuffling the middle."
      },
      {
        "h2": "Respect Turn-Around and Unloading Time",
        "content": "Drive time is not the only cost between stops. Every stop includes parking, unloading, loading and the walk-around. On a tight residential street, a crew might be able to roll the mower from one lawn to the next without loading at all. That is worth arranging for.\n\nWhen customers are next door or across the street from each other, put them back to back and let the crew walk the equipment over. A street with five customers in a row is worth more than five customers scattered across the same neighborhood, even if the total drive time looks similar on paper."
      },
      {
        "h2": "What to Do With Customers Who Do Not Fit",
        "content": "Every company has a few customers far from any route. Maybe you took them on years ago, or they are a friend of a friend. They take up drive time every week, and the cost is easy to miss because each one seems small.\n\nLook at them honestly. If a stop adds 20 minutes of round-trip driving each week, that is about 10 hours over a season, which at a crew labor cost of $40 an hour is $400. If the customer pays $40 a cut, a big share of their revenue is spent on driving to them. Either raise their price to cover it or let them go politely at the end of the season. The [job costing post](/blog/lawn-mowing/job-costing-lawn-mowing-software) shows how to find them."
      },
      {
        "h2": "Fitting Add-Ons and One-Time Jobs",
        "content": "Leaf cleanups, extra cuts, bed cleanups and one-time mows come in all season. The worst way to handle them is a special trip. The best is to put them on the day the crew is already in that area.\n\nKeep one-time work on the Pending Jobs board until you place it. When you build the week, look for pending jobs in each day's area and add them to that day. Auto-routing slots them into the stop order. If a customer needs it sooner than their area's day, decide whether the job is worth a separate trip, and price it that way."
      },
      {
        "h2": "Run the Day From the Crew App",
        "content": "The crew should see their stops in order on a phone, with navigation, property notes (gate code, dog, which side has the sprinkler heads) and a way to mark each lawn done, skip with a reason, take a photo or leave a note for the office. Clock in and out happens on the same phone.\n\nThe office sees progress as lawns are marked done, and the crew phone's GPS location shows where the truck is during the day. That answers \"where are my guys\" without calling them on a mower. Customers can get a \"you're next\" text and a completed alert without the office lifting a finger.\n\nMany route problems start before the first lawn. A crew that leaves the shop at 8:15 instead of 7:30 because the trailer was not loaded, the fuel cans were empty or nobody knew the first stop has lost almost an hour before it starts. Load the trailer and fill fuel at the end of the previous day, and have the first stop on the crew's phone the night before. A crew that is mowing by 7:45 finishes at a reasonable time even on a heavy day."
      },
      {
        "h2": "Keep the Route Dense as It Grows",
        "content": "Routes erode over a season. Customers cancel, new ones sign up in odd places, and a dense Thursday slowly becomes a scattered one. Once a month, look at each day on the map. Are there gaps where you could sell? Outliers you should reprice? Days that are getting too long?\n\nDoor hangers and yard signs work best in the streets you already mow, because each new customer there costs almost nothing in drive time. Grow by filling in your existing days before you add new areas. For routing across more than one crew, see [splitting routes between crews](/blog/lawn-mowing/route-optimization-multiple-crews-lawn-mowing-software)."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "route-optimization-multiple-crews-lawn-mowing-software",
    "title": "Splitting Mowing Routes Between Two or More Crews",
    "description": "How to divide mowing territory between crews, when to add a second crew, balancing large and small lawns, and keeping each crew's day close to the same length.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Going from one mowing crew to two is where many small companies stumble. With one crew, the owner knows every stop by heart. With two, you have to decide who goes where, and the first attempt usually splits the list down the middle without much thought. A month later, one crew is finishing at 2 p.m. and the other is cutting by headlights, both trucks are driving through the same neighborhoods, and the customers on the edge of the territory never know which crew is coming. Here is how to divide work between crews so each one has a dense, balanced day.",
    "sections": [
      {
        "h2": "Split by Territory, Not by List",
        "content": "The simplest rule is that each crew owns its own area on a given day. Crew A takes the north side on Monday and Crew B takes the south. Neither truck enters the other's area unless it has to. This keeps each crew's route dense and avoids both trucks driving the same roads.\n\nOn the map, draw the split along natural lines: a main road, a river, a highway. Count the stops on each side and look at the total minutes, not just the count. Fifteen big lawns can be more work than 25 small ones.\n\nIf crews start from different places, such as a crew lead who takes the truck home, factor that into the split. A crew that lives on the south side and starts its day there should own the south side territory. Starting and ending near home cuts dead driving at both ends of the day, and over a season that can add up to dozens of hours per crew.\n\nIt also helps with breakdowns and callbacks. If a customer on the south side calls with a missed corner, the crew that owns the area is the one closest and the one who knows the property. Keeping ownership clear makes small fixes fast and keeps the customer dealing with familiar faces."
      },
      {
        "h2": "Balance by Minutes, Not Stops",
        "content": "The number of stops is a poor measure of a crew's day. What matters is total time: time on site at each lawn plus driving between them. If you have timed visits from last season, use them. If not, start with estimated minutes per property and correct them after the first few weeks.\n\nWhen crews clock in and out and mark each stop done in the crew app, you get real time data. The employee hours report shows how long each crew actually works each day. Look for crews that are consistently long or short on the same day, and move a few stops at the border between territories to even them out.\n\nRemember that a crew's load changes with the season. A split that balances perfectly in June may be lopsided in May, when lawns with heavy spring growth take longer. Check the balance again at the start of each growth phase, not only once a year. Fall leaf season shifts it again, because leaf jobs land unevenly across neighborhoods with more or fewer mature trees."
      },
      {
        "h2": "When It Is Time for Another Crew",
        "content": "The usual signal is that one crew's days are routinely running past what you can ask of them, and you are turning down work in areas you already serve. A useful rough check: if the crew's total weekly minutes on site plus driving go beyond about 50 hours for more than a few weeks, it is time.\n\nThe second crew does not have to be full-time from day one. Many companies start the new crew on the two or three busiest days of the week and keep the original crew on the rest. As sales fill in, the second crew grows into a full week."
      },
      {
        "h2": "Assign Work to the Right Truck",
        "content": "Not every crew is equal. One might have a large zero-turn and be best on big open lawns. Another might have smaller mowers for tight backyards with narrow gates. Match the work to the equipment. A crew with a 60-inch deck sent to a townhome route wastes time; a crew with a 36-inch walk-behind on a one-acre lot wastes more.\n\nIn IndustryBossPro you assign work to a truck, so each property has a regular truck on its day. When you circle an area on the Waiting List map, those properties are scheduled onto the truck and day you choose in one step, and auto-routing orders each truck's stops."
      },
      {
        "h2": "Handle the Border Stops",
        "content": "Customers near the line between territories are the ones that drift. One week Crew A grabs them because it finished early, the next week Crew B does. That confuses customers and makes it impossible to measure each crew's time.\n\nPick a crew for each border property and stick to it. If balance requires moving a stop, move it permanently and tell the customer if their day changes. A reschedule text goes out when you move a day, so the customer is not surprised."
      },
      {
        "h2": "Help Each Other Without Losing Track",
        "content": "There will be days when one crew falls behind, a mower breaks or someone calls in sick. The other crew can help, but do it on purpose. Move specific stops to the helping crew's day for that date so the work is recorded under the crew that did it. If the helping crew just \"grabs a few\" without recording it, you lose the time data and may double-bill or miss a cut.\n\nCrew notes to the office keep this simple. The crew lead sends a note when they finish early and can take on stops, and the office moves a cluster of nearby lawns to them."
      },
      {
        "h2": "Review the Split Every Month",
        "content": "Territories drift as customers come and go. Once a month, look at each crew's total time per day and the map of their stops. Move a few border properties to keep days balanced. When you sell into a new area, decide which crew owns it before the first cut, not after. The [crew assignment post](/blog/lawn-mowing/crew-assignment-and-balancing-in-lawn-mowing-scheduling-software) covers crew size and roles, and the [route optimization overview](/features/service-route-optimization-software) explains how stop ordering works."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "automated-rescheduling-for-weather-in-lawn-mowing-scheduling-software",
    "title": "Rain Days on a Mowing Route: Slide, Double Up or Skip?",
    "description": "Three ways to handle a rained-out mowing day, the cost of each, how to tell when grass is too wet to cut, and how to tell customers without calling them all.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "A mowing company can lose eight to fifteen days a season to rain, depending on where you are. How you handle those days decides whether the season runs smoothly or turns into weeks of catch-up. There is no automatic answer, because the right move depends on how fast the grass is growing, how full the rest of the week is, and how wet the ground really is. What you can do is decide your rules ahead of time and make the reshuffle fast, so a rainy Tuesday morning is a ten-minute decision instead of a day of phone calls.",
    "sections": [
      {
        "h2": "Is It Actually Too Wet?",
        "content": "Rain on the forecast does not always mean a lost day. Light rain in the morning often clears by late morning. The real question is the ground and the grass. Cutting wet grass leaves clumps, tears blades, and can rut soft lawns with heavy mowers. Saturated soil can leave tire tracks that last for weeks.\n\nA simple field test: walk the first lawn. If water squishes up around your shoes or the grass is soaking, it is too wet. If it is just damp, many crews start with lawns that drain well or are on higher ground and save low, soft lawns for later. Make the call by area, not just by city, since rain is often patchy.\n\nGive crew leads the authority to stop on a property that is too soft, even if the rest of the day is going ahead. A crew that leaves ruts across a customer's lawn creates a repair job and an unhappy customer. In the crew app the lead skips the stop with a reason, the customer gets a skipped alert, and the lawn stays due for its next cut."
      },
      {
        "h2": "Option One: Slide the Whole Schedule",
        "content": "The cleanest approach is to slide everything a day. Tuesday's route runs Wednesday, Wednesday's runs Thursday, and so on, with Friday's route running Saturday or getting doubled up later. Customers see their lawn one day late, which few of them mind.\n\nThe cost is that the slide stacks up if you lose more than one day, and every customer for the rest of the week gets a schedule change. It works best in a week with spare capacity, such as a light Friday or a crew that can work Saturday."
      },
      {
        "h2": "Option Two: Double Up Later in the Week",
        "content": "Instead of sliding everything, keep the rest of the week as planned and spread the rained-out day over the remaining days. Tuesday's 30 stops become six extra stops on each of the next five days, or the crew works a long Saturday.\n\nThis keeps most customers on their usual day, but it makes the following days long. It works when the lost day's stops are near other days' areas, so you are not adding long drives. It works badly when the rained-out area is on the edge of your territory."
      },
      {
        "h2": "Option Three: Skip and Pick Up Next Week",
        "content": "In slow-growth periods, such as midsummer drought or late fall, skipping the rained-out cut and picking up on the next regular visit is often fine. The grass barely grew, and the customer would rather keep their usual day than get cut on an odd one.\n\nDo not do this in peak spring growth. Two weeks of fast-growing grass leads to the same problems as biweekly service in May: long cuts, clumping and complaints. And if you bill per cut, a skipped visit is revenue you do not collect, so decide how you handle it for monthly customers.\n\nRain changes billing too. Per-cut customers simply pay for the cut when it happens, whether that is Tuesday or Thursday. If you skip a cut entirely, there is nothing to bill, which is fair but costs you revenue.\n\nMonthly customers are trickier. Decide in your agreement whether the monthly price already assumes a few skipped weeks a season. Most companies say yes, which means no credits for ordinary weather and no arguments. For a long stretch of rain or drought, have a clear rule, such as a credit after a set number of skipped cuts in a month. The [billing post](/blog/lawn-mowing/recurring-service-agreements-lawn-mowing-software) covers monthly terms in more detail."
      },
      {
        "h2": "Moving the Day Without the Phone Calls",
        "content": "Whichever option you pick, the mechanics should take minutes. Reschedule the rained-out day to its new date, and every customer on it gets a reschedule text automatically. If you are doubling up, move the stops onto the new days and let auto-routing reorder each day.\n\nIndustryBossPro does not move days on its own based on a forecast, and that is on purpose. Rain decisions need someone looking at the sky and the ground. What it does is make the change quick once you decide, and keep the recurring intervals intact so next week's cuts still land where they should."
      },
      {
        "h2": "What to Tell Customers",
        "content": "Most customers do not mind a rain delay. What they mind is not knowing. The reschedule text covers the basic message. For a longer delay, like a week of rain, a short note explaining your plan heads off calls: \"We lost two days to rain this week. All lawns will be cut by Saturday, and next week returns to normal.\"\n\nCustomers with two-way texting can reply with questions or ask to skip. Those replies land in the software next to the customer record, so the office can answer without hunting through personal phones. The [complete guide](/blog/lawn-mowing/lawn-mowing-software-complete-guide) has more on customer messages."
      },
      {
        "h2": "Plan for the Rainy Season Before It Comes",
        "content": "Decide your rules in winter. Which option do you use in which month? Who makes the call each morning, and by what time? Will crews work Saturdays to catch up, and how are they paid for it? Do monthly customers get a credit for skipped cuts, or is the monthly price already set to cover a few? Writing these down once turns every rain day into a routine call. For how this fits with your overall season, see [seasonal planning](/blog/lawn-mowing/seasonal-demand-planning-lawn-mowing-software)."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "estimating-quoting-lawn-mowing-software",
    "title": "How to Quote a Mowing Account: Measuring, Minimums and Trim Time",
    "description": "How to price a mowing account from square footage and trim time, set a minimum, quote fast from satellite, and spot the yards that look easy but are not.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Most mowing quotes are a guess with a confident face. The owner drives by, looks at the yard, and says \"$45.\" Sometimes that is right. Often it is not, and the mistake repeats every week for a season. A good quote starts from how long the lawn will take, not how big it looks, because a small backyard full of beds and a narrow gate can take longer than a big open front lawn. Here is how to build a price that holds up, and how to get the quote out fast enough to win the job.",
    "sections": [
      {
        "h2": "Start From Minutes, Not Square Feet",
        "content": "Your real cost on a mowing stop is crew time: mowing, trimming, edging, blowing and the time to unload and load. Square footage is a good starting point for the mowing part, but trim and edge time depends on the number of beds, fences, trees and obstacles, and the length of hard edges along driveways and sidewalks.\n\nWork out a target price per crew minute. Say a two-person crew costs you $45 an hour in wages and taxes, and you need about $95 an hour from that crew to cover equipment, fuel, insurance, overhead and profit. That is roughly $1.60 per crew-minute. A lawn that takes 25 minutes on site should be priced around $40. These are illustrative numbers. Yours depend on your own costs."
      },
      {
        "h2": "Measure From Satellite, Then Adjust",
        "content": "Outline the lawn on the satellite map with the measure tool to get mowable square footage. Leave out the house, driveway, patio and beds. From there, you can estimate mowing time based on the mower that will be used: a 60-inch zero-turn covers far more ground per minute than a 21-inch push mower.\n\nThen add for the things the measurement does not show: number of beds to trim around, fence lines, slopes, a backyard reachable only through a 36-inch gate, piles of toys or dog waste. Look at the satellite image for clues and ask the customer a couple of questions on the phone."
      },
      {
        "h2": "Set a Minimum and Hold It",
        "content": "Small lawns are where mowing companies lose money without noticing. A 2,500 square foot lawn still requires the truck to stop, the crew to unload, trim and blow. If your formula prices it at $25, you are likely below your cost once drive and setup time are counted.\n\nSet a minimum price per cut and keep it, even for tiny yards. Many companies set the minimum based on what the crew needs to earn from 15 or 20 minutes at a stop. Customers with tiny lawns sometimes push back, but most understand that someone has to show up with a truck and equipment.\n\nReview your minimum every season, since fuel and wages change. A minimum that was right three years ago may now be below cost. Raise it at renewal time, with notice, rather than in the middle of the season."
      },
      {
        "h2": "Quote Fast, Because Speed Wins",
        "content": "A homeowner asking for mowing quotes usually picks one of the first two companies to respond with a clear price. For most residential mowing, you do not need a site visit. A web form on your site sends the lead into the software, you measure on the map, and an estimate goes out by email or text, often within an hour.\n\nBuild an estimate template for your standard weekly service with the line items your customers expect: mowing, trimming, edging, blowing. Customers approve online. If they do not, three automatic follow-ups go out a few days apart. Approved estimates convert into scheduled recurring work on the right day for their area."
      },
      {
        "h2": "Price the Extras Separately",
        "content": "Keep your base mowing price clean and list extras separately: bagging clippings, mowing a side lot, string trimming a ditch, a monthly bed weeding. That makes your base price easier to compare, and it lets customers add services without a new quote.\n\nKeep each extra in your service catalog with its price, so whoever builds the estimate uses the same numbers. A crew lead who can quote in the field can use the same catalog: when it is turned on for that employee, techs can write, price and send estimates from the crew app, even with no signal."
      },
      {
        "h2": "Watch for the Yards That Lie",
        "content": "Some properties look easy and are not. Steep slopes that need a walk-behind or string trimmer. Thick St. Augustine or overgrown first cuts. A big lawn with a long fence line and a dozen trees. Drainage ditches. Yards with lots of dog waste that has to be dealt with before mowing.\n\nFor anything unusual, quote the first cut separately. Many companies charge a higher first-cut price for overgrown lawns, then the regular price after. Note anything odd in the property notes so the crew is ready.\n\nCommercial properties and HOA common areas are a different kind of quote. They are larger, often bid against several companies, and usually come with a contract term and specific requirements: mowing height, frequency, trimming standards, insurance certificates. A satellite measurement is a good start, but always walk the property before you bid.\n\nTime it carefully. Large open areas may go fast with a big deck, while retention ponds, slopes and lots of signs and trees slow things down. Price per visit, then multiply by the visits in the contract. Be cautious about very low bids to win the account; commercial contracts lock in your price for a year or more, and a mistake repeats every week."
      },
      {
        "h2": "Check Your Quotes Against Reality",
        "content": "After a few weeks of service, compare your quoted time with actual time on site. Job costing shows labor from crew clock-in times and pay rates on each job, with planned versus actual hours. If a lawn quoted at 25 minutes keeps taking 40, the price is wrong, and you should fix it at the next price change rather than carry it all season. The [job costing post](/blog/lawn-mowing/job-costing-lawn-mowing-software) explains how to read those numbers, and the [estimates overview](/features/field-service-estimates-quoting) covers the approval flow."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "job-costing-lawn-mowing-software",
    "title": "Finding the Mowing Accounts That Quietly Lose You Money",
    "description": "How to work out what each mowing stop really costs in crew time, drive time and equipment, spot underpriced lawns, and fix them without losing good customers.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "In most mowing companies, a handful of accounts lose money every single week and nobody knows which ones. They are not obvious. They are the lawn that takes 40 minutes but was priced for 25, the customer across the river who adds 15 minutes of drive time, or the big property that was discounted years ago and never adjusted. Each one costs a few dollars per cut, and over a 30-cut season that is real money. Job costing finds them. It is just the habit of comparing what each stop costs to deliver with what you charge for it.",
    "sections": [
      {
        "h2": "What a Mowing Stop Costs",
        "content": "The main cost on any mowing stop is crew labor: the minutes on site multiplied by what you pay each person on the crew, including payroll taxes. Then there is the share of drive time between stops, which is also labor plus fuel. Equipment wear, insurance, truck payments and office costs are overhead you cover with a margin on every job.\n\nFor mowing, labor is usually the largest direct cost by far. That is why accurate time on site matters more than anything else in costing a mowing account.\n\nMaterials matter less in mowing than in treatment work, but they are not zero. Fuel, trimmer line, blades and the occasional bag of seed for a scalped spot all add up. Put the materials you use on jobs in your materials list with their costs, so when a crew records them on a stop they show up in that job's cost."
      },
      {
        "h2": "Get Real Times From the Crew App",
        "content": "Estimated minutes are a guess. Actual minutes come from the field. When crews clock in and out and mark each stop done in the crew app, you have real time per property. Multiply it by each worker's pay rate, which stays in the office and is never shown on the crew's phone, and labor cost shows up on each job.\n\nIn IndustryBossPro, job costing combines those labor numbers with any materials used and the price charged to show profit and margin per job. The job costing report lets you sort every account by margin."
      },
      {
        "h2": "Read the Report the Right Way",
        "content": "Sort by margin and look at the bottom of the list. A single bad visit, such as the week the mower broke or a first cut on an overgrown yard, is noise. What you are looking for is a lawn that is at the bottom every week.\n\nFor each one, ask why. Is it priced too low for the time it takes? Is the time high because of something you could change, like a gate the customer could leave open or an obstacle they could move? Or is it far from the rest of the route?\n\nIt is easy to focus on time on site and forget the time between stops. A stop that takes 20 minutes but needs a 15-minute drive in each direction is really a 50-minute stop. When you look at job costing, think about where each lawn sits on the route.\n\nCustomers on the same street as five others share the drive cost. A lone customer across town carries all of it alone. One way to see this is to look at a day's total clock time against the sum of time on site at each stop. The difference is drive and setup time. If it is more than a third of the day, the route needs work before the prices do.\n\nWhen you calculate a stop's cost, add an even share of the day's drive time to every stop, then a bit more for the outliers. That gives you a truer picture of what each lawn costs to service."
      },
      {
        "h2": "Planned vs Actual Hours",
        "content": "Set planned hours on each recurring service, based on your quote. Then compare to actual. A lawn planned at 0.4 crew-hours that keeps taking 0.7 is a pricing problem. A crew that runs 20 percent over planned on every lawn is a crew or equipment problem, which is a different conversation.\n\nPlanned versus actual also helps with growth. If the planned hours on a Wednesday add up to 9.5 and the crew is actually working 11, you know Wednesday is already full before you sell another lawn in that area."
      },
      {
        "h2": "A Worked Example",
        "content": "Take two customers on the same street, both paying $45 a cut, with illustrative numbers. Lawn A takes a two-person crew 20 minutes. At a crew cost of $45 an hour, that is $15 in labor. Lawn B takes 38 minutes because of a steep back slope and a dozen beds. That is $28.50 in labor.\n\nAdd 5 minutes of drive share to each, about $3.75, and Lawn A leaves about $26 toward overhead and profit, while Lawn B leaves under $13. Over 30 cuts, the difference is around $390. Lawn B is not a bad customer. It is an underpriced one."
      },
      {
        "h2": "Fixing Without Losing Good Customers",
        "content": "The usual fix is a price adjustment at the start of next season, with a short honest explanation: \"Your property takes more time than we originally estimated, so the price per cut will be $55 starting in April.\" Most customers accept a reasonable increase from a company that does good work.\n\nFor a lawn far from the rest of your route, consider whether it can move to a day you are already nearby. If not, add a distance charge or let it go at the end of the season. For the routing side, see [building a route](/blog/lawn-mowing/dispatch-routing-lawn-mowing-software)."
      },
      {
        "h2": "Use It to Price New Work",
        "content": "After a season of job costing, you know your real minutes per 1,000 square feet with each mower, your real trim time on typical yards, and what kinds of properties run long. That is the data your next quotes should come from, rather than a competitor's price list or a guess. The [quoting post](/blog/lawn-mowing/estimating-quoting-lawn-mowing-software) shows how to turn those numbers into a price, and the [reporting overview](/features/field-service-reporting-analytics) covers the other reports that help."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "recurring-service-agreements-lawn-mowing-software",
    "title": "Per-Cut vs Monthly Mowing Billing: Which Fits Your Customers",
    "description": "The trade-offs between billing mowing per cut and a flat monthly price, setting a monthly price that holds up, and handling skipped cuts and cancellations.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Mowing customers can be billed two basic ways: for each cut as it happens, or a flat amount each month that covers the season. Both work. Both have traps. Per-cut billing is easy to understand but can mean dozens of small invoices and uneven cash flow. Monthly billing gives you predictable revenue but makes you decide what happens when it rains for a week or the grass stops growing in August. Most companies end up offering both. Here is how each one works, how to set a monthly price that holds up, and how to write the terms so nobody argues about it in July.",
    "sections": [
      {
        "h2": "How Per-Cut Billing Works",
        "content": "With per-cut billing, the customer pays for each visit. A lawn cut 28 times at $45 pays $1,260 for the season. If you skip a week because of drought or rain, the customer does not pay for it.\n\nPer-cut is easy to explain, and customers like that they only pay for what they get. The downside is invoice volume and cash flow that follows the weather. A card on file with an auto-charge when the job is marked complete solves most of the volume problem: the crew finishes the lawn, the card is charged, and the customer gets a completed alert. No one in the office touches it."
      },
      {
        "h2": "How Monthly Billing Works",
        "content": "With monthly billing, you estimate the number of cuts in the season, multiply by the price per cut, and divide by the number of billing months. Say 28 cuts at $45 is $1,260. Spread over eight months, April through November, that is $157.50 a month.\n\nCustomers like the predictability, and so does your bank account. The catch is that some months have five mowing weeks and some have three, so the customer pays the same for different amounts of service. That is fine as long as they know it up front.\n\nSome companies bill monthly only from April through October and charge the final November cuts per cut, which avoids billing a full month for two or three visits. Others bill twelve equal months and include winter services like leaf or snow work. Choose what fits your season and say so clearly on the estimate, so the first invoice of the year matches what the customer expected."
      },
      {
        "h2": "Write Down What Monthly Covers",
        "content": "Monthly pricing only works if the terms are clear. Spell out the season start and end, roughly how many cuts are included, and what happens when you skip because of weather or drought. Many companies say the monthly price is based on a full season and already accounts for a few skipped weeks, so there are no credits for normal weather.\n\nDecide what happens with extreme cases, such as a drought where you skip four weeks in a row. Some companies offer a credit beyond a set number of skipped cuts. Others switch the customer to biweekly. Whatever you choose, put it on the estimate the customer approves."
      },
      {
        "h2": "Billing Monthly Without the Monthly Work",
        "content": "Monthly billing should not mean someone in the office building 200 invoices on the first of the month. Set the customer up for monthly period billing, and the invoice goes out each period for the agreed amount. With a card on file, it can be charged automatically.\n\nUnpaid invoices get three automatic payment follow-ups, and a declined card triggers an alert so you can reach the customer before the next billing. In IndustryBossPro the QuickBooks export gives your bookkeeper the invoices and payments without retyping, though it is an export file you send over, not a live sync."
      },
      {
        "h2": "Cancellations and Mid-Season Changes",
        "content": "Monthly billing creates a fairness question when a customer cancels. If they cancel in July after you cut more in April and May than the monthly price covered, they have underpaid. If they cancel in October after a dry August, they may have overpaid.\n\nThe simplest approach is a cancellation term on the agreement: the customer gives notice, and you settle up based on actual cuts at the per-cut price. Record the cancellation reason too. Over a season, those reasons tell you whether people are leaving because of price, service, moving or a competitor.\n\nRecurring customers expect stable prices, but costs go up. The cleanest time to change a price is at the start of a season, with notice in the renewal. Mid-season increases annoy customers and should be saved for real changes, such as a property that turned out to take far longer than quoted.\n\nWhen you raise prices, do it the same way for everyone on the same service, with a short honest reason, and change the price on each recurring service so the next invoice is right. Customers who see a new price on an invoice without warning are the ones who call angry. A one-line note sent a few weeks before the change avoids most of those calls.\n\nLong-term customers who pay on time and refer neighbors are worth a smaller increase. They are the cheapest customers to keep, and the hardest to replace."
      },
      {
        "h2": "Which Should You Offer?",
        "content": "Many companies offer both and let the customer pick. Per-cut appeals to customers who travel, want to skip weeks, or simply like paying as they go. Monthly appeals to customers who want one predictable bill and do not want to think about it.\n\nIf you prefer one, steer gently. A small discount on monthly billing with a card on file is a common way to encourage it, because predictable revenue and fewer invoices are worth something to you. Show both prices on the estimate so the choice is easy. The [quoting post](/blog/lawn-mowing/estimating-quoting-lawn-mowing-software) covers building that estimate."
      },
      {
        "h2": "Getting Cards on File",
        "content": "Both billing styles work far better with a card on file. Ask for it when the customer approves the estimate, or during spring renewals for existing customers. Customers can also pay invoices and see their history in the customer app. The more customers on auto-charge, the less time the office spends collecting. See the [payment processing overview](/features/field-service-payment-processing) for how card on file and auto-charge work."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "seasonal-demand-planning-lawn-mowing-software",
    "title": "Planning a Mowing Season: Spring Flush, Summer Slowdown and Fall Leaves",
    "description": "How mowing workload shifts from spring through fall, when to hire and when to stop selling, filling the summer slowdown, and booking fall leaf jobs early.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "A mowing season is not one steady stretch of work. It starts with a rush of spring cleanups and first cuts, peaks with fast spring growth when every lawn seems to need cutting twice a week, eases into a summer slowdown in many regions, then picks up again with fall growth and leaves. Companies that plan for those swings hire at the right time, sell when they have room, and keep crews busy in the slow weeks. Companies that do not plan spend May turning down work and August paying crews to wait.",
    "sections": [
      {
        "h2": "Late Winter: Renew and Count",
        "content": "The season starts before the first cut. In late winter, send renewals to last year's customers with this season's prices, and get cards on file. Knowing how many customers are coming back tells you how many crews you need, how much equipment to service, and how hard to push spring sales.\n\nLook at last season's cancellation reasons before you set prices. If many people left over price, be careful with increases. If most left because they moved, your service and price are probably fine."
      },
      {
        "h2": "Spring Cleanups and First Cuts",
        "content": "Spring cleanups (removing leaves and debris, cutting back beds, first mow) come in a burst, usually over a few weeks. They are one-time jobs that compete with the start of recurring mowing for crew time.\n\nCollect cleanup requests early and keep them on the Pending Jobs board. Then use the Waiting List map to circle an area and schedule all the cleanups there onto a day and crew in one step. Doing cleanups by neighborhood instead of in the order they were requested saves hours of driving. Schedule recurring mowing to start in each area once cleanups there are done."
      },
      {
        "h2": "The Spring Flush",
        "content": "Peak spring growth is the hardest part of the season. Grass grows fast, rain delays stack up, and every lawn takes longer. Biweekly lawns are especially hard to cut well. This is when routes stretch, crews work late, and quality slips.\n\nPlan for it. Do not sell your crews to full capacity based on summer workloads, because spring takes more time per lawn. Leave room in each day, consider Saturday work for catch-up, and set clear rain-day rules. The [rain day post](/blog/lawn-mowing/automated-rescheduling-for-weather-in-lawn-mowing-scheduling-software) covers those choices."
      },
      {
        "h2": "When to Stop Selling",
        "content": "Every company hits a point in spring where the crews are full. Selling past that point leads to late cuts, angry customers and burned-out crews. The best way to know where that point is: add up planned hours for each crew's days and compare them to a reasonable shift.\n\nWhen a day is full, stop selling in that area, or start a waitlist for the next opening. A new crew needs equipment and people you trust, which takes time to arrange. If you expect to need another crew by May, start hiring in March.\n\nThe most common seasonal mistake is hiring too late. By the time crews are visibly overloaded in May, good workers already have jobs, and a new hire needs a week or two to get up to speed.\n\nLook at last season's planned hours by week and this season's renewal count. If the spring flush was already tight with your current crews, and you have more customers this year, you need another person before the rush, not during it. Many companies start recruiting in February and have new crew members trained on cleanups in March, so they are ready when recurring mowing peaks.\n\nThe same logic applies to equipment. If you will need another mower for a new crew, order it in winter, when dealers have stock and service departments have time.\n\nPlan for turnover, too. Mowing crews often lose a person in midseason. Knowing who you would call, and having one experienced person who can step into any crew, keeps a resignation from turning into a missed week."
      },
      {
        "h2": "The Summer Slowdown",
        "content": "In many regions, growth slows in the heat of summer, especially without irrigation. Lawns need less time, some customers switch to biweekly, and crews may finish early.\n\nUse the slack. Summer is a good time for one-time work: bed cleanups, mulch, hedge trimming, small projects. Upsell alerts after a completed cut can offer those services to the customers who would benefit. It is also the time to service equipment that took a beating in spring and to look at job costing to find underpriced lawns before fall.\n\nSummer is also a good time to sell next year. Customers are happy with how their lawn looks, and a short message asking for referrals or offering a discount for a neighbor who signs up can fill gaps in your routes. Tag those referrals so you know where they came from, and schedule new neighbors onto the day you already mow that street.\n\nIf the slowdown is deep in your area, consider which crew members want fewer hours for a few weeks. Some will welcome a shorter week in July; others will need the full hours. Asking ahead avoids losing good people over a few slow weeks. A short conversation in June is cheaper than hiring and training a replacement in August."
      },
      {
        "h2": "Fall Growth and Leaves",
        "content": "Fall brings a second growth spurt for cool-season grass and then leaves. Leaf cleanups are high-value work, but they all come at once. Sell them early, in September, with a set price or a price range by property size, so you can schedule the work before the rush.\n\nKeep leaf jobs on the Pending Jobs board and schedule them by area, the same way as spring cleanups. Many companies combine the final mow with a leaf cleanup to save a trip."
      },
      {
        "h2": "End of Season Review",
        "content": "When the last cut is done, look back while it is fresh. Which days were too long? Which lawns lost money? Which areas grew and which shrank? How many days did you lose to rain? The answers shape next season's routes, prices and hiring. The [job costing post](/blog/lawn-mowing/job-costing-lawn-mowing-software) and the [reporting overview](/features/field-service-reporting-analytics) cover the numbers worth reviewing."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "crew-assignment-and-balancing-in-lawn-mowing-scheduling-software",
    "title": "Two-Man or Three-Man Mowing Crews, and Who Goes Where",
    "description": "How to size mowing crews, split roles between the mower and the trimmer, match crews to the right routes, and keep every crew's workday about the same length.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Crew size is one of the biggest decisions in a mowing company, and most owners make it by habit rather than by numbers. Two people per truck is common, but it is not always right. A three-person crew on the right route can be more productive per labor hour than two two-person crews. A solo operator can be very profitable on small yards close together. The answer depends on the size of the lawns, how much trimming each one needs, and how close the stops are. Here is how to think through crew size, roles and balance.",
    "sections": [
      {
        "h2": "Match Crew Size to the Route",
        "content": "The right crew size depends on how the work splits. On a typical suburban lawn, one person mows while the other trims, edges and blows. If the mowing and trimming take about the same time, a two-person crew is efficient: both finish at the same moment and move on.\n\nIf the lawns are large and open, mowing takes longer than trimming, and a second mower or a larger deck may help more than a third person. If the lawns are small with lots of beds and fences, trimming takes longer than mowing, and a third person on trim and blow can keep the mower moving. Time a few typical stops and see where the waiting is."
      },
      {
        "h2": "Define Roles Clearly",
        "content": "On every crew, someone is the lead. The lead is responsible for the order of the day, quality, customer issues and talking to the office. The others have defined jobs: mower, trimmer, blower and edger.\n\nClear roles speed up every stop. When everyone knows exactly what they do on arrival, there is no standing around deciding. Rotate roles now and then so everyone can cover for a missing crew member and nobody gets stuck on the string trimmer all season.\n\nWrite each role down in a few lines, short and specific, including the end-of-stop checklist: gates closed, clippings blown off hard surfaces, nothing left in the yard. A new hire learns the job in days instead of weeks when the expectations are written down, and the crew lead has something to point to when a stop is not up to standard.\n\nThe crew lead should also be the one who handles customers on site. If a homeowner walks out with a question or a complaint, the lead takes it, and anything the office needs to know goes back as a crew note."
      },
      {
        "h2": "Assign Routes to Crews on Purpose",
        "content": "Not all crews are equal. A crew with a strong lead might take your most demanding customers. A crew with bigger mowers takes the open properties. A newer crew might start on simpler routes.\n\nAssign each day's work to a specific truck. When a truck has the same route on the same day every week, the crew learns the properties, the gate codes and the customers' preferences. That knowledge shows up in faster stops and fewer complaints. Property notes in the crew app fill in the gaps for anyone covering."
      },
      {
        "h2": "Balance by Time, Not Stops",
        "content": "A crew with 30 small lawns and a crew with 15 large ones may have the same workday or very different ones. Balance by total time: minutes on site plus driving. Use real data where you can. Clock in and out in the crew app and the time each stop is marked done tell you how long each crew's day actually is.\n\nThe employee hours report shows hours by person. In IndustryBossPro, job costing compares planned hours against actual on each job, so you can see which crew's days are running long and which properties are pulling them over.\n\nCrew balance is also about pay. A crew that runs 11-hour days all spring may earn a lot in overtime, which can make your labor cost per cut much higher than you priced. A crew that finishes early every day may be underpaid compared with what they expected, and they may leave.\n\nAim for days that are full but finish at a reasonable time. Use overtime deliberately, such as Saturdays to catch up after rain, rather than as a permanent part of every week. Job costing uses each worker's actual pay rate, so if overtime is pushing the cost of a route up, it shows in the margin.\n\nTalk to your crews about the schedule. They know which stops always run long and which customers always have something extra. Their input makes the next route split better."
      },
      {
        "h2": "When a Crew Member Is Out",
        "content": "Someone will call in sick, usually on the busiest day. Decide your plan in advance. Does the crew run short-handed and finish fewer stops? Does a person from another crew move over? Do the remaining stops roll to the next day?\n\nA short-handed two-person crew rarely finishes a full route. It is usually better to move a cluster of stops to another crew's day, or to reschedule them to the next day so customers get a reschedule text, than to have one person cutting until dark and doing worse work."
      },
      {
        "h2": "Keep Crews Accountable Without Hovering",
        "content": "The office does not need to call crews all day. Progress shows as stops are marked done. The crew phone's GPS location during the day shows where the truck is. Photos and notes on each stop show the work. If a customer calls to say their lawn was missed, you can check the record in seconds.\n\nUse this to coach, not to police. If one crew is consistently slower on similar routes, ride along and look at the work. Often the cause is equipment, an unclear role or a route that was drawn badly, not the people."
      },
      {
        "h2": "Grow Crews in Steps",
        "content": "When you add a new crew, pull your best crew member to lead it, and fill their spot with a new hire on an experienced crew. That keeps quality steady across both crews. Give the new crew a manageable route and let them grow into a full one. For territory splits, see [splitting routes between crews](/blog/lawn-mowing/route-optimization-multiple-crews-lawn-mowing-software), and for the mobile side, the [crew app overview](/features/field-service-mobile-app)."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  },
  {
    "slug": "equipment-inventory-tracking-lawn-mowing-software",
    "title": "Keeping Mowers Running: Equipment Habits for a Small Mowing Company",
    "description": "Daily checks, blade sharpening, backup machines and parts on the shelf: equipment habits that keep a mowing crew from losing a day to one broken mower.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "The most expensive thing that can happen to a mowing crew on a Tuesday morning is a broken mower. The crew is on site, the route is planned, and suddenly nothing gets cut until the machine is fixed or replaced. One lost day means 25 or 30 lawns pushed to the rest of the week. Most of those breakdowns are predictable. Dull blades, low oil, loose belts and worn tires give warning signs long before they fail. This post covers the equipment habits that keep crews running, and how to think about equipment cost when you price your work.",
    "sections": [
      {
        "h2": "The Two-Minute Daily Check",
        "content": "Every morning before the truck leaves, someone should check each machine: engine oil, fuel, tire pressure, blades, belts, and any loose bolts or guards. On a zero-turn, check the hydraulic fluid and look for leaks. On trimmers and blowers, check the fuel mix and the line or air filter.\n\nIt takes a few minutes per crew and catches most problems before they become breakdowns. Make it one person's job on each crew so it actually happens. A simple paper checklist on the truck works fine for this."
      },
      {
        "h2": "Sharp Blades Save Time and Grass",
        "content": "Dull blades tear grass instead of cutting it, which leaves ragged tips that brown and invites disease. They also make the mower work harder, use more fuel, and often require a second pass. Customers notice a lawn cut with dull blades, especially in the heat.\n\nMany companies sharpen or swap blades every day or two of heavy mowing. Keep a sharpened spare set for each mower on the truck so a crew can swap blades after hitting a rock without losing time."
      },
      {
        "h2": "Have a Backup Machine",
        "content": "With more than one crew, one spare mower and spare trimmer and blower can save many lost days. When a machine goes down, the crew grabs the spare and keeps working while the broken one is repaired. Even a single-crew operator can benefit from an older backup mower kept running.\n\nWhen a breakdown happens anyway, the crew lead sends a note to the office from the crew app, so the office can decide right away whether to bring a spare, move stops to another crew, or reschedule the rest of the day.\n\nKeep the backup ready to go: fueled, sharp blades and checked tires. A spare that has been sitting since last fall and will not start is not a backup. Run it every week or two, and rotate it into regular use now and then so it stays in working shape. Store the backup somewhere that a second truck can reach quickly, so the spare gets to the crew within the hour, not the afternoon. One hour of downtime is an annoyance; a lost afternoon pushes ten lawns into tomorrow."
      },
      {
        "h2": "Parts on the Shelf",
        "content": "The parts that fail most often (blades, belts, spark plugs, air filters, trimmer heads, tires and tubes) should be on a shelf in the shop, not ordered after they break. Waiting three days for a belt can cost far more than the belt.\n\nSoftware does not count what is on your shelf. A simple list on the shop wall with what to keep in stock, checked weekly, does the job. For materials you use on customer jobs, like mulch or seed, the materials list holds the cost so it can show up in job costing."
      },
      {
        "h2": "Off-Season and Mid-Season Service",
        "content": "Give each mower a full service before the season: oil change, filters, blades, belts, spindles, tire check and a full grease. Then schedule a mid-season service around midsummer, when growth often slows and crews have more room.\n\nKeep a simple service log for each machine, whether in a notebook or a spreadsheet: date, hours, what was done. IndustryBossPro does not track equipment maintenance, so this lives outside the software. Over time the log tells you which machines cost the most to keep running and when it is time to replace them.\n\nEvery machine reaches a point where repairs cost more than they are worth. The signs are familiar: a mower in the shop every few weeks, a list of small fixes that keeps growing, a deck that no longer cuts evenly. Each repair seems cheap compared with a new machine, but the lost crew time is the real cost.\n\nA simple rule many owners use is to compare the past year's repair costs plus the cost of downtime with the yearly cost of a replacement. If an older mower cost $1,800 in repairs and caused three lost crew days, that downtime alone might be worth more than the repairs. At that point, replacing it is usually cheaper.\n\nPlan replacements in the off-season, when you can shop and have time to set up the new machine. Rotating the oldest mower into the backup role and buying a new one for the busiest crew keeps a reliable machine on every route."
      },
      {
        "h2": "Count Equipment in Your Prices",
        "content": "Equipment is a real cost of every cut. A $12,000 zero-turn that lasts four seasons of heavy use costs about $3,000 a season before repairs. Spread over the number of lawns it cuts, that is a cost per cut you need to cover. Add trimmers, blowers, the trailer and the truck, and equipment is a meaningful part of overhead.\n\nWhen you set your target price per crew-hour, include equipment. The [quoting post](/blog/lawn-mowing/estimating-quoting-lawn-mowing-software) shows how a price per crew-minute is built, and equipment is part of the number above labor."
      },
      {
        "h2": "Match Equipment to the Work",
        "content": "The right machine saves time on every stop. A 60-inch deck on large open lawns, a 36-inch walk-behind for gated backyards, a 21-inch push mower for tiny yards and slopes. If a crew is regularly using the wrong machine for its route, either change the equipment or change the route.\n\nJob costing shows actual time per stop, so you can test this. Swap a crew's mower for a larger or smaller one for a few weeks and compare time on site for the same lawns. For more on crew setup, see [crew size and roles](/blog/lawn-mowing/crew-assignment-and-balancing-in-lawn-mowing-scheduling-software)."
      }
    ],
    "hubSlug": "lawn-mowing-software",
    "hubKeyword": "lawn mowing software",
    "industry": "lawn-mowing"
  }
];

export const hub: HubPageData = {
  "slug": "lawn-mowing-software",
  "industry": "Mowing",
  "isMain": true,
  "h1": "Lawn Mowing Software for Weekly and Biweekly Routes",
  "subtitle": "Keep every recurring cut on its day, route each crew by neighborhood, move a rained-out day in minutes, and bill per cut or monthly without chasing anyone.",
  "metaTitle": "Lawn Mowing Route Software | IndustryBossPro",
  "metaDesc": "Mowing software for weekly and biweekly routes: recurring visits, auto-routing by truck, rain-day reschedule texts, crew app, and per-cut or monthly billing.",
  "heroPoints": [
    "Weekly (7-day) and biweekly (14-day) cuts come due on their own, no weekly rebuilding",
    "Circle a neighborhood on the map and schedule it onto a truck and day in one step",
    "Bill per cut with auto-charge on completion, or monthly with period invoices"
  ],
  "painPoints": [
    {
      "problem": "Rebuilding the week's mowing list every Sunday night",
      "solution": "Each property has a recurring service with a 7 or 14 day interval. When a cut is marked done, the next one comes due on schedule."
    },
    {
      "problem": "A rained-out Tuesday turns into 40 phone calls",
      "solution": "Reschedule the day and every customer on it gets a reschedule text. Auto-routing reorders any day you add stops to."
    },
    {
      "problem": "Cuts get done but never get billed",
      "solution": "Billing follows the crew app: mark the lawn done and a card on file is charged, or the visit rolls into the monthly invoice."
    }
  ],
  "features": [
    {
      "icon": "🔁",
      "title": "Recurring Cuts",
      "desc": "Weekly, biweekly or any interval in days on each property, so every cut comes due on time without manual scheduling."
    },
    {
      "icon": "🗺️",
      "title": "Auto-Routing by Truck",
      "desc": "Assign a day's lawns to a truck and the stops are ordered by distance, so crews drive less between yards."
    },
    {
      "icon": "📱",
      "title": "Crew App",
      "desc": "Stops in order with navigation, gate codes and notes, time clock, mark done, skip with a reason, photos and notes to the office."
    },
    {
      "icon": "🌧️",
      "title": "Reschedule a Day",
      "desc": "Move a rained-out day to a new date and customers on it get a reschedule text automatically."
    },
    {
      "icon": "💳",
      "title": "Per-Cut or Monthly Billing",
      "desc": "Auto-charge a card on file when a cut is done, or bill by period, with three automatic payment follow-ups."
    },
    {
      "icon": "📊",
      "title": "Job Costing",
      "desc": "Labor from crew clock-in times and pay rates, planned vs actual hours, and margin on every mowing account."
    }
  ],
  "pendingBoard": "Recurring lawns that are due show on the Waiting List; circle a neighborhood on the map to put those lawns on one truck and day in a single step. One-time work like spring cleanups, extra cuts and leaf jobs waits on the Pending Jobs board until you drop it onto the day a crew is already in that area.",
  "blogSiloIndustry": "lawn-mowing",
  "blog1Slug": "lawn-mowing-software-complete-guide",
  "blog1Title": "Running a Mowing Company: Routes, Crews, Rain Days and Getting Paid"
};
