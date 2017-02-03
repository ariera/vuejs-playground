Vue.component('modal', {
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
				<slot name="header"></slot>
		      </p>
		      <button class="delete" @click="close"></button>
		    </header>

		    <section class="modal-card-body">
		      <slot></slot>
		    </section>

		    <footer class="modal-card-foot">
		      <slot name="footer">
			      <a class="button is-success" @click="close">Save changes</a>
			      <a class="button" @click="close">Cancel</a>
				  (Default content)
		      </slot>
		    </footer>
		  </div>
		</div>
	`,
	methods: {
		close(){
			this.$emit('close');
		}
	}
})



new Vue({
	el: '#modal',
	data: {
		showModal: false
	}
})


