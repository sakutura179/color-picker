import { useContext } from "react";
import Context from "./Context";

export const useColor = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}

