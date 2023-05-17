const NAME_VALIDATION_REGEX = /^[а-яіґїє ,.'-]+$/i
const PHONE_VALIDATION_REGEX =
	/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

class Doggie {
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

class DoggieBuilder extends Doggie {
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

const dog1 = new DoggieBuilder('Шарик').setHeight(60).setWeight(30).build()
console.log(dog1)
console.log('dog1:', dog1.toObject())
console.log()

const dog2 = new DoggieBuilder('Сірко')
	.setHeight(40)
	.setWeight(40)
	.setOwner('Микола')
	.build()
console.log(dog2)
console.log('dog2:', dog2.toObject())
console.log()

const dog3 = new DoggieBuilder('Чорнищ')
	.setHeight(50)
	.setWeight(20)
	.setOwner('Ярослав')
	.setPhone('0687755643')
	.build()
console.log(dog3)
console.log('dog3:', dog3.toObject())
