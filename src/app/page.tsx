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

          {/* About me, Social Networks */}
          <ContainerBoxes className="flex flex-col-reverse sm:flex-row my-2 sm:my-4 md:my-6 relative gap-2 md:gap-4 w-full h-full ">
            <Box className="box-me relative w-full sm:w-[calc(80%)] rounded-2xl">
              <AboutMe />
            </Box>

            <Box className="flex flex-row sm:flex-col relative justify-between items-center w-full h-20 sm:h-auto sm:w-[calc(20%)] gap-2">
              <SocialNetworks />
            </Box>
          </ContainerBoxes>


          {/* My Projects */}
          <ContainerBoxes>
            <Box className="w-full h-full rounded-2xl box-proyects p-4 md:p-6 xl:p-10 mb-2 md:mb-4 xl:mb-6">
              <Projects />
            </Box>
          </ContainerBoxes>


          {/* My age, English Level, Certicates */}
          <ContainerBoxes className="flex w-full h-full gap-2 md:gap-4 mb-2 md:mb-4 xl:mb-6">
            <Box className="box-english select-none w-1/2 relative flex flex-col gap-6 justify-center items-center p-4 md:p-6 xl:p-10 rounded-2xl">
              <MyEnglish />
            </Box>

            <Box className="box-age select-none w-1/2 relative flex flex-col gap-6 justify-center items-center p-4 md:p-6 xl:p-10 rounded-2xl">
              <MyAge />
            </Box>

            <Box className="relative border-2 border-violet-300 bg-red-200 w-1/2 rounded-2xl">
              <Certificates />
            </Box>
          </ContainerBoxes>


          {/* Work Experience, Personality, Skills */}
          <ContainerBoxes className="flex flex-col md:flex-row relative gap-2 md:gap-4 w-full mb-10">
            <Box className="box-skills w-full md:w-1/2 p-4 md:p-6 xl:p-10 rounded-2xl">
              <Skills />
            </Box>

            <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-1/2">
              <Box className="box-work_experience w-full relative h-[63%] p-4 md:p-6 xl:p-10 rounded-2xl">
                <WorkExperience />
              </Box>

              <Box className="box-personality w-full relative h-[35%] p-4 md:p-6 xl:p-10 rounded-2xl">
                <Personality />
              </Box>
            </div>
          </ContainerBoxes>


        </main>
      </div>
    </div>
  )
}

export default HomePage