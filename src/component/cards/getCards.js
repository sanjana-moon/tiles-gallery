export const getCards = async () => {
    const res = await fetch('https://tiles-gallery-beta.vercel.app/data.json');
    const data = await res.json()
    return data;
}