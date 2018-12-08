<template>
    <div class="app">
        <img src="./assets/image/background.png" class="background">
        <div class="gap"></div>
        <div class="head">
            <div class="head_count1">{{$store.state.num1}}</div>
            <div class="head_count1">{{$store.state.num2}}</div>
            <div class="head_count1">{{$store.state.num3}}</div>
            <div class="head_count1">{{$store.state.num4}}</div>
            <div class="head_count2">.</div>
        </div>
        <router-view class="routerView"></router-view>
        <img src="./assets/image/background.png" class="background1">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                million: 0,
                lakh: 0,
                wan: 0,
                thousand: 0
            }
        }
    }
</script>

<style>
    .app {
        position: relative;
        width: 100vw;
        min-height: 100vh;
        background-color: #0c0a24;
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: rotate(180deg);
    }
    .gap {
        height: 8.8vw;
    }
    .head {
        position: relative;
        display: flex;
        justify-content: center;
        width: 69.73vw;
        height: 13.34vw;
        background-image: url(./assets/image/head.png);
        margin: 0 auto;
        padding: 24.93vw 7.535vw 9.73vw 13.395vw;
    }
    .head_count1 {
        width: 11.73vw;
        height: 13.33vw;
        background-image: url(./assets/image/count.png);
        margin: 0 2.865vw;
        color: #04e3f4;
        text-align: center;
        line-height: 13.33vw;
        font-weight: 700;
        font-size: 1.5rem;
    }
    .head_count2 {
        position: absolute;
        bottom: 10vw;
        right: 24.2vw;
        color: #04e3f4;
    }
    .routerView {
        position: relative;
        z-index: 10;
    }
    .background1 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>
