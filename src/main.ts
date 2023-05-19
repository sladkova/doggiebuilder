import { DoggieBuilder } from './Doggie/Doggie.builder'

function main() {
	const dog1 = new DoggieBuilder('Шарик').setHeight(60).setWeight(30).build()
	console.log(dog1)
	console.log('dog1:', dog1.toObject())

	const dog2 = new DoggieBuilder('Сірко')
		.setHeight(40)
		.setWeight(40)
		.setOwner('Микола')
		.build()
	console.log(dog2)
	console.log('dog2:', dog2.toObject())

	const dog3 = new DoggieBuilder('Чорнищ')
		.setHeight(50)
		.setWeight(20)
		.setOwner('Ярослав')
		.setPhone('0687755643')
		.build()
	console.log(dog3)
	console.log('dog3:', dog3.toObject())
}

main()
