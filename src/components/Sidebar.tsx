import imagemCapa from "../assets/imagem-capa.svg"
import imagemPerfil from "../assets/IMG-20231011-WA0200.jpg"

import { HiOutlinePencilSquare } from "react-icons/hi2";

import styles from "./Sidebar.module.css"


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={imagemCapa} />

            <div className={styles.profile}>
                <img className={styles.avatar} src={imagemPerfil} />
                <strong>Camila Leutz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <HiOutlinePencilSquare size={20} />
                    Editar meu perfil
                </a>
            </footer>
        </aside >

    )
}