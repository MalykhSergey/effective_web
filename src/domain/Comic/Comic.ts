export default interface IComic {
    id: number;
    title: string;
    logo: string;
    description?: string;
    seriesId?: number;
    favorite: boolean;
}

export class Comic implements IComic {
    public id: number;
    public title: string;
    public logo: string;
    public description?: string;
    public seriesId?: number;
    public favorite: boolean;

    constructor(
        id: number,
        title: string,
        logo: string,
        description?: string,
        seriesId?: number,
        favorite = false) {
        this.id = id;
        this.title = title;
        this.logo = logo;
        this.description = description;
        this.seriesId = seriesId;
        this.favorite = favorite;
    }
}