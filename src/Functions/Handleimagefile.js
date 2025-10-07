export const handleupdateimagefile = (event, setUpdateimage) => {
    const file = event.target.files[0];
    if (!file) return; // ✅ prevents error when no file selected

    const reader = new FileReader();
    reader.onloadend = () => {
        setUpdateimage(reader.result);
    };
    reader.readAsDataURL(file);
};
