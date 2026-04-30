import Image from "next/image";

const Cards = ({ card }) => {
    return (
        <div className="card bg-base-100 shadow-sm rounded-xl p-3">
            <figure className="max-h-50">
                <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={200}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn bg-linear-to-r from-[#384959] to-[#88BDF2]  hover:from-[#88BDF2] hover:to-[#384959] text-white border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;