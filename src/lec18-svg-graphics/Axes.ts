import {
    Group,
    Rectangle,
    Stroke,
    Color
} from "introcs/graphics";

export class Axes {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getShapes(): Group {
        let group: Group = new Group();

        let xAxis: Rectangle = new Rectangle(this.width, 0.1, -this.width / 2, 0);
        group.add(xAxis);
    
        let yAxis: Rectangle = new Rectangle(0.1, this.height, 0, -this.height / 2);
        group.add(yAxis);

        return group;
    }
}