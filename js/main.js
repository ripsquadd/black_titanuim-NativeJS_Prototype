//Логика появления и функционирования врагов

const maxEnemy = 6;
let buffEnemy = 0;

const enemyFrame = document.querySelector('.enemy_frame');

class Enemy {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            return true;
        }
        return false;
    }
}
function createEnemyElement(enemy, randomEnemyType) {
    const enemyView = document.createElement('div');
    enemyView.classList.add('enemy_view');

    const enemyHUD = document.createElement('div');
    enemyHUD.classList.add('enemy_hud');

    const enemyNameHUD =  document.createElement('p');
    enemyNameHUD.textContent = `Name: ${enemy.name}`;
    enemyNameHUD.classList.add('enemy_name');

    const enemyHealthHUD = document.createElement('p');
    enemyHealthHUD.textContent = `HP: ${enemy.health}`;
    enemyHealthHUD.classList.add('enemy_health');

    const enemyBody = document.createElement('div');
    enemyBody.classList.add('enemy_body');
    enemyBody.style.backgroundColor = randomEnemyType;

    enemyView.appendChild(enemyHUD);
    enemyHUD.appendChild(enemyNameHUD);
    enemyHUD.appendChild(enemyHealthHUD);
    enemyView.appendChild(enemyBody);

    enemyBody.addEventListener('click', function() {
        const isDead = enemy.takeDamage(20);
        enemyHealthHUD.textContent = `HP: ${enemy.health}`;
        const healthPercentage = (enemy.health / enemy.maxHealth) * 100;

        if (healthPercentage <= 10) {
            enemyHealthHUD.style.color = '#4f4f4f';
        } else if (healthPercentage <= 30) {
            enemyHealthHUD.style.color = '#AA0000';
        } else if (healthPercentage <= 50) {
            enemyHealthHUD.style.color = '#EB4B4B';
        } else {
            enemyHealthHUD.style.color = '#FAFAFA';
        }

        if (isDead) {
            enemyView.remove();
        }
    });

    return enemyView;
}

function enemyGenerator() {
    const enemyNameList = ['Dark', 'Metro', 'Rise', 'Kingdom Come', 'Radiant'];
    const enemyHealthList = [100, 150, 50];
    const enemyTypeList = ['#FFCBDD', '#653F3C', '#A61F3D', '#A8817C', '#E7C4FA'];

    const randomEnemyName = enemyNameList[Math.floor(Math.random() * enemyNameList.length)];
    const randomEnemyHealth = enemyHealthList[Math.floor(Math.random() * enemyHealthList.length)];
    const randomEnemyType = enemyTypeList[Math.floor(Math.random() * enemyHealthList.length)];

    const enemy = new Enemy(randomEnemyName, randomEnemyHealth);
    enemyFrame.appendChild(createEnemyElement(enemy, randomEnemyType));
}

while (buffEnemy < maxEnemy) {
    enemyGenerator();
    buffEnemy++;
}

//Логика HUD
class HeadUpDisplay
{
    constructor(playerHealth,ammoCounter) {
        this.playerHealth = playerHealth;
        this.ammoCounter = ammoCounter;
    }
    makeShot(amount){
        this.ammoCounter -= amount;
        if (this.health <= 0) {
            this.health = 0;
        }
    }
}

function createHeadUpDisplay(hud) {
    const hudView = document.createElement('div');
    hudView.classList.add('player_hud');

    const ammoFrame = document.createElement('div');
    ammoFrame.classList.add('ammo_frame');

    const ammoTitle =  document.createElement('p');
    ammoTitle.textContent = 'AMMO';

    const ammoCounter =  document.createElement('p');
    ammoCounter.textContent = `${hud.ammoCounter}`;
    ammoCounter.classList.add('ammo_counter');

    const healthFrame = document.createElement('div');
    healthFrame.classList.add('health_frame');

    const healthTitle =  document.createElement('p');
    healthTitle.textContent = 'HEALTH';

    const healthCounter =  document.createElement('p');
    healthCounter.textContent = `${hud.playerHealth}`;
    healthCounter.classList.add('health_counter');


    hudView.appendChild(ammoFrame);
    ammoFrame.appendChild(ammoTitle);
    ammoFrame.appendChild(ammoCounter);

    hudView.appendChild(healthFrame);
    healthFrame.appendChild(healthTitle);
    healthFrame.appendChild(healthCounter);

    enemyFrame.addEventListener('click', function() {
        hud.makeShot(1);
        ammoCounter.textContent = `${hud.ammoCounter}`;
    });

    return hudView;
}

function hudGenerator() {
    const hudHealth = 175;
    const hudAmmo = 100;

    const hud = new HeadUpDisplay(hudHealth, hudAmmo);
    document.body.appendChild(createHeadUpDisplay(hud));
}

hudGenerator();


//Логика оружия