const connection = require("./connection");



module.exports = {
    getDepartment() {
        return connection.query( "SELECT * FROM department");
    },

    getRoles() {
        return connection.query( "SELECT * FROM role");
    },

    getEmployees() {
        return connection.query( "SELECT * FROM employees");
    },

    insertRole(data) {
        return connection.query("INSERT INTO role SET ?", data);
    },

    insertDepartment(data) {
        return connection.query("INSERT INTO department SET ?", data);
    },

    insertEmployee(data) {
        return connection.query("INSERT INTO employees SET ?", data);
    }



};