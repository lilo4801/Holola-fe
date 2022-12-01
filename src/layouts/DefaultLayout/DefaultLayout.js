import Header from "../components/Header";
import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;