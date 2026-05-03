import { getCards } from "@/component/cards/getCards";
import Image from "next/image";
import Link from "next/link";

const CardDetailsPage = async ({ params }) => {
    const { id } = await params
        ;
    const cards = await getCards();
    const card = cards.find(card => card.id == id)

    const stock = card.inStock ? (
        <span className="text-green-600 font-semibold">In Stock</span>
    ) : (
        <span className="text-red-500 font-semibold">Out of Stock</span>
    );

    return (
        <div className="bg-base-200">
            <div className="container mx-auto min-h-[80vh] py-5 lg:p-20 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-base-100 shadow-sm items-center p-3 relative rounded-xl min-h-[60vh] lg:px-10">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={1000}
                            height={400}
                            className="w-full h-[50vh] object-cover"
                        />
                    </div>
                    <div className="">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4 ">
                            {card.title}
                            <div className="badge bg-linear-to-r from-[#384959] to-[#88BDF2] text-white absolute top-1 right-2">
                                {card.tag}</div></h2>
                        <p className="text-gray-600 mb-6">{card.description}</p>
                        <div className="space-y-3 text-[#384959] flex gap-4">
                            <div className="font-semibold space-y-3">
                                <p>Price</p>
                                <p>Category</p>
                                <p>Material</p>
                                <p>Dimensions</p>
                                <p>Creator</p>
                                <p>{stock}</p>
                            </div>
                            <div className="space-y-3">
                                <p>: {card.price}$</p>
                                <p>: {card.category}</p>
                                <p>: {card.material}</p>
                                <p>: {card.dimensions}</p>
                                <p>: {card.creator}</p>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-6 justify-end">
                            <button className="btn bg-linear-to-r from-[#384959] to-[#88BDF2] hover:from-[#384959] hover:to-[#384959] text-white border-none">
                                Buy Now
                            </button>
                            <Link href="/main/allTiles">
                                <button className="btn bg-linear-to-r from-[#384959] to-[#88BDF2] hover:from-[#384959] hover:to-[#384959] text-white hover:bg-[#2f3d4a] border-none">
                                    Back to All Tiles
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetailsPage;