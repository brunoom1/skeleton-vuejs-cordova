import app from './App'

import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from './Components/Home.vue';

export default {
	initializeVue () {
		const routes = [
			{ path: '/', component: HomeComponent }
		];

		const router = new VueRouter({
			routes
		});

		const vueapp = new Vue({
			el: '#app',
			data: {
				currentRoute: window.location.pathname
			},
			computed: {
				ViewComponent () {
					return routes[this.currentRoute] || NotFound
				}
			},
			render (h) { return h(this.ViewComponent) }
		});

		app.vue = vueapp;
		app.router = router;
	},

	initializeApp () {
	    document.addEventListener('deviceready', function () { app.initialize() }, false);
	},

	run () {
		this.initializeApp();
	}
}