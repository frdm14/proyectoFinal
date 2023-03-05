const calculateRating = reviews => {

    const totalRating = reviews?.reduce((acc, item) => acc + item.reting, 0);
    const rating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1);

    return {
        totalRating,
        rating
    }
}

export default calculateRating