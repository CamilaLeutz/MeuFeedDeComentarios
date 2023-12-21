import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import "./global.css"
import styles from "./App.module.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/CamilaLeutz",
      name: "Camila Leutz",
      role: "CTO @blogmilaleutz"
    },
    content: [
      { type: "paragraph", content: "Fala galera, tudo bem desse lado dai? Eu quero dizer a vocês que logo estarei trabalhando na área. Meu desejo é crescer cada vez mais e todos os dias um pouquinho!" },
      { type: "paragraph", content: "Eu sei que vou dar conta, vamos pra frente!" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-11-12 08:03:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/CamilaLeutz",
      name: "Milaaaaaaaaaaa Leutz",
      role: "CTO @Agarotadocódigo"
    },
    content: [
      { type: "paragraph", content: "Fala galera, tudo bem desse lado dai? Eu quero dizer a vocês que logo estarei trabalhando na área. Meu desejo é crescer cada vez mais e todos os dias um pouquinho!" },
      { type: "paragraph", content: "Eu sei que vou dar conta, vamos pra frente!" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-11-12 08:03:00")
  },
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}


        </main>


      </div>

    </div>
  )
}

