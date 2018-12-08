<template>
    <div class="next">
        {{btnText}}
    </div>
</template>
<script>
    export default {
        props: {
            btnText: {
                type: String,
                default: '下一步'
            }
        }
    }
</script>

<style>
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
</style>
