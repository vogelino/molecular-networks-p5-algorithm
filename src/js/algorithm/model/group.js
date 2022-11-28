/* global window */
const Immutable = require("immutable");
import defaults from "../defaults";
import Form from "./form";
import Connector from "./connector";

/**
 * @class A group of forms (layer) in a matrix (rows / columns)
 * @return {Function} An instance of the class
 */
const Group = (p5) => {
  let that = {};

  /**
   * Creates a group with a given id
   * @param  {Number} id - A unique id
   * @return {Immutable.Map} - A group (data) with forms in a matrix
   */
  that.createGroup = (id) => {
    const size = defaults.get("wrapperSize");
    let rows = Math.ceil(p5.windowWidth / size) + 1;
    let columns = Math.ceil(p5.windowWidth / size) + 1;
    let formPosX = 0 - size / 2;
    let formPosY = formPosX;
    let columnPosX = formPosX;
    let rowPosY = formPosY;
    let forms = Immutable.List([]);

    for (let row = 1; row <= rows; row++) {
      for (let column = 1; column <= columns; column++) {
        const form = Immutable.Map({
          id: `${id}-${row}-${column}`,
          circleColor: that.getGroupColor(
            columnPosX,
            rowPosY
          ),
          x: columnPosX,
          y: rowPosY,
          size,
          row,
          column,
        });
        forms = forms.push(Form(form, p5));
        columnPosX = column === columns ? formPosX : columnPosX + size;
      }
      rowPosY = row === rows ? formPosY : rowPosY + size;
    }

    let group = Immutable.Map({
      id,
      rows: rows,
      columns: columns,
      forms: forms,
    });

    group = Connector().connectForms(group);

    return group;
  };

  /**
   * Retrives a group color based on the id
   * @param  {Number} id - The unique identifier for a group
   * @return {Object}    - An Object with hue, saturation, brightness and alpha
   */
  that.getGroupColor = (x, y) => {
    const nz = p5.noise(
      p5.map(x, 0, p5.width, 0, defaults.get("fragmentation")),
      p5.map(y, 0, p5.height, 0, defaults.get("fragmentation")),
    )
    return {
      hue: defaults.get("mainHue") + p5.map(nz, 0, 1, 0, 360),
      saturation: 50,
      brightness: p5.map(nz, 0, 1, 0, 200),
      alpha: 100,
    };
  };

  return that;
};

export default Group;
