import {
	NAME_VALIDATION_REGEX,
	PHONE_VALIDATION_REGEX
} from '../config/validations.config'

export class Doggie {
	public id = ''
	#name = ''
	public height = 0
	public weight = 0
	#phone = ''
	#owner = ''
	public favoriteToy = ''

	public get name() {
		return this.#name
	}

	public set name(name: string) {
		if (this.nameValidation(name, 'Name')) {
			this.#name = name
		}
	}

	public get owner() {
		return this.#owner
	}

	public set owner(ownerName: string) {
		if (this.nameValidation(ownerName, 'Owner')) {
			this.#owner = ownerName
		}
	}

	public get phone() {
		return this.#phone
	}

	public set phone(phone: string) {
		if (this.phoneValidation(phone)) {
			this.#phone = phone
		}
	}

	private nameValidation(name: string, type: string) {
		if (!NAME_VALIDATION_REGEX.test(name)) {
			throw new Error(`${type} is not valid`)
		}

		return true
	}

	private phoneValidation(phone: string) {
		if (!PHONE_VALIDATION_REGEX.test(phone)) {
			throw new Error('Phone is not valid')
		}

		return true
	}

	toObject() {
		return {
			id: this.id,
			name: this.#name,
			height: this.height,
			weight: this.weight,
			phone: this.#phone,
			owner: this.#owner,
			favoriteToy: this.favoriteToy
		}
	}
}
