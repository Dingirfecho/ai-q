// AI-Q site — Dimensions, Types grid, Case Studies sections
const _dd = window.DECO;
const { useState: _useS2 } = React;

function SectionHead({ eyebrow, title, lead }) {
  return (
    <div style={{ textAlign:'center', maxWidth:860, margin:'0 auto 3rem' }}>
      <div style={{ display:'inline-flex', alignItems:'center', gap:14 }}>
        <window.Dingbat/>
        <span style={{ fontFamily:"'Limelight', serif", fontSize:'0.8rem', letterSpacing:6, textTransform:'uppercase', color:_dd.main }}>{eyebrow}</span>
        <window.Dingbat/>
      </div>
      <h2 style={{ fontFamily:"'Limelight', serif", fontWeight:400, fontSize:'clamp(2rem, 5vw, 3.2rem)', letterSpacing:6, textTransform:'uppercase', margin:'1.25rem 0 0', color:_dd.cream, lineHeight:1.15 }}>
        {title}
      </h2>
      <window.ChevronDivider width={380} style={{ margin:'1.25rem auto' }}/>
      {lead && <p style={{ fontSize:'1.05rem', color:_dd.parch, lineHeight:1.8, margin:0 }}>{lead}</p>}
    </div>
  );
}

// ===== Dimensions =====
function SGlyph() { return (
  <svg width="64" height="64" viewBox="0 0 80 80" aria-hidden>
    <g stroke="url(#dcGold)" strokeWidth="1.4" fill="none">
      <path d="M16 18 L16 62"/><path d="M28 14 L28 66"/><path d="M40 10 L40 70"/><path d="M52 14 L52 66"/><path d="M64 18 L64 62"/>
      <path d="M10 62 L70 62"/><path d="M14 66 L66 66"/>
    </g>
    <path d="M40 40 L46 46 L40 52 L34 46 Z" fill="url(#dcGoldDiag)"/>
  </svg>
);}
function OGlyph() { return (
  <svg width="64" height="64" viewBox="0 0 80 80" aria-hidden>
    <g stroke="url(#dcGold)" strokeWidth="1.3" fill="none">
      <circle cx="40" cy="40" r="26"/><circle cx="40" cy="40" r="18"/>
      <path d="M40 6 L40 74 M6 40 L74 40"/>
    </g>
    <circle cx="40" cy="40" r="6" fill="url(#dcGoldDiag)"/>
    <circle cx="40" cy="40" r="2" fill={_dd.ink}/>
  </svg>
);}
function LGlyph() { return (
  <svg width="64" height="64" viewBox="0 0 80 80" aria-hidden>
    <g stroke="url(#dcGold)" strokeWidth="1.3" fill="none">
      <path d="M40 8 L40 40"/><path d="M26 16 L26 40"/><path d="M54 16 L54 40"/>
      <path d="M12 26 L12 40"/><path d="M68 26 L68 40"/>
      <path d="M8 40 L72 40"/>
    </g>
    <path d="M40 48 L48 56 L40 64 L32 56 Z" fill="url(#dcGoldDiag)"/>
    <path d="M40 53 L43 56 L40 59 L37 56 Z" fill={_dd.ink}/>
  </svg>
);}
function IGlyph() { return (
  <svg width="64" height="64" viewBox="0 0 80 80" aria-hidden>
    <g stroke="url(#dcGold)" strokeWidth="1.4" fill="none">
      <rect x="10" y="26" width="30" height="28"/>
      <rect x="34" y="20" width="36" height="40"/>
      <path d="M10 40 L70 40"/>
    </g>
    <path d="M34 34 L40 40 L34 46 L28 40 Z" fill="url(#dcGoldDiag)"/>
  </svg>
);}

function DimensionsSection({ lang }) {
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  const glyphs = { S: SGlyph, O: OGlyph, L: LGlyph, I: IGlyph };
  return (
    <section id="framework" style={{ position:'relative', padding:'5rem 2rem', maxWidth:1400, margin:'0 auto' }}>
      <SectionHead eyebrow={t(I.dim.eyebrow)} title={t(I.dim.title)} lead={t(I.dim.lead)}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem' }}>
        {window.DIMENSIONS.map(d => {
          const G = glyphs[d.key];
          return (
            <window.DecoFrame key={d.key} pad={28} style={{ minHeight:340 }}>
              <div style={dimS.letter}>{d.key}</div>
              <div style={dimS.glyph}><G/></div>
              <h3 style={dimS.h}>{t(d.title)}</h3>
              <div style={dimS.rule}/>
              <p style={dimS.desc}>{t(d.desc)}</p>
              <window.DecoWell style={{ marginTop:16 }} pad={12}>
                <div style={dimS.spectrum}>
                  <span style={dimS.left}>{t(d.left)}</span>
                  <span style={dimS.pivot}/>
                  <span style={dimS.right}>{t(d.right)}</span>
                </div>
              </window.DecoWell>
            </window.DecoFrame>
          );
        })}
      </div>
    </section>
  );
}

const dimS = {
  letter: { position:'absolute', top:14, right:18, fontFamily:"'Limelight', serif", fontSize:'2.8rem', letterSpacing:2, background:`linear-gradient(180deg, ${_dd.hi}, ${_dd.main} 55%, ${_dd.deep})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1, opacity:0.75 },
  glyph: { marginTop:8, marginBottom:16 },
  h: { fontFamily:"'Limelight', serif", fontWeight:400, fontSize:'1.35rem', letterSpacing:4, textTransform:'uppercase', margin:0, background:`linear-gradient(180deg, ${_dd.hi}, ${_dd.main} 55%, ${_dd.deep})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' },
  rule: { height:1, background:`linear-gradient(90deg, ${_dd.deep} 0%, ${_dd.light} 50%, ${_dd.deep} 100%)`, margin:'10px 0 12px', width:'60%' },
  desc: { fontSize:'0.95rem', color:_dd.parch, lineHeight:1.65, margin:0 },
  spectrum: { fontFamily:"'Limelight', serif", fontSize:'0.72rem', color:_dd.mute, textTransform:'uppercase', letterSpacing:2.5, display:'flex', alignItems:'center', justifyContent:'space-between' },
  left: { },
  right: { color:_dd.main },
  pivot: { width:8, height:8, transform:'rotate(45deg)', background:`linear-gradient(135deg, ${_dd.light}, ${_dd.deep})`, boxShadow:'0 0 6px rgba(244,211,122,0.6)' },
};

// ===== Types grid =====
function TypesSection({ lang, onPickType }) {
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  const [filter, setFilter] = _useS2('All');
  const chips = [
    { id:'All',          label: t(I.types.chips.all) },
    { id:'Scattered',    label: t(I.types.chips.scattered) },
    { id:'Consolidated', label: t(I.types.chips.consolidated) },
  ];
  let shown = window.TYPES;
  if (filter === 'Scattered')    shown = shown.filter(x => x.code[0] === 'S');
  if (filter === 'Consolidated') shown = shown.filter(x => x.code[0] === 'C');
  // sort by tier rank then code
  shown = [...shown].sort((a,b) => (window.TIER_RANK[a.code]||9) - (window.TIER_RANK[b.code]||9));

  return (
    <section id="types" style={{ position:'relative', padding:'5rem 2rem', maxWidth:1400, margin:'0 auto' }}>
      <SectionHead eyebrow={t(I.types.eyebrow)} title={t(I.types.title)} lead={t(I.types.lead)}/>
      <div style={chipS.wrap}>
        {chips.map(c => (
          <span key={c.id} style={{ ...chipS.chip, ...(filter===c.id ? chipS.chipOn : {}) }} onClick={() => setFilter(c.id)}>
            {filter===c.id && <window.Diamond size={6} glow={false} style={{ margin:'0 6px 0 0' }}/>}
            {c.label}
          </span>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1rem' }}>
        {shown.map(ty => {
          const dims = window.dimsFor(ty.code);
          const tier = window.TIER_RANK[ty.code] || 4;
          return (
            <div key={ty.code} onClick={() => onPickType(ty)}
              style={typeS.card}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 28px 70px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,242,194,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={typeS.frame}/>
              <div style={typeS.frame2}/>
              <window.ZigguratCorner size={34} rotate={0}   style={{ position:'absolute', top:2, left:2, opacity:0.9 }}/>
              <window.ZigguratCorner size={34} rotate={90}  style={{ position:'absolute', top:2, right:2, opacity:0.9 }}/>
              <window.ZigguratCorner size={34} rotate={270} style={{ position:'absolute', bottom:2, left:2, opacity:0.9 }}/>
              <window.ZigguratCorner size={34} rotate={180} style={{ position:'absolute', bottom:2, right:2, opacity:0.9 }}/>
              <svg viewBox="0 0 80 10" width="80" height="10" style={{ position:'absolute', top:-1, left:'50%', transform:'translateX(-50%)' }} aria-hidden>
                <path d="M0 10 L40 0 L80 10" fill="none" stroke="url(#dcGold)" strokeWidth="1"/>
                <path d="M37 10 L40 2 L43 10 Z" fill="url(#dcGoldDiag)"/>
              </svg>

              <div style={{ padding:'1.25rem 1rem 1rem', position:'relative' }}>
                <div style={typeS.codeWrap}>
                  <span style={typeS.flank}/>
                  <span style={typeS.code}>{ty.code}</span>
                  <span style={typeS.flank}/>
                </div>
                <div style={typeS.name}>{t(ty.name)}</div>
                <div style={typeS.quote}>
                  <span style={typeS.qMark}>&ldquo;</span>{t(ty.tagline)}<span style={typeS.qMark}>&rdquo;</span>
                </div>
                <div style={typeS.rule}/>
                <div style={typeS.meta}>
                  <span>Tier&nbsp;{['','I','II','III','IV'][tier] || 'IV'}</span>
                  <span style={typeS.metaDims}>◆ {dims.join(' · ')}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const chipS = {
  wrap: { display:'flex', gap:'0.5rem', margin:'0 0 2rem', flexWrap:'wrap', justifyContent:'center' },
  chip: { fontFamily:"'Limelight', serif", fontSize:'0.72rem', letterSpacing:3, textTransform:'uppercase', padding:'0.55rem 1.2rem', border:`1px solid rgba(184,135,58,0.5)`, borderRadius:2, color:_dd.parch, background:'rgba(20,14,8,0.6)', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:6 },
  chipOn: { borderColor:_dd.main, color:_dd.ink, background:`linear-gradient(180deg, ${_dd.light}, ${_dd.deep})`, boxShadow:'0 0 14px rgba(227,184,92,0.4), inset 0 1px 0 rgba(255,242,194,0.5)' },
};

const typeS = {
  card: { position:'relative', ...window.decoSurface, borderRadius:2, cursor:'pointer', transition:'transform 0.3s, box-shadow 0.3s', minHeight:200 },
  frame: { position:'absolute', inset:8, border:'1px solid rgba(244,211,122,0.3)', borderRadius:1, pointerEvents:'none' },
  frame2: { position:'absolute', inset:12, border:'1px solid rgba(184,135,58,0.2)', borderRadius:1, pointerEvents:'none' },
  codeWrap: { display:'flex', alignItems:'center', gap:10, marginBottom:8 },
  flank: { flex:1, height:1, background:`linear-gradient(90deg, transparent, ${_dd.deep} 50%, transparent)` },
  code: { fontFamily:'JetBrains Mono', fontWeight:700, fontSize:'1.55rem', letterSpacing:8, paddingLeft:8, background:`linear-gradient(180deg, ${_dd.hi} 0%, ${_dd.light} 30%, ${_dd.main} 55%, ${_dd.deep} 90%)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', filter:'drop-shadow(0 1px 0 rgba(122,90,30,0.5))' },
  name: { fontFamily:"'Limelight', serif", fontSize:'0.95rem', letterSpacing:3, textTransform:'uppercase', color:_dd.cream, textAlign:'center', marginTop:2 },
  quote: { fontFamily:'Space Grotesk', fontStyle:'italic', fontSize:'0.86rem', color:_dd.parch, marginTop:8, lineHeight:1.45, textAlign:'center' },
  qMark: { fontFamily:"'Limelight', serif", fontStyle:'normal', color:_dd.deep, marginRight:4, fontSize:'1.2rem' },
  rule: { height:1, background:`linear-gradient(90deg, transparent, ${_dd.deep} 50%, transparent)`, margin:'0.9rem 0 0.5rem' },
  meta: { display:'flex', justifyContent:'space-between', fontFamily:'JetBrains Mono', fontSize:'0.65rem', letterSpacing:2, textTransform:'uppercase', color:_dd.mute },
  metaDims: { color:_dd.main },
};

// ===== Case Studies =====
function CaseStudies({ lang }) {
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  const items = [
    { tag:'EN', title: t(I.cases.enTitle),    desc: t(I.cases.enDesc),    href:'case-studies-en.pdf', size:'PDF · EN' },
    { tag:'GD', title: t(I.cases.guideTitle), desc: t(I.cases.guideDesc), href:'aiq-types-guide.pdf', size:'PDF · GUIDE' },
    { tag:'ES', title: t(I.cases.esTitle),    desc: t(I.cases.esDesc),    href:'case-studies-es.pdf', size:'PDF · ES' },
  ];
  return (
    <section id="cases" style={{ position:'relative', padding:'5rem 2rem', maxWidth:1400, margin:'0 auto' }}>
      <SectionHead eyebrow={t(I.cases.eyebrow)} title={t(I.cases.title)} lead={t(I.cases.lead)}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:'1.25rem' }}>
        {items.map(it => (
          <window.DecoFrame key={it.title} pad={20}>
            <div style={{ display:'flex', gap:'1rem', alignItems:'flex-start' }}>
              <div style={caseS.tag}>
                <div style={caseS.tagFrame}/>
                <span style={caseS.tagText}>{it.tag}</span>
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={caseS.title}>{it.title}</div>
                <div style={caseS.desc}>{it.desc}</div>
                <div style={caseS.size}>◆ {it.size}</div>
              </div>
              <a href={it.href} download style={caseS.arrow} aria-label={t(I.cases.download)}>↓</a>
            </div>
          </window.DecoFrame>
        ))}
      </div>
      <div style={caseS.cite}>{t(I.cases.citation)}</div>
    </section>
  );
}

const caseS = {
  tag: { position:'relative', width:60, height:60, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 },
  tagFrame: { position:'absolute', inset:0, border:`1px solid ${_dd.deep}`, borderRadius:2, background:'radial-gradient(circle at 50% 40%, rgba(227,184,92,0.18), rgba(10,9,6,0.8))' },
  tagText: { position:'relative', fontFamily:"'Limelight', serif", fontSize:'1rem', letterSpacing:3, color:_dd.main },
  title: { fontFamily:"'Limelight', serif", letterSpacing:2.5, color:_dd.cream, fontSize:'0.95rem', textTransform:'uppercase', lineHeight:1.3 },
  desc: { fontSize:'0.85rem', color:_dd.parch, lineHeight:1.55, marginTop:6 },
  size: { fontFamily:'JetBrains Mono', fontSize:'0.65rem', color:_dd.mute, marginTop:8, letterSpacing:2, textTransform:'uppercase' },
  arrow: { fontFamily:"'Limelight', serif", color:_dd.main, fontSize:'1.6rem', textDecoration:'none', cursor:'pointer' },
  cite: { textAlign:'center', marginTop:'2rem', fontFamily:'JetBrains Mono', fontSize:'0.72rem', color:_dd.mute, letterSpacing:2, textTransform:'uppercase' },
};

// ===== Type Modal — full content =====
function TypeModal({ type, lang, onClose }) {
  if (!type) return null;
  const I = window.I18N;
  const t = (k) => window.t(k, lang);
  const dims = window.dimsFor(type.code);
  const tier = window.TIER_RANK[type.code] || 4;

  return (
    <div style={modS.overlay} onClick={onClose}>
      <div style={{ maxWidth:880, width:'100%', maxHeight:'90vh', overflowY:'auto' }} onClick={e => e.stopPropagation()}>
        <window.DecoFrame pad={36}>
          <button style={modS.close} onClick={onClose} aria-label="Close">×</button>

          <div style={{ display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap' }}>
            <div style={modS.portrait}>
              <div style={modS.portraitFrame}/>
              <div style={modS.portraitGlyph}>
                <window.Sunburst size={120} rays={20}/>
                <div style={modS.portraitCode}>{type.code}</div>
              </div>
            </div>
            <div style={{ flex:1, minWidth:280 }}>
              <div style={modS.codeWrap}>
                <span style={modS.flank}/>
                <span style={modS.code}>{type.code}</span>
                <span style={modS.flank}/>
              </div>
              <h2 style={modS.name}>{t(type.name)}</h2>
              <p style={modS.tagLine}>
                <span style={modS.qMark}>&ldquo;</span>{t(type.tagline)}<span style={modS.qMark}>&rdquo;</span>
              </p>
              <div style={modS.metaRow}>
                <span style={modS.metaPill}>Tier&nbsp;{['','I','II','III','IV'][tier]}</span>
                <span style={modS.metaPill}>{type.quadrant}</span>
                <span style={modS.metaPill}>◆ {dims.join(' · ')}</span>
              </div>
            </div>
          </div>

          <window.ChevronDivider width={420} style={{ margin:'1.75rem auto' }}/>

          <window.DecoWell pad={20}>
            <div style={modS.h}>◆ {t(I.modal.profile)} ◆</div>
            <p style={{ color:_dd.cream, lineHeight:1.75, margin:'10px 0 0', fontSize:'0.98rem' }}>{t(type.description)}</p>
          </window.DecoWell>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.25rem', marginTop:'1.25rem' }}>
            <window.DecoWell>
              <div style={{...modS.h, color:'#9BB05E'}}>◆ {t(I.modal.strengths)} ◆</div>
              <ul style={modS.ul}>
                {t(type.strengths).map((s,i) => <li key={i}>{s}</li>)}
              </ul>
            </window.DecoWell>
            <window.DecoWell>
              <div style={{ ...modS.h, color:'#C25342' }}>◆ {t(I.modal.blindspots)} ◆</div>
              <ul style={modS.ul}>
                {t(type.blindspots).map((s,i) => <li key={i}>{s}</li>)}
              </ul>
            </window.DecoWell>
          </div>

          <window.DecoWell pad={20} style={{ marginTop:'1.25rem' }}>
            <div style={modS.h}>◆ {t(I.modal.symptoms)} ◆</div>
            <ul style={{ ...modS.ul, fontStyle:'italic' }}>
              {t(type.symptoms).map((s,i) => <li key={i}>&ldquo;{s}&rdquo;</li>)}
            </ul>
          </window.DecoWell>

          <div style={modS.path}>
            <div style={{ ...modS.h, marginBottom:8, color:_dd.main }}>◆ {t(I.modal.path)} ◆</div>
            <p style={{ color:_dd.cream, margin:0, lineHeight:1.7, fontSize:'1.02rem', textAlign:'center' }}>
              {t(type.path)}
            </p>
          </div>
        </window.DecoFrame>
      </div>
    </div>
  );
}

const modS = {
  overlay: { position:'fixed', inset:0, background:'rgba(5,4,2,0.9)', backdropFilter:'blur(10px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', zIndex:200 },
  close: { position:'absolute', top:12, right:12, background:'rgba(20,14,8,0.8)', border:`1px solid ${_dd.deep}`, color:_dd.main, width:36, height:36, borderRadius:2, cursor:'pointer', fontSize:'1.3rem', zIndex:3 },
  portrait: { position:'relative', width:160, height:160, padding:12, display:'flex', alignItems:'center', justifyContent:'center', background:'radial-gradient(circle at 50% 40%, rgba(227,184,92,0.15), rgba(10,9,6,0.9))', border:`1px solid ${_dd.deep}`, borderRadius:2, overflow:'hidden' },
  portraitFrame: { position:'absolute', inset:5, border:'1px solid rgba(227,184,92,0.3)', borderRadius:1, pointerEvents:'none' },
  portraitGlyph: { position:'relative', display:'flex', alignItems:'center', justifyContent:'center' },
  portraitCode: { position:'absolute', fontFamily:'JetBrains Mono', fontWeight:700, fontSize:'1.05rem', letterSpacing:4, color:_dd.cream, background:'rgba(10,9,6,0.7)', padding:'4px 8px', borderRadius:2, border:`1px solid rgba(184,135,58,0.6)` },
  codeWrap: { display:'flex', alignItems:'center', gap:10, marginBottom:8 },
  flank: { flex:1, maxWidth:60, height:1, background:`linear-gradient(90deg, transparent, ${_dd.deep})` },
  code: { fontFamily:'JetBrains Mono', fontWeight:700, fontSize:'2.6rem', letterSpacing:10, paddingLeft:10, background:`linear-gradient(180deg, ${_dd.hi} 0%, ${_dd.light} 30%, ${_dd.main} 55%, ${_dd.deep} 90%)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' },
  name: { fontFamily:"'Limelight', serif", fontWeight:400, fontSize:'1.6rem', letterSpacing:4, textTransform:'uppercase', margin:'0.25rem 0', color:_dd.cream },
  tagLine: { fontFamily:'Space Grotesk', fontStyle:'italic', fontSize:'1.05rem', color:_dd.main, marginTop:6 },
  qMark: { fontFamily:"'Limelight', serif", fontStyle:'normal', color:_dd.deep, fontSize:'1.35rem', margin:'0 4px' },
  metaRow: { display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'0.75rem' },
  metaPill: { fontFamily:'JetBrains Mono', fontSize:'0.68rem', letterSpacing:2, textTransform:'uppercase', color:_dd.parch, padding:'4px 10px', border:`1px solid rgba(184,135,58,0.5)`, borderRadius:2, background:'rgba(20,14,8,0.6)' },
  h: { fontFamily:"'Limelight', serif", fontSize:'0.82rem', letterSpacing:4, textTransform:'uppercase', color:'#8BA65A', textAlign:'center' },
  ul: { color:_dd.parch, lineHeight:1.8, paddingLeft:'1.25rem', margin:'10px 0 0', fontSize:'0.92rem' },
  path: { marginTop:'1.5rem', padding:'1.5rem', background:'linear-gradient(180deg, rgba(227,184,92,0.1), rgba(184,135,58,0.04))', border:`1px solid ${_dd.deep}`, borderRadius:2, textAlign:'center' },
};

Object.assign(window, { DimensionsSection, TypesSection, CaseStudies, TypeModal });
