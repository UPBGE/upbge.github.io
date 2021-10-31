import tw from 'tailwind-styled-components'

import SectionTitle from '../common/SectionTitle'

import videoanimation from '../assets/videos/animation.mp4'
import videoanimation2 from '../assets/videos/animation2.mp4'
import features_1 from '../assets/images/features_1.png'
import features_2 from '../assets/images/features_2.png'
import features_3 from '../assets/images/features_3.png'

const Video = tw.video`object-cover object-center bg-black`

const Content = tw.div`px-6 md:px-12`
const Intro = tw(
  Content
)`bg-gray-50 dark:bg-gray-950 text-center py-10 md:py-16`

const Section = tw(Content)`py-4 md:py-10`
const HSection = tw(Section)`md:grid md:grid-cols-2 space-x-2 max-w-6xl gap-x-12`

const GridSection = tw.div`bg-gray-100 dark:bg-gray-950 py-4 px-8 rounded-lg`
const GridSectionTitle = tw(SectionTitle)`text-left lg:text-center`

const BulletList = tw.ul`list-disc p-4 md:p-0`
const BulletListInside = tw.ul`list-disc list-inside p-4 md:p-0`

const Features = () => {
  return (
    <div className={'p-10'}>
      <div className={'flex flex-col items-center'}>
        <HSection>
          <div>
            <SectionTitle>Integrated design in Blender</SectionTitle>
            <p>UPBGE is a game engine build over the famous Blender 3d tool.
            It is internally integrated in such a way that what you see in the
            Blender viewport is what you will see in the game engine.</p>
            <p><br />Thanks to this integration we have that:</p>
            <BulletList>
              <li>
                No need for an import-export pipeline. Simply pressing "P" key and you are inside of your game testing your changes.
                This makes the feedback instantaneous, both visually and in terms of the game logic development.
              </li>
              <li>
                All the new features for Blender are automatically included in each UPBGE release.
              </li>
              <li>
                Best game design pipeline ever because there is no need to adapt an external 3d tool package. The game engine
                specific workspace, editors, panels or nodes follow the same convection and standards than Blender itself.
              </li>
            </BulletList>
          </div>
          <div className={'md:order-first mt-5'}>
            <img src={features_1} alt={'UPBGE Screenshot #1'} />
          </div>
        </HSection>

        <HSection>
          <div>
            <SectionTitle>Graphics</SectionTitle>
            <p>The UPBGE graphics renderer is the Blender's realtime viewport
            renderer, called Eevee. Eevee is a new physically based
            real-time renderer that uses a node base system.</p>
            <p><br />It has advanced features such as:</p>
            <BulletList>
              <li>Physically-based rendering with TAA and SMAA.</li>
              <li>Principled BSDF.</li>
              <li>Environment lighting and HDRIs.</li>
              <li>Screen-space reflections and refractions.</li>
              <li>Indirect light through light probes.</li>
              <li>Hard, soft and contact shadows.</li>
              <li>Subsurface scattering and volume rendering.</li>
              <li>Bloom, Volumetrics and Depth of field.</li>
              <li>
                Great color management, including HDR, tone mapping,
                exposure and color transformations such as Filmic.
              </li>
            </BulletList>
          </div>
          <div>
            <img src={features_2} alt={'UPBGE Screenshot #2'} />
          </div>
        </HSection>

        <HSection>
          <div>
            <SectionTitle>Scripting & Logic support</SectionTitle>
            <p>The UPBGE scripting language is Python. UPBGE has a very complete
               Python API that can be used as in the embedded editor as in the player.
               This scripting language is the language preferred to develop
               the game logic although there are other 3 additional and
               complete methods that the game developer can use:</p>
            <BulletList><br />
              <li>
                <p>The Logic Bricks system.</p> This system is a well tested system
                (around 20 years) and its main advantages are its speed and
                ease of use. No programming knowledge is required to use them.
              </li>
              <li>
                <p>The Logic Nodes system.</p> This system is a Visual Scripting system
                developed over the UPBGE node interface to create gameplay
                elements inside UPBGE editor. Its main advantages are its
                versatility and ease of use. No programming knowledge is
                required to use them.
              </li>
              <li>
                <p>The Python Components system.</p> Basically the Python Components
                are modules that can be attached to game objects and each one
                serves for a specific purpose. No programming knowledge is
                required to use them, although such knowledge is necessary
                for the development of new components.
              </li>
            </BulletList>
          </div>
          <div className={'md:order-first mt-24'}>
            <img src={features_3} alt={'UPBGE Screenshot #1'} />
          </div>
        </HSection>

        <HSection>
          <div>
            <SectionTitle>Animation system</SectionTitle>
            <p>The UPBGE animation system is the same than the Blender one.
               Due to this, UPBGE has one of the most powerfull animation
               system out there.</p>
            <p>Almost all the properties of UPBGE can be animated, from basic
               motion/rotation animation, through sprite animation and ending
               with different node properties of both materials and geometry
               or even grease pencil objects.</p>

            <p><br />Basically to make beautiful animations the developer
                     can use any of the following systems:</p>
            <BulletListInside>
              <li>Keyframes.</li>
              <li>Armatures.</li>
              <li>Shape keys.</li>
              <li>Drivers.</li>
              <li>Actions.</li>
              <li>Geometry nodes.</li>
            </BulletListInside>
          </div>
          <div>
            <Video autoPlay={true} muted={true} loop={true}>
              <source src={videoanimation} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video>
            <Video autoPlay={true} muted={true} loop={true}>
              <source src={videoanimation2} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video>
          </div>
        </HSection>

        <Section className={'max-w-7xl'}>
          <div className={'grid grid-cols-1 lg:grid-cols-3 gap-2'}>
            <GridSection>
              <GridSectionTitle>Physics</GridSectionTitle>
              <p>UPBGE includes advanced physics simulation in the form of the
                 Bullet Physics Engine (Bullet Physics). Most of your work will
                 involve setting the right properties on the objects
                 in your scene, then you can sit back and let the engine take over.
                 The physics simulation can be used for games, but also
                 for animation.</p>
              <p><br />UPBGE physics system can use Rigid, Dynamics or Soft
                 bodies, Static Objects and Kinematic Character controller.</p>

            </GridSection>

            <GridSection>
              <GridSectionTitle>OpenXR</GridSectionTitle>
              <p>The VR Scene Inspection add-on exposes and extends the native
                 virtual reality features of UPBGE. The feature set is limited
                 to scene inspection use cases at this moment. More advanced
                 use cases may be enabled through further development.</p>
              <p><br />VR support in UPBGE is based on the OpenXR specification and
                 requires some set up steps.</p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Multiplataform editor</GridSectionTitle>
              <p>The UPBGE editor works in 64-bit on Windows (7, 8 & 10),
                 MacOS (x86 and arm) and Linux and it has a small
                 size (around 170MB).</p>
              <p><br />It is easy to compile on any platform (all dependencies can
                 be downloaded through an easy to use script).</p>
            </GridSection>
          </div>
        </Section>

        <Section className={'max-w-7xl'}>
          <div className={'grid grid-cols-1 lg:grid-cols-3 gap-2'}>
            <GridSection>
              <GridSectionTitle>Navigation system</GridSectionTitle>
              <p>UPBGE includes a state of the art navigation
                 system based in the Recast & Detour libraries.</p>
              <p><br />It offers simple static navigation mesh which is suitable
                 for many simple cases and a navigation mesh construction toolset.</p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Audio system</GridSectionTitle>
              <p>UPBGE uses the Audaspace library for its audio system. It is a
                 high level audio library written in C++ with language bindings
                 for Python for example.</p>
              <p><br />Audaspace has 3D audio support, filters like low/highpass and
                 effects like delay, reverse or fading.</p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Multiplataform deployment</GridSectionTitle>
              <p>UPBGE exports to the main desktop platforms: Windows,
                 Linux and MacOS.</p>
            </GridSection>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Features
