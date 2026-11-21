// function cats(arrayOfStrings) {

//     class Cat {

//         constructor(catName, age) {
//             this.catName = catName;
//             this.age = age;
//         }

//         meow() {
//             console.log(`${this.catName}, age ${this.age} says Meow`);
//         }
//     }

//     for (const cat of arrayOfStrings) {

//         const [catName, age] = cat.split(' ');
//         const cats = new Cat(catName, age);  

//         cats.meow();
//     }
// }




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

    arrayOfStrings.forEach(cat => {
        const [catName, age] = cat.split(' ');
        const cats = new Cat(catName, age);

        cats.meow();
    });
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);