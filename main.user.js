// ==UserScript==
// @name         gandi移动端美化
// @namespace    http://tampermonkey.net/
// @version      2025-08-04
// @description  try to take over the world!
// @author       BenPaoDeXiaoZhi
// @match        *://www.ccw.site/gandi/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=achieve3000.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const erudaContainer = document.createElement('script')
    erudaContainer.src="https://cdn.jsdelivr.net/npm/eruda"
    erudaContainer.onload='()=>{alert(\"已载入\")}
    const leftSideBarScale = 0.5
    const topBarScale = 0.5
    const rightWrapperScale = 0.5
    const logo = [
'  _    _      _ _          _____                 _ _ ',
' | |  | |    | | |        / ____|               | (_)',
' | |__| | ___| | | ___   | |  __  __ _ _ __   __| |_ ',
' |  __  |/ _ \\ | |/ _ \\  | | |_ |/ _` | \'_ \\ / _` | |',
' | |  | |  __/ | | (_) | | |__| | (_| | | | | (_| | |',
' |_|  |_|\\___|_|_|\\___/   \\_____|\\__,_|_| |_|\\__,_|_|',
].join('\n')
    const log = (dat)=>{
        console.log(`%c${dat}`,'color:blue')
    }
    log(logo)
    log('欢迎使用gandi移动端美化插件,基于用户脚本注入实现的移动端gandi美化\n灵感来源:白猫的Gandi手机版   制作者:BenPaoDeXiaoZhi')
    const intervalId = setInterval(()=>{
            if(document.querySelector('.gandi_vertical-bar_bar_Tsvpu')){
                log('检测到侧边栏，可以替换')
                const leftSideBar = document.querySelector('.gandi_vertical-bar_bar_Tsvpu')
                console.log(leftSideBar)
                leftSideBar.style.maxHeight = '100vh'
                leftSideBar.style.overflowY = 'scroll'
                leftSideBar.style.overscrollBehavior= 'contain'
                leftSideBar.style.padding = '0px'
                leftSideBar.style.width = `${72*leftSideBarScale}px`
                const leftSideBarTop = leftSideBar.querySelector('ul')
                leftSideBarTop.style.zoom = leftSideBarScale
                const leftSideBarBottom = leftSideBar.querySelector('.gandi_vertical-bar_barBottom_2zEd6')
                leftSideBarBottom.style.alignItems = 'start'
                leftSideBarBottom.style.zoom = leftSideBarScale
                const topBar = document.querySelector('.gandi_menu-bar_menu-bar_JcuHF')
                topBar.style.height = `${60*topBarScale}px`
                console.log(topBar)
                const topButtons = topBar.querySelectorAll('button')
                for (let i of topButtons){
                    i.style.height = '80%'
                    i.style.aspectRatio = 'auto'
                }
                clearInterval(intervalId)
                const stageWrapper = document.querySelector('.gandi_gui_stage-wrapper_29wQB')
                console.log(stageWrapper)
                stageWrapper.style.zoom = rightWrapperScale
                const spritesWrapper = document.querySelectorAll('.gandi_collapsible-box_collapsed_oQuU1')[1]
                console.log(spritesWrapper)
                spritesWrapper.style.zoom = rightWrapperScale
                spritesWrapper.style.top = `337px`
            }
        },1000
    )
    // Your code here...
})();
