import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error)
            throw new Error('BugButton returned error');
    }, [error]);

    const onClick = () => {
        setError(true);
    };

    return (
        <button onClick={onClick}>THROW ERROR</button>
    );
};
