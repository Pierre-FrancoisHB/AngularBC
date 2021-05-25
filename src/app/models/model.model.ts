import { Brand } from "./brand.model";

export class Model {


    private _id: number;
    private _modelName: string;
    private _brand: Brand;


    constructor(modelName: string, brand: Brand, id?: number) {
        if (typeof id === 'number') {
            this._id = id;
        }

        this._modelName = modelName;
        this._brand = brand;


    }



    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter modelname
     * @return {string}
     */
    public get modelName(): string {
        return this._modelName;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter modelname
     * @param {string} value
     */
    public set modelName(value: string) {
        this._modelName = value;
    }


    /**
     * Getter brand
     * @return {Brand}
     */
    public get brand(): Brand {
        return this._brand;
    }

    /**
     * Setter brand
     * @param {Brand} value
     */
    public set brand(value: Brand) {
        this._brand = value;
    }


    static fromJSON(data: any): Model {

        return new Model(data.modelName, Brand.fromJSON(data.brand), data.id)
    }

    static toJSON(model: Model): any {
        return {
            id: model.id,
            modelName: model.modelName,
            brand: Brand.toJSON(model.brand),

        };
    }

}