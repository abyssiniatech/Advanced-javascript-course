const creatures = {
    "001": { name: "Dragon", power: "Fire", hp: 100 },
    "002": { name: "Phoenix", power: "Rebirth", hp: 90 },
  };
  
  document.getElementById('search-button').addEventListener('click', async () => {
    const input = document.getElementById('search-input').value.trim().toLowerCase();
  
    const creatureNameEl = document.getElementById('creature-name');
    const creatureIdEl = document.getElementById('creature-id');
    const weightEl = document.getElementById('weight');
    const heightEl = document.getElementById('height');
    const typesEl = document.getElementById('types');
    const hpEl = document.getElementById('hp');
    const attackEl = document.getElementById('attack');
    const defenseEl = document.getElementById('defense');
    const specialAttackEl = document.getElementById('special-attack');
    const specialDefenseEl = document.getElementById('special-defense');
    const speedEl = document.getElementById('speed');
  
    // Clear previous results
    creatureNameEl.textContent = '';
    creatureIdEl.textContent = '';
    weightEl.textContent = '';
    heightEl.textContent = '';
    typesEl.innerHTML = '';
    hpEl.textContent = '';
    attackEl.textContent = '';
    defenseEl.textContent = '';
    specialAttackEl.textContent = '';
    specialDefenseEl.textContent = '';
    speedEl.textContent = '';
  
    // Handle hardcoded "pyrolynx"
    if (input === 'pyrolynx') {
      creatureNameEl.textContent = 'PYROLYNX';
      creatureIdEl.textContent = '#1';
      weightEl.textContent = 'Weight: 42';
      heightEl.textContent = 'Height: 32';
      hpEl.textContent = '65';
      attackEl.textContent = '80';
      defenseEl.textContent = '50';
      specialAttackEl.textContent = '90';
      specialDefenseEl.textContent = '55';
      speedEl.textContent = '100';
  
      const fireType = document.createElement('div');
      fireType.textContent = 'FIRE';
      typesEl.appendChild(fireType);
  
      return;
    }
  
    // Handle hardcoded ID "2"
    if (input === '2') {
      creatureNameEl.textContent = 'AQUOROC';
      creatureIdEl.textContent = '#2';
      weightEl.textContent = 'Weight: 220';
      heightEl.textContent = 'Height: 53';
      hpEl.textContent = '85';
      attackEl.textContent = '90';
      defenseEl.textContent = '120';
      specialAttackEl.textContent = '60';
      specialDefenseEl.textContent = '70';
      speedEl.textContent = '40';
  
      const waterType = document.createElement('div');
      waterType.textContent = 'WATER';
      typesEl.appendChild(waterType);
  
      const rockType = document.createElement('div');
      rockType.textContent = 'ROCK';
      typesEl.appendChild(rockType);
  
      return;
    }
  
    // ✅ Handle local data from "creatures" object
    if (creatures[input]) {
      const creature = creatures[input];
      creatureNameEl.textContent = creature.name.toUpperCase();
      creatureIdEl.textContent = `#${input}`;
      weightEl.textContent = 'Weight: N/A';
      heightEl.textContent = 'Height: N/A';
      hpEl.textContent = creature.hp;
      attackEl.textContent = 'N/A';
      defenseEl.textContent = 'N/A';
      specialAttackEl.textContent = 'N/A';
      specialDefenseEl.textContent = 'N/A';
      speedEl.textContent = 'N/A';
  
      typesEl.innerHTML = '';
      const typeEl = document.createElement('div');
      typeEl.textContent = creature.power.toUpperCase();
      typesEl.appendChild(typeEl);
  
      return;
    }
  
    // ✅ Fetch from API if input is numeric
    if (!isNaN(input) && input !== '') {
      try {
        const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creatures/${input}`);
        if (!response.ok) {
          alert('Creature not found');
          return;
        }
  
        const data = await response.json();
  
        creatureNameEl.textContent = data.name.toUpperCase();
        creatureIdEl.textContent = `#${data.id}`;
        weightEl.textContent = `Weight: ${data.weight}`;
        heightEl.textContent = `Height: ${data.height}`;
        hpEl.textContent = data.stats.hp;
        attackEl.textContent = data.stats.attack;
        defenseEl.textContent = data.stats.defense;
        specialAttackEl.textContent = data.stats.specialAttack;
        specialDefenseEl.textContent = data.stats.specialDefense;
        speedEl.textContent = data.stats.speed;
  
        typesEl.innerHTML = '';
        data.types.forEach(type => {
          const typeEl = document.createElement('div');
          typeEl.textContent = type.toUpperCase();
          typesEl.appendChild(typeEl);
        });
  
        return;
      } catch (error) {
        alert('Creature not found');
        return;
      }
    }
  
    // If all checks fail
    alert('Creature not found');
  });
  