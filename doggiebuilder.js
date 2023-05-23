const nameValidationRegex = /^[а-яіґїє ,.'-]+$/i
const phoneValidationRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

class DoggieBuilder {
    id = '';
    name = '';
    height = 0;
    weight = 0;
    phone = '';
    owner = '';
    favoriteToy = '';

    constructor(name) {
        this.name = name;
    }

    //опишіть setters для полів класу
    setHeight(height) {
        this.height = height;
        return this;
    }
    setWeight(weight) {
        this.weight = weight;
        return this;
    }
    setPhone(phone) {
        this.phone = phone;
        return this;
    }
    setOwner(owner) {
        this.owner = owner;
        return this;
    }
    setFavoriteToy(favoriteToy) {
        this.favoriteToy = favoriteToy;
        return this;
    }

    build() {
        // опишіть функцію, використайте nameValidationRegex і phoneValidationRegex
        if (!nameValidationRegex.test(this.name)) {
            throw new Error('Name is not valid')
        }
        if (!phoneValidationRegex.test(this.phone) && this.phone !== '') {
            throw new Error('Phone is not valid')
        }
        return this
    }
}

const dog1 = new DoggieBuilder('Шарик')
    .setHeight(60)
    .setWeight(30)
    .build();
console.log(dog1);

const dog2 = new DoggieBuilder('Сірко')
    .setHeight(40)
    .setWeight(40)
    .setOwner('Микола')
    .build();
console.log(dog2);

const dog3 = new DoggieBuilder('Чорнищ')
    .setHeight(50)
    .setWeight(20)
    .setOwner('Ярослав')
    .setPhone('0687755643')
    .build();
console.log(dog3);

const dog4 = new DoggieBuilder('Білгородик') //Білгородик1337   //Error by name example
    //.setPhone('')                                             //Error by phone example
    //.setPhone('068+775+5643')                                 //Error by phone example
    .setPhone('(123.456-7890')
    .build();
console.log(dog4);