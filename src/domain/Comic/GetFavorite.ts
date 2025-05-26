import type IComic from "./Comic";
import type IComicsRepository from "./ComicRepository";

export default interface IGetFavorites {
  execute(): Promise<IComic[]>;
}

export class GetFavorites implements IGetFavorites {
  private repository: IComicsRepository;
  constructor(repository: IComicsRepository) {
    this.repository = repository;
  }
  execute() {
    return this.repository.getFavorites();
  }
}