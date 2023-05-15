import { ItemsProvider } from "../contexts/ItemsContext";
import { SearchProvider } from "../contexts/SearchContext";
import ListView from "./ListView";

function List() {
    return(
        <SearchProvider>
            <ItemsProvider>
                <ListView />
            </ItemsProvider>
        </SearchProvider>
    )
}

export default List;