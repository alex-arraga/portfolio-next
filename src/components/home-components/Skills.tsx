import Image from "next/image"

function Skills() {
    return (
        <>
            <h2 className="text-2xl font-medium text-gray-200">Habilidades</h2>
            <p className="mt-6 mb-2 text-gray-200">Backend</p>
            <div className="flex relative gap-4 items-center justify-center bg-pink-800 bg-opacity-70 border-2 border-white border-opacity-20 h-16 w-full rounded-lg">
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/node.png'}
                        alt="node logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/npm.png'}
                        alt="npm logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/terminal.png'}
                        alt="terminal logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/git.png'}
                        alt="git logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/github-white.svg'}
                        alt="github logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/next-js-white.svg'}
                        alt="next.js logo"
                        fill
                        className="object-contain py-1 "
                    />
                </div>
            </div>

            <p className="mt-6 mb-2 text-gray-200">Bases de Datos</p>
            <div className="flex relative gap-4 items-center justify-start bg-pink-800 bg-opacity-70 border-2 border-white border-opacity-20 h-16 w-full rounded-lg">
                <div className="relative h-full w-16 max-h-14">
                    <Image
                        src={'/postgres.png'}
                        alt="postgres logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative h-full w-16 max-h-14">
                    <Image
                        src={'/mongodb.png'}
                        alt="mongodb logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
            </div>

            <p className="mt-6 mb-2 text-gray-200">Frontend</p>
            <div className="flex relative gap-4 items-center justify-center bg-pink-800 bg-opacity-70 border-2 border-white border-opacity-20 h-16 w-full rounded-lg">
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/html.png'}
                        alt="html logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/css.png'}
                        alt="css logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/js.png'}
                        alt="js logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/react.png'}
                        alt="react logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/tailwind.png'}
                        alt="tailwind logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative w-full h-full max-h-14">
                    <Image
                        src={'/vite.png'}
                        alt="vite logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
            </div>

            <p className="mt-6 mb-2 text-gray-200">Diseño UX/UI</p>
            <div className="flex relative gap-4 items-center justify-start bg-pink-800 bg-opacity-70 border-2 border-white border-opacity-20 h-16 w-full rounded-lg">
                <div className="relative h-full w-16 max-h-14">
                    <Image
                        src={'/photoshop.png'}
                        alt="photoshop logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative h-full w-16 max-h-14">
                    <Image
                        src={'/figma.png'}
                        alt="figma logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
                <div className="relative h-full w-16 max-h-14">
                    <Image
                        src={'/whimsical.png'}
                        alt="whimsical logo"
                        fill
                        className="object-contain py-1"
                    />
                </div>
            </div>
        </>
    )
}

export default Skills