/*
 * @Author: lf
 * @Date: 2018-12-10 14:21:17
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-10 16:08:09
 * @文件说明:保单情况
 */
<template>
    <div class="warranty">
        <div class="content">
            <div class="content_frame">
                <div class="content_frame_title">保单情况</div>
                <div class="opt">
                    <div class="opt1" :class="{opt2:content_add1==='yes'}" @click="warrantyFun('yes')">有</div>
                    <div class="opt1" :class="{opt2:content_add1==='no'}" @click="warrantyFun('no')">无</div>
                </div>
            </div>
            <div class="content_add1" v-if="content_add1==='yes'">
                <div class="content_frame">
                    <div class="content_frame_title">缴费期限</div>
                    <div class="down" @click="down">
                        <span class="down_text"> {{down_text}} </span>
                        <img src="../assets/image/down.png" alt="icon" class="down_icon">
                    </div>
                </div>
            </div>
        </div>
        <l-button @click.native="next4"></l-button>
        <div class="gap"></div>
        <div class="mask" @click="maskFun" v-if="mask">
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
                    <div class="sum_money" v-for="i in moneys" :key="i.money" @click="moneyFun(i)">
                        <div class="sum_money_single" :class="{singlePitch:i.single}"></div>
                        <span class="sum_money_text"> {{i.money}} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                content_add1: '',
                down_text: '请选择',
                moneys: [
                    {
                        single: true,
                        money: '未选择'
                    },
                    {
                        single: false,
                        money: '缴费期满1年'
                    },
                    {
                        single: false,
                        money: '缴费期满1-2年'
                    },
                    {
                        single: false,
                        money: '缴费期满2-3年'
                    },
                    {
                        single: false,
                        money: '缴费期满3年以上'
                    }
                ],
                mask: false,
                sum: false
            }
        },
        methods: {
            // 职业特征选择事件
            warrantyFun(flag) {
                if (this.content_add1 === 'yes') {
                    this.$store.commit('addNum', {
                        num: '5.0',
                        flag: false
                    })
                }
                this.content_add1 = this.content_add1 === flag ? '' : flag
                if (this.content_add1 === 'yes') {
                    this.$store.commit('addNum', {
                        num: '5.0',
                        flag: true
                    })
                }
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
                    val.single = false
                })
                i.single = true
                this.down_text = i.money === '未选择' ? '请选择' : i.money
                this.mask = false
                this.sum = false
                document.documentElement.style.overflowY = 'scroll'
            },
            next4() {
                this.$router.push('/infor')
            }
        }
    }
</script>
<style>
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
    .mask {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .sum {
        position: relative;
        margin: 0 auto;
        width: 85.33vw;
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
        margin: 8vw auto;
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
