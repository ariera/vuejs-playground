Vue.component('coupon', {
	template: `<input type="text" v-model="code" @blur="applied"/>`,
	data(){
		return {
			code: '',
		}
	},
	methods: {
		applied(){
			this.$emit("applied", this.code);
		}
	}
})

const Coupon = new Vue({
	el: '#coupon',
	methods:{
		couponApplied(code){
			alert("coupon applied "+code);
		}
	},
})