import React, { useContext, useEffect } from "react";
import { Mycontext } from "../App";
import { handleupdateimagefile } from "../Functions/Handleimagefile";
import { updateitem } from "../Functions/Updateitem";
import "../Update/Update.css"; // import css file
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert, Button } from "@mui/material";
import { restrictpage } from "../Functions/Restrictuser";
export const Update = () => {
    const {
        count,
        setCount,
        updateimage,
        setUpdateimage,
        updatetitle,
        setUpdatetitle,
        updatediscription,
        setUpdatediscription,
        updateprice,
        setUpdateprice,
        updatedefaultprice,
        setUpdatedefaultprice,
        updateoffer,
        setUpdateoffer,
        updateid,
        setUpdateid,
        open,
        setOpen,
        severity,
        setSeverity,
        updatemessage,
        setUpdatemessage,
    } = useContext(Mycontext);

    const navigate = useNavigate()

    useEffect(() => {
        restrictpage(navigate)
    }, [])

    return (
        <div className="update-container">
            <h1 className="update-heading">Update Product</h1>

            <div className="update-content">
                {/* Left Column: Image Upload */}
                <div className="update-image-section">
                    <label className="update-label">
                        Product Image:
                        <input
                            type="file"
                            onChange={(event) => handleupdateimagefile(event, setUpdateimage)}
                            className="update-input"
                        />
                    </label>

                    {updateimage && (
                        <img src={updateimage} alt="preview" className="update-preview" />
                    )}
                </div>

                {/* Right Column: Product Details */}
                <div className="update-form">
                    <label className="update-label">
                        Title:
                        <input
                            type="text"
                            value={updatetitle}
                            placeholder="Enter item title"
                            onChange={(e) => setUpdatetitle(e.target.value)}
                            className="update-input"
                        />
                    </label>

                    <label className="update-label">
                        Description:
                        <textarea
                            className="update-input update-textarea"
                            value={updatediscription}
                            placeholder="Enter item description"
                            onChange={(event) => setUpdatediscription(event.target.value)}
                        />
                    </label>

                    <label className="update-label">
                        Default Price:
                        <input
                            type="number"
                            value={updatedefaultprice}
                            placeholder="Enter default price"
                            onChange={(e) => setUpdatedefaultprice(e.target.value)}
                            className="update-input"
                        />
                    </label>

                    <label className="update-label">
                        Offer (%):
                        <input
                            type="number"
                            value={updateoffer}
                            placeholder="Enter discount %"
                            onChange={(e) => setUpdateoffer(e.target.value)}
                            className="update-input"
                        />
                    </label>

                    <label className="update-label">
                        Offer Price:
                        <input
                            type="number"
                            value={updateprice}
                            placeholder="Auto-calculated offer price"
                            className="update-input"
                            disabled
                        />
                    </label>

                    <button
                        className="update-button"
                        onClick={() =>
                            updateitem(
                                navigate,
                                count,
                                setCount,
                                updateimage,
                                setUpdateimage,
                                updatetitle,
                                setUpdatetitle,
                                updatediscription,
                                setUpdatediscription,
                                updateprice,
                                setUpdateprice,
                                updatedefaultprice,
                                setUpdatedefaultprice,
                                updateoffer,
                                setUpdateoffer,
                                updateid,
                                setUpdateid,
                                setOpen,
                                setSeverity,
                                setUpdatemessage
                            )
                        }
                    >
                        Update Product
                    </button>
                </div>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={500}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert severity={severity} onClose={() => setOpen(false)}>
                    {updatemessage}
                </Alert>
            </Snackbar>
        </div>

    );
};
