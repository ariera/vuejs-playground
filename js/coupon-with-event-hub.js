window.EventHub = new Vue();

Vue.component('coupon-with-event-hub', {
	template: `<input type="text" v-model="code" @blur="applied"/>`,
	data(){
		return {
			code: '',
		}
	},
	methods: {
		applied(){
			EventHub.$emit("applied", this.code);
		}
	}
})

const CouponWithEventHub = new Vue({
	el: '#coupon-with-event-hub',
	created(){
		EventHub.$on('applied', (code) => {
			alert("coupon applied "+code+" (with event hub)");
		})
	}
})