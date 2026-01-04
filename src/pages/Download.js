import { SectionTitle, WideHSection, TabSection } from '../common/Section'

import { BulletListInside } from '../common/List'
import Button from '../common/Button'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { isWinPhone, isIOS, isWindows, isMacOs } from 'react-device-detect'
import { useState } from 'react'

import logo_name from '../assets/images/logo_web_name.png'

let sta
if (isWindows || isWinPhone) {
  sta = 0
} else if (isMacOs || isIOS) {
  sta = 2
} else {
  sta = 1
}

const Download = () => {
  const [tabIndex, setTabIndex] = useState(sta)

  return (
    <div className={'p-10'}>
      <div className={'flex flex-col items-center'}>
        <WideHSection>
          <div className={'flex flex-col items-center pt-4'}>
            <img src={logo_name} alt={'UPBGE Logo with name'} />
            <div>
              <br />
            </div>
            <SectionTitle>Stable Release</SectionTitle>
            <p>Version UPBGE 0.44</p>
            <p>Released 07 May 2025</p>
            <p>&nbsp;</p>
            <TabSection>
              <div>
                <BulletListInside>
                  <li>
                    <strong>UPBGE 0.50</strong>&nbsp;is based on &nbsp;
                    <strong>Blender 5.0.1</strong>&nbsp;source
                  </li>
                  <li>
                    <strong>UPBGE 0.2.5b</strong>&nbsp;is based on legacy&nbsp;
                    <strong>Blender 2.79.7</strong>&nbsp;source
                  </li>
                </BulletListInside>
              </div>
            </TabSection>
            <div>
              <br />
              <br />
            </div>
            <SectionTitle>Development Release</SectionTitle>
            <p>Version UPBGE 0.51 Alpha</p>
            <p>Released a new build each week</p>
            <p>&nbsp;</p>
            <TabSection>
              <div>
                <BulletListInside>
                  <li>
                    <strong>UPBGE 0.51 Alpha</strong>&nbsp;is based on &nbsp;
                    <strong>Blender 5.1</strong>&nbsp;source
                  </li>
                </BulletListInside>
              </div>
            </TabSection>
          </div>
          <div>
            <Tabs forceRenderTabPanel defaultIndex={0}>
              <TabList>
                <Tab>UPBGE 0.5+</Tab>
                <Tab>UPBGE 0.2.x</Tab>
              </TabList>
              <TabPanel>
                <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
                  <TabSection>
                    <TabList>
                      <Tab>Windows</Tab>
                      <Tab>Linux</Tab>
                      <Tab>macOS</Tab>
                      <Tab>Development</Tab>
                    </TabList>
                    <TabPanel>
                      <TabSection>
                        <div>
                          <SectionTitle>Windows 8.1, 10, & 11</SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.50/upbge-0.50-windows-x64.7z'
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
                                <strong>7-zip</strong>
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
                                href='https://mega.nz/folder/kk9XSCIb#VmiLS6ww1DbSC7ZLUDOsUg'
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
                              'https://github.com/UPBGE/upbge/releases/download/v0.50/upbge-0.50-linux-x64.tar.xz'
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
                            <li>Builds are compiled from a Rocky Linux 8</li>
                            <li className='list-none ml-4'>
                              distribution&nbsp;
                            </li>
                            <li>
                              xz extension can be extracted with&nbsp;
                              <a
                                href='https://www.7-zip.org'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>7-Zip</strong>
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
                                href='https://mega.nz/folder/kk9XSCIb#VmiLS6ww1DbSC7ZLUDOsUg'
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
                          <SectionTitle>
                            macOS Apple Silicon (13.0+)
                          </SectionTitle>
                          <Button
                            href={
                              'https://github.com/UPBGE/upbge/releases/download/v0.50/upbge-0.50-macos-arm64.dmg'
                            }
                            target={'_blank'}>
                            Download (arm)
                          </Button>
                        </div>
                        <hr />
                        <div>
                          <SectionTitle>Note</SectionTitle>
                          If a warning exposing that&nbsp;
                          <em>
                            &quot;<u>UPBGE is damaged and can’t be opened</u>
                            &quot;
                          </em>
                          &nbsp;appears when executing the app, check
                          <a
                            href='https://github.com/UPBGE/upbge/wiki/MacOS-remove-UPBGE-damaged-comment'
                            target={'_blank'}
                            rel='noreferrer'>
                            <strong>&nbsp;this link&nbsp;</strong>
                          </a>
                          to know how to fix it.
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
                              <strong>Metal:</strong> 2.2 minimum
                            </li>
                            <li>
                              <strong>MacOS Apple Silicon:</strong> requires
                              version 13
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
                                href='https://mega.nz/folder/kk9XSCIb#VmiLS6ww1DbSC7ZLUDOsUg'
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
                          <SectionTitle>UPBGE 0.5+ Development</SectionTitle>
                          <Button
                            href={'https://github.com/UPBGE/upbge/releases'}
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
                      <Tab>Development</Tab>
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
                                <strong>7-Zip</strong>
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
                                href='https://portableapps.com/apps/utilities/peazip_portable'
                                target={'_blank'}
                                rel='noreferrer'>
                                <strong>PeaZip</strong>
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
                                <strong>7-Zip</strong>
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
