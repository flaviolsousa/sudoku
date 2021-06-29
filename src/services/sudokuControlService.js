const numberFirst = {
  init: function (options) {},
  cellClicked: function (model, cell) {
    model.matrix[cell.lin][cell.col].value = model.control.selected;
    model.emitUpdated();
  },
  numberClicked: function (model, n) {
    console.log(
      `numberClicked: number ${n} clicked, before was ${model.control.selected}`
    );
    model.control.selected = n;
    model.emitUpdated();
  },
};

const strategies = {
  numberFirst,
};

const control = {
  init: function (model) {
    model.control.cellClicked = this.cellClicked;
    model.control.numberClicked = this.numberClicked;
  },

  cellClicked: function (model, cell) {
    strategies[model.control.mode].cellClicked(model, cell);
  },

  numberClicked: function (model, n) {
    strategies[model.control.mode].numberClicked(model, n);
  },
};

export default control;
