// Widen literal primitives to their base types
export type Widen<T> = {
  [K in keyof T]: 
    T[K] extends string ? string :
    T[K] extends number ? number :
    T[K] extends boolean ? boolean :
    T[K];
};

// Primitive base types for DeepWiden
type Primitive = string | number | boolean | null | undefined | symbol | bigint;

// DeepWiden recursively widens nested objects & arrays, preserves special types like Date, Map, Set
export type DeepWiden<T> = 
  T extends Primitive ? T :
  T extends Date ? Date :
  T extends Map<infer K, infer V> ? Map<DeepWiden<K>, DeepWiden<V>> :
  T extends Set<infer U> ? Set<DeepWiden<U>> :
  T extends ReadonlyArray<infer U> ? Array<DeepWiden<U>> : // convert readonly arrays to mutable arrays for easier usage
  T extends Record<string, unknown> ? {
    [K in keyof T]: DeepWiden<T[K]>
  } :
  T;

// StrictShape marks all props readonly & required (shallow)
export type StrictShape<T> = {
  readonly [K in keyof T]-?: T[K];
};

// Narrowing helper - converts wider base types back to literal types if provided explicitly
// Usage: type MyNarrowed = Narrow<typeof someValue>;
export type Narrow<T> = 
  T extends string ? (string extends T ? never : T) :
  T extends number ? (number extends T ? never : T) :
  T extends boolean ? (boolean extends T ? never : T) :
  T;

// Example: usage to ensure a value is a literal string, number, or boolean if specified