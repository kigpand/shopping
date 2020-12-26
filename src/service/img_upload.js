class ImgUpload {
    async upload(file){
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'qvuvetti');
        const result = await fetch(
            'https://api.cloudinary.com/v1_1/dzjtgz64k/upload',{
                method:'POST',
                body:data,
            }
        );
        return await result.json();
    }
}

export default ImgUpload;