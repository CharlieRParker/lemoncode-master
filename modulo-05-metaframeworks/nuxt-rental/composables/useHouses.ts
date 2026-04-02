import type { House } from '~/types/house';

export const useHouses = () => {
    const config = useRuntimeConfig();
    const API_BASE_URL = config.public.apiUrl;

    const getHouses = async (): Promise<House[]> => {
        try {
            const houses = await $fetch<House[]>(`${API_BASE_URL}/api/houses`);
            return houses || [];
        } catch (error) {
            console.error('Error fetching houses:', error);
            return [];
        }
    };

    const getHouseById = async (id: string): Promise<House | null> => {
        try {
            const house = await $fetch<House>(`${API_BASE_URL}/api/houses/${id}`);
            return house || null;
        } catch (error) {
            console.error('Error fetching house:', error);
            return null;
        }
    };

    return {
        getHouses,
        getHouseById,
    };
};
