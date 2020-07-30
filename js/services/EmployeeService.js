//File tương tác dữ liệu với backend thông qua api
var EmployeeService = function () {
    this.add = function (newEmployee) {
        return axios({
            url: 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employee',//url là đường dẫn đến file lấy dữ liệu ở backend
            method: 'POST',//Phương thức trao đổi dữ liệu với backend
            data: newEmployee
        })
    };

    this.update =function(id,employeeUpdate){
        return axios({
            url:'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employee/'+id,
            method:'PUT',
            data: employeeUpdate
        })
    };

    this.delete=function(id){
        return axios({
            url:'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employee/'+id,
            method:'DELETE',
        })
    };
}

