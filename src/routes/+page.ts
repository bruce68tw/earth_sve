/* eslint-disable @typescript-eslint/no-explicit-any */
import _Ajax from "@base/ts/_Ajax";
import _Chart from "@base/ts/_Chart";
import _Date from "@base/ts/_Date";

export const ssr = false;

export async function load() {
    const json = await _Ajax.getJsonA('/Home/GetData', false, {}, false);

    //Bar資料由下到上依次:庫存、出貨、在途庫存
    return {
        typeUse: _Chart.xySwap(json.typeUse, ['Name','StockAmount','OutputAmount','StockWayAmount']),
        short10: _Chart.xySwap(json.short10, ['Name','Amount']),
        donatePct: _Chart.xySwap(json.donatePct, ['Name','Amount']),
        top5Item: getTop5Item(json.top5Item),
    };
}

//Name,OutputDate,Amount
function getTop5Item(rows:any[]):any {
    if (rows == null || rows.length == 0) return {};

    //get Item name list
    const itemNames = [...new Set(rows.map(row => row.Name))];

    //今天以前7個日期陣列
    const today = new Date();
    const dates:string[] = [];
    for (let i=7; i > 0; i--) {
        const date2 = new Date();
        date2.setDate(today.getDate() - i);
        dates.push(_Date.toUiDate(date2));
    }

    //get 日期-Amount[][]
    const amounts: number[][] = [];
    itemNames.forEach(name => {
        const itemData: number[] = new Array(7).fill(0);
        const itemRows = rows.filter(row => row.Name === name);    
        for (let i=0; i < itemRows.length; i++) {
            const outputDate = _Date.dsToUi(itemRows[i].OutputDate);
            const find = dates.indexOf(outputDate);
            itemData[find] = itemRows[i].Amount;
        }
        amounts.push(itemData);
    });    

    return {
        titles: itemNames,
        labels: dates,
        values: amounts,
    };
}
