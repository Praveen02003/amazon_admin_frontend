export const handleaddimagefile = (event, setAddimage) => {
    const file = event.target.files[0];
    if (!file) return; // ✅ Prevents "not of type Blob" error

    const reader = new FileReader();
    reader.onloadend = () => {
        setAddimage(reader.result);
    };
    reader.readAsDataURL(file); // only runs if file is valid
};
