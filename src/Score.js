
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

export class ScoreElement {
	/**
	 * @param {AssignmentFormElement} assignmentFormElement
	 * @returns {Score}
	 */
	static initializeOn(assignmentFormElement) {
		let current = 0
		let ae = 0
		let min = 0
		let max = 0

		const scoreLabels = [...assignmentFormElement.labels].filter(el => el.innerText === 'Score')
		const scoreLabel = scoreLabels.length ? scoreLabels[0] : null
		if (scoreLabel) {
			const scoreFormGroup = scoreLabel.parentElement
			if (scoreFormGroup) {
				const scoreWrapper = scoreFormGroup.querySelector('.col-sm-9')
				if (scoreWrapper) {
					[current, ae, min, max] = scoreWrapper.innerText.match(new RegExp('\\d+', 'gm'))
				}
			}
		}

		return new Score({ current, ae, min, max })
	}
}
