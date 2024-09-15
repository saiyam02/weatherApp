export const getForecastList = (data) =>{
    const forecastList = [];
    for(let i=0;i<5;i++){
        forecastList.push(data.list[i*8]);
    }
    return forecastList;
}