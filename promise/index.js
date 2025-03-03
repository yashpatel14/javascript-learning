
class MyPromise {
  constructor(executorFn) {
    this._state = 'pending';
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];

    this.value = undefined;

    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(cb) {
    if (this._state == 'fulfilled') {
      console.log(`Apka promise toh pehle hi pura hogya, Run hi kar deta hu`);
      cb(this.value);
      return this;
    }

    this._successCallbacks.push(cb);
    return this;
  }

  catch(cb) {
    if (this._state == 'rejected') {
      console.log(`Apka promise toh pehle hi reject hogya, Run hi kar deta hu`);
      cb();
      return this;
    }
    this._errorCallbacks.push(cb);
    return this;
  }

  finally(cb) {
    if (this._state !== 'pending') {
      cb();
      return this;
    }
    this._finallyCallbacks.push(cb);
    return this;
  }

  resolverFunction(value) {
    console.log(
      `Fullfilling Promise, Running ${this._successCallbacks.length} callbacks`
    );
    this.value = value;
    this._state = 'fulfilled';
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  rejectorFunction(err) {
    this._state = 'rejected';
    this._errorCallbacks.forEach((cb) => cb(err));
    this._finallyCallbacks.forEach((cb) => cb());
  }
}



function delay(seconds){
    return new MyPromise((resolve,reject)=>{
        setTimeout(()=>resolve(),seconds * 1000)
    })
}




delay(3).then(() => console.log("Executed after 3 seconds"));