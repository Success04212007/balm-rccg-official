import './styles.css';

const A = {
  church: 'Balm of Gilead',
  denomination: 'The Redeemed Christian Church of God',
  tagline: 'Where Healing, Hope, Faith and Restoration Meet.',
  description: 'A Christ-centred community committed to worship, biblical teaching, prayer, discipleship, evangelism and service. A place to grow in faith, find fellowship and discover the hope of Jesus Christ.',
  heroImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2200&q=85',
  worshipImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85'
};

const nav = [
  ['Home','/'], ['About Us','/about'], ['Leadership','/leadership'],
  ['Ministries','/ministries'], ['Services','/services'], ['Events','/events'],
  ['Sermons & Media','/sermons'], ['Prayer','/prayer'], ['Testimonies','/testimonies'],
  ['Gallery','/gallery'], ['Give','/give'], ['Contact','/contact']
];

const departments = [
  ['Men’s Fellowship','Encouraging men to grow in Christ, lead with integrity and serve their families and community.','men'],
  ['Women’s Fellowship','Building faith, strengthening families and creating room for meaningful Christian fellowship.','women'],
  ['Youth Ministry','Equipping young people to know Christ, grow in purpose and influence their generation for good.','youth'],
  ['Teens Ministry','A safe, faith-filled environment for teenagers to learn, ask questions and build godly foundations.','teens'],
  ['Children’s Department','Helping children discover the love of Jesus through age-appropriate teaching and care.','children'],
  ['Sunday School','Growing together through the study, understanding and practical application of God’s Word.','sunday-school'],
  ['Prayer Ministry','Encouraging a life of prayer and standing together in faith before God.','prayer'],
  ['Evangelism Department','Sharing the good news of Jesus Christ and serving people with compassion.','evangelism'],
  ['Choir & Music','Supporting congregational worship through music, preparation and service.','choir'],
  ['Ushering Department','Helping every worshipper feel welcomed, guided and cared for.','ushering'],
  ['Protocol Department','Supporting orderly services and the care of guests and special visitors.','protocol'],
  ['Welfare Department','Coordinating practical care and compassion for people in need.','welfare'],
  ['Media & Technical','Supporting the communication of the Gospel through responsible media and production.','media'],
  ['Follow-up & New Converts','Walking alongside new believers and helping people take their next steps in faith.','follow-up'],
  ['House Fellowship','Creating smaller communities for prayer, Scripture, friendship and mutual care.','house-fellowship']
];

const schedules = [
  ['Sunday Celebration Service','Sunday','Time to be confirmed','Our main gathering for worship, biblical teaching, prayer and fellowship.'],
  ['Sunday School','Sunday','Schedule to be confirmed','A dedicated opportunity to study Scripture and grow in understanding.'],
  ['Midweek Bible Study','Midweek','Day and time to be confirmed','A welcoming space to explore the Word of God and apply it to daily life.'],
  ['Prayer Meeting','As announced','Schedule to be confirmed','A time to seek God together in prayer and faith.'],
  ['Special Worship Services','As announced','See current announcements','Special gatherings will be published when dates and details are confirmed.']
];

const icon = (name) => ({
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  cross: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M5 10h14"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16ZM4 21c3-6 7-9 12-12"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22zM4 5.5V22m4-14h8m-8 4h8"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1zm13-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>'
}[name] || '');

const escapeHTML = (value='') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link = (label, href, cls='text-link') => `<a class="${cls}" href="${href}" data-link>${label} ${icon('arrow')}</a>`;
const button = (label, href, cls='btn btn-primary') => `<a class="${cls}" href="${href}" data-link>${label}<span>${icon('arrow')}</span></a>`;
const sectionIntro = (eyebrow, title, text, centered=false) => `<div class="section-intro ${centered?'center':''}"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2><p>${text}</p></div>`;
const pageHero = (eyebrow, title, text) => `<section class="page-hero"><div class="container"><span class="eyebrow light">${eyebrow}</span><h1>${title}</h1><p>${text}</p><div class="breadcrumb"><a href="/" data-link>Home</a><span>/</span><span>${eyebrow}</span></div></div></section>`;
const placeholder = (title, desc='Details will be published after confirmation by the church office.') => `<div class="empty-state"><span class="empty-icon">${icon('leaf')}</span><h3>${title}</h3><p>${desc}</p></div>`;
const featureCard = (symbol, title, desc, href) => `<article class="feature-card"><span class="feature-icon">${icon(symbol)}</span><h3>${title}</h3><p>${desc}</p>${link('Explore',href)}</article>`;
const formShell = (type, title, intro, fields='') => `
  <form class="form-card" data-submit-form data-type="${type}">
    <div class="form-heading"><span class="eyebrow">SEND A MESSAGE</span><h2>${title}</h2><p>${intro}</p></div>
    ${fields || `
      <div class="field-row"><label>Full name<input name="full_name" autocomplete="name" required maxlength="120" placeholder="Your name"></label><label>Email address<input name="email" type="email" autocomplete="email" maxlength="180" placeholder="you@example.com"></label></div>
      <div class="field-row"><label>Phone number <span class="optional">(optional)</span><input name="phone" autocomplete="tel" maxlength="40" placeholder="Your phone number"></label><label>Preferred response <select name="response_method"><option value="email">Email</option><option value="phone">Phone</option><option value="whatsapp">WhatsApp</option><option value="no-response">No response needed</option></select></label></div>
      <label>Your message<textarea name="message" rows="5" required maxlength="4000" placeholder="How can we help?"></textarea></label>
    `}
    <label class="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabindex="-1" autocomplete="off"></label>
    <label class="consent"><input type="checkbox" name="consent" required><span>I understand this information will be used only to respond to my enquiry, in line with the church privacy notice.</span></label>
    <button class="btn btn-primary submit-btn" type="submit">Send securely <span>${icon('arrow')}</span></button>
    <p class="form-feedback" aria-live="polite"></p>
  </form>`;

function header() {
  return `
  <div class="announcement"><div class="container announcement-inner"><span>THE REDEEMED CHRISTIAN CHURCH OF GOD</span><span>AREA CHURCH</span></div></div>
  <header class="site-header" id="siteHeader"><div class="container header-inner">
    <a class="brand" href="/" data-link aria-label="Balm of Gilead home"><span class="brand-mark brand-logo"><img src="/ded59337f6160d98bafc458b0645ed02-removebg-preview.png" alt="" /></span><span class="brand-copy"><strong>BALM OF GILEAD</strong><small>RCCG AREA CHURCH</small></span></a>
    <nav class="desktop-nav" aria-label="Main navigation">
      ${nav.slice(0,6).map(([n,h])=>`<a href="${h}" data-link>${n}</a>`).join('')}
      <div class="nav-more"><button class="nav-more-button" type="button" aria-expanded="false">More <span>⌄</span></button><div class="nav-dropdown">${nav.slice(6).map(([n,h])=>`<a href="${h}" data-link>${n}</a>`).join('')}<a href="/news" data-link>News & Updates</a><a href="/house-fellowship" data-link>House Fellowship</a></div></div>
    </nav>
    <a class="header-visit" href="/visit" data-link>Plan Your Visit <span>${icon('arrow')}</span></a>
    <button class="mobile-menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
  </div>
  <div class="mobile-nav" aria-hidden="true"><div class="mobile-nav-top"><span>Explore Balm of Gilead</span><button class="mobile-menu-close" aria-label="Close navigation">${icon('close')}</button></div>${[...nav,['Plan Your Visit','/visit'],['News & Updates','/news'],['House Fellowship','/house-fellowship']].map(([n,h])=>`<a href="${h}" data-link>${n}<span>↗</span></a>`).join('')}</div></header>`;
}

function footer() {
  return `
  <section class="footer-invite"><div class="container invite-inner"><div><span class="eyebrow light">THERE IS A PLACE FOR YOU</span><h2>Your journey of faith<br>can begin today.</h2></div><div class="invite-actions">${button('Plan your visit','/visit','btn btn-cream')}${button('Request prayer','/prayer','btn btn-outline-light')}</div></div></section>
  <footer class="site-footer"><div class="container"><div class="footer-main">
    <div class="footer-brand"><a class="brand brand-light" href="/" data-link><span class="brand-mark brand-logo"><img src="/ded59337f6160d98bafc458b0645ed02-removebg-preview.png" alt="" /></span><span class="brand-copy"><strong>BALM OF GILEAD</strong><small>RCCG AREA CHURCH</small></span></a><p>A Christ-centred community of worship, prayer, biblical teaching, discipleship and service.</p><span class="footer-tagline">${A.tagline}</span></div>
    <div class="footer-col"><h4>Discover</h4><a href="/about" data-link>About us</a><a href="/leadership" data-link>Our leadership</a><a href="/ministries" data-link>Ministries</a><a href="/services" data-link>Services & programmes</a><a href="/events" data-link>Events</a></div>
    <div class="footer-col"><h4>Get connected</h4><a href="/sermons" data-link>Sermons & media</a><a href="/prayer" data-link>Prayer & counselling</a><a href="/testimonies" data-link>Testimonies</a><a href="/house-fellowship" data-link>House fellowship</a><a href="/give" data-link>Giving</a></div>
    <div class="footer-col"><h4>Visit & connect</h4><a href="/visit" data-link>Plan your visit</a><a href="/contact" data-link>Contact us</a><span class="muted">Address: to be confirmed</span><span class="muted">Service times: see current schedule</span></div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Balm of Gilead RCCG Area Church. All rights reserved.</span><div><a href="/privacy" data-link>Privacy notice</a><a href="/admin" data-link>Admin access</a></div></div></div></footer>`;
}

function homePage() {
  return `
  <section class="hero"><div class="hero-image" role="img" aria-label="Illustrative photograph of a worship gathering"></div><div class="hero-shade"></div><div class="container hero-content"><div class="hero-copy"><span class="eyebrow light"><span class="eyebrow-line"></span> BALM OF GILEAD · RCCG AREA CHURCH</span><h1>Experience His presence.<br><em>Live a transformed life.</em></h1><p>Welcome to a community where faith is nurtured, hope is renewed and the love of Jesus is shared. There is room for you here.</p><div class="hero-actions">${button('Plan your visit','/visit','btn btn-cream')}${button('Explore our church','/about','btn btn-outline-light')}</div><span class="image-note">Illustrative worship photography · Replace with an approved church photograph</span></div><div class="hero-side-note"><span>01 / A PLACE TO BELONG</span><span class="side-rule"></span><span>WORSHIP · WORD · FELLOWSHIP</span></div></div><a class="scroll-cue" href="#welcome" aria-label="Scroll to welcome section">SCROLL TO DISCOVER <span>↓</span></a></section>
  <section class="welcome section-pad" id="welcome"><div class="container welcome-grid"><div class="welcome-image-wrap"><img src="${A.worshipImage}" alt="People gathered together in community" loading="lazy"><span class="image-caption">FAITH · FELLOWSHIP · COMMUNITY</span></div><div class="welcome-copy"><span class="eyebrow">YOU ARE WELCOME HERE</span><h2>A place to encounter God and grow together.</h2><p class="lead">At Balm of Gilead, we believe the church is more than a place to attend. It is a family in which people are welcomed, encouraged and equipped to follow Jesus.</p><p>Through worship, the teaching of Scripture, prayer, discipleship and service, we seek to create an environment where every generation can take meaningful steps in faith.</p>${link('Discover our story','/about')}</div></div></section>
  <section class="service-strip"><div class="container service-strip-inner"><div><span class="eyebrow light">WORSHIP WITH US</span><h2>There is a seat for you.</h2><p>Our current timetable is being confirmed. Please contact the church office before travelling.</p></div><div class="service-strip-detail"><span class="service-day">SUNDAY</span><strong>Celebration Service</strong><small>Time & venue to be confirmed</small></div><div class="service-strip-link">${link('View all services','/services')}</div></div></section>
  <section class="section-pad"><div class="container"><div class="section-heading-row">${sectionIntro('GROW IN FAITH','A community with purpose','Discover ways to worship, learn, serve and build meaningful relationships.')}${link('Explore all ministries','/ministries')}</div><div class="feature-grid">${featureCard('book','Biblical teaching','Grow in the knowledge of Scripture and put faith into practice.','/services')}${featureCard('heart','Prayer & care','Find encouragement, prayer and pastoral support in every season.','/prayer')}${featureCard('users','Life together','Connect with others through fellowship, service and shared purpose.','/ministries')}</div></div></section>
  <section class="story-band"><div class="story-image"></div><div class="story-copy"><span class="eyebrow light">OUR HEART</span><h2>Faith that reaches beyond Sunday.</h2><p>We are committed to sharing the Gospel, nurturing disciples and expressing the love of Christ through practical care and service.</p>${button('Learn about our values','/about','btn btn-outline-light')}</div></section>
  <section class="section-pad soft-bg"><div class="container"><div class="section-heading-row">${sectionIntro('WHAT’S HAPPENING','Gather, grow and take part','Church events and programmes will appear here as dates and details are approved.')}${link('View events','/events')}</div><div id="homeEvents" class="content-grid three-col">${placeholder('Upcoming programmes','Confirmed event information will be published here.')}</div></div></section>
  <section class="section-pad"><div class="container media-feature"><div><span class="eyebrow">WATCH · LISTEN · GROW</span><h2>Messages to strengthen your walk with God.</h2><p>Explore biblical teaching and worship resources from Balm of Gilead as approved sermons and recordings become available.</p>${button('Explore sermons & media','/sermons','btn btn-dark')}</div><div class="media-feature-visual"><div class="media-mark">${icon('book')}</div><span>SERMONS & MEDIA</span><small>Approved recordings will be shared here</small></div></div></section>
  <section class="section-pad testimonies-band"><div class="container testimonies-inner"><div><span class="eyebrow light">STORIES OF FAITH</span><h2>Every story matters.<br>Every testimony is precious.</h2><p>Approved testimonies will be shared with the contributor’s consent and care for their privacy.</p>${button('Visit testimonies','/testimonies','btn btn-cream')}</div><div class="quote-mark">“</div></div></section>`;
}

function aboutPage() {
  return `${pageHero('ABOUT BALM OF GILEAD','A church family rooted in Christ and shaped by love.','Discover our purpose, our values and the faith that brings us together.')}
  <section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">OUR STORY</span><h2>Growing together in faith, hope and service.</h2><p class="lead">${A.description}</p><p>Balm of Gilead is part of the wider family of The Redeemed Christian Church of God. As an Area Church, it carries a responsibility to nurture worship, discipleship, fellowship and service in its local expression of the Gospel.</p><div class="notice-card"><strong>Our history is being documented.</strong><p>The date of establishment, founding leadership, milestones and verified history will be added following review and approval by the Area Church leadership.</p></div></div></section>
  <section class="section-pad soft-bg"><div class="container"><div class="values-grid"><div>${sectionIntro('OUR VISION','A life transformed by Christ.','Our vision statement will be presented here in the wording formally approved by church leadership.')}</div><div>${sectionIntro('OUR MISSION','To share, nurture and serve.','Our mission statement will be confirmed with the church and published here.')}</div></div></div></section>
  <section class="section-pad"><div class="container"><div class="section-intro center"><span class="eyebrow">WHAT GUIDES US</span><h2>Values that shape our life together.</h2><p>These values reflect the commitments expressed in the church’s ministry brief; final wording may be reviewed by leadership.</p></div><div class="values-list">${[['Faith in God','Trusting God and seeking to live by faith.'],['Holiness & righteousness','Pursuing a life that honours God.'],['Love & compassion','Treating every person with dignity and care.'],['Prayer & worship','Making room for the presence of God in every season.'],['Biblical truth','Grounding faith and practice in Scripture.'],['Excellence in service','Serving faithfully, responsibly and wholeheartedly.'],['Unity & fellowship','Growing together as one family in Christ.'],['Evangelism & discipleship','Sharing the Gospel and helping people grow as followers of Jesus.']].map(([t,d],i)=>`<article><span>0${i+1}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div></div></section>
  <section class="section-pad soft-bg"><div class="container split-content"><div>${sectionIntro('OUR RCCG HERITAGE','Part of a wider family of faith.','Balm of Gilead belongs to The Redeemed Christian Church of God, an international Christian denomination.')}
<p>The church’s exact Region, Province, Zone and Area reporting details will be published once confirmed by the appropriate RCCG leadership. This page will not assume or invent administrative designations.</p></div><div class="hierarchy-card"><span>RCCG ORGANISATIONAL CONTEXT</span><b>RCCG International Headquarters</b><i>↓</i><b>Region · to be confirmed</b><i>↓</i><b>Province · to be confirmed</b><i>↓</i><b>Zone · to be confirmed</b><i>↓</i><b>Area · to be confirmed</b><i>↓</i><strong>Balm of Gilead</strong></div></div></section>
  <section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">WHAT WE BELIEVE</span><h2>Faith shaped by Scripture.</h2><p>Our statement of faith will be aligned with the official RCCG doctrinal statement and reviewed by church leadership before publication. The church affirms the centrality of the Bible and the Christian faith in Jesus Christ.</p><div class="notice-card"><strong>Doctrinal statement pending review</strong><p>The complete approved wording, including the church’s teaching on Scripture, the Trinity, salvation, the Holy Spirit, baptism, holiness, fellowship and the return of Christ, will be inserted here after verification against official RCCG materials.</p></div></div></section>`;
}

function leadershipPage() {
  return `${pageHero('OUR LEADERSHIP','Servant-hearted leadership.','Meet the pastors, ministers and leaders who serve the Balm of Gilead church family.')}
  <section class="section-pad"><div class="container"><div class="section-intro center"><span class="eyebrow">AREA CHURCH LEADERSHIP</span><h2>Leadership is a calling to serve.</h2><p>We honour the people entrusted with spiritual care, guidance and service. Profiles will be published only after names, titles, photographs and biographies are approved.</p></div><div class="leader-feature"><div class="leader-photo-placeholder"><span>OFFICIAL<br>PHOTOGRAPH<br>TO BE ADDED</span></div><div class="leader-info"><span class="eyebrow">AREA PASTOR</span><h2>Area Pastor</h2><p class="lead">The Area Pastor’s approved profile and leadership message will be published here.</p><p class="muted">Name, biography, ministry background and contact information are awaiting confirmation from church leadership.</p><span class="status-pill">PROFILE AWAITING APPROVAL</span></div></div><div class="section-heading-row leader-team-head"><div><span class="eyebrow">CHURCH LEADERSHIP TEAM</span><h2>Serving together.</h2></div><p>Verified ministers, department leaders and administrative team members will be added by authorised administrators.</p></div>${placeholder('Leadership directory is being prepared','No names, titles or biographies have been invented. Approved profiles will appear here.')}</div></section>`;
}

function ministriesPage() {
  return `${pageHero('MINISTRIES & DEPARTMENTS','Find your place to grow and serve.','Explore the ministry areas the church may use to support worship, discipleship, fellowship and community life.')}
  <section class="section-pad"><div class="container"><div class="notice-card"><strong>Ministry directory — confirmation in progress</strong><p>The following are ministry categories requested for the website. Their active status, leaders, meeting schedules and contact details must be confirmed by Balm of Gilead before they are published as operating departments.</p></div><div class="ministry-grid">${departments.map(([title,desc,slug],i)=>`<a class="ministry-card" href="/ministries/${slug}" data-link><span class="ministry-number">MINISTRY 0${i+1}</span><span class="ministry-symbol">${icon(i%3===0?'users':i%3===1?'heart':'book')}</span><h3>${title}</h3><p>${desc}</p><span class="text-link">View details ${icon('arrow')}</span></a>`).join('')}</div></div></section>`;
}

function ministryDetail(slug) {
  const entry=departments.find(d=>d[2]===slug);
  if(!entry) return notFoundPage();
  return `${pageHero('MINISTRY DIRECTORY',escapeHTML(entry[0]),escapeHTML(entry[1]))}<section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">ABOUT THIS MINISTRY</span><h2>${escapeHTML(entry[0])}</h2><p class="lead">${escapeHTML(entry[1])}</p><div class="notice-card"><strong>Local ministry details pending confirmation</strong><p>The ministry’s active status, local vision, leadership, activities, meeting schedule, photographs and joining arrangements must be supplied and approved by Balm of Gilead. This page is a structured placeholder until then.</p></div>${button('Return to ministries','/ministries','btn btn-dark')}</div></section>`;
}

function servicesPage() {
  return `${pageHero('SERVICES & PROGRAMMES','Make room for worship, the Word and prayer.','Explore the kinds of gatherings that may form part of church life. Confirmed dates and schedules will be published by the church office.')}
  <section class="section-pad"><div class="container"><div class="notice-card"><strong>Important schedule notice</strong><p>No service time has been assumed. Please contact the church office to confirm the current timetable before making a journey.</p></div><div class="schedule-list">${schedules.map(([title,day,time,desc],i)=>`<article class="schedule-row"><span class="schedule-index">0${i+1}</span><div><h3>${title}</h3><p>${desc}</p></div><div class="schedule-meta"><strong>${day}</strong><span>${time}</span></div></article>`).join('')}</div><div class="notice-card subtle"><strong>Additional programmes</strong><p>Holy Communion, Faith Clinic, anointing services, fasting and prayer, thanksgiving services and wider RCCG programmes will be listed only when their local schedule is confirmed.</p></div></div></section>`;
}

function eventsPage() {
  return `${pageHero('EVENTS & SPECIAL PROGRAMMES','Gather with purpose.','Find upcoming worship gatherings, conferences, family programmes and community activities.')}
  <section class="section-pad"><div class="container"><div class="section-heading-row">${sectionIntro('UPCOMING','Church calendar','Only confirmed programmes will appear here. Event registration will open when an organiser publishes an event.')}</div><div id="eventsList" class="content-grid three-col">${placeholder('No upcoming events published yet','When a programme is confirmed, its date, venue, registration information and details will appear here.')}</div><div class="past-events-note"><span class="eyebrow">PAST EVENTS</span><p>Approved event highlights and photographs will be added to the archive after review.</p></div></div></section>`;
}

function sermonsPage() {
  return `${pageHero('SERMONS & MEDIA','Grow through the Word.','A growing library of approved messages, audio resources and worship recordings from Balm of Gilead.')}
  <section class="section-pad"><div class="container"><div class="media-library-intro"><div><span class="eyebrow">MEDIA LIBRARY</span><h2>Truth to carry into every day.</h2><p>Search, watch and listen to messages as they are published by the church media team.</p></div><div class="media-library-mark">${icon('book')}</div></div><div class="filter-bar"><span>Browse messages</span><select id="sermonFilter"><option value="all">All messages</option><option value="video">Video</option><option value="audio">Audio</option></select></div><div id="sermonsList" class="content-grid three-col">${placeholder('Sermons will be added soon','There are no approved sermon recordings in the library yet. We will not display sample or non-working media.')}</div><div class="notice-card subtle"><strong>Livestream</strong><p>A live broadcast will appear here only when an authorised Balm of Gilead streaming channel and broadcast link have been configured. No live stream is currently connected.</p></div></div></section>`;
}

function prayerPage() {
  return `${pageHero('PRAYER & COUNSELLING','You are not alone.','Whatever you are facing, there is room to reach out. We believe in the power of prayer and compassionate pastoral care.')}
  <section class="section-pad"><div class="container form-layout"><div class="form-aside"><span class="eyebrow">WE WOULD BE HONOURED TO PRAY WITH YOU</span><h2>Let us stand with you in prayer.</h2><p class="lead">You do not have to carry everything by yourself. Share as much or as little as you feel comfortable sharing.</p><blockquote>“Cast all your anxiety on him because he cares for you.”<cite>1 Peter 5:7</cite></blockquote><div class="privacy-note"><strong>Your privacy matters.</strong><p>Prayer and counselling submissions are private by default. They are not published publicly and should be accessible only to authorised pastoral personnel. Please avoid including unnecessary sensitive details.</p></div></div><div>${formShell('prayer_request','Share a prayer request','A pastoral team member can follow up using the contact method you select.')}</div></div></section>`;
}

function testimoniesPage() {
  return `${pageHero('TESTIMONIES','Stories of grace, hope and God’s faithfulness.','A place to celebrate what God has done, with care for the people sharing each story.')}
  <section class="section-pad"><div class="container"><div class="section-intro center"><span class="eyebrow">SHARED WITH PERMISSION</span><h2>Your story can encourage someone.</h2><p>Only testimonies reviewed and approved by an administrator will appear publicly. Contributors’ consent and privacy will always be respected.</p></div>${placeholder('No approved testimonies published yet','Approved written and video testimonies will appear here when the church has permission to share them.')}<div class="testimony-submit-wrap">${formShell('testimony','Share your testimony','Submitting a testimony does not mean it will be published. The church will review it and ask for any required permission before sharing.')}</div></div></section>`;
}

function galleryPage() {
  return `${pageHero('GALLERY','Moments from our life together.','A visual record of worship, fellowship, service and special moments at Balm of Gilead.')}
  <section class="section-pad"><div class="container"><div class="notice-card"><strong>Official church gallery</strong><p>Church photographs have not yet been supplied. This gallery will display only images uploaded and approved by authorised church administrators, with captions and appropriate consent.</p></div><div class="gallery-categories">${['Sunday Worship','Special Services','Conferences','Youth Activities','Children’s Activities','Women’s Programmes','Men’s Programmes','Evangelism','Community Outreach','Church Celebrations'].map((x,i)=>`<div class="gallery-category"><span>0${i+1}</span><strong>${x}</strong><small>PHOTOS TO BE ADDED</small></div>`).join('')}</div></div></section>`;
}

function givePage() {
  return `${pageHero('GIVE & PARTNER','Giving is an act of worship and generosity.','Thank you for considering a gift to support the ministry and work of Balm of Gilead.')}
  <section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">GIVE WITH CONFIDENCE</span><h2>Supporting the work of the Gospel.</h2><p class="lead">Giving supports the ministry, care and approved activities of the church. We are committed to handling every gift responsibly and transparently.</p><div class="giving-categories">${[['Tithes','A personal expression of faithfulness and worship.'],['Offerings','Voluntary giving in support of the church’s ministry.'],['Missions & Evangelism','Supporting the sharing of the Gospel.'],['Welfare & Community Care','Helping support approved care and outreach initiatives.'],['Approved Projects','Contributing to church projects formally announced by leadership.']].map(([t,d],i)=>`<article><span>0${i+1}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div><div class="notice-card"><strong>Verified giving channels are being configured.</strong><p>No bank details, account numbers, payment links or payment instructions will be displayed until they are formally verified and approved by church leadership. Please contact the church office through an official channel to confirm current arrangements. Never send card information through this website.</p></div></div></section>`;
}

function visitPage() {
  return `${pageHero('PLAN YOUR VISIT','We look forward to welcoming you.','Whether you are exploring faith, returning to church or looking for a church family, you are welcome at Balm of Gilead.')}
  <section class="section-pad"><div class="container visit-grid"><div class="visit-copy"><span class="eyebrow">YOUR FIRST VISIT</span><h2>Come as you are.<br>There is room for you.</h2><p class="lead">We want your first experience to feel welcoming and easy. Our team will be glad to help you find your way and answer your questions.</p><div class="visit-facts"><article><span>01</span><div><strong>Service times</strong><p>Current days and times are being confirmed. Please contact the church office before travelling.</p></div></article><article><span>02</span><div><strong>Location & directions</strong><p>The official church address and map pin will be added after verification.</p></div></article><article><span>03</span><div><strong>What should I wear?</strong><p>Come in comfortable, respectful clothing. You do not need special attire to visit.</p></div></article><article><span>04</span><div><strong>Children & accessibility</strong><p>Please contact the church office to confirm available facilities and support.</p></div></article></div></div><div class="visit-form-panel">${formShell('visitor','Let us know you are coming','Share a few details so the welcome team can help make your visit easier.')}</div></div></section><section class="section-pad soft-bg"><div class="container split-content"><div><span class="eyebrow">FIND US</span><h2>Our doors are open.</h2><p>The church address and verified map location will be published here as soon as they are confirmed.</p></div><div class="map-placeholder"><span>${icon('pin')}</span><strong>Church location awaiting confirmation</strong><small>Map integration will be enabled once the official address is supplied.</small></div></div></section>`;
}

function houseFellowshipPage() {
  return `${pageHero('HOUSE FELLOWSHIP','Faith grows in community.','Discover smaller fellowship gatherings for prayer, Scripture, encouragement and mutual care.')}
  <section class="section-pad"><div class="container"><div class="notice-card"><strong>House Fellowship directory</strong><p>Locations, leaders, meeting days and contact details will be published after confirmation. No fellowship groups or addresses have been assumed.</p></div><div class="directory-controls"><input type="search" id="fellowshipSearch" placeholder="Search location or fellowship name" aria-label="Search fellowships" disabled><span>Directory details not yet available</span></div>${placeholder('Fellowship locations will be listed here','An editable directory will be available to administrators once the local groups and their details have been confirmed.')}</div></section>`;
}

function newsPage() {
  return `${pageHero('NEWS & ANNOUNCEMENTS','Stay connected with church life.','Important updates, programme notices and stories from Balm of Gilead.')}
  <section class="section-pad"><div class="container"><div class="filter-bar"><span>Latest updates</span><span class="muted">Approved church announcements only</span></div><div id="newsList" class="content-grid three-col">${placeholder('No announcements published yet','Verified notices and news articles will appear here when approved by an administrator.')}</div></div></section>`;
}

function contactPage() {
  return `${pageHero('CONTACT BALM OF GILEAD','We would love to hear from you.','Reach out with a question, an enquiry or a request for support.')}
  <section class="section-pad"><div class="container contact-grid"><div><span class="eyebrow">GET IN TOUCH</span><h2>Let’s start a conversation.</h2><p class="lead">Whether you have a question about visiting, a ministry, an event or pastoral support, use the form and the appropriate team can follow up.</p><div class="contact-detail-list"><article><span>VISIT</span><strong>Church address</strong><small>To be confirmed by church leadership</small></article><article><span>CALL</span><strong>Telephone / WhatsApp</strong><small>Official contact number to be added</small></article><article><span>EMAIL</span><strong>Church email</strong><small>Official email address to be added</small></article><article><span>SOCIAL</span><strong>Social media</strong><small>Verified church accounts to be connected</small></article></div></div><div>${formShell('contact','Send an enquiry','Choose the topic that best describes your message.','<label>Enquiry type<select name="enquiry_type"><option value="general">General enquiry</option><option value="pastoral">Pastoral support</option><option value="event">Event enquiry</option><option value="ministry">Ministry enquiry</option><option value="other">Other</option></select></label><div class="field-row"><label>Full name<input name="full_name" required maxlength="120" autocomplete="name"></label><label>Email address<input name="email" type="email" maxlength="180" autocomplete="email"></label></div><label>Phone number <span class="optional">(optional)</span><input name="phone" maxlength="40" autocomplete="tel"></label><label>Your message<textarea name="message" required rows="5" maxlength="4000"></textarea></label><label class="honeypot" aria-hidden="true">Leave empty<input name="website" tabindex="-1" autocomplete="off"></label><label class="consent"><input type="checkbox" name="consent" required><span>I agree that the church may use these details to respond to my enquiry.</span></label><button class="btn btn-primary submit-btn" type="submit">Send enquiry <span>'+icon('arrow')+'</span></button><p class="form-feedback" aria-live="polite"></p>')}</div></div></section>`;
}

function privacyPage() {
 return `${pageHero('PRIVACY NOTICE','Your information deserves care.','How information submitted through this website is intended to be handled.')}
 <section class="section-pad"><div class="container narrow-copy"><h2>Privacy and personal information</h2><p>This website is being prepared for Balm of Gilead RCCG Area Church. The church must review and approve this notice, identify its responsible data contact and confirm its retention practices before public launch.</p><h3>Information you submit</h3><p>Forms may collect your name, contact information and the message you choose to send. Prayer requests, counselling messages and other sensitive enquiries are private by default and must be restricted to authorised personnel.</p><h3>Use and access</h3><p>Information should be used only for the purpose described by the form, shared only with authorised church personnel and retained only for an approved period. It must not be published as a testimony or public story without explicit permission.</p><h3>Payments</h3><p>This website does not collect or store card details. Any future giving integration must use an approved payment provider and verified church payment details.</p><div class="notice-card"><strong>Publication status: draft for church review</strong><p>This notice is not legal advice and should be reviewed by the church’s responsible leadership or legal adviser before the website is publicly launched.</p></div></div></section>`;
}

function adminPage() {
 return `${pageHero('ADMINISTRATION','Church website administration.','Secure access for authorised Balm of Gilead administrators.')}
 <section class="section-pad"><div class="container admin-wrap"><div class="admin-intro"><span class="eyebrow">RESTRICTED AREA</span><h2>Manage the church website.</h2><p>Access is limited to users who have been created and approved in the church’s authentication system. There is no public registration.</p></div><div id="adminMount"><form class="form-card admin-login" id="adminLogin"><div class="form-heading"><span class="eyebrow">AUTHORised ACCESS</span><h2>Administrator sign in</h2><p>Use your approved administrator account. Do not share your password.</p></div><label>Email address<input name="email" type="email" required autocomplete="username"></label><label>Password<input name="password" type="password" required autocomplete="current-password"></label><button class="btn btn-primary submit-btn">Sign in securely <span>${icon('arrow')}</span></button><p class="form-feedback" aria-live="polite"></p></form></div></div></section>`;
}

function notFoundPage() { return `${pageHero('PAGE NOT FOUND','We can’t find that page.','The page may have moved or the address may be incorrect.')}<section class="section-pad"><div class="container center">${button('Return home','/','btn btn-dark')}</div></section>`; }

const pageTitles = {
'/':'Balm of Gilead | RCCG Area Church','/about':'About Us | Balm of Gilead','/leadership':'Our Leadership | Balm of Gilead',
'/ministries':'Ministries | Balm of Gilead','/services':'Services & Programmes | Balm of Gilead','/events':'Events | Balm of Gilead',
'/sermons':'Sermons & Media | Balm of Gilead','/prayer':'Prayer & Counselling | Balm of Gilead','/testimonies':'Testimonies | Balm of Gilead',
'/gallery':'Gallery | Balm of Gilead','/give':'Giving | Balm of Gilead','/visit':'Plan Your Visit | Balm of Gilead',
'/house-fellowship':'House Fellowship | Balm of Gilead','/news':'News & Announcements | Balm of Gilead','/contact':'Contact | Balm of Gilead',
'/privacy':'Privacy Notice | Balm of Gilead','/admin':'Website Administration | Balm of Gilead'
};

function render() {
 const path=decodeURIComponent(location.pathname.replace(/\/$/,'')||'/');
 let content='';
 if(path==='/') content=homePage();
 else if(path==='/about') content=aboutPage();
 else if(path==='/leadership') content=leadershipPage();
 else if(path==='/ministries') content=ministriesPage();
 else if(path.startsWith('/ministries/')) content=ministryDetail(path.split('/').pop());
 else if(path==='/services') content=servicesPage();
 else if(path==='/events') content=eventsPage();
 else if(path==='/sermons') content=sermonsPage();
 else if(path==='/prayer') content=prayerPage();
 else if(path==='/testimonies') content=testimoniesPage();
 else if(path==='/gallery') content=galleryPage();
 else if(path==='/give') content=givePage();
 else if(path==='/visit') content=visitPage();
 else if(path==='/house-fellowship') content=houseFellowshipPage();
 else if(path==='/news') content=newsPage();
 else if(path==='/contact') content=contactPage();
 else if(path==='/privacy') content=privacyPage();
 else if(path==='/admin') content=adminPage();
 else content=notFoundPage();
 document.title=pageTitles[path] || (path.startsWith('/ministries/')?'Ministry | Balm of Gilead':'Balm of Gilead | RCCG Area Church');
 document.getElementById('app').innerHTML=header()+`<main id="mainContent">${content}</main>`+footer();
 bindUI();
 if(path==='/events'||path==='/') loadContent('events',path==='/'?'homeEvents':'eventsList');
 if(path==='/sermons') loadContent('sermons','sermonsList');
 if(path==='/news') loadContent('announcements','newsList');
 if(path==='/admin') bindAdmin();
 window.scrollTo({top:0,behavior:'instant'});
}

function bindUI() {
 document.querySelectorAll('[data-link]').forEach(a=>a.addEventListener('click',e=>{
   const url=new URL(a.href,location.origin);
   if(url.origin===location.origin){e.preventDefault();history.pushState({},'',url.pathname);closeMobile();render();}
 }));
 const toggle=document.querySelector('.mobile-menu-toggle'), close=document.querySelector('.mobile-menu-close'), mobile=document.querySelector('.mobile-nav');
 toggle?.addEventListener('click',()=>{mobile.classList.add('open');mobile.setAttribute('aria-hidden','false');toggle.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');});
 close?.addEventListener('click',closeMobile);
 document.querySelector('.nav-more-button')?.addEventListener('click',e=>{const box=e.currentTarget.closest('.nav-more');box.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',box.classList.contains('open')?'true':'false');});
 document.querySelectorAll('[data-submit-form]').forEach(form=>form.addEventListener('submit',submitForm));
}
function closeMobile(){document.querySelector('.mobile-nav')?.classList.remove('open');document.querySelector('.mobile-nav')?.setAttribute('aria-hidden','true');document.querySelector('.mobile-menu-toggle')?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');}
window.addEventListener('popstate',render);

async function submitForm(event) {
 event.preventDefault();
 const form=event.currentTarget, btn=form.querySelector('button[type="submit"]'), feedback=form.querySelector('.form-feedback');
 const data=Object.fromEntries(new FormData(form).entries());
 if(!data.consent){feedback.textContent='Please confirm the privacy notice before submitting.';return;}
 delete data.consent;
 const type=form.dataset.type;
 btn.disabled=true;btn.textContent='Sending securely…';feedback.className='form-feedback';feedback.textContent='';
 try {
   const res=await fetch('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type,...data})});
   const json=await res.json();
   if(!res.ok) throw new Error(json.error||'Your message could not be sent at this time.');
   form.reset();feedback.className='form-feedback success';feedback.textContent='Thank you. Your message has been received securely.';
 } catch(err) {
   feedback.className='form-feedback error';feedback.textContent=err.message.includes('not configured')?'Online submissions are not yet enabled. Please contact the church office through a verified channel.':err.message;
 } finally {btn.disabled=false;btn.innerHTML='Send securely <span>'+icon('arrow')+'</span>';}
}

function cardFromContent(item, type) {
 const title=escapeHTML(item.title||'Untitled');
 const summary=escapeHTML(item.summary||item.data?.summary||'');
 const date=item.starts_at?new Date(item.starts_at).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'}):'Details to be announced';
 const href=type==='events'?'/events/'+encodeURIComponent(item.slug||item.id):type==='sermons'?'/sermons/'+encodeURIComponent(item.slug||item.id):'/news/'+encodeURIComponent(item.slug||item.id);
 return `<article class="content-card"><span class="card-kicker">${type==='events'?'CHURCH EVENT':type==='sermons'?'SERMON':'CHURCH UPDATE'} · ${date}</span><h3>${title}</h3><p>${summary}</p><span class="status-pill">PUBLISHED</span></article>`;
}

async function loadContent(type, targetId) {
 const target=document.getElementById(targetId);if(!target)return;
 try{
  const res=await fetch('/api/content?type='+encodeURIComponent(type));
  if(!res.ok) throw new Error('not available');
  const json=await res.json();
  if(json.configured===false||!json.items?.length) return;
  target.innerHTML=json.items.map(item=>cardFromContent(item,type)).join('');
 }catch(_){/* The intentional empty state remains visible when no approved public content is configured. */}
}

function bindAdmin() {
 const mount=document.getElementById('adminMount'), form=document.getElementById('adminLogin');
 if(!form)return;
 form.addEventListener('submit',async e=>{
  e.preventDefault();const feedback=form.querySelector('.form-feedback'),btn=form.querySelector('button');
  feedback.textContent='Checking your access…';btn.disabled=true;
  const values=Object.fromEntries(new FormData(form).entries());
  try{
   const res=await fetch('/api/admin',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'sign_in',...values})});
   const data=await res.json();if(!res.ok)throw new Error(data.error||'Sign in failed.');
   sessionStorage.setItem('balmAdminToken',data.access_token);
   showAdminDashboard(mount,data);
  }catch(err){feedback.className='form-feedback error';feedback.textContent=err.message;}
  finally{btn.disabled=false;}
 });
 const token=sessionStorage.getItem('balmAdminToken');
 if(token) adminRequest({action:'dashboard'}).then(data=>showAdminDashboard(mount,data)).catch(()=>sessionStorage.removeItem('balmAdminToken'));
}
async function adminRequest(body) {
 const token=sessionStorage.getItem('balmAdminToken');
 const res=await fetch('/api/admin',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify(body)});
 const data=await res.json();if(!res.ok)throw new Error(data.error||'Unable to complete the request.');return data;
}
function showAdminDashboard(mount,data) {
 mount.innerHTML=`<div class="admin-dashboard"><div class="admin-dash-top"><div><span class="eyebrow">AUTHORISED ADMINISTRATION</span><h2>Welcome to the dashboard.</h2><p>Signed in as ${escapeHTML(data.user?.email||'authorised administrator')} · ${escapeHTML(data.role||'administrator')}</p></div><button class="btn btn-outline-dark" id="adminSignOut">Sign out</button></div><div class="admin-stat-grid">${[['Content items',data.counts?.content||0],['New submissions',data.counts?.new_submissions||0],['Upcoming events',data.counts?.events||0],['Published sermons',data.counts?.sermons||0]].map(([l,v])=>`<div><span>${l}</span><strong>${v}</strong></div>`).join('')}</div><div class="admin-workspace"><div><h3>Website content</h3><p>Manage approved church updates and public content. Do not add unverified details or publish testimonies without consent.</p><button class="btn btn-dark" id="refreshAdmin">Refresh dashboard</button></div><div><h3>Recent private submissions</h3><p>Prayer requests and counselling enquiries are private. Access them only when your assigned role permits it.</p><div id="adminSubmissionList" class="admin-submissions">${(data.recent_submissions||[]).length?(data.recent_submissions||[]).map(x=>`<article><strong>${escapeHTML(x.submission_type)}</strong><span>${escapeHTML(x.created_at||'')}</span><small>${escapeHTML(x.status||'new')}</small></article>`).join(''):'No recent submissions.'}</div></div></div><p class="admin-footnote">This dashboard requires a configured Supabase project and an active administrator record. Access is validated server-side.</p></div>`;
 document.getElementById('adminSignOut')?.addEventListener('click',()=>{sessionStorage.removeItem('balmAdminToken');render();});
 document.getElementById('refreshAdmin')?.addEventListener('click',async e=>{e.currentTarget.disabled=true;try{const fresh=await adminRequest({action:'dashboard'});showAdminDashboard(mount,fresh);}catch(err){alert(err.message);} });
}

render();
