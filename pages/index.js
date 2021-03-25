import Head from 'next/head'
import Header from '../src/Components/Header'

const mainStyle = {
  backgroundColor: "#eeeeee",
  margin: "0 auto",
  width: "75%",
  padding: "1rem"
}
const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | Next Todo</title>
      </Head>

      <Header />
      <main style={mainStyle}>
        <h2>Todos</h2><hr />
        
      </main>
      <footer className="text-center mt-5">&copy;2020</footer>
    </div>
  )
}

export default Home