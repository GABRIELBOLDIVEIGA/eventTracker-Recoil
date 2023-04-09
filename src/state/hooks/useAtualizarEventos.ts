import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from './../../interfaces/IEvento';

const useAtualizaEventos = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        return setListaDeEventos((listaAntiga: IEvento[]) => {
            const indice = listaAntiga.findIndex((evt: IEvento) => evt.id === evento.id)
            return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)];
        })
    };
};

export default useAtualizaEventos;
