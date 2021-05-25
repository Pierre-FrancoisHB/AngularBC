export class Energy {


    private _id: number;
    private _energyName: string;



    constructor(energyName: string, id?: number) {
        if (typeof id === 'number') {
            this._id = id;
        }

        this._energyName = energyName;


    }


    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter energyname
     * @return {string}
     */
    public get energyName(): string {
        return this._energyName;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter energyname
     * @param {string} value
     */
    public set energyName(value: string) {
        this._energyName = value;
    }

    static fromJSON(data: any): Energy {
        return new Energy(data.energyName, data.id)
    }

    static toJSON(energy: Energy): any {
        return {
            id: energy.id,
            energyName: energy.energyName,
        };
    }
}