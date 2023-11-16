import styles from "./Header.module.css"

import igniteLogo from "../assets/Ignite-simbol.svg"


export function Header() {
    return (
        <header className={styles.header}>
            <div> <img src={igniteLogo} alt="Logo tipo do Ignite" /> </div>
            <h1>Ignite Feed</h1>
        </header>
    )
}
