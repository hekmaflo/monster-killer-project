let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

const ATTACK_VALUE = 10;

adjustHealthBars(chosenMaxLife);

const attackHandler = () => {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
};

attackBtn.addEventListener("click", attackHandlerd);
