import "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";

let svgTag: SVG = new SVG("artboard");
const RADIANS: number = Math.PI * 2;

function main(): void {

    let group: Group = new Group();
    let axes: Axes = new Axes(200, 200);
    group.add(axes.getShapes());

    let count: number = 25;
    for (let i: number = 0; i < count; i++) {

        let angle: number = i / (count) * RADIANS;
        let cx: number = Math.cos(angle) * 20;
        let cy: number = Math.sin(angle) * 20;
        let c: Circle = new Circle(5, cx, cy);

        let red: number = 0;
        let green: number = 1 - i / (count - 1);
        let blue: number = i / (count - 1);
        c.fill = new Color(red, green, blue);
        c.stroke = Stroke.NONE;

        group.add(c);

    }

    svgTag.render(group);

}

main();