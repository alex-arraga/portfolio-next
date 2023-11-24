import { AboutMe, Box, Certificates, MyAge, Skills, SocialNetworks, WorkExperience } from "@/components"
import ContainerBoxes from "@/components/home-components/ContainerBoxes"
import Header from "@/components/home-components/Header"
import Pills from "@/components/home-components/Pills"

function HomePage() {
  return (
    <div className="bg-home relative flex flex-col justify-center w-full min-w-screen min-h-screen">
      <Header />
      <div className="flex justify-center items-center w-full">
        <main className="flex flex-col h-full max-w-[90vw] mt-14">
          {/* About me */}
          <ContainerBoxes className="flex mt-10 mb-6 relative gap-4 w-full h-full ">
            <Box className="box-me relative  w-[calc(85%)] rounded-2xl">
              <AboutMe />
            </Box>

            {/* Social Networks */}
            <Box className="flex relative flex-col justify-between items-center w-[calc(15%)] gap-2">
              <SocialNetworks />
            </Box>
          </ContainerBoxes>

          {/* Skills */}
          <ContainerBoxes className="flex relative gap-4 w-full h-full mb-6 ">
            <Box className="box-skills min-w-[calc(45%)] p-10 h-full rounded-2xl">
              <Skills />
            </Box>

            {/* Work Experience */}
            <div className="flex flex-col w-full gap-4">
              <Box className="box-work_experience relative h-full rounded-2xl min-w-[calc(55%)] p-10">
                <WorkExperience />
              </Box>

              {/* My age */}
              <div className="flex min-w-[calc(55%)] h-full gap-4">
                <Box className="box-age select-none relative flex flex-col gap-6 justify-center items-center w-full p-10 rounded-2xl">
                  <MyAge />
                </Box>

                {/* Certificates */}
                <Box className="relative border-2 border-violet-300 h-full w-full p-10 bg-cyan-800 rounded-2xl">
                  <Certificates />
                </Box>
              </div>
            </div>
          </ContainerBoxes>

          {/* My Projects */}
          <ContainerBoxes>
            <Box className="w-full h-full mb-10 rounded-2xl box-proyects p-10">
              <h2 className="text-2xl text-gray-200 font-semibold mb-10">Proyectos</h2>
              <p className="text-gray-200 mb-6">En esta sección encontraras algunos mis proyectos personales, algunos de ellos, meramente de Diseño UX/UI utilizando herramientas como Figma y Photoshop, y otros desarrollados como Backend Developer, esto se debe a que antes de encontrar mi profesión como Developer estudié Diseño UX/UI.</p>

              <div className="flex gap-6">
                <Pills
                  altImage="ux/ui proyects"
                  urlImage="/ux-ui.png"
                  title="Diseño UX/UI"
                  text={`Te presento mis proyectos como Diseñador UX /UI`}
                  className="box-proyects__pills-design"
                  urlClick='/projects'
                  section={false}
                />

                <Pills
                  altImage="code proyects"
                  urlImage="/code.png"
                  title="Web Developer"
                  text={`Te presento mis proyectos como Web Developer`}
                  className="box-proyects__pills-code"
                  urlClick='/projects'
                  section={true}
                />
              </div>
            </Box>
          </ContainerBoxes>
        </main>
      </div>
    </div>
  )
}

export default HomePage