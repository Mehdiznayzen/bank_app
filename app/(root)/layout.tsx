import MobileNav from "@/components/MobileNav"
import Sidebar from "@/components/Sidebar"
import { getLoggedInUser } from "@/lib/actions/user.actions"
import Image from "next/image"
import { redirect } from "next/navigation"

const Layout = async ({ children } : { children : React.ReactNode }) => {
    const loggedIn = await getLoggedInUser()

    if(!loggedIn) return redirect('/sign-in')

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar 
                user={loggedIn}
            />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image 
                        src={'/icons/logo.svg'}
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <div className="">
                        <MobileNav 
                            user={loggedIn}
                        />
                    </div>
                </div>
            { children }
            </div>
        </main>
    )
}

export default Layout