
export const metadata = {
    title:"Add Products - Shopazon"
}

export default function AddProductPage() {
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form>
                <input
                    className="input input-bordered w-full  mb-3"
                    required
                    name="name"
                    placeholder="Name"
                />
                <textarea
                    required
                    name="desription"
                    placeholder="Description"
                    className="textarea textarea-bordered mb-3 w-full"
                
                />
                <input
                    className="input input-bordered w-full  mb-3"
                    required
                    name="imageUrl"
                    placeholder="Image Url"
                    type="url"
                />
                <input
                    className="input input-bordered w-full  mb-3"
                    required
                    name="price"
                    placeholder="Price"
                    type="number"
                />
                <button type="submit" className="btn btn-primary btn-block ">Add Product</button>
            </form>
        </div>
    )
}