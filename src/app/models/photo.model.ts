export class Photo {



    private _id: number;
    private _photoLink: string;
    private _mainphoto: number;



    constructor(photoLink: string, mainphoto: number, id?: number) {
        if (typeof this.id === 'number') {
            this._id = id;
        }
        this._id = id;
        this._photoLink = photoLink;
        this._mainphoto = mainphoto;

    }


    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter photolink
     * @return {string}
     */
    public get photoLink(): string {
        return this._photoLink;
    }

    /**
     * Getter mainphoto
     * @return {number}
     */
    public get mainphoto(): number {
        return this._mainphoto;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter photolink
     * @param {string} value
     */
    public set photoLink(value: string) {
        this._photoLink = value;
    }

    /**
     * Setter mainphoto
     * @param {number} value
     */
    public set mainphoto(value: number) {
        this._mainphoto = value;
    }

}
