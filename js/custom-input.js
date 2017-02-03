Vue.component('age', {
	props: ['value'],
	template: `
		<div>
			<input type="text" :value="value" @input="onInput($event.target.value)"/>
			<p v-show="!canDrinkBeer">is not allowed to drink beer</p>
		</div>
	`,
	data(){
		return {
			canDrinkBeer: false,
		}
	},
	mounted(){
		this.canDrinkBeer = (this.value >= 18)
	},
	methods:{
		onInput(newAge){
			this.canDrinkBeer = (newAge >= 18)
			this.$emit('input', newAge);
		}
	}
})
new Vue({
	el: '#custom-input',
	data: {
		user: {
			name: "Philip J. Fry",
			age: "10"
		}
	}
})