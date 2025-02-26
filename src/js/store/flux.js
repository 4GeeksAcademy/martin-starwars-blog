const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            nextPage: "https://swapi.dev/api/people/?page=1",
            planets: [],
            nextPlanetsPage: "https://swapi.dev/api/planets/?page=1",
            favorites: [],
            isLoading: true
        },
        actions: {
            loadInitialData: async () => {
                try {
                    await Promise.all([
                        getActions().loadMorePeople(),
                        getActions().loadMorePlanets()
                    ]);
                } catch (error) {
                    console.error("Error cargando datos iniciales:", error);
                } finally {
                    setStore({ isLoading: false });
                }
            },

            loadMorePeople: async () => {
                const store = getStore();
                if (!store.nextPage) return;

                try {
                    const response = await fetch(store.nextPage);
                    const data = await response.json();

                    if (data.results) {
                        setStore({
                            people: [...store.people, ...data.results],
                            nextPage: data.next || null
                        });
                    }
                } catch (error) {
                    console.error("Error cargando más personajes:", error);
                }
            },

            loadMorePlanets: async () => {
                const store = getStore();
                if (!store.nextPlanetsPage) return;

                try {
                    const response = await fetch(store.nextPlanetsPage);
                    const data = await response.json();

                    if (data.results) {
                        setStore({
                            planets: [...store.planets, ...data.results],
                            nextPlanetsPage: data.next || null
                        });
                    }
                } catch (error) {
                    console.error("Error cargando más planetas:", error);
                }
            },

            loadCharacterByName: async (name) => {
                try {
                    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
                    const data = await response.json();
                    
                    return data.results.length > 0 ? data.results[0] : null;
                } catch (error) {
                    console.error("Error cargando personaje:", error);
                    return null;
                }
            },

            loadPlanetByName: async (name) => {
                try {
                    const response = await fetch(`https://swapi.dev/api/planets/?search=${name}`);
                    const data = await response.json();
                    
                    return data.results.length > 0 ? data.results[0] : null;
                } catch (error) {
                    console.error("Error cargando planeta:", error);
                    return null;
                }
            },

            addFavorite: (item) => {
                const store = getStore();
                const favorites = store.favorites || []; 
                
                const updatedFavorites = favorites.includes(item)
                    ? favorites.filter(fav => fav !== item)
                    : [...favorites, item];

                setStore({ favorites: updatedFavorites });
                
            },

            removeFavorite: (item) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== item) });
            }
        }
    };
};

export default getState;



