const nameValidationRegex = /^[а-яіґїє ,.'-]+$/i
const phoneValidationRegex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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

    build() {
      // опишіть функцію, використайте nameValidationRegex і phoneValidationRegex
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