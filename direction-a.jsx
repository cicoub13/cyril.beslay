// direction-a.jsx — Direction A "Atelier"
// Épuré, asymétrique, lignes 1px. Beaucoup de respiration.
// Le jaune ponctue (cercle hero + petits accents) plutôt qu'il n'occupe.

function DirectionAtelier() {
  // Tous les styles sont scope-isolés via le préfixe .a-
  const css = `
    .a-root { width:1320px; height:1320px; background:#FAFAF7; color:#0F0F0F;
      font-family:'Space Grotesk', sans-serif; position:relative; overflow:hidden;
      letter-spacing:-0.01em; }
    .a-mono { font-family:'JetBrains Mono', monospace; letter-spacing:0; }

    /* nav haut */
    .a-nav { position:absolute; top:0; left:0; right:0; height:64px;
      display:flex; align-items:center; justify-content:space-between;
      padding:0 56px; border-bottom:1px solid #1a1a1a; }
    .a-wordmark { font-size:14px; font-weight:600; letter-spacing:0.04em; }
    .a-wordmark .dot { display:inline-block; width:6px; height:6px; background:#FFD400;
      border-radius:50%; margin:0 0 2px 4px; vertical-align:middle; }
    .a-navlinks { display:flex; gap:32px; font-family:'JetBrains Mono', monospace;
      font-size:12px; }
    .a-navlinks a { color:#0F0F0F; text-decoration:none; }
    .a-navlinks a .arrow { color:#888; margin-left:4px; }

    /* hero grid */
    .a-hero { position:absolute; top:64px; left:0; right:0; height:780px;
      display:grid; grid-template-columns: 1fr 520px; }
    .a-hero-left { padding:80px 0 0 56px; position:relative; }
    .a-hero-right { padding:56px 56px 0 0; position:relative; }

    .a-eyebrow { font-family:'JetBrains Mono', monospace; font-size:11px;
      letter-spacing:0.12em; text-transform:uppercase; color:#666; margin-bottom:48px;
      display:flex; align-items:center; gap:12px; }
    .a-eyebrow .num { color:#0F0F0F; }
    .a-eyebrow .line { flex:0 0 80px; height:1px; background:#1a1a1a; }

    .a-display { font-size:200px; font-weight:500; line-height:0.9;
      letter-spacing:-0.045em; margin:0; }
    .a-display em { font-style:normal; font-weight:300; color:#0F0F0F; }
    .a-display .amp { font-weight:300; color:#999; }

    .a-keywords { margin-top:48px; display:flex; gap:16px; flex-wrap:wrap;
      font-size:18px; font-weight:500; }
    .a-keywords span { display:inline-flex; align-items:center; gap:14px; }
    .a-keywords .sep { width:6px; height:6px; background:#FFD400; border-radius:50%; }

    .a-bio { margin-top:64px; max-width:520px; font-size:18px; line-height:1.55;
      color:#1a1a1a; font-weight:400; }
    .a-bio strong { font-weight:500; }

    /* visuel droite */
    .a-portrait-wrap { position:relative; width:100%; height:560px;
      display:flex; align-items:center; justify-content:center; }
    .a-blob { position:absolute; right:0; top:40px; width:480px; height:480px;
      background:#FFD400; border-radius:50%; }
    .a-portrait { position:absolute; right:80px; top:120px; width:300px; height:380px;
      border:1px solid #0F0F0F; background:
        repeating-linear-gradient(135deg, #FAFAF7 0, #FAFAF7 6px, #ece9e0 6px, #ece9e0 7px);
      display:flex; flex-direction:column; align-items:center; justify-content:flex-end;
      padding-bottom:18px; }
    .a-portrait .lbl { font-family:'JetBrains Mono', monospace; font-size:10px;
      letter-spacing:0.16em; text-transform:uppercase; color:#0F0F0F;
      background:#FAFAF7; padding:4px 8px; border:1px solid #0F0F0F; }
    .a-vert { position:absolute; right:20px; top:140px; font-family:'JetBrains Mono', monospace;
      font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#666;
      writing-mode:vertical-rl; transform:rotate(180deg); }
    .a-corner-mark { position:absolute; top:80px; right:56px; font-family:'JetBrains Mono', monospace;
      font-size:11px; color:#666; letter-spacing:0.08em; }

    /* trait horizontal de section */
    .a-divider { position:absolute; left:56px; right:56px; height:1px; background:#1a1a1a; }

    /* section "ce qu'on trouve ici" */
    .a-sections { position:absolute; top:880px; left:0; right:0; padding:48px 56px 0; }
    .a-sec-eyebrow { font-family:'JetBrains Mono', monospace; font-size:11px;
      letter-spacing:0.12em; text-transform:uppercase; color:#666; margin-bottom:28px; }
    .a-sec-list { display:grid; grid-template-columns:repeat(3, 1fr); gap:0;
      border-top:1px solid #1a1a1a; }
    .a-sec-item { padding:32px 24px 36px 0; border-right:1px solid #d0ccc2;
      position:relative; }
    .a-sec-item:last-child { border-right:none; }
    .a-sec-item .num { font-family:'JetBrains Mono', monospace; font-size:11px;
      color:#666; letter-spacing:0.08em; }
    .a-sec-item .title { font-size:42px; font-weight:500; letter-spacing:-0.03em;
      margin:16px 0 12px; }
    .a-sec-item .desc { font-size:14px; line-height:1.5; color:#444; max-width:260px; }
    .a-sec-item .arr { position:absolute; right:24px; top:36px; font-size:18px; }

    /* footer */
    .a-foot { position:absolute; bottom:0; left:0; right:0; height:72px;
      display:flex; align-items:center; justify-content:space-between;
      padding:0 56px; border-top:1px solid #1a1a1a;
      font-family:'JetBrains Mono', monospace; font-size:11px;
      letter-spacing:0.08em; text-transform:uppercase; color:#666; }
    .a-foot a { color:#0F0F0F; text-decoration:none; }
    .a-foot-socials { display:flex; gap:24px; }
    .a-foot-socials a:hover { text-decoration:underline; }
  `;

  return (
    <div className="a-root">
      <style>{css}</style>

      {/* nav */}
      <nav className="a-nav">
        <div className="a-wordmark">CYRIL<span className="dot"></span></div>
        <div className="a-navlinks">
          <a href="#">/projets</a>
          <a href="#">/cv</a>
          <a href="#">fotozik.fr<span className="arrow">↗</span></a>
        </div>
      </nav>

      {/* hero */}
      <div className="a-hero">
        <div className="a-hero-left">
          <div className="a-eyebrow">
            <span className="num">01 / 04</span>
            <span className="line"></span>
            <span>index</span>
          </div>

          <h1 className="a-display">
            Cyril<br/>
            <em>Martin.</em>
          </h1>

          <div className="a-keywords">
            <span>Père</span>
            <span className="sep"></span>
            <span>Coureur</span>
            <span className="sep"></span>
            <span>Bidouilleur</span>
            <span className="sep"></span>
            <span>Blogueur</span>
          </div>

          <p className="a-bio">
            Quelque part entre deux séances de trail et un week-end à
            re-câbler le homelab, j'écris du code, je tiens le blog
            <strong> fotozik.fr</strong> et je bidouille des side projects
            qui n'ont rien à voir entre eux. Toulouse, France.
          </p>
        </div>

        <div className="a-hero-right">
          <div className="a-corner-mark">[ portrait — 1/1 ]</div>
          <div className="a-portrait-wrap">
            <div className="a-blob"></div>
            <div className="a-portrait">
              <div className="lbl">PORTRAIT</div>
            </div>
            <div className="a-vert">// à venir — drop image here</div>
          </div>
        </div>
      </div>

      {/* sections */}
      <div className="a-sections">
        <div className="a-sec-eyebrow">— ce qu'on trouve ici</div>
        <div className="a-sec-list">
          <div className="a-sec-item">
            <div className="num">02</div>
            <div className="title">Projets</div>
            <div className="desc">Fotozik, OpenClaw, une app iOS pour parents, un setup Zigbee qui dépasse l'entendement.</div>
            <div className="arr">→</div>
          </div>
          <div className="a-sec-item">
            <div className="num">03</div>
            <div className="title">CV</div>
            <div className="desc">Le parcours sans le jargon. Imprimable, téléchargeable, à jour.</div>
            <div className="arr">→</div>
          </div>
          <div className="a-sec-item">
            <div className="num">04</div>
            <div className="title">fotozik.fr</div>
            <div className="desc">Mon blog tech, lifestyle et endurance. Tout ce qui ne tient pas ici.</div>
            <div className="arr">↗</div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="a-foot">
        <div>Toulouse · MMXXVI</div>
        <div className="a-foot-socials">
          <a href="#">GitHub</a>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
          <a href="#">RSS</a>
        </div>
      </div>
    </div>
  );
}

window.DirectionAtelier = DirectionAtelier;
