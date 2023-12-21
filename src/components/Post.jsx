import { Comment } from "./Comment"

import styles from "./Post.module.css"

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/92478289?v=4" />
                    <div className={styles.authorInfo} >
                        <strong>{props.author.name}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="29 de Novembro ás 05:44h" dateTime="2023-11-29 05:44:05h" >Publicado há 1h.</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera 😍</p>
                <p>Acabei de subir um projeto brabo pelo gitHub, um aplicação que ficou ótima!</p>
                <p><a href="#">👉 github.com.br/camilaleutz</a></p>
                <p><a href="#">#novoprojeto #webdeveloper #rocketseat</a></p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>


        </article>

    )
}