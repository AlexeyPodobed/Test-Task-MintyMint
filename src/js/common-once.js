import header from './components/header';

import { sliderInit } from './components/slider';
import { modalsInit } from './components/modals';

export default function commonScripts(){

	header.init();

	sliderInit();
	modalsInit();

}

