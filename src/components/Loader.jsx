import { RingLoader } from "react-spinners";
import backendFunFacts from "../data/backendFacts";
const Loader = () => {
    const randomNumber = Math.floor(Math.random() * backendFunFacts.length);
    const randomFact = backendFunFacts[randomNumber];
    return (
        <section className="loader-div text-center">
            <RingLoader color="#36d7b7" size={200} />
            <h4 className="mt-3">{randomFact}</h4>
        </section>
    )
};

export default Loader;