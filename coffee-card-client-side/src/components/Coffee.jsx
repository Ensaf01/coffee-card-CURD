import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
    const { _id, name, supplier, chef, taste, category, photo } = coffee;

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your coffee has been deleted.",
                                "success"
                            );
                        }
                    })
            }

        });


    }
    return (
        <div className="bg-stone-600 m-2 rounded-2xl  p-2">
            <div className="card card-side w-full ">
                <figure className="w-1/5">
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body text-white w-2/5">
                    <h2 className="card-title ">Name :<span>{name}</span></h2>
                    <h2> <span>Chef:</span> <span>{chef}</span></h2>
                    <h2><span>Category :</span> <span>{category}</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-rows-3 ">
                    <button className="btn btn-secondary w-full">view</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-secondary w-full">edit</button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn  bg-red-500 w-full">Delete</button>
                </div>

            </div>

        </div>
    );
};

export default Coffee;