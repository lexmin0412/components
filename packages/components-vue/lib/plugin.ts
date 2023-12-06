import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@lexmin0412/wc/loader';

export const ComponentLibrary: Plugin = {
	async install() {
		applyPolyfills().then(() => {
			defineCustomElements();
		});
	},
};
