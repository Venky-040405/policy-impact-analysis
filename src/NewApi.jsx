import React, { useEffect, useState } from 'react'
import "./news.css";

const NewApi = () => {

  const datass = {
  "status": "ok",
  "news": [
    {
      "id": "e2aee97a-045e-42b0-8ab8-b3d215b5f889",
      "title": "Russia Shares Intelligence With Iran As West Asia Conflict Escalates: Reports",
      "description": "Russia provides Iran with intelligence as US-Israel conflict escalates, affecting global oil markets and regional security, with US policy shifts.",
      "url": "https://www.thequint.com/news/breaking-news/russia-iran-intelligence-sharing-oil-sanctions-west-asia-conflict-escalates",
      "author": "The Quint",
      "image": "https://media.assettype.com/thequint%2F2026-03-07%2Fgse8vogu%2FTFWMx2egLw0Jgh7wAuvmtoVbabJ0AMI8.jpg",
      "language": "en",
      "category": ["regional"],
      "published": "2026-03-07 06:26:55 +0000"
    },
    {
      "id": "b685fa2f-4f2a-43b0-abcd-69bfe2858888",
      "title": "Pedro Sánchez’s lone stance against Trump may look risky, but it is cannily pragmatic | Eoghan Gilmartin",
      "description": "The Spanish PM’s defiant foreign policy line may seem outspoken. The truth is that he is a sound strategist at home and abroad, says journalist Eoghan Gilmartin",
      "url": "https://www.theguardian.com/commentisfree/2026/mar/07/pedro-sanchez-stance-donald-trump-pragmatic",
      "author": "Eoghan Gilmartin",
      "image": "https://i.guim.co.uk/img/media/ec110e5178b8359a78e143875e0bf7880d0ea2a6/228_0_2541_2033/master/2541.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&precrop=40:21,offset-x50,offset-y0&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&s=960eb0a42e2d5622afd3ceae420b683e",
      "language": "en",
      "category": ["opinion", "regional"],
      "published": "2026-03-07 05:00:41 +0000"
    },
    {
      "id": "2073c8e8-bb8d-4851-9c3c-548c93533480",
      "title": "I Built a Free Hemingway Editor Alternative That Runs in Your Browser",
      "description": "Readability scoring has a problem. Most writing tools check your text against a single formula — usually Flesch-Kincaid — and give you one number. That number is a guess. Different formulas measure different things (syllable count, word familiarity, sentence length), and they routinely disagree on t...",
      "url": "https://dev.to/ckmtools/i-built-a-free-hemingway-editor-alternative-that-runs-in-your-browser-14d4",
      "author": "ckmtools",
      "image": "None",
      "language": "en",
      "category": ["programming"],
      "published": "2026-03-07 04:33:39 +0000"
    },
    {
      "id": "67234dd5-4cb5-429e-a9f8-83cb0a98bd49",
      "title": "Your Therapist's Notes Are for Sale: The Mental Health App Privacy Catastrophe",
      "description": "By TIAMAT | tiamat.live | Cycle 8087\nIn March 2023, the Federal Trade Commission fined BetterHelp $7.5 million.\nNot because their therapy was bad. Because they had been sharing their users' mental health data — including information disclosed during intake questionnaires, previous therapy history, a...",
      "url": "https://dev.to/tiamatenity/your-therapists-notes-are-for-sale-the-mental-health-app-privacy-catastrophe-4c54",
      "author": "Tiamat",
      "image": "None",
      "language": "en",
      "category": ["programming"],
      "published": "2026-03-07 04:31:49 +0000"
    },
    {
      "id": "0c7b1b7e-deb0-4abb-9b55-599ce87eb502",
      "title": "Deploying a 2048 Game on Kubernetes using Amazon EKS — End-to-End DevOps Project",
      "description": "Kubernetes has become the de-facto standard for container orchestration, and many organizations today run their workloads on managed Kubernetes platforms. One of the most popular managed Kubernetes services is Amazon Elastic Kubernetes Service (EKS).\nIn this hands-on project, I built a complete end-...",
      "url": "https://dev.to/abhishekjaiswal_4896/deploying-a-2048-game-on-kubernetes-using-amazon-eks-end-to-end-devops-project-41cd",
      "author": "Abhishek Jaiswal",
      "image": "None",
      "language": "en",
      "category": ["programming"],
      "published": "2026-03-07 04:30:00 +0000"
    },
    {
      "id": "d456cb35-c165-49dc-ba6d-58eef1930737",
      "title": "US Stock Market | Unexpected job losses, rise in unemployment rate fan US labor market doubts",
      "description": "America's job market saw an unexpected decline in February. Nonfarm payrolls dropped, and the unemployment rate climbed to 4.4 percent. This development presents a challenge for the Federal Reserve. Factors like a healthcare worker strike and severe weather impacted job numbers. Economists are watch...",
      "url": "https://m.economictimes.com/markets/us-stocks/news/us-stock-market-unexpected-job-losses-rise-in-unemployment-rate-fan-us-labor-market-doubts/articleshow/129193607.cms",
      "author": "indiatimes",
      "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-252336,resizemode-75,msid-129193607/markets/us-stocks/news/us-stock-market-unexpected-job-losses-rise-in-unemployment-rate-fan-us-labor-market-doubts.jpg",
      "language": "en",
      "category": ["market"],
      "published": "2026-03-07 03:52:31 +0000"
    },
    {
      "id": "c3443ec4-dcf2-4938-977b-1a77511c1eb8",
      "title": "Watters: Iran is bruised, battered and confused",
      "description": "Fox News host Jesse Watters assesses how joint U.S.-Israeli strikes have degraded Iran's naval forces on 'Jesse Watters Primetime.' #fox #media #breakingnews #us #usa #new #news #breaking #foxnews #jessewattersshow #jessewattersprimetime #war #iran #usmilitary #israel #conflict #middleeast #foreignp...",
      "url": "https://www.youtube.com/shorts/-HIMyHc74Aw",
      "author": "www.youtube.com",
      "image": "None",
      "language": "en",
      "category": ["politics"],
      "published": "2026-03-07 03:08:53 +0000"
    },
    {
      "id": "8143750d-3fad-4dd1-9ede-2a7a21255121",
      "title": "Why'd The US Temporarily Waive Sanctions On India's Purchase Of Russian Oil?",
      "description": "Why'd The US Temporarily Waive Sanctions On India's Purchase Of Russian Oil?\nAuthored by Andrew Korybko,\nThe \"politically inconvenient\" truth is that the US is unilaterally reshaping the world order in a bid to restore unipolarity, and regardless of one's opinion about this, it's objectively achieve...",
      "url": "https://www.zerohedge.com/geopolitical/whyd-us-temporarily-waive-sanctions-indias-purchase-russian-oil",
      "author": "Tyler Durden",
      "image": "None",
      "language": "en",
      "category": ["business", "finance"],
      "published": "2026-03-07 02:45:00 +0000"
    },
    {
      "id": "6ec860db-6461-4c02-9002-7d69019e080e",
      "title": "Industrialists slam govt's energy policy",
      "description": "Gas suspension, power tariff hike to hit exports.",
      "url": "https://www.dawn.com/news/1979322/industrialists-slam-govts-energy-policy",
      "author": "The Newspaper's Staff Reporter",
      "image": "https://i.dawn.com/large/2026/03/070742101571cfd.webp",
      "language": "en",
      "category": ["general"],
      "published": "2026-03-07 02:42:58 +0000"
    },
    {
      "id": "baf41715-b325-4b3a-b45f-b3b4366bf979",
      "title": "Gavin Newsom calls Kristi Noem a 'scapegoat' for Stephen Miller’s hardline immigration policies",
      "description": "Newsom says Trump’s immigration push is being driven from the White House, arguing the policy architect remains untouched despite Noem’s removal",
      "url": "https://news.meaww.com/gavin-newsom-calls-kristi-noem-a-scapegoat-for-stephen-millers-hardline-immigration-policies",
      "author": "Yasira Rahman",
      "image": "https://dxltb3n5j8l6j.cloudfront.net/794322/uploads/25dd86d0-19c6-11f1-8a1b-cd62c36679fa_1200_630.jpeg",
      "language": "en",
      "category": ["entertainment"],
      "published": "2026-03-07 01:53:07 +0000"
    },
    {
      "id": "0c6a2dd3-5f3a-42b9-ba1c-49a86b5c1f66",
      "title": "Noem lent Melania Trump DHS luxury jet as ‘insurance policy’ against spending backlash: report",
      "description": "A report claims DHS officials viewed the First Lady’s use of the luxury aircraft as protection from criticism over costly government jet spending",
      "url": "https://news.meaww.com/noem-lent-melania-trump-dhs-luxury-jet-as-insurance-policy-against-spending-backlash-report",
      "author": "Rishab Rathi",
      "image": "https://dxltb3n5j8l6j.cloudfront.net/794318/uploads/8f9a5bc0-19bc-11f1-a533-07d06658cbac_1200_630.jpeg",
      "language": "en",
      "category": ["entertainment"],
      "published": "2026-03-07 01:39:30 +0000"
    },
    {
      "id": "23b73966-5fc9-4893-b4a7-8b006affa228",
      "title": "Three Heroic Austin Officers Are Coming Under Legal Fire Over a 'Defund the Police'-Era Policy",
      "description": "Three Austin officers face grand-jury scrutiny over a 'defund the police' policy after stopping a mass shooter.",
      "url": "https://pjmedia.com/michael-a-letts/2026/03/06/three-heroic-austin-officers-are-coming-under-legal-fire-over-a-defund-the-police-era-policy-n4950336",
      "author": "Michael A. Letts",
      "image": "https://media.townhall.com/cdn/hodl/pj/images/up/2024/120/93600a87-4c3b-457d-9e01-5a253be00a8f.jpg",
      "language": "en",
      "category": ["media"],
      "published": "2026-03-07 01:29:00 +0000"
    },
    {
      "id": "ceb2bb5e-f8fe-438a-a2f4-aa5cae8f73cd",
      "title": "Policy must catch up with breast cancer burden",
      "description": "text/html...",
      "url": "https://indianexpress.com/article/opinion/editorials/policy-must-catch-up-with-breast-cancer-burden-10568824/",
      "author": "",
      "image": "None",
      "language": "en",
      "category": ["opinion"],
      "published": "2026-03-07 01:26:47 +0000"
    },
    {
      "id": "8b0f19d5-89ac-4e3d-a49b-7468c5ddfbc3",
      "title": "NEWS FLASH: Broad Arrow Smashes World Records with Collection of Unobtanium Supercars on Day One of Amelia Concours Auction (Hagerty IncHGTY:NYQ)",
      "description": "Amelia Island, Florida, March 06, 2026 (GLOBE NEWSWIRE) -- Broad Arrow Auctions, driven by Hagerty (NYSE: HGTY), set new standards for some of the collector car market's most sought-after supercars during the first evening of its two-day 2026 Amelia Concours Auction. Held at the Ritz-Carlton, Amelia...",
      "url": "https://markets.ft.com/data/announce/detail?dockey=1330-9667768en-5O3VB4JGO22OINKBPCU3VB0VGQ",
      "author": "GlobeNewswire",
      "image": "None",
      "language": "en",
      "category": ["hague", "stockholm"],
      "published": "2026-03-07 01:18:33 +0000"
    },
    {
      "id": "f516014a-943c-4a93-9826-2a4faf53b6fc",
      "title": "3 Reasons Why Obamacare Is So Hard To Fix",
      "description": "3 Reasons Why Obamacare Is So Hard To Fix\nAuthored by Lawrence Wilson via The Epoch Times,\nObamacare had problems even before it launched in 2014. Marketplace websites were glitchy during the open enrollment period, frustrating many would-be customers.\n\nSweeping changes ushered in by the Affordable ...",
      "url": "https://www.zerohedge.com/medical/3-reasons-why-obamacare-so-hard-fix",
      "author": "Tyler Durden",
      "image": "None",
      "language": "en",
      "category": ["business", "finance"],
      "published": "2026-03-07 01:05:00 +0000"
    },
    {
      "id": "a9925252-3b1a-45b6-92fd-87a709d56801",
      "title": "Major airline reportedly considers deluxe cleaning for premium seats only as passengers vent online",
      "description": "Southwest Airlines is considering a cleaning policy that would deep-clean premium seats between flights, while leaving coach cabins relatively untouched.",
      "url": "https://www.foxnews.com/travel/major-airline-reportedly-considers-deluxe-cleaning-premium-seats-passengers-vent",
      "author": "Fox News",
      "image": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/03/1024/512/southwest-cleaning-policy.jpg?ve=1&tl=1",
      "language": "en",
      "category": ["travel", "lifestyle"],
      "published": "2026-03-07 01:00:09 +0000"
    },
    {
      "id": "6c656074-258b-42b8-8150-3212164ddfe9",
      "title": "'Just-shoring' puts justice at the center of critical minerals policy",
      "description": "A clean energy future hinges on minerals such as copper, cobalt, lithium, and rare earth elements. But the race to secure them puts pressure on the places where they are mined. With some supply and processing concentrated in just a few countries, these critical raw materials (CRMs) have also become ...",
      "url": "https://phys.org/news/2026-03-shoring-justice-center-critical-minerals.html",
      "author": "phys",
      "image": "None",
      "language": "en",
      "category": ["science"],
      "published": "2026-03-07 01:00:01 +0000"
    },
    {
      "id": "3ac1ddf5-a960-4d7f-9f37-479a5de84302",
      "title": "Dems To Keep Blocking DHS Funds Despite Noem Firing",
      "description": "Dems To Keep Blocking DHS Funds Despite Noem Firing\nOn Thursday, President Donald Trump fired Department of Homeland Security Secretary Kristi Noem and tapped Sen. Markwayne Mullin of Oklahoma as her replacement, marking the first administration shake-up of Trump's second term. Democrats had been de...",
      "url": "https://www.zerohedge.com/political/dems-keep-blocking-dhs-funds-despite-noem-firing",
      "author": "Tyler Durden",
      "image": "None",
      "language": "fr",
      "category": ["business", "finance"],
      "published": "2026-03-06 23:50:00 +0000"
    },
    {
      "id": "3f5e8b59-339e-4933-bd02-eaecca61b288",
      "title": "Non-citizen Mexican national charged with fraudulently voting in Alabama elections: 'Zero-tolerance policy for noncitizen voting'",
      "description": "Alabama's Secretary of State is praising the DOJ for arresting a non-citizen who was caught illegally voting in elections.",
      "url": "https://yellowhammernews.com/non-citizen-mexican-national-charged-with-fraudulently-voting-in-alabama-elections-zero-tolerance-policy-for-noncitizen-voting/",
      "author": "Yaffee",
      "image": "https://yellowhammernews.com/wp-content/uploads/2024/10/DOJ-Department-of-Justice-Voting-Election-3.jpg",
      "language": "en",
      "category": ["politics"],
      "published": "2026-03-06 22:44:23 +0000"
    },
    {
      "id": "d2a0b3a8-2c64-4baf-886b-a8ad84884395",
      "title": "Bad Faith Noncompliance: Virginia Schools Flout Supreme Court And Trump With DEI 'Rebrand'",
      "description": "Bad Faith Noncompliance: Virginia Schools Flout Supreme Court And Trump With DEI 'Rebrand'\nAuthored by Teresa R. Manning via American Greatness,\nJust over a year ago, President Trump issued two executive orders banning destructive diversity ideology (a.k.a. \"DEI\" or \"diversity, equity, and inclusion...",
      "url": "https://www.zerohedge.com/political/bad-faith-noncompliance-virginia-schools-flout-supreme-court-and-trump-dei-rebrand",
      "author": "Tyler Durden",
      "image": "None",
      "language": "en",
      "category": ["business", "finance"],
      "published": "2026-03-06 22:40:00 +0000"
    },
    {
      "id": "ad33641f-8522-4f8e-93dd-de13ff23667a",
      "title": "Experts urge swift new 'crisis' govt",
      "description": "Experts have called for the urgent formation of a new government as Thailand faces mounting economic, geopolitical and climate challenges, warning delays could worsen policy responses and weaken public confidence.",
      "url": "https://www.bangkokpost.com/thailand/politics/3211470/experts-urge-swift-new-crisis-govt",
      "author": "Bangkok Post Public Company Limited",
      "image": "https://static.bangkokpost.com/media/content/dcx/2026/03/07/5994680_700.jpg",
      "language": "en",
      "category": ["general"],
      "published": "2026-03-06 22:40:00 +0000"
    },
    {
      "id": "b1837514-98f0-4dc4-b313-6a092be2fbd3",
      "title": "Experts urge swift new 'crisis' government",
      "description": "Experts have called for the urgent formation of a new government as Thailand faces mounting economic, geopolitical and climate challenges, warning delays could worsen policy responses and weaken public confidence.",
      "url": "https://www.bangkokpost.com/thailand/politics/3211470/experts-urge-swift-new-crisis-government",
      "author": "Bangkok Post Public Company Limited",
      "image": "https://static.bangkokpost.com/media/content/dcx/2026/03/07/5994680_700.jpg",
      "language": "en",
      "category": ["general"],
      "published": "2026-03-06 22:40:00 +0000"
    },
    {
      "id": "c0338531-9ea9-4714-83bf-5fb2461d1000",
      "title": "Mills: Trump Admin \"Reveling In The Carnage\" As Tehran Burns",
      "description": "Mills: Trump Admin \"Reveling In The Carnage\" As Tehran Burns\nLast night, Bret Weinstein joined ZeroHedge to moderate a debate on the Iran war featuring Curt Mills, executive director of The American Conservative (magazine founded by Pat Buchanan), and Max Abrahms, Northeastern University professor a...",
      "url": "https://www.zerohedge.com/geopolitical/mills-israels-holy-grail-was-iran-trump-just-delivered-it",
      "author": "Tyler Durden",
      "image": "None",
      "language": "en",
      "category": ["business", "finance"],
      "published": "2026-03-06 22:20:00 +0000"
    },
    {
      "id": "4989c50f-96c3-467d-b3e0-0a6d07573de1",
      "title": "AIPAC-Targeted 'AK Guy' Set To Take GOP House Seat After Sex-Suicide Scandal",
      "description": "AIPAC-Targeted 'AK Guy' Set To Take GOP House Seat After Sex-Suicide Scandal\nHis reputation shredded by a sex scandal involving a staffer who committed suicide, incumbent Texas Republican Congressman Tony Gonzales said he was no longer seeking re-election, handing the GOP nomination to YouTube gun p...",
      "url": "https://www.zerohedge.com/political/aipac-targeted-ak-guy-set-take-gop-house-seat-after-sex-suicide-scandal",
      "author": "Tyler Durden",
      "image": "None",
      "language": "en",
      "category": ["business", "finance"],
      "published": "2026-03-06 21:40:00 +0000"
    },
    {
      "id": "155fa515-4a21-4fe2-a01e-b1030c18f736",
      "title": "Judge weighs New York Times bid to block policy limiting journalists' access to Pentagon",
      "description": "A Pentagon policy limiting journalists' access to the building is depriving Americans of vital information about U.S. military operations while the country is at war, a New York Times attorney argued Friday in urging a judge to block the new rules. “It's more important than ever for the public to…",
      "url": "https://japantoday.com/category/world/judge-weighs-new-york-times-bid-to-block-policy-limiting-journalists%27-access-to-pentagon",
      "author": "AP",
      "image": "https://media.japantoday.com/img/store/54/66/5da0c35d0d1634bc185e3c8320cb81b30458/download/_w1700.jpeg",
      "language": "en",
      "category": ["general"],
      "published": "2026-03-06 21:38:57 +0000"
    },
    {
      "id": "96694b82-996a-4253-8858-9164aabccc8a",
      "title": "Trump's military actions reassert America's role as global policeman",
      "description": "President Trump campaigned on an \"America First\" foreign policy, vowing that the U.S. would no longer serve as the world's policeman, entangled in unaffordable forever wars.\nYet he has unleashed America's military might time and again.",
      "url": "https://www.washingtontimes.com/news/2026/mar/6/trumps-military-actions-reassert-americas-role-global-policeman/",
      "author": "Jeff Mordock",
      "image": "None",
      "language": "en",
      "category": ["politics"],
      "published": "2026-03-06 21:31:02 +0000"
    },
    {
      "id": "620759f8-51fd-4576-9233-b7014026ef23",
      "title": "Supreme Court blocks California restrictions on schools notifying parents about students' transgender status",
      "description": "The Supreme Court on Monday barred California from enforcing state rules that restrict when schools can notify parents about students who come out as transgender and requires teachers to use children's preferred pronouns. The court, on a 6-3 vote on ideological lines, allowed a federal judge's rulin...",
      "url": "https://www.sott.net/article/505026-Supreme-Court-blocks-California-restrictions-on-schools-notifying-parents-about-students-transgender-status",
      "author": "sott",
      "image": "None",
      "language": "en",
      "category": ["society", "politics"],
      "published": "2026-03-06 21:29:26 +0000"
    },
    {
      "id": "d57a56ce-de15-4734-af34-0dc55f9e673e",
      "title": "Switzerland and EU deepen foreign and security policy",
      "description": "… not want peace,\" according to the Estonian. That is why we must …",
      "url": "https://world.einnews.com/article/897691311/iKnaaAWMETclfxE4?ref=rss",
      "author": "einnews",
      "image": "None",
      "language": "en",
      "category": ["national"],
      "published": "2026-03-06 21:18:37 +0000"
    },
    {
      "id": "31c3d633-645d-4f53-9845-dbe1268efbb5",
      "title": "This Is Why Criminal Justice Needs Number Nerds",
      "description": "In this episode of the Jabot Podcast, I speak with economist and criminal justice expert Jennifer Doleac, author of The Science of Second Chances: A Revolution in Criminal Justice and Executive Vice President of Criminal Justice at Arnold Ventures.\nDrawing from economic research and real-world polic...",
      "url": "https://abovethelaw.com/2026/03/this-is-why-criminal-justice-needs-number-nerds/",
      "author": "Kathryn Rubino",
      "image": "None",
      "language": "en",
      "category": ["legal", "lifestyle"],
      "published": "2026-03-06 21:12:00 +0000"
    },
    {
      "id": "3cf15f38-df99-4442-b084-27d0cd7d0999",
      "title": "LNP smashes 'break glass in case of emergency' box of distractions",
      "description": "The government made a flurry of other policy announcements to distract from its 11th-hour changes to its hate speech laws, writes state political reporter Alex Brewster.",
      "url": "https://www.abc.net.au/news/2026-03-07/queensland-government-distractions-hate-speech-laws-pass/106423358",
      "author": "ABC News",
      "image": "https://live-production.wcms.abc-cdn.net.au/b3d7810994f49aec21be384ad4317fcc?impolicy=wcms_watermark_news&cropH=788&cropW=1400&xPos=0&yPos=26&width=862&height=485&imformat=generic",
      "language": "en",
      "category": ["general"],
      "published": "2026-03-06 21:09:50 +0000"
    }
  ],
  "page": 1
}

const [value,setValue] = useState(false)

const trustedSources = [
"PIB",
"The Hindu",
"Moneycontrol.com",
"Economic Times",
"Reuters",
"Bloomberg"
];

  const [NewsData,setNewsData] = useState([])
  const [loaded,setLoaded] = useState(false)

  useEffect(()=>{

  
  const newss = async ()=>{
      const response =  await fetch("http://localhost:5000/newsapi", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }); 
  
      const data = await response.json();
      
      /* const datas = data.news.filter(elements => keywords.some( word =>
        elements.title?.toLowerCase().includes(word.toLowerCase())  || elements.description?.toLowerCase().includes(word.toLowerCase())
      ))  */
       
      const datasort = data.news.filter(article =>
  trustedSources.some(domain => article.source.includes(domain)))
      setNewsData(datasort)
      if(NewsData){
        setValue(true)
        setLoaded(true)
      }
  }
  newss()
},[0])




  return (
    <>
    {value ? 
    <div className="container">

      <h1 className="title">Indian Economic Policy News</h1>

      <div className="news-grid">
        {NewsData.map((article, index) => (
          <div className="news-card" key={index}>

            <img
              src={article.imageUrl || "https://via.placeholder.com/400"}
              alt="news"
            />

            <div className="news-content">
              <h3>{article.title}</h3>

              <p>{article.snippets}</p>

              <a href={article.link} target="_blank" rel="noreferrer">
                Read Full Article →
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
:
<div className="loading-container">
  <div className="spinner"></div>
  <p>Loading Policy News...</p>
</div>
}
    </>
)

}
export default NewApi