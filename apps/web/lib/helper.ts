export function getRandomColor() {
    const colors = ["bg-red-300", "bg-blue-500", "bg-pink-500", "bg-green-500", "bg-amber-400"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}