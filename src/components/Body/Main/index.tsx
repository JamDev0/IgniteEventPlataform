import { Content } from "./Content";
import { Footer } from "./Footer";

export function Main() {
    return(
        <main
         className="p-8 flex flex-col justify-between flex-1"
        >
            <Content/>
            <Footer/>
        </main>
    )
}