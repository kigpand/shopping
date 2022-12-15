import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ImgUpload from '../../service/img_upload';
import styles from './makeContents.module.scss';
import NOIMG from '../../img/no_img.png';
import PLUS from '../../img/plus.png';
import ShopService from '../../service/shop_service';
import useMainStore from '../../store/mainStore';
import useDataStore from '../../store/dataStore';
import { useInput } from '../../hooks/useInput';

const MakeContents = () => {

    const history = useHistory();
    const { id, nickName } = useMainStore();

    const imgRef = useRef();
    const infoInput = useInput('');
    const priceInput = useInput('');
    const addressInput = useInput('');
    const titleInput = useInput('');
    const shopService = new ShopService();

    const [uploadUrl,setUploadUrl] = useState(NOIMG);
    const { changeLoading } = useDataStore();
    const imgUpload = new ImgUpload();

    const onChange = async (event) =>{
        changeLoading(true);
        const upload = await imgUpload.upload(event.target.files[0]);
        setUploadUrl(upload.url);
        alert("이미지 등록이 완료되었습니다.");
        changeLoading(false);
    }

    const onBtnClick = () =>{
        imgRef.current.click();
    }

    const pushClick = () =>{
        if(!titleInput.value || !infoInput.value || !priceInput.value || !addressInput.value){
            alert("내용을 채워주세요!");
            return;
        }
        else{
            const title = titleInput.value;
            const imgUrl = uploadUrl;
            const info = infoInput.value;
            const price = priceInput.value;
            const address = addressInput.value;

            shopService.pushData(id,nickName,title,imgUrl,info,price,address);
            history.push('/');
        }
    }

    const returnToHome = () =>{
        history.push('/');
    }

    return(
        <div className = {styles.bg}>
            <div className = {styles.sub}>게시글 작성</div>
            <div className={styles.imgs}>
                <div className = {styles.inputImg}>
                    <label className = {styles.label}>이미지 업로드</label>
                    <input ref = {imgRef} type = "file" accept = "image/*" className = {styles.img} onChange = {onChange}></input>
                    <button className = {styles.inputBtn} onClick = {onBtnClick}><img className ={styles.plus} src = {PLUS} alt = "플러스"/></button>
                </div>
                <div className={styles.viewImg}>
                    <label className = {styles.label}>업로드된 이미지 보기</label>
                    <img src={uploadUrl} className={styles.view} alt ="뷰이미지" />
                </div>
            </div>
            <label className = {styles.label}>Title</label>
            <input type = "text" className = {styles.title} placeholder = "제목..." {...titleInput} />
            <label className = {styles.label}>Price</label>
            <input type = "number" className = {styles.price} placeholder = "가격..." {...priceInput}></input>
            <label className = {styles.label}>Address</label>
            <input type = "text" className = {styles.address} placeholder = "주소..." {...addressInput}></input>
            <label className = {styles.label}>Description</label>
            <textarea name="info" className = {styles.info} cols="30" rows="10" placeholder = "내용..." {...infoInput}></textarea>
            <div className = {styles.btns}>
                <button className = {styles.pushbtn} onClick = {pushClick}>작성 완료</button>
                <button className = {styles.canclebtn} onClick = {returnToHome}>취소</button>
            </div>
        </div>
    );
};

export default MakeContents;