import { useParams } from "react-router-dom";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
import ListingInfo from "../../components/ListingInfo"

function Listing() {
  const [listing, setListing] = useState<Listing>();
  
  const { residence_id } = useParams();
  const { listing_id } = useParams();

  console.log(residence_id);

  useEffect(() => {
    if (residence_id !== undefined && listing_id !== undefined) {
      Api.getListing(residence_id, listing_id).then((data) => {
        setListing(data);
      });
    }
  }, []);


  return listing === undefined ? (
    <>
      <p>{residence_id}</p>
    </>
  ) : (
    <div className="flex justify-center pt-32 ">
      <ListingInfo {...listing} />
    </div>
  );
}
export default Listing;
