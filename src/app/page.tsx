import { AboutMe, Box, Skills, SocialNetworks } from "@/components"
import ContainerBoxes from "@/components/home-components/ContainerBoxes"
import Image from "next/image"

function HomePage() {
  return (
    <main className="relative bg-home flex justify-center w-screen h-full">
      <div className="flex flex-col h-full">

        <ContainerBoxes className="flex relative gap-4 w-full h-full max-w-[90vw]">
          <Box className="box-me relative my-10 w-[calc(85%)] rounded-2xl">
            <AboutMe />
          </Box>

          <Box className="flex relative flex-col justify-between items-center my-10 w-[calc(15%)] gap-2">
            <SocialNetworks />
          </Box>
        </ContainerBoxes>

        <ContainerBoxes className="flex relative gap-4 w-full h-full mb-10 max-w-[90vw]">
          <Box className="box-skills w-[calc(45%)] p-10 h-full rounded-2xl">
            <Skills />
          </Box>
        </ContainerBoxes>
      </div>

    </main>
  )
}

export default HomePage