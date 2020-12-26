import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ImgUpload from '../../service/img_upload';
import styles from './make_contents.module.css';

const MakeContents = ({id, nickName,authService}) => {

    const history = useHistory();
    const titleRef = useRef();
    const infoRef = useRef();
    const priceRef = useRef();
    const addressRef = useRef();

    const [uploadUrl,setUploadUrl] = useState("/img/no_img.png");
    const [loading,setLoading] = useState(false);
    const imgUpload = new ImgUpload();

    const onChange = async (event) =>{
        setLoading(true);
        const upload = await imgUpload.upload(event.target.files[0]);
        setUploadUrl(upload.url);
        alert("이미지 등록이 완료되었습니다.");
        setLoading(false);
    }

    const pushClick = () =>{
        if(!titleRef.current.value || !infoRef.current.value || !priceRef.current.value || !addressRef.current.value){
            alert("내용을 채워주세요!");
            return;
        }
        else{
            const title = titleRef.current.value;
            const imgUrl = uploadUrl;
            const info = infoRef.current.value;
            const price = priceRef.current.value;
            const address = addressRef.current.value;

            authService.pushData(id,nickName,title,imgUrl,info,price,address);
            titleRef.current.value = "";
            infoRef.current.value = "";
            priceRef.current.value = "";
            addressRef.current.value = "";
            history.push('/');
        }
    }

    const returnToHome = () =>{
        history.push('/');
    }

    return(
        <div className = {styles.bg}>
            <h1 className = {styles.sub}>게시글 작성</h1>
            <input type = "text" className = {styles.title} ref = {titleRef} placeholder = "제목..."/>
            <input type = "text" className = {styles.price} ref = {priceRef} placeholder = "가격..."></input>
            <input type = "text" className = {styles.address} ref = {addressRef} placeholder = "주소..."></input>
            <input type = "file" accept = "image/*" className = {styles.img} onChange = {onChange}></input>
            <textarea name="info" className = {styles.info} cols="30" rows="10" ref = {infoRef} placeholder = "내용..."></textarea>
            <div className = {styles.btns}>
                {loading && 
                    <div className = {styles.loading}>
                        <div className = {styles.loading_text}>이미지 업로드 중...</div>
                        <div className = {styles.spinner}></div>
                    </div>
                }
                {!loading && <button className = {styles.pushbtn} onClick = {pushClick}>작성 완료</button>}
                <button className = {styles.canclebtn} onClick = {returnToHome}>취소</button>
            </div>
        </div>
    );
};

export default MakeContents;