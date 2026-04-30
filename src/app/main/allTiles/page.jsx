import Cards from "@/component/shared/Cards";

const AllTilesPage = async() => {
    const res = await fetch('https://tiles-gallery-beta.vercel.app/data.json');
    const cards = await res.json()

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-5">
            {
                cards.map(card => <Cards key={card.id} card={card}/>)
            }
        </div>
    );
};

export default AllTilesPage;