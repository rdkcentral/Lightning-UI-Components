export type Color = number;

// a way that allows users to define all or however many style properties they'd like for a component
export type StylePartial<T> = {
  // This is a mapped type (https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
  // It's a way of iterating over every key in the object T. The variable for the key is `P`
  // The `?` before the `:` makes every key P of the object T optional
  [P in keyof T]?: T[P] extends (infer U)[] // The first conditional checks if the type of the value (aka T[P]) is an array of any type U. If it's true then U is the type contained in the array.
    ? // Here we just spit back the array intact. We're saying to not apply StylePartial to items in arrays.
      // We do this before checking if T[P] is an object, because all arrays are objects but not all objects are arrays.
      U[]
    : // If it's not an array, then let's ask if T[P] is an object. If it is then, let's recursively apply StylePartial on it.
    // Likewise recursively apply StylePartial on objects that are optional from the beginning
    T[P] extends object | undefined
    ? StylePartial<T[P]>
    : // If it is NOT an object, then just spit back the original value type.
      T[P];
};
