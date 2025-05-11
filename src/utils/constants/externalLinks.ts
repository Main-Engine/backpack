import { isProd } from './environment'
import { isAndroid, isIos } from './platform'

const developWebPath = 'dev.explorehere.app'
const productionWebPath = 'explorehere.app'

let path = developWebPath
let fullPath = `https://${path}`

if (isProd) {
  path = productionWebPath
  fullPath = `https://${path}`
}

export const LOCAL_APP_PATH = 'explorehere://'
export const LOCAL_WEB_PATH = path
export const LOCAL_WEB_PATH_WITH_PROTOCOL = fullPath

export const SUPPORT_CHAT = 'https://explorehere.app?chat=open'
export const WHATS_NEW = 'https://www.notion.so/wesvance/Whats-New-b2c61840e00641d590f54543fc33452a'
export const FEATURE_BOARD =
  'https://wesvance.notion.site/1ad7571e47c74171b2321e5dc8d3a5d3?v=37524f0ee0314c6d933d35f9f87bde13'
export const PRIVACY_POLICY =
  'https://www.notion.so/Privacy-Policy-e66eddc544584bd8bd140dea18ae15a7'

export const IOS_DOWNLOAD = 'https://apps.apple.com/us/app/explorehere-markers/id1485772125'
export const ANDROID_DOWNLOAD =
  'https://play.google.com/store/apps/details?id=app.explorehere.markers'

export const INSTAGRAM_LINK = 'https://www.instagram.com/explorehereapp/'

export const TWITTER_LINK = 'https://twitter.com/ExploreHereApp'
export const DISCOVERY_MEETING_LINK = 'https://calendly.com/d/5bp-7hh-vy7/discovery'
export const BETA_DISCOVERY_MEETING_LINK = 'https://calendly.com/d/3t2-wsv-4zb/beta-discovery'
export const FACEBOOK_GROUP = 'https://www.facebook.com/groups/explorehere'
export const IOS_REVIEW_LINK = `https://apps.apple.com/app/apple-store/id1485772125?action=write-review`
export const ANDROID_REVIEW_LINK = `https://play.google.com/store/apps/details?id=app.explorehere.markers&showAllReviews=true`
export const CHANGELOG = 'https://www.explorehere.app/whats-new'

let PLATFORM_DOWNLOAD = IOS_DOWNLOAD
if (isIos) {
  PLATFORM_DOWNLOAD = IOS_DOWNLOAD
} else if (isAndroid) {
  PLATFORM_DOWNLOAD = ANDROID_DOWNLOAD
}
export const DOWNLOAD = PLATFORM_DOWNLOAD
