import type IComic from "./Comic";
import type IComicsRepository from "./ComicRepository";

export default interface IGetComic {
  execute(page: number): Promise<IComic>;
}

export class GetComic implements IGetComic {
  private repository: IComicsRepository;
  constructor(repository: IComicsRepository) {
    this.repository = repository;
  }
  execute(page: number) {
    return this.repository.getById(page);
  }
}