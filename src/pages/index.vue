/*
 * @Author: lf
 * @Date: 2018-12-03 17:48:24
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-11 00:25:41
 * @文件说明: 首页页面
 */
<template>
    <div class="index">
        <div class="content">
            <div class="content_frame">
                <div class="content_frame_title"> {{vocation}} </div>
                <div class="opt">
                    <div class="opt1" :class="{opt2:content_add1==='work'}" @click="vocationFun('work')">上班族</div>
                    <div class="opt1" :class="{opt2:content_add1==='company'}" @click="vocationFun('company')">企业主</div>
                </div>
            </div>
            <div class="content_add1" v-if="content_add1==='work'">
                <div class="content_frame">
                    <div class="content_frame_title"> {{fund}} </div>
                    <div class="opt">
                        <div class="opt1" :class="{opt2:fundType==='cash'}" @click="fundFun('cash')">现金流水</div>
                        <div class="opt1" :class="{opt2:fundType==='card'}" @click="fundFun('card')">打卡资金</div>
                    </div>
                </div>
                <div class="content_frame">
                    <div class="content_frame_title"> {{income}} </div>
                    <div class="down" @click="down">
                        <span class="down_text">{{down_text}}</span>
                        <img src="../assets/image/down.png" alt="icon" class="down_icon">
                    </div>
                </div>
                <div class="content_frame">
                    <div class="content_frame_title"> {{common}} </div>
                    <div class="opt">
                        <div class="opt1" :class="{opt2:commonType==='yes'}" @click="commonFun('yes')">有</div>
                        <div class="opt1" :class="{opt2:commonType==='no'}" @click="commonFun('no')">无</div>
                    </div>
                </div>
            </div>
            <div class="content_add2" v-if="content_add1==='company'">
                <div class="content_frame">
                    <div class="content_frame_title">{{income}}</div>
                    <div class="down" @click="down">
                        <span class="down_text"> {{down_text}} </span>
                        <img src="../assets/image/down.png" alt="icon" class="down_icon">
                    </div>
                </div>
            </div>
        </div>
        <l-button @click.native="next1"></l-button>
        <div class="gap"></div>
        <div class="mask" @click="mask1Fun" v-if="mask1">
            <div class="sum">
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
        <transition name="fade">
            <div class="mask" v-if="mask2">
                <div class="tips"> {{tipsAll}} </div>
            </div>
        </transition>

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
                commonType: '',
                vocation: '职业特征',
                fund: '资金类型',
                income: '月收入/流水',
                common: '公积金',
                moneys: [
                    {
                        single: true,
                        money: '未选择',
                        number: '0.0'
                    },
                    {
                        single: false,
                        money: '0-1500',
                        number: '0.4'
                    },
                    {
                        single: false,
                        money: '1500-3000',
                        number: '0.8'
                    },
                    {
                        single: false,
                        money: '3000-6000',
                        number: '1.5'
                    },
                    {
                        single: false,
                        money: '6000-9000',
                        number: '2.3'
                    },
                    {
                        single: false,
                        money: '9000-12000',
                        number: '3.0'
                    },
                    {
                        single: false,
                        money: '12000以上',
                        number: '6.0'
                    }
                ],
                mask1: false,
                mask2: false,
                tipsAll: ''
            }
        },
        methods: {
            // 职业特征选择事件
            vocationFun(flag) {
                if (this.content_add1 === 'work') {
                    this.$store.commit('addNum', {
                        num: '5.0',
                        flag: false
                    })
                } else if (this.content_add1 === 'company') {
                    this.$store.commit('addNum', {
                        num: '10.0',
                        flag: false
                    })
                }
                this.content_add1 = this.content_add1 === flag ? '' : flag
                this.fundType = ''
                this.commonType = ''
                this.moneys.map(val => {
                    val.single = false
                })
                this.moneys[0].single = true
                this.down_text = '请选择'
                if (this.content_add1 === 'work') {
                    this.$store.commit('addNum', {
                        num: '5.0',
                        flag: true
                    })
                } else if (this.content_add1 === 'company') {
                    this.$store.commit('addNum', {
                        num: '10.0',
                        flag: true
                    })
                }
            },
            // 资金类型选择事件
            fundFun(fund) {
                this.fundType = this.fundType === fund ? '' : fund
            },
            // 公积金选择事件
            commonFun(common_) {
                if (this.commonType === 'yes') {
                    this.$store.commit('addNum', {
                        num: '10.0',
                        flag: false
                    })
                }
                this.commonType = this.commonType === common_ ? '' : common_
                if (this.commonType === 'yes') {
                    this.$store.commit('addNum', {
                        num: '10.0',
                        flag: true
                    })
                }
            },
            down() {
                this.mask1 = true
                document.documentElement.style.overflowY = 'hidden'
            },
            mask1Fun() {
                this.mask1 = false
                document.documentElement.style.overflowY = 'scroll'
            },
            sum_close() {
                this.mask1 = false
                document.documentElement.style.overflowY = 'scroll'
            },
            moneyFun(i) {
                this.moneys.map(val => {
                    if (val.single) {
                        // 当single为true时：找到上一个选中的数据，使用它的number来减掉
                        this.$store.commit('addNum', {
                            num: val.number,
                            flag: false
                        })
                    }
                    val.single = false
                })
                // this.moneys.map(val => {
                //     val.single = false
                // })
                i.single = true
                this.down_text = i.money === '未选择' ? '请选择' : i.money
                this.mask = false
                this.sum = false
                document.documentElement.style.overflowY = 'scroll'
                if (i.single) {
                    this.$store.commit('addNum', {
                        num: i.number,
                        flag: true
                    })
                }
            },
            showMask(text) {
                this.mask2 = true
                setTimeout(() => {
                    this.mask2 = ''
                }, 1500)
                this.tipsAll = '请选择' + text
            },
            next1() {
                if (this.content_add1 === '') {
                    this.showMask(this.vocation)
                } else if (this.content_add1 === 'work') {
                    if (this.fundType === '') {
                        this.showMask(this.fund)
                    } else if (this.down_text === '请选择') {
                        this.showMask(this.income)
                    } else if (this.commonType === '') {
                        this.mask2 = true
                        this.tipsAll = '请选择' + this.common
                    } else {
                        sessionStorage.setItem(
                            'index',
                            sessionStorage.getItem('sum')
                        )
                        this.$router.push('/house')
                    }
                } else if (this.content_add1 === 'company') {
                    if (this.down_text === '请选择') {
                        this.mask2 = true
                        this.tipsAll = '请选择' + this.income
                    } else {
                        sessionStorage.setItem(
                            'index',
                            sessionStorage.getItem('sum')
                        )
                        this.$router.push('/house')
                    }
                }
            }
        },
        created() {
            this.$store.commit('clearNum', '000.0')
        }
    }
</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
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
    .sum,
    .tips {
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
    .tips {
        width: 80vw;
        height: 10vw;
        text-align: center;
        line-height: 10vw;
        font-size: 0.7rem;
    }
</style>
