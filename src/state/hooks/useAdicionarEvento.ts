import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        const hoje = new Date();
        if (evento.inicio < hoje) {
            console.log(evento.inicio);
            throw new Error("Eventos nao podem ser cadastrados com data menor que a atual");
        }
        evento.id = obterId();
        return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
    };
};

export default useAdicionarEvento;
