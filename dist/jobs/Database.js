"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    static runDatabaseJobs() {
        this.backupJobs();
        this.updateUserJobs();
    }
    static updateUserJobs() {
    }
    static backupJobs() {
    }
}
exports.Database = Database;
