import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import "./GlassForPreference.css";
import Preference from "../components/Preference";

const GlassForPreference = () => (
    <div className="cont">
        <div className="glasspref">
            <div className="d-flex">
            <Preference />
            </div>
        </div>
    </div>
);

export default GlassForPreference;