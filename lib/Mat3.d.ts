export default class Mat3 {
    private _data;
    constructor(matrix?: number[]);
    set(data: number[]): Mat3;
    copy(): Mat3;
    multiply(m: Mat3): Mat3;
    get data(): number[];
    static identity(): Mat3;
    static translation(x: number, y: number): Mat3;
    static rotation(theta: number): Mat3;
    static scale(x: number, y: number): Mat3;
}
