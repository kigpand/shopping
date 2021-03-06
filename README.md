## 간단한 중고거래 사이트

### 기능 

* 구글을 통한 로그인 기능(Firebase 제공 API 활용)
___
* 로그인 확인시 게시글 작성, 삭제 가능

<img src ="https://user-images.githubusercontent.com/70279943/103325229-34686380-4a8e-11eb-956a-22e180df428e.PNG" width = "300px" /> 

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

```js
DeleteContents(content_num){
        const base = firebaseApp.database();
        const ref = base.ref(`lists/`);
        ref.on('value', snapshop => {
            if(snapshop.val()){ // firebase에서 받아온 데이터 값
                for(let i = 0; i<Object.values(snapshop.val()).length;i++){
                    if(Object.values(snapshop.val())[i].content_num === content_num){ //받아온 데이터 값의 content_num이 삭제할 content_num과 같을경우 삭제
                        firebaseApp.database().ref(`lists/${Object.keys(snapshop.val())[i]}`).remove().then(()=>{
                            alert("게시글이 삭제되었습니다");
                            window.location.href = "/";
                        });
                    }
                }
            }
        });
    }
```
___
*  게시글 작성 중 이미지 업로딩 할 경우 업로딩 되는 동안 로딩 스피너 구현 

<img src ="https://user-images.githubusercontent.com/70279943/103325235-39c5ae00-4a8e-11eb-80cc-bf2946c6e348.PNG" width = "300px">

___
* 최근 등록된 8개의 게시물 메인 홈페이지 게시
<img src ="https://user-images.githubusercontent.com/70279943/103325236-3b8f7180-4a8e-11eb-9a7c-e8bfd69d9973.PNG" width = "300px"> 

```js
{Object.keys(contents).reverse().map(key =>{
                    if(key>Object.keys(contents).length-9){
                        return <Item key = {contents[key].content_num} content = {contents[key]}/>;
                    }
                    else{
                        return;
                    }
                })}
```
___
* 검색 기능 구현

<img src ="https://user-images.githubusercontent.com/70279943/103325279-6a0d4c80-4a8e-11eb-8293-717b11a45918.PNG" width = "300px"> 

```js
    SearchContents(searchData){
            const base = firebaseApp.database();
            const ref = base.ref('lists/');
            const array = [];
            ref.on('value', snapshop => {
                if(snapshop.val()){
                    for(let i = 0; i<Object.values(snapshop.val()).length;i++){
                        if(Object.values(snapshop.val())[i].title.includes(searchData)){  //title에 searchData를 포함하는 오브젝트를 array에 저장
                            array.push(Object.values(snapshop.val())[i]);
                        }
                    }
                }

            });
            return array;
        }
```
___
### Tech
>* React(React Hook) 기반
>* React-Router 사용
>* Firebase Login, RealTime DB 기능 사용
>* Cloudynary를 통한 이미지 업로딩 기능 구현

