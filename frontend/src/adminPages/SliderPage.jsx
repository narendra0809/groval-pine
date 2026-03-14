import axios from "axios";
import React, { useEffect, useState } from "react";
import { getImagePath } from "../../utils/completeImagePath";

const SERVER_URI = import.meta.env.VITE_SERVER_URI;
const SliderPage = () => {
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleAddImageClick = () => {
    setModalOpen(true);
    setSelectedFile(null);
    setPreview("");
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedFile(null);
    setPreview("");
  };

  // Called when file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedFile(null);
      setPreview("");
      return;
    }
    setSelectedFile(file);
    // Create a preview URL
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    // Simulate upload: using preview URL as image source
    setImages((prev) => [...prev, preview]);

    // Normally you would upload the file here and save the url returned by the server to state.

    handleModalClose();
  };

  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const fetchSliderImages = async () => {
      const res = await axios.get(`${SERVER_URI}/api/user/sliders`);
      setImages(res.data.map(({ image }) => getImagePath(image)));
    };
    fetchSliderImages();
  }, []);
  return (
    <div>
      <div className="mb-4">
        <button
          onClick={handleAddImageClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Image
        </button>
      </div>

      {/* Image list */}
      <div className="space-y-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-between border p-3 rounded shadow"
          >
            <img src={img} alt={`Slider ${index + 1}`} className="h-24" />
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}

        {images.length === 0 && (
          <div className="text-gray-500">No images added yet.</div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add Image</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
                required
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mb-4 max-h-48 object-contain rounded border"
                />
              )}
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
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderPage;
