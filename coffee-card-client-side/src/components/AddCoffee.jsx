

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const name = form.get('Name');
        const chef = form.get('Chef');
        const supplier = form.get('Supplier');
        const taste = form.get('Taste');
        const category = form.get('Category');
        const photo = form.get('Photo');
        const newCoffee = { name, supplier, chef, taste, category, photo }
        console.log(newCoffee)
        // send data to server
        //http://localhost:5000/coffees server side api
        fetch('http://localhost:5000/coffees', {
            method: 'POSt',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data) // true or 1 something show, server to response and data store
                if(data.insertedId){
                    alert('add coffee in DB') // we can here use sweet alert
                }
                form.reset();
            })


    }
    return (
        <div className="bg-orange-200 m-20 rounded-2xl border ">
            <div className="mt-10">
                <h1 className="text-3xl text-center">Add New Coffee</h1>
                <p className=" text-center px-20 mt-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleAddCoffee} className="px-10" >
                <div className="px-24 py-10  rounded-2xl">
                    {/* row 1 */}
                    <div className="grid md:grid-cols-2 gap-4 ">
                        <label class="form-control w-full">
                            <div class="label">
                                <span class="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" name="Name" class="input input-bordered w-full" />
                        </label>
                        <label class="form-control w-full ">
                            <div class="label">
                                <span class="label-text">Chef</span>
                            </div>
                            <input type="text" placeholder="Type here" name="Chef" class="input input-bordered w-full " />
                        </label>

                    </div>
                    {/* row 2 */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <label class="form-control w-full">
                            <div class="label">
                                <span class="label-text">Supplier</span>
                            </div>
                            <input type="text" placeholder="Type here" name="Supplier" class="input input-bordered w-full" />
                        </label>
                        <label class="form-control w-full ">
                            <div class="label">
                                <span class="label-text">Taste</span>
                            </div>
                            <input type="text" placeholder="Type here" name="Taste"
                                class="input input-bordered w-full " />
                        </label>

                    </div>
                    {/* row 3 Category */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <label class="form-control w-full">
                            <div class="label">
                                <span class="label-text">Category</span>
                            </div>
                            <input type="text" placeholder="Type here" name="Category" class="input input-bordered w-full" />
                        </label>
                        <label class="form-control w-full ">
                            <div class="label">
                                <span class="label-text">Details</span>
                            </div>
                            <input type="text" placeholder="Type here" name="Details" class="input input-bordered w-full " />
                        </label>


                    </div>
                    <label className="mt-5" htmlFor="form -control w-full ">
                        <div class="label">
                            <span class="label-text">photo</span>
                        </div>
                        <input type="text " placeholder="enter photo url" name="Photo" class="input input-bordered w-full " />
                    </label>
                    <button className="btn btn-primary w-full mt-5"><input type="submit" value="add" /></button>


                </div>

            </form>
        </div>
    );
};

export default AddCoffee;