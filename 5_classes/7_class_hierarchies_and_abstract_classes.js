class AbstractSet {
  // Throw an error here so that subclasses are forced
  // to define their own working version of this method.
  has(x) {
    throw new Error('Abstract method');
  }
}
