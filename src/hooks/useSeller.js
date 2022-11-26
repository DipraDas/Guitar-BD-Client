import { useEffect, useState } from "react";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState('');
    const [isSellerLoading, setIsSellerLoadnig] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                    setIsSellerLoadnig(false);
                })
        }
    }, [email]);
    return [isSeller, isSellerLoading];
}

export default useSeller;