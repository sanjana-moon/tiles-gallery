import Cards from "../cards/Cards";
import { getCards } from "../cards/getCards";

const TopTilesSection = async () => {
    const cards = await getCards();
    const topCards = await cards.slice(0, 4);

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-5">
            {
                topCards.map(card => <Cards key={card.id} card={card}/>)
            }
        </div>
    );
};

export default TopTilesSection;