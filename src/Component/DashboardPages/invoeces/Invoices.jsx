import { FaSearch } from "react-icons/fa";

export default function Invoices() {
  return (
    <div className="w-full p-2">
      <form className="w-full">
        <h4 className="font-bold text-md">Billing Details</h4>
        <div className="w-full border-b border-dashed pb-4 grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-5">
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

          {/* State & Code with Icon in Code Field */}
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
      </form>
    </div>
  );
}
