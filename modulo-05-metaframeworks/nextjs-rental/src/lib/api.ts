import { House } from '@/types/house';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export async function getHouses(): Promise<House[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/houses`, {
            cache: 'force-cache',
            revalidate: 3600,
        } as RequestInit & { revalidate?: number });

        if (!response.ok) {
            throw new Error(`Failed to fetch houses: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching houses:', error);
        return [];
    }
}

export async function getHouseById(id: string): Promise<House | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/houses/${id}`, {
            cache: 'force-cache',
            revalidate: 3600,
        } as RequestInit & { revalidate?: number });

        if (!response.ok) {
            throw new Error(`Failed to fetch house: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching house:', error);
        return null;
    }
}

export async function getHouseIds(): Promise<string[]> {
    try {
        const houses = await getHouses();
        return houses.map((house) => house.id);
    } catch (error) {
        console.error('Error fetching house IDs:', error);
        return [];
    }
}
