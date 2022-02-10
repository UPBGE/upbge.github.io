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
            <SectionTitle>Stable Release Version 0.3</SectionTitle>
            <p>Released 4 December 2021</p>
          </div>
          <div>
            <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
              <TabList>
                <Tab>Windows</Tab>
                <Tab>Linux</Tab>
                <Tab>Mac OS</Tab>
                <Tab>Experimental</Tab>
              </TabList>
              <TabPanel>
                <TabSection>
                  <div>
                    <SectionTitle>For Windows 8.1, 10 and 11</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-windows-x86_64.7z'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64-bit)
                    </Button>
                  </div>
                  <div>
                    <SectionTitle>For Windows 7</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-windows7-x86_64.7z'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64-bit)
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>64-bit builds do not run on 32-bit systems</li>
		                  <li>
                        7z extension can be extracted with{' '}
                        <a
                        href='https://www.7-zip.org/'
                        target={'_blank'}
                        rel='noreferrer'>
                        7zip
                        </a>{' '}
		                  </li>
                      <li className="list-none ml-4">or a similar application{' '}</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>CPU: 64-bit, Dual-Core 2GHz CPU with SSE2 support</li>
                      <li>RAM: minimum 2GB</li>
                      <li>Display: 1280×768</li>
                      <li>GPU: minimum 1GB VRAM; OpenGL 3.3+</li>
                      <li>Hard Drive: minimum 500MB free space</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Other links</SectionTitle>
                    <BulletListInside>
                      <li>
                        Alternative download link{' '}
                        <a
                          href='https://mega.nz/folder/RsFSSZjA#rTNA_4nBbLp0BSTX9-DqSA'
                          target={'_blank'}
                          rel='noreferrer'>
                          (MEGA)
                        </a>
                      </li>
                      <li>
                        Download old UPBGE versions from{' '}
                        <a
                          href='https://github.com/UPBGE/upbge/releases'
                          target={'_blank'}
                          rel='noreferrer'>
                          here
                        </a>{' '}
                        or{' '}
                        <a
                          href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                          target={'_blank'}
                          rel='noreferrer'>
                          here
                        </a>
                      </li>
                    </BulletListInside>
                  </div>
                </TabSection>
              </TabPanel>
              <TabPanel>
                <TabSection>
                  <div>
                    <SectionTitle>Linux (x86/x64)</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-linux-x86_64.tar.xz'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (32-bit/64-bit)
                    </Button>
                  </div>
                  <div>
                    <SectionTitle>
                      Linux aarch64 (not available yet)
                    </SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-linux-aarch64.tar.xz'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64-bit)
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>64-bit builds do not run on 32-bit systems</li>
                      <li>Builds are compiled from a CentOS 7 distribution</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>glibc 2.17+</li>
                      <li>CPU: 64-bit, Dual-Core 2GHz CPU with SSE2 support</li>
                      <li>RAM: minimum 2GB</li>
                      <li>Display: 1280×768</li>
                      <li>GPU: minimum 1GB VRAM; OpenGL 3.3+</li>
                      <li>Hard Drive: minimum 500MB free space</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Other links</SectionTitle>
                    <BulletListInside>
                      <li>
                        Alternative download link{' '}
                        <a
                          href='https://mega.nz/folder/RsFSSZjA#rTNA_4nBbLp0BSTX9-DqSA'
                          target={'_blank'}
                          rel='noreferrer'>
                          (MEGA)
                        </a>
                      </li>
                      <li>
                        Download old UPBGE versions from{' '}
                        <a
                          href='https://github.com/UPBGE/upbge/releases'
                          target={'_blank'}
                          rel='noreferrer'>
                          here
                        </a>{' '}
                        or{' '}
                        <a
                          href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                          target={'_blank'}
                          rel='noreferrer'>
                          here
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
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-macOS-x86_64.dmg'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64-bit)
                    </Button>
                  </div>
                  <div>
                    <SectionTitle>macOS Apple Silicon</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-macOS-arm64.dmg'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64-bit)
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>macOS Intel requires version 10+</li>
                      <li>macOS Apple Silicon requires version 11+</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>CPU: 64-bit, Dual-Core 2GHz CPU with SSE2 support</li>
                      <li>RAM: minimum 2GB</li>
                      <li>Display: 1280×768</li>
                      <li>GPU: minimum 1GB VRAM; OpenGL 3.3+</li>
                      <li>Hard Drive: minimum 500MB free space</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Other links</SectionTitle>
                    <BulletListInside>
                      <li>
                        Alternative download link{' '}
                        <a
                          href='https://mega.nz/folder/RsFSSZjA#rTNA_4nBbLp0BSTX9-DqSA'
                          target={'_blank'}
                          rel='noreferrer'>
                          (MEGA)
                        </a>
                      </li>
                      <li>
                        Download old UPBGE versions from{' '}
                        <a
                          href='https://github.com/UPBGE/upbge/releases'
                          target={'_blank'}
                          rel='noreferrer'>
                          here
                        </a>{' '}
                        or{' '}
                        <a
                          href='https://mega.nz/folder/k9MW1KiZ#UOKzjh3IQ0GEgjQ6GUc7ug'
                          target={'_blank'}
                          rel='noreferrer'>
                          here
                        </a>
                      </li>
                    </BulletListInside>
                  </div>
                </TabSection>
              </TabPanel>
              <TabPanel>
                <TabSection>
                  <div>
                    <SectionTitle>Experimental Builds</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://mega.nz/folder/t9EEFSaS#JPiOPSInCZyU-SW_-rhEOQ'
                      }
                      target={'_blank'}>
                      Browse or download
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>The repository is hosted inside a MEGA folder</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>CPU: 64-bit, Dual-Core 2GHz CPU with SSE2 support</li>
                      <li>RAM: minimum 2GB</li>
                      <li>Display: 1280×768</li>
                      <li>GPU: minimum 1GB VRAM; OpenGL 3.3+</li>
                      <li>Hard Drive: minimum 500MB free space</li>
                    </BulletListInside>
                  </div>
                </TabSection>
              </TabPanel>
            </Tabs>
          </div>
        </WideHSection>
      </div>
    </div>
  )
}

export default Download
