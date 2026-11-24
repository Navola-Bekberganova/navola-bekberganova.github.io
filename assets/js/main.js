/* ==========================================================================
   main.js — renders shared layout (header, footer) and page content from
   assets/js/data.js. You should not need to edit this file to add content.
   ========================================================================== */
(function () {
  "use strict";

  const S = window.SITE;
  if (!S) return;
  const SHOW_PH = !!S.settings.showPlaceholders;

  /* ------------------------------------------------------------ navigation */
  const NAV = [
    { href: "index.html", label: "Home", page: "home" },
    { href: "about.html", label: "About", page: "about" },
    { href: "education.html", label: "Education", page: "education" },
    { href: "experience.html", label: "Experience", page: "experience" },
    { href: "projects.html", label: "Research", page: "projects" },
    { href: "publications.html", label: "Publications", page: "publications" },
    { href: "skills.html", label: "Skills", page: "skills", also: ["languages"] },
    { href: "certificates.html", label: "Certificates", page: "certificates" },
    // footerOnly: kept as its own page, but shown inside Skills in the top menu
    { href: "languages.html", label: "Languages", page: "languages", footerOnly: true },
    { href: "contact.html", label: "Contact", page: "contact" },
  ];
  const isCurrent = (n, current) => n.page === current || (n.also || []).includes(current);

  /* ----------------------------------------------------------------- icons */
  const I = {
    mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><path d="M9 8v.01M9 11v6M12.5 11v6h1.5a3 3 0 0 0 0-6z"/>',
    scholar: '<path d="m12 4 9 5-9 5-9-5z"/><path d="M7 11.5V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5"/>',
    researchgate: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 16V8h2.5a2 2 0 0 1 0 4H9m2.5 0L14 16"/>',
    github: '<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.3 5.6 2.6 5.6 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    pdf: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    download: '<path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${I[name] || ""}</svg>`;

  /* --------------------------------------------------------------- helpers */
  const esc = (v) =>
    String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isEmpty = (v) => v === null || v === "" || (Array.isArray(v) && v.length === 0);
  const ph = (label) => (SHOW_PH ? `<span class="placeholder">${esc(label)} — to be added</span>` : "");
  const extAttrs = (url) => (/^https?:/i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "");
  /** Escape text and turn known organisation names (SITE.organizations) into links. */
  const ORG_RX = (() => {
    const names = Object.keys(S.organizations || {}).sort((a, b) => b.length - a.length);
    if (!names.length) return null;
    // whole names only: not preceded/followed by a letter or digit
    const escRx = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp("(?<![\\p{L}\\p{N}])(?:" + names.map((n) => escRx(esc(n))).join("|") + ")(?![\\p{L}\\p{N}])", "gu");
  })();
  const ORG_BY_ESC = Object.fromEntries(Object.entries(S.organizations || {}).map(([k, v]) => [esc(k), v]));
  const org = (text) => {
    const safe = esc(text);
    if (!ORG_RX) return safe;
    return safe.replace(ORG_RX, (m) => `<a class="org-link" href="${esc(ORG_BY_ESC[m])}" target="_blank" rel="noopener noreferrer">${m}</a>`);
  };
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /** Text field: undefined = hidden, null/"" = placeholder, otherwise escaped. */
  function field(value, label, tag = "p", cls = "") {
    if (value === undefined) return "";
    if (isEmpty(value)) {
      const p = ph(label);
      return p ? `<${tag} class="${cls}">${p}</${tag}>` : "";
    }
    return `<${tag} class="${cls}">${esc(value)}</${tag}>`;
  }

  /** Bulleted list with optional heading; same undefined/empty semantics. */
  function list(items, heading, label, cls = "bullets") {
    if (items === undefined) return "";
    const head = heading ? `<h4 class="sub-heading">${esc(heading)}</h4>` : "";
    if (isEmpty(items)) {
      const p = ph(label || heading);
      return p ? `${head}<p>${p}</p>` : "";
    }
    return `${head}<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  }

  function tags(items, cls = "tag") {
    if (!items || !items.length) return "";
    return `<ul class="tags" role="list">${items.map((t) => `<li class="${cls}">${esc(t)}</li>`).join("")}</ul>`;
  }

  /** Documents + external links block. `always` shows an empty slot placeholder. */
  function resources(docs = [], links = [], opts = {}) {
    const { heading = "Supporting documents", always = false, github } = opts;
    const out = [];
    (docs || []).forEach((d) => {
      if (d.file) {
        const ext = (d.file.split(".").pop() || "").toUpperCase().replace("JPEG", "JPG");
        out.push(`<a class="doc" href="${esc(d.file)}" target="_blank" rel="noopener">${icon("pdf")}<span>${esc(d.title)}</span><span class="doc__type">${esc(ext)}</span></a>`);
      } else if (SHOW_PH) {
        out.push(`<span class="doc doc--pending" title="Add the file path in assets/js/data.js">${icon("pdf")}<span>${esc(d.title)}</span><span class="doc__type">to be added</span></span>`);
      }
    });
    if (github) out.push(`<a class="doc" href="${esc(github)}"${extAttrs(github)}>${icon("github")}<span>GitHub repository</span>${icon("external", "icon icon--sm")}</a>`);
    (links || []).forEach((l) => {
      if (l.url) out.push(`<a class="doc" href="${esc(l.url)}"${extAttrs(l.url)}>${icon("external")}<span>${esc(l.label)}</span></a>`);
    });
    if (!out.length) {
      if (!always || !SHOW_PH) return "";
      out.push(`<span class="doc doc--pending">${icon("plus")}<span>No documents yet — add reports, letters or presentations</span></span>`);
    }
    return `<div class="resources"><h4 class="sub-heading">${esc(heading)}</h4><div class="docs">${out.join("")}</div></div>`;
  }

  const meta = (iconName, text) => (text ? `<span class="meta__item">${icon(iconName, "icon icon--sm")}${esc(text)}</span>` : "");

  function emptyState(title, text, hint) {
    return `<div class="empty-state">
      <div class="empty-state__icon">${icon("pdf", "icon icon--lg")}</div>
      <h3>${esc(title)}</h3>
      <p>${text}</p>
      ${hint && SHOW_PH ? `<p class="empty-state__hint">${hint}</p>` : ""}
    </div>`;
  }

  /* ---------------------------------------------------------------- layout */
  function renderHeader() {
    const host = $("#site-header");
    if (!host) return;
    const current = document.body.dataset.page;
    host.innerHTML = `
      <div class="container nav-bar">
        <a class="brand" href="index.html" aria-label="${esc(S.profile.name)} — home">
          <span class="brand__mark" aria-hidden="true">${esc(S.profile.initials)}</span>
          <span class="brand__name">${esc(S.profile.name)}</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
          <span class="visually-hidden">Menu</span>${icon("menu", "icon icon--md nav-toggle__open")}${icon("close", "icon icon--md nav-toggle__close")}
        </button>
        <nav id="primary-nav" class="primary-nav" aria-label="Primary">
          <ul role="list">
            ${NAV.filter((n) => !n.footerOnly).map((n) => `<li><a href="${n.href}"${isCurrent(n, current) ? ` ${n.page === current ? 'aria-current="page" ' : ""}class="is-active"` : ""}>${n.label}</a></li>`).join("")}
          </ul>
        </nav>
      </div>`;

    const btn = $(".nav-toggle", host);
    const nav = $("#primary-nav", host);
    const setOpen = (open) => {
      btn.setAttribute("aria-expanded", String(open));
      host.classList.toggle("nav-open", open);
      document.body.classList.toggle("no-scroll", open);
    };
    btn.addEventListener("click", () => setOpen(btn.getAttribute("aria-expanded") !== "true"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && host.classList.contains("nav-open")) { setOpen(false); btn.focus(); }
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    window.matchMedia("(min-width: 1181px)").addEventListener("change", (m) => { if (m.matches) setOpen(false); });

    const onScroll = () => host.classList.toggle("is-scrolled", window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function renderFooter() {
    const host = $("#site-footer");
    if (!host) return;
    const c = S.contact;
    const profiles = c.profiles.filter((p) => p.url);
    host.innerHTML = `
      <div class="container footer-grid">
        <div>
          <p class="footer-name">${esc(S.profile.name)}</p>
          <p class="footer-text">${esc(S.profile.headline)}<br>${esc(S.profile.location)}</p>
          <p class="footer-text">Open to PhD opportunities and academic collaboration.</p>
        </div>
        <nav aria-label="Footer">
          <h2 class="footer-heading">Explore</h2>
          <ul role="list" class="footer-links">
            ${NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
          </ul>
        </nav>
        <div>
          <h2 class="footer-heading">Contact</h2>
          <ul role="list" class="footer-contact">
            <li><a href="mailto:${esc(c.email)}">${icon("mail", "icon icon--sm")}${esc(c.email)}</a></li>
            ${profiles.map((p) => `<li><a href="${esc(p.url)}"${extAttrs(p.url)}>${icon(p.icon, "icon icon--sm")}${esc(p.label)}</a></li>`).join("")}
            <li><a href="${esc(S.profile.cv)}" download>${icon("download", "icon icon--sm")}Download CV</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© ${new Date().getFullYear()} ${esc(S.profile.name)}</p>
        <p>Last updated ${esc(S.settings.lastUpdated)}</p>
      </div>`;
  }

  /** Fill simple bindings: <span data-bind="profile.name"></span>, <a data-href="profile.cv"> */
  function bind() {
    const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), S);
    $$("[data-bind]").forEach((el) => { const v = get(el.dataset.bind); if (v != null) el.textContent = v; });
    $$("[data-href]").forEach((el) => { const v = get(el.dataset.href); if (v) el.setAttribute("href", v); });
    $$("[data-mailto]").forEach((el) => el.setAttribute("href", `mailto:${S.contact.email}`));
    $$("[data-src]").forEach((el) => { const v = get(el.dataset.src); if (v) el.setAttribute("src", v); });
    $$("[data-alt]").forEach((el) => { const v = get(el.dataset.alt); if (v) el.setAttribute("alt", v); });
  }

  /* ------------------------------------------------------------- renderers */
  const R = {};

  R["quick-facts"] = () =>
    `<dl class="facts">${S.profile.quickFacts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("")}</dl>`;

  R["hero-links"] = () => {
    const c = S.contact;
    const profiles = c.profiles.filter((p) => p.url);
    return `<a href="mailto:${esc(c.email)}" class="icon-link">${icon("mail")}<span>Email</span></a>` +
      profiles.map((p) => `<a href="${esc(p.url)}"${extAttrs(p.url)} class="icon-link">${icon(p.icon)}<span>${esc(p.label)}</span></a>`).join("");
  };

  R.interests = () =>
    `<div class="grid grid--4">${S.interests.map((it, i) => `
      <article class="card card--interest">
        <span class="card__index" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <h3>${esc(it.title)}</h3>
        <p>${esc(it.text)}</p>
      </article>`).join("")}</div>`;

  /** Home: the master's thesis + research projects, as compact cards. */
  R["featured-research"] = () => {
    const items = S.projects.filter((p) => p.category === "Academic" || p.category === "Research");
    return `<div class="grid grid--2">${items.map((p) => `
      <article class="card card--highlight">
        <p class="eyebrow">${esc(p.category === "Academic" ? "Master's thesis" : "Research placement")} · ${esc(p.period)}</p>
        <h3>${esc(projTitle(p))}</h3>
        <p class="card__org">${org(p.organization)}</p>
        ${p.overview ? `<p>${esc(p.overview)}</p>` : ""}
        <a class="text-link" href="projects.html">Research details ${icon("arrow", "icon icon--sm")}</a>
      </article>`).join("")}</div>`;
  };

  R.highlights = () => {
    const items = S.experience.filter((e) => e.featured);
    return `<div class="grid grid--3">${items.map((e) => `
      <article class="card card--highlight">
        <p class="eyebrow">${esc(e.start)} – ${esc(e.end)}</p>
        <h3>${esc(e.role)}</h3>
        <p class="card__org">${org(e.organization)}</p>
        <p>${esc(e.summary)}</p>
        <a class="text-link" href="experience.html#${esc(e.id)}">Read more ${icon("arrow", "icon icon--sm")}</a>
      </article>`).join("")}</div>`;
  };

  R["expertise-summary"] = () =>
    `<div class="grid grid--3">${S.skills.slice(0, 6).map((g) => `
      <div class="expertise">
        <h3>${esc(g.category)}</h3>
        <p>${g.items.slice(0, 4).map(esc).join(" · ")}</p>
      </div>`).join("")}</div>`;

  R["about-bio"] = () => S.about.biography.map((p) => field(p, "Biography paragraph")).join("");
  R["about-journey"] = () => `<ol class="journey">${S.about.journey.map((p) => `<li>${esc(p)}</li>`).join("")}</ol>`;
  R["about-motivation"] = () => S.about.motivation.map((p) => field(p, "Research motivation statement")).join("");
  R["about-objectives"] = () => S.about.objectives.map((p) => field(p, "Target PhD field and research questions")).join("");
  R["about-strengths"] = () => list(S.about.strengths, null, null, "checklist");
  R["about-interests"] = () =>
    `<ul class="interest-list" role="list">${S.interests.map((i) => `<li><strong>${esc(i.title)}</strong><span>${esc(i.text)}</span></li>`).join("")}</ul>`;

  R.education = () =>
    `<ol class="timeline" role="list">${S.education.map((e) => `
      <li class="timeline__item">
        <div class="timeline__date"><span>${esc(e.start)} – ${esc(e.end)}</span></div>
        <article class="card timeline__card">
          <h3>${esc(e.degree)}</h3>
          <p class="card__org">${org(e.institution)}</p>
          <div class="meta">${meta("pin", e.location)}${meta("calendar", `${e.start} – ${e.end}`)}</div>
          ${e.specialization ? `<p class="kv"><span>Specialisation</span>${esc(e.specialization)}</p>` : ""}
          ${field(e.description, "Programme description")}
          ${e.coursework !== undefined ? (isEmpty(e.coursework) ? (SHOW_PH ? `<h4 class="sub-heading">Relevant coursework</h4><p>${ph("Coursework")}</p>` : "") : `<h4 class="sub-heading">Relevant coursework</h4>${tags(e.coursework)}`) : ""}
          ${e.thesis === undefined ? "" : e.thesis ? `
            <div class="thesis"><h4 class="sub-heading">Thesis</h4>
              <p class="thesis__title">${esc(e.thesis.title || "")}</p>
              ${e.thesis.supervisor ? `<p class="muted">Supervision: ${esc(e.thesis.supervisor)}</p>` : ""}
              ${e.thesis.summary ? `<p>${esc(e.thesis.summary)}</p>` : ""}
            </div>` : (SHOW_PH ? `<h4 class="sub-heading">Thesis / dissertation</h4><p>${ph("Title, supervisor and summary")}</p>` : "")}
          ${resources(e.documents, e.links, { heading: "Documents" })}
        </article>
      </li>`).join("")}</ol>`;

  R.experience = () =>
    `<ol class="timeline" role="list">${S.experience.map((e) => `
      <li class="timeline__item" id="${esc(e.id)}">
        <div class="timeline__date"><span>${esc(e.start)} – ${esc(e.end)}</span></div>
        <article class="card timeline__card">
          <header class="exp-head">
            <div>
              <h3>${esc(e.role)}</h3>
              <p class="card__org">${org(e.organization)}${e.team ? ` <span class="muted">· ${esc(e.team)}</span>` : ""}</p>
            </div>
            ${e.end === "Present" ? '<span class="badge">Current</span>' : ""}
          </header>
          <div class="meta">${meta("pin", e.location)}${meta("calendar", `${e.start} – ${e.end}`)}</div>
          ${e.summary ? `<p class="lead-sm">${esc(e.summary)}</p>` : ""}
          ${list(e.responsibilities, "Responsibilities")}
          ${e.objectives ? list(e.objectives, "Objectives") : ""}
          ${e.methods ? list(e.methods, "Methods & tools") : ""}
          ${e.contributions && e.contributions.length ? list(e.contributions, "Key contributions & outcomes", null, "bullets bullets--accent") : ""}
          ${tags(e.tags)}
          ${resources(e.documents, e.links, { always: true })}
        </article>
      </li>`).join("")}</ol>`;

  R.volunteering = () =>
    `<div class="grid grid--2">${S.volunteering.map((v) => `
      <article class="card card--compact">
        <h3>${esc(v.title)}</h3>
        <p class="card__org">${org(v.organization)}</p>
        <div class="meta">${meta("pin", v.location)}${meta("calendar", v.date)}</div>
      </article>`).join("")}</div>`;

  const projTitle = (p) => p.title || (SHOW_PH ? `${p.placeholderTitle || "Project"} (title to be added)` : p.placeholderTitle || "Project");

  R.projects = () => {
    const cats = [...new Set(S.projects.map((p) => p.category))];
    const filters = cats.length > 1
      ? `<div class="filters" role="group" aria-label="Filter projects">
          <button type="button" class="chip is-active" data-filter="all" aria-pressed="true">All</button>
          ${cats.map((c) => `<button type="button" class="chip" data-filter="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join("")}
        </div>` : "";
    return `${filters}<div class="grid grid--2 project-grid">${S.projects.map((p) => `
      <article class="card card--project" data-category="${esc(p.category)}">
        ${p.image ? `<img class="card__image" src="${esc(p.image)}" alt="" loading="lazy">` : `<div class="card__image card__image--placeholder" aria-hidden="true"><span>${esc(p.category)}</span></div>`}
        <div class="card__body">
          <p class="eyebrow">${esc(p.category)} · ${esc(p.period)}</p>
          <h3>${esc(projTitle(p))}</h3>
          <p class="card__org">${org(p.organization)}</p>
          ${field(p.overview, "Short overview")}
          ${tags(p.tools)}
          <button type="button" class="btn btn--ghost btn--sm" data-project="${esc(p.id)}">View details ${icon("arrow", "icon icon--sm")}</button>
        </div>
      </article>`).join("")}</div>
      <dialog class="modal" id="project-modal" aria-labelledby="modal-title">
        <div class="modal__inner">
          <button type="button" class="modal__close" data-close>${icon("close", "icon icon--md")}<span class="visually-hidden">Close</span></button>
          <div class="modal__content"></div>
        </div>
      </dialog>`;
  };

  function projectDetail(p) {
    return `
      <p class="eyebrow">${esc(p.category)} · ${esc(p.period)}</p>
      <h2 id="modal-title">${esc(projTitle(p))}</h2>
      <p class="card__org">${org(p.organization)}</p>
      ${p.image ? `<img class="modal__image" src="${esc(p.image)}" alt="${esc(projTitle(p))}">` : ""}
      ${p.overview !== undefined ? `<h4 class="sub-heading">Overview</h4>${field(p.overview, "Overview")}` : ""}
      ${p.problem !== undefined ? `<h4 class="sub-heading">Problem statement</h4>${field(p.problem, "Problem statement")}` : ""}
      ${list(p.objectives, "Objectives")}
      ${list(p.methodology, "Methodology")}
      ${p.tools && p.tools.length ? `<h4 class="sub-heading">Tools & approaches</h4>${tags(p.tools)}` : ""}
      ${list(p.results, "Results & contributions", null, "bullets bullets--accent")}
      ${resources(p.documents, p.links, { heading: "Documents & links", github: p.github, always: true })}`;
  }

  function initProjects(root) {
    const modal = $("#project-modal", root);
    const content = modal && $(".modal__content", modal);
    let lastFocus = null;
    $$("[data-project]", root).forEach((btn) =>
      btn.addEventListener("click", () => {
        const p = S.projects.find((x) => x.id === btn.dataset.project);
        if (!p || !modal) return;
        lastFocus = btn;
        content.innerHTML = projectDetail(p);
        if (typeof modal.showModal === "function") modal.showModal();
        else modal.setAttribute("open", "");
        document.body.classList.add("no-scroll");
        $("[data-close]", modal).focus();
      })
    );
    if (modal) {
      const close = () => { modal.close ? modal.close() : modal.removeAttribute("open"); };
      $("[data-close]", modal).addEventListener("click", close);
      modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
      modal.addEventListener("close", () => { document.body.classList.remove("no-scroll"); if (lastFocus) lastFocus.focus(); });
    }
    $$("[data-filter]", root).forEach((chip) =>
      chip.addEventListener("click", () => {
        const f = chip.dataset.filter;
        $$("[data-filter]", root).forEach((c) => { const on = c === chip; c.classList.toggle("is-active", on); c.setAttribute("aria-pressed", String(on)); });
        $$(".card--project", root).forEach((card) => { card.hidden = f !== "all" && card.dataset.category !== f; });
      })
    );
  }

  R.skills = () =>
    `<div class="grid grid--2 skills-grid">${S.skills.map((g) => `
      <section class="card skill-group" aria-labelledby="sk-${esc(g.category).replace(/\W+/g, "-")}">
        <h3 id="sk-${esc(g.category).replace(/\W+/g, "-")}">${esc(g.category)}</h3>
        ${tags(g.items)}
      </section>`).join("")}</div>`;

  R.certificates = () => {
    const groups = S.certificateCategories.map((cat) => {
      const items = S.certificates.filter((c) => c.category === cat.key);
      if (!items.length) {
        if (!SHOW_PH) return "";
        return `<section class="cert-group"><h2 class="section-title section-title--sm">${esc(cat.label)}</h2>
          <div class="empty-inline">${icon("plus")}<span>No entries yet. Add items with <code>category: "${esc(cat.key)}"</code> to <code>certificates</code> in <code>assets/js/data.js</code>.</span></div></section>`;
      }
      return `<section class="cert-group" id="cert-${esc(cat.key)}"><h2 class="section-title section-title--sm">${esc(cat.label)} <span class="count">${items.length}</span></h2>
        <div class="grid grid--2">${items.map((c) => `
          <article class="card cert">
            <h3>${esc(c.title)}</h3>
            <p class="card__org">${org(c.issuer)}</p>
            <div class="meta">${meta("calendar", c.date)}</div>
            ${field(c.description, "Short description")}
            ${resources(c.documents, c.verifyUrl ? [{ label: "Verify credential", url: c.verifyUrl }] : [], { heading: "Attachments" })}
            ${c.verifyUrl === null && SHOW_PH ? `<p class="small">${ph("Verification URL")}</p>` : ""}
          </article>`).join("")}</div></section>`;
    });
    // Jump links to each non-empty category
    const jump = S.certificateCategories
      .filter((cat) => S.certificates.some((c) => c.category === cat.key))
      .map((cat) => `<a class="chip" href="#cert-${esc(cat.key)}">${esc(cat.label)}</a>`).join("");
    return `<nav class="jump-links" aria-label="Certificate categories">${jump}</nav>` + groups.join("");
  };

  R.languages = () =>
    `<div class="grid grid--3">${S.languages.map((l) => `
      <article class="card lang">
        <h3>${esc(l.name)}</h3>
        <p class="lang__level">${esc(l.level)}${l.cefr ? ` <span class="badge badge--soft" title="Common European Framework of Reference">${esc(l.cefr)}</span>` : ""}</p>
        ${l.certificates && l.certificates.length ? resources(l.certificates, [], { heading: "Certificates" }) : ""}
      </article>`).join("")}</div>
      ${S.languageNote ? `<p class="note">${esc(S.languageNote)}</p>` : ""}
      <p class="small muted">Levels follow the Common European Framework of Reference for Languages (CEFR) where stated.</p>`;

  R.publications = () => {
    if (!S.publications.length) {
      return emptyState(
        "No publications listed yet",
        "Scientific publications, conference papers, technical reports, theses and preprints will appear here. Policy outputs, such as the National Strategy on Financial Literacy, are described on the <a href=\"projects.html\">Projects</a> page.",
        "To add an entry, follow the commented template in <code>publications</code> in <code>assets/js/data.js</code> and place PDFs in <code>assets/documents/publications/</code>."
      );
    }
    return `<ol class="pubs" role="list">${S.publications.map((p, i) => `
      <li class="card pub">
        <p class="eyebrow">${esc(p.type || "Publication")} · ${esc(p.date || "")}</p>
        <h3>${esc(p.title)}</h3>
        <p class="pub__authors">${esc(p.authors || "")}</p>
        ${p.venue ? `<p class="pub__venue">${esc(p.venue)}</p>` : ""}
        ${p.abstract ? `<details><summary>Abstract</summary><p>${esc(p.abstract)}</p></details>` : ""}
        ${p.supervisors ? `<p class="small muted">Supervisors: ${esc(p.supervisors)}</p>` : ""}
        ${tags(p.keywords)}
        ${resources(p.documents, [...(p.links || []), ...(p.doi ? [{ label: "DOI / publisher page", url: p.doi }] : [])], { heading: "Access" })}
        ${p.bibtex ? `<details class="bibtex"><summary>BibTeX</summary><pre id="bib-${i}">${esc(p.bibtex)}</pre>
          <button type="button" class="btn btn--ghost btn--sm" data-copy="bib-${i}">${icon("copy", "icon icon--sm")}Copy</button></details>` : ""}
      </li>`).join("")}</ol>`;
  };

  R.contact = () => {
    const c = S.contact;
    const cards = [
      `<a class="card contact-card" href="mailto:${esc(c.email)}">${icon("mail", "icon icon--lg")}<span class="contact-card__label">Email</span><span class="contact-card__value">${esc(c.email)}</span></a>`,
    ];
    if (c.phone && c.phone.public) cards.push(`<a class="card contact-card" href="tel:${esc(c.phone.value.replace(/\s/g, ""))}">${icon("phone", "icon icon--lg")}<span class="contact-card__label">Phone</span><span class="contact-card__value">${esc(c.phone.value)}</span></a>`);
    c.profiles.forEach((p) => {
      if (p.url) cards.push(`<a class="card contact-card" href="${esc(p.url)}"${extAttrs(p.url)}>${icon(p.icon, "icon icon--lg")}<span class="contact-card__label">${esc(p.label)}</span><span class="contact-card__value">${esc(p.handle || p.url)}</span></a>`);
      else if (SHOW_PH) cards.push(`<div class="card contact-card contact-card--pending">${icon(p.icon, "icon icon--lg")}<span class="contact-card__label">${esc(p.label)}</span><span class="contact-card__value">${ph("Profile link")}</span></div>`);
    });
    cards.push(`<div class="card contact-card">${icon("pin", "icon icon--lg")}<span class="contact-card__label">Location</span><span class="contact-card__value">${esc(c.location)}</span></div>`);
    return `<div class="grid grid--3">${cards.join("")}</div>`;
  };

  function initCopy() {
    $$("[data-copy]").forEach((b) =>
      b.addEventListener("click", async () => {
        const t = document.getElementById(b.dataset.copy);
        try { await navigator.clipboard.writeText(t.textContent); b.lastChild.textContent = "Copied"; } catch (e) { /* ignore */ }
      })
    );
  }

  /* ------------------------------------------------------------------ boot */
  /** Floating "back to top" button, shown after scrolling down. */
  function initBackToTop() {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5m0 0-6 6m6-6 6 6"/></svg>';
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const skip = $(".brand"); if (skip) skip.focus({ preventScroll: true });
    });
    document.body.appendChild(btn);
    const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /** Gentle fade-in of cards as they enter the viewport (skipped for reduced motion). */
  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = $$("main .card, main .expertise, main .timeline__item, main .empty-state");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });
    items.forEach((el) => {
      // Only animate what is below the fold, so the first screen never flickers
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("reveal"); io.observe(el); }
    });
  }

  function boot() {
    renderHeader();
    renderFooter();
    bind();
    $$("[data-render]").forEach((el) => {
      const fn = R[el.dataset.render];
      if (fn) el.innerHTML = fn();
    });
    const proj = $('[data-render="projects"]');
    if (proj) initProjects(proj);
    initCopy();
    // Re-apply hash scroll after dynamic content renders (e.g. experience.html#iom)
    if (location.hash) {
      const t = document.getElementById(location.hash.slice(1));
      if (t) t.scrollIntoView({ behavior: "instant" });
    }
    initBackToTop();
    // Fade-in only for normal page loads; deep links show everything immediately
    if (!location.hash) initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
