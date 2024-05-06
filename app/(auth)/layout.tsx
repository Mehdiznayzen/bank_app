import Image from "next/image"

const LayoutAuth = ({ children } : { children : React.ReactNode }) => {
    return (
        <main className="flex min-h-screen w-full justify-between font-inter">
            { children }
            <div className="auth-asset">
                <div className="">
                    <Image 
                        src={'/icons/auth-image.svg'}
                        alt="auth_image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </main>
    )
}

export default LayoutAuth