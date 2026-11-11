/* ------------------------------------------------------------------
   Content (EN / ID)
------------------------------------------------------------------ */
const copy = {
    en: {
        skip: 'Skip to content',
        navAbout: 'About',
        navProjects: 'Projects',
        navSkills: 'Skills',
        eyebrow: 'JUNIOR FULL-STACK WEB DEVELOPER',
        aboutTitle: 'I like making<br>the useful feel <em>simple.</em>',
        aboutCopy: 'I’m Laila, a Junior Full-Stack Web Developer and Informatics Engineering graduate from the State Polytechnic of Banjarmasin. I’ve worked on web applications for bookings, inventory monitoring, and decision support — building responsive interfaces, application logic, and database integrations.',
        location: 'Based in Banjarmasin, Indonesia',
        available: 'Available for opportunities',
        aboutAside: 'Thoughtful details.<br>Useful outcomes.<br>Code that holds up.',
        cvButton: 'Download CV',
        iconEmail: 'Send an email',
        iconGithub: 'Visit GitHub profile',
        iconLinkedin: 'Visit LinkedIn profile',
        internDate: 'SEP — DEC 2025',
        internTitle: 'Web Developer Intern',
        degreeTitle: 'Associate Degree in Informatics Engineering',
        school: 'State Polytechnic of Banjarmasin',
        gpa: 'GPA',
        scroll: 'SCROLL TO EXPLORE',
        selectedWork: 'SELECTED WORK',
        projectsTitle: 'A few things<br>made <em>with care.</em>',
        projectsIntro: 'Practical systems shaped around real workflows, from reservations to inventory and decision support.',
        sewaType: 'BOOKING & RENTAL MANAGEMENT',
        sewaDesc: 'Studio bookings and photography equipment rentals, brought together in one practical management system.',
        rasType: 'DECISION SUPPORT & MONITORING',
        rasDesc: 'A decision support and beneficiary monitoring system, developed as a collaborative academic project.',
        atmType: 'INVENTORY MONITORING',
        atmDesc: 'An inventory monitoring application developed during a web developer internship.',
        caseStudy: 'View case study',
        skillsLabel: 'TOOLS OF THE TRADE',
        skillsTitle: 'A grounded<br><em>toolkit.</em>',
        skillsIntro: 'Technologies I’ve used to build and support web applications.',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        dbModel: 'Database modeling',
        tools: 'Tools',
        footerRole: 'Junior Full-Stack Web Developer · Indonesia',
        backTop: 'Back to top'
    },
    id: {
        skip: 'Lewati ke konten',
        navAbout: 'Tentang',
        navProjects: 'Proyek',
        navSkills: 'Keahlian',
        eyebrow: 'JUNIOR FULL-STACK WEB DEVELOPER',
        aboutTitle: 'Saya suka membuat<br>hal yang berguna terasa <em>sederhana.</em>',
        aboutCopy: 'Saya Laila, Junior Full-Stack Web Developer lulusan Teknik Informatika dari Politeknik Negeri Banjarmasin. Saya pernah mengembangkan aplikasi web untuk pemesanan, pemantauan inventaris, dan pendukung keputusan — mulai dari antarmuka responsif, logika aplikasi, hingga integrasi database.',
        location: 'Berbasis di Banjarmasin, Indonesia',
        available: 'Terbuka untuk peluang',
        aboutAside: 'Detail yang cermat.<br>Hasil yang berguna.<br>Kode yang andal.',
        cvButton: 'Unduh CV',
        iconEmail: 'Kirim email',
        iconGithub: 'Kunjungi profil GitHub',
        iconLinkedin: 'Kunjungi profil LinkedIn',
        internDate: 'SEP — DES 2025',
        internTitle: 'Web Developer Intern',
        degreeTitle: 'Ahli Madya Teknik Informatika',
        school: 'Politeknik Negeri Banjarmasin',
        gpa: 'IPK',
        scroll: 'GULIR UNTUK MELIHAT',
        selectedWork: 'KARYA PILIHAN',
        projectsTitle: 'Beberapa karya<br>yang dibuat <em>dengan cermat.</em>',
        projectsIntro: 'Sistem praktis yang dirancang mengikuti alur kerja nyata, dari pemesanan hingga inventaris dan pendukung keputusan.',
        sewaType: 'PENGELOLAAN PEMESANAN & PENYEWAAN',
        sewaDesc: 'Pemesanan studio dan penyewaan peralatan fotografi dalam satu sistem pengelolaan praktis.',
        rasType: 'PENDUKUNG KEPUTUSAN & PEMANTAUAN',
        rasDesc: 'Sistem pendukung keputusan dan pemantauan penerima manfaat yang dikembangkan sebagai proyek akademik kolaboratif.',
        atmType: 'PEMANTAUAN INVENTARIS',
        atmDesc: 'Aplikasi pemantauan inventaris yang dikembangkan selama magang sebagai web developer.',
        caseStudy: 'Lihat studi kasus',
        skillsLabel: 'PERANGKAT KERJA',
        skillsTitle: 'Perangkat kerja<br>yang <em>teruji.</em>',
        skillsIntro: 'Teknologi yang pernah saya gunakan untuk membangun dan mendukung aplikasi web.',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        dbModel: 'Pemodelan database',
        tools: 'Perangkat',
        footerRole: 'Junior Full-Stack Web Developer · Indonesia',
        backTop: 'Kembali ke atas'
    }
};

const projects = {
    sewapro: {
        en: { title: 'SewaPro', subtitle: 'Studio Booking & Photography Equipment Rental System', body: 'A photography studio and equipment rental management system featuring double-booking prevention, a live 50% DP payment countdown timer, physical ID check-in/out verification, and automated delay tracking.', tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'] },
        id: { title: 'SewaPro', subtitle: 'Sistem Pemesanan Studio & Penyewaan Peralatan Fotografi', body: 'Aplikasi web manajemen sewa studio fotografi dan alat yang dilengkapi pencegahan double-booking, live countdown timer batas bayar DP 50%, operasional check-out/in verifikasi KTP fisik, serta pemantauan keterlambatan secara otomatis.', tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'] }
    },
    rastrada: {
        en: { title: 'SPK & Monitoring RASTRADA', subtitle: 'Decision Support & Beneficiary Monitoring System', body: 'A web-based decision support and monitoring system developed to support Rastrada beneficiary selection. The academic project uses TOPSIS to rank candidates and supports review, distribution monitoring, and reporting.', contribution: 'Developed collaboratively as an academic project. Individual contribution details are pending confirmation. Do not publish resident data.', tags: ['Laravel', 'MySQL', 'TOPSIS', 'Bootstrap'] },
        id: { title: 'SPK & Monitoring RASTRADA', subtitle: 'Sistem Pendukung Keputusan & Pemantauan Penerima Manfaat', body: 'Sistem berbasis web untuk mendukung pemilihan penerima Rastrada. Proyek akademik ini menggunakan TOPSIS untuk memberi peringkat kandidat serta mendukung peninjauan, pemantauan distribusi, dan pelaporan.', contribution: 'Dikembangkan secara kolaboratif sebagai proyek akademik. Rincian kontribusi individu menunggu konfirmasi. Data warga tidak boleh dipublikasikan.', tags: ['Laravel', 'MySQL', 'TOPSIS', 'Bootstrap'] }
    },
    atm: {
        en: { title: 'ATM Sparepart Monitoring', subtitle: 'Inventory Monitoring Application', body: 'An inventory monitoring web application developed during a web developer internship to support ATM spare-part stock monitoring.', contribution: 'Work described includes responsive frontend development, stock calculations, search and filtering, form validation, and PHP/MySQL integration. Company materials require approval before publication.', tags: ['PHP Native', 'MySQL', 'Bootstrap'] },
        id: { title: 'ATM Sparepart Monitoring', subtitle: 'Aplikasi Pemantauan Inventaris', body: 'Aplikasi web pemantauan inventaris yang dikembangkan selama magang sebagai web developer untuk mendukung pemantauan stok suku cadang ATM.', contribution: 'Pekerjaan yang disebutkan mencakup pengembangan frontend responsif, perhitungan stok, pencarian dan penyaringan, validasi formulir, serta integrasi PHP/MySQL. Materi perusahaan perlu mendapat izin sebelum dipublikasikan.', tags: ['PHP Native', 'MySQL', 'Bootstrap'] }
    }
};

// CV files: put both PDFs in assets/cv/ with exactly these names.
const cvFiles = {
    en: 'assets/cv/Laila-Hayati-CV-EN.pdf',
    id: 'assets/cv/Laila-Hayati-CV-ID.pdf'
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let language = 'en';
let typingRun = 0;

/* ------------------------------------------------------------------
   Language
------------------------------------------------------------------ */
function setLanguage(lang) {
    language = lang;
    const t = copy[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = t[el.dataset.i18n];
        if (value) el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const value = t[el.dataset.i18nHtml];
        if (value) el.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const value = t[el.dataset.i18nAria];
        if (value) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('.lang').forEach(btn => {
        const on = btn.dataset.lang === lang;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', String(on));
    });
    document.querySelector('.language-switch').setAttribute('aria-label', lang === 'en' ? 'Choose language' : 'Pilih bahasa');
    document.querySelector('.dialog-close').setAttribute('aria-label', lang === 'en' ? 'Close case study' : 'Tutup studi kasus');

    document.querySelectorAll('[data-open-project]').forEach(btn => {
        if (btn.tagName !== 'BUTTON' || !btn.classList.contains('project-visual')) return;
        const name = projects[btn.dataset.openProject][lang].title;
        btn.setAttribute('aria-label', lang === 'en' ? `Open ${name} case study` : `Buka studi kasus ${name}`);
    });

    const cvLink = document.getElementById('cv-link');
    if (cvLink) cvLink.setAttribute('href', cvFiles[lang]);

    if (dialog.open) fillDialog(dialog.dataset.project);
    refreshNavIndicator();
}

/* ------------------------------------------------------------------
   Typing headline (About / hero)
------------------------------------------------------------------ */
function animateTitle() {
    const title = document.getElementById('about-title');
    if (!title) return;

    const run = ++typingRun;
    const raw = copy[language].aboutTitle;

    const plain = document.createElement('div');
    plain.innerHTML = raw.replace(/<br\s*\/?>/gi, ' ');
    title.setAttribute('aria-label', plain.textContent.trim());

    const parts = raw.split(/<br\s*\/?>/i);
    if (parts.length < 2 || reduceMotion) {
        title.innerHTML = raw;
        return;
    }

    const second = document.createElement('div');
    second.innerHTML = parts[1];
    const emText = second.querySelector('em')?.textContent || '';
    const prefix = (second.textContent || '').replace(emText, '').trimEnd();

    title.innerHTML = '';
    const firstLine = document.createElement('span');
    firstLine.className = 'title-line title-line-first';
    firstLine.textContent = parts[0];

    const secondLine = document.createElement('span');
    secondLine.className = 'title-line title-line-second';
    const typedPrefix = document.createElement('span');
    const typedEm = document.createElement('em');
    const cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    secondLine.append(typedPrefix, document.createTextNode(' '), typedEm, cursor);
    title.append(firstLine, document.createElement('br'), secondLine);

    const characters = [
        ...Array.from(prefix).map(char => ({ target: typedPrefix, char })),
        ...Array.from(emText).map(char => ({ target: typedEm, char }))
    ];
    let index = 0;

    window.setTimeout(function typeNext() {
        if (run !== typingRun) return;
        if (index >= characters.length) {
            window.setTimeout(() => cursor.classList.add('is-finished'), 900);
            return;
        }
        const current = characters[index++];
        current.target.textContent += current.char;
        window.setTimeout(typeNext, 58);
    }, 500);
}

document.querySelectorAll('.lang').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.lang === language) return;
    setLanguage(button.dataset.lang);
    animateTitle();
}));

/* ------------------------------------------------------------------
   Header: scrolled state, scroll progress, active link + sliding pill
------------------------------------------------------------------ */
const header = document.querySelector('.site-header');
const progress = document.querySelector('.scroll-progress');
const mainNav = document.querySelector('.main-nav');
const navLinks = new Map([...mainNav.querySelectorAll('a')].map(a => [a.getAttribute('href').slice(1), a]));
let activeId = 'about';

function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function refreshNavIndicator() {
    const link = navLinks.get(activeId);
    if (!link) return;
    mainNav.style.setProperty('--ind-x', `${link.offsetLeft}px`);
    mainNav.style.setProperty('--ind-w', `${link.offsetWidth}px`);
    mainNav.classList.add('has-active');
}

function setActive(id) {
    activeId = id;
    navLinks.forEach((link, key) => {
        const on = key === id;
        link.classList.toggle('active', on);
        if (on) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });
    refreshNavIndicator();
}

const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
}, { rootMargin: '-45% 0px -50% 0px' });
['about', 'projects', 'skills'].forEach(id => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
});
window.addEventListener('resize', refreshNavIndicator);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshNavIndicator);

/* ------------------------------------------------------------------
   Case-study dialog
------------------------------------------------------------------ */
const dialog = document.querySelector('.case-dialog');

function fillDialog(key) {
    if (!key) return;
    const item = projects[key][language];
    dialog.dataset.project = key;
    dialog.querySelector('.dialog-index').textContent = `/ 0${Object.keys(projects).indexOf(key) + 1}`;
    dialog.querySelector('#dialog-title').textContent = item.title;
    dialog.querySelector('.dialog-subtitle').textContent = item.subtitle;
    dialog.querySelector('.dialog-body').textContent = item.body;
    const note = dialog.querySelector('.dialog-contribution');
    note.textContent = item.contribution || '';
    note.hidden = !item.contribution;
    dialog.querySelector('.dialog-tags').innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
}

document.querySelectorAll('[data-open-project]').forEach(button => button.addEventListener('click', () => {
    fillDialog(button.dataset.openProject);
    dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

/* ------------------------------------------------------------------
   Motion: staggered reveal on scroll
------------------------------------------------------------------ */
document.querySelectorAll('[data-stagger]').forEach(group => {
    Array.from(group.children).forEach((child, i) => child.style.setProperty('--i', i));
});

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ------------------------------------------------------------------
   Motion: gentle 3D tilt on project previews (mouse / trackpad only)
------------------------------------------------------------------ */
if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.project-visual').forEach(card => {
        card.addEventListener('pointermove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
            card.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`);
        });
        card.addEventListener('pointerleave', () => {
            card.style.removeProperty('--rx');
            card.style.removeProperty('--ry');
        });
    });
}

/* ------------------------------------------------------------------
   Init
------------------------------------------------------------------ */
const yearNode = document.getElementById('copyright-year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

setLanguage('en');
animateTitle();
setActive('about');