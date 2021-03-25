import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => 
  <>
    <Header />
    <div style={{ minHeight: "90vh" }}>
      {children}
    </div>
    <Footer />
  </>

export default Layout;