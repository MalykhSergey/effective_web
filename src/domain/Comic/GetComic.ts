import type IComic from "./Comic";
import type IComicsRepository from "./ComicRepository";

export default interface IGetComic {
  execute(id: number): Promise<IComic>;
}

export class GetComic implements IGetComic {
  private repository: IComicsRepository;
  constructor(repository: IComicsRepository) {
    this.repository = repository;
  }
  execute(id: number) {
    return this.repository.getById(id);
  }
}