// AI-Q site — Nav, Hero, Footer, CTA (Art Deco)
const _D = window.DECO;
const { useState: _useS } = React;

function useLang() {
  const [lang, setLang] = _useS('en');
  return [lang, setLang];
}

function NavBar({ lang, onLang }) {
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  return (
    <nav style={navS.nav}>
      <div style={navS.hair1}/>
      <div style={navS.hair2}/>
      <div style={navS.inner}>
        <a style={navS.logo} href="#top">
          <span style={navS.logoText}>AI</span>
          <span style={navS.logoDot}/>
          <span style={navS.logoText}>Q</span>
        </a>
        <div style={navS.links}>
          <a style={navS.link} href="#framework">{t(I.nav.framework)}</a>
          <a style={navS.link} href="#types">{t(I.nav.types)}</a>
          <a style={navS.link} href="sama.html">{t(I.nav.sama)}</a>
          <a style={navS.link} href="#cases">{t(I.nav.cases)}</a>
          <div style={navS.lang}>
            <span onClick={() => onLang('en')} style={{...navS.langBtn, ...(lang==='en'?navS.langOn:{})}}>EN</span>
            <span onClick={() => onLang('es')} style={{...navS.langBtn, ...(lang==='es'?navS.langOn:{})}}>ES</span>
          </div>
          <a style={{...navS.cta, textDecoration:'none', display:'inline-block'}} href="quiz.html">
            ◆&nbsp;{t(I.nav.cta)}&nbsp;◆
          </a>
        </div>
      </div>
    </nav>
  );
}

const navS = {
  nav: { position:'sticky', top:0, zIndex:100, background:'linear-gradient(180deg, rgba(10,9,6,0.95), rgba(10,9,6,0.80))', backdropFilter:'blur(20px)', borderBottom:`1px solid rgba(184,135,58,0.5)` },
  hair1: { position:'absolute', top:0, left:'5%', right:'5%', height:1, background:'linear-gradient(90deg, transparent, rgba(244,211,122,0.9) 35%, rgba(244,211,122,0.9) 65%, transparent)' },
  hair2: { position:'absolute', top:3, left:'10%', right:'10%', height:1, background:'linear-gradient(90deg, transparent, rgba(184,135,58,0.5) 50%, transparent)' },
  inner: { maxWidth:1440, margin:'0 auto', padding:'1.1rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem' },
  logo:  { fontFamily:"'Limelight', serif", fontSize:'1.9rem', letterSpacing:8, display:'inline-flex', alignItems:'center', cursor:'pointer', textDecoration:'none' },
  logoText: { background:`linear-gradient(180deg, ${_D.hi}, ${_D.main} 55%, ${_D.deep})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', filter:'drop-shadow(0 0 12px rgba(227,184,92,0.35))' },
  logoDot: { display:'inline-block', width:'0.32em', height:'0.32em', background:`linear-gradient(135deg, ${_D.hi}, ${_D.deep})`, transform:'rotate(45deg)', margin:'0 0.28em', alignSelf:'center', boxShadow:'0 0 0.5em rgba(244,211,122,0.8)', animation:'aiqDiamondPulse 2.4s ease-in-out infinite' },
  links: { display:'flex', gap:'1.6rem', alignItems:'center', flexWrap:'wrap' },
  link:  { color: _D.parch, fontSize:'0.78rem', cursor:'pointer', fontFamily:"'Limelight', serif", letterSpacing:3, textTransform:'uppercase', textDecoration:'none' },
  lang:  { display:'flex', border:`1px solid ${_D.deep}`, borderRadius:2, overflow:'hidden', fontFamily:'JetBrains Mono', fontSize:'0.7rem', letterSpacing:2 },
  langBtn: { padding:'6px 12px', cursor:'pointer', color:_D.mute },
  langOn: { background:`linear-gradient(180deg, ${_D.light}, ${_D.deep})`, color:_D.ink },
  cta:   { fontFamily:"'Limelight', serif", letterSpacing:4, textTransform:'uppercase', background:`linear-gradient(180deg, ${_D.hi} 0%, ${_D.light} 40%, ${_D.deep} 100%)`, color:_D.ink, border:0, padding:'0.75rem 1.4rem', borderRadius:2, fontSize:'0.72rem', cursor:'pointer', boxShadow:'0 6px 18px rgba(227,184,92,0.3), inset 0 1px 0 rgba(255,242,194,0.55)' },
};

// ===== Hero =====
function Hero({ lang }) {
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  return (
    <section id="top" style={heroS.wrap}>
      <div style={heroS.sunWrap} aria-hidden>
        <window.Sunburst size={980} rays={32}/>
      </div>
      <window.DecoBand height={560} side="left"  style={{ position:'absolute', top:40, left:18 }}/>
      <window.DecoBand height={560} side="right" style={{ position:'absolute', top:40, right:18 }}/>

      <div style={heroS.inner}>
        <div style={heroS.eyebrow}>
          <window.Dingbat/>
          <span style={heroS.eyebrowText}>{t(I.hero.eyebrow)}</span>
          <window.Dingbat/>
        </div>
        <div style={heroS.estLine}>· EST · MMXXV ·</div>

        <h1 style={heroS.h1}>
          <span style={heroS.h1Small}>{t(I.hero.h1Small)}</span>
          <br/>
          <span style={heroS.h1Big}>
            <span style={heroS.h1Gold}>AI</span>
            <span style={heroS.h1Diamond}/>
            <span style={heroS.h1Gold}>Q</span>
            <span style={heroS.h1Qmark}>?</span>
          </span>
        </h1>

        <window.ChevronDivider width={620} style={{ margin:'26px auto' }}/>

        <p style={heroS.tag}>
          <span style={heroS.quoteMark}>&ldquo;</span>
          {t(I.hero.quote)}
          <span style={heroS.quoteMark}>&rdquo;</span>
        </p>
        <p style={heroS.lead}>
          <span style={heroS.drop}>{t(I.hero.lead).charAt(0)}</span>{t(I.hero.lead).slice(1)}
        </p>

        <div style={heroS.ctas}>
          <a href="quiz.html" style={{...heroS.primary, textDecoration:'none'}}>◆&nbsp;{t(I.hero.primary)}&nbsp;◆</a>
          <a href="#types" style={{...heroS.secondary, textDecoration:'none'}}>{t(I.hero.secondary)}&nbsp;↓</a>
        </div>

        <window.ChevronDivider width={520} style={{ margin:'3rem auto 0' }}/>

        <div style={heroS.statsFrame}>
          <Stat n={I.hero.s1n} l={t(I.hero.s1l)}/>
          <Stat n={I.hero.s2n} l={t(I.hero.s2l)}/>
          <Stat n={I.hero.s3n} l={t(I.hero.s3l)}/>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div style={statS.wrap}>
      <div style={statS.frame}/>
      <div style={statS.inner}>
        <div style={statS.n}>{n}</div>
        <div style={statS.rule}/>
        <div style={statS.l}>{l}</div>
      </div>
    </div>
  );
}

const heroS = {
  wrap: { position:'relative', overflow:'hidden', padding:'6rem 2rem 5rem' },
  sunWrap: { position:'absolute', top:-240, left:'50%', transform:'translateX(-50%)', opacity:0.22, filter:'drop-shadow(0 0 40px rgba(227,184,92,0.35))', pointerEvents:'none' },
  inner: { position:'relative', zIndex:1, maxWidth:1100, margin:'0 auto', textAlign:'center' },
  eyebrow: { display:'inline-flex', alignItems:'center', gap:14, color:_D.deep },
  eyebrowText: { fontFamily:"'Limelight', serif", fontSize:'0.85rem', letterSpacing:6, textTransform:'uppercase', color:_D.main },
  estLine: { fontFamily:'JetBrains Mono', fontSize:'0.7rem', color:_D.shadow, letterSpacing:6, marginTop:6, textTransform:'uppercase' },
  h1: { margin:'1.5rem 0 0.25rem', color:_D.cream, textAlign:'center' },
  h1Small: { fontFamily:"'Limelight', serif", fontWeight:400, fontSize:'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing:8, textTransform:'uppercase', color:_D.parch, display:'inline-block' },
  h1Big: { fontFamily:"'Limelight', serif", fontWeight:400, fontSize:'clamp(5rem, 13vw, 9rem)', letterSpacing:'0.08em', display:'inline-flex', alignItems:'center', lineHeight:1, marginTop:8 },
  h1Gold: { background:`linear-gradient(180deg, ${_D.hi} 0%, ${_D.light} 28%, ${_D.main} 52%, ${_D.deep} 78%, ${_D.shadow} 100%)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', filter:'drop-shadow(0 2px 0 rgba(122,90,30,0.55)) drop-shadow(0 0 28px rgba(227,184,92,0.35))' },
  h1Diamond: { display:'inline-block', width:'0.38em', height:'0.38em', background:`linear-gradient(135deg, ${_D.hi}, ${_D.deep})`, transform:'rotate(45deg)', margin:'0 0.24em', boxShadow:'0 0 0.6em rgba(244,211,122,0.8)', animation:'aiqDiamondPulse 2.4s ease-in-out infinite' },
  h1Qmark: { fontFamily:"'Limelight', serif", fontSize:'0.5em', background:`linear-gradient(180deg, ${_D.light}, ${_D.deep})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginLeft:'0.1em' },
  tag: { fontFamily:"'Limelight', serif", fontSize:'1.05rem', letterSpacing:2, color:_D.main, lineHeight:1.55, maxWidth:760, margin:'0 auto 1.2rem', textTransform:'none' },
  quoteMark: { fontFamily:"'Limelight', serif", fontSize:'1.6rem', color:_D.deep, verticalAlign:'-6px', margin:'0 4px' },
  lead: { fontSize:'1.02rem', color:_D.parch, lineHeight:1.85, maxWidth:720, margin:'0 auto', textAlign:'left' },
  drop: { fontFamily:"'Limelight', serif", fontSize:'3.1rem', lineHeight:0.9, float:'left', margin:'4px 12px 0 0', background:`linear-gradient(180deg, ${_D.light}, ${_D.deep})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' },
  ctas: { display:'flex', gap:'1rem', marginTop:'2.5rem', justifyContent:'center', flexWrap:'wrap' },
  primary: { fontFamily:"'Limelight', serif", letterSpacing:5, textTransform:'uppercase', background:`linear-gradient(180deg, ${_D.hi} 0%, ${_D.light} 40%, ${_D.deep} 100%)`, color:_D.ink, border:0, padding:'1rem 2.2rem', borderRadius:2, fontSize:'0.85rem', cursor:'pointer', boxShadow:'0 8px 22px rgba(227,184,92,0.4), inset 0 1px 0 rgba(255,242,194,0.6)' },
  secondary: { fontFamily:"'Limelight', serif", letterSpacing:4, textTransform:'uppercase', background:'rgba(20,14,8,0.7)', color:_D.main, border:`1px solid ${_D.deep}`, padding:'1rem 1.8rem', borderRadius:2, fontSize:'0.78rem', cursor:'pointer' },
  statsFrame: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1.5rem', marginTop:'2.5rem' },
};

const statS = {
  wrap: { position:'relative', padding:'1.75rem 1rem' },
  frame: { position:'absolute', inset:8, border:'1px solid rgba(184,135,58,0.5)', borderRadius:2, pointerEvents:'none' },
  inner: { position:'relative', textAlign:'center' },
  n: { fontFamily:"'Limelight', serif", fontSize:'3.2rem', letterSpacing:6, lineHeight:1, background:`linear-gradient(180deg, ${_D.hi} 0%, ${_D.light} 30%, ${_D.main} 55%, ${_D.deep} 90%)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', filter:'drop-shadow(0 2px 0 rgba(122,90,30,0.5))' },
  rule: { height:1, background:`linear-gradient(90deg, transparent, ${_D.deep} 40%, ${_D.light} 50%, ${_D.deep} 60%, transparent)`, margin:'0.75rem auto', maxWidth:120 },
  l: { fontFamily:"'Limelight', serif", fontSize:'0.7rem', color:_D.main, letterSpacing:3, textTransform:'uppercase', lineHeight:1.5 },
};

// ===== CTA =====
function CTABox({ lang }) {
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  return (
    <section style={{ padding:'2rem', maxWidth:1000, margin:'4rem auto' }}>
      <window.DecoFrame pad={44} style={{ textAlign:'center' }}>
        <window.Sunburst size={340} rays={20} style={{ position:'absolute', top:-140, left:'50%', transform:'translateX(-50%)', opacity:0.18, pointerEvents:'none' }}/>
        <div style={{ position:'relative' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:14 }}>
            <window.Dingbat/>
            <span style={{ fontFamily:"'Limelight', serif", fontSize:'0.78rem', letterSpacing:5, textTransform:'uppercase', color:_D.main }}>{t(I.cta.eyebrow)}</span>
            <window.Dingbat/>
          </div>
          <h2 style={{ fontFamily:"'Limelight', serif", fontWeight:400, fontSize:'clamp(1.8rem, 4.5vw, 2.6rem)', letterSpacing:5, textTransform:'uppercase', margin:'1.25rem 0 0.5rem', color:_D.cream }}>
            {t(I.cta.title)}
          </h2>
          <window.ChevronDivider width={360} style={{ margin:'1.25rem auto' }}/>
          <p style={{ fontSize:'1.02rem', color:_D.parch, maxWidth:600, margin:'0 auto', lineHeight:1.75 }}>
            {t(I.cta.lead)}
          </p>
          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center', marginTop:'2rem' }}>
            <a href="quiz.html" style={{ fontFamily:"'Limelight', serif", letterSpacing:5, textTransform:'uppercase', background:`linear-gradient(180deg, ${_D.hi} 0%, ${_D.light} 40%, ${_D.deep} 100%)`, color:_D.ink, border:0, padding:'1rem 2.2rem', borderRadius:2, fontSize:'0.85rem', cursor:'pointer', textDecoration:'none' }}>
              ◆&nbsp;{t(I.cta.primary)}&nbsp;◆
            </a>
            <a href="case-studies-en.pdf" style={{ fontFamily:"'Limelight', serif", letterSpacing:4, textTransform:'uppercase', background:'rgba(20,14,8,0.7)', color:_D.main, border:`1px solid ${_D.deep}`, padding:'1rem 1.8rem', borderRadius:2, fontSize:'0.78rem', textDecoration:'none' }}>
              {t(I.cta.secondary)}
            </a>
          </div>
        </div>
      </window.DecoFrame>
    </section>
  );
}

// ===== Footer =====
function Footer({ lang }) {
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  return (
    <footer style={footS.wrap}>
      <div style={footS.hair}/>
      <div style={footS.hair2}/>
      <window.FanSpray size={110} style={{ position:'absolute', top:-6, left:-6, transform:'rotate(90deg)', opacity:0.55 }}/>
      <window.FanSpray size={110} style={{ position:'absolute', top:-6, right:-6, transform:'rotate(180deg)', opacity:0.55 }}/>

      <div style={footS.inner}>
        <div style={footS.logoCol}>
          <div style={footS.logo}>
            <span style={footS.logoText}>AI</span>
            <span style={footS.logoDot}/>
            <span style={footS.logoText}>Q</span>
          </div>
          <p style={footS.tag}>{t(I.foot.tag)}</p>
          <div style={footS.est}>◆ EST · MMXXV ◆</div>
        </div>
        <div style={footS.colsWrap}>
          <FooterCol title={t(I.foot.framework)} items={[t(I.nav.framework), t(I.nav.types), t(I.nav.sama)]}/>
          <FooterCol title={t(I.foot.author)}    items={['drandino.com →', 'Amazon Book →', 'LinkedIn →']}/>
        </div>
      </div>
      <window.ChevronDivider width={500} style={{ margin:'2.5rem auto 1rem' }}/>
      <div style={footS.fine}>
        {t(I.foot.copy)}
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={footS.colH}>◆ {title} ◆</div>
      <div style={footS.colItems}>
        {items.map(i => <div key={i} style={footS.colItem}>{i}</div>)}
      </div>
    </div>
  );
}

const footS = {
  wrap: { position:'relative', padding:'4rem 2rem 2rem', marginTop:'4rem', overflow:'hidden', borderTop:`1px solid rgba(184,135,58,0.5)` },
  hair: { position:'absolute', top:0, left:'5%', right:'5%', height:1, background:'linear-gradient(90deg, transparent, rgba(244,211,122,0.9) 50%, transparent)' },
  hair2: { position:'absolute', top:3, left:'10%', right:'10%', height:1, background:'linear-gradient(90deg, transparent, rgba(184,135,58,0.5) 50%, transparent)' },
  inner: { maxWidth:1400, margin:'0 auto', display:'flex', justifyContent:'space-between', gap:'3rem', flexWrap:'wrap' },
  logoCol: { maxWidth:360 },
  logo: { fontFamily:"'Limelight', serif", fontSize:'2rem', letterSpacing:8, display:'inline-flex', alignItems:'center' },
  logoText: { background:`linear-gradient(180deg, ${_D.hi}, ${_D.main} 55%, ${_D.deep})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' },
  logoDot: { display:'inline-block', width:'0.32em', height:'0.32em', background:`linear-gradient(135deg, ${_D.hi}, ${_D.deep})`, transform:'rotate(45deg)', margin:'0 0.28em', alignSelf:'center', boxShadow:'0 0 0.5em rgba(244,211,122,0.7)' },
  tag: { color:_D.parch, fontSize:'0.9rem', lineHeight:1.6, marginTop:12, fontStyle:'italic' },
  est: { fontFamily:"'Limelight', serif", fontSize:'0.72rem', color:_D.deep, letterSpacing:5, marginTop:16, textTransform:'uppercase' },
  colsWrap: { display:'flex', gap:'3.5rem' },
  colH: { fontFamily:"'Limelight', serif", fontSize:'0.9rem', color:_D.main, letterSpacing:4, textTransform:'uppercase', marginBottom:14 },
  colItems: {},
  colItem: { fontFamily:"'Limelight', serif", fontSize:'0.78rem', color:_D.parch, letterSpacing:2, lineHeight:2.3, textTransform:'uppercase', cursor:'pointer' },
  fine: { textAlign:'center', color:_D.mute, fontFamily:'JetBrains Mono', fontSize:'0.7rem', letterSpacing:3, textTransform:'uppercase' },
};

Object.assign(window, { NavBar, Hero, Stat, CTABox, Footer, useLang });
