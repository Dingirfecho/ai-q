// Art-Deco ornaments — heavy gilded vocabulary
// Shared across the marketing site. Every glyph is rendered as SVG so it scales.

const DECO = {
  hi:     '#FFF2C2',
  light:  '#F4D37A',
  main:   '#E3B85C',
  deep:   '#B8873A',
  shadow: '#7A5A1E',
  ember:  '#4A3416',
  ink:    '#0A0906',
  ink2:   '#14100A',
  ink3:   '#1E1710',
  cream:  '#F5EAD2',
  parch:  '#D9C9A3',
  mute:   '#94886A',
  lacquer:'#241A10',
};

// Reusable SVG defs (gradients) — inject once per page
function DecoDefs() {
  return (
    <svg width="0" height="0" style={{ position:'absolute' }} aria-hidden>
      <defs>
        <linearGradient id="dcGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor={DECO.hi}/>
          <stop offset="0.3" stopColor={DECO.light}/>
          <stop offset="0.55" stopColor={DECO.main}/>
          <stop offset="0.85" stopColor={DECO.deep}/>
          <stop offset="1"   stopColor={DECO.shadow}/>
        </linearGradient>
        <linearGradient id="dcGoldH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0"    stopColor="transparent"/>
          <stop offset="0.15" stopColor={DECO.shadow}/>
          <stop offset="0.5"  stopColor={DECO.hi}/>
          <stop offset="0.85" stopColor={DECO.shadow}/>
          <stop offset="1"    stopColor="transparent"/>
        </linearGradient>
        <linearGradient id="dcGoldDiag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0"   stopColor={DECO.hi}/>
          <stop offset="0.5" stopColor={DECO.main}/>
          <stop offset="1"   stopColor={DECO.shadow}/>
        </linearGradient>
        <radialGradient id="dcGoldR" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0"   stopColor={DECO.hi}/>
          <stop offset="0.5" stopColor={DECO.main}/>
          <stop offset="1"   stopColor={DECO.shadow}/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// ===== Sunburst — the signature motif =====
function Sunburst({ size = 220, rays = 24, style = {} }) {
  const r = size/2;
  const arr = Array.from({length: rays});
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={style} aria-hidden>
      {arr.map((_,i) => {
        const a = (i/rays) * Math.PI * 2;
        const long = i % 2 === 0;
        const rr = long ? r*0.95 : r*0.7;
        const w  = long ? 2.2 : 1;
        const x = r + Math.cos(a)*rr;
        const y = r + Math.sin(a)*rr;
        return <line key={i} x1={r} y1={r} x2={x} y2={y} stroke="url(#dcGold)" strokeWidth={w} opacity={long?0.85:0.5}/>;
      })}
      <circle cx={r} cy={r} r={r*0.18} fill="url(#dcGoldR)"/>
      <circle cx={r} cy={r} r={r*0.1}  fill={DECO.ink}/>
      <circle cx={r} cy={r} r={r*0.05} fill="url(#dcGold)"/>
    </svg>
  );
}

// ===== Stepped Ziggurat frame corner =====
function ZigguratCorner({ size = 54, rotate = 0, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60"
         style={{ transform:`rotate(${rotate}deg)`, ...style }} aria-hidden>
      <g stroke="url(#dcGold)" strokeWidth="1.4" fill="none" strokeLinejoin="miter">
        <path d="M2 58 L2 46 L10 46 L10 38 L18 38 L18 30 L26 30 L26 22 L34 22 L34 14 L42 14 L42 6 L58 6"/>
      </g>
      <g fill="url(#dcGold)" opacity="0.55">
        <circle cx="10" cy="50" r="1.4"/>
        <circle cx="22" cy="38" r="1.4"/>
        <circle cx="34" cy="26" r="1.4"/>
        <circle cx="46" cy="14" r="1.4"/>
      </g>
    </svg>
  );
}

// ===== Chevron divider — heavy rule break with fan =====
function ChevronDivider({ width = 520, style = {} }) {
  return (
    <svg width={width} height={40} viewBox="0 0 520 40" preserveAspectRatio="none"
         style={{ display:'block', ...style }} aria-hidden>
      <line x1="0"   y1="20" x2="200" y2="20" stroke="url(#dcGoldH)" strokeWidth="1"/>
      <line x1="0"   y1="23" x2="200" y2="23" stroke="url(#dcGoldH)" strokeWidth="0.5" opacity="0.5"/>
      <line x1="320" y1="20" x2="520" y2="20" stroke="url(#dcGoldH)" strokeWidth="1"/>
      <line x1="320" y1="23" x2="520" y2="23" stroke="url(#dcGoldH)" strokeWidth="0.5" opacity="0.5"/>
      <g transform="translate(260 20)">
        <g stroke="url(#dcGold)" strokeWidth="1.2" fill="none">
          <path d="M-40 0 L-32 -8 L-24 0"/>
          <path d="M-24 0 L-16 -8 L-8 0"/>
          <path d="M8 0 L16 -8 L24 0"/>
          <path d="M24 0 L32 -8 L40 0"/>
          <path d="M-40 0 L-32 8 L-24 0"/>
          <path d="M-24 0 L-16 8 L-8 0"/>
          <path d="M8 0 L16 8 L24 0"/>
          <path d="M24 0 L32 8 L40 0"/>
        </g>
        <path d="M-6 0 L0 -10 L6 0 L0 10 Z" fill="url(#dcGoldDiag)"/>
        <path d="M-2.5 0 L0 -4 L2.5 0 L0 4 Z" fill={DECO.ink}/>
      </g>
    </svg>
  );
}

// ===== Deco band — vertical column of diamonds and bars =====
function DecoBand({ height = 300, side = 'left', style = {} }) {
  return (
    <svg width="22" height={height} viewBox={`0 0 22 ${height}`} preserveAspectRatio="none"
         style={{ [side]: 0, ...style }} aria-hidden>
      <line x1="4" y1="0" x2="4" y2={height} stroke="url(#dcGold)" strokeWidth="0.75" opacity="0.8"/>
      <line x1="18" y1="0" x2="18" y2={height} stroke="url(#dcGold)" strokeWidth="0.75" opacity="0.6"/>
      {Array.from({length: Math.floor(height/28)}).map((_,i) => (
        <g key={i} transform={`translate(11 ${14+i*28})`}>
          <path d="M0 -4 L4 0 L0 4 L-4 0 Z" fill="url(#dcGoldDiag)"/>
          <path d="M0 -1.5 L1.5 0 L0 1.5 L-1.5 0 Z" fill={DECO.ink}/>
        </g>
      ))}
    </svg>
  );
}

// ===== Fan spray — quarter sunburst =====
function FanSpray({ size = 120, style = {} }) {
  const rays = 9;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      {Array.from({length: rays}).map((_,i) => {
        const a = (-Math.PI/2) + (i/(rays-1)) * (Math.PI/2);
        const r = 92;
        const x = 50 + Math.cos(a)*r;
        const y = 100 + Math.sin(a)*r;
        return <line key={i} x1="50" y1="100" x2={x} y2={y} stroke="url(#dcGold)" strokeWidth="1" opacity={0.6 + 0.4*Math.abs(Math.cos(a))}/>;
      })}
      <path d="M50 100 A 92 92 0 0 1 142 100" stroke="url(#dcGold)" strokeWidth="1.2" fill="none"/>
      <path d="M50 100 A 70 70 0 0 1 120 100" stroke="url(#dcGold)" strokeWidth="0.8" fill="none" opacity="0.7"/>
      <path d="M50 100 A 48 48 0 0 1 98 100"  stroke="url(#dcGold)" strokeWidth="0.6" fill="none" opacity="0.5"/>
    </svg>
  );
}

// ===== Diamond pip =====
function Diamond({ size = 10, glow = true, style = {} }) {
  return (
    <span style={{ display:'inline-block', width:size, height:size, transform:'rotate(45deg)',
      background:`linear-gradient(135deg, ${DECO.hi}, ${DECO.deep})`,
      boxShadow: glow ? '0 0 10px rgba(244,211,122,0.55)' : 'none',
      verticalAlign:'middle', ...style }}/>
  );
}

// ===== Deco dingbat — centered ornament for eyebrows =====
function Dingbat({ style = {} }) {
  return (
    <svg width="70" height="14" viewBox="0 0 70 14" style={{ verticalAlign:'middle', ...style }} aria-hidden>
      <line x1="0"  y1="7" x2="24" y2="7" stroke="url(#dcGoldH)" strokeWidth="1"/>
      <line x1="46" y1="7" x2="70" y2="7" stroke="url(#dcGoldH)" strokeWidth="1"/>
      <path d="M35 0 L39 7 L35 14 L31 7 Z" fill="url(#dcGoldDiag)"/>
      <path d="M35 3.5 L37 7 L35 10.5 L33 7 Z" fill={DECO.ink}/>
    </svg>
  );
}

// ===== Card chrome primitives =====
const decoSurface = {
  position: 'relative',
  background:
    'linear-gradient(180deg, rgba(36,26,16,0.95) 0%, rgba(10,9,6,0.95) 55%, rgba(20,14,8,0.95) 100%)',
  border: '1px solid rgba(184,135,58,0.55)',
  boxShadow:
    'inset 0 1px 0 rgba(255,242,194,0.15), inset 0 0 0 1px rgba(184,135,58,0.15), 0 20px 60px rgba(0,0,0,0.6)',
  overflow: 'hidden',
};

// Full decorative frame: gold inner hairline + 4 ziggurat corners
function DecoFrame({ children, pad = 28, corners = true, crown = true, style = {} }) {
  return (
    <div style={{ ...decoSurface, padding: pad, borderRadius: 4, ...style }}>
      {/* Inner gold hairline rectangle */}
      <div style={{
        position:'absolute', inset: 10, border: `1px solid rgba(244,211,122,0.35)`,
        pointerEvents:'none', borderRadius: 2
      }}/>
      <div style={{
        position:'absolute', inset: 14, border: `1px solid rgba(184,135,58,0.25)`,
        pointerEvents:'none', borderRadius: 2
      }}/>
      {corners && (
        <>
          <ZigguratCorner size={46} rotate={0}   style={{ position:'absolute', top:4,   left:4,   opacity:0.95 }}/>
          <ZigguratCorner size={46} rotate={90}  style={{ position:'absolute', top:4,   right:4,  opacity:0.95 }}/>
          <ZigguratCorner size={46} rotate={270} style={{ position:'absolute', bottom:4,left:4,   opacity:0.95 }}/>
          <ZigguratCorner size={46} rotate={180} style={{ position:'absolute', bottom:4,right:4,  opacity:0.95 }}/>
        </>
      )}
      {crown && (
        <div style={{ position:'absolute', top:-1, left:'50%', transform:'translateX(-50%)',
          width: 120, height: 10, pointerEvents:'none' }}>
          <svg viewBox="0 0 120 10" width="120" height="10">
            <path d="M0 10 L60 0 L120 10" fill="none" stroke="url(#dcGold)" strokeWidth="1.2"/>
            <path d="M56 10 L60 2 L64 10 Z" fill="url(#dcGoldDiag)"/>
          </svg>
        </div>
      )}
      <div style={{ position:'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// Sunken well (light interior surface like engraved plate)
function DecoWell({ children, style = {}, pad = 18 }) {
  return (
    <div style={{
      position:'relative', padding: pad, borderRadius: 2,
      background: 'linear-gradient(180deg, rgba(10,9,6,0.7), rgba(30,23,16,0.7))',
      border: '1px solid rgba(184,135,58,0.35)',
      boxShadow: 'inset 0 1px 0 rgba(255,242,194,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)',
      ...style,
    }}>{children}</div>
  );
}

// Vertical deco type (Limelight, stacked)
function VerticalType({ text, size = 11, style = {} }) {
  return (
    <div style={{
      writingMode:'vertical-rl', transform:'rotate(180deg)',
      fontFamily:"'Limelight', serif", fontSize: size, letterSpacing: 4,
      textTransform:'uppercase',
      color: DECO.deep, ...style
    }}>{text}</div>
  );
}

Object.assign(window, {
  DECO, DecoDefs, Sunburst, ZigguratCorner, ChevronDivider, DecoBand,
  FanSpray, Diamond, Dingbat, DecoFrame, DecoWell, VerticalType, decoSurface,
});
