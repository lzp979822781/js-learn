import {makeAutoObservable} from 'mobx';

export default class CouterStore {
	constructor() {
		this.count = 0;
		makeAutoObservable(this);
	}

	increment = () => {
		this.count += 1;
	}

	decrement = () => {
		this.count -= 1;
	}
}