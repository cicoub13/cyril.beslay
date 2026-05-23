// direction-c.jsx — Direction C "Duotone"
// Hero plein écran sombre + accent jaune fort, transition visible vers
// section claire en dessous (style "Gaël remixé").

function DirectionDuotone() {
  const css = `
    .c-root { width:1320px; height:1320px; background:#0F0F0F; color:#FAFAF7;
      font-family:'Space Grotesk', sans-serif; position:relative; overflow:hidden;
      letter-spacing:-0.015em; }

    /* hero sombre */
    .c-hero { position:absolute; top:0; left:0; right:0; height:780px;
      background:#0F0F0F; color:#FAFAF7; padding:36px 56px 0; }

    .c-nav { display:flex; align-items:center; justify-content:space-between; }
    .c-nav .l { display:flex; align-items:center; gap:12px;
      font-family:'JetBrains Mono', monospace; font-size:12px;
      letter-spacing:0.12em; text-transform:uppercase; color:#FAFAF7; }
    .c-nav .l .dot { width:8px; height:8px; background:#FFD400; border-radius:50%; }
    .c-nav .r { display:flex; gap:32px; font-family:'JetBrains Mono', monospace;
      font-size:12px; letter-spacing:0.12em; text-transform:uppercase; }
    .c-nav .r a { color:#FAFAF7; text-decoration:none; padding:6px 10px; border-radius:4px; }
    .c-nav .r a:hover { background:#FFD400; color:#0F0F0F; }

    /* gros cercle jaune coin haut droit */
    .c-circle { position:absolute; top:-180px; right:-180px; width:520px; height:520px;
      background:#FFD400; border-radius:50%; }
    .c-cross { position:absolute; top:130px; right:90px; width:32px; height:32px;
      color:#0F0F0F; font-size:32px; line-height:32px; font-weight:300; }

    /* mini meta sous nav */
    .c-meta { margin-top:90px; font-family:'JetBrains Mono', monospace; font-size:12px;
      letter-spacing:0.14em; text-transform:uppercase; color:#888; }

    /* phrase hero forte */
    .c-phrase { margin-top:24px; font-size:124px; font-weight:500; line-height:1.0;
      letter-spacing:-0.04em; max-width:1100px; }
    .c-phrase em { font-style:normal; }
    .c-phrase .hl { position:relative; display:inline-block; color:#0F0F0F; padding:0 12px;
      background:#FFD400; }
    .c-phrase .underline { position:relative; display:inline-block; }
    .c-phrase .underline::after { content:''; position:absolute; left:-2px; right:-2px; bottom:6px;
      height:14px; background:#FFD400; z-index:-1; }
    .c-phrase .muted { color:#888; font-weight:300; }

    /* keywords staccato sous phrase */
    .c-keywords { position:absolute; bottom:96px; left:56px; right:56px;
      display:flex; align-items:center; justify-content:space-between; }
    .c-keywords .kw { display:flex; gap:24px; align-items:baseline;
      font-family:'JetBrains Mono', monospace; font-size:13px; letter-spacing:0.14em;
      text-transform:uppercase; color:#FAFAF7; }
    .c-keywords .kw span.dim { color:#666; }
    .c-keywords .scroll { font-family:'JetBrains Mono', monospace; font-size:12px;
      letter-spacing:0.16em; text-transform:uppercase; color:#FFD400;
      display:flex; align-items:center; gap:10px; }
    .c-keywords .scroll .arr { display:inline-block; width:24px; height:24px;
      border:1px solid #FFD400; border-radius:50%; line-height:22px; text-align:center;
      font-size:14px; }

    /* transition courbe */
    .c-wave { position:absolute; left:0; right:0; top:780px; height:48px;
      background:#FAFAF7;
      -webkit-mask-image: radial-gradient(120% 48px at 50% 0%, transparent 47px, black 48px);
      mask-image: radial-gradient(120% 48px at 50% 0%, transparent 47px, black 48px); }

    /* section claire */
    .c-light { position:absolute; top:780px; left:0; right:0; bottom:0;
      background:#FAFAF7; color:#0F0F0F; padding:96px 56px 0; }

    .c-greet { display:flex; align-items:center; gap:18px; font-family:'JetBrains Mono', monospace;
      font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#666;
      margin-bottom:28px; }
    .c-greet .wave { width:28px; height:28px; background:#FFD400; border-radius:50%;
      display:inline-flex; align-items:center; justify-content:center; color:#0F0F0F;
      font-size:14px; font-weight:600; }

    .c-bio { font-size:32px; line-height:1.4; max-width:920px; font-weight:400;
      letter-spacing:-0.015em; color:#0F0F0F; margin:0 0 56px; }
    .c-bio strong { font-weight:500; border-bottom:3px solid #FFD400; }

    /* trio de cartes sections */
    .c-cards { display:grid; grid-template-columns:repeat(3, 1fr); gap:24px;
      margin-top:24px; }
    .c-card { background:#0F0F0F; color:#FAFAF7; padding:28px; height:200px;
      position:relative; display:flex; flex-direction:column; justify-content:space-between; }
    .c-card.alt { background:#FFD400; color:#0F0F0F; }
    .c-card.alt2 { background:#F6F4EE; color:#0F0F0F; border:1px solid #0F0F0F; }
    .c-card .top { display:flex; align-items:center; justify-content:space-between;
      font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.14em;
      text-transform:uppercase; opacity:0.7; }
    .c-card .h2 { font-size:42px; font-weight:500; letter-spacing:-0.03em;
      line-height:1.0; margin:8px 0 0; }
    .c-card .arr { font-size:24px; }

    /* footer bandeau sombre */
    .c-foot { position:absolute; left:0; right:0; bottom:0; height:56px;
      background:#0F0F0F; color:#FAFAF7;
      display:flex; align-items:center; justify-content:space-between; padding:0 56px;
      font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.14em;
      text-transform:uppercase; }
    .c-foot .l { color:#888; }
    .c-foot .r { display:flex; gap:24px; }
    .c-foot a { color:#FAFAF7; text-decoration:none; }
    .c-foot a:hover { color:#FFD400; }
  `;

  return (
    <div className="c-root">
      <style>{css}</style>

      {/* hero sombre */}
      <div className="c-hero">
        <div className="c-circle"></div>
        <div className="c-cross">+</div>

        <nav className="c-nav">
          <div className="l">
            <span className="dot"></span>
            <span>CYRIL · INDEX</span>
          </div>
          <div className="r">
            <a href="#">/projets</a>
            <a href="#">/cv</a>
            <a href="#">fotozik.fr ↗</a>
          </div>
        </nav>

        <div className="c-meta">— 04 sections · MMXXVI · TLS</div>

        <div className="c-phrase">
          Je code,<br/>
          je cours,<br/>
          j'écris sur <span className="underline">fotozik</span>,<br/>
          <span className="muted">le reste c'est </span><span className="hl">du bonus.</span>
        </div>

        <div className="c-keywords">
          <div className="kw">
            <span>Père</span><span className="dim">·</span>
            <span>Coureur</span><span className="dim">·</span>
            <span>Bidouilleur</span><span className="dim">·</span>
            <span>Blogueur</span>
          </div>
          <div className="scroll">
            <span>scroll</span>
            <span className="arr">↓</span>
          </div>
        </div>
      </div>

      {/* transition */}
      <div className="c-wave"></div>

      {/* section claire */}
      <div className="c-light">
        <div className="c-greet">
          <span className="wave">→</span>
          <span>HEY, MOI C'EST CYRIL.</span>
        </div>

        <p className="c-bio">
          Quelque part entre deux séances de trail et un week-end à
          re-câbler le <strong>homelab</strong>, je code des <strong>side
          projects</strong> qui partent dans tous les sens et j'écris sur
          fotozik.fr. Toulouse, France.
        </p>

        <div className="c-cards">
          <div className="c-card">
            <div className="top"><span>— 02</span><span>09</span></div>
            <div>
              <div className="h2">Projets</div>
              <div className="arr">→</div>
            </div>
          </div>
          <div className="c-card alt">
            <div className="top"><span>— 03</span><span>01</span></div>
            <div>
              <div className="h2">Mon CV</div>
              <div className="arr">→</div>
            </div>
          </div>
          <div className="c-card alt2">
            <div className="top"><span>— 04</span><span>EXT</span></div>
            <div>
              <div className="h2">fotozik.fr</div>
              <div className="arr">↗</div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="c-foot">
        <div className="l">TOULOUSE — MMXXVI</div>
        <div className="r">
          <a href="#">GITHUB</a>
          <a href="#">X</a>
          <a href="#">LINKEDIN</a>
          <a href="#">RSS</a>
        </div>
      </div>
    </div>
  );
}

window.DirectionDuotone = DirectionDuotone;
