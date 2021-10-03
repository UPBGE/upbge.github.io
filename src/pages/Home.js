import tw from 'tailwind-styled-components'

import Button from '../common/Button'
import Marquee from '../common/Marquee'
import SectionTitle from '../common/SectionTitle'

import banner from '../assets/videos/banner.mp4'
import screenshot1 from '../assets/images/evee.gif'
import screenshot2 from '../assets/images/logicnode.gif'

const Video = tw.video`absolute top-0 left-0 w-screen h-screen object-cover object-center bg-black`
const Jumbotron = tw.div`absolute top-0 left-0 w-screen h-screen max-w-full z-40 text-white flex 
    flex-col justify-center items-center`

const Content = tw.div`px-6 md:px-12`
const Intro = tw(
  Content
)`bg-gray-50 dark:bg-gray-950 text-center py-10 md:py-16`
const Section = tw(
  Content
)`md:grid md:grid-cols-2 py-4 md:py-10 space-x-2 max-w-6xl`

const Home = () => {
  const marqueeTexts = ['Game', 'Scripts', 'Models', 'Textures', 'Materials']
    .map((t) => 'Your ' + t)
    .concat('in One Place')

  return (
    <section>
      <Video autoPlay={true} muted={true} loop={true}>
        <source src={banner} type={'video/mp4'} />
        Your browser does not support the video tag.
      </Video>

      <Jumbotron>
        <h1 className={'mt-12 font-black font-display text-3xl md:text-5xl'}>
          Make <Marquee texts={marqueeTexts} />
        </h1>

        <p className={'mt-3 text-lg px-3'}>
          Now you can make your game from start to finish without leaving
          Blender.
        </p>

        <Button className={'mt-6'} href={'#intro'}>
          Learn More
        </Button>
      </Jumbotron>

      <div className={'h-screen -mt-20'} />

      <Intro
        id={'intro'}
        className={'flex justify-center'}
        style={{ scrollMarginTop: '5em' }}>
        <div className={'max-w-xl'}>
          <SectionTitle>Fully Integrated in Blender</SectionTitle>

          <p>
            UPBGE is an open-source, 3D game engine forked from the old Blender
            Game Engine and deployed with Blender itself. This unified workflow
            is its main strength, as you can make your game from start to finish
            without leaving Blender.
          </p>
        </div>
      </Intro>

      <div className={'flex flex-col items-center'}>
        <Section>
          <div>
            <SectionTitle>Basic Features</SectionTitle>

            <ul className={'list-disc p-4 md:p-0'}>
              <li>
                Very fast workflow with the convenience of Blender internal &
                Cycles nodes.
              </li>
              <li>
                Realtime advanced physics powered by Bullet, including rigid
                bodies, soft bodies, obstacle simulation and path finding.
              </li>
              <li>
                Fully integrated audio engine, powered by OpenAL and SDL,
                supporting 3D sound and sound effects.
              </li>
              <li>Easy and straightforward visual logic system.</li>
            </ul>
          </div>
          <div className={'md:order-first'}>
            <img src={screenshot1} alt={'UPBGE Screenshot #1'} />
          </div>
        </Section>

        <Section>
          <div>
            <SectionTitle>Advanced Features</SectionTitle>

            <ul className={'list-disc p-4 md:p-0'}>
              <li>PBR materials.</li>
              <li>
                Powerful Python language bindings and components, allowing more
                support for libraries through the use of PyPI.
              </li>
              <li>Render attachments.</li>
              <li>
                Fake or real-time reflections settings directly through the
                interface.
              </li>
              <li>HDR pipeline.</li>
            </ul>
          </div>
          <div>
            <img src={screenshot2} alt={'UPBGE Screenshot #2'} />
          </div>
        </Section>
      </div>
    </section>
  )
}

export default Home
