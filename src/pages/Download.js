import { GridSection, SectionTitle, WideHSection } from '../common/Section'

import { BulletListInside } from '../common/List'
import Button from '../common/Button'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { isWinPhone, isIOS, isWindows, isMacOs } from 'react-device-detect'
import { useState } from 'react'

import logo_name from '../assets/images/logo_web_name.png'
import tw from 'tailwind-styled-components'

let sta
if (isWindows || isWinPhone) {
  sta = 0
} else if (isMacOs || isIOS) {
  sta = 2
} else {
  sta = 1
}

const TabSection = tw(GridSection)`flex flex-col gap-6`

const Download = () => {
  const [tabIndex, setTabIndex] = useState(sta)

  return (
    <div className={'p-10'}>
      <div className={'flex flex-col items-center'}>
        <WideHSection>
          <div className={'flex flex-col items-center pt-4'}>
            <img src={logo_name} alt={'UPBGE Logo with name'} />
            <br />
            <SectionTitle>Stable Release</SectionTitle>
            <p>Version UPBGE 0.3</p>
            <p>Released 4 December 2021</p>
            <p>&nbsp;</p>
            <TabSection>
              <div>
                <BulletListInside>
                  <li>
                    <strong>UPBGE 0.3+</strong>&nbsp;is based on latest&nbsp;
                    <strong>Blender</strong>&nbsp;source
                  </li>
                  <li>
                    <strong>UPBGE 0.2.5b</strong>&nbsp;is based on legacy&nbsp;
                    <strong>Blender 2.79.7</strong>&nbsp;source
                  </li>
                </BulletListInside>
              </div>
            </TabSection>
          </div>
          <div>
            <Tabs forceRenderTabPanel defaultIndex={0}>
              <TabList>
                <Tab>UPBGE 0.3+</Tab>
                <Tab>UPBGE 0.2.x</Tab>
              </TabList>
              <TabPanel>
                <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
                  <TabSection>
                    <TabList>
                      <Tab>Windows</Tab>
                      <Tab>Linux</Tab>
                      <Tab>macOS</Tab>
                      <Tab>Experimental</Tab>
                    </TabList>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>Windows 8.1, 10, & 11</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-windows-x86_64.7z'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <div>
                          <SectionTitle>Windows 7</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-windows7-x86_64.7z'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>
                              <strong>CPU:</strong> 64-bit quad core
                            </li>
                            <li className='list-none ml-4'>
                              with SSE2 support minimum
                            </li>
                            <li>
                              <strong>GPU:</strong> 2GB VRAM minimum
                            </li>
                            <li>
                              <strong>RAM:</strong> 8GB minimum
                            </li>
                            <li>
                              <strong>OpenGL:</strong> 4.3+ minimum
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>
                              7z extension can be extracted with&nbsp;
                              <a
                                href='https://www.7-zip.org/'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>7zip</strong>
                              </a>
                            </li>
                            <li className='list-none ml-4'>
                              or a similar application
                            </li>
                            <li>
                              64-bit builds don&apos;t run on 32-bit systems
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Misc Downloads</SectionTitle>
                          <BulletListInside>
                            <li>
                              Alternative download links:
                              <a
                                href='https://mega.nz/folder/RsFSSZjA#rTNA_4nBbLp0BSTX9-DqSA'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here</strong>
                              </a>
                            </li>
                            <li>Download older UPBGE versions:</li>
                            <li className='list-none ml-4'>
                              <a
                                href='https://github.com/UPBGE/upbge/releases'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                              or
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                            </li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>Linux x64</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-linux-x86_64.tar.xz'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <div>
                          <SectionTitle>
                            Linux aarch64 (coming soon)
                          </SectionTitle>
                          <Button href={'#'} target={'_blank'}>
                            Unavailable
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>
                              <strong>CPU:</strong> 64-bit quad core
                            </li>
                            <li className='list-none ml-4'>
                              with SSE2 support minimum
                            </li>
                            <li>
                              <strong>GPU:</strong> 2GB VRAM minimum
                            </li>
                            <li>
                              <strong>RAM:</strong> 8GB minimum
                            </li>
                            <li>
                              <strong>OpenGL:</strong> 4.3+ minimum
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>Builds are compiled from a CentOS 7</li>
                            <li className='list-none ml-4'>
                              distribution&nbsp;
                            </li>
                            <li>
                              xz extension can be extracted with&nbsp;
                              <a
                                href='https://www.7-zip.org/'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>7zip</strong>
                              </a>
                            </li>
                            <li className='list-none ml-4'>
                              or a similar application
                            </li>
                            <li>
                              64-bit builds don&apos;t run on 32-bit systems
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Misc Downloads</SectionTitle>
                          <BulletListInside>
                            <li>
                              Alternative download links:
                              <a
                                href='https://mega.nz/folder/RsFSSZjA#rTNA_4nBbLp0BSTX9-DqSA'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here</strong>
                              </a>
                            </li>
                            <li>Download older UPBGE versions:</li>
                            <li className='list-none ml-4'>
                              <a
                                href='https://github.com/UPBGE/upbge/releases'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                              or
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                            </li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>macOS Intel (10.13+)</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-macOS-x86_64.dmg'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <div>
                          <SectionTitle>
                            macOS Apple Silicon (11.0+)
                          </SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-macOS-arm64.dmg'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>
                              <strong>CPU:</strong> 64-bit quad core
                            </li>
                            <li className='list-none ml-4'>
                              with SSE2 support minimum
                            </li>
                            <li>
                              <strong>GPU:</strong> 2GB VRAM minimum
                            </li>
                            <li>
                              <strong>RAM:</strong> 8GB minimum
                            </li>
                            <li>
                              <strong>OpenGL:</strong> 4.3+ minimum
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>macOS Intel requires version 10+</li>
                            <li>macOS Apple Silicon requires version 11+</li>
                            <li>
                              dmg extension can be extracted with&nbsp;
                              <a
                                href='https://www.7-zip.org/'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>7zip</strong>
                              </a>
                            </li>
                            <li className='list-none ml-4'>
                              or a similar application
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Misc Downloads</SectionTitle>
                          <BulletListInside>
                            <li>
                              Alternative download links:
                              <a
                                href='https://mega.nz/folder/RsFSSZjA#rTNA_4nBbLp0BSTX9-DqSA'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here</strong>
                              </a>
                            </li>
                            <li>Download older UPBGE versions:</li>
                            <li className='list-none ml-4'>
                              <a
                                href='https://github.com/UPBGE/upbge/releases'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                              or
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                            </li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>UPBGE 0.3+ Experimental</SectionTitle>
                          <Button
                            href={
                              'https://mega.nz/folder/t9EEFSaS#JPiOPSInCZyU-SW_-rhEOQ'
                            }
                            target={'_blank'}>
                            Browse or download
                          </Button>
                        </div>
                        <div>
                          <SectionTitle>Misc Experimental</SectionTitle>
                          <Button
                            href={
                              'https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug/folder/QsVFVIRb'
                            }
                            target={'_blank'}>
                            Browse or download
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>Check in corresponding platform tabs</li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>The repository is hosted inside a external</li>
                            <li className='list-none ml-4'>MEGA folder</li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                  </TabSection>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
                  <TabSection>
                    <TabList>
                      <Tab>Windows</Tab>
                      <Tab>Linux</Tab>
                      <Tab>macOS</Tab>
                      <Tab>Experimental</Tab>
                    </TabList>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>Windows 7, 8.1, 10, & 11</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.2.5b/UPBGEv0.2.5b-b2.79Windows64.7z'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <div>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.2.5b/UPBGEv0.2.5b-b2.79Windows32.7z'
                            }
                            target={'_blank'}>
                            Download (32-bit)
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>
                              Blender 2.79 runs on all systems that support
                            </li>
                            <li className='list-none ml-4'>
                              OpenGL 2.1 and above, with recent
                            </li>
                            <li className='list-none ml-4'>graphics drivers</li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>
                              7z extension can be extracted with&nbsp;
                              <a
                                href='https://www.7-zip.org/'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>7zip</strong>
                              </a>
                            </li>
                            <li className='list-none ml-4'>
                              or a similar application
                            </li>
                            <li>
                              64-bit builds don&apos;t run on 32-bit systems
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Misc Downloads</SectionTitle>
                          <BulletListInside>
                            <li>
                              Alternative download links:
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug/folder/B19HAa7Z'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here</strong>
                              </a>
                            </li>
                            <li>Download older UPBGE versions:</li>
                            <li className='list-none ml-4'>
                              <a
                                href='https://github.com/UPBGE/upbge/releases'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                              or
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                            </li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>Linux x64</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.2.5b/UPBGEv0.2.5b-b2.79Linux64.tar.xz'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>
                              Blender 2.79 runs on all systems that support
                            </li>
                            <li className='list-none ml-4'>
                              OpenGL 2.1 and above, with recent
                            </li>
                            <li className='list-none ml-4'>graphics drivers</li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>Builds are compiled from a CentOS 7</li>
                            <li className='list-none ml-4'>
                              distribution&nbsp;
                            </li>
                            <li>
                              xz extension can be extracted with&nbsp;
                              <a
                                href='https://www.7-zip.org/'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>7zip</strong>
                              </a>
                            </li>
                            <li className='list-none ml-4'>
                              or a similar application
                            </li>
                            <li>
                              64-bit builds don&apos;t run on 32-bit systems
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Misc Downloads</SectionTitle>
                          <BulletListInside>
                            <li>
                              Alternative download links:
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug/folder/B19HAa7Z'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here</strong>
                              </a>
                            </li>
                            <li>Download older UPBGE versions:</li>
                            <li className='list-none ml-4'>
                              <a
                                href='https://github.com/UPBGE/upbge/releases'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                              or
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                            </li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>macOS Intel</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.2.5b/UPBGEv0.2.5b-b2.79MacOS.zip'
                            }
                            target={'_blank'}>
                            Download (64-bit)
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>
                              Blender 2.79 runs on all systems that support
                            </li>
                            <li className='list-none ml-4'>
                              OpenGL 2.1 and above, with recent
                            </li>
                            <li className='list-none ml-4'>graphics drivers</li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>macOS Intel requires version 10+</li>
                            <li>
                              dmg extension can be extracted with&nbsp;
                              <a
                                href='https://www.7-zip.org/'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>7zip</strong>
                              </a>
                            </li>
                            <li className='list-none ml-4'>
                              or a similar application
                            </li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Misc Downloads</SectionTitle>
                          <BulletListInside>
                            <li>
                              Alternative download links:
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug/folder/B19HAa7Z'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here</strong>
                              </a>
                            </li>
                            <li>Download older UPBGE versions:</li>
                            <li className='list-none ml-4'>
                              <a
                                href='https://github.com/UPBGE/upbge/releases'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                              or
                              <a
                                href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>&nbsp;here&nbsp;</strong>
                              </a>
                            </li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>Misc Experimental</SectionTitle>
                          <Button
                            href={
                              'https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug/folder/QsVFVIRb'
                            }
                            target={'_blank'}>
                            Browse or download
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Requirements</SectionTitle>
                          <BulletListInside>
                            <li>Check in corresponding platform tabs</li>
                          </BulletListInside>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          <BulletListInside>
                            <li>The repository is hosted inside a external</li>
                            <li className='list-none ml-4'>MEGA folder</li>
                          </BulletListInside>
                        </div>
                      </TabSection>
                    </TabPanel>
                  </TabSection>
                </Tabs>
              </TabPanel>
            </Tabs>
          </div>
        </WideHSection>
      </div>
    </div>
  )
}

export default Download
