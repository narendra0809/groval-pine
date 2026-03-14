import React, { useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sample Product 1",
      main_image: "https://via.placeholder.com/150?text=Main+Image+1",
      modal_images: [
        "https://via.placeholder.com/80?text=Modal+1",
        "https://via.placeholder.com/80?text=Modal+2",
      ],
      modal_video: "video1.mp4",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  // Form states:
  const [name, setName] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [modalImages, setModalImages] = useState([]);
  const [modalImagesPreviews, setModalImagesPreviews] = useState([]);
  const [modalVideo, setModalVideo] = useState(null);
  const [modalVideoName, setModalVideoName] = useState("");

  // Handlers for form fields (same as before)
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  const handleModalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setModalImages(files);
    setModalImagesPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleModalVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setModalVideo(file);
      setModalVideoName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: products.length + 1,
      name,
      main_image: mainImagePreview,
      modal_images: modalImagesPreviews,
      modal_video: modalVideoName || null,
    };

    setProducts((prev) => [...prev, newProduct]);

    setName("");
    setMainImage(null);
    setMainImagePreview("");
    setModalImages([]);
    setModalImagesPreviews([]);
    setModalVideo(null);
    setModalVideoName("");
    setModalOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setName("");
    setMainImage(null);
    setMainImagePreview("");
    setModalImages([]);
    setModalImagesPreviews([]);
    setModalVideo(null);
    setModalVideoName("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      {/* Modal with form */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded p-6 w-full max-w-3xl shadow-lg overflow-auto max-h-[90vh]">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">
                  Product Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter product name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Main Image<span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleMainImageChange}
                  className="mb-2"
                />
                {mainImagePreview && (
                  <img
                    src={mainImagePreview}
                    alt="Main Preview"
                    className="max-h-48 rounded border"
                  />
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Modal Images (multiple)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleModalImagesChange}
                  className="mb-2"
                />
                <div className="flex gap-4 flex-wrap">
                  {modalImagesPreviews.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Modal ${idx + 1}`}
                      className="max-h-24 rounded border"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Modal Video (optional)
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleModalVideoChange}
                  className="mb-2"
                />
                {modalVideoName && (
                  <div className="text-sm text-gray-700">
                    Selected video: {modalVideoName}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Products list */}
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <div className="flex flex-wrap items-center gap-4">
              <img
                src={product.main_image}
                alt={`${product.name} Main`}
                className="h-24 rounded border"
              />
              <div className="flex gap-2 flex-wrap">
                {product.modal_images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.name} modal ${idx + 1}`}
                    className="h-16 rounded border"
                  />
                ))}
              </div>
              {product.modal_video && (
                <div className="text-sm text-gray-700">
                  🎥 {product.modal_video}
                </div>
              )}
            </div>
          </div>
        ))}
        {products.length === 0 && <div>No products found.</div>}
      </div>
    </div>
  );
};

export default ProductsPage;
