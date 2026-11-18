import './styles.css';

const A = {
  church: 'Balm of Galid',
  area: 'Balm of Galid Area',
  zone: 'Alpha Zone',
  province: 'Lagos Province 62',
  region: 'Region 64',
  pastor: 'Pastor Ajetunmobi Adegbola',
  address: '19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria',
  denomination: 'The Redeemed Christian Church of God',
  tagline: 'Where Healing, Hope, Faith and Restoration Meet.',
  supportingMessage: 'A Place of Worship. A Family of Faith. A Community of Transformation.',
  biblicalInspiration: 'Jeremiah 8:22',
  description: 'Balm of Galid is committed to preaching the Gospel of Jesus Christ, raising spiritually mature believers, promoting holiness, strengthening families, encouraging purposeful Christian living and extending God’s love to the surrounding community.',
  heroImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2200&q=85',
  worshipImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85'
};

const nav = [
  ['Home','/'], ['About Us','/about'], ['Leadership','/leadership'],
  ['Ministries','/ministries'], ['Worship & Services','/services'], ['Events','/events'],
  ['Media Centre','/sermons'], ['Prayer & Counselling','/prayer'], ['Testimonies','/testimonies'],
  ['Gallery','/gallery'], ['Give','/give'], ['Contact','/contact']
];

const departments = [
  ['Men’s Fellowship — RCCG Men of Valor','Encouraging men to grow in Christ, lead with integrity and serve their families and community.','men'],
  ['Women’s Fellowship — RCCG Women of Royal Heritage','Building faith, strengthening families and creating room for meaningful Christian fellowship.','women'],
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
  ['House Fellowship','Creating smaller communities for prayer, Scripture, friendship and mutual care.','house-fellowship'],
  ['Workers & Ministers','Supporting the spiritual care, organisation and faithful service of the church.','workers-ministers']
];

const schedules = [
  ['Sunday Celebration Service','Every Sunday','8:00 AM','Our principal weekly gathering for worship, biblical teaching, prayer and fellowship.'],
  ['Digging Deep — Bible Study','Every Tuesday','6:00 PM – 7:00 PM','A focused time to explore Scripture, deepen biblical understanding and grow in faith.'],
  ['Faith Clinic — Prayer Meeting','Every Thursday','6:00 PM – 7:00 PM','A dedicated gathering for corporate prayer, intercession and spiritual encouragement.'],
  ['Monthly Night Vigil','Every third Friday','From 10:00 PM','A monthly night of prayer and seeking God. The official programme name and closing time will be added when confirmed.'],
  ['First-Day Monthly Programme','First day of each month','6:30 AM – 7:30 PM · Pending confirmation','The time range supplied by the church is displayed as pending final confirmation by the Area Church.']
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
    <a class="brand" href="/" data-link aria-label="Balm of Galid home"><span class="brand-mark brand-logo"><img src="/ded59337f6160d98bafc458b0645ed02-removebg-preview.png" alt="" /></span><span class="brand-copy"><strong>BALM OF GALID</strong><small>RCCG AREA CHURCH</small></span></a>
    <nav class="desktop-nav" aria-label="Main navigation">
      ${nav.slice(0,6).map(([n,h])=>`<a href="${h}" data-link>${n}</a>`).join('')}
      <div class="nav-more"><button class="nav-more-button" type="button" aria-expanded="false">More <span>⌄</span></button><div class="nav-dropdown">${nav.slice(6).map(([n,h])=>`<a href="${h}" data-link>${n}</a>`).join('')}<a href="/news" data-link>News & Updates</a><a href="/house-fellowship" data-link>House Fellowship</a></div></div>
    </nav>
    <a class="header-visit" href="/visit" data-link>Plan Your Visit <span>${icon('arrow')}</span></a>
    <button class="mobile-menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu')}</button>
  </div>
  <div class="mobile-nav" aria-hidden="true"><div class="mobile-nav-top"><span>Explore Balm of Galid</span><button class="mobile-menu-close" aria-label="Close navigation">${icon('close')}</button></div>${[...nav,['Plan Your Visit','/visit'],['News & Updates','/news'],['House Fellowship','/house-fellowship']].map(([n,h])=>`<a href="${h}" data-link>${n}<span>↗</span></a>`).join('')}</div></header>`;
}

function footer() {
  return `
  <section class="footer-invite"><div class="container invite-inner"><div><span class="eyebrow light">THERE IS A PLACE FOR YOU</span><h2>Your journey of faith<br>can begin today.</h2></div><div class="invite-actions">${button('Plan your visit','/visit','btn btn-cream')}${button('Request prayer','/prayer','btn btn-outline-light')}</div></div></section>
  <footer class="site-footer"><div class="container"><div class="footer-main">
    <div class="footer-brand"><a class="brand brand-light" href="/" data-link><span class="brand-mark brand-logo"><img src="/ded59337f6160d98bafc458b0645ed02-removebg-preview.png" alt="" /></span><span class="brand-copy"><strong>BALM OF GALID</strong><small>RCCG AREA CHURCH</small></span></a><p>A Christ-centred community of worship, prayer, biblical teaching, discipleship and service.</p><span class="footer-tagline">${A.tagline}</span></div>
    <div class="footer-col"><h4>Discover</h4><a href="/about" data-link>About us</a><a href="/leadership" data-link>Our leadership</a><a href="/ministries" data-link>Ministries</a><a href="/services" data-link>Services & programmes</a><a href="/events" data-link>Events</a></div>
    <div class="footer-col"><h4>Get connected</h4><a href="/sermons" data-link>Sermons & media</a><a href="/prayer" data-link>Prayer & counselling</a><a href="/testimonies" data-link>Testimonies</a><a href="/house-fellowship" data-link>House fellowship</a><a href="/give" data-link>Giving</a></div>
    <div class="footer-col"><h4>Visit & connect</h4><a href="/visit" data-link>Plan your visit</a><a href="/contact" data-link>Contact us</a><span class="muted">19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria</span><span class="muted">Sunday 8:00 AM · Tuesday 6:00–7:00 PM · Thursday 6:00–7:00 PM</span></div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Balm of Galid RCCG Area Church. All rights reserved.</span><div><a href="/privacy" data-link>Privacy notice</a><a href="/admin" data-link>Admin access</a></div></div></div></footer>`;
}

function homePage() {
  return `
  <section class="home-hero">
    <div class="home-hero-photo" role="img" aria-label="Illustrative photograph of a church worship gathering"></div>
    <div class="home-hero-overlay"></div>
    <div class="container home-hero-inner">
      <div class="home-hero-copy">
        <span class="hero-kicker"><i></i> THE REDEEMED CHRISTIAN CHURCH OF GOD · AREA CHURCH</span>
        <h1>Experience God’s presence.<br><em>Discover your purpose. Live transformed.</em></h1>
        <p>Welcome to Balm of Galid, a family of faith committed to worship, prayer, biblical teaching and the transformation of lives through Jesus Christ.</p>
        <div class="home-hero-actions">${button('Plan your first visit','/visit','btn btn-gold')}${button('Discover our church','/about','btn btn-ghost-light')}</div>
        <div class="hero-trust-line"><span>CHRIST-CENTRED</span><b>·</b><span>BIBLE-ROOTED</span><b>·</b><span>COMMUNITY-FOCUSED</span></div><div class="home-hero-location"><span>19, First Avenue, Ogijo, Ogun State</span><span>·</span><strong>Sunday Celebration · 8:00 AM</strong></div><p class="home-brand-promise">${A.supportingMessage}</p><small class="home-photo-note">Illustrative worship photography · approved church photography to follow</small>
      </div>
      <aside class="hero-welcome-card">
        <span class="welcome-card-icon">${icon('heart')}</span>
        <span class="eyebrow">YOU ARE WELCOME HERE</span>
        <strong>Come and experience the love of Christ.</strong>
        <a href="/visit" data-link>We would love to meet you <span>↗</span></a>
      </aside>
    </div>
    <a class="hero-scroll" href="#welcome" aria-label="Scroll to discover"><span></span> SCROLL TO DISCOVER</a>
  </section>

  <section class="home-welcome section-pad" id="welcome">
    <div class="container home-welcome-grid">
      <div class="welcome-photo-stack">
        <img class="welcome-photo-main" src="${A.worshipImage}" alt="Illustrative image of people connecting in community" loading="lazy">
        <div class="welcome-photo-note"><span>ONE CHURCH FAMILY</span><strong>Growing in faith.<br>Living in love.</strong></div>
        <span class="welcome-photo-index">01 — A PLACE TO GROW</span>
      </div>
      <div class="home-welcome-copy">
        <span class="eyebrow"><i class="eyebrow-line"></i> WELCOME TO BALM OF GALID</span>
        <h2>More than a service.<br><em>A family in Christ.</em></h2>
        <p class="welcome-lead">We believe church is a place to encounter God, discover purpose and walk through life with people who care.</p>
        <p>At Balm of Galid, we are committed to worship, biblical teaching, prayer, discipleship and practical service. Wherever you are on your journey of faith, we want to help you take your next step with Jesus.</p>
        <div class="welcome-signoff"><span class="signoff-rule"></span><span>FAITH · HOPE · RESTORATION</span></div>
        ${link('Get to know us','/about')}
      </div>
    </div>
  </section>

  <section class="pastor-welcome-section">
    <div class="container pastor-welcome-grid">
      <div class="pastor-portrait-placeholder" role="img" aria-label="Approved portrait of Pastor Ajetunmobi Adegbola to be added">
        <span>OFFICIAL PASTORAL PORTRAIT</span><strong>PA</strong><small>Photograph awaiting church approval</small>
      </div>
      <div class="pastor-welcome-copy">
        <span class="eyebrow">A WELCOME FROM OUR AREA PASTOR</span>
        <h2>Pastor Ajetunmobi Adegbola</h2>
        <p class="pastor-designation">Area Pastor · Balm of Galid Area</p>
        <p>We are delighted to welcome you to Balm of Galid. Our church is committed to preaching the Gospel of Jesus Christ, nurturing believers in faith, strengthening families and sharing God’s love with our community.</p>
        <p class="pastor-message-note">The Area Pastor’s personal welcome message and approved portrait will be published here following pastoral review.</p>
        ${link('Meet our leadership','/leadership')}
      </div>
    </div>
  </section>

  <section class="home-service-section">
    <div class="container home-service-panel">
      <div class="service-panel-intro">
        <span class="eyebrow light">MAKE ROOM FOR WORSHIP</span>
        <h2>Let’s worship<br><em>together.</em></h2>
        <p>We look forward to welcoming you. Check the confirmed service schedule before making your journey.</p>
        ${button('See service information','/services','btn btn-gold')}
      </div>
      <div class="service-panel-details">
        <div class="service-panel-top"><span>OUR WEEKLY GATHERING</span><span class="service-live-dot"></span></div>
        <div class="service-panel-day">SUN</div>
        <h3>Sunday Celebration Service</h3>
        <p>A time of worship, the Word, prayer and fellowship.</p>
        <div class="service-panel-meta"><span>TIME</span><strong>8:00 AM</strong></div>
        <div class="service-panel-meta"><span>LOCATION</span><strong>Ogijo, Ogun State</strong></div>
        <div class="service-other-days"><span>TUESDAY <b>Digging Deep · 6–7 PM</b></span><span>THURSDAY <b>Faith Clinic · 6–7 PM</b></span></div>
        <small class="service-confirm-note">Monthly Night Vigil: every third Friday from 10:00 PM. First-Day Monthly Programme: awaiting confirmation.</small>
      </div>
    </div>
  </section>

  <section class="home-ministries section-pad">
    <div class="container">
      <div class="home-section-heading">
        <div>${sectionIntro('FIND YOUR PLACE','There is a place for you here.','Faith is strengthened when we grow together. Discover a community where every generation can connect, serve and flourish.')}</div>
        ${link('Explore all ministries','/ministries')}
      </div>
      <div class="home-ministry-grid">
        <a class="home-ministry-card ministry-youth" href="/ministries/youth" data-link><img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85" alt="Young people gathered together" loading="lazy"><span class="ministry-card-shade"></span><span class="ministry-card-number">01 / GENERATIONS</span><span class="ministry-card-copy"><small>GROWING TOGETHER</small><strong>Youth & Teens</strong><i>Discover the ministry <b>↗</b></i></span></a>
        <a class="home-ministry-card ministry-women" href="/ministries/women" data-link><img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85" alt="Women and friends sharing community" loading="lazy"><span class="ministry-card-shade"></span><span class="ministry-card-number">02 / FELLOWSHIP</span><span class="ministry-card-copy"><small>FAITH & FRIENDSHIP</small><strong>Women’s Fellowship</strong><i>Discover the ministry <b>↗</b></i></span></a>
        <a class="home-ministry-card ministry-worship" href="/ministries/choir" data-link><img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85" alt="A vocalist performing on stage" loading="lazy"><span class="ministry-card-shade"></span><span class="ministry-card-number">03 / WORSHIP</span><span class="ministry-card-copy"><small>WORSHIP WITH PURPOSE</small><strong>Choir & Music</strong><i>Discover the ministry <b>↗</b></i></span></a>
        <a class="home-ministry-card ministry-care" href="/ministries/house-fellowship" data-link><img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85" alt="Friends gathered in fellowship" loading="lazy"><span class="ministry-card-shade"></span><span class="ministry-card-number">04 / COMMUNITY</span><span class="ministry-card-copy"><small>LIFE IN COMMUNITY</small><strong>House Fellowship</strong><i>Discover the ministry <b>↗</b></i></span></a>
      </div>
      <p class="home-image-disclaimer">Photography is illustrative and will be replaced with approved Balm of Galid ministry photographs.</p>
    </div>
  </section>

  <section class="home-purpose-band">
    <div class="purpose-band-image"></div><div class="purpose-band-shade"></div>
    <div class="container purpose-band-content">
      <span class="eyebrow light">OUR HEART BEYOND THE BUILDING</span>
      <h2>Worship that moves us.<br><em>Love that moves us to serve.</em></h2>
      <p>We want the hope we find in Jesus to be seen in how we care, encourage, serve and share the Gospel with the world around us.</p>
      ${button('Explore our mission','/about','btn btn-ghost-light')}
    </div>
  </section>

  <section class="home-next-steps section-pad">
    <div class="container">
      <div class="home-section-heading"><div>${sectionIntro('TAKE YOUR NEXT STEP','Faith is a journey. You don’t have to walk it alone.','Whether you are new to church or have been part of a church family for years, there is a next step waiting for you.')}</div></div>
      <div class="next-step-grid">
        <article class="next-step-card"><span class="next-step-no">01</span><span class="next-step-icon">${icon('users')}</span><h3>Plan a visit</h3><p>Thinking of joining us for a service? Let us help you feel at home from the moment you arrive.</p>${link('Plan your visit','/visit')}</article>
        <article class="next-step-card"><span class="next-step-no">02</span><span class="next-step-icon">${icon('heart')}</span><h3>Request prayer</h3><p>Whatever you are facing, you can share a prayer request with our authorised pastoral team.</p>${link('Let us pray with you','/prayer')}</article>
        <article class="next-step-card"><span class="next-step-no">03</span><span class="next-step-icon">${icon('book')}</span><h3>Grow in the Word</h3><p>Explore biblical messages and teaching resources to encourage your walk with Christ.</p>${link('Explore messages','/sermons')}</article>
      </div>
    </div>
  </section>

  <section class="home-events-section section-pad">
    <div class="container">
      <div class="home-section-heading">
        <div>${sectionIntro('LIFE AT BALM OF GALID','Gather. Celebrate. Grow.','Stay connected with church events, special programmes and opportunities to come together.')}</div>
        ${link('View all events','/events')}
      </div>
      <div id="homeEvents" class="content-grid three-col home-events-grid">${placeholder('Upcoming events','Approved event details will be published here as they are confirmed.')}</div>
    </div>
  </section>

  <section class="home-word-section">
    <div class="container home-word-grid">
      <div class="home-word-art"><span class="word-art-overline">THE WORD OF GOD</span><div class="word-art-quote">“</div><span class="word-art-reference">FAITH · TRUTH · LIFE</span></div>
      <div class="home-word-copy"><span class="eyebrow">LISTEN & BE ENCOURAGED</span><h2>Let the Word strengthen your walk.</h2><p>Make space for biblical teaching, encouragement and worship. Approved messages from Balm of Galid will be available in our media library.</p>${button('Visit sermons & media','/sermons','btn btn-dark')}</div>
    </div>
  </section>

  <section class="home-testimony-section">
    <div class="container home-testimony-inner"><div><span class="eyebrow light">GOD IS STILL AT WORK</span><h2>Every testimony tells<br>of His faithfulness.</h2><p>We celebrate what God is doing in people’s lives. Stories will only be shared with the contributor’s permission and church approval.</p>${button('Read testimonies','/testimonies','btn btn-gold')}</div><div class="testimony-symbol">“</div></div>
  </section>

  <section class="home-final-cta section-pad">
    <div class="container final-cta-panel"><div><span class="eyebrow light">YOUR PLACE IS HERE</span><h2>We can’t wait<br>to welcome you.</h2><p>Come worship with us, meet the church family and take your next step in faith.</p></div><div class="final-cta-actions">${button('Plan your visit','/visit','btn btn-gold')}${button('Get in touch','/contact','btn btn-ghost-light')}</div><span class="final-cta-cross">✳</span></div>
  </section>`;
}

function aboutPage() {
  return `${pageHero('ABOUT BALM OF GALID','A church family rooted in Christ and shaped by love.','Discover our purpose, our values and the faith that brings us together.')}
  <section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">OUR STORY</span><h2>Growing together in faith, hope and service.</h2><p class="lead">${A.description}</p><p>Balm of Galid is part of the wider family of The Redeemed Christian Church of God. As an Area Church, it carries a responsibility to nurture worship, discipleship, fellowship and service in its local expression of the Gospel.</p><div class="notice-card"><strong>Our history is being documented.</strong><p>The date of establishment, founding leadership, milestones and verified history will be added following review and approval by the Area Church leadership.</p></div></div></section>
  <section class="about-scripture-banner"><div class="container about-scripture-content"><span class="eyebrow light">OUR BIBLICAL INSPIRATION</span><h2>The Balm in Gilead.</h2><p>Jeremiah 8:22</p><small>The biblical image of healing and restoration inspires the heart behind the church’s name and message.</small></div></section>
  <section class="section-pad soft-bg"><div class="container"><div class="values-grid"><div>${sectionIntro('OUR VISION','A life transformed by Christ.','The church’s formal vision statement will be published in the wording approved by Area Church leadership.')}</div><div>${sectionIntro('OUR MISSION','Preach the Gospel. Raise disciples. Serve with love.','Preaching the Gospel of Jesus Christ, raising spiritually mature believers, promoting holiness, strengthening families and extending God’s love to the surrounding community.')}</div></div></div></section>
  <section class="section-pad"><div class="container"><div class="section-intro center"><span class="eyebrow">WHAT GUIDES US</span><h2>Values that shape our life together.</h2><p>These values reflect the commitments expressed in the church’s ministry brief; final wording may be reviewed by leadership.</p></div><div class="values-list">${[['Faith in God','Trusting God and seeking to live by faith.'],['Holiness & righteousness','Pursuing a life that honours God.'],['Love & compassion','Treating every person with dignity and care.'],['Prayer & worship','Making room for the presence of God in every season.'],['Biblical truth','Grounding faith and practice in Scripture.'],['Excellence in service','Serving faithfully, responsibly and wholeheartedly.'],['Unity & fellowship','Growing together as one family in Christ.'],['Evangelism & discipleship','Sharing the Gospel and helping people grow as followers of Jesus.']].map(([t,d],i)=>`<article><span>0${i+1}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div></div></section>
  <section class="section-pad soft-bg"><div class="container split-content"><div>${sectionIntro('OUR RCCG HERITAGE','Part of a wider family of faith.','Balm of Galid belongs to The Redeemed Christian Church of God, an international Christian denomination.')}
<p>Balm of Galid is an Area Church within the confirmed RCCG administrative structure shown here.</p></div><div class="hierarchy-card"><span>CONFIRMED RCCG ADMINISTRATIVE STRUCTURE</span><b>RCCG International Headquarters</b><i>↓</i><b>Region 64</b><i>↓</i><b>Lagos Province 62</b><i>↓</i><b>Alpha Zone</b><i>↓</i><strong>Balm of Galid Area</strong></div></div></section>
  <section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">WHAT WE BELIEVE</span><h2>Faith shaped by Scripture.</h2><p>Our statement of faith will be aligned with the official RCCG doctrinal statement and reviewed by church leadership before publication. The church affirms the centrality of the Bible and the Christian faith in Jesus Christ.</p><div class="notice-card"><strong>Doctrinal statement pending review</strong><p>The complete approved wording, including the church’s teaching on Scripture, the Trinity, salvation, the Holy Spirit, baptism, holiness, fellowship and the return of Christ, will be inserted here after verification against official RCCG materials.</p></div></div></section>`;
}

function leadershipPage() {
  return `${pageHero('OUR LEADERSHIP','Servant-hearted leadership.','Meet the pastors, ministers and leaders who serve the Balm of Galid church family.')}
  <section class="section-pad"><div class="container"><div class="section-intro center"><span class="eyebrow">AREA CHURCH LEADERSHIP</span><h2>Leadership is a calling to serve.</h2><p>We honour the people entrusted with spiritual care, guidance and service. Profiles will be published only after names, titles, photographs and biographies are approved.</p></div><div class="leader-feature"><div class="leader-photo-placeholder"><span>APPROVED PASTORAL<br>PORTRAIT<br>TO BE ADDED</span></div><div class="leader-info"><span class="eyebrow">AREA PASTOR</span><h2>Pastor Ajetunmobi Adegbola</h2><p class="lead">Area Pastor · Balm of Galid Area</p><p class="muted">The name and official designation have been supplied by the church. A verified biography, ministry background, personal welcome message and approved portrait will be added after pastoral review.</p><span class="status-pill">BIOGRAPHY & PORTRAIT AWAITING APPROVAL</span></div></div><div class="section-heading-row leader-team-head"><div><span class="eyebrow">CHURCH LEADERSHIP TEAM</span><h2>Serving together.</h2></div><p>Verified ministers, department leaders and administrative team members will be added by authorised administrators.</p></div><div id="leadershipList" class="content-grid three-col">${placeholder('Leadership directory is being prepared','No names, titles or biographies have been invented. Approved profiles will appear here.')}</div></div></section>`;
}

function ministriesPage() {
  return `${pageHero('MINISTRIES & DEPARTMENTS','Find your place to grow and serve.','Explore the ministry areas the church may use to support worship, discipleship, fellowship and community life.')}
  <section class="section-pad"><div class="container"><div class="notice-card"><strong>Ministry directory</strong><p>Only ministry records approved and published by authorised Balm of Galid administrators appear in this directory. Additional departments can be added after confirmation by church leadership.</p></div><div class="ministry-grid" id="ministryGrid">${departments.map(([title,desc,slug],i)=>`<a class="ministry-card" href="/ministries/${slug}" data-link><span class="ministry-number">MINISTRY 0${i+1}</span><span class="ministry-symbol">${icon(i%3===0?'users':i%3===1?'heart':'book')}</span><h3>${title}</h3><p>${desc}</p><span class="text-link">View details ${icon('arrow')}</span></a>`).join('')}</div></div></section>`;
}

function ministryDetail(slug) {
  const entry=departments.find(d=>d[2]===slug);
  if(!entry) return notFoundPage();
  return `${pageHero('MINISTRY DIRECTORY',escapeHTML(entry[0]),escapeHTML(entry[1]))}<section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">ABOUT THIS MINISTRY</span><h2>${escapeHTML(entry[0])}</h2><p class="lead">${escapeHTML(entry[1])}</p><div class="notice-card"><strong>Local ministry details pending confirmation</strong><p>The ministry’s active status, local vision, leadership, activities, meeting schedule, photographs and joining arrangements must be supplied and approved by Balm of Galid. This page is a structured placeholder until then.</p></div>${button('Return to ministries','/ministries','btn btn-dark')}</div></section>`;
}

function servicesPage() {
  return `${pageHero('WORSHIP & SERVICES','Make room for worship, the Word and prayer.','Explore Balm of Galid’s confirmed weekly gatherings and monthly programmes. Check the notes for the programme still awaiting final confirmation.')}
  <section class="section-pad"><div class="container"><div class="notice-card"><strong>Church schedule</strong><p>The weekly days and times below are supplied in the church brief. The first-day monthly programme is marked pending confirmation; please contact the church office before travelling for that programme.</p></div><div class="schedule-list" id="serviceScheduleList">${schedules.map(([title,day,time,desc],i)=>`<article class="schedule-row"><span class="schedule-index">0${i+1}</span><div><h3>${title}</h3><p>${desc}</p></div><div class="schedule-meta"><strong>${day}</strong><span>${time}</span></div></article>`).join('')}</div><div class="notice-card subtle"><strong>Additional programmes</strong><p>Holy Communion, Faith Clinic, anointing services, fasting and prayer, thanksgiving services and wider RCCG programmes will be listed only when their local schedule is confirmed.</p></div></div></section>`;
}

function contentDetailPage(kind) {
 const config={
  event:['EVENT DETAILS','One church family. Gathered together.','Programme information and registration details from Balm of Galid.'],
  sermon:['MESSAGE DETAILS','Grow through the Word.','Explore this approved message from Balm of Galid.'],
  news:['CHURCH UPDATE','News from our church family.','Read the full announcement from Balm of Galid.'],
  ministry:['MINISTRY DETAILS','A place to grow and serve.','Learn about this active ministry at Balm of Galid.'],
  leader:['LEADERSHIP PROFILE','Servant-hearted leadership.','An approved profile from Balm of Galid Area Church.']
 }[kind];
 return `${pageHero(config[0],config[1],config[2])}
 <section class="section-pad"><div class="container narrow-copy" id="contentDetailMount">${placeholder('Loading approved content','Please wait while this published item is retrieved.')}</div></section>`;
}

function eventsPage() {
  return `${pageHero('EVENTS & SPECIAL PROGRAMMES','Gather with purpose.','Find upcoming worship gatherings, conferences, family programmes and community activities.')}
  <section class="section-pad"><div class="container"><div class="section-heading-row">${sectionIntro('UPCOMING','Church calendar','Only confirmed programmes will appear here. Event registration will open when an organiser publishes an event.')}</div><div id="eventsList" class="content-grid three-col">${placeholder('No upcoming events published yet','When a programme is confirmed, its date, venue, registration information and details will appear here.')}</div><div class="past-events-note"><span class="eyebrow">PAST EVENTS</span><p>Approved event highlights and photographs will be added to the archive after review.</p></div></div></section>`;
}

function sermonsPage() {
  return `${pageHero('SERMONS & MEDIA','Grow through the Word.','A growing library of approved messages, audio resources and worship recordings from Balm of Galid.')}
  <section class="section-pad"><div class="container"><div class="media-library-intro"><div><span class="eyebrow">MEDIA LIBRARY</span><h2>Truth to carry into every day.</h2><p>Search, watch and listen to messages as they are published by the church media team.</p></div><div class="media-library-mark">${icon('book')}</div></div><div class="filter-bar"><span>Browse messages</span><select id="sermonFilter"><option value="all">All messages</option><option value="video">Video</option><option value="audio">Audio</option></select></div><div id="sermonsList" class="content-grid three-col">${placeholder('Sermons will be added soon','There are no approved sermon recordings in the library yet. We will not display sample or non-working media.')}</div><div class="notice-card subtle"><strong>Livestream</strong><p>A live broadcast will appear here only when an authorised Balm of Galid streaming channel and broadcast link have been configured. No live stream is currently connected.</p></div></div></section>`;
}

function prayerPage() {
  return `${pageHero('PRAYER & COUNSELLING','You are not alone.','Whatever you are facing, there is room to reach out. We believe in the power of prayer and compassionate pastoral care.')}
  <section class="section-pad"><div class="container form-layout"><div class="form-aside"><span class="eyebrow">WE WOULD BE HONOURED TO PRAY WITH YOU</span><h2>Let us stand with you in prayer.</h2><p class="lead">You do not have to carry everything by yourself. Share as much or as little as you feel comfortable sharing.</p><blockquote>“Cast all your anxiety on him because he cares for you.”<cite>1 Peter 5:7</cite></blockquote><div class="privacy-note"><strong>Your privacy matters.</strong><p>Prayer and counselling submissions are private by default. They are not published publicly and should be accessible only to authorised pastoral personnel. Please avoid including unnecessary sensitive details.</p></div></div><div>${formShell('prayer_request','Share a prayer request','A pastoral team member can follow up using the contact method you select.',"<label>Request category<select name='request_category'><option value='general'>General prayer</option><option value='family'>Family</option><option value='health'>Health and strength</option><option value='work'>Work or studies</option><option value='guidance'>Guidance and direction</option><option value='thanksgiving'>Thanksgiving</option><option value='other'>Other</option></select></label><div class='field-row'><label>Your name <span class='optional'>(optional)</span><input name='full_name' autocomplete='name' maxlength='120' placeholder='You may leave this blank'></label><label>Preferred response<select name='response_method'><option value='no-response'>No response needed</option><option value='email'>Email</option><option value='phone'>Phone</option><option value='whatsapp'>WhatsApp</option></select></label></div><div class='field-row'><label>Email address <span class='optional'>(optional)</span><input name='email' type='email' maxlength='180' placeholder='you@example.com'></label><label>Phone number <span class='optional'>(optional)</span><input name='phone' maxlength='40' placeholder='Your phone number'></label></div><label>Your prayer request<textarea name='message' rows='6' required maxlength='4000' placeholder='Share only what you feel comfortable sharing.'></textarea></label>")}</div></div></section>`;
}

function testimoniesPage() {
  return `${pageHero('TESTIMONIES','Stories of grace, hope and God’s faithfulness.','A place to celebrate what God has done, with care for the people sharing each story.')}
  <section class="section-pad"><div class="container"><div class="section-intro center"><span class="eyebrow">SHARED WITH PERMISSION</span><h2>Your story can encourage someone.</h2><p>Only testimonies reviewed and approved by an administrator will appear publicly. Contributors’ consent and privacy will always be respected.</p></div><div id="publishedTestimonies" class="content-grid three-col">${placeholder('No approved testimonies published yet','Approved written and video testimonies will appear here when the church has permission to share them.')}</div><div class="testimony-submit-wrap">${formShell('testimony','Share your testimony','Submitting a testimony does not mean it will be published. The church will review it and ask for any required permission before sharing.',"<label>Testimony title <span class='optional'>(optional)</span><input name='title' maxlength='180' placeholder='A short title for your story'></label><div class='field-row'><label>Your name <span class='optional'>(optional)</span><input name='full_name' maxlength='120' placeholder='Leave blank to submit anonymously'></label><label>Email address <span class='optional'>(optional)</span><input name='email' type='email' maxlength='180' placeholder='you@example.com'></label></div><label>Testimony category<select name='testimony_category'><option value='faith'>Faith and spiritual growth</option><option value='healing'>Healing and strength</option><option value='family'>Family</option><option value='provision'>Provision and work</option><option value='thanksgiving'>Thanksgiving</option><option value='other'>Other</option></select></label><label>Your story<textarea name='message' rows='6' required maxlength='4000' placeholder='Share your testimony here.'></textarea></label><label class='consent'><input type='checkbox' name='display_name'><span>I give permission for my name to appear with the testimony if it is approved for publication.</span></label>")}</div></div></section>`;
}

function galleryPage() {
  return `${pageHero('GALLERY','Moments from our life together.','A visual record of worship, fellowship, service and special moments at Balm of Galid.')}
  <section class="section-pad"><div class="container">
    <div class="notice-card"><strong>Official church gallery</strong><p>Only photographs uploaded and approved by authorised Balm of Galid administrators appear here. Select an image to view it in full size.</p></div>
    <div id="galleryList" class="gallery-grid">${placeholder('Church photographs will appear here','Approved photographs will be added by the church media team.')}</div>
    <dialog id="galleryLightbox" class="gallery-lightbox" aria-label="Church photograph viewer">
      <div class="gallery-lightbox-toolbar"><span id="galleryLightboxCounter">1 / 1</span><button type="button" id="galleryLightboxClose" aria-label="Close image viewer">✕</button></div>
      <button type="button" id="galleryLightboxPrev" class="gallery-lightbox-nav previous" aria-label="Previous photograph">‹</button>
      <figure><img id="galleryLightboxImage" alt=""><figcaption id="galleryLightboxCaption"></figcaption></figure>
      <button type="button" id="galleryLightboxNext" class="gallery-lightbox-nav next" aria-label="Next photograph">›</button>
    </dialog>
  </div></section>`;
}

function givePage() {
  return `${pageHero('GIVE & PARTNER','Giving is an act of worship and generosity.','Thank you for considering a gift to support the ministry and work of Balm of Galid.')}
  <section class="section-pad"><div class="container narrow-copy"><span class="eyebrow">GIVE WITH CONFIDENCE</span><h2>Supporting the work of the Gospel.</h2><p class="lead">Giving supports the ministry, care and approved activities of the church. We are committed to handling every gift responsibly and transparently.</p><div class="giving-categories">${[['Tithes','A personal expression of faithfulness and worship.'],['Offerings','Voluntary giving in support of the church’s ministry.'],['Missions & Evangelism','Supporting the sharing of the Gospel.'],['Welfare & Community Care','Helping support approved care and outreach initiatives.'],['Approved Projects','Contributing to church projects formally announced by leadership.']].map(([t,d],i)=>`<article><span>0${i+1}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div><div class="notice-card"><strong>Verified giving channels are being configured.</strong><p>No bank details, account numbers, payment links or payment instructions will be displayed until they are formally verified and approved by church leadership. Please contact the church office through an official channel to confirm current arrangements. Never send card information through this website.</p></div></div></section>`;
}

function visitPage() {
  return `${pageHero('PLAN YOUR VISIT','We look forward to welcoming you.','Whether you are exploring faith, returning to church or looking for a church family, you are welcome at Balm of Galid.')}
  <section class="section-pad"><div class="container visit-grid"><div class="visit-copy"><span class="eyebrow">YOUR FIRST VISIT</span><h2>Come as you are.<br>There is room for you.</h2><p class="lead">We want your first experience to feel welcoming and easy. Our team will be glad to help you find your way and answer your questions.</p><div class="visit-facts"><article><span>01</span><div><strong>Service times</strong><p>Sunday Celebration: 8:00 AM. Tuesday Digging Deep: 6:00–7:00 PM. Thursday Faith Clinic: 6:00–7:00 PM. Monthly Night Vigil: every third Friday from 10:00 PM. First-Day Monthly Programme: 6:30 AM–7:30 PM, pending confirmation.</p></div></article><article><span>02</span><div><strong>Location & directions</strong><p>19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria.</p></div></article><article><span>03</span><div><strong>What should I wear?</strong><p>Come in comfortable, respectful clothing. You do not need special attire to visit.</p></div></article><article><span>04</span><div><strong>Children & accessibility</strong><p>Please contact the church office to confirm available facilities and support.</p></div></article></div></div><div class="visit-form-panel">${formShell('visitor','Let us know you are coming','Share a few details so the welcome team can help make your visit easier.')}</div></div></section><section class="section-pad soft-bg"><div class="container split-content"><div><span class="eyebrow">FIND US</span><h2>Our doors are open.</h2><p>19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria.</p></div><div class="map-placeholder"><span>${icon('pin')}</span><strong>Find Balm of Galid</strong><small>19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria</small><a class="map-directions-link" href="https://www.google.com/maps/search/?api=1&query=19%2C%20First%20Avenue%2C%20Oshodi%20Oke%2C%20Jigaye%20Community%2C%20Ogijo%2C%20Ogun%20State%2C%20Nigeria" target="_blank" rel="noopener noreferrer">Open directions in Google Maps ↗</a></div></div></section>`;
}

function houseFellowshipPage() {
  return `${pageHero('HOUSE FELLOWSHIP','Faith grows in community.','Discover smaller fellowship gatherings for prayer, Scripture, encouragement and mutual care.')}
  <section class="section-pad"><div class="container"><div class="notice-card"><strong>House Fellowship directory</strong><p>Locations, leaders, meeting days and contact details will be published after confirmation. No fellowship groups or addresses have been assumed.</p></div><div class="directory-controls"><input type="search" id="fellowshipSearch" placeholder="Search location or fellowship name" aria-label="Search fellowships" disabled><span>Directory details not yet available</span></div><div id="fellowshipDirectory" class="content-grid three-col">${placeholder('Fellowship locations will be listed here','An editable directory will be available to administrators once the local groups and their details have been confirmed.')}</div></div></section>`;
}

function newsPage() {
  return `${pageHero('NEWS & ANNOUNCEMENTS','Stay connected with church life.','Important updates, programme notices and stories from Balm of Galid.')}
  <section class="section-pad"><div class="container"><div class="filter-bar"><span>Latest updates</span><span class="muted">Approved church announcements only</span></div><div id="newsList" class="content-grid three-col">${placeholder('No announcements published yet','Verified notices and news articles will appear here when approved by an administrator.')}</div></div></section>`;
}

function contactPage() {
  return `${pageHero('CONTACT BALM OF GALID','We would love to hear from you.','Reach out with a question, an enquiry or a request for support.')}
  <section class="section-pad"><div class="container contact-grid"><div><span class="eyebrow">GET IN TOUCH</span><h2>Let’s start a conversation.</h2><p class="lead">Whether you have a question about visiting, a ministry, an event or pastoral support, use the form and the appropriate team can follow up.</p><div class="contact-detail-list"><article><span>VISIT</span><strong>Church address</strong><small>19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria</small><a href="https://www.google.com/maps/search/?api=1&query=19%2C%20First%20Avenue%2C%20Oshodi%20Oke%2C%20Jigaye%20Community%2C%20Ogijo%2C%20Ogun%20State%2C%20Nigeria" target="_blank" rel="noopener noreferrer">Open Google Maps directions ↗</a></article><article><span>CALL</span><strong>Telephone / WhatsApp</strong><small>Official contact number to be added</small></article><article><span>EMAIL</span><strong>Church email</strong><small>Official email address to be added</small></article><article><span>SOCIAL</span><strong>Social media</strong><small>Verified church accounts to be connected</small></article></div></div><div>${formShell('contact','Send an enquiry','Choose the topic that best describes your message.','<label>Enquiry type<select name="enquiry_type"><option value="general">General enquiry</option><option value="pastoral">Pastoral support</option><option value="event">Event enquiry</option><option value="ministry">Ministry enquiry</option><option value="other">Other</option></select></label><div class="field-row"><label>Full name<input name="full_name" required maxlength="120" autocomplete="name"></label><label>Email address<input name="email" type="email" maxlength="180" autocomplete="email"></label></div><label>Phone number <span class="optional">(optional)</span><input name="phone" maxlength="40" autocomplete="tel"></label><label>Your message<textarea name="message" required rows="5" maxlength="4000"></textarea></label><label class="honeypot" aria-hidden="true">Leave empty<input name="website" tabindex="-1" autocomplete="off"></label><label class="consent"><input type="checkbox" name="consent" required><span>I agree that the church may use these details to respond to my enquiry.</span></label><button class="btn btn-primary submit-btn" type="submit">Send enquiry <span>'+icon('arrow')+'</span></button><p class="form-feedback" aria-live="polite"></p>')}</div></div></section>`;
}

function privacyPage() {
 return `${pageHero('PRIVACY NOTICE','Your information deserves care.','How information submitted through this website is intended to be handled.')}
 <section class="section-pad"><div class="container narrow-copy"><h2>Privacy and personal information</h2><p>This website is being prepared for Balm of Galid RCCG Area Church. The church must review and approve this notice, identify its responsible data contact and confirm its retention practices before public launch.</p><h3>Information you submit</h3><p>Forms may collect your name, contact information and the message you choose to send. Prayer requests, counselling messages and other sensitive enquiries are private by default and must be restricted to authorised personnel.</p><h3>Use and access</h3><p>Information should be used only for the purpose described by the form, shared only with authorised church personnel and retained only for an approved period. It must not be published as a testimony or public story without explicit permission.</p><h3>Payments</h3><p>This website does not collect or store card details. Any future giving integration must use an approved payment provider and verified church payment details.</p><div class="notice-card"><strong>Publication status: draft for church review</strong><p>This notice is not legal advice and should be reviewed by the church’s responsible leadership or legal adviser before the website is publicly launched.</p></div></div></section>`;
}

function termsPage() {
 return `${pageHero('TERMS OF USE','Using this website responsibly.','Important information about the Balm of Galid RCCG Area Church website and its online services.')}
 <section class="section-pad"><div class="container narrow-copy">
  <h2>About this website</h2>
  <p>This website is intended to share approved information about Balm of Galid RCCG Area Church, its worship gatherings, ministries, events, messages and community life. Website information may be updated by authorised church representatives.</p>
  <h3>Accuracy of information</h3>
  <p>Service arrangements, event information, ministry activities and other details may change. Please use the latest confirmed church announcement for time-sensitive information. Where a detail is marked pending confirmation, do not treat it as a final arrangement.</p>
  <h3>Forms and communication</h3>
  <p>When you submit a visitor enquiry, prayer request, counselling request, event registration, testimony or contact message, provide information you are comfortable sharing and that is accurate to the best of your knowledge. Submissions are reviewed by authorised personnel for the stated purpose. A submission does not guarantee a response within a particular time.</p>
  <h3>Prayer, counselling and pastoral support</h3>
  <p>Online forms are a way to contact the church and are not an emergency service. Where you or another person is in immediate danger, contact appropriate local emergency or professional support without waiting for a response through this website.</p>
  <h3>Media, photographs and testimonies</h3>
  <p>Church media and testimonies are published only when approved for sharing. Do not copy, redistribute or use photographs, recordings or written material in a way that violates the rights or privacy of contributors or the church.</p>
  <h3>Giving and payments</h3>
  <p>Only use giving instructions and payment channels that have been formally verified and announced by the church. This website does not ask visitors to send card details through a contact form or message.</p>
  <h3>Third-party services and links</h3>
  <p>Links to maps, video platforms, payment providers or other external websites are provided for convenience. Those services are governed by their own terms and privacy notices.</p>
  <h3>Changes to these terms</h3>
  <p>The church may update this page as the website and its services develop. The current version will be published here.</p>
  <div class="notice-card"><strong>Publication status: draft for church review</strong><p>These Terms of Use are a working draft, not legal advice. They must be reviewed and approved by the church’s responsible leadership and legal adviser before being treated as binding terms.</p></div>
 </div></section>`;
}

function adminPage() {
 return `${pageHero('ADMINISTRATION','Church website administration.','Secure access for authorised Balm of Galid administrators.')}
 <section class="section-pad"><div class="container admin-wrap"><div class="admin-intro"><span class="eyebrow">RESTRICTED AREA</span><h2>Manage the church website.</h2><p>Access is limited to users who have been created and approved in the church’s authentication system. There is no public registration.</p></div><div id="adminMount"><form class="form-card admin-login" id="adminLogin"><div class="form-heading"><span class="eyebrow">AUTHORised ACCESS</span><h2>Administrator sign in</h2><p>Use your approved administrator account. Do not share your password.</p></div><label>Email address<input name="email" type="email" required autocomplete="username"></label><label>Password<input name="password" type="password" required autocomplete="current-password"></label><button class="btn btn-primary submit-btn">Sign in securely <span>${icon('arrow')}</span></button><p class="form-feedback" aria-live="polite"></p></form></div></div></section>`;
}

function notFoundPage() { return `${pageHero('PAGE NOT FOUND','We can’t find that page.','The page may have moved or the address may be incorrect.')}<section class="section-pad"><div class="container center">${button('Return home','/','btn btn-dark')}</div></section>`; }

const pageTitles = {
'/':'Balm of Galid | RCCG Area Church','/about':'About Us | Balm of Galid','/leadership':'Our Leadership | Balm of Galid',
'/ministries':'Ministries | Balm of Galid','/services':'Services & Programmes | Balm of Galid','/events':'Events | Balm of Galid',
'/sermons':'Sermons & Media | Balm of Galid','/prayer':'Prayer & Counselling | Balm of Galid','/testimonies':'Testimonies | Balm of Galid',
'/gallery':'Gallery | Balm of Galid','/give':'Giving | Balm of Galid','/visit':'Plan Your Visit | Balm of Galid',
'/house-fellowship':'House Fellowship | Balm of Galid','/news':'News & Announcements | Balm of Galid','/contact':'Contact | Balm of Galid',
'/privacy':'Privacy Notice | Balm of Galid','/terms':'Terms of Use | Balm of Galid','/admin':'Website Administration | Balm of Galid'
};

const pageDescriptions = {
  '/':'Balm of Galid is an RCCG Area Church in Ogijo, Ogun State. Worship with us on Sunday at 8:00 AM, join Digging Deep and Faith Clinic, and connect with a welcoming church family.',
  '/about':'Learn about Balm of Galid, its Christian purpose, values and place within The Redeemed Christian Church of God, Region 64, Lagos Province 62 and Alpha Zone.',
  '/leadership':'Meet the leadership of Balm of Galid RCCG Area Church, including Area Pastor Pastor Ajetunmobi Adegbola.',
  '/ministries':'Explore ministry and fellowship opportunities at Balm of Galid RCCG Area Church in Ogijo, Ogun State.',
  '/services':'View Sunday Celebration, Tuesday Digging Deep, Thursday Faith Clinic and monthly programme information at Balm of Galid.',
  '/events':'Find confirmed events and programmes from Balm of Galid RCCG Area Church.',
  '/sermons':'Explore approved sermons, Bible teaching and media from Balm of Galid RCCG Area Church.',
  '/prayer':'Share a private prayer request or ask for pastoral support from Balm of Galid RCCG Area Church.',
  '/testimonies':'Read approved testimonies and share your story with Balm of Galid RCCG Area Church.',
  '/gallery':'Explore approved photographs of worship, fellowship, ministries and outreach at Balm of Galid.',
  '/give':'Learn about giving at Balm of Galid. Secure giving channels will appear only after official church verification.',
  '/visit':'Plan your visit to Balm of Galid RCCG Area Church at 19, First Avenue, Oshodi Oke, Jigaye Community, Ogijo, Ogun State, Nigeria.',
  '/house-fellowship':'Discover House Fellowship at Balm of Galid RCCG Area Church.',
  '/news':'Read verified news and announcements from Balm of Galid RCCG Area Church.',
  '/contact':'Contact Balm of Galid RCCG Area Church in Ogijo, Ogun State, Nigeria.',
  '/privacy':'Read the privacy notice for the Balm of Galid RCCG Area Church website.',
  '/terms':'Read the draft Terms of Use for the Balm of Galid RCCG Area Church website.',
  '/admin':'Secure administration sign-in for authorised Balm of Galid RCCG Area Church website administrators.'
};

function applyPageMetadata(path) {
  const title=pageTitles[path] || (path.startsWith('/ministries/')?'Ministry | Balm of Galid':'Balm of Galid | RCCG Area Church');
  const description=pageDescriptions[path] || 'Discover Balm of Galid RCCG Area Church in Ogijo, Ogun State, Nigeria.';
  document.title=title;
  const setMeta=(selector,attribute,value)=>{
    let node=document.querySelector(selector);
    if(!node){node=document.createElement('meta');document.head.appendChild(node);}
    node.setAttribute(attribute,value);
  };
  setMeta('meta[name="description"]','content',description);
  setMeta('meta[property="og:title"]','content',title);
  setMeta('meta[property="og:description"]','content',description);
  setMeta('meta[property="og:type"]','content','website');
  const canonical=document.querySelector('link[rel="canonical"]') || document.head.appendChild(document.createElement('link'));
  canonical.setAttribute('rel','canonical');
  canonical.setAttribute('href',new URL(path,window.location.origin).href);
  setMeta('meta[name="twitter:card"]','content','summary_large_image');
  setMeta('meta[name="twitter:title"]','content',title);
  setMeta('meta[name="twitter:description"]','content',description);
}

function render() {
 const path=decodeURIComponent(location.pathname.replace(/\/$/,'')||'/');
 let content='';
 if(path==='/') content=homePage();
 else if(path==='/about') content=aboutPage();
 else if(path==='/leadership') content=leadershipPage();
 else if(path==='/ministries') content=ministriesPage();
 else if(path.startsWith('/ministries/')) content=contentDetailPage('ministry');
 else if(path.startsWith('/leadership/')) content=contentDetailPage('leader');
 else if(path==='/services') content=servicesPage();
 else if(path==='/events') content=eventsPage();
 else if(path.startsWith('/events/')) content=contentDetailPage('event');
 else if(path==='/sermons') content=sermonsPage();
 else if(path.startsWith('/sermons/')) content=contentDetailPage('sermon');
 else if(path.startsWith('/news/')) content=contentDetailPage('news');
 else if(path==='/prayer') content=prayerPage();
 else if(path==='/testimonies') content=testimoniesPage();
 else if(path==='/gallery') content=galleryPage();
 else if(path==='/give') content=givePage();
 else if(path==='/visit') content=visitPage();
 else if(path==='/house-fellowship') content=houseFellowshipPage();
 else if(path==='/news') content=newsPage();
 else if(path==='/contact') content=contactPage();
 else if(path==='/privacy') content=privacyPage();
 else if(path==='/terms') content=termsPage();
 else if(path==='/admin') content=adminPage();
 else content=notFoundPage();
 applyPageMetadata(path);
 document.getElementById('app').innerHTML=header()+`<main id="mainContent">${content}</main>`+footer();
 bindUI();
 if(path==='/events'||path==='/') loadContent('events',path==='/'?'homeEvents':'eventsList');
 if(path==='/sermons') loadContent('sermons','sermonsList');
 if(path==='/news') loadContent('announcements','newsList');
 if(path==='/gallery') loadContent('gallery','galleryList');
 if(path==='/ministries') loadContent('ministries','ministryGrid');
 if(path==='/leadership') loadContent('leadership','leadershipList');
 if(path==='/services') loadContent('service_schedules','serviceScheduleList');
 if(path==='/testimonies') loadContent('testimonies','publishedTestimonies');
 if(path==='/house-fellowship') loadContent('house_fellowships','fellowshipDirectory');
 if(path.startsWith('/ministries/')) loadSingleContent('ministries',path.split('/').pop(),'contentDetailMount','ministry');
 if(path.startsWith('/leadership/')) loadSingleContent('leadership',path.split('/').pop(),'contentDetailMount','leader');
 if(path.startsWith('/events/')) loadSingleContent('events',path.split('/').pop(),'contentDetailMount','event');
 if(path.startsWith('/sermons/')) loadSingleContent('sermons',path.split('/').pop(),'contentDetailMount','sermon');
 if(path.startsWith('/news/')) loadSingleContent('announcements',path.split('/').pop(),'contentDetailMount','news');
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

function cardFromContent(item, type, index=0) {
 const title=escapeHTML(item.title||'Untitled');
 const summary=escapeHTML(item.summary||item.data?.summary||'');
 const data=item.data||{};
 const date=item.starts_at?new Date(item.starts_at).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'}):'Details to be announced';
 const slug=encodeURIComponent(item.slug||item.id);
 const image=safeHttpsUrl(data.image_url||data.cover_image_url||data.thumbnail_url);
 if(type==='gallery') {
  const galleryImage=safeHttpsUrl(data.image_url||data.url||data.photo_url);
  if(!galleryImage)return '';
  const caption=escapeHTML(data.caption||item.summary||item.title||'Balm of Galid church photograph');
  return `<button type="button" class="gallery-photo-card" data-gallery-open="${index}" aria-label="View photograph: ${caption}"><img src="${escapeHTML(galleryImage)}" alt="${caption}" loading="lazy"><span>${caption}</span></button>`;
 }
 if(type==='service_schedules') {
  const day=escapeHTML(data.day||data.frequency||'See programme details');
  const time=escapeHTML(data.time||'Time to be confirmed');
  return `<article class="schedule-row"><span class="schedule-index">•</span><div><h3>${title}</h3><p>${summary}</p></div><div class="schedule-meta"><strong>${day}</strong><span>${time}</span></div></article>`;
 }
 if(type==='house_fellowships') {
  return `<article class="content-card directory-card"><span class="card-kicker">HOUSE FELLOWSHIP</span><h3>${title}</h3><p>${summary}</p>${data.location?`<p><strong>Location:</strong> ${escapeHTML(data.location)}</p>`:''}${data.meeting_day?`<p><strong>Meeting:</strong> ${escapeHTML(data.meeting_day)} ${escapeHTML(data.meeting_time||'')}</p>`:''}${data.contact?`<p><strong>Contact:</strong> ${escapeHTML(data.contact)}</p>`:''}</article>`;
 }
 if(type==='testimonies') {
  const name=data.display_name_consent===true&&data.contributor_name?escapeHTML(data.contributor_name):'';
  return `<article class="content-card testimony-content-card"><span class="card-kicker">APPROVED TESTIMONY</span><h3>${title}</h3><p>${summary}</p>${name?`<span class="testimony-attribution">${name}</span>`:''}</article>`;
 }
 if(type==='ministries'||type==='leadership') {
  const href=type==='ministries'?'/ministries/'+slug:'/leadership/'+slug;
  const role=escapeHTML(data.role||data.designation||data.position||'');
  return `<a class="content-card content-card-link directory-profile-card" href="${href}" data-link>${image?`<img class="content-card-image" src="${escapeHTML(image)}" alt="" loading="lazy">`:''}<span class="card-kicker">${type==='ministries'?'ACTIVE MINISTRY':'CHURCH LEADERSHIP'}</span><h3>${title}</h3>${role?`<span class="profile-designation">${role}</span>`:''}<p>${summary}</p><span class="status-pill">VIEW PROFILE ↗</span></a>`;
 }
 const href=type==='events'?'/events/'+slug:type==='sermons'?'/sermons/'+slug:'/news/'+slug;
 const category=type==='events'?'CHURCH EVENT':type==='sermons'?'SERMON':'CHURCH UPDATE';
 return `<a class="content-card content-card-link" href="${href}" data-link>${image?`<img class="content-card-image" src="${escapeHTML(image)}" alt="" loading="lazy">`:''}<span class="card-kicker">${category} · ${date}</span><h3>${title}</h3><p>${summary}</p><span class="status-pill">VIEW DETAILS ↗</span></a>`;
}

function safeHttpsUrl(value) {
 try {
  const url=new URL(String(value||''));
  return url.protocol==='https:'?url.href:'';
 } catch(_){return '';}
}

function youtubeEmbed(value) {
 try {
  const url=new URL(String(value||''));
  let id='';
  if(url.hostname==='youtu.be') id=url.pathname.slice(1);
  else if(['youtube.com','www.youtube.com','m.youtube.com'].includes(url.hostname)) {
   id=url.searchParams.get('v')||url.pathname.match(/\/embed\/([^/]+)/)?.[1]||url.pathname.match(/\/shorts\/([^/]+)/)?.[1]||'';
  }
  return /^[A-Za-z0-9_-]{11}$/.test(id)?'https://www.youtube-nocookie.com/embed/'+id:'';
 } catch(_){return '';}
}

async function loadContent(type, targetId) {
 const target=document.getElementById(targetId);if(!target)return;
 try{
  const res=await fetch('/api/content?type='+encodeURIComponent(type));
  if(!res.ok) throw new Error('not available');
  const json=await res.json();
  if(json.configured===false||!json.items?.length) return;
  if(type==='gallery') {
   const items=json.items.filter(item=>safeHttpsUrl(item.data?.image_url||item.data?.url||item.data?.photo_url));
   if(!items.length)return;
   window.__balmGalleryItems=items;
   target.innerHTML=items.map((item,index)=>cardFromContent(item,type,index)).join('');
   target.querySelectorAll('[data-gallery-open]').forEach(button=>button.addEventListener('click',()=>openGalleryImage(Number(button.dataset.galleryOpen))));
   bindGalleryLightbox();
  } else {
   target.innerHTML=json.items.map(item=>cardFromContent(item,type)).join('');
   bindDynamicLinks(target);
  }
 }catch(_){/* The intentional empty state remains visible when no approved public content is configured. */}
}

function bindDynamicLinks(root) {
 root.querySelectorAll('a[data-link]').forEach(a=>a.addEventListener('click',e=>{
  const url=new URL(a.href,location.origin);
  if(url.origin===location.origin){e.preventDefault();history.pushState({},'',url.pathname);closeMobile();render();}
 }));
}

async function loadSingleContent(type, slug, targetId, kind) {
 const target=document.getElementById(targetId);if(!target)return;
 try {
  const res=await fetch('/api/content?type='+encodeURIComponent(type)+'&slug='+encodeURIComponent(slug));
  const json=await res.json();
  if(!res.ok||json.configured===false||!json.items?.length)throw new Error('not found');
  const item=json.items[0],data=item.data||{};
  const title=escapeHTML(item.title||'');
  const summary=escapeHTML(item.summary||'');
  const body=escapeHTML(item.body||'').replace(/\r?\n/g,'<br>');
  const image=safeHttpsUrl(data.image_url||data.cover_image_url||data.banner_url||data.thumbnail_url);
  const date=item.starts_at?new Date(item.starts_at).toLocaleString(undefined,{weekday:'long',day:'numeric',month:'long',year:'numeric',hour:'numeric',minute:'2-digit'}):'Date to be announced';
  let media='';
  if(kind==='sermon') {
   const youtube=youtubeEmbed(data.youtube_url||data.video_url);
   const videoCandidate=data.mp4_url||data.video_file_url||data.video_url||'';
   const videoUrl=safeHttpsUrl(videoCandidate);
   const directVideo=videoUrl&&/\.(mp4|webm|ogg)(?:$|[?#])/i.test(videoUrl)?videoUrl:'';
   const audio=safeHttpsUrl(data.audio_url||data.audio_file_url);
   if(youtube)media=`<div class="detail-video-frame"><iframe src="${escapeHTML(youtube)}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
   else if(directVideo)media=`<video class="detail-video" controls preload="metadata" src="${escapeHTML(directVideo)}">Your browser does not support the video element.</video>`;
   if(audio)media+=`<div class="detail-audio"><span class="eyebrow">LISTEN TO THIS MESSAGE</span><audio controls preload="none" src="${escapeHTML(audio)}">Your browser does not support the audio element.</audio></div>`;
  }
  let registration='';
  if(kind==='event'&&data.registration_enabled===true) {
   const fields=`<input type="hidden" name="event_slug" value="${escapeHTML(item.slug||slug)}"><input type="hidden" name="event_title" value="${title}"><div class="field-row"><label>Full name<input name="full_name" required maxlength="120" autocomplete="name"></label><label>Email address<input name="email" type="email" maxlength="180" autocomplete="email"></label></div><div class="field-row"><label>Phone number<input name="phone" required maxlength="40" autocomplete="tel"></label><label>Number attending<input name="attendee_count" type="number" min="1" max="20" value="1" required></label></div><label>Additional note <span class="optional">(optional)</span><textarea name="message" rows="3" maxlength="1000"></textarea></label>`;
   registration=`<div class="detail-registration">${formShell('event_registration','Register your interest','Complete this form to register for the programme.',fields)}</div>`;
  } else if(kind==='event') {
   registration='<div class="notice-card subtle"><strong>Registration information</strong><p>Online registration is not currently open for this event. Please follow the event announcement for further details.</p></div>';
  }
  const kindLabel=kind==='event'?'CHURCH EVENT':kind==='sermon'?'SERMON & MEDIA':kind==='ministry'?'MINISTRY PROFILE':kind==='leader'?'CHURCH LEADERSHIP':'CHURCH ANNOUNCEMENT';
  const backHref=kind==='event'?'/events':kind==='sermon'?'/sermons':kind==='ministry'?'/ministries':kind==='leader'?'/leadership':'/news';
  const backLabel=kind==='event'?'events':kind==='sermon'?'media centre':kind==='ministry'?'ministries':kind==='leader'?'leadership':'news';
  const meta=(kind==='event'||kind==='sermon')?`<div class="published-detail-meta"><span>${kind==='event'?'DATE & TIME':'MESSAGE DATE'}<strong>${date}</strong></span>${data.venue?`<span>VENUE<strong>${escapeHTML(data.venue)}</strong></span>`:''}${data.preacher?`<span>PREACHER<strong>${escapeHTML(data.preacher)}</strong></span>`:''}${data.scripture_reference?`<span>SCRIPTURE<strong>${escapeHTML(data.scripture_reference)}</strong></span>`:''}</div>`:'';
  target.innerHTML=`<article class="published-detail">${image?`<img class="published-detail-image" src="${escapeHTML(image)}" alt="${title}">`:''}<span class="eyebrow">${kindLabel}</span><h1>${title}</h1>${summary?`<p class="published-detail-summary">${summary}</p>`:''}${data.role||data.designation?`<p class="profile-designation">${escapeHTML(data.role||data.designation)}</p>`:''}${meta}${media}${body?`<div class="published-detail-body">${body}</div>`:''}${registration}<div class="detail-back-link"><a href="${backHref}" data-link>← Back to ${backLabel}</a></div></article>`;
  bindDynamicLinks(target);
  target.querySelectorAll('[data-submit-form]').forEach(form=>form.addEventListener('submit',submitForm));
 }catch(_){
  if(kind==='ministry') {
   const entry=departments.find(value=>value[2]===slug);
   target.innerHTML=entry
    ?`<article class="published-detail"><span class="eyebrow">MINISTRY DIRECTORY</span><h1>${escapeHTML(entry[0])}</h1><p class="published-detail-summary">${escapeHTML(entry[1])}</p><div class="notice-card"><strong>Local ministry details pending confirmation</strong><p>The active status, local leadership, activities, meeting schedule, photographs and joining arrangements must be supplied and approved by Balm of Galid.</p></div><div class="detail-back-link"><a href="/ministries" data-link>← Back to ministries</a></div></article>`
    :placeholder('This ministry page is unavailable','It may have been unpublished or the link may have changed.');
  } else {
   const back=kind==='leader'?'/leadership':kind==='event'?'/events':kind==='sermon'?'/sermons':'/news';
   target.innerHTML=placeholder('This item is unavailable','It may have been unpublished or the link may have changed.')+`<div class="detail-back-link"><a href="${back}" data-link>← Back</a></div>`;
  }
  bindDynamicLinks(target);
 }
}

function bindGalleryLightbox() {
 const dialog=document.getElementById('galleryLightbox');if(!dialog||dialog.dataset.bound)return;
 dialog.dataset.bound='true';
 const close=()=>{if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');};
 dialog.querySelector('#galleryLightboxClose').addEventListener('click',close);
 dialog.querySelector('#galleryLightboxPrev').addEventListener('click',()=>openGalleryImage((window.__balmGalleryIndex||0)-1));
 dialog.querySelector('#galleryLightboxNext').addEventListener('click',()=>openGalleryImage((window.__balmGalleryIndex||0)+1));
 dialog.addEventListener('click',e=>{if(e.target===dialog)close();});
 document.addEventListener('keydown',e=>{
  if(!dialog.open)return;
  if(e.key==='ArrowLeft')openGalleryImage((window.__balmGalleryIndex||0)-1);
  if(e.key==='ArrowRight')openGalleryImage((window.__balmGalleryIndex||0)+1);
 });
 let touchStart=0;
 dialog.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0]?.clientX||0;},{passive:true});
 dialog.addEventListener('touchend',e=>{
  const end=e.changedTouches[0]?.clientX||0,delta=end-touchStart;
  if(Math.abs(delta)>55)openGalleryImage((window.__balmGalleryIndex||0)+(delta<0?1:-1));
 },{passive:true});
}

function openGalleryImage(index) {
 const items=window.__balmGalleryItems||[];
 if(!items.length)return;
 const normalised=(index%items.length+items.length)%items.length;
 window.__balmGalleryIndex=normalised;
 const item=items[normalised],data=item.data||{},image=safeHttpsUrl(data.image_url||data.url||data.photo_url);
 const dialog=document.getElementById('galleryLightbox');if(!dialog||!image)return;
 const img=dialog.querySelector('#galleryLightboxImage');
 img.src=image;img.alt=item.title||'Balm of Galid church photograph';
 dialog.querySelector('#galleryLightboxCaption').textContent=data.caption||item.summary||item.title||'';
 dialog.querySelector('#galleryLightboxCounter').textContent=(normalised+1)+' / '+items.length;
 if(!dialog.open){if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');}
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
   const dashboard=await adminRequest({action:'dashboard'});
   showAdminDashboard(mount,dashboard);
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
 const role=String(data.role||'');
 const canManage=Boolean(data.permissions?.content);
 const canApprove=Boolean(data.permissions?.content_approval);
 const canViewPrivate=Boolean(data.permissions?.private_submissions);
 mount.innerHTML=`<div class="admin-dashboard">
  <div class="admin-dash-top"><div><span class="eyebrow">AUTHORISED ADMINISTRATION</span><h2>Welcome to the dashboard.</h2><p>Signed in as ${escapeHTML(data.user?.email||'authorised administrator')} · ${escapeHTML(role||'administrator')}</p></div><button class="btn btn-outline-dark" id="adminSignOut">Sign out</button></div>
  <div class="admin-stat-grid">
   ${[['Content items',data.counts?.content??0],['New submissions',canViewPrivate?(data.counts?.new_submissions??0):'Restricted'],['Upcoming events',data.counts?.events??0],['Published sermons',data.counts?.sermons??0]].map(([l,v])=>`<div><span>${l}</span><strong>${v}</strong></div>`).join('')}
  </div>
  ${canManage?'<section class="admin-module"><div class="admin-module-heading"><div><span class="eyebrow">CONTENT WORKSPACE</span><h3>Manage website content</h3><p>Create, update, publish and remove approved website records.</p></div></div><div id="adminContentManager"></div></section>':'<section class="admin-module"><h3>Website content</h3><p>Your account does not have permission to manage public website content.</p></section>'}
  ${canApprove?'<section class="admin-module"><div class="admin-module-heading"><div><span class="eyebrow">PASTORAL PUBLICATION REVIEW</span><h3>Review draft publications</h3><p>Approve drafts before they appear on public pages. Approval does not change the content itself.</p></div></div><div id="adminApprovalWorkspace"></div></section>':''}
  ${canViewPrivate?'<section class="admin-module"><div class="admin-module-heading"><div><span class="eyebrow">CONFIDENTIAL PASTORAL WORKSPACE</span><h3>Private submissions</h3><p>Prayer and counselling records are restricted to authorised pastoral personnel.</p></div></div><div id="adminPrivateSubmissions"></div></section>':'<section class="admin-module"><h3>Private pastoral records</h3><p>Restricted. Your assigned role does not provide access to prayer requests or counselling submissions.</p></section>'}
  <p class="admin-footnote">Access is checked by the server for every administrative action. Changes are recorded in the audit log.</p>
 </div>`;
 document.getElementById('adminSignOut')?.addEventListener('click',()=>{sessionStorage.removeItem('balmAdminToken');render();});
 if(canManage) bindAdminContentManager(document.getElementById('adminContentManager'),role);
 if(canApprove) bindAdminApprovals(document.getElementById('adminApprovalWorkspace'));
 if(canViewPrivate) bindAdminSubmissions(document.getElementById('adminPrivateSubmissions'));
}
function bindAdminApprovals(mount) {
 if(!mount)return;
 mount.innerHTML=`<div class="admin-content-toolbar"><span>Unpublished content awaiting review</span><button type="button" class="btn btn-outline-dark" id="refreshApprovalQueue">Refresh drafts</button></div><div id="approvalQueue"><p class="muted">Loading drafts…</p></div>`;
 const queue=mount.querySelector('#approvalQueue');
 async function load(){
  queue.innerHTML='<p class="muted">Loading drafts…</p>';
  try{
   const result=await adminRequest({action:'list_review_content'});
   if(!result.items?.length){queue.innerHTML='<p class="muted">There are no drafts awaiting publication review.</p>';return;}
   queue.innerHTML=result.items.map(item=>`<article class="admin-review-row"><div><span class="card-kicker">${escapeHTML(item.content_type)}</span><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.summary||'No summary supplied.')}</p><small>Updated: ${escapeHTML(item.updated_at||item.created_at||'')}</small></div><button type="button" class="btn btn-dark" data-approve-content="${escapeHTML(item.id)}">Approve publication</button></article>`).join('');
   queue.querySelectorAll('[data-approve-content]').forEach(button=>button.addEventListener('click',async()=>{
    button.disabled=true;button.textContent='Approving…';
    try{await adminRequest({action:'approve_content',id:button.dataset.approveContent});await load();}
    catch(err){window.alert(err.message);button.disabled=false;button.textContent='Approve publication';}
   }));
  }catch(err){queue.innerHTML=`<p class="form-feedback error">${escapeHTML(err.message)}</p>`;}
 }
 mount.querySelector('#refreshApprovalQueue').addEventListener('click',load);
 load();
}
function bindAdminContentManager(mount,role) {
 if(!mount)return;
 const allTypes=[['events','Events'],['sermons','Sermons'],['announcements','Announcements'],['ministries','Ministries'],['testimonies','Testimonies'],['house_fellowships','House Fellowships'],['leadership','Leadership'],['service_schedules','Service schedules'],['gallery','Gallery']];
 const types=role==='media_admin'?allTypes.filter(x=>['sermons','gallery'].includes(x[0])):role==='event_admin'?allTypes.filter(x=>x[0]==='events'):allTypes;
 mount.innerHTML=`<div class="admin-content-toolbar"><label>Content category<select id="adminContentType">${types.map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}</select></label><div><button type="button" class="btn btn-outline-dark" id="adminLoadContent">Refresh list</button><button type="button" class="btn btn-dark" id="adminNewContent">Create new</button></div></div>
 <div id="adminContentList" class="admin-content-list"><p class="muted">Loading content…</p></div>
 <form id="adminContentForm" class="admin-edit-form" hidden>
  <div class="admin-form-title"><h4 id="adminContentFormTitle">Create content</h4><button type="button" class="btn btn-outline-dark" id="adminCancelEdit">Cancel</button></div>
  <input type="hidden" name="id">
  <label>Title<input name="title" required maxlength="180" placeholder="Content title"></label>
  <label>URL slug<input name="slug" maxlength="180" placeholder="generated-from-title"></label>
  <label>Start date & time <span class="optional">(optional; especially for events)</span><input name="starts_at" type="datetime-local"></label>
  <label>Summary<textarea name="summary" rows="2" maxlength="600" placeholder="Short public summary"></textarea></label>
  <label>Main content<textarea name="body" rows="5" maxlength="10000" placeholder="Full content or description"></textarea></label>
  <label>Additional structured information (JSON)<textarea name="data" rows="4" placeholder='{"date":"2026-12-01","venue":"Church venue"}'></textarea></label>
  <label class="admin-publish-toggle"><input type="checkbox" name="published"><span>Publish this item</span></label>
  <button type="submit" class="btn btn-dark">Save content</button><p class="form-feedback" aria-live="polite"></p>
 </form>`;
 const typeSelect=mount.querySelector('#adminContentType');
 const list=mount.querySelector('#adminContentList');
 const form=mount.querySelector('#adminContentForm');
 const feedback=form.querySelector('.form-feedback');
 const field=name=>form.elements.namedItem(name);
 function resetForm(){form.reset();field('id').value='';form.hidden=true;feedback.textContent='';feedback.className='form-feedback';}
 function editItem(item){
  form.hidden=false;field('id').value=item.id||'';field('title').value=item.title||'';field('slug').value=item.slug||'';
  field('summary').value=item.summary||'';field('body').value=item.body||'';
  const parsedStart=item.starts_at?new Date(item.starts_at):null;
  const localStart=parsedStart&&!Number.isNaN(parsedStart.getTime())?new Date(parsedStart.getTime()-parsedStart.getTimezoneOffset()*60000).toISOString().slice(0,16):'';
  field('starts_at').value=localStart;
  field('data').value=JSON.stringify(item.data||{},null,2);field('published').checked=item.published===true;
  mount.querySelector('#adminContentFormTitle').textContent=item.id?'Edit content':'Create content';
  form.scrollIntoView({behavior:'smooth',block:'nearest'});
 }
 async function loadItems(){
  list.innerHTML='<p class="muted">Loading content…</p>';
  try{
   const result=await adminRequest({action:'list_content',type:typeSelect.value});
   if(!result.items?.length){list.innerHTML='<p class="muted">No records in this category yet. Use Create new to add the first item.</p>';return;}
   list.innerHTML=result.items.map(item=>`<article class="admin-content-row"><div><strong>${escapeHTML(item.title)}</strong><small>/${escapeHTML(item.slug||'')}</small><span class="status-pill">${item.published?'PUBLISHED':'DRAFT'}</span></div><div class="admin-row-actions"><button type="button" data-edit="${escapeHTML(item.id)}" class="btn btn-outline-dark">Edit</button><button type="button" data-delete="${escapeHTML(item.id)}" class="btn btn-outline-dark">Delete</button></div></article>`).join('');
   list.querySelectorAll('[data-edit]').forEach(btn=>btn.addEventListener('click',()=>{const item=result.items.find(x=>x.id===btn.dataset.edit);if(item)editItem(item);}));
   list.querySelectorAll('[data-delete]').forEach(btn=>btn.addEventListener('click',async()=>{
    if(!window.confirm('Delete this content record? This cannot be undone.'))return;
    btn.disabled=true;
    try{await adminRequest({action:'delete_content',id:btn.dataset.delete});await loadItems();}
    catch(err){window.alert(err.message);btn.disabled=false;}
   }));
  }catch(err){list.innerHTML=`<p class="form-feedback error">${escapeHTML(err.message)}</p>`;}
 }
 mount.querySelector('#adminLoadContent').addEventListener('click',loadItems);
 mount.querySelector('#adminNewContent').addEventListener('click',()=>editItem({data:{}}));
 mount.querySelector('#adminCancelEdit').addEventListener('click',resetForm);
 typeSelect.addEventListener('change',()=>{resetForm();loadItems();});
 form.addEventListener('submit',async event=>{
  event.preventDefault();const btn=form.querySelector('button[type="submit"]');btn.disabled=true;feedback.className='form-feedback';feedback.textContent='Saving…';
  try{
   const raw=field('data').value.trim();
   const data=raw?JSON.parse(raw):{};
   if(!data||Array.isArray(data)||typeof data!=='object')throw new Error('Additional information must be a JSON object.');
   await adminRequest({action:'save_content',id:field('id').value||undefined,content_type:typeSelect.value,title:field('title').value,slug:field('slug').value,summary:field('summary').value,body:field('body').value,starts_at:field('starts_at').value?new Date(field('starts_at').value).toISOString():null,data,published:field('published').checked});
   resetForm();await loadItems();
   list.insertAdjacentHTML('afterbegin','<p class="form-feedback success">Content saved successfully.</p>');
  }catch(err){feedback.className='form-feedback error';feedback.textContent=err instanceof SyntaxError?'Please enter valid JSON in the additional information field.':err.message;}
  finally{btn.disabled=false;}
 });
 loadItems();
}
function bindAdminSubmissions(mount) {
 if(!mount)return;
 mount.innerHTML=`<div class="admin-content-toolbar"><label>Submission type<select id="adminSubmissionType"><option value="">All submissions</option><option value="prayer_request">Prayer requests</option><option value="counselling">Counselling</option><option value="visitor">Visitor enquiries</option><option value="event_registration">Event registrations</option><option value="testimony">Testimonies</option><option value="contact">Contact messages</option><option value="newsletter">Newsletter</option></select></label><button type="button" class="btn btn-outline-dark" id="adminLoadSubmissions">Refresh submissions</button></div><div id="adminSubmissionRows" class="admin-submission-rows"><p class="muted">Loading private submissions…</p></div>`;
 const select=mount.querySelector('#adminSubmissionType');
 const rows=mount.querySelector('#adminSubmissionRows');
 async function load(){
  rows.innerHTML='<p class="muted">Loading private submissions…</p>';
  try{
   const result=await adminRequest({action:'list_submissions',type:select.value});
   if(!result.items?.length){rows.innerHTML='<p class="muted">No submissions found for this filter.</p>';return;}
   rows.innerHTML=result.items.map(item=>`<article class="admin-private-record"><div class="admin-private-heading"><strong>${escapeHTML(item.submission_type)}</strong><span>${escapeHTML(item.created_at||'')}</span></div><p><b>${escapeHTML(item.full_name||'Name not provided')}</b> · ${escapeHTML(item.email||item.phone||'No contact details')}</p><p class="admin-private-message">${escapeHTML(item.message||'No message text')}</p>${item.submission_type==='testimony'?'<p class="admin-consent-status">Name display consent: '+(item.payload?.display_name==='on'?'Granted':'Not granted')+'</p>':''}<div class="admin-private-controls"><label>Status<select data-private-status="${escapeHTML(item.id)}"><option value="new" ${item.status==='new'?'selected':''}>New</option><option value="in_review" ${item.status==='in_review'?'selected':''}>Under review</option><option value="responded" ${item.status==='responded'?'selected':''}>Responded</option><option value="closed" ${item.status==='closed'?'selected':''}>Closed</option></select></label><button type="button" class="btn btn-outline-dark" data-update-private="${escapeHTML(item.id)}">Update status</button></div></article>`).join('');
   rows.querySelectorAll('[data-update-private]').forEach(btn=>btn.addEventListener('click',async()=>{
    const id=btn.dataset.updatePrivate;const next=rows.querySelector('[data-private-status="'+id+'"]')?.value;if(!next)return;
    btn.disabled=true;
    try{await adminRequest({action:'update_submission_status',id,status:next});btn.textContent='Updated';}
    catch(err){window.alert(err.message);btn.disabled=false;}
   }));
  }catch(err){rows.innerHTML=`<p class="form-feedback error">${escapeHTML(err.message)}</p>`;}
 }
 mount.querySelector('#adminLoadSubmissions').addEventListener('click',load);
 select.addEventListener('change',load);
 load();
}


render();
