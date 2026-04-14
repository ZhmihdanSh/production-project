import { memo } from 'react';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = memo(() => {
    return (
        <div className={classes.NotFoundPage}>
            Страница не найдена!
        </div>
    );
});

export default NotFoundPage;
