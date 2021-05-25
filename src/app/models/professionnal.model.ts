
export class Professionnal {


    private _id: number;
    private _username: string;
    private _email: string;
    private _siret: number;
    private _personnalTel: string;
    private _validaccount: boolean;


    constructor(username: string, email: string, siret: number, personnalTel: string, validaccount: boolean, id?: number) {
        if (typeof this.id === 'number') {
            this._id = id;
        }
        this._id = id;
        this._username = username;
        this._email = email;
        this._siret = siret;
        this._personnalTel = personnalTel;
        this._validaccount = validaccount;

    }


    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter username
     * @return {string}
     */
    public get username(): string {
        return this._username;
    }


    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter siret
     * @return {number}
     */
    public get siret(): number {
        return this._siret;
    }

    /**
     * Getter personnalTel
     * @return {string}
     */
    public get personnalTel(): string {
        return this._personnalTel;
    }

    /**
     * Getter validaccount
     * @return {boolean}
     */
    public get validaccount(): boolean {
        return this._validaccount;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter username
     * @param {string} value
     */
    public set username(value: string) {
        this._username = value;
    }


    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter siret
     * @param {number} value
     */
    public set siret(value: number) {
        this._siret = value;
    }

    /**
     * Setter personnalTel
     * @param {string} value
     */
    public set personnalTel(value: string) {
        this._personnalTel = value;
    }

    /**
     * Setter validaccount
     * @param {boolean} value
     */
    public set validaccount(value: boolean) {
        this._validaccount = value;
    }

    static fromJSON(data: any): Professionnal {
        return new Professionnal(data.username, data.email, data.siret, data.personnalTel, data.validaccount, data.id)
    }

    static toJSON(professionnal: Professionnal): any {
        return {
            id: professionnal.id,
            username: professionnal.username,
            email: professionnal.email,
            siret: professionnal.siret,
            personnalTel: professionnal.personnalTel,
            validaccount: professionnal.validaccount
        };
    }


}