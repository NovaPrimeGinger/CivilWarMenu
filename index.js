class Hero {
    constructor (name, power) {
        this.name = name;
        this.power = power;
    }

    describe() {
        return `${this.name} has ${this.power}`
    }
}

let hero1 = new Hero('Iron Man', 'a super powered exosuit');
let hero2 = new Hero('Captain America', 'super soldier capabilities');
let hero3 = new Hero('Black Widow', 'enahnced spy capablities');
let hero4 = new Hero('Ant Man', 'the power to change size');
let hero5 = new Hero('Scarlet Witch', 'Chaos Magic');
let hero6 = new Hero('Vision', 'advanced synthezoid powers');
let hero7 = new Hero('Black Panther', 'enhanced physical capabilites and kinetic suit');
let hero8 = new Hero('War Machine', 'a super powered exosuit');
let hero9 = new Hero('Winter Soldier', 'super soldier with advanced exo-limb');
let hero10 = new Hero('Falcon', 'an exosuit enabling flight');
let hero11 = new Hero('Hawkeye', 'advanced arachery capabilities');
let hero12 = new Hero('Spider-Man', 'advanced physical capabilities and spider-like powers');

console.log(hero1);

let teamIronMan = [hero1, hero3, hero6, hero7, hero8, hero12];
let teamCaptainAmerica = [hero2, hero4, hero5, hero9, hero10, hero11];

console.log(teamIronMan);
console.log(teamCaptainAmerica);

class Side {
    constructor (name) {
        this.name = name;
        this.heroes = [];
    }

    addHero(hero) {
        if (hero instanceof Hero) {
            this.heroes.push(hero);
        } else {
            throw new Error(`You can only add an instance of hero. Argument is not a hero: ${hero}`);
        }
    }

    describe () {
        return `${this.name} has ${this.heroes.length} heros.`
    }
}


class Menu {
    constructor () {
        this.sides = [];
        this.selectedSide = null;
    }

    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createSide();
                    break;
                case '2':
                    this.viewSide();
                    break;
                case '3':
                    this.deleteSide();
                    break;
                case '4':
                    this.displaySides();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();            
         }
        alert('Goodbye!');
    }
    

    showMainMenuOptions() {
        return prompt(`
        Captain America or Iron Man?
        Create your own Civil War team!
            0) Exit
            1) Create new side
            2) View side
            3) Delete side
            4) Display all sides
            `);
    }

    showSideMenuOptions(sideInfo) {
        return prompt(`
            0) Back
            1) Add hero
            2) Delete hero
            ----------------
            ${sideInfo}
        `);
    }

    displaySides() {
        let sideString = '';
        for (let i = 0; i < this.sides.length; i++) {
            sideString += i + ') ' + this.sides[i].name + '\n';
        }
        alert(sideString);
    }

    deleteSide() {
        let index = prompt('Enter the index of the side you wish to lose Civil War: ');
        if (index > -1 && index < this.sides.length) {
            this.sides.splice(index, 1);
        }
    }

    createSide() {
        let name = prompt('Create a side, Iron Man or Captain America?');
        this.sides.push(new Side(name));
    }

    viewSide() {
        let index = prompt('Enter the index of the side you wish to view:');
        if (index > -1 && index < this.sides.length) {
            this.selectedSide = this.sides[index];
            let description = 'Side Name: ' + this.selectedSide.name + '\n';

            for (let i = 0; i < this.selectedSide.heroes.length; i++) {
                description += i + ') ' + this.selectedSide.heroes[i].name
                 + ' - ' + this.selectedSide.heroes[i].power + '\n';
            }

            let selection = this.showSideMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createHero();
                    break;
                case '2':
                    this.deleteHero();     
            }
        }
    }

    createHero() {
        let name = prompt('Enter name for new hero:');
        let power = prompt('Enter power for new hero:');
        this.selectedSide.heroes.push(new Hero(name, power));
    }

    deleteHero() {
        let index = prompt('Enter the index of the hero you wish to lose: ');
        if (index > -1 && index < this.selectedSide.heroes.length) {
            this.selectedSide.heroes.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

