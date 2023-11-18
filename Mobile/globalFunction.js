import axios from "axios";
export const listDayIndex = ["จันทร์", 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์']
export const listMonth_th = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
];
export function getDay(day) {
    return listDayIndex[day - 1]
}

export function getTypeJob() {
    const list = [
        "ร้านอาหาร", "โรงงานอุตสาหกรรม", "สถานบริการ", 
        "สถานบันเทิง", "โรงงานผลิตสิ่งทอผ้า",
        "โรงเรียน/สถานศึกษา", "งานขนส่งสินค้า", "งานตามขอบเขต",
    ]
    return list;
}

export function getMonth(month) {
    console.log("Get Month", month);
    return listMonth_th[month]
}

export async function getAddressMap(address) {

    const key = 'AIzaSyA-qMZH7RHVDaKHMp-41EuPuP2-VSYwDGE';
    console.log("API: ", `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=มินิบิ๊กซี%20นิคมลาดกระบัง%202&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyA-qMZH7RHVDaKHMp-41EuPuP2-VSYwDGE`);
    // const map = await axios.get(
    //     `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${key}`
    // );
    const map = await axios.get(
        `http://127.0.0.1:5000/map`
    );
    console.log(map.data);
    return map.data;
}