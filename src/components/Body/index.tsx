import { Main } from "./Main";
import { SideBar } from "./SideBar";

import styles from './Body.module.css';

export function Body() {
    return(
        <section
         className={styles.section}
        >
            <Main/>
            <SideBar/>
        </section>
    )
}