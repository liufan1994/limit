/*
 * @Author: lf
 * @Date: 2018-12-03 17:48:24
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-06 16:56:37
 * @文件说明: 首页页面
 */
<template>
    <div id="app">
        <div class="index">
            <img src="../assets/image/background.png" class="background">
            <img src="../assets/image/background.png" class="background1">
            <div class="gap"></div>
            <div class="head">
                <div class="head_count1">0</div>
                <div class="head_count1">0</div>
                <div class="head_count1">0</div>
                <div class="head_count1">0</div>
                <div class="head_count2">.</div>
            </div>
            <div class="content">
                <div class="content_frame">
                    <div class="content_frame_title">职业特征</div>
                    <div class="opt">
                        <div class="opt1" :class="{opt2:content_add1==='work'}" @click="vocation('work')">上班族</div>
                        <div class="opt1" :class="{opt2:content_add1==='company'}" @click="vocation('company')">企业主</div>
                    </div>
                </div>
                <div class="content_add1" v-if="content_add1==='work'">
                    <div class="content_frame">
                        <div class="content_frame_title">资金类型</div>
                        <div class="opt">
                            <div class="opt1" :class="{opt2:fundType==='cash'}" @click="fundFun('cash')">现金流水</div>
                            <div class="opt1" :class="{opt2:fundType==='card'}" @click="fundFun('card')">打卡资金</div>
                        </div>
                    </div>
                    <div class="content_frame">
                        <div class="content_frame_title">月收入/流水</div>
                        <div class="down" @click="down">
                            <span class="down_text">{{down_text}}</span>
                            <img src="../assets/image/down.png" alt="icon" class="down_icon">
                        </div>
                    </div>
                    <div class="content_frame">
                        <div class="content_frame_title">公积金</div>
                        <div class="opt">
                            <div class="opt1" :class="{opt2:common==='yes'}" @click="commonFun('yes')">有</div>
                            <div class="opt1" :class="{opt2:common==='no'}" @click="commonFun('no')">无</div>
                        </div>
                    </div>
                </div>
                <div class="content_add2" v-if="content_add1==='company'">
                    <div class="content_frame">
                        <div class="content_frame_title">月收入/流水</div>
                        <div class="down" @click="down">
                            <span class="down_text"> {{down_text}} </span>
                            <img src="../assets/image/down.png" alt="icon" class="down_icon">
                        </div>
                    </div>
                </div>
            </div>
            <div class="next">下一步</div>
            <div class="gap"></div>
            <div class="mask" @click="maskFun" v-if="mask"></div>
        </div>
        <div class="sum" v-if="sum">
            <div class="zs"></div>
            <div class="ys"></div>
            <div class="zx"></div>
            <div class="yx"></div>
            <div class="sum_close" @click="sum_close">
                <div class="sum_close1"></div>
                <div class="sum_close2"></div>
            </div>
            <div class="sum_money_">
                <div class="sum_money" v-for="i in moneys" :key="i.id" @click="moneyFun(i)">
                    <div class="sum_money_single" :class="{singlePitch:!i.single}"></div>
                    <span class="sum_money_text"> {{i.money}} </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // 职业特征：''|'work'|'company'
                content_add1: '',
                // 资金流水：''|'cash'|'card'
                fundType: '',
                down_text: '请选择',
                common: '',
                moneys: [
                    {
                        single: true,
                        money: '未选择'
                    },
                    {
                        single: true,
                        money: '0-1500'
                    },
                    {
                        single: true,
                        money: '1500-3000'
                    },
                    {
                        single: true,
                        money: '3000-6000'
                    },
                    {
                        single: true,
                        money: '6000-9000'
                    },
                    {
                        single: true,
                        money: '9000-12000'
                    },
                    {
                        single: true,
                        money: '12000以上'
                    }
                ],
                mask: false,
                sum: false
            }
        },
        methods: {
            vocation(flag) {
                this.content_add1 = this.content_add1 === flag ? '' : flag
                this.fundType = ''
                this.common = ''
                this.moneys.map(val => {
                    val.single = true
                })
                this.down_text = '请选择'
            },
            fundFun(fund) {
                this.fundType = this.fundType === fund ? '' : fund
            },
            commonFun(common) {
                this.common = this.common === common ? '' : common
            },
            down() {
                this.mask = true
                this.sum = true
                document.documentElement.style.overflowY = 'hidden'
            },
            maskFun() {
                this.mask = false
                this.sum = false
                document.documentElement.style.overflowY = 'scroll'
            },
            sum_close() {
                this.sum = false
                this.mask = false
                document.documentElement.style.overflowY = 'scroll'
            },
            moneyFun(i) {
                this.moneys.map(val => {
                    val.single = true
                })
                i.single = false
                this.down_text = i.money === '未选择' ? '请选择' : i.money
                this.mask = false
                this.sum = false
                document.documentElement.style.overflowY = 'scroll'
            }
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 5.33333vw;
        color: #fff;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
    }
    .index {
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
    .background1 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
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
        background-image: url(../assets/image/head.png);
        margin: 0 auto;
        padding: 24.93vw 7.535vw 9.73vw 13.395vw;
    }
    .head_count1 {
        width: 11.73vw;
        height: 13.33vw;
        background-image: url(../assets/image/count.png);
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
    .content_frame {
        position: relative;
        width: 90.93vw;
        height: 30vw;
        background-image: url(../assets/image/frame.png);
        margin: 9.66vw auto;
    }
    .content_frame_title {
        height: 10vw;
        font-size: 0.6rem;
        color: #0caef7;
        text-align: center;
        line-height: 10vw;
    }
    .opt {
        display: flex;
        justify-content: center;
    }
    .opt1 {
        width: 30.93vw;
        height: 9.06vw;
        margin: 4.53vw 7.33vw;
        font-size: 0.7rem;
        text-align: center;
        line-height: 9.06vw;
        background-image: url(../assets/image/opt.png);
    }
    .opt2 {
        background-image: url(../assets/image/opt_selection.png);
    }
    .down {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 72.4vw;
        height: 7.6vw;
        border-bottom: 0.025rem solid #0caef7;
        margin: 5vw auto;
    }
    .down_text {
        color: #0caef7;
        font-size: 0.7rem;
    }
    .down_icon {
        width: 4.52vw;
        height: 2.66vw;
    }
    .next {
        position: relative;
        width: 90.67vw;
        height: 13.07vw;
        font-size: 0.8rem;
        text-align: center;
        line-height: 13.07vw;
        background-image: url(../assets/image/button.png);
        margin: 16.4vw auto 0;
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .sum {
        position: fixed;
        top: 41.6vw;
        left: 7.33vw;
        width: 85.33vw;
        height: 94.67vw;
        background-color: #09083c;
        border: 0.025rem solid #0caef7;
        box-shadow: 0 0 0.25rem #0caef7;
    }
    .zs,
    .ys,
    .zx,
    .yx {
        position: absolute;
        width: 2.4vw;
        height: 2.4vw;
        border: 0.1rem solid #0caef7;
    }
    .zs {
        top: -0.025rem;
        left: -0.025rem;
        border-bottom: none;
        border-right: none;
    }
    .ys {
        top: -0.025rem;
        right: -0.025rem;
        border-bottom: none;
        border-left: none;
    }
    .zx {
        bottom: -0.025rem;
        left: -0.025rem;
        border-top: none;
        border-right: none;
    }
    .yx {
        bottom: -0.025rem;
        right: -0.025rem;
        border-top: none;
        border-left: none;
    }
    .sum_close > div {
        position: absolute;
        top: 4vw;
        right: 3vw;
        width: 0.8rem;
        height: 0.1rem;
        background-color: #0caef7;
    }
    .sum_close1 {
        transform: rotate(45deg);
    }
    .sum_close2 {
        transform: rotate(-45deg);
    }
    .sum_money_ {
        width: 72.27vw;
        height: 79.47vw;
        margin: 8vw auto;
        /* margin-top: 8vw; */
    }
    .sum_money {
        display: flex;
        margin-top: 6.3vw;
    }
    .sum_money_single {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 0.025rem solid #0caef7;
        box-sizing: border-box;
        margin-right: 0.6rem;
    }
    .singlePitch {
        border: 7px solid #0caef7;
    }
    .sum_money_text {
        font-size: 0.75rem;
    }
</style>
