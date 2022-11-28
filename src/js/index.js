/* global window */
import p5 from "p5";
import Immutable from "immutable";
import setup from "./algorithm/setup";
import { Drawer } from "./algorithm/drawer";
import Groups from "./algorithm/model/groups";
import defaults from "./algorithm/defaults"

/**
 * Initialisation of the algorithm.
 * To be passed to a p5 class
 * @param  {reference to p5} p5 - To be made global
 */
const algorithm = (p5) => {
  p5.setup = setup(p5).setupCanvas;
  p5.keyTyped = setup(p5).onKeyTyped;
  p5.draw = () => {
    p5.background(
      defaults.get("mainHue"),
      30,
      10,
    )
    const drawer = new Drawer(p5);
    let groups = Groups(p5);
    groups = Immutable.List(groups.getGroups());
    p5.scale(1.2)
    p5.translate(0, -100)
    p5.rotate(0.1)
    drawer.drawGroups(groups);
    p5.noLoop();
  };
};

new p5(algorithm);
