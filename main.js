function MotorDeCarro() {
  if (this.constructor === MotorDeCarro) {
      throw new Error("Não é possível instanciar uma classe abstrata diretamente.");
  }
}


MotorDeCarro.prototype.start = function () {
  throw new Error("Método abstrato 'start' deve ser implementado pelas subclasses.");
};


MotorDeCarro.prototype.stop = function () {
  throw new Error("Método abstrato 'stop' deve ser implementado pelas subclasses.");
};


function MotorGasolina() {
  MotorDeCarro.call(this);
}

MotorGasolina.prototype = Object.create(MotorDeCarro.prototype);
MotorGasolina.prototype.constructor = MotorGasolina;


MotorGasolina.prototype.start = function () {
  console.log("Motor a gasolina ligado.");
};

MotorGasolina.prototype.stop = function () {
  console.log("Motor a gasolina desligado.");
};


function MotorEletrico() {
  MotorDeCarro.call(this);
}

MotorEletrico.prototype = Object.create(MotorDeCarro.prototype);
MotorEletrico.prototype.constructor = MotorEletrico;


MotorEletrico.prototype.start = function () {
  console.log("Motor elétrico ligado.");
};

MotorEletrico.prototype.stop = function () {
  console.log("Motor elétrico desligado.");
};


function MotorDiesel() {
  MotorDeCarro.call(this);
}

MotorDiesel.prototype = Object.create(MotorDeCarro.prototype);
MotorDiesel.prototype.constructor = MotorDiesel;


MotorDiesel.prototype.start = function () {
  console.log("Motor a diesel ligado.");
};

MotorDiesel.prototype.stop = function () {
  console.log("Motor a diesel desligado.");
};


const Ferrari = new MotorGasolina();
const Tesla = new MotorEletrico();
const Toyota = new MotorDiesel();


Ferrari.start();
Ferrari.stop();

Tesla.start();
Tesla.stop();

Toyota.start();
Toyota.stop();

  