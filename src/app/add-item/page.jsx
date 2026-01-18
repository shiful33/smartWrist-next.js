"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddItemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      toast.error("Please login first!");
      router.push("/login");
    }
  }, [router]);

  const handleAddItem = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const image = form.image.value;
    const description = form.description.value;

    const newProduct = { title, price: parseFloat(price), image, description };

    try {
      const response = await fetch(`/api/add-product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        toast.success("Product added successfully!");
        form.reset();
        window.location.href = "/all-watches";
      } else {
        toast.error("Failed to add product!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }

    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
  };

  return (
    <div className="container min-h-screen px-4 py-10 mx-auto">
      <div className="max-w-2xl p-8 mx-auto bg-white border border-gray-100 shadow-2xl rounded-3xl text-shadow-md text-primary">
        <h2 className="mb-8 text-3xl font-black text-center text-primary text-shadow-md">
          Add New Luxuries Watch
        </h2>

        <form onSubmit={handleAddItem} className="space-y-5">
          <div className="form-control">
            <label className="font-bold label text-secondary">
              Watch Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="e.g. Rolex Submariner"
              className="w-full input input-bordered rounded-xl"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="form-control">
              <label className="font-bold label text-secondary">
                Sizes
              </label>
              <input
                name="sizes"
                type="text"
                placeholder="sizes"
                className="w-full input input-bordered rounded-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="font-bold label text-secondary">
                Colors
              </label>
              <input
                name="color"
                type="text"
                placeholder="colors"
                className="w-full input input-bordered rounded-xl"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="form-control">
              <label className="font-bold label text-secondary">
                Price (৳)
              </label>
              <input
                name="price"
                type="number"
                placeholder="999"
                className="w-full input input-bordered rounded-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="font-bold label text-secondary">
                Image URL
              </label>
              <input
                name="image"
                type="text"
                placeholder="https://image-link.com"
                className="w-full input input-bordered rounded-xl"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="font-bold label text-secondary">
              Description
            </label>
            <textarea
              name="description"
              className="w-full h-32 textarea textarea-bordered rounded-xl"
              placeholder="Describe the watch details..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full text-white text-lg rounded-xl mt-4 ${loading ? "loading" : ""}`}
          >
            {loading ? "Saving..." : "Publish Watch"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
