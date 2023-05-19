import { Doggie } from './Doggie'

export class DoggieBuilder extends Doggie {
	private doggie!: Doggie

	constructor(name: string) {
		super()

		this.reset()

		this.doggie.name = name
	}

	setHeight(height: number) {
		this.doggie.height = height

		return this
	}

	setWeight(weight: number) {
		this.doggie.weight = weight

		return this
	}

	setOwner(ownerName: string) {
		this.doggie.owner = ownerName

		return this
	}

	setPhone(phone: string) {
		this.doggie.phone = phone

		return this
	}

	build() {
		const result = this.doggie

		this.reset()

		return result
	}

	private reset() {
		this.doggie = new Doggie()
	}
}
