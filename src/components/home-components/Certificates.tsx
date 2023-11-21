import Image from "next/image"

function Certificates() {
    return (
        <>
            <Image
                src={'/certificate.gif'}
                alt="certicate"
                fill
                className="object-cover rounded-2xl"
            />
        </>
    )
}

export default Certificates