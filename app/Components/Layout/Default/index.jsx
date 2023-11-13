import Header from "./Header";
import Footer from "./Footer";
function DefaultLayout({children}) {
    return (
        <>
        <Header />
        <div>
            <div>{children}</div>
        </div>
        <Footer />
        </>
    )
}
export default DefaultLayout