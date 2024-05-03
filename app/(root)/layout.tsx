
const Layout = ({ children } : { children : React.ReactNode }) => {
    return (
        <main className="">
            Sidebar
            { children }
        </main>
    )
}

export default Layout