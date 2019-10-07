
const getQuery = url =>{
    let Url = url || window.location.href;
    let result = {};
    let str = Url.split('?')[1];
    let arr = str.split('&');
    arr.forEach(item =>{
        let key = item.split('=')[0];
        let value = item.split('=')[1];
        result[key] = value;
    });
    return result;
};


export default {
    getQuery
}


