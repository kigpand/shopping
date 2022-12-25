import { useEffect } from 'react';
import styles from './viewModal.module.scss';

const ViewModal = ({ address, onCloseView }) => {

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 4
        };

        const map = new window.kakao.maps.Map(mapContainer, options);

        const geocoder = new window.kakao.maps.services.Geocoder();
        onGetLatLng(geocoder, map);
    }, []);

    const onGetLatLng = (geocoder, map) => {
        geocoder.addressSearch(address, function(result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        
                new window.kakao.maps.Marker({
                    map: map,
                    position: coords
                });
        
                map.setCenter(coords);
            } 
        });   
    }

    return (
        <div className={styles.viewModal}>
            <div id='map' className={styles.map}></div>
            <div className={styles.back} onClick={onCloseView}></div>
        </div>
    )
}

export default ViewModal;