import React, { useEffect, useState } from "react";
import queryString from "query-string";

const styles = {
    KlassPdfContainer: {
        fontFamily: "PT Sans",
        color: "#231F20",
        maxHeight: "210mm",
        
    },

    KlassPdfBluebg: {
        marginTop: "-170mm",
        marginLeft: "15mm",
        marginRight: "10mm",
    },

    KlassPdfPomogaem: {
        fontFamily: "Pribambas",
        fontSize: "34px",
        color: "#F9FDFF",
        transform: "rotate(-9.07deg)",
        paddingLeft: "820px",
        maxWidth: "fit-content",
        marginTop: "-40px",
        position: "fixed",
    },

    KlassPdfText: {
        fontFamily: "PT Sans",
        fontSize: "14px",
        color: "#231F20",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },

    KlassPdfPrehead: {
        fontSize: "24px",
        color: "#231F20",
        marginTop: "155px",
    },

    KlassPdfHead: {
        fontFamily: "Pribambas",
        fontSize: "50px",
        color: "#26A9E0",
    },

    KlassPdfKlazz: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "38px",
        color: "#231F20",
    },

    KlassPdfSubhead: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "24px",
        color: "#231F20",
        lineHeight: "150%"
    },

    KlassPdfContent: {
        fontFamily: "PT Sans",
        fontSize: "24px",
        color: "#231F20",
        lineHeight: "140%"
    },

    KlassPdfThankAlways: {
        paddingTop: "16px",
        fontSize: "26px",
        color: "#231F20",
    },

    KlassPdfSignes: {
        display: "flex",
        flexDirection: "column",
    },

    KlassPdfTitles: {
        display: "flex",
        flexDirection: "row",
    },

    KlassPdfNutaName: {
        fontWeight: 700,
        fontSize: "28px",
    },

    KlassPdfNutaTitle: {
        width: "169px",
        fontFamily: "PT Sans",
        fontStyle: "normal",
        fontSize: "16px",
        color: "#231F20",
    },

    KlassPdfNutaSign: {
        backgroundRepeat: "no-repeat",
        height: "100px",
        left: "25.61%",
        right: "56.66%",
        top: "80.44%",
        bottom: "0%",
        transform: "matrix(0.99, -0.15, 0.15, 0.99, 0, 0)",
    },

    KlassPdfLidaSign: {
        backgroundRepeat: "no-repeat",
        height: "100px",
        left: "60.61%",
        top: "80.44%",
        bottom: "0%",
    },

    KlassPdfLidaName: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "28px",
        color: "#231F20",
        paddingLeft: "112px",
    },

    KlassPdfLidaTitle: {
        width: "169px",
        fontFamily: "PT Sans",
        fontSize: "16px",
        color: "#231F20",
    },

    KlassPdfLogoDouble: {
        backgroundRepeat: "no-repeat",
        height: "120px",
        paddingLeft: "200px",
        paddingBottom: "32px",
    },
};

const KlassPdf = (props) => {
    const [queryState, setQuery] = useState({});
    useEffect(() => {
        let query = queryString.parse(props.location && props.location.search);
        setQuery(query);
        console.log(query);
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
        <div className="super-main" style={styles.KlassPdfContainer}>
            <img
                src="https://i.postimg.cc/DzTx4TXZ/headerblue.png"
                style={styles.pdfTeacherHeaderImg}
                alt=""
            ></img>

            <div style={styles.KlassPdfBluebg}>
                <div style={styles.KlassPdfPomogaem}>
                    {queryState.years > 0
                        ? `Помогаем ${queryState.years} ${ageWord}!`
                        : "1 сентября"}
                </div>
                <div style={styles.KlassPdfText}>
                    <div style={styles.KlassPdfPrehead}>
                        Участникам благотворительной акции
                    </div>
                    <div style={styles.KlassPdfHead}>"ДЕТИ ВМЕСТО ЦВЕТОВ - 2023"</div>
                    <div style={styles.KlassPdfKlazz}>
                        {queryState.klass} класс, {queryState.school} школа,  г. {queryState.city}
                    </div>
                    <div style={styles.KlassPdfSubhead}>
                        Спасибо, что вместе с Фондами «Вера» и «Дом с маяком» вы помогаете
                        неизлечимо больным детям жить, развиваться, мечтать и быть
                        счастливыми — насколько возможно.
                    </div>
                    <div style={styles.KlassPdfContent}>
                        В 2022 году мы поддерживаем более 1060 детей. Они из разных уголков
                        России и с разными диагнозами, но никто не останется с болезнью один
                        на один. Благодаря вам у них появятся манёвренные электроколяски и
                        такие нужные медицинские расходники. Кто-то впервые выйдет из дома
                        на улицу, а кто-то наконец переедет из больницы домой или сможет
                        учиться сидя, а не лёжа.
                    </div>

                    <div style={styles.KlassPdfThankAlways}>Спасибо вам всегда,</div>
                    <div style={styles.KlassPdfSignes}>
                        <div style={styles.KlassPdfTitles}>
                            <p style={styles.KlassPdfNutaName}>НЮТА ФЕДЕРМЕССЕР</p>
                            <p style={styles.KlassPdfLidaName}>ЛИДА МОНИАВА</p>
                        </div>
                        <div style={styles.KlassPdfTitles}>
                            <div style={styles.KlassPdfNutaTitle}>
                                Учредитель и член Управляющего совета Фонда помощи «Вера»
                            </div>

                            <img
                                src="https://i.postimg.cc/rmg1MV2z/nutasignbig.png"
                                style={styles.KlassPdfNutaSign}
                                alt=""
                            />

                            <div style={styles.KlassPdfLidaTitle}>
                                Учредитель Фонда «Дом с маяком»
                            </div>
                            <img
                                src="https://i.postimg.cc/D0ycXWPq/lidasignbig.png"
                                style={styles.KlassPdfLidaSign}
                                alt=""
                            />
                            <img
                                style={styles.KlassPdfLogoDouble}
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