import { Link, useNavigate } from "react-router-dom";
import { Api } from "../api/api";
import { useEffect, useState } from "react";
import { convertToComment } from "../utils/formConverter";

function ListingInfo(listing: Listing) {

  const listingEditPath = `/residences/${listing.residence_id}/listings/${listing.id}/edit`;

  const navigate = useNavigate();
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);



  useEffect(() => {
    console.log("use effect rendering")
    if (listing.residence_id !== undefined && listing.id !== undefined) {
      Api.getComments(listing.residence_id, listing.id).then((data) => {
        setComments(data);
      });
    }
  }, []);

  const handleClick = () => {
    if (listing.residence_id !== undefined && listing.id !== undefined) {
      Api.deleteListing(listing.residence_id, listing.id).then(() => {
        navigate("/listings");
      });
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (listing.residence_id !== undefined && listing.id !== undefined) {
      console.log(convertToComment(comment));
    
      Api.postComment(
        listing.residence_id,
        listing.id,
        convertToComment(comment)
      )
        .then((comment) => {
          setComments((prevComments) => [...prevComments, comment]);
        })
        .finally(() => {
          setComment("");
        });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="max-w-sm p-16 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-8">
        <Link to ={listingEditPath}>
          <p className="bg-green-500 p-2 rounded-xl font-bold">
          Edit
          </p>

        </Link>
          <button
            className="bg-red-500 p-2 rounded-xl font-bold"
            onClick={handleClick}
          >
            Remove
          </button>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Issue type: {listing.issue_type}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Description: {listing.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Fix deadline: {listing.fix_deadline.toString()}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Can pay: {listing.price} $
        </p>
      </div>

      <div className="flex flex-col mt-32 mb-16 p-16 bg-white border border-gray-200 rounded-2xl shadow">
        <p>Post comment</p>
        <form
          onSubmit={handleCommentSubmit}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Post
          </button>
        </form>
        {comments.length > 0 && (
          <ul className="mt-4">
            {comments.map((comment, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-400">
                {comment.comment_text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListingInfo;
