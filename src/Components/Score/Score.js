
export class Score {

	constructor({ current = 0, ae = 0, min = 0, max = 0 }) {
		this._current = parseFloat(current)
		this._ae = parseFloat(ae)
		this._min = parseFloat(min)
		this._max = parseFloat(max)
	}


	get current() {
		return this._current
	}

	get ae() {
		return this._ae
	}

	get min() {
		return this._min
	}

	get max() {
		return this._max
	}

	get shouldWarn() {
		return this.current >= this.min
	}

}
