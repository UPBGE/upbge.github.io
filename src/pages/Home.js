import tw from 'tailwind-styled-components'

import Button from '../common/Button'
import Marquee from '../common/Marquee'

import banner from '../assets/videos/banner.mp4'
import screenshot1 from '../assets/images/Make_models.jpg'
import screenshot2 from '../assets/images/Create_materials.jpg'
import screenshot3 from '../assets/videos/Place_assets.mp4'
import screenshot4 from '../assets/videos/Animate_everything.mp4'
import screenshot5 from '../assets/videos/Adjust_logic.mp4'
import screenshot6 from '../assets/videos/Release_game.mp4'

import Content from '../common/Content'
import {
  GridSectionTitleCentered,
  WideHSection,
  SectionTitle,
} from '../common/Section'

const Video = tw.video`absolute top-0 left-0 w-screen h-screen object-cover object-center bg-black`
const Video2 = tw.video`object-cover object-center bg-black`
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

      <div className={'flex flex-col items-center content-center'}>
        <WideHSection>
          <div>
            <GridSectionTitleCentered>
              Make your models
            </GridSectionTitleCentered>
            <br />
            <img src={screenshot1} alt={'UPBGE Screenshot #1'} />
          </div>
          <div>
            <GridSectionTitleCentered>
              Create your materials
            </GridSectionTitleCentered>
            <img src={screenshot2} alt={'UPBGE Screenshot #2'} />
          </div>
        </WideHSection>
        <WideHSection>
          <div>
            <GridSectionTitleCentered>
              Place your assets
            </GridSectionTitleCentered>
            <Video2 autoPlay={true} muted={true} loop={true}>
              <source src={screenshot3} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video2>
          </div>
          <div>
            <GridSectionTitleCentered>
              Animate everything
            </GridSectionTitleCentered>
            <br />
            <Video2 autoPlay={true} muted={true} loop={true}>
              <source src={screenshot4} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video2>
          </div>
        </WideHSection>
        <WideHSection>
          <div>
            <GridSectionTitleCentered>
              Adjust your logic
            </GridSectionTitleCentered>
            <Video2 autoPlay={true} muted={true} loop={true}>
              <source src={screenshot5} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video2>
          </div>
          <div>
            <GridSectionTitleCentered>
              Release your game
            </GridSectionTitleCentered>
            <br />
            <Video2 autoPlay={true} muted={true} loop={true}>
              <source src={screenshot6} type={'video/mp4'} />
              Your browser does not support the video tag.
            </Video2>
          </div>
        </WideHSection>
      </div>
    </section>
  )
}

export default Home
