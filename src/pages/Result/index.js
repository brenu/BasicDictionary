import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft, FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

import "./styles.css";

const Result = () => {
    const [results, setResults] = useState([]);
    const [searchParams, ] = useSearchParams();

    const navigate = useNavigate();
    const word = searchParams.get("word");

    useEffect(() => {
        async function handleInit() {
            const response = await fetch(`https://significado.herokuapp.com/v2/${word}`);

            if(response.status === 200) {
                const resultsData = await response.json();

                setResults(resultsData);
            }
        }

        handleInit();
    }, []);

    function goBack() {
        navigate("/");
    }
    
    return (
        <>
            <div className="page-header">
                <button onClick={() => goBack()}>
                    <FaArrowLeft size={30} />
                </button>
            </div>
            <h1>Resultados Encontrados</h1>
            <section className="results-container">
                {results.map((result, index) => (
                    <div className="result-container" key={index}>
                        <div className="word-container">
                            <h2>{word}</h2>
                            <span>{result.partOfSpeech}</span>
                        </div>
                        <span>{result.etymology}</span>
                        <div className="meanings-container">
                            <h3>Significados</h3>
                            {result.meanings.map(meaning => (
                                <div className="meaning-container">
                                    <p>{meaning}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Result;