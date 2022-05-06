import { HashRouter, Route, Switch } from 'react-router-dom'

import EmbedSphinx from '../docs/EmbedSphinx'

import { H3Section } from '../common/Section'
import CardSection from '../common/CardSection'

import '../docs/sphinx.css'

import ba from '../assets/images/ba_logo.png'
import discord from '../assets/images/discord_logo.png'
import facebook from '../assets/images/fb_logo.png'
import twitter from '../assets/images/twitter_logo.png'
import tiktok from '../assets/images/tiktok_logo.png'
import instagram from '../assets/images/instagram_logo.png'
import reddit from '../assets/images/reddit_logo.png'
import bse from '../assets/images/bse_logo.png'
import github from '../assets/images/github_colored_logo.png'
import steam from '../assets/images/steam_logo.png'
import b3d_irc from '../assets/images/b3d_irc_logo.png'
import yt from '../assets/images/yt_logo.png'

const Community = () => {
  return (
    <HashRouter basename={'/community'}>
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
                  title={'BlenderArtists'}
                  to={'https://www.blenderartists.org/c/game-engine'}
                  image={ba}>
                  Discuss & share UPBGE at BlenderArtists
                </CardSection>
                <CardSection
                  title={'Discord'}
                  to={'https://discord.gg/8PcrtTJW2R'}
                  image={discord}>
                  Official Discord
                </CardSection>
                <CardSection
                  title={'Facebook'}
                  to={'https://www.facebook.com/groups/2161613970761242'}
                  image={facebook}
                  hashtag={'https://www.facebook.com/hashtag/upbge'}>
                  Official Facebook Group
                  <br />& UPBGE #hashtag
                </CardSection>
                <CardSection
                  title={'Twitter'}
                  to={'https://www.twitter.com/upbge1'}
                  image={twitter}
                  hashtag={'https://www.twitter.com/hashtag/upbge'}>
                  Official Twitter Page
                  <br />& UPBGE #hashtag
                </CardSection>
                <CardSection
                  title={'TikTok'}
                  to={'https://www.tiktok.com/tag/upbge'}
                  image={tiktok}>
                  UPBGE #hashtag
                </CardSection>
                <CardSection
                  title={'Instagram'}
                  to={'https://www.instagram.com/explore/tags/upbge/'}
                  image={instagram}>
                  UPBGE #hashtag
                </CardSection>
                <CardSection
                  title={'Reddit'}
                  to={'https://www.reddit.com/r/upbge'}
                  image={reddit}>
                  Official UPBGE Subreddit
                </CardSection>
                <CardSection
                  title={'StackExchange'}
                  to={
                    'https://blender.stackexchange.com/questions/tagged/game-engine'
                  }
                  image={bse}>
                  Discuss & share UPBGE at BlenderStackExchange
                </CardSection>
                <CardSection
                  title={'Github'}
                  to={'https://github.com/upbge'}
                  image={github}>
                  Official Github Organization
                </CardSection>
                <CardSection
                  title={'Steam'}
                  to={'https://steamdb.info/tech/Engine/BlenderGameEngine'}
                  image={steam}>
                  &apos;Blender GameEngine&apos; Category
                </CardSection>
                <CardSection
                  title={'IRC'}
                  to={
                    'https://blender.chat/channel/gameengines-armoury-godot-up-bge-panda-etc'
                  }
                  image={b3d_irc}>
                  (inactive) &apos;BGE&apos; Channel
                  <br />
                  at Blender IRC
                </CardSection>
                <CardSection
                  title={'YouTube'}
                  to={
                    'https://www.youtube.com/channel/UCvDRAJdVthliAUDnaVY23aA'
                  }
                  image={yt}
                  hashtag={'https://www.youtube.com/hashtag/upbge'}>
                  (inactive) YouTube Channel
                  <br /> & UPBGE #hashtag
                </CardSection>
              </H3Section>
            </div>
          </div>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Community
