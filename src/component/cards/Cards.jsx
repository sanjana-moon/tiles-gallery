import Image from "next/image";
import Link from "next/link";

const Cards = ({ card }) => {
    return (
        <div className="card bg-base-100 shadow-sm rounded-xl transition-transform duration-300 hover:scale-105">
            <figure className="h-60 p-3 overflow-hidden">
                <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={200}
                    className="w-fit h-fit overflow-hidden"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {card.title}
                </h2>
                <div className="card-actions justify-end">
                    <Link href={`/main/allTiles/tileDetails/${card.id}`}><button className="btn bg-linear-to-r from-[#384959] to-[#88BDF2]  hover:from-[#384959] hover:to-[#384959] text-white border-none">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;