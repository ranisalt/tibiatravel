interface ObjectConstructor {
  fromEntries<Key extends PropertyKey, Value>(entries: Iterable<readonly [Key, Value]>): { [K in Key]: Value }
}
