<h1 align="center"><img src=".github/images/logo.png" height="200"/></h1>
<p align="center">
  Real-time speech-to-text and keyboard input captions for OBS.<br>
  <a href="#examples">See examples</a><br>
</p>

## Why
This project was started because I personally needed a free, simple and performant solution to compensate speech impairments and overall shyness with captions.  
The current goal of this project is to help streamers with similar problems to make their streams more interactive and engaging.

## Features
- <img src="https://cdn.betterttv.net/emote/5d38aaa592fc550c2d5996b8/1x" width="20" height="20"> **No installation required**
- <img src="https://cdn.betterttv.net/emote/601b35be4e3ab965ef7684b2/1x" width="20" height="20"> **Visual customization**
- <img src="https://cdn.betterttv.net/emote/5ad22a7096065b6c6bddf7f3/1x" width="20" height="20"> **Google Fonts integration (about 1000 free fonts)**
- <img src="https://cdn.betterttv.net/emote/6086e99a39b5010444d069fc/1x" width="20" height="20"> **Simple OBS integration**
- <img src="https://cdn.betterttv.net/emote/587fc95dafc2ff756c3f3012/1x" width="20" height="20"> **Auto saves styles and configuration**
- <img src="https://cdn.betterttv.net/emote/5b35cae2f3a33e2b6f0058ef/1x" width="20" height="20"> **Style changes applied on the fly**
- <img src="https://cdn.frankerfacez.com/emoticon/145916/1" width="20" height="20"> **Use the same captions source on multiple clients simultaneously**

## STT Plugins
- <img src=".github/images/browsers/desktop_main.png" height=20> [Azure Speech Services](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/) - high quality speech recognition, has free tier with 5 hours of audio per month, setup is kinda complicated
- <img src=".github/images/browsers/chrome.png" height=20><img src=".github/images/browsers/edge.png" height=20> [Browser native](https://caniuse.com/speech-recognition) - utilizes browser integrated api. (MS Edge quality is similar to Azure, but free, btw)
- <img src=".github/images/browsers/desktop_main.png" height=20> Noop - disable speech recognition and use text input only

## How to start
1. Open [host page](https://mmpneo.github.io/simple-obs-stt)
2. Select stt plugin
2. Select language to recognize
3. Start
4. Copy client link
5. Create browser source and past link

<img src=".github/images/howto/stt_ui.gif">
<img src=".github/images/howto/obs_ui.gif">

## Examples
<img src=".github/images/examples/ex-1.gif">
<img src=".github/images/examples/ex-1.png">
<img src=".github/images/examples/ex-5.jpg">
<img src=".github/images/examples/ex-2.png">
<img src=".github/images/examples/ex-3.png">
<img src=".github/images/examples/ex-4.jpg">

## Planned
- [x] Fonts - Google fonts integration
- [x] Style Templates - Instant switching between styles. For ex: Swappable styles for different games
- [ ] Sounds - typing sounds
- [ ] Text animation - different text typing animations
- [ ] Custom background for host preview
- [ ] Twitch emotes integration

## Standalone version
Experimental, WebView2(Edge) based, electron-like app.  
Works offline (Still requires connection for STT).

**How to build**  
*Tested on windows.*  
*Node 14 and Rust stable required.*
1. Clone repo
2. ``` npm run build ```
3. ```npx tauri build```
4. Build will be available at *./src-tauri/target/release/*

<img src="https://visitor-badge.glitch.me/badge?page_id=mmpneo.simple-obs-stt">
![](https://cdn.betterttv.net/emote/603bef907c74605395f3604a/1x) DO DO DO ![](https://cdn.betterttv.net/emote/603bef907c74605395f3604a/1x) DO DO DO ![](https://cdn.betterttv.net/emote/603bef907c74605395f3604a/1x) DO DO DO ![](https://cdn.betterttv.net/emote/603bef907c74605395f3604a/1x) DO DO DO ![](https://cdn.betterttv.net/emote/603bef907c74605395f3604a/1x) DO DO DO ![](https://cdn.betterttv.net/emote/603bef907c74605395f3604a/1x)
