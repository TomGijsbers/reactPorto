import React, { useEffect, useState } from "react";
import NavBar from "../component/Nav";
import { getQoutes } from "../apis/philoApi";

const Game = () => {
    const [quotesList, setQuotesList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getQoutes()
            .then((res) => {
                console.log("Quotes geladen:", res.data);
                if (res.data && Array.isArray(res.data)) {
                    setQuotesList(res.data);
                    setIsLoading(false);
                } else {
                    setError("Geen quotes gevonden!");
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.error("Fout bij ophalen van quotes:", err);
                setError("Fout bij ophalen van quotes.");
                setIsLoading(false);
            });
    }, []);

    const nextQuote = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotesList.length);
        setSelectedAnswer(null);
        setFeedback("");
    };

    const handleAnswerSelect = (option) => {
        setSelectedAnswer(option);
        if (option === quotesList[currentIndex].correct) {
            setFeedback("✅ Correct!");
        } else {
            setFeedback("❌ Fout, probeer opnieuw!");
        }
    };

    return (
        <>
            <NavBar />
            <div className="construction-card">
                <h1 className="game-title">🀄 Let's play a game 🧩</h1>
                <p>Hieronder spelen we een spelletje waarbij je het goede woord moet zoeken:</p>

                {isLoading ? (
                    <p className="loading">⏳ Bezig met laden...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : quotesList.length > 0 ? (
                    <div>
                        <h2 className="game-question">{quotesList[currentIndex]?.sentence}</h2>
                        <p className="game-author"><strong>- {quotesList[currentIndex]?.person}</strong></p>

                        <div className="options-container">
                            {quotesList[currentIndex]?.options.map((option, index) => (
                                <div key={index} className="option-item">
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option}
                                        checked={selectedAnswer === option}
                                        onChange={() => handleAnswerSelect(option)}
                                        id={`option-${index}`}
                                    />
                                    <label className="option-label" htmlFor={`option-${index}`}>
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {feedback && (
                            <p className={`feedback ${feedback.includes("✅") ? "correct" : "incorrect"}`}>
                                {feedback}
                            </p>
                        )}
                        {/* 🔹 Next Question Button */}
                        <button className="next-button" onClick={nextQuote} disabled={!selectedAnswer}>Volgende vraag</button>
                    </div>
                ) : (
                    <p>Geen quotes beschikbaar.</p>
                )}
            </div>
        </>
    );
};

export default Game;
