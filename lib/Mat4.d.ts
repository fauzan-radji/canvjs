export default class Mat4 {
    private _data;
    constructor(matrix?: number[]);
    set(data: number[]): Mat4;
    copy(): Mat4;
    multiply(m: Mat4): Mat4;
    get data(): number[];
    static identity(): Mat4;
    static translation(x: number, y: number, z: number): Mat4;
    static rotationX(theta: number): Mat4;
    static rotationY(theta: number): Mat4;
    static rotationZ(theta: number): Mat4;
    static scale(x: number, y: number, z: number): Mat4;
    static perspective(fieldOfView: number, aspect: number, near: number, far: number): Mat4;
}
