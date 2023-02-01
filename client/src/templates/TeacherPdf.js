import React, { useEffect, useState } from "react";
import queryString from "query-string";

const styles = {
    pdfTeacherPage: {
        fontFamily: "PT Sans",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "5.7mm",
        lineHeight: "126%",
        color: "#231F20",
        padding: "20mm 25mm",
    },

    pdfTeacherHeaderImg: {
        maxWidth: "100%",
    },

    pdfTeacherTeacherfio: {
        fontWeight: 700,
        fontFamily: "inherit",
        marginTop: "32px",
        marginBottom: "16px",
        fontSize: "9.8mm",
    },

    p: {
        marginTop: "16px",
        fontSize: "6.7mm",
    },

    pdfTeacherSubhead: {
        fontWeight: "700",
        fontSize: "7.7mm",
        paddingTop: "3mm",
        marginTop: "32px",
    },

    pdfTeacherMaincontent: {
        paddingTop: "5.5mm",
        width: "90%",
    },

    pdfTeacherNezavyanet: {
        fontFamily: "Pribambas",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "9.8mm",
        color: "#26A9E0",
        marginTop: "32px",
    },

    pdfTeacherThankAlways: {
        paddingTop: "16mm",
        fontFamily: "PT Sans",
        fontStyle: "normal",
        fontWeight: 400,
        color: "#231F20",
    },

    pdfTeacherSignes: {
        marginTop: "32px",
        display: "flex",
        justifyContent: "space-between",
    },

    pdfTeacherDescription: {
        display: "flex",
        flexDirection: "column",
    },

    pdfTeacherNutaName: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        color: "#231F20",
    },

    pdfTeacherNutaTitle: {
        width: "216px",
        fontFamily: "PT Sans",
        fontStyle: "normal",
        fontWeight: 400,
        color: "#231F20",
        zIndex: 3,
    },

    pdfTeacherLidaName: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        color: "#231F20",
    },

    pdfTeacherLidaTitle: {
        width: "100px",
        fontFamily: "PT Sans",
        fontStyle: "normal",
        fontWeight: 400,
        color: "#231F20",
    },

    pdfTeacherSign: {
        maxWidth: "100%",
        maxHeight: "100px",
        transform: "translate(-25%, 40%)",
    },

    pdfTeacherSignImages: {
        display: "flex",
        justifyContent: "space-between",
    },

    pdfTeacher: {
        display: "flex",
        gap: "16px",
    },
};

const TeacherPdf = (props) => {
    const [queryState, setQuery] = useState({});

    useEffect(() => {
        let query = queryString.parse(props.location && props.location.search);
        setQuery(query);
        console.log(query);
    }, [props.location]);

    return (
        <div style={styles.pdfTeacherPage}>
            <img
                src="https://i.postimg.cc/4dvqFbfB/teacherthanktopbig.png"
                style={styles.pdfTeacherHeaderImg}
                alt=""
            ></img>
            <div style={styles.pdfTeacherContent}>
                <div style={styles.pdfTeacherTeacherfio}>{queryState.name},</div>
                <div style={styles.pdfTeacherSubhead}>
                    Спасибо, что выбрали вместо цветов — детей.
                </div>
                <div style={styles.pdfTeacherMaincontent}>
                    <p style={styles.p}>
                        Мы верим, что личный пример милосердия, сострадания и гуманизма был
                        и остаётся самым действенным. Что бы ни случилось в жизни, и какой
                        бы диагноз ни поставили (особенно детям), люди вокруг всегда могут
                        помочь. Не всегда вылечить, но сделать жизнь лучше и полнее.
                    </p>
                    <p style={styles.p}>
                        В 2022 году Фонд «Вера» и Фонд «Дом с маяком» помогают более 1060
                        неизлечимо больным детям. У каждого ребёнка своя история, за каждым
                        ребёнком — целый мир. Спасибо, что помогаете им жить, взрослеть и
                        развиваться.
                    </p>
                    <p style={styles.p}>
                        Собранные благодаря вам деньги станут лечебным питанием, средствами
                        гигиены, специальными трубками и аппаратами для дыхания, юридической
                        и психологической помощью семьям. Так больше времени останется для
                        любви, а не для болезни.
                    </p>
                </div>
                <div style={styles.pdfTeacherNezavyanet}>ваша помощь не завянет</div>
                <p style={styles.pdfTeacherThankAlways}>
                    С благодарностью и надеждой на долгую дружбу,
                </p>
                <div style={styles.pdfTeacherSignes}>
                    <div style={styles.pdfTeacher}>
                        <div style={styles.pdfTeacherDescription}>
                            <p style={styles.pdfTeacherNutaName}>НЮТА ФЕДЕРМЕССЕР</p>
                            <div style={styles.pdfTeacherNutaTitle}>
                                Учредитель и член Управляющего совета Фонда помощи «Вера»
                            </div>
                        </div>
                        <img
                            src="https://i.postimg.cc/rmg1MV2z/nutasignbig.png"
                            style={styles.pdfTeacherSign}
                            alt=""
                        />
                    </div>
                    <div style={styles.pdfTeacher}>
                        <div style={styles.pdfTeacherDescription}>
                            <p style={styles.pdfTeacherLidaName}>ЛИДА МОНИАВА</p>
                            <div style={styles.pdfTeacherLidaTitle}>
                                Учредитель Фонда «Дом с маяком»{" "}
                            </div>
                        </div>
                        <img
                            src="https://i.postimg.cc/D0ycXWPq/lidasignbig.png"
                            style={styles.pdfTeacherSign}
                            alt=""
                        />
                    </div>
                    <div style={styles.pdfTeacherTitles}></div>
                </div>
                <div style={styles.pdfTeacherSignImages}></div>
            </div>
        </div>
    );
};

export default TeacherPdf;