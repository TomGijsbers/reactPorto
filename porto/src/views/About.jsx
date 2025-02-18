import Tabs from "../component/Tab"; // Zorg dat het pad klopt
import NavBar from "../component/Nav"; // Zorg dat het pad klopt


const About = () => {
    return (
        <>  
        <NavBar />
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Tabs />
        </div>
        </>
    );
};

export default About;
