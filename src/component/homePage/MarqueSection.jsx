import Marquee from "react-fast-marquee";

const tiles = [
    {
        id: "1",
        title: "New Arrival: Ceramic Blue Tile, Matte Black Tile, Marble White Elegance",
    },
    {
        id: "2",
        title: "Weekly Feature: Modern Geometric Patterns",
    },
    {
        id: "3",
        title: "New Collection: Wooden Texture Series",
    },
    {
        id: "4",
        title: "Join the Community & Share Your Designs",
    },
    {
        id: "5",
        title: "Hot Deal: Minimal Grey Tile - 20% OFF"
    }
];

const MarqueSection = () => {
    return (
        <div className='container flex justify-between items-center mx-auto gap-4 px-2 py-4 bg-gray-200 my-15'>
            <button className='btn bg-linear-to-r from-[#384959] to-[#88BDF2] text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={90} >
                {
                    tiles.map(tile => <span key={tile.id} className="mx-6">{tile.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default MarqueSection;