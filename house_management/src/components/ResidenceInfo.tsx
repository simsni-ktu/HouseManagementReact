import { Link } from "react-router-dom";

function ResidenceInfo(residence: Residence) {
  const listingsPath = `/residences/${residence.id}/listings/create`;

  return (
    <div className="max-w-sm p-16 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        City: {residence.city}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Description: {residence.description}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Street: {residence.street}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Room numbers: {residence.rooms_number}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Square meters: {residence.square_meters}
      </p>
      <div className="pt-8 flex justify-end">
        <Link to={listingsPath}>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add listing
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResidenceInfo;
