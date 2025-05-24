import { createContext, useContext } from "react";
import { GetComicsList } from "../../domain/Comic/GetComicsList";
import MockComicsRepository from "../../infrastructure/Comic/MockComicsRepository";

type UseCases = {
    getComicsList: GetComicsList;
};
const comicsRepository = new MockComicsRepository();
const getComicsList = new GetComicsList(comicsRepository);

const UseCasesContext = createContext<UseCases>({ getComicsList: getComicsList });

export function useCases(): UseCases {
    return useContext(UseCasesContext);
}