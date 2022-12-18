import React from 'react';
import ShopService from '../../service/shop_service';
import useDataStore from '../../store/dataStore';
import useMainStore from '../../store/mainStore';
import styles from './viewContent.module.scss';

const ViewContent = () => {

    const { id } = useMainStore();
    const shopService = new ShopService();
    const { contentData } = useDataStore();

    const deleteItem =() =>{
        shopService.DeleteContents(contentData.content_num);
    }
    
    return(
        <div className = {styles.viewContent}>
            <img src = {contentData.imgUrl} className = {styles.img} alt = "imgUrl"></img>
            <div className = {styles.title}>{contentData.title}</div>
            <div className={styles.texts}>
                <div className = {styles.content}>
                    <div className = {styles.user}>
                    <div className = {styles.nickName}>
                        판매자 : {contentData.nickName}
                    </div>
                    <div className = {styles.address}>
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
        </div>
    );
};

export default ViewContent;