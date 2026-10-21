import type { BlogPost } from '../types';
import type { HubPageData } from '../../hub-data';

export const posts: BlogPost[] = [
  {
    "slug": "lawn-care-software-complete-guide",
    "title": "How a Lawn Treatment Company Actually Runs: Rounds, Records, Routes and Billing",
    "description": "A working guide to a fertilizer and weed control business: building rounds, keeping application records, routing techs, pricing by size, and billing programs.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A lawn treatment company is a different animal from a mowing company. You see each lawn five to eight times a year instead of thirty, every visit puts a regulated product on someone's property, and most of your revenue is sold months before the first truck rolls. That changes what matters. The owners who do well are the ones who get four things right: a program that hits each lawn in the right window, a record of every application that would satisfy an inspector, routes dense enough that a tech treats lawns instead of driving between them, and billing that matches the way the customer bought. This guide walks through each of those in the order the season actually happens, with the mistakes that cost the most and how a small operation can keep it all straight.",
    "sections": [
      {
        "h2": "Start With the Program, Not the Calendar",
        "content": "Most fertilizer and weed control companies sell a season program: something like an early spring pre-emergent with fertilizer, a late spring broadleaf and fertilizer round, one or two summer rounds, a fall feeding and a winterizer. The specific products and timing depend on your grass types and climate, but the principle is the same everywhere. The program is the product. Each round has a window, and a lawn treated outside its window gets a weaker result.\n\nSo before you think about which day a lawn gets serviced, decide how far apart rounds sit. A six-round program in a cool-season market often lands around five to seven weeks between visits. Write that interval down per round, because it drives everything after it. In IndustryBossPro you build the program as a package plan and set each round's interval on the recurring service, so when a lawn finishes round two it shows up as due for round three at the right time instead of whenever someone remembers. More on round spacing in [planning a full program](/blog/lawn-care/full-program-scheduling-lawn-treatment-software)."
      },
      {
        "h2": "Records Are Part of the Job, Not Paperwork After It",
        "content": "Every application needs a record: what product, how much, over what area, who applied it, when, and usually the conditions. Your state sets the exact list and how long you keep it, so read your state's record-keeping rules once and build your process around them. The failure point is almost never knowing what to record. It is the tech writing it up at 6 p.m. from memory, or not at all.\n\nThe fix is to capture the record on the lawn. When the tech marks a property done in the crew app, they enter the product or tank mix and the amount, and the area comes from the property measurement. That builds an application record per property per visit, and the office can print or send a chemical report whenever it is needed. The customer can also get a chemical email after the application telling them what went down. See [what a good application record contains](/blog/lawn-care/lawn-chemical-application-records-software) for the details."
      },
      {
        "h2": "Price by Size and Know Your Product Cost",
        "content": "Treatment pricing has to follow square footage, because product is a real cost that scales with the lawn. A 4,000 square foot lawn and a 14,000 square foot lawn cannot be the same price per round unless one of them is losing you money. Most companies set a base price that covers a minimum lawn plus a rate per additional thousand square feet.\n\nYou need an accurate measurement to do that, and pacing a yard off is not accurate. Outline the turf on the satellite map, subtract the house, driveway and beds, and you have a square footage that drives the price of every round for that property. It is also the number behind your product amounts, so a bad measurement shows up twice: in your price and in your records. The full math is in the square footage pricing post in this series."
      },
      {
        "h2": "Route Density Beats Raw Speed",
        "content": "A spray or spreader tech can treat an average lawn in 10 to 20 minutes. If the next stop is 12 minutes away, half the day is windshield time. Density matters more in treatment than in mowing because each stop is shorter. The practical move is to schedule rounds by area: when a round comes due, pull the due properties in one part of town and put them on the same day.\n\nThe Waiting List handles this. It shows every property due for its next round, and you can circle a neighborhood on the map to pick those properties and schedule them onto a day and truck in one step. Auto-routing then orders the stops by distance. A tech who treats 25 lawns in a tight cluster will out-earn a faster tech who treats 18 spread across the county."
      },
      {
        "h2": "Bill the Way the Customer Bought",
        "content": "Treatment customers buy in three ways. Some pay per round as each visit is done. Some pay a flat monthly amount that spreads the program across the season. Some prepay the whole year, usually for a discount. A company that offers all three needs billing that keeps them separate and correct.\n\nPer-round billing works well with a card on file and an auto-charge when the job is marked complete. Monthly billing runs on a period invoice. Prepay is the one that trips people up, because you are holding money for work not yet done. Track it as a ledger, with the payment in and each round drawn against it, so you always know what you still owe the customer if they cancel in July. [Prepaid programs](/blog/lawn-care/prepay-packages-lawn-treatment-software) covers the details."
      },
      {
        "h2": "The Mistakes That Cost Treatment Companies the Most",
        "content": "Most of the money lost in a treatment business does not come from one dramatic failure. It comes from small leaks repeated hundreds of times. Lawns measured too small, so every round is underpriced. Rounds stacked too close together after a wet spring, so the customer sees burn or gets one fewer round than they paid for. A tech who never writes the second product in a tank mix on the record. A prepaid customer who cancels in July, and nobody can say what they are owed.\n\nEach of these has the same root cause: information that lived in someone's head instead of on the property record. The fix is not working harder. It is putting the measurement, the interval, the products and the payments in one place, so that the next person who touches the account sees the truth. That is the thread running through every section of this guide and the posts linked from it."
      },
      {
        "h2": "What to Set Up First",
        "content": "If you are moving off paper or a spreadsheet, do it in this order. Import your customers and properties (from a spreadsheet or from Jobber). Measure each lawn on the map. Enter your products and the tank mixes you actually use, with rates. Build your program as a package plan with round intervals. Then set each customer's billing method and get cards on file. With that in place, the first round of the season is a matter of working the Waiting List.\n\nPlans start at $59 a month, every plan is the same software (they differ by users, trucks and text allowance), and there is a 14-day trial with no card. If this is the only service you run, SprayBossPro (https://spraybosspro.com) is the version built just for it. If you also mow, aerate or do other work alongside treatments, the main [lawn care software](/lawn-care-software) page shows how it fits together."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "full-program-scheduling-lawn-treatment-software",
    "title": "Spacing a Six-Round Fertilizer Program So Every Lawn Hits Its Window",
    "description": "How to set round intervals, handle late starts and early cancels, and schedule each round by neighborhood so a lawn treatment program stays on time all season.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "The first round of a fertilizer program is easy. Everybody is due, the trucks are fresh, and you can start on one side of town and work across. The trouble starts around round three. New customers signed up in May are a round behind. A rainy week pushed one area back. A handful of lawns got skipped for a locked gate. Now you have properties on four different rounds, and the next application for each one has a window that opens and closes on its own schedule. A program only works if every lawn gets each round in the window that makes the product effective. Here is how to set it up so the season does not slowly come apart.",
    "sections": [
      {
        "h2": "Set the Interval Per Round, Not Per Season",
        "content": "It is tempting to say \"every six weeks\" and be done. But rounds are not identical. A pre-emergent has to go down before soil temperatures reach the point where crabgrass germinates, which in many markets is a narrow few weeks in early spring. A summer round in hot weather might be spaced wider because you are applying less nitrogen and spot-treating weeds. A fall round has its own timing tied to when cool-season grass is recovering.\n\nWrite out your rounds with a target date range for each, then work out the gap between them. A typical cool-season six-round program might run early spring, mid-spring, late spring, summer, early fall and late fall, with roughly five to seven weeks between them. Warm-season programs shift those windows. Whatever your schedule, the interval between round two and round three is a real number, and it should live on the recurring service so the software can tell you when each lawn comes due."
      },
      {
        "h2": "Let Due Dates Come From the Last Visit",
        "content": "The cleanest way to keep rounds spaced is to count the interval from the date the last round was actually done, not from a fixed calendar date. If a lawn got round two late because of rain, round three slides later with it, and you never put two applications down three weeks apart.\n\nThat is how recurring services work in IndustryBossPro: you set the number of days between visits (say 42 for a six-week gap), and when a round is marked done the property goes back onto the Waiting List as due again after that many days. The Waiting List is then your live answer to \"who needs round three right now,\" without anyone keeping a spreadsheet of who is on which round."
      },
      {
        "h2": "Schedule a Round by Area, Not by Due Date Alone",
        "content": "Once you know who is due, the next mistake is scheduling them in due-date order. Due-date order sends a tech from one end of town to the other. Instead, look at what is due in the next week or two and group it by neighborhood.\n\nOn the Waiting List map, circle an area and the due properties inside it are selected. Schedule them onto one day and one truck in a single step, and auto-routing puts the stops in driving order. A lawn that is due on Thursday but sits in Tuesday's neighborhood gets treated Tuesday, which is two days early and well inside its window. That small amount of flexibility is what turns a 15-stop day into a 25-stop day. The [routing post](/blog/lawn-care/dispatch-and-routing-in-lawn-care-software) goes further into building those days."
      },
      {
        "h2": "Late Starters and Mid-Season Signups",
        "content": "A customer who signs up in June missed the pre-emergent and the first fertilizer round. You have three choices: start them on the current round and simply give them fewer rounds this year, sell them a catch-up visit, or prorate the program price. Pick one policy and write it down so the office answers the same way every time.\n\nMost companies start the late customer on whatever round the rest of the route is on, so they line up with their neighbors, and price the season by the rounds they will actually get. That keeps your routing tidy, because the new lawn will come due at the same time as the houses around it."
      },
      {
        "h2": "Skips, Holds and Cancellations",
        "content": "Some lawns will not get treated on the day you planned. A dog in the yard, a locked gate, a customer who just seeded and asked you to wait. When a tech skips a stop in the crew app, they pick a reason, and the property stays due so it is not forgotten. The customer gets a skipped alert so they know why nobody came.\n\nCancellations are the other leak. When a customer cancels, record the cancellation reason. Over a season those reasons tell you whether you are losing people to price, to results, to moving, or to a competitor, and that is the information you need before you set next year's prices."
      },
      {
        "h2": "A Worked Example: Round Four for 400 Lawns",
        "content": "Say you have 400 customers on a six-round program and round four is meant to run from late June through the end of July. By the middle of June, the Waiting List shows about 150 lawns already due, because they had round three early, and the rest will come due over the following three weeks.\n\nDo not start at the top of the list. Pull up the map, look at where the due lawns cluster, and circle the densest neighborhood first. If that captures 28 lawns, that is a full day for one tech. Schedule it, let auto-routing order it, and move to the next cluster. In an hour you can lay out a week of dense days. As more lawns come due, repeat the process each Friday for the week after.\n\nThe handful of lawns sitting out on their own, the one customer on the far side of the lake, get added to the closest day rather than given their own trip. When a wet week hits, see [making the weather call](/blog/lawn-care/weather-aware-scheduling-lawn-treatment-software) for how to reshuffle without losing the window. And if you also sell mowing or other services on the same properties, the [lawn care software](/lawn-care-software) page explains how those schedules sit alongside your program."
      },
      {
        "h2": "Check Capacity Before You Sell More",
        "content": "Because every active program has a known number of rounds left, you can look ahead. If round four is due for 600 lawns over the same three weeks and one tech treats about 25 a day, you need 24 truck-days in that window. If you only have two trucks and 15 working days, that is 30 truck-days, which fits with a little room. If you are selling hard in spring, run that math before you add another 200 customers. The answer may be that the next 200 need a second tech, not a better schedule. Overselling a program is worse than underselling it, because late rounds are the most common reason treatment customers do not renew."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "lawn-chemical-application-records-software",
    "title": "What a Good Pesticide Application Record Contains, and How to Capture It on the Lawn",
    "description": "The fields a lawn application record needs, why records written at the end of the day fail, and how to capture product, amount and area at each stop instead.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Ask a state inspector what goes wrong with lawn care application records and the answer is rarely that a company did not know what to write. It is that the record was written later, from memory, by someone tired. The product name is a nickname, the amount is a round number, the area is a guess, and the time is \"afternoon.\" None of that holds up if a neighbor complains about drift or a customer's dog gets sick and someone wants to know exactly what went down. A record is only as good as the moment it was captured. This post covers what belongs in a record, why the timing of capture matters more than the format, and how to build a habit your techs will actually follow.",
    "sections": [
      {
        "h2": "The Fields That Belong in Every Record",
        "content": "Your state decides the official list, so read your state's record-keeping rules and confirm how long you must keep records. In most places the backbone looks similar. The property address. The date, and often the time. The applicator's name and license or certification number. The product applied, ideally with its EPA registration number. The amount of product, or the amount of mix and the rate. The area treated. The target pest, in some states. Weather or wind conditions, in some states.\n\nIf you work in more than one state or county, use the strictest set of fields for everyone. It is easier to train one habit than two."
      },
      {
        "h2": "Why End-of-Day Records Fail",
        "content": "A tech who treats 25 lawns and fills out records at the end of the day is reconstructing 25 visits. He remembers that he used the broadleaf mix all afternoon. He does not remember that he switched to a spot spray at the corner lot, or that he cut the rate on the house with the new sod. The record says one thing and the lawn got another.\n\nThere is also a simpler problem: some records never get written. A busy day ends late, the tickets stay in the truck, and by Monday nobody can reconstruct Friday. When a record is required, a missing one is a violation by itself, regardless of whether the application was perfect."
      },
      {
        "h2": "Capture It When the Stop Is Marked Done",
        "content": "The habit that works is tying the record to the act of finishing the stop. In IndustryBossPro the tech marks the property done in the crew app and enters the product or product mix used and the amount. The applicator is whoever is logged in, the date and time come from the app, and the area comes from the property's measured square footage, which the tech can change if he treated only part of the lawn.\n\nThat produces an application record per property per visit without anyone retyping a paper ticket. It also means the office can see, the same afternoon, which lawns got what. If a customer calls at 4 p.m. asking what was sprayed this morning, the answer is already there."
      },
      {
        "h2": "Use Product Mixes So Names Stay Exact",
        "content": "Free-typed product names are the quiet killer of good records. One tech writes the brand name, another writes the active ingredient, a third writes \"weed spray.\" Six months later you cannot search for every property that got a particular product.\n\nSet up your products once with their exact names and registration numbers, then build your tank mixes as product mixes with their rates. When the tech picks the mix, every product in it and its rate goes onto the record correctly. The [product and rate post](/blog/lawn-care/product-and-rate-tracking-software-lawn) covers setting rates and mixes in more detail."
      },
      {
        "h2": "Producing Records When Someone Asks",
        "content": "Records exist for the day someone asks for them. That might be a state inspection, a customer complaint, a neighbor claiming drift, or your insurance carrier. You want to answer in minutes, not days.\n\nThe chemical report pulls applications by property or date range and can be printed or sent. Before you need it for real, run it once for a busy week and read it the way an inspector would. Look for blank amounts, missing applicators and lawns where the area looks wrong. Fixing your process in a quiet month is far better than discovering the gaps when a letter arrives."
      },
      {
        "h2": "Training Techs to Do It Every Time",
        "content": "A record system only works if every tech uses it at every stop, including the last stop on a Friday in August. That is a training and habit question more than a software question.\n\nStart the season with a short ride-along for each tech, new or returning. Watch them finish a stop and record the application. Look for the shortcuts: picking the wrong mix because it was at the top of the list, leaving the amount at a default, skipping the record when they only spot-sprayed. Fix those on day one, while the habit is still forming.\n\nThen check the records weekly for the first month. Pull each tech's applications and look for anything odd: identical amounts on very different lawns, a mix used on a round where it should not be, stops marked done without a product. Talk to the tech the same week. Most problems are honest misunderstandings, and catching them early prevents a season of bad data.\n\nFinally, make it easy. Keep the product mix list short and named the way techs talk about them, such as \"R3 granular\" or \"Broadleaf spring,\" and remove mixes you no longer use. The fewer choices a tired tech has at stop 25, the more likely he picks the right one."
      },
      {
        "h2": "Tell the Customer What Went Down",
        "content": "Many states expect the customer to receive information about the application, and even where they do not, customers want it. A chemical email after the visit tells them what was applied and any instructions, like keeping kids and pets off until the product is dry or watering in within a certain time. That cuts the phone calls that start with \"what did your guy put on my lawn,\" and it shows the customer you take the work seriously. Pair it with a completed alert that includes the tech's notes and a photo, and the customer sees the visit even though they were at work. More on that in [customer communication](/blog/lawn-care/customer-communication-automation-in-lawn-care-software)."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "product-and-rate-tracking-software-lawn",
    "title": "Getting Product Rates Right: Calibration, Tank Mixes and Per-Lawn Amounts",
    "description": "How to work out pounds of nitrogen per 1,000 square feet, calibrate a spreader, set up tank mixes with rates, and record the right amount on every treated lawn.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Rates are where lawn treatment is won or lost. Put down too little and the customer sees weeds and a pale lawn and blames you. Put down too much and you burn turf, waste product, and may cross a label limit. Either way, the number on the application record should match what actually went on the ground. That requires three things most small companies only half do: a clear rate for each product, equipment calibrated to deliver it, and a way to record the amount per lawn that is based on the lawn's real size. This post walks through the math, the calibration habit, and how to keep rates consistent across techs.",
    "sections": [
      {
        "h2": "Rates Start With Nitrogen Math",
        "content": "Granular fertilizer rates are usually set in pounds of nitrogen per 1,000 square feet. Take a 50 pound bag of 25-0-5. It is 25 percent nitrogen, so the bag holds 12.5 pounds of nitrogen. If you want to apply 0.75 pounds of nitrogen per 1,000 square feet, one bag covers 12.5 divided by 0.75, about 16,700 square feet. That means you apply roughly 3 pounds of product per 1,000 square feet.\n\nDo that math once for each fertilizer you use and each round's target rate, and write the product pounds per 1,000 square feet on a card in every truck. Techs should not be doing percentages in a driveway. For liquids the same idea applies, except the label rate is usually expressed per 1,000 square feet or per acre, mixed into a set volume of water."
      },
      {
        "h2": "Calibrate the Equipment, Then Check It",
        "content": "A rate on paper means nothing if the spreader or sprayer is not delivering it. For a rotary spreader, a simple check is to mark off a known area, say 1,000 square feet, weigh the product in the hopper, spread it at normal walking speed, and weigh what is left. For a sprayer, measure the output over a known area at your normal pace and pressure to find how many gallons you put down per 1,000 square feet.\n\nCalibrate at the start of the season and again whenever you change product, nozzles, or tech. Two techs walking at different speeds with the same spreader setting will not apply the same rate. Write the setting each tech uses next to his name."
      },
      {
        "h2": "Build Tank Mixes Once, With Rates",
        "content": "Most liquid rounds are a tank mix: a broadleaf herbicide, maybe a surfactant, sometimes a fertilizer or colorant, all in a carrier volume. If the tech has to enter each product separately at every stop, he will not. If he can pick \"Spring broadleaf mix\" and enter gallons sprayed, he will.\n\nIn IndustryBossPro, products go in once with their names and registration numbers, and product mixes hold the tank mix with each product's rate. When the tech records 2 gallons of the mix on a lawn, the record carries every product in it at the right proportion. Set up a mix for each tank recipe you actually use, and retire old ones so nobody picks last year's recipe."
      },
      {
        "h2": "Let the Lawn Size Drive the Amount",
        "content": "The amount you record should match the area treated. If a lawn measures 7,200 square feet and your granular rate is 3 pounds per 1,000, the expected amount is about 21.6 pounds. If the tech logs 40 pounds, either the measurement is wrong or he over-applied, and you want to find out which.\n\nThat is why measuring each lawn on the satellite map matters for records, not just pricing. The measured area becomes the default area treated on the property, and the tech adjusts it when he treats only the front or only a spot. Over a few weeks, comparing recorded amounts against expected amounts catches miscalibrated equipment faster than anything else. The [square footage pricing post](/blog/lawn-care/square-footage-pricing-lawn-treatment-software) covers measuring well."
      },
      {
        "h2": "Keeping Rates Consistent Across Techs",
        "content": "Every company with more than one tech eventually discovers that two people with the same truck and the same instructions put down different amounts. One walks faster. One overlaps passes. One turns the spreader down on hot days because he burned a lawn once. None of them is wrong on purpose, but the customer gets a different service depending on who shows up.\n\nThe cure is to make rates visible. Pull recorded amounts per 1,000 square feet for each tech every couple of weeks. If one tech is consistently 20 percent heavy, recalibrate with him in the yard. If one is consistently light and his lawns are the ones with weed complaints, the cause is probably not the product.\n\nWrite your rates down in one place for each round and each mix, and make that the only version. When a rate changes mid-season, for example because you switched suppliers, update the product mix and tell every tech the same morning. A rate that lives in three places will drift into three different numbers by July."
      },
      {
        "h2": "Watch Label Limits Across the Season",
        "content": "Labels often limit how much of an active ingredient can go down per application and per year. A six-round program with broadleaf control in three rounds plus spot sprays in between can add up. Nobody tracks that in their head.\n\nKeep it simple. Know which of your products have annual limits, and when you build the program, make sure the planned rounds stay under them with room to spare for spot treatments. Because each visit leaves an application record, you can pull a property's history and see exactly what it has received this year before a tech goes back with another spot spray."
      },
      {
        "h2": "Use Product Cost to Check Pricing",
        "content": "Once your materials list has a cost for each product and you know the amount per 1,000 square feet, you know your product cost per 1,000 for every round. Say a granular round costs you $2.40 per 1,000 square feet in product. A 10,000 square foot lawn is $24 in product before labor, fuel or overhead. If you are charging $55 a round for that lawn, product is almost half the price, which is a warning sign.\n\nJob costing pulls materials used and labor time onto each job, so you can see that number per property instead of estimating it. The [job costing post](/blog/lawn-care/job-costing-in-lawn-care-software) shows how to read it."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "prepay-packages-lawn-treatment-software",
    "title": "Selling Prepaid Lawn Programs Without Creating an Accounting Mess",
    "description": "How to price a prepay discount, when to ask for it, how to track prepaid rounds as a ledger, and what to do when a prepaid lawn treatment customer cancels.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Prepay is the best cash flow tool a lawn treatment company has. Money comes in during the winter, exactly when you are buying product and equipment for spring and have little else coming in. Prepaid customers are also less likely to shop around in April. But prepay creates an obligation: you are holding money for work you have not done. Handle it carelessly and you end up with customers who think they paid for six rounds when your records say five, refunds you cannot calculate, and an income number that looks great in February and terrible in August. Here is how to sell prepay well and keep the books straight.",
    "sections": [
      {
        "h2": "Price the Discount Like a Business Decision",
        "content": "The common prepay discount is somewhere between 5 and 10 percent off the season price. Before you pick a number, figure out what the cash is worth to you. If prepay money lets you buy product early at a better price, or avoid drawing on a line of credit in March, that is real value. If you would have had the cash anyway, a deep discount just gives away margin.\n\nSay a customer's program is six rounds at $60, or $360. A 7 percent prepay discount is about $25, so they pay $335. If 200 customers take it, that is $67,000 in hand before spring and $5,000 in discounts. For most companies that trade is worth it. A 15 percent discount on the same book costs over $10,000, which is harder to justify."
      },
      {
        "h2": "When and How to Ask",
        "content": "Prepay offers work best when they go out with the renewal, in late fall or winter, while customers still remember the results from the season. Put the prepay price right next to the per-round price on the renewal estimate so the saving is obvious. Give it a deadline, such as the end of February, so it does not drag into the season.\n\nSend the offer as an estimate the customer can approve online, with three automatic follow-ups if they do not answer. Most of the people who prepay will do it after the second or third reminder, not the first. The [renewal post](/blog/lawn-care/renewal-automation-lawn-treatment-software) covers timing the whole renewal season."
      },
      {
        "h2": "Treat Prepay as a Ledger, Not a Balance",
        "content": "The mistake that causes the most trouble is keeping prepay as a single number on the customer, like \"$335 credit.\" Then someone edits it by hand, or a payment gets recorded twice, and you cannot tell what happened.\n\nThe right model is a ledger. The prepayment comes in as an entry. Each completed round is drawn against it as its own entry. At any moment you can see what was paid, what was used, and what is left, and every change has a date. IndustryBossPro tracks prepayments this way on package plans, so a round completed in May draws down the prepay automatically and the remaining balance is never a number someone typed."
      },
      {
        "h2": "Cancellations and Refunds",
        "content": "Some prepaid customers will move, sell the house, or just get unhappy. Decide your refund policy before you sell prepay and put it on the estimate. The usual approach is to refund the unused rounds at the per-round price they actually paid (the discounted price), not the full price. Some companies keep a small fee; if you do, say so up front.\n\nWith a ledger, the math is easy. A customer who prepaid $335 for six rounds and got three has used three-sixths of the prepayment, about $167, and has about $168 left. Record the cancellation reason too, because a run of prepaid cancellations for \"results\" tells you something about your program."
      },
      {
        "h2": "Not Everyone Wants to Prepay",
        "content": "Prepay is one of three good options, not the only one. Customers who do not want to hand over $335 in January may happily pay $60 a round with a card on file that is charged when each round is marked complete. Others prefer a level monthly payment across the season. Offer all three on the renewal and let the customer pick.\n\nThe important part is that the program is the same no matter how they pay. A package plan holds the rounds, and billing can be per visit, monthly, or prepaid. The tech in the field does not need to know which; he treats the lawn and marks it done, and billing follows the plan."
      },
      {
        "h2": "A Prepay Customer Through One Season",
        "content": "Follow one customer to see how it fits together. In January she approves a renewal estimate and picks the prepay option: six rounds, $335, paid with her card. The payment goes onto her prepay ledger as $335 in.\n\nIn March, round one is completed. The tech marks it done and a draw against the prepay is recorded at the per-round prepaid value, about $55.83. Her completed alert goes out with notes and a photo, but no invoice for payment, because the round is already paid. Rounds two through four follow the same pattern.\n\nIn July she sells her house. She calls to cancel. The ledger shows $335 paid and four rounds drawn, about $223, so roughly $112 remains. You refund it, record the cancellation reason as moving, and her new buyer gets a friendly note from you about continuing service. Nobody had to dig through emails to figure out what she paid, and nobody had to argue. That is the whole point of keeping prepay as a ledger. The [payment processing overview](/features/field-service-payment-processing) covers card on file and refunds in more detail."
      },
      {
        "h2": "Watch Prepay in Your Revenue Numbers",
        "content": "Prepay money is not earned when it arrives. If you look at cash in February and think it was a great month, you will be surprised in August when you are doing the work with no new cash coming in. Keep an eye on how much prepay is still unearned at any point in the season, and plan spending around the earned number, not the cash balance. Your accountant will likely want it handled the same way. A QuickBooks export of payments and invoices gives them what they need without retyping."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "square-footage-pricing-lawn-treatment-software",
    "title": "Pricing Lawn Treatments by Square Footage: The Math Behind a Per-Round Price",
    "description": "Build a per-round treatment price from a base charge plus a rate per 1,000 square feet, measure lawns from satellite, and avoid the large-lawn pricing trap.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Two lawns on the same street, one 5,000 square feet and one 15,000. If you charge both the same per round, one is subsidizing the other, and over a season that adds up to real money. Square footage pricing fixes this, but only if two things are true: your formula reflects your actual costs, and your measurements are right. A formula built on bad measurements just makes the errors look official. This post walks through building a price from the ground up, measuring lawns properly, and the common traps on very small and very large properties.",
    "sections": [
      {
        "h2": "Separate the Fixed Part From the Variable Part",
        "content": "Every stop has costs that do not change with lawn size: driving to it, parking, unloading, the walk-around, closing the gate, the record. Then there are costs that scale with size: product and the minutes spent spreading or spraying.\n\nSo the price should have two parts. A base charge that covers the fixed cost of showing up, plus a rate per 1,000 square feet for the variable part. For example, a base of $35 that includes the first 3,000 square feet, then $4.50 per additional 1,000. A 5,000 square foot lawn is $35 plus $9, or $44 per round. A 12,000 square foot lawn is $35 plus $40.50, or $75.50. Those are illustrative numbers. Yours should come from your own costs."
      },
      {
        "h2": "Work Out Your Own Rate Per 1,000",
        "content": "Start with product. If your average round costs $2.20 per 1,000 square feet in product, that is your floor. Add labor: if a tech covers about 1,000 square feet a minute with a spreader and you pay $22 an hour with taxes, that is around 37 cents per 1,000. Add your overhead share and margin. Most companies land somewhere between two and three times their product cost per 1,000 for the variable rate.\n\nThen check it against real jobs. Job costing shows labor from crew clock-in time and materials used on each property, so after a round you can see whether the big lawns are as profitable as the small ones. If they are not, your per-1,000 rate is too low."
      },
      {
        "h2": "Measure From Above, Not by Pacing",
        "content": "Pacing a lawn, or eyeballing a total lot size from a county record, produces numbers that are routinely off by a third. County lot size includes the house, driveway, beds and back patio. The lawn is what you treat.\n\nOutline the turf areas on the satellite map with the measure tool, leaving out the house, hardscape and beds, and you get treatable square footage. Measure front and back separately if some customers only buy the front. Save the measurement on the property, because it is used again for every round's price and every application record. When a customer adds a new bed or patio, update it. The [estimating post](/blog/lawn-care/estimating-and-quoting-in-lawn-care-software) covers measuring during a quote.\n\nCheck a few measurements in person early on. On your first round, have techs note any lawn that looks clearly bigger or smaller than the record says. A handful of corrections in the first month calibrates your eye for the satellite tool, and after that most measurements will hold up. Commercial and HOA properties deserve a site walk before quoting, since the turf boundaries are rarely obvious from above."
      },
      {
        "h2": "Round to Tiers So Prices Stay Simple",
        "content": "Some companies quote an exact price for every lawn. Others use tiers: up to 5,000, 5,001 to 8,000, 8,001 to 12,000, and so on, each with a set price per round. Tiers are easier to explain and keep your prices from looking oddly precise. The trade-off is fairness at the edges: a 5,100 square foot lawn pays the same as an 8,000.\n\nIf you use tiers, keep them narrow enough that the jump between them is small. Put each tier in your service catalog with its price so whoever builds the estimate picks the right line, and nobody is improvising a number on the phone."
      },
      {
        "h2": "The Small-Lawn and Big-Lawn Traps",
        "content": "Small lawns lose money when the base charge is too low. A 2,000 square foot townhome lawn takes almost as long to drive to and set up for as a 6,000 square foot lawn. That is why the base matters more than the rate for small properties. Set a minimum and keep it.\n\nVery large lawns have the opposite problem. Product cost climbs fast, and many companies give a volume discount without realizing product alone is eating the margin. On anything over about 20,000 square feet, price it individually and check product cost first. A one-acre lawn is 43,560 square feet. At $2.20 per 1,000 in product, that is nearly $96 in material for one round."
      },
      {
        "h2": "Use the Same Measurement for Add-On Services",
        "content": "Once a lawn is measured, every add-on that scales with area should be priced from the same number. Core aeration, overseeding, lime, grub control and fungicide applications all use more product or more time on bigger lawns. If your main program is priced per 1,000 square feet but aeration is a flat $99, you are probably losing money on large aerations and overcharging small ones.\n\nPut each add-on in your catalog with its own base and per-1,000 rate, the same way as the program. For seed and lime, check your material cost per 1,000 carefully, because overseeding at a proper rate on a big lawn uses a lot of seed. Then, when a customer asks for aeration and overseeding in the fall, the office builds the quote from the measurement already on file in under a minute.\n\nTrack how those add-ons actually perform. [Job costing](/blog/lawn-care/job-costing-in-lawn-care-software) shows labor and materials on each job, so after a fall of aerations you can see whether your rate covers the time a tech really spends on a 12,000 square foot lawn with a slope and a fence."
      },
      {
        "h2": "Raise Prices With the Measurement, Not the Mood",
        "content": "When product costs go up, raise your per-1,000 rate rather than adding a flat amount to everyone. That keeps the increase proportional. A customer with a small lawn sees a small change, and the big lawns, which use the most product, carry their share. Apply the new rate on next season's renewal estimates so every customer sees the new price before the first round, not on an invoice in April."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "renewal-automation-lawn-treatment-software",
    "title": "Renewing Lawn Programs for Next Season: When to Ask and What to Send",
    "description": "When to send lawn program renewals, how to present a price increase, using follow-ups to catch the undecided, and learning from customers who do not come back.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "A lawn treatment company with 80 percent of its customers coming back each year grows easily. One with 60 percent spends every spring replacing the people it lost before it can add anyone new. Renewal is the single biggest number in the business, and it is mostly decided by two things: the results the customer saw, and whether you made it easy for them to say yes before a competitor's door hanger showed up. You cannot fix the first in December. You can absolutely fix the second. Here is how to run renewal season so customers do not quietly drift away.",
    "sections": [
      {
        "h2": "Decide Whether Programs Renew by Default",
        "content": "There are two ways to handle renewals. In the opt-out model, the program continues next year unless the customer says stop, and you send a notice with the new season's price. In the opt-in model, you ask every customer to confirm.\n\nOpt-out keeps more customers, because people who would not bother to say yes also do not bother to say no. But it needs clear communication, especially if prices change, or you get angry calls in April from people who forgot. Many states also have rules about automatic renewals for services, so check what applies to you. Opt-in is cleaner but loses more customers to inertia. Many companies use opt-out for customers with a card on file and opt-in for everyone else."
      },
      {
        "h2": "Send Renewals Before the Door Hangers",
        "content": "Competitors start knocking and hanging flyers in late winter. Your renewal should land well before that, while customers remember the fall results. For most companies that means sending renewals between late November and January, after the last round is done.\n\nMake the renewal an estimate for next season's program at next season's price, showing per-round, monthly and prepay options side by side. The customer approves online. If they do not respond, three automatic follow-ups go out, which catches most of the people who meant to say yes and forgot. Approved renewals convert into next season's scheduled work, so you are not rebuilding the program by hand."
      },
      {
        "h2": "Present Price Increases Plainly",
        "content": "If you are raising prices, say so in one sentence and give a reason that is true, such as higher product or fuel costs. Do not hide it. Customers who find a larger invoice in April without warning are the ones who cancel and post about it.\n\nKeep increases proportional to lawn size, by raising your rate per 1,000 square feet, rather than adding the same dollar amount to every customer. And give customers who prepay a way to lock in a better price, which turns the increase into a reason to commit early. The [prepay post](/blog/lawn-care/prepay-packages-lawn-treatment-software) covers that offer.\n\nTiming matters as well. An increase that arrives with the renewal, months before any work, feels like a business decision. The same increase discovered on the first spring invoice feels like a trick. If you have a large book, consider holding long-standing customers at a smaller increase. They are the cheapest customers you have to keep, and they refer neighbors."
      },
      {
        "h2": "Call the Ones Who Have Not Answered",
        "content": "After the automatic follow-ups, a list remains of customers who have not answered at all. These are worth a phone call, especially long-time customers or anyone with a large lawn. A two-minute call often reveals something specific: a bare patch they were unhappy with, a move, a neighbor's kid who mows and now wants to try spraying. Some you can save with a service call or a free spot treatment. Others you cannot, but you will at least know why.\n\nTwo-way texting is useful here, because many customers who will not pick up a call will answer a text."
      },
      {
        "h2": "Record Why People Leave",
        "content": "Every cancellation should carry a reason: price, results, moving, went with a competitor, doing it themselves, no reason given. It feels like busywork until you look at a full year of them. If most cancellations are moves, you are fine. If a cluster of \"results\" cancellations comes from one tech's route, that is a training problem you can fix. If \"price\" spikes right after an increase, you learned where the ceiling is.\n\nLook at the reasons once at the end of each season, before setting next year's prices and program. It is the most honest feedback you will get."
      },
      {
        "h2": "A Renewal Calendar That Works",
        "content": "It helps to put renewal season on a calendar so it does not get squeezed by fall work. Here is a pattern many treatment companies follow, adjusted for your own season.\n\nIn October, while the last rounds are running, decide next year's program, prices and prepay discount. Look at cancellation reasons from the year before you do. In November, after the last round is done, build renewal estimates for every active customer and review the list for anyone who should not get one, like the customer who argued all year. Send them in batches so replies are manageable.\n\nThrough December and January, let the automatic follow-ups work. Watch the approval rate weekly. In mid-January, start calling the people who have not answered, beginning with the biggest and longest-standing accounts. In February, close the prepay deadline and send a final reminder.\n\nBy March, you should know almost exactly how many lawns you are treating in round one. That number tells you whether you need another tech, how much product to buy, and how hard to push spring sales. A company that knows its renewal count in February plans the season. One that finds out in April reacts to it."
      },
      {
        "h2": "Win Back Last Year's Cancels",
        "content": "Customers who left for price or because they moved out of your area are mostly gone. Customers who left to try a cheaper competitor or to do it themselves often come back after one bad season. A short, plain message in early spring, offering to pick up where you left off, costs nothing. Tag those former customers so you can find them, and include them when you send the spring offer. Keep it low pressure; the point is to be the obvious call when their lawn looks worse in May. Good [customer communication](/blog/lawn-care/customer-communication-automation-in-lawn-care-software) all season makes that message much easier to send."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "weather-aware-scheduling-lawn-treatment-software",
    "title": "Rain, Wind and Heat: Making the Call on Lawn Treatment Days",
    "description": "How to decide when wind, rain or heat should stop a lawn application, how to reshuffle a treatment day without losing round timing, and what to tell customers.",
    "date": "2026-10-21",
    "readTime": 5,
    "intro": "Weather decisions in lawn treatment are not like rain delays in mowing. A mower can usually wait a day and nobody notices. An application in the wrong conditions can mean drift onto a neighbor's garden, a herbicide washed off before it worked, or a fertilizer burn in the heat. Every one of those leads to a callback, an angry customer, or worse. The call on whether to treat is a judgment the tech or owner makes each morning, and sometimes again at noon. Software cannot make it for you. What it can do is make the reshuffle afterward fast and keep your round timing intact.",
    "sections": [
      {
        "h2": "Read the Label First, Then the Forecast",
        "content": "Every product label speaks to its own conditions: wind limits or drift precautions, how long before rain the product needs to dry (rainfastness), whether it should be watered in, and sometimes temperature cautions. These are legal directions, not suggestions, and they vary by product. Before the season, pull the weather-related directions from each label you use and make a one-page sheet for the trucks.\n\nBroadly, liquid broadleaf herbicides need dry leaves and some hours without rain to work. Granular fertilizer and many pre-emergents benefit from rain or irrigation afterward to move them into the soil. Drift risk rises with wind and with fine spray droplets. Heat stress makes some herbicides more likely to injure turf. Your products decide the specifics."
      },
      {
        "h2": "Make a Morning Go or No-Go Call",
        "content": "Have one person decide each morning whether the day runs as planned, runs with changes, or stops. Base it on the label sheet and an hourly forecast for each area you are treating, not the general city forecast. A day that is too windy for liquid spraying might be fine for granular work, so the decision is not always all or nothing.\n\nGive techs authority to stop at a property if conditions there are wrong, even if the morning call was go. A tech who skips a lawn because the wind picked up is doing the right thing. In the crew app he skips with a reason, the property stays due, and the customer gets a skipped alert explaining why.\n\nWind often changes through the day. Many companies front-load liquid work in the calmer early hours and leave granular stops for the afternoon, when a breeze matters less. If your routes mix both, consider ordering the day that way rather than strictly by distance."
      },
      {
        "h2": "Swap Work Instead of Losing the Day",
        "content": "The best rain plan is having other work ready. If it is too wet for broadleaf liquid but fine for granular, switch the day's round to granular-only stops or a fertilizer-only round that benefits from rain. If you sell aeration or grub control, those may fit a wet day better. Have a short list of alternate work before the season starts.\n\nWhen you do need to move a day, reschedule it, and customers on that day get a reschedule text automatically. The office does not spend the morning calling 25 people. Move the day to the next open slot for that truck, and let auto-routing reorder stops if you add or remove some."
      },
      {
        "h2": "Protect the Round Interval",
        "content": "A one- or two-day delay rarely matters for round timing. A week of rain is different, especially in spring when pre-emergent timing is tight. If a lawn's window is about to close, it should jump the queue when the weather clears.\n\nThat is why due dates should come from the last completed visit. When a round is done late, the next one counts its interval from the actual date, so you do not stack two applications too close together. Look at the Waiting List after a wet stretch and sort out which lawns are getting close to the end of their window. The [full program post](/blog/lawn-care/full-program-scheduling-lawn-treatment-software) covers intervals."
      },
      {
        "h2": "Tell Customers What to Do After",
        "content": "Weather also changes the instructions you give customers. A granular fertilizer that needs watering in should come with a note to run sprinklers if no rain is expected. A liquid weed control needs time to dry before irrigation. Put the instructions in the chemical email or the completed alert so the customer sees them the same day.\n\nIf rain arrives right after a liquid application and the label says the product may need reapplying, decide your policy ahead of time, usually a free respray of any weeds still visible after two weeks. Customers forgive weather. They do not forgive silence."
      },
      {
        "h2": "Build a Rain Plan Before the Season Starts",
        "content": "The worst weather decisions are made at 6:30 in the morning with no plan. Decide the rules in winter, when you have time to think.\n\nWrite down your stop conditions for each type of work: liquid spraying, granular, insect control, and any specialty products. Base them on your labels. Decide who makes the morning call and by what time, and how techs are told. Decide your alternates: what work goes on a day that is too windy to spray but fine for granular, and what work you can do in light rain.\n\nDecide your customer policy, too. If rain washes off a liquid weed control, will you respray weeds that remain? Within how long? Put it in writing and in your estimate terms so customers know before they need it.\n\nFinally, decide how you will handle a long wet stretch. If you lose a week in spring, which lawns get priority? Usually the ones whose round window closes first. The Waiting List shows how long each lawn has been due, so after a wet week you can see who is closest to falling out of the window and schedule them first. A written plan turns a bad weather week from a crisis into a routine."
      },
      {
        "h2": "Keep a Record of Conditions",
        "content": "If your state requires weather or wind conditions on the application record, the tech should enter them at the stop, not later. Even where it is not required, a note like \"light wind from the west, dry turf\" protects you if a neighbor complains about drift. It takes a few seconds and it turns a he-said-she-said into a documented record. The [application records post](/blog/lawn-care/lawn-chemical-application-records-software) covers what else belongs on it."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "estimating-and-quoting-in-lawn-care-software",
    "title": "Quoting New Lawn Treatment Customers: From Measure Map to Approved Program",
    "description": "How to quote a fertilizer and weed control program fast: measure the lawn from satellite, price each round, present payment options and follow up on silence.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "A homeowner who asks three lawn treatment companies for a price usually picks the first one that sends a clear, believable number. Not the cheapest, not the one with the glossiest brochure: the first credible one. For treatment work, you can quote most lawns without visiting the property, which means the company that turns a web form into a priced program within an hour has an advantage that is hard to beat. This post covers how to price a program from a desk, what the estimate should show, and how to follow up without becoming a pest.",
    "sections": [
      {
        "h2": "Get the Lead Into the System Right Away",
        "content": "Leads come from your website form, phone calls, door hangers and referrals. The first step is the same for all of them: get the lead recorded with the address, name, phone and email, and what they asked for. A web form on your site sends responses straight into the software as leads, so nothing sits in an inbox.\n\nRespond fast. A same-day estimate is good. A within-the-hour estimate is better. If you can only respond after the trucks come in, set aside the same 30 minutes every evening for quotes so it becomes a routine."
      },
      {
        "h2": "Measure Without Driving Out",
        "content": "For most residential treatment quotes, a satellite measurement is enough. Outline the turf areas on the measure map, leaving out the house, driveway, patios and beds. You now have treatable square footage, which drives the price of every round and becomes the property's measurement for application records later.\n\nWatch for things the satellite view hides: a backyard under heavy tree cover, a recent addition, a dog run. If the image is old or the yard is unclear, say on the estimate that the price assumes a certain square footage and will be confirmed at the first visit. That is honest and avoids an argument later."
      },
      {
        "h2": "Build the Estimate From Your Catalog",
        "content": "Put each round and each add-on in your service catalog with its pricing, and build an estimate template for your standard program. Then a quote is the template, the property, and the price for that lawn size. The office hand who answers the phone in April produces the same price you would.\n\nShow the customer what they are getting: the number of rounds, roughly when each happens, and what each round does. One line per round is enough. People buy a program they understand. Add common extras, such as grub control, aeration or a lime application, as separate optional lines so the customer can add them without a second quote. [Square footage pricing](/blog/lawn-care/square-footage-pricing-lawn-treatment-software) covers the price math.\n\nKeep the language plain. \"Round 2: late spring fertilizer and broadleaf weed control\" tells a homeowner more than a product name ever will. Avoid promising specific results like \"weed-free,\" which sets an expectation you cannot always meet in a single season, especially on a lawn that has been neglected for years."
      },
      {
        "h2": "Show Payment Options on the Quote",
        "content": "Put per-round, monthly and prepay pricing on the estimate. Many customers who hesitate at a $360 season price are comfortable with $60 a round, and some who would never commit to a full year will try a monthly plan. A prepay option with a modest discount gets you early cash from the customers who like to pay once.\n\nWhen the customer approves online, ask for a card on file at the same time. A program with a card on file is far easier to bill per visit or monthly, and it removes the end-of-round collection calls."
      },
      {
        "h2": "Follow Up Three Times, Then Stop",
        "content": "Most estimates that do not get answered are not rejections. The customer got busy. Three automatic follow-ups spaced a few days apart catch most of these without anyone in the office having to remember. After that, mark the estimate as lost, ideally with a reason if you learned one.\n\nLook at your lost estimates once a month. If most are lost to price, you might be measuring too generously or your base is high. If most go silent, your first response might be too slow. If they are lost on one particular add-on, rethink how it is presented."
      },
      {
        "h2": "When the Customer Says Your Competitor Is Cheaper",
        "content": "It happens on a lot of treatment quotes. The customer has a lower number from someone else and wants you to match it. Before you answer, find out what they are comparing. A common reason for a big gap is that the other company quoted fewer rounds, measured the lawn smaller, or left out weed control in some rounds.\n\nAsk how many visits are included and what each one does. Often the honest answer is that you are not more expensive per round, you are just doing more rounds. Explain it plainly and let the customer decide.\n\nIf the other company measured smaller, do not shrink your measurement to match. Offer to show your satellite outline, or confirm at the first visit. Undercutting your own measurement means you underprice every round for as long as they are a customer.\n\nSometimes the right move is to let the job go. A customer won purely on price is the first to leave for the next lower bid, and the one most likely to cancel mid-season. It is better to spend the time on the next lead than to carry a lawn at a loss all year."
      },
      {
        "h2": "Let Techs Quote in the Field",
        "content": "Some of the best treatment sales happen in a customer's driveway. A neighbor walks over and asks what you charge. The current customer asks about grub control. If the tech has to say \"I'll have the office call you,\" you lose some of them. When the owner turns it on for that employee, techs can write, price and send an estimate from the crew app, using the same catalog. It works without a signal and sends when the phone is back online. When the estimate is approved, it converts into scheduled work like any other, and the new lawn shows up on the Waiting List for the next round. More in the [estimates feature](/features/field-service-estimates-quoting) overview."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "job-costing-in-lawn-care-software",
    "title": "What a Fertilizer Round Really Costs You, Lawn by Lawn",
    "description": "How to add up product, labor and drive time for each lawn treatment, find the properties that lose money, and use planned versus actual hours to fix pricing.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Most lawn treatment owners can tell you their revenue per round to the dollar. Ask what that round cost to deliver on a particular lawn and the answer is usually a shrug and a percentage someone read online. That is fine until product prices jump or you take on a big commercial account, and then guessing becomes expensive. Job costing is simply adding up what each visit actually consumed, product, labor and a share of overhead, and comparing it to what you charged. It is less complicated than it sounds, and it usually surfaces a handful of accounts you are paying to service.",
    "sections": [
      {
        "h2": "The Three Costs on Every Treatment Visit",
        "content": "Product is the most visible cost: the fertilizer, herbicide, insecticide or mix that went on the lawn. Labor is the tech's time from arriving to leaving, plus a fair share of the drive between stops. Overhead is everything else: truck payments, fuel, insurance, licensing, the office, software. For job costing, focus on the first two per job and handle overhead as a percentage of revenue you need to cover.\n\nOn treatment work, product is often a much larger share of the job's cost than it is on mowing. That is why a pricing mistake on large lawns hurts more here."
      },
      {
        "h2": "Get Labor From the Clock, Not an Estimate",
        "content": "The reliable way to know labor per job is to use actual times. When techs clock in and out in the crew app and mark each stop done, you have real time on site. Multiply it by each worker's pay rate, and the labor cost assigns itself to each job.\n\nPay rates stay in the office, not on the tech's phone. The labor numbers show up in job costing and the employee hours report. Do not be surprised when the same round on similar lawns shows different times from different techs. That variation is information, and it is impossible to see if you only use estimates."
      },
      {
        "h2": "Get Materials From the Application Record",
        "content": "Every application record says how much product or mix went on the lawn. With costs on your materials list, that becomes a material cost on the job. A 9,000 square foot lawn that took 27 pounds of a $1.10 per pound granular cost about $30 in product.\n\nThis is where good records pay twice. The same entry that satisfies your state record-keeping rules also tells you what the job cost. If techs are rounding amounts or skipping entries, both your compliance and your costing suffer. The [product and rate post](/blog/lawn-care/product-and-rate-tracking-software-lawn) covers keeping those amounts accurate."
      },
      {
        "h2": "A Worked Example on Two Lawns",
        "content": "Here are two lawns on the same round, with illustrative numbers. Lawn A is 6,000 square feet, priced at $52 per round. Lawn B is 16,000 square feet, priced at $70 per round because the customer negotiated a discount when they signed up.\n\nOn Lawn A, the tech spent 14 minutes on site. At a loaded labor cost of $24 an hour, that is $5.60. Product was 18 pounds of granular at $1.10, so $19.80. Add a share of drive time, say 8 minutes at the same rate, $3.20. Total direct cost is about $28.60, leaving $23.40 toward overhead and profit, around 45 percent.\n\nOn Lawn B, the tech spent 31 minutes because of a steep back slope, so $12.40 in labor. Product was 48 pounds, $52.80. Drive share $3.20. Direct cost is about $68.40 on a $70 price. That lawn is barely covering product and labor, before fuel, insurance or anything else.\n\nWithout job costing, Lawn B looks like the better customer, because it pays more. With it, you see Lawn B needs a price change at renewal, and that the discount given at signup was the mistake."
      },
      {
        "h2": "Compare Planned Hours to Actual",
        "content": "Put planned hours on recurring work, then compare. If a lawn is planned at 15 minutes and takes 28 every visit, either the lawn is harder than it looked (steep, fenced, lots of beds to work around) or it was measured too small. Both mean the price is wrong.\n\nRun the job costing report after each round and sort by margin. The bottom ten are your problem list. Look at each one: is it a pricing problem, a measurement problem, or a one-off visit that went badly? A single bad visit is noise. A lawn that loses money every round is a decision.\n\nPlanned hours also help when you hire. If round three is planned at 140 hours of on-site time across all your lawns and you have one tech working 45 hours a week of actual treating time, that round alone takes three weeks. You can see before the season whether one more person is needed, rather than discovering it when rounds start running late."
      },
      {
        "h2": "What to Do With a Money-Losing Lawn",
        "content": "There are three fixes. Remeasure and reprice it at renewal, which solves most cases. Change how it is serviced, for example moving it to a day where it sits next to other stops so drive time drops. Or let it go, politely, by not renewing at the old price.\n\nBe careful about the third. A lawn that is barely profitable on its own but sits in the middle of a dense route may be worth keeping, because the drive cost is shared. Look at margin together with location before you cut anyone."
      },
      {
        "h2": "Build Pricing From What You Learn",
        "content": "After one full season of job costing, you know your actual product cost per 1,000 square feet for each round, your actual minutes per 1,000, and which property types run long. That is the data your next season's base charge and per-1,000 rate should come from. It is far more trustworthy than copying a competitor's price sheet.\n\nProfit and margin per job are in the job costing report, along with labor and materials, so you can see the effect of a price change on real lawns rather than in a spreadsheet. The [reporting overview](/features/field-service-reporting-analytics) shows the other reports that help here."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "dispatch-and-routing-in-lawn-care-software",
    "title": "Routing Spray Techs: Density, Tank Loads and the Order of the Day",
    "description": "How to build a lawn treatment route that maximizes stops per day: grouping by area, planning around tank and hopper refills, and running the day from the phone.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "A lawn treatment tech spends about 10 to 20 minutes on an average residential lawn. That means the drive between stops is often as long as the work itself, and the order of the day decides whether a tech treats 18 lawns or 30. Routing is also shaped by things mowing crews do not worry about: how much product the truck carries, when the tank needs refilling, and which lawns need which mix. This post covers how to build a treatment day that keeps the tech treating instead of driving, and how to run it from the office without a dozen phone calls.",
    "sections": [
      {
        "h2": "Group by Area First, Then by Due Date",
        "content": "Treatment rounds have windows a few weeks wide, which gives you room to group lawns geographically. Do it. Look at everything due in the next week or two, divide your service area into zones, and treat a zone at a time. A lawn that is due on Friday but sits in Monday's zone gets treated Monday.\n\nOn the Waiting List map, circle an area to select the due properties inside it and schedule them onto a day and a truck in one step. That is far faster than picking 25 properties out of a list one at a time, and it naturally builds dense days.\n\nZones work best when they are drawn around real driving, not ZIP codes. A river, a highway with few crossings or a big park can make two neighborhoods that look close on a map 15 minutes apart. Draw your zones the way your trucks actually drive, and adjust them after the first round once you see real drive times."
      },
      {
        "h2": "Let Distance Set the Stop Order",
        "content": "Once a day's stops are chosen, the order matters. A tech who drives back and forth across a neighborhood can lose an hour a day. Auto-routing orders the day's stops by distance so the route flows. Start from where the truck begins the day, the shop or the tech's home if he takes the truck home, and check that the first and last stops make sense.\n\nYou will still want to override a few stops: the customer who asked to be done before 9, the commercial property you can only treat on weekends, the lawn with a gate that is only open in the morning. Keep those notes on the property so they are visible every time."
      },
      {
        "h2": "Plan Around the Tank and the Hopper",
        "content": "A liquid truck carries a set amount of mix. If the tank holds enough for about 120,000 square feet and the day's lawns add up to 180,000, the tech has to refill partway. Plan where that refill happens, ideally at the shop or a fill point near the middle of the route, instead of discovering it at stop 14.\n\nThe same goes for granular: know how many bags a day's lawns need and load accordingly. Because each property has a measured square footage, adding up the day's total area is easy. Load the truck from that number, not from habit."
      },
      {
        "h2": "Run the Day From the Crew App",
        "content": "The tech's phone should show the day's stops in order, navigation to each one, the property notes (gate code, dog, which side has the irrigation), and a way to record the application and mark the stop done. Clock in and out happens on the same phone. Crew notes go back to the office if something needs attention, such as a lawn with disease that needs a call to the customer.\n\nThe office sees progress as stops are marked done, and the crew phone's location during the day shows where the truck is. That answers \"where is my tech\" without calling him while he is spraying."
      },
      {
        "h2": "Handle the Mid-Day Change",
        "content": "Something always changes. A customer calls and asks you to skip today because they just seeded. A new rush job comes in. A tech goes home sick. When a stop is skipped, the tech picks a reason and the lawn stays due. When a whole day has to move, reschedule it and customers on that day get a reschedule text.\n\nFor add-ons, drop the new job on the nearest truck's day and let auto-routing slot it in. Avoid moving stops between techs constantly during the day; it confuses records and frustrates the people in the trucks."
      },
      {
        "h2": "Fitting Commercial Properties and Odd Stops",
        "content": "Not every stop fits neatly into a residential route. Commercial properties, HOA common areas and large estates take longer, may need a different truck or more product, and often have access rules: no spraying during business hours, a property manager to call first, a weekend-only window.\n\nTreat these as anchor stops. Put the access rule in the property notes, and plan the day around them rather than squeezing them into a residential day where they blow up the schedule. An HOA with 3 acres of common turf might be a half-day by itself; schedule it as the first stop on a light day, and fill the rest with residential lawns nearby.\n\nFor lawns that are due but sit far from any cluster, do not give them their own trip unless the window is about to close. Add them to the closest day and accept the extra drive once. If you have many of these in one direction, it may be a sign to stop selling there or to price that area higher.\n\nRecurring commercial work should still follow round intervals from the last completed visit, the same as residential. The [full program post](/blog/lawn-care/full-program-scheduling-lawn-treatment-software) covers setting those intervals."
      },
      {
        "h2": "Measure Stops per Day and Drive Time",
        "content": "Two numbers tell you whether routing is working: lawns treated per tech per day, and time between stops. If one tech consistently treats fewer lawns than another on similar routes, look at the routes before you look at the tech. Often it is a zone that was drawn badly or a day overloaded with large properties.\n\nThe employee hours report and job costing give you time on site and labor per job, and the [route optimization overview](/features/service-route-optimization-software) covers the ordering in more detail. Revisit your zones every season as your customer base shifts."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  },
  {
    "slug": "customer-communication-automation-in-lawn-care-software",
    "title": "The Texts and Emails That Keep Lawn Treatment Customers From Canceling",
    "description": "Which messages to send lawn treatment customers before and after each round, what to put in a completed alert, and how to handle skipped visits and complaints.",
    "date": "2026-10-21",
    "readTime": 4,
    "intro": "Lawn treatment has a visibility problem. The customer is at work when you come, the product is mostly invisible, and results take two weeks to show. From their side, they pay $60 and nothing appears to happen. That gap is where cancellations come from. The companies with the best renewal rates are not always the ones with the best results; they are the ones whose customers always know what was done, when, and what to expect. Here is the set of messages that closes that gap, and what to put in each one.",
    "sections": [
      {
        "h2": "The Night-Before Text",
        "content": "A short text the evening before tells the customer their lawn is on tomorrow's route. It does three things: it lets them open a gate or bring in the dog, it lets them tell you not to come if they just seeded or have a party, and it reminds them they are getting a service. That last part matters more than it sounds.\n\nKeep it short and avoid special characters. Texts are billed in segments, and a long message or one with fancy punctuation can cost two or three segments instead of one. \"Hi Mike, your lawn treatment is scheduled for tomorrow. Please leave the side gate open. Reply with any questions.\" is plenty."
      },
      {
        "h2": "The On-the-Way and Arrived Alerts",
        "content": "Many treatment customers do not want a knock on the door, but they do like knowing the tech is close. A \"you're next\" text when the tech is heading their way, and a tech-arrived text when he gets there, make the visit visible even if they are not home. Customers who want to ask a question can come out.\n\nLet customers choose which alerts they get. Some want every message; some want only the completed alert. Respecting that keeps them from opting out of everything."
      },
      {
        "h2": "The Completed Alert Is the Most Important Message",
        "content": "When the tech marks the lawn done, a completed alert goes to the customer with the tech's notes and photos. This is where you prove the work happened. A note like \"Applied round three fertilizer and spot-sprayed clover in the front. Noticed some dry spots near the driveway, consider extra watering\" tells the customer more than any newsletter.\n\nTrain techs to write one useful sentence per lawn. Not \"done.\" Something they observed. The difference in how customers feel about the service is large, and it costs the tech 20 seconds. Pair it with the chemical email listing what was applied and any instructions, such as keeping pets off until dry."
      },
      {
        "h2": "Skipped and Canceled Visits",
        "content": "When a tech cannot treat a lawn (locked gate, dog in the yard, standing water), the skipped alert tells the customer why and that you will be back. A customer who comes home to an untreated lawn and no message assumes you forgot. A customer who got \"We skipped today because the gate was locked. We will return later this week\" feels looked after, even though nothing was done.\n\nIf a visit is canceled by you, for example after a weather call, the customer should hear about it the same morning.\n\nLook at your skip reasons every few weeks. If the same property is skipped three times for a locked gate, that is a conversation to have with the customer, and maybe a gate code to add to the property notes so the next tech can get in. In IndustryBossPro, those notes show on the crew app at every visit. Customers almost always prefer a quick question by text to a missed round, and fixing the cause once saves a skipped visit on every round that follows for the rest of the season."
      },
      {
        "h2": "Two-Way Texting for Questions and Complaints",
        "content": "Customers text back. \"Why do I still have dandelions?\" \"Can you come before Saturday?\" \"My dog was on the lawn, is that okay?\" With two-way texting, those replies land in the software next to the customer record, not on a tech's personal phone. Anyone in the office can answer, and the history is there for next time.\n\nAnswer complaints fast and specifically. \"Broadleaf control takes 10 to 14 days to show results. If you still see weeds after two weeks, reply and we will respray them at no charge.\" That kind of answer saves accounts."
      },
      {
        "h2": "Writing Messages People Actually Read",
        "content": "Customers read short, specific messages and ignore long, generic ones. A few habits make your alerts much more useful.\n\nUse the customer's name and the actual service: \"round three fertilizer and weed control,\" not \"your service.\" Put the action they need to take first: \"Please water in tomorrow if there is no rain.\" Keep the completed note to one or two sentences the tech actually wrote. Skip marketing language entirely in service messages; save it for the occasional upsell.\n\nKeep texts plain. Fancy dashes, curly quotes and emoji can switch a text to a format that costs more segments, which matters when your text allowance counts segments sent and received. A plain, short text usually costs one segment.\n\nBe consistent with timing. If the night-before text always arrives around 6 p.m., customers learn to expect it, and they notice when they do not get one. Set up your email alert templates with your logo and a clear subject so treatment emails are not mistaken for spam.\n\nFinally, read your own messages once a season from a customer's point of view. If a message would annoy you, it annoys them too."
      },
      {
        "h2": "Review Requests and Upsell Alerts",
        "content": "After a good visit, a review request asks the customer to leave a review. Send it after rounds where results are visible, typically mid-spring or early fall, not after the first pre-emergent when there is nothing to see yet.\n\nAn upsell alert can offer a service that fits the season: aeration and overseeding in the fall, grub control in early summer. Send these sparingly and only to customers who would benefit. A customer who gets an upsell every round starts to tune out the useful messages too. For the whole treatment operation, see the [lawn care software](/lawn-care-software) overview, or [pricing](/pricing) for how texting allowances work on each plan."
      }
    ],
    "hubSlug": "lawn-care-software",
    "hubKeyword": "lawn care software",
    "industry": "lawn-care"
  }
];

export const hub: HubPageData = {
  "slug": "lawn-care-software",
  "industry": "Lawn Care Chemicals",
  "isMain": true,
  "h1": "Lawn Care Software for Fertilizer and Weed Control Programs",
  "subtitle": "Schedule every round on time, record every application at the lawn, route techs by neighborhood, and bill per round, monthly or prepaid.",
  "metaTitle": "Lawn Treatment Program Software | IndustryBossPro",
  "metaDesc": "Software for fertilizer and weed control companies: round intervals, application records, tank mixes with rates, prepaid programs and routes. 14-day free trial.",
  "heroPoints": [
    "Each lawn comes due for its next round based on when the last one was done",
    "Techs record product, amount and area at the stop, so records are built on the lawn",
    "Sell the season per round, monthly or prepaid, with prepayments tracked as a ledger"
  ],
  "painPoints": [
    {
      "problem": "By round three nobody knows which lawn is on which round",
      "solution": "Set the interval on the recurring service. When a round is marked done, the property returns to the Waiting List as due after that many days."
    },
    {
      "problem": "Application records get written at night from memory, or not at all",
      "solution": "Techs pick the product or tank mix and enter the amount in the crew app when they finish the stop. The chemical report prints or sends whenever you need it."
    },
    {
      "problem": "Prepaid customers cancel mid-season and nobody can say what they are owed",
      "solution": "Prepayments are a ledger: the payment comes in and each completed round draws against it, so the remaining balance is always on the record."
    }
  ],
  "features": [
    {
      "icon": "🧪",
      "title": "Application Records",
      "desc": "Product, amount, area treated and applicator saved per property per visit, with a chemical report for state record keeping."
    },
    {
      "icon": "🪣",
      "title": "Products and Tank Mixes",
      "desc": "Enter products once, build tank mixes with rates, and techs pick the mix at the stop so names and rates stay exact."
    },
    {
      "icon": "📏",
      "title": "Measure Map",
      "desc": "Outline the turf on the satellite map to get treatable square footage for pricing every round and filling in records."
    },
    {
      "icon": "🔁",
      "title": "Season Package Plans",
      "desc": "Sell a 6 or 7 round program as one package, billed per visit, monthly or prepaid, with each round on its own interval."
    },
    {
      "icon": "📱",
      "title": "Crew App",
      "desc": "The day's lawns in order with navigation, property notes, time clock, skip with a reason, photos and product used."
    },
    {
      "icon": "📨",
      "title": "Customer Alerts",
      "desc": "Night-before text, completed alert with notes and photos, chemical email after each application, and skipped alerts."
    }
  ],
  "pendingBoard": "When a round is marked done, the property goes back onto the Waiting List as due for its next round after the interval you set. Circle a neighborhood on the map to pick the lawns that are due there and schedule them onto a day and truck in one step, then auto-routing orders the stops. Pending Jobs holds one-time work like grub treatments or aeration until it is scheduled.",
  "blogSiloIndustry": "lawn-care",
  "blog1Slug": "lawn-care-software-complete-guide",
  "blog1Title": "How a Lawn Treatment Company Actually Runs: Rounds, Records, Routes and Billing"
};
