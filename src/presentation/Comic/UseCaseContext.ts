import { createContext, useContext } from "react";
import type IGetComic from "../../domain/Comic/GetComic";
import { GetComic } from "../../domain/Comic/GetComic";
import type IGetComicsList from "../../domain/Comic/GetComicsList";
import { GetComicsList } from "../../domain/Comic/GetComicsList";
import MockComicsRepository from "../../infrastructure/Comic/MockComicsRepository";

type UseCases = {
    getComicsList: IGetComicsList;
    getComic: IGetComic;
};
const comicsRepository = new MockComicsRepository();
const getComicsList = new GetComicsList(comicsRepository);
const getComic = new GetComic(comicsRepository);

const UseCasesContext = createContext<UseCases>({ getComicsList, getComic });

export function useCases(): UseCases {
    return useContext(UseCasesContext);
}