/*
Create a Lightning Object pool and then get the component from the pool.

By default we create two objects, with expectations that one is used at a time

Learn more about object pools
https://egghead.io/blog/object-pool-design-pattern
*/

const pools = new Map();

function get(key) {
  if (pools.has(key)) {
    const pool = pools.get(key);
    let index = pool.index;

    if (index >= pool.components.length) {
      index = 0;
    }
    pool.index = index + 1;

    return pool.components[index];
  }

  return false;
}

function clear() {
  pools.clear();
}

function create({ name, component, stage, size = 2 }) {
  if (pools.has(name)) {
    return get(name);
  }

  component = component || { type: name };
  const components = [];
  for (let i = 0; i < size; i++) {
    components.push(stage.c(component));
  }

  pools.set(name, {
    index: 0,
    components
  });

  return get(name);
}

export default {
  get,
  create,
  clear
};
