import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown, faClockRotateLeft, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import { useEffect, useRef } from 'react';
import { VIP } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import TippyHeadless from '@tippyjs/react/headless';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        code: 'en',
        title: 'English'
    },
    {
        code: 'vi',
        title: 'Tieng Viet'
    },
    {
        code: 'Jpn',
        title: 'Japan'
    }
]

const Header = () => {

    const headerRef = useRef();

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= 100) {
            headerRef.current.style.backgroundColor = 'rgb(10, 12, 15)';
        } else {
            headerRef.current.style.backgroundColor = '';
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className={cx('header')}>
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
                <div>
                    <TippyHeadless
                        interactive
                        placement='bottom'
                        render={(attrs) =>
                            <div className={cx('header-action-box')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <img src='https://www.iqiyipic.com/lequ/20220216/bd27268275b84813a8020a71b55f9349.png' alt='empty' />
                                    <span className={cx('history-title')}>Login to track your watch history on multiple devices.</span>
                                    <Button primary long>Login</Button>
                                </PopperWrapper>
                                <div id="arrow" data-popper-arrow></div>
                            </div>
                        }
                    >
                        <div className={cx('actions-item')}>
                            <FontAwesomeIcon className={cx('actions-item-icon')} icon={faClockRotateLeft} />
                            <span>History</span>
                        </div>
                    </TippyHeadless>
                </div>

                <div>
                    <Menu
                        items={MENU_ITEMS}
                    >
                        <div className={cx('actions-item')}>
                            <FontAwesomeIcon className={cx('actions-item-icon')} icon={faGlobe} />
                            <span>Language</span>
                        </div>
                    </Menu>

                </div>

                <div>
                    <TippyHeadless
                        interactive
                        placement='bottom'
                        arrow={true}
                        render={(attrs) =>
                            <div className={cx('header-action-box')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <span className={cx('history-title')}>Login to watch trendy contents</span>
                                    <Button primary long>Login</Button>
                                </PopperWrapper>
                            </div>
                        }
                    >
                        <div className={cx('actions-item')}>
                            <FontAwesomeIcon className={cx('actions-item-icon')} icon={faUser} />
                            <span>Me</span>
                        </div>
                    </TippyHeadless>
                </div>

            </div>
            <div className={cx('actions-download')} >
                <Button outline leftIcon={<FontAwesomeIcon icon={faCircleDown} />}>APP</Button>
                <Button style={{ padding: '0' }}><VIP /></Button>
            </div>
        </header>
    );
}

export default Header;