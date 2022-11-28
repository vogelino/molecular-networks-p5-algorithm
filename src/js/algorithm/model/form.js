/* global window */
const Immutable = require("immutable");
import defaults from "../defaults";

/**
 * @class A form (data)
 * @param  {Immutable.Map} configs - The configurations of the form
 * @return {Immutable.Map}         - The form (data)
 */
const Form = (configs, p5) => {
  const margin = defaults.get("formMargin");
  let form = configs
    .update("x", (x) => p5.random(x - margin, x + margin))
    .update("y", (y) => p5.random(y - margin, y + margin));
  const fragmentation = defaults.get("fragmentation")
  const nz = p5.noise(
    p5.map(form.get("x"), 0, p5.width, 0, fragmentation),
    p5.map(form.get("y"), 0, p5.height, 0, fragmentation),
  )
  const circleSize = p5.map(
    nz,
    0,
    1,
    defaults.get("circleMinSize"),
    defaults.get("wrapperSize")
  );
  const hasCircle = nz < defaults.get("circleProbability");
  const circleX = form.get("x") + defaults.get("wrapperSize") / 2 + p5.random(-3, 3);
  const circleY = form.get("y") + defaults.get("wrapperSize") / 2 + p5.random(-3, 3);
  let circle = Immutable.Map({
    x: circleX,
    y: circleY,
    size: circleSize,
    circleColor: form.get("circleColor"),
    arcPoints: {},
  });

  form = form.set("circle", circle);

  if (circle) {
    const circleCenter = circleSize / 2;
    circle = circle.set("arcPoints", {
      top: {
        x: circleX,
        y: circleY - circleCenter,
        bezierX: circleX,
        bezierY: configs.get("y"),
      },
      bottom: {
        x: circleX,
        y: circleY + circleCenter,
        bezierX: circleX,
        bezierY: configs.get("y") + form.get("size"),
      },
      left: {
        x: circleX - circleCenter,
        y: circleY,
        bezierX: configs.get("x"),
        bezierY: circleY,
      },
      right: {
        x: circleX + circleCenter,
        y: circleY,
        bezierX: configs.get("x") + form.get("size"),
        bezierY: circleY,
      },
    });
    form = form.set("circle", circle);
  }

  if (!hasCircle) {
    form = form.set("circle", false);
  }
  return form;
};

export default Form;
