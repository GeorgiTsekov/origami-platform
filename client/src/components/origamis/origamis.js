import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from './origamis.module.css';
import Origami from '../origami/origami';
import getOrigami from "../../utils/origami";

const Origamis = (props) => {
    const [origamis, setOrigamis] = useState([]);
    const getOrigamis = useCallback(async () => {
        const origamis = await getOrigami(props.length);
        setOrigamis(origamis);
    }, [props.length]);

    const renderOrigamis = useMemo(() => {

        return origamis.map((origami, index) => {
            return (
                <Origami key={origami._id} index={index} {...origami} />
            )
        })
    }, [origamis])

    useEffect(() => {
        getOrigamis();
    }, [props.updatedOrigami, getOrigamis]);

    return (
        <div className={styles["origamis-wrapper"]}>
            {renderOrigamis}
        </div>
    )
}

export default Origamis;
