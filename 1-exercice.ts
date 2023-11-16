// Exercice créer par Copilot de Github
// Exercice 1: Déclarez une variable isBeginner de type boolean et attribuez-lui la valeur true.

let isBeginner: boolean = true;

// Exercice 2: Écrivez une fonction `add` qui prend deux nombres comme paramètres et renvoie leur somme.

function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Exercice 3: Exercice 3: Créez une interface Vehicle avec des propriétés brand, engineType et une méthode startEngine.

interface Vehicle {
    brand: string;
    engineType: string;
    startEngine(): void; // Ceci est une méthode
}

// Exercice 4: Créez une classe Manager qui hérite de Employee et ajoute une méthode delegate.

class Employee {
    // Définie les propriétés de la classe Employee
}

class Manager extends Employee {
    delegate(): void {
        console.log('Je suis le manager');
    }
}

// Exercice 5: Créez une classe abstraite Employee avec une méthode abstraite getSalary et héritez-en dans Manager.

abstract class Employee2 {
    abstract getSalary(): number;
}

class Manager2 extends Employee2 {
    getSalary(): number {
        return 1000;
    }
}