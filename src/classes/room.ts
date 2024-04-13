import { LightBulb } from './lightBulb';
export class Room {
    private _lightBulb: LightBulb;

    constructor(lightBulb: LightBulb) {
        this._lightBulb = lightBulb;
    }

    public changeLightBulb(lightBulb: LightBulb): void {
        this._lightBulb = lightBulb;
    }

    public getLightBulb(): LightBulb {
        return this._lightBulb;
    }
}
