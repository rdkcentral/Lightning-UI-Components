export function safeStringify(originalObj) {
  const obj = { ...originalObj };

  const seen = new WeakSet(); // WeakSet is used to store references to objects we've processed

  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular]'; // Replace circular references with a string
      }
      seen.add(value); // Mark this object as seen
    }
    return value; // Return the value as is
  });
}

export function createSharedReferences(obj = {}) {
  const seenObjects = new Map(); // Store original reference -> shared reference

  function process(currentObj) {
    const queue = [currentObj]; // Use a queue for breadth-first traversal

    while (queue.length > 0) {
      const current = queue.shift();

      for (const key in current) {
        if (current.hasOwnProperty(key)) {
          const value = current[key];
          if (typeof value === 'object' && value !== null) {
            const cacheKey = safeStringify(value);
            if (seenObjects.has(cacheKey)) {
              // Replace duplicate reference with the shared reference
              current[key] = seenObjects.get(cacheKey);

            } else {
              // Add child objects to the queue for processing
              seenObjects.set(cacheKey, value);
              queue.push(value);
            }
          }
        }
      }
    }
  }

  process(obj);
  return obj;
}

const input = {
  unfocused_neutral: { color: 'primary', selected: { color: 'brand' } },
  unfocused_inverse: { color: 'primary', selected: { color: 'brand' } },
  unfocused_brand: { color: 'primary', selected: { color: 'brand' } },
  focused_neutral: { color: 'primary', selected: { color: 'brand' } },
  focused_inverse: { color: 'primary', selected: { color: 'brand' } },
  focused_brand: { color: 'primary', selected: { color: 'brand' } },
  disabled_neutral: { color: 'primary', selected: { color: 'brand' } },
  disabled_inverse: { color: 'primary', selected: { color: 'brand' } },
  disabled_brand: { color: 'primary', selected: { color: 'brand' } }
}

input.self = input; // Create a circular reference
const result = createSharedReferences(input);
console.log(result);
