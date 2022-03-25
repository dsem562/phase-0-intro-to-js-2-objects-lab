// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "1234 Lame Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const removedEmployeeKey = {...employee};
    delete removedEmployeeKey[key];
    return removedEmployeeKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}