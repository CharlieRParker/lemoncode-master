import type { House } from '~/types/house';

const API_BASE_URL = 'http://localhost:3001'; // Reemplazar con el mock API

export const useHouses = () => {
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
