import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../views/css/About.css"; // Importeer CSS

function JustifiedExample() {
  return (
    <div className="tabs-container">
      <Tabs defaultActiveKey="werk" id="justify-tab-example" className="mb-3 nav-tabs centered-tabs">
        
        {/* Werk Tab */}
        <Tab eventKey="werk" title="Werk">
          <h3>Mijn Werkervaring</h3>
          <p>
              Ik heb een brede technische achtergrond en werkervaring in de metaalindustrie. Mijn carrière begon bij 
              <strong>Veraa Metaal in Bergeijk</strong>, waar ik als vakantiekracht ervaring opdeed met lassen en productiewerk.
          </p>
          <p>
              Vervolgens werkte ik bij <strong>LUXLIGHT B.V. in Westerhoven</strong>, waar ik montagewerkzaamheden uitvoerde.  
              Dit gaf me inzicht in productieprocessen en kwaliteitscontrole binnen de verlichtingsindustrie.
          </p>
          <p>
              Van februari 2019 tot 2021 was ik werkzaam als <strong>lasser bij Theeuws Groep in Luyksgestel</strong>. Hier specialiseerde 
              ik me in lastechnieken en het werken met metaalconstructies.
          </p>
          <p>
              In 2021 stapte ik over naar <strong>De Bruyn Metaal in Bergeijk</strong>, waar ik als <strong>lasrobotprogrammeur</strong> werkte.  
              Ik was verantwoordelijk voor het instellen en programmeren van geavanceerde lasrobots, wat mijn technische 
              en probleemoplossende vaardigheden verder heeft ontwikkeld.
          </p>
          <p>
              Sinds november 2022 ben ik werkzaam bij <strong>Wilvo Group in Bergeijk</strong> als <strong>lasser</strong>.  
              Hier werk ik aan precisielaswerk en constructiewerk binnen de high-tech industrie.
          </p>
        </Tab>

        {/* School Tab */}
        <Tab eventKey="school" title="School">
          <h3>Opleiding</h3>
          <p>
            Momenteel volg ik een <strong>bacheloropleiding Toegepaste Informatica</strong>, die speciaal ontworpen is voor mensen die een <strong>carrièreswitch</strong> willen maken. 
            De opleiding is <strong>dynamisch en praktijkgericht</strong>, waarbij we elke zes weken twee nieuwe vakken volgen. Dit stelt me in staat om <strong>snel nieuwe skills</strong> op te doen en mezelf verder te ontwikkelen. 
            Tijdens mijn studie ontdekte ik al snel een <strong>fascinatie voor data en de mogelijkheden die het biedt</strong>.
          </p>
          <p>
            Tijdens mijn opleiding specialiseer ik me in <strong>full-stack development</strong>, waarbij ik werk met zowel frontend- als backendtechnologieën zoals <strong>React</strong> voor de frontend en <strong>Node.js</strong> voor de backend.
          </p>
          <p>
            Daarnaast heb ik ervaring met <strong>Flutter, Java, Python, ASP.NET, mobile development</strong> en <strong>data visualisatie</strong>. Ik werk regelmatig met databases zoals <strong>MongoDB en SQL</strong> en gebruik <strong>Docker</strong> om mijn applicaties efficiënt te beheren.
          </p>
          <p>
            In het verleden heb ik een <strong>cursus beleggingsadviseur</strong> gevolgd aan <strong>SyntraPXL</strong>. Ik ben ook geïnteresseerd in de <strong>aandelenmarkt en financiële technologie</strong>.
          </p>
        </Tab>

        {/* Contact Tab */}
        <Tab eventKey="technical" title="Tech Stack">
  <div className="tech-info-container">
    <h3>Over deze website</h3>
    
    <div className="tech-section mb-4">
      <h4>Gebruikte technologieën</h4>
      <ul className="tech-list">
        <li><strong>Frontend:</strong> React 18, React Bootstrap, CSS3</li>
        <li><strong>State Management:</strong> React Hooks</li>
        <li><strong>Styling:</strong> Custom CSS met responsive design/MUI</li>
        <li><strong>Deployment:</strong> GitHub Pages/ Vercel</li>
        <li><strong>Version Control:</strong> Git</li>
      </ul>
    </div>

    <div className="api-section mb-4">
      <h4>API Endpoints</h4>
      <p>Deze website haalt gegevens op van de volgende JSON Server endpoints:</p>
      
      <div className="endpoint-card p-3 mb-3 border rounded">
        <h5>Projecten API</h5>
        <code className="d-block mb-2">GET https://my-json-server.typicode.com/TomGijsbers/reactPorto/projects</code>
        <p className="mb-1">Retourneert alle schoolprojecten die worden weergegeven op de home pagina</p>
        <Button 
          variant="outline-secondary" 
          size="sm"
          href="https://my-json-server.typicode.com/TomGijsbers/reactPorto/projects" 
          target="_blank"
          className="mt-2"
        >
          Bekijk API respons
        </Button>
      </div>

      <div className="endpoint-card p-3 border rounded">
        <h5>Qoutes/game API</h5>
        <code className="d-block mb-2">GET https://my-json-server.typicode.com/TomGijsbers/reactPorto/quotes</code>
        <p className="mb-1">Retourneert qoutes met een missend woord.</p>
        <Button 
          variant="outline-secondary" 
          size="sm" 
          href="https://my-json-server.typicode.com/TomGijsbers/reactPorto/quotes" 
          target="_blank"
          className="mt-2"
        >
          Bekijk API respons
        </Button>
      </div>
    </div>

    <div className="architecture-section">
      <h4>Website architectuur</h4>
      <p>
        Deze portfolio website is gebouwd met een componentgebaseerde architectuur 
        waarbij ieder onderdeel zijn eigen verantwoordelijkheid heeft. De data wordt 
        opgehaald met fetch API calls naar de JSON Server endpoints, waarna React 
        Hooks zorgen voor state management en rendering van de componenten.
      </p>
    </div>
  </div>
</Tab>


      </Tabs>
    </div>
  );
}

export default JustifiedExample;
