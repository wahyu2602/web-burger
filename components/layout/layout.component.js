import Head from 'next/head'
import NavBar from '../navbar/navbar.component'
import Footer from '../footer/footer.component'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} | Burger</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}