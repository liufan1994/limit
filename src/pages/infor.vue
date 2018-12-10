/*
 * @Author: lf
 * @Date: 2018-12-10 16:04:48
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-10 17:07:16
 * @文件说明: 个人信息
 */
<template>
    <div class="infor">
        <div class="content">
            <div class="content_frame">
                <div class="content_frame_title">个人信息</div>
                <div class="inputDiv">
                    <p class="inputDiv_text">姓名</p>
                    <input type="text" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" maxlength="4" placeholder="请填写您的姓名" class="inputDiv_input" v-model="inputName">
                </div>
                <div class="inputDiv">
                    <p class="inputDiv_text">手机号</p>
                    <input type="number" placeholder="请填写您的手机号" class="inputDiv_input" v-model="inputPhone">
                </div>
                <div class="inputDiv">
                    <p class="inputDiv_text">验证码</p>
                    <input type="number" placeholder="请填写短信验证码" class="inputDiv_input" v-model="inputCode">
                    <div class="inputDiv_line"></div>
                    <p class="inputDiv_text">发送验证码</p>
                </div>
            </div>
        </div>
        <l-button btnText="生成方案"></l-button>
        <div class="gap"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                inputName: '',
                inputPhone: '',
                inputCode: ''
            }
        },
        methods: {}
    }
</script>
<style>
    .content_frame {
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
    .inputDiv {
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
    .inputDiv_input {
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
    .inputDiv_input::-webkit-input-placeholder {
        color: #fff;
        font-size: 0.7rem;
    }
</style>
