export const UploadFile = async (file)=>{
 const ApiCloudId = 'https://api.cloudinary.com/v1_1/leudy/upload'
 const formData = new FormData();
 formData.append('upload_preset','react-js-udemay-fer');
 formData.append('file',file)
try {
     const resp = await fetch(ApiCloudId,
        { method:'POST' , body: formData  }) 
} catch (er) {
    console.log('error al subir image',er)
}
}