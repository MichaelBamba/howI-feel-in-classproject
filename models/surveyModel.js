const db = require('./conn');

class classInfo {
    constructor(id, name, rank) {
        this.id = id;
        this.name = name;
        this.rank = ranking;
    }
    static async getAllTopicData() {
        try {
            const response = await db.any('SELECT * FROM topics1 INNER JOIN class_status on topics1.ranking = class_status.id; '
            );


            return response;
        } catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }

    static async getAllStatuses() {
        try {
            const response = await db.any(`SELECT * FROM class_status;`);
            return response

        }
        catch (error) {
            console.error('error', error);
            return error;
        }
    }
}





module.exports = classInfo;