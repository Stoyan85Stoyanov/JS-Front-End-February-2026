function cats(arrayOfStrings) {

    class Cat {

        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for (let cat of arrayOfStrings) {
         
        let [catName, age] = cat.split(' ');
        let cats = new Cat(catName, age);  

        cats.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);