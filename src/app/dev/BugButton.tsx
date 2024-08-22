import { useCallback, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

const BugButton = () => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            throw new Error('ERROR');
        }
    }, [isError]);

    const handleClick = useCallback(() => {
        setIsError(true);
    }, []);

    return (
        <>
            {/* eslint-disable-next-line i18next/no-literal-string*/}
            <Button onClick={handleClick}>THROW ERROR</Button>
        </>
    );
};

export default BugButton;
