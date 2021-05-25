import { Model } from './model.model';
import { Photo } from './photo.model';
import { Text } from "@angular/compiler/src/render3/r3_ast";

export class Vehicule {

    private _id: number;
    private _annoncereference: string;
    private _description: Text;
    private _kilometer: number;
    private _price: number;
    private _year: number;
    private _photos: Array<Photo>;
    private _model: Model;
    //private _brandId: string;



    constructor(
        annoncereference: string,
        description: Text,
        kilometer: number,
        price: number,
        year: number,
        photos: Array<Photo>,
        model: Model,
        id: number) {
        if (typeof id === 'number') {
            this._id = id;
        }
        this._annoncereference = annoncereference;
        this._description = description;
        this._kilometer = kilometer;
        this._price = price;
        this._year = year;
        this._photos = photos;
        this._model = model;

    }

    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }



    /**
     * Getter annoncereference
     * @return {string}
     */
    public get annoncereference(): string {
        return this._annoncereference;
    }


    /**
     * Getter description
     * @return {Text}
     */
    public get description(): Text {
        return this._description;
    }

    /**
     * Getter kilometer
     * @return {number}
     */
    public get kilometer(): number {
        return this._kilometer;
    }

    /**
     * Getter price
     * @return {number}
     */
    public get price(): number {
        return this._price;
    }

    /**
     * Getter year
     * @return {number}
     */
    public get year(): number {
        return this._year;
    }

    /**
     * Setter annoncereference
     * @param {string} value
     */
    public set annoncereference(value: string) {
        this._annoncereference = value;
    }


    /**
     * Setter description
     * @param {Text} value
     */
    public set description(value: Text) {
        this._description = value;
    }

    /**
     * Setter kilometer
     * @param {number} value
     */
    public set kilometer(value: number) {
        this._kilometer = value;
    }

    /**
     * Setter price
     * @param {number} value
     */
    public set price(value: number) {
        this._price = value;
    }

    /**
     * Setter year
     * @param {number} value
     */
    public set year(value: number) {
        this._year = value;
    }

    /**
 * Getter photos
 * @return {Array<Photo>}
 */
    public get photos(): Array<Photo> {
        return this._photos;
    }

    /**
     * Getter model
     * @return {Model}
     */
    public get model(): Model {
        return this._model;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter photos
     * @param {Array<Photo>} value
     */
    public set photos(value: Array<Photo>) {
        this._photos = value;
    }

    /**
     * Setter model
     * @param {Model} value
     */
    public set model(value: Model) {
        this._model = value;
    }

    static fromJSON(data: any): Vehicule {
        return new Vehicule(
            data.referenceAd,
            data.description,
            data.kilometer,
            data.price,
            data.year,
            data.photos,
            data.model,
            data.id)
    }

    toJSON(): any {
        return {
            id: this.id,
            referenceAd: this.annoncereference,
            description: this.description,
            kilometer: this.kilometer,
            price: this.price,
            year: this.year,
            photos: this.photos,
            model: this.model,
        };
    }



}