import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService{
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout(){
        firebaseApp.auth().signOut();
    }

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

    makeCurrentContents(setlist){
        const base = firebaseApp.database();
        const ref = base.ref('lists/');
        const array = {};
        ref.on('value', snapshop => {
            if(snapshop.val()){
                for(let i = 0; i<Object.values(snapshop.val()).length;i++){
                    array[i] = Object.values(snapshop.val())[i];
                }
                setlist(array);
            }
            else{
                alert("게시글이 존재하지 않습니다");
            }
        });
        return ()=> ref.off();
    } 

    SearchContents(searchData){
        console.log(searchData);
        const base = firebaseApp.database();
        const ref = base.ref('lists/');
        const array = [];
        ref.on('value', snapshop => {
            if(snapshop.val()){
                for(let i = 0; i<Object.values(snapshop.val()).length;i++){
                    if(Object.values(snapshop.val())[i].title.includes(searchData)){
                        array.push(Object.values(snapshop.val())[i]);
                    }
                }
            }
            
        });
        return array;
    }

    DeleteContents(content_num){
        const base = firebaseApp.database();
        const ref = base.ref(`lists/`);
        ref.on('value', snapshop => {
            if(snapshop.val()){
                for(let i = 0; i<Object.values(snapshop.val()).length;i++){
                    if(Object.values(snapshop.val())[i].content_num === content_num){
                        firebaseApp.database().ref(`lists/${Object.keys(snapshop.val())[i]}`).remove().then(()=>{
                            alert("게시글이 삭제되었습니다");
                            window.location.href = "/";
                        });
                    }
                }
            }
        });
    }

    ChangeContents(content_num){

    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user =>{
            onUserChanged(user);
        })
    }
}

export default AuthService;