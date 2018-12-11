import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        sumNum: 0
    },
    mutations: {
        addNum(state, obj) {
            // -11.1
            let num = obj.num
            let a = -1
            if (obj.flag) a = 1
            let len = num.length
            state.num4 += num[len - 1] * a
            if (state.num4 >= 10) {
                state.num4 = state.num4 + ''
                state.num3 += state.num4[0] * 1
                state.num4 = state.num4[1] * 1
            } else if (state.num4 < 0) {
                state.num4 = state.num4 + ''
                state.num3 -= 1
                state.num4 = 10 - state.num4[1]
            }
            state.num3 += num[len - 3] * a
            if (state.num3 >= 10) {
                state.num3 = state.num3 + ''
                state.num2 += state.num3[0] * 1
                state.num3 = state.num3[1] * 1
            } else if (state.num3 < 0) {
                state.num3 = state.num3 + ''
                state.num2 -= 1
                state.num3 = 10 - state.num3[1]
            }
            // 7000.0
            // '111.1'
            if (len == 4) {
                state.num2 += num[0] * a
            } else if (len == 5) {
                state.num1 += num[0] * a
                state.num2 += num[1] * a
            } else if (len > 5) {
                state.num1 = 9
                state.num2 = 9
                state.num3 = 9
                state.num4 = 9
            }
            if (state.num2 >= 10) {
                state.num2 = state.num2 + ''
                state.num1 += state.num2[0] * 1
                state.num2 = state.num2[1] * 1
            } else if (state.num2 < 0) {
                state.num2 = state.num2 + ''
                state.num1 -= 1
                state.num2 = 10 - state.num2[1]
            }
            if (state.num1 >= 10) {
                state.num1 = 9
                state.num2 = 9
                state.num3 = 9
                state.num4 = 9
            }
            let sum =
                state.num1 * 100 +
                state.num2 * 10 +
                state.num3 * 1 +
                state.num4 * 0.1
            sessionStorage.setItem('sum', sum.toFixed(1))
            console.log(sum)
        },
        clearNum(state, num) {
            num = String(num)
            if (num.length === 3) num = '00' + num
            else if (num.length === 4) num = '0' + num
            state.num1 = Number(num[0])
            state.num2 = Number(num[1])
            state.num3 = Number(num[2])
            state.num4 = Number(num[4])
        }
    }
})
