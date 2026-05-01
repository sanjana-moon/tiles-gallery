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
        <div className="container mx-auto min-h-[80vh] py-5 lg:p-20 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-base-100 shadow-sm items-center p-3">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={800}
                        height={400}
                        className="w-full h-[40vh] object-cover"
                    />
                </div>
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#384959] mb-4">{card.title}</h2>
                    <p className="text-gray-600 mb-6">{card.description}</p>
                    <div className="space-y-3 text-[#384959]">
                        <p><strong>Price:</strong> ${card.price}</p>
                        <p><strong>Category:</strong> {card.category}</p>
                        <p><strong>Material:</strong> {card.material}</p>
                        <p><strong>Dimensions:</strong> {card.dimensions}</p>
                        <p><strong>Status:</strong> {stock}</p>
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
    );
};

export default CardDetailsPage;