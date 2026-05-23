// app.jsx — DesignCanvas root presenting the 3 visual directions side-by-side
const { createRoot } = ReactDOM;

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="landing-directions"
        title="Landing page — 3 directions visuelles"
        subtitle="Mêmes contenus, même palette (off-white + jaune #FFD400) et même typo (Space Grotesk). Ce qui change : la personnalité, le rythme et la densité."
      >
        <DCArtboard id="dir-a" label="A · Atelier — épuré, lignes fines" width={1320} height={1320}>
          <DirectionAtelier />
        </DCArtboard>
        <DCArtboard id="dir-b" label="B · Press — éditorial bold, marquee" width={1320} height={1320}>
          <DirectionPress />
        </DCArtboard>
        <DCArtboard id="dir-c" label="C · Duotone — dark hero, bascule claire" width={1320} height={1320}>
          <DirectionDuotone />
        </DCArtboard>

        <DCPostIt x={40} y={-80} w={300}>
          Clique sur l'icône d'expansion d'une carte pour la voir en plein écran. Une fois ta direction choisie, je code la landing en HTML/CSS/JS vanilla puis enchaîne sur les autres pages.
        </DCPostIt>
      </DCSection>
    </DesignCanvas>
  );
}

createRoot(document.getElementById('root')).render(<App />);
