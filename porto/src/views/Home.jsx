import "./css/Home.css";
import NavBar from "../component/Nav"; // Zorg dat het pad klopt
import ThemeToggle from "../component/ThemeToggle";

const Home = () => {
    return (
        <>
            <NavBar /> 

            <div className="home-container">
                <h1>Welkom op mijn portfolio</h1>
                <p>Hier komt straks meer content.</p>
            </div>

        

           {/* Kaart met 'Under Construction' melding */}
           <div className="construction-card">
    <h1>🚧 Website in aanbouw! 🚧</h1>
    <p>Deze site is nog niet helemaal af, maar hier zijn een paar dingen die ik nog wil toevoegen:</p>

    <ul className="feature-list">
        <li>✅ <strong>Under construction-melding:</strong> Zodat bedrijven (en andere bezoekers) zien dat de site nog in ontwikkeling is. Ik gebruik deze site vooral om dingen die ik op school heb geleerd in de praktijk te brengen, zodat mensen kunnen zien wat ik kan.</li>
        <li>🔜 <strong>API voor kunstcollectie:</strong> Ik wil een zelfgehoste API maken met MySQL en FastAPI op mijn eigen homeserver. Zo kun je straks kunstwerken filteren op locatie, kunstenaar, categorie en meer.</li>
        <li>🔜 <strong>Contactformulier:</strong> Een simpele manier zodat mensen makkelijk contact met me kunnen opnemen via e-mail.</li>
        <li>🔜 <strong>Interactief spel:</strong> Iets simpels in JavaScript, bijvoorbeeld een galerij-game, gewoon voor de fun en om wat extra interactie toe te voegen.</li>
    </ul>
</div>

        </>
    );
};

export default Home;
