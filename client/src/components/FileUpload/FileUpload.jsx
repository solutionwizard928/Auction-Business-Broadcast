import React, { useRef, useState } from 'react';
import {defaultAvatarPath} from "../../utils/urlPath";

function FileUpload({imagePath, _setImage}) {

  const [image, setImage] = useState();
  const fileInputRef = useRef(null);
 
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      _setImage(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {image && (
          <div>
            <img
              src={image}
              alt="Preview"
              style={{ maxWidth:'180px', height: '180px', cursor: 'pointer', borderRadius : "45%"}}
              onClick={handleImageClick}
            />
          </div>
        )}
        {!image && (
          <img
            src={defaultAvatarPath+imagePath} // You can replace this with your default image or placeholder
            alt="Upload Image"
            style={{ maxWidth:'180px', height: '180px', cursor: 'pointer', borderRadius : "45%" }}
            onClick={handleImageClick}
          />
        )}
      </div>
    </div>
  );
}

export default FileUpload;
