import Cards from "../cards/Cards";
import { getCards } from "../cards/getCards";

const TopTilesSection = async () => {
    const cards = await getCards();
    const topCards = await cards.slice(0, 4);

    return (
        <div className="container mx-auto mb-20 p-6 border-b pb-20 border-gray-300">
            <h3 className="text-3xl mb-6 font-bold text-[#384959]">Our Top Collection:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    topCards.map(card => <Cards key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default TopTilesSection;