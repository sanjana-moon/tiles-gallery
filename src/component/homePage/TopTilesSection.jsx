import Cards from "../shared/Cards";

const TopTilesSection = async () => {
    const res = await fetch('https://tiles-gallery-beta.vercel.app/data.json');
    const cards = await res.json()
    const topCards = await cards.slice(0, 4);
    console.log('Top Cards: ', topCards);

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-5">
            {
                topCards.map(card => <Cards key={card.id} card={card}/>)
            }
        </div>
    );
};

export default TopTilesSection;