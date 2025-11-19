import { ArrowRight } from "lucide-react";

const reviewContent = [
    {
        id: 1,
        rating: "4.87/5",
        reviewSiteLogo: "",
        seeReviewsLink: "",
    },
    {
        id: 2,
        rating: "4.88/5",
        reviewSiteLogo: "",
        seeReviewsLink: "",
    },
    {
        id: 3,
        rating: "4.7/5",
        reviewSiteLogo: "",
        seeReviewsLink: "",
    },
    {
        id: 4,
        rating: "4.7/5",
        reviewSiteLogo: "",
        seeReviewsLink: "",
    },
];

export default function ReviewReport() {
    return (
        <div className="w-full flex flex-col items-center bg-gray-100 py-15 my-10 rounded-2xl  font-semibold gap-5">
            <div className="flex flex-col items-center tracking-tight text-4xl">
                <div>4.8/5 across 2,100+ verified reviews</div>
            <div>Trusted by learners on leading global platforms</div>
            </div>
            <div className="w-full grid grid-cols-4 text-2xl ">
                {reviewContent.map((review) => (
                    <div key={review.id} className="flex flex-col items-center bg-white rounded-2xl m-5 p-5 gap-5">
                        <div className="mt-5">{review.rating}</div>
                        <div>{"reviewSiteImage"}</div>
                        <div className="bg-gray-300 my-3 px-5 py-2 flex items-center justify-center gap-3 rounded-xl shadow-lg">
                            <div>See Reviews</div>
                            <ArrowRight />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
