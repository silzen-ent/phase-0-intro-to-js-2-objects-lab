// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
        ...object,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value; 
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newObject = { ...object };
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}