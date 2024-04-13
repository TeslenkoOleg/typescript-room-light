import {LightBulbColor} from "../enums/enums";

export class LightBulb {
    private _isOn: boolean;
    private _isBroken: boolean;
    private _color: LightBulbColor;

    constructor(color: LightBulbColor = LightBulbColor.Red) {
        this._isOn = false;
        this._isBroken = false;
        this._color = color;
    }
    get color(): LightBulbColor {
        return this._color;
    }

    public isOn(): boolean {
        return this._isOn;
    }

    public isBroken(): boolean {
        return this._isBroken;
    }

    public turnOn(): void {
        if (!this._isBroken) {
            this._isOn = true;
        }
    }

    public turnOff(): void {
        this._isOn = false;
    }

    public break(): void {
        this._isBroken = true;
        this._isOn = false;
    }

    public fix(): void {
        this._isBroken = false;
    }

}
