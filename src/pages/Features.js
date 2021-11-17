import tw from 'tailwind-styled-components'

import video_animation from '../assets/videos/animation.mp4'
import video_animation2 from '../assets/videos/animation2.mp4'
import features_1 from '../assets/images/features_1.png'
import features_2 from '../assets/images/features_2.png'
import features_3 from '../assets/images/features_3.png'
import {
  GridSection,
  GridSectionTitle,
  Section,
  SectionTitle,
  WideHSection,
} from '../common/Section'
import { BulletList, BulletListInside } from '../common/List'

const Video = tw.video`object-cover object-center bg-black`

const Features = () => {
  return (
    <div className={'p-10'}>
      <div className={'flex flex-col items-center'}>
        <WideHSection>
          <div>
            <SectionTitle>Integrated Design in Blender</SectionTitle>
            <p>
              UPBGE is a game engine built over the famous Blender 3D tool. It
              is internally integrated in such a way that what you see in the
              Blender viewport (EEVEE) is what you will see in-game.
            </p>
            <p>
              <br />
              Thanks to this integration we have:
            </p>
            <BulletList>
              <li>
                No need for an import-export pipeline. Since Blender supports
                3D modelling, sculpting and UV mapping, everything made in the
                UPBGE can be used "as is".
              </li>
              <li>
                Rapid iteration. Simply pressing the &quot;P&quot; key will
                start your game in the active viewport, allowing you to get
                instant feedback both visually and in terms of gameplay and
                logic.
              </li>
              <li>
                Implicit updates. All the new features for Blender are
                automatically included in each UPBGE release.
              </li>
              <li>
                A unified workflow. The game engine specific workspaces,
                editors, panels and nodes follow the same conventions and
                standards as Blender itself.
              </li>
            </BulletList>
          </div>
          <div className={'md:order-first mt-5'}>
            <img src={features_1} alt={'UPBGE Screenshot #1'} />
          </div>
        </WideHSection>

        <WideHSection>
          <div>
            <SectionTitle>Graphics</SectionTitle>
            <p>
              The UPBGE graphics renderer is the Blender&apos;s realtime
              viewport renderer, called Eevee. Eevee is a new physically based
              real-time renderer that uses a node base system.
            </p>
            <p>
              <br />
              It has advanced features such as:
            </p>
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
                Great color management, including HDR, tone mapping, exposure
                and color transformations such as Filmic.
              </li>
            </BulletList>
          </div>
          <div>
            <img src={features_2} alt={'UPBGE Screenshot #2'} />
          </div>
        </WideHSection>

        <WideHSection>
          <div>
            <SectionTitle>Scripting & Logic Support</SectionTitle>
            <p>
              The UPBGE scripting language is Python. UPBGE has a very complete
              Python API that can be used in the embedded editor as well as
              in-game. This scripting language is the most grounded way to
              develop game logic, although there are 3 additional and
              complete methods that the game developer can use:
            </p>
            <BulletList>
              <br />
              <li>
                <p>The Logic Bricks system.</p> This system is a well tested
                system (around 20 years) and its main advantages are its speed
                and ease of use. No programming knowledge is required to use
                them.
              </li>
              <li>
                <p>The Logic Nodes system.</p> This system is a Visual Scripting
                system developed atop the UPBGE node interface to create
                gameplay elements inside UPBGE editor. Its main advantages are
                its versatility and ease of use. No programming knowledge is
                required to use them.
              </li>
              <li>
                <p>The Python Components system.</p> Basically the Python
                Components are modules that can be attached to game objects.
                Each one serves a specific purpose. No programming knowledge
                is required to use them, although such knowledge is necessary
                for the development of new or custom components.
              </li>
            </BulletList>
          </div>
          <div className={'md:order-first mt-24'}>
            <img src={features_3} alt={'UPBGE Screenshot #1'} />
          </div>
        </WideHSection>

        <WideHSection>
          <div>
            <SectionTitle>Animation System</SectionTitle>
            <p>
              The UPBGE animation system is the same as the Blender one. Due
              to this, UPBGE has one of the most powerful animation systems out
              there.
            </p>
            <p>
              Almost all properties of UPBGE can be animated. From basic
              motion/rotation animations through sprite animation all the way to
              different node properties of both materials and geometry node
              trees. Even grease pencil objects can be animated.
            </p>

            <p>
              <br />
              To make animations, the developer can use any of the following
              systems supported by the game engine:
            </p>
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
              <source src={video_animation} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video>
            <Video autoPlay={true} muted={true} loop={true}>
              <source src={video_animation2} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video>
          </div>
        </WideHSection>

        <Section className={'max-w-7xl'}>
          <div className={'grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4'}>
            <GridSection>
              <GridSectionTitle>Physics</GridSectionTitle>
              <p>
                UPBGE includes advanced physics simulation as it incorperates
                the Bullet Physics Engine (Bullet Physics). Most of your work
                will come down to setting the right properties on the objects in
                your scene before you can sit back and let the engine take over.
                The physics simulation can be used for games as well as
                animations.
              </p>
              <p>
                <br />
                UPBGE physics system supports Rigid, Dynamic and Soft bodies,
                static objects and a kinematic character controller.
              </p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>OpenXR</GridSectionTitle>
              <p>
                The VR Scene Inspection add-on exposes and extends the native
                virtual reality features of UPBGE. The feature set is limited to
                scene inspection use cases at this moment. More advanced use
                cases may be enabled through further development.
              </p>
              <p>
                <br />
                VR support in UPBGE is based on the OpenXR specification and
                requires some set up steps.
              </p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Multiplatform Editor</GridSectionTitle>
              <p>
                The UPBGE editor works in 64-bit on Windows (7, 8 & 10), MacOS
                (x64 and arm) and Linux (x64 and arm) and it has a small size
                (around 170MB).
              </p>
              <p>
                <br />
                It is easy to compile on any platform (all dependencies can be
                downloaded through an easy to use script).
              </p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Navigation System</GridSectionTitle>
              <p>
                UPBGE includes a state of the art navigation system based on the
                Recast & Detour libraries.
              </p>
              <p>
                <br />
                It offers simple static navigation mesh support suitable for
                many cases and comes with a navmesh generation toolset.
              </p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Audio System</GridSectionTitle>
              <p>
                UPBGE uses the Audaspace library for its audio system. It is a
                high level audio library written in C++ with language bindings
                for Python.
              </p>
              <p>
                <br />
                Audaspace has 3D audio support, filters like low/highpass and
                effects like delay, reverse or fading.
              </p>
            </GridSection>

            <GridSection>
              <GridSectionTitle>Multiplatform Deployment</GridSectionTitle>
              <p>
                UPBGE exports to the main desktop platforms: Windows, Linux and
                MacOS.
              </p>
            </GridSection>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Features
