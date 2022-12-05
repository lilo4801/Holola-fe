import styles from './CategoryItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CategoryItem = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

export default CategoryItem;