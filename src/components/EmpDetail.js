import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EmpDetail = () => {
    const { empid } = useParams();
    const [empData, setEmpData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/employee/${empid}`)
            .then((res) => res.json())
            .then((resp) => setEmpData(resp))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <div>
            <div className="container">
                <div className="card row" style={{ textAlign: 'left' }}>
                    <div className="card-title">
                        <h2>Employee Details</h2>
                    </div>
                    <div className="card-body"></div>

                    {empData && (
                        <div>
                            <h2>
                                The Employee name is : <b>{empData.name}</b> ({empData.id})
                            </h2>
                            <h3>Contact Details</h3>
                            <h5>Email is : {empData.email}</h5>
                            <h5>Phone is : {empData.phone}</h5>
                            <Link className="btn btn-danger" to="/">
                                Back to Listing
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmpDetail;
