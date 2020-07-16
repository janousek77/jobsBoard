// ## Deliverable

// Use the [GitHub Jobs](https://jobs.github.com/api) api to create a job board.

// The job board should have 2 search options:

// - job description
// - location

// ⇒ Make sure that the user uses at least one of the 2 options. They can also use both of the options

// Below the search options, have 3 buttons that are used to filter the jobs by. Those filters are:

// - full time
// - part time
// - remote

// Display the jobs in responsive cards with the following information:

// - Company logo picture
// - Job Title
// - Job description (at most 100 characters)
// - How to apply information
// - A button to view job in details

let jDes;
let jLoc;
let remoteBoolean = false;

var obj = [
  {
    id: "5903afaa-3fcd-440e-a6ee-fed215987718",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/5903afaa-3fcd-440e-a6ee-fed215987718",
    created_at: "Mon Jul 13 16:13:44 UTC 2020",
    company: "Valimail",
    company_url: "http://www.Valimail.com",
    location: "Remote ",
    title: "Engineering Manager ",
    description:
      "<p>Imagine working on a global communication network that’s used by 3.7 billion people and every day more than a quarter trillion messages cross this network. There’s just one problem: even in today’s modern world, phishing attacks run rampant, costing companies billions of dollars each year. Whether it’s from wire fraud, W-2 thefts, or targeted attacks to steal data, companies have been powerless to protect themselves.</p>\n<p>Valimail offers a comprehensive solution for stopping fake email, protecting brands, and helping ensure compliance. We’ve already stopped billions of malicious emails from being delivered, won over a dozen prestigious cybersecurity awards, and count some of the world's biggest companies as customers, including Fannie Mae, Uber, WeWork, Yelp, and the U.S. Agency for International Development.</p>\n<p>As an Engineering Manager at Valimail you will lead software engineers in the development and delivery of the world's first zero-trust solution for phishing defense.</p>\n<p>As part of the Valimail Engineering Leadership team, you will be a major contributor to the company’s success. You’ll share in the design, development, and deployment of the Valimail solutions. Your contributions will help protect numerous brands, authenticate hundreds of millions of emails every day, and protect people all over the world from fraud.</p>\n<p>If you are drawn to improve the messaging environment and make a difference in the lives of half the world’s population, we’d love to talk to you.</p>\n<p>What You'll be Doing</p>\n<p>65% Project Management &amp; Software Development Management\n35% Personnel Management &amp; Team Development\nYou will inspire, motivate and lead a team of software engineers to ensure efficient delivery of high quality products and features in an Agile environment.\nAs a people manager, you will mentor, grow, and coach your engineers through daily interactions and support.\nPromote a delivery focused environment and lead tangible, measurable improvements to our development and deployment cycles.\nActively work with Software Architects and Product Managers to ensure that Valimail’s best practices are being followed and enhanced.\nBe part of building a high-performance organization, including strategic planning, recruiting &amp; interviewing candidates, and cultivating both local and remote world-class engineers.\nProactively identify areas of risk in project deliverables / architecture, and develop plans to mitigate those risks.\nSupport Agile Scrum based project planning, collaboration, and prioritization of resources.\nPragmatically work with peers to balance needs, support issues, technical architecture needs, and new feature development.\nOwn sprint goals and deliverables for key products and features -- building discipline around tracking progress and iterating to improve product and team performance.\nWork closely with Product Managers and Scrum Master to maintain technical roadmaps.\nEvaluate and prioritize team tasks and activities, delivering business / customer value.</p>\n<p>About you</p>\n<p>Communication:\nYou effectively communicate at all levels within the organization.\nProject Management:\nProven practical application of Agile software development methodologies.\nProven track record of Project Managing multiple complex projects.\nCommitted to drive projects to on-time delivery, based on solid time estimation.\nAbility to focus on outcomes and commitments.\nRecruiting:\nStrategically hired both local and remote candidates.\nRecruited for specific team needs.\nTeam Leadership:\nManaged teams of local and remote Development Engineers.\nExperience building and leading local and remote teams.\nDeveloped individuals to be stronger team members.\nExperience driving development with a focus on standards and on-time delivery.\nCritical thinker that is able to drive decisions with quality and velocity.\nYou are committed to the use of and development of best practices\nYou must have:\nMore than 5 years experience as a Ruby on Rails Engineer + People Manager on a SaaS based product ideally within a startup environment.\nExceptional self-motivation and proactive leadership style.\nExperience building and leading remote teams with a focus on development and delivery.\nAbility to thrive in a fast-paced dynamic environment.\nHave a passion to make a difference.</p>\n<p>Valimail offers a comprehensive solution for stopping fake email, protecting brands, and helping ensure compliance. We’ve already stopped billions of malicious emails from being delivered, won over a dozen prestigious cybersecurity awards, and count some of the world's biggest companies as customers, including Fannie Mae, Uber, WeWork, Yelp, and the U.S. Agency for International Development.</p>\n<p>Valimail is HQ'd in San Francisco, CA &amp; Denver, CO. We would prefer candidates local to either location but are open to remote as well.</p>\n",
    how_to_apply:
      '<p><a href="https://www.valimail.com/about/careers/">https://www.valimail.com/about/careers/</a></p>\n',
    company_logo: null,
  },
  {
    id: "e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/e9e632a7-c756-40c9-b1ca-c3eb5c7f9ce3",
    created_at: "Sat Aug 03 00:50:23 UTC 2019",
    company: "Game Closure",
    company_url: "http://gameclosure.com",
    location: "San Francisco, Mountain View, Tokyo, Remote",
    title: "Senior Game Engineer (REMOTE)",
    description:
      "<p>GAME CLOSURE</p>\n<p>San Francisco, Mountain View, Tokyo, Remote  -  Full Time</p>\n<p>Game Closure is on the hunt for  Senior Game Engineers to help us build the social games that will be tomorrow’s biggest hits on Facebook and other social media platforms. We are a growing team with offices in San Francisco and Mountain View, California, Tokyo, Japan and also some possibilities for remote work. If you want to join us to make great games on our cutting­ edge technology and truly make an impact, then we want to talk to you!</p>\n<p>Game Closure game engineers make polished, high-performance HTML5 mobile games. We want people who are proficient with JavaScript and who are passionate about making fun social games to be played by millions! As a Game Engineer at Game Closure, you will build games internally on top of our cutting-edge and open source devkit. In addition to building kick­ass instant games, you will play a pivotal role in creating a platform which will revolutionize the future of game development.</p>\n<p>It's always a bonus if you know more than JavaScript! We write cross-compilers, GPU shaders, NodeJS back­ends, JavaScript game APIs and tools, and whatever else it takes. You will work with the best engineers in the world; we have top talent in every part of our stack.</p>\n<p><strong>The Role:</strong></p>\n<ul>\n<li>Be responsible for designing, developing and deploying major game features</li>\n<li>Own game feature areas from end-­to­-end</li>\n<li>Be the champion for the user!</li>\n<li>Insist on the highest standards and create functional and engaging features that will delight our users</li>\n<li>Be part of a tight game development team looking to iterate fast on a fun concept and then building it out</li>\n<li>Have real input on end-user product</li>\n<li>Be a key member of a high performing software engineering team</li>\n<li>Collaborate with design, engineering and production teams to devise optimal engineering solutions to game requirements</li>\n<li>Hands­ on architect and coder for sophisticated client/server systems for mobile gaming</li>\n<li>Innovate and iterate on process, systems and technology to deliver world­-class social games</li>\n<li>Be a leader; Identify and articulate technical and production risks and obstacles, as well as generate solutions!</li>\n</ul>\n<p><strong>Desired Skills:</strong></p>\n<ul>\n<li>Bachelor's degree in Computer Science or related field, or equivalent experience.</li>\n<li>3+ years of professional software engineering experience, working on cross functional teams.</li>\n<li>Proven effectiveness in directing or delivering production software for high quality games with at least one shipped game product of which you were a primary contributor (self­ published titles are acceptable).</li>\n<li>Capable of JavaScript + HTML5 to create custom, interactive, user experiences that are enjoyable on all HTML5 browsers.</li>\n<li>Proficient at using script debuggers like Chrome Debugger.</li>\n<li>Strong Computer Science fundamentals in object­-oriented design, algorithms, and data structures.</li>\n<li>Advanced software engineering skills, including the ability to write maintainable and robust code in a p popular object oriented language.</li>\n<li>Solid familiarity with analytics and A/B testing in mobile games</li>\n<li>Familiarity with git, svn or other VCS.</li>\n<li>Self starter, analytical and creative</li>\n<li>Strong team player with a positive attitude.</li>\n<li>Good communication skills and the ability to work effectively on shared projects with designers, artists, testers, product managers and other developers.</li>\n<li>Check out Everwing on Facebook Instant Games in Messenger. Can you build this game?</li>\n<li>Understanding of the reactive UI paradigm and experience building UIs using reactive UI frameworks (such as React, and state management Utilities like Redux).</li>\n</ul>\n<p><strong>Bonus:</strong></p>\n<ul>\n<li>Canvas animation work</li>\n<li>2+ years of game development experience with multiple shipped titles</li>\n<li>Specialized skills in a particular area of game development (for example: UI, Physics, graphics, multiplayer, game logic, etc.)</li>\n<li>Expert knowledge of TypeScript</li>\n</ul>\n<p><strong>GC Perks:</strong></p>\n<ul>\n<li>Medical, Dental, &amp; Vision: Top quality insurance options with 100% of premiums covered</li>\n<li>Social Events: Weekly team dinners, quarterly team excursions, game nights, karaoke, and more</li>\n<li>Commuter Pass + Free Parking: Your commute and parking to the office is on us!</li>\n<li>PTO: Unlimited vacation policy</li>\n<li>Meals: Free daily lunches, well stocked kitchen, healthy snacks and drinks</li>\n<li>Pet-Friendly Office: Bring your pets to work to foster a friendlier and happier workplace</li>\n</ul>\n",
    how_to_apply:
      '<p><a href="https://jobs.lever.co/gameclosure/a50c5aa4-6526-425f-9767-2b8e11800857?lever-origin=applied&amp;lever-source%5B%5D=GitHub">https://jobs.lever.co/gameclosure/a50c5aa4-6526-425f-9767-2b8e11800857?lever-origin=applied&amp;lever-source%5B%5D=GitHub</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTV1IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b586f79a85322f93304aae975ae4ae8556e35bfe/GClogo_small.png",
  },
];

var obj2;

document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();
  jDes = document.getElementById("jDes").value;
  jLoc = document.getElementById("jLoc").value;
  jobsApi(jDes, jLoc);
  document.getElementById("jDes").value = "";
  document.getElementById("jLoc").value = "";
});

function jobsApi(Des, Loc) {
  var url =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=" +
    Des +
    "&location=" +
    Loc;
  // jobsApiArray(obj);
  fetch(url)
    .then((response) => response.json())
    .then((data) => jobsApiArray(data));
  console.log(obj2);
}

function jobsApiArray(jobsList) {
  if (obj2 === undefined) {
    obj2 = jobsList;
  }
  if (remoteBoolean === true) {
    let newList = jobsList.filter((element) => {
      if (element.location.includes("Remote")) return element;
    });
    console.log("newlist:" + newList);
    newList.forEach((element) => {
      createCard(element);
    });
    console.log("finished array");
  } else {
    jobsList.forEach((element) => {
      createCard(element);
    });
  }
}

function createCard(obj) {
  var card = document.createElement("div");
  card.style.width = "18rem";
  card.setAttribute("class", "card");

  var img = document.createElement("img");
  img.setAttribute("src", obj.company_logo);
  img.setAttribute("class", "img");
  img.style.width = "100%";
  card.appendChild(img);

  var card_body = document.createElement("div");
  card_body.setAttribute("class", "card_body");
  card.appendChild(card_body);

  var card_text = document.createElement("h5");
  card_text.innerHTML = obj.title;
  card_text.setAttribute("class", "card_text");
  card_body.appendChild(card_text);

  var job_Des = document.createElement("p");
  job_Des.innerHTML = obj.description.substr(0, 100) + "....";

  job_Des.setAttribute("class", "job_des");
  card_body.appendChild(job_Des);

  var apply = document.createElement("p");
  apply.innerHTML = obj.how_to_apply;
  apply.setAttribute("class", "apply");
  card_body.appendChild(apply);

  // var btn = document.createElement("a");
  // btn.innerHTML = "Description";
  // btn.setAttribute("class", "btn");
  // card_body.appendChild(btn);

  document.getElementById("job-cards").appendChild(card);
}

document.getElementById("sortRE").addEventListener("click", (e) => {
  e.preventDefault();
  clearContainer();
  remoteBoolean = true;
  jobsApiArray(obj2);
});

document.getElementById("sortFT").addEventListener("click", (e) => {
  e.preventDefault();
  clearContainer();
  remoteBoolean = false;
  jobsApiArray(obj2);
});

function clearContainer() {
  document.getElementById("job-cards").innerHTML = "";
}
