import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { usePostCommentMutation } from "../redux/book/bookApi";
type FormData = {
  comment: string;
};
type ReviewData = {
  id: string;
  reviews: { email: string; comment: string }[];
};
const SingleProductReviews = ({ id, reviews }: ReviewData) => {
  const { email } = useAppSelector((state) => state.user.user);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [postComment] = usePostCommentMutation();
  const onSubmit = ({ comment }: FormData) => {
    postComment({ email, comment, id });
    setValue("comment", "");
  };
  return (
    <>
      <div className="max-w-lg shadow-md">
        {email && (
          <form
            action=""
            className="w-full mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-2">
              <label htmlFor="comment" className="text-lg text-gray-600">
                Add a comment
              </label>
              <input
                {...register("comment", { required: "Comment is required" })}
                className="w-full text-gray-900 h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                name="comment"
                placeholder=""
              />
            </div>
            <div>
              {errors.comment && (
                <span className="text-red-700">{errors.comment.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
            >
              Comment
            </button>
          </form>
        )}
      </div>
      <div>
        <h4 className="text-gray-200 text-xl my-5">Comments</h4>
        {reviews &&
          reviews.map((review, i) => (
            <p key={i} className="shadow-lg my-4 rounded-lg py-4">
              <strong>{review.email}</strong>: {review.comment}
            </p>
          ))}
      </div>
    </>
  );
};

export default SingleProductReviews;
