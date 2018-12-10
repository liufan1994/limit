/*
 * @Author: lf
 * @Date: 2018-12-10 14:03:29
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-10 16:10:20
 * @文件说明:车产情况
 */
<template>
    <div class="car">
        <div class="content">
            <div class="content_frame">
                <div class="content_frame_title">车产情况</div>
                <div class="opt">
                    <div class="opt1" :class="{opt2:content_add1==='yes'}" @click="carFun('yes')">有</div>
                    <div class="opt1" :class="{opt2:content_add1==='no'}" @click="carFun('no')">无</div>
                </div>
            </div>
            <div class="content_add1" v-if="content_add1==='yes'">
                <div class="content_frame">
                    <div class="content_frame_title">车产价值</div>
                    <div class="inputDiv">
                        <input type="number" placeholder="请输入" class="inputDiv_input" v-model="inputMoney" @blur="inputFun">
                        <p class="inputDiv_text">万元</p>
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
        <l-button @click.native="next3"></l-button>
        <div class="gap"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                content_add1: '',
                mortgageType: '',
                inputMoney: '',
                _inputMoney: ''
            }
        },
        methods: {
            // 车产情况选择事件
            carFun(flag) {
                if (this.content_add1 === 'yes') {
                    this.$store.commit('addNum', {
                        num: '5.0',
                        flag: false
                    })
                }
                this.content_add1 = this.content_add1 === flag ? '' : flag
                this.mortgageType = ''
                if (this.content_add1 === 'yes') {
                    this.$store.commit('addNum', {
                        num: '5.0',
                        flag: true
                    })
                }
            },
            inputFun() {
                if (this._inputMoney) {
                    let num = (this._inputMoney * 0.6).toFixed(1)
                    this.$store.commit('addNum', {
                        num,
                        flag: false
                    })
                }
                if (this.inputMoney > 1000) {
                    this.inputMoney = 1000
                }
                let num = (this.inputMoney * 0.6).toFixed(1)
                this.$store.commit('addNum', {
                    num,
                    flag: true
                })
                this._inputMoney = this.inputMoney
            },
            mortgageFun(mortgage) {
                this.mortgageType = this.mortgageType === mortgage ? '' : mortgage
            },
            next3() {
                this.$router.push('/warranty')
            },
            created() {}
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
</style>
