import { recentPapers, preprints, recentSources } from './recent-work.mjs';
export const links = {
  scholar: 'https://scholar.google.com/citations?user=dRvOsrMAAAAJ&hl=en',
  dblp: 'https://dblp.org/pid/28/2422.html',
  cv: '/assets/mingwu-zhang-cv.pdf',
};
export const navigation = [['Home','/'],['Members','/teaching/'],['Research','/research/'],['Awards','/awards/'],['Papers','/publication/'],['Patents','/patents/'],['Access','/services/']];
export const projects = [
 ['2025–2028','Public-key cryptography with dynamic automata policies for time-series data','National Natural Science Foundation of China (NSFC), General Program','62472150','Principal Investigator'],
 ['2025–2026','Security and privacy protection in machine learning','Industry-sponsored research','','Principal Investigator'],
 ['2021–2024','Witness encryption based on NP-complete relation languages','NSFC, General Program','62072134','Principal Investigator'],
 ['2021–2024','Blockchain-based security for crowdsensing networks','NSFC, Joint Fund Key Program','U2001205','Co-Principal Investigator'],
 ['2021–2024','Intelligent analysis for blockchain security supervision','Key Research and Development Program of Hubei Province','2021BEA163','Principal Investigator'],
 ['2020–2022','Provably secure program obfuscation for outsourced cloud computing','State Key Laboratory of Information Security, Chinese Academy of Sciences','','Principal Investigator'],
 ['2019–2021','White-box-secure program obfuscation enhanced by pseudoentropy','State Key Laboratory of Cryptology','','Principal Investigator'],
 ['2017–2020','Key techniques for provably secure program obfuscation','NSFC, General Program','61672010','Principal Investigator'],
 ['2017–2019','Secure office cloud and big-data analytics platforms','Industry-sponsored research','','Principal Investigator'],
 ['2014–2017','Leakage-resilient identity-based encryption and its provable security','NSFC, General Program','61370224','Principal Investigator'],
 ['2014–2015','Privacy protection in the presence of sensitive information leakage','Natural Science Foundation of Hubei Province, Key Program','','Principal Investigator'],
 ['2013–2015','Leakage-resilient outsourced computing in the cloud','Hubei Province Chutian Scholar Research Program','','Principal Investigator'],
 ['2012–2013','Data and attribute privacy under general functional policies in cloud computing','Natural Science Foundation of Guangdong Province','','Principal Investigator'],
 ['2010–2012','Privacy-carrying Cryptography and its Applications in Decentralized Trust Systems','Japan Society for the Promotion of Science (JSPS)','','Principal Investigator'],
 ['2008–2009','Privacy-preserving trust models for Internet of Things nodes','Natural Science Foundation of Guangdong Province','','Principal Investigator'],
];
// Bibliographic details transcribed from the university faculty profile and official English CV.
const earlierPapers = [
 [2025,'Y. Wang and M. Zhang','Witness encryption with updatable ciphertexts','Science China Information Sciences','68: 132109'],
 [2025,'Jing Wang, Yanwei Zhou, Yasi Zhu, Zhiquan Liu, Bo Yang, Mingwu Zhang','Bidirectional Identity-Based Inner-Product Functional Re-Encryption in Vaccine Data Sharing','IEEE Transactions on Cloud Computing','13(2): 617–628','https://doi.org/10.1109/tcc.2025.3552740'],
 [2024,'H. Song, H. Shen, N. Zhao, Z. He, M. Wu, W. Xiong and M. Zhang','APLDP: adaptive personalized local differential privacy data collection in mobile crowdsensing','Computers & Security','136: 103517'],
 [2024,'Y. Zhou, L. Cao, Z. Qiao, R. Xu, Y. Han, J. Xing, B. Yang, Z. Xia and M. Zhang','A novel cloud-assisted authentication key agreement protocol for VANET','IEEE Transactions on Vehicular Technology','73(9): 13526–13541'],
 [2023,'M. Zhang, S. Chen, J. Shen and W. Susilo','PrivacyEAFL: privacy-enhanced aggregation for federated learning in mobile crowdsensing','IEEE Transactions on Information Forensics and Security','18: 5804–5816'],
 [2023,'M. Zhang, Y. Chen and W. Susilo','Decision tree evaluation on sensitive datasets for secure e-healthcare systems','IEEE Transactions on Dependable and Secure Computing','20(5): 3988–4001'],
 [2023,'H. Shen, G. Wu, Z. Xia, W. Susilo and M. Zhang','A privacy-preserving and verifiable statistical analysis scheme for an e-commerce platform','IEEE Transactions on Information Forensics and Security','18: 2637–2652'],
 [2023,'H. Shen, G. Wu, W. Susilo and M. Zhang','Data-matching-based privacy-preserving statistics and its applications in digital publishing industry','IEEE Transactions on Services Computing','16(6): 4554–4566'],
 [2023,'M. Zhang, M. Yang, G. Shen, Z. Xia and Y. Wang','A verifiable and privacy-preserving cloud mining pool selection scheme in blockchain of things','Information Sciences','623: 293–310'],
 [2023,'Y. Zhou, B. Yang, Z. Qiao, Z. Xia, M. Zhang and Y. Mu','Leakage-resilient identity-based cryptography from minimal assumption','Designs, Codes and Cryptography','91: 3757–3801'],
 [2023,'M. Zhang, Z. Li and P. Zhang','A secure and privacy-preserving word vector training scheme based on functional encryption with inner-product predicates','Computer Standards & Interfaces','86: 103734'],
 [2023,'G. Deng, M. Tang, Y. Xi and M. Zhang','Privacy-preserving online medical prediagnosis training model based on soft-margin SVM','IEEE Transactions on Services Computing','16(3): 2072–2084'],
 [2023,'B. Chen, T. Xiang, G. Xiao, M. Zhang, D. He and Y. Zhang','Efficient attribute-based signature with collusion resistance for Internet of vehicles','IEEE Transactions on Vehicular Technology','72(6): 7844–7856'],
 [2023,'H. Shen, J. Li, G. Wu and M. Zhang','Data release for machine learning via correlated differential privacy','Information Processing & Management','60(3): 103349'],
 [2022,'M. Zhang, M. Yang and G. Shen','SSBAS-FA: A secure sealed-bid e-auction scheme with fair arbitration based on time-released blockchain','Journal of Systems Architecture','129: 102619'],
 [2021,'Y. Zhou, B. Yang, Z. Xia, M. Zhang and Y. Mu','Novel generic construction of leakage-resilient PKE scheme with CCA security','Designs, Codes and Cryptography','89(7): 1575–1614'],
 [2021,'Y. Zhou, Y. Xu, Z. Qiao, B. Yang and M. Zhang','Continuous leakage-resilient certificate-based signcryption scheme and application in cloud computing','Theoretical Computer Science','860: 1–22'],
 [2021,'M. Zhang, Y. Chen and J. Lin','A privacy-preserving optimization of neighborhood-based recommendation for medical-aided diagnosis and treatment','IEEE Internet of Things Journal','8(13): 10830–10842'],
 [2020,'M. Zhang, Y. Chen and W. Susilo','PPO-CPQ: A privacy-preserving optimization of clinical pathway query for e-healthcare systems','IEEE Internet of Things Journal','7(10): 10660–10672'],
 [2020,'Y. Zhou, B. Yang, Z. Xia, M. Zhang and Y. Mu','Identity-based encryption with leakage-amplified chosen-ciphertext attacks security','Theoretical Computer Science','809: 277–295'],
 [2018,'X. Li, Y. Zhu, J. Wang, Z. Liu, Y. Liu and M. Zhang','On the soundness and security of privacy-preserving SVM for outsourcing data classification','IEEE Transactions on Dependable and Secure Computing','15(5): 906–912'],
 [2017,'H. Shen, M. Zhang and J. Shen','Efficient privacy-preserving cube-data aggregation scheme for smart grids','IEEE Transactions on Information Forensics and Security','12(6): 1369–1381'],
 [2016,'R. Chen, Y. Mu, G. Yang, W. Susilo, F. Guo and M. Zhang','Cryptographic reverse firewall via malleable smooth projective hash function','ASIACRYPT 2016','LNCS 10031, Part I: 844–876'],
 [2015,'S. Ma, Q. Huang, M. Zhang and B. Yang','Efficient public-key encryption with equality test supporting flexible authorization','IEEE Transactions on Information Forensics and Security','10(3): 458–470'],
];
export const papers = [...recentPapers, ...earlierPapers].sort((a,b)=>b[0]-a[0]);
const ul = items => `<ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
const sourceNote = `<p class="source-note">Source: the April 2025 HBUT faculty profile for Professor Mingwu Zhang. Figures describe that individual record, not a group-wide total.</p>`;
const recentNote = `<p class="source-note">Recent records checked on 29 October 2026 against publisher metadata, conference records, university reports, and author archives. Issue years and online publication dates may differ; preprints and accepted papers are labeled separately.</p>`;
const awardDescription = `<strong>CSS 2026 Best Paper Award.</strong> HBUT reports that the SAML research paper received a Best Paper Award. Doctoral student Peng Yu is the first author and Mingwu Zhang is the corresponding author. The work investigates privacy-preserving anti-money-laundering analysis using multi-client functional encryption. <a href="${recentSources.award}" target="_blank" rel="noopener">HBUT report, 20 August 2026 ↗</a>`;
const recentHighlights = `<section class="recent-highlights" aria-labelledby="recent-title"><h2 id="recent-title">Recent Group Highlights</h2><ul><li><span class="highlight-date">August 2026</span><div>${awardDescription}</div></li><li><span class="highlight-date">2026 · IEEE TIFS</span><div><a href="https://doi.org/10.1109/tifs.2026.3666853" target="_blank" rel="noopener">PPOM-Attack</a> studies black-box adversarial attacks against face recognition. Mingwu Zhang is a co-author; Ke Cheng is first author and Jixin Zhang is corresponding author. <a href="${recentSources.ppom}" target="_blank" rel="noopener">HBUT report ↗</a></div></li><li><span class="highlight-date">2026 · IEEE TVT</span><div><a href="https://doi.org/10.1109/tvt.2026.3664438" target="_blank" rel="noopener">An Efficient, Identifiable and Abortable Multi-Party Signature Scheme for VANETs</a>, with Gang Shen as first author and Mingwu Zhang as corresponding author. HBUT report, 11 April 2026</div></li><li><span class="highlight-date">2025 · IEEE TIFS</span><div><a href="https://doi.org/10.1109/tifs.2025.3599388" target="_blank" rel="noopener">An Efficient Graph Encryption Scheme Supporting Shortest Path Fuzzy Queries</a>, with Hua Shen as first author and Mingwu Zhang as corresponding author. <a href="${recentSources.graph}" target="_blank" rel="noopener">HBUT report ↗</a></div></li></ul><p><a href="/publication/">See recent papers and preprints →</a></p></section>`;
const profile = `<div class="home-layout">
<aside class="profile-sidebar" aria-label="Contact information">
<img class="portrait" src="/assets/mingwu-zhang.png" alt="Professor Mingwu Zhang" width="150" height="222">
<ul class="contact-list">
<li><span class="contact-icon" aria-hidden="true">⌖</span><span>Institute of Cyberspace Security<br>B608, Training Building<br>Hubei University of Technology</span></li>
<li><span class="contact-icon" aria-hidden="true">⌖</span><span>28 Nanli Road, Hongshan<br>Wuhan, Hubei 430068<br>P. R. China</span></li>
<li><span class="contact-icon" aria-hidden="true">✉</span><a href="mailto:hbutzhang@gmail.com">hbutzhang@gmail.com</a></li>
</ul>
<div class="profile-links"><a href="${links.scholar}" target="_blank" rel="noopener">Google Scholar ↗</a><a href="${links.dblp}" target="_blank" rel="noopener">DBLP ↗</a><a href="${links.cv}" target="_blank" rel="noopener">University CV (PDF, historical) ↗</a></div>
</aside>
<article class="biography"><h1>Mingwu Zhang</h1>
<div class="academic-titles">Professor of Computer Science<br>Ph.D. and Master's Supervisor<br>Director, Institute of Cyberspace Security<br>Institute of Cyberspace Security<br>Hubei University of Technology, Wuhan, China</div>
<div class="bio-body"><p><strong>Dr. Mingwu Zhang</strong> is a Professor at the Institute of Cyberspace Security, Hubei University of Technology (HBUT). He directs the university's Institute of Cyberspace Security. His research focuses on <strong>public-key and applied cryptography, big-data security and privacy, blockchain and industrial Internet security, and artificial intelligence security.</strong></p>
${recentHighlights}
<p>Dr. Zhang is a Hubei Province distinguished talent and was selected as a <strong>Chutian Scholar Distinguished Professor</strong> in 2013. He has been included in the career-long list of the world's top 2% scientists. From 2010 to 2012, he was a postdoctoral researcher and JSPS Fellow at Kyushu University, Japan. He was a visiting scholar at the University of Wollongong, Australia, from 2015 to 2016.</p>
<p>His research connects the foundations of cryptography with privacy-sensitive applications. Topics include functional encryption, witness encryption, leakage-resilient cryptography, provably secure program obfuscation, privacy-preserving machine learning, and secure data sharing. He has led more than 30 research projects, including projects supported by the <strong>National Natural Science Foundation of China</strong>, provincial research programs, JSPS, and industry.</p>
<p>He has published more than 100 research papers in journals and conferences including <em>Designs, Codes and Cryptography</em>, <em>IEEE Transactions on Information Forensics and Security</em>, <em>IEEE Transactions on Dependable and Secure Computing</em>, <em>IEEE Transactions on Services Computing</em>, and ASIACRYPT. He has authored three research monographs and served as an author or editor of six textbooks.</p>
<p>The April 2025 HBUT profile reports eight best paper awards for Dr. Zhang's work, including recognition at ACISP 2018, Inscrypt 2018, EIDWT 2017, and FCS 2024. His academic service includes editorial roles for more than ten journals and conference leadership at ProvSec 2023, EIDWT 2017, AsiaJCIS 2014, and JWIS 2010.</p>
<p>He also serves as Director of the Hubei Engineering Technology Research Center for SME Big Data and Deputy Director of the Hubei Blockchain Technology Innovation Research Institute.</p>
<p>For research projects and representative publications, visit <a href="/research/">Research</a> and <a href="/publication/">Papers</a>. Information about graduate supervision is available on the <a href="/teaching/">Members</a> page.</p>${sourceNote}</div></article></div>`;
export const home = `<div class="portal">
<section class="portal-hero"><p class="portal-kicker">Hubei University of Technology · Institute of Cyberspace Security</p><h1>INSTITUTE OF CYBERSPACE SECURITY</h1><p class="portal-lead">The institute brings together faculty and graduate students working on cryptographic mechanisms and their use in securing data, computation, and intelligent systems. It is led by Professor Mingwu Zhang.</p><div class="portal-actions"><a class="portal-button" href="/teaching/">Meet our members</a><a class="portal-button portal-button-secondary" href="/research/">Explore our research</a></div></section>
<section class="keyword-banner" aria-label="Research keywords"><div class="keyword-cloud"><span class="kw-xl">CRYPTOGRAPHY</span><span class="kw-sm">FUNCTIONAL ENCRYPTION</span><span class="kw-md">LEAKAGE RESILIENCE</span><span class="kw-xl">PRIVACY</span><span class="kw-sm">FEDERATED LEARNING</span><span class="kw-lg">AI SECURITY</span><span class="kw-md">SECURE COMPUTATION</span><span class="kw-sm">AUTHENTICATION</span><span class="kw-xl">DATA SECURITY</span><span class="kw-md">CLOUD COMPUTING</span><span class="kw-sm">BIG-DATA PRIVACY</span><span class="kw-lg">BLOCKCHAIN</span><span class="kw-sm">OUTSOURCED COMPUTATION</span><span class="kw-md">IOT SECURITY</span><span class="kw-sm">VEHICULAR NETWORKS</span><span class="kw-lg">SECURE DATA SHARING</span><span class="kw-sm">INDUSTRIAL INTERNET</span><span class="kw-md">PRIVACY-PRESERVING ML</span></div></section>
<section class="portal-section"><h2>Research Areas</h2><div class="portal-cards">
<a class="portal-card" href="/research/"><h3>Public-key &amp; Applied Cryptography</h3><p>Functional and witness encryption, identity-based encryption, leakage resilience, and provably secure program obfuscation.</p></a>
<a class="portal-card" href="/research/"><h3>Big-data Security &amp; Privacy</h3><p>Secure data sharing, verifiable statistics, privacy-preserving aggregation, and outsourced computation.</p></a>
<a class="portal-card" href="/research/"><h3>Blockchain &amp; Industrial Internet</h3><p>Blockchain supervision, secure crowdsensing, fair electronic auctions, and Internet of Things privacy.</p></a>
<a class="portal-card" href="/research/"><h3>Artificial Intelligence Security</h3><p>Privacy-preserving federated learning, secure model evaluation, and protected computation on sensitive datasets.</p></a>
</div></section>
<section class="portal-section">${recentHighlights}<p class="source-note">These records involve group members and their collaborators; author roles are shown, and individual records are kept on <a href="/teaching/">faculty profiles</a>.</p></section>
<section class="portal-section"><h2>Explore the Group</h2>${ul(['<a href="/teaching/">Members</a> — profiles of the people behind the research.','<a href="/research/">Research</a> — projects, funding, and research directions.','<a href="/publication/">Papers</a> — journal, conference, and manuscript records.','<a href="/awards/">Awards</a> and <a href="/patents/">Patents</a> — recognition and patent records.','<a href="/services/">Access</a> — our address and map.'])}</section>
<section class="portal-section"><h2>Contact the Group</h2><p>Our office is B608, Training Building, Hubei University of Technology, 28 Nanli Road, Hongshan District, Wuhan, Hubei 430068, P. R. China. For general enquiries, contact <a href="mailto:hbutzhang@gmail.com">hbutzhang@gmail.com</a> (Professor Mingwu Zhang). Individual faculty contacts are listed on the <a href="/teaching/">Members</a> page.</p><p class="source-note">Historical faculty records are based on the April 2025 HBUT faculty profile and the HBUT faculty roster (accessed 9 November 2026). The office address and the current student roster were provided by the group.</p></section>
</div>`;
// Group member records. Add a member here to create /teaching/<slug>/ automatically.
// Fields: slug, name, nameEn, role, focus, photo, bio, contact, source, placeholder, detail.
const rosterNote = label => `<p class="source-note">Based on the ${label} and the HBUT faculty roster (accessed 9 November 2026). Chinese titles and research areas are editorial translations.</p>`;
export const members = [
 {
  slug: 'mingwu-zhang', name: 'Mingwu Zhang', role: 'Professor · Group Leader',
  focus: 'Public-key cryptography, big-data security and privacy, AI security',
  photo: '/assets/mingwu-zhang.png', detail: profile
 },
 {
  slug: 'hua-shen', name: 'Hua Shen', role: "Professor · Master's Supervisor",
  focus: 'AI security, information security, privacy-preserving computation',
  photo: '/assets/hua-shen.png',
  bio: `<p><strong>Hua Shen</strong> is a Professor and Master's Supervisor in the Institute of Cyberspace Security at HBUT. The faculty profile records a Ph.D. from Wuhan University (2014), a visiting scholarship at the University of Wollongong, senior membership of the China Computer Federation, and IEEE membership.</p>
<h2>Research and Supervision</h2><p>AI security, information security, privacy-preserving computation and privacy protection. The profile lists supervision in information security, privacy computing and privacy protection for Computer Science and Technology / Electronic Information.</p>
<h2>Teaching</h2><p>Provable Security; Data Structures; Operating System Principles and Security; Cryptography Principles and Applications; Industrial Big Data Security and Privacy Protection.</p>
<h2>Selected Projects</h2><ul><li>NSFC Young Scientists Fund: privacy-preserving data aggregation for massive-data analysis.</li><li>Hubei Provincial Department of Education key project: privacy-protection mechanisms for smart grids.</li><li>HBUT Green Industry Technology Leading Program: privacy protection for industrial big data published by small and medium-sized enterprises.</li></ul>`,
  source: rosterNote('HBUT faculty profile for Hua Shen')
 },
 {
  slug: 'gang-shen', name: 'Gang Shen', role: "Lecturer · Master's Supervisor",
  focus: 'Cryptography; data security and privacy in vehicular networks, e-healthcare and AI',
  photo: '/assets/gang-shen.png',
  bio: `<p><strong>Gang Shen</strong> is a Lecturer and Master's Supervisor at HBUT. The faculty profile records a doctoral degree and reports more than 20 SCI/EI-indexed papers and over 10 granted invention patents.</p>
<h2>Research and Supervision</h2><p>Cryptography, and data security and privacy protection for vehicular networks, healthcare networks and artificial intelligence.</p>
<h2>Selected Projects</h2><ul><li>Hubei Provincial Natural Science Foundation general project (2023AFB951): key techniques for leakage-resilient homomorphic secret sharing, 2023–2025.</li><li>Hubei Provincial Department of Education project: security of trustworthy federated learning in smart healthcare, 2024–2026.</li></ul>`,
  source: rosterNote('HBUT faculty profile for Gang Shen')
 },
 {
  slug: 'yuanyuan-zhang', name: 'Yuanyuan Zhang', role: "Associate Professor · Master's Supervisor",
  focus: 'Public-key cryptography, authentication, big-data security and privacy',
  photo: '/assets/yuanyuan-zhang.png', contact: '276502507@qq.com',
  bio: `<p><strong>Yuanyuan Zhang</strong> is an Associate Professor and Master's Supervisor at HBUT and a Nanhu Scholar. The faculty profile reports more than ten SCI papers as first or corresponding author and more than ten patent applications as first applicant.</p>
<h2>Research</h2><p>Public-key cryptography; big-data security and privacy protection; digital economy and AI security; blockchain and industrial Internet security.</p>
<h2>Teaching</h2><p>Mathematical Foundations of Information Security; Discrete Mathematics.</p>
<h2>Selected Projects and Recognition</h2><ul><li>Principal investigator, NSFC Young Scientists Fund project on leakage-resilient authenticated key exchange.</li><li>Second Prize, Science and Technology Award of the China Institute of Communications; co-chair of ProvSec 2023.</li><li>Member of the Hubei Cyberspace Security Society.</li></ul>`,
  source: rosterNote('HBUT faculty profile for Yuanyuan Zhang')
 },
 { slug: 'yuzhu-wang', name: 'Yuzhu Wang', role: 'Group member', focus: 'Profile to be added', placeholder: true },
 { slug: 'yu-chen', name: 'Yu Chen', role: 'Group member', focus: 'Profile to be added', placeholder: true }
];
export const memberPaths = members.map(m => `teaching/${m.slug}`);
export function memberPages() {
 return Object.fromEntries(members.map(m => [`/teaching/${m.slug}/`, { name: m.name, content: memberPage(m), section: '/teaching/' }]));
}
function memberPortrait(m) {
 const initials = m.name.split(' ').map(word => word.charAt(0)).slice(0, 2).join('').toUpperCase();
 return m.photo ? `<img src="${m.photo}" alt="${m.name}" width="150" height="222">` : `<span class="member-photo-placeholder" aria-hidden="true">${initials}</span>`;
}
const memberTags = {
 'mingwu-zhang': ['Cryptography', 'Data Security', 'AI Security'],
 'hua-shen': ['AI Security', 'Information Security', 'Privacy Computing'],
 'gang-shen': ['Cryptography', 'Data Privacy', 'AI Security'],
 'yuanyuan-zhang': ['Public-key Cryptography', 'Authentication', 'Big-data Security']
};
function memberCard(m) {
 const tags = memberTags[m.slug] || (m.placeholder ? [] : m.focus.split(/[,;]/).map(s => s.trim()).filter(Boolean).slice(0, 3));
 return `<a class="member-card" href="/teaching/${m.slug}/">${memberPortrait(m)}<div class="member-card-body"><h3>${m.name}</h3>${m.nameEn ? `<p class="member-name-en">${m.nameEn}</p>` : ''}<p class="member-role">${m.role}</p><div class="member-tags">${tags.map(t => `<span class="member-tag">${t}</span>`).join('')}</div>${m.placeholder ? '<span class="member-badge">Profile pending</span>' : ''}</div></a>`;
}
export const memberCards = `<div class="member-grid">${members.map(memberCard).join('')}</div>`;
function memberPage(m) {
 const breadcrumb = `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/teaching/">Members</a><span aria-hidden="true">/</span><span aria-current="page">${m.name}</span></nav>`;
 if (m.detail) {
  const detail = m.detail.replace('Recent Group Highlights', 'Recent Highlights');
  return `${breadcrumb}<p class="profile-note">Individual faculty profile — personal record, not a group-wide summary.</p>${detail}${m.slug === 'mingwu-zhang' ? `<section class="member-extra inner-page">${zhangSupervision}</section>` : ''}`;
 }
 const contact = m.contact ? `<ul class="contact-list"><li><span class="contact-icon" aria-hidden="true">✉</span><a href="mailto:${m.contact}">${m.contact}</a></li></ul>` : '';
 const body = m.placeholder
  ? `<p>This entry is an English-romanised name placeholder from the HBUT faculty roster. No verified individual profile has been published there yet, so no title, research area or biography is assumed. Details will be added when available.</p>`
  : `${m.bio || ''}${m.source || ''}`;
 return `${breadcrumb}<div class="home-layout member-layout"><aside class="profile-sidebar">${memberPortrait(m)}${contact}</aside><article class="biography"><h1>${m.name}</h1>${m.nameEn ? `<div class="member-name-en">${m.nameEn}</div>` : ''}<div class="academic-titles">${m.role}</div><div class="bio-body">${body}</div></article></div>`;
}
export const research = `<h1>RESEARCH</h1><p>The institute's research program explores the design of cryptographic mechanisms and their use in securing data, computation, and intelligent systems. Group faculty and students work across four complementary areas:</p>
${ul(['<strong>Public-key and applied cryptography:</strong> functional and witness encryption, identity-based encryption, leakage resilience, and provably secure program obfuscation.','<strong>Big-data security and privacy:</strong> secure data sharing, verifiable statistics, privacy-preserving aggregation, and outsourced computation.','<strong>Blockchain and industrial Internet security:</strong> blockchain supervision, secure crowdsensing, fair electronic auctions, and privacy in the Internet of Things.','<strong>Artificial intelligence security:</strong> privacy-preserving federated learning, secure model evaluation, and protected computation on sensitive datasets.'])}
<h2>Recent Research Outputs</h2><ul><li><strong>AI security:</strong> PPOM-Attack investigates adversarial attacks on black-box face recognition systems (<a href="https://doi.org/10.1109/tifs.2026.3666853" target="_blank" rel="noopener">IEEE TIFS, 2026</a>).</li><li><strong>Secure collaboration:</strong> recent work includes identifiable and abortable multi-party signatures for vehicular networks (<a href="https://doi.org/10.1109/tvt.2026.3664438" target="_blank" rel="noopener">IEEE TVT, 2026</a>) and secret-sharing / multi-key homomorphic encryption for federated learning (<a href="https://doi.org/10.1016/j.ins.2026.123619" target="_blank" rel="noopener">Information Sciences, 2026</a>).</li><li><strong>Privacy-preserving data analysis:</strong> recent results address encrypted graph queries (<a href="https://doi.org/10.1109/tifs.2025.3599388" target="_blank" rel="noopener">IEEE TIFS, 2025</a>) and optimization over vertically federated data (<a href="https://doi.org/10.1109/tifs.2026.3696555" target="_blank" rel="noopener">IEEE TIFS, 2026</a>).</li></ul><p>See <a href="/publication/">Papers</a> for bibliographic records, accepted conference work, and separately labeled author manuscripts.</p>${recentNote}
<h2>Faculty Research Projects</h2><p>The projects below are recorded in Professor Mingwu Zhang's April 2025 faculty profile, where he is listed as principal investigator or co-principal investigator. Expand a title to view funding information and the recorded role.</p>
<div class="projects">${projects.map(([years,title,funder,id,role])=>`<details><summary>${title}<span class="project-years">${years}</span></summary><div class="project-detail"><p><strong>Funding:</strong> ${funder}${id?`<br><strong>Grant:</strong> ${id}`:''}<br><strong>Period:</strong> ${years}<br><strong>Role:</strong> ${role}</p></div></details>`).join('')}</div>
<h2>Research Group</h2><p>Research is carried out at HBUT's Institute of Cyberspace Security. Graduate supervision covers cryptography, data security and privacy, blockchain, industrial Internet security, and AI security.</p><p>See <a href="/teaching/">Members</a> for supervision areas and contact information.</p>${sourceNote}`;
export const awards = `<h1>AWARDS</h1><p>Recognition reported for the institute, its faculty and its students. Recent group results come first; the sections marked "Faculty Profile" reproduce records from Professor Mingwu Zhang's April 2025 faculty profile.</p><h2>Recent Group Recognition</h2><p>${awardDescription}</p><p>The conference’s <a href="${recentSources.css}" target="_blank" rel="noopener">accepted-paper list</a> confirms the title <em>SAML: A Secure Anti-Money Laundering Scheme with Multi-Client Functional Encryption</em> and its authors.</p>${recentNote}
<h2>Faculty and Student Recognition</h2>${ul(['Peng Yu (doctoral student): first author of the CSS 2026 Best Paper Award paper, with Mingwu Zhang as corresponding author (HBUT report, 20 August 2026).','Hua Shen: INSCRYPT 2018 Best Paper Award and a 2023 Outstanding Paper Award from the Journal of Wuhan University (faculty profile).','Yuanyuan Zhang: Second Prize, Science and Technology Award of the China Institute of Communications (faculty profile).','Gang Shen: university-level Outstanding Class Advisor and Outstanding Individual awards (faculty profile).'])}<p class="source-note">From linked HBUT faculty profiles and university reports, checked 9 November 2026.</p>
<h2>Faculty Profile: Academic Honors (Professor Mingwu Zhang)</h2>${ul(['Selected for the career-long list of the world’s top 2% scientists, as reported in the HBUT faculty profile.','Chutian Scholar Distinguished Professor, Hubei Province (selected in 2013).','Hubei Province distinguished talent.'])}
<h2>Faculty Profile: Best Paper Awards</h2><p>The April 2025 university profile reports eight best paper awards for Professor Mingwu Zhang's work. Named venues include:</p>
${ul(['FCS 2024','ACISP 2018','Inscrypt 2018','EIDWT 2017'])}
<h2>Faculty Profile: Research and Technology Awards</h2><p>The same profile records five science and technology awards, including:</p>${ul(['Second Prize for provincial scientific and technological progress.','Third Prize for provincial natural science.','Third Prize for provincial scientific and technological progress.','Second Prize for scientific and technological progress, Wuhan.'])}
<h2>Faculty Profile: Academic Writing and Graduate Supervision</h2><ul class="dated-list"><li><span>2023</span><div>Outstanding Master's Thesis Supervisor, Hubei Commercial Cryptography Association.</div></li><li><span>2022</span><div>Outstanding Master's Thesis Supervisor, inaugural award of the Hubei Cyberspace Security Society.</div></li><li><span>2021</span><div>Outstanding Academic Monograph in Cyberspace Security, Hubei Province.</div></li></ul>${sourceNote}`;
export const patents = `<h1>PATENTS</h1><h2>Intellectual Property and Technology Transfer</h2><p>Group faculty work on intellectual property development and the transfer of research outcomes into practice. The table below reproduces aggregate figures from Professor Mingwu Zhang's April 2025 faculty profile; they describe his recorded outputs, not a group-wide total.</p>
<table><caption>Aggregate figures reported in Professor Mingwu Zhang's April 2025 faculty profile</caption><thead><tr><th scope="col">Category</th><th scope="col">Reported outcome</th></tr></thead><tbody><tr><th scope="row">Patent applications</th><td>More than 90</td></tr><tr><th scope="row">Patent technology transfers</th><td>6</td></tr><tr><th scope="row">Software copyrights</th><td>More than 30</td></tr><tr><th scope="row">Industry standards</th><td>Participation in 3 standards</td></tr></tbody></table>
<h2>Faculty Patent Records</h2><p>Linked faculty profiles also report granted invention patents and patent applications by group members, including Hua Shen (privacy-preserving data processing and smart grids), Gang Shen (V2G authentication and online medical diagnosis), and Yuanyuan Zhang (authentication and key agreement). See their <a href="/teaching/">profiles</a> for details.</p><p class="source-note">From linked HBUT faculty profiles, checked 9 November 2026.</p>
<h2>Research and Industry</h2><p>Industry-sponsored projects listed in Professor Mingwu Zhang's faculty profile include security and privacy in machine learning; malicious audio and video traffic detection; secure chips and card issuance systems for color printing; analysis of malicious blockchain transactions; and secure office cloud and big-data analytics platforms.</p><p>Related funded research is listed on the <a href="/research/">Research</a> page.</p>
<h2>Patent and Collaboration Enquiries</h2><p>For patent records, licensing information, or research collaboration, contact the group at <a href="mailto:hbutzhang@gmail.com">hbutzhang@gmail.com</a> (Professor Mingwu Zhang) or consult individual <a href="/teaching/">faculty profiles</a>.</p><p class="source-note">The public faculty profile gives aggregate figures without an itemized patent register. These figures describe applications and transfers, and do not imply that all applications have been granted.</p>${sourceNote}`;
const alumniDestinations = `<p>Graduates have continued their studies or pursued careers in universities, technology companies, security firms, and public-sector organizations. The faculty profile lists the following examples:</p><h3>Further Study</h3><p>University of Tokyo; University of Tsukuba; University of Wollongong; RMIT University; Queen's University, Canada; Wuhan University; Huazhong University of Science and Technology; Sun Yat-sen University; Beijing Institute of Technology; Southeast University; Nanjing University of Aeronautics and Astronautics; and National University of Defense Technology.</p><h3>Technology and Security</h3><p>HP, Tencent, Huawei, NetEase, Alibaba, Meitu, Qi-Anxin, NSFOCUS, Tianyu, Topsec, Antiy, and Dahua Technology.</p><h3>Public Sector and Industry</h3><p>China Customs, China Telecom, China Unicom, China National Nuclear Corporation, Bank of China, ICBC, China CITIC Bank, Hubei Bank, Hankou Bank, China Construction Bank, China Post, and Dongfeng.</p>`;
const zhangSupervision = `<h2>Graduate Supervision</h2><p>Dr. Zhang supervises doctoral and master's students at Hubei University of Technology. Supervision areas listed in the university faculty profile include:</p><table><thead><tr><th scope="col">Degree</th><th scope="col">Fields and Research Areas</th></tr></thead><tbody><tr><th scope="row">Doctoral</th><td>Electrical Engineering; smart-grid security; Internet of Vehicles security</td></tr><tr><th scope="row">Academic Master's</th><td>Computer Science and Technology; Cyberspace Security</td></tr><tr><th scope="row">Professional Master's</th><td>Electronic Information / Computer Application Technology</td></tr></tbody></table>
<h2>Research Directions</h2>${ul(['Network and information security','Big-data security and privacy protection','Blockchain and industrial Internet security','Artificial intelligence security'])}
<h2>Recent Student Achievement</h2><p>${awardDescription}</p>
<h2>Prospective Students</h2><p>Motivated students with a serious interest in cryptography and security are welcome to enquire about supervision. Please contact <a href="mailto:hbutzhang@gmail.com">hbutzhang@gmail.com</a> for current opportunities and research topics. Alumni destinations and the current student roster are shown on the <a href="/teaching/">Members</a> page.</p><p>For university application information, visit the <a href="https://yjs.hbut.edu.cn/" target="_blank" rel="noopener">HBUT Graduate School</a> or the <a href="https://sie.hbut.edu.cn/" target="_blank" rel="noopener">School of International Education</a>.</p>${sourceNote}`;
// Current student roster provided by the group. Names are English romanisations.
export const currentStudents = [
 { name: 'Guanghao Gao', degree: "Master's" },
 { name: 'Jing Gao', degree: "Master's" },
 { name: 'Cunzhi Li', degree: "Master's" },
 { name: 'Jilei Li', degree: "Master's" },
 { name: 'Yilin Liu', degree: "Master's" },
 { name: 'Wencan Lu', degree: "Master's" },
 { name: 'Dan Luo', degree: "Master's" },
 { name: 'Yunxiao Mu', degree: "Master's" },
 { name: 'Haogang Qin', degree: "Master's" },
 { name: 'Bensheng Wan', degree: "Master's" },
 { name: 'Kewen Wang', degree: "Master's" },
 { name: 'Nanyang Wang', degree: "Master's" },
 { name: 'Zixiao Xu', degree: "Master's" },
 { name: 'Xinyi Zhang', degree: "Master's" },
 { name: 'Yanrui Zhao', degree: "Master's" },
 { name: 'Xiang Zou', degree: "Master's" },
 { name: 'Peng Yu', degree: 'Ph.D.' }
];
function studentGroup(title, list) {
 return `<h3 class="student-section-title">${title} <span class="student-count">(${list.length})</span></h3><div class="student-grid">${list.map(s => `<div class="student-card"><h3>${s.name}</h3><p class="student-degree">${s.degree === 'Ph.D.' ? 'Doctoral student' : "Master's student"}</p></div>`).join('')}</div>`;
}
function currentStudentsBlock() {
 const doctoral = currentStudents.filter(s => s.degree === 'Ph.D.');
 const graduate = currentStudents.filter(s => s.degree !== 'Ph.D.');
 return `${studentGroup("Master's Students", graduate)}${studentGroup('Doctoral Students', doctoral)}`;
}
export const team = `<h1>MEMBERS</h1><p>The Institute of Cyberspace Security is led by Professor Mingwu Zhang. This page brings together the faculty, current students, and examples of where graduates have gone.</p>
<h2>Faculty</h2><p>The faculty below appear on the HBUT faculty roster; profiles come from published faculty pages, and roster-only entries are marked as name placeholders.</p>${memberCards}
<h2>Current Students</h2>${currentStudentsBlock()}
<h2>Alumni Destinations</h2><p>The April 2025 HBUT faculty profile reports the following destinations for graduates supervised by Professor Mingwu Zhang. These are examples from that profile, not an exhaustive group-wide placement record.</p>${alumniDestinations}<p class="source-note">Faculty records checked against the HBUT faculty roster on 9 November 2026; alumni destinations come from the April 2025 faculty profile. The current student roster was provided by the group.</p>`;
export const services = `<h1>ACCESS</h1><p>The group is based in Room B608 of the Training Building at Hubei University of Technology, Wuhan. Please arrange visits in advance by email.</p>
<div class="access-grid"><div class="access-card"><h2>Address</h2><p>B608, Training Building<br>Hubei University of Technology<br>28 Nanli Road, Hongshan District<br>Wuhan, Hubei 430068<br>P. R. China</p><h2>Contact</h2><p>For visits and general enquiries: <a href="mailto:hbutzhang@gmail.com">hbutzhang@gmail.com</a> (Professor Mingwu Zhang).</p><p><a class="portal-button" href="https://www.google.com/maps/search/?api=1&amp;query=30.478919702118347%2C114.30883311267907" target="_blank" rel="noopener">Open in Google Maps ↗</a></p></div>
<div class="access-map"><iframe class="map-embed" title="Google Maps location of B608, Training Building, Hubei University of Technology" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d838.5337872229908!2d114.30883311267907!3d30.478919702118347!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI4JzQyLjciTiAxMTTCsDE4JzMyLjgiRQ!5e0!3m2!1szh-CN!2ssg!4v1794491960850!5m2!1szh-CN!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div></div>
<p class="source-note">The map pin marks B608 in the Training Building. Please arrange visits in advance by email.</p>`;
function renderPaper([year, authors, title, venue, ref, url, note]) {
 const authorText = authors.replace(/Mingwu Zhang|M\. Zhang|Hua Shen|H\. Shen|Gang Shen|G\. Shen|Yuanyuan Zhang|Yuzhu Wang|Yu Chen|Peng Yu/g, '<strong>$&</strong>');
 const target = url || `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
 return `<li class="paper"><span>${authorText}.</span> <a class="paper-title" href="${target}" target="_blank" rel="noopener">${title}.</a> <em>${venue}</em>${ref ? `, ${ref}` : ''} (${year}).${note ? `<span class="record-note">${note}</span>` : ''}</li>`;
}
function renderYears(records, label = '') {
 return [...new Set(records.map(p=>p[0]))].map(year=>`<section class="publication-year" data-year="${year}"><h2>${label}${year}</h2><ol>${records.filter(p=>p[0]===year).map(renderPaper).join('')}</ol></section>`).join('');
}
export function papersPage() {
 const years = [...new Set([...papers, ...preprints].map(p=>p[0]))].sort((a,b)=>b-a);
 return `<h1>PAPERS</h1><p>Selected publications involving Institute of Cyberspace Security faculty, students and their collaborators, including 2025–2026 results. Group members are shown in bold. For Professor Mingwu Zhang's full bibliography, see <a href="${links.dblp}" target="_blank" rel="noopener">DBLP</a> and <a href="${links.scholar}" target="_blank" rel="noopener">Google Scholar</a>.</p>${recentNote}
 <p class="publication-sections"><a href="#published-work">Journal and Conference Work</a> · <a href="#author-manuscripts">Preprints and Author Manuscripts</a></p>
 <div class="publication-tools"><label for="paper-search">Search publications and manuscripts</label><div class="filter-row"><input id="paper-search" type="search" placeholder="Search by title, author, or venue…"><label class="sr-only" for="paper-year">Publication year</label><select id="paper-year"><option value="all">All years</option>${years.map(y=>`<option>${y}</option>`).join('')}</select></div><p id="paper-count" role="status" aria-live="polite">${papers.length + preprints.length} selected records</p></div>
 <div id="publications"><div id="published-work"><h2 class="publication-category">Journal and Conference Work</h2>${renderYears(papers)}</div><div id="author-manuscripts"><h2 class="publication-category">Preprints and Author Manuscripts</h2><p>These links identify archive versions. They are not presented as additional, independently published journal papers.</p>${renderYears(preprints,'Manuscripts · ')}</div></div>
 <p id="no-results" hidden>No records match your search. Try another title, author, or year.</p>
 <h2>Research Monographs by Professor Mingwu Zhang</h2><p class="source-note">English translations of the original Chinese titles.</p>${ul(['Mingwu Zhang. <em>Research on Functional Policy Encryption.</em> Science Press, 2020.','Mingwu Zhang. <em>Public-key Cryptosystems Resilient to Sensitive Information Leakage.</em> Science Press, 2018.','Mingwu Zhang. <em>Secure Negotiation and Privacy Protection in Trusted Networks.</em> Intellectual Property Publishing House, 2013.'])}${sourceNote}`;
}
