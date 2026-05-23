// direction-b.jsx — Direction B "Press"
// Éditorial bold. Typo qui prend toute la place, accent jaune en
// highlighter sur des mots, bandeau marquee jaune en bas.

function DirectionPress() {
  const css = `
    .b-root { width:1320px; height:1320px; background:#F6F4EE; color:#0F0F0F;
      font-family:'Space Grotesk', sans-serif; position:relative; overflow:hidden;
      letter-spacing:-0.025em; }
    .b-mono { font-family:'JetBrains Mono', monospace; letter-spacing:0; }

    /* nav */
    .b-nav { position:absolute; top:0; left:0; right:0; padding:24px 40px;
      display:flex; align-items:center; justify-content:space-between; z-index:2; }
    .b-nav-l { display:flex; align-items:center; gap:14px; font-family:'JetBrains Mono', monospace;
      font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#0F0F0F; }
    .b-nav-l .dot { width:8px; height:8px; background:#0F0F0F; border-radius:50%; }
    .b-nav-r { display:flex; gap:28px; font-family:'JetBrains Mono', monospace;
      font-size:11px; letter-spacing:0.14em; text-transform:uppercase; }
    .b-nav-r a { color:#0F0F0F; text-decoration:none; }
    .b-nav-r a:hover { background:#FFD400; }

    /* hero massif */
    .b-hero-name { position:absolute; top:90px; left:0; right:0; padding:0 32px;
      font-size:380px; font-weight:700; letter-spacing:-0.07em; line-height:0.84;
      text-transform:uppercase; margin:0; }
    .b-hero-name .star { color:#FFD400; }

    /* sub-row sous le nom */
    .b-subrow { position:absolute; top:480px; left:0; right:0; padding:0 40px;
      display:flex; align-items:flex-end; justify-content:space-between;
      border-bottom:2px solid #0F0F0F; padding-bottom:18px; }
    .b-subrow .l { font-family:'JetBrains Mono', monospace; font-size:12px;
      letter-spacing:0.1em; text-transform:uppercase; color:#444; }
    .b-subrow .r { font-family:'JetBrains Mono', monospace; font-size:12px;
      letter-spacing:0.1em; text-transform:uppercase; color:#0F0F0F; }

    /* colonnes mots-clés + bio */
    .b-mid { position:absolute; top:550px; left:0; right:0; padding:48px 40px 0;
      display:grid; grid-template-columns: 1.1fr 0.9fr; gap:64px; }
    .b-keywords { list-style:none; padding:0; margin:0; }
    .b-keywords li { font-size:90px; font-weight:700; line-height:0.95;
      text-transform:uppercase; letter-spacing:-0.045em; margin-bottom:4px;
      display:flex; align-items:baseline; gap:24px; }
    .b-keywords li .n { font-family:'JetBrains Mono', monospace; font-size:13px;
      font-weight:500; color:#888; letter-spacing:0.1em; flex:0 0 auto; min-width:32px; }
    .b-keywords li.hl span { background:#FFD400; padding:0 14px; box-decoration-break:clone;
      -webkit-box-decoration-break:clone; }

    .b-rightcol { padding-top:8px; }
    .b-rightcol .label { font-family:'JetBrains Mono', monospace; font-size:11px;
      letter-spacing:0.16em; text-transform:uppercase; color:#888; margin-bottom:14px; }
    .b-rightcol .bio { font-size:22px; line-height:1.45; font-weight:400;
      color:#0F0F0F; letter-spacing:-0.012em; margin:0 0 36px; }
    .b-rightcol .bio strong { background:#FFD400; padding:0 4px; font-weight:400; }

    .b-what { border-top:1px solid #0F0F0F; padding-top:18px; }
    .b-what .h { font-family:'JetBrains Mono', monospace; font-size:11px;
      letter-spacing:0.16em; text-transform:uppercase; color:#0F0F0F; margin-bottom:14px; }
    .b-what ul { list-style:none; padding:0; margin:0; }
    .b-what li { font-size:18px; padding:8px 0; color:#666; border-bottom:1px solid #d8d4ca;
      display:flex; align-items:center; justify-content:space-between; }
    .b-what li.hl { color:#0F0F0F; font-weight:500; }
    .b-what li.hl .pill { background:#FFD400; padding:2px 10px; font-size:11px;
      font-family:'JetBrains Mono', monospace; letter-spacing:0.1em; text-transform:uppercase;
      color:#0F0F0F; }
    .b-what li .pill-muted { color:#999; font-family:'JetBrains Mono', monospace;
      font-size:11px; letter-spacing:0.1em; text-transform:uppercase; }

    /* bandeau marquee bas */
    .b-marquee { position:absolute; left:0; right:0; bottom:0; height:64px;
      background:#0F0F0F; color:#FAFAF7; display:flex; align-items:center;
      overflow:hidden; }
    .b-marquee .track { display:flex; gap:48px; white-space:nowrap;
      font-family:'JetBrains Mono', monospace; font-size:14px; letter-spacing:0.16em;
      text-transform:uppercase; padding-left:40px; }
    .b-marquee .star { color:#FFD400; margin:0 4px; }

    /* sous-bandeau socials */
    .b-socials { position:absolute; left:0; right:0; bottom:64px; height:48px;
      display:flex; align-items:center; justify-content:space-between; padding:0 40px;
      border-top:1px solid #0F0F0F; background:#F6F4EE;
      font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:0.14em;
      text-transform:uppercase; }
    .b-socials .l { color:#666; }
    .b-socials .r { display:flex; gap:24px; }
    .b-socials a { color:#0F0F0F; text-decoration:none; }
    .b-socials a:hover { background:#FFD400; }
  `;

  return (
    <div className="b-root">
      <style>{css}</style>

      {/* nav */}
      <nav className="b-nav">
        <div className="b-nav-l">
          <span className="dot"></span>
          <span>CYRIL — INDEX 2026</span>
        </div>
        <div className="b-nav-r">
          <a href="#">PROJETS</a>
          <a href="#">CV</a>
          <a href="#">FOTOZIK ↗</a>
        </div>
      </nav>

      {/* nom massif */}
      <h1 className="b-hero-name">CYRIL<span className="star">.</span></h1>

      {/* subrow */}
      <div className="b-subrow">
        <div className="l">FR · TOULOUSE · MMXXVI</div>
        <div className="r">DISPONIBLE / À LIRE / À CONTACTER</div>
      </div>

      {/* mid */}
      <div className="b-mid">
        <ul className="b-keywords">
          <li><span className="n">01</span><span>Père.</span></li>
          <li><span className="n">02</span><span>Coureur.</span></li>
          <li className="hl"><span className="n">03</span><span>Bidouilleur.</span></li>
          <li><span className="n">04</span><span>Blogueur.</span></li>
        </ul>

        <div className="b-rightcol">
          <div className="label">// à propos —</div>
          <p className="bio">
            J'écris du code, je cours longtemps, j'élève deux petits humains
            et je <strong>bidouille</strong> un homelab qui grossit plus vite
            que mon temps libre. Le reste se passe sur <strong>fotozik.fr</strong>.
          </p>

          <div className="b-what">
            <div className="h">— ce que je fais vraiment</div>
            <ul>
              <li>Side projects en TypeScript & Swift <span className="pill-muted">DEV</span></li>
              <li>Articles long-form sur fotozik.fr <span className="pill-muted">BLOG</span></li>
              <li className="hl">Agents Claude self-hosted (OpenClaw) <span className="pill">NOW</span></li>
              <li>Domotique Zigbee, Home Assistant <span className="pill-muted">HOME</span></li>
              <li>Trail, vélo, triathlon longue distance <span className="pill-muted">SPORT</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* socials */}
      <div className="b-socials">
        <div className="l">© CYRIL — TOUS DROITS, RIEN À FOUTRE.</div>
        <div className="r">
          <a href="#">GITHUB</a>
          <a href="#">X</a>
          <a href="#">LINKEDIN</a>
          <a href="#">RSS</a>
        </div>
      </div>

      {/* marquee */}
      <div className="b-marquee">
        <div className="track">
          <span>DISPONIBLE POUR DISCUTER</span><span className="star">★</span>
          <span>HOMELAB EN COURS</span><span className="star">★</span>
          <span>FOTOZIK.FR — DERNIER ARTICLE</span><span className="star">★</span>
          <span>OPENCLAW V0.3</span><span className="star">★</span>
          <span>TRAIL — UTMB 2026 ?</span><span className="star">★</span>
          <span>DISPONIBLE POUR DISCUTER</span><span className="star">★</span>
        </div>
      </div>
    </div>
  );
}

window.DirectionPress = DirectionPress;
