## 간단한 중고거래 사이트

<img src = "https://user-images.githubusercontent.com/70279943/103325323-afca1500-4a8e-11eb-92eb-4d02e7d64120.PNG" width = "500px"> 

### 기능 
<img src ="https://user-images.githubusercontent.com/70279943/103325229-34686380-4a8e-11eb-956a-22e180df428e.PNG" width = "300px" /> 

* 구글을 통한 로그인 기능(Firebase 제공 API 활용)
```js
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

            shopService.pushData(id,nickName,title,imgUrl,info,price,address);
            titleRef.current.value = "";
            infoRef.current.value = "";
            priceRef.current.value = "";
            addressRef.current.value = "";
            history.push('/');
        }
    }
```
```js

    pushData(id,nickName,title,imgUrl,info,price,address){
        const base = firebaseApp.database();
        base.ref('lists/').push({
            content_num : Date.now(),
            user_id : id,
            nickName : nickName,
            title : title,
            imgUrl : imgUrl,
            info : info,
            price: price,
            address : address
        }).then(alert("게시글 등록이 완료되었습니다"));
    }
```
* 로그인 확인시 게시글 작성, 삭제 가능

___

<img src ="https://user-images.githubusercontent.com/70279943/103325235-39c5ae00-4a8e-11eb-80cc-bf2946c6e348.PNG" width = "300px">

*  게시글 작성 중 이미지 업로딩 할 경우 업로딩 되는 동안 로딩 스피너 구현 
___
<img src ="https://user-images.githubusercontent.com/70279943/103325236-3b8f7180-4a8e-11eb-9a7c-e8bfd69d9973.PNG" width = "300px"> 

* 최근 등록된 8개의 게시물 메인 홈페이지 게시
___
<img src ="https://user-images.githubusercontent.com/70279943/103325279-6a0d4c80-4a8e-11eb-8293-717b11a45918.PNG" width = "300px"> 

* 검색 기능 구현
___
### Tech
>* React(React Hook) 기반
>* React-Router 사용
>* Firebase Login, RealTime DB 기능 사용
>* Cloudynary를 통한 이미지 업로딩 기능 구현

