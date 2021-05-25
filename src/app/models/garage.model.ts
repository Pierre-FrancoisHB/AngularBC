export class Garage {


    private _id: number;
    private _garagename: string;
    private _adress: string;
    private _postalcode: string;
    private _commune: string;
    private _garagephone: string;



    constructor(garagename: string, adress: string, postalcode: string, commune: string, garagephone: string, id?: number) {
        if (typeof this.id === 'number') {
            this._id = id;
        }
        this._id = id;
        this._garagename = garagename;
        this._adress = adress;
        this._postalcode = postalcode;
        this._commune = commune;
        this._garagephone = garagephone;


    }



    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter garagename
     * @return {string}
     */
    public get garagename(): string {
        return this._garagename;
    }

    /**
     * Getter adress
     * @return {string}
     */
    public get adress(): string {
        return this._adress;
    }

    /**
     * Getter postalcode
     * @return {string}
     */
    public get postalcode(): string {
        return this._postalcode;
    }

    /**
     * Getter commune
     * @return {string}
     */
    public get commune(): string {
        return this._commune;
    }

    /**
     * Getter garagephone
     * @return {string}
     */
    public get garagephone(): string {
        return this._garagephone;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter garagename
     * @param {string} value
     */
    public set garagename(value: string) {
        this._garagename = value;
    }

    /**
     * Setter adress
     * @param {string} value
     */
    public set adress(value: string) {
        this._adress = value;
    }

    /**
     * Setter postalcode
     * @param {string} value
     */
    public set postalcode(value: string) {
        this._postalcode = value;
    }

    /**
     * Setter commune
     * @param {string} value
     */
    public set commune(value: string) {
        this._commune = value;
    }

    /**
     * Setter garagephone
     * @param {string} value
     */
    public set garagephone(value: string) {
        this._garagephone = value;
    }


}