## 02-tools-and-context

### apply() & call()
*Using call() and apply() I've created stand alone 'map', 'filter', 'reduce', and 'filter' methods.*

### Testing
*In the __test__ directory I've tested the fp module using 'describe' and 'test' methods in order to increase readability.*

*The test callback tests features of each method separately.*

#### map()
*  map() has an arity of two, a callback function and context.
*  map() should return the context in the form of an array.
*  The callback determines what methods should be applied to the initial state.

#### filter()
* filter() has an arity of two, callback and context.
* filter() should filter the input context and return the truthy values.

#### reduce()
* reduce() has an arity of two, context first and ...args. It is able to accept multiple arguments. I could not get my reduce() to work with an initial state parameter.
* reduce() should return a value determined by the accumulator and current value.
* If an integer in input it will apply the predetermined equation and return the sum.
* If a sting in inputting it will join the strings.
