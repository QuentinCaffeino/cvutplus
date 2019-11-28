
import EventEmitter from 'eventemitter3'
import { Assignment } from './Assignment'
import { ScoreElement } from '../Score/ScoreElement'


export class AssignmentFormElement extends EventEmitter {

  constructor({ element }) {
    super()
    this._element = element
    this.initializeSubmitButton()
  }


  get element() {
    return this._element
  }

  get labels() {
    return this.element.querySelectorAll('.control-label')
  }

  initializeSubmitButton() {
    const originalSubmitButton = AssignmentFormElement.getSubmitButton(this)
    const clonedElement = originalSubmitButton.cloneNode(true)
    originalSubmitButton.parentElement.replaceChild(clonedElement, originalSubmitButton)
    if (clonedElement) {
      clonedElement.addEventListener('click', event => {
        event.preventDefault()
        this.emit('submit', doSubmit => doSubmit && originalSubmitButton.click(), event)
      })
    }
  }

	/**
	 * @param {AssignmentFormElement} assignmentFormElement
	 */
  static getSubmitButton(assignmentFormElement) {
    return assignmentFormElement.element.querySelector('a.btn.btn-default.btn-secondary.fileinput-upload.fileinput-upload-button')
  }

	/**
	 * @param {Document|Element|Node} context
	 * @returns {Assignment}
	 */
  static initializeOn(context) {
    const element = context.querySelector('#assignment_tabsContent > .tab-pane.active > form, .panel > .panel-collapse.collapse.in form')
    const assignmentFormElement = new this({ element })
    const score = ScoreElement.initializeOn(assignmentFormElement)
    assignmentFormElement.on('submit', doSubmit => {
      if (score.shouldWarn) {
        doSubmit(window.confirm('You sure you want to submit?'))
      } else {
        doSubmit(true)
      }
    })
    return new Assignment({ score })
  }

}
