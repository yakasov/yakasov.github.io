const goal = [
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
  "11",
];
const goalSum = 64;
var generations = [];

const MAX_GENERATIONS = 1000;
const POPULATION_SIZE = 64;
const CHROMOSOME_LENGTH = 32;
const MUTATION_COUNT = 1;

async function part1Main() {
  await main(true);
}

async function main(outputToHTML = false) {
  let current_generation = 0;
  generations.push(generate_population(POPULATION_SIZE, CHROMOSOME_LENGTH));

  while (current_generation < MAX_GENERATIONS) {
    generations[current_generation].sort(sortChromosomes);
    if (innerSum(generations[current_generation][0]) == 64) {
      break;
    }

    let new_population = [];
    for (let i = 0; i < POPULATION_SIZE / 2; i++) {
      if (i % 2 == 0) {
        new_population = new_population.concat(
          crossover(
            generations[current_generation][i],
            generations[current_generation][i + 1]
          )
        );
      }
    }

    new_population = new_population.map(mutate);
    generations.push(new_population);
    current_generation++;

    if (outputToHTML) {
      let el1 = document.getElementById("part1output");
      el1.innerHTML = `Current generation: ${current_generation}<br>Best match: ${innerSum(
        generations[current_generation][0]
      )}`;
      await new Promise((r) => setTimeout(r, 1));
    }
  }

  const output = `Best match = <br>${generations
    .at(-1)[0]
    .toString()
    .replaceAll(",", "<br>")}`;
  if (outputToHTML) {
    let el1 = document.getElementById("part1output");
    el1.innerHTML = output;
  }
  console.log(output.replaceAll("<br>", ", "));
}

function innerSum(c) {
  return c.reduce((a, b) => a + parseInt(b[0]) + parseInt(b[1]), 0);
}

function sortChromosomes(ca, cb) {
  return innerSum(cb) - innerSum(ca);
}

function generate_population(p, c) {
  let temp_pop = [];
  for (let _ = 0; _ < p; _++) {
    let new_p = [];

    for (let _ = 0; _ < c; _++) {
      const new_c = `${Math.round(Math.random())}${Math.round(Math.random())}`;
      new_p.push(new_c);
    }

    temp_pop.push(new_p);
  }

  return temp_pop;
}

function crossover(cs1, cs2) {
  let return_array = [];
  for (let _ = 0; _ < 4; _++) {
    const r = Math.round(Math.random * (CHROMOSOME_LENGTH - 1));
    return_array.push(cs1.slice(0, r).concat(cs2.slice(r, CHROMOSOME_LENGTH)));
  }

  return return_array;
}

function mutate(cs) {
  let previous_mutations = [];
  for (let _ = 0; _ < MUTATION_COUNT; _++) {
    if (previous_mutations.length == CHROMOSOME_LENGTH) break;

    let r = Math.round(Math.random() * (CHROMOSOME_LENGTH - 1));
    while (previous_mutations.includes(r)) {
      r = Math.round(Math.random() * (CHROMOSOME_LENGTH - 1));
    }
    previous_mutations.push(r);

    cs[r] = `${Math.round(Math.random())}${Math.round(Math.random())}`;
  }

  return cs;
}
