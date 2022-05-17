import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./styles.css";

const Home = () => {
    const [word, setWord] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        navigate({
            pathname: "/result",
            search: `?${createSearchParams({word})}`
        });
    }

    return (
        <>
            <h1>Dicionário</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={word}
                    onChange={e => setWord(e.target.value)}
                    placeholder="Insira uma palavra aqui..."
                />
                <button type="submit">
                    Buscar
                    <FaSearch color="#222" size={17}/>
                </button>
            </form>
        </>
    );
}

export default Home;