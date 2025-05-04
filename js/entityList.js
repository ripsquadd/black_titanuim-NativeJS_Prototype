// for game entities classes
class Player {
    constructor(name, health, ammo) {
        this.name = name;
        this.health = health;
        this.ammo = ammo;
    }
}

class Enemy {
    constructor(name, health, damage, type) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.type = type; //тут по идее будет пробрасываться путь к картинке, которая заместо прямоугольника будет
    }
}

class Weapon {
    constructor(name, damage, fireRate, ammoUsage) {
        this.name = name;
        this.damage = damage;
        this.fireRate = fireRate;
        this.ammoUsage = ammoUsage;
    }
}

class HeadUpDisplay
{
    constructor(playerName, weaponName, ammoCounter) {
        this.playerName = playerName;
        this.weaponName = weaponName;
        this.ammoCounter = ammoCounter;
    }
}