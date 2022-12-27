import React, { useEffect, useState } from 'react';
import ShopService from '../../service/shop_service';
import useDataStore from '../../store/dataStore';
import useMainStore from '../../store/mainStore';
import ViewModal from '../viewModal/viewModal';
import styles from './viewContent.module.scss';

const ViewContent = () => {

    const { id } = useMainStore();
    const shopService = new ShopService();
    const { contentData, changeContentData } = useDataStore();
    const [onViewModel, setOnViewModal] = useState(false);

    useEffect(() => {
        const currentItem = sessionStorage.getItem('currentItem');
        if (currentItem) {
            changeContentData(JSON.parse(currentItem));
        }
    }, []);

    const deleteItem = () =>{
        shopService.DeleteContents(contentData.content_num);
    }

    const onCloseView = () => {
        setOnViewModal(false);
    }
    
    return(
        <div className = {styles.viewContent}>
            { contentData && <>
                <img src = {contentData.imgUrl} className = {styles.img} alt = "imgUrl"></img>
                <div className = {styles.title}>{contentData.title}</div>
                <div className={styles.texts}>
                    <div className = {styles.content}>
                        <div className = {styles.user}>
                        <div className = {styles.nickName}>
                            판매자 : {contentData.nickName}
                        </div>
                        <div className = {styles.address} onClick={() => setOnViewModal(true)}>
                            거래지역 : {contentData.address}
                        </div>
                    </div>
                        <div className = {styles.price}>
                            가격 : {contentData.price}원
                        </div>
                        <div className = {styles.info}>
                            {contentData.info}
                        </div>
                    </div>
                    <div className={styles.line}></div>
                        {id ===contentData.user_id && 
                            <div className = {styles.renew}>
                                <button className = {styles.delete} onClick = {deleteItem}>삭제</button>
                            </div>
                        }
                </div>
                { onViewModel && <ViewModal address={contentData.address} onCloseView={onCloseView} />}
            </>}
        </div>
    );
};

export default ViewContent;