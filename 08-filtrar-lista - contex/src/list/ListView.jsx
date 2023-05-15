import { useContext } from "react";
import SearchInput from "../form/SearchInput";
import { ItemsContext } from "../contexts/ItemsContext";
import ResultsCount from "./ResultsCount";

function ListView() {
    let elements = useContext(ItemsContext);
    return(
        <div>
            <SearchInput />
            <ResultsCount />
            <ul>
            {
                elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
            }
            </ul>
        </div>
    );
}

export default ListView;