import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown, faClockRotateLeft, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

const Header = () => {
    return (
        <header className={cx('header')}>
            <img src='https://preview.colorlib.com/theme/aranoz/img/logo.png' alt='logo' />
            <ul className={cx('nav')}>
                <li>For you</li>
                <li>Movie</li>
                <li>Drama</li>
                <li>More</li>
            </ul>
            <div className={cx('search-input')}>
                <input type='text' placeholder='Search' />
                <button className={cx('search-btn')}><FontAwesomeIcon className={cx('search-icon')} icon={faSearch} /></button>
            </div>
            <div className={cx('actions')}>
                <div className={cx('actions-item')}>
                    <FontAwesomeIcon className={cx('actions-item-icon')} icon={faClockRotateLeft} />
                    <span>History</span>
                </div>
                <div className={cx('actions-item')}>
                    <FontAwesomeIcon className={cx('actions-item-icon')} icon={faGlobe} />
                    <span>Language</span>
                </div>
                <div className={cx('actions-item')}>
                    <FontAwesomeIcon className={cx('actions-item-icon')} icon={faUser} />
                    <span>Me</span>
                </div>
            </div>
            <div className={cx('actions-download')} >
                <Button outline leftIcon={<FontAwesomeIcon icon={faCircleDown} />}>APP</Button>
                <Button second >VIP</Button>
            </div>
        </header>
    );
}

export default Header;