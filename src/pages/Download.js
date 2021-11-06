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
            <p>released 4 December 2021</p>
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
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-Windows-10-x64.7z'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64 bits)
                    </Button>
                  </div>
                  <div>
                    <SectionTitle>For Windows 7</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-Windows-7-x64.7z'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64 bits)
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>64-bits builds do not run at 32-bits systems.</li>
                      <li>
                        7z extension is opened with{' '}
                        <a
                          href='https://www.7-zip.org/'
                          target={'_blank'}
                          rel='noreferrer'>
                          7zip
                        </a>{' '}
                        or similar application{' '}
                      </li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>64-bit dual core 2Ghz CPU with SSE2 support</li>
                      <li>2 GB RAM</li>
                      <li>1280×768 display</li>
                      <li>Graphics card with 1 GB RAM and OpenGL 3.3</li>
                      <li>Hard disk with 500 MB free space</li>
                    </BulletListInside>
                  </div>
                </TabSection>
              </TabPanel>
              <TabPanel>
                <TabSection>
                  <div>
                    <SectionTitle>For Linux</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-Linux-x64.tar.xz'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (64 bits)
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>64-bits build does not run at 32-bits systems.</li>
                      <li>The build is done in a CentOS 7 distribution.</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>glibc 2.17 and better</li>
                      <li>64-bit dual core 2Ghz CPU with SSE2 support</li>
                      <li>2 GB RAM</li>
                      <li>1280×768 display</li>
                      <li>Graphics card with 1 GB RAM and OpenGL 3.3</li>
                      <li>Hard disk with 500 MB free space</li>
                    </BulletListInside>
                  </div>
                </TabSection>
              </TabPanel>
              <TabPanel>
                <TabSection>
                  <div>
                    <SectionTitle>Mac OS intel</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-MacOS-intel-x64.dmg'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (intel 64 bits)
                    </Button>
                  </div>
                  <div>
                    <SectionTitle>Mac OS apple silicon</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://github.com/UPBGE/upbge/releases/download/v0.30/UPBGE-0.30-MacOS-apple-silicon-x64.dmg'
                      }
                      target={'_blank'}>
                      Download UPBGE 0.30.0 (arm 64 bits)
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>Mac OS intel needs version 10.3 or better.</li>
                      <li>Mac OS apple silicon needs version 11 or better.</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>64-bit dual core 2Ghz CPU with SSE2 support</li>
                      <li>2 GB RAM</li>
                      <li>1280×768 display</li>
                      <li>Graphics card with 1 GB RAM and OpenGL 3.3</li>
                      <li>Hard disk with 500 MB free space</li>
                    </BulletListInside>
                  </div>
                </TabSection>
              </TabPanel>
              <TabPanel>
                <TabSection>
                  <div>
                    <SectionTitle>All Supported Operating Systems</SectionTitle>
                    <Button
                      className={'mt-2'}
                      href={
                        'https://mega.nz/folder/t9EEFSaS#JPiOPSInCZyU-SW_-rhEOQ'
                      }
                      target={'_blank'}>
                      Go to experimental builds repository
                    </Button>
                  </div>
                  <div>
                    <p>NOTE:</p>
                    <BulletListInside>
                      <li>The repository is inside a MEGA folder</li>
                    </BulletListInside>
                  </div>
                </TabSection>
                <br />
                <TabSection>
                  <div>
                    <SectionTitle>Requirements</SectionTitle>
                    <BulletListInside>
                      <li>64-bit dual core 2Ghz CPU with SSE2 support</li>
                      <li>2 GB RAM</li>
                      <li>1280×768 display</li>
                      <li>Graphics card with 1 GB RAM and OpenGL 3.3</li>
                      <li>Hard disk with 500 MB free space</li>
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
