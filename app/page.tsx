const values = [
  {
    number: "01",
    keyword: "CHALLENGE",
    title: "도전하며 질문합니다",
    body: "정답을 외우기보다 더 좋은 질문을 만들고, 익숙한 교실 밖의 문제까지 탐색합니다.",
  },
  {
    number: "02",
    keyword: "CHANGE",
    title: "배우며 성장합니다",
    body: "느린 걸음도 배움의 과정입니다. 학생마다 다른 속도를 존중하며 꾸준한 변화를 만듭니다.",
  },
  {
    number: "03",
    keyword: "SHARE",
    title: "함께 나누며 커집니다",
    body: "교실에서 얻은 아이디어와 경험을 동료와 나누고, 더 나은 교육으로 연결합니다.",
  },
];

const expertise = [
  {
    code: "EN",
    number: "01",
    title: "AI와 함께하는 영어교육",
    body: "언어를 배우는 시간을 넘어, 학생의 질문과 세상의 문제를 AI와 함께 탐구하는 수업을 고민합니다.",
  },
  {
    code: "RD",
    number: "02",
    title: "학교 연구와 수업 혁신",
    body: "연구부장으로서 교사의 실천이 학교의 변화로 이어질 수 있도록 수업과 연구를 연결합니다.",
  },
  {
    code: "AI",
    number: "03",
    title: "AI·디지털 교육 확산",
    body: "AIEDAP 마스터 교원과 인공지능 선도교사 강사 경험을 바탕으로 함께 배우는 문화를 만듭니다.",
  },
];

const timeline = [
  {
    year: "20+",
    title: "교직 경력",
    body: "영어교사로서 학생의 질문을 수업의 출발점으로 삼아 온 시간",
  },
  {
    year: "2024",
    title: "AIEDAP 마스터 교원",
    body: "AI·디지털 기반 교육을 학교 현장과 연결하는 실천",
  },
  {
    year: "2025",
    title: "교육부장관상 · AI·디지털 역량 강화 혁신 부문",
    body: "교사 AI·디지털 역량 강화 혁신 부문 교육부장관상 수상",
  },
  {
    year: "2026",
    title: "인공지능 선도교사 강사",
    body: "교실에서 쌓은 경험을 동료 교사와 나누며 교육 혁신을 확산",
  },
];

const navItems = [
  ["소개", "#about"],
  ["가치", "#values"],
  ["전문성", "#expertise"],
  ["경력", "#experience"],
  ["활동", "#field"],
  ["연수", "#training"],
  ["채널", "#channel"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="처음으로 이동">
          <span className="brand-mark">J:H</span>
          <span className="brand-copy">
            <strong>중일투더맥스</strong>
            <small>JUMP HIGHER, TO THE MAX</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href="https://youtube.com/@ddingle?si=jn0luDO_kWc8hdwZ"
          target="_blank"
          rel="noreferrer"
        >
          YouTube <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="메뉴 열기">메뉴</summary>
          <nav aria-label="모바일 메뉴">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="status-pill">
            <span aria-hidden="true" /> 중일고등학교 · 연구부장
          </p>
          <p className="eyebrow">TEACHER · TRAINER · EDUCATION INNOVATOR</p>
          <h1 id="hero-title">
            도전, 성장, 나눔으로
            <em>내일의 교실을 만듭니다.</em>
          </h1>
          <p className="hero-description">
            안녕하세요. 학생들의 질문과 세상의 문제를 AI와 함께 풀어가는
            영어교사 <strong>조태욱, 중일투더맥스</strong>입니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#about">
              중일투더맥스 알아보기 <span aria-hidden="true">↓</span>
            </a>
            <a
              className="channel-link"
              href="https://youtube.com/@ddingle?si=jn0luDO_kWc8hdwZ"
              target="_blank"
              rel="noreferrer"
            >
              <span className="play-dot" aria-hidden="true">▶</span>
              유튜브 채널
            </a>
          </div>

          <dl className="hero-metrics">
            <div>
              <dt>교직 경력</dt>
              <dd>20+</dd>
            </div>
            <div>
              <dt>AIEDAP 마스터 교원</dt>
              <dd>2024</dd>
            </div>
            <div>
              <dt>AI·디지털 역량 강화<br />교육부장관상</dt>
              <dd>2025</dd>
            </div>
            <div>
              <dt>인공지능 선도교사 강사</dt>
              <dd>2026</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" aria-label="중일투더맥스 대표 이미지">
          <div className="hero-halo" aria-hidden="true" />
          <figure className="hero-image">
            <img
              src="/teacher-portrait.webp"
              alt="교실에서 학생의 성장을 응원하는 교사 캐릭터"
              width="1024"
              height="1536"
              fetchPriority="high"
            />
          </figure>
          <div className="floating-card card-mission">
            <span>MY MISSION</span>
            <strong>단 한 명도 포기하지 않는<br />학생 맞춤형 수업</strong>
          </div>
          <div className="floating-card card-ai">
            <strong>AI</strong>
            <span>CHALLENGE &amp; CHANGE</span>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="핵심 키워드">
        <div>
          <span>ENGLISH EDUCATION</span><b>✦</b>
          <span>AI IN CLASSROOM</span><b>✦</b>
          <span>CHALLENGE AND CHANGE</span><b>✦</b>
          <span>JUMP HIGHER</span><b>✦</b>
          <span aria-hidden="true">ENGLISH EDUCATION</span><b aria-hidden="true">✦</b>
          <span aria-hidden="true">AI IN CLASSROOM</span><b aria-hidden="true">✦</b>
        </div>
      </section>

      <section className="section intro-section" id="about">
        <div className="section-index">
          <span>01</span>
          <small>WHO I AM</small>
        </div>
        <div className="intro-grid">
          <blockquote>
            “오늘의 학생을 <em>어제의 방식</em>으로 가르치는 것은,
            그들의 <em>내일을 빼앗는 것</em>이다.”
          </blockquote>
          <div className="intro-copy">
            <p className="section-kicker">QUESTION · GROWTH · FUTURE</p>
            <h2>교실의 질문을<br />미래의 가능성으로</h2>
            <p>
              영어교사로서 학생과 함께 질문하고, 연구부장으로서 학교의 변화를
              설계하며, AI 교육 실천가로서 동료 교사와 경험을 나눕니다. 빠른
              정답보다 깊은 질문을, 화려한 기술보다 학생의 성장을 먼저 봅니다.
            </p>
            <div className="tag-list" aria-label="주요 역할">
              <span>영어교사</span>
              <span>연구부장</span>
              <span>AI 교육 실천가</span>
              <span>교원 연수 강사</span>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" id="values">
        <div className="section-heading light-heading">
          <div className="section-index light-index">
            <span>02</span>
            <small>CHALLENGE AND CHANGE</small>
          </div>
          <div>
            <h2>중일에서 시작하는<br />세 가지 성장의 방식</h2>
            <p>도전하고, 성장하고, 나누며 더 높이 도약합니다.</p>
          </div>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <div className="value-topline">
                <span>{value.keyword}</span>
                <strong>{value.number}</strong>
              </div>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="school-section" aria-labelledby="school-title">
        <div className="school-image-wrap">
          <img
            src="/jump-higher-brand.webp"
            alt="Jungil High School Jump Higher 교육 브랜드 캐릭터 이미지"
            width="1279"
            height="2048"
            loading="lazy"
          />
        </div>
        <div className="school-copy">
          <div className="section-index">
            <span>03</span>
            <small>JUNGIL HIGH SCHOOL</small>
          </div>
          <p className="big-jump">JUMP<br /><em>HIGHER</em></p>
          <h2 id="school-title">배움은 즐겁게,<br />성장은 꾸준히.</h2>
          <p>
            중일고등학교의 교실에서 학생 한 명 한 명의 속도를 존중하고,
            질문과 도전이 성장으로 이어지는 배움을 만들어갑니다.
          </p>
          <div className="school-tags">
            <span>도전 · Challenge</span>
            <span>성장 · Change</span>
            <span>나눔 · Share</span>
          </div>
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="center-heading">
          <div className="section-index centered-index">
            <span>04</span>
            <small>EXPERTISE</small>
          </div>
          <h2>기술보다 학생을 먼저 보는<br />교육의 세 가지 축</h2>
          <p>질문에서 출발해 수업, 학교, 교육 공동체의 변화로 확장합니다.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <span className="expertise-code">{item.code}</span>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-main">
          <div className="section-index light-index">
            <span>05</span>
            <small>EXPERIENCE</small>
          </div>
          <h2>교실에서 쌓고,<br />함께 나눈 성장의 시간</h2>
          <p className="experience-lead">
            영어교육에서 AI·디지털 교육까지. 모든 경험은 같은 질문을 향합니다.
            “이 배움이 학생의 내일을 더 빛나게 하는가?”
          </p>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-row" key={item.title}>
                <strong>{item.year}</strong>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="experience-quote" aria-label="교육 철학">
          <p className="quote-label">JUNGIL TO THE MAX · EDUCATION NOTE</p>
          <div className="quote-symbol" aria-hidden="true">“</div>
          <blockquote>
            좋은 교사는 멈추지 않고,<br />좋은 영향력을 남깁니다.
          </blockquote>
          <div className="influence-links" aria-label="AI 교육 활동 자료">
            <a
              className="influence-link data-link"
              href="/nightingale-data-analysis.webp"
              target="_blank"
              rel="noreferrer"
            >
              <span>01 · DATA</span>
              <strong>데이터 분석</strong>
              <small>나이팅게일 차트 살펴보기 ↗</small>
            </a>
            <a
              className="influence-link"
              href="/gemini-storybook-ai-teacher.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>02 · CREATE</span>
              <strong>AI 활용 창작(제미나이 스토리북)</strong>
              <small>스토리북 PDF 살펴보기 ↗</small>
            </a>
            <a
              className="influence-link"
              href="https://canva.link/vm4dgi5pwu0nkew"
              target="_blank"
              rel="noreferrer"
            >
              <span>03 · VIDEO</span>
              <strong>AI 동영상 제작</strong>
              <small>영상 사례 살펴보기 ↗</small>
            </a>
          </div>
        </aside>
      </section>

      <section className="section field-section" id="field">
        <div className="field-heading">
          <div className="section-index">
            <span>06</span>
            <small>FIELD OF WORK</small>
          </div>
          <div>
            <p className="section-kicker">PRACTICE · CONNECT · INNOVATE</p>
            <h2>현장에서 실천하고,<br />교육의 혁신을 이끕니다</h2>
            <p className="field-intro">
              연수, 컨설팅, 교원양성, 전문적학습공동체를 연결해 배움이 실제 변화가 되도록 합니다.
            </p>
          </div>
        </div>

        <div className="field-grid">
          <article className="field-card">
            <span className="field-code">TEACHING &amp; TRAINING</span>
            <h3>AI·디지털 연수</h3>
            <ul>
              <li><strong>2024·2025</strong> 대전시교육청 디지털 기반 혁신 수업 연수 강사</li>
              <li><strong>2024</strong> 세종특별시교육청 디지털 기반 교육혁신 연수 강사</li>
              <li><strong>2025</strong> AIEDAP 수도권역 마스터교원 전문성 강화 연수 강사<br /><small>서울대학교 사범대학 교육연수원</small></li>
              <li><strong>2026</strong> 중등 AI·디지털 수업역량 강화 연수 강사</li>
              <li><strong>2026</strong> 대전시교육청 교감·복직·영어교사 AI·디지털 역량 강화 연수 강사</li>
            </ul>
          </article>

          <article className="field-card">
            <span className="field-code">TEACHER EDUCATION</span>
            <h3>대학·교원양성</h3>
            <ul>
              <li><strong>2024</strong> 공주대학교 영어과 학생맞춤형 AI 활용 교육 강사</li>
              <li><strong>2025</strong> 영재교육원 강사</li>
              <li><strong>2025·2026</strong> 목원대학교 교원양성기관 환류개선위원회 위원</li>
              <li><strong>2025·2026</strong> 한국교원대학교 진로진학 부전공 교사 연수 강사</li>
            </ul>
          </article>

          <article className="field-card">
            <span className="field-code">CLASSROOM INNOVATION</span>
            <h3>수업혁신·현장지원</h3>
            <ul>
              <li><strong>2025·2026</strong> 수업공감성장 영어수업혁신 선도교사</li>
              <li><strong>2025</strong> 전문적교사학습공동체와 인공지능 활동</li>
              <li><strong>2025~2026</strong> 충남대학교(ADE) 찾아가는 학교컨설팅 코디네이터 및 강사</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="training-section" id="training">
        <div className="training-heading">
          <div className="section-index light-index">
            <span>07</span>
            <small>AI TRAINING</small>
          </div>
          <div>
            <p className="training-kicker">LEARN TODAY · USE TOMORROW</p>
            <h2>배워서 바로 학교 현장에<br />적용하는 AI 강의<span>(연수)</span></h2>
            <p>
              도구 사용법에 머물지 않고 수업·평가 설계부터 학생 지원, 웹앱 제작까지
              교실에서 바로 실행할 수 있는 결과물을 함께 만듭니다.
            </p>
          </div>
        </div>

        <div className="training-flow" aria-label="AI 연수 과정">
          <span>배우기</span><b aria-hidden="true">→</b>
          <span>직접 만들기</span><b aria-hidden="true">→</b>
          <span>학교 현장에 적용하기</span>
        </div>

        <div className="training-grid">
          <a
            className="training-card"
            href="https://notebook.google.com/notebook/f16055cc-5ed4-48b0-8bc4-4a8317cafdc6"
            target="_blank"
            rel="noreferrer"
          >
            <div className="training-card-top">
              <span>01 · DESIGN</span>
              <strong aria-hidden="true">↗</strong>
            </div>
            <div className="training-icon" aria-hidden="true">AI</div>
            <h3>제미나이 노트북 활용<br />AI 수업 평가 설계</h3>
            <p>교육과정과 성취기준을 바탕으로 수업과 평가를 함께 설계하는 실습</p>
            <small>제미나이 노트북 열기</small>
          </a>

          <a
            className="training-card"
            href="https://notebook.google.com/notebook/205b471c-36d3-4784-b1d2-972c30b62098/preview"
            target="_blank"
            rel="noreferrer"
          >
            <div className="training-card-top">
              <span>02 · SUPPORT</span>
              <strong aria-hidden="true">↗</strong>
            </div>
            <div className="training-icon" aria-hidden="true">Q+</div>
            <h3>학생 수행평가<br />도우미 챗봇</h3>
            <p>학생이 수행평가 과정에서 질문하고 피드백받을 수 있는 맞춤형 학습 도구</p>
            <small>도우미 챗봇 체험하기</small>
          </a>

          <a
            className="training-card"
            href="https://max09.my.canva.site/up-down-number-game"
            target="_blank"
            rel="noreferrer"
          >
            <div className="training-card-top">
              <span>03 · CREATE</span>
              <strong aria-hidden="true">↗</strong>
            </div>
            <div className="training-icon" aria-hidden="true">WEB</div>
            <h3>캔바로 만드는<br />수업용 웹앱</h3>
            <p>아이디어를 실제로 작동하는 참여형 수업 도구로 구현하는 제작 실습</p>
            <small>UP &amp; DOWN 숫자 게임 보기</small>
          </a>
        </div>
      </section>

      <section className="channel-section" id="channel">
        <div className="channel-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="video-card">
            <span className="video-play">▶</span>
            <small>LEARN · SHARE · GROW</small>
          </div>
          <p>JUMP<br />HIGHER<span>!</span></p>
        </div>
        <div className="channel-copy">
          <p className="youtube-label"><span aria-hidden="true">▶</span> YOUTUBE CHANNEL</p>
          <h2>중일투더맥스의<br />배움과 성장 기록</h2>
          <p>
            영어교육과 AI, 교실의 질문, 함께 성장하는 학교의 이야기를 기록합니다.
            완벽해서 시작하는 것이 아니라, 시작하며 더 높이 도약합니다.
          </p>
          <a
            className="channel-button"
            href="https://youtube.com/@ddingle?si=jn0luDO_kWc8hdwZ"
            target="_blank"
            rel="noreferrer"
          >
            유튜브 채널에서 만나기 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="final-cta">
        <p>JUMP HIGHER · TO THE MAX</p>
        <h2>함께 변화를 이끌고<br /><em>배움을 나눕니다.</em></h2>
        <div className="final-links">
          <a
            className="primary-button coral-button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSddhukKrKlBsO4NucKIvo6hVG2F1rcN8xXKDDHVj67SHbiFhQ/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
          >
            Google Form으로 강의 문의 <span aria-hidden="true">↗</span>
          </a>
          <a href="#top">처음으로 돌아가기 <span aria-hidden="true">↑</span></a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">J:H</span>
          <span className="brand-copy">
            <strong>조태욱 · 중일투더맥스</strong>
            <small>TEACHER · TRAINER · EDUCATION INNOVATOR</small>
          </span>
        </a>
        <p>Jungil High School · Jump Higher</p>
        <a
          href="https://youtube.com/@ddingle?si=jn0luDO_kWc8hdwZ"
          target="_blank"
          rel="noreferrer"
        >
          YouTube <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}
