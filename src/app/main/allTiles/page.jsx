import Cards from "@/component/cards/Cards";
import CategoryFilter from "@/component/cards/CategoryFilter";
import { getCards } from "@/component/cards/getCards";
import NoTilesCard from "@/component/cards/NoTilesCard";
import Search from "@/component/cards/Search";

const AllTilesPage = async ({ searchParams }) => {

    const { search, category } = await searchParams
    const cards = await getCards()

    let filteredCards = category ? cards.filter(card => card.category.toLowerCase() == category.toLowerCase()) : cards

    if (search) {
        filteredCards = filteredCards.filter(card =>
            card.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between items-center">
                <CategoryFilter />
                <Search />
            </div>
            <div>
                {
                    filteredCards.length === 0 ? (<NoTilesCard />) :
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-5">
                            {
                                filteredCards.map(card => <Cards key={card.id} card={card} />)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllTilesPage;