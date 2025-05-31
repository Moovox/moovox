import api from '../lib/api';

export const vaccineService = {
    async getAllVaccines() {
        try {
            const farmId = localStorage.getItem('farmId');
            
            if (!farmId) {
                console.warn('Warning: Farm ID not found in localStorage. Vaccines may not be filtered correctly.');
            }

            const endpoint = farmId ? `/farms/${farmId}/vaccines` : '/vaccines';
            const response = await api.get(endpoint);

            if (!response.data) {
                return { data: [] };
            }

            const vaccinesData = Array.isArray(response.data.data) ? response.data.data : [];

            const vaccines = vaccinesData.map(vaccine => ({
                id: vaccine.id,
                name: vaccine.name,
                manufacturer: vaccine.manufacturer,
                batchNumber: vaccine.batch_number || vaccine.batchNumber,
                expirationDate: vaccine.expiration_date || vaccine.expirationDate,
                dosage: vaccine.dosage,
                description: vaccine.description
            }));

            return { data: vaccines };
        } catch (error) {
            console.error('Error fetching vaccines:', error);
            return { data: [], error };
        }
    },

    async createVaccine(vaccineData) {
        try {
            const formattedData = {
                name: vaccineData.name,
                manufacturer: vaccineData.manufacturer,
                batch_number: vaccineData.batchNumber,
                expiration_date: vaccineData.expirationDate,
                dosage: vaccineData.dosage,
                description: vaccineData.description
            };

            const response = await api.post('/vaccines', formattedData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    async updateVaccine(id, vaccineData) {
        try {
            if (!id) throw new Error("Vaccine ID not provided");
            
            const formattedData = {
                name: vaccineData.name,
                manufacturer: vaccineData.manufacturer,
                batch_number: vaccineData.batchNumber,
                expiration_date: vaccineData.expirationDate,
                dosage: vaccineData.dosage,
                description: vaccineData.description
            };
            
            const response = await api.put(`/vaccines/${id}`, formattedData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    async deleteVaccine(id) {
        try {
            if (!id) throw new Error("Vaccine ID not provided");
            
            const response = await api.delete(`/vaccines/${id}`);
            
            if (response.status === 204 || response.status === 200) {
                return { success: true, message: 'Vaccine deleted successfully' };
            }
            
            return response.data;
        } catch (error) {
            if (error.response?.status === 404) {
                throw new Error('Vaccine not found');
            }
            if (error.response?.status === 403) {
                throw new Error('You do not have permission to delete this vaccine');
            }
            if (error.response?.status === 500) {
                throw new Error('Internal server error. Please try again later.');
            }
            
            throw error.response?.data?.message 
                ? { message: error.response.data.message }
                : { message: error.message || 'Error deleting vaccine' };
        }
    },

    async getVaccineById(id) {
        try {
            if (!id) throw new Error("Vaccine ID not provided");
            
            const response = await api.get(`/vaccines/${id}`);
            return response.data.data;
        } catch (error) {
            if (error.response?.status === 404) {
                throw new Error('Vaccine not found');
            }
            throw error.response?.data || error;
        }
    }
};

export default vaccineService; 