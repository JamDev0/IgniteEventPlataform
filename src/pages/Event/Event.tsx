import { Body } from "./Body";
import { Header } from "../../components/Header";

export function Event() {
    return(
        <div
         className="
            flex flex-col min-h-screen
         "
        >
            <Header/>
            <Body/>
        </div>
    )
}