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

class DoggieBuilder {
  constructor (name) {
    this.doggie = new Doggie()
    this.setName(name)
  }
  setName (name) {
    if (nameValidationRegex.test(name)) {
      this.doggie.name = name
    } else {
      console.error('Invalid name format')
    }
  }
  setId (id) {
    this.doggie.id = id
    return this
  }
  setHeight (height) {
    this.doggie.height = height
    return this
  }

  setWeight (weight) {
    this.doggie.weight = weight
    return this
  }

  setOwner (owner) {
    this.doggie.owner = owner
    return this
  }

  setPhone (phone) {
    if (phoneValidationRegex.test(phone)) {
      this.doggie.phone = phone
    } else {
      console.error('Invalid phone number format')
    }
    return this
  }

  setFavoriteToy (favoriteToy) {
    this.doggie.favoriteToy = favoriteToy
    return this
  }

  build () {
    return this.doggie
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
