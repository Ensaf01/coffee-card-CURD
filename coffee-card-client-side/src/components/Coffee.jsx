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
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }

        });


    }
    return (
        <div className="bg-stone-600 m-10 rounded-2xl p-3 ">
            <div className="card card-side ">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Name : <span>{name}</span></h2>
                    <h2> <span>Chef:</span> <span>{chef}</span></h2>
                    <h2><span>Category :</span> <span>{category}</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-rows-3 ">
                    <button className="btn btn-secondary p-2">Edit</button>
                    <button className="btn btn-secondary p-5">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn  bg-red-500">Delete</button>
                </div>

            </div>

        </div>
    );
};

export default Coffee;