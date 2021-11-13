import { HashRouter, Link, Route, Switch } from 'react-router-dom'

import EmbedSphinx from '../docs/EmbedSphinx'
import {
  H3Section,
  GridSection,
  GridSectionOrange,
  GridSectionOrangeDark,
  GridSectionTitleCentered,
} from '../common/Section'
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
                <div className={'transform -rotate-6'}>
                  <GridSectionOrange>
                    <div className={'shadow-lg transform rotate-6'}>
                      <GridSection>
                        <GridSectionTitleCentered>
                          <Link to={`/docs/latest/manual/index.html`}>
                            UPBGE Current Manual
                          </Link>
                        </GridSectionTitleCentered>
                        <p align='center'>
                          <img src={upbge_manual} alt={'UPBGE 0.3+ Manual'} />
                        </p>
                        <br />
                        <p align='center'>
                          Learn about the UPBGE game-engine specific contents,
                          including: Game Logic, Physics, Python Programming,
                          and more
                        </p>
                      </GridSection>
                    </div>
                  </GridSectionOrange>
                  <br />
                </div>
                <div className={'transform -rotate-6'}>
                  <GridSectionOrangeDark>
                    <div className={'shadow-lg transform rotate-6'}>
                      <GridSection>
                        <GridSectionTitleCentered>
                          <Link to={`/docs/latest/api/index.html`}>
                            UPBGE & Blender Python API
                          </Link>
                        </GridSectionTitleCentered>
                        <p align='center'>
                          <img
                            src={upbge_python_api}
                            alt={'UPBGE Python API'}
                          />
                        </p>
                        <br />
                        <p align='center'>
                          Unified Python API for UPBGE current and Blender
                        </p>
                        <br />
                        <br />
                      </GridSection>
                    </div>
                  </GridSectionOrangeDark>
                  <br />
                </div>
                <div className={'transform -rotate-6'}>
                  <GridSectionOrange>
                    <div className={'shadow-lg transform rotate-6'}>
                      <GridSection>
                        <GridSectionTitleCentered>
                          <Link to={`/docs/v0.2.5/index.html`}>
                            Former UPBGE 0.2.5 Manual & API
                          </Link>
                        </GridSectionTitleCentered>
                        <p align='center'>
                          <img
                            src={upbge_old_manual}
                            alt={'UPBGE 0.2.5 Manual'}
                          />
                        </p>
                        <br />
                        <p align='center'>
                          Unified Manual and Python API for former UPBGE 0.2.5
                          release
                        </p>
                        <br />
                        <br />
                      </GridSection>
                    </div>
                  </GridSectionOrange>
                </div>
              </H3Section>
              <H3Section>
                <div className={'transform -rotate-6'}>
                  <GridSectionOrangeDark>
                    <div className={'shadow-lg transform rotate-6'}>
                      <GridSection>
                        <GridSectionTitleCentered>
                          <a href='https://github.com/UPBGE/upbge/wiki'>
                            Developer & User Docs
                          </a>
                        </GridSectionTitleCentered>
                        <p align='center'>
                          <img src={github_logo} alt={'Developer docs'} />
                        </p>
                        <br />
                        <p align='center'>
                          Information about UPBGE itself such as how to compile
                          and build the engine
                        </p>
                      </GridSection>
                    </div>
                  </GridSectionOrangeDark>
                  <br />
                </div>
                <div className={'transform -rotate-6'}>
                  <GridSectionOrange>
                    <div className={'shadow-lg transform rotate-6'}>
                      <GridSection>
                        <GridSectionTitleCentered>
                          <a href='https://github.com/UPBGE/upbge/wiki/Release-notes'>
                            UPBGE Release Notes
                          </a>
                        </GridSectionTitleCentered>
                        <p align='center'>
                          <img
                            src={github_logo_new}
                            alt={'UPBGE Release Notes'}
                          />
                        </p>
                        <br />
                        <p align='center'>
                          Latest updates about UPBGE described
                        </p>
                        <br />
                      </GridSection>
                    </div>
                  </GridSectionOrange>
                  <br />
                </div>
                <div className={'transform -rotate-6'}>
                  <GridSectionOrangeDark>
                    <div className={'shadow-lg transform rotate-6'}>
                      <GridSection>
                        <GridSectionTitleCentered>
                          <a href='https://docs.blender.org/manual/en/latest/'>
                            Official Blender Manual
                          </a>
                        </GridSectionTitleCentered>
                        <p align='center'>
                          <img src={blender_manual} alt={'Blender Manual'} />
                        </p>
                        <br />
                        <p align='center'>
                          Learn about Blender&apos;s: Interface, Modeling,
                          Animation, EEVEE, and more
                        </p>
                      </GridSection>
                    </div>
                  </GridSectionOrangeDark>
                </div>
              </H3Section>
            </div>
          </div>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Documentation
