import type IComic from "./Comic";

export default interface IComicsRepository {
    getList(page: number): Promise<IComic[]>;
    getById(id: number): Promise<IComic>;
    getSeries(seriesId: number): Promise<IComic[]>;
    getFavorites(): Promise<IComic[]>;
}