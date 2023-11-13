import React, { useState, useEffect } from "react";
import styles from "./route.module.css"
import NumerologyData from "../../../Components/Calculate/CalculateNumber";
import FullName from "../../../Components/Calculate/CalculateChar";
import RandomChar from "./RandomChar";
import "bootstrap/dist/css/bootstrap.css";



const BgRoute = () => {
    const { numMain, day, month, year } =
        NumerologyData();
    const { normalizedFullName } = FullName()
    return (
        <div className={styles.bgRouteContainer}>

            <div className={styles.nameAndBirthday}>
                <p className="d-flex text-uppercase">{normalizedFullName}</p>
                <p>{day}/{month}/{year}</p>
            </div>

            <div className={styles.route}>
                <div className={styles.routeCenter}>
                    <div className={styles.numMain}>{numMain}</div>
                </div>
                <RandomChar />
                {/* <div className={styles.button}><PrimaryButton to='/getpass' btn primary>Xem Ngay Miễn Phí</PrimaryButton></div> */}
            </div>

        </div>
    )
}
export default BgRoute