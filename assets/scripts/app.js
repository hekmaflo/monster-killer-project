let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;

adjustHealthBars(chosenMaxLife);

const attackHandler = () => {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= monsterDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }
};

const strongAttackHandler = () => {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= monsterDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }
};

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
