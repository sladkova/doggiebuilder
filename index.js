const nameValidationRegex = /^[а-яіґїє ,.'-]+$/i
const phoneValidationRegex =
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

class Doggie {
  constructor () {
    this.id = ''
    this.name = ''
    this.height = 0
    this.weight = 0
    this.phone = ''
    this.owner = ''
    this.favoriteToy = ''
  }
}

class DoggieBuilder extends Doggie {
  constructor (name) {
    super()
    this.name = name
  }

  setHeight (height) {
    this.height = height
    return this
  }

  setWeight (weight) {
    this.weight = weight
    return this
  }

  setOwner (owner) {
    this.owner = owner
    return this
  }

  setPhone (phone) {
    if (phoneValidationRegex.test(phone)) {
      this.phone = phone
    } else {
      console.log('Invalid phone number format')
    }
    return this
  }

  build () {
    if (!nameValidationRegex.test(this.name)) {
      console.log('Invalid name format')
      return null
    }
    return this
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
