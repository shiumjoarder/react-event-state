export default function Cart() {
    let counter = 0;
    const handleAddToCart = () => {
        counter += 1
    }
    return (
        <>
            <h3>Shopping Cart</h3>
            <p>Items in the Cart : {counter}</p>
            <button onClick={handleAddToCart}>Buy Now</button>
        </>
    )
}