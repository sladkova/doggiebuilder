const nameValidationRegex = /^[а-яіґїє ,.'-]+$/i;
const phoneValidationRegex =
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

class Dog {
  constructor(builded) {
    this.name = builded.name;
    this.height = builded.height;
    this.weight = builded.weight;
    this.phone = builded.phone;
    this.owner = builded.owner;
    this.favoriteToy = builded.favoriteToy;
  }
  static get DoggieBuilder() {
    class DoggieBuilder {
      id = "";
      name = "";
      height = 0;
      weight = 0;
      phone = "";
      owner = "";
      favoriteToy = "";

      constructor(name) {
        nameValidationRegex.test(name)
          ? (this.name = name)
          : console.log("name error");
      }
      setHeight(height) {
        this.height = height;
        return this;
      }

      setWeight(weight) {
        this.weight = weight;
        return this;
      }

      setPhone(phone) {
        phoneValidationRegex.test(phone)
          ? (this.phone = phone)
          : console.log("phone error");
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
        return new Dog(this);
      }
    }
    return DoggieBuilder;
  }
}

const dog1 = new Dog.DoggieBuilder("Шарик").setHeight(60).setWeight(30).build();
console.log(dog1);

const dog2 = new Dog.DoggieBuilder("Сірко")
  .setHeight(40)
  .setWeight(40)
  .setOwner("Микола")
  .build();
console.log(dog2);

const dog3 = new Dog.DoggieBuilder("Чорнищ")
  .setHeight(50)
  .setWeight(20)
  .setOwner("Ярослав")
  .setPhone("0687755643")
  .build();
console.log(dog3);
