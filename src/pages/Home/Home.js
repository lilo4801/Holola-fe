import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import BackgroudImage from "~/components/BackgroudImage";
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const aninmes = [
    {
        title: 'JoJo no Kimyou na Bouken',
        rate: '9.7',
        year: '2022',
        episode: '34',
        categorys: [
            'Action', 'Comedy', 'Drama', 'Hacchi', 'Hareme'
        ],
        description: 'Ở Florida, 2011, Jolyne Kuujou ngồi trong phòng giam giống như cha cô Joutarou đã từng làm; vậy mà tình huống này không phải do cô ấy lựa chọn. Bị đóng khung cho một tội danh mà cô không phạm phải và bị lôi kéo để thụ án lâu hơn, Jolyne đã sẵn sàng cam chịu số phận thảm khốc với tư cách là một tù nhân của Green Dolphin Street Jail.',
        image: 'https://wallpapercave.com/wp/wp2760736.jpg'
    },
    {
        title: 'JoJo no Kimyou na Bouken',
        rate: '9.7',
        year: '2022',
        episode: '34',
        categorys: [
            'Action', 'Comedy', 'Drama', 'Hacchi', 'Hareme'
        ],
        description: 'Ở Florida, 2011, Jolyne Kuujou ngồi trong phòng giam giống như cha cô Joutarou đã từng làm; vậy mà tình huống này không phải do cô ấy lựa chọn. Bị đóng khung cho một tội danh mà cô không phạm phải và bị lôi kéo để thụ án lâu hơn, Jolyne đã sẵn sàng cam chịu số phận thảm khốc với tư cách là một tù nhân của Green Dolphin Street Jail.',
        image: 'https://khoinguonsangtao.vn/wp-content/uploads/2021/10/background-anime-4k.jpg'
    },
    {
        title: 'JoJo no Kimyou na Bouken',
        rate: '9.7',
        year: '2022',
        episode: '34',
        categorys: [
            'Action', 'Comedy', 'Drama', 'Hacchi', 'Hareme'
        ],
        description: 'Ở Florida, 2011, Jolyne Kuujou ngồi trong phòng giam giống như cha cô Joutarou đã từng làm; vậy mà tình huống này không phải do cô ấy lựa chọn. Bị đóng khung cho một tội danh mà cô không phạm phải và bị lôi kéo để thụ án lâu hơn, Jolyne đã sẵn sàng cam chịu số phận thảm khốc với tư cách là một tù nhân của Green Dolphin Street Jail.',
        image: 'https://t4.ftcdn.net/jpg/02/97/79/83/360_F_297798377_VB9egqGnRKcZxU53wybEHLRnnTrcvlAH.jpg'
    }
]

const WIDTHBACKGROUND = 1920;

const Home = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef();

    useEffect(() => {
        containerRef.current.style.transform = `translateX(${index * -WIDTHBACKGROUND}px)`
    }, [index])

    const handlePrev = () => {
        if (index === 0) {
            setIndex(aninmes.length - 1);
        } else {
            setIndex(prev => prev - 1)
        }
    }

    const handleNext = () => {


        if (index === aninmes.length - 1) {
            setIndex(0);
        } else {
            setIndex(prev => prev + 1)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div ref={containerRef} className={cx('container')} style={{ width: `${aninmes.length * WIDTHBACKGROUND}px` }}>
                {
                    aninmes.map((item, index) => <BackgroudImage key={index} data={item} />)
                }
            </div>
            <div className={cx('action-background')}>
                <div className={cx('sc')}>
                    {
                        aninmes.map((item, indexM) => <div style={{ backgroundColor: index === indexM ? '#fff' : '', width: index === indexM ? '16px' : '' }} className={cx('sc-item')} key={indexM}></div>)
                    }
                </div>
                <button onClick={handlePrev} className={cx('prev-btn')}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button onClick={handleNext} className={cx('next-btn')}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div >
    );
}

export default Home;