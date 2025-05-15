import axios from 'axios';

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

/* Essa parte serve para definir um limite de pokemons por busca (pagina)*/

export const fetchPokemons = async (limit = 20, offset = 0) => {
    try {
        const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
};