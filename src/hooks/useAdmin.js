import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('');
    const [isAdminLoading, setIsAdminLoadnig] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://guitar-bd-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoadnig(false);
                })
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
}

export default useAdmin;