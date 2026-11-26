import { recentPapers, preprints, recentSources } from './recent-work.mjs';
export const links = {
  scholar: 'https://scholar.google.com/citations?user=dRvOsrMAAAAJ&hl=en',
  dblp: 'https://dblp.org/pid/28/2422.html',
  cv: '/assets/teachers/mingwu-zhang-cv.pdf',
};
export const navigation = [['Home','/'],['Members','/staff/'],['Publications','/publication/'],['Access','/services/']];
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
const awardDescription = `<strong>CSS 2026 Best Paper Award.</strong> HBUT reports that the SAML research paper received a Best Paper Award. Doctoral student Peng Yu is the first author and Mingwu Zhang is the corresponding author. The work investigates privacy-preserving anti-money-laundering analysis using multi-client functional encryption. <a href="${recentSources.award}" target="_blank" rel="noopener">HBUT report, 20 August 2026 <i class="inline-icon" data-lucide="arrow-up-right" aria-hidden="true"></i></a>`;
const books = [
 { cover: '', title: 'The 9th International Conference on Frontiers in Cyber Security (FCS 2026)', url: 'https://ishbut.github.io/fcs2026', meta: 'Forthcoming', editors: 'Editors: Mingwu Zhang, Debiao He and Yudi Zhang' },
 { cover: '/assets/books/provsec-2023.png', title: 'The 17th International Conference on Provable and Practical Security (ProvSec 2023)', url: 'https://provsec2023.github.io/ProvSec2023/', meta: 'Lecture Notes in Computer Science 14217 · Springer, 2023', editors: 'Editors: Mingwu Zhang, Man Ho Au and Yudi Zhang' },
 { cover: '/assets/books/eidwt-2017.jpg', title: 'The 5-th International Conference on Emerging Internetworking, Data & Web Technologies (EIDWT 2017)', url: 'https://voyager.ce.fit.ac.jp/conf/eidwt/2017/index.html', meta: 'Lecture Notes on Data Engineering and Communications Technologies 6 · Springer, 2017', editors: 'Editors: Leonard Barolli, Mingwu Zhang and Xu An Wang' },
 { cover: '/assets/books/asiajcis-2014.png', title: 'The 9th Asia Joint Conference on Information Security (AsiaJCIS 2014)', url: 'https://asiajcis.github.io/www/archive/2014-china/', meta: 'CPS', editors: 'Editors: Mingwu Zhang, Jihong Kim, Katsunari Yoshioka and Chu-Hsing Lin' },
 { cover: '/assets/books/public-key-cryptosystems.jpg', title: 'Research on Public-Key Cryptosystems Resilient to Sensitive Leakage', meta: '2018', editors: 'Editor: Mingwu Zhang' },
 { cover: '/assets/books/functional-encryptions.jpg', title: 'Research on Functional Encryptions', meta: '2020', editors: 'Editor: Mingwu Zhang' },
 { cover: '/assets/books/negotiation-security.jpg', title: 'Research on Negotiation Security and Privacy Preservation in Trusted Networks', meta: '2013', editors: 'Editor: Mingwu Zhang' }
];
const bookList = `<ul class="book-list">${books.map(b => `<li>${b.cover ? `<img class="book-cover" src="${b.cover}" alt="Cover of ${b.title}" loading="lazy">` : `<span class="book-cover book-cover-placeholder" aria-hidden="true">FCS<br>2026</span>`}<div class="book-info"><div class="book-title">${b.url ? `<a href="${b.url}" target="_blank" rel="noopener">${b.title}</a>` : b.title}</div><div class="book-meta">${b.meta}</div><div class="book-editors">${b.editors}</div></div></li>`).join('')}</ul>`;
const bookHighlights = `<section class="recent-highlights">${bookList}</section>`;
const recentHighlights = `<section class="recent-highlights" aria-labelledby="recent-title"><h2 id="recent-title">News and Events</h2><ul class="news-list">
<li><strong>Nov 2026</strong> Our co-operated paper "Leakage-resilient cloud data auditing with efficient permission transfer and error localization for secure cloud storage services" was accepted by <a href="https://ieeexplore.ieee.org/xpl/issues?punumber=6245519&amp;isnumber=9875145" target="_blank" rel="noopener">IEEE Transactions on Cloud Computing</a>.</li>
<li><strong>Nov 2026</strong> Our paper "A privacy-preserving cloud screening service for UAV preflight conflict detection" was accepted by <a href="https://mobiquitous.eai-conferences.org/2026/" target="_blank" rel="noopener">MobiQuitous 2026</a> held in Beppu, Japan.</li>
<li><strong>Oct 2026</strong> Our paper "Dynamic deep packet inspection for secure middlebox on encrypted traffic with forward privacy" was accepted by <a href="https://link.springer.com/chapter/10.1007/978-981-92-6857-3_10" target="_blank" rel="noopener">ICICS 2026</a> held in Fukui, Japan.</li>
<li><strong>Oct 2026</strong> Our co-operated paper "Fast MPC framework under Shamir's secret sharing with malicious security and two-thirds honest majority" was accepted by <a href="https://link.springer.com/chapter/10.1007/978-981-92-6840-5_15" target="_blank" rel="noopener">ICICS 2026</a> held in Fukui, Japan.</li>
<li><strong>Oct 2026</strong> Our co-operated paper "Efficient identity authentication services: an inner product-based one-to-many authentication and key agreement protocol for VANETs" was accepted by <a href="https://ieeexplore.ieee.org/abstract/document/11769606" target="_blank" rel="noopener">IEEE TVT</a>.</li>
<li><strong>Aug 2026</strong> Our paper titled "SAML: A secure anti-money laundering scheme with multi-client functional encryption" accepted in <a href="https://nsclab.org/css2026/list.html" target="_blank" rel="noopener">CSS 2026</a> won the Best Student Paper Award! Congratulations!</li>
<li><strong>Aug 2026</strong> Lab successfully organized the 9th International Conference on Frontiers in Cyber Security (<a href="https://ishbut.github.io/fcs2026/" target="_blank" rel="noopener">FCS 2026</a>) in Macau.</li>
<li><strong>Aug 2026</strong> Our co-operated paper "Privacy-preserving federated learning via secret sharing and multi-key homomorphic encryption" was published in <a href="https://doi.org/10.1016/j.ins.2026.123619" target="_blank" rel="noopener">Information Sciences</a>.</li>
<li><strong>Jul 2026</strong> Our co-operated paper "LRC-DPoR: efficient data integrity auditing with local repair and dynamic updates" was accepted by <a href="https://acisp-conference.github.io/acisp2026/" target="_blank" rel="noopener">ACISP 2026</a> held in Perth, Australia.</li>
<li><strong>Jun 2026</strong> Our paper "Secure optimization with asynchronous structured skyline predicates under vertical data federation" was published in <a href="https://ieeexplore.ieee.org/document/11534871/" target="_blank" rel="noopener">IEEE TIFS</a>.</li>
<li><strong>Jun 2026</strong> Our paper "DFA-SAC: Enabling regular language policies with sanitizable access control" was published in <a href="https://doi.org/10.1016/j.jisa.2026.104555" target="_blank" rel="noopener">Journal of Information Security and Applications</a>.</li>
<li><strong>Jun 2026</strong> Our co-operated paper "RCBPS: Revocable certificate-based proxy signature scheme in the standard model for secure cloud IoT communications" was published in <a href="https://doi.org/10.1016/j.comnet.2026.112181" target="_blank" rel="noopener">Computer Networks</a>.</li>
<li><strong>Feb 2026</strong> Our paper "PPOM-Attack: A substitute model-free perturbation prediction and optimization method for black-box adversarial attack against face recognition" was accepted by <a href="https://ieeexplore.ieee.org/document/11406187" target="_blank" rel="noopener">IEEE TIFS</a>.</li>
<li><strong>Feb 2026</strong> Our co-operated paper "Leakage-Resilient Data Transmission Protocol With Multi-Receiver for Internet of Things" was published in <a href="https://ieeexplore.ieee.org/document/11249437" target="_blank" rel="noopener">IEEE TDSC</a>.</li>
<li><strong>Jan 2026</strong> Our paper "CLR-IA: An efficient identity authentication protocol with continuous leakage resilience for mobile edge computing" was accepted by <a href="https://ieeexplore.ieee.org/abstract/document/11362994" target="_blank" rel="noopener">IEEE TDSC</a>.</li>
</ul></section>`;
const profile = `<div class="home-layout">
<aside class="profile-sidebar" aria-label="Contact information">
<img class="portrait" src="/assets/teachers/mingwu-zhang.png" alt="Professor Mingwu Zhang" width="150" height="222">
<ul class="contact-list">
<li><i class="contact-icon" data-lucide="map-pin" aria-hidden="true"></i><span class="contact-address"><span>B608, Training Building</span><span>Institute of Cyberspace Security</span><span>Hubei University of Technology</span><span>#28, Nanli Rd, Hongshan Dist,</span><span>Wuhan, China</span></span></li>
<li><i class="contact-icon" data-lucide="mailbox" aria-hidden="true"></i><span>430068</span></li>
<li><i class="contact-icon" data-lucide="mail" aria-hidden="true"></i><span>hbutzhang(at)gmail.com</span></li>
</ul>
<div class="profile-links"><a href="${links.scholar}" target="_blank" rel="noopener">Google Scholar <i class="inline-icon" data-lucide="arrow-up-right" aria-hidden="true"></i></a><a href="${links.dblp}" target="_blank" rel="noopener">DBLP <i class="inline-icon" data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>
</aside>
<article class="biography"><h1>Mingwu Zhang</h1>
<div class="academic-titles">Professor, Ph.D.<br>Institute of Cyberspace Security<br>Hubei University of Technology</div>
<div class="bio-body"><p><strong>Dr. Mingwu Zhang</strong> is a professor with the School of Computer Science and Artificial Intelligence in Hubei University of Technology, and the director of Institute of Cyber Security in HBUT. From 2010 to 2012, he has been a JSPS Fellow of Japan Society of Promotion Sciences (JSPS) at Institute of Mathematics for Industry in Kyushu University, Japan. From 2015 to 2016, he has been a Senior Visiting Professor with the School of Computing and Information Technology, University of Wollongong, Australia. His research interests include public-key cryptosystem, network and data security, secure computation and privacy preservation in big-data, AI, clouds and crowdsensing, etc.</p>
<p>A limited number of positions for PhD and PostDoc are available. Please contact me if you are interested in it.</p>
${bookHighlights}</div></article></div>`;
export const home = `<div class="portal">
<section class="keyword-banner" aria-label="Research keywords"><div class="keyword-cloud"><span class="kw-xl">CRYPTOGRAPHY</span><span class="kw-sm">FUNCTIONAL ENCRYPTION</span><span class="kw-md">LEAKAGE RESILIENCE</span><span class="kw-xl">PRIVACY</span><span class="kw-sm">FEDERATED LEARNING</span><span class="kw-lg">ARTIFICIAL INTELLIGENCE SECURITY</span><span class="kw-md">SECURE COMPUTATION</span><span class="kw-sm">AUTHENTICATION</span><span class="kw-xl">DATA SECURITY</span><span class="kw-md">CLOUD COMPUTING</span><span class="kw-sm">BIG-DATA PRIVACY</span><span class="kw-lg">BLOCKCHAIN</span><span class="kw-sm">OUTSOURCED COMPUTATION</span><span class="kw-md">INTERNET OF THINGS SECURITY</span><span class="kw-sm">VEHICULAR NETWORKS</span><span class="kw-lg">SECURE DATA SHARING</span><span class="kw-sm">INDUSTRIAL INTERNET</span><span class="kw-md">PRIVACY-PRESERVING MACHINE LEARNING</span><span class="kw-md">VULNERABILITIES</span></div></section>
<p class="portal-tagline">Institute of Cyberspace Security</p>
<section class="portal-section">${recentHighlights}</section>
</div>`;
// Group member records. Add a member here to create /staff/<slug>/ automatically.
// Fields: slug, name, nameEn, role, focus, photo, bio, contact, source, placeholder, detail.
export const members = [
 {
  slug: 'mingwu', name: 'Mingwu Zhang', role: 'Professor, Ph.D.', leader: true,
  summary: "Dr. Mingwu Zhang is a professor with the School of Computer Science and Artificial Intelligence in Hubei University of Technology, and the director of Institute of Cyber Security in HBUT. From 2010 to 2012, he has been a JSPS Fellow of Japan Society of Promotion Sciences (JSPS) at Institute of Mathematics for Industry in Kyushu University, Japan. From 2015 to 2016, he has been a Senior Visiting Professor with the School of Computing and Information Technology, University of Wollongong, Australia. His research interests include public-key cryptosystem, network and data security, secure computation and privacy preservation in big-data, AI, clouds and crowdsensing, etc.",
  focus: 'Public-key cryptography, big-data security and privacy, AI security',
  photo: '/assets/teachers/mingwu-zhang.png', detail: profile
 },
 {
  slug: 'hua-shen', name: 'Hua Shen', role: 'Professor, Ph.D.',
  focus: 'AI security, information security, privacy-preserving computation',
  photo: '/assets/teachers/hua-shen.png',
  bio: `<p><strong>Dr. Hua Shen</strong> is a Professor at the Institute of Cyberspace Security at HBUT. She obtained her Ph.D. from Wuhan University in 2014 and was a visiting scholar at the University of Wollongong. She is a senior member of the China Computer Federation and a member of IEEE.</p>
<div class="publication-year"><h2>Publications</h2><ul>
<li class="paper"><div class="paper-title">Privacy-preserving E-questionnaire protocol for massive user environments.</div><div class="paper-authors">H Shen, R Chen, Z Xia, W Susilo, M Zhang</div><div class="paper-venue"><em>Information Sciences</em>, doi: 10.1016/j.ins.2026.124101</div></li>
<li class="paper"><div class="paper-title">An Efficient Graph Encryption Scheme Supporting Shortest Path Fuzzy Queries.</div><div class="paper-authors">H Shen, C Yu, W Susilo, Y Chen, M Zhang</div><div class="paper-venue"><em>IEEE Transactions on Information Forensics and Security</em>, doi: 10.1109/TIFS.2025.3599388</div></li>
<li class="paper"><div class="paper-title">EAPIR: Efficient and Authenticated Private Information Retrieval with Fast Server Processing.</div><div class="paper-authors">H Shen, X Li, F Zhen, G Wu, M Zhang</div><div class="paper-venue"><em>ACISP 2025</em>, doi: 10.1007/978-981-96-9101-2_20</div></li>
<li class="paper"><div class="paper-title">L-Net: A Lightweight Convolutional Neural Network for Devices with Low Computing Power.</div><div class="paper-authors">H Shen, Z Wang, J Zhang, M Zhang</div><div class="paper-venue"><em>Information Sciences</em>, doi: 10.1016/j.ins.2024.120131</div></li>
<li class="paper"><div class="paper-title">Data-Matching-Based Privacy-Preserving Statistics and Its Applications in Digital Publishing Industry.</div><div class="paper-authors">H Shen, G Wu, W Susilo, M Zhang</div><div class="paper-venue"><em>IEEE Transactions on Services Computing</em>, doi: 10.1109/TSC.2023.3326497</div></li>
<li class="paper"><div class="paper-title">A Privacy-Preserving and Verifiable Statistical Analysis Scheme for an E-Commerce Platform.</div><div class="paper-authors">H Shen, G Wu, Z Xia, W Susilo, M Zhang</div><div class="paper-venue"><em>IEEE Transactions on Information Forensics and Security</em>, doi: 10.1109/TIFS.2023.3269669</div></li>
<li class="paper"><div class="paper-title">Data Release for Machine Learning via Correlated Differential Privacy.</div><div class="paper-authors">H Shen, J Li, G Wu, M Zhang</div><div class="paper-venue"><em>Information Processing and Management</em>, doi: 10.1016/j.ipm.2023.103349</div></li>
<li class="paper"><div class="paper-title">A cloud-aided privacy-preserving multi-dimensional data comparison protocol.</div><div class="paper-authors">H Shen, M Zhang, H Wang, F Guo, W Susilo</div><div class="paper-venue"><em>Information Sciences</em>, doi: 10.1016/j.ins.2020.09.052</div></li>
<li class="paper"><div class="paper-title">A lightweight privacy-preserving fair meeting location determination scheme.</div><div class="paper-authors">H Shen, M Zhang, H Wang, F Guo, W Susilo</div><div class="paper-venue"><em>IEEE Internet of Things Journal</em>, doi: 10.1109/JIOT.2020.2965065</div></li>
<li class="paper"><div class="paper-title">An Efficient Aggregation Scheme Resisting on Malicious Data Mining Attacks for Smart Grid.</div><div class="paper-authors">H Shen, Y Liu, Z Xia, M Zhang</div><div class="paper-venue"><em>Information Sciences</em>, doi: 10.1016/j.ins.2020.03.107</div></li>
<li class="paper"><div class="paper-title">Efficient Privacy-Preserving Cube-Data Aggregation Scheme for Smart Grids.</div><div class="paper-authors">H Shen, M Zhang, J Shen</div><div class="paper-venue"><em>IEEE Transactions on Information Forensics and Security</em>, doi: 10.1109/TIFS.2017.2656475</div></li>
</ul></div>`,
 },
 {
  slug: 'yuanyuan-zhang', name: 'Yuanyuan Zhang', role: 'Associate Professor, Ph.D.',
  focus: 'Public-key cryptography, authentication, big-data security and privacy',
  photo: '/assets/teachers/yuanyuan-zhang.png', contact: '276502507@qq.com',
  bio: `<p><strong>Yuanyuan Zhang</strong> is an Associate Professor and Master's Supervisor at HBUT and a Nanhu Scholar. The faculty profile reports more than ten SCI papers as first or corresponding author and more than ten patent applications as first applicant.</p>
<h2>Research</h2><p>Public-key cryptography; big-data security and privacy protection; digital economy and AI security; blockchain and industrial Internet security.</p>
<h2>Teaching</h2><p>Mathematical Foundations of Information Security; Discrete Mathematics.</p>
<h2>Selected Projects and Recognition</h2><ul><li>Principal investigator, NSFC Young Scientists Fund project on leakage-resilient authenticated key exchange.</li><li>Second Prize, Science and Technology Award of the China Institute of Communications; co-chair of ProvSec 2023.</li><li>Member of the Hubei Cyberspace Security Society.</li></ul>`,
 },
 {
  slug: 'jixin-zhang', name: 'Jixin Zhang', role: 'Associate Professor, Ph.D.',
  focus: 'Artificial intelligence, AI security, electronic design automation',
  photo: '/assets/teachers/jixin-zhang.png',
  bio: `<p><strong>Dr. Jixin Zhang</strong> is an Associate Professor at the School of Computer Science and Artificial Intelligence, Hubei University of Technology. He is a Visiting Scholar at The Chinese University of Hong Kong and a technical expert for multiple enterprises. His research interests cover fundamental artificial intelligence methods, AI security, and interdisciplinary AI applications such as electronic design and intelligent security.</p>
<p>He has led more than 10 industrial R&D projects for Huawei and other companies. His academic honors include the Huawei Spark Award, the First Prize of the Science and Technology Progress Award of the China General Chamber of Commerce, and the Second Prize of the Science and Technology Progress Award of the China Institute of Communications. He has published over 60 papers in international conferences and journals, including IEEE TIFS, IEEE TCAD, IEEE TDSC, IEEE TACL, AAAI, IJCAI and DATE, and has supervised student teams to win more than 20 national competition awards.</p>
<h2>Selected Publications</h2><ul><li>Ke Cheng, Jixin Zhang, Haiyun Li, Zipeng Zhong, Mingwu Zhang and Zheng Qin. PPOM-Attack: A Substitute Model-free Perturbation Prediction and Optimization Method for Black-box Adversarial Attack against Face Recognition. <em>IEEE Transactions on Information Forensics and Security</em>, 2026, 21: 2580–2595.</li><li>Lei Cai, Jixin Zhang, Ke Cheng, Haiyun Li, Zhiwei Ye and Mingyu Liu. A Gradient-Based Placement Method for Irregular-Shaped PCBs under Complex Design Constraints. <em>IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems</em>, 2026.</li><li>Shuo Sheng, Jixin Zhang, Jia Yang, Ke Cheng and Zheng Qin. PENTESTLLMAGENT: A Task Dependency Graph Planning-Based Multi-Agent Framework for Automated Penetration Testing. <em>IJCAI 2026</em> (oral), Bremen, Germany.</li><li>Haiyun Li, Jixin Zhang, Ning Xu and Mingyu Liu. FanoutNet: A Neuralized PCB Fanout Automation Method Using Deep Reinforcement Learning. <em>AAAI 2023</em> (oral), Washington DC, USA.</li></ul>`,
 },
 {
  slug: 'gang-shen', name: 'Gang Shen', role: 'Lecturer, Ph.D.',
  focus: 'Cryptography; data security and privacy in vehicular networks, e-healthcare and AI',
  photo: '/assets/teachers/gang-shen.png',
  bio: `<p><strong>Gang Shen</strong> is a Lecturer and Master's Supervisor at HBUT. The faculty profile records a doctoral degree and reports more than 20 SCI/EI-indexed papers and over 10 granted invention patents.</p>
<h2>Research and Supervision</h2><p>Cryptography, and data security and privacy protection for vehicular networks, healthcare networks and artificial intelligence.</p>
<h2>Selected Projects</h2><ul><li>Hubei Provincial Natural Science Foundation general project (2023AFB951): key techniques for leakage-resilient homomorphic secret sharing, 2023–2025.</li><li>Hubei Provincial Department of Education project: security of trustworthy federated learning in smart healthcare, 2024–2026.</li></ul>`,
 },
 { slug: 'yuzhu-wang', name: 'Yuzhu Wang', role: 'Lecturer, Ph.D.', focus: 'Profile to be added', photo: '/assets/teachers/yuzhu-wang.jpg', placeholder: true },
 { slug: 'yu-chen', name: 'Yu Chen', role: 'Lecturer, Ph.D.', focus: 'Profile to be added', photo: '/assets/teachers/yu-chen.jpg', placeholder: true, link: 'https://sites.google.com/view/yuchen-net/' }
];
export const memberPaths = members.filter(m => !m.link).map(m => `staff/${m.slug}`);
export function memberPages() {
 return Object.fromEntries(members.filter(m => !m.link).map(m => [`/staff/${m.slug}/`, { name: m.name, content: memberPage(m), section: '/staff/' }]));
}
function memberPortrait(m) {
 const initials = m.name.split(' ').map(word => word.charAt(0)).slice(0, 2).join('').toUpperCase();
 return m.photo ? `<img class="portrait" src="${m.photo}" alt="${m.name}" width="150" height="222">` : `<span class="member-photo-placeholder" aria-hidden="true">${initials}</span>`;
}
const memberTags = {
 'mingwu': ['Cryptography', 'Data Security'],
 'hua-shen': ['AI Security', 'Information Security'],
 'gang-shen': ['Cryptography', 'Data Privacy'],
 'yuanyuan-zhang': ['Authentication', 'Big-data Security']
};
function memberCard(m) {
 const tags = memberTags[m.slug] || (m.placeholder ? [] : m.focus.split(/[,;]/).map(s => s.trim()).filter(Boolean).slice(0, 2));
 const href = m.link || `/staff/${m.slug}/`;
 const external = m.link ? ' target="_blank" rel="noopener"' : '';
 return `<a class="member-card" href="${href}"${external}>${memberPortrait(m)}<div class="member-card-body"><h3>${m.name}</h3>${m.nameEn ? `<p class="member-name-en">${m.nameEn}</p>` : ''}<p class="member-role">${m.role}</p><div class="member-tags">${tags.map(t => `<span class="member-tag">${t}</span>`).join('')}</div></div></a>`;
}
function leaderCard(m) {
 const tags = memberTags[m.slug] || [];
 return `<a class="member-leader" href="/staff/${m.slug}/"><img src="${m.photo}" alt="${m.name}" width="150" height="222"><div class="member-leader-body"><h3>${m.name}</h3><p class="member-role">${m.role}</p><p class="member-leader-bio">${m.summary}</p><div class="member-tags">${tags.map(t => `<span class="member-tag">${t}</span>`).join('')}</div></div></a>`;
}
export const memberCards = `${leaderCard(members[0])}<div class="member-grid">${members.slice(1).map(memberCard).join('')}</div>`;
function memberPage(m) {
 const breadcrumb = `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/staff/">Members</a><span aria-hidden="true">/</span><span aria-current="page">${m.name}</span></nav>`;
 if (m.detail) {
  const detail = m.detail.replace('Recent Group Highlights', 'Highlights');
  return `${breadcrumb}${detail}`;
 }
 const contact = m.contact ? `<ul class="contact-list"><li><i class="contact-icon" data-lucide="mail" aria-hidden="true"></i><a href="mailto:${m.contact}">${m.contact}</a></li></ul>` : '';
 const body = m.placeholder
  ? `<p>This entry is an English-romanised name placeholder from the HBUT faculty roster. No verified individual profile has been published there yet, so no title, research area or biography is assumed. Details will be added when available.</p>`
  : `${m.bio || ''}${m.source || ''}`;
 return `${breadcrumb}<div class="home-layout member-layout"><aside class="profile-sidebar">${memberPortrait(m)}${contact}</aside><article class="biography"><h1>${m.name}</h1>${m.nameEn ? `<div class="member-name-en">${m.nameEn}</div>` : ''}<div class="academic-titles">${m.role}</div><div class="bio-body">${body}</div></article></div>`;
}
export const research = `<h1>RESEARCH</h1><p>Group faculty and students work across four complementary areas:</p>
${ul(['<strong>Public-key and applied cryptography:</strong> functional and witness encryption, leakage resilience, and program obfuscation.','<strong>Big-data security and privacy:</strong> secure data sharing, verifiable statistics, and outsourced computation.','<strong>Blockchain and industrial Internet security:</strong> blockchain supervision, secure crowdsensing, and IoT privacy.','<strong>Artificial intelligence security:</strong> privacy-preserving federated learning and secure model evaluation.'])}
<h2>Recent Research Outputs</h2>${ul(['<strong>AI security:</strong> adversarial attacks on black-box face recognition (<a href="https://doi.org/10.1109/tifs.2026.3666853" target="_blank" rel="noopener">IEEE TIFS, 2026</a>).','<strong>Secure collaboration:</strong> multi-party signatures for vehicular networks (<a href="https://doi.org/10.1109/tvt.2026.3664438" target="_blank" rel="noopener">IEEE TVT, 2026</a>) and multi-key homomorphic encryption for federated learning (<a href="https://doi.org/10.1016/j.ins.2026.123619" target="_blank" rel="noopener">Information Sciences, 2026</a>).','<strong>Privacy-preserving data analysis:</strong> encrypted graph queries (<a href="https://doi.org/10.1109/tifs.2025.3599388" target="_blank" rel="noopener">IEEE TIFS, 2025</a>) and vertically federated optimization (<a href="https://doi.org/10.1109/tifs.2026.3696555" target="_blank" rel="noopener">IEEE TIFS, 2026</a>).'])}<p>See <a href="/publication/">Publications</a> for the full bibliographic record.</p>
<h2>Faculty Research Projects</h2><p>Expand a title to view funding information.</p>
<div class="projects">${projects.map(([years,title,funder,id,role])=>`<details><summary>${title}<span class="project-years">${years}</span></summary><div class="project-detail"><p><strong>Funding:</strong> ${funder}${id?`<br><strong>Grant:</strong> ${id}`:''}<br><strong>Period:</strong> ${years}<br><strong>Role:</strong> ${role}</p></div></details>`).join('')}</div>`;
export const awards = `<h1>AWARDS</h1><p>Recognition reported for the institute, its faculty and its students. Recent group results come first; the sections marked "Faculty Profile" reproduce records from Professor Mingwu Zhang's April 2025 faculty profile.</p><h2>Recent Group Recognition</h2><p>${awardDescription}</p><p>The conference’s <a href="${recentSources.css}" target="_blank" rel="noopener">accepted-paper list</a> confirms the title <em>SAML: A Secure Anti-Money Laundering Scheme with Multi-Client Functional Encryption</em> and its authors.</p>${recentNote}
<h2>Faculty and Student Recognition</h2>${ul(['Peng Yu (doctoral student): first author of the CSS 2026 Best Paper Award paper, with Mingwu Zhang as corresponding author (HBUT report, 20 August 2026).','Hua Shen: INSCRYPT 2018 Best Paper Award and a 2023 Outstanding Paper Award from the Journal of Wuhan University (faculty profile).','Yuanyuan Zhang: Second Prize, Science and Technology Award of the China Institute of Communications (faculty profile).','Gang Shen: university-level Outstanding Class Advisor and Outstanding Individual awards (faculty profile).'])}<p class="source-note">From linked HBUT faculty profiles and university reports, checked 9 November 2026.</p>
<h2>Faculty Profile: Academic Honors (Professor Mingwu Zhang)</h2>${ul(['Selected for the career-long list of the world’s top 2% scientists, as reported in the HBUT faculty profile.','Chutian Scholar Distinguished Professor, Hubei Province (selected in 2013).','Hubei Province distinguished talent.'])}
<h2>Faculty Profile: Best Paper Awards</h2><p>The April 2025 university profile reports eight best paper awards for Professor Mingwu Zhang's work. Named venues include:</p>
${ul(['FCS 2024','ACISP 2018','Inscrypt 2018','EIDWT 2017'])}
<h2>Faculty Profile: Research and Technology Awards</h2><p>The same profile records five science and technology awards, including:</p>${ul(['Second Prize for provincial scientific and technological progress.','Third Prize for provincial natural science.','Third Prize for provincial scientific and technological progress.','Second Prize for scientific and technological progress, Wuhan.'])}
<h2>Faculty Profile: Academic Writing and Graduate Supervision</h2><ul class="dated-list"><li><span>2023</span><div>Outstanding Master's Thesis Supervisor, Hubei Commercial Cryptography Association.</div></li><li><span>2022</span><div>Outstanding Master's Thesis Supervisor, inaugural award of the Hubei Cyberspace Security Society.</div></li><li><span>2021</span><div>Outstanding Academic Monograph in Cyberspace Security, Hubei Province.</div></li></ul>${sourceNote}`;
export const patents = `<h1>PATENTS</h1><h2>Intellectual Property and Technology Transfer</h2><p>Group faculty work on intellectual property development and the transfer of research outcomes into practice. The table below reproduces aggregate figures from Professor Mingwu Zhang's April 2025 faculty profile; they describe his recorded outputs, not a group-wide total.</p>
<table><caption>Aggregate figures reported in Professor Mingwu Zhang's April 2025 faculty profile</caption><thead><tr><th scope="col">Category</th><th scope="col">Reported outcome</th></tr></thead><tbody><tr><th scope="row">Patent applications</th><td>More than 90</td></tr><tr><th scope="row">Patent technology transfers</th><td>6</td></tr><tr><th scope="row">Software copyrights</th><td>More than 30</td></tr><tr><th scope="row">Industry standards</th><td>Participation in 3 standards</td></tr></tbody></table>
<h2>Faculty Patent Records</h2><p>Linked faculty profiles also report granted invention patents and patent applications by group members, including Hua Shen (privacy-preserving data processing and smart grids), Gang Shen (V2G authentication and online medical diagnosis), and Yuanyuan Zhang (authentication and key agreement). See their <a href="/staff/">profiles</a> for details.</p><p class="source-note">From linked HBUT faculty profiles, checked 9 November 2026.</p>
<h2>Research and Industry</h2><p>Industry-sponsored projects listed in Professor Mingwu Zhang's faculty profile include security and privacy in machine learning; malicious audio and video traffic detection; secure chips and card issuance systems for color printing; analysis of malicious blockchain transactions; and secure office cloud and big-data analytics platforms.</p><p>Related funded research is listed on the <a href="/research/">Research</a> page.</p>
<h2>Patent and Collaboration Enquiries</h2><p>For patent records, licensing information, or research collaboration, contact the group at hbutzhang(at)gmail.com (Professor Mingwu Zhang) or consult individual <a href="/staff/">faculty profiles</a>.</p><p class="source-note">The public faculty profile gives aggregate figures without an itemized patent register. These figures describe applications and transfers, and do not imply that all applications have been granted.</p>${sourceNote}`;
const zhangSupervision = `<h2>Graduate Supervision</h2><p>Dr. Zhang supervises doctoral and master's students at Hubei University of Technology. Supervision areas listed in the university faculty profile include:</p><table><thead><tr><th scope="col">Degree</th><th scope="col">Fields and Research Areas</th></tr></thead><tbody><tr><th scope="row">Doctoral</th><td>Electrical Engineering; smart-grid security; Internet of Vehicles security</td></tr><tr><th scope="row">Academic Master's</th><td>Computer Science and Technology; Cyberspace Security</td></tr><tr><th scope="row">Professional Master's</th><td>Electronic Information / Computer Application Technology</td></tr></tbody></table>
<h2>Research Directions</h2>${ul(['Network and information security','Big-data security and privacy protection','Blockchain and industrial Internet security','Artificial intelligence security'])}
<h2>Recent Student Achievement</h2><p>${awardDescription}</p>
<h2>Prospective Students</h2><p>Motivated students with a serious interest in cryptography and security are welcome to enquire about supervision. Please contact hbutzhang(at)gmail.com for current opportunities and research topics. The current student roster is shown on the <a href="/staff/">Members</a> page.</p><p>For university application information, visit the <a href="https://yjs.hbut.edu.cn/" target="_blank" rel="noopener">HBUT Graduate School</a> or the <a href="https://sie.hbut.edu.cn/" target="_blank" rel="noopener">School of International Education</a>.</p>${sourceNote}`;
// Current student roster provided by the group. Names are English romanisations.
export const currentStudents = [
 { name: 'Guanghao Gao', degree: "Master's", since: '2025', avatar: '/assets/students/guanghao-gao.jpg' },
 { name: 'Jing Gao', degree: "Master's", since: '2024' },
 { name: 'Cunzhi Li', degree: "Master's", since: '2025', avatar: '/assets/students/cunzhi-li.jpg' },
 { name: 'Jilei Li', degree: "Master's", since: '2024' },
 { name: 'Yilin Liu', degree: "Master's", since: '2024' },
 { name: 'Wencan Lu', degree: "Master's", since: '2026', avatar: '/assets/students/wencai-lu.jpg' },
 { name: 'Dan Luo', degree: "Master's", since: '2026' },
 { name: 'Yunxiao Mu', degree: "Master's", since: '2026', avatar: '/assets/students/yunxiao-mu.jpg' },
 { name: 'Haogang Qin', degree: "Master's", since: '2025', avatar: '/assets/students/haogang-qin.jpg' },
 { name: 'Bensheng Wan', degree: "Master's", since: '2024' },
 { name: 'Kewen Wang', degree: "Master's", since: '2026', link: 'https://github.com/Wcowin', avatar: '/assets/students/kewen-wang.jpg', zoom: true, avatarLink: 'https://wcowin.work/about/geren/' },
 { name: 'Nanyang Wang', degree: "Master's", since: '2025', avatar: '/assets/students/nanyang-wang.jpg' },
 { name: 'Zixiao Xu', degree: "Master's", since: '2024' },
 { name: 'Xinyi Zhang', degree: "Master's", since: '2025' },
 { name: 'Yanrui Zhao', degree: "Master's", since: '2025', avatar: '/assets/students/yanrui-zhao.jpg' },
 { name: 'Xiang Zou', degree: "Master's", since: '2025' },
 { name: 'Peng Yu', degree: 'Ph.D.', since: '2025' }
];
function currentStudentsBlock() {
 const card = s => {
  const phd = s.degree === 'Ph.D.';
  const initials = s.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const avatarImg = `<img class="student-photo${s.zoom ? ' student-photo-zoom' : ''}" src="${s.avatar}" alt="${s.name}" width="80" height="80">`;
  const photo = s.avatar
   ? (s.avatarLink ? `<a class="student-photo-link" href="${s.avatarLink}" target="_blank" rel="noopener" aria-label="${s.name}'s website">${avatarImg}</a>` : avatarImg)
   : `<span class="student-photo student-photo-placeholder" aria-hidden="true">${initials}</span>`;
  return `<div class="student-card${phd ? ' student-card-phd' : ''}">${photo}<h3>${s.link ? `<a href="${s.link}" target="_blank" rel="noopener">${s.name}</a>` : s.name}</h3><div class="student-degree">${phd ? 'PhD Candidate' : 'Msc Student'}, ${s.since || '2026'} –</div></div>`;
 };
 const sorted = [...currentStudents].sort((a, b) => {
  const phdA = a.degree === 'Ph.D.' ? 0 : 1;
  const phdB = b.degree === 'Ph.D.' ? 0 : 1;
  return phdA - phdB || (a.since || '2026').localeCompare(b.since || '2026') || a.name.localeCompare(b.name);
 });
 return `<div class="student-grid">${sorted.map(card).join('')}</div>`;
}
export const team = `<h1>MEMBERS</h1>
${memberCards}
<h2>Current Students</h2>${currentStudentsBlock()}`;
export const services = `<h1>ACCESS</h1><p>The group is based in Room B608 of the Training Building at Hubei University of Technology, Wuhan. Please arrange visits in advance by email.</p>
<div class="access-info"><div><h2>Address</h2><p>B608, Training Building<br>Hubei University of Technology<br>28 Nanli Road, Hongshan District<br>Wuhan, Hubei 430068<br>P. R. China</p></div><div><h2>Contact</h2><p>For visits and general enquiries: hbutzhang(at)gmail.com.</p></div></div>
<div class="map-row"><div class="map-panel"><h2>Google Maps</h2><iframe class="map-embed" title="Google Maps showing Hubei University of Technology" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.3882504478233!2d114.31096!3d30.481761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x342eb067a18a38ad%3A0x6b554888861f123d!2z5rmW5YyX5bel5Lia5aSn5a2m!5e0!3m2!1szh-CN!2s!4v1794557512047!5m2!1szh-CN!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="map-panel"><h2>Amap</h2><iframe class="map-embed" title="Amap showing Hubei University of Technology" src="https://www.amap.com/ssr/embed/place?id=B001B16FKI&amp;name=%E6%B9%96%E5%8C%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6&amp;lng=114.308911&amp;lat=30.478627&amp;address=%E5%8D%97%E6%9D%8E%E8%B7%AF28%E5%8F%B7%28%E6%B9%96%E5%B7%A5%E5%A4%A7%E5%9C%B0%E9%93%81%E7%AB%99B%E5%8F%A3%E6%AD%A5%E8%A1%8C300%E7%B1%B3%29&amp;zoom=16&amp;source=poi_detail&amp;platform=pc" width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div></div>
<p class="source-note">The maps show the Hubei University of Technology campus; our office is B608 in the Training Building. Please arrange visits in advance by email.</p>`;
function abbreviateName(name) {
 const parts = name.trim().split(/\s+/);
 return parts.map((p, i) => i === parts.length - 1 ? p : `${p[0].toUpperCase()}.`).join(' ');
}
function abbreviateAuthors(text) {
 return text.split(/,\s*/).map(part => part.split(/(\s+and\s+)/).map(bit => /^\s+and\s+$/.test(bit) ? bit : abbreviateName(bit)).join('')).join(', ');
}
function renderPaper([year, authors, title, venue, ref, url, note]) {
 return `<li class="paper"><div class="paper-title-row"><span class="paper-title">${title}</span></div><div class="paper-authors">${abbreviateAuthors(authors)}</div><div class="paper-venue"><em>${venue}</em>${ref ? `, ${ref}` : ''} (${year})${note ? ` · <span class="record-note">${note}</span>` : ''}</div></li>`;
}
function renderYears(records, label = '', yearTitle = null) {
 return [...new Set(records.map(p=>p[0]))].map(year=>`<section class="publication-year" data-year="${year}"><h2>${label}${yearTitle || year}</h2><ul>${records.filter(p=>p[0]===year).map(renderPaper).join('')}</ul></section>`).join('');
}
const HOSTED_CONFERENCE = {
 name: 'CSS 2026',
 slug: 'css-2026',
 full: 'International Conference on Computer and Communications Security',
 organizer: 'Institute of Cyberspace Security, Hubei University of Technology',
 location: 'Wuhan, China',
 year: '2026'
};
export function conferencePage() {
 const c = HOSTED_CONFERENCE;
 const cards = `<a class="conference-card" href="/conference/${c.slug}/"><div class="conference-card-head"><h3>${c.name}</h3><span class="conference-count">Hosted conference</span></div><ul class="conference-meta"><li><b>Full name</b><span>${c.full}</span></li><li><b>Organizer</b><span>${c.organizer}</span></li><li><b>Location</b><span>${c.location}</span></li><li><b>Year</b><span>${c.year}</span></li></ul></a><div class="conference-card is-static"><div class="conference-card-head"><h3>ICICS 2026</h3><span class="conference-count">Hosted conference</span></div><ul class="conference-meta"><li><b>Full name</b><span>International Conference on Information and Communications Security</span></li><li><b>Organizer</b><span>Institute of Cyberspace Security, Hubei University of Technology</span></li><li><b>Location</b><span>Wuhan, China</span></li><li><b>Year</b><span>2026</span></li></ul></div>`;
 return `<section class="conference-hero"><h1>Conferences</h1><p>Conferences hosted by the Institute of Cyberspace Security</p></section><div class="conference-grid">${cards}</div>`;
}
function conferenceDetail() {
 const c = HOSTED_CONFERENCE;
 const slides = [
  { kicker: 'Hubei University of Technology', title: c.name, sub: c.full, meta: `Hosted by the ${c.organizer}` },
  { kicker: 'Call for Papers', title: 'Security &amp; Privacy', sub: 'Cryptography, data security, AI security, and blockchain', meta: `${c.location} · ${c.year}` },
  { kicker: 'Organized by', title: 'Institute of Cyberspace Security', sub: 'Hubei University of Technology', meta: 'Visit · Contact · Collaborate' }
 ].map((s, i) => `<div class="conf-slide${i === 0 ? ' is-active' : ''}"><span class="conf-slide-kicker">${s.kicker}</span><h1>${s.title}</h1><p>${s.sub}</p><p class="conf-slide-meta">${s.meta}</p></div>`).join('');
 const dots = [0, 1, 2].map(i => `<button class="conf-dot${i === 0 ? ' is-active' : ''}" data-slide="${i}" aria-label="Show slide ${i + 1}"></button>`).join('');
 const committee = [
  ['General Chair', 'To be announced.'],
  ['Program Chair', 'To be announced.'],
  ['Organizing Chair', 'Institute of Cyberspace Security, Hubei University of Technology.'],
  ['Publicity Chair', 'To be announced.']
 ].map(([t, d]) => `<article class="conf-topic"><h3>${t}</h3><p>${d}</p></article>`).join('');
 return `<section class="conf-hero"><div class="conf-slides">${slides}</div><button class="conf-arrow conf-prev" aria-label="Previous slide"><i data-lucide="chevron-left" aria-hidden="true"></i></button><button class="conf-arrow conf-next" aria-label="Next slide"><i data-lucide="chevron-right" aria-hidden="true"></i></button><div class="conf-dots">${dots}</div></section>
<section class="conf-welcome"><h2>Welcome to ${c.name}</h2><p>On behalf of the ${c.organizer}, it is our great pleasure to host ${c.name} in ${c.location}. The conference brings together researchers and practitioners from around the world to exchange original results and emerging ideas in security and privacy.</p><p>We invite contributions on cryptography, data security, AI security, and related areas, and look forward to welcoming you in ${c.location}.</p></section>
<section class="conf-topics"><h2>Organizing Committee</h2><p class="conf-subnote">The conference is hosted by the ${c.organizer}.</p><div class="conf-topics-grid">${committee}</div></section>
<section class="conf-dates"><h2>Key Dates</h2><table><thead><tr><th>Milestone</th><th>Date</th><th>Note</th></tr></thead><tbody><tr><th>Call for Papers</th><td>Open now</td><td>Online submission</td></tr><tr><th>Paper Submission</th><td>To be announced</td><td>${c.name}</td></tr><tr><th>Acceptance Notification</th><td>To be announced</td><td>${c.name}</td></tr><tr><th>Conference</th><td>${c.year}</td><td>${c.location}</td></tr></tbody></table></section>
<section class="conf-news"><h2>News &amp; Updates</h2><div class="conf-news-card"><h3>Call for Papers</h3><p>Submissions to ${c.name} are invited on cryptography, data security, AI security, and blockchain. Further details will be announced on this page.</p></div><div class="conf-news-card"><h3>Venue</h3><p>${c.name} will be held in ${c.location}, hosted by the ${c.organizer}.</p></div></section>
<p class="conference-back"><a href="/conference/"><i data-lucide="arrow-left" aria-hidden="true"></i> All conferences</a></p>`;
}
export function conferencePages() {
 const c = HOSTED_CONFERENCE;
 return {
  [`/conference/${c.slug}/`]: {
   label: c.name,
   section: '/conference/',
   content: conferenceDetail()
  }
 };
}
export const conferencePaths = Object.keys(conferencePages()).map(p => p.slice(1, -1));
export function papersPage() {
 const papers2026 = papers.filter(p => p[0] === 2026);
 const preprints2026 = preprints.filter(p => p[0] === 2026);
 return `<h1>PUBLICATIONS</h1>
 <div id="publications">${renderYears(preprints2026, '', '2027')}${renderYears(papers2026)}</div>`;
}
