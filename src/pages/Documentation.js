import { HashRouter, Route, Switch } from 'react-router-dom'

import EmbedSphinx from '../docs/EmbedSphinx'

import { H3Section } from '../common/Section'
import CardSection from '../common/CardSection'

import '../docs/sphinx.css'

import upbge_manual from '../assets/images/UPBGE_manual.png'
import upbge_python_api from '../assets/images/UPBGE_Python_API.png'
import upbge_old_manual from '../assets/images/UPBGE_old_manual.png'
import blender_manual from '../assets/images/Blender_manual.png'
import github_logo_new from '../assets/images/Github_Logo_new.png'
import github_logo from '../assets/images/Github_Logo.png'

const Documentation = () => {
  return (
    <HashRouter basename={'/documentation'}>
      <Switch>
        <Route path={`/:path`}>
          <div
            className={
              'absolute top-0 bottom-0 left-0 right-0 pt-18 overflow-hidden'
            }>
            <EmbedSphinx />
          </div>
        </Route>
        <Route>
          <div className={'p-10'}>
            <div className={'flex flex-col items-center'}>
              <H3Section>
                <CardSection
                  title={'UPBGE Current Manual'}
                  to={'/docs/latest/manual/index.html'}
                  image={upbge_manual}
                  external={'https://upbge.org/docs/latest/manual/index.html'}>
                  Learn about the UPBGE game-engine specific contents,
                  including: Game Logic, Physics, Python Programming, and more
                </CardSection>
                <CardSection
                  title={'UPBGE & Blender Python API'}
                  to={'/docs/latest/api/index.html'}
                  image={upbge_python_api}
                  external={'https://upbge.org/docs/latest/api/index.html'}>
                  Unified Python API for UPBGE current and Blender
                </CardSection>
                <CardSection
                  title={'Former UPBGE 0.2.5 Manual & API'}
                  to={'/docs/v0.2.5/index.html'}
                  image={upbge_old_manual}
                  external={'https://upbge.org/docs/v0.2.5/index.html'}>
                  Unified Manual and Python API for former UPBGE 0.2.5 release
                </CardSection>
                <CardSection
                  title={'Developer & User Docs'}
                  to={'https://github.com/UPBGE/upbge/wiki'}
                  image={github_logo}>
                  Information about UPBGE itself such as how to compile and
                  build the engine
                </CardSection>
                <CardSection
                  title={'UPBGE Release Notes'}
                  to={'https://github.com/UPBGE/upbge/wiki/Release-notes'}
                  image={github_logo_new}>
                  Latest updates about UPBGE described
                </CardSection>
                <CardSection
                  title={'Official Blender Manual'}
                  to={'https://docs.blender.org/manual/en/latest/'}
                  image={blender_manual}>
                  Learn about Blender&apos;s: Interface, Modeling, Animation,
                  EEVEE, and more
                </CardSection>
              </H3Section>
            </div>
          </div>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Documentation
