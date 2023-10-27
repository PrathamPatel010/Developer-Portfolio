import { useEffect, useState } from "react";
import backendFunFacts from "../data/backendFacts";
import ArcReactor from "./ArcReactor";
const Loader = () => {

    // functionality to ensure that indices are not repeated frequently
    const [lastIndices, setLastIndices] = useState([]);
    const [randomFact, setRandomFact] = useState('');
    useEffect(() => {
        const getRandomFact = () => {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * backendFunFacts.length);
            } while (lastIndices.includes(randomNumber));

            // maintain a list of last 5 indices to avoid immediate repetition
            const updatedIndices = [...lastIndices, randomNumber].slice(-5);
            setLastIndices(updatedIndices);
            setRandomFact(backendFunFacts[randomNumber]);
            return;
        }
        // get the fact only if it is not fetched yet
        if (lastIndices.length === 0 || randomFact === '') {
            getRandomFact();
        }
    }, [lastIndices, randomFact]);

    return (
        <>
            <section className="loader-body">
                <ArcReactor />
                <div className="text-center pt-5">
                    <h4>{randomFact}</h4>
                </div>
            </section>
        </>
    )
};

export default Loader;