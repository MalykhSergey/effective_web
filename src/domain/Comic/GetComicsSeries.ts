import type IComic from "./Comic";
import type IComicsRepository from "./ComicRepository";

export default interface IGetComicsSeries {
  execute(id: number): Promise<IComic[]>;
}

export class GetComicsSeries implements IGetComicsSeries {
  private repository: IComicsRepository;
  constructor(repository: IComicsRepository) {
    this.repository = repository;
  }
  execute(id: number) {
    return this.repository.getSeries(id);
  }
}