import React, { useEffect, useState } from "react";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../card/card";
import Filters from "../filter/filter";
import Carousel from "../carousel/carousel";

export default function Section({ title, data, filterSoucre, type, showToggle }) {
    const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouseltoggle, setCarousel] = useState(true);

    const handleToggle = () => {
        setCarousel((prevState) => !prevState);
    };

    useEffect(() => {
        if (filterSoucre) {
            filterSoucre().then((response) => {
                const { data } = response;
                setFilters([...filters, ...data]);
            });
        }
    }, []);

    const showfilters = filters.length > 1;
    const cardsToRender = data.filter((card) =>
        showfilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : card
    );

    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.header}>
                <h3>{title}</h3>
                {showToggle && (
                    <h4 className={styles.toggletext} onClick={handleToggle}>
                        {!carouseltoggle ? "Collapse All" : "Show All"}
                    </h4>
                )}
            </div>
            {showfilters && (
                <div className={styles.filterWrapper}>
                    <Filters
                        filters={filters}
                        selectedFilterIndex={selectedFilterIndex}
                        setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                </div>
            )}
            {data.length === 0 ? (
                <CircularProgress />
            ) : (
                <div className={styles.cardwrapper}>
                    {!carouseltoggle ? (
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele, index) => (
                                <Card key={index} data={ele} type={type} />
                            ))}
                        </div>
                    ) : (
                        <Carousel
                            data={cardsToRender}
                            renderComponent={(data) => <Card key={data.id} data={data} type={type} />}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
