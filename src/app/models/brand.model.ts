export class Brand {


    private _id: number;
    private _brandname: string;




    constructor(brandname: string, id?: number) {
        if (typeof id === 'number') {
            this._id = id;
        }
        this._brandname = brandname;

    }



    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter brandname
     * @return {string}
     */
    public get brandname(): string {
        return this._brandname;
    }


    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter brandname
     * @param {string} value
     */
    public set brandname(value: string) {
        this._brandname = value;
    }


    static fromJSON(data: any): Brand {
        return new Brand(data.brandName, data.id)
    }

    static toJSON(brand: Brand): any {
        return {
            id: brand.id,
            annoncereference: brand.brandname,
        };
    }

}