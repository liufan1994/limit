/*
* @Author: lf
* @Date: 2018-12-06 17:04:24
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-11 00:16:34
* @文件说明: 房产情况
*/
<template>
    <div class="house">
        <div class="content">
            <div class="content_frame">
                <div class="content_frame_title">房产情况</div>
                <div class="opt">
                    <div class="opt1" :class="{opt2:content_add1==='yes'}" @click="property('yes')">有</div>
                    <div class="opt1" :class="{opt2:content_add1==='no'}" @click="property('no')">无</div>
                </div>
            </div>
            <div class="content_add1" v-if="content_add1==='yes'">
                <div class="content_frame">
                    <div class="content_frame_title">房产价值</div>
                    <div class="inputDiv">
                        <input type="number" placeholder="请输入" class="inputDiv_input" v-model="inputMoney" @blur="inputFun">
                        <p class="inputDiv_text">万元</p>
                    </div>
                </div>
                <div class="content_frame">
                    <div class="content_frame_title">是否有证</div>
                    <div class="opt">
                        <div class="opt1" :class="{opt2:paperType==='yes'}" @click="paperFun('yes')">有</div>
                        <div class="opt1" :class="{opt2:paperType==='no'}" @click="paperFun('no')">无</div>
                    </div>
                </div>
                <div class="content_frame">
                    <div class="content_frame_title">按揭/全款</div>
                    <div class="opt">
                        <div class="opt1" :class="{opt2:mortgageType==='yes'}" @click="mortgageFun('yes')">按揭</div>
                        <div class="opt1" :class="{opt2:mortgageType==='no'}" @click="mortgageFun('no')">全款</div>
                    </div>
                </div>
            </div>
        </div>
        <l-button @click.native="next2"></l-button>
        <div class="gap"></div>
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
                content_add1: '',
                paperType: '',
                mortgageType: '',
                inputMoney: '',
                _inputMoney: '',
                mask2: false
            }
        },
        methods: {
            // 房产情况选择事件
            property(flag) {
                if (this.content_add1 === 'yes') {
                    this.$store.commit('addNum', {
                        num: '10.0',
                        flag: false
                    })
                }
                this.content_add1 = this.content_add1 === flag ? '' : flag
                this.paperType = ''
                this.mortgageType = ''
                if (this.content_add1 === 'yes') {
                    this.$store.commit('addNum', {
                        num: '10.0',
                        flag: true
                    })
                }
            },
            inputFun() {
                if (this._inputMoney) {
                    let num = (this._inputMoney * 0.7).toFixed(1)
                    this.$store.commit('addNum', {
                        num,
                        flag: false
                    })
                }
                if (this.inputMoney > 1000) {
                    this.inputMoney = 1000
                }
                let num = (this.inputMoney * 0.7).toFixed(1)
                this.$store.commit('addNum', {
                    num,
                    flag: true
                })
                this._inputMoney = this.inputMoney
            },
            paperFun(paper) {
                this.paperType = this.paperType === paper ? '' : paper
            },
            mortgageFun(mortgage) {
                this.mortgageType = this.mortgageType === mortgage ? '' : mortgage
            },
            next2() {
                if (this.content_add1 === '') {
                    this.mask2 = true
                    this.tipsAll = '请选择' + this.vocation
                } else if (this.content_add1 === 'work') {
                    if (this.fundType === '') {
                        this.mask2 = true
                        this.tipsAll = '请选择' + this.fund
                    } else if (this.down_text === '请选择') {
                        this.mask2 = true
                        this.tipsAll = '请选择' + this.income
                    } else if (this.commonType === '') {
                        this.mask2 = true
                        this.tipsAll = '请选择' + this.common
                    } else {
                        this.$router.push('/car')
                    }
                } else if (this.content_add1 === 'company') {
                    if (this.down_text === '请选择') {
                        this.mask2 = true
                        this.tipsAll = '请选择' + this.income
                    } else {
                        this.$router.push('/car')
                    }
                }
            }
        },
        created() {
            this.$store.commit('clearNum', sessionStorage.getItem('index'))
        }
    }
</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
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
    .inputDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 72.4vw;
        height: 7.6vw;
        border-bottom: 0.025rem solid #0caef7;
        margin: 5vw auto;
    }
    .inputDiv_input {
        background-color: transparent;
        border: none;
        font-size: 0.7rem;
        outline: none;
    }
    .inputDiv_input::-webkit-input-placeholder {
        color: #0caef7;
        font-size: 0.7rem;
    }
    .inputDiv_text {
        color: #0caef7;
        font-size: 0.7rem;
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
    .tips {
        width: 80vw;
        height: 10vw;
        text-align: center;
        line-height: 10vw;
        font-size: 0.7rem;
    }
</style>
