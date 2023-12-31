import { ThumbsUp, Trash } from "@phosphor-icons/react"

import styles from "./Comment.module.css"
import { useState } from "react"

// interface CommentProps {//tipando o componente comment e espeficicando o que é cada um
//     content: string,
//     onDeleteComment: (comment: string) => void
// }

export function Comment({ content, onDeleteComment }) {//componente acessando a props OnDeleteComment e utilizando a função e o parametro dela
    const [likeCountComment, setLikeCountComment] = useState(0)//sempre inicie o estado com algum tipo de informação que eu irei usar no estado 

    function handleDeleteComment() {
        onDeleteComment(content)//acessando o parametro da função e dando a ela um parametro de content que é o conteudo do commment
    }

    function handleLikeComment() { //função de adicionar o like/aplaudir nos comentários

        setLikeCountComment((state) => {
            return state + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/92478289?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Camila Leutz</strong>
                            <time title="06 de Novembro ás 05:49" dateTime="2023-06-11 05:49:00">Cerca de 1h atrás.</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCountComment}</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}