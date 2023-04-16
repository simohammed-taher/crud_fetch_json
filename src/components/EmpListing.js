import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [employees, setEmployees] = useState();
    const navigate = useNavigate();

    const loadDetail = (id) => {
        navigate("/employee/detail/" + id);
    };

    const loadEdit = (id) => {
        navigate("/employee/edit/" + id);
    };

    const removeEmployee = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch(`http://localhost:8000/employee/${id}`, {
                method: "DELETE",
            })
                .then((res) => {
                    alert("Removed successfully.");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    useEffect(() => {
        fetch("http://localhost:8000/employee")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setEmployees(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                        <Link to="employee/create" className="btn btn-success">
                            Add New (+)
                        </Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees &&
                                    employees.map((item) => (<tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <div className="btn-group" role="group">
                                                <button onClick={() => { loadEdit(item.id); }}
                                                    type="button" className="btn btn-primary">Edit</button>
                                                <button onClick={() => { removeEmployee(item.id); }}
                                                    type="button" className="btn btn-danger">
                                                    Remove
                                                </button>
                                                <button onClick={() => { loadDetail(item.id); }}
                                                    type="button" className="btn btn-secondary">
                                                    Details
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpListing;
