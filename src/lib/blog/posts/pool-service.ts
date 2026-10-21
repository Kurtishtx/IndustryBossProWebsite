import type { BlogPost } from '../types';
import type { HubPageData } from '../../hub-data';

export const posts: BlogPost[] = [
  {
    "slug": "pool-service-software-complete-guide",
    "title": "How a Pool Service Company Really Runs: Routes, Readings, Billing and Repairs",
    "description": "A practical look at running a pool service company: building weekly routes, logging water chemistry, picking a billing model, and handling repairs and seasons.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A pool service company looks simple from the street: a truck, a pole, a bucket of tablets. Inside, it is four businesses stacked on top of each other. There is a route business that lives or dies on drive time, a chemistry business where mistakes cost money and sometimes cause injuries, a billing business that has to handle months with four or five service weeks, and a repair business that earns the best margins and loses the most jobs to forgetfulness. This guide walks through each one the way an owner actually meets them, from the first account to the fortieth, and points out where a system takes work off your plate and where it does not.",
    "sections": [
      {
        "h2": "The weekly route is the product",
        "content": "Most residential pool customers buy one thing: someone shows up every week, on the same day, and the water stays clear. Everything else is secondary. That means your route schedule is not an internal tool, it is the thing you are selling. A customer who is serviced on Tuesday every week for a year stays. A customer who gets Tuesday, then Thursday, then a skipped week with no explanation starts looking.\n\nSet every account on a fixed service day and keep it there. When you sign a new pool, the first question is not \"what day works for you\" but \"which of my existing days already has stops near this address.\" A new account that drops into an existing cluster adds 25 minutes of work and 3 minutes of driving. One across town adds 25 minutes of work and 40 minutes of driving, and the price is usually the same. We cover the math in [route density](/blog/pool-service/pool-route-density-software), but the habit starts on day one."
      },
      {
        "h2": "What a good stop looks like",
        "content": "A professional stop has a rhythm. Check the gate, the dog and the equipment pad first, because a tripped breaker or a leaking pump seal is worth finding before you spend 20 minutes brushing. Skim the surface, empty the skimmer and pump baskets, brush walls and steps, vacuum as needed, check the filter pressure, test the water, add chemicals, and leave the area cleaner than you found it.\n\nThe two places techs cut corners are testing and the note at the end. Testing gets rushed because it feels like it slows the route, and the closing note gets skipped because the tech is already thinking about the next pool. Both are mistakes. The test is what protects you if the water goes wrong, and the note is how the office finds out that the heater is throwing an error code or that the customer asked about a salt system. A crew app that asks for readings and offers a notes box at every stop makes the right habit the easy one."
      },
      {
        "h2": "Chemistry is where the cost and the risk live",
        "content": "Chemicals are often the largest variable cost on a pool route, and they are also where a tech can hurt someone. Over-shocking before a pool party, mixing products in the same bucket, or leaving acid levels that eat plaster are the kind of errors that turn into refunds or worse.\n\nEvery visit should leave a record: free chlorine, pH, alkalinity, and the other readings you test for, plus exactly what was added and how much. That record does three jobs. It lets a substitute tech see that this pool always runs low on stabilizer. It lets you see which accounts eat chemicals, so you can price them properly. And it shows the customer, after a problem, that their water was tested and treated correctly every week. Our post on [the pool chemical log](/blog/pool-service/pool-service-software-water-chemistry-service-logging) goes into what to record and why."
      },
      {
        "h2": "Pick your billing model before the first account",
        "content": "There are two common ways to bill weekly pool service. Flat monthly means the customer pays the same amount every month whether it had four service days or five. Per stop means each completed visit is billed, so a five-week month costs more. Flat monthly is easier for customers to budget and smoother for your cash flow. Per stop is easier to defend when you miss a week for weather or a locked gate.\n\nThen decide whether chemicals are included. Including them makes the price simple, but a pool with heavy tree cover or a bad leak will cost you every week. Billing chemicals separately is fairer but makes invoices longer and invites questions. Many companies include routine chemicals up to a reasonable amount and bill extra for shock treatments and green pool recovery. Whatever you choose, write it down in the service agreement so nobody argues about it in August."
      },
      {
        "h2": "Repairs are a second business inside the first",
        "content": "Your techs see every pump, filter and heater on the route every week. That makes you the first to know when a motor is getting loud or a filter is holding pressure. Repair work, equipment replacement and filter cleans usually carry far better margins than weekly service, but only if the observation turns into a quote, the quote turns into a yes, and the yes turns into a scheduled job.\n\nThe failure point is almost always the handoff. The tech mentions it to the office, the office means to call, and three weeks later the customer hires someone else after the pump dies. A photo and a note from the field, an estimate sent the same day, and automatic follow-ups when the customer does not answer close most of that gap. The [repair tracking post](/blog/pool-service/pool-repair-tracking-software) covers the whole path."
      },
      {
        "h2": "Where a system fits, and where it doesn't",
        "content": "No software will brush a pool or talk a customer out of canceling. What it can do is hold the details your memory drops: the fixed service day for each account, the gate code and the dog's name, every chemical reading for every pool, the photo of the cracked lid, the invoice that went out when the stop was marked done.\n\nIndustryBossPro was built for lawn companies and the services that go with lawn work, and pool service is one of them. Accounts repeat every 7 days, the crew app shows the route in order with property notes, techs log readings and chemicals added per visit, and invoices can charge the card on file when a stop is completed. Many lawn companies add pools for the same customers they already mow for, and running both from one system keeps it to one customer record. If this is the only service you run, PoolBossPro (https://poolbosspro.com) is the version built just for it. You can see how the [pool service software](/pool-service-software) fits together on the overview page."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-service-software-water-chemistry-service-logging",
    "title": "What to Record in a Pool Chemical Log Every Visit (and Why It Protects You)",
    "description": "What a pool tech should record at every stop: free chlorine, pH, alkalinity, stabilizer, chemicals added and amounts, and how the log protects you in a dispute.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "A pool chemical log is the most boring document in the business until the day you need it. A customer's child gets red eyes after a swim, a plaster finish starts etching, or a new tech insists the pool was fine when he left. On that day, either you have a record of what was tested and added at every visit, or you have a guess. This post covers what to write down at each stop, how to keep techs consistent about it, and how the log turns from a chore into something that saves you money and arguments.",
    "sections": [
      {
        "h2": "The readings that belong on every visit",
        "content": "At minimum, test and record free chlorine and pH every visit. Those two numbers change week to week and drive most of your chemical decisions. Total alkalinity should be recorded at least every visit where you adjust pH, because it controls how stubborn the pH is. Cyanuric acid (stabilizer) and calcium hardness move slowly, so many companies test them monthly, but they still belong in the log when tested. Salt pools add a salt reading, and some companies record water temperature and filter pressure too.\n\nCommonly cited targets are free chlorine around 1 to 3 ppm (higher in stabilized outdoor pools), pH around 7.4 to 7.6, and total alkalinity around 80 to 120 ppm. Your local health code, the surface type and your own experience may shift those numbers. The point of the log is not to prove the water hit a textbook number, it is to show you tested and responded sensibly."
      },
      {
        "h2": "Record what you added, not just what you found",
        "content": "A reading without the treatment is half a record. If the log says pH was 8.0 and nothing else, nobody knows whether the tech fixed it. Every visit should list each product added and the amount: so many pounds of shock, so many ounces of muriatic acid, tablets added to the feeder, bags of salt.\n\nThis matters for three reasons. Safety, because a customer complaint about irritation is easier to answer when you can show exactly what went in and when. Cost, because you cannot price a pool correctly without knowing how much product it uses. And training, because a supervisor reviewing logs can see when a tech is dumping in too much acid or under-dosing chlorine to save time. In the crew app, the tech picks the product and enters the amount along with the readings, so the visit carries both halves of the story in the [pool chemical log](/pool-service-software)."
      },
      {
        "h2": "Make the log fast enough that techs actually fill it in",
        "content": "The most common reason chemical logs fail is that they take too long. A tech running 16 stops a day in July will skip anything that feels like paperwork. So make it quick: the same fields in the same order at every pool, the products they actually carry already in a list, and no typing beyond the numbers.\n\nSet the expectation plainly. A stop is not done until the readings and the chemicals added are in. Spot-check logs weekly at first. If a tech logs pH 7.5 and free chlorine 3.0 at every single pool for two weeks, he is not testing. Real water varies, and real logs show it. A short conversation early saves a long problem later. When techs see that the office actually reads the logs, and uses them to back the tech up when a customer complains, the logs get better on their own."
      },
      {
        "h2": "Use the history to spot problems before they show",
        "content": "One week's reading tells you what to add today. Twelve weeks of readings tell you what is going on with the pool. A pool that needs more chlorine every week as summer goes on may have climbing stabilizer, which is a sign to test CYA and plan a partial drain. A pool where pH climbs fast every week may have high alkalinity or a new plaster finish still curing. A sudden jump in chlorine demand can point to a leak bringing in fresh water, or an algae problem starting in the filter.\n\nWhen the history lives on the property instead of in a binder in someone's truck, any tech can look at the last few visits before testing. That is how a substitute can service a pool for the first time and still make the same calls the regular tech would. It is also how the office can answer \"why is my bill higher this month\" with a straight answer."
      },
      {
        "h2": "Send customers the results",
        "content": "Most homeowners never see what happens at their pool. They see clear water and a bill. That is fine until a competitor offers a lower price, and then the customer has no idea what they would lose by switching. Sharing the readings and a photo after each visit shows the work.\n\nAfter a completed stop, the customer can get an alert with the tech's notes and photos, and they can see their service history in the customer app. Keep the note human: \"Brushed and vacuumed, pH was a little high so I added acid, filter pressure is creeping up so we should clean it next month.\" That one sentence explains the visit, justifies the price, and plants a filter clean. Our post on [proof of service](/blog/pool-service/pool-service-verification-software) covers the rest of that picture."
      },
      {
        "h2": "Keep the records long enough to matter",
        "content": "Some states and local health departments have rules about chemical records for commercial pools, and some insurers ask how you document treatments. Rules for residential service vary widely, so check with your state and your insurance agent about what you should keep and for how long. Even where nothing is required, keep at least a few seasons of history. Disputes about a plaster finish or a liner can surface long after the visit.\n\nThe easiest way to keep records is to never have them on paper. A log entered at the pool, attached to the property and the date, does not get rained on, lost under a seat or thrown away when a tech quits. When you price a pool, the same log tells you what it really costs to service, which is where [chemical cost tracking](/blog/pool-service/pool-service-software-chemical-equipment-inventory) picks up."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-service-software-dispatch-routing",
    "title": "Building Pool Route Days and Reworking Them When a Tech Calls Out",
    "description": "How to assign pool accounts to fixed service days, balance routes across techs, order each day by drive time, and reshuffle stops when someone is out sick.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "The weekly pool route is a puzzle you solve once and then defend all season. Every account gets a day, every day gets a tech, and each tech's day needs to make geographic sense. Then a tech calls out sick on a Wednesday in July, a storm knocks out Thursday, or you sign eight new pools in one neighborhood, and the puzzle has to be rebuilt without upsetting customers who expect to see you on their usual day. This post is about doing both: building route days that hold up, and changing them quickly when life happens.",
    "sections": [
      {
        "h2": "Give every account a fixed day",
        "content": "Customers care more about consistency than about which day it is. A pool serviced every Friday feels well kept. A pool serviced Monday one week and Thursday the next feels neglected, even if the water is fine. So the first rule of route building is that every recurring account has one service day, and it moves only for a good reason.\n\nSet each account up as a recurring service every 7 days on its day. Biweekly accounts get 14. Once those intervals are on the account, the schedule repeats on its own and the office stops rebuilding weeks by hand. When an account must move, tell the customer before it happens, not after."
      },
      {
        "h2": "Divide the map before you divide the days",
        "content": "The common mistake is to fill days in the order customers sign up. That gives you a Monday that covers the whole metro. Instead, divide your service area into zones first, then assign each zone to a day. Say the north side is Monday and Tuesday, the west side Wednesday, downtown Thursday, and the south side Friday. A new account takes the day for its zone.\n\nSome zones will outgrow a single day. Split them along a road or a natural boundary so each day stays tight. Some will be too thin to fill a day; pair them with a neighboring zone. Expect to redraw the lines once or twice a season as you grow. Our post on [route density](/blog/pool-service/pool-route-density-software) has the numbers for why this pays."
      },
      {
        "h2": "Order each day by distance, not by habit",
        "content": "Within a day, the order of stops matters as much as which stops are on it. Techs naturally drift into a familiar order, and that order often stops making sense after a few new accounts. Let auto-routing order the day's stops by distance, then adjust for the few real constraints: the gated community that only opens its gate after 9, the commercial pool that must be done before swimmers arrive, the customer who wants the tech gone before the dogs are let out.\n\nThe crew app shows the day in order with navigation to each stop, gate codes and property notes. Check the order whenever you add more than a couple of accounts to a day. A route that was efficient in May can quietly add half an hour of driving by August."
      },
      {
        "h2": "Balance the load across techs",
        "content": "Not every pool takes the same time. A small screened pool might be a 15-minute stop. A large pool under oak trees with a spa and a water feature can take 45. If you balance routes by number of stops, one tech finishes at 2 and another finishes at 6, and the second one quits by October.\n\nBalance by estimated minutes instead. Note the typical service time on each account, add a realistic drive time between stops, and keep each tech's day within a reasonable window. Watch clock-in and clock-out times for a few weeks; they will tell you which routes are overloaded faster than any complaint. When one route is consistently long, move the outermost two or three accounts to a neighboring day."
      },
      {
        "h2": "Plan capacity before the season starts",
        "content": "Before the busy months, work out how many pools each tech can realistically handle per day and per week. Take the average service time per pool on that route, add the average drive time between stops, and divide into a working day with a lunch break and a buffer for problems. Say a route averages 28 minutes per pool including driving and the tech works an 8-hour day with 45 minutes of breaks and buffer. That is about 15 or 16 pools a day.\n\nMultiply by five days and you know roughly how many weekly accounts a tech can carry, around 75 to 80 in this example. When a route gets close to that number, start planning the next tech or the next route split before you sell the next account. Hiring in a panic in June usually means hiring the wrong person. Hiring in March, when you can see the curve coming, gives you time to train."
      },
      {
        "h2": "When a tech is out",
        "content": "Sooner or later a tech wakes up sick. You have three choices: split his stops across the other techs, push his stops to the next day, or run them yourself. Splitting works if the other techs are nearby and the extra stops fit into their day. Pushing works for most residential pools, since one day late is usually fine in mild weather. In peak heat, prioritize pools that already run on the edge, like heavy-use pools, pools with no automatic chlorinator, and anything with a party coming up.\n\nWhatever you choose, tell customers. Move the day's stops to another day or truck in the schedule and customers get a reschedule text, so they are not wondering why nobody came. A short message the morning of is far better than an apology call after the customer has already noticed. See how [scheduling](/features/field-service-scheduling-software) handles moving a whole day."
      },
      {
        "h2": "Fitting in the extra work",
        "content": "Weekly routes leave little room, but extra work shows up constantly: green pool cleanups, filter cleans, openings, equipment swaps, a customer who wants the pool ready for a weekend party. Keep those jobs off the weekly route until they are actually scheduled. A list of pending one-time jobs, separate from the recurring schedule, lets you see what is waiting and slot it onto a day when the tech in that area has room.\n\nThe best fit for extra work is a light day in the same zone. A filter clean added to a tech's Tuesday route, three stops from the customer's house, costs almost nothing in driving. The same job sent as a separate trip across town eats most of its profit. The [Pending Jobs board](/features/pending-job-board-software) is where those jobs wait until the right day comes along."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-route-density-software",
    "title": "Route Density on a Pool Route: The Math Behind Tight Neighborhoods",
    "description": "Why stops per square mile matters more than stops per day on a pool route, with example math on drive time, pricing outlying pools and when to drop an account.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Two pool techs can each service 15 pools in a day and earn the company very different amounts. One spends six hours at pools and an hour driving. The other spends four and a half hours at pools and two and a half hours driving, and burns more fuel doing it. Same number of stops, same wages, very different margins. That difference is route density: how close together your stops are. This post works through the math, shows how density changes the way you sell and price, and explains when an account across town is not worth keeping.",
    "sections": [
      {
        "h2": "Example math: what drive time really costs",
        "content": "Take an illustrative route. A tech costs you $25 an hour with taxes, the truck costs around $0.60 a mile to run, and the average stop bills $40 a week. On a tight route, the tech averages 4 minutes and 1.5 miles between stops. Over 15 stops that is about an hour of driving and 22 miles. On a scattered route, the average is 12 minutes and 5 miles between stops, which is three hours and 75 miles.\n\nThe scattered route costs about two extra hours of wages ($50) and 53 extra miles ($32) every day it runs. That is $82 a day, or over $400 a week for a five-day route, on the same revenue. It also means the scattered tech has no room for the filter clean or green pool that would have brought in extra money. Your numbers will differ, but the pattern does not."
      },
      {
        "h2": "Look at the map, not the list",
        "content": "Density is hard to see on a list of addresses and obvious on a map. Plot one service day's stops and the problem accounts jump out: the lone pin 9 miles east of everything else, or the two stops on the far side of a highway with one exit. Most owners who do this for the first time find a handful of accounts that cost more to reach than they earn.\n\nWhen you look at the waiting work on the map, you can circle an area and pick the properties inside it to schedule onto a day and truck in one step. That same habit of thinking in circles on a map, rather than rows in a list, is what keeps routes tight over time."
      },
      {
        "h2": "Sell where you already drive",
        "content": "The cheapest new account is the one next door to a current customer. It adds service time but almost no driving, so nearly all of its revenue lands as margin. That should shape your marketing. Door hangers on the streets around your existing stops, a referral offer to current customers for their neighbors, and yard signs during service days all target the accounts that raise density.\n\nWhen a lead comes in through your website form, check the address against your current service days before you quote. If it sits inside a cluster, quote your standard rate and offer the day that zone is serviced. If it is out on its own, either quote higher or be honest that you do not service that area yet. Getting density right at the sales stage is far easier than fixing it later. The [estimating post](/blog/pool-service/pool-service-software-estimating-quoting) covers pricing the account itself."
      },
      {
        "h2": "Pricing the pool that is out of the way",
        "content": "You do not have to refuse every outlier. Some are worth having: a large commercial pool, a customer who also buys repairs, or the first account in a neighborhood you want to grow into. But they should be priced for the time they take.\n\nA simple approach is a distance charge added to your standard weekly rate. Using the example costs above, an account that adds 20 minutes and 8 miles round trip to a route costs roughly $8 in wages and $5 in vehicle cost per visit. Adding $10 to $15 a week to that account covers it. Customers outside your core area usually accept this if you explain it plainly. If they do not, you have learned that the account was never going to be profitable at your standard price."
      },
      {
        "h2": "Trading and dropping accounts",
        "content": "Sometimes the right move is to let an account go. If a pool costs more to reach than it earns, cannot be repriced, and is not a good repair customer, refer it to a competitor who works that area and wish them well. Some owners trade accounts with friendly competitors: your three pools on their side of town for their three on yours. Both routes get tighter.\n\nWhen you do drop an account, do it at a clean break, like the end of a month, with notice, and record the reason. Tracking cancellation reasons, including the ones you initiated, helps you see later how many accounts you lost to price, to service, and to your own route decisions."
      },
      {
        "h2": "Density inside a single day",
        "content": "Density is not only about which neighborhoods you serve. It is also about how the stops are ordered within a day. A cluster of 12 pools serviced in a random order can still cost an extra half hour of backtracking. Once a day's stops are set, let auto-routing put them in order by distance, then check the result against what the tech knows about the area, like the left turn across a busy road that takes five minutes at noon.\n\nAlso look at where each day starts and ends. If a tech lives on the south side and his route is on the north side, his first and last drives are unpaid time for him or paid time for you, and either way it adds up. Matching techs to routes near home, where you can, is one of the simplest density gains there is."
      },
      {
        "h2": "Density compounds over time",
        "content": "A dense route is worth more every year. It is easier to staff because the work feels manageable. It is easier to cover when a tech is out because the next route is nearby. It leaves room for repair and cleanup work. And when owners eventually sell pool accounts, buyers often look closely at how clustered the accounts are, because that tells them how profitable the route will be under their ownership.\n\nCheck density a couple of times a season. Look at drive minutes per stop by day, at the outliers, and at where your new accounts are coming from. Use [auto-routing](/features/service-route-optimization-software) to keep the order of each day tight, and use your sales effort to fill in the gaps between existing stops. The [route days post](/blog/pool-service/pool-service-software-dispatch-routing) covers how to assign zones to days."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-service-software-chemical-equipment-inventory",
    "title": "Know What Each Pool Costs You in Chemicals Before You Price It",
    "description": "How to track chemical cost per pool from what techs log each visit, find the accounts that eat product, and choose between included and billed chemicals.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Ask most pool owners which of their accounts costs the most in chemicals and they will name one or two from memory. Ask what each pool costs per month and the answer is usually a shrug. That gap is expensive. Chemicals are often the biggest variable cost on a pool route, and they are spread across dozens of pools by several techs, a few pounds and ounces at a time. This post covers how to know what each pool really uses, what to do with that number, and how to set up pricing so the heavy users do not quietly eat your margin.",
    "sections": [
      {
        "h2": "Put a cost on every product you carry",
        "content": "Start with your product list. For each chemical your techs carry, record what you pay per unit you dose by: per pound of granular shock, per gallon of liquid chlorine, per tablet, per ounce of acid, per bag of salt. Use your actual supplier price, including any delivery charge, and update it when prices change.\n\nDo the same for consumables that go out on service: filter cartridges, skimmer baskets, O-rings, test reagents. Keep them in the materials list with their costs. This sounds tedious, but it is a one-time job of an hour or two, and every cost number after this depends on it. If your prices are wrong here, every per-pool cost will be wrong too."
      },
      {
        "h2": "Log what goes into each pool",
        "content": "With costs set, the only other thing you need is how much of each product went into each pool. That comes from the chemical log your techs fill in at each stop: the product and the amount, recorded at the pool, not reconstructed at the end of the week. The [chemical log post](/blog/pool-service/pool-service-software-water-chemistry-service-logging) covers what to record.\n\nOnce you have a month of honest logs, you can add up the product used at each property and multiply by your cost. Now you know that the Hendersons' screened pool costs $9 a month in chemicals and the pool under the live oaks with the bad autofill costs $48. The second number is the one that changes how you price."
      },
      {
        "h2": "Find the pools that eat product",
        "content": "Sort your accounts by monthly chemical cost and look at the top ten. Usually there is a reason for each one. Heavy tree cover means more organic load and more chlorine. A leak means fresh water every week, with new alkalinity and no stabilizer. High stabilizer from years of tablets means you need much more chlorine to do the same job. A pool used daily by a big family, or by a rental property, burns through sanitizer.\n\nSome of those causes can be fixed. A leak detection, a partial drain to lower stabilizer, or a cover recommendation can cut costs and improve the water, and each one is a billable job. Some cannot be fixed, and those accounts need a higher rate. Either way, the cost report gives you something specific to talk to the customer about instead of a vague price increase."
      },
      {
        "h2": "Included chemicals versus billed chemicals",
        "content": "There are three common setups. All chemicals included in the weekly rate, which is simple for customers but risky on heavy users. All chemicals billed separately at cost plus a markup, which is fair but makes invoices long and invites line-by-line questions. Or routine chemicals included up to a normal amount, with shock treatments, algae recovery, salt and stabilizer billed as extras.\n\nThe third setup is common because it protects you from the worst cases without nickel-and-diming normal pools. Whichever model you pick, write it into the [service agreement](/blog/pool-service/pool-service-software-recurring-service-agreements) and price accordingly. If chemicals are included, your weekly rate needs to cover the average pool plus some buffer. Your per-pool numbers tell you what that average actually is."
      },
      {
        "h2": "Watch for differences between techs",
        "content": "When you compare chemical cost per pool by tech, differences show up. Sometimes one tech has the harder route. Sometimes one tech is overdosing because it is faster than testing and adjusting. Sometimes product logged is not product used. The data does not tell you which, but it tells you where to look.\n\nRide along for a morning with any tech whose numbers are well above the others on similar pools. Often the fix is training: testing before adding, using the right product for the job, or not shocking every pool every week out of habit. It is a better conversation when you have the numbers in front of you than when it is just a feeling."
      },
      {
        "h2": "Keep equipment details on the property",
        "content": "Chemical cost and equipment go together. A pool with an undersized pump, a dirty filter or a failing salt cell will use more chemicals no matter how carefully the tech doses. So keep the equipment details on each property: pump make and horsepower, filter type and size, heater, salt system, automation, and the date of any major replacement. Notes per property and custom fields are a good place for this.\n\nWhen a pool shows up on your high-cost list, the first thing to check is the equipment. A cartridge filter that has not been cleaned in six months or a salt cell that is scaled up will drive chlorine demand. Fixing the equipment lowers your weekly cost and earns a repair invoice at the same time. Put it in a crew note to the office so the quote goes out, and record what was replaced so the next tech knows."
      },
      {
        "h2": "Feed the numbers into job costing and pricing",
        "content": "Chemical cost is one piece of the true cost of a pool. Labor from clock-in times, drive time and any materials used on a repair are the rest. Job costing that pulls labor from crew clock-ins and adds the materials used gives you profit and margin per job, which is the number you should look at before you renew a price.\n\nAt least once a year, review your lowest-margin accounts. Raise the ones that are underpriced, fix the ones that can be fixed, and let go of the ones that cannot. The [reporting tools](/features/field-service-reporting-analytics) pull this together, and the overview of [pool service software](/pool-service-software) shows where the chemical log, materials and job costing connect."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-service-software-recurring-service-agreements",
    "title": "Writing a Weekly Pool Service Agreement Customers Will Actually Keep",
    "description": "What belongs in a weekly pool service agreement: what is included, chemicals, skipped visits, rate changes, seasonal pauses and canceling, plus how to run it.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A good pool service agreement is not a legal trap. It is a plain description of what the customer gets every week, what costs extra, and what happens when something goes wrong. Most billing disputes in pool service come from things nobody wrote down: whether chemicals were included, what happens when the gate is locked, whether the rate can go up mid-season. This post walks through what to put in a weekly agreement, how to present it, and how to keep it running without rebuilding schedules and invoices every month.",
    "sections": [
      {
        "h2": "Spell out what a visit includes",
        "content": "List the work done on every visit: skimming, emptying skimmer and pump baskets, brushing walls and steps, vacuuming as needed, testing and balancing water, checking equipment operation and filter pressure. Then list what is not included: filter cleans, equipment repairs, green pool recovery, tile cleaning, drain and refills.\n\nThis list does two jobs. It sets the customer's expectations, so nobody is surprised that a filter clean is a separate charge. And it gives your techs a standard. When the agreement says every visit includes brushing, a tech who skips brushing is not meeting the agreement, and you can address it plainly.\n\nWrite the list in plain language, not legal language. \"We brush the walls, steps and benches every visit\" is clearer than \"surfaces will be maintained as required.\" If a customer can read the list in a minute and know exactly what they are paying for, you have written it well. Keep a copy of the agreement on the client record so anyone in the office can answer a question about it without digging."
      },
      {
        "h2": "Chemicals, extras and how they are billed",
        "content": "Say clearly which chemicals are in the weekly rate and which are billed. A common approach is routine sanitizer and pH chemicals included, with shock beyond a normal dose, algaecide for an outbreak, stabilizer, salt and phosphate treatments billed as extras. Our post on [chemical costs](/blog/pool-service/pool-service-software-chemical-equipment-inventory) explains how to decide where to draw that line.\n\nAlso say how extras are approved. Many companies give themselves permission to add up to a set dollar amount without calling, and require approval for anything more. That keeps a tech from waiting on a callback to fix a pool that is turning, while protecting the customer from a surprise."
      },
      {
        "h2": "Skipped visits, weather and access",
        "content": "Decide in advance what happens when a visit cannot be done. If the gate is locked or a dog is loose, is the visit billed? Many companies bill it, because the trip and the route time were spent. If you skip because of severe weather, does the visit get made up later in the week, or credited? Write it down either way.\n\nWhen a tech skips a stop, he should mark it skipped with a reason in the crew app, so the customer gets a skipped alert and the office has a record. A note like \"gate locked, called no answer, will return Thursday\" at the time of the skip prevents most of the arguments that come later."
      },
      {
        "h2": "Rate changes, pauses and canceling",
        "content": "Customers accept rate increases better when they were told how they work at the start. State that rates are reviewed once a year, with written notice ahead of any change. Say whether the customer can pause service, for example while traveling or during winter in a seasonal market, and whether a pause has a minimum or a restart charge.\n\nGive a simple cancellation rule, such as two weeks' written notice, and keep it reasonable. A customer who feels trapped will leave angrier than one who was allowed to go cleanly. When customers do cancel, record the reason. Over a season, cancellation reasons tell you whether you are losing accounts to price, to service problems, or to people moving away, and each of those needs a different response.\n\nRaise rates on a schedule, not in reaction to a bad month. A once-a-year review in late winter, with notice sent a month ahead, gives customers time to ask questions and gives you a clean point to adjust underpriced accounts. Customers who get a modest, explained increase each year rarely leave over it. Customers who get no increase for four years and then a big one often do."
      },
      {
        "h2": "Present it the way customers buy",
        "content": "The agreement does not need to be a separate legal document if your estimate does the job. A clear estimate for weekly service that lists what is included, the price, the billing model and the key terms, sent by email or text, which the customer approves online, gives you a dated record of what they agreed to. If they do not answer, three automatic follow-ups go out before the lead goes cold.\n\nOnce approved, convert the estimate into the recurring service so the weekly visits start without anyone retyping the details. See how [estimates and quoting](/features/field-service-estimates-quoting) work from first send to scheduled job."
      },
      {
        "h2": "Commercial and HOA pools need more in writing",
        "content": "If you service community pools, apartment complexes or HOA pools, the agreement needs more detail than a residential one. Specify the service frequency, which may be several times a week in season, who is responsible for opening and closing the facility, how quickly you respond to a call about cloudy water, and who the contact is for approvals. Commercial pools often fall under local health department rules for chemical levels and record keeping, so check what applies in your area and make sure your logs meet it.\n\nBilling for these accounts usually works best as a monthly period bill to the property manager rather than per visit, with extras approved in writing. Keep the property contacts current, because managers change often, and an invoice sent to someone who left in March will sit unpaid. A single client can have several properties, which suits a management company with multiple communities on one account."
      },
      {
        "h2": "Running the agreement month after month",
        "content": "An agreement only helps if the schedule and the billing follow it. Set the account up as a recurring service every 7 days on its service day, with the weekly rate on it. Decide whether billing is flat monthly or per completed visit, and set the account to match. The [billing post](/blog/pool-service/pool-billing-per-stop-software) compares the two.\n\nPut the card on file at signup and let completed work or the monthly bill charge it automatically, with automatic follow-ups if a payment fails. The less the office touches a routine account, the more time it has for new sales and repairs. For seasonal markets, a season program billed monthly or prepaid can work the same way, with any prepayments tracked as a running ledger. The [service contract tools](/features/service-contract-management-software) cover package plans in more detail."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-billing-per-stop-software",
    "title": "Flat Monthly or Per-Stop Billing for Pool Service? How to Choose",
    "description": "Compare flat monthly and per-stop billing for weekly pool service, with example math on four and five week months, skipped visits, extras and card charging.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Every pool company eventually has the argument with itself: do we bill a flat monthly price or charge for each visit we complete? Both are common, both work, and the wrong choice for your market will cost you either cash flow or customer trust. The decision affects how you handle five-week months, rain days, locked gates and extra chemicals, so it is worth making on purpose instead of by default. This post compares the two with example numbers and shows how to run either one without spending a day each month building invoices.",
    "sections": [
      {
        "h2": "How flat monthly works",
        "content": "With flat monthly billing, the customer pays the same amount every month for weekly service. The usual way to set the price is to take the weekly rate, multiply by 52 weeks, and divide by 12. A $40-per-visit pool becomes about $173 a month. Some months have four service days, some have five, and over a year it evens out.\n\nCustomers like flat monthly because it is predictable, like a utility bill. Owners like it because the money arrives on the same day every month regardless of weather. The downside is explaining it. A customer who notices you skipped a week for a storm may ask why they paid the full month. Your agreement needs to say what happens with missed visits, whether they get made up later in the week or credited."
      },
      {
        "h2": "How per-stop billing works",
        "content": "With per-stop billing, each completed visit is billed at the weekly rate. A month with four Tuesdays bills four visits and a month with five bills five. If a visit is skipped for weather, it is not billed unless made up.\n\nPer stop is easy to defend because the bill matches the work exactly. It also suits markets where service days get disrupted often. The downsides are uneven cash flow, more frequent charges on the customer's card if you bill each visit, and customers being surprised by the five-visit months. Some companies solve the last one by billing per stop but sending one monthly statement."
      },
      {
        "h2": "Example: the same pool both ways",
        "content": "Take an illustrative pool at $40 a visit with chemicals included. On flat monthly, the customer pays about $173 every month, $2,080 a year. On per stop, a typical year with 52 service days bills the same $2,080, but in some months the customer pays $160 and in others $200.\n\nNow add two skipped weeks for weather that are not made up. On per stop, the customer pays $2,000, and you lose $80. On flat monthly, the customer still pays $2,080 unless your agreement credits missed visits. That gap is why flat monthly agreements need clear terms about weather, and why per stop customers rarely complain about the bill. Neither model is more profitable on its own. The difference is who carries the risk of missed weeks.\n\nThere is also a timing difference in cash flow. On flat monthly, the full month is usually charged at the start or end of the month in one charge. On per stop with auto-charge, money arrives every week as visits are completed. Some owners prefer the weekly drip because a problem with a card shows up after one visit instead of after a full month of service."
      },
      {
        "h2": "Extras belong on top, either way",
        "content": "Whichever model you choose for the weekly service, extras should be billed separately: filter cleans, extra shock, green pool recovery, repairs, salt. If those are not billed, the flat monthly rate quietly absorbs them, and your best customers end up subsidizing the worst pools.\n\nThe trick is getting extras onto the invoice without relying on memory. When the tech logs the extra product or marks the extra work on the visit, it can be added to the bill as its own line. A filter clean scheduled as a separate job gets its own invoice when it is done. The [chemical cost post](/blog/pool-service/pool-service-software-chemical-equipment-inventory) covers deciding which chemicals count as extra."
      },
      {
        "h2": "Run it with cards on file",
        "content": "Collecting checks for weekly pool service is a part-time job you do not need. Ask for a card at signup, explain when it will be charged, and send a receipt each time. For per stop, the card can be charged automatically when a stop is marked completed. For flat monthly, the monthly billing period charges it on the same date each month.\n\nCards fail, so plan for it. Three automatic payment follow-ups and a declined-card alert let you deal with the handful of failures each month instead of chasing everyone. Plans start at $59 a month on [pricing](/pricing), and every plan includes card on file and auto-charge. More on [payment processing](/features/field-service-payment-processing) is on the feature page."
      },
      {
        "h2": "Switching customers from one model to the other",
        "content": "If you are moving existing customers from per stop to flat monthly, or the other way, do it at a clean break, like the start of a month, and tell them in writing first. Explain the change in a sentence or two: \"Starting in March, you will be billed a flat $173 each month instead of per visit. Over a year, the total is the same.\" Most customers accept a change that does not raise the annual cost.\n\nExpect a few questions in the first month or two, especially from customers who notice they paid the same in a five-week month as in a four-week one. Answer each one with the yearly math. Change the billing setting on each account at the same time you send the notice, so the next bill matches what you told them."
      },
      {
        "h2": "Which to choose",
        "content": "If your market has steady weather and customers who value predictability, flat monthly is usually smoother for everyone, as long as the agreement covers missed visits. If your service days get disrupted often, or your customers are on the skeptical side, per stop is easier to defend. Many companies offer flat monthly as the default and per stop for customers who ask.\n\nWhatever you choose, be consistent. Mixing models without a clear rule confuses the office and leads to billing errors. Write the model into the [service agreement](/blog/pool-service/pool-service-software-recurring-service-agreements), set it on each account, and let the billing run from completed work. The fewer invoices someone has to build by hand, the fewer mistakes go out."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-repair-tracking-software",
    "title": "From Loud Pump to Paid Invoice: Keeping Pool Repairs From Falling Through",
    "description": "How to move a pool repair from the tech's first observation to a quote, approval, scheduled job and paid invoice, without losing the job in the handoffs.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Your techs stand next to every pump, filter and heater on the route once a week. They hear the bearing going in a motor long before it fails, and they see the filter pressure creeping up month after month. That is a steady stream of repair work most pool companies only partly capture. The problem is rarely skill. It is the handoffs: from the tech to the office, from the office to the customer, from the customer's yes to the schedule, and from the finished job to the invoice. This post follows a repair through each handoff and shows where it usually gets dropped.",
    "sections": [
      {
        "h2": "Capture it at the pool, with a photo",
        "content": "The repair starts when the tech notices something, and it is easiest to lose right there. A tech who plans to \"mention it to the office\" forgets by the fourth pool. So the rule is simple: if you see a problem, record it at the stop. A photo of the leaking pump seal, the cracked filter tank or the error code on the heater display, plus a crew note to the office saying what you saw and what you think it needs.\n\nThe photo matters more than people think. It is proof for the customer that the problem is real, it helps the office or a repair tech prepare, and it gives you a record if the equipment fails before the customer approves the fix. The property notes are also the place to keep the equipment details you will want later, such as pump model and horsepower, filter type and size, heater make."
      },
      {
        "h2": "Quote it the same day",
        "content": "A repair quote sent the same day as the photo closes far more often than one sent a week later. The customer just got an alert from their pool visit, they are thinking about the pool, and the photo is fresh. A week later, the urgency is gone.\n\nBuild your common repairs into the service catalog with your standard prices: pump motor replacement, seal kit, cartridge replacement, filter clean, heater diagnosis. Then the office, or a trusted tech from the crew app if you turn it on for them, can put together an estimate in a few minutes and send it by text or email. The [estimating post](/blog/pool-service/pool-service-software-estimating-quoting) covers building that catalog and pricing repairs well."
      },
      {
        "h2": "Let the follow-ups do the chasing",
        "content": "Many repair quotes die because nobody asks twice. The customer meant to answer, got busy, and then forgot. The office meant to call, got busy, and then forgot. Three automatic follow-ups on an unanswered estimate solve most of that without anyone having to remember.\n\nWhen a customer does approve online, the approval is dated and attached to the estimate, so there is no confusion later about what they agreed to. If a customer declines, record why. \"Too expensive\" may mean offering a lower-cost option, like a seal kit instead of a whole new pump. \"Will wait\" is worth a reminder in a month, especially if the tech keeps seeing the problem get worse."
      },
      {
        "h2": "Hold the job until it is ready to schedule",
        "content": "Approved repairs often cannot be done right away. You may need to order a motor, wait for the right tech, or find a day when the equipment can be shut down. This is where repairs disappear: the job is approved, but nobody puts it on the calendar.\n\nConvert the approved estimate into a job and keep it on the Pending Jobs board until it is scheduled. Add a note on the job when a part is on order and when it arrives. Then check the board at a set time every week. Any approved repair that has sat for more than a week without a date needs a phone call. See how the [Pending Jobs board](/features/pending-job-board-software) keeps that list in one place."
      },
      {
        "h2": "Do the work and document it",
        "content": "On repair day, the tech should have everything on the job: the original photo and note, the approved estimate, the property notes with equipment details, and any parts information. When the work is done, take after photos and add a note about what was replaced and anything else noticed.\n\nThe completed alert to the customer can include those notes and photos. That closes the loop: the customer saw the problem, approved the fix, and now sees it fixed. It also gives you a record if the same equipment has issues later and someone asks what was done."
      },
      {
        "h2": "Repeat failures and warranty work",
        "content": "Sometimes a repair does not stick. A new motor fails in two months, a seal leaks again, or the heater throws the same code. When that happens, the repair history on the property is what lets you sort out warranty quickly. You can see what was replaced, when, by whom, and the photos from before and after.\n\nDecide in advance how you handle your own callbacks. Many companies cover labor on a repeat failure within a set period and pass manufacturer warranty claims through for parts. Whatever your policy is, write it on your repair estimates so customers know before they approve. Keep an eye on which repairs come back. If one part or one tech shows up again and again, that is a supplier or training problem worth fixing before it costs you more callbacks."
      },
      {
        "h2": "Bill it the moment it is done",
        "content": "The final handoff is from finished job to invoice, and it is the most painful one to lose. When the job is marked complete, the invoice should come from the approved estimate's line items, so the customer pays exactly what they approved, plus any changes you discussed with them. With a card on file, it can charge automatically when the job is completed.\n\nLook at your repair numbers every month: how many problems techs flagged, how many became quotes, how many were approved, and how many were completed and paid. If techs flag plenty but few become quotes, the office is the bottleneck. If quotes go out but few are approved, look at pricing and presentation. The [invoicing tools](/features/field-service-invoicing-software) and the overview of [pool service software](/pool-service-software) show how the job, the estimate and the invoice stay linked."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-service-software-estimating-quoting",
    "title": "Pricing a New Pool Account and Quoting Repairs Without Guessing",
    "description": "How to price weekly pool service by size, debris, equipment and drive time, build a repair price list, and send quotes customers can approve from their phone.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Most pool companies price new accounts the same way: look at the pool, think about what other customers pay, and say a number. That works until you have forty accounts and realize a third of them are underpriced. Pricing well is not complicated, but it does take a method. This post covers how to price weekly service based on what actually drives your time and cost, how to build a repair price list your whole team can use, and how to get a quote in front of a customer while they are still interested.",
    "sections": [
      {
        "h2": "What drives the time at a pool",
        "content": "Service time is the biggest cost in weekly pool work, so start there. The main drivers are pool size, debris load, and extras. A small pool in a screened enclosure may take 15 minutes. The same size pool under live oaks may take 30. An attached spa, a water feature, a long run of steps or a tile line that collects scale all add minutes.\n\nOn the site visit, note the approximate size, surface type, trees overhead, whether there is a screen or cover, the equipment (pump, filter type, heater, salt system, automation), and anything odd. Estimate the minutes a typical visit will take. Then add a realistic drive time from your nearest existing stop. Our [route density post](/blog/pool-service/pool-route-density-software) explains why that last number matters so much."
      },
      {
        "h2": "Turning minutes into a price",
        "content": "Once you have time, the math is straightforward. Take an illustrative case: your loaded labor cost is $25 an hour, truck cost works out to about $4 per stop, your average chemical cost per pool is around $3 a visit, and you want overhead and profit to cover about half the price.\n\nA 25-minute pool with 5 minutes of drive is 30 minutes of labor, or $12.50. Add $4 for the truck and $3 for chemicals and the direct cost is about $19.50. Doubling that to cover overhead and profit gives a price near $40 a week. A 45-minute pool with trees and a spa, using the same method, lands closer to $60. If your market will not pay that for the second pool, you know before you sign it rather than after a season of losing money."
      },
      {
        "h2": "Build a repair price list",
        "content": "Repairs should not be priced from scratch every time. Put your common jobs in the service catalog with standard prices: filter clean by filter type, cartridge replacement, pump seal kit, motor replacement by horsepower, timer or valve replacement, heater diagnosis, green pool recovery by severity. Include labor and a markup on parts.\n\nA catalog does two things. Quotes go out faster because the office is choosing line items, not calculating. And two people quoting the same job arrive at the same price, which matters when customers talk to their neighbors. Review the catalog when supplier prices change, because an old parts price in the catalog will quietly shrink every repair margin until someone notices."
      },
      {
        "h2": "Use estimate templates for the common situations",
        "content": "Most quotes fall into a handful of patterns: a new weekly account, a green pool cleanup followed by weekly service, an opening, a closing, a filter clean, a pump replacement. Build an estimate template for each so the office starts with the right lines, the right terms and the right wording every time.\n\nA weekly service template should include what each visit covers, how chemicals are handled, the billing model and the key terms from your [service agreement](/blog/pool-service/pool-service-software-recurring-service-agreements). A green pool template should be clear that the cleanup is a separate charge and that the first few visits may need extra chemicals. Customers trust a quote more when it already answers the questions they were about to ask."
      },
      {
        "h2": "Quoting a green pool",
        "content": "Green pool cleanups are the quotes most often underpriced. They vary enormously. A pool that turned green over a long weekend may clear with one heavy shock and a filter clean. A pool that sat untouched for a season can take several visits, a lot of chemicals, multiple filter cleans and possibly a drain.\n\nPrice them in tiers based on what you can see: light green with the floor visible, dark green with no floor visible, and black or swampy. Include the first visit, a set amount of chemicals and a set number of follow-up visits in each tier, with extra visits or chemicals billed beyond that. Take a photo before you start. It protects you when the customer forgets how bad it was, and the before and after pair makes a strong marketing photo. Offer weekly service in the same estimate, since a customer who just paid to clear a pool is a strong candidate to keep it clear."
      },
      {
        "h2": "Get the quote to them fast",
        "content": "Speed wins pool jobs. A homeowner with a green pool and a party in ten days will hire whoever answers first with a clear price. Send estimates by text or email so the customer can read and approve on their phone. If they do not answer, three automatic follow-ups go out so the quote does not just sit there.\n\nFor repairs, a trusted tech can write, price and send an estimate from the crew app while still standing at the pool, if the owner turns it on for that employee. It works without signal and sends once the phone is back online. The customer gets the quote while the tech is still in the driveway."
      },
      {
        "h2": "From yes to the schedule",
        "content": "An approved estimate should become scheduled work without anyone retyping it. For a new weekly account, convert it into the recurring service on the right day for its zone. For a repair, convert it into a job and schedule it, or hold it on the Pending Jobs board until parts arrive.\n\nWatch your numbers over time: quotes sent, approved, and average value. If your weekly-account close rate is very high, you may be underpriced. If repair quotes are rarely approved, look at how they are presented and whether a lower-cost option would help. See how [estimates and quoting](/features/field-service-estimates-quoting) carry through to the job and the invoice."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-service-software-seasonal-demand-planning",
    "title": "Pool Openings and Closings: Planning the Spring Rush and the Fall Wave",
    "description": "How to plan pool openings and closings in seasonal markets: building the list, booking by area, pricing green openings and keeping cash coming in winter.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "In seasonal markets, pool service has two crunch periods that look nothing like the rest of the year. In spring, everyone wants their pool opened at once, and the warm weekend that triggers the calls is the same weekend your techs are booked solid. In fall, closings bunch up before the first hard freeze. Companies that plan these waves early sign new weekly accounts and collect a lot of one-time revenue. Companies that wing it disappoint customers at the moment those customers are deciding whether to stay. This post is about planning both.",
    "sections": [
      {
        "h2": "Build the opening list before the phone rings",
        "content": "Your opening list starts with last year's customers. Every account you closed in the fall is a likely opening in the spring. Add last season's leads that never signed, and new leads as they come in through your website form. Do this in late winter, not when the first warm day hits.\n\nPut each opening on as a due job so you can see the whole list at once. A Waiting List of properties that are due, with the type of work and the area, lets you plan the wave rather than react to it. Reach out early with a booking message and a date range, and fill your first two weeks with existing customers before new leads take the slots."
      },
      {
        "h2": "Book by area, not by who called first",
        "content": "The worst way to schedule openings is in the order customers call. That sends techs back and forth across town for single jobs that each take an hour or more. Instead, group openings by area and book each area on a set day or set of days.\n\nOn the map, circle a neighborhood and schedule the openings inside it onto a day and truck in one step. Let auto-routing order the stops. Tell customers which day their area is being opened, and give them the option to pick a different area day if they need to. Most accept the date you offer when you explain you are in their neighborhood that day. The [route days post](/blog/pool-service/pool-service-software-dispatch-routing) covers the same zone thinking for weekly service."
      },
      {
        "h2": "Price openings for what you find",
        "content": "An opening can be a quick job or a half-day disaster, depending on how the pool was closed and how the cover held up. Price a standard opening as a flat fee covering cover removal, cleaning and storage, reinstalling equipment, starting up the system and initial chemical balance. Then price green or swampy openings as a separate, higher tier, or as standard opening plus recovery visits.\n\nBe clear in the estimate that if the water is green under the cover, the opening includes the startup but the cleanup is billed separately. Customers accept this much better before the cover comes off than after. Photos at the opening help explain any extra charges.\n\nAsk for a deposit when you book a green opening or a large one, especially for new customers. A deposit holds the slot, cuts down on no-shows when the weather turns, and covers your first round of chemicals if the pool turns out to be worse than expected. Apply it to the final invoice so the customer sees it credited."
      },
      {
        "h2": "Turn openings into weekly accounts",
        "content": "An opening is the best moment to sell weekly service. The customer is looking at a clean, running pool for the first time in months, and you are standing there. Have the tech or the office follow every opening with an offer for weekly service, with the price and their service day.\n\nFor customers who stay on weekly service through the season, the opening can roll straight into a recurring service every 7 days. Some companies sell the season as one package: opening, weekly service and closing, billed monthly or prepaid. If customers prepay, track those prepayments as a ledger so each visit draws down correctly. The [service agreement post](/blog/pool-service/pool-service-software-recurring-service-agreements) covers what goes in the terms."
      },
      {
        "h2": "Plan closings backward from the first freeze",
        "content": "Closings have a hard deadline in cold climates: the pool needs to be winterized before freezing temperatures can damage plumbing and equipment. Look at typical first-freeze dates in your area, then work backward. Start booking closings several weeks ahead, and fill the earliest slots with the customers most at risk, such as those with exposed above-ground equipment or long plumbing runs.\n\nUse the same area-by-area approach as openings. Keep track of who is closed and who is not, so nobody is forgotten when the cold comes early. A list of who is still due, checked daily in the last two weeks, is the safety net. Note any equipment problems you saw at closing; they become spring repair quotes."
      },
      {
        "h2": "Staff for the waves, not the average",
        "content": "Openings and closings need more hands than your weekly routes, but only for a few weeks. Plan for it. Some companies bring on a seasonal helper who rides with an experienced tech. Others have their lawn crews help with cover removal and cleanup while the pool tech handles startup and chemistry. Some schedule openings on Saturdays or early mornings before weekly routes start.\n\nWhatever you do, protect the weekly routes. Customers already on weekly service should not be skipped because the techs are busy with openings. If a weekly route has to move, send the reschedule text before the day, not after. Track clock-in times on opening and closing jobs. After one season, you will know how long a standard opening really takes, which tells you whether your price is right and how many you can book per day next year."
      },
      {
        "h2": "Keep money coming in during the off months",
        "content": "In a seasonal market, revenue drops sharply after closings. A few things help. Prepaid season packages bring cash in early. Equipment replacement sold at closing, like a new pump or heater installed before spring, gives you work in the slower months. Some companies offer winter check visits for covered pools.\n\nFor lawn companies that add pool service, the seasonal pattern can fit well: pools ramp up as spring lawn rounds start, and closings happen as fall cleanups begin. Running both from one schedule keeps the crews busy and the customers on one bill. The overview of [pool service software](/pool-service-software) covers how recurring service, packages and the Waiting List fit together across the year."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  },
  {
    "slug": "pool-service-verification-software",
    "title": "Proof of Service for Pool Routes: Photos, Readings and Location That End Disputes",
    "description": "How pool companies prove every visit happened: stop times, location, photos, chemical readings, skip reasons and completed alerts that customers actually see.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "\"Nobody came this week\" is the most expensive sentence in pool service. Usually somebody did come. The customer was at work, the water looked the same as last week, and the leaves blew back in by evening. Without proof, the office has two options: argue or credit the visit. Over a season, those credits add up, and the customers who doubted you once tend to doubt you again. This post covers what a provable visit looks like, how to collect proof without slowing techs down, and how to use it so most disputes never start.",
    "sections": [
      {
        "h2": "What counts as proof",
        "content": "A provable visit has four parts. A time, showing when the tech was there. A location, showing the tech was actually at the address. The work record, meaning the readings and chemicals added. And a photo, showing the pool at the end of the visit. Any one of these can be questioned. All four together are hard to argue with.\n\nThe crew app records when the stop is marked done, the crew phone's GPS location during the day, the chemical readings and products added, and any photos the tech takes. None of that requires the tech to do anything extra beyond what a good visit already includes."
      },
      {
        "h2": "Photos that actually help",
        "content": "Not all photos are equal. A blurry close-up of water proves nothing. The photo that ends disputes shows the whole pool from a recognizable angle, with something identifying in the frame like the house, a distinctive fence or the equipment pad. Take it from the same spot every week so the customer and the office can compare visits.\n\nAdd photos for anything unusual: a broken skimmer lid, a tree limb in the pool, an equipment issue, a gate left open by a landscaper. Those photos protect you when something goes wrong between visits. A pool full of leaves the morning after a storm looks very different when you can show it was clean at 2pm the day before."
      },
      {
        "h2": "Skip with a reason, every time",
        "content": "Some visits cannot be completed. The gate is locked, the dog is out, the pool is being resurfaced, the customer's party is in progress. When a tech cannot service a pool, he should mark the stop skipped with a reason and, if possible, a photo of the locked gate.\n\nThe customer gets a skipped alert, so they hear about it from you, the same day, with a reason. That changes the conversation completely. Instead of \"you didn't come,\" it becomes \"oh, my gardener locked the gate, can you come back?\" Your [service agreement](/blog/pool-service/pool-service-software-recurring-service-agreements) should say whether a skip caused by the customer is billed."
      },
      {
        "h2": "Let the customer see it without asking",
        "content": "The best dispute is one that never starts. After each completed stop, the customer can get an alert with the tech's notes and photos. Over time, they can see their full service history in the customer app. A customer who gets a photo every Tuesday afternoon rarely calls on Wednesday to ask if anyone came.\n\nSome owners worry that sending photos invites nitpicking. In practice, it usually does the opposite. Customers who see consistent work feel like they are getting what they pay for, and they are less tempted when a competitor offers a lower price. Keep the notes short and friendly. The [chemical log post](/blog/pool-service/pool-service-software-water-chemistry-service-logging) covers what to say about readings."
      },
      {
        "h2": "Handling the dispute that still comes",
        "content": "Some disputes come anyway. When they do, answer with the record, calmly. \"Our tech, Marcus, was at your pool Tuesday at 1:42pm. Here is the photo he took when he finished, and the readings he logged.\" Most customers accept that right away, and often apologize.\n\nIf the record shows a problem, own it. If a visit was missed, or a photo shows the work was rushed, credit it and fix the cause. Proof works in both directions, and owners who use it honestly earn more trust than those who only pull it out to win arguments. Look at disputes over a season: if one tech's stops draw most of them, that is a training conversation.\n\nKeep your tone professional even when the customer is not. Send the record, explain what it shows, and offer to look at anything they are still concerned about. A customer who was wrong and treated politely often becomes loyal. One who was wrong and made to feel foolish usually leaves, even if they stop disputing the bill."
      },
      {
        "h2": "Teach techs to document without slowing down",
        "content": "Techs push back on documentation when it feels like busywork. Show them why it matters to them. When a customer complains, a good photo and log is what protects the tech, not just the company. Tell the story of the last dispute you settled because the photo was there, or lost because it was not.\n\nThen make it fast. One photo from the same spot at the end of every visit, taken as the last step before leaving, adds seconds. Readings and chemicals added are entered as the tech tests and doses, not afterward. Notes are only for things that matter. For the first few weeks, check every tech's stops daily and give quick feedback. Once the habit is set, a weekly sample review is enough. A tech who documents well should hear it, because the habit spreads faster through praise than through reminders."
      },
      {
        "h2": "Use proof to manage, not just to defend",
        "content": "The same records that settle disputes tell you how your routes are running. Completion times show which techs finish too early to have done the full service. Photos show quality across the route. Skip reasons show which customers have recurring access problems that need a fix, such as a gate code on file or a scheduled day change.\n\nReview a sample of each tech's stops every week. Look at photos, readings and times together. Praise the techs whose work is consistent, and have direct conversations when it is not. See how the [crew mobile app](/features/field-service-mobile-app) captures each stop, and how the [pool service software](/pool-service-software) overview ties proof of service to billing."
      }
    ],
    "hubSlug": "pool-service-software",
    "hubKeyword": "pool service software",
    "industry": "pool-service"
  }
];

export const hub: HubPageData = {
  "slug": "pool-service-software",
  "industry": "Pool Service",
  "isMain": true,
  "h1": "Pool Service Software for Weekly Routes, Chemical Logs and Repairs",
  "subtitle": "Fixed service days, a pool chemical log at every stop, repair quotes from the field, and billing that runs from completed work. Built for lawn companies that add pools and the pool routes that go with them.",
  "metaTitle": "Pool Service Software for Routes | IndustryBossPro",
  "metaDesc": "Pool service software with weekly recurring routes, auto-routing, a pool chemical log per visit, repair estimates, and flat monthly or per-stop card billing.",
  "heroPoints": [
    "Put every pool on a fixed service day that repeats every 7 days",
    "Log chlorine, pH, alkalinity and chemicals added at every stop",
    "Bill flat monthly or per completed stop, charged to the card on file"
  ],
  "painPoints": [
    {
      "problem": "Customers say nobody came this week",
      "solution": "Each stop carries the time it was marked done, the tech's photos, the chemical readings, and a completed alert the customer already received."
    },
    {
      "problem": "Repair quotes get mentioned and never sent",
      "solution": "Techs photograph the problem and send a crew note to the office. Estimates go out by text with three automatic follow-ups, and approved ones convert to jobs."
    },
    {
      "problem": "No idea which pools eat chemicals",
      "solution": "Products and amounts are logged per visit against costs in the materials list, so job costing shows labor, materials and margin on each account."
    }
  ],
  "features": [
    {
      "icon": "🏊",
      "title": "Recurring Pool Routes",
      "desc": "Weekly accounts repeat every 7 days on their service day. Auto-routing orders each day's stops by distance, and moving a day sends customers a reschedule text."
    },
    {
      "icon": "🧪",
      "title": "Pool Chemical Log",
      "desc": "Techs record readings like chlorine, pH and alkalinity, plus every chemical added and the amount, at each visit. The history stays on the property."
    },
    {
      "icon": "📱",
      "title": "Crew App Poolside",
      "desc": "The route in order with navigation, gate codes and property notes, clock in and out, photos, skip with a reason, and crew notes to the office."
    },
    {
      "icon": "📝",
      "title": "Repair Estimates",
      "desc": "Price repairs from your service catalog, send by text or email, let customers approve online, and convert approved estimates into scheduled jobs."
    },
    {
      "icon": "💳",
      "title": "Monthly or Per-Stop Billing",
      "desc": "Bill a flat monthly period or charge the card on file when a stop is completed. Declined cards trigger an alert and three automatic follow-ups."
    },
    {
      "icon": "📊",
      "title": "Job Costing",
      "desc": "Labor from crew clock-in times and materials from logged chemicals add up to profit and margin per job, so underpriced pools stand out."
    }
  ],
  "pendingBoard": "The Waiting List shows every pool that is due for one-time work, like spring openings, closings, filter cleans and green pool cleanups. Circle a neighborhood on the map to schedule those properties onto a day and truck in one step. Approved repairs that are waiting on parts sit on the Pending Jobs board until you put them on the calendar.",
  "blogSiloIndustry": "pool-service",
  "blog1Slug": "pool-service-software-complete-guide",
  "blog1Title": "How a Pool Service Company Really Runs: Routes, Readings, Billing and Repairs"
};
