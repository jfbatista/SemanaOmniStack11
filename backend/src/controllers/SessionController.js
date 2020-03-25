const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .select('name')
            .first()
            .where('id', id);

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with ID' });
        }

        return response.json(ong);
    },
};