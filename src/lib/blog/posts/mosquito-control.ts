import type { BlogPost } from '../types';
import type { HubPageData } from '../../hub-data';

export const posts: BlogPost[] = [
  {
    "slug": "complete-guide-to-mosquito-control-software",
    "title": "How to Run a Mosquito Barrier Spray Program, Start to Finish",
    "description": "What a mosquito barrier spray program involves: where the product goes, the 21-day interval, season length, records, pricing, and running it beside lawn care.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A mosquito barrier program is one of the easiest services a lawn company can add, and one of the easiest to run badly. The equipment is a backpack mist blower and a few products. The hard part is everything around the spraying: hitting every yard on a tight interval for five or six months, keeping clean application records, getting into backyards with gates and dogs, working around wind and rain, and billing a season of visits without chasing anyone. This guide walks through how a barrier program actually runs, in the order you will face it, so you can decide how to set yours up before the first warm week of spring.",
    "sections": [
      {
        "h2": "What a barrier treatment actually does",
        "content": "A barrier treatment is not fogging the air. Adult mosquitoes spend the day resting in cool, shaded, humid places, and a barrier spray puts a residual product on those surfaces so mosquitoes that land there die. The product keeps working for a few weeks, then breaks down from sun, rain and plant growth. That is why the service repeats on a schedule instead of being a one time job.\n\nMost programs use a synthetic pyrethroid applied with a backpack mist blower, sometimes with an insect growth regulator in the tank. Whatever you use, the label is the law. It sets the rate, where you can and cannot apply, re-entry rules, and conditions like wind and rain. Before you sell a single yard, make sure whoever sprays holds the license your state requires for commercial application. Most states require one for this work, and the category can differ from your lawn license."
      },
      {
        "h2": "Where the product goes on a typical yard",
        "content": "A good technician treats where mosquitoes rest, not where people stand. That means the underside of leaves on shrubs and foundation plantings, the shaded side of fences, under decks and porches, dense ground cover, tree trunks and lower canopy up to reachable height, and the edges of wooded lots. Open, sunny lawn holds very few resting mosquitoes, so blasting it wastes product and time.\n\nEvery visit should also include a quick look for standing water: clogged gutters, buckets, tarps, tire swings, birdbaths, plant saucers and kids' toys. Dumping water is free and often does as much good as the spray. Where water cannot be dumped, many applicators drop a larvicide product labeled for that use. Teach your techs to mention what they found in a note so the customer knows why the yard still has a problem spot.\n\nFlowering plants deserve care. Pollinators work blooms during the day, and many labels restrict spraying plants in bloom. Train crews to skip open flowers and to work the green, shaded structure instead."
      },
      {
        "h2": "The interval and the season",
        "content": "Most barrier programs run every 21 days, give or take a few days, because that is about how long the residual holds up in summer. Some companies use a 30-day interval in drier climates or for budget programs. Pick one standard and stick to it; mixing intervals inside one route makes scheduling harder than it needs to be.\n\nSeason length follows your climate. In much of the South the season can start in March and run into November. Farther north it may be late May through September. Count backward from your last likely spray date to find how many visits a season holds. At 21 days, a season from mid April to mid October is roughly nine visits, which becomes the number you price the season around. More on this in [setting up 21-day intervals](/blog/mosquito-control/scheduling-features-in-mosquito-control-software)."
      },
      {
        "h2": "Records you are expected to keep",
        "content": "Every application should leave a record: date, property, product, amount used, area treated, who applied it, and the conditions at the time. Your state decides exactly what is required and how long to keep it, so check its record-keeping rules once and build your habits around them.\n\nThe practical way to keep records is to capture them at the yard, on the phone, before the tech walks back to the truck. Paper tickets filled out at the end of the day are where records go missing. In IndustryBossPro the tech picks a saved product mix, enters the amount and area, and the record attaches to that property and visit with the applicator's name on it. When the state asks, or a neighbor complains about drift, you can print the chemical report instead of digging through a glovebox. The details are in [what to write down after every yard](/blog/mosquito-control/inventory-and-chemical-supply-tracking-in-mosquito-control-software)."
      },
      {
        "h2": "Pricing and how customers pay",
        "content": "Price per visit based on the treated area, not the total lot. A half acre lot that is mostly open lawn with a few beds takes less time and product than a quarter acre wooded lot with a fence line full of brush. Measure the actual treatment zones, figure your product and labor cost, and add margin.\n\nThen decide how the season gets paid. Some customers want to pay each visit. Others prefer an even monthly charge or prepaying the whole season for a small discount. Offering all three is fine as long as your billing can handle them without hand work. A card on file that is charged when the visit is marked done removes most of the collection work. [Pricing a barrier spray](/blog/mosquito-control/estimating-and-quoting-with-mosquito-control-software) walks through the math."
      },
      {
        "h2": "Running it next to a lawn program",
        "content": "If you already run lawn care, you have most of what a mosquito program needs: customers who trust you, routes through the same neighborhoods, and people who are used to handling product and keeping records. The usual mistake is treating mosquito work as an afterthought squeezed onto mowing or fertilizer days. Give it its own recurring service with its own interval, its own routes and its own spray days, and it behaves like a real line of business instead of a pile of exceptions.\n\nSet the program up so the office can see who is due, the tech sees the gate code and the dog note before opening the gate, and the customer gets a text the night before so they bring pets in and close windows. That is the whole job, repeated nine or ten times a season across every yard you sell. If mosquito control is the only service you run, PestBossPro (https://pestbosspro.com) is the version built just for it. If it sits next to lawn care, the [mosquito control software](/mosquito-control-software) page shows how both run from one place."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "scheduling-features-in-mosquito-control-software",
    "title": "Setting Up 21-Day Mosquito Intervals So No Yard Falls Behind",
    "description": "How to choose a mosquito spray interval, set season start and stop dates, catch up after rain days without drift, and fit event sprays into a full route.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "The most common way a mosquito program loses customers is not bad spraying. It is a yard that quietly goes 35 days between visits because a rain week pushed everything back and nobody noticed one address never got rebooked. Customers notice the bites before you notice the gap. The fix is less about working harder and more about setting up the schedule so the interval is enforced by the system, not by someone's memory. Here is how to set intervals, season dates, rain recovery and one-off sprays so every yard stays on time.",
    "sections": [
      {
        "h2": "Why 21 days, and when to use something else",
        "content": "The 21-day interval exists because most residual barrier products lose much of their punch after about three weeks of summer sun, rain and new leaf growth. Spray at 21 days and the next treatment lands before the last one has fully worn off. Stretch it to 28 or 30 and you open a window at the end of each cycle where bites come back.\n\nThat does not mean 21 days is right for everyone. In dry climates or early and late in the season, some companies run 28 or 30 days and price accordingly. A few offer a premium 14-day option for heavy wooded lots near water. The key is to treat the interval as part of the product you sell. Write it on the estimate, set it on the service, and do not quietly let it slide during busy weeks."
      },
      {
        "h2": "Season start and stop dates",
        "content": "Start spraying when adult mosquitoes are active and nights stay warm, not when the first customer calls. Spraying too early burns a visit on a yard that has no mosquitoes yet. Most operators set a single start window for their area and a soft stop date tied to the first frost, then adjust a week either way based on the year.\n\nPut the first and last dates on the program itself. If you sell nine visits from mid April, the schedule should know there are nine, so the tenth does not appear in late October when nobody wants it. Customers who sign up mid season simply join the cycle late and pay for the visits that remain."
      },
      {
        "h2": "Put the interval on the service, not in your head",
        "content": "In IndustryBossPro a mosquito service is a recurring service with a repeat every set number of days, so 21 means 21. When a visit is marked done, the property comes back onto the Waiting List when its next treatment is due. Each morning, or each Friday for the week ahead, the office opens the Waiting List and sees exactly which yards are due and how many days overdue any of them are.\n\nFrom there, scheduling a spray day is a map job. Circle a neighborhood on the map, the due properties inside it are picked, and they go onto a day and truck in one step. Auto-routing then orders the stops by distance. The point is that nobody has to remember the Hendersons were last sprayed on the 3rd. The system knows, and the overdue count on the Waiting List tells you if the program is slipping before customers do. The [scheduling features](/features/field-service-scheduling-software) page shows the screens."
      },
      {
        "h2": "Rain days: catching up without drift",
        "content": "Rain is the biggest threat to an interval. Most labels say not to apply right before rain or to wet foliage, and a downpour an hour after spraying wastes the product. So you will lose days. What matters is how you recover.\n\nWhen a day washes out, move the whole day rather than scattering its stops across the week. Reschedule it to the next open spray day and customers get a reschedule text, so they are not watching for a truck that is not coming. If you lose two or three days in a row, push the oldest yards first. A yard on day 24 goes ahead of one on day 19.\n\nWatch for drift. If the next visit is always counted from the day the last one was completed, a four-day rain delay pushes every future visit back four days, and over a season you lose a whole treatment. Some companies accept that. Others pull the following visit back in a little to get back on the original rhythm. Either way, decide on purpose. The software will not watch the forecast for you, so the call to cancel a day is yours, made early enough to send the text the night before."
      },
      {
        "h2": "Event sprays and one-time add-ons",
        "content": "Graduation parties, weddings and Fourth of July cookouts bring a burst of one-time requests. They are good money and a good way to win a season customer, but they can wreck a recurring route if you let them. Price them higher than a program visit, ask for at least 48 hours notice, and schedule them for the day before the event so the product is dry and fresh.\n\nIf the event yard is already on a program, check how close its next regular visit is. If it is due within a week, move the regular visit to the day before the party instead of doing two sprays close together. One visit serves both purposes, and you stay within label limits on how often you treat."
      },
      {
        "h2": "Pauses, cancellations and the reasons behind them",
        "content": "Customers travel, sell houses and change their minds. When someone pauses, put the pause on the program instead of deleting visits, so they come back on the Waiting List when they return. When someone cancels, record the reason. Over a season, cancellation reasons tell you whether you are losing people to price, to bites between visits, to moving, or to a missed treatment. Only one of those is outside your control.\n\nA short note from the tech after each visit also protects you. A line like \"gate locked, left note, will return Thursday\" or \"standing water in boat cover, told customer\" turns a complaint call into a quick answer. The [routing post](/blog/mosquito-control/dispatch-and-routing-in-mosquito-control-software) covers how to handle the locked gates and loose dogs that cause most of those skips."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "dispatch-and-routing-in-mosquito-control-software",
    "title": "Routing Mosquito Spray Days Around Wind, Gates and Dogs",
    "description": "Plan mosquito spray routes around wind windows, refill stops and backyard access, and handle locked gates and loose dogs without losing the rest of the day.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A mosquito route looks simple on a map: twenty yards in a cluster, a backpack, a truck. In practice the day is shaped by things a map does not show. Wind picks up by late morning. A third of the yards have a locked gate, a dog, or both. The tank needs refilling every few stops. A tech who spends ten minutes at every gate waiting for someone to answer the door can lose four yards a day. This post is about building spray days that survive those problems.",
    "sections": [
      {
        "h2": "Spray when the air is calm",
        "content": "Mist blowers move fine droplets, and fine droplets drift. Most product labels give wind limits and warn against applying when drift is likely to reach places it should not go. In many areas the calmest air is early morning, and wind builds from late morning into the afternoon. Many companies start mosquito routes at first light and plan to finish the heaviest wooded yards before the breeze picks up.\n\nEarly starts have a second benefit: pollinators are less active on cool mornings, and customers are usually home, which helps with gates. The tradeoff is noise. A mist blower at 6 a.m. next to a bedroom window will generate a complaint. Start the day in yards with more space between houses, or with commercial or HOA common areas, and work into tight subdivisions after 7 or 8."
      },
      {
        "h2": "Build tight clusters first, then order them",
        "content": "Drive time is where spray days lose money. A mosquito stop might be 15 to 25 minutes of spraying, so ten extra minutes of driving between each yard can cost you a third of the day. Group yards by neighborhood and spray a neighborhood on the same day every cycle, so the route stays dense as you add customers.\n\nOn the Waiting List, circle the neighborhood on the map, put the due yards on a truck for the day, then let auto-routing order them by distance. Look at the result before you send it. The software orders stops by distance, but it does not know that the wooded lot by the creek should go first while the wind is still down, or that one customer asked for an afternoon visit. Drag those few stops where they belong and leave the rest. The [route optimization](/features/service-route-optimization-software) page shows how the ordering works."
      },
      {
        "h2": "Plan refills and mixing like stops",
        "content": "A typical backpack mist blower holds a few gallons of mix, which might cover one large yard or a few small ones. If your tech has to drive back to a shop to refill, that trip belongs in the plan. Most crews carry a mixing tank or a few premeasured jugs on the truck and refill at the tailgate.\n\nKeep the mix consistent. Save your standard tank mix with its rates as a product mix, so every tech mixes the same thing and the application record fills in correctly. If one tech mixes heavy to save refills, you get uneven results, higher product cost and possibly an over-label application. Consistent mixes also make it easy to see product use per yard later, which feeds [job costing](/blog/mosquito-control/job-costing-with-mosquito-control-software)."
      },
      {
        "h2": "Gates, dogs and backyard access",
        "content": "Most of the treatment happens in backyards, so access is the job. Capture the gate code, which gate to use, where the dog is kept, and any \"do not spray\" areas like a vegetable garden or a koi pond in the property notes when you sell the account. The crew app shows those notes at the stop, so the tech reads them before opening the gate, not after.\n\nThe night-before text does a lot of work here. Tell customers when they sign up that spray day means gates unlocked, pets inside and windows closed, and the night-before text becomes their reminder that tomorrow is spray day. That prevents most access problems before they happen. Customers who get the text and still forget usually are not upset when the skip alert arrives, because they were warned."
      },
      {
        "h2": "Keep the route the same from cycle to cycle",
        "content": "The best mosquito routes barely change. If the Maple Ridge neighborhood is sprayed on a Tuesday this cycle, it should be sprayed on a Tuesday three weeks from now, by the same tech, in roughly the same order. Customers learn the rhythm, gates get left open without reminders, and the tech stops needing to read the notes because they already know which yard has the anxious beagle.\n\nRain will break the pattern now and then. When it does, put the neighborhood back on its usual day at the next cycle rather than letting the whole program slide permanently by a day or two each time. A route that holds steady is also easier to price, because the drive time between stops stays the same and your job costing numbers mean something from one month to the next."
      },
      {
        "h2": "When to skip, and how to tell the customer",
        "content": "Some stops should not be sprayed. A dog in the yard, kids playing, a locked gate, a party setting up, or wind that is clearly too strong for that lot. Spraying anyway risks a complaint at best and a label violation at worst. Give your techs permission to skip and a clear way to do it.\n\nIn the crew app the tech skips the stop with a reason, and the customer gets a skipped alert so they know what happened. The yard goes back on the Waiting List, and the office decides whether to slot it into tomorrow or the next pass through that area. A skip with a reason and a quick reschedule reads as a professional company. A tech who just drives off with no message reads as a no-show."
      },
      {
        "h2": "When the day falls apart at 11 a.m.",
        "content": "Wind arrives early, a storm cell pops up, or the tank pump fails. Decide fast what happens to the rest of the stops. If the remaining yards are open, low-drift lots, the crew may be able to finish. If not, stop, and move the rest of the day to the next open slot so those customers get a reschedule text instead of an empty afternoon.\n\nGPS on the crew phone lets the office see where the truck is without calling, which matters when you are deciding whether to move stops. At the end of the day, look at how many stops were skipped and why. If the same yards are skipped every cycle for the same reason, fix the cause (a new gate code, a different day, a call to the customer) instead of rerouting around it forever. For the scheduling side of rain days, see [setting up 21-day intervals](/blog/mosquito-control/scheduling-features-in-mosquito-control-software)."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "estimating-and-quoting-with-mosquito-control-software",
    "title": "How to Price Mosquito Barrier Spray Without Losing Money on Big Lots",
    "description": "Price mosquito barrier spray from treated area, product cost and labor, build lot-size tiers, quote the season total, and follow up on estimates that go quiet.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Mosquito pricing goes wrong in two directions. Some companies copy a competitor's flat rate and discover by July that their wooded half-acre yards take twice the time and product of a typical lot. Others overthink it and send quotes three days after the homeowner asked, by which point someone else has the job. A good mosquito price is built from what the yard actually needs, packaged into a few simple tiers, and sent while the customer is still thinking about bug bites. Here is a way to get there.",
    "sections": [
      {
        "h2": "Measure the treated area, not the lot",
        "content": "The work in a barrier spray is in the shrubs, fence lines, under-deck spaces and wood edges, not the open grass. Two lots of the same size can need very different amounts of product. So start with the treatment zones: the perimeter beds, the shaded fence line, the tree line at the back, and any dense ground cover.\n\nYou can do this on a site visit, or from the office on the satellite map. Outline the beds and wooded edges on the measure map to get the square footage of what actually gets sprayed. After a few dozen yards you will see that most lots in a given subdivision fall into a narrow range, and you can quote similar homes without measuring each one."
      },
      {
        "h2": "Build the price up from cost",
        "content": "Work out what one visit costs you, then add margin. Here is an illustrative example, not a benchmark. Say your mix costs about $6 to treat a typical third-acre yard. Your tech earns $20 an hour, and with payroll costs that is closer to $25. The stop takes 20 minutes of spraying plus 10 minutes of driving and setup, so half an hour of labor is $12.50. Add a few dollars per stop for truck, fuel and equipment wear, call it $4. Your direct cost is about $22.50.\n\nIf you price that visit at $65, you keep about $42 before overhead like insurance, licensing, the office and marketing. If you price it at $45 because that is what the competitor's flyer said, you keep $22 and have much less room for rain days, re-sprays and slow weeks. Run this math with your own numbers, and run it again once you have real labor times from a few weeks of the season."
      },
      {
        "h2": "Simple tiers by lot type",
        "content": "Customers do not want a custom quote formula. They want a price. Most companies settle on three or four tiers, something like small lots up to a quarter acre, standard lots up to half an acre, large lots up to an acre, and custom pricing above that or for heavily wooded property. Within each tier, price the heaviest typical yard, not the lightest.\n\nPut your tiers in the service catalog so the office and the techs quote the same numbers. When a tech writes an estimate from the crew app at a lawn customer's door, the price should match what the office would have sent. Inconsistent quotes between neighbors are a real problem in subdivisions, because neighbors compare."
      },
      {
        "h2": "Quote the visit and the season",
        "content": "Show both numbers. A per-visit price looks small and approachable. A season total shows the commitment and makes a prepay discount meaningful. If a standard yard is $65 a visit and your season holds nine visits, the season is $585. A modest prepay discount still collects the money in spring, when you are buying product and hiring.\n\nBe clear about what the price includes. Most programs include a free re-spray between visits if bites come back, as long as the customer lets you know. Say so on the estimate, and set a limit, such as one per cycle, so it stays a guarantee and not an open tab. The [season packages post](/blog/mosquito-control/recurring-seasonal-service-agreements-in-mosquito-control-software) covers billing options."
      },
      {
        "h2": "Minimums and event pricing",
        "content": "Set a minimum visit price for the smallest yards. A townhome patio still takes a trip, a mix, a record and a setup. Below a certain price the stop costs more than it pays, no matter how quickly it goes.\n\nOne-time event sprays should cost more than a program visit, often 50 to 100 percent more, because they break your route and usually come with short notice. They are also a good sales opening. Many customers who buy a party spray will buy a season if you offer to credit part of the event price toward a program."
      },
      {
        "h2": "HOA common areas and commercial properties",
        "content": "Neighborhood associations, apartment complexes, restaurants with patios and event venues all buy mosquito service, and they price differently from homes. The treated area is larger, the work is often done on a schedule set by a board or manager, and the decision maker wants a written scope more than a friendly price.\n\nWalk the property or outline it on the map, list the treatment zones (pond edges, playground borders, clubhouse beds, wooded buffers), and price by time and product rather than by tier. A commercial quote should say which areas are included, the interval, any hours you cannot spray (pool open, restaurant service), and how the property will be notified before each visit. Bill commercial accounts monthly if that is how they pay their other vendors. A single HOA contract can be worth dozens of homes and often leads to residents asking about their own yards, so it is worth the extra time to quote it carefully."
      },
      {
        "h2": "Send it fast and follow up",
        "content": "Mosquito demand comes in bursts after the first warm, wet week of spring. The company that answers first with a clear price usually wins. Save an estimate template for each tier so the office can build and send a quote by text or email in a couple of minutes, and the customer approves it online.\n\nMost quotes do not get answered right away. The homeowner reads it at work and forgets. Automatic follow-ups handle that: the estimate sends up to three reminders if nobody answers, without anyone in the office tracking who is still deciding. Once it is approved, convert it straight into the recurring 21-day service so the yard lands on the Waiting List for its first spray. The [estimates and quoting](/features/field-service-estimates-quoting) page shows the approval flow."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "inventory-and-chemical-supply-tracking-in-mosquito-control-software",
    "title": "Mosquito Spray Records: What to Write Down After Every Yard",
    "description": "What a mosquito application record should include, how to save tank mixes, capture records at the yard, print reports, and use them to plan product orders.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Nobody starts a mosquito company because they love paperwork, but the application record is the part of the job that protects you. It answers the state inspector, the customer who wants to know what went near the vegetable garden, and the neighbor who thinks your spray drifted onto their patio. It also tells you how much product you actually use, which is the starting point for ordering and pricing. This post covers what to record, how to make recording fast at the yard, and how to use the records once you have them.",
    "sections": [
      {
        "h2": "Why the record matters more than it seems",
        "content": "Most states that license commercial applicators also require records of each application, kept for a set number of years. The exact fields and retention period vary, so read your state's rules once and set your records to match. The usual set includes the date and time, location, product name and registration number, amount applied, area or site treated, and the applicator's name and license number.\n\nBeyond the legal side, records settle arguments. When a customer calls three days later to ask whether you sprayed the backyard or just the front, a record with the area treated, the amount used and a photo answers it in a minute. Without one, you are refunding visits you actually did."
      },
      {
        "h2": "What a good mosquito record includes",
        "content": "For each visit, capture the property, the date, the product or tank mix, the total amount used, the areas treated, and who applied it. Add the conditions where your state asks for them, such as wind and temperature. Note any areas skipped and why (blooming plants, a pond, a garden the customer asked you to avoid) and anything you did for standing water, like dumping containers or placing a larvicide.\n\nThat sounds like a lot to write at every stop. It is not, if most of it fills in on its own. The property, date and applicator come from the visit itself. The product mix is chosen from a short list. The tech only types the amount, confirms the area, and adds a note when something was different."
      },
      {
        "h2": "Save the tank mix once",
        "content": "Most mosquito programs run one or two standard mixes all season, perhaps an adulticide alone and the same adulticide with a growth regulator. Save each one as a product mix with its products and rates. When a tech selects the mix and enters the gallons sprayed, the record shows what went into those gallons without the tech doing the math in the yard.\n\nSaved mixes also keep crews consistent. Everyone mixes the same recipe at the same rates, which keeps results even across trucks and keeps you within label rates. If you change products mid season, add the new mix and retire the old one, so the records always reflect what was in the tank that day."
      },
      {
        "h2": "Record it at the yard, not at the end of the day",
        "content": "Records written at 6 p.m. from memory are where mistakes come from. The tech remembers eighteen yards and forgets which two got the heavier treatment by the creek. Capturing the record before leaving each stop takes under a minute and is accurate.\n\nIn the crew app, the tech marks the visit done, picks the product mix, enters the amount and area treated, and adds a photo or note if anything was unusual. The application record attaches to that property and that visit with the applicator on it. The crew app works the same whether the tech is a licensed applicator or working under one, as long as your state allows that arrangement, so check how supervision rules apply where you work. See the [crew mobile app](/features/field-service-mobile-app) page for the screens."
      },
      {
        "h2": "Printing reports and telling the customer",
        "content": "At the end of the month or the season, run the chemical report for the date range and print it or send it, whichever your state record-keeping requires. Keep a copy with your business records. If an inspector asks for one property's history, you can pull every application for that address without paging through binders.\n\nCustomers also like to know what was applied. A chemical email after each application tells them what went on the yard, which answers the question before they ask it. Pair it with plain re-entry guidance from the label (for example, keep pets and kids off treated areas until the spray has dried). It is especially helpful for households with pets, kids or a vegetable garden, and it shows you are not hiding anything."
      },
      {
        "h2": "Photos and notes that back up the record",
        "content": "A record says what was applied. A photo and a short note show what the tech saw. Ask techs to snap a photo when something is out of the ordinary: a pool cover full of standing water, a new koi pond, a fence line cleared since last visit, a bed of blooming plants they skipped. One photo takes a few seconds and can save a long phone call.\n\nNotes matter just as much. \"Skipped east bed, in bloom\" explains why a customer saw the tech walk past the roses. \"Neighbor asked about service, gave card\" is a lead. \"Dumped three buckets and a wheelbarrow\" tells the customer you did more than spray. The completed alert can carry those notes and photos to the customer, so they see the work even when they were at the office all day. Over a season, the notes on one property build into a history that any new tech can read before they open the gate."
      },
      {
        "h2": "Using the records to plan product orders",
        "content": "The records tell you how much product each visit really uses. Add up the gallons of mix sprayed per visit across a few weeks and you will see that a standard yard uses something close to the same amount every time, with the wooded lots well above average. Multiply your average per-yard amount by the number of yards on the program and the number of visits left, and you have a fair estimate of what you need for the rest of the season.\n\nThe software does not keep a running count of the jugs on your shelf, so do a quick shelf count when you place an order and compare it with what the records say you will use. Buying ahead of the peak avoids running short in July, and keeping product cost per yard in mind feeds straight into [what a visit really costs](/blog/mosquito-control/job-costing-with-mosquito-control-software). For the full program view, see the [mosquito control software](/mosquito-control-software) page."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "job-costing-with-mosquito-control-software",
    "title": "What a Mosquito Spray Visit Really Costs You",
    "description": "Work out the true cost of a mosquito spray visit from labor, product, drive time and overhead, compare planned and actual hours, and spot yards that lose money.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "A mosquito program can look busy and profitable on paper while a handful of yards quietly lose money every cycle. The wooded lot at the end of the county road takes 45 minutes and three refills. The tiny townhome takes 10 minutes but a 20-minute drive. Both are priced like average yards. Job costing is how you find them. It does not need to be complicated: labor, product, drive time and a share of overhead, compared against what you charge. Here is how to put the numbers together for a spray program.",
    "sections": [
      {
        "h2": "The four costs in every visit",
        "content": "Every mosquito visit has the same four costs. Labor is the tech's time at the stop and getting to it. Product is the mix that went on the yard. Truck cost is fuel and wear, which grows with miles driven. Overhead is everything else (insurance, licensing, equipment, the office, marketing) spread over all your visits.\n\nRevenue minus the first three is your gross profit per visit. If that number does not comfortably cover your share of overhead, the visit is not really making money, no matter how full the schedule looks. Most owners have a feel for revenue. Fewer know the per-visit cost, and that is where pricing mistakes live."
      },
      {
        "h2": "Labor from real clock times",
        "content": "Guessing labor is where job costing usually goes wrong. You think a standard yard takes 20 minutes. The clock says 28, because of the gate, the dog, the refill and the conversation with the homeowner about standing water.\n\nWhen techs clock in and out in the crew app and mark each stop done, the software takes labor from those times and multiplies it by each worker's pay rate. That gives the real labor cost of each visit, not the one you assumed. Pay rates stay in the office side, so the crew sees their route, not each other's wages. After two or three cycles you will have actual times for every yard, which is more useful than any estimate."
      },
      {
        "h2": "Product cost per yard",
        "content": "Product is the second biggest cost and the one that varies most by yard. Put your products and their costs in the materials list. Because each application record notes the mix and the amount used, the cost of product on each visit is the amount times the cost per unit, without anyone keeping a separate spreadsheet.\n\nLook for outliers. A yard using twice the average product is either a big wooded lot that needs repricing, or a tech who is spraying heavy. Both are worth knowing. Consistent saved mixes make this comparison fair, which is covered in [what to write down after every yard](/blog/mosquito-control/inventory-and-chemical-supply-tracking-in-mosquito-control-software)."
      },
      {
        "h2": "Drive time and route density",
        "content": "Drive time is labor you pay for and cannot bill. An illustrative example: if a tech earns $25 an hour with payroll costs and drives 15 minutes between each of 16 stops, that is four hours of driving, or $100 a day, before fuel. Cut the average drive to 7 minutes by clustering neighborhoods and you get almost two hours back, which is room for four or five more yards.\n\nThis is why the outlier yards matter. A customer 20 minutes from your nearest cluster costs you 40 minutes of round-trip labor on top of the spraying. Either price that yard to cover the drive, schedule it on the same day as other work in that direction, or decide it is not a fit. Dense routes are covered in [routing spray days](/blog/mosquito-control/dispatch-and-routing-in-mosquito-control-software)."
      },
      {
        "h2": "Planned hours against actual hours",
        "content": "Set planned hours on each service when you price it. A standard yard might be planned at 0.4 hours, a large wooded lot at 0.75. As visits are done, the job costing report shows planned against actual for each job, along with the labor and material cost, the profit and the margin.\n\nA yard that is planned at 0.4 hours and keeps coming in at 0.7 is a pricing problem, not a crew problem, if nothing else is going wrong. A whole route running 20 percent over plan usually means something operational: refills taking too long, a mix that does not cover as well as you thought, or a tech who needs more training. The numbers tell you where to look. The [reporting](/features/field-service-reporting-analytics) page lists the reports."
      },
      {
        "h2": "Do not forget overhead and re-sprays",
        "content": "Labor, product and drive time are direct costs. Overhead is the rest: liability insurance, applicator licensing and continuing education, the mist blowers and their repairs, the truck payment, the phone plan, software, marketing and your own time in the office. Add up a season of overhead and divide it by the number of visits you expect to do. If overhead is $18,000 for the season and you expect 2,000 visits, each visit needs to carry $9 of it before you have made a dollar of profit. These are illustrative figures. Plug in your own.\n\nRe-sprays also belong in the cost. If you offer a free re-treat between visits when bites come back, track how many you do. A free re-spray costs the same labor and product as a paid visit. If one yard needs a re-spray every cycle, its real cost is double what the schedule shows, and that is a yard to look at closely: the interval may be too long, the treatment may be missing a resting area, or the price may simply be too low."
      },
      {
        "h2": "What to do with the numbers",
        "content": "Sort your yards by margin once a month in season. The top half of the list is the business you want more of: similar lots in the same neighborhoods. The bottom tenth is where to act.\n\nYou have four choices for a losing yard. Raise the price at the next season, with a short honest note about the property needing more work than standard. Move it onto a day with other work nearby to cut the drive. Train or check the tech if product use is high. Or let it go politely. Most customers accept a fair increase when the reason is clear, and the ones who do not were costing you money every 21 days. Job costing does not need to be perfect to be useful. It just needs to be real."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "recurring-seasonal-service-agreements-in-mosquito-control-software",
    "title": "Selling Mosquito Season Packages: Per Visit, Monthly or Prepaid",
    "description": "How to package a mosquito season, compare per-visit, monthly and prepaid billing, handle prepaid balances and cancellations, and write terms people read.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Most mosquito customers do not want to think about bugs every three weeks. They want to say yes once in spring and have the yard handled until fall. A season package gives them that, and it gives you something better than a list of one-off visits: a predictable number of yards, visits and dollars for the whole season. The decision that trips people up is how the package gets paid. Each option changes your cash flow, your collection work and what happens when someone cancels in July. Here is how to set it up.",
    "sections": [
      {
        "h2": "What goes in a season package",
        "content": "A package is a defined number of visits at a set interval over a season, sold as one thing. For a typical 21-day program that might be eight to ten treatments from spring to the first frost, plus whatever extras you include, such as a re-spray between visits if bites come back.\n\nKeep the package name and contents simple. \"Season Barrier Program, 9 treatments, mid April to mid October, every 21 days\" tells the customer exactly what they are buying. Add a second tier only if it is clearly different, such as a premium program with a larvicide treatment or a 14-day interval in peak months. Too many tiers slows the sale down."
      },
      {
        "h2": "Billing per visit",
        "content": "Per-visit billing charges the customer after each treatment. It is easy to explain and feels low risk to a customer trying you out. The downside is that the customer sees a charge nine times a season, and each one is a reminder they could cancel.\n\nIf you bill per visit, keep a card on file and auto-charge when the visit is marked complete. That way the charge goes through as the tech leaves, the customer gets the completed alert with notes and the invoice together, and nobody in the office sends invoices one by one. If a card is declined, the declined-card alert and the three automatic payment follow-ups do the chasing."
      },
      {
        "h2": "Even monthly payments",
        "content": "Monthly billing spreads the season total into equal charges. If the season is $585, five monthly charges of $117 from May through September is a common setup, and each charge stays the same no matter how many visits happen that month. Customers like a predictable number, and you get more even cash flow.\n\nThe catch is that payments and visits do not line up exactly. If a customer cancels in July after four visits but three payments, you need to know where they stand. Decide your rule up front, such as \"cancellations are billed for visits completed,\" and put it on the agreement. Monthly period billing handles the recurring charge. Your cancellation rule handles the rest."
      },
      {
        "h2": "Prepaid seasons and the ledger",
        "content": "Prepaying the season, usually for a modest discount, brings money in during spring when you are buying product and hiring techs. It also locks in the customer. A homeowner who paid for nine treatments in March is far less likely to switch companies in June.\n\nPrepayments need careful tracking. Treat a prepayment as a balance that each visit draws down, not as revenue that is already earned. A prepayment ledger shows what was paid, what each visit used, and what remains, so if a customer moves in August you can refund the unused part correctly instead of guessing. IndustryBossPro records prepayments as a ledger for exactly this reason. The [service contracts](/features/service-contract-management-software) page shows how packages and prepayments are set up."
      },
      {
        "h2": "Cancellations and pauses",
        "content": "Write the cancellation rule before you sell the first package. Common versions are: cancel anytime and pay only for visits completed; cancel anytime but lose the prepay discount on visits used; or no refunds after a certain date. Any of these is fine if it is clear and you apply it the same way to everyone.\n\nRecord the reason every time someone cancels. If most cancellations say \"still getting bites,\" look at your interval and application. If they say \"price,\" look at your tiers. If they say \"moved,\" there is not much to fix, but ask whether the new owner wants service. Pauses for travel should be paused, not canceled, so the yard returns to the schedule automatically."
      },
      {
        "h2": "Running a re-spray guarantee without losing money",
        "content": "Most mosquito companies promise to come back between visits if bites return. It is a strong selling point, and customers rarely abuse it, but it needs a few rules. Ask customers to report the problem within a set window after a visit. Limit it to one re-spray per cycle. Make sure the customer has done their part, such as dumping standing water the tech pointed out last time.\n\nHandle re-sprays as their own no-charge visits so they show up on the schedule, the crew route and the records, rather than as a favor the tech squeezes in. Every application needs a record, free or not. Before the re-spray, read the last visit's notes. Often the cause is obvious: a new pool cover holding water, a neighbor's overgrown lot, or a bed the tech skipped because it was in bloom. Fixing the cause is cheaper than spraying twice every cycle, and a customer who sees you looking for the reason trusts the program more than one who just sees the truck come back."
      },
      {
        "h2": "Terms people actually read",
        "content": "Nobody reads a long agreement for a mosquito spray. Put the important parts on the estimate in plain language: number of treatments, interval, start and end dates, price per visit and per season, how billing works, what the re-spray guarantee covers, the cancellation rule, and what the customer needs to do (unlock gates, keep pets inside on spray day).\n\nShort, clear terms prevent most disputes. They also make renewals easier, because next spring the customer is approving a familiar package with this year's price, not reading a new contract. Approving the estimate online gives you a dated record of what they agreed to. For how to plan renewals and sell packages to your existing lawn customers, see [planning a mosquito season](/blog/mosquito-control/seasonal-demand-planning-with-mosquito-control-software), and for current plan costs, see [pricing](/pricing)."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "managing-multiple-crews-and-routes-with-mosquito-control-software",
    "title": "Adding a Second Mosquito Truck Without Messing Up Your Records",
    "description": "When a second mosquito truck makes sense, how to split routes by area, keep the right applicator on every record, and keep both crews spraying the same way.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "The first mosquito truck is usually the owner or one trusted tech who knows every yard. The second truck is where things break. Routes get split by whoever has time, yards bounce between techs, records show the wrong applicator, and the new hire mixes heavier than the old one. None of that shows up until a customer complains or the state asks for records. Adding a truck goes well when you decide in advance how routes are split, who is responsible for what, and how both crews do the work the same way.",
    "sections": [
      {
        "h2": "When a second truck makes sense",
        "content": "Run the capacity math. If one tech can spray 18 to 22 yards on a good day, and you get roughly four solid spray days a week after weather, a 21-day cycle gives that tech about 12 spray days per cycle. That is room for something like 200 to 250 yards per truck, depending on lot size and drive time. These are illustrative numbers. Use your own stops per day from the clock times.\n\nWhen your Waiting List shows yards running past their due date every cycle even in decent weather, you are at capacity. Adding the second truck before that point, with a part-time tech covering the busiest weeks, is easier than hiring in July when everyone in the trade is short-handed."
      },
      {
        "h2": "Split by area, not by customer list",
        "content": "The cleanest split is geographic. Truck one takes the north and east neighborhoods, truck two takes the south and west. Each tech sprays the same areas every cycle, learns the gates and dogs, and builds rapport with customers. The office knows which truck a new yard goes on by where it is.\n\nAvoid splitting by \"my customers and your customers.\" That leads to two trucks driving through the same subdivision on the same day and doubles your drive time. Assign work to trucks on the Waiting List by circling an area on the map and putting those yards on that truck's day. Auto-routing then orders each truck's stops by distance. The [scheduling](/features/field-service-scheduling-software) page shows how trucks and days are laid out."
      },
      {
        "h2": "The right name on every record",
        "content": "Each application record needs the person who applied it. With two trucks, that matters more, because if a record shows the wrong applicator or a license number that does not match, the record is not much use. When each tech marks their own stops done in the crew app, their name goes on the application record automatically.\n\nIf your state allows unlicensed technicians to apply under the supervision of a licensed applicator, understand exactly what supervision means where you work. It may require the licensed person to be reachable or on site. Do not assume. Check your state's rules and set crews up to match before the new tech starts spraying."
      },
      {
        "h2": "Spraying the same way on both trucks",
        "content": "Customers notice when the new tech sprays differently. Write down your method: where to start, what to treat, what to skip, how long a standard yard should take, how to handle standing water, and what goes in the notes. Ride along for the new tech's first few days.\n\nUse the same saved tank mixes on both trucks so the rates match. Then compare. After a cycle, look at product used per yard and time per yard for each tech. A big difference in either one means a training conversation, not a reprimand. The product records give you the evidence to have it based on numbers instead of a hunch. See [what to write down after every yard](/blog/mosquito-control/inventory-and-chemical-supply-tracking-in-mosquito-control-software)."
      },
      {
        "h2": "Knowing where both trucks are",
        "content": "With one truck, the owner knows where it is. With two, the office needs to see it. GPS from the crew phones shows where each truck is during the day, and stops marked done show how far through the route each one is. When a customer calls asking when the tech will arrive, the office can answer without calling the tech.\n\nCustomer alerts carry a lot of this load. The \"you're next\" text and the completed alert with notes and photos go out from whichever truck does the work, so customers get the same experience no matter who sprays their yard. Crew notes back to the office, such as \"standing water in neighbor's yard, customer asked about it,\" get handled by one person instead of lost on a phone."
      },
      {
        "h2": "Covering a sick day or a rain backlog",
        "content": "With two trucks, one tech out sick no longer means a lost day, but only if the other tech can cover. That works when routes are documented well enough that someone new can spray them. Gate codes, dog notes, skip areas and customer requests need to live on the property, not in one tech's memory.\n\nAfter a rain week, both trucks may be behind at once. Work the oldest yards first across both territories, even if that means truck one crosses into truck two's area for a day. The Waiting List shows how many days overdue each yard is, so you can pick the most overdue yards in any area and give them to whichever truck has room. When things settle, move each neighborhood back to its normal truck and day. A temporary swap is fine. A permanent mess of crossing routes is what drives up drive time and confuses customers about who their tech is."
      },
      {
        "h2": "Hours, pay and costs per truck",
        "content": "Two trucks means two sets of hours to approve. The employee hours report shows clock-in and clock-out time for each tech, which you hand to whoever runs your payroll. The software tracks time, it does not run payroll.\n\nLook at each truck as its own small business once a month. Revenue from the yards it sprayed, labor from its clock times, product from its records, and margin from the job costing report. If truck two is running a lower margin, the cause is usually drive time from a looser territory or a newer tech who is still slower. Both improve with time and attention. The [job costing post](/blog/mosquito-control/job-costing-with-mosquito-control-software) goes into the numbers."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  },
  {
    "slug": "seasonal-demand-planning-with-mosquito-control-software",
    "title": "Planning a Mosquito Season and Selling It to Your Lawn Customers",
    "description": "Plan a mosquito season: sell to your lawn customers first, time the offer, estimate spray-day capacity, staff for the peak, and close out the season well.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "The best mosquito customers most lawn companies will ever get are already on their client list. They know your trucks, trust your techs and pay your invoices. Most will never think to ask whether you spray for mosquitoes unless you tell them. A season plan starts there, with an offer to your existing customers at the right time of year, then works out how many yards you can actually serve, who will spray them, and how the season ends so next spring starts with a full list instead of an empty one.",
    "sections": [
      {
        "h2": "Start with the list you already have",
        "content": "A lawn customer who signs up for mosquito control costs almost nothing to acquire. There is no ad to pay for, no lead to chase, and the property is already in your system with its gate code, dogs and notes. Many of them are in neighborhoods you already drive every week, which keeps mosquito routes dense from day one.\n\nLook at your client list and tag the properties that fit: wooded lots, homes backing onto creeks or ponds, yards with heavy landscaping, and customers who have mentioned bugs to your techs. That tagged group is your first campaign. Your crews also notice which yards need it. A crew note like \"customer asked about mosquitoes\" is a warm lead, so treat it like one."
      },
      {
        "h2": "When to make the offer",
        "content": "Timing matters more than the wording. Late winter and early spring, before the first warm wet week, is when you want the offer in front of people. They are planning the season and have not been bitten yet, so they are not shopping in a panic. Your schedule is lighter, so you have time to measure and quote properly.\n\nSend a short, specific message to your tagged lawn customers: what the program includes, the interval, the season, the per-visit price for their lot type and a season total. The upsell alert can carry this offer to customers after their regular lawn service, when they just saw your work. Customers who reply get an estimate they can approve online. Keep the estimate's automatic follow-ups on, because many people read it, mean to answer and forget. See [how to price mosquito barrier spray](/blog/mosquito-control/estimating-and-quoting-with-mosquito-control-software)."
      },
      {
        "h2": "How many yards the season can hold",
        "content": "Before you sell, know your ceiling. An illustrative example: one tech spraying 20 yards a day, four spray days a week after weather, on a 21-day cycle, has about 12 spray days per cycle, or about 240 yards. If you plan to stay at 160 yards with one tech, you have room for the weeks you lose to storms. If your campaign brings in 300, you need a second person by the time the season opens.\n\nPlan for rain. In a wet month you may lose a third of your spray days, so a route that fits exactly in a dry month will run behind in a wet one. Leave slack, or know who your backup sprayer is before you need them. [Adding a second truck](/blog/mosquito-control/managing-multiple-crews-and-routes-with-mosquito-control-software) covers the split."
      },
      {
        "h2": "Staffing for the peak",
        "content": "The heaviest weeks are usually the middle of summer, when every yard is due, new signups keep coming and event requests pile on. Hiring for that peak in June is hard because every service company is hiring at the same time. Line people up in the spring, get them licensed or properly supervised, and train them on the first lighter cycles.\n\nLawn companies have an advantage here. Your lawn techs already handle product and keep records. A tech who sprays mosquitoes two days a week and does lawn applications the rest of the week can be a good fit. Just give mosquito work its own scheduled days so it does not get squeezed out when lawn work gets busy."
      },
      {
        "h2": "Setting expectations before the first spray",
        "content": "New mosquito customers often expect zero mosquitoes the day after the first treatment. That is not how it works. A barrier treatment cuts down resting adults a great deal, but mosquitoes fly in from neighboring yards and breeding sites, and results build over the first couple of cycles as standing water is cleared and the treatment is kept up.\n\nSay this in the welcome message and on the estimate: what the treatment does, what the customer can do to help (dump water weekly, keep gutters clear), how to request a re-spray, and what spray day looks like. Customers who know what to expect judge the program fairly. Customers who expected a bug-free yard after one visit call to cancel after the second. A good first impression also comes from timing. Make the first spray for new customers happen within days of their approval, not three weeks later, while they are still paying attention."
      },
      {
        "h2": "Closing the season well",
        "content": "The last spray of the year is a sales moment. Send a short completed-season note thanking the customer and mentioning that next year's program opens in spring. Customers who had a good season are easy to renew, and next year's estimate can go out early with this year's terms and any price change explained plainly.\n\nLook at your cancellation reasons and your skipped stops from the season. They tell you what to fix before next spring: an interval that was too long, a neighborhood with access problems, or a price tier that did not fit. Pull a quick count of how many program yards finished the season, how many started, and how many visits were missed or late. Those three numbers are the honest scorecard of the season."
      },
      {
        "h2": "The off season list",
        "content": "When the last visit is done, the season's customers do not disappear. Leave them on the program with next spring as the start date so they return to the Waiting List when the season opens. Customers who canceled for reasons like price or a move can stay in your client list, tagged, for a spring offer.\n\nOver the winter, update your tiers based on what job costing showed, refresh your estimate templates, and tag any new lawn customers who fit the mosquito profile. When the first warm week arrives, you want the offer already in their inbox, the renewals already approved, and the first spray days already on the calendar. The [mosquito control software](/mosquito-control-software) page shows how the program, lawn work and renewals sit in one place."
      }
    ],
    "hubSlug": "mosquito-control-software",
    "hubKeyword": "mosquito control software",
    "industry": "mosquito-control"
  }
];

export const hub: HubPageData = {
  "slug": "mosquito-control-software",
  "industry": "Mosquito Control",
  "isMain": true,
  "h1": "Mosquito Control Software for Barrier Spray Programs Run Next to Lawn Care",
  "subtitle": "Keep every yard on its 21-day interval, record every application at the yard, route spray days by neighborhood, and bill season packages per visit, monthly or prepaid.",
  "metaTitle": "Mosquito Control Software | IndustryBossPro",
  "metaDesc": "Mosquito control software for barrier spray programs: 21-day intervals, product mixes and application records, spray routes, and per-visit or prepaid billing.",
  "heroPoints": [
    "Every yard returns to the Waiting List when its 21-day spray is due",
    "Techs record the product mix, amount and area treated at each yard",
    "Bill season packages per visit, monthly, or prepaid with a ledger"
  ],
  "painPoints": [
    {
      "problem": "Yards slip to 30 or 35 days after a rain week and customers notice the bites first",
      "solution": "The 21-day interval sits on the recurring service, and the Waiting List shows which yards are due and how many days overdue."
    },
    {
      "problem": "Spray records are written from memory at the end of the day, or not at all",
      "solution": "Techs pick a saved product mix in the crew app and enter the amount and area treated before leaving each yard. Print the chemical report when you need it."
    },
    {
      "problem": "Techs waste stops at locked gates and loose dogs",
      "solution": "Gate codes and pet notes show at each stop, and the night-before text asks customers to unlock the gate and bring pets inside."
    }
  ],
  "features": [
    {
      "icon": "🦟",
      "title": "21-Day Recurring Programs",
      "desc": "Set each mosquito service to repeat every 21 days, or your own interval, with season start and stop dates."
    },
    {
      "icon": "🧪",
      "title": "Product Mixes and Records",
      "desc": "Save tank mixes with rates. Each visit records product, amount, area treated and applicator for state record keeping."
    },
    {
      "icon": "🗺️",
      "title": "Spray Routes by Neighborhood",
      "desc": "Circle a neighborhood on the map, put due yards on a truck, and auto-route the day by distance."
    },
    {
      "icon": "🌧️",
      "title": "Rain Day Reschedules",
      "desc": "Move a washed-out spray day in one step. Customers get a reschedule text so nobody waits for a truck."
    },
    {
      "icon": "📱",
      "title": "Customer Alerts",
      "desc": "Night-before, on-the-way, completed and skipped alerts, plus chemical emails listing what was applied."
    },
    {
      "icon": "💵",
      "title": "Season Package Billing",
      "desc": "Sell a season as one package, billed per visit, monthly, or prepaid, with auto-charge on completion."
    }
  ],
  "pendingBoard": "When a spray is marked done, the yard comes back onto the Waiting List when its next 21-day treatment is due. Circle a neighborhood on the map to put the due yards on a truck for the day, and anything skipped for a locked gate or wind goes back on the list with its reason. Pending Jobs holds one-time event sprays and new signups waiting for their first treatment.",
  "blogSiloIndustry": "mosquito-control",
  "blog1Slug": "complete-guide-to-mosquito-control-software",
  "blog1Title": "How to Run a Mosquito Barrier Spray Program, Start to Finish"
};
