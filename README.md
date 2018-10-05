![coverage](./coverage/badge-statements.svg)
# Functional concepts in Javascript
> A repository to learn different concepts in javascript

### Functors
> Functors are Objects that have a map method. Some examples are: 
- Maybe
```
function Maybe(val) {
  this.value = val;
}

Maybe.prototype.map = () => {
  return this.value ? new Maybe(this.value) : new Maybe(null);
}
```
- IO
- Future
### Monads