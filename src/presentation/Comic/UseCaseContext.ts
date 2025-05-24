import { createContext, useContext } from "react";
import type IGetComic from "../../domain/Comic/GetComic";
import { GetComic } from "../../domain/Comic/GetComic";
import type IGetComicsList from "../../domain/Comic/GetComicsList";
import { GetComicsList } from "../../domain/Comic/GetComicsList";
import type IGetComicsSeries from "../../domain/Comic/GetComicsSeries";
import { GetComicsSeries } from "../../domain/Comic/GetComicsSeries";
import type IGetFavorites from "../../domain/Comic/GetFavorite";
import { GetFavorites } from "../../domain/Comic/GetFavorite";
import MockComicsRepository from "../../infrastructure/Comic/MockComicsRepository";

type UseCases = {
    getComicsList: IGetComicsList;
    getComicsSeries: IGetComicsSeries;
    getFavorites: IGetFavorites;
    getComic: IGetComic;
};
const comicsRepository = new MockComicsRepository();
const getComicsList = new GetComicsList(comicsRepository);
const getComicsSeries = new GetComicsSeries(comicsRepository);
const getFavorites = new GetFavorites(comicsRepository);
const getComic = new GetComic(comicsRepository);

const UseCasesContext = createContext<UseCases>({ getComicsList, getComicsSeries, getComic, getFavorites });

export function useCases(): UseCases {
    return useContext(UseCasesContext);
}