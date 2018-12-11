/*
 * @Author: lf
 * @Date: 2018-12-10 16:04:48
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-11 17:33:59
 * @文件说明: 个人信息
 */
<template>
    <div class="infor">
        <div class="content">
            <div class="content_frame1">
                <div class="content_frame_title">个人信息</div>
                <div class="inputDiv1">
                    <p class="inputDiv_text"> {{name}} </p>
                    <input type="text" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" maxlength="4" placeholder="请填写您的姓名" class="inputDiv_input1" v-model="inputName">
                </div>
                <div class="inputDiv1">
                    <p class="inputDiv_text"> {{phone}} </p>
                    <input type="number" placeholder="请填写您的手机号" class="inputDiv_input1" v-model="inputPhone">
                </div>
                <div class="inputDiv1">
                    <p class="inputDiv_text"> {{code}} </p>
                    <input type="number" placeholder="请填写短信验证码" class="inputDiv_input1" v-model="inputCode">
                    <div class="inputDiv_line"></div>
                    <p class="inputDiv_text">发送验证码</p>
                </div>
            </div>
        </div>
        <l-button btnText="生成方案" @click.native="complete"></l-button>
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
                inputName: '',
                inputPhone: '',
                inputCode: '',
                name: '姓名',
                phone: '手机号',
                code: '验证码',
                mask2: false
            }
        },
        methods: {
            showMask(text) {
                this.mask2 = true
                setTimeout(() => {
                    this.mask2 = ''
                }, 1500)
                this.tipsAll = '请输入' + text
            },
            complete() {
                if (this.inputName === '') {
                    this.showMask(this.name)
                } else if (this.inputPhone === '') {
                    this.showMask(this.phone)
                } else if (this.inputPhone.length != 11) {
                    this.showMask('正确的手机号')
                } else if (this.inputCode === '') {
                    this.showMask(this.code)
                }
            }
        },
        created() {
            this.$store.commit('clearNum', sessionStorage.getItem('warranty'))
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
    .content_frame1 {
        position: relative;
        width: 90.93vw;
        height: 80vw;
        background-image: url(../assets/image/frame_big.png);
        margin: 9.66vw auto;
    }
    .content_frame_title {
        height: 10vw;
        font-size: 0.6rem;
        color: #0caef7;
        text-align: center;
        line-height: 10vw;
    }
    .inputDiv1 {
        display: flex;
        align-items: center;
        width: 77.33vw;
        height: 7.46vw;
        border-bottom: 0.025rem solid #0caef7;
        margin: 12vw auto;
    }
    .inputDiv_text {
        width: 20vw;
        color: #0caef7;
        font-size: 0.7rem;
    }
    .inputDiv_input1 {
        width: 34vw;
        background-color: transparent;
        border: none;
        font-size: 0.7rem;
        outline: none;
    }
    .inputDiv_line {
        width: 0.27vw;
        height: 6vw;
        background-color: #fff;
        margin-right: 3vw;
    }
    .inputDiv_input1::-webkit-input-placeholder {
        color: #fff;
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
        position: relative;
        width: 80vw;
        height: 10vw;
        text-align: center;
        line-height: 10vw;
        font-size: 0.7rem;
        margin: 0 auto;
        background-color: #09083c;
        border: 0.025rem solid #0caef7;
        box-shadow: 0 0 0.25rem #0caef7;
    }
</style>
