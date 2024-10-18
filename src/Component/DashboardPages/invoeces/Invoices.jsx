import { FaPlus, FaSearch } from "react-icons/fa";

export default function Invoices() {
  return (
    <div className="w-full p-2">
      <form className="w-full">
        <h4 className="font-bold text-md">Billing Details</h4>
        <div className="w-full border-b border-dashed py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Client Dropdown with Search Icon */}
          <div className="w-full">
            <label className="pb-2">
              Client<span className="text-red-500">*</span>
            </label>
            <div className="w-full relative">
              <select
                className="w-full px-4 py-2 rounded-md border outline-0 appearance-none"
                placeholder="Enter company name"
              >
                <option value="">Select company</option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
                {/* Add more options as needed */}
              </select>
              <FaSearch className="absolute top-3 right-3 text-gray-500" />
            </div>
          </div>

          {/* Date with Icon Inside Input */}
          <div className="w-full">
            <label className="pb-2">
              Date<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full px-4 py-2 rounded-md border outline-0"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>

          {/* State & Code with Search Icon */}
          <div className="w-full">
            <label className="pb-2">
              State & Code<span className="text-red-500">*</span>
            </label>
            <div className="w-full flex gap-2">
              <div className="relative w-3/4">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border outline-0"
                  placeholder="State"
                />
                <FaSearch className="absolute top-3 right-3 text-gray-500" />
              </div>
              <div className="relative w-1/4">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border outline-0"
                  placeholder="Code"
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="w-full">
            <label className="pb-2">
              Status<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border outline-0"
              placeholder="Enter status"
            />
          </div>

          {/* Tax Type */}
          <div className="w-full">
            <label className="pb-2">
              Tax Type<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border outline-0"
              placeholder="Enter tax type"
            />
          </div>

          {/* Invoice Type */}
          <div className="w-full">
            <label className="pb-2">
              Invoice Type<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border outline-0"
              placeholder="Enter invoice type"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full border-b border-dashed py-5">
          <h4 className="font-bold mb-4 text-md">Product Details</h4>
          <button className="flex px-4 p-2 justify-center items-center gap-3 rounded-md border-0 bg-[#ffebeb] text-[#921B1D]">
            <FaPlus /> Add Product(s)
          </button>
        </div>

        {/* Cheque Details */}
        <div className="w-full border-b border-dashed py-5">
          <h4 className="font-bold mb-4 text-md">Cheque Details</h4>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {/* Cheque Number */}
            <div className="w-full">
              <label className="pb-2">
                Cheque Number<span className="text-red-500">*</span>
              </label>
              <div className="w-full relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border outline-0"
                  placeholder="Enter Cheque Number"
                />
              </div>
            </div>

            {/* Cheque Date with Icon Inside Input */}
            <div className="w-full">
              <label className="pb-2">
                Cheque Date<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border outline-0"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>

            {/* Bank Name */}
            <div className="w-full">
              <label className="pb-2">
                Bank Name<span className="text-red-500">*</span>
              </label>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border outline-0"
                  placeholder="Enter Bank Name"
                />
              </div>
            </div>
            {/* Cheque Amount */}
            <div className="w-full">
              <label className="pb-2">
                Cheque Amount<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border outline-0"
                placeholder="Enter Cheque Amount"
              />
            </div>
          </div>
        </div>

        <div className="w-full border-b border-dashed py-5">
          <h4 className="font-bold mb-4 text-xl">Terms & Conditions</h4>
          <div className="w-full mt-3">
            <p className="mb-3 font-semibold">Notes:</p>
            <ol className="list-decimal  list-inside text-gray-600 space-y-2">
              <li className="ml-[10]">Some notes go here.</li>
              <li className="ml-[10]">Some notes go here.</li>
            </ol>
          </div>
        </div>

        <div className="w-full flex justify-end items-end pt-10 py-5">
          <div className="flex justify-center items-center gap-4">
            <button className="text-[#921B1D] bg-none border-0 p-2">
              Save
            </button>
            <button className="p-2 px-4 rounded-md bg-[#921B1D] text-white">
              Save & Print
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
