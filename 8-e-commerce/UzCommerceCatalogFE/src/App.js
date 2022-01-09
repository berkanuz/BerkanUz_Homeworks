import { useRoutes } from "react-router";
import Routes from "./Routes";
function App()
{
    let element = useRoutes(Routes);
    return(
        <>
            {element}
        </>
    )
}

export default App