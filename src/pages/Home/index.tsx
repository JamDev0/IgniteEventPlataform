import { Footer } from '../../components/Footer';
import { Header } from './Header';


import styles from './Home.module.css';
import { Main } from './Main';

export function Home() {
    return(
        <div
         className={styles.Home}
        >
            <Header/>
            
            <Main/>
            
            <Footer/>
        </div>
    )
}