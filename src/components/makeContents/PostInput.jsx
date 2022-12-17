import DaumPostcodeEmbed from 'react-daum-postcode';
import styles from './PostInput.module.scss';

const PostInput = ({ onGetAddress }) => {

    const onComplte = (data) => {
        let address = data.address;
        let getData = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                getData += data.bname;
            }
            if (data.buildingName !== '') {
                getData += (getData !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            address += (getData !== '' ? ` (${getData})` : '');
        }

        onGetAddress(address);
    }

    return (
        <div className={styles.postInput}>
            <DaumPostcodeEmbed 
                className='post'
                autoClose={true}
                onComplete={onComplte}
            />
        </div>
    )
}

export default PostInput;