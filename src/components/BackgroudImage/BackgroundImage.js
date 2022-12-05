import styles from './BackgroundImage.module.scss';
import classNames from 'classnames/bind';
import CategoryItem from '../CategoryItem/CategoryItem';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AddToWatch, PlayToWatch } from '../Icons';

const cx = classNames.bind(styles);

const BackgroundImage = ({ data }) => {
    const { title, rate, year, episode, categorys, description, image } = data
    return (
        <div className={cx('wrapper')}>
            <div className={cx('background-img')} style={{ backgroundImage: `url(${image})` }}>
                <div className={cx('description')}>
                    <h1 className={cx('title')}>{title}</h1>
                    <div className={cx('information-aninme')}>
                        <span className={cx('rate')}>
                            <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                            {rate}</span>
                        <span className={cx('year')}>{year}</span>
                        <span className={cx('episodes')}>{episode}</span>
                    </div>
                    <div className={cx('category')}>
                        {
                            categorys.map((item, index) => <CategoryItem key={index}>{item}</CategoryItem>)
                        }
                    </div>
                    <div className={cx('description-detail')}>
                        {description}
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('actions-item')}><PlayToWatch /></div>
                        <div className={cx('actions-item')}><AddToWatch /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BackgroundImage;