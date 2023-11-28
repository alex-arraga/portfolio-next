import {
  AboutMe,
  Box,
  Certificates,
  MyAge,
  MyEnglish,
  Personality,
  Projects,
  Skills,
  SocialNetworks,
  WorkExperience,
  ContainerBoxes,
  Header
} from "@/components"


function HomePage() {
  return (
    <div className="bg-home relative flex flex-col justify-center w-full min-w-screen min-h-screen">
      <Header />

      <div className="bg-[url('/bg-main-blur-30.png')] flex justify-center items-center w-full">
        <main className="flex flex-col h-full max-w-[95vw] md:max-w-[90vw] mt-12 md:mt-14 xl:mt-16">

          {/* About me */}
          <ContainerBoxes className="flex my-2 sm:my-4 md:my-6 relative gap-2 md:gap-4 w-full h-full ">
            <Box className="box-me relative w-[calc(80%)] rounded-2xl">
              <AboutMe />
            </Box>

            {/* Social Networks */}
            <Box className="flex-col relative justify-between items-center w-[calc(20%)] gap-2">
              <SocialNetworks />
            </Box>
          </ContainerBoxes>

          {/* Skills */}
          <ContainerBoxes className="flex flex-col md:flex-row relative gap-2 md:gap-4 w-full mb-2 md:mb-4 xl:mb-6">
            <Box className="box-skills w-full md:w-1/2 p-4 md:p-6 xl:p-10 rounded-2xl">
              <Skills />
            </Box>

            <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-1/2">
              {/* Work Experience */}
              <Box className="box-work_experience w-full relative h-[63%] p-4 md:p-6 xl:p-10 rounded-2xl">
                <WorkExperience />
              </Box>

              <Box className="box-personality w-full relative h-[35%] p-4 md:p-6 xl:p-10 rounded-2xl">
                <Personality />
              </Box>
            </div>
          </ContainerBoxes>

          {/* My age */}
          <ContainerBoxes className="flex w-full h-full gap-2 md:gap-4 mb-2 md:mb-4 xl:mb-6">
            <Box className="box-english select-none w-1/2 relative flex flex-col gap-6 justify-center items-center p-4 md:p-6 xl:p-10 rounded-2xl">
              <MyEnglish />
            </Box>

            <Box className="box-age select-none w-1/2 relative flex flex-col gap-6 justify-center items-center p-4 md:p-6 xl:p-10 rounded-2xl">
              <MyAge />
            </Box>

            {/* Certificates */}
            <Box className="relative border-2 border-violet-300 bg-red-200 w-1/2 rounded-2xl">
              <Certificates />
            </Box>
          </ContainerBoxes>

          {/* My Projects */}
          <ContainerBoxes>
            <Box className="w-full h-full mb-10 rounded-2xl box-proyects p-4 md:p-6 xl:p-10">
              <Projects />
            </Box>
          </ContainerBoxes>
        </main>
      </div>
    </div>
  )
}

export default HomePage