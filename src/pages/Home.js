import tw from 'tailwind-styled-components'

import Button from '../common/Button'
import Marquee from '../common/Marquee'

import banner from '../assets/videos/banner.mp4'
import screenshot1 from '../assets/images/evee.gif'
import screenshot2 from '../assets/images/logicnode.gif'
import screenshot3 from '../assets/images/custominterface.gif'
import screenshot4 from '../assets/images/games.gif'
import Content from '../common/Content'
import {
  GridSection,
  GridSectionTitle,
  HSection,
  Section,
  SectionTitle,
} from '../common/Section'
import { BulletList } from '../common/List'

const Video = tw.video`absolute top-0 left-0 w-screen h-screen object-cover object-center bg-black`
const Jumbotron = tw.div`absolute top-0 left-0 w-screen h-screen max-w-full z-40 text-white flex 
    flex-col justify-center items-center`

const Intro = tw(
  Content
)`bg-gray-50 dark:bg-gray-950 text-center py-10 md:py-16`

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

        <p className={'mt-3 text-lg px-6 text-center'}>
          Now you can make your game from start to finish without leaving
          Blender.
        </p>

        <Button className={'mt-6'} to={'#intro'}>
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
        <HSection>
          <div>
            <SectionTitle>Basic Features</SectionTitle>

            <BulletList>
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
            </BulletList>
          </div>
          <div className={'md:order-first'}>
            <img src={screenshot1} alt={'UPBGE Screenshot #1'} />
          </div>
        </HSection>

        <HSection>
          <div>
            <SectionTitle>Advanced Features</SectionTitle>

            <BulletList>
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
            </BulletList>
          </div>
          <div>
            <img src={screenshot2} alt={'UPBGE Screenshot #2'} />
          </div>
        </HSection>

        <Section
          className={
            'max-w-3xl text-left md:text-center flex flex-col space-y-6 align-center'
          }>
          <div>
            <SectionTitle>Fully Customizable Interface</SectionTitle>

            <p>
              The editor can split, merge and separate windows, allowing you to
              completely make UPBGE your own. Don&apos;t limit yourself to color
              themes and predefined layouts. Add, remove, scale areas and
              adjust the interface colors to suit your needs and preferences.
            </p>
          </div>
          <div>
            <img src={screenshot3} alt={'UPBGE Screenshot #3'} width={1024} />
          </div>
        </Section>

        <Section className={'max-w-7xl'}>
          <div className={'grid grid-cols-1 lg:grid-cols-3 gap-2'}>
            <GridSection>
              <GridSectionTitle>Integrated with Blender</GridSectionTitle>

              <BulletList>
                <li>
                  Real time collaboration of game developers through the Mixer
                  addon. It allows multiple UPBGE game developers to work over
                  the same scene at the same time increasing the productivity of
                  small studios distributed in different places.
                </li>
                <li>
                  Simply pressing &quot;P&quot; key and you are inside of your
                  game testing your changes.
                </li>
                <li>
                  All the new features for Blender are automatically included in
                  each UPBGE release.
                </li>
                <li>
                  The best game design pipeline ever, thanks to its built-in 3D
                  tools package. The game engine&apos;s specific workspace,
                  editors, panels or nodes follow the same convection and
                  patterns as Blender itself.
                </li>
              </BulletList>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Graphics</GridSectionTitle>

              <BulletList>
                <li>
                  Great color management, including HDR, tone mapping, exposure
                  and color transformations such as Filmic.
                </li>
                <li>Physically-based rendering with TAA and SMAA</li>
                <li>Principled BSDF</li>

                <li>Environment lighting and HDRIs</li>
                <li>Screen-space reflections and refractions</li>
                <li>Indirect light through light probes</li>
                <li>Soft and contact shadows</li>
                <li>Subsurface scattering and volume rendering</li>
                <li>Bloom</li>
                <li>Volumetrics</li>
                <li>Depth of field</li>
              </BulletList>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Physics/Animation</GridSectionTitle>

              <BulletList>
                <li>Rigid bodies</li>
                <li>Dynamic bodies</li>
                <li>Soft bodies</li>
                <li>Character controller</li>
                <li>Static objects</li>
                <li>Keyframes</li>
                <li>Armatures</li>
                <li>Shape keys</li>
                <li>Drivers</li>
                <li>Actions</li>
                <li>Motion capture</li>
              </BulletList>
            </GridSection>
          </div>
        </Section>

        <Section
          className={
            'max-w-3xl text-left md:text-center flex flex-col space-y-6 align-center md:py-4'
          }>
          <SectionTitle>Community Games in Development</SectionTitle>

          <img src={screenshot4} alt={'UPBGE Screenshot #4'} width={1024} />
        </Section>
      </div>
    </section>
  )
}

export default Home
