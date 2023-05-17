const NAME_VALIDATION_REGEX = /^[а-яіґїє ,.'-]+$/i
const PHONE_VALIDATION_REGEX =
	/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

class Doggie {
	public id = ''
	private _name = ''
	public height = 0
	public weight = 0
	private _phone = ''
	private _owner = ''
	public favoriteToy = ''

	public get name() {
		return this._name
	}

	public set name(name: string) {
		if (this.nameValidation(name, 'Name')) {
			this._name = name
		}
	}

	public get owner() {
		return this._owner
	}

	public set owner(ownerName: string) {
		if (this.nameValidation(ownerName, 'Owner')) {
			this._owner = ownerName
		}
	}

	public get phone() {
		return this._phone
	}

	public set phone(phone: string) {
		if (this.phoneValidation(phone)) {
			this._phone = phone
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

const dog2 = new DoggieBuilder('Сірко')
	.setHeight(40)
	.setWeight(40)
	.setOwner('Микола')
	.build()
console.log(dog2)

const dog3 = new DoggieBuilder('Чорнищ')
	.setHeight(50)
	.setWeight(20)
	.setOwner('Ярослав')
	.setPhone('0687755643')
	.build()
console.log(dog3)
