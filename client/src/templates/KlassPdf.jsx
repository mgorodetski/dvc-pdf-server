import React, { useEffect, useState } from "react";
import queryString from "query-string";

const styles = {
    pdfGramotaContainer: {
        fontFamily: "PT Sans",
        color: "#231F20",
        maxHeight: "210mm",
    },

    pdfGramotaBluebg: {
        marginTop: "-170mm",
        marginLeft: "15mm",
        marginRight: "10mm",
    },

    pdfGramotaText: {
        color: "#231F20",
        display: "flex",
        flexDirection: "column",
    },

    pdfGramotaPrehead: {
        fontSize: "1.5rem",
        color: "#231F20",
        marginTop: "115px",
    },

    pdfGramotaHead: {
        fontFamily: "Pribambas",
        fontSize: "50px",
        color: "#26A9E0",
    },

    pdfGramotaKlazz: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "38px",
        color: "#231F20",
    },

    pdfGramotaSubhead: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "24px",
        color: "#231F20",
        lineHeight: "150%"
    },

    pdfGramotaContent: {
        fontFamily: "PT Sans",
        fontSize: "24px",
        color: "#231F20",
        lineHeight: "140%"
    },

    pdfGramotaThankAlways: {
        paddingTop: "16px",
        fontSize: "26px",
        color: "#231F20",
    },

    pdfGramotaSignes: {
        display: "flex",
        flexDirection: "column",
    },

    pdfGramotaTitles: {
        display: "flex",
        flexDirection: "row",
    },

    pdfGramotaNutaName: {
        fontWeight: 700,
        fontSize: "28px",
    },

    pdfGramotaNutaTitle: {
        width: "169px",
        fontFamily: "PT Sans",
        fontStyle: "normal",
        fontSize: "16px",
        color: "#231F20",
    },

    pdfGramotaNutaSign: {
        backgroundRepeat: "no-repeat",
        height: "100px",
        left: "25.61%",
        right: "56.66%",
        top: "80.44%",
        bottom: "0%",
        transform: "matrix(0.99, -0.15, 0.15, 0.99, 0, 0)",
    },

    pdfGramotaLidaSign: {
        backgroundRepeat: "no-repeat",
        height: "100px",
        left: "60.61%",
        top: "80.44%",
        bottom: "0%",
    },

    pdfGramotaLidaName: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "28px",
        color: "#231F20",
        paddingLeft: "112px",
    },

    pdfGramotaLidaTitle: {
        width: "169px",
        fontFamily: "PT Sans",
        fontSize: "16px",
        color: "#231F20",
    },

    pdfGramotaLogoDouble: {
        backgroundRepeat: "no-repeat",
        height: "120px",
        paddingLeft: "200px",
        paddingBottom: "32px",
    },

    pomogaemFrame: {
        position: "relative",
        left: "780px",
        top: "-110px",
        width: "262px",
    },

    pomogaemBack: {
        width: "260px",
    },

    pdfGramotaPomogaem: {
        fontFamily: "Pribambas",
        fontSize: "2rem",
        color: "#F9FDFF",
        transform: "rotate(-9.07deg)",
        maxWidth: "fit-content",
        position: "absolute",
        top: "24px",
        left: "0",
        right: "0",
        margin: "auto"
    },
};

const KlassPdf = (props) => {
    const [queryState, setQuery] = useState({});
    useEffect(() => {
        let query = queryString.parse(props.location && props.location.search);
        setQuery(query);
    }, [props.location]);

    const ageWord = ageToStr(queryState.years);

    function ageToStr(age) {
        let txt = "";
        let count = age % 100;
        if (count >= 5 && count <= 20) {
            txt = "лет";
        } else {
            count = count % 10;
            if (count === 1) {
                txt = "год";
            } else if (count >= 2 && count <= 4) {
                txt = "года";
            } else {
                txt = "лет";
            }
        }
        return txt;
    }

    return (
        <div className="super-main" style={styles.pdfGramotaContainer}>
            <img
                src="https://i.postimg.cc/90K6GKNb/headerblue.png"
                style={styles.pdfTeacherHeaderImg}
                alt=""
            />

            <div style={styles.pdfGramotaBluebg}>
                <div style={styles.pomogaemFrame}>
                    <img src="https://i.postimg.cc/kX8JTvFG/pomogaem-Frame.png" style={styles.pomogaemBack} alt="" />
                    <div style={styles.pdfGramotaPomogaem}>
                        {queryState.years > 0
                            ? `Помогаем ${queryState.years} ${ageWord}!`
                            : "1 сентября"}
                    </div>
                </div>

                <div style={styles.pdfGramotaText}>
                    <div style={styles.pdfGramotaPrehead}>
                        Участникам благотворительной акции
                    </div>
                    <div style={styles.pdfGramotaHead}>"ДЕТИ ВМЕСТО ЦВЕТОВ - 2023"</div>
                    <div style={styles.pdfGramotaKlazz}>
                        {queryState.klass} класс, {queryState.school} школа,  г. {queryState.city}
                    </div>
                    <div style={styles.pdfGramotaSubhead}>
                        Спасибо, что вместе с Фондами «Вера» и «Дом с маяком» вы помогаете
                        неизлечимо больным детям жить, развиваться, мечтать и быть
                        счастливыми — насколько возможно.
                    </div>
                    <div style={styles.pdfGramotaContent}>
                        В 2022 году мы поддерживаем более 1060 детей. Они из разных уголков
                        России и с разными диагнозами, но никто не останется с болезнью один
                        на один. Благодаря вам у них появятся манёвренные электроколяски и
                        такие нужные медицинские расходники. Кто-то впервые выйдет из дома
                        на улицу, а кто-то наконец переедет из больницы домой или сможет
                        учиться сидя, а не лёжа.
                    </div>

                    <div style={styles.pdfGramotaThankAlways}>Спасибо вам всегда,</div>
                    <div style={styles.pdfGramotaSignes}>
                        <div style={styles.pdfGramotaTitles}>
                            <p style={styles.pdfGramotaNutaName}>НЮТА ФЕДЕРМЕССЕР</p>
                            <p style={styles.pdfGramotaLidaName}>ЛИДА МОНИАВА</p>
                        </div>
                        <div style={styles.pdfGramotaTitles}>
                            <div style={styles.pdfGramotaNutaTitle}>
                                Учредитель и член Управляющего совета Фонда помощи «Вера»
                            </div>

                            <img
                                src="https://i.postimg.cc/rmg1MV2z/nutasignbig.png"
                                style={styles.pdfGramotaNutaSign}
                                alt=""
                            />

                            <div style={styles.pdfGramotaLidaTitle}>
                                Учредитель Фонда «Дом с маяком»
                            </div>
                            <img
                                src="https://i.postimg.cc/D0ycXWPq/lidasignbig.png"
                                style={styles.pdfGramotaLidaSign}
                                alt=""
                            />
                            <img
                                style={styles.pdfGramotaLogoDouble}
                                src="https://i.postimg.cc/2ycvzMjy/doublelogo.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KlassPdf;
