import type IComic from "./Comic";
import type IComicsRepository from "./ComicRepository";

export default interface IGetComicsList {
  execute(page: number): Promise<IComic[]>;
}

export class GetComicsList implements IGetComicsList {
  private repository: IComicsRepository;
  constructor(repository: IComicsRepository) {
    this.repository = repository;
  }
  execute(page: number) {
    return this.repository.getList(page);
  }
}